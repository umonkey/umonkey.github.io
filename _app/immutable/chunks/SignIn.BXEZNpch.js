import"./disclose-version.B2rXiN4X.js";import{i as a}from"./legacy.B0sGpCCt.js";import{R as r,T as i}from"./index.BzXfXzR0.js";import{e as c}from"./events.C98iwaOo.js";import{a as d,t as p}from"./template.CwzYuxmV.js";import{A as f,a as u}from"./env.DMstDIhn.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="2aa20177-5cc4-4a14-b831-283b6ce72ddb",o._sentryDebugIdIdentifier="sentry-dbid-2aa20177-5cc4-4a14-b831-283b6ce72ddb")}catch{}})();var b=p('<button class="button" type="button">Sign In with Google</button>');function h(o,t){r(t,!1);const e=()=>{const s=`https://accounts.google.com/o/oauth2/auth?${new URLSearchParams({client_id:f,scope:"openid email profile",response_type:"token",redirect_uri:u,response_mode:"form_post",state:window.location.href}).toString()}`;window.location=s};a();var n=b();c("click",n,e),d(o,n),i()}export{h as S};