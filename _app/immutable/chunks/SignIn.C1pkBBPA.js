import"./disclose-version.B4mYiaRr.js";import{i as r}from"./legacy.B_5ELJdP.js";import{T as a,U as i}from"./index.xYywNjA9.js";import{e as p}from"./events.Dbp-u9uP.js";import{a as d,t as f}from"./template.Bb90HBnx.js";import{A as c,a as u}from"./env.Rs4pCY79.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="53aa4769-1f14-4381-941e-5190075b75d5",o._sentryDebugIdIdentifier="sentry-dbid-53aa4769-1f14-4381-941e-5190075b75d5")}catch{}})();var l=f('<button class="button" type="button">Sign In with Google</button>');function h(o,t){a(t,!1);const e=()=>{const s=`https://accounts.google.com/o/oauth2/auth?${new URLSearchParams({client_id:c,scope:"openid email profile",response_type:"token",redirect_uri:u,response_mode:"form_post",state:window.location.href}).toString()}`;window.location=s};r();var n=l();p("click",n,e),d(o,n),i()}export{h as S};