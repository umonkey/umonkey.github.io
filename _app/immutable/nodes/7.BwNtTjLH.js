import"../chunks/disclose-version.BlK1kMzR.js";import{i as C}from"../chunks/legacy.D4frCxXy.js";import{e as F,f as G,s as a,j as t,k as o,g as M,t as e,a5 as d,aa as U,ay as V,n as O}from"../chunks/utils.CFhoaAiD.js";import{i as X,b as Y}from"../chunks/store.D7wMafqz.js";import{g as Z,e as $,a as w,t as S}from"../chunks/template.BnrarM8h.js";import{r as aa,s}from"../chunks/attributes.CRngR2u9.js";import{g as ea}from"../chunks/entry.DHwIHR-6.js";import{r}from"../chunks/routes.Coe4Xs8_.js";import{H as ra}from"../chunks/Header.Dw6SMVSF.js";import{b as sa}from"../chunks/input.93-YlpIa.js";import{p as A}from"../chunks/props.DVQ-LOBM.js";import{S as ta}from"../chunks/SearchIcon.DcJku2nO.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new l.Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="1cab9005-0a71-4971-926b-d77dca1d161d",l._sentryDebugIdIdentifier="sentry-dbid-1cab9005-0a71-4971-926b-d77dca1d161d")}catch{}})();var oa=S('<div class="search svelte-3e9zaz"><div class="icon svelte-3e9zaz"><!></div> <input type="search" placeholder="Search" class="svelte-3e9zaz"></div>');function ia(l,n){F(n,!1);let i=A(n,"value",12,""),m=A(n,"onSearch",8,()=>{});const f=_=>{_.key==="Enter"&&m()()};C();var c=oa(),h=t(c),u=t(h);ta(u,{width:"20px",height:"20px"}),o(h);var v=a(h,2);aa(v),Z(v),o(c),sa(v,i),$("keydown",v,f),w(l,c),G()}var la=S('<p><a> </a></p> <hr class="svelte-otp8ev">',1),na=S('<!> <div class="search svelte-otp8ev"><!> <!> <p>Some interesting searches:</p> <ul><li class="svelte-otp8ev"><a>Sick</a> or <a>dead</a> or <a>gone</a> trees, or <a>stomps</a></li> <li class="svelte-otp8ev"><a>Oaks</a> or <a>maples</a> or <a>ashes</a> or <a>elms</a></li> <li class="svelte-otp8ev">With <a>unknown species</a> and photos</li> <li class="svelte-otp8ev">With <a>no images</a> or <a>no species</a></li> <li class="svelte-otp8ev"><a>Missing some data</a></li></ul></div>',1);function Qa(l,n){F(n,!1);let i=V("");const m=()=>{d(i)&&ea(r.searchQuery(d(i)))};C();var f=na(),c=M(f);ra(c,{title:"Search"});var h=a(c,2),u=t(h);ia(u,{onSearch:m,get value(){return d(i)},set value(p){U(i,p)},$$legacy:!0});var v=a(u,2);{var _=p=>{var B=la(),K=M(B),k=t(K);e(()=>s(k,"href",r.searchQuery(d(i))));var T=t(k);o(k),o(K),O(2),e(()=>Y(T,`Search the map for "${d(i)??""}"`)),w(p,B)};X(v,p=>{d(i)&&p(_)})}var x=a(v,4),y=t(x),z=t(y);e(()=>s(z,"href",r.searchQuery("sick")));var I=a(z,2);e(()=>s(I,"href",r.searchQuery("dead")));var D=a(I,2);e(()=>s(D,"href",r.searchQuery("gone")));var J=a(D,2);e(()=>s(J,"href",r.searchQuery("stomp"))),o(y);var g=a(y,2),E=t(g);e(()=>s(E,"href",r.searchQuery("oak")));var H=a(E,2);e(()=>s(H,"href",r.searchQuery("maple")));var W=a(H,2);e(()=>s(W,"href",r.searchQuery("ash")));var L=a(W,2);e(()=>s(L,"href",r.searchQuery("elm"))),o(g);var b=a(g,2),N=a(t(b));e(()=>s(N,"href",r.searchQuery("unknown hasimage"))),O(),o(b);var Q=a(b,2),j=a(t(Q));e(()=>s(j,"href",r.searchQuery("noimage")));var P=a(j,2);e(()=>s(P,"href",r.searchQuery("unknown"))),o(Q);var q=a(Q,2),R=t(q);e(()=>s(R,"href",r.searchQuery("incomplete"))),o(q),o(x),o(h),w(l,f),G()}export{Qa as component};