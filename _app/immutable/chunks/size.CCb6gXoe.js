var x=Object.defineProperty;var k=(e,r,s)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;var w=(e,r,s)=>(k(e,typeof r!="symbol"?r+"":r,s),s),f=(e,r,s)=>{if(!r.has(e))throw TypeError("Cannot "+s)};var i=(e,r,s)=>(f(e,r,"read from private field"),s?s.call(e):r.get(e)),b=(e,r,s)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,s)},c=(e,r,s,t)=>(f(e,r,"write to private field"),t?t.call(e,s):r.set(e,s),s);var g=(e,r,s)=>(f(e,r,"access private method"),s);import{e as _,u as z}from"./runtime.CirxRmYf.js";var o,a,v,h,p;const u=class u{constructor(r){b(this,h);b(this,o,new WeakMap);b(this,a,void 0);b(this,v,void 0);c(this,v,r)}observe(r,s){var t=i(this,o).get(r)||new Set;return t.add(s),i(this,o).set(r,t),g(this,h,p).call(this).observe(r,i(this,v)),()=>{var n=i(this,o).get(r);n.delete(s),n.size===0&&(i(this,o).delete(r),i(this,a).unobserve(r))}}};o=new WeakMap,a=new WeakMap,v=new WeakMap,h=new WeakSet,p=function(){return i(this,a)??c(this,a,new ResizeObserver(r=>{for(var s of r){u.entries.set(s.target,s);for(var t of i(this,o).get(s.target)||[])t(s)}}))},w(u,"entries",new WeakMap);let d=u;var M=new d({box:"border-box"});function q(e,r,s){var t=M.observe(e,()=>s(e[r]));_(()=>(z(()=>s(e[r])),t))}export{q as b};
