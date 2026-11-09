import { InlineCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ArrayTupleMockup, SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function TupleTypesNote() {
  return (
    <div>
      <NoteLead>Tuples are fixed-position arrays where each index can have a specific type and meaning. Use them for small structured records like <InlineCode>[id, name]</InlineCode> or <InlineCode>[lat, lng]</InlineCode>.</NoteLead>
      <ArrayTupleMockup />
      <SyntaxPlayground options={[
        { label: "Basic tuple", code: `let user: [number, string];\nuser = [1, "Alex"];\n// user = ["Alex", 1]; // Error`, note: "Order and types matter." },
        { label: "Inference", code: `const point = [10, 20];\n// number[] by default\nconst fixed = [10, 20] as const;\n// readonly [10, 20]`, note: "Use annotations/as const when you need tuple inference." },
        { label: "Return value", code: `function useToggle(initial: boolean): [boolean, () => void] {\n  let v = initial;\n  return [v, () => { v = !v; }];\n}`, note: "Tuples are common for multi-value returns." },
      ]} />
      <ValidInvalidCards valid={{ code: `const entry: [string, number] = ["age", 30];`, note: "Each position matches." }} invalid={{ code: `const entry: [string, number] = [30, "age"];`, note: "Wrong order/types for tuple positions." }} />
      <NoteTakeaways items={["Tuples model fixed positions with per-index types.", "Prefer objects when field names improve clarity.", "as const often gives the tuple precision you want."]} />
    </div>
  );
}
