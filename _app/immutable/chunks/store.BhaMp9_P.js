import{aG as T,C,_ as V,M as Y,aH as E,m as b,s as I,a as O,d as h,D as M,aI as z,aJ as F,z as J,k as P,aK as U,f as $,c as w,R as j,h as v,o as q,T as G,a0 as K,b as W,E as Z,H as B,l as Q,n as N,p as A,aa as X,az as x,J as ee,U as S,aL as se,a8 as te,ab as ae}from"./index.BzXfXzR0.js";import{a as re,r as L,h as p}from"./events.C98iwaOo.js";import{r as ne}from"./svelte-head.Axeo-4SS.js";import{e as ie}from"./template.CwzYuxmV.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d26dc93e-6557-4388-be9b-d0b5ca7975aa",e._sentryDebugIdIdentifier="sentry-dbid-d26dc93e-6557-4388-be9b-d0b5ca7975aa")}catch{}})();const oe=["touchstart","touchmove"];function fe(e){return oe.includes(e)}let H=!0;function be(e,s){var r=s==null?"":typeof s=="object"?s+"":s;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ue(e,s){return k(e,s)}function he(e,s){T(),s.intro=s.intro??!1;const r=s.target,a=v,i=h;try{for(var t=C(r);t&&(t.nodeType!==8||t.data!==V);)t=Y(t);if(!t)throw E;b(!0),I(t),O();const u=k(e,{...s,anchor:t});if(h===null||h.nodeType!==8||h.data!==M)throw z(),E;return b(!1),u}catch(u){if(u===E)return s.recover===!1&&F(),T(),J(r),b(!1),ue(e,s);throw u}finally{b(a),I(i),ne()}}const _=new Map;function k(e,{target:s,anchor:r,props:a={},events:i,context:t,intro:u=!0}){T();var y=new Set,d=f=>{for(var n=0;n<f.length;n++){var o=f[n];if(!y.has(o)){y.add(o);var l=fe(o);s.addEventListener(o,p,{passive:l});var D=_.get(o);D===void 0?(document.addEventListener(o,p,{passive:l}),_.set(o,1)):_.set(o,D+1)}}};d(P(re)),L.add(d);var c=void 0,g=U(()=>{var f=r??s.appendChild($());return w(()=>{if(t){j({});var n=K;n.c=t}i&&(a.$$events=i),v&&ie(f,null),H=u,c=e(f,a)||{},H=!0,v&&(q.nodes_end=h),t&&G()}),()=>{var l;for(var n of y){s.removeEventListener(n,p);var o=_.get(n);--o===0?(document.removeEventListener(n,p),_.delete(n)):_.set(n,o)}L.delete(d),R.delete(c),f!==r&&((l=f.parentNode)==null||l.removeChild(f))}});return R.set(c,g),c}let R=new WeakMap;function ve(e){const s=R.get(e);s&&s()}function ye(e,s,r=!1){v&&O();var a=e,i=null,t=null,u=X,y=r?Z:0,d=!1;const c=(f,n=!0)=>{d=!0,g(n,f)},g=(f,n)=>{if(u===(u=f))return;let o=!1;if(v){const l=a.data===B;!!u===l&&(a=Q(),I(a),b(!1),o=!0)}u?(i?N(i):n&&(i=w(()=>n(a))),t&&A(t,()=>{t=null})):(t?N(t):n&&(t=w(()=>n(a))),i&&A(i,()=>{i=null})),o&&b(!0)};W(()=>{d=!1,s(c),d||g(null,null)},y),v&&(a=h)}let m=!1;function ge(e,s,r){const a=r[s]??(r[s]={store:null,source:ee(void 0),unsubscribe:S});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=S;else{var i=!0;a.unsubscribe=se(e,t=>{i?a.source.v=t:te(a.source,t)}),i=!1}return ae(a.source)}function pe(){const e={};return x(()=>{for(var s in e)e[s].unsubscribe()}),e}function me(e){var s=m;try{return m=!1,[e(),m]}finally{m=s}}export{ge as a,be as b,me as c,H as d,he as h,ye as i,ue as m,pe as s,ve as u};