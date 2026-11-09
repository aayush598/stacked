import { NoteCallout, NoteCode, NoteHeading, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function SpecialTypesComparisonNote() {
  return (
    <div>
      <NoteLead>
        <code className="font-mono text-lime">never</code>, <code className="font-mono text-lime">void</code>,{" "}
        <code className="font-mono text-lime">any</code>, and <code className="font-mono text-lime">unknown</code> look
        related, but they solve different problems. Choosing the right one is a core TypeScript skill.
      </NoteLead>
      <NoteHeading eyebrow="Comparison">What each type means</NoteHeading>
      <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="min-w-full text-left text-[13px]">
          <thead className="bg-canvas/60 text-faint">
            <tr>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Meaning</th>
              <th className="px-4 py-3 font-semibold">Safe operations</th>
              <th className="px-4 py-3 font-semibold">Use for</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-t border-line"><td className="px-4 py-3 font-mono text-mist">void</td><td className="px-4 py-3">No meaningful return value</td><td className="px-4 py-3">Caller ignores result</td><td className="px-4 py-3">Side effects, callbacks</td></tr>
            <tr className="border-t border-line"><td className="px-4 py-3 font-mono text-mist">never</td><td className="px-4 py-3">No value can occur</td><td className="px-4 py-3">None</td><td className="px-4 py-3">Throws, exhaustiveness</td></tr>
            <tr className="border-t border-line"><td className="px-4 py-3 font-mono text-mist">any</td><td className="px-4 py-3">Type checking disabled</td><td className="px-4 py-3">Anything allowed (unsafe)</td><td className="px-4 py-3">Migration escape hatch</td></tr>
            <tr className="border-t border-line"><td className="px-4 py-3 font-mono text-mist">unknown</td><td className="px-4 py-3">Type not known yet</td><td className="px-4 py-3">Only after narrowing</td><td className="px-4 py-3">External/untrusted data</td></tr>
          </tbody>
        </table>
      </div>
      <NoteCode
        filename="comparison.ts"
        code={`function log(): void { console.log("hi"); }
function fail(): never { throw new Error("boom"); }

let unsafe: any = JSON.parse(input);
unsafe.anything.goes(); // allowed

let safe: unknown = JSON.parse(input);
if (typeof safe === "object" && safe !== null) {
  // validate shape, then use
}`}
      />
      <NoteCallout tone="warning">Default rule: avoid <strong className="text-mist">any</strong>, prefer <strong className="text-mist">unknown</strong> at boundaries, use <strong className="text-mist">void</strong> for ignored returns, and use <strong className="text-mist">never</strong> for impossible states.</NoteCallout>
      <NoteTakeaways items={["void can finish; never cannot.", "any is unsafe freedom; unknown is safe uncertainty.", "Exhaustive checks rely on never."]} />
    </div>
  );
}
