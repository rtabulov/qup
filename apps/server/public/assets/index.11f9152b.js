import{e as k,u as E,r as g,b as d,_ as B,m as C}from"./index.ca82dda0.js";import{_ as D}from"./AppButton.722020fd.js";import{o,c as b,j as i,b as v,C as F,g as n,h as u,i as t,w as _,l as r,F as p,G as N,t as s,r as A,s as h}from"./vendor.75481ff1.js";import{r as L}from"./TrashIcon.eac8eb17.js";function $(x,c){return o(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})])}const R=u("h1",{class:"text-3xl"},"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1),S={class:"my-6"},V=u("h2",{class:"text-2xl mb-4"},"\u0412\u0430\u0448\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",-1),j={class:"overflow-x-auto"},G={key:0,class:"w-full"},H=u("thead",{class:"text-lg whitespace-nowrap bg-black"},[u("th",{class:"px-3 py-4 text-white"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),u("th",{class:"px-3 py-4 text-white"},"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),u("th",{class:"px-3 py-4 text-white"},"\u0421\u0442\u0430\u0442\u0443\u0441"),u("th",{class:"px-3 py-4 text-white"},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")],-1),I={key:0},M={colspan:"100%",class:"text-center py-6"},T=u("p",{class:"mb-4 text-lg"},"\u0412\u044B \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u043D\u0438 \u043E\u0434\u0438\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",-1),U=h(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 "),q={class:"odd:bg-gray odd:bg-opacity-40 text-opacity-75 text-white hover:text-opacity-100 transition-colors"},z={class:"px-3 py-4"},J={class:"px-3 py-4"},K={class:"text-center"},O={class:"text-center"},P=["onClick"],Q={key:0,class:"grid grid-cols-2"},W=u("h2",{class:"text-2xl mb-4"},"\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435",-1),X={class:"w-full"},Y=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",-1),Z=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0418\u043C\u044F",-1),u4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",-1),t4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",-1),e4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"\u0420\u043E\u043B\u044C",-1),s4=u("th",{class:"min-w-[200px] py-2 text-pink text-left"},"E-mail",-1),o4=v({setup(x){const c=k(),e=F(()=>c.user),m=E();async function f(l){await C(l),await c.tryLoggingIn(),m.create({text:"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D"})}function w(l){return l.approved?"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D":l.awaitingApproval?"\u041D\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0438":"\u041D\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438"}return(l,n4)=>{const y=A("RouterLink");return o(),n(p,null,[R,i(B),u("div",S,[V,u("div",j,[t(e)?(o(),n("table",G,[H,u("tbody",null,[t(e).certificates.length?r("",!0):(o(),n("tr",I,[u("td",M,[T,i(D,{as:"RouterLink",to:"/certificates/create"},{default:_(()=>[U,i(t($),{class:"inline-block h-5 w-5 translate-y-[2px] ml-2"})]),_:1})])])),(o(!0),n(p,null,N(t(e).certificates,a=>(o(),n("tr",q,[u("td",z,[i(y,{to:`/profile/certificates/${a.id}/edit`},{default:_(()=>[h(s(a.name),1)]),_:2},1032,["to"])]),u("td",J,s(a.issuedBy),1),u("td",K,s(w(a)),1),u("td",O,[u("button",{onClick:i4=>f(a.id)},[i(t(L),{class:"h-6 w-6 inline-block hover:text-red cursor-pointer transition-colors"})],8,P)])]))),256))])])):r("",!0)])]),t(e)?(o(),n("div",Q,[u("div",null,[W,u("table",X,[u("tbody",null,[u("tr",null,[Y,u("td",null,s(t(e).lastName),1)]),u("tr",null,[Z,u("td",null,s(t(e).firstName),1)]),u("tr",null,[u4,u("td",null,s(t(e).middleName),1)]),u("tr",null,[t4,u("td",null,s(t(e).position),1)]),u("tr",null,[e4,u("td",null,s(t(g)[t(e).role]),1)]),u("tr",null,[s4,u("td",null,s(t(e).email),1)])])])])])):r("",!0)],64)}}});typeof d=="function"&&d(o4);export{o4 as default};
