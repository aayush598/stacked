"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { runComponent } from "@/lib/lab/run-code";

const PREVIEW_DOCUMENT = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/vendor/bootstrap.min.css" />
<style>
  html, body { margin: 0; }
  body {
    padding: 16px;
    background: #ffffff;
    color: #212529;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  *, *::before, *::after { box-sizing: border-box; }
</style>
</head>
<body></body>
</html>`;

class ErrorBoundary extends React.Component<{ children: React.ReactNode; onError?: (e: string) => void }, { err: string | null }> {
  state = { err: null as string | null };
  static getDerivedStateFromError(error: unknown) { return { err: error instanceof Error ? error.message : String(error) }; }
  componentDidCatch(error: unknown) { this.props.onError?.(error instanceof Error ? error.message : String(error)); }
  render() {
    if (this.state.err) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <div className="font-semibold mb-1">Runtime error</div>
          <pre className="whitespace-pre-wrap text-xs">{this.state.err}</pre>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}

export function LivePreview({ code, autorun = true }: { code: string; autorun?: boolean }) {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [frameBody, setFrameBody] = useState<HTMLElement | null>(null);

  function run() {
    const res = runComponent(code);
    if (res.ok) {
      setComp(() => res.Component);
      setError(null);
      setKey((k) => k + 1);
    } else {
      setComp(null);
      setError(res.error);
    }
  }

  useEffect(() => {
    if (!autorun) return;
    const t = setTimeout(run, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, autorun]);

  useEffect(() => {
    const frame = frameRef.current;
    const body = frame?.contentDocument?.body;
    if (body) setFrameBody(body);
  }, []);

  function handleFrameLoad() {
    const body = frameRef.current?.contentDocument?.body;
    if (body) setFrameBody(body);
  }

  return (
    <div className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-canvas/60 px-3 py-2">
        <span className="text-[13px] font-medium text-mist">Live visual output</span>
        <button onClick={run} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[12px] font-medium text-muted hover:text-mist"><RefreshCw className="size-3.5" />Run</button>
      </div>
      <div className="relative min-h-0 flex-1">
        <iframe
          ref={frameRef}
          title="Live preview"
          srcDoc={PREVIEW_DOCUMENT}
          onLoad={handleFrameLoad}
          className="h-full w-full border-0 bg-white"
        />
        {error ? (
          <div className="absolute inset-0 overflow-auto bg-white p-3 sm:p-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <div className="mb-1 flex items-center gap-2 font-semibold"><AlertTriangle className="size-4" />Compile / run error</div>
              <pre className="whitespace-pre-wrap text-xs leading-5">{error}</pre>
            </div>
          </div>
        ) : !Comp || !frameBody ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white text-sm text-faint">Running...</div>
        ) : null}
      </div>
      {Comp && frameBody
        ? createPortal(
            <ErrorBoundary key={key} onError={(message) => { setError(message); setComp(null); }}>
              <div className="bootstrap-preview"><Comp /></div>
            </ErrorBoundary>,
            frameBody
          )
        : null}
    </div>
  );
}
