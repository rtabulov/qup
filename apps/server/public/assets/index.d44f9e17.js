import{u as B,n as C,c as U,R as v,o as N,p as E,r as R}from"./index.876e2b77.js";import{_ as g}from"./AppSelect.46c28d3b.js";import{b as _}from"./route-block.b5bad31b.js";import{r as w}from"./TrashIcon.15ad80f5.js";import{b as y,J as k,g as a,h as e,F as A,A as D,o as u,t as n,i as p,u as l}from"./vendor.a7312e6f.js";const S={class:"w-full"},V=e("thead",null,[e("tr",null,[e("th",null,"\u0424\u0418\u041E"),e("th",null,"\u0420\u043E\u043B\u044C"),e("th",null,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])],-1),F={class:""},L={class:"py-3"},$={class:"px-4"},J={class:"px-4"},O={class:"px-4 text-center"},Y=["onClick"],j=y({setup(q){const r=k([]),i=B(),o=()=>C().then(t=>r.value=t);o();const f=U();async function h(t){await N(t),await o(),i.create({text:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0434\u0430\u043B\u0451\u043D"})}async function b(t,c){await E(t,{role:c}),await o(),i.create({text:"\u0420\u043E\u043B\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430"})}function x(t){return R[t]}return(t,c)=>(u(),a("table",S,[V,e("tbody",F,[(u(!0),a(A,null,D(r.value,s=>{var d;return u(),a("tr",L,[e("td",$,n(s.lastName)+" "+n(s.firstName)+" "+n(s.middleName),1),e("td",J,[p(g,{options:l(v),disabled:s.id===((d=l(f).user)==null?void 0:d.id),"model-value":s.role,"get-label":x,"onUpdate:modelValue":m=>b(s.id,m)},null,8,["options","disabled","model-value","onUpdate:modelValue"])]),e("td",O,[e("button",{class:"hover:text-red transition-colors",onClick:m=>h(s.id)},[p(l(w),{class:"w-6 h-6"})],8,Y)])])}),256))])]))}});typeof _=="function"&&_(j);export{j as default};
