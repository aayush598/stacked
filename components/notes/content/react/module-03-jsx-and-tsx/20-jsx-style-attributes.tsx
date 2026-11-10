import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, StylePlayground, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxStyleAttributesR3S20() {
  return (
    <div>
      <SectionHero
        title="JSX Style Attributes"
        subtitle="In React, the style prop accepts a JavaScript object (not a CSS string). Properties are camelCased, values can be strings or numbers, and styles can be computed dynamically — best used for dynamic cases, not as a full CSS replacement."
        chips={["style={{}}", "camelCase", "Dynamic values", "Numbers/units", "CSS variables"]}
      />

      <StylePlayground />

      <NoteHeading>Syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Inline object", example: "<div style={{ color: 'red' }} />", note: "Double braces: outer for JSX expression, inner for object literal." },
        { syntax: "Style variable", example: "const s = {color:'red'}; <div style={s} />", note: "Define object outside JSX for reuse/readability." },
        { syntax: "Dynamic value", example: "style={{ opacity: isOpen ? 1 : 0 }}", note: "Compute values from state/props." },
        { syntax: "Numeric value", example: "style={{ width: 200, zIndex: 10 }}", note: "Many length props assume px for numbers; unitless props remain unitless." },
        { syntax: "String with unit", example: "style={{ width: '50%', marginTop: '1rem' }}", note: "Use strings for %, rem, em, vh, calc(), etc." },
        { syntax: "Merge styles", example: "style={{ ...base, ...active && activeStyle }}", note: "Compose objects; later keys override." },
        { syntax: "CSS custom properties", example: "style={{ ['--accent' as any]: color }}", note: "CSS variables can be set via style object (TS may need typing)." },
        { syntax: "Vendor/experimental", example: "style={{ WebkitLineClamp: 2 }}", note: "Vendor-prefixed properties typically PascalCased in React style objects." },
      ]} />

      <Tabs items={[
        { label: "Basic usage", code: `function Box() {\n  return (\n    <div\n      style={{\n        backgroundColor: "#2149e8",\n        color: "white",\n        padding: "12px 16px",\n        borderRadius: 12,\n      }}\n    >\n      Styled box\n    </div>\n  );\n}` , note: "camelCase properties, string/number values." },
        { label: "Conditional & merged", code: `const base = { padding: 12, borderRadius: 8 };\nconst active = isActive ? { backgroundColor: "#e8f0ff" } : null;\n\nreturn (\n  <button\n    style={{\n      ...base,\n      ...(active ?? {}),\n      opacity: disabled ? 0.5 : 1,\n      cursor: disabled ? "not-allowed" : "pointer",\n    }}\n  />\n);` , note: "Build style objects from state/props; merge carefully." },
        { label: "Computed / animated", code: `function Progress({ value }: { value: number }) {\n  return (\n    <div style={{ width: "100%", background: "#eee" }}>\n      <div\n        style={{\n          width: value + "%",\n          height: 8,\n          background: "var(--accent)",\n          transition: "width 300ms ease",\n        }}\n      />\n    </div>\n  );\n}` , note: "Great for runtime-computed values like progress, transforms, positions." },
        { label: "CSS variables", code: `function ThemeCard({ accent }) {\n  return (\n    <div\n      style={{\n        "--accent": accent,\n        border: "1px solid var(--accent)",\n      } as React.CSSProperties}\n    >\n      <h3 style={{ color: "var(--accent)" }}>Title</h3>\n    </div>\n  );\n}` , note: "Set custom properties inline and consume in CSS/child styles." },
      ]} />

      <NoteHeading>CSS property mapping and value rules</NoteHeading>
      <ComparePanels
        left={{ title: "CSS (kebab-case)", tone: "neutral", code: `background-color: red;\nfont-size: 16px;\nborder-top-left-radius: 8px;\nz-index: 10;\n-webkit-user-select: none;` }}
        right={{ title: "React style object", tone: "good", code: `backgroundColor: "red"\nfontSize: 16 // or "16px"\nborderTopLeftRadius: 8\nzIndex: 10\nWebkitUserSelect: "none"` }}
      />
      <SyntaxMatrix rows={[
        { syntax: "Length numbers", example: "width: 100 -> 100px (most cases)", note: "React appends px for many numeric length properties." },
        { syntax: "Unitless numbers", example: "opacity, zIndex, flex, fontWeight, lineHeight*", note: "Some properties are unitless; lineHeight can be number or string depending on intent." },
        { syntax: "Percent/other units", example: "width: '100%', margin: '2rem'", note: "Must be strings." },
        { syntax: "calc()/var()/clamp()", example: "width: 'calc(100% - 2rem)'", note: "Pass as strings." },
        { syntax: "Multiple values", example: "transform: 'translateX(10px) scale(1.1)'", note: "Use string expressions; compose dynamically in JS." },
      ]} />

      <NoteHeading>When to use style vs className/CSS</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Need dynamic value?", note: "Positions, sizes, progress, user-selected colors -> style is good." },
        { label: "Need states/pseudo?", note: ":hover, :focus, :active, ::before -> use CSS classes." },
        { label: "Need responsive?", note: "Media/container queries -> CSS/Tailwind." },
        { label: "Need reuse/theming?", note: "Design tokens, variants -> class-based systems/CSS vars." },
      ]} />
      <RuleGrid rules={[
        { title: "Use for dynamic runtime values", body: "Coordinates, percentages, computed transforms, user-driven colors/sizes." },
        { title: "Prefer classes for static styling", body: "Better performance patterns, caching, and readability for large style sets." },
        { title: "No pseudo-selectors in inline style", body: ":hover/:focus/media queries require CSS, Tailwind, or styled solutions." },
        { title: "Avoid recreating large objects unnecessarily", body: "Usually not critical, but memoize if profiling shows churn in hot paths." },
        { title: "Maintain accessibility", body: "Inline styles can still harm contrast/focus visibility — enforce design standards." },
        { title: "Security note", body: "Sanitize/validate user-provided values used in styles (e.g. URLs/colors) where applicable." },
      ]} />

      <NoteCallout tone="tip">A practical rule: <code>className</code> for design system and states, <code>style</code> for truly dynamic, per-instance computed values. Many components benefit from both.</NoteCallout>

      <NoteTakeaways items={[
        "JSX style takes an object: style={{ prop: value }} with camelCased CSS properties.",
        "Values can be numbers (often px) or strings (%, rem, calc, var); merge/compute objects with JS.",
        "Inline styles are ideal for dynamic values but cannot replace pseudo-classes, media queries, or complex CSS.",
        "Use className/CSS for reusable styling systems and reserve style for runtime-computed presentation.",
      ]} />
    </div>
  );
}
