var x=Object.defineProperty;var n=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(s,e,o)=>e in s?x(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,m=(s,e)=>{for(var o in e||(e={}))w.call(e,o)&&i(s,o,e[o]);if(n)for(var o of n(e))b.call(e,o)&&i(s,o,e[o]);return s};import{b as h,L as y,g as V,h as l,i as r,u as a,w as g,D as k,G as E,M as S,o as B,k as q}from"./vendor.77756f59.js";import{_ as d}from"./AppInput.a09ac099.js";import{_ as v,b as c}from"./route-block.d8551857.js";import{u as C,l as N}from"./index.492625dd.js";const U={class:"text-center"},L=l("h1",{class:"text-3xl"},"\u0412\u0445\u043E\u0434",-1),M=l("hr",{class:"max-w-xs my-6 mx-auto border-red border-b-[3px]"},null,-1),R=["onSubmit"],$=q("\u0412\u043E\u0439\u0442\u0438"),D=h({setup(s){const e=y({email:"",password:""}),o=E(),p=S(),f=C();async function _(){await N(m({},e)),await f.tryLoggingIn(),o.push(p.query.backurl||"/")}return(F,t)=>(B(),V("div",U,[L,M,l("form",{class:"max-w-xl mx-auto space-y-4",onSubmit:k(_,["prevent"])},[r(d,{modelValue:a(e).email,"onUpdate:modelValue":t[0]||(t[0]=u=>a(e).email=u),type:"email",required:"",placeholder:"E-mail"},null,8,["modelValue"]),r(d,{modelValue:a(e).password,"onUpdate:modelValue":t[1]||(t[1]=u=>a(e).password=u),type:"password",required:"",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,8,["modelValue"]),r(v,{type:"submit",class:"w-full"},{default:g(()=>[$]),_:1})],40,R)]))}});typeof c=="function"&&c(D);export{D as default};
