import{c as x,b as p,_ as b,e as B,l as k}from"./index.902c9b9c.js";import{A as w,a as n,b as A}from"./AppTableRow.1e4419c5.js";import{f as D}from"./index.7bbc5099.js";import{b as E,N as g,g as c,j as e,w as u,F as r,h as o,r as F,o as a,G as f,c as m,s as t,t as l,i as h}from"./vendor.75481ff1.js";const C=o("h1",{class:"text-2xl mb-4"},"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",-1),v=t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),L=t("\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),N=t("\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438"),T=t("\u0424\u0430\u0439\u043B\u044B"),$={class:"px-3 py-4"},R={class:"px-3 py-4"},V={class:"px-3 py-4 whitespace-nowrap"},M={class:"px-3 py-4"},j=E({setup(G){const _=g([]);return x().then(d=>_.value=d),(d,H)=>{const y=F("RouterLink");return a(),c(r,null,[C,e(b),e(w,null,{head:u(()=>[e(n,null,{default:u(()=>[v]),_:1}),e(n,null,{default:u(()=>[L]),_:1}),e(n,null,{default:u(()=>[N]),_:1}),e(n,null,{default:u(()=>[T]),_:1})]),default:u(()=>[(a(!0),c(r,null,f(_.value,s=>(a(),m(A,null,{default:u(()=>[o("td",$,[e(y,{to:`/certificates/${s.id}`},{default:u(()=>[t(l(s.name),1)]),_:2},1032,["to"])]),o("td",R,l(s.issuedBy),1),o("td",V,l(h(D)(new Date(s.issuedDate),"dd.MM.yyyy")),1),o("td",M,[(a(!0),c(r,null,f(s.files,i=>(a(),m(B,{key:i.id,to:`/api/uploads/certificates/${i.name}`,class:"block",external:""},{default:u(()=>[t(l(h(k)(i.name,30)),1)]),_:2},1032,["to"]))),128))])]),_:2},1024))),256))]),_:1})],64)}}});typeof p=="function"&&p(j);export{j as default};