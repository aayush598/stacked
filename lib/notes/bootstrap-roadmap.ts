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
  const id = `bs-m${String(number).padStart(2, "0")}`;
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
  const id = `bs-p${String(number).padStart(2, "0")}`;
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
    id: `bs-phase-${String(number).padStart(2, "0")}`,
    number,
    title,
    subtitle,
    summary,
    modules,
  };
}

const fundamentals = phase(1, "Bootstrap fundamentals", "Modules 01–08", "Learn Bootstrap foundations: setup, containers, grid, breakpoints, spacing, display, positioning, and flex utilities.", [
  mod(1, "Introduction to Bootstrap", "What Bootstrap is, why it exists, and how its architecture, versions, and ecosystem fit together.", [
    s("What is Bootstrap?"), s("Why Bootstrap exists."), s("Problems Bootstrap solves."), s("Bootstrap design philosophy."), s("Bootstrap as a frontend framework."), s("Bootstrap features."), s("Bootstrap architecture."), s("Bootstrap history."), s("Bootstrap version evolution."), s("Bootstrap 3 versus Bootstrap 4 versus Bootstrap 5."), s("Bootstrap 5 architecture."), s("Bootstrap 5.3 features."), s("Bootstrap CSS framework."), s("Bootstrap JavaScript plugins."), s("Bootstrap Sass architecture."), s("Bootstrap utility-first concepts."), s("Bootstrap component-based development."), s("Bootstrap responsive design philosophy."), s("Bootstrap browser compatibility."), s("Bootstrap limitations."), s("When to use Bootstrap."), s("When not to use Bootstrap."), s("Bootstrap versus other UI frameworks."), s("Understanding Bootstrap documentation."), s("Understanding Bootstrap's official class reference."),
  ]),
  mod(2, "Bootstrap installation and setup", "Install, configure, and integrate Bootstrap assets in projects and modern workflows.", [
    s("Bootstrap installation methods."), s("CDN installation."), s("Downloading Bootstrap."), s("Installing through npm."), s("Installing through package managers."), s("Bootstrap CSS files."), s("Bootstrap JavaScript files."), s("Bootstrap bundle."), s("Bootstrap JavaScript dependencies."), s("Bootstrap CSS versus JavaScript."), s("Bootstrap with bundlers."), s("Bootstrap with module-based applications."), s("Bootstrap with React."), s("Bootstrap stylesheet integration."), s("Bootstrap JavaScript integration."), s("Importing individual Bootstrap plugins."), s("Understanding Bootstrap distribution files."), s("Understanding minified files."), s("Understanding source files."), s("Bootstrap project setup."), s("Bootstrap version management."), s("CDN versus local installation."), s("Development versus production assets."), s("Bootstrap setup best practices."),
  ]),
  mod(3, "Bootstrap containers and layout fundamentals", "Understand containers, rows, columns, gutters, and the foundations of Bootstrap layout.", [
    s("Bootstrap layout system."), s("Container fundamentals."), s(".container"), s(".container-fluid"), s(".container-{breakpoint}"), s("Responsive containers."), s("Container maximum widths."), s("Container breakpoints."), s("Container padding."), s("Container nesting."), s("Container alignment."), s("Container versus fluid container."), s("Row fundamentals"), s(".row"), s("Column fundamentals"), s(".col"), s("Row and column relationship."), s("Gutters."), s("Horizontal gutters."), s("Vertical gutters."), s("Responsive gutters."), s("Nested rows."), s("Nested columns."), s("Layout spacing."), s("Common container mistakes."),
  ]),
  mod(4, "Bootstrap responsive grid system", "Master the 12-column grid, responsive columns, ordering, offsets, and layout patterns.", [
    s("Understanding the 12-column grid."), s("Grid architecture."), s("Column sizing."), s("Equal-width columns."), s("Auto-layout columns."), s("Fixed-width columns."), s("Responsive column classes"), s(".col-"), s(".col-sm-"), s(".col-md-"), s(".col-lg-"), s(".col-xl-"), s(".col-xxl-"), s("Breakpoint-specific layouts."), s("Column wrapping."), s("Column ordering"), s(".order-*"), s(".order-first"), s(".order-last"), s("Column offsets"), s(".offset-*"), s("Responsive offsets."), s("Column nesting."), s("Column alignment."), s("Horizontal alignment."), s("Vertical alignment."), s("Equal-height columns."), s("Responsive grid combinations."), s("Grid-based page layouts."), s("Grid debugging techniques."), s("Grid limitations."), s("Responsive grid best practices."),
  ]),
  mod(5, "Bootstrap breakpoints and responsive behavior", "Design mobile-first, breakpoint-aware interfaces across all viewport sizes.", [
    s("Responsive design fundamentals in Bootstrap."), s("Mobile-first design."), s("Bootstrap breakpoint system."), s("Extra small screens."), s("Small screens."), s("Medium screens."), s("Large screens."), s("Extra large screens."), s("Extra extra large screens."), s("Responsive class behavior."), s("Minimum breakpoint behavior."), s("Maximum breakpoint behavior."), s("Breakpoint-specific visibility."), s("Responsive sizing."), s("Responsive spacing."), s("Responsive typography."), s("Responsive alignment."), s("Responsive display."), s("Responsive flexbox."), s("Responsive positioning."), s("Responsive navigation."), s("Responsive grid design."), s("Mobile-first component design."), s("Tablet layouts."), s("Desktop layouts."), s("Ultra-wide layouts."), s("Responsive testing."), s("Handling unusual viewport sizes."), s("Breakpoint customization."), s("Responsive design best practices."),
  ]),
  mod(6, "Bootstrap spacing utilities", "Control margin, padding, gaps, and consistent spacing systems with Bootstrap utilities.", [
    s("Understanding Bootstrap spacing."), s("Margin utilities."), s("Padding utilities."), s("Top margin."), s("Bottom margin."), s("Start margin."), s("End margin."), s("Horizontal margin."), s("Vertical margin."), s("All-side margin."), s("Top padding."), s("Bottom padding."), s("Start padding."), s("End padding."), s("Horizontal padding."), s("Vertical padding."), s("All-side padding."), s("Auto margins."), s("Negative margins."), s("Responsive spacing."), s("Spacing scale."), s("Spacing utility values."), s("Custom spacing values."), s("Spacing with breakpoints."), s("Spacing consistency."), s("Spacing composition."), s("Common spacing mistakes."), s("Creating consistent spacing systems."),
  ]),
  mod(7, "Bootstrap display, visibility, and positioning utilities", "Control display, visibility, stacking, and positioning responsively.", [
    s("Display utilities."), s("d-none."), s("d-inline."), s("d-inline-block."), s("d-block."), s("d-grid."), s("d-flex."), s("d-inline-flex."), s("Responsive display utilities."), s("Visibility utilities"), s(".visible"), s(".invisible"), s("Screen-reader-only utilities."), s("Position utilities"), s(".position-static"), s(".position-relative"), s(".position-absolute"), s(".position-fixed"), s(".position-sticky"), s("Positioning edges."), s("Top utilities."), s("Bottom utilities."), s("Start utilities."), s("End utilities."), s("Translate utilities."), s("Center positioning."), s("Fixed positioning."), s("Sticky positioning."), s("Z-index utilities."), s("Positioning best practices."),
  ]),
  mod(8, "Bootstrap flexbox utilities", "Build flexible, aligned, responsive layouts using Bootstrap flex utilities.", [
    s("Flexbox utility fundamentals."), s("Flex containers."), s("Flex direction"), s(".flex-row"), s(".flex-column"), s("Reverse direction."), s("Flex wrapping."), s("No-wrap behavior."), s("Flex wrapping reversal."), s("Justify content."), s("Align items."), s("Align self."), s("Align content."), s("Flex grow."), s("Flex shrink."), s("Flex fill."), s("Flex basis."), s("Auto margins in flexbox."), s("Flex ordering."), s("Gap utilities."), s("Responsive flexbox utilities."), s("Nested flex containers."), s("Flex-based layouts."), s("Common flexbox patterns."), s("Flexbox debugging."), s("Production flexbox best practices."),
  ]),
]);

