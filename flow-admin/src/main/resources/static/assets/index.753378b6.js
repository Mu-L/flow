import{j as e,bB as r,K as o,o as i,m as s,Q as n,n as t,Y as a}from"./vendor.686fd1d4.js";/* empty css              */import{u as p}from"./index.a80caf10.js";import d from"./Drawer1.5cd43eac.js";import m from"./Drawer2.65cb9299.js";import c from"./Drawer3.18e388e7.js";import f from"./Drawer4.d5b71196.js";import w from"./Drawer5.f7a0bd57.js";import{P as j}from"./index.2ec2ebc0.js";import"./index.f769efd5.js";/* empty css              */import"./BasicForm.e292c287.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              */import"./index.393263b2.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";import"./useForm.10272283.js";import"./useContentViewHeight.528cd165.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var D=e({components:{Alert:r,PageWrapper:j,Drawer1:d,Drawer2:m,Drawer3:c,Drawer4:f,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[n,{openDrawer:t}]=p(),[a,{openDrawer:d}]=p(),[m,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:n,openDrawer3:t,register4:a,register5:m,openDrawer5:c,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const l=a(" 打开Drawer "),g=a(" 打开Drawer "),u=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");D.render=function(e,r,a,p,d,m){const c=o("Alert"),f=o("a-button"),w=o("Drawer1"),j=o("Drawer2"),D=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return i(),s(C,{title:"抽屉组件使用示例"},{default:n((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:n((()=>[l])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:n((()=>[g])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:n((()=>[u])),_:1}),t(c,{message:"内外数据交互","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.send},{default:n((()=>[b])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:n((()=>[x])),_:1}),t(w,{onRegister:e.register1},null,8,["onRegister"]),t(j,{onRegister:e.register2},null,8,["onRegister"]),t(D,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default D;
