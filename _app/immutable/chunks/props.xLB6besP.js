import{a8 as R,a9 as Z,aa as G,D as h,ab as $,ac as y,ad as S,Z as o,P as b,l as j,ae as z,a3 as H,i as V,af as J,ag as Q,ah as W,ai as X,M as q,aj as k,ak as ee,al as B,am as re,a6 as ne,an as te,ao as ae,ap as K,R as M,aq as ie,ar as fe,C as se,as as ue,at as N}from"./utils.BFcvIjER.js";import{c as le}from"./store.MZmcVWKZ.js";function E(e,t=null,u){if(typeof e!="object"||e===null||R in e)return e;const s=H(e);if(s!==Z&&s!==G)return e;var a=new Map,v=V(e),P=h(0);v&&a.set("length",h(e.length));var w;return new Proxy(e,{defineProperty(l,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&$();var f=a.get(r);return f===void 0?(f=h(n.value),a.set(r,f)):y(f,E(n.value,w)),!0},deleteProperty(l,r){var n=a.get(r);if(n===void 0)r in l&&a.set(r,h(o));else{if(v&&typeof r=="string"){var f=a.get("length"),i=Number(r);Number.isInteger(i)&&i<f.v&&y(f,i)}y(n,o),F(P)}return!0},get(l,r,n){var c;if(r===R)return e;var f=a.get(r),i=r in l;if(f===void 0&&(!i||(c=S(l,r))!=null&&c.writable)&&(f=h(E(i?l[r]:o,w)),a.set(r,f)),f!==void 0){var _=b(f);return _===o?void 0:_}return Reflect.get(l,r,n)},getOwnPropertyDescriptor(l,r){var n=Reflect.getOwnPropertyDescriptor(l,r);if(n&&"value"in n){var f=a.get(r);f&&(n.value=b(f))}else if(n===void 0){var i=a.get(r),_=i==null?void 0:i.v;if(i!==void 0&&_!==o)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return n},has(l,r){var _;if(r===R)return!0;var n=a.get(r),f=n!==void 0&&n.v!==o||Reflect.has(l,r);if(n!==void 0||j!==null&&(!f||(_=S(l,r))!=null&&_.writable)){n===void 0&&(n=h(f?E(l[r],w):o),a.set(r,n));var i=b(n);if(i===o)return!1}return f},set(l,r,n,f){var I;var i=a.get(r),_=r in l;if(v&&r==="length")for(var c=n;c<i.v;c+=1){var m=a.get(c+"");m!==void 0?y(m,o):c in l&&(m=h(o),a.set(c+"",m))}i===void 0?(!_||(I=S(l,r))!=null&&I.writable)&&(i=h(void 0),y(i,E(n,w)),a.set(r,i)):(_=i.v!==o,y(i,E(n,w)));var g=Reflect.getOwnPropertyDescriptor(l,r);if(g!=null&&g.set&&g.set.call(f,n),!_){if(v&&typeof r=="string"){var p=a.get("length"),D=Number(r);Number.isInteger(D)&&D>=p.v&&y(p,D+1)}F(P)}return!0},ownKeys(l){b(P);var r=Reflect.ownKeys(l).filter(i=>{var _=a.get(i);return _===void 0||_.v!==o});for(var[n,f]of a)f.v!==o&&!(n in l)&&r.push(n);return r},setPrototypeOf(){z()}})}function F(e,t=1){y(e,e.v+t)}function U(e){return e!==null&&typeof e=="object"&&R in e?e[R]:e}function oe(e,t){return Object.is(U(e),U(t))}const _e={get(e,t){let u=e.props.length;for(;u--;){let s=e.props[u];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&t in s)return s[t]}},set(e,t,u){let s=e.props.length;for(;s--;){let a=e.props[s];N(a)&&(a=a());const v=S(a,t);if(v&&v.set)return v.set(u),!0}return!1},getOwnPropertyDescriptor(e,t){let u=e.props.length;for(;u--;){let s=e.props[u];if(N(s)&&(s=s()),typeof s=="object"&&s!==null&&t in s){const a=S(s,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===R||t===K)return!1;for(let u of e.props)if(N(u)&&(u=u()),u!=null&&t in u)return!0;return!1},ownKeys(e){const t=[];for(let u of e.props){N(u)&&(u=u());for(const s in u)t.includes(s)||t.push(s)}return t}};function ce(...e){return new Proxy({props:e},_e)}function Y(e){for(var t=j,u=j;t!==null&&!(t.f&(k|ee));)t=t.parent;try{return B(t),e()}finally{B(u)}}function ge(e,t,u,s){var C;var a=(u&re)!==0,v=!ne||(u&te)!==0,P=(u&ae)!==0,w=(u&fe)!==0,l=!1,r;P?[r,l]=le(()=>e[t]):r=e[t];var n=R in e||K in e,f=((C=S(e,t))==null?void 0:C.set)??(n&&P&&t in e?d=>e[t]=d:void 0),i=s,_=!0,c=!1,m=()=>(c=!0,_&&(_=!1,w?i=q(s):i=s),i);r===void 0&&s!==void 0&&(f&&v&&J(),r=m(),f&&f(r));var g;if(v)g=()=>{var d=e[t];return d===void 0?m():(_=!0,c=!1,d)};else{var p=Y(()=>(a?M:ie)(()=>e[t]));p.f|=Q,g=()=>{var d=b(p);return d!==void 0&&(i=void 0),d===void 0?i:d}}if(!(u&W))return g;if(f){var D=e.$$legacy;return function(d,O){return arguments.length>0?((!v||!O||D||l)&&f(O?g():d),d):g()}}var I=!1,T=!1,x=se(r),A=Y(()=>M(()=>{var d=g(),O=b(x);return I?(I=!1,T=!0,O):(T=!1,x.v=d)}));return a||(A.equals=X),function(d,O){if(ue!==null&&(I=T,g(),b(x)),arguments.length>0){const L=O?b(A):v&&P?E(d):d;return A.equals(L)||(I=!0,y(x,L),c&&i!==void 0&&(i=L),q(()=>b(A))),d}return b(A)}}export{E as a,oe as i,ge as p,ce as s};