const utilities = phase(2, "Bootstrap utilities and visual styling", "Modules 09–15", "Style typography, color, borders, sizing, media, tables, forms, and helpers with utilities.", [
  mod(9, "Bootstrap typography utilities", "Style and structure text with Bootstrap typography, hierarchy, and responsive text utilities.", [
    s("Bootstrap typography fundamentals."), s("Headings."), s("Display headings."), s("Lead paragraphs."), s("Paragraph styling."), s("Font sizes."), s("Font weights."), s("Font styles."), s("Text alignment."), s("Responsive text alignment."), s("Text transformation."), s("Text decoration."), s("Text wrapping."), s("Text breaking."), s("Text truncation."), s("Text opacity."), s("Line height."), s("Monospace text."), s("Inline text elements."), s("Blockquotes."), s("Lists."), s("List unstyled."), s("List inline."), s("Description lists."), s("Responsive typography."), s("Typography hierarchy."), s("Typography consistency."),
  ]),
  mod(10, "Bootstrap colors and backgrounds", "Use theme colors, backgrounds, opacity, and contrast consistently and accessibly.", [
    s("Bootstrap color palette."), s("Theme colors."), s("Primary colors."), s("Secondary colors."), s("Success colors."), s("Danger colors."), s("Warning colors."), s("Info colors."), s("Light colors."), s("Dark colors."), s("Body colors."), s("Emphasis colors."), s("Text color utilities."), s("Background color utilities."), s("Background gradients."), s("Background opacity."), s("Text opacity."), s("Link colors."), s("Link opacity."), s("Subtle backgrounds."), s("Subtle borders."), s("Color contrast."), s("Color accessibility."), s("Semantic color usage."), s("Theme color customization."), s("Maintaining color consistency."),
  ]),
  mod(11, "Bootstrap borders, shadows, and sizing", "Apply borders, radii, shadows, sizing, and object-fit utilities effectively.", [
    s("Border utilities."), s("Border widths."), s("Border colors."), s("Border styles."), s("Border opacity."), s("Rounded corners."), s("Rounded sizes."), s("Individual corner rounding."), s("Circle borders."), s("Pill shapes."), s("Shadow utilities."), s("Shadow sizes."), s("No-shadow utility."), s("Width utilities."), s("Height utilities."), s("Maximum width."), s("Maximum height."), s("Minimum width."), s("Minimum height."), s("Viewport sizing."), s("Object-fit utilities."), s("Overflow utilities."), s("Responsive sizing."), s("Sizing composition."), s("Box sizing."), s("Production sizing standards."),
  ]),
  mod(12, "Bootstrap images, figures, and media", "Present responsive, accessible images and media with Bootstrap utilities and patterns.", [
    s("Responsive images"), s(".img-fluid"), s("Image thumbnails."), s("Image alignment."), s("Image shapes."), s("Rounded images."), s("Circular images."), s("Figure components."), s("Figure captions."), s("Image object fitting."), s("Image containers."), s("Responsive image layouts."), s("Image overflow."), s("Background images."), s("Image accessibility."), s("Alternative text conventions."), s("Media-heavy layout patterns."), s("Optimizing image presentation."),
  ]),
  mod(13, "Bootstrap tables", "Create readable, responsive, and accessible data tables with Bootstrap.", [
    s("Bootstrap table fundamentals."), s("Basic tables."), s("Table borders."), s("Borderless tables."), s("Striped rows."), s("Hoverable rows."), s("Small tables."), s("Dark tables."), s("Table variants."), s("Table captions."), s("Table head styling."), s("Table body styling."), s("Table footer styling."), s("Active table rows."), s("Responsive tables."), s("Table nesting."), s("Table alignment."), s("Table sizing."), s("Table accessibility."), s("Complex data table layouts."), s("Table responsiveness."), s("Table design best practices."),
  ]),
  mod(14, "Bootstrap forms", "Build consistent, accessible, and validated forms with Bootstrap controls and layouts.", [
    s("Bootstrap form fundamentals."), s("Form control styling."), s("Text inputs."), s("Email inputs."), s("Password inputs."), s("Number inputs."), s("Date inputs."), s("File inputs."), s("Textareas."), s("Select controls."), s("Multiple select."), s("Checkboxes."), s("Radio buttons."), s("Switches."), s("Range inputs."), s("Input groups."), s("Floating labels."), s("Form labels."), s("Form text."), s("Form sizing."), s("Disabled controls."), s("Readonly controls."), s("Disabled fieldsets."), s("Horizontal forms."), s("Inline forms."), s("Grid-based forms."), s("Form validation."), s("Valid states."), s("Invalid states."), s("Feedback messages."), s("Server-side validation presentation."), s("Accessible form design."), s("Complex form layouts."), s("Form styling conventions."),
  ]),
  mod(15, "Bootstrap helpers and specialized utilities", "Use Bootstrap helpers for common patterns, accessibility, ratios, interactions, and layout fixes.", [
    s("Clearfix."), s("Color links."), s("Focus ring utilities."), s("Icon link utilities."), s("Position utilities."), s("Ratio utilities."), s("Stretched links."), s("Text truncation."), s("Vertical rules."), s("Visually hidden utilities."), s("Focusable visually hidden elements."), s("Accessibility helpers."), s("Link utilities."), s("Object-fit helpers."), s("Interaction utilities."), s("Pointer events."), s("User selection utilities."), s("Scroll behavior utilities."), s("Float utilities."), s("Float clearing."), s("Utility composition."), s("Responsive helper usage."), s("Helper limitations."),
  ]),
]);

