import{a2 as c,a3 as d}from"./index.DRxbb0_q.js";import"./disclose-version.rig3ynY9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="935ec622-390e-4a01-90e5-74c6341c8647",t._sentryDebugIdIdentifier="sentry-dbid-935ec622-390e-4a01-90e5-74c6341c8647")}catch{}})();class i{read(e){try{const r=localStorage.getItem(e);return r===null?void 0:(console.debug(`[storage] Read ${e}`),JSON.parse(r))}catch(r){console.error(`[storage] Error reading ${e}: ${r}`)}}write(e,r){try{r==null?(localStorage.removeItem(e),console.debug(`[storage] Removed ${e}`)):(localStorage.setItem(e,JSON.stringify(r)),console.debug(`[storage] Wrote ${e}`))}catch(n){console.error(`[storage] Error writing ${e}: ${n}`)}}}const o=new i,s="auth_state",a=c(o.read(s));a.subscribe(t=>{o.write(s,t)});const u=d(a,t=>!!t);export{a,u as i,o as l};
//# sourceMappingURL=auth.B-5LeKjG.js.map