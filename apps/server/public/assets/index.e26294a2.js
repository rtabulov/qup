var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(s,u,e)=>u in s?y(s,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[u]=e,c=(s,u)=>{for(var e in u||(u={}))B.call(u,e)&&p(s,e,u[e]);if(m)for(var e of m(u))C.call(u,e)&&p(s,e,u[e]);return s};import{b as g,U as h,N as f,g as k,j as a,h as l,i as r,w as _,Q as D,s as d,u as S,V as U,o as N}from"./vendor.75481ff1.js";import{_ as w}from"./AppInput.d065dcd4.js";import{_ as $}from"./AppButton.722020fd.js";import{e as q,j,b,k as F,_ as L}from"./index.b660c3f0.js";const R={class:"text-center"},A=l("h1",{class:"text-3xl"},"\u0412\u0445\u043E\u0434",-1),I=["onSubmit"],M=d("\u0412\u043E\u0439\u0442\u0438"),Q={class:"mt-2"},T=d(" \u0415\u0449\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B? "),z=d("\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0437\u0434\u0435\u0441\u044C"),G=l("p",{class:"mt-2"},"\u0414\u043B\u044F \u0441\u043C\u0435\u043D\u044B \u0440\u043E\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443",-1),H=g({setup(s){const u=h({email:"",password:""}),e=f({}),v=S(),E=U(),x=q(),i=f(!1);async function V(){i.value=!0;try{await F(c({},u)),await x.tryLoggingIn(),v.push(E.query.backurl||"/profile")}catch(n){i.value=!1,n.response&&(e.value=n.response.data)}}return(n,o)=>(N(),k("div",R,[A,a(L,{center:""}),l("form",{class:"max-w-xl mx-auto space-y-4",onSubmit:D(V,["prevent"])},[a(w,{modelValue:r(u).email,"onUpdate:modelValue":o[0]||(o[0]=t=>r(u).email=t),error:e.value.email,"onUpdate:error":o[1]||(o[1]=t=>e.value.email=t),type:"email",required:"",label:"E-mail"},null,8,["modelValue","error"]),a(w,{modelValue:r(u).password,"onUpdate:modelValue":o[2]||(o[2]=t=>r(u).password=t),error:e.value.password,"onUpdate:error":o[3]||(o[3]=t=>e.value.password=t),type:"password",required:"",label:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,8,["modelValue","error"]),a($,{disabled:i.value,type:"submit",class:"w-full"},{default:_(()=>[M]),_:1},8,["disabled"]),l("p",Q,[T,a(j,{to:"/register"},{default:_(()=>[z]),_:1})]),G],40,I)]))}});typeof b=="function"&&b(H);export{H as default};