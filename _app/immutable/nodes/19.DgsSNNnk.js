import"../chunks/entry.DHwIHR-6.js";import{a as m,w as u}from"../chunks/api.D2loYNr0.js";import{e as d}from"../chunks/index.BUu08_ub.js";import"../chunks/disclose-version.BlK1kMzR.js";import{e as g,g as b,f as y,t as v,a1 as _,s as a,a5 as h,ap as w,n as T}from"../chunks/utils.CFhoaAiD.js";import{h as I}from"../chunks/store.D7wMafqz.js";import{a as D,t as x}from"../chunks/template.BnrarM8h.js";import{f as c}from"../chunks/trees.BaSnKDeF.js";import{H as S}from"../chunks/Header.Dw6SMVSF.js";import{T as $,a as M,M as j}from"../chunks/Menu.Dyga5X0S.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2d03eabc-38cb-427a-864c-a6bac59ebe2f",e._sentryDebugIdIdentifier="sentry-dbid-2d03eabc-38cb-427a-864c-a6bac59ebe2f")}catch{}})();const f=async({params:e})=>{const t=e.id;t||d(400,{message:"Tree id not specified."});const r=await m.getTree(t);return r.status!==200&&d(404,{message:"Error fetching tree."}),{id:t,tree:r.data}},E=f?u(f):void 0,F=Object.freeze(Object.defineProperty({__proto__:null,load:E},Symbol.toStringTag,{value:"Module"}));var H=x('<!> <!> <!> <!> <p class="svelte-5xy3vn">No history of changes for this tree yet.</p> <p class="svelte-5xy3vn">(This area is under construction.)</p>',1);function G(e,t){g(t,!0);const r=t.data.tree;var s=H();I(O=>{v(()=>_.title=`${c(r.species)??""} - Details`)});var o=b(s);S(o,{title:"Tree"});var i=a(o,2),p=w(()=>c(r.species));$(i,{get title(){return h(p)},get address(){return r.address}});var n=a(i,2);M(n,{get tree(){return r.id},active:"history"});var l=a(n,2);j(l,{get id(){return r.id}}),T(4),D(e,s),y()}export{G as component,F as universal};