var y=Object.defineProperty,v=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))b.call(e,a)&&g(t,a,e[a]);if(d)for(var a of d(e))x.call(e,a)&&g(t,a,e[a]);return t},h=(t,e)=>v(t,k(e));import{i as p}from"./index.8c4153aa.js";import{o as r,c as j,j as w,b as B,N as V,g as n,h as l,i,m as C,F as c,G as f,t as _,l as F}from"./vendor.75481ff1.js";function L(t,e){return r(),j("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})])}const N={class:"flex w-full items-center justify-center bg-grey-lighter text-black"},P={class:"flex gap-3 items-center px-6 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-red hover:text-white transition-colors"},q=l("span",{class:"text-base leading-normal"},"\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B",-1),A={key:0,class:"grid grid-cols-3 gap-3"},R=["src","alt"],S={key:1,class:"w-full h-full flex items-center justify-center bg-gray text-center p-3"},U={key:1,class:"grid grid-cols-3 gap-3"},$=["src","alt"],D={key:1,class:"w-full h-full flex items-center justify-center bg-gray text-center p-3"},E={inheritAttrs:!1},z=B(h(m({},E),{props:{initialValue:{default:void 0}},setup(t){const e=V(null);function a(o){return URL.createObjectURL(o)}return(o,u)=>(r(),n(c,null,[l("div",N,[l("label",P,[w(i(L),{class:"h-5 w-5"}),q,l("input",C(o.$attrs,{type:"file",class:"hidden",onChange:u[0]||(u[0]=s=>e.value=s.target.files)}),null,16)])]),e.value?(r(),n("div",A,[(r(!0),n(c,null,f(e.value,s=>(r(),n("div",{key:s.name,class:"aspect-square rounded-md overflow-hidden"},[i(p)(s.name)?(r(),n("img",{key:0,src:a(s),alt:s.name,class:"w-full h-full object-contain bg-gray"},null,8,R)):(r(),n("span",S,_(s.name),1))]))),128))])):t.initialValue?(r(),n("div",U,[(r(!0),n(c,null,f(t.initialValue,s=>(r(),n("div",{key:s.name,class:"aspect-square rounded-md overflow-hidden"},[i(p)(s.name)?(r(),n("img",{key:0,src:`/api/uploads/certificates/${s.name}`,alt:s.name,class:"w-full h-full object-contain bg-gray"},null,8,$)):(r(),n("span",D,_(s.name),1))]))),128))])):F("",!0)],64))}}));export{z as _};
