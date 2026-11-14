import React from "react";
import axiosBase from "axios";
import ts from "typescript";

export type RunResult = { ok: true; Component: React.ComponentType } | { ok: false; error: string };

function createMockAxios() {
  const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
  const respond = async (url: string, data?: unknown, method = "GET") => {
    await delay(450);
    const lower = String(url).toLowerCase();
    if (lower.includes("upload")) {
      return { data: { message: "Uploaded successfully (mock)", files: "received", note: (data as any)?.get ? "(FormData)" : "" }, status: 201, statusText: "Created", headers: {}, config: {} as any };
    }
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      return { data: { message: "Saved successfully (mock API)", method, id: 101, data }, status: 200, statusText: "OK", headers: {}, config: {} as any };
    }
    return { data: { message: "Fetched (mock API)", url, data: [{ id: 1, name: "Demo" }, { id: 2, name: "Sample" }] }, status: 200, statusText: "OK", headers: {}, config: {} as any };
  };
  const inst: any = {
    get: (url: string, config?: any) => respond(url, config, "GET"),
    post: (url: string, data?: any) => respond(url, data, "POST"),
    put: (url: string, data?: any) => respond(url, data, "PUT"),
    patch: (url: string, data?: any) => respond(url, data, "PATCH"),
    delete: (url: string) => respond(url, undefined, "DELETE"),
    defaults: { headers: { common: {} } },
    interceptors: { request: { use: () => 0 }, response: { use: () => 0 } },
    create: () => createMockAxios(),
  };
  return inst;
}

export function transpile(source: string): { ok: true; js: string } | { ok: false; error: string } {
  try {
    const out = ts.transpileModule(source, {
      compilerOptions: {
        jsx: ts.JsxEmit.React,
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
      },
      reportDiagnostics: true,
      fileName: "App.tsx",
    });
    if (out.diagnostics && out.diagnostics.length) {
      const fatal = out.diagnostics.filter((d) => d.category === ts.DiagnosticCategory.Error);
      if (fatal.length && !out.outputText) {
        const msg = fatal.map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n")).join("\n");
        return { ok: false, error: msg };
      }
    }
    return { ok: true, js: out.outputText || "" };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

export function runComponent(source: string): RunResult {
  const tr = transpile(source);
  if (!tr.ok) return tr;
  const prevFetch = globalThis.fetch;
  try {
    const mockAxios = createMockAxios();
    // mock fetch for examples that use fetch()
    (globalThis as any).fetch = async (url: any, init?: any) => {
      await new Promise((r) => setTimeout(r, 450));
      const body = init?.body ? (() => { try { return JSON.parse(init.body); } catch { return init.body; } })() : null;
      return {
        ok: true,
        status: 201,
        json: async () => ({ message: "Saved (mock server)", url: String(url), method: init?.method || "GET", data: body }),
        text: async () => JSON.stringify({ message: "Saved (mock server)", data: body }),
      } as any;
    };

    const exportsObj: Record<string, unknown> = {};
    const moduleObj = { exports: exportsObj };
    const require = (name: string) => {
      if (name === "react") return React;
      if (name === "axios") return mockAxios;
      throw new Error(`Module not available in playground: "${name}". Allowed: react, axios (permitted stack).`);
    };
    // eslint-disable-next-line no-new-func
    const fn = new Function("React", "require", "exports", "module", "axios", tr.js);
    fn(React, require, exportsObj, moduleObj, mockAxios);
    const mod = moduleObj.exports as Record<string, unknown>;
    const Comp =
      (typeof mod.default === "function" ? (mod.default as React.ComponentType) : null) ||
      (typeof mod.App === "function" ? (mod.App as React.ComponentType) : null) ||
      (Object.values(mod).find((v) => typeof v === "function") as React.ComponentType | undefined) ||
      null;
    if (!Comp) return { ok: false, error: "No React component found. Export a component as `export default function App()`." };
    return { ok: true, Component: Comp };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  } finally {
    (globalThis as any).fetch = prevFetch;
  }
}
