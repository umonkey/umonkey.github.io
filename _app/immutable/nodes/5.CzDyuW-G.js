import{a as j,t as x}from"../chunks/disclose-version.CLZNo6Mi.js";import"../chunks/legacy.j8GUzb4P.js";import{U as i,V as t,a7 as B,W as I,S as M,t as e,X as O,T as a}from"../chunks/utils.BFcvIjER.js";import{s as r}from"../chunks/attributes.C1_R1VUv.js";import{i as T}from"../chunks/lifecycle.CaLmRQ1O.js";import{r as s}from"../chunks/routes.Du5GAGsL.js";import{H as U}from"../chunks/Header.CcdmL7Ww.js";import{S as V}from"../chunks/SearchIcon.BPmSHHvH.js";var X=x('<div class="search svelte-3e9zaz"><div class="icon svelte-3e9zaz"><!></div> <input type="search" placeholder="Search" class="svelte-3e9zaz"></div>');function $(c){var o=X(),l=i(o),v=i(l);V(v,{width:"20px",height:"20px"}),t(l),B(2),t(o),j(c,o)}var q=x('<!> <div class="search svelte-1j699kg"><!> <p>Some interesting searches:</p> <ul><li class="svelte-1j699kg"><a>Sick</a> or <a>dead</a> or <a>gone</a> trees, or <a>stomps</a></li> <li class="svelte-1j699kg"><a>Oaks</a> or <a>maples</a> or <a>ashes</a> or <a>elms</a></li> <li class="svelte-1j699kg">With <a>no images</a> or <a>no species</a></li> <li class="svelte-1j699kg"><a>Missing some data</a></li></ul></div>',1);function L(c,o){I(o,!1),T();var l=q(),v=M(l);U(v,{title:"Search"});var n=a(v,2),f=i(n);$(f);var d=a(f,4),h=i(d),u=i(h);e(()=>r(u,"href",s.searchQuery("sick")));var _=a(u,2);e(()=>r(_,"href",s.searchQuery("dead")));var g=a(_,2);e(()=>r(g,"href",s.searchQuery("gone")));var b=a(g,2);e(()=>r(b,"href",s.searchQuery("stomp"))),t(h);var p=a(h,2),y=i(p);e(()=>r(y,"href",s.searchQuery("oak")));var Q=a(y,2);e(()=>r(Q,"href",s.searchQuery("maple")));var k=a(Q,2);e(()=>r(k,"href",s.searchQuery("ash")));var w=a(k,2);e(()=>r(w,"href",s.searchQuery("elm"))),t(p);var m=a(p,2),S=a(i(m));e(()=>r(S,"href",s.searchQuery("noimage")));var H=a(S,2);e(()=>r(H,"href",s.searchQuery("unknown"))),t(m);var z=a(m,2),W=i(z);e(()=>r(W,"href",s.searchQuery("incomplete"))),t(z),t(d),t(n),j(c,l),O()}export{L as component};