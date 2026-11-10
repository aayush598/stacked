import type {
  NoteCourse,
  NoteModule,
  NotePhase,
  NoteSection,
  ReviewSnapshot,
} from "@/lib/notes/types";

type SectionSeed = {
  title: string;
  topics?: string[];
};

function s(title: string, topics?: string[]): SectionSeed {
  return { title, topics };
}

function buildSections(moduleId: string, seeds: SectionSeed[]): NoteSection[] {
  return seeds.map((seed, index) => {
    const id = `${moduleId}-s${String(index + 1).padStart(2, "0")}`;
    const topics = seed.topics ?? [];
    return {
      id,
      title: seed.title,
      topics,
      status: "incomplete",
      minutes: Math.max(4, Math.ceil((seed.title.length + topics.join(" ").length) / 90)),
    };
  });
}

function mod(
  number: number,
  title: string,
  summary: string,
  seeds: SectionSeed[],
): NoteModule {
  const id = `react-m${String(number).padStart(2, "0")}`;
  return {
    id,
    number: String(number).padStart(2, "0"),
    title,
    summary,
    kind: "module",
    sections: buildSections(id, seeds),
  };
}

function project(
  number: number,
  title: string,
  summary: string,
  seeds: SectionSeed[],
): NoteModule {
  const id = `react-p${String(number).padStart(2, "0")}`;
  return {
    id,
    number: `P${String(number).padStart(2, "0")}`,
    title,
    summary,
    kind: "project",
    sections: buildSections(id, seeds),
  };
}

function phase(
  number: number,
  title: string,
  subtitle: string,
  summary: string,
  modules: NoteModule[],
): NotePhase {
  return {
    id: `react-phase-${String(number).padStart(2, "0")}`,
    number,
    title,
    subtitle,
    summary,
    modules,
  };
}

const foundations = phase(1, "React foundations", "Modules 01–08", "Build the mental model: components, JSX, props, rendering, events, and presentation in React.", [
  mod(1, "Introduction to React", "Understand what React is, why it exists, and how it models UI.", [
    s("What is React?"), s("Why React exists."), s("Problems React solves."), s("React's design philosophy."), s("React as a UI library."), s("Declarative UI programming."), s("Imperative versus declarative UI."), s("Component-based architecture."), s("Reusable UI components."), s("React's rendering model."), s("React's component model."), s("React and the virtual DOM."), s("React's reconciliation process."), s("React Fiber architecture overview."), s("React's rendering and commit phases."), s("React's ecosystem."), s("React versions and release channels."), s("React documentation."), s("Understanding React's official API reference."), s("Understanding React's recommended practices."),
  ]),
  mod(2, "React project setup and development environment", "Create, run, inspect, and debug React applications with the right tooling.", [
    s("Creating a React application."), s("Understanding React project structure."), s("Understanding application entry points."), s("React root creation."), s("createRoot()."), s("root.render()."), s("root.unmount()."), s("Strict Mode setup."), s("Development versus production builds."), s("React development tools."), s("React Developer Tools."), s("Component inspection."), s("Props inspection."), s("State inspection."), s("Profiler inspection."), s("Debugging React applications."), s("React Fast Refresh."), s("React development workflow."), s("React project configuration."), s("Understanding React package dependencies."),
  ]),
  mod(3, "JSX and TSX", "Write readable, correct JSX/TSX and understand how React turns it into UI.", [
    s("What is JSX?"), s("Why JSX exists."), s("JSX syntax."), s("JSX expressions."), s("Embedding expressions."), s("JSX attributes."), s("JSX children."), s("JSX fragments."), s("React fragments."), s("Conditional expressions in JSX."), s("Rendering lists in JSX."), s("Rendering arrays."), s("Rendering strings and numbers."), s("Rendering null."), s("Rendering undefined."), s("Boolean rendering behavior."), s("JSX nesting."), s("JSX capitalization rules."), s("JSX event attributes."), s("JSX style attributes."), s("JSX spread attributes."), s("JSX limitations."), s("JSX compilation concepts."), s("JSX versus TSX."), s("Readable JSX conventions."), s("Avoiding deeply nested JSX."), s("Extracting complex JSX."), s("JSX formatting standards."),
  ]),
  mod(4, "Components and component architecture", "Design components with clear responsibilities, boundaries, and composition.", [
    s("What are React components?"), s("Functional components."), s("Component declarations."), s("Component expressions."), s("Component naming conventions."), s("Component invocation."), s("Component composition."), s("Parent components."), s("Child components."), s("Sibling components."), s("Root components."), s("Nested components."), s("Component boundaries."), s("Component responsibilities."), s("Presentational components."), s("Container components."), s("Reusable components."), s("Controlled components."), s("Uncontrolled components."), s("Stateless components."), s("Stateful components."), s("Component extraction."), s("Component reuse."), s("Component specialization."), s("Component composition versus inheritance."), s("Component isolation."), s("Component organization."), s("Component readability."), s("Component API design."), s("Common component design mistakes."),
  ]),
  mod(5, "Props and component communication", "Pass data and behavior through clear, maintainable component APIs.", [
    s("Understanding props."), s("Passing props."), s("Receiving props."), s("Props destructuring."), s("Default prop values."), s("Optional props."), s("Required props."), s("Boolean props."), s("String and number props."), s("Object props."), s("Array props."), s("Function props."), s("Callback props."), s("Passing components as props."), s("Passing JSX as props."), s("The children prop."), s("Named content props."), s("Props spreading."), s("Forwarding props."), s("Prop composition."), s("Prop drilling."), s("Prop drilling problems."), s("Avoiding excessive props."), s("Avoiding oversized component APIs."), s("Designing consistent prop interfaces."), s("Component API conventions."), s("Props immutability."), s("Props versus state."), s("Props versus context."), s("Component communication patterns."),
  ]),
  mod(6, "Conditional rendering and list rendering", "Render the right UI for each state and collection, correctly and efficiently.", [
    s("Conditional rendering fundamentals."), s("if conditions."), s("Ternary expressions."), s("Logical AND rendering."), s("Logical OR rendering."), s("Nullish rendering considerations."), s("Rendering fallback UI."), s("Rendering loading states."), s("Rendering error states."), s("Rendering empty states."), s("Rendering success states."), s("Rendering multiple conditions."), s("Nested conditions."), s("Extracting conditional components."), s("List rendering."), s("Rendering arrays."), s("The map() rendering pattern."), s("React keys."), s("Stable keys."), s("Unique keys."), s("Key selection."), s("Why array indexes can be problematic as keys."), s("Keys and reconciliation."), s("Rendering nested lists."), s("Rendering dynamic lists."), s("Adding and removing list items."), s("Reordering list items."), s("Filtering rendered lists."), s("Sorting rendered lists."), s("List rendering performance and correctness."),
  ]),
  mod(7, "React events and event handling", "Handle user interaction with React's event system and predictable handlers.", [
    s("React event handling."), s("Event handler functions."), s("Event registration."), s("Event callbacks."), s("Click events."), s("Change events."), s("Input events."), s("Submit events."), s("Keyboard events."), s("Focus events."), s("Blur events."), s("Mouse events."), s("Pointer events."), s("Touch events."), s("Form events."), s("Event object."), s("Event propagation."), s("Event bubbling."), s("Event capturing."), s("Preventing default behavior."), s("Stopping propagation."), s("Event handler arguments."), s("Event handler composition."), s("Event delegation concepts."), s("Synthetic events."), s("React event system."), s("Event handler performance."), s("Common event-handling mistakes."),
  ]),
  mod(8, "Styling and component presentation in React", "Integrate styling concerns into React components without teaching CSS itself.", [
    s("The className prop."), s("The style prop."), s("Inline style objects."), s("Dynamic style values."), s("Conditional class names."), s("Dynamic class names."), s("Class composition."), s("Component style contracts."), s("CSS Modules integration."), s("CSS-in-JS concepts."), s("Styled component patterns."), s("Styling reusable components."), s("Theme-aware components."), s("Theme provider patterns."), s("Design token integration."), s("Component variants."), s("Responsive component behavior."), s("Styling polymorphic components."), s("Style prop forwarding."), s("Avoiding unnecessary styling abstractions."),
  ]),
]);

