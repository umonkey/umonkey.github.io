import"../chunks/entry.CNrZ7C6w.js";import{a as n,w as s}from"../chunks/api.DA6MqeHl.js";import{a as d}from"../chunks/auth.C3pQt9CG.js";import"../chunks/disclose-version.B8XhIGqT.js";import{R as i,T as c}from"../chunks/index.CbWQdyPD.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ec0319a1-6b32-4e1d-a960-af1e76f06908",e._sentryDebugIdIdentifier="sentry-dbid-ec0319a1-6b32-4e1d-a960-af1e76f06908")}catch{}})();const r=async({url:e})=>{const t=e.searchParams.get("token"),o=e.searchParams.get("state");console.debug(`[auth] token=${t}`),console.debug(`[auth] state=${o}`);const a=await n.getMe(t);return a.status!==200&&(console.error("[auth] Error fetching user data"),error(401)),console.info(`[auth] Logged in as ${a.data.name}`),d.set({token:t,name:a.data.name,picture:a.data.picture}),{redirect:o}},u=r?s(r):void 0,b=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));function h(e,t){i(t,!0),window.location.href=t.data.redirect,c()}export{h as component,b as universal};
//# sourceMappingURL=3.C-zYRZll.js.map