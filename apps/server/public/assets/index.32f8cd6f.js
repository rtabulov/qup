import{k as w,b as m,_ as y,e as k,l as b}from"./index.902c9b9c.js";import{_ as v}from"./AppButton.c4435c9b.js";import{A as B,a as n,b as g}from"./AppTableRow.1e4419c5.js";import{o as s,c as p,j as u,b as D,N as A,g as c,h as t,w as e,F as _,i as d,G as h,t as l,s as a}from"./vendor.75481ff1.js";import{f as C}from"./index.7bbc5099.js";function E(x,r){return s(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})])}const F={class:"flex items-center justify-between mb-4"},V=t("h1",{class:"text-2xl"},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",-1),N=a(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 Excel "),T={class:"overflow-x-auto"},$=a("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),j=a("\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),M=a("\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438"),H=a("\u0424\u0430\u0439\u043B\u044B"),L={class:"px-3 py-4"},z={class:"px-3 py-4"},G={class:"px-3 py-4 whitespace-nowrap"},R={class:"px-3 py-4"},S=D({setup(x){const r=A([]);return w().then(f=>r.value=f),(f,q)=>(s(),c(_,null,[t("div",F,[V,u(y),u(v,{as:"a",target:"_blank",href:"/api/certificates/report"},{default:e(()=>[N,u(d(E),{class:"w-6 h-6 inline ml-2"})]),_:1})]),t("div",T,[u(B,null,{head:e(()=>[u(n,null,{default:e(()=>[$]),_:1}),u(n,null,{default:e(()=>[j]),_:1}),u(n,null,{default:e(()=>[M]),_:1}),u(n,null,{default:e(()=>[H]),_:1})]),default:e(()=>[(s(!0),c(_,null,h(r.value,o=>(s(),p(g,null,{default:e(()=>[t("td",L,l(o.name),1),t("td",z,l(o.issuedBy),1),t("td",G,l(d(C)(new Date(o.issuedDate),"dd.MM.yyyy")),1),t("td",R,[(s(!0),c(_,null,h(o.files,i=>(s(),p(k,{key:i.id,to:`/api/uploads/certificates/${i.name}`,class:"block",external:""},{default:e(()=>[a(l(d(b)(i.name,30)),1)]),_:2},1032,["to"]))),128))])]),_:2},1024))),256))]),_:1})])],64))}});typeof m=="function"&&m(S);export{S as default};
