import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxCapitalizationRulesR3S18() {
  return (
    <div>
      <SectionHero
        title="JSX Capitalization Rules"
        subtitle="In JSX, the case of a tag name determines whether it is treated as a built-in host element (string type) or as a user-defined component (variable reference). Correct capitalization is required for components to render."
        chips={["lowercase = host", "PascalCase = component", "Dot notation", "Dynamic components"]}
      />

      <NoteHeading>Core rule and why it exists</NoteHeading>
      <NoteText>When JSX is transformed, lowercase tags become string types (e.g. <code>&apos;div&apos;</code>) while capitalized tags become references to identifiers in scope (e.g. <code>MyComponent</code>). This is how React distinguishes intrinsic elements from components.</NoteText>
      <SyntaxMatrix rows={[
        { syntax: "<div />", example: "createElement('div', ...)", note: "Intrinsic host element (DOM/SVG tag name string)." },
        { syntax: "<my-widget />", example: "createElement('my-widget', ...)", note: "Treated as intrinsic/custom element tag string, NOT your React component variable." },
        { syntax: "<MyWidget />", example: "createElement(MyWidget, ...)", note: "Component reference — MyWidget must be in scope." },
        { syntax: "<UI.Card />", example: "createElement(UI.Card, ...)", note: "Member expression component (dot notation) is valid." },
        { syntax: "<obj['Comp'] />", example: "not valid JSX tag form", note: "Computed member access not used as tag; assign to capitalized variable first.", valid: false },
        { syntax: "const C = cond ? A : B; <C/>", example: "dynamic component type", note: "Variable name must be capitalized in JSX usage." },
      ]} />

      <Tabs items={[
        { label: "Correct component usage", code: `function UserProfile() {\n  return <h1>Profile</h1>;\n}\n\nexport function App() {\n  return (\n    <section>\n      <UserProfile />\n      <UserProfile />\n    </section>\n  );\n}` , note: "Component name and JSX tag are PascalCase." },
        { label: "Common mistake", code: `function userProfile() {\n  return <h1>Profile</h1>;\n}\n\n// Wrong: treated as unknown DOM tag string\nreturn <userProfile />;\n\n// Fix\nfunction UserProfile() { return <h1>Profile</h1>; }\nreturn <UserProfile />;` , note: "Lowercase means intrinsic element, not a function call to your component." },
        { label: "Dot notation", code: `const Icons = {\n  Close: () => <span aria-hidden>×</span>,\n  Search: () => <span aria-hidden>⌕</span>,\n};\n\nfunction Toolbar() {\n  return (\n    <div>\n      <Icons.Search />\n      <Icons.Close />\n    </div>\n  );\n}` , note: "Member expressions (Obj.Comp) are allowed for component types." },
        { label: "Dynamic selection", code: `function Notice({ variant }) {\n  const Component = variant === "error" ? ErrorBox : InfoBox;\n  return <Component />;\n}\n\n// Also from a map\nconst views = { home: Home, settings: Settings };\nfunction Screen({ route }) {\n  const View = views[route] ?? NotFound;\n  return <View />;\n}` , note: "Assign to a capitalized identifier before using in JSX." },
        { label: "Imports & scope", code: `import { Button } from "./ui";\nimport * as UI from "./ui";\n\n<Button />      // named import in scope\n<UI.Button />   // namespace/member access\n\n// <button /> is the native HTML element (different!)` , note: "Component must resolve in scope at render time." },
      ]} />

      <ComparePanels
        left={{ title: "Host element (intrinsic)", tone: "neutral", code: `<div id="app" />\n<svg viewBox="0 0 10 10" />\n<input type="text" />` , note: "Lowercase tag names map to platform elements." }}
        right={{ title: "React component", tone: "good", code: `<Card />\n<PrimaryButton />\n<Form.Field />` , note: "Capitalized identifiers/member expressions map to components." }}
      />

      <NoteHeading>Special cases and edge details</NoteHeading>
      <RuleGrid rules={[
        { title: "PascalCase convention", body: "Name components in PascalCase (UserCard, NavBar). This aligns with JSX rules and readability." },
        { title: "Must be in scope", body: "<Card /> fails if Card is not imported/defined; capitalization alone doesn’t create a reference." },
        { title: "Member expressions allowed", body: "obj.Component and Form.Input are valid when they reference component functions/classes." },
        { title: "Dynamic tags", body: "You can’t do <components[name] />; assign first: const C = components[name]; return <C />." },
        { title: "Web components / custom elements", body: "Custom elements often use kebab-case (<my-element>); React treats unknown lowercase names as elements — behavior/prop handling differs from React components." },
        { title: "SVG/HTML tag names", body: "Intrinsic tags follow platform naming; React supports appropriate SVG/HTML elements as lowercase JSX tags." },
      ]} />

      <AnimatedFlow steps={[
        { label: "JSX tag seen", note: "Parser/compiler checks the tag identifier form." },
        { label: "Lowercase?", note: "Emit string element type ('div', 'span', 'svg')." },
        { label: "Capitalized/member?", note: "Emit identifier/member reference (Comp, UI.Comp)." },
        { label: "Runtime render", note: "React calls component or creates host element accordingly." },
      ]} />

      <NoteCallout tone="warning">If you see your component’s code not running or an unexpected DOM element appearing, verify: (1) correct capitalization in JSX, (2) correct import/export, (3) the identifier actually references a valid component.</NoteCallout>

      <NoteTakeaways items={[
        "Lowercase JSX tags are intrinsic host elements; capitalized tags (and member expressions) are component references.",
        "Always use PascalCase for React components in JSX: <UserCard />, not <userCard />.",
        "For dynamic component selection, store the component in a capitalized variable before rendering <C />.",
        "Custom elements (kebab-case) behave differently from React components — know which one you’re targeting.",
      ]} />
    </div>
  );
}
