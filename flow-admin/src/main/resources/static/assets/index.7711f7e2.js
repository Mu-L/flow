import{j as e,bB as o,K as i,o as r,m as s,Q as n,n as a,Y as d}from"./vendor.686fd1d4.js";/* empty css              */import{b as t}from"./index.7e2439d5.js";import p from"./Modal1.04b2935e.js";import l from"./Modal2.67ae4efe.js";import m from"./Modal3.d8a98747.js";import c from"./Modal4.f01e72dd.js";import{P as f}from"./index.c524f834.js";import"./index.f9173908.js";import"./useWindowSizeFn.d82e06bf.js";import"./BasicForm.aa38e971.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";import"./useForm.8a322010.js";import"./useContentViewHeight.1a732a79.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var j=e({components:{Alert:o,Modal1:p,Modal2:l,Modal3:m,Modal4:c,PageWrapper:f},setup(){const[e,{openModal:o}]=t(),[i,{openModal:r}]=t(),[s,{openModal:n}]=t(),[a,{openModal:d}]=t();return{register1:e,openModal1:o,register2:i,openModal2:r,register3:s,openModal3:n,register4:a,openModal4:d,send:function(){d(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(!0)}}}});const g=d(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) "),M=d(" 打开弹窗 "),u=d(" 打开弹窗 "),x=d(" 打开弹窗并传递数据 ");j.render=function(e,o,d,t,p,l){const m=i("Alert"),c=i("a-button"),f=i("Modal1"),j=i("Modal2"),b=i("Modal3"),y=i("Modal4"),C=i("PageWrapper");return r(),s(C,{title:"modal组件使用示例"},{default:n((()=>[a(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:n((()=>[g])),_:1},8,["onClick"]),a(m,{message:"内外同时同时显示隐藏","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:n((()=>[M])),_:1},8,["onClick"]),a(m,{message:"自适应高度","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:n((()=>[u])),_:1},8,["onClick"]),a(m,{message:"内外数据交互","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:e.send},{default:n((()=>[x])),_:1},8,["onClick"]),a(f,{onRegister:e.register1,minHeight:100},null,8,["onRegister"]),a(j,{onRegister:e.register2},null,8,["onRegister"]),a(b,{onRegister:e.register3},null,8,["onRegister"]),a(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default j;