const components = phase(3, "Bootstrap components", "Modules 16–24", "Master Bootstrap UI components: buttons, navigation, overlays, content, feedback, dialogs, and specialized components.", [
  mod(16, "Bootstrap buttons and interactive components", "Create consistent, accessible button styles, states, groups, and toggle patterns.", [
    s("Button fundamentals."), s("Button variants."), s("Primary buttons."), s("Secondary buttons."), s("Success buttons."), s("Danger buttons."), s("Warning buttons."), s("Info buttons."), s("Light buttons."), s("Dark buttons."), s("Link buttons."), s("Outline buttons."), s("Button sizes."), s("Full-width buttons."), s("Disabled buttons."), s("Active buttons."), s("Button groups."), s("Button toolbars."), s("Vertical button groups."), s("Nested button groups."), s("Toggle buttons."), s("Checkbox button groups."), s("Radio button groups."), s("Accessible button states."), s("Button design patterns."),
  ]),
  mod(17, "Bootstrap navigation components", "Build responsive navigation bars, tabs, pills, and scalable nav patterns.", [
    s("Navigation fundamentals."), s("Basic nav."), s("Horizontal navigation."), s("Vertical navigation."), s("Navigation alignment."), s("Navigation spacing."), s("Active navigation."), s("Disabled navigation."), s("Nav tabs."), s("Nav pills."), s("Fill navigation."), s("Justified navigation."), s("Dynamic tab content."), s("Tab panes."), s("Tab interaction."), s("Navbar fundamentals."), s("Navbar branding."), s("Navbar links."), s("Navbar toggler."), s("Navbar collapse."), s("Responsive navbar."), s("Navbar positioning."), s("Sticky navbar."), s("Fixed navbar."), s("Navbar colors."), s("Navbar themes."), s("Dropdown navigation."), s("Complex navbar structures."), s("Accessible navigation."), s("Scalable navigation patterns."),
  ]),
  mod(18, "Bootstrap dropdowns and overlays", "Implement dropdown menus with correct structure, positioning, behavior, and accessibility.", [
    s("Dropdown fundamentals."), s("Dropdown triggers."), s("Dropdown menus."), s("Dropdown items."), s("Active items."), s("Disabled items."), s("Dropdown headers."), s("Dropdown dividers."), s("Dropdown sizing."), s("Dropdown positioning."), s("Dropdown alignment."), s("Dropup."), s("Dropstart."), s("Dropend."), s("Split dropdown buttons."), s("Auto-close behavior."), s("Dropdown offset."), s("Dropdown menu customization."), s("Nested dropdown considerations."), s("Dropdown accessibility."), s("Common dropdown mistakes."),
  ]),
  mod(19, "Bootstrap cards and content components", "Compose flexible card-based content, media, and dashboard layouts.", [
    s("Card fundamentals."), s("Card structure."), s("Card body."), s("Card headers."), s("Card footers."), s("Card titles."), s("Card subtitles."), s("Card text."), s("Card images."), s("Card image overlays."), s("Card links."), s("Card groups."), s("Card grids."), s("Card columns and version considerations."), s("Horizontal cards."), s("Equal-height cards."), s("Responsive cards."), s("Card customization."), s("Card composition."), s("Card-based dashboard layouts."), s("Card accessibility."), s("Reusable card design patterns."),
  ]),
  mod(20, "Bootstrap alerts, badges, and progress components", "Communicate feedback, status, and progress with accessible Bootstrap components.", [
    s("Alert fundamentals."), s("Alert variants."), s("Dismissible alerts."), s("Alert icons."), s("Alert links."), s("Alert headings."), s("Badge fundamentals."), s("Badge variants."), s("Positioned badges."), s("Notification badges."), s("Progress bar fundamentals."), s("Progress values."), s("Progress labels."), s("Progress variants."), s("Striped progress bars."), s("Animated progress bars."), s("Multiple progress bars."), s("Stacked progress bars."), s("Accessible progress indicators."), s("Custom progress presentation."),
  ]),
  mod(21, "Bootstrap modals and dialogs", "Create accessible, configurable modal dialogs and reusable dialog patterns.", [
    s("Modal fundamentals."), s("Modal structure."), s("Modal headers."), s("Modal bodies."), s("Modal footers."), s("Modal triggers."), s("Modal dismissal."), s("Modal sizes."), s("Fullscreen modals."), s("Vertically centered modals."), s("Scrollable modals."), s("Static backdrop."), s("Keyboard dismissal."), s("Modal backdrops."), s("Multiple modal considerations."), s("Modal events."), s("Modal JavaScript API."), s("Modal focus management."), s("Modal accessibility."), s("Modal forms."), s("Confirmation dialogs."), s("Reusable modal patterns."), s("Modal lifecycle."), s("Common modal mistakes."),
  ]),
  mod(22, "Bootstrap tooltips, popovers, and toasts", "Add contextual overlays and notifications with proper initialization and accessibility.", [
    s("Tooltip fundamentals."), s("Tooltip initialization."), s("Tooltip positioning."), s("Tooltip triggers."), s("Tooltip content."), s("Tooltip HTML configuration."), s("Tooltip customization."), s("Tooltip lifecycle events."), s("Tooltip accessibility."), s("Popover fundamentals."), s("Popover initialization."), s("Popover headers."), s("Popover content."), s("Popover placement."), s("Popover triggers."), s("Popover dismissal."), s("Popover lifecycle."), s("Toast fundamentals."), s("Toast headers."), s("Toast bodies."), s("Toast positioning."), s("Toast autohide."), s("Toast delays."), s("Toast stacking."), s("Toast JavaScript APIs."), s("Toast accessibility."), s("Notification design patterns."),
  ]),
  mod(23, "Bootstrap accordion, collapse, and carousel", "Build expandable content and carousels with correct behavior and accessibility.", [
    s("Collapse fundamentals."), s("Collapse triggers."), s("Collapse targets."), s("Show and hide behavior."), s("Multiple collapse targets."), s("Accordion fundamentals."), s("Accordion structure."), s("Accordion items."), s("Accordion headers."), s("Accordion buttons."), s("Always-open accordion behavior."), s("Accordion accessibility."), s("Nested accordion considerations."), s("Carousel fundamentals."), s("Carousel structure."), s("Carousel items."), s("Carousel indicators."), s("Carousel controls."), s("Automatic cycling."), s("Slide intervals."), s("Pause behavior."), s("Keyboard controls."), s("Touch support."), s("Carousel captions."), s("Crossfade."), s("Carousel events."), s("Carousel JavaScript API."), s("Carousel accessibility."), s("Performance considerations."),
  ]),
  mod(24, "Bootstrap specialized components", "Use breadcrumbs, pagination, spinners, list groups, offcanvas, scrollspy, and state patterns.", [
    s("Breadcrumbs."), s("Pagination."), s("Spinners."), s("Placeholder components."), s("List groups."), s("List group variants."), s("List group action items."), s("List group horizontal layouts."), s("Offcanvas fundamentals."), s("Offcanvas structure."), s("Offcanvas backdrops."), s("Offcanvas placement."), s("Offcanvas responsive behavior."), s("Offcanvas accessibility."), s("Scrollspy."), s("Scrollspy navigation."), s("Scrollspy targets."), s("Scrollspy events."), s("Scrollspy JavaScript API."), s("Responsive component combinations."), s("Empty-state components."), s("Loading-state components."), s("Error-state components."), s("Dashboard-specific component combinations."),
  ]),
]);

