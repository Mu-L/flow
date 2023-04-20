import{P as g}from"./index.1b5d0750.js";import{L as h,a as I,cV as F,v as m,bA as P,bQ as C,h as B,aF as o,o as k,i as S,z as t,m as r,B as n,t as w,l as a}from"./index.f3fe0f3f.js";import{S as V}from"./index.be9b0bc6.js";import{T as b}from"./index.5c6ad28f.js";import x from"./FormContainer.e75eaa4b.js";import E from"./ActionButtons.9accc8a6.js";import H from"./BaseActionButtons.09d5c555.js";import R from"./ProcessBackButton.213292eb.js";import T from"./ApproveActionButtons.890c0a2c.js";import N from"./ApprovalHistory.c509968c.js";import{h as $,i as D}from"./process.023768c5.js";import W from"./ProcessHeader.66d0c5d0.js";import"./index.e70aa727.js";import"./index.f1d0cead.js";import"./useSize.5ce57631.js";import"./eagerComputed.cc2dc322.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./useContentViewHeight.d39ef36d.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.3b80093e.js";import"./transButton.b11946f6.js";import"./useFlexGapSupport.396b27be.js";import"./index.218af737.js";import"./index.00811394.js";import"./index.30e23674.js";import"./CopyOutlined.09a0657f.js";import"./index.78295ba6.js";import"./index.2ddefb41.js";import"./index.51e867e3.js";import"./get.ac77a413.js";import"./index.17a7febc.js";import"./index.033bc9aa.js";import"./FullscreenOutlined.a1ca65d7.js";import"./index.96f04a94.js";import"./index.d7bd09aa.js";import"./throttleByAnimationFrame.963da602.js";import"./Viewer.ca2e1abd.js";import"./PlusOutlined.c106decb.js";import"./ApartmentOutlined.17036e74.js";import"./index.872b91fc.js";import"./FlowDiagramModal.b6657dd5.js";import"./ClockCircleOutlined.fad12e2b.js";import"./index.f8e018fb.js";import"./useRefs.e4782df1.js";import"./index.bc06cf2e.js";const K=I({components:{LeftOutlined:F,ProcessHeader:W,PageWrapper:g,FormContainer:x,ActionButtons:E,BaseActionButtons:H,ApproveActionButtons:T,ApprovalHistory:N,ProcessBackButton:R,Space:V,Tag:b},setup(){const s=m(),c=m({}),u=m({}),l=m(""),_=P(),{currentRoute:d}=C(),{params:{modelKey:f},query:{procInstId:p}}=B(d);$({modelKey:f}).then(e=>{c.value=e}),p&&D({procInstId:p}).then(e=>{u.value=e,B(s).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:l,modelBaseInfo:c,formContainerRef:s,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(s,c,u,l,_,d){const f=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),y=o("ApprovalHistory"),A=o("PageWrapper");return k(),S(A,{class:"!mt-4 process-container"},{title:t(()=>[r(f),n(" "+w(s.startorBaseInfo.formName||s.modelBaseInfo.name||"-")+" ",1),r(p)]),extra:t(()=>[]),footer:t(()=>[a("div",L,[r(e,null,{default:t(()=>[a("span",null,[n(" \u6D41\u7A0BBP\uFF1A"),r(i,null,{default:t(()=>[n("\u5F20\u4E09")]),_:1})]),a("span",null,[n(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),r(i,null,{default:t(()=>[n("\u674E\u56DB")]),_:1})])]),_:1})])]),default:t(()=>[a("div",M,[r(v,{ref:"formContainerRef"},null,512)]),a("div",q,[r(y,{ref:"approvalHistoryRef"},null,512)])]),_:1})}var $o=h(K,[["render",z]]);export{$o as default};
