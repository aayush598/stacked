"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Eye, GitCompareArrows, Lightbulb, Play, Sparkles, Terminal, XCircle } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export function SectionHero({ title, subtitle, chips }: { title: string; subtitle: string; chips?: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet/20 bg-gradient-to-br from-violet/[0.10] via-surface to-sky/[0.06] p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-violet/10 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-8 left-10 size-32 rounded-full bg-sky/10 blur-2xl animate-pulse [animation-delay:700ms]" />
      <div className="flex flex-wrap items-center gap-2 text-violet"><Sparkles className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.18em]">Bootstrap Deep Dive</p></div>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-mist sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted">{subtitle}</p>
      {chips?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <span key={c} style={{ animationDelay: `${i * 40}ms` }} className="rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[13px] text-mist backdrop-blur">{c}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function KeyPoints({ items }: { items: { label: string; detail?: string; tone?: "lime"|"sky"|"violet"|"coral" }[] }) {
  const tones = { lime: "border-lime/25 bg-lime/10 text-lime", sky: "border-sky/25 bg-sky/10 text-sky", violet: "border-violet/25 bg-violet/10 text-violet", coral: "border-coral/25 bg-coral/10 text-coral" } as const;
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((it) => (
        <div key={it.label} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-3">
          <span className={cn("mt-0.5 rounded-md border px-2 py-0.5 font-mono text-[12px] font-semibold uppercase", tones[it.tone ?? "violet"])}>{it.label}</span>
          <p className="text-[14px] leading-6 text-muted">{it.detail ?? ""}</p>
        </div>
      ))}
    </div>
  );
}

export function AnimatedFlow({ steps }: { steps: { label: string; note?: string }[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => { const t = setInterval(() => setActive((a) => (a + 1) % Math.max(1, steps.length)), 1700); return () => clearInterval(t); }, [steps.length]);
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2 text-faint"><Play className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Visual flow</p></div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <button key={s.label} type="button" onClick={() => setActive(i)} className="flex items-center gap-2">
            <span className={cn("rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-all duration-300", i === active ? "scale-[1.03] border-violet/35 bg-violet/10 text-violet shadow-sm" : i < active ? "border-sky/25 bg-sky/[0.05] text-mist" : "border-line bg-canvas text-muted hover:text-mist")}>{s.label}</span>
            {i < steps.length - 1 ? <ArrowRight className={cn("size-4 text-faint transition", i < active ? "text-violet/70" : "")} /> : null}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[15px] leading-7 text-muted">{steps[active]?.note ?? steps[active]?.label}</p>
    </div>
  );
}

/* ===================== CLASS → VISUAL (fast & easy scan) ===================== */
const spacingScale: Record<string, string> = { "0": "0", "1": "0.25rem", "2": "0.5rem", "3": "1rem", "4": "1.5rem", "5": "3rem", "auto": "auto" };
const theme: Record<string, { bg: string; fg: string; border: string; name: string }> = {
  primary: { bg: "#0d6efd", fg: "#fff", border: "#0d6efd", name: "blue" },
  secondary: { bg: "#6c757d", fg: "#fff", border: "#6c757d", name: "gray" },
  success: { bg: "#198754", fg: "#fff", border: "#198754", name: "green" },
  danger: { bg: "#dc3545", fg: "#fff", border: "#dc3545", name: "red" },
  warning: { bg: "#ffc107", fg: "#212529", border: "#ffc107", name: "yellow" },
  info: { bg: "#0dcaf0", fg: "#212529", border: "#0dcaf0", name: "cyan" },
  light: { bg: "#f8f9fa", fg: "#212529", border: "#dee2e6", name: "light" },
  dark: { bg: "#212529", fg: "#fff", border: "#212529", name: "dark" },
  white: { bg: "#ffffff", fg: "#212529", border: "#dee2e6", name: "white" },
  body: { bg: "#ffffff", fg: "#212529", border: "#dee2e6", name: "body" },
  transparent: { bg: "transparent", fg: "#212529", border: "#adb5bd", name: "transparent" },
  muted: { bg: "#6c757d", fg: "#fff", border: "#6c757d", name: "muted gray" },
};

function extractClasses(code?: string): string[] {
  if (!code) return [];
  const out: string[] = [];
  const re = /class(?:Name)?="([^"]+)"/g;
  let m;
  while ((m = re.exec(code))) out.push(...m[1].split(/\s+/).filter(Boolean));
  return Array.from(new Set(out));
}

function humanSide(side: string) {
  return ({ "": "all sides", t: "top", b: "bottom", s: "left/start", e: "right/end", x: "left & right", y: "top & bottom", l: "left", r: "right" } as Record<string,string>)[side] ?? side;
}

