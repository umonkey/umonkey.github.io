import"../chunks/entry.CcjEMNYE.js";import{a as G,w as U,g as A}from"../chunks/api.CHrCzx12.js";import{e as M}from"../chunks/index.POrmKCuA.js";import"../chunks/disclose-version.B4mYiaRr.js";import{T as w,U as x,P as d,R as o,t as p,O as i,ab as k,aG as N,N as j,Q,aD as R}from"../chunks/index.xYywNjA9.js";import{h as W}from"../chunks/svelte-head.WsYdN02J.js";import{a as n,n as B,t as g,c as q}from"../chunks/template.Bb90HBnx.js";import{i as C,b}from"../chunks/store.CCXHsA2w.js";import{s as I}from"../chunks/attributes.z7B2yb9e.js";import{r as E}from"../chunks/routes.Dak5FIRy.js";import{i as H}from"../chunks/legacy.B_5ELJdP.js";import{d as F}from"../chunks/events.Dbp-u9uP.js";import{t as L}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.C6tB-bOj.js";import{e as O,i as P}from"../chunks/each.lzk7QH8s.js";import{p as J}from"../chunks/props.BtE3_Li4.js";import{f as K}from"../chunks/strings.B-Qbkeis.js";import{H as V}from"../chunks/Header.BarM0eSU.js";import{a as X,b as z,c as Z}from"../chunks/trees.CVd5jsdF.js";import{T as ee,a as te,M as ae}from"../chunks/Menu.CrptZBml.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="ab78c360-aa90-4adb-9064-42f0b113fee9",s._sentryDebugIdIdentifier="sentry-dbid-ab78c360-aa90-4adb-9064-42f0b113fee9")}catch{}})();const $=async({params:s})=>{const t=s.id;t||M(404);const e=await G.getTree(t);return e.status!==200&&M(404),{id:t,tree:e.data}},re=$?U($):void 0,qe=Object.freeze(Object.defineProperty({__proto__:null,load:re},Symbol.toStringTag,{value:"Module"}));var se=B('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"></path></svg>');function oe(s){var t=se();n(s,t)}var de=B('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg>');function ie(s){var t=de();n(s,t)}const le=async()=>{if(!navigator.share){L.push("Your browser doesn't support sharing.");return}try{await navigator.share({title:document.title,url:window.location.href})}catch(s){console.error("Error sharing a tree.",s),L.push("Error sharing this page.")}};var ve=g('<button type="button" title="Share this page" class="svelte-nwi7pb"><!></button>');function ne(s,t){w(t,!1),H();var e=ve();e.__click=[le];var l=d(e);ie(l),o(e),n(s,e),x()}F(["click"]);var ce=g('<div class="actions svelte-1mfbsi0"><!> <div class="svelte-1mfbsi0"><a class="svelte-1mfbsi0"><!></a></div> <div class="svelte-1mfbsi0"><!></div> <!></div>');function ue(s,t){w(t,!0);var e=ce(),l=d(e);C(l,f=>{});var v=i(l,2),c=d(v);p(()=>I(c,"href",E.treeComments(t.tree)));var a=d(c);oe(a),o(c),o(v);var r=i(v,2),m=d(r);ne(m,{}),o(r);var u=i(r,2);C(u,f=>{}),o(e),n(s,e),x()}var fe=g('<p class="formatted svelte-1ghgxjs"> </p>'),me=g(`<p>There is no description for this tree. You can leave a comment to let us know about something
			interesting.</p>`),ge=g('<div class="description svelte-1ghgxjs"><!></div>');function _e(s,t){var e=ge(),l=d(e);{var v=a=>{var r=fe(),m=d(r,!0);o(r),p(()=>b(m,t.text)),n(a,r)},c=a=>{var r=me();n(a,r)};C(l,a=>{t.text?a(v):a(c,!1)})}o(e),n(s,e)}var pe=g('<div class="date svelte-1t0lok7"> </div>'),he=g('<div class="svelte-1t0lok7"><img alt="See how good is this tree." class="svelte-1t0lok7"> <div class="imgno svelte-1t0lok7"> </div> <!></div>'),be=g('<div class="svelte-1t0lok7"><img src="/tree.jpg" alt="no photos of this tree" class="svelte-1t0lok7"></div>'),we=g('<div class="gallery svelte-1t0lok7"><div class="slides svelte-1t0lok7"></div></div>');function xe(s,t){w(t,!1);let e=J(t,"files",24,()=>[]);const l=a=>{if(!a.added_at||!a.added_by)return"";const r=N(A)(a.added_by);return r===void 0?"":`${K(a.added_at)} by ${r.name}`};H();var v=we(),c=d(v);O(c,5,e,P,(a,r,m)=>{var u=he(),f=d(u);p(()=>I(f,"src",E.file(k(r).small_id)));var _=i(f,2),h=d(_);o(_);var y=i(_,2);{var S=T=>{var D=pe(),Y=d(D,!0);p(()=>b(Y,l(k(r)))),o(D),n(T,D)};C(y,T=>{k(r).added_at&&T(S)})}o(u),p(()=>b(h,`${m+1}/${e().length??""}`)),n(a,u)},a=>{var r=be();n(a,r)}),o(c),o(v),n(s,v),x()}var ye=g('<li><a target="_blank"> </a></li>'),ke=g('<ul class="links svelte-mhg1lc"></ul>');function Ce(s,t){w(t,!0);const e=X(t.tree);var l=q(),v=j(l);{var c=a=>{var r=ke();O(r,21,()=>e,P,(m,u)=>{var f=ye(),_=d(f),h=d(_,!0);o(_),o(f),p(()=>{I(_,"href",k(u).url),b(h,k(u).text)}),n(m,f)}),o(r),n(a,r)};C(v,a=>{e.length>0&&a(c)})}n(s,l),x()}var Se=g('<div class="properties svelte-1ou7539"><dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Height</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Canopy</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Trunk</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">State</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Year</dt> <dd class="svelte-1ou7539">???</dd></dl></div>');function Te(s,t){w(t,!0);var e=Se(),l=d(e),v=i(d(l),2),c=d(v,!0);p(()=>b(c,z(t.tree.height))),o(v),o(l);var a=i(l,2),r=i(d(a),2),m=d(r,!0);p(()=>b(m,z(t.tree.diameter))),o(r),o(a);var u=i(a,2),f=i(d(u),2),_=d(f,!0);p(()=>b(_,Z(t.tree.circumference))),o(f),o(u);var h=i(u,2),y=i(d(h),2),S=d(y,!0);o(y),o(h),Q(2),o(e),p(()=>b(S,t.tree.state)),n(s,e),x()}var De=g("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Fe(s,t){w(t,!0);const e=t.data.tree;var l=De();W(y=>{p(()=>R.title=`${e.species??""} - Details`)});var v=j(l);V(v,{title:"Tree"});var c=i(v,2);ee(c,{get title(){return e.species}});var a=i(c,2);te(a,{get tree(){return e.id},active:"details"});var r=i(a,2);xe(r,{get files(){return e.files}});var m=i(r,2);ue(m,{get tree(){return e.id}});var u=i(m,2);Te(u,{tree:e});var f=i(u,2);Ce(f,{tree:e});var _=i(f,2);_e(_,{get text(){return e.notes}});var h=i(_,2);ae(h,{get id(){return e.id}}),n(s,l),x()}export{Fe as component,qe as universal};