var g=Object.defineProperty,p=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var s=(e,t,l)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,f=(e,t)=>{for(var l in t||(t={}))v.call(t,l)&&s(e,l,t[l]);if(n)for(var l of n(t))y.call(t,l)&&s(e,l,t[l]);return e},c=(e,t)=>p(e,x(t));import{b as h,E as k,N as w,C as q,o as u,g as d,t as m,l as b,O as B,R as C,i as D,h as M,m as N,S as E}from"./vendor.75481ff1.js";const R=["for"],S=["id","required"],$={key:1,class:"text-danger w-full block text-left mt-1"},A={inheritAttrs:!1},P=h(c(f({},A),{props:{required:{type:Boolean,default:!1},modelValue:{default:"__defaultModelValue__"},initialValue:{default:""},error:{default:void 0},label:{default:void 0},id:{default:()=>`app-input-${k(8)}`},placeholder:{default:""}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const l=e,i=w(l.initialValue),o=q({get(){return l.modelValue==="__defaultModelValue__"?i.value:l.modelValue},set(a){i.value=a,t("update:modelValue",a)}});return(a,r)=>(u(),d("div",null,[e.label?(u(),d("label",{key:0,for:e.id,class:"text-left block mb-1"},m(e.label),9,R)):b("",!0),B(M("input",N(a.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=V=>E(o)?o.value=V:null),class:["relative w-full py-2 px-3 text-left bg-gray bg-opacity-10 ring-1 ring-muted text-black shadow-md focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm placeholder:text-black placeholder:text-opacity-75 transition-shadow",{"text-danger":e.error}],id:e.id,required:e.required,onInput:r[1]||(r[1]=()=>e.error&&t("update:error",null))}),null,16,S),[[C,D(o)]]),e.error?(u(),d("small",$,m(e.error),1)):b("",!0)]))}}));export{P as _};
