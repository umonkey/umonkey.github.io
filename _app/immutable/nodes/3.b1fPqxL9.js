import{g as G}from"../chunks/entry.DHwIHR-6.js";import{w as J,a as K}from"../chunks/api.D2loYNr0.js";import{D as x}from"../chunks/constants.C5QxALk6.js";import"../chunks/disclose-version.BlK1kMzR.js";import{e as Q,ax as n,g as F,f as V,a1 as X,s as o,a5 as e,aa as s,j as H,k as L}from"../chunks/utils.CFhoaAiD.js";import{h as Z}from"../chunks/store.D7wMafqz.js";import{a as z,t as W}from"../chunks/template.BnrarM8h.js";import{a as l}from"../chunks/props.DVQ-LOBM.js";import"../chunks/legacy.D4frCxXy.js";import{t as B}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.DHrdVjQy.js";import{r as ee}from"../chunks/routes.Coe4Xs8_.js";import{A as te}from"../chunks/AuthWrapper.sirbvZWd.js";import{B as M}from"../chunks/TextInput.CRWkjtA6.js";import{L as ae,S as re,H as oe,C as se,a as ne,b as le,Y as ie,N as de}from"../chunks/YearInput.DVccXEYf.js";import{H as ue}from"../chunks/Header.Dw6SMVSF.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new r.Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="1d883faf-f894-438f-98c7-406093b2a2a3",r._sentryDebugIdIdentifier="sentry-dbid-1d883faf-f894-438f-98c7-406093b2a2a3")}catch{}})();const O=({url:r})=>{const i=parseFloat(r.searchParams.get("lat")??x[0]),d=parseFloat(r.searchParams.get("lng")??x[1]);return{lat:i,lng:d}},ce=O?J(O):void 0,ke=Object.freeze(Object.defineProperty({__proto__:null,load:ce},Symbol.toStringTag,{value:"Module"}));var pe=W('<!> <!> <!> <!> <!> <!> <!> <!> <div class="buttons"><!> <!></div>',1),fe=W('<!> <div class="form svelte-1jizvdx"><!></div>',1);function Ne(r,i){Q(i,!0);let d=n(!1),p=n(""),f=n(""),m=n(""),v=n(""),g=n(""),_=n(""),u=n(l([i.data.lat,i.data.lng])),b=n("");const c=a=>{if(a===""||a==="0")return null;const h=parseFloat(a);return isNaN(h)?null:h},Y=()=>{s(d,!0),K.addTree({points:[{lat:e(u)[0],lon:e(u)[1]}],species:e(p),height:c(e(f)),diameter:c(e(m)),circumference:c(e(v)),state:e(g),notes:e(_),year:c(e(b))}).then(a=>{a.status>=200&&a.status<400?G(ee.treeDetails(a.data.trees[0].id)):(console.error(`Error ${a.status} adding tree.`),B.push("Error adding tree."))}).catch(a=>{console.error(`Error adding tree: ${a}.`),B.push("Error adding tree.")}).finally(()=>{s(d,!1)})},R=()=>{history.back()};var y=fe();Z(a=>{X.title="Add tree"});var I=F(y);ue(I,{title:"Add Tree"});var C=o(I,2),U=H(C);te(U,{children:(a,h)=>{var E=pe(),S=F(E);ae(S,{label:"Confirm location",get value(){return e(u)},set value(t){s(u,l(t))}});var w=o(S,2);re(w,{get value(){return e(p)},set value(t){s(p,l(t))}});var A=o(w,2);oe(A,{get value(){return e(f)},set value(t){s(f,l(t))}});var D=o(A,2);se(D,{get value(){return e(m)},set value(t){s(m,l(t))}});var $=o(D,2);ne($,{get value(){return e(v)},set value(t){s(v,l(t))}});var k=o($,2);le(k,{get value(){return e(g)},set value(t){s(g,l(t))}});var N=o(k,2);ie(N,{get value(){return e(b)},set value(t){s(b,l(t))}});var P=o(N,2);de(P,{get value(){return e(_)},set value(t){s(_,l(t))}});var T=o(P,2),j=H(T);M(j,{type:"submit",label:"Add tree",onClick:Y,get disabled(){return e(d)}});var q=o(j,2);M(q,{type:"cancel",label:"Cancel",onClick:R,get disabled(){return e(d)}}),L(T),z(a,E)},$$slots:{default:!0}}),L(C),z(r,y),V()}export{Ne as component,ke as universal};