const stateHooks = phase(2, "React state and hooks", "Modules 09–16", "Master local state, hook rules, and the built-in hooks that power interactive React.", [
  mod(9, "State management fundamentals", "Model, update, and share component state correctly.", [
    s("What is React state?"), s("Local component state."), s("State initialization."), s("State updates."), s("State immutability."), s("State snapshots."), s("State updates and rendering."), s("State preservation."), s("State reset."), s("State ownership."), s("State lifting."), s("Sharing state between components."), s("Derived state."), s("Avoiding redundant state."), s("State normalization."), s("Multiple state variables."), s("Object state."), s("Array state."), s("Nested state."), s("Updating object state."), s("Updating array state."), s("Updating nested state."), s("Functional state updates."), s("State batching."), s("State update ordering."), s("State update queues."), s("State identity."), s("State synchronization."), s("State modeling."), s("Common state management mistakes."),
  ]),
  mod(10, "React Hooks fundamentals", "Understand the rules and mental model behind hooks.", [
    s("What are hooks?"), s("Why hooks were introduced."), s("Rules of hooks."), s("Top-level hook calls."), s("Hook ordering."), s("Hook call restrictions."), s("Hook composition."), s("Hook state preservation."), s("Hooks and component rendering."), s("Hooks and component identity."), s("Built-in versus custom hooks."), s("Hook naming conventions."), s("Hook extraction."), s("Hook reusability."), s("Hook dependencies."), s("Hook linting."), s("Common hook mistakes."), s("Designing maintainable custom hooks."),
  ]),
  mod(11, "useState", "Manage local state with the most common React hook.", [
    s("Understanding useState."), s("Importing and calling useState."), s("Initial state."), s("Lazy initialization."), s("State setter functions."), s("Direct state updates."), s("Functional state updates."), s("Updating primitive values."), s("Updating object values."), s("Updating array values."), s("Updating nested structures."), s("State immutability."), s("State batching."), s("Multiple state updates."), s("State snapshots."), s("Stale state problems."), s("State update patterns."), s("Resetting state."), s("Derived values versus stored state."), s("When to use useState."), s("When not to use useState."), s("Common useState mistakes."),
  ]),
  mod(12, "useEffect", "Synchronize components with external systems safely and predictably.", [
    s("Understanding useEffect."), s("Effect setup functions."), s("Effect cleanup functions."), s("Dependency arrays."), s("Effects without dependency arrays."), s("Effects with empty dependency arrays."), s("Effects with dependencies."), s("Effect re-execution."), s("Effect lifecycle."), s("Synchronizing with external systems."), s("Event subscriptions."), s("Timers and cleanup."), s("Network synchronization."), s("External resource management."), s("Stale closures."), s("Missing dependencies."), s("Effect dependency rules."), s("Effect cleanup timing."), s("Effects and Strict Mode."), s("Avoiding unnecessary effects."), s("Effects versus event handlers."), s("Effects versus derived state."), s("Effects versus render logic."), s("Splitting effects."), s("Effect extraction into custom hooks."), s("Race conditions in effects."), s("Request cancellation patterns."), s("Common useEffect mistakes."), s("When not to use useEffect."), s("Production-grade effect design."),
  ]),
  mod(13, "useContext", "Share values through the component tree without excessive prop drilling.", [
    s("Understanding React context."), s("Creating context."), s("Context providers."), s("Context consumers."), s("useContext."), s("Context value."), s("Context default values."), s("Context composition."), s("Nested providers."), s("Context updates."), s("Context propagation."), s("Context and component rendering."), s("Context for shared state."), s("Context for configuration."), s("Context for themes."), s("Context for authentication state."), s("Context provider organization."), s("Splitting contexts."), s("Context performance."), s("Avoiding unnecessary context usage."), s("Context versus props."), s("Context versus external state management."), s("Scalable context architecture."), s("Common context mistakes."),
  ]),
  mod(14, "useReducer", "Model complex state transitions with reducer-driven updates.", [
    s("Understanding reducers."), s("Reducer functions."), s("Initial state."), s("Actions."), s("Action payloads."), s("State transitions."), s("Dispatch."), s("Dispatching actions."), s("Reducer purity."), s("Reducer immutability."), s("Multiple action types."), s("Complex state management."), s("Nested state transitions."), s("Lazy initialization."), s("Combining reducers."), s("Reducer composition."), s("useReducer with context."), s("Reducer-based state architecture."), s("useReducer versus useState."), s("When to use useReducer."), s("When not to use useReducer."), s("Common reducer mistakes."),
  ]),
  mod(15, "useRef and DOM references", "Persist mutable values and interact with DOM elements without re-rendering.", [
    s("Understanding useRef."), s("Creating refs."), s("Accessing ref values."), s("Mutable ref containers."), s("Ref persistence across renders."), s("Refs versus state."), s("DOM references."), s("Accessing DOM elements."), s("Focusing elements."), s("Measuring elements."), s("Managing timers through refs."), s("Storing mutable values."), s("Tracking previous values."), s("Avoiding unnecessary rendering."), s("Callback refs."), s("Ref cleanup."), s("Ref composition."), s("Ref forwarding concepts."), s("Ref lifecycle."), s("Common ref mistakes."),
  ]),
  mod(16, "Additional built-in React hooks", "Know the rest of React's hook toolbox and when each hook fits.", [
    s("useMemo."), s("useCallback."), s("useLayoutEffect."), s("useInsertionEffect."), s("useImperativeHandle."), s("useId."), s("useTransition."), s("useDeferredValue."), s("useSyncExternalStore."), s("useDebugValue."), s("useActionState."), s("useOptimistic."), s("use."), s("useEffectEvent."), s("Hook availability and version compatibility."), s("Choosing the appropriate hook."), s("Hook performance implications."), s("Avoiding unnecessary memoization."), s("Understanding hook execution semantics."), s("Built-in hook composition."),
  ]),
]);

