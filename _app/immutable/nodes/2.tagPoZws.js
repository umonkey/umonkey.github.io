import{g as k}from"../chunks/entry.DHwIHR-6.js";import{a as $,w as D}from"../chunks/api.D2loYNr0.js";import"../chunks/disclose-version.BlK1kMzR.js";import{e as T,g as Y,t as h,f as H,a1 as I,s as t,j as r,n as s,k as n}from"../chunks/utils.CFhoaAiD.js";import{s as C,h as M,a as S}from"../chunks/store.D7wMafqz.js";import{a as j,t as x}from"../chunks/template.BnrarM8h.js";import{s as g}from"../chunks/attributes.CRngR2u9.js";import{r as i}from"../chunks/routes.Coe4Xs8_.js";import{p as W}from"../chunks/stores.D966qoHt.js";import{H as O}from"../chunks/Header.Dw6SMVSF.js";import{H as P}from"../chunks/HomeTabs.Bz721nGF.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="e7255ab1-258b-4d6e-8221-d984086e8064",e._sentryDebugIdIdentifier="sentry-dbid-e7255ab1-258b-4d6e-8221-d984086e8064")}catch{}})();const b=async()=>({totalCount:(await $.getStats()).data.count}),Q=b?D(b):void 0,X=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"})),z=e=>{if(!e)return;const a=e.match(/^#\/tree\/(\d+)/);a&&k(i.treeDetails(a[1]))};var A=x(`<!> <!> <div class="home svelte-1s5y7mc"><h1>Tree Map of Yerevan</h1> <p>Welcome to the map of trees in Yerevan.<br>We have <strong></strong> in our
		database.<br> You can read about this app <a href="https://github.com/KanachYerevan/kb/wiki/Mobile-Application" target="_blank">in our wiki</a>.</p> <p>Don't know what to do? Find trees around you that are <a>missing some data</a> or <a>missing photos</a> and help us out!</p> <p>Please use the navigation bar to access areas of the application.</p> <p>This is a community driven application that everyone can use and update. You can find the source
		code <a href="https://github.com/umonkey/treemap/" target="_blank">here</a>.</p></div>`,1);function Z(e,a){T(a,!0);const p=C(),v=()=>S(W,"$page",p),{totalCount:y}=a.data;z(v().url.hash);var d=A();M(E=>{I.title="Trees of Yerevan"});var c=Y(d);O(c,{title:"Tree Map",back:!1});var m=t(c,2);P(m,{active:"welcome"});var u=t(m,2),o=t(r(u),2),_=t(r(o),3);_.textContent=`${y??""} trees`,s(5),n(o);var f=t(o,2),l=t(r(f));h(()=>g(l,"href",i.searchQuery("incomplete")));var w=t(l,2);h(()=>g(w,"href",i.searchQuery("noimage"))),s(),n(f),s(4),n(u),j(e,d),H()}export{Z as component,X as universal};