import{w as l,d as n}from"./index.CFeJIACE.js";class i{read(e){try{const r=localStorage.getItem(e);return r===null?void 0:(console.debug(`[storage] Read ${e}`),JSON.parse(r))}catch(r){console.error(`[storage] Error reading ${e}: ${r}`)}}write(e,r){try{r==null?(localStorage.removeItem(e),console.debug(`[storage] Removed ${e}`)):(localStorage.setItem(e,JSON.stringify(r)),console.debug(`[storage] Wrote ${e}`))}catch(c){console.error(`[storage] Error writing ${e}: ${c}`)}}}const o=new i,a="auth_state",s=l(o.read(a));s.subscribe(t=>{o.write(a,t)});const d=n(s,t=>!!t);export{s as a,d as i,o as l};