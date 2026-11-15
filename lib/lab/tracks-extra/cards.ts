import type { LabTrack } from "../types";

export const cardsExtra: LabTrack = {
  "id": "cards",
  "title": "Cards and Reusable Components",
  "description": "Card anatomy, media layouts, profile, pricing, testimonials, badges, actions, skeletons, overlays and empty states.",
  "priority": 13,
  "modules": [
    "Module 4 \u2013 Card Anatomy",
    "Module 5 \u2013 Card Variants",
    "Module 6 \u2013 Real Layouts"
  ],
  "examples": [
    {
      "id": "cards-card-header-footer",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Header and footer",
      "summary": "Frame the body with a titled header and action footer.",
      "tags": ["cards", "anatomy"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [saved, setSaved] = useState(false);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-header d-flex justify-content-between align-items-center\">\n        <span className=\"fw-semibold\">Release notes</span>\n        <span className=\"badge text-bg-success\">v2.4</span>\n      </div>\n      <div className=\"card-body\">\n        <h5 className=\"card-title\">This week in the lab</h5>\n        <p className=\"card-text text-secondary mb-2\">Header and footer frame the card body without extra wrappers.</p>\n        <ul className=\"small text-secondary mb-0 ps-3\">\n          <li>Faster rendering</li>\n          <li>New pagination controls</li>\n        </ul>\n      </div>\n      <div className=\"card-footer d-flex justify-content-between align-items-center bg-transparent\">\n        <span className=\"small text-secondary\">Updated today</span>\n        <button className={`btn btn-sm ${saved ? \"btn-success\" : \"btn-outline-primary\"}`} onClick={() => setSaved(!saved)}>{saved ? \"Saved \u2713\" : \"Save\"}</button>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-image",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Image card",
      "summary": "Use a CSS gradient as a media placeholder with no network request.",
      "tags": ["cards", "media"],
      "code": "import React, { useState } from \"react\";\n\nconst gradient = \"linear-gradient(135deg, #6366f1 0%, #ec4899 100%)\";\n\nexport default function App() {\n  const [liked, setLiked] = useState(false);\n\n  return (\n    <div className=\"card shadow-sm mx-auto overflow-hidden\" style={{ maxWidth: 380 }}>\n      <div\n        className=\"card-img-top d-flex align-items-center justify-content-center text-white\"\n        style={{ height: 180, background: gradient }}\n        role=\"img\"\n        aria-label=\"Decorative gradient placeholder\"\n      >\n        <span className=\"display-6\">\u25d2</span>\n      </div>\n      <div className=\"card-body\">\n        <h5 className=\"card-title mb-1\">Gradient cover</h5>\n        <p className=\"card-text text-secondary small\">A CSS-gradient placeholder stands in for a real image, so no network request is needed.</p>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-sm btn-primary\">Open guide</button>\n          <button className={`btn btn-sm ${liked ? \"btn-outline-danger\" : \"btn-outline-secondary\"}`} onClick={() => setLiked(!liked)}>{liked ? \"\u2605 Saved\" : \"\u2606 Save\"}</button>\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-horizontal",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Horizontal media card",
      "summary": "Put media beside content with a gutter-free row.",
      "tags": ["cards", "horizontal"],
      "code": "import React, { useState } from \"react\";\n\nconst covers = [\"linear-gradient(135deg,#0ea5e9,#6366f1)\", \"linear-gradient(135deg,#f59e0b,#ef4444)\"];\n\nexport default function App() {\n  const [index, setIndex] = useState(0);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 620 }}>\n      <div className=\"row g-0\">\n        <div className=\"col-4 d-flex align-items-center justify-content-center text-white\" style={{ minHeight: 170, background: covers[index] }}>\n          <span className=\"fs-1\">{index === 0 ? \"\u25e7\" : \"\u25e8\"}</span>\n        </div>\n        <div className=\"col-8\">\n          <div className=\"card-body\">\n            <span className=\"badge text-bg-light border mb-2\">Horizontal</span>\n            <h5 className=\"card-title mb-1\">Media beside content</h5>\n            <p className=\"card-text small text-secondary\">Use row g-0 and a column for the media so gutters disappear.</p>\n            <div className=\"d-flex gap-2\">\n              <button className=\"btn btn-sm btn-outline-primary\" onClick={() => setIndex((index + 1) % covers.length)}>Change cover</button>\n              <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setIndex(0)}>Reset</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-media-overlay",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Media overlay",
      "summary": "Overlay text on media with a gradient scrim for contrast.",
      "tags": ["cards", "media", "overlay"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [liked, setLiked] = useState(false);\n\n  return (\n    <div className=\"card shadow-sm mx-auto text-white overflow-hidden\" style={{ maxWidth: 440 }}>\n      <div style={{ height: 260, background: \"linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.9)), linear-gradient(135deg,#0ea5e9,#8b5cf6)\" }} className=\"position-relative\">\n        <div className=\"card-img-overlay d-flex flex-column justify-content-end\">\n          <span className=\"badge text-bg-light align-self-start mb-2\">Featured</span>\n          <h5 className=\"card-title\">Overlay on media</h5>\n          <p className=\"card-text small opacity-75 mb-3\">card-img-overlay places text over the image; a dark gradient keeps it readable.</p>\n          <div className=\"d-flex gap-2\">\n            <button className=\"btn btn-sm btn-light\" onClick={() => setLiked(!liked)}>{liked ? \"\u2665 Liked\" : \"\u2661 Like\"}</button>\n            <button className=\"btn btn-sm btn-outline-light\">Read story</button>\n          </div>\n        </div>\n      </div>\n      <div className=\"card-footer bg-dark border-0 d-flex justify-content-between small text-white-50\">\n        <span>Tip: keep a scrim for contrast.</span>\n        <span>{liked ? \"Saved to favorites\" : \"Not saved\"}</span>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-badge",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Status badges",
      "summary": "Map typed statuses to badge colors and filter the list.",
      "tags": ["cards", "badge"],
      "code": "import React, { useState } from \"react\";\n\ntype Status = \"active\" | \"paused\" | \"error\";\ninterface Service { id: number; name: string; status: Status; }\n\nconst services: Service[] = [\n  { id: 1, name: \"API\", status: \"active\" },\n  { id: 2, name: \"Worker\", status: \"paused\" },\n  { id: 3, name: \"Cron\", status: \"error\" },\n  { id: 4, name: \"Storage\", status: \"active\" },\n];\n\nconst badge: Record<Status, string> = { active: \"text-bg-success\", paused: \"text-bg-secondary\", error: \"text-bg-danger\" };\n\nexport default function App() {\n  const [filter, setFilter] = useState<Status | \"all\">(\"all\");\n  const shown = filter === \"all\" ? services : services.filter((s) => s.status === filter);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex flex-wrap gap-2 mb-3\">\n          {([\"all\", \"active\", \"paused\", \"error\"] as const).map((f) => (\n            <button key={f} className={`btn btn-sm ${filter === f ? \"btn-dark\" : \"btn-outline-secondary\"}`} onClick={() => setFilter(f)}>{f}</button>\n          ))}\n        </div>\n        <ul className=\"list-group list-group-flush\">\n          {shown.map((s) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center px-0\" key={s.id}>\n              {s.name}<span className={`badge ${badge[s.status]}`}>{s.status}</span>\n            </li>\n          ))}\n        </ul>\n        {shown.length === 0 && <p className=\"small text-secondary mb-0\">No services match.</p>}\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-actions",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "Footer actions",
      "summary": "Lock a card after approve or reject and allow undo.",
      "tags": ["cards", "actions"],
      "code": "import React, { useState } from \"react\";\n\ntype Decision = \"approved\" | \"rejected\" | null;\n\nexport default function App() {\n  const [decision, setDecision] = useState<Decision>(null);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"card-title\">Approve request</h5>\n        <p className=\"card-text small text-secondary\">Footer actions share one state, so the card can lock after a decision.</p>\n      </div>\n      <div className=\"card-footer d-flex justify-content-between align-items-center bg-transparent\">\n        {decision ? (\n          <>\n            <span className={`badge ${decision === \"approved\" ? \"text-bg-success\" : \"text-bg-danger\"}`}>{decision}</span>\n            <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setDecision(null)}>Undo</button>\n          </>\n        ) : (\n          <div className=\"d-flex gap-2 ms-auto\">\n            <button className=\"btn btn-sm btn-outline-danger\" onClick={() => setDecision(\"rejected\")}>Reject</button>\n            <button className=\"btn btn-sm btn-success\" onClick={() => setDecision(\"approved\")}>Approve</button>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-listgroup",
      "track": "cards",
      "module": "Module 4 \u2013 Card Anatomy",
      "title": "List group in a card",
      "summary": "Compose a flush list group with active rows and counts.",
      "tags": ["cards", "list-group"],
      "code": "import React, { useState } from \"react\";\n\ninterface Row { id: number; label: string; count: number; }\n\nconst rows: Row[] = [\n  { id: 1, label: \"Inbox\", count: 12 },\n  { id: 2, label: \"Mentions\", count: 3 },\n  { id: 3, label: \"Assigned\", count: 7 },\n  { id: 4, label: \"Archive\", count: 0 },\n];\n\nexport default function App() {\n  const [active, setActive] = useState(1);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-header fw-semibold\">Workspace</div>\n      <ul className=\"list-group list-group-flush\">\n        {rows.map((r) => (\n          <li key={r.id}>\n            <button className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${active === r.id ? \"active\" : \"\"}`} onClick={() => setActive(r.id)}>\n              {r.label}\n              <span className={`badge ${active === r.id ? \"text-bg-light\" : \"text-bg-secondary\"}`}>{r.count}</span>\n            </button>\n          </li>\n        ))}\n      </ul>\n      <div className=\"card-footer text-secondary small bg-transparent\">Selected: {rows.find((r) => r.id === active)?.label}</div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-profile",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Profile card",
      "summary": "Avatar, stats and a follow toggle in a compact card.",
      "tags": ["cards", "profile"],
      "code": "import React, { useState } from \"react\";\n\ninterface Profile { name: string; role: string; projects: number; followers: string; }\n\nconst profile: Profile = { name: \"Ada Lovelace\", role: \"Front-end engineer\", projects: 24, followers: \"1.8k\" };\n\nexport default function App() {\n  const [following, setFollowing] = useState(false);\n\n  return (\n    <div className=\"card shadow-sm mx-auto text-center\" style={{ maxWidth: 340 }}>\n      <div className=\"card-body\">\n        <div className=\"rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3\" style={{ width: 72, height: 72, fontSize: 24 }}>AL</div>\n        <h5 className=\"card-title mb-0\">{profile.name}</h5>\n        <p className=\"text-secondary small mb-3\">{profile.role}</p>\n        <div className=\"d-flex justify-content-center gap-4 mb-3\">\n          <div><div className=\"fw-semibold\">{profile.projects}</div><div className=\"small text-secondary\">Projects</div></div>\n          <div><div className=\"fw-semibold\">{profile.followers}</div><div className=\"small text-secondary\">Followers</div></div>\n        </div>\n        <button className={`btn btn-sm w-100 ${following ? \"btn-outline-secondary\" : \"btn-primary\"}`} onClick={() => setFollowing(!following)}>\n          {following ? \"Following\" : \"Follow\"}\n        </button>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-pricing",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Pricing tiers",
      "summary": "Highlight a popular plan and track the selected tier.",
      "tags": ["cards", "pricing"],
      "code": "import React, { useState } from \"react\";\n\ninterface Plan { id: string; name: string; price: number; features: string[]; popular?: boolean; }\n\nconst plans: Plan[] = [\n  { id: \"free\", name: \"Free\", price: 0, features: [\"1 project\", \"Community support\"] },\n  { id: \"pro\", name: \"Pro\", price: 12, features: [\"10 projects\", \"Priority support\", \"Analytics\"], popular: true },\n  { id: \"team\", name: \"Team\", price: 29, features: [\"Unlimited projects\", \"SSO\", \"Audit log\"] },\n];\n\nexport default function App() {\n  const [selected, setSelected] = useState(\"pro\");\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 820 }}>\n      <div className=\"row g-3\">\n        {plans.map((plan) => (\n          <div className=\"col-12 col-md-4\" key={plan.id}>\n            <div className={`card h-100 shadow-sm ${plan.popular ? \"border-primary\" : \"\"} ${selected === plan.id ? \"bg-body-tertiary\" : \"\"}`}>\n              <div className=\"card-body d-flex flex-column\">\n                <div className=\"d-flex justify-content-between align-items-center\">\n                  <h6 className=\"card-title mb-0\">{plan.name}</h6>\n                  {plan.popular && <span className=\"badge text-bg-primary\">Popular</span>}\n                </div>\n                <p className=\"my-3\"><span className=\"fs-3 fw-bold\">${plan.price}</span><span className=\"text-secondary small\"> / month</span></p>\n                <ul className=\"small text-secondary ps-3 flex-grow-1\">\n                  {plan.features.map((f) => <li key={f}>{f}</li>)}\n                </ul>\n                <button className={`btn btn-sm ${selected === plan.id ? \"btn-primary\" : \"btn-outline-primary\"}`} onClick={() => setSelected(plan.id)}>\n                  {selected === plan.id ? \"Selected\" : \"Choose\"}\n                </button>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n      <p className=\"small text-secondary text-center mt-3 mb-0\">Selected plan: <span className=\"fw-semibold\">{selected}</span></p>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-testimonial",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Testimonial card",
      "summary": "Quote, star rating and next/prev navigation.",
      "tags": ["cards", "testimonial"],
      "code": "import React, { useState } from \"react\";\n\ninterface Quote { id: number; text: string; name: string; role: string; rating: number; }\n\nconst quotes: Quote[] = [\n  { id: 1, text: \"This lab replaced three tutorials for me.\", name: \"Mia Chen\", role: \"Bootcamp grad\", rating: 5 },\n  { id: 2, text: \"Small examples, real edge cases. Exactly what I needed.\", name: \"Omar Diaz\", role: \"Career switcher\", rating: 4 },\n  { id: 3, text: \"The pagination module finally made clamping click.\", name: \"Priya Nair\", role: \"Junior dev\", rating: 5 },\n];\n\nexport default function App() {\n  const [index, setIndex] = useState(0);\n  const quote = quotes[index];\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body\">\n        <div className=\"text-warning mb-2\" aria-label={`${quote.rating} out of 5`}>{\"\u2605\".repeat(quote.rating)}{\"\u2606\".repeat(5 - quote.rating)}</div>\n        <blockquote className=\"blockquote mb-3\"><p className=\"fs-6\">\u201c{quote.text}\u201d</p></blockquote>\n        <div className=\"d-flex align-items-center gap-2 mb-3\">\n          <div className=\"rounded-circle bg-secondary-subtle text-secondary d-flex align-items-center justify-content-center\" style={{ width: 38, height: 38 }}>{quote.name.charAt(0)}</div>\n          <div><div className=\"small fw-semibold\">{quote.name}</div><div className=\"small text-secondary\">{quote.role}</div></div>\n        </div>\n        <div className=\"d-flex justify-content-between\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={index === 0} onClick={() => setIndex(index - 1)}>Prev</button>\n          <span className=\"small text-secondary align-self-center\">{index + 1} / {quotes.length}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={index === quotes.length - 1} onClick={() => setIndex(index + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-blog",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Blog post preview",
      "summary": "Category, excerpt, read time and a save toggle.",
      "tags": ["cards", "blog"],
      "code": "import React, { useState } from \"react\";\n\ninterface Post { id: number; category: string; title: string; excerpt: string; read: string; }\n\nconst posts: Post[] = [\n  { id: 1, category: \"CSS\", title: \"Cards that breathe\", excerpt: \"Spacing, radius and one accent color do most of the work.\", read: \"4 min\" },\n  { id: 2, category: \"React\", title: \"State that resets\", excerpt: \"Why filters should send pagination back to page one.\", read: \"6 min\" },\n];\n\nexport default function App() {\n  const [saved, setSaved] = useState<number[]>([]);\n  const toggle = (id: number) => setSaved((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 680 }}>\n      {posts.map((post) => (\n        <div className=\"card shadow-sm mb-3\" key={post.id}>\n          <div className=\"row g-0\">\n            <div className=\"col-3 d-none d-sm-block\" style={{ background: post.id === 1 ? \"linear-gradient(135deg,#22c55e,#0ea5e9)\" : \"linear-gradient(135deg,#f97316,#ec4899)\" }} />\n            <div className=\"col-12 col-sm-9\">\n              <div className=\"card-body\">\n                <span className=\"badge text-bg-light border mb-1\">{post.category}</span>\n                <h6 className=\"card-title mb-1\">{post.title}</h6>\n                <p className=\"card-text small text-secondary mb-2\">{post.excerpt}</p>\n                <div className=\"d-flex justify-content-between align-items-center\">\n                  <span className=\"small text-secondary\">{post.read} read</span>\n                  <button className={`btn btn-sm ${saved.includes(post.id) ? \"btn-primary\" : \"btn-outline-primary\"}`} onClick={() => toggle(post.id)}>{saved.includes(post.id) ? \"Saved\" : \"Save\"}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ))}\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-hover",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Hover and active feedback",
      "summary": "Lift on hover and toggle an active state on click.",
      "tags": ["cards", "interaction"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [hovered, setHovered] = useState(false);\n  const [active, setActive] = useState(false);\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 420 }}>\n      <div\n        className={`card shadow-sm ${active ? \"border-primary\" : \"\"}`}\n        onMouseEnter={() => setHovered(true)}\n        onMouseLeave={() => setHovered(false)}\n        onClick={() => setActive(!active)}\n        style={{\n          cursor: \"pointer\",\n          transform: hovered ? \"translateY(-3px)\" : \"none\",\n          boxShadow: hovered ? \"0 0.75rem 1.5rem rgba(0,0,0,0.12)\" : undefined,\n          transition: \"transform 150ms ease, box-shadow 150ms ease\",\n        }}\n      >\n        <div className=\"card-body\">\n          <h5 className=\"card-title mb-1\">Hover and active</h5>\n          <p className=\"card-text small text-secondary mb-2\">Inline styles drive the lift; a click toggles the active border.</p>\n          <span className={`badge ${active ? \"text-bg-primary\" : \"text-bg-light border\"}`}>{active ? \"Active\" : hovered ? \"Hovering\" : \"Idle\"}</span>\n        </div>\n      </div>\n      <p className=\"small text-secondary mt-2 mb-0\">Click the card to toggle active; hover to lift it.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-clickable",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Clickable selectable card",
      "summary": "Select one card with mouse, Enter or Space and aria-pressed.",
      "tags": ["cards", "a11y"],
      "code": "import React, { useState } from \"react\";\n\ninterface Option { id: string; title: string; text: string; }\n\nconst options: Option[] = [\n  { id: \"starter\", title: \"Starter\", text: \"Small side project.\" },\n  { id: \"team\", title: \"Team\", text: \"Shared workspace.\" },\n  { id: \"scale\", title: \"Scale\", text: \"High traffic setup.\" },\n];\n\nexport default function App() {\n  const [selected, setSelected] = useState(\"team\");\n  const choose = (id: string) => setSelected(id);\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <div className=\"row g-3\">\n        {options.map((o) => {\n          const isSelected = selected === o.id;\n          return (\n            <div className=\"col-12 col-md-4\" key={o.id}>\n              <div\n                role=\"button\"\n                tabIndex={0}\n                aria-pressed={isSelected}\n                className={`card h-100 shadow-sm ${isSelected ? \"border-primary bg-body-tertiary\" : \"\"}`}\n                onClick={() => choose(o.id)}\n                onKeyDown={(e) => {\n                  if (e.key === \"Enter\" || e.key === \" \") { e.preventDefault(); choose(o.id); }\n                }}\n                style={{ cursor: \"pointer\" }}\n              >\n                <div className=\"card-body\">\n                  <div className=\"d-flex justify-content-between align-items-center mb-2\">\n                    <h6 className=\"card-title mb-0\">{o.title}</h6>\n                    <span className={`badge ${isSelected ? \"text-bg-primary\" : \"text-bg-light border\"}`}>{isSelected ? \"Selected\" : \"Choose\"}</span>\n                  </div>\n                  <p className=\"small text-secondary mb-0\">{o.text}</p>\n                </div>\n              </div>\n            </div>\n          );\n        })}\n      </div>\n      <p className=\"small text-secondary mt-3 mb-0\">Selected: {selected}. Cards respond to click, Enter and Space.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-skeleton",
      "track": "cards",
      "module": "Module 5 \u2013 Card Variants",
      "title": "Loading skeleton",
      "summary": "Bootstrap placeholders keep layout stable while loading.",
      "tags": ["cards", "loading"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [loading, setLoading] = useState(true);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 400 }}>\n      {loading ? (\n        <div className=\"card-body\" aria-busy=\"true\">\n          <div className=\"placeholder-glow\">\n            <div className=\"placeholder col-4 mb-3\" style={{ height: 90 }} />\n            <h5 className=\"card-title placeholder-glow\"><span className=\"placeholder col-6\" /></h5>\n            <p className=\"card-text placeholder-glow\">\n              <span className=\"placeholder col-12\" />\n              <span className=\"placeholder col-10\" />\n              <span className=\"placeholder col-8\" />\n            </p>\n            <span className=\"placeholder col-5\" />\n          </div>\n        </div>\n      ) : (\n        <div className=\"card-body\">\n          <div className=\"ratio ratio-16x9 bg-secondary-subtle rounded mb-3 d-flex align-items-center justify-content-center text-secondary\">Preview</div>\n          <h5 className=\"card-title\">Loaded content</h5>\n          <p className=\"card-text small text-secondary\">Skeletons keep the final layout stable while data loads.</p>\n        </div>\n      )}\n      <div className=\"card-footer bg-transparent\">\n        <button className=\"btn btn-sm btn-outline-primary\" onClick={() => setLoading(!loading)}>{loading ? \"Load data\" : \"Show skeleton\"}</button>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-responsive",
      "track": "cards",
      "module": "Module 6 \u2013 Real Layouts",
      "title": "Responsive card grid",
      "summary": "One, two and three columns across breakpoints with equal heights.",
      "tags": ["cards", "responsive"],
      "code": "import React, { useState } from \"react\";\n\nconst topics = [\"Grid\", \"Cards\", \"Tables\", \"Forms\", \"Media\", \"Utility\"];\n\nexport default function App() {\n  const [compact, setCompact] = useState(false);\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 820 }}>\n      <div className=\"d-flex justify-content-between align-items-start mb-2\">\n        <div>\n          <h5 className=\"mb-1\">Responsive card grid</h5>\n          <p className=\"small text-secondary mb-0\">1 column on xs, 2 on sm, 3 on lg.</p>\n        </div>\n        <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setCompact(!compact)}>{compact ? \"Show details\" : \"Compact\"}</button>\n      </div>\n      <div className=\"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3\">\n        {topics.map((t, i) => (\n          <div className=\"col\" key={t}>\n            <div className=\"card h-100 shadow-sm\">\n              <div className=\"card-body\">\n                <span className=\"badge text-bg-light border mb-2\">#{i + 1}</span>\n                <h6 className=\"card-title\">{t}</h6>\n                {!compact && <p className=\"card-text small text-secondary mb-0\">Equal-height cards come from h-100 plus a stretch row.</p>}\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-stat-trend",
      "track": "cards",
      "module": "Module 6 \u2013 Real Layouts",
      "title": "Stat card with sparkline",
      "summary": "Compute an inline SVG trend line and switch time periods.",
      "tags": ["cards", "stat", "svg"],
      "code": "import React, { useState } from \"react\";\n\ntype Period = \"7d\" | \"30d\";\nconst series: Record<Period, number[]> = {\n  \"7d\": [12, 18, 15, 22, 20, 27, 31],\n  \"30d\": [8, 11, 10, 14, 13, 17, 16, 21, 19, 24, 28, 26],\n};\n\nfunction sparkline(values: number[], width = 160, height = 48): string {\n  const min = Math.min(...values);\n  const max = Math.max(...values);\n  const span = max - min || 1;\n  return values.map((v, i) => {\n    const x = (i / (values.length - 1)) * width;\n    const y = height - ((v - min) / span) * height;\n    return `${x.toFixed(1)},${y.toFixed(1)}`;\n  }).join(\" \");\n}\n\nexport default function App() {\n  const [period, setPeriod] = useState<Period>(\"7d\");\n  const values = series[period];\n  const points = sparkline(values);\n  const first = values[0];\n  const last = values[values.length - 1];\n  const delta = Math.round(((last - first) / first) * 100);\n  const up = delta >= 0;\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 340 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-start\">\n          <div>\n            <p className=\"text-secondary small mb-1\">Weekly signups</p>\n            <h4 className=\"mb-0\">{last}</h4>\n          </div>\n          <select className=\"form-select form-select-sm\" style={{ width: 90 }} value={period} onChange={(e) => setPeriod(e.target.value as Period)}>\n            <option value=\"7d\">7 days</option><option value=\"30d\">30 days</option>\n          </select>\n        </div>\n        <div className={`small mb-2 ${up ? \"text-success\" : \"text-danger\"}`}>{up ? \"\u25b2\" : \"\u25bc\"} {Math.abs(delta)}% vs start</div>\n        <svg viewBox=\"0 0 160 48\" width=\"100%\" height=\"48\" role=\"img\" aria-label={`Trend with ${values.length} points`}>\n          <polyline fill=\"none\" stroke={up ? \"#198754\" : \"#dc3545\"} strokeWidth=\"2\" points={points} />\n        </svg>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "cards-card-empty",
      "track": "cards",
      "module": "Module 6 \u2013 Real Layouts",
      "title": "Empty card state",
      "summary": "Explain the empty state and offer an add action.",
      "tags": ["cards", "empty"],
      "code": "import React, { useState } from \"react\";\n\ninterface Note { id: number; text: string; }\nconst seed: Note[] = [\n  { id: 1, text: \"Review pagination edge cases\" },\n  { id: 2, text: \"Ship card variants\" },\n];\n\nexport default function App() {\n  const [notes, setNotes] = useState<Note[]>([]);\n  const [nextId, setNextId] = useState(1);\n\n  const add = () => {\n    setNotes((prev) => [...prev, { id: nextId, text: seed[(nextId - 1) % seed.length].text }]);\n    setNextId((n) => n + 1);\n  };\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-header d-flex justify-content-between align-items-center\">\n        <span className=\"fw-semibold\">Notes</span>\n        <span className=\"badge text-bg-light border\">{notes.length}</span>\n      </div>\n      {notes.length === 0 ? (\n        <div className=\"card-body text-center py-5\">\n          <div className=\"display-6 text-secondary mb-2\">\u25a4</div>\n          <h6 className=\"card-title\">Nothing here yet</h6>\n          <p className=\"small text-secondary mb-3\">An empty card should explain the state and offer one clear action.</p>\n          <button className=\"btn btn-sm btn-primary\" onClick={add}>Add sample note</button>\n        </div>\n      ) : (\n        <ul className=\"list-group list-group-flush\">\n          {notes.map((n) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={n.id}>\n              <span>{n.text}</span>\n              <button className=\"btn btn-sm btn-outline-danger\" onClick={() => setNotes((prev) => prev.filter((x) => x.id !== n.id))}>Remove</button>\n            </li>\n          ))}\n        </ul>\n      )}\n      <div className=\"card-footer bg-transparent d-flex gap-2\">\n        <button className=\"btn btn-sm btn-outline-primary\" onClick={add}>Add note</button>\n        <button className=\"btn btn-sm btn-outline-secondary\" disabled={notes.length === 0} onClick={() => setNotes([])}>Clear all</button>\n      </div>\n    </div>\n  );\n}"
    }
  ]
};
