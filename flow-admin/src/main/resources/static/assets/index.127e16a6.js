import{b0 as t,b1 as e,b2 as a,b3 as n,ag as r}from"./index.63ccfb82.js";import{r as o,aO as s,u as i,ag as l,ad as c,y as d,Z as u,B as m,F as f,a2 as p,v as h,a9 as g}from"./vendor.880b4c6c.js";import{P as b}from"./index.19a7a7bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.0b72030b.js";const x=Symbol("watermark-dom");function k(r=o(document.body)){const d=a((function(){const t=i(r);if(!t)return;const{clientHeight:e,clientWidth:a}=t;p({height:e,width:a})})),u=x.toString(),m=s(),f=()=>{const e=i(m);m.value=void 0;const a=i(r);a&&(e&&a.removeChild(e),t(a,d))};function p(t={}){const e=i(m);e&&(n(t.width)&&(e.style.width=`${t.width}px`),n(t.height)&&(e.style.height=`${t.height}px`),n(t.str)&&(e.style.background=`url(${function(t){const e=document.createElement("canvas");Object.assign(e,{width:300,height:240});const a=e.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,15,240)),e.toDataURL("image/png")}(t.str)}) left top repeat`))}return{setWatermark:function(t){(t=>{if(i(m))return p({str:t}),u;const e=document.createElement("div");m.value=e,e.id=u,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const a=i(r);if(!a)return u;const{clientHeight:n,clientWidth:o}=a;p({str:t,width:o,height:n}),a.appendChild(e)})(t),e(document.documentElement,d),c()&&l((()=>{f()}))},clear:f}}var y=d({components:{CollapseContainer:r,PageWrapper:b},setup(){const t=o(null),{setWatermark:e,clear:a}=k();return{setWatermark:e,clear:a,areaRef:t}}});const C=g(" Create "),w=g(" Clear "),W=g(" Reset ");y.render=function(t,e,a,n,r,o){const s=u("a-button"),i=u("CollapseContainer"),l=u("PageWrapper");return m(),f(l,{title:"水印示例"},{default:p((()=>[h(i,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:p((()=>[h(s,{type:"primary",class:"mr-2",onClick:e[1]||(e[1]=e=>t.setWatermark("WaterMark Info"))},{default:p((()=>[C])),_:1}),h(s,{color:"error",class:"mr-2",onClick:t.clear},{default:p((()=>[w])),_:1},8,["onClick"]),h(s,{color:"warning",class:"mr-2",onClick:e[2]||(e[2]=e=>t.setWatermark("WaterMark Info New"))},{default:p((()=>[W])),_:1})])),_:1})])),_:1})};export default y;