function describeClass(cls: string): string {
  let m = cls.match(/^(m|p)([trblsexy]?)-(\d|auto)$/);
  if (m) {
    const [, tp, side, val] = m;
    const v = spacingScale[val] ?? val;
    return `${tp === "m" ? "Adds OUTSIDE space (margin)" : "Adds INSIDE space (padding)"} on ${humanSide(side)} = ${v}${val==="auto"?" (auto-center when width set)":""}`;
  }
  m = cls.match(/^gap-(\d)$/);
  if (m) return `Adds gap/space BETWEEN flex/grid items = ${spacingScale[m[1]]}`;
  m = cls.match(/^g([xy])?-(\d)$/);
  if (m) return `Grid gutter (space between columns/rows) ${m[1]?m[1].toUpperCase():""} = ${spacingScale[m[2]]}`;
  m = cls.match(/^btn(?:-(outline))?-(.+)$/);
  if (m) { const color = m[2]; const t = theme[color]; return `${m[1]?"Outlined (border only)":"Filled"} ${t?.name||color} button`; }
  if (cls === "btn") return "Base button style (padding, border, cursor)";
  if (/^btn-(lg|sm)$/.test(cls)) return cls.endsWith("lg") ? "Large button (bigger padding/text)" : "Small button (compact)";
  m = cls.match(/^text-(.+)$/);
  if (m) { const v=m[1]; const t=theme[v]; if (t) return `Sets text color to ${t.name}`; if(v==="start") return "Aligns text LEFT"; if(v==="center") return "Aligns text CENTER"; if(v==="end") return "Aligns text RIGHT"; if(v==="wrap"||v==="nowrap") return v==="nowrap"?"Prevents text wrapping":"Allows text wrapping"; if(v==="break") return "Breaks long words to avoid overflow"; if(v==="truncate") return "Cuts overflow text with … (ellipsis)"; return `Text style: ${v}`; }
  m = cls.match(/^bg-(.+?)(-subtle)?$/);
  if (m) { const t=theme[m[1]]; return `Sets background ${t?("to "+t.name):m[1]}${m[2]?" (soft/subtle shade)":""}`; }
  m = cls.match(/^d-(.+)$/);
  if (m) return `Sets display = ${m[1]} (${ {flex:"items in a row/column (flexbox)", "inline-flex":"inline flexbox", block:"takes full width, new line", inline:"flows in text", "inline-block":"inline but box-sized", grid:"CSS grid layout", none:"HIDDEN (not shown)", table:"table layout"}[m[1]] || m[1] })`;
  if (/^flex-(row|column|row-reverse|column-reverse|wrap|nowrap|fill|grow|shrink)/.test(cls)) return `Flex behavior: ${cls.replace("flex-","")}`;
  if (/^justify-content-(.+)/.test(cls)) return `Horizontal alignment in flex row: ${cls.split("-").pop()} (start/center/end/space-between/around/evenly)`;
  if (/^align-items-(.+)/.test(cls)) return `Vertical alignment in flex row: ${cls.split("-").pop()}`;
  if (/^align-self-(.+)/.test(cls)) return `Vertical alignment for THIS item: ${cls.split("-").pop()}`;
  m = cls.match(/^col(?:-(sm|md|lg|xl|xxl))?(?:-(\d+|auto))?$/);
  if (m) { const bp=m[1]?` on ${m[1]}+ screens`:""; const span=m[2]? (m[2]==="auto"?"auto width":`${m[2]} of 12 columns`):"equal width"; return `Grid column: ${span}${bp}`; }
  if (/^container/.test(cls)) return cls==="container"?"Centered page wrapper with responsive max-width":`Container (full-width until ${cls.split("-")[1]} breakpoint)`;
  if (cls==="row") return "Grid row: holds columns side-by-side with gutters";
  m = cls.match(/^border(-(\d))?$/); if (m) return `Adds border${m[2]?` (${m[2]}px)`:""} on all sides`;
  m = cls.match(/^border-(top|bottom|start|end|0)$/); if (m) return m[1]==="0"?"Removes border":`Adds border on ${m[1]}`;
  m = cls.match(/^border-(.+)$/); if (m && theme[m[1]]) return `Border color: ${theme[m[1]].name}`;
  m = cls.match(/^rounded(-(.+))?$/); if (m) return m[2]? (m[2]==="circle"?"Makes element a circle":m[2]==="pill"?"Fully rounded pill shape":`Rounded corners: ${m[2]}`):"Slightly rounded corners";
  m = cls.match(/^shadow(-(.+))?$/); if (m) return m[2]==="none"?"No shadow":m[2]==="sm"?"Small soft shadow":"Adds drop shadow (depth)";
  m = cls.match(/^fw-(.+)$/); if (m) return `Font weight: ${m[1]} (boldness)`;
  m = cls.match(/^fs-(\d)$/); if (m) return `Font size level ${m[1]} (1=largest)`;
  if (/^fst-italic$/.test(cls)) return "Italic text";
  if (/^text-decoration-(.+)/.test(cls)) return `Text decoration: ${cls.split("-").pop()}`;
  m = cls.match(/^w-(\d+)$/); if (m) return `Width = ${m[1]}% of parent`;
  m = cls.match(/^h-(\d+)$/); if (m) return `Height = ${m[1]}% of parent`;
  if (cls==="w-auto"||cls==="h-auto") return "Auto width/height";
  if (/^(mw|mh)-100$/.test(cls)) return cls.startsWith("mw")?"Max width 100%":"Max height 100%";
  m = cls.match(/^(position|top|start|end|bottom)-(.*)$/); if (m) return `Positioning: ${cls}`;
  m = cls.match(/^opacity-(\d+)$/); if (m) return `Opacity ${m[1]}% (transparency)`;
  if (/^overflow-(.+)/.test(cls)) return `Overflow behavior: ${cls.split("-").pop()}`;
  if (/^form-/.test(cls) || /^input-group/.test(cls) || /^is-(valid|invalid)/.test(cls)) return `Form UI: ${cls}`;
  if (/^(alert|badge|card|nav|navbar|modal|dropdown|list-group|table|progress|spinner|toast|breadcrumb|pagination|accordion|carousel|offcanvas|placeholder)/.test(cls)) return `Component style: ${cls}`;
  return `Applies Bootstrap style/behavior: ${cls}`;
}