const advanced = phase(3, "Advanced React concepts and APIs", "Modules 17–24", "Custom hooks, rendering, refs, patterns, built-in APIs, and modern form/actions.", [
  mod(17, "Custom hooks", "Extract and share reusable stateful logic with well-designed hooks.", [
    s("What are custom hooks?"), s("Why custom hooks exist."), s("Creating custom hooks."), s("Custom hook naming conventions."), s("Extracting component logic."), s("Sharing stateful logic."), s("Sharing side-effect logic."), s("Sharing reusable behavior."), s("Custom hooks with useState."), s("Custom hooks with useEffect."), s("Custom hooks with useContext."), s("Custom hooks with useReducer."), s("Custom hooks with refs."), s("Custom hooks with multiple hooks."), s("Custom hooks composition."), s("Custom hooks dependencies."), s("Custom hooks and closures."), s("Custom hooks and subscriptions."), s("Custom hooks for browser synchronization."), s("Custom hooks for reusable UI behavior."), s("Custom hooks for forms."), s("Custom hooks for state synchronization."), s("Custom hooks for reusable data behavior."), s("Custom hook return value design."), s("Custom hook parameter design."), s("Custom hook performance."), s("Custom hook testing."), s("Custom hook documentation."), s("Avoiding overly generic hooks."), s("Production-grade custom hook architecture."),
  ]),
  mod(18, "Advanced React state management", "Architect state ownership, distribution, and external stores at scale.", [
    s("Understanding state ownership."), s("Local versus shared state."), s("Lifting state up."), s("State colocation."), s("State distribution."), s("State normalization."), s("State derivation."), s("Avoiding duplicate state."), s("State synchronization problems."), s("State preservation."), s("State resetting."), s("Component identity and state."), s("Keys as state reset mechanisms."), s("State transitions."), s("Complex state modeling."), s("Reducer-based state architecture."), s("Combining reducers."), s("Reducer and context architecture."), s("Context provider composition."), s("Separating state and dispatch contexts."), s("State subscription patterns."), s("External store integration."), s("useSyncExternalStore."), s("Building custom external stores."), s("Managing state across component boundaries."), s("Avoiding unnecessary global state."), s("Choosing appropriate state ownership."), s("Managing large component state."), s("State architecture for large applications."), s("State management anti-patterns."),
  ]),
  mod(19, "React rendering and reconciliation", "Understand what triggers renders and how React reconciles the component tree.", [
    s("Understanding React rendering."), s("What triggers a render?"), s("Initial rendering."), s("Re-rendering."), s("Parent component rendering."), s("Child component rendering."), s("State update rendering."), s("Props update rendering."), s("Context update rendering."), s("Rendering and committing."), s("Render phase."), s("Commit phase."), s("React reconciliation."), s("Reconciliation algorithm concepts."), s("Component identity."), s("Element identity."), s("Key-based reconciliation."), s("Preserving component state."), s("Resetting component state."), s("Conditional component rendering."), s("Component tree changes."), s("Rendering and state snapshots."), s("Batching state updates."), s("Automatic batching."), s("Concurrent rendering fundamentals."), s("Interruptible rendering."), s("Render prioritization."), s("Scheduling concepts."), s("Fiber architecture."), s("Understanding rendering behavior in complex component trees."),
  ]),
  mod(20, "React component lifecycle and effects", "Reason about mount/update/unmount behavior and effect synchronization.", [
    s("Component lifecycle concepts."), s("Component mounting."), s("Component updating."), s("Component unmounting."), s("Function component lifecycle model."), s("Effects and lifecycle."), s("Effect setup."), s("Effect cleanup."), s("Effect synchronization."), s("Dependency tracking."), s("Effect re-synchronization."), s("Strict Mode effect behavior."), s("Effect cleanup correctness."), s("Multiple independent effects."), s("Effect dependency management."), s("Separating event logic from effect logic."), s("useEffectEvent."), s("Synchronizing with external systems."), s("Synchronizing with browser APIs."), s("Synchronizing with subscriptions."), s("Synchronizing with external widgets."), s("Avoiding effects for derived values."), s("Avoiding effects for user events."), s("Avoiding effect chains."), s("Managing effect race conditions."), s("Managing asynchronous effects."), s("Effect cancellation patterns."), s("Debugging unexpected effects."), s("Production-grade effect design."),
  ]),
  mod(21, "React refs and imperative APIs", "Use refs and imperative handles for focus, measurement, and controlled escape hatches.", [
    s("Understanding the ref model."), s("useRef."), s("DOM refs."), s("Mutable refs."), s("Ref persistence."), s("Ref initialization."), s("Callback refs."), s("Ref cleanup."), s("Ref composition."), s("Passing refs to components."), s("React 19 ref-as-prop."), s("forwardRef and its legacy role."), s("useImperativeHandle."), s("Exposing imperative component APIs."), s("Custom imperative handles."), s("Ref-based component communication."), s("Ref-based focus management."), s("Ref-based measurements."), s("Ref-based animations."), s("Ref-based external integrations."), s("Avoiding excessive imperative APIs."), s("Refs versus state."), s("Refs versus effects."), s("Managing refs in reusable components."), s("Designing accessible imperative APIs."),
  ]),
  mod(22, "Advanced React component patterns", "Compose flexible, reusable component APIs without unnecessary abstraction.", [
    s("Composition patterns."), s("Compound components."), s("Controlled and uncontrolled component patterns."), s("Headless components."), s("Polymorphic components."), s("Render props."), s("Higher-order components."), s("Component factories."), s("Slot-based composition."), s("Children composition."), s("Context-based compound components."), s("Provider patterns."), s("Container and presentational patterns."), s("State reducer patterns."), s("State initializer patterns."), s("Prop getter patterns."), s("Custom component hooks."), s("Component delegation."), s("Component specialization."), s("Component extension patterns."), s("Component API consistency."), s("Component encapsulation."), s("Component reuse boundaries."), s("Avoiding unnecessary abstraction."), s("Selecting the appropriate component pattern."),
  ]),
  mod(23, "React built-in components and APIs", "Know React's built-in components and top-level APIs, including legacy and modern options.", [
    s("Fragment."), s("StrictMode."), s("Suspense."), s("Profiler."), s("Activity."), s("ViewTransition."), s("Built-in form components."), s("Built-in input components."), s("Resource-related component behavior."), s("Component API compatibility."), s("createContext."), s("memo."), s("lazy."), s("startTransition."), s("act."), s("cache."), s("cacheSignal."), s("captureOwnerStack."), s("addTransitionType."), s("createElement."), s("cloneElement."), s("Children."), s("isValidElement."), s("createRef."), s("Component."), s("PureComponent."), s("API alternatives and legacy status."), s("Choosing appropriate APIs."), s("Understanding API limitations."), s("React API design best practices."),
  ]),
  mod(24, "React forms and actions", "Build controlled/uncontrolled forms and modern action-driven form flows.", [
    s("React form fundamentals."), s("Controlled forms."), s("Uncontrolled forms."), s("Controlled inputs."), s("Uncontrolled inputs."), s("Form state."), s("Form submission."), s("Form reset."), s("Input state synchronization."), s("Form validation integration."), s("Field-level state."), s("Form-level state."), s("Dynamic form fields."), s("Conditional form fields."), s("Multi-step forms."), s("Form error handling."), s("Form submission states."), s("Pending states."), s("Async form submission."), s("Form action functions."), s("Function actions."), s("Form action prop."), s("Form method behavior."), s("Form encType behavior."), s("useActionState."), s("useFormStatus."), s("useOptimistic."), s("Optimistic form updates."), s("Form error boundaries and recovery."), s("Designing reusable form components."),
  ]),
]);

