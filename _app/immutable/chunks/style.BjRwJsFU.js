import{$ as fa,A as j,a0 as m,B as T,E as D,C as ta,a1 as ua,z as la,a2 as aa,H as ca,D as K,F as H,K as C,a3 as oa,G as sa,I as P,J as _a,a4 as va,q as $,w as U,a5 as B,n as X,a6 as V,a7 as da,X as pa,k as J,a8 as ha,a9 as Ea,aa as ga,ab as ra,ac as Aa,ad as Na,L as Ta,Z as ya,ae as Ia,af as ba,y as Z,ag as Ca}from"./runtime.CirxRmYf.js";import{i as La,c as Q,d as wa,b as Ra,e as Sa}from"./disclose-version.HfZ4NBjI.js";let R=null;function Fa(a){R=a}function Ga(a,s){return s}function Ma(a,s,r,e){for(var i=[],_=s.length,n=0;n<_;n++)ha(s[n].e,i,!0);var A=_>0&&i.length===0&&r!==null;if(A){var N=r.parentNode;Ea(N),N.append(r),e.clear(),I(a,s[0].prev,s[_-1].next)}ga(i,()=>{for(var E=0;E<_;E++){var g=s[E];A||(e.delete(g.k),I(a,g.prev,g.next)),ra(g.e,!A)}})}function Ya(a,s,r,e,i,_=null){var n=a,A={flags:s,items:new Map,first:null},N=(s&m)!==0;if(N){var E=a;n=T?D(ua(E)):E.appendChild(fa())}T&&ta();var g=null;j(()=>{var l=r(),h=la(l)?l:l==null?[]:aa(l),o=h.length;let v=!1;if(T){var d=n.data===ca;d!==(o===0)&&(n=K(),D(n),H(!1),v=!0)}if(T){for(var u=null,c,p=0;p<o;p++){if(C.nodeType===8&&C.data===oa){n=C,v=!0,H(!1);break}var f=h[p],t=e(f,p);c=ea(C,A,u,null,f,t,p,i,s),A.items.set(t,c),u=c}o>0&&D(K())}T||Da(h,A,n,i,s,e),_!==null&&(o===0?g?sa(g):g=P(()=>_(n)):g!==null&&_a(g,()=>{g=null})),v&&H(!0)}),T&&(n=C)}function Da(a,s,r,e,i,_){var F,G,Y,q;var n=(i&Aa)!==0,A=(i&(B|V))!==0,N=a.length,E=s.items,g=s.first,l=g,h,o=null,v,d=[],u=[],c,p,f,t;if(n)for(t=0;t<N;t+=1)c=a[t],p=_(c,t),f=E.get(p),f!==void 0&&((F=f.a)==null||F.measure(),(v??(v=new Set)).add(f));for(t=0;t<N;t+=1){if(c=a[t],p=_(c,t),f=E.get(p),f===void 0){var w=l?l.e.nodes_start:r;o=ea(w,s,o,o===null?s.first:o.next,c,p,t,e,i),E.set(p,o),d=[],u=[],l=o.next;continue}if(A&&Ha(f,c,t,i),f.e.f&va&&(sa(f.e),n&&((G=f.a)==null||G.unfix(),(v??(v=new Set)).delete(f))),f!==l){if(h!==void 0&&h.has(f)){if(d.length<u.length){var b=u[0],y;o=b.prev;var k=d[0],S=d[d.length-1];for(y=0;y<d.length;y+=1)W(d[y],b,r);for(y=0;y<u.length;y+=1)h.delete(u[y]);I(s,k.prev,S.next),I(s,o,k),I(s,S,b),l=b,o=S,t-=1,d=[],u=[]}else h.delete(f),W(f,l,r),I(s,f.prev,f.next),I(s,f,o===null?s.first:o.next),I(s,o,f),o=f;continue}for(d=[],u=[];l!==null&&l.k!==p;)(h??(h=new Set)).add(l),u.push(l),l=l.next;if(l===null)continue;f=l}d.push(f),o=f,l=f.next}if(l!==null||h!==void 0){for(var L=h===void 0?[]:aa(h);l!==null;)L.push(l),l=l.next;var M=L.length;if(M>0){var na=i&m&&N===0?r:null;if(n){for(t=0;t<M;t+=1)(Y=L[t].a)==null||Y.measure();for(t=0;t<M;t+=1)(q=L[t].a)==null||q.fix()}Ma(s,L,na,E)}}n&&$(()=>{var z;if(v!==void 0)for(f of v)(z=f.a)==null||z.apply()}),U.first=s.first&&s.first.e,U.last=o&&o.e}function Ha(a,s,r,e){e&B&&X(a.v,s),e&V?X(a.i,r):a.i=r}function ea(a,s,r,e,i,_,n,A,N){var E=R;try{var g=(N&B)!==0,l=(N&da)===0,h=g?l?pa(i):J(i):i,o=N&V?J(n):n,v={i:o,v:h,k:_,a:null,e:null,prev:r,next:e};return R=v,v.e=P(()=>A(a,h,o),T),v.e.prev=r&&r.e,v.e.next=e&&e.e,r===null?s.first=v:(r.next=v,r.e.next=v.e),e!==null&&(e.prev=v,e.e.prev=v.e),v}finally{R=E}}function W(a,s,r){for(var e=a.next?a.next.e.nodes_start:r,i=s?s.e.nodes_start:r,_=a.e.nodes_start;_!==e;){var n=Na(_);i.before(_),_=n}}function I(a,s,r){s===null?a.first=r:(s.next=r,s.e.next=r&&r.e),r!==null&&(r.prev=s,r.e.prev=s&&s.e)}function qa(a,s,...r){var e=a,i=ya,_;j(()=>{i!==(i=s())&&(_&&(ra(_),_=null),_=P(()=>i(e,...r)))},Ta),T&&(e=C)}function Oa(a,s){if(s){const r=document.body;a.autofocus=!0,$(()=>{document.activeElement===r&&a.focus()})}}function O(a,s,r,e){var i=a.__attributes??(a.__attributes={});T&&(i[s]=a.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&a.nodeName==="LINK")||i[s]!==(i[s]=r)&&(s==="loading"&&(a[Ia]=r),r==null?a.removeAttribute(s):typeof r!="string"&&ia(a).includes(s)?a[s]=r:a.setAttribute(s,r))}function Pa(a,s,r){if(s in a){try{var e=a[s]}catch{O(a,s,r);return}var i=typeof e=="boolean"&&r===""?!0:r;(typeof e!="object"||e!==i)&&(a[s]=i)}else O(a,s,r)}function $a(a,s,r,e,i=!1,_){var n=s||{},A=a.tagName==="OPTION";for(var N in s)N in r||(r[N]=null);e!==void 0&&(r.class=r.class?r.class+" "+e:e);var E=x.get(a.nodeName);E||x.set(a.nodeName,E=ia(a));var g=a.__attributes??(a.__attributes={}),l=[];for(const u in r){let c=r[u];if(A&&u==="value"&&c==null){a.value=a.__value="",n[u]=c;continue}var h=n[u];if(c!==h){n[u]=c;var o=u[0]+u[1];if(o!=="$$")if(o==="on"){const p={},f="$$"+u;let t=u.slice(2);var v=Sa(t);if(La(t)&&(t=t.slice(0,-7),p.capture=!0),!v&&h){if(c!=null)continue;a.removeEventListener(t,n[f],p),n[f]=null}if(c!=null)if(v)a[`__${t}`]=c,wa([t]);else{let w=function(b){n[u].call(this,b)};s?n[f]=Q(t,a,w,p):l.push([u,c,()=>n[f]=Q(t,a,w,p)])}}else if(c==null)g[u]=null,a.removeAttribute(u);else if(u==="style")a.style.cssText=c+"";else if(u==="autofocus")Oa(a,!!c);else if(u==="__value"||u==="value")a.value=a[u]=a.__value=c;else{var d=u;i||(d=Ra(d)),E.includes(d)&&typeof c!="string"?a[d]=c:typeof c!="function"&&(T&&(d==="src"||d==="href"||d==="srcset")||O(a,d,c))}}}return s||$(()=>{if(a.isConnected)for(const[u,c,p]of l)n[u]===c&&p()}),n}function za(a,s,r,e){if(a.tagName.includes("-")){for(var i in s)i in r||(r[i]=null);e!==void 0&&(r.class=r.class?r.class+" "+e:e);for(i in r)Pa(a,i,r[i]);return r}return $a(a,s,r,e,a.namespaceURI!==ba)}var x=new Map;function ia(a){for(var s=[],r,e=Z(a);e.constructor.name!=="Element";){r=Ca(e);for(var i in r)r[i].set&&s.push(i);e=Z(e)}return s}function Ka(a,s){var r=a.__className,e=Ba(s);T&&a.className===e?a.__className=e:(r!==e||T&&a.className!==e)&&(s==null?a.removeAttribute("class"):a.className=e,a.__className=e)}function Ba(a){return a??""}function Ua(a,s,r){if(r){if(a.classList.contains(s))return;a.classList.add(s)}else{if(!a.classList.contains(s))return;a.classList.remove(s)}}function Xa(a,s,r,e,i){var _=a.__attributes??(a.__attributes={}),n=a.style,A="style-"+s;_[A]===r&&(!i||n.getPropertyValue(s)===r)||(_[A]=r,r==null?n.removeProperty(s):n.setProperty(s,r,e?"important":""))}export{Xa as a,Fa as b,R as c,za as d,qa as e,Ya as f,O as g,Ka as h,Ga as i,$a as s,Ua as t};
