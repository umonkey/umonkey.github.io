import"../chunks/disclose-version.B8XhIGqT.js";import{i as P}from"../chunks/legacy.Cuu4uX5Q.js";import{R,T,O as a,P as o,Q as i,N as M,t as e,ab as h,a8 as F,aE as G,$ as J}from"../chunks/index.CbWQdyPD.js";import{i as L,b as U}from"../chunks/store.y-p8vbky.js";import{d as V,a as S,t as k}from"../chunks/template.FARQGre2.js";import{r as X,s}from"../chunks/attributes.Bszi7fWb.js";import{g as Y}from"../chunks/entry.CNrZ7C6w.js";import{r}from"../chunks/routes.CkSUeSPM.js";import{H as Z}from"../chunks/Header.DSb65TzA.js";import{e as aa}from"../chunks/events.Dh_5afs_.js";import{b as ea}from"../chunks/input.gMGTJYSf.js";import{p as N}from"../chunks/props.BqljOmi8.js";import{S as ra}from"../chunks/SearchIcon.Bq-4TgR7.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new l.Error().stack;v&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[v]="586f241c-3882-4417-a6ab-464db85b9f5a",l._sentryDebugIdIdentifier="sentry-dbid-586f241c-3882-4417-a6ab-464db85b9f5a")}catch{}})();var sa=k('<div class="search svelte-3e9zaz"><div class="icon svelte-3e9zaz"><!></div> <input type="search" placeholder="Search" class="svelte-3e9zaz"></div>');function ta(l,v){R(v,!1);let t=N(v,"value",12,""),m=N(v,"onSearch",8,()=>{});const d=_=>{_.key==="Enter"&&m()()};P();var c=sa(),f=o(c),u=o(f);ra(u,{width:"20px",height:"20px"}),i(f);var n=a(f,2);X(n),V(n),i(c),ea(n,t),aa("keydown",n,d),S(l,c),T()}var oa=k('<p><a> </a></p> <hr class="svelte-otp8ev">',1),ia=k('<!> <div class="search svelte-otp8ev"><!> <!> <p>Some interesting searches:</p> <ul><li class="svelte-otp8ev"><a>Sick</a> or <a>dead</a> or <a>gone</a> trees, or <a>stomps</a></li> <li class="svelte-otp8ev"><a>Oaks</a> or <a>maples</a> or <a>ashes</a> or <a>elms</a></li> <li class="svelte-otp8ev">With <a>no images</a> or <a>no species</a></li> <li class="svelte-otp8ev"><a>Missing some data</a></li></ul></div>',1);function ba(l,v){R(v,!1);let t=G("");const m=()=>{h(t)&&Y(r.searchQuery(h(t)))};P();var d=ia(),c=M(d);Z(c,{title:"Search"});var f=a(c,2),u=o(f);ta(u,{onSearch:m,get value(){return h(t)},set value(p){F(t,p)},$$legacy:!0});var n=a(u,2);{var _=p=>{var B=oa(),K=M(B),Q=o(K);e(()=>s(Q,"href",r.searchQuery(h(t))));var C=o(Q);i(Q),i(K),J(2),e(()=>U(C,`Search the map for "${h(t)??""}"`)),S(p,B)};L(n,p=>{h(t)&&p(_)})}var w=a(n,4),y=o(w),x=o(y);e(()=>s(x,"href",r.searchQuery("sick")));var z=a(x,2);e(()=>s(z,"href",r.searchQuery("dead")));var I=a(z,2);e(()=>s(I,"href",r.searchQuery("gone")));var W=a(I,2);e(()=>s(W,"href",r.searchQuery("stomp"))),i(y);var g=a(y,2),D=o(g);e(()=>s(D,"href",r.searchQuery("oak")));var E=a(D,2);e(()=>s(E,"href",r.searchQuery("maple")));var H=a(E,2);e(()=>s(H,"href",r.searchQuery("ash")));var $=a(H,2);e(()=>s($,"href",r.searchQuery("elm"))),i(g);var b=a(g,2),O=a(o(b));e(()=>s(O,"href",r.searchQuery("noimage")));var j=a(O,2);e(()=>s(j,"href",r.searchQuery("unknown"))),i(b);var q=a(b,2),A=o(q);e(()=>s(A,"href",r.searchQuery("incomplete"))),i(q),i(w),i(f),S(l,d),T()}export{ba as component};
//# sourceMappingURL=6.L79rroHi.js.map