import"./disclose-version.Bny3gfsA.js";import"./legacy.D-anx2rK.js";import{i as B,p as m,a as K}from"./props.CXIUh43G.js";import{T as q,H as Q}from"./TextInput.DgpdvhFc.js";import{o as O,j as T,e as i,g as o,k as F,s as u,t as M,a4 as b,ab as S,aF as D,n as U,aQ as G}from"./index.6fWcJMZL.js";import{i as H,b as C}from"./store.C3yr5Ypf.js";import{a as k,t as w}from"./template.Cy3dU-Fh.js";import{r as A,a as J}from"./attributes._hmteFvG.js";import{l as R,d as E}from"./events.MNT5-Jkf.js";import{M as V}from"./MapIcon.BmwGxmBz.js";import{M as W}from"./Map.B0p6Ogt0.js";import{e as X,i as Z}from"./each.DbABizDz.js";import{t as ee}from"./class.6EILLfGK.js";import{b as te}from"./input.CB6GPNT8.js";import{a as ae}from"./api.CNyUk2eU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="77d7d158-55e7-43d5-b79b-673595d3421f",e._sentryDebugIdIdentifier="sentry-dbid-77d7d158-55e7-43d5-b79b-673595d3421f")}catch{}})();function N(e,t,a){if(e.multiple)return re(e,t);for(var n of e.options){var l=x(n);if(B(l,t)){n.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function ne(e,t){O(()=>{var a=new MutationObserver(()=>{var n=e.__value;N(e,n)});return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function le(e,t,a=t){var n=!0;R(e,"change",l=>{var r=l?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(r),x);else{var c=e.querySelector(r)??e.querySelector("option:not([disabled])");s=c&&x(c)}a(s)}),O(()=>{var l=t();if(N(e,l,n),n&&l===void 0){var r=e.querySelector(":checked");r!==null&&(l=x(r),a(l))}e.__value=l,n=!1}),ne(e)}function re(e,t){for(var a of e.options)a.selected=~t.indexOf(x(a))}function x(e){return"__value"in e?e.__value:e.value}function De(e,t){let a=m(t,"value",12,"");q(e,{label:"Canopy diameter, m",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-tree-crown",get value(){return a()},set value(n){a(n)},$$legacy:!0})}function He(e,t){let a=m(t,"value",12,"");q(e,{label:"Trunk circumference, cm",type:"number",hint:"Measure at chest level, aka 120 cm from the ground.",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-trunk-circumference",get value(){return a()},set value(n){a(n)},$$legacy:!0})}function Ke(e,t){let a=m(t,"value",12,"");q(e,{label:"Height, m",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-tree-height",get value(){return a()},set value(n){a(n)},$$legacy:!0})}var oe=w('<div class="mapContainer svelte-x8ryfb"><!></div>');function ie(e,t){T(t,!0);const a=r=>{t.onMove([r.lat,r.lng])};var n=oe(),l=i(n);W(l,{get center(){return t.center},zoom:19,crosshair:!0,onMove:a}),o(n),k(e,n),F()}const se=(e,t)=>{S(t,!b(t))};var ue=w('<div class="hint"> </div>'),ve=w('<div class="input"><label><span> </span> <div class="group svelte-pe0fn"><input type="text"> <button type="button" class="svelte-pe0fn"><!></button></div> <!></label> <!></div>');function Oe(e,t){let a=m(t,"value",31,()=>K([])),n=m(t,"hint",3,void 0),l=m(t,"label",3,"Location"),r=D(!1);const s=p=>`${p[0]}, ${p[1]}`,c=p=>{a(p)};var v=ve(),_=i(v),h=i(_),d=i(h,!0);o(h);var f=u(h,2),g=i(f);A(g),M(()=>J(g,s(a())));var y=u(g,2);y.__click=[se,r];var I=i(y);V(I),o(y),o(f);var Y=u(f,2);{var j=p=>{ie(p,{get center(){return a()},onMove:c})};H(Y,p=>{b(r)&&p(j)})}o(_);var L=u(_,2);{var P=p=>{var $=ue(),z=i($,!0);o($),M(()=>C(z,n())),k(p,$)};H(L,p=>{n()&&p(P)})}o(v),M(()=>C(d,l())),k(e,v)}E(["click"]);function Te(e,t){let a=m(t,"value",12,"");q(e,{label:"Description",multiline:!0,hint:"Add some notable details that could help visitors understand the importance of this tree.",get value(){return a()},set value(n){a(n)},$$legacy:!0})}const ce=(e,t,a)=>{const n=e.target;ae.searchSpecies(n.value).then(l=>{l.status===200&&(S(t,K(l.data)),S(a,b(t).length>0))})},pe=(e,t)=>{setTimeout(()=>{S(t,!1)},200)};var de=(e,t,a)=>t(b(a).name),fe=w('<li class="svelte-1j0o0wm"> <small class="svelte-1j0o0wm"> </small></li>'),me=w('<ul class="options svelte-1j0o0wm"></ul>'),_e=w('<div class="input"><label class="svelte-1j0o0wm"><span class="svelte-1j0o0wm">Species</span> <input type="text" autocomplete="off" placeholder="Type a latin or local name" class="svelte-1j0o0wm"> <!></label> <div class="hint svelte-1j0o0wm">Enter the latin genus of the tree.</div></div>');function Fe(e,t){T(t,!0);let a=m(t,"value",15),n=D(K([])),l=D(!1);const r=d=>{S(l,!1),a(d)};var s=_e(),c=i(s),v=u(i(c),2);A(v),v.__input=[ce,n,l],v.__focusout=[pe,l];var _=u(v,2);{var h=d=>{var f=me();X(f,21,()=>b(n),Z,(g,y)=>{var I=fe();I.__click=[de,r,y];var Y=i(I),j=u(Y),L=i(j);o(j),o(I),M(()=>{C(Y,`${b(y).name??""} `),C(L,`~ ${b(y).local??""}`)}),k(g,I)}),o(f),k(d,f)};H(_,d=>{b(l)>0&&d(h)})}o(c),U(2),o(s),M(()=>ee(c,"drop",b(l))),te(v,a),k(e,s),F()}E(["input","focusout","click"]);var he=w('<div class="input"><label class="svelte-1ogmqdw"><span class="svelte-1ogmqdw">State</span> <div class="group svelte-1ogmqdw"><select class="svelte-1ogmqdw"><option>(unknown)</option><option>healthy</option><option>sick</option><option>deformed</option><option>gone</option><option>stomp</option></select> <!></div></label></div>');function Ae(e,t){let a=m(t,"value",12,"");var n=he(),l=i(n),r=u(i(l),2),s=i(r);M(()=>{a(),G(()=>{})});var c=i(s);c.value=((c.__value="")==null,"");var v=u(c);v.value=(v.__value="healthy")==null?"":"healthy";var _=u(v);_.value=(_.__value="sick")==null?"":"sick";var h=u(_);h.value=(h.__value="deformed")==null?"":"deformed";var d=u(h);d.value=(d.__value="gone")==null?"":"gone";var f=u(d);f.value=(f.__value="stomp")==null?"":"stomp",o(s);var g=u(s,2);Q(g,{help:"https://github.com/KanachYerevan/kb/wiki/Understanding-tree-state"}),o(r),o(l),o(n),le(s,a),k(e,n)}function Ee(e,t){let a=m(t,"value",15,"");q(e,{label:"Year planted",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Year-Planted",get value(){return a()},set value(n){a(n)}})}export{De as C,Ke as H,Oe as L,Te as N,Fe as S,Ee as Y,He as a,Ae as b};