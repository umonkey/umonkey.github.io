import{h as e,a as i,d as s,t as d}from"./disclose-version.CLZNo6Mi.js";import"./legacy.j8GUzb4P.js";import{T as r,S as l,a7 as c}from"./utils.BFcvIjER.js";import{a as g}from"./api.BlGb2U4K.js";import{a as p}from"./auth.DCNBl5R4.js";const m=async t=>{console.debug("GAUTH",t);const o=t.credential,a=await g.loginWithGoogle(o);a.status===200&&(p.set(a.data),console.info(`Logged in as ${a.data.name}`))};var _=s('<script src="https://accounts.google.com/gsi/client" async><\/script><!---->',1),f=d('<div id="g_id_onload" data-client_id="999312923392-6k26jala2pe5dk9u7o63o8nvts3a7f1f.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-callback="onSignIn" data-itp_support="true"></div> <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="medium" data-locale="en-US" data-logo_alignment="left"></div>',1);function x(t){window.onSignIn=m;var o=f();e(a=>{var n=_(),u=r(l(n));i(a,n)}),c(2),i(t,o)}export{x as S};