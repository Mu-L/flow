import{B as e,a as i}from"./index.a5a7ac1b.js";import{_ as s}from"./BasicForm.5fbfb734.js";import{u as o}from"./useForm.1ee1a774.js";import{j as r,K as t,o as n,m as d,Q as a,n as m,N as p}from"./vendor.686fd1d4.js";import"./index.eb9d6ed9.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./index.2bb7e54d.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=r({components:{BasicDrawer:e,BasicForm:s},setup(){const[e,{setFieldsValue:s}]=o({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=i((e=>{s({field2:e.data,field1:e.info})}));return{register:r,schemas:f,registerForm:e}}});c.render=function(e,i,s,o,r,f){const c=t("BasicForm"),l=t("BasicDrawer");return n(),d(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[m("div",null,[m(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;
