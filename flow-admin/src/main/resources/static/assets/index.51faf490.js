import{j as a,bv as e,r as s,k as t,l as o,K as n,o as i,m as l,n as r,a4 as d,w as c,v as p,x as v,Y as u}from"./vendor.686fd1d4.js";import{P as S}from"./index.9f071deb.js";import{aD as m,aE as f,aF as T,aG as x,aH as R,aI as X,aJ as b,aK as j,aL as Y,aM as w,aN as h,aO as E,aP as F}from"./index.0bb7f928.js";import"./useContentViewHeight.099c9658.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const _=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var k=a({components:{Select:e,PageWrapper:S,FadeTransition:m,ScaleTransition:f,SlideYTransition:T,ScrollYTransition:x,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:b,ScrollXTransition:j,SlideXReverseTransition:Y,ScrollXReverseTransition:w,ScaleRotateTransition:h,ExpandXTransition:E,ExpandTransition:F},setup(){const a=s("Fade"),e=s(!0);return{options:_,value:a,start:function(){e.value=!1,setTimeout((()=>{e.value=!0}),300)},show:e}}});const y=v();t("data-v-37ea4062");const P={class:"flex"},g=u(" start "),C={class:"box"};o();const W=y(((a,e,s,t,o,v)=>{const u=n("Select"),S=n("a-button"),m=n("PageWrapper");return i(),l(m,{title:"动画组件示例"},{default:y((()=>[r("div",P,[r(u,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(S,{type:"primary",class:"ml-4",onClick:a.start},{default:y((()=>[g])),_:1},8,["onClick"])]),(i(),l(d(`${a.value}Transition`),null,{default:y((()=>[c(r("div",C,null,512),[[p,a.show]])])),_:1}))])),_:1})}));k.render=W,k.__scopeId="data-v-37ea4062";export default k;
