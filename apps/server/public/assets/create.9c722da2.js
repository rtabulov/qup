import{b as f,N as n,g as p,j as e,h as l,w as _,Q as D,F as b,u as E,o as F,s as v}from"./vendor.75481ff1.js";import{_ as a}from"./AppInput.2110be0f.js";import{_ as y}from"./AppButton.c4435c9b.js";import{h,b as i,_ as x,i as g}from"./index.902c9b9c.js";import{_ as B}from"./FileInput.1efca0f6.js";const w=l("h1",{class:"text-3xl text-center"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",-1),A=["onSubmit"],C=v("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442"),S=f({setup(q){const c=E(),m=h(),t=n({}),r=n(!1);async function d(s){r.value=!0;try{const u=new FormData(s.target);["issuedDate","startDate","endDate"].forEach(o=>u.set(o,new Date(u.get(o)).toISOString())),console.log(Object.fromEntries(u)),await g(u),await m.tryLoggingIn(),c.push("/profile")}catch(u){r.value=!1,u.response&&(t.value=u.response.data)}}return(s,u)=>(F(),p(b,null,[w,e(x,{center:""}),l("form",{class:"max-w-xl mx-auto space-y-4",onSubmit:D(d,["prevent"])},[e(B,{multiple:"",name:"files"}),e(a,{type:"text",required:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",name:"name",error:t.value.name},null,8,["error"]),e(a,{type:"text",required:"",label:"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",name:"issuedBy",error:t.value.issuedBy},null,8,["error"]),e(a,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438","initial-value":"2022-03-20",name:"issuedDate",error:t.value.issuedDate},null,8,["error"]),e(a,{type:"date",required:"","initial-value":"2022-01-11",label:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"startDate",error:t.value.startDate},null,8,["error"]),e(a,{type:"date",required:"","initial-value":"2022-02-11",label:"\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"endDate",error:t.value.endDate},null,8,["error"]),e(y,{disabled:r.value,type:"submit",class:"w-full"},{default:_(()=>[C]),_:1},8,["disabled"])],40,A)],64))}});typeof i=="function"&&i(S);export{S as default};
