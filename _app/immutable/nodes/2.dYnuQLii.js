import{j as K,k as ne,f as V,a as F,t as M,g as ee,s as R,d as le}from"../chunks/disclose-version.BTIBTwaW.js";import{A as ie,B as k,C as Q,K as W,L as ce,af as ve,I as de,F as X,E as Y,J as fe,G as ue,ab as _e,a1 as he,$ as ge,w as me,p as G,f as L,a as I,h as e,i as u,t as T,s as P,c as E,b as w,n as q,al as J,av as B}from"../chunks/runtime.MNSK3z1j.js";import{p as te,i as D,a as H}from"../chunks/props.C_cCTirz.js";import{F as pe}from"../chunks/Fuzling.DBFjSCgf.js";import{b as Z,c as $,d as ye,t as C,e as U,a as ae,f as be}from"../chunks/style.DMr-S-uD.js";import{s as xe,a as Fe,p as we}from"../chunks/stores.CXuqZByk.js";import{b as Ae}from"../chunks/entry.DPujAVoR.js";import{b as Ee}from"../chunks/size.BJGWoKDx.js";import{o as ke}from"../chunks/index-client.C_Ue8ehP.js";function Ce(l,t,s,o,r,n){let m=k;k&&Q();var _,b,a=null;k&&W.nodeType===1&&(a=W,Q());var x=k?W:l,c,z=$;ie(()=>{const i=t()||null;var h=r?r():s||i==="svg"?ve:null;if(i!==_){var v=$;Z(z),c&&(i===null?fe(c,()=>{c=null,b=null}):i===b?ue(c):(_e(c),K(!1))),i&&i!==b&&(c=de(()=>{if(a=k?a:h?document.createElementNS(h,i):document.createElement(i),ne(a,a),o){var g=k?he(a):a.appendChild(ge());k&&(g===null?X(!1):Y(g)),o(a,g)}me.nodes_end=a,x.before(a)})),_=i,_&&(b=_),K(!0),Z(v)}},ce),m&&(X(!0),Y(x))}var Me=M('<div class="icon svelte-1u0x3y1"><!></div>'),ze=M('<!> <div class="content svelte-1u0x3y1"><!></div> <!>',1);function Ne(l,t){G(t,!0);const s=xe(),o=()=>Fe(we,"$page",s),r=d=>{var p=Me(),f=E(p);D(f,()=>typeof e(v)=="string",A=>{var y=ee();T(()=>R(y,e(v))),F(A,y)},A=>{var y=V(),S=L(y);U(S,()=>e(v)),F(A,y)}),w(p),F(d,p)},n=te(t,"align",3,"left"),m=u(()=>!!t.href),_=u(()=>e(m)&&o().url.pathname===t.href),b=u(()=>t.tag??(e(m)?"a":"div")),a=u(()=>e(m)?{href:t.href}:void 0),x=u(()=>n()==="left"),c=u(()=>n()==="right"),z=u(()=>n()==="above"),i=u(()=>n()==="below"),h=u(()=>e(m)?"🔗":"🪧"),v=u(()=>t.icon??e(h));var g=V(),N=L(g);Ce(N,()=>e(b),!1,(d,p)=>{let f;T(()=>{f=ye(d,f,{class:"card",...t.attrs,...e(a)},"svelte-1u0x3y1"),C(d,"link",e(m)),C(d,"selected",e(_)),C(d,"left",e(x)),C(d,"right",e(c)),C(d,"above",e(z)),C(d,"below",e(i))});var A=ze(),y=L(A);D(y,()=>n()==="left"||n()==="above",O=>{r(O)});var S=P(y,2),oe=E(S);U(oe,()=>t.children),w(S);var re=P(S,2);D(re,()=>n()==="right"||n()==="below",O=>{r(O)}),F(p,A)}),F(l,g),I()}const Se=(l,t,s=Math.random)=>Math.floor(s()*(t-l+1))+l,se=(l,t=Math.random)=>l[Se(0,l.length-1,t)];var Te=M('<div class="item svelte-1qfnk72"><!></div>');function Pe(l,t){G(t,!0);let s=J(!1);const o=u(()=>e(s)?t.scale:0);ke(()=>{setTimeout(()=>q(s,!0),20)});var r=Te(),n=E(r);U(n,()=>t.children),w(r),T(()=>ae(r,"transform",`translate3d(${t.x??""}px, ${t.y??""}px, 0px) scale3d(${e(o)??""}, ${e(o)??""}, ${e(o)??""})`)),F(l,r),I()}const j=[{glyph:"🐵"},{glyph:"🐶"},{glyph:"🐺"},{glyph:"🦊"},{glyph:"🐱"},{glyph:"🦁"},{glyph:"🐯"},{glyph:"🐴"},{glyph:"🦄"},{glyph:"🦓"},{glyph:"🐮"},{glyph:"🐭"},{glyph:"🐹"},{glyph:"🐰"},{glyph:"🐻"},{glyph:"🐼"},{glyph:"🐸"},{glyph:"🐲"}],Le=(l,t,s)=>{t([{...se(s)}].concat(t()))};var Ge=M("<span> </span>"),Ie=M('<button type="button" class="row py_md px_xl svelte-3v1vrg"><div class="size_xl5"> </div> <div class="mreow svelte-3v1vrg">mreow</div></button> <div class="mreows svelte-3v1vrg"></div>',1);function Oe(l,t){G(t,!0);let s=te(t,"mreows",31,()=>H([]));const o=5,r=40,n=.8,m=(h,v)=>{const g=Math.floor((v-r*2)/o),N=g;return h.map((d,p)=>{const f=Math.floor(p/o),y=f%2===1?o-1-p%o:p%o;return{index:p,x:y*g+r,y:f*N,row:f,column:y,scale:1,mreow:d,fontSize:g*n}})};let _=J(void 0);const b=u(()=>e(_)===void 0?[]:m(s().slice(1),e(_)));var a=Ie(),x=L(a);x.__click=[Le,s,j];var c=E(x),z=E(c);w(c),B(2),w(x);var i=P(x,2);be(i,23,()=>e(b),h=>h.mreow,(h,v,g)=>{var N=u(()=>e(v).scale+Math.cos(e(g))/2.5);Pe(h,{get x(){return e(v).x},get y(){return e(v).y},get scale(){return e(N)},children:(d,p)=>{var f=Ge(),A=E(f);w(f),T(()=>{ae(f,"font-size",`${e(v).fontSize??""}px`),R(A,e(v).mreow.glyph)}),F(d,f)},$$slots:{default:!0}})}),w(i),T(()=>R(z,s().length?s()[0].glyph:"✨")),Ee(i,"clientWidth",h=>q(_,h)),F(l,a),I()}le(["click"]);var We=M('<main class="svelte-aa2n4y"><section class="box"><header class="box pt_xl"><!> <h1 class="mt_xl2">fuz_template</h1></header> <!></section> <!></main>');function Ve(l,t){G(t,!0);let s=J(H([se(j),j[4]]));var o=We(),r=E(o),n=E(r),m=E(n);pe(m,{size:"var(--icon_size_xl)"}),B(2),w(n);var _=P(n,2);Ne(_,{href:`${Ae??""}/about`,icon:"",children:(a,x)=>{B();var c=ee("about");F(a,c)},$$slots:{default:!0}}),w(r);var b=P(r,2);Oe(b,{get mreows(){return e(s)},set mreows(a){q(s,H(a))}}),w(o),F(l,o),I()}export{Ve as component};
