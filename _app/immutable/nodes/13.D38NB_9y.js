import"../chunks/entry.Co_yX68F.js";import{w as Y,a as q}from"../chunks/api.DDDsSy4Q.js";import"../chunks/disclose-version.CVLrmm-c.js";import{a4 as _,a3 as J,aF as M,R as L,t as b,T as P,ab as k,aE as K,P as g,O as d,a8 as V,Q as c,N as O,aB as X}from"../chunks/index.CbWQdyPD.js";import{s as Z,i as R,a as F,b as ee}from"../chunks/store.zYOmaikO.js";import{e as te,i as ae}from"../chunks/each.8C-LENRi.js";import{a as v,t as m}from"../chunks/template.FARQGre2.js";import{h as oe}from"../chunks/svelte-head.DlRxUE2U.js";import{s as se}from"../chunks/attributes.Bszi7fWb.js";import{d as T}from"../chunks/events.Dh_5afs_.js";import{H as le}from"../chunks/Header.q0CrcpGa.js";import{i as ie}from"../chunks/legacy.Cuu4uX5Q.js";import{b as ne}from"../chunks/this.bmdKXerE.js";import{p as z}from"../chunks/props.BwWGETsP.js";import{C as re}from"../chunks/CloseIcon.DueydSM3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="38d0e768-db53-4624-972b-73db0a0b91ef",e._sentryDebugIdIdentifier="sentry-dbid-38d0e768-db53-4624-972b-73db0a0b91ef")}catch{}})();const H=({params:e})=>({id:e.id}),de=H?Y(H):void 0,Te=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"})),l=J({files:[],uploading:!1,progress:0,message:null}),pe=_(l,e=>e.files),ue=_(l,e=>e.uploading);_(l,e=>e.progress);const ce=_(l,e=>e.message),fe=async(e,a)=>{await q.uploadFile(a,e),console.info(`[upload] Uploaded ${e.name}.`)},ge=async e=>{const a=M(l).files.length,i=M(l).files,p=[],f=i.length;let n=0;console.debug(`[upload] Going to upload ${a} files for tree ${e}.`),l.update(t=>(t.message=null,t));try{l.update(t=>(t.uploading=!0,t));for(const t of i){console.debug(`[upload] Uploading ${t.name}...`);try{await fe(t,e)}catch(r){console.error(`[upload] Failed to upload ${t.name}: ${r}`),p.push(t)}finally{n++,l.update(r=>(r.progress=n/f*100,r))}}}finally{console.debug("[upload] Finished."),l.update(t=>(t.files=p,t.uploading=!1,t))}l.update(t=>(t.message="Finished uploading all photos. They will show up on the tree page shortly. You can upload more files if needed.",t))},ve=(e,a)=>{k(a).click()},me=(e,a)=>{e.target.files.length>0&&a()(e.target.files)};var be=m('<div><button type="button" class="button">Add photos</button> <input type="file" accept="image/jpeg" multiple class="svelte-jeejfu"></div>');function _e(e,a){L(a,!1);let i=K(),p=z(a,"disabled",8,!1),f=z(a,"onFileSelected",8);ie();var n=be(),t=g(n);t.__click=[ve,i];var r=d(t,2);r.__change=[me,f],ne(r,h=>V(i,h),()=>k(i)),c(n),b(()=>t.disabled=p()),v(e,n),P()}T(["click","change"]);var he=m("<p> </p>"),ye=(e,a)=>ge(a),we=m('<div class="preview svelte-auwpl1"><img alt="preview" class="svelte-auwpl1"> <button class="close svelte-auwpl1"><!></button></div>'),$e=m('<h2>Selected photos:</h2> <div class="grid svelte-auwpl1"></div>',1),Fe=m('<!> <div class="form svelte-auwpl1"><p>Here you can upload multiple photos of this tree.</p> <!> <div class="buttons"><!> <button class="button" type="button">Upload</button></div> <!></div>',1);function Ee(e,a){L(a,!0);const i=Z(),p=()=>F(ce,"$uploadMessage",i),f=()=>F(ue,"$isUploading",i),n=()=>F(pe,"$storedFiles",i),t=a.data.id,r=s=>{l.update(o=>(o.files=[...o.files,...s],o))},h=s=>{console.debug(`Removing file at index ${s}.`),l.update(o=>{const u=[...o.files];return u.splice(s,1),o.files=u,o})};var S=Fe();oe(s=>{X.title="Upload tree photos"});var U=O(S);le(U,{title:"Upload photos"});var I=d(U,2),j=d(g(I),2);{var E=s=>{var o=he(),u=g(o,!0);c(o),b(()=>ee(u,p())),v(s,o)};R(j,s=>{p()&&s(E)})}var y=d(j,2),C=g(y);_e(C,{onFileSelected:r,get disabled(){return f()}});var x=d(C,2);x.__click=[ye,t],c(y);var A=d(y,2);{var B=s=>{var o=$e(),u=d(O(o),2);te(u,5,n,ae,(G,N,Q)=>{var w=we(),D=g(w);b(()=>se(D,"src",URL.createObjectURL(k(N))));var $=d(D,2);$.__click=()=>h(Q);var W=g($);re(W,{width:24,height:24}),c($),c(w),v(G,w)}),c(u),v(s,o)};R(A,s=>{n().length>0&&s(B)})}c(I),b(()=>x.disabled=!(n().length>0&&!f())),v(e,S),P()}T(["click"]);export{Ee as component,Te as universal};
//# sourceMappingURL=13.D38NB_9y.js.map