const architecture = phase(4, "React architecture and application engineering", "Modules 25–28", "Structure maintainable, resilient React applications with clear boundaries and data flow.", [
  mod(25, "React application architecture", "Organize components, hooks, providers, and feature boundaries for scale.", [
    s("Understanding React application architecture."), s("Component architecture."), s("Feature-based architecture."), s("Domain-based architecture."), s("Layer-based architecture."), s("Page-based organization."), s("Component-based organization."), s("Shared component architecture."), s("Feature module boundaries."), s("UI component boundaries."), s("Business logic separation."), s("State management boundaries."), s("Custom hook organization."), s("Context organization."), s("Provider organization."), s("Reusable component libraries."), s("Shared UI abstractions."), s("Application-level components."), s("Feature-level components."), s("Page-level components."), s("Layout components."), s("Composition boundaries."), s("Dependency direction."), s("Avoiding circular component dependencies."), s("Avoiding oversized components."), s("Avoiding excessive component splitting."), s("Component responsibility."), s("Architecture evolution."), s("Refactoring component architecture."), s("Scalable React folder structures."),
  ]),
  mod(26, "Maintainable and readable React", "Write React code that teams can understand, review, and evolve.", [
    s("React naming conventions."), s("Component naming."), s("Hook naming."), s("Prop naming."), s("Event handler naming."), s("Context naming."), s("Provider naming."), s("State naming."), s("Reducer naming."), s("Component file naming."), s("Folder naming."), s("Component size management."), s("Single-responsibility components."), s("Separation of concerns."), s("Component cohesion."), s("Component coupling."), s("Avoiding prop explosion."), s("Avoiding deeply nested JSX."), s("Avoiding unnecessary conditional rendering complexity."), s("Avoiding excessive state."), s("Avoiding unnecessary effects."), s("Avoiding unnecessary context."), s("Avoiding unnecessary memoization."), s("Avoiding unnecessary custom hooks."), s("Avoiding premature abstraction."), s("Avoiding oversized custom hooks."), s("Managing component complexity."), s("Writing self-explanatory components."), s("Writing maintainable JSX."), s("Documenting complex components."), s("Documenting reusable component contracts."), s("Managing technical debt."), s("Refactoring React components."), s("Code review standards."), s("Establishing team-wide React conventions."),
  ]),
  mod(27, "React data flow and component communication architecture", "Choose the right communication pattern for local, shared, and cross-tree data flow.", [
    s("Parent-to-child communication."), s("Child-to-parent communication."), s("Sibling communication."), s("Deep component communication."), s("Props-based communication."), s("Callback-based communication."), s("Context-based communication."), s("Reducer-based communication."), s("Shared component state."), s("Shared context state."), s("External store subscriptions."), s("State ownership boundaries."), s("Component event contracts."), s("Event-driven component communication."), s("Context composition."), s("Provider nesting strategies."), s("State synchronization boundaries."), s("Avoiding unnecessary communication layers."), s("Avoiding excessive prop drilling."), s("Choosing communication patterns for large applications."),
  ]),
  mod(28, "React error handling and resilience", "Prevent UI failures from becoming blank screens and design recoverable experiences.", [
    s("React error handling fundamentals."), s("Error boundaries."), s("Error boundary components."), s("getDerivedStateFromError."), s("componentDidCatch."), s("Error boundary placement."), s("Nested error boundaries."), s("Granular error boundaries."), s("Fallback UI."), s("Error recovery."), s("Resetting error boundaries."), s("Errors during rendering."), s("Errors in event handlers."), s("Errors in effects."), s("Errors in asynchronous operations."), s("Promise rejection handling."), s("Suspense error handling."), s("Error boundaries with Suspense."), s("Recoverable UI failures."), s("Application-level error handling."), s("Component-level error handling."), s("Error reporting integration."), s("User-friendly error states."), s("Avoiding blank-screen failures."), s("Designing resilient React interfaces."),
  ]),
]);