const javascript = phase(4, "Bootstrap JavaScript and advanced behavior", "Modules 25–27", "Understand Bootstrap plugins, APIs, lifecycle, and integration with React.", [
  mod(25, "Bootstrap JavaScript architecture", "Understand Bootstrap plugins, data/programmatic APIs, configuration, events, and lifecycle.", [
    s("Bootstrap JavaScript fundamentals."), s("Bootstrap JavaScript architecture."), s("Bootstrap plugins."), s("Bootstrap bundle."), s("Dependency management."), s("Native JavaScript implementation concepts."), s("Plugin initialization."), s("Data API."), s("Programmatic initialization."), s("Programmatic plugin control."), s("Plugin instances."), s("getInstance()"), s("getOrCreateInstance()"), s("Plugin configuration."), s("Data attributes."), s("JavaScript configuration options."), s("Data attribute configuration."), s("Configuration precedence."), s("Plugin methods."), s("Plugin lifecycle."), s("Plugin events."), s("Custom event handling."), s("Event namespaces."), s("Asynchronous transitions."), s("Transition completion events."), s("Plugin disposal."), s("dispose()"), s("Plugin accessibility behavior."), s("Plugin customization."), s("Common JavaScript plugin mistakes."),
  ]),
  mod(26, "Bootstrap JavaScript plugins in depth", "Deep-dive each Bootstrap plugin: options, methods, events, lifecycle, and production usage.", [
    s("Alert plugin."), s("Button plugin."), s("Carousel plugin."), s("Collapse plugin."), s("Dropdown plugin."), s("Modal plugin."), s("Offcanvas plugin."), s("Popover plugin."), s("Scrollspy plugin."), s("Tab plugin."), s("Toast plugin."), s("Tooltip plugin."), s("Plugin HTML structure patterns."), s("Plugin data attributes."), s("Plugin configuration options."), s("Programmatic initialization patterns."), s("Instance retrieval patterns."), s("Public methods usage."), s("Plugin events handling."), s("Plugin lifecycle management."), s("Plugin accessibility behavior."), s("Plugin customization strategies."), s("Plugin disposal and cleanup."), s("Common plugin integration issues."), s("Production usage patterns."),
  ]),
  mod(27, "Bootstrap with React integration", "Integrate Bootstrap styling and plugins safely within React applications.", [
    s("Bootstrap CSS integration."), s("Bootstrap JavaScript integration."), s("Bootstrap bundle integration."), s("Importing individual plugins."), s("Bootstrap class usage in React components."), s("JSX-compatible Bootstrap markup."), s("Bootstrap component composition."), s("Managing Bootstrap plugin instances."), s("Initializing plugins with React lifecycle."), s("Disposing plugins correctly."), s("Managing DOM ownership."), s("Bootstrap and React state synchronization."), s("Avoiding direct DOM manipulation conflicts."), s("Integrating Bootstrap modals with React."), s("Integrating Bootstrap dropdowns with React."), s("Integrating Bootstrap tooltips with React."), s("Integrating Bootstrap popovers with React."), s("Integrating Bootstrap tabs with React."), s("Integrating Bootstrap toasts with React."), s("Bootstrap event cleanup."), s("React Strict Mode considerations."), s("Reusable Bootstrap React wrappers."), s("Controlled component behavior."), s("Bootstrap component accessibility."), s("Bootstrap integration testing."), s("Avoiding duplicate state management."), s("Choosing between Bootstrap JavaScript and React-native behavior."), s("Maintaining React-compatible Bootstrap components."),
  ]),
]);

