import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, Checklist, ExpressionPlayground, RenderValueMatrix } from "./shared/visuals";

export function PassingJsxAsPropsR5S15() {
  return (
    <div>
      <SectionHero
        title="Passing JSX as props."
        subtitle="Deep dive into Passing JSX as props. (Props and component communication). Pass data and behavior through clear, maintainable component APIs. Covers concepts, syntax and variations, examples, edge cases, and production best practices with interactive visuals."
        chips={["Module 05", "Section 15/30", "Props and component communic"]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>{"Passing JSX as props."}</strong> is an essential topic in <strong>{"Props and component communication"}</strong>. Understand the problem it solves, how it behaves during render/update cycles, and how it composes with props, state, effects, context, refs, and other React primitives.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "Understand", note: "What Passing JSX as props. is, why it exists, and the problem it solves in React." }, { label: "API & rules", note: "Syntax, parameters/props, constraints, and expected behavior." }, { label: "Patterns", note: "Common and advanced usage patterns with correct composition." }, { label: "Edge cases", note: "Pitfalls, failure modes, stale/async issues, and debugging." }, { label: "Production", note: "Performance, accessibility, typing, testing, and maintainability." }
      ]} />

      <ExpressionPlayground />

      <NoteHeading>Syntax, API & variations</NoteHeading>
      <NoteText>Learn the canonical syntax and important variations: required vs optional inputs, return values, composition forms, and equivalent patterns. Compare alternatives and know when each is appropriate.</NoteText>
      <Tabs items={[
        { label: "Core example", code: `function Card({ title, children, onAction }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {onAction && <button onClick={onAction}>Action</button>}
    </section>
  );
}`, note: "Idiomatic baseline implementation." },
        { label: "Advanced pattern", code: `// Advanced: Passing JSX as props.
// - Compose with related React APIs and app/state architecture
// - Handle loading, error, empty, and concurrent/async scenarios when relevant
// - Keep accessibility, typing, and tests in mind

export function AdvancedExample() {
  return <div>Production-oriented implementation</div>;
}`, note: "Real-world composition and production concerns." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic approach", tone: "bad", code: `function Demo() {
  // unclear logic, missing states/cleanup/keys/types as relevant
  return <div>Fragile implementation</div>;
}`, note: "Anti-patterns or rule violations lead to bugs and poor maintainability." }}
        right={{ title: "Recommended approach", tone: "good", code: `function Demo() {
  // explicit props/state/effects, accessible markup, predictable rendering
  return <section aria-label="Example">Robust implementation</section>;
}`, note: "Clear, correct, and scalable implementation." }}
      />


      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Passing JSX as props. in Props and component communication: purpose, behavior, and how it fits React's rendering/component model." }, { title: "Syntax & variations", body: "Cover canonical syntax plus important alternatives, optional forms, and composition patterns." }, { title: "Correct usage", body: "Follow React rules and semantics (render purity, hooks rules, keys/identity, effects/cleanup where relevant)." }, { title: "Edge cases & pitfalls", body: "Handle null/undefined/empty states, async timing, identity changes, and common mistakes explicitly." }, { title: "Performance & UX", body: "Minimize unnecessary work, keep UI responsive, and ensure accessible interactions/content." }, { title: "Maintainability", body: "Use clear boundaries, typed APIs, reusable abstractions carefully, and test critical behavior." }
      ]} />
      <NoteCallout tone="warning">Always consider edge cases: empty/null/undefined values, async timing and race conditions, cleanup/subscriptions, identity and keys, and environment differences (client/server, dev/prod).</NoteCallout>
      <NoteCallout tone="tip">Validate with realistic examples and tests. Prefer explicit, accessible, and composable solutions over clever shortcuts.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I can explain Passing JSX as props. and when to use it.", "I know core syntax, variations, and constraints.", "I can implement correct examples and avoid common pitfalls.", "I considered edge cases, performance, and accessibility.", "I can integrate it cleanly into real React component architecture."
      ]} />

      <NoteTakeaways items={[
        "Passing JSX as props. is a key part of Props and component communication; master its purpose, API/behavior, and composition patterns.", "Use idiomatic, rule-compliant implementations and account for variations and edge cases.", "Optimize for clarity and production quality: predictable rendering, accessibility, performance, and maintainability."
      ]} />
    </div>
  );
}
