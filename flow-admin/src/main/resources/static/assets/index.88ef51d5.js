import e from"./index.3aa234c4.js";import{u as a}from"./useFrameKeepAlive.265d6b2e.js";import{j as r,a as t,u as m,r as n,I as s,i as o,K as i,o as l,m as d,n as u}from"./vendor.686fd1d4.js";import{a0 as f}from"./index.ba319b32.js";import{a as p}from"./modelInfo.19e0b918.js";import"./useWindowSizeFn.d82e06bf.js";var c=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),i=n(""),l=n({}),d=f(),u=t(),c=d.getTabList.find((e=>e.fullPath===u.currentRoute.value.fullPath));s((()=>{0!==c.meta.title.indexOf("设计流程-")&&p(r).then((e=>{c.meta.title&&-1===c.meta.title.indexOf("-"+e.name)&&(c.meta.title=c.meta.title+"-"+e.name)})).catch((()=>{}))})),i.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),b=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:b,url:i,frame:l}}});c.render=function(e,a,r,t,m,n){const s=i("FramePage");return l(),d("div",null,[u(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default c;