const customization = phase(5, "Advanced Bootstrap customization", "Modules 28–30", "Customize Bootstrap deeply with architecture, Sass, and CSS variables/theming.", [
  mod(28, "Bootstrap customization architecture", "Customize Bootstrap consistently: colors, typography, spacing, components, and output.", [
    s("Bootstrap customization fundamentals."), s("Understanding default Bootstrap styling."), s("Understanding Bootstrap variables."), s("Customizing theme colors."), s("Customizing body colors."), s("Customizing typography."), s("Customizing font families."), s("Customizing font sizes."), s("Customizing spacing."), s("Customizing breakpoints."), s("Customizing containers."), s("Customizing grid columns."), s("Customizing gutters."), s("Customizing border radii."), s("Customizing shadows."), s("Customizing component sizes."), s("Customizing buttons."), s("Customizing forms."), s("Customizing cards."), s("Customizing navigation."), s("Customizing modals."), s("Customizing component states."), s("Customizing utility values."), s("Customizing responsive behavior."), s("Customizing CSS output."), s("Maintaining customization consistency."),
  ]),
  mod(29, "Bootstrap Sass architecture", "Use Bootstrap Sass source, variables, maps, mixins, and the utility API for deep customization.", [
    s("Understanding Bootstrap Sass."), s("Bootstrap Sass source files."), s("Sass entry points."), s("Sass variables."), s("Variable overrides."), s("Sass maps."), s("Map manipulation."), s("Sass functions."), s("Sass mixins."), s("Sass loops."), s("Sass conditionals."), s("Sass interpolation."), s("Bootstrap function imports."), s("Bootstrap variable imports."), s("Bootstrap mixin imports."), s("Bootstrap root variables."), s("Bootstrap component variables."), s("Bootstrap utility variables."), s("Custom theme variables."), s("Custom color maps."), s("Custom breakpoint maps."), s("Custom spacing maps."), s("Custom typography maps."), s("Custom container configuration."), s("Custom grid configuration."), s("Custom utility generation."), s("Custom utility API."), s("Extending Bootstrap utilities."), s("Removing unused utility generation."), s("Importing individual Bootstrap components."), s("Import ordering."), s("Sass compilation."), s("Sass output optimization."), s("Managing Sass dependencies."), s("Maintaining custom Bootstrap themes."),
  ]),
  mod(30, "Bootstrap CSS variables and theming", "Leverage CSS custom properties and color modes for runtime theming and design tokens.", [
    s("Understanding CSS custom properties in Bootstrap."), s("Root-level variables."), s("Component-level variables."), s("Color CSS variables."), s("Typography CSS variables."), s("Spacing-related variables."), s("Border variables."), s("Shadow variables."), s("Component-specific variables."), s("Runtime theme customization."), s("CSS variable overrides."), s("Local component customization."), s("Global theme customization."), s("Theme inheritance."), s("Light theme architecture."), s("Dark theme architecture."), s("Color mode support."), s("data-bs-theme."), s("Component-level color modes."), s("Runtime theme switching."), s("Theme persistence integration."), s("System color preference integration."), s("Custom theme creation."), s("Multi-brand theme architecture."), s("Design token management."), s("Maintaining consistent themes."),
  ]),
]);

