import"../chunks/entry.BOgXZEOg.js";import{w as Y}from"../chunks/load.CWJQYR6K.js";import{e as $}from"../chunks/index.B-i9ps5k.js";import{a as A}from"../chunks/api.DIPCcg-U.js";import{a as n,n as z,t as _,c as G}from"../chunks/disclose-version.rig3ynY9.js";import{Q as w,R as x,O as i,P as o,t as b,N as d,ab as k,M as j,_ as J,aB as N}from"../chunks/index.DRxbb0_q.js";import{h as Q}from"../chunks/svelte-head.CoDOZH0p.js";import{i as C,b as p}from"../chunks/store.BFiGswbr.js";import{s as T}from"../chunks/attributes.iKekOCwP.js";import{r as B}from"../chunks/routes.DH3OHeec.js";import{i as E}from"../chunks/legacy.B6pJgzki.js";import{d as R}from"../chunks/events.G-r1QsWm.js";import{t as D}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.CyPBtT36.js";import{e as H,i as O}from"../chunks/each.Df9gO4kV.js";import{p as W}from"../chunks/props.CKBXq9GG.js";import{H as q}from"../chunks/Header.bgPxhxzI.js";import{f as F}from"../chunks/trees.CPZzeFFi.js";import{T as K,a as U,M as V}from"../chunks/Menu.C4JNinb7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new a.Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="a3b7c8e9-e9a3-43a8-9324-636399845c1a",a._sentryDebugIdIdentifier="sentry-dbid-a3b7c8e9-e9a3-43a8-9324-636399845c1a")}catch{}})();const L=async({params:a})=>{const t=a.id;t||$(404);const e=await A.getTree(t);return e.status!==200&&$(404),{id:t,tree:e.data}},X=L?Y(L):void 0,Ge=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));var Z=z('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"></path></svg>');function ee(a){var t=Z();n(a,t)}var te=z('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg>');function ae(a){var t=te();n(a,t)}const re=async()=>{if(!navigator.share){D.push("Your browser doesn't support sharing.");return}try{await navigator.share({title:document.title,url:window.location.href})}catch(a){console.error("Error sharing a tree.",a),D.push("Error sharing this page.")}};var se=_('<button type="button" title="Share this page" class="svelte-nwi7pb"><!></button>');function oe(a,t){w(t,!1),E();var e=se();e.__click=[re];var l=i(e);ae(l),o(e),n(a,e),x()}R(["click"]);var ie=_('<div class="actions svelte-1mfbsi0"><!> <div class="svelte-1mfbsi0"><a class="svelte-1mfbsi0"><!></a></div> <div class="svelte-1mfbsi0"><!></div> <!></div>');function de(a,t){w(t,!0);var e=ie(),l=i(e);C(l,f=>{});var v=d(l,2),c=i(v);b(()=>T(c,"href",B.treeComments(t.tree)));var s=i(c);ee(s),o(c),o(v);var r=d(v,2),m=i(r);oe(m,{}),o(r);var u=d(r,2);C(u,f=>{}),o(e),n(a,e),x()}var le=_('<p class="formatted svelte-1ghgxjs"> </p>'),ve=_(`<p>There is no description for this tree. You can leave a comment to let us know about something
			interesting.</p>`),ne=_('<div class="description svelte-1ghgxjs"><!></div>');function ce(a,t){var e=ne(),l=i(e);{var v=s=>{var r=le(),m=i(r,!0);o(r),b(()=>p(m,t.text)),n(s,r)},c=s=>{var r=ve();n(s,r)};C(l,s=>{t.text?s(v):s(c,!1)})}o(e),n(a,e)}var ue=_('<div class="date svelte-1t0lok7"> </div>'),me=_('<div class="svelte-1t0lok7"><img alt="See how good is this tree." class="svelte-1t0lok7"> <div class="imgno svelte-1t0lok7"> </div> <!></div>'),fe=_('<div class="svelte-1t0lok7"><img src="/tree.jpg" alt="no photos of this tree" class="svelte-1t0lok7"></div>'),_e=_('<div class="gallery svelte-1t0lok7"><div class="slides svelte-1t0lok7"></div></div>');function ge(a,t){w(t,!1);let e=W(t,"files",24,()=>[]);const l=s=>{const r=s.added_at??"07.11.2024",m=s.added_by??"John Doe";return`${r} by ${m}`};E();var v=_e(),c=i(v);H(c,5,e,O,(s,r,m)=>{var u=me(),f=i(u);b(()=>T(f,"src",B.file(k(r).small_id)));var g=d(f,2),h=i(g);o(g);var y=d(g,2);{var S=I=>{var M=ue(),P=i(M,!0);b(()=>p(P,l(k(r)))),o(M),n(I,M)};C(y,I=>{k(r).added_at&&I(S)})}o(u),b(()=>p(h,`${m+1}/${e().length??""}`)),n(s,u)},s=>{var r=fe();n(s,r)}),o(c),o(v),n(a,v),x()}var he=_('<li><a target="_blank"> </a></li>'),pe=_('<ul class="links svelte-mhg1lc"></ul>');function be(a,t){w(t,!0);const e=F(t.tree);var l=G(),v=j(l);{var c=s=>{var r=pe();H(r,21,()=>e,O,(m,u)=>{var f=he(),g=i(f),h=i(g,!0);o(g),o(f),b(()=>{T(g,"href",k(u).url),p(h,k(u).text)}),n(m,f)}),o(r),n(s,r)};C(v,s=>{e.length>0&&s(c)})}n(a,l),x()}var we=_('<div class="properties svelte-1ou7539"><dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Height</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Canopy</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Trunk</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">State</dt> <dd class="svelte-1ou7539"> </dd></dl> <dl class="svelte-1ou7539"><dt class="svelte-1ou7539">Year</dt> <dd class="svelte-1ou7539">unknown</dd></dl></div>');function xe(a,t){w(t,!0);var e=we(),l=i(e),v=d(i(l),2),c=i(v);o(v),o(l);var s=d(l,2),r=d(i(s),2),m=i(r);o(r),o(s);var u=d(s,2),f=d(i(u),2),g=i(f);o(f),o(u);var h=d(u,2),y=d(i(h),2),S=i(y,!0);o(y),o(h),J(2),o(e),b(()=>{p(c,`${t.tree.height??""} m`),p(m,`${t.tree.diameter??""} m`),p(g,`${t.tree.circumference??""} m`),p(S,t.tree.state)}),n(a,e),x()}var ye=_("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Je(a,t){w(t,!0);const e=t.data.tree;var l=ye();Q(y=>{b(()=>N.title=`${e.species??""} - Details`)});var v=j(l);q(v,{title:"Tree"});var c=d(v,2);K(c,{get title(){return e.species}});var s=d(c,2);U(s,{get tree(){return e.id},active:"details"});var r=d(s,2);ge(r,{get files(){return e.files}});var m=d(r,2);de(m,{get tree(){return e.id}});var u=d(m,2);xe(u,{tree:e});var f=d(u,2);be(f,{tree:e});var g=d(f,2);ce(g,{get text(){return e.notes}});var h=d(g,2);V(h,{get id(){return e.id}}),n(a,l),x()}export{Je as component,Ge as universal};
//# sourceMappingURL=7.CXsIJrB3.js.map