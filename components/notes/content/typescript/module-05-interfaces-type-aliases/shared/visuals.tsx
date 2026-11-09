"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function Tabs({items}:{items:{label:string,content:string}[]}){
 const [i,setI]=useState(0); const c=items[i]??items[0];
 return <div className="mt-5 rounded-xl border border-line bg-surface p-4"><div className="flex flex-wrap gap-2">{items.map((it,idx)=><button key={it.label} type="button" onClick={()=>setI(idx)} className={cn("rounded-lg border px-3 py-1.5 text-[13px]", idx===i?"border-lime/30 bg-lime/10 text-lime":"border-line bg-canvas text-muted")}>{it.label}</button>)}</div><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{c.content}</code></pre></div>;
}
export function Compare({left,right}:{left:{t:string,c:string};right:{t:string,c:string}}){
 return <div className="mt-5 grid gap-4 md:grid-cols-2">{[{...left,k:'l'},{...right,k:'r'}].map(x=><div key={x.k} className="rounded-xl border border-line bg-surface p-4"><p className="text-[15px] font-semibold text-mist">{x.t}</p><pre className="mt-3 overflow-x-auto rounded-lg border border-line bg-canvas/70 p-3 font-mono text-[13px] text-mist"><code>{x.c}</code></pre></div>)}</div>;
}