const engineering = phase(6, "Professional Bootstrap engineering", "Modules 31–35", "Build design systems, accessible interfaces, performant assets, maintainable code, and upgrade strategies.", [
  mod(31, "Bootstrap design systems and reusable UI architecture", "Build scalable design systems and reusable UI patterns on top of Bootstrap.", [
    s("What is a design system?"), s("Bootstrap as a design-system foundation."), s("Design tokens."), s("Color tokens."), s("Typography tokens."), s("Spacing tokens."), s("Border tokens."), s("Shadow tokens."), s("Breakpoint tokens."), s("Component tokens."), s("Theme architecture."), s("Brand customization."), s("Shared design rules."), s("Component variants."), s("Reusable UI patterns."), s("Reusable layout patterns."), s("Reusable navigation patterns."), s("Reusable form patterns."), s("Reusable card patterns."), s("Reusable modal patterns."), s("Shared component conventions."), s("Design-system documentation."), s("Component consistency."), s("Design-system versioning."), s("Design-system maintenance."), s("Preventing visual inconsistency."),
  ]),
  mod(32, "Bootstrap accessibility engineering", "Engineer accessible, keyboard-friendly, WCAG-conscious Bootstrap interfaces.", [
    s("Accessibility fundamentals in Bootstrap."), s("Semantic component structures."), s("Accessible navigation."), s("Accessible buttons."), s("Accessible forms."), s("Accessible form labels."), s("Accessible validation messages."), s("Accessible tables."), s("Accessible dropdowns."), s("Accessible modals."), s("Accessible offcanvas components."), s("Accessible tabs."), s("Accessible accordions."), s("Accessible tooltips."), s("Accessible popovers."), s("Accessible carousels."), s("Accessible alerts."), s("Accessible toasts."), s("Keyboard navigation."), s("Focus management."), s("Focus trapping."), s("Focus restoration."), s("ARIA attributes."), s("ARIA roles."), s("ARIA state attributes."), s("Screen reader compatibility."), s("Color contrast."), s("Reduced motion."), s("Accessibility testing."), s("WCAG compliance considerations."),
  ]),
  mod(33, "Bootstrap performance optimization", "Optimize Bootstrap CSS/JS delivery, bundle size, rendering, and production assets.", [
    s("Understanding Bootstrap CSS output."), s("Bootstrap bundle size."), s("CSS optimization."), s("JavaScript bundle optimization."), s("Sass selective imports."), s("Removing unused components."), s("Removing unused utilities."), s("Purging unused CSS."), s("Tree shaking considerations."), s("Minification."), s("Compression."), s("Critical CSS concepts."), s("CSS loading strategies."), s("JavaScript loading strategies."), s("Avoiding duplicate Bootstrap imports."), s("Avoiding duplicate component styles."), s("Reducing CSS specificity conflicts."), s("Optimizing responsive styles."), s("Optimizing image-heavy Bootstrap layouts."), s("Reducing unnecessary overrides."), s("Browser rendering performance."), s("Avoiding excessive DOM nesting."), s("Performance profiling."), s("Bundle analysis."), s("Production asset optimization."),
  ]),
  mod(34, "Bootstrap maintainability and coding standards", "Keep large Bootstrap codebases consistent, readable, and maintainable.", [
    s("Bootstrap class naming conventions."), s("Consistent utility usage."), s("Consistent component structure."), s("Consistent grid implementation."), s("Responsive class conventions."), s("Spacing conventions."), s("Typography conventions."), s("Color conventions."), s("Component organization."), s("Reusable layout patterns."), s("Custom CSS organization."), s("Sass partial organization."), s("Custom variable organization."), s("Theme organization."), s("Managing Bootstrap overrides."), s("Avoiding excessive !important."), s("Avoiding deeply nested selectors."), s("Avoiding duplicate utility classes."), s("Avoiding conflicting classes."), s("Avoiding excessive custom CSS."), s("Avoiding unnecessary overrides."), s("Managing class complexity."), s("Managing technical debt."), s("Refactoring Bootstrap markup."), s("Consistent component APIs."), s("Documentation standards."), s("Code review standards."), s("Team-wide Bootstrap conventions."), s("Maintaining large Bootstrap projects."), s("Long-term maintainability."),
  ]),
  mod(35, "Bootstrap version upgrades and migration", "Plan and execute Bootstrap upgrades, migrations, and compatibility strategies.", [
    s("Bootstrap release management."), s("Bootstrap version compatibility."), s("Understanding breaking changes."), s("Understanding deprecated classes."), s("Bootstrap 3 to Bootstrap 4 migration."), s("Bootstrap 4 to Bootstrap 5 migration."), s("Bootstrap 5 minor-version migration."), s("Migrating deprecated utilities."), s("Migrating renamed classes."), s("Migrating grid structures."), s("Migrating JavaScript plugins."), s("Migrating data attributes."), s("Migrating Sass customizations."), s("Migrating custom themes."), s("Migrating component overrides."), s("Regression testing."), s("Visual comparison."), s("Accessibility regression prevention."), s("Dependency upgrade planning."), s("Maintaining backward compatibility."), s("Incremental migration strategies."), s("Managing legacy Bootstrap applications."),
  ]),
]);

