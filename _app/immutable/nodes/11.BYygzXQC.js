import"../chunks/entry.Co_yX68F.js";import{a as c,w as l}from"../chunks/api.DDDsSy4Q.js";import{e as d}from"../chunks/index.CxYwxwuK.js";import"../chunks/disclose-version.CVLrmm-c.js";import{R as m,N as u,T as g,t as y,aB as v,O as r,$ as _}from"../chunks/index.CbWQdyPD.js";import{h as b}from"../chunks/svelte-head.DlRxUE2U.js";import{a as h,t as T}from"../chunks/template.FARQGre2.js";import{H as w}from"../chunks/Header.q0CrcpGa.js";import{T as I,a as D,M as $}from"../chunks/Menu.DitRikhZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a5a8ff64-1623-4f6a-8aaa-1c52b4313916",e._sentryDebugIdIdentifier="sentry-dbid-a5a8ff64-1623-4f6a-8aaa-1c52b4313916")}catch{}})();const f=async({params:e})=>{const t=e.id;t||d(400,{message:"Tree id not specified."});const a=await c.getTree(t);return a.status!==200&&d(404,{message:"Error fetching tree."}),{id:t,tree:a.data}},x=f?l(f):void 0,L=Object.freeze(Object.defineProperty({__proto__:null,load:x},Symbol.toStringTag,{value:"Module"}));var M=T('<!> <!> <!> <!> <p class="svelte-5xy3vn">No history of changes for this tree yet.</p> <p class="svelte-5xy3vn">(This area is under construction.)</p>',1);function P(e,t){m(t,!0);const a=t.data.tree;var s=M();b(O=>{y(()=>v.title=`${a.species??""} - Details`)});var o=u(s);w(o,{title:"Tree"});var i=r(o,2);I(i,{get title(){return a.species}});var n=r(i,2);D(n,{get tree(){return a.id},active:"history"});var p=r(n,2);$(p,{get id(){return a.id}}),_(4),h(e,s),g()}export{P as component,L as universal};
//# sourceMappingURL=11.BYygzXQC.js.map