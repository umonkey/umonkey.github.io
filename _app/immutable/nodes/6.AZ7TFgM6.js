import"../chunks/disclose-version.CVLrmm-c.js";import{i as P}from"../chunks/legacy.Cuu4uX5Q.js";import{R,T,O as e,P as o,Q as i,N as M,t as a,ab as f,a8 as F,aE as G,$ as J}from"../chunks/index.CbWQdyPD.js";import{i as L,b as U}from"../chunks/store.zYOmaikO.js";import{d as V,a as S,t as k}from"../chunks/template.FARQGre2.js";import{r as X,s}from"../chunks/attributes.Bszi7fWb.js";import{g as Y}from"../chunks/entry.Co_yX68F.js";import{r}from"../chunks/routes.LLz7mK1U.js";import{H as Z}from"../chunks/Header.q0CrcpGa.js";import{e as ee}from"../chunks/events.Dh_5afs_.js";import{b as ae}from"../chunks/input.D6BW4Hot.js";import{p as N}from"../chunks/props.BwWGETsP.js";import{S as re}from"../chunks/SearchIcon.DEaFfmh6.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new l.Error().stack;v&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[v]="cb19aca8-e4d3-4647-933a-727787d1749c",l._sentryDebugIdIdentifier="sentry-dbid-cb19aca8-e4d3-4647-933a-727787d1749c")}catch{}})();var se=k('<div class="search svelte-3e9zaz"><div class="icon svelte-3e9zaz"><!></div> <input type="search" placeholder="Search" class="svelte-3e9zaz"></div>');function te(l,v){R(v,!1);let t=N(v,"value",12,""),m=N(v,"onSearch",8,()=>{});const d=_=>{_.key==="Enter"&&m()()};P();var n=se(),h=o(n),u=o(h);re(u,{width:"20px",height:"20px"}),i(h);var c=e(h,2);X(c),V(c),i(n),ae(c,t),ee("keydown",c,d),S(l,n),T()}var oe=k('<p><a> </a></p> <hr class="svelte-otp8ev">',1),ie=k('<!> <div class="search svelte-otp8ev"><!> <!> <p>Some interesting searches:</p> <ul><li class="svelte-otp8ev"><a>Sick</a> or <a>dead</a> or <a>gone</a> trees, or <a>stomps</a></li> <li class="svelte-otp8ev"><a>Oaks</a> or <a>maples</a> or <a>ashes</a> or <a>elms</a></li> <li class="svelte-otp8ev">With <a>no images</a> or <a>no species</a></li> <li class="svelte-otp8ev"><a>Missing some data</a></li></ul></div>',1);function be(l,v){R(v,!1);let t=G("");const m=()=>{f(t)&&Y(r.searchQuery(f(t)))};P();var d=ie(),n=M(d);Z(n,{title:"Search"});var h=e(n,2),u=o(h);te(u,{onSearch:m,get value(){return f(t)},set value(p){F(t,p)},$$legacy:!0});var c=e(u,2);{var _=p=>{var B=oe(),K=M(B),Q=o(K);a(()=>s(Q,"href",r.searchQuery(f(t))));var C=o(Q);i(Q),i(K),J(2),a(()=>U(C,`Search the map for "${f(t)??""}"`)),S(p,B)};L(c,p=>{f(t)&&p(_)})}var w=e(c,4),y=o(w),x=o(y);a(()=>s(x,"href",r.searchQuery("sick")));var z=e(x,2);a(()=>s(z,"href",r.searchQuery("dead")));var I=e(z,2);a(()=>s(I,"href",r.searchQuery("gone")));var W=e(I,2);a(()=>s(W,"href",r.searchQuery("stomp"))),i(y);var g=e(y,2),D=o(g);a(()=>s(D,"href",r.searchQuery("oak")));var E=e(D,2);a(()=>s(E,"href",r.searchQuery("maple")));var H=e(E,2);a(()=>s(H,"href",r.searchQuery("ash")));var $=e(H,2);a(()=>s($,"href",r.searchQuery("elm"))),i(g);var b=e(g,2),O=e(o(b));a(()=>s(O,"href",r.searchQuery("noimage")));var j=e(O,2);a(()=>s(j,"href",r.searchQuery("unknown"))),i(b);var q=e(b,2),A=o(q);a(()=>s(A,"href",r.searchQuery("incomplete"))),i(q),i(w),i(h),S(l,d),T()}export{be as component};
//# sourceMappingURL=6.AZ7TFgM6.js.map