const production = phase(7, "Production readiness and projects", "Module 36 + Projects P01–P06", "Validate production readiness and apply Bootstrap mastery in real projects.", [
  mod(36, "Production readiness checklist", "Validate responsive, accessible, performant, themed, and maintainable Bootstrap releases.", [
    s("Bootstrap version is explicitly managed."), s("Responsive layouts work across supported breakpoints."), s("Grid and spacing conventions are consistent."), s("No unnecessary duplicate Bootstrap imports exist."), s("Custom CSS overrides are centralized and documented."), s("Sass customizations are organized."), s("Unused CSS is removed where appropriate."), s("JavaScript plugins are initialized and disposed correctly."), s("No conflicting DOM ownership exists in framework integrations."), s("Keyboard navigation works."), s("Focus management is correct."), s("Color contrast is sufficient."), s("Forms provide accessible validation feedback."), s("Modals and offcanvas components are accessible."), s("Production assets are minified and compressed."), s("Browser compatibility is verified."), s("Theme switching works correctly where supported."), s("Visual regression testing is performed."), s("Component documentation is maintained."), s("Bootstrap upgrade procedures are documented."),
  ]),
  project(1, "Responsive UI component collection", "Build a beginner-friendly, responsive, accessible collection of core Bootstrap components.", [
    s("Project setup."), s("Buttons."), s("Cards."), s("Alerts."), s("Badges."), s("Forms."), s("Navigation."), s("Dropdowns."), s("Tables."), s("Pagination."), s("Modals."), s("Accordions."), s("Progress bars."), s("Responsive behavior."), s("Consistent spacing and colors."), s("Reusable markup and accessibility."),
  ]),
  project(2, "Responsive admin dashboard", "Build a responsive Bootstrap dashboard with navigation, data views, and workflows.", [
    s("Project setup."), s("Responsive sidebar."), s("Navigation header."), s("Dashboard cards."), s("Data tables."), s("Search interface."), s("Filters."), s("Pagination."), s("Modal workflows."), s("Alerts and notifications."), s("Responsive layouts and grid consistency."), s("Reusable layout patterns and design language."),
  ]),
  project(3, "Bootstrap design system", "Create a custom, token-driven design system and themes on Bootstrap foundations.", [
    s("Project setup."), s("Custom color palette."), s("Typography system."), s("Spacing system."), s("Responsive breakpoints."), s("Button variants."), s("Form variants."), s("Card variants."), s("Navigation components."), s("Modal patterns."), s("Theme configurations and modes."), s("Light and dark modes."), s("Component documentation."), s("Centralized tokens and Sass architecture."), s("Maintainable overrides and reusable components."),
  ]),
  project(4, "Advanced Bootstrap component library", "Engineer a reusable, accessible, well-documented Bootstrap component library.", [
    s("Project setup."), s("Reusable navigation."), s("Reusable dropdowns."), s("Reusable modals."), s("Reusable forms."), s("Reusable cards."), s("Reusable tables."), s("Reusable notification components."), s("Reusable responsive layouts."), s("Consistent APIs and accessibility."), s("Component isolation and predictable behavior."), s("Clear documentation."),
  ]),
  project(5, "Enterprise Bootstrap application UI", "Deliver a complete, branded, production-ready enterprise Bootstrap application UI.", [
    s("Project setup."), s("Multiple application sections."), s("Complex navigation."), s("Data-heavy tables."), s("Advanced forms."), s("Responsive sidebars."), s("Multi-step workflows."), s("Confirmation dialogs."), s("Notification system."), s("Theme switching."), s("Custom component library."), s("Light and dark modes."), s("Maintainable architecture and UI conventions."), s("Reusable design patterns."), s("Performance optimization."), s("Accessibility testing and consistent branding."),
  ]),
  project(6, "Bootstrap theme and Sass framework", "Build an optimized Bootstrap-based theme/framework package with Sass and CSS variables.", [
    s("Project setup."), s("Custom Sass entry point."), s("Custom variables."), s("Custom maps."), s("Custom mixins."), s("Custom color system."), s("Custom breakpoints."), s("Custom utility API."), s("Selective component imports."), s("Custom CSS variables."), s("Multiple theme modes."), s("Optimized production output."), s("Package structure and documentation."), s("Versioning and distribution practices."),
  ]),
]);

export const bootstrapRoadmap: NoteCourse = {
  id: "bootstrap",
  title: "Bootstrap Mastery",
  shortTitle: "Bootstrap",
  kicker: "7 phases · 36 modules · 6 projects",
  description:
    "A complete, visual Bootstrap path from grid and utilities to components, plugins, Sass theming, accessibility, performance, and production UI engineering.",
  accent: "violet",
  phases: [fundamentals, utilities, components, javascript, customization, engineering, production],
};

export const bootstrapSections = bootstrapRoadmap.phases.flatMap((phase) =>
  phase.modules.flatMap((module) =>
    module.sections.map((section) => ({ section, module, phase })),
  ),
);

export const bootstrapSectionById = new Map(
  bootstrapSections.map((entry) => [entry.section.id, entry]),
);

export function bootstrapReviewSnapshot(): ReviewSnapshot {
  return Object.fromEntries(
    bootstrapSections.map(({ section }) => [section.id, section.status]),
  );
}
