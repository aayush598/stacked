export function TypeAnatomyDiagram() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-canvas/60 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 font-mono text-[15px]">
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-violet">
          const
        </span>
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-mist">
          user
        </span>
        <span className="text-faint">:</span>
        <span className="rounded-md border border-lime/25 bg-lime/[0.07] px-2 py-1 text-lime">
          User
        </span>
        <span className="text-faint">=</span>
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-mist">
          {"{ ... }"}
        </span>
      </div>
      <div className="mt-4 grid gap-2 text-[13px] sm:grid-cols-4">
        {[
          ["keyword", "value declaration"],
          ["name", "the variable"],
          ["annotation", "the contract"],
          ["value", "the runtime data"],
        ].map(([label, hint]) => (
          <div key={label} className="rounded-lg border border-line bg-surface px-3 py-2">
            <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-faint">
              {label}
            </p>
            <p className="mt-1 text-muted">{hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
