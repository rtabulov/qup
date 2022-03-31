import{b as F,N as s,g as n,j as e,Q as h,t as x,l as p,i as o,w,F as B,h as y,u as g,o as d,s as C}from"./vendor.75481ff1.js";import{g as A,e as M,b as v,s as k,_ as q}from"./index.b660c3f0.js";import{_ as N}from"./AppButton.722020fd.js";import{_ as r}from"./AppInput.d065dcd4.js";import{_ as S}from"./FileInput.abad5619.js";import{f as c}from"./index.7bbc5099.js";const V=y("h1",{class:"text-3xl text-center"},"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",-1),$=["onSubmit"],L=y("p",{class:"font-bold"},"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043E\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0435\u0433\u043E",-1),j={key:0,class:"border-l-[3px] border-muted pl-3"},I=C(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 "),Q=F({props:{id:null},setup(D){const m=D,u=s(null);A(m.id).then(l=>u.value=l);const _=M(),E=g(),a=s({}),i=s(!1);async function b(l){i.value=!0;try{const t=new FormData(l.target);await k(m.id,t),await _.tryLoggingIn(),E.push("/profile")}catch(t){i.value=!1,t.response&&(a.value=t.response.data)}}return(l,t)=>{var f;return d(),n(B,null,[V,e(q,{center:""}),u.value?(d(),n("form",{key:0,class:"max-w-xl mx-auto space-y-4",onSubmit:h(b,["prevent"])},[L,(f=u.value)!=null&&f.comment?(d(),n("p",j,x(u.value.comment),1)):p("",!0),e(S,{multiple:"",name:"files","initial-value":u.value.files},null,8,["initial-value"]),e(r,{type:"text",required:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",name:"name","initial-value":u.value.name,error:a.value.name},null,8,["initial-value","error"]),e(r,{type:"text",required:"",label:"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",name:"issuedBy","initial-value":u.value.issuedBy,error:a.value.issuedBy},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",name:"issuedDate","initial-value":o(c)(new Date(u.value.issuedDate),"yyyy-MM-dd"),error:a.value.issuedDate},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"startDate","initial-value":o(c)(new Date(u.value.startDate),"yyyy-MM-dd"),error:a.value.startDate},null,8,["initial-value","error"]),e(r,{type:"date",required:"",label:"\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F",name:"endDate","initial-value":o(c)(new Date(u.value.endDate),"yyyy-MM-dd"),error:a.value.endDate},null,8,["initial-value","error"]),e(N,{disabled:i.value,type:"submit",class:"w-full"},{default:w(()=>[I]),_:1},8,["disabled"])],40,$)):p("",!0)],64)}}});typeof v=="function"&&v(Q);export{Q as default};