import{u as e}from"./useContextMenu.9c927229.js";import{ag as t,h as n}from"./index.643db95a.js";import{P as i}from"./index.2b3a6879.js";import{j as o,K as l,o as a,m as s,Q as r,n as c,Y as d}from"./vendor.686fd1d4.js";/* empty css              */import"./useContentViewHeight.dc5cb96c.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var p=o({components:{CollapseContainer:t,PageWrapper:i},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=d(" Right Click on me "),m=d(" Right Click on me ");p.render=function(e,t,n,i,o,d){const p=l("a-button"),b=l("CollapseContainer"),f=l("PageWrapper");return a(),s(f,{title:"右键菜单示例"},{default:r((()=>[c(b,{title:"Simple"},{default:r((()=>[c(p,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),c(b,{title:"Multiple",class:"mt-4"},{default:r((()=>[c(p,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default p;
