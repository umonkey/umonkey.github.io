import{s as r}from"./entry.B382n7UE.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="31cb7ab5-79d7-4c6d-ad04-4d343d7aa391",e._sentryDebugIdIdentifier="sentry-dbid-31cb7ab5-79d7-4c6d-ad04-4d343d7aa391")}catch{}})();const t=()=>{const e=r;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},d={subscribe(e){return t().page.subscribe(e)}},b={subscribe(e){return t().navigating.subscribe(e)}};export{b as n,d as p};