const performance = phase(5, "Advanced React rendering and performance", "Modules 29–30", "Profile, optimize, and use concurrent rendering responsibly.", [
  mod(29, "React performance optimization", "Measure and improve rendering performance without premature optimization.", [
    s("React performance fundamentals."), s("Understanding unnecessary renders."), s("Identifying expensive components."), s("Component render profiling."), s("React DevTools Profiler."), s("<Profiler>."), s("memo."), s("useMemo."), s("useCallback."), s("Referential equality."), s("Object identity."), s("Function identity."), s("Stable props."), s("Memoization boundaries."), s("Context-related rendering."), s("State colocation for performance."), s("Component splitting."), s("Rendering large lists."), s("Virtualized list integration."), s("Lazy component loading."), s("Code splitting."), s("Suspense-based loading."), s("Deferred rendering."), s("useTransition."), s("startTransition."), s("useDeferredValue."), s("Concurrent rendering."), s("Prioritizing urgent updates."), s("Interruptible rendering."), s("Avoiding blocking updates."), s("React Compiler fundamentals."), s("React Compiler configuration."), s("Compiler-driven memoization."), s("React Compiler limitations."), s("Manual versus automatic memoization."), s("Performance regression prevention."), s("Measuring before optimizing."), s("Avoiding premature optimization."),
  ]),
  mod(30, "Concurrent React and advanced rendering patterns", "Use transitions, deferred values, and Suspense to keep interfaces responsive.", [
    s("Understanding concurrent React."), s("Concurrent rendering concepts."), s("Interruptible rendering."), s("Scheduling."), s("Update priorities."), s("Urgent updates."), s("Non-urgent updates."), s("Transitions."), s("startTransition."), s("useTransition."), s("Pending transition states."), s("useDeferredValue."), s("Suspense fundamentals."), s("Suspense boundaries."), s("Suspense fallback."), s("Nested Suspense."), s("Suspense reveal order."), s("Suspense and lazy loading."), s("Suspense and data resources."), s("Suspense error handling."), s("Streaming UI concepts."), s("Selective hydration concepts."), s("Avoiding fallback flickering."), s("Coordinating multiple Suspense boundaries."), s("Designing responsive interfaces with concurrent features."),
  ]),
]);

