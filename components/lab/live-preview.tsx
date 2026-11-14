"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { runComponent } from "@/lib/lab/run-code";

class ErrorBoundary extends React.Component<{ children: React.ReactNode; onError?: (e: string)=>void }, { err: string | null }> {
  state = { err: null as string | null };
  static getDerivedStateFromError(error: unknown) { return { err: error instanceof Error ? error.message : String(error) }; }
  componentDidCatch(error: unknown) { this.props.onError?.(error instanceof Error ? error.message : String(error)); }
  render() { if (this.state.err) return <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"><div className="font-semibold mb-1">Runtime error</div><pre className="whitespace-pre-wrap text-xs">{this.state.err}</pre></div>; return this.props.children as React.ReactElement; }
}

export function LivePreview({ code, autorun = true }: { code: string; autorun?: boolean }) {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  function run() {
    const res = runComponent(code);
    if (res.ok) { setComp(() => res.Component); setError(null); setKey(k => k + 1); }
    else { setComp(null); setError(res.error); }
  }

  useEffect(() => {
    if (!autorun) return;
    const t = setTimeout(run, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, autorun]);

  return (
    <div className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line bg-canvas/60 px-3 py-2">
        <span className="text-[13px] font-medium text-mist">Live visual output</span>
        <button onClick={run} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[12px] font-medium text-muted hover:text-mist"><RefreshCw className="size-3.5" />Run</button>
      </div>
      <div className="flex-1 overflow-auto p-3 sm:p-4">
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <div className="mb-1 flex items-center gap-2 font-semibold"><AlertTriangle className="size-4" />Compile / run error</div>
            <pre className="whitespace-pre-wrap text-xs leading-5">{error}</pre>
          </div>
        ) : Comp ? (
          <ErrorBoundary key={key}>
            <div className="bootstrap-preview"><Comp /></div>
          </ErrorBoundary>
        ) : (
          <div className="text-sm text-faint">Running...</div>
        )}
      </div>
    </div>
  );
}
