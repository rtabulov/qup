var w=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&g(t,a,e[a]);if(d)for(var a of d(e))x.call(e,a)&&g(t,a,e[a]);return t},h=(t,e)=>y(t,v(e));import{j as m}from"./index.e67c8864.js";import{o as l,c as j,j as b,b as B,N as V,g as n,h as r,i,m as C,F as c,G as f,t as _,l as F}from"./vendor.75481ff1.js";function L(t,e){return l(),j("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})])}const N={class:"flex w-full items-center justify-center bg-grey-lighter"},P={class:"flex gap-3 items-center px-6 py-3 bg-blue text-white rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-blue hover:text-black transition-colors"},q=r("span",{class:"text-base leading-normal"},"\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B",-1),A={key:0,class:"grid grid-cols-3 gap-3"},R=["src","alt"],S={key:1,class:"w-full h-full flex items-center justify-center bg-lightblue bg-opacity-30 text-center p-3"},U={key:1,class:"grid grid-cols-3 gap-3"},$=["src","alt"],D={key:1,class:"w-full h-full flex items-center justify-center bg-gray text-center p-3"},E={inheritAttrs:!1},z=B(h(p({},E),{props:{initialValue:{default:void 0}},setup(t){const e=V(null);function a(o){return URL.createObjectURL(o)}return(o,u)=>(l(),n(c,null,[r("div",N,[r("label",P,[b(i(L),{class:"h-5 w-5"}),q,r("input",C(o.$attrs,{type:"file",class:"hidden",onChange:u[0]||(u[0]=s=>e.value=s.target.files)}),null,16)])]),e.value?(l(),n("div",A,[(l(!0),n(c,null,f(e.value,s=>(l(),n("div",{key:s.name,class:"aspect-square rounded-md overflow-hidden"},[i(m)(s.name)?(l(),n("img",{key:0,src:a(s),alt:s.name,class:"w-full h-full object-contain bg-lightblue bg-opacity-30"},null,8,R)):(l(),n("span",S,_(s.name),1))]))),128))])):t.initialValue?(l(),n("div",U,[(l(!0),n(c,null,f(t.initialValue,s=>(l(),n("div",{key:s.name,class:"aspect-square rounded-md overflow-hidden"},[i(m)(s.name)?(l(),n("img",{key:0,src:`/api/uploads/certificates/${s.name}`,alt:s.name,class:"w-full h-full object-contain bg-gray"},null,8,$)):(l(),n("span",D,_(s.name),1))]))),128))])):F("",!0)],64))}}));export{z as _};