const modern = phase(6, "React DOM, server rendering, and modern React", "Modules 31–35", "Understand DOM APIs, SSR, RSC, React Compiler, and modern resource/action APIs.", [
  mod(31, "React DOM and browser rendering APIs", "Work with roots, hydration, portals, and React DOM resource APIs.", [
    s("Understanding React DOM."), s("React DOM versus React."), s("react-dom package."), s("react-dom/client."), s("createRoot."), s("hydrateRoot."), s("root.render."), s("root.unmount."), s("Hydration fundamentals."), s("Hydration lifecycle."), s("Hydration mismatch."), s("Hydration error handling."), s("Portals."), s("createPortal."), s("Portal event propagation."), s("Portal lifecycle."), s("Multiple React roots."), s("Root-level error handling."), s("onCaughtError."), s("onUncaughtError."), s("onRecoverableError."), s("flushSync."), s("flushSync limitations."), s("preconnect."), s("prefetchDNS."), s("preload."), s("preloadModule."), s("preinit."), s("preinitModule."), s("Resource loading APIs."), s("React-managed resource behavior."), s("React DOM API limitations."), s("Production-grade React DOM integration."),
  ]),
  mod(32, "Server-side rendering (SSR)", "Render React on the server, stream HTML, and hydrate correctly on the client.", [
    s("What is server-side rendering?"), s("Why SSR exists."), s("Client-side rendering versus SSR."), s("React rendering on the server."), s("Server rendering architecture."), s("Server-rendered HTML."), s("Initial HTML generation."), s("React server rendering APIs."), s("renderToString."), s("renderToStaticMarkup."), s("renderToPipeableStream."), s("renderToReadableStream."), s("Streaming SSR."), s("Streaming HTML."), s("Suspense during SSR."), s("Server rendering errors."), s("Hydration after SSR."), s("Hydration consistency."), s("Hydration mismatch debugging."), s("Browser-only component behavior."), s("Server and client rendering differences."), s("SSR with context."), s("SSR with state."), s("SSR and effects."), s("SSR and resource loading."), s("SSR performance considerations."), s("SSR memory considerations."), s("SSR error handling."), s("SSR testing."), s("Production SSR architecture."),
  ]),
  mod(33, "React Server Components (RSC)", "Understand server/client component boundaries, serialization, and RSC architecture.", [
    s("What are React Server Components?"), s("Why Server Components exist."), s("Server Components versus Client Components."), s("React Server Components architecture."), s("Server Component rendering."), s("Client Component rendering."), s("Server and client boundaries."), s("The 'use client' directive."), s("The 'use server' directive."), s("Server Component composition."), s("Client Component composition."), s("Passing props across component boundaries."), s("Serialization constraints."), s("Server Component limitations."), s("Client Component limitations."), s("Server Component data access concepts."), s("Server Component state limitations."), s("Server Components and interactivity."), s("Server Components and Suspense."), s("Server Components and streaming."), s("Server Components and hydration."), s("Server Component payload concepts."), s("Module graph boundaries."), s("Client bundle implications."), s("RSC security considerations."), s("RSC error handling."), s("RSC caching concepts."), s("RSC performance."), s("RSC architecture patterns."), s("RSC production considerations."),
  ]),
  mod(34, "React Compiler", "Adopt automatic memoization and understand compiler boundaries and diagnostics.", [
    s("What is React Compiler?"), s("Why React Compiler exists."), s("Compiler architecture overview."), s("Automatic memoization."), s("Component optimization."), s("Value memoization."), s("Function memoization."), s("Compiler analysis."), s("Compiler optimization boundaries."), s("React Compiler configuration."), s("Compiler directives."), s("Compilation modes."), s("Compilation diagnostics."), s("Compiler compatibility."), s("Compiler limitations."), s("Unsupported coding patterns."), s("React Compiler and Rules of React."), s("React Compiler and existing memoization."), s("Compiler integration."), s("Compiler performance."), s("Debugging compiler-related behavior."), s("Verifying compiler optimizations."), s("Adopting React Compiler in existing projects."), s("Production deployment considerations."),
  ]),
  mod(35, "Advanced React resource and action APIs", "Use modern React APIs for resources, actions, optimistic UI, and async rendering.", [
    s("React resource model."), s("Promise resources."), s("Context resources."), s("The use API."), s("Reading promises with use."), s("Reading context with use."), s("Suspense integration."), s("Error boundary integration."), s("Resource loading behavior."), s("Resource caching concepts."), s("cache."), s("cacheSignal."), s("useActionState."), s("useOptimistic."), s("useFormStatus."), s("startTransition."), s("addTransitionType."), s("useEffectEvent."), s("Activity."), s("ViewTransition."), s("Resource lifetime."), s("Async rendering patterns."), s("Action state management."), s("Optimistic state reconciliation."), s("Pending state management."), s("Error and rollback handling."), s("API compatibility and availability."), s("Production usage patterns."),
  ]),
]);

