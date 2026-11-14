import React from "react";
import ts from "typescript";

export type RunResult = { ok: true; Component: React.ComponentType } | { ok: false; error: string };

function createMockAxios(): unknown {
  const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
  const respond = async (url: string, data?: unknown, method = "GET") => {
    await delay(450);
    const lower = String(url).toLowerCase();
    if (lower.includes("upload")) {
      const asObj = data && typeof data === "object" ? (data as { get?: unknown }) : null;
      return { data: { message: "Uploaded successfully (mock)", files: "received", note: asObj?.get ? "(FormData)" : "" }, status: 201, statusText: "Created", headers: {}, config: {} as Record<string, unknown> };
    }
    if (method === "POST" || method === "PUT" || method === "PATCH") {
      return { data: { message: "Saved successfully (mock API)", method, id: 101, data }, status: 200, statusText: "OK", headers: {}, config: {} as Record<string, unknown> };
    }
    return { data: { message: "Fetched (mock API)", url, data: [{ id: 1, name: "Demo" }, { id: 2, name: "Sample" }] }, status: 200, statusText: "OK", headers: {}, config: {} as Record<string, unknown> };
  };
  const inst: Record<string, unknown> = {
    get: (url: string, config?: unknown) => respond(url, config, "GET"),
    post: (url: string, data?: unknown) => respond(url, data, "POST"),
    put: (url: string, data?: unknown) => respond(url, data, "PUT"),
    patch: (url: string, data?: unknown) => respond(url, data, "PATCH"),
    delete: (url: string) => respond(url, undefined, "DELETE"),
    defaults: { headers: { common: {} } },
    interceptors: { request: { use: () => 0 }, response: { use: () => 0 } },
  };
  inst.create = () => createMockAxios();
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
  const g = globalThis as unknown as { fetch: typeof fetch };
  const prevFetch = g.fetch;
  try {
    const mockAxios = createMockAxios();
    g.fetch = async (url: RequestInfo | URL, init?: RequestInit) => {
      await new Promise((r) => setTimeout(r, 450));
      let body: unknown = null;
      if (init?.body) {
        try { body = typeof init.body === "string" ? JSON.parse(init.body) : init.body; } catch { body = init.body; }
      }
      return {
        ok: true,
        status: 201,
        json: async () => ({ message: "Saved (mock server)", url: String(url), method: init?.method || "GET", data: body }),
        text: async () => JSON.stringify({ message: "Saved (mock server)", data: body }),
      } as unknown as Response;
    };

    const exportsObj: Record<string, unknown> = {};
    const moduleObj = { exports: exportsObj };
    const require = (name: string) => {
      if (name === "react") return React;
      if (name === "axios") return mockAxios;
      throw new Error(`Module not available in playground: "${name}". Allowed: react, axios (permitted stack).`);
    };
    const fn = new Function("React", "require", "exports", "module", "axios", tr.js) as (
      R: typeof React, req: (n: string) => unknown, exp: Record<string, unknown>, mod: { exports: Record<string, unknown> }, ax: unknown
    ) => void;
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
    g.fetch = prevFetch;
  }
}
