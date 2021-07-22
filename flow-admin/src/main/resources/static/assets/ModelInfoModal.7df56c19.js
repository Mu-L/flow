var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,s=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{a(t.next(e))}catch(o){i(o)}},n=e=>{try{a(t.throw(e))}catch(o){i(o)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);a((t=t.apply(e,o)).next())}));import{B as n,a}from"./index.2d1288e4.js";import{_ as d}from"./BasicForm.9dacb4c6.js";import{u as l}from"./useForm.04030879.js";import{j as m,r as p,u as c,i as u,K as f,o as b,m as j,Q as g,n as x,N as y}from"./vendor.686fd1d4.js";/* empty css              */import{s as h}from"./modelInfo.b5020234.js";import{a as v}from"./app.7020f899.js";import"./index.643db95a.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";const w=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:200,message:"字符长度不能大于200！"}]},{field:"modelKey",label:"标识",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:150,message:"字符长度不能大于150！"}]},{field:"appSn",label:"所属系统",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}];var F=m({name:"ModelInfoModal",components:{BasicModal:n,BasicForm:d},emits:["success","register"],setup(e,{emit:n}){const d=p(!0),[m,{setFieldsValue:f,updateSchema:b,resetFields:j,validate:g}]=l({labelWidth:100,schemas:w,showActionButtonGroup:!1,actionColOptions:{span:23}}),[x,{setModalProps:y,closeModal:F}]=a((e=>s(this,null,(function*(){j(),y({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);const s=yield v();b([{field:"appSn",componentProps:{options:s,labelField:"id"}}]),c(d)&&f(((e,s)=>{for(var n in s||(s={}))t.call(s,n)&&i(e,n,s[n]);if(o)for(var n of o(s))r.call(s,n)&&i(e,n,s[n]);return e})({},e.record))}))));return{registerModal:x,registerForm:m,getTitle:u((()=>c(d)?"编辑":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{y({confirmLoading:!0});const e=yield g();yield h(e),F(),n("success")}finally{y({confirmLoading:!1})}}))}}}});F.render=function(e,o,t,r,i,s){const n=f("BasicForm"),a=f("BasicModal");return b(),j(a,y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:g((()=>[x(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default F;
