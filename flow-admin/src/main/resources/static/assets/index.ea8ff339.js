import{u as e}from"./useContextMenu.fffc8c34.js";import{ag as t,h as n}from"./index.63ccfb82.js";import{P as i}from"./index.19a7a7bf.js";import{y as o,Z as l,B as a,F as s,a2 as r,v as c,a9 as p}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.0b72030b.js";var u=o({components:{CollapseContainer:t,PageWrapper:i},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const d=p(" Right Click on me "),m=p(" Right Click on me ");u.render=function(e,t,n,i,o,p){const u=l("a-button"),f=l("CollapseContainer"),b=l("PageWrapper");return a(),s(b,{title:"右键菜单示例"},{default:r((()=>[c(f,{title:"Simple"},{default:r((()=>[c(u,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[d])),_:1},8,["onContextmenu"])])),_:1}),c(f,{title:"Multiple",class:"mt-4"},{default:r((()=>[c(u,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default u;
