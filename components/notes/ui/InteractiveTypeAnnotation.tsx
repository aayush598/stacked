"use client";

export function InteractiveTypeAnnotation() {
  return (
    <div className="relative rounded-lg border border-line bg-surface p-6 transition-colors hover:bg-surface/80">
      <details className="group">
        <summary className="flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-mist">
          Type Annotation
          <svg className="size-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>
        <div className="mt-4 text-[13px] leading-relaxed text-muted">
          <p>
            A type annotation explicitly tells TypeScript what type of value a variable, parameter, property, or
            return value is expected to have. In other words, you declare a contract that the value must satisfy.
          </p>
          <pre className="mt-2 overflow-x-auto rounded-md bg-canvas/50 p-3">
            <code className="font-mono text-[12px] text-mist">let age: number = 25;</code>
          </pre>
        </div>
      </details>
    </div>
  );
}