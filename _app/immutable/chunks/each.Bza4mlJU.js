import{e as ee,b as ae,f as P,h as m,s as R,a as re,i as ne,g as Q,H as fe,r as G,j as S,d as x,I as C,k as W,c as Z,p as ie,q as le,l as U,m as L,n as X,o as O,u as te,v as se,w as ue,x as ve,y as de,z as ce,A as oe,B as _e,C as he,D as J,F as pe,G as Ee}from"./utils.D86ytmYn.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new i.Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="4f414874-3ee0-414c-a29a-ebe784fc2f5a",i._sentryDebugIdIdentifier="sentry-dbid-4f414874-3ee0-414c-a29a-ebe784fc2f5a")}catch{}})();let M=null;function ge(i,e){return e}function Ie(i,e,r,s){for(var u=[],d=e.length,t=0;t<d;t++)te(e[t].e,u,!0);var o=d>0&&u.length===0&&r!==null;if(o){var I=r.parentNode;se(I),I.append(r),s.clear(),g(i,e[0].prev,e[d-1].next)}ue(u,()=>{for(var h=0;h<d;h++){var v=e[h];o||(s.delete(v.k),g(i,v.prev,v.next)),ve(v.e,!o)}})}function me(i,e,r,s,u,d=null){var t=i,o={flags:e,items:new Map,first:null},I=(e&P)!==0;if(I){var h=i;t=m?R(de(h)):h.appendChild(ee())}m&&re();var v=null,y=!1;ae(()=>{var n=r(),c=ne(n)?n:n==null?[]:Q(n),a=c.length;if(y&&a===0)return;y=a===0;let w=!1;if(m){var p=t.data===fe;p!==(a===0)&&(t=G(),R(t),S(!1),w=!0)}if(m){for(var E=null,b,_=0;_<a;_++){if(x.nodeType===8&&x.data===ce){t=x,w=!0,S(!1);break}var f=c[_],l=s(f,_);b=$(x,o,E,null,f,l,_,u,e),o.items.set(l,b),E=b}a>0&&R(G())}if(!m){var H=oe;be(c,o,t,u,e,(H.f&C)!==0,s)}d!==null&&(a===0?v?W(v):v=Z(()=>d(t)):v!==null&&ie(v,()=>{v=null})),w&&S(!0),r()}),m&&(t=x)}function be(i,e,r,s,u,d,t){var B,V,Y,z;var o=(u&_e)!==0,I=(u&(L|O))!==0,h=i.length,v=e.items,y=e.first,n=y,c,a=null,w,p=[],E=[],b,_,f,l;if(o)for(l=0;l<h;l+=1)b=i[l],_=t(b,l),f=v.get(_),f!==void 0&&((B=f.a)==null||B.measure(),(w??(w=new Set)).add(f));for(l=0;l<h;l+=1){if(b=i[l],_=t(b,l),f=v.get(_),f===void 0){var H=n?n.e.nodes_start:r;a=$(H,e,a,a===null?e.first:a.next,b,_,l,s,u),v.set(_,a),p=[],E=[],n=a.next;continue}if(I&&we(f,b,l,u),f.e.f&C&&(W(f.e),o&&((V=f.a)==null||V.unfix(),(w??(w=new Set)).delete(f))),f!==n){if(c!==void 0&&c.has(f)){if(p.length<E.length){var D=E[0],A;a=D.prev;var q=p[0],N=p[p.length-1];for(A=0;A<p.length;A+=1)K(p[A],D,r);for(A=0;A<E.length;A+=1)c.delete(E[A]);g(e,q.prev,N.next),g(e,a,q),g(e,N,D),n=D,a=N,l-=1,p=[],E=[]}else c.delete(f),K(f,n,r),g(e,f.prev,f.next),g(e,f,a===null?e.first:a.next),g(e,a,f),a=f;continue}for(p=[],E=[];n!==null&&n.k!==_;)(d||!(n.e.f&C))&&(c??(c=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;f=n}p.push(f),a=f,n=f.next}if(n!==null||c!==void 0){for(var T=c===void 0?[]:Q(c);n!==null;)(d||!(n.e.f&C))&&T.push(n),n=n.next;var k=T.length;if(k>0){var j=u&P&&h===0?r:null;if(o){for(l=0;l<k;l+=1)(Y=T[l].a)==null||Y.measure();for(l=0;l<k;l+=1)(z=T[l].a)==null||z.fix()}Ie(e,T,j,v)}}o&&le(()=>{var F;if(w!==void 0)for(f of w)(F=f.a)==null||F.apply()}),U.first=e.first&&e.first.e,U.last=a&&a.e}function we(i,e,r,s){s&L&&X(i.v,e),s&O?X(i.i,r):i.i=r}function $(i,e,r,s,u,d,t,o,I){var h=M,v=(I&L)!==0,y=(I&pe)===0,n=v?y?he(u):J(u):u,c=I&O?J(t):t,a={i:c,v:n,k:d,a:null,e:null,prev:r,next:s};M=a;try{return a.e=Z(()=>o(i,n,c),m),a.e.prev=r&&r.e,a.e.next=s&&s.e,r===null?e.first=a:(r.next=a,r.e.next=a.e),s!==null&&(s.prev=a,s.e.prev=a.e),a}finally{M=h}}function K(i,e,r){for(var s=i.next?i.next.e.nodes_start:r,u=e?e.e.nodes_start:r,d=i.e.nodes_start;d!==s;){var t=Ee(d);u.before(d),d=t}}function g(i,e,r){e===null?i.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{M as c,me as e,ge as i};
//# sourceMappingURL=each.Bza4mlJU.js.map