import{b as h,N as n,g as o,j as e,Q as x,t as g,l as v,i as d,w,F as B,h as y,u as C,o as c,s as A}from"./vendor.75481ff1.js";import{g as M,h as S,b as D,v as k,_ as q}from"./index.bace5c34.js";import{_ as N}from"./AppButton.c4435c9b.js";import{_ as r}from"./AppInput.2110be0f.js";import{_ as V}from"./FileInput.0a41d446.js";import{f as m}from"./index.7bbc5099.js";const $=y("h1",{class:"text-3xl text-center"},"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",-1),I=["onSubmit"],L=y("p",{class:"font-bold"},"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0435\u0433\u043E",-1),j={key:0,class:"border-l-[3px] border-muted pl-3"},O=A(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 "),Q=h({props:{id:null},setup(_){const f=_,u=n(null);M(f.id).then(s=>u.value=s);const E=S(),b=C(),t=n({}),i=n(!1);async function F(s){i.value=!0;try{const a=new FormData(s.target);["issuedDate","startDate","endDate"].forEach(p=>a.set(p,new Date(a.get(p)).toISOString())),await k(f.id,a),await E.tryLoggingIn(),b.push("/profile")}catch(a){i.value=!1,a.response&&(t.value=a.response.data)}}return(s,a)=>{var l;return c(),o(B,null,[$,e(q,{center:""}),u.value?(c(),o("form",{key:0,class:"max-w-xl mx-auto space-y-4",onSubmit:x(F,["prevent"])},[L,(l=u.value)!=null&&l.comment?(c(),o("p",j,g(u.value.comment),1)):v("",!0),e(V,{multiple:"",name:"files","initial-value":u.value.files},null,8,["initial-value"]),e(r,{type:"text",required:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",name:"name","initial-value":u.value.name,error:t.value.name},null,8,["initial-value","error"]),e(r,{type:"text",required:"",label:"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",name:"issuedBy","initial-value":u.value.issuedBy,error:t.value.issuedBy},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",name:"issuedDate","initial-value":d(m)(new Date(u.value.issuedDate),"yyyy-MM-dd"),error:t.value.issuedDate},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"startDate","initial-value":d(m)(new Date(u.value.startDate),"yyyy-MM-dd"),error:t.value.startDate},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"endDate","initial-value":d(m)(new Date(u.value.endDate),"yyyy-MM-dd"),error:t.value.endDate},null,8,["initial-value","error"]),e(N,{disabled:i.value,type:"submit",class:"w-full"},{default:w(()=>[O]),_:1},8,["disabled"])],40,I)):v("",!0)],64)}}});typeof D=="function"&&D(Q);export{Q as default};
