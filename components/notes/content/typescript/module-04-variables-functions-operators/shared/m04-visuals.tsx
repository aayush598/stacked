"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function TwoCol({a,b}:{a:{title:string,body:string,code?:string};b:{title:string,body:string,code?:string}}){
  return <div className="mt-5 grid gap-4 md:grid-cols-2">{[a,b].map(x=><div key={x.title} className="rounded-xl border border-line bg-surface p-4"><p className="text-[15px] font-semibold text-mist">{x.title}</p><p className="mt-2 text-[15px] leading-7 text-muted">{x.body}</p>{x.code?<pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{x.code}</code></pre>:null}</div>)}</div>;
}
export function ToggleTabs({items,initial=0}:{items:{label:string,code:string,note:string}[];initial?:number}){
  const [i,setI]=useState(initial); const c=items[i]??items[0];
  return <div className="mt-5 rounded-xl border border-line bg-surface p-4"><div className="flex flex-wrap gap-2">{items.map((it,idx)=><button key={it.label} type="button" onClick={()=>setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px]", idx===i?"border-lime/30 bg-lime/10 text-lime":"border-line bg-canvas text-muted")}>{it.label}</button>)}</div><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{c.code}</code></pre><p className="mt-2 text-[15px] leading-7 text-muted">{c.note}</p></div>;
}
export function MiniFlow({steps}:{steps:string[]}){
  return <div className="mt-5 flex flex-wrap items-center gap-2 text-[13px]">{steps.map((s,i)=><span key={i} className="flex items-center gap-2"><span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-mist animate-[fadeIn_180ms_ease-out_both]" style={{animationDelay:`${i*35}ms`}}>{s}</span>{i<steps.length-1?<span className="text-faint">→</span>:null}</span>)}</div>;
}
