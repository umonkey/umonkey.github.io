import"./disclose-version.BlK1kMzR.js";import"./legacy.D4frCxXy.js";import{i as B,p as m,a as H}from"./props.DVQ-LOBM.js";import{T as q,H as U}from"./TextInput.CRWkjtA6.js";import{o as K,e as T,j as u,k as r,f as A,s as i,t as x,a5 as g,aa as S,ax as $,n as G,aO as J}from"./utils.CFhoaAiD.js";import{i as D,b as C}from"./store.D7wMafqz.js";import{l as Q,a as k,t as w,f as E}from"./template.BnrarM8h.js";import{r as F,a as R}from"./attributes.CRngR2u9.js";import{M as V}from"./MapIcon.ChVqiNwl.js";import{M as W}from"./Map.CoEAWePj.js";import{e as X,i as Z}from"./each.0a5KL-Ey.js";import{t as ee}from"./class.3SnqNEBn.js";import{b as te}from"./input.93-YlpIa.js";import{a as ae}from"./api.D2loYNr0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7407ddda-5b40-4db8-97b2-8a0ed9965c84",e._sentryDebugIdIdentifier="sentry-dbid-7407ddda-5b40-4db8-97b2-8a0ed9965c84")}catch{}})();function N(e,t,a){if(e.multiple)return oe(e,t);for(var n of e.options){var l=M(n);if(B(l,t)){n.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function ne(e,t){K(()=>{var a=new MutationObserver(()=>{var n=e.__value;N(e,n)});return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function le(e,t,a=t){var n=!0;Q(e,"change",l=>{var o=l?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(o),M);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");s=c&&M(c)}a(s)}),K(()=>{var l=t();if(N(e,l,n),n&&l===void 0){var o=e.querySelector(":checked");o!==null&&(l=M(o),a(l))}e.__value=l,n=!1}),ne(e)}function oe(e,t){for(var a of e.options)a.selected=~t.indexOf(M(a))}function M(e){return"__value"in e?e.__value:e.value}function Oe(e,t){let a=m(t,"value",12,"");q(e,{label:"Canopy diameter, m",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-tree-crown",get value(){return a()},set value(n){a(n)},$$legacy:!0})}function $e(e,t){let a=m(t,"value",12,"");q(e,{label:"Trunk circumference, cm",type:"number",hint:"Measure at chest level, aka 120 cm from the ground.",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-trunk-circumference",get value(){return a()},set value(n){a(n)},$$legacy:!0})}function De(e,t){let a=m(t,"value",12,"");q(e,{label:"Height, m",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Measuring-tree-height",get value(){return a()},set value(n){a(n)},$$legacy:!0})}var re=w('<div class="mapContainer svelte-x8ryfb"><!></div>');function ie(e,t){T(t,!0);const a=o=>{t.onMove([o.lat,o.lng])};var n=re(),l=u(n);W(l,{get center(){return t.center},zoom:19,crosshair:!0,onMove:a}),r(n),k(e,n),A()}const ue=(e,t)=>{S(t,!g(t))};var se=w('<div class="hint"> </div>'),ve=w('<div class="input"><label><span> </span> <div class="group svelte-pe0fn"><input type="text"> <button type="button" class="svelte-pe0fn"><!></button></div> <!></label> <!></div>');function He(e,t){let a=m(t,"value",31,()=>H([])),n=m(t,"hint",3,void 0),l=m(t,"label",3,"Location"),o=$(!1);const s=d=>`${d[0]}, ${d[1]}`,c=d=>{a(d)};var v=ve(),_=u(v),b=u(_),p=u(b,!0);r(b);var f=i(b,2),y=u(f);F(y),x(()=>R(y,s(a())));var h=i(y,2);h.__click=[ue,o];var I=u(h);V(I),r(h),r(f);var Y=i(f,2);{var j=d=>{ie(d,{get center(){return a()},onMove:c})};D(Y,d=>{g(o)&&d(j)})}r(_);var L=i(_,2);{var P=d=>{var O=se(),z=u(O,!0);r(O),x(()=>C(z,n())),k(d,O)};D(L,d=>{n()&&d(P)})}r(v),x(()=>C(p,l())),k(e,v)}E(["click"]);function Ke(e,t){let a=m(t,"value",12,"");q(e,{label:"Description",multiline:!0,hint:"Add some notable details that could help visitors understand the importance of this tree.",get value(){return a()},set value(n){a(n)},$$legacy:!0})}const ce=(e,t,a)=>{const n=e.target;ae.searchSpecies(n.value).then(l=>{l.status===200&&(S(t,H(l.data)),S(a,g(t).length>0))})},de=(e,t)=>{setTimeout(()=>{S(t,!1)},200)};var pe=(e,t,a)=>t(g(a).name),fe=w('<li class="svelte-1j0o0wm"> <small class="svelte-1j0o0wm"> </small></li>'),me=w('<ul class="options svelte-1j0o0wm"></ul>'),_e=w('<div class="input"><label class="svelte-1j0o0wm"><span class="svelte-1j0o0wm">Species</span> <input type="text" autocomplete="off" placeholder="Type a latin or local name" class="svelte-1j0o0wm"> <!></label> <div class="hint svelte-1j0o0wm">Enter the latin genus of the tree.</div></div>');function Te(e,t){T(t,!0);let a=m(t,"value",15),n=$(H([])),l=$(!1);const o=p=>{S(l,!1),a(p)};var s=_e(),c=u(s),v=i(u(c),2);F(v),v.__input=[ce,n,l],v.__focusout=[de,l];var _=i(v,2);{var b=p=>{var f=me();X(f,21,()=>g(n),Z,(y,h)=>{var I=fe();I.__click=[pe,o,h];var Y=u(I),j=i(Y),L=u(j);r(j),r(I),x(()=>{C(Y,`${g(h).name??""} `),C(L,`~ ${g(h).local??""}`)}),k(y,I)}),r(f),k(p,f)};D(_,p=>{g(l)>0&&p(b)})}r(c),G(2),r(s),x(()=>ee(c,"drop",g(l))),te(v,a),k(e,s),A()}E(["input","focusout","click"]);var be=w('<div class="input"><label class="svelte-1ogmqdw"><span class="svelte-1ogmqdw">State</span> <div class="group svelte-1ogmqdw"><select class="svelte-1ogmqdw"><option>(unknown)</option><option>healthy</option><option>sick</option><option>deformed</option><option>dead</option><option>gone</option><option>stomp</option></select> <!></div></label></div>');function Ae(e,t){let a=m(t,"value",12,"");var n=be(),l=u(n),o=i(u(l),2),s=u(o);x(()=>{a(),J(()=>{})});var c=u(s);c.value=((c.__value="")==null,"");var v=i(c);v.value=(v.__value="healthy")==null?"":"healthy";var _=i(v);_.value=(_.__value="sick")==null?"":"sick";var b=i(_);b.value=(b.__value="deformed")==null?"":"deformed";var p=i(b);p.value=(p.__value="dead")==null?"":"dead";var f=i(p);f.value=(f.__value="gone")==null?"":"gone";var y=i(f);y.value=(y.__value="stomp")==null?"":"stomp",r(s);var h=i(s,2);U(h,{help:"https://github.com/KanachYerevan/kb/wiki/Understanding-tree-state"}),r(o),r(l),r(n),le(s,a),k(e,n)}function Ee(e,t){let a=m(t,"value",15,"");q(e,{label:"Year planted",type:"number",help:"https://github.com/KanachYerevan/kb/wiki/Year-Planted",get value(){return a()},set value(n){a(n)}})}export{Oe as C,De as H,He as L,Ke as N,Te as S,Ee as Y,$e as a,Ae as b};