function Label({ children }: { children: ReactNode }) { return <span className="mt-1 block text-center font-mono text-[11px] text-faint">{children}</span>; }

function visualForClass(cls: string): ReactNode | null {
  // spacing
  const sp = cls.match(/^(m|p)([trblsexy]?)-(\d|auto)$/);
  if (sp) {
    const [, tp, side, val] = sp; const v = spacingScale[val] ?? val; const isM = tp === "m";
    const padStyle: any = !isM ? { padding: v==="auto"?8:v, paddingTop: side==="t"||side==="y"||side===""? (v==="auto"?8:v):8, paddingBottom: side==="b"||side==="y"||side===""? (v==="auto"?8:v):8, paddingLeft: side==="s"||side==="x"||side===""||side==="l"? (v==="auto"?8:v):8, paddingRight: side==="e"||side==="x"||side===""||side==="r"? (v==="auto"?8:v):8 } : { padding: 6 };
    const marStyle: any = isM ? { margin: v==="auto"?"0 auto":v, marginTop: side==="t"||side==="y"||side===""? (v==="auto"?0:v):4, marginBottom: side==="b"||side==="y"||side===""? (v==="auto"?0:v):4, marginLeft: side==="s"||side==="x"||side===""||side==="l"? (v==="auto"?"auto":v):4, marginRight: side==="e"||side==="x"||side===""||side==="r"? (v==="auto"?"auto":v):4 } : { margin: 4 };
    return (
      <div className="w-full">
        <div className="rounded-lg border border-line bg-[#f1f5f9] p-1 text-[11px]">
          <div className={cn("rounded", isM?"bg-amber-200/70":"bg-transparent")} style={marStyle}>
            <div className={cn("rounded border-2 border-sky-400 bg-sky-200/70", !isM && "bg-sky-200/70")} style={padStyle}>
              <div className="rounded bg-white px-2 py-1 text-center text-[11px] font-medium text-slate-700">content</div>
            </div>
          </div>
        </div>
        <Label>{isM ? "orange = outside margin" : "blue = inside padding"} ({v})</Label>
      </div>
    );
  }
  if (/^gap-/.test(cls) || /^g([xy])?-/.test(cls)) {
    const val = spacingScale[cls.split("-").pop()||"3"] || "1rem";
    return (
      <div className="w-full">
        <div className="flex rounded-lg border border-line bg-[#f1f5f9] p-2" style={{ gap: val }}>
          {[1,2,3].map(i => <div key={i} className="h-8 flex-1 rounded bg-violet-400" />)}
        </div>
        <Label>space between items = {val}</Label>
      </div>
    );
  }
  // buttons
  const btn = cls.match(/^btn(?:-(outline))?-([a-z]+)$/);
  if (btn) {
    const [, outline, color] = btn; const t = theme[color] || theme.secondary;
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="rounded-md px-4 py-2 text-sm font-medium shadow-sm" style={outline ? { color: t.bg, border: `2px solid ${t.bg}`, background: "#fff" } : { background: t.bg, color: t.fg, border: `2px solid ${t.border}` }}>Button</span>
        <Label>{outline?"outline (hollow)":"filled"} {color}</Label>
      </div>
    );
  }
  if (cls==="btn") return <div className="flex flex-col items-center"><span className="rounded-md border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700">Button</span><Label>base button</Label></div>;
  if (/^btn-(lg|sm)$/.test(cls)) return <div className="flex flex-col items-center"><span className={cn("rounded-md bg-slate-200 text-slate-700", cls.endsWith("lg")?"px-5 py-3 text-base":"px-2 py-1 text-xs")}>Button</span><Label>{cls.endsWith("lg")?"larger size":"smaller size"}</Label></div>;
  // text/bg
  const text = cls.match(/^text-(.+)$/);
  if (text) {
    const v=text[1]; const t=theme[v];
    if (t) return <div className="w-full"><p className="rounded bg-white px-2 py-1 text-lg font-semibold" style={{color:t.bg}}>Sample text</p><Label>text color: {v}</Label></div>;
    if (v==="start"||v==="center"||v==="end") return <div className="w-full rounded border border-line bg-white p-1"><p style={{textAlign:v as any}} className="text-sm text-slate-700">Sample</p><Label>align {v}</Label></div>;
    if (v==="truncate") return <div className="w-full"><p className="w-32 truncate rounded bg-white px-1 text-sm text-slate-700">Very long sample text here</p><Label>cut with …</Label></div>;
  }
  const bg = cls.match(/^bg-(.+?)(-subtle)?$/);
  if (bg) { const t=theme[bg[1]]||{bg:"#e2e8f0",fg:"#111",name:bg[1],border:"#cbd5e1"}; return <div className="w-full"><div className="rounded-md px-3 py-3 text-center text-sm font-medium" style={{background: t.bg, color: t.fg, opacity: bg[2]?0.35:1, border:`1px solid ${t.border}`}}>background</div><Label>{bg[1]} background</Label></div>; }
  // display & flex
  const disp = cls.match(/^d-(.+)$/);
  if (disp) {
    const v=disp[1];
    if (v==="flex"||v==="inline-flex") return <div className="w-full"><div className="flex gap-1 rounded border border-line bg-[#f1f5f9] p-1"><div className="h-6 w-8 rounded bg-sky-400"/><div className="h-6 w-8 rounded bg-sky-400"/><div className="h-6 w-8 rounded bg-sky-400"/></div><Label>items in a row (flex)</Label></div>;
    if (v==="grid") return <div className="w-full"><div className="grid grid-cols-2 gap-1 rounded border border-line bg-[#f1f5f9] p-1"><div className="h-5 rounded bg-sky-400"/><div className="h-5 rounded bg-sky-400"/><div className="h-5 rounded bg-sky-400"/><div className="h-5 rounded bg-sky-400"/></div><Label>grid layout</Label></div>;
    if (v==="block") return <div className="w-full"><div className="h-6 w-full rounded bg-sky-400"/><Label>full-width block</Label></div>;
    if (v==="none") return <div className="w-full"><div className="rounded border-2 border-dashed border-red-300 bg-red-50 p-2 text-center text-xs text-red-500">element hidden</div><Label>display: none</Label></div>;
    if (v==="inline"||v==="inline-block") return <div className="w-full"><span className="rounded bg-sky-400 px-2 py-1 text-xs text-white">A</span> <span className="rounded bg-sky-400 px-2 py-1 text-xs text-white">B</span><Label>{v}</Label></div>;
  }
  if (/^justify-content-/.test(cls)) { const v=cls.split("-").pop()||""; const map:any={start:"flex-start",center:"center",end:"flex-end","between":"space-between","around":"space-around","evenly":"space-evenly"}; return <div className="w-full"><div className="flex rounded border border-line bg-[#f1f5f9] p-1" style={{justifyContent:map[v]||v}}><div className="h-6 w-6 rounded bg-violet-400"/><div className="h-6 w-6 rounded bg-violet-400"/></div><Label>horizontal: {v}</Label></div>; }
  if (/^align-items-/.test(cls)) { const v=cls.split("-").pop()||""; const map:any={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"}; return <div className="w-full"><div className="flex h-14 gap-1 rounded border border-line bg-[#f1f5f9] p-1" style={{alignItems:map[v]||v}}><div className="w-6 rounded bg-violet-400" style={{height:v==="stretch"?"100%":16}}/><div className="w-6 rounded bg-violet-400" style={{height:v==="stretch"?"100%":24}}/></div><Label>vertical: {v}</Label></div>; }
  if (cls==="flex-column") return <div className="w-full"><div className="flex flex-col gap-1 rounded border border-line bg-[#f1f5f9] p-1"><div className="h-5 rounded bg-sky-400"/><div className="h-5 rounded bg-sky-400"/></div><Label>stack vertically</Label></div>;
  // grid cols/container
  const col = cls.match(/^col(?:-(sm|md|lg|xl|xxl))?(?:-(\d+|auto))?$/);
  if (col) { const n = col[2]; const pct = n && n!=="auto" ? (Number(n)/12)*100 : (n==="auto"?30:50); return <div className="w-full"><div className="flex gap-1 rounded border border-line bg-[#f1f5f9] p-1"><div className="h-6 rounded bg-violet-400" style={{width:`${pct}%`}}/><div className="h-6 flex-1 rounded bg-slate-200"/></div><Label>column width {n? (n==="auto"?"auto":n+"/12"):"auto-share"} {col[1]?("@"+col[1]):""}</Label></div>; }
  if (/^container/.test(cls)) return <div className="w-full"><div className="rounded border border-line bg-[#f1f5f9] p-1"><div className="mx-auto h-6 w-3/4 rounded border-2 border-violet-400 bg-violet-100"/></div><Label>centered container</Label></div>;
  if (cls==="row") return <div className="w-full"><div className="flex gap-1 rounded border border-line bg-[#f1f5f9] p-1"><div className="h-6 flex-1 rounded bg-sky-400"/><div className="h-6 flex-1 rounded bg-sky-400"/></div><Label>row of columns</Label></div>;
  // borders/rounded/shadow
  if (cls==="border") return <div className="flex flex-col items-center"><div className="size-12 rounded bg-white" style={{border:"3px solid #64748b"}}/><Label>border on all sides</Label></div>;
  if (/^border-\d$/.test(cls)) return <div className="flex flex-col items-center"><div className="size-12 rounded bg-white" style={{border:`${cls.split("-")[1]}px solid #64748b`}}/><Label>border width</Label></div>;
  if (/^border-(top|bottom|start|end)$/.test(cls)) return <div className="flex flex-col items-center"><div className="size-12 rounded bg-white" style={{border:"1px solid #e2e8f0", [`border${cls.endsWith('top')?'Top':cls.endsWith('bottom')?'Bottom':cls.endsWith('start')?'Left':'Right'}`]:"4px solid #7c3aed"} as any}/><Label>border on {cls.split("-")[1]}</Label></div>;
  if (/^rounded/.test(cls)) { const r = cls==="rounded-circle"?999:cls==="rounded-pill"?999:cls==="rounded-0"?0:cls==="rounded-3"?16:8; return <div className="flex flex-col items-center"><div className="h-10 w-16 bg-sky-400" style={{borderRadius:r}}/><Label>{cls.replace("rounded-","")||"rounded"} corners</Label></div>; }
  if (/^shadow/.test(cls)) { const s = cls==="shadow-none"?"none":cls==="shadow-sm"?"0 1px 2px rgba(0,0,0,.15)":"0 6px 16px rgba(0,0,0,.2)"; return <div className="flex flex-col items-center"><div className="h-10 w-16 rounded bg-white" style={{boxShadow:s}}/><Label>{cls==="shadow-none"?"no shadow":"shadow/depth"}</Label></div>; }
  // typography
  if (/^fw-/.test(cls)) { const w:any={bold:700,semibold:600,normal:400,light:300}; return <div className="w-full"><p className="text-lg text-slate-800" style={{fontWeight:w[cls.split("-")[1]]}}>Sample Text</p><Label>{cls.split("-")[1]} weight</Label></div>; }
  if (/^fs-/.test(cls)) { const s:any={"1":"1.8rem","2":"1.5rem","3":"1.25rem","4":"1.1rem","5":"1rem","6":"0.85rem"}; return <div className="w-full"><p className="text-slate-800" style={{fontSize:s[cls.split("-")[1]]||"1rem"}}>Sample</p><Label>size {cls.split("-")[1]}</Label></div>; }
  if (cls==="fst-italic") return <div className="w-full"><p className="text-lg italic text-slate-800">Sample</p><Label>italic</Label></div>;
  // sizing
  if (/^w-(25|50|75|100|auto)$/.test(cls)) { const p=cls.split("-")[1]; const w=p==="auto"?"auto":p+"%"; return <div className="w-full"><div className="w-full rounded border border-line bg-[#f1f5f9] p-1"><div className="h-5 rounded bg-emerald-400" style={{width:p==="auto"?"40%":w}}/></div><Label>width {w}</Label></div>; }
  if (/^h-(25|50|75|100|auto)$/.test(cls)) { const p=cls.split("-")[1]; const h=p==="auto"?20:(Number(p)*0.4); return <div className="flex items-end gap-1 h-14"><div className="w-8 rounded bg-emerald-400" style={{height:h}}/><Label>height {p}{p==="auto"?"":"%"}</Label></div>; }
  // components generic
  if (/^alert-/.test(cls)) { const c=cls.replace("alert-",""); const t=theme[c]||theme.primary; return <div className="w-full rounded px-3 py-2 text-sm" style={{background:`${t.bg}22`, color:t.bg, border:`1px solid ${t.bg}55`}}>Alert message</div>; }
  if (/^badge/.test(cls)) return <div className="flex flex-col items-center"><span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white">Badge</span><Label>small label/count</Label></div>;
  return null;
}

function fallbackVisual(cls: string): ReactNode {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-14 place-items-center rounded-md border border-dashed border-violet-30 bg-violet-50 text-[10px] font-semibold text-violet">UI</div>
      <div className="text-[13px] text-mist">Element gets <span className="font-mono font-semibold text-violet">.{cls}</span> styling/behavior</div>
    </div>
  );
}

export function ClassVisualGrid({ classes, title = "Every class → one visual output" }: { classes: string[]; title?: string }) {
  const uniq = Array.from(new Set(classes.filter(Boolean)));
  if (!uniq.length) return null;
  return (
    <div className="mt-5 rounded-xl border border-violet/20 bg-violet/[0.03] p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[15px] font-semibold text-mist">{title}</p>
        <span className="rounded-full border border-violet/20 bg-violet/10 px-2.5 py-1 text-[12px] font-medium text-violet">{uniq.length} classes · 1 visual each</span>
      </div>
      <p className="mt-1 text-[13px] text-muted">Fast scan: read the <span className="font-semibold text-mist">classname</span>, see <span className="font-semibold text-mist">what it does</span> and its <span className="font-semibold text-mist">visual</span>.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {uniq.map((c) => {
          const v = visualForClass(c) ?? fallbackVisual(c);
          const meaning = describeClass(c);
          return (
            <div key={c} className="flex flex-col rounded-xl border border-line bg-surface p-3 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <code className="rounded-md bg-violet-600 px-2 py-1 font-mono text-[13px] font-bold text-white">.{c}</code>
                <span className="rounded bg-sky/10 px-1.5 py-0.5 text-[11px] font-medium text-sky">class</span>
              </div>
              <p className="mt-2 text-[13px] font-medium leading-5 text-mist">{meaning}</p>
              <div className="mt-2 flex min-h-[72px] flex-1 items-center justify-center rounded-lg border border-line bg-canvas/70 p-2">
                <div className="w-full">{v}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const quickSets: Record<string, string[]> = {
  spacing: ["m-0","m-1","m-2","m-3","m-4","m-5","mt-3","mb-3","ms-3","me-3","mx-auto","my-3","p-0","p-1","p-2","p-3","p-4","p-5","px-3","py-3","pt-3","pb-3","gap-3"],
  buttons: ["btn","btn-primary","btn-secondary","btn-success","btn-danger","btn-warning","btn-info","btn-light","btn-dark","btn-outline-primary","btn-outline-secondary","btn-lg","btn-sm"],
  colors: ["text-primary","text-secondary","text-success","text-danger","text-warning","text-info","text-dark","text-muted","bg-primary","bg-success","bg-warning","bg-danger","bg-light","bg-dark","bg-info"],
  grid: ["container","row","col","col-6","col-4","col-3","col-12","col-sm-6","col-md-4","col-lg-3"],
  flex: ["d-flex","d-inline-flex","d-grid","d-none","d-block","justify-content-start","justify-content-center","justify-content-between","align-items-start","align-items-center","flex-column","flex-row","gap-2"],
  typography: ["fw-bold","fw-semibold","fw-normal","fst-italic","text-start","text-center","text-end","fs-1","fs-4","text-decoration-underline"],
  borders: ["border","border-0","border-primary","rounded","rounded-pill","shadow","shadow-sm","shadow-lg"],
  forms: ["form-control","form-label","form-select","form-check-input","form-check-label","input-group","is-valid","is-invalid"],
  components: ["card","alert alert-primary","badge text-bg-success","nav","navbar","dropdown-menu","list-group","table","progress","spinner-border"],
};

export function ClassGallery({ title = "Classname → visual output (fast scan)", classes, set }: { title?: string; classes?: string[]; set?: keyof typeof quickSets }) {
  const list = classes ?? (set ? quickSets[set] : []);
  if (!list?.length) return null;
  return <ClassVisualGrid classes={list} title={title} />;
}

export function OutputBlock({ title = "Visual output", value, preview, code }: { title?: string; value?: string; preview?: ReactNode; code?: string }) {
  const auto = !preview && code ? <BootstrapPreview code={code} /> : null;
  return (
    <div className="rounded-xl border border-sky/20 bg-sky/[0.04]">
      <div className="flex items-center gap-2 border-b border-sky/15 px-3.5 py-2 text-[12px] font-medium text-sky"><Terminal className="size-3.5" />{title}</div>
      <div className="space-y-3 p-3">
        {preview ? <div className="rounded-lg border border-line bg-canvas/80 p-3"><p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">Rendered preview</p>{preview}</div> : null}
        {auto}
        {value ? <pre className="overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] leading-6 text-mist"><code>{value}</code></pre> : null}
      </div>
    </div>
  );
}

export function BootstrapPreview({ code, title = "Class → visual output" }: { code?: string; title?: string }) {
  const classes = useMemo(() => extractClasses(code), [code]);
  if (!classes.length) return null;
  const uniq = Array.from(new Set(classes)).slice(0, 12);
  return (
    <div className="mt-3 rounded-xl border border-violet/20 bg-violet/[0.03] p-3">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-violet">{title}</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {uniq.map((c) => (
          <div key={c} className="rounded-lg border border-line bg-surface p-2">
            <code className="font-mono text-[12px] font-bold text-violet">.{c}</code>
            <p className="mt-0.5 text-[12px] text-muted">{describeClass(c)}</p>
            <div className="mt-1">{visualForClass(c) ?? fallbackVisual(c)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Tabs({ items, initial = 0 }: { items: { label: string; code?: string; filename?: string; output?: string; preview?: ReactNode; content?: ReactNode; note?: string }[]; initial?: number }) {
  const [i, setI] = useState(initial);
  const it = items[i] ?? items[0];
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((x, idx) => (
          <button key={x.label} type="button" onClick={() => setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px] transition", idx === i ? "border-violet/30 bg-violet/10 text-violet" : "border-line bg-canvas text-muted hover:text-mist")}>{x.label}</button>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {it?.code ? <CodeBlock code={it.code} filename={it.filename ?? "example.html"} label="Code" /> : null}
        {(it?.output || it?.preview || it?.code) ? <OutputBlock value={it?.output} preview={it?.preview} code={it?.code} /> : null}
        {it?.content}
      </div>
      {it?.note ? <div className="mt-3 flex items-start gap-2 text-[15px] leading-7 text-muted"><Lightbulb className="mt-1 size-4 shrink-0 text-violet" /><p>{it.note}</p></div> : null}
    </div>
  );
}

function diffLineMap(oldCode: string, newCode: string) {
  const a = oldCode.replace(/\n$/, "").split("\n");
  const b = newCode.replace(/\n$/, "").split("\n");
  const left: Record<number, "remove" | "neutral"> = {};
  const right: Record<number, "add" | "neutral"> = {};
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) {
      if (a[i] !== undefined) left[i + 1] = "remove";
      if (b[i] !== undefined) right[i + 1] = "add";
    }
  }
  return { left, right };
}

export function ComparePanels({ left, right }: { left: { title: string; code: string; output?: string; preview?: ReactNode; note?: string }; right: { title: string; code: string; output?: string; preview?: ReactNode; note?: string } }) {
  const diffs = useMemo(() => diffLineMap(left.code, right.code), [left.code, right.code]);
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center gap-2 text-faint"><GitCompareArrows className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Difference highlighted</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-rose-400/20 bg-rose-400/[0.03] p-3">
          <div className="mb-2 flex items-center gap-2 text-rose-300"><XCircle className="size-4" /><p className="text-[14px] font-semibold">{left.title}</p></div>
          <CodeBlock code={left.code} filename="problem.html" label="Problem" diffLines={diffs.left} />
          {(left.output || left.preview || left.code) ? <div className="mt-3"><OutputBlock value={left.output} preview={left.preview} code={left.code} /></div> : null}
          {left.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{left.note}</p> : null}
        </div>
        <div className="rounded-xl border border-violet/20 bg-violet/[0.03] p-3">
          <div className="mb-2 flex items-center gap-2 text-violet"><CheckCircle2 className="size-4" /><p className="text-[14px] font-semibold">{right.title}</p></div>
          <CodeBlock code={right.code} filename="solution.html" label="Better" diffLines={diffs.right} />
          {(right.output || right.preview || right.code) ? <div className="mt-3"><OutputBlock value={right.output} preview={right.preview} code={right.code} /></div> : null}
          {right.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{right.note}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function CodeCards({ items }: { items: { title: string; code: string; output?: string; preview?: ReactNode; note?: string }[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl border border-line bg-surface p-3">
          <p className="mb-2 text-[14px] font-semibold text-mist">{it.title}</p>
          <CodeBlock code={it.code} filename="example.html" label="Code" compact />
          {(it.output || it.preview || it.code) ? <div className="mt-3"><OutputBlock value={it.output} preview={it.preview} code={it.code} /></div> : null}
          {it.note ? <p className="mt-2 text-[15px] leading-7 text-muted">{it.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function RuleGrid({ rules }: { rules: { title: string; body: string }[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {rules.map((r) => (
        <div key={r.title} className="rounded-xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-violet/20">
          <p className="flex items-center gap-2 text-[15px] font-semibold text-mist"><Eye className="size-4 text-violet" />{r.title}</p>
          <p className="mt-1 text-[15px] leading-7 text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SyntaxMatrix({ rows }: { rows: { label?: string; syntax: string; note: string; output?: string }[] }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line">
      <div className="grid grid-cols-[0.8fr_1.1fr_1fr_1.2fr] bg-surface/80 text-[13px] font-semibold text-faint">
        <div className="px-3 py-2">Form</div><div className="px-3 py-2">Syntax / Class</div><div className="px-3 py-2">Output / visual result</div><div className="px-3 py-2">Quick use</div>
      </div>
      {rows.map((r, i) => {
        const cls = r.syntax?.trim().split(/\s+/)[0] || "";
        const preview = visualForClass(cls);
        return (
          <div key={r.label ?? i} className="grid grid-cols-[0.8fr_1.1fr_1fr_1.2fr] border-t border-line text-[14px]">
            <div className="px-3 py-2 text-mist">{r.label ?? "—"}</div>
            <div className="px-3 py-2"><code className="rounded bg-violet/10 px-1.5 py-0.5 font-mono text-[12.5px] text-violet">{r.syntax}</code><p className="mt-1 text-[12px] text-muted">{describeClass(cls)}</p></div>
            <div className="px-3 py-2">{preview ? <div className="rounded-md border border-sky/20 bg-sky/[0.04] p-2">{preview}</div> : r.output ? <pre className="whitespace-pre-wrap rounded-md border border-sky/20 bg-sky/[0.04] p-2 font-mono text-[12px] leading-5 text-mist"><code>{r.output}</code></pre> : <span className="text-[12px] text-faint">See visual in section below</span>}</div>
            <div className="px-3 py-2 text-muted">{r.note}</div>
          </div>
        );
      })}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  const [on, setOn] = useState<boolean[]>(() => items.map(() => false));
  return (
    <div className="mt-5 rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2 text-faint"><CheckCircle2 className="size-4" /><p className="font-mono text-[13px] uppercase tracking-[0.16em]">Quick checklist</p></div>
      <div className="mt-3 space-y-2">
        {items.map((it, i) => (
          <button key={it} type="button" onClick={() => setOn((prev) => prev.map((v, idx) => (idx === i ? !v : v)))} className="flex w-full items-start gap-3 rounded-lg border border-line bg-canvas/60 px-3 py-2 text-left transition hover:border-violet/20">
            <span className={cn("mt-0.5 inline-flex size-5 items-center justify-center rounded border text-[12px]", on[i] ? "border-violet/40 bg-violet/10 text-violet" : "border-line text-faint")}>{on[i] ? "✓" : ""}</span>
            <span className={cn("text-[15px] leading-7", on[i] ? "text-mist" : "text-muted")}>{it}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Pitfall({ text }: { text: string }) {
  return <div className="mt-4 flex items-start gap-2 rounded-lg border border-coral/20 bg-coral/[0.05] p-3 text-[15px] leading-7 text-muted"><AlertTriangle className="mt-1 size-4 shrink-0 text-coral" /><p>{text}</p></div>;
}

export function VisualPreview({ title = "Rendered preview", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-canvas/80 p-3">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">{title}</p>
      <div className="rounded-md border border-line bg-surface p-3">{children}</div>
    </div>
  );
}
