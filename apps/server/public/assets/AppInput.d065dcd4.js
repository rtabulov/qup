var x=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var n=(e,t,l)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,f=(e,t)=>{for(var l in t||(t={}))h.call(t,l)&&n(e,l,t[l]);if(s)for(var l of s(t))y.call(t,l)&&n(e,l,t[l]);return e},m=(e,t)=>b(e,v(t));import{b as g,E as k,N as w,C as q,o as u,g as d,t as c,l as V,O as B,R as C,i as D,h as M,m as N,S as E}from"./vendor.75481ff1.js";const R=["for"],S=["id","required"],$={key:1,class:"text-red w-full block text-left mt-1"},A={inheritAttrs:!1},P=g(m(f({},A),{props:{required:{type:Boolean,default:!1},modelValue:{default:"__defaultModelValue__"},initialValue:{default:""},error:{default:void 0},label:{default:void 0},id:{default:()=>`app-input-${k(8)}`},placeholder:{default:""}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const l=e,i=w(l.initialValue),o=q({get(){return l.modelValue==="__defaultModelValue__"?i.value:l.modelValue},set(a){i.value=a,t("update:modelValue",a)}});return(a,r)=>(u(),d("div",null,[e.label?(u(),d("label",{key:0,for:e.id,class:"text-left block mb-1"},c(e.label),9,R)):V("",!0),B(M("input",N(a.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=p=>E(o)?o.value=p:null),class:["relative w-full py-2 px-3 text-left bg-gray text-white shadow-md focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm placeholder:text-white placeholder:text-opacity-75",{"text-red":e.error}],id:e.id,required:e.required,onInput:r[1]||(r[1]=()=>e.error&&t("update:error",null))}),null,16,S),[[C,D(o)]]),e.error?(u(),d("small",$,c(e.error),1)):V("",!0)]))}}));export{P as _};