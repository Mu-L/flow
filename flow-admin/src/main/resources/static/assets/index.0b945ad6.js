import{ag as e}from"./index.0bb7f928.js";import{j as t,r as l,be as o,K as r,o as n,m as s,Q as i,n as a,Y as c,q as d}from"./vendor.686fd1d4.js";import{P as u}from"./index.9f071deb.js";import"./useContentViewHeight.099c9658.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var m=t({components:{CollapseContainer:e,PageWrapper:u},setup(){const e=l(null),{enter:t,toggle:r,exit:n,isFullscreen:s}=o(),{toggle:i}=o(e);return{enter:t,toggleDom:i,toggle:r,isFullscreen:s,exit:n,domRef:e}}});const f=c(" Enter Window Full Screen "),g=c(" Toggle Window Full Screen "),p=c(" Exit Window Full Screen "),C=c(" Enter Dom Full Screen "),w={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},x=c(" Exit Dom Full Screen ");m.render=function(e,t,l,o,u,m){const F=r("a-button"),b=r("CollapseContainer"),j=r("PageWrapper");return n(),s(j,{title:"全屏示例"},{default:i((()=>[a(b,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:i((()=>[a(F,{type:"primary",onClick:e.enter,class:"mr-2"},{default:i((()=>[f])),_:1},8,["onClick"]),a(F,{color:"success",onClick:e.toggle,class:"mr-2"},{default:i((()=>[g])),_:1},8,["onClick"]),a(F,{color:"error",onClick:e.exit,class:"mr-2"},{default:i((()=>[p])),_:1},8,["onClick"]),c(" Current State: "+d(e.isFullscreen),1)])),_:1}),a(b,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:i((()=>[a(F,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:i((()=>[C])),_:1},8,["onClick"])])),_:1}),a("div",w,[a(F,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:i((()=>[x])),_:1},8,["onClick"])],512)])),_:1})};export default m;
