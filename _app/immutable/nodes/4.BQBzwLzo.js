import"../chunks/entry.B382n7UE.js";import{a as n,w as s}from"../chunks/api.CNyUk2eU.js";import{a as d}from"../chunks/auth.D_E-pkxn.js";import{e as i}from"../chunks/index.BxWhMw3y.js";import"../chunks/disclose-version.Bny3gfsA.js";import{j as f,k as c}from"../chunks/index.6fWcJMZL.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="736535f5-3208-4255-8fe2-fae1b10fde0e",e._sentryDebugIdIdentifier="sentry-dbid-736535f5-3208-4255-8fe2-fae1b10fde0e")}catch{}})();const r=async({url:e})=>{const t=e.searchParams.get("token"),o=e.searchParams.get("state");console.debug(`[auth] token=${t}`),console.debug(`[auth] state=${o}`);const a=await n.getMe(t);return a.status!==200&&(console.error("[auth] Error fetching user data"),i(401)),console.info(`[auth] Logged in as ${a.data.name}`),d.set({token:t,name:a.data.name,picture:a.data.picture}),{redirect:o}},u=r?s(r):void 0,y=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));function w(e,t){f(t,!0),window.location.href=t.data.redirect,c()}export{w as component,y as universal};