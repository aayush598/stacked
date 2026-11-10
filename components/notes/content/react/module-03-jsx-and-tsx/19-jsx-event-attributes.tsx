import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, EventFlowDemo, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxEventAttributesR3S19() {
  return (
    <div>
      <SectionHero
        title="JSX Event Attributes"
        subtitle="Events in JSX are passed as camelCased props (e.g. onClick) whose values are functions. React invokes your handlers in response to user interactions, providing event objects and cross-browser-friendly behavior."
        chips={["camelCase", "Function handlers", "Event object", "Bubbling/capture", "Forms & keyboard"]}
      />

      <EventFlowDemo />

      <NoteHeading>Event handler syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Reference", example: "<button onClick={handleClick} />", note: "Pass function (no call). Most common and efficient." },
        { syntax: "Inline arrow", example: "<button onClick={() => doThing(id)} />", note: "Useful to pass args/close over values." },
        { syntax: "Inline with event", example: "<input onChange={(e) => set(e.target.value)} />", note: "Receive event parameter explicitly." },
        { syntax: "Handler returning handler", example: "onClick={makeHandler(id)}", note: "Call factory during render only if it returns the handler function." },
        { syntax: "Inline block body", example: "onClick={() => { a(); b(); }}", note: "Multiple statements; extract when non-trivial." },
        { syntax: "Capture phase", example: "<div onClickCapture={fn} />", note: "Use Capture suffix for capture-phase handlers." },
        { syntax: "Prevent default", example: "onSubmit={(e)=>{e.preventDefault();}}", note: "Stop browser default behavior (links/forms/etc.)." },
        { syntax: "Stop propagation", example: "onClick={(e)=>e.stopPropagation()}", note: "Prevent bubbling to ancestors." },
      ]} />

      <Tabs items={[
        { label: "Basic usage", code: `function Counter() {\n  const [n, setN] = useState(0);\n  function handleClick() { setN(n + 1); }\n  return <button onClick={handleClick}>Count: {n}</button>;\n}\n\n// WRONG: calls immediately during render\n// <button onClick={handleClick()}>` , note: "Pass the function, don’t invoke it (unless invoking returns a function)." },
        { label: "Event object", code: `function Form() {\n  function handleChange(e) {\n    const { name, value, type, checked } = e.target;\n    // e.currentTarget is the element with the listener\n  }\n  function handleSubmit(e) {\n    e.preventDefault();\n    const data = new FormData(e.currentTarget);\n  }\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="email" onChange={handleChange} />\n    </form>\n  );\n}` , note: "Common targets: e.target, e.currentTarget, e.preventDefault(), e.stopPropagation()." },
        { label: "Arguments & params", code: `{items.map(item => (\n  <li key={item.id}>\n    <button onClick={() => onDelete(item.id)}>Delete</button>\n    <button onClick={(e) => onEdit(e, item)}>Edit</button>\n  </li>\n))}\n\n// Alternative: data attributes\n<button data-id={id} onClick={handle} />` , note: "Closures are convenient; data attributes can simplify delegation patterns." },
        { label: "Keyboard & focus", code: `<input\n  onKeyDown={(e) => {\n    if (e.key === "Enter") submit();\n    if (e.key === "Escape") close();\n  }}\n  onFocus={() => setFocused(true)}\n  onBlur={() => setFocused(false)}\n/>` , note: "Prefer semantic elements (<button>) so keyboard behavior works by default." },
        { label: "Mouse/pointer", code: `<div\n  onClick={onClick}\n  onDoubleClick={onDouble}\n  onMouseEnter={onEnter}\n  onMouseLeave={onLeave}\n  onPointerDown={onDown}\n  onContextMenu={(e) => { e.preventDefault(); openMenu(); }}\n/>` , note: "Pointer events unify mouse/touch/pen in modern apps." },
      ]} />

      <NoteHeading>Common React DOM event props (representative)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Clipboard", example: "onCopy onCut onPaste", note: "Clipboard interactions." },
        { syntax: "Composition", example: "onCompositionStart/End/Update", note: "IME/text composition events." },
        { syntax: "Keyboard", example: "onKeyDown onKeyUp (onKeyPress deprecated)", note: "Key handling; prefer onKeyDown." },
        { syntax: "Focus", example: "onFocus onBlur", note: "Focus/blur (React bubbles focus events appropriately in its system)." },
        { syntax: "Form", example: "onChange onInput onSubmit onReset onInvalid", note: "Form and control events; onChange fires on value changes." },
        { syntax: "Mouse", example: "onClick onMouseDown onMouseMove onMouseEnter onMouseLeave", note: "Mouse interactions." },
        { syntax: "Pointer", example: "onPointerDown onPointerMove onPointerUp onPointerCancel", note: "Modern unified pointer input." },
        { syntax: "Touch", example: "onTouchStart onTouchMove onTouchEnd", note: "Touch-specific events." },
        { syntax: "UI/Wheel/Scroll", example: "onScroll onWheel", note: "Scrolling and wheel interactions." },
        { syntax: "Media/Image", example: "onLoad onError onPlay onPause", note: "Resource and media lifecycle events." },
        { syntax: "Drag", example: "onDragStart onDragOver onDrop", note: "Drag and drop." },
        { syntax: "Animation/Transition", example: "onAnimationEnd onTransitionEnd", note: "CSS animation/transition completion hooks." },
      ]} />

      <NoteHeading>Bubbling, capture, and control</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Event occurs", note: "User clicks/presses/interacts with target element." },
        { label: "Capture (optional)", note: "onClickCapture handlers run on ancestors before target." },
        { label: "Target/bubble", note: "Handler runs, then event bubbles to parents (onClick)." },
        { label: "Control flow", note: "preventDefault() stops default; stopPropagation() stops bubbling." },
      ]} />
      <ComparePanels
        left={{ title: "Propagation stopped", tone: "neutral", code: `<div onClick={onParent}>\n  <button onClick={(e) => { e.stopPropagation(); onChild(); }}>\n    Child\n  </button>\n</div>` }}
        right={{ title: "Default prevented", tone: "neutral", code: `<a href="/page" onClick={(e) => { e.preventDefault(); navigate(); }}>\n  SPA link\n</a>\n<form onSubmit={(e) => { e.preventDefault(); save(); }}>` }}
      />

      <RuleGrid rules={[
        { title: "Pass references", body: "onClick={fn} not onClick={fn()} unless fn() returns a handler." },
        { title: "Use semantic elements", body: "Prefer <button>/<a> for clickable actions for accessibility and keyboard support." },
        { title: "Keep handlers focused", body: "Extract logic into named functions; avoid heavy inline multi-step code." },
        { title: "Don’t overuse stopPropagation", body: "It can break parent behaviors (analytics, menus, modals); use intentionally." },
        { title: "Forms: prefer onSubmit", body: "Handle form submission on <form onSubmit> to support Enter key and accessibility." },
        { title: "Controlled inputs", body: "Use onChange with value/state for controlled components (React pattern)." },
        { title: "Performance awareness", body: "Inline arrows create new functions each render — usually fine; optimize only if measured." },
        { title: "Async handlers", body: "Can be async; handle errors and loading/disabled states to prevent duplicate actions." },
      ]} />

      <NoteCallout tone="warning">Avoid attaching onClick to non-interactive elements (div/span) without proper roles, tabIndex, and keyboard handlers. Prefer native interactive elements whenever possible.</NoteCallout>

      <NoteTakeaways items={[
        "JSX event props are camelCased and take function handlers (onClick, onChange, onSubmit, etc.).",
        "Use event.preventDefault() and event.stopPropagation() deliberately to control default behavior and bubbling.",
        "Know common event categories (mouse, keyboard, form, focus, pointer) and use semantic elements for accessibility.",
        "Pass arguments via closures or data attributes; keep handler logic clear and maintainable.",
      ]} />
    </div>
  );
}
