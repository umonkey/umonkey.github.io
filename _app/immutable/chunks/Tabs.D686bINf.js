import"./disclose-version.Bny3gfsA.js";import{j as n,k as s}from"./index.6fWcJMZL.js";import{r}from"./routes.D1YDAj2-.js";import{T as d}from"./TabRenderer.MFBdEDvx.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4289cc1a-72e0-402c-bbc5-cae23cc7c433",e._sentryDebugIdIdentifier="sentry-dbid-4289cc1a-72e0-402c-bbc5-cae23cc7c433")}catch{}})();function b(e,t){n(t,!0);const c=[{id:"new",title:"Added",url:r.newTrees()},{id:"changes",title:"Edited",url:r.changedTrees()},{id:"comments",title:"Comments",url:r.comments()}];d(e,{get active(){return t.active},tabs:c}),s()}export{b as T};