import{a as l,s as p,v as s,cU as d,L as u,aF as a,o as f,f as _,m as n,l as e,t as m}from"./index.d7db7941.js";import v from"./QuickNav.7f6f52f6.js";import{A as g}from"./index.195c0b8d.js";import{h}from"./header.d801b988.js";import"./index.8c506d05.js";import"./index.3de72388.js";import"./index.687174df.js";import"./index.30c2ac05.js";import"./useRefs.60c405ca.js";import"./PlusOutlined.10edf23b.js";import"./index.3c9af19b.js";import"./index.b9d775df.js";import"./useFlexGapSupport.0c54ffc5.js";import"./index.b3a4af19.js";import"./data.93390901.js";import"./process.8e8f8725.js";import"./useSize.03a1e437.js";import"./eagerComputed.032ae1e2.js";const k=l({components:{Avatar:g,QuickNav:v},setup(){const t=p(),o=s(),r=s(!1);return s(new Date),o.value=t.getUserInfo||{},{headerImg:h,loading:r,loginUser:o,currentDate:d(new Date)}}}),x={class:"lg:flex"},F={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},D={class:"md:text-lg text-md"},N={class:"text-secondary"},U={class:"flex-1 md:mt-0 mt-4"};function y(t,o,r,A,C,$){const i=a("Avatar"),c=a("QuickNav");return f(),_("div",x,[n(i,{src:t.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),e("div",F,[e("h1",D,m(t.loginUser.name),1),e("span",N,m(t.currentDate)+"\uFF0C\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",1)]),e("div",U,[n(c,{loading:t.loading,class:"enter-y"},null,8,["loading"])])])}var M=u(k,[["render",y]]);export{M as default};
