import{b as B,N as h,g as l,h as u,t as e,i as n,F as v,G as b,l as A,O as N,P as M,j as _,w as y,u as V,o as i,s as k}from"./vendor.75481ff1.js";import{u as L,g as S,b as D,a as T,d as $,l as j}from"./index.b660c3f0.js";import{_ as w}from"./AppButton.722020fd.js";import{f as o}from"./index.7bbc5099.js";const z={key:0},G=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C ",-1),O=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 ",-1),P=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F ",-1),R=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 ",-1),U=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F ",-1),q=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F ",-1),H=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B ",-1),I=["href"],J=u("th",{class:"min-w-[200px] pr-12 py-2 text-pink text-left"}," \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ",-1),K={class:"flex gap-3 mt-6"},Q=k("\u0412\u0441\u0451 \u043E\u043A"),W=k("\u0427\u0442\u043E-\u0442\u043E \u043D\u0435 \u043E\u043A"),X=B({props:{id:null},setup(E){const F=E,r=V(),c=L(),t=h(null);S(F.id).then(p=>t.value=p);const s=h("");async function g(){t.value&&(await T(t.value.id,s.value),c.create({text:"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D"}),r.push("/certificates/awaiting-approval"))}async function C(){t.value&&(await $(t.value.id,s.value),c.create({text:"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D"}),r.push("/certificates/awaiting-approval"))}return(p,d)=>{var f,m,x;return i(),l(v,null,[t.value?(i(),l("table",z,[u("tbody",null,[u("tr",null,[G,u("td",null,e((f=t.value.teacher)==null?void 0:f.lastName)+" "+e((m=t.value.teacher)==null?void 0:m.firstName)+" "+e((x=t.value.teacher)==null?void 0:x.middleName),1)]),u("tr",null,[O,u("td",null,e(t.value.name),1)]),u("tr",null,[P,u("td",null,e(t.value.issuedBy),1)]),u("tr",null,[R,u("td",null,e(n(o)(new Date(t.value.issuedDate),"dd.MM.yyyy")),1)]),u("tr",null,[U,u("td",null,e(n(o)(new Date(t.value.startDate),"dd.MM.yyyy")),1)]),u("tr",null,[q,u("td",null,e(n(o)(new Date(t.value.endDate),"dd.MM.yyyy")),1)]),u("tr",null,[H,u("td",null,[(i(!0),l(v,null,b(t.value.files,a=>(i(),l("a",{key:a.id,class:"text-red hover:text-pink my-1 block transition-colors whitespace-nowrap",href:`/uploads/certificates/${a.name}`,target:"_blank"},[u("span",null,e(n(j)(a.name)),1)],8,I))),128))])]),u("tr",null,[J,u("td",null,e(t.value.comment),1)])])])):A("",!0),N(u("textarea",{"onUpdate:modelValue":d[0]||(d[0]=a=>s.value=a),placeholder:"\u0412\u0430\u0448\u0438 \u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",class:"mt-6 resize-none block relative min-w-[700px] h-24 py-2 px-3 text-left bg-gray text-white shadow-md focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm placeholder:text-white placeholder:text-opacity-75"},null,512),[[M,s.value]]),u("div",K,[_(w,{onClick:g},{default:y(()=>[Q]),_:1}),_(w,{variant:"secondary",onClick:C},{default:y(()=>[W]),_:1})])],64)}}});typeof D=="function"&&D(X);export{X as default};