const quality = phase(7, "React testing and quality engineering", "Modules 36–38", "Test behavior, integrate confidently, and build accessible React interfaces.", [
  mod(36, "React component testing", "Test components as users experience them and verify behavior reliably.", [
    s("Why React component testing matters."), s("Testing React component behavior."), s("Component rendering in tests."), s("Rendering with props."), s("Rendering with context."), s("Rendering with providers."), s("Testing component output."), s("Testing conditional rendering."), s("Testing list rendering."), s("Testing user interactions."), s("Testing click events."), s("Testing form interactions."), s("Testing keyboard interactions."), s("Testing component state."), s("Testing component updates."), s("Testing component cleanup."), s("Testing custom hooks."), s("Testing context providers."), s("Testing reducers."), s("Testing error boundaries."), s("Testing Suspense."), s("Testing lazy components."), s("Testing portals."), s("Testing refs."), s("Testing accessibility behavior."), s("Testing asynchronous rendering."), s("Testing React transitions."), s("Testing optimistic updates."), s("Testing component isolation."), s("Avoiding implementation-detail testing."),
  ]),
  mod(37, "React integration and end-to-end testing", "Validate multi-component flows, SSR/hydration, and real user journeys.", [
    s("Integration testing fundamentals."), s("Component integration testing."), s("Multi-component testing."), s("Provider integration testing."), s("Routing integration testing."), s("Form integration testing."), s("State integration testing."), s("Context integration testing."), s("Error handling integration testing."), s("Suspense integration testing."), s("SSR integration testing."), s("Hydration testing."), s("Browser-level React testing."), s("End-to-end testing."), s("Testing complete user workflows."), s("Testing loading states."), s("Testing error states."), s("Testing empty states."), s("Testing optimistic UI."), s("Testing concurrent interactions."), s("Testing navigation behavior."), s("Visual regression testing."), s("Component interaction testing."), s("Flaky test prevention."), s("Test isolation."), s("Test data management."), s("Test coverage."), s("Regression testing."), s("Maintaining React test suites."), s("Production-grade testing strategy."),
  ]),
  mod(38, "React accessibility engineering", "Build accessible, keyboard-friendly, screen-reader-aware React components.", [
    s("Accessible React components."), s("Semantic component composition."), s("Accessible component APIs."), s("Accessible forms."), s("Accessible labels."), s("Accessible buttons."), s("Accessible navigation."), s("Accessible dialogs."), s("Accessible modal components."), s("Keyboard navigation."), s("Focus management."), s("Focus restoration."), s("Focus trapping."), s("Accessible dropdowns."), s("Accessible menus."), s("Accessible tabs."), s("Accessible accordions."), s("Accessible tooltips."), s("Accessible error messages."), s("Accessible loading states."), s("Screen reader announcements."), s("ARIA attributes."), s("ARIA roles."), s("ARIA state and property management."), s("Accessible dynamic updates."), s("Accessible portals."), s("Accessible component libraries."), s("Accessibility testing."), s("Accessibility regression prevention."), s("Building accessible reusable React components."),
  ]),
]);

const enterprise = phase(8, "Enterprise and production-grade React", "Modules 39–43", "Scale component libraries, teams, security, observability, and long-term maintenance.", [
  mod(39, "Scalable React component library engineering", "Design, version, test, and maintain reusable component libraries.", [
    s("Component library architecture."), s("Component API design."), s("Reusable component contracts."), s("Component composition standards."), s("Component variants."), s("Component size and complexity standards."), s("Compound component libraries."), s("Headless component architecture."), s("Design-system integration."), s("Theme providers."), s("Provider architecture."), s("Shared component behavior."), s("Controlled component APIs."), s("Uncontrolled component APIs."), s("Component state isolation."), s("Component accessibility contracts."), s("Component documentation."), s("Component examples."), s("Component testing."), s("Visual regression testing."), s("Component versioning."), s("Backward compatibility."), s("Deprecating component APIs."), s("Managing breaking changes."), s("Maintaining component libraries."), s("Component library performance."), s("Component library distribution."), s("Enterprise design-system architecture."),
  ]),
  mod(40, "Large-scale React application management", "Manage complex features, ownership, and architecture across large codebases and teams.", [
    s("Managing large component trees."), s("Managing complex feature modules."), s("Feature-based architecture."), s("Shared component ownership."), s("State ownership at scale."), s("Context provider architecture."), s("Custom hook governance."), s("Component dependency management."), s("Cross-feature communication."), s("Shared UI contracts."), s("Reusable layout architecture."), s("Application shell architecture."), s("Managing complex forms."), s("Managing complex component state."), s("Managing large data-driven interfaces."), s("Component boundaries across teams."), s("Feature isolation."), s("Incremental component refactoring."), s("Legacy React modernization."), s("Large-scale component migration."), s("Avoiding monolithic components."), s("Avoiding over-fragmented components."), s("Architecture consistency."), s("React engineering standards."), s("Multi-team React development."), s("Long-term maintainability."),
  ]),
  mod(41, "React security and production resilience", "Render untrusted content safely and design resilient, secure UI boundaries.", [
    s("React security fundamentals."), s("Rendering untrusted content."), s("Cross-site scripting considerations."), s("Safe content rendering."), s("dangerouslySetInnerHTML."), s("Sanitization boundaries."), s("URL handling."), s("User-generated content."), s("Client-side security limitations."), s("Sensitive information in UI state."), s("Secure error presentation."), s("Authentication UI boundaries."), s("Authorization-aware rendering."), s("Server Component security boundaries."), s("Server Action security considerations."), s("Avoiding trust in client-side validation."), s("Error boundary strategies."), s("Graceful component failures."), s("Recovery UI."), s("Production resilience patterns."), s("Preventing accidental data exposure."), s("Secure component design."),
  ]),
  mod(42, "React observability and debugging", "Inspect, profile, and debug rendering, state, hydration, and production issues.", [
    s("React debugging fundamentals."), s("React Developer Tools."), s("Component inspection."), s("Props inspection."), s("State inspection."), s("Context inspection."), s("Component tree inspection."), s("Render tracking."), s("Profiler usage."), s("Identifying unnecessary renders."), s("Debugging state updates."), s("Debugging effects."), s("Debugging custom hooks."), s("Debugging context updates."), s("Debugging reconciliation."), s("Debugging key-related problems."), s("Debugging hydration mismatches."), s("Debugging Suspense behavior."), s("Debugging error boundaries."), s("Debugging concurrent rendering."), s("React performance traces."), s("Component-level performance measurement."), s("Production error reporting integration."), s("UI failure investigation."), s("React-specific incident analysis."),
  ]),
  mod(43, "React upgrades and long-term maintenance", "Plan upgrades, adopt modern APIs, and keep React systems healthy over time.", [
    s("Understanding React release versions."), s("Stable versus experimental APIs."), s("React version compatibility."), s("React upgrade planning."), s("Breaking changes."), s("Deprecated APIs."), s("Legacy API identification."), s("React 18 to React 19 migration."), s("React 19 feature adoption."), s("Future React version migration planning."), s("Ref migration."), s("Legacy component migration."), s("Migrating class components."), s("Modernizing effect usage."), s("Modernizing state management."), s("Adopting modern Suspense patterns."), s("Adopting React Compiler."), s("React Server Components migration considerations."), s("Regression prevention."), s("Backward compatibility."), s("Incremental modernization."), s("Managing technical debt."), s("Maintaining React component contracts."), s("Long-term React architecture evolution."),
  ]),
]);

