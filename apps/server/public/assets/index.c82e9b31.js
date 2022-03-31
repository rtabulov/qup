import{e as g,u as B,b as p,_ as C,r as D}from"./index.dc4c3b11.js";import{_ as b}from"./AppButton.722020fd.js";import{o,c as v,j as i,b as F,C as N,g as n,h as u,i as t,w as h,l as r,F as x,G as A,t as s,r as L,s as m}from"./vendor.75481ff1.js";import{r as $}from"./TrashIcon.eac8eb17.js";function R(f,c){return o(),v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})])}const S=u("h1",{class:"text-3xl"},"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1),V={class:"my-6"},j=u("h2",{class:"text-2xl mb-4"},"\u0412\u0430\u0448\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",-1),G={class:"overflow-x-auto"},H={key:0,class:"w-full"},I=u("thead",{class:"text-lg whitespace-nowrap bg-black"},[u("th",{class:"px-3 py-4 text-white"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),u("th",{class:"px-3 py-4 text-white"},"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),u("th",{class:"px-3 py-4 text-white"},"\u0421\u0442\u0430\u0442\u0443\u0441"),u("th",{class:"px-3 py-4 text-white"},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")],-1),M={key:0},T={colspan:"100%",class:"text-center py-6"},q=u("p",{class:"mb-4 text-lg"},"\u0412\u044B \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u043D\u0438 \u043E\u0434\u0438\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",-1),z=m(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 "),J={class:"odd:bg-gray odd:bg-opacity-40 text-opacity-75 text-white hover:text-opacity-100 transition-colors"},K={class:"px-3 py-4"},O={class:"px-3 py-4"},P={class:"text-center"},Q={class:"text-center"},U=["onClick"],W={key:0,class:"grid grid-cols-2"},X=u("h2",{class:"text-2xl mb-4"},"\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435",-1),Y={class:"w-full"},Z=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",-1),u4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0418\u043C\u044F",-1),t4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",-1),e4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",-1),s4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0420\u043E\u043B\u044C",-1),o4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"E-mail",-1),n4=F({setup(f){const c=g(),e=N(()=>c.user),y=B();async function w(l){await D(l),await c.tryLoggingIn(),y.create({text:"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D"})}function k(l){return l.approved?"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D":l.awaitingApproval?"\u041D\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0438":"\u041D\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438"}return(l,i4)=>{var d,_;const E=L("RouterLink");return o(),n(x,null,[S,i(C),u("div",V,[j,u("div",G,[t(e)?(o(),n("table",H,[I,u("tbody",null,[(d=t(e).certificates)!=null&&d.length?r("",!0):(o(),n("tr",M,[u("td",T,[q,i(b,{as:"RouterLink",to:"/certificates/create"},{default:h(()=>[z,i(t(R),{class:"inline-block h-5 w-5 translate-y-[2px] ml-2"})]),_:1})])])),(o(!0),n(x,null,A(t(e).certificates,a=>(o(),n("tr",J,[u("td",K,[i(E,{to:`/profile/certificates/${a.id}/edit`},{default:h(()=>[m(s(a.name),1)]),_:2},1032,["to"])]),u("td",O,s(a.issuedBy),1),u("td",P,s(k(a)),1),u("td",Q,[u("button",{onClick:l4=>w(a.id)},[i(t($),{class:"h-6 w-6 inline-block hover:text-red cursor-pointer transition-colors"})],8,U)])]))),256))])])):r("",!0)])]),t(e)?(o(),n("div",W,[u("div",null,[X,u("table",Y,[u("tbody",null,[u("tr",null,[Z,u("td",null,s(t(e).lastName),1)]),u("tr",null,[u4,u("td",null,s(t(e).firstName),1)]),u("tr",null,[t4,u("td",null,s(t(e).middleName),1)]),u("tr",null,[e4,u("td",null,s(t(e).position),1)]),u("tr",null,[s4,u("td",null,s((_=t(e).role)==null?void 0:_.key),1)]),u("tr",null,[o4,u("td",null,s(t(e).email),1)])])])])])):r("",!0)],64)}}});typeof p=="function"&&p(n4);export{n4 as default};