const projects = phase(9, "Practical React mastery projects", "Projects P1–P8", "Apply React concepts by building progressively harder, production-shaped projects.", [
  project(1, "Reusable component collection", "Build a beginner-friendly set of reusable, accessible UI components.", [
    s("Project setup."), s("Button."), s("Input."), s("Textarea."), s("Select."), s("Checkbox."), s("Radio."), s("Modal."), s("Dropdown."), s("Tooltip."), s("Accordion."), s("Tabs."), s("Card."), s("Alert."), s("Badge."), s("Pagination."), s("Loader."), s("Consistent component APIs."), s("Controlled and uncontrolled behavior."), s("Accessible interactions and organization."),
  ]),
  project(2, "Advanced component library", "Compose compound, headless, polymorphic, and context-based components.", [
    s("Project setup."), s("Compound components."), s("Headless components."), s("Polymorphic components."), s("Context-based components."), s("Reusable form components."), s("Reusable data display components."), s("Reusable navigation components."), s("Reusable overlay components."), s("Component contracts and testing."), s("Maintainable abstractions."),
  ]),
  project(3, "Custom hooks library", "Create reusable hooks with correct cleanup, dependencies, and APIs.", [
    s("Project setup."), s("useToggle."), s("usePrevious."), s("useDebounce."), s("useLocalStorage."), s("useSessionStorage."), s("useClickOutside."), s("useMediaQuery."), s("useWindowSize."), s("useEventListener."), s("useIntersectionObserver."), s("useTimeout."), s("useInterval."), s("useFetch."), s("useOnlineStatus."), s("useMounted."), s("Hook testing and reuse."),
  ]),
  project(4, "Advanced state management system", "Build a typed state solution with React primitives.", [
    s("Project setup."), s("Context-based state."), s("Reducer-based state."), s("Multiple state providers."), s("Selectors."), s("State subscriptions."), s("State composition."), s("Action dispatching."), s("State initialization."), s("State reset."), s("State persistence integration."), s("Predictable transitions and architecture."),
  ]),
  project(5, "Advanced form management system", "Design a reusable form system with validation, async flows, and optimistic updates.", [
    s("Project setup."), s("Form state."), s("Field state."), s("Controlled inputs."), s("Uncontrolled inputs."), s("Validation integration."), s("Nested fields."), s("Dynamic fields."), s("Field arrays."), s("Multi-step forms."), s("Form submission."), s("Async validation."), s("Submission status."), s("Error handling."), s("Optimistic updates and reset."),
  ]),
  project(6, "Enterprise dashboard", "Build a complex, performant dashboard with resilient UI states.", [
    s("Project setup."), s("Multiple pages and reusable layouts."), s("Complex forms."), s("Data tables, filters, search, pagination."), s("Modal workflows."), s("Shared application state."), s("Reusable component library."), s("Error handling and loading states."), s("Suspense boundaries."), s("Performance optimization."), s("Testing and profiling."),
  ]),
  project(7, "Enterprise-grade React component library", "Ship a production-quality, documented, versioned component library.", [
    s("Project setup."), s("Design-system-compatible components."), s("Compound and headless components."), s("Accessibility support."), s("Theme integration and variants."), s("Reusable hooks."), s("Component documentation and examples."), s("Component tests."), s("Visual regression tests."), s("Stable public APIs."), s("Backward compatibility and maintenance."),
  ]),
  project(8, "Advanced React rendering application", "Demonstrate modern rendering features and study their behavior and limitations.", [
    s("Project setup."), s("Lazy loading and Suspense."), s("Error boundaries."), s("Concurrent rendering."), s("Transitions and deferred values."), s("Optimistic UI."), s("Server rendering and hydration."), s("React Server Components."), s("React Compiler."), s("Behavior analysis and limitations."),
  ]),
]);

export const reactRoadmap: NoteCourse = {
  id: "react",
  title: "React Mastery",
  shortTitle: "React",
  kicker: "9 phases · 43 modules · 8 projects",
  description:
    "A complete, visual React path from components and hooks to architecture, modern rendering, testing, and production engineering.",
  accent: "sky",
  phases: [foundations, stateHooks, advanced, architecture, performance, modern, quality, enterprise, projects],
};

export const reactSections = reactRoadmap.phases.flatMap((p) =>
  p.modules.flatMap((m) => m.sections.map((section) => ({ section, module: m, phase: p }))),
);

export const reactSectionById = new Map(reactSections.map((e) => [e.section.id, e]));

export function reactReviewSnapshot(): ReviewSnapshot {
  return Object.fromEntries(reactSections.map(({ section }) => [section.id, section.status]));
}
