var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,s=(e,o,r)=>new Promise(((t,i)=>{var s=e=>{try{n(r.next(e))}catch(o){i(o)}},a=e=>{try{n(r.throw(e))}catch(o){i(o)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((r=r.apply(e,o)).next())}));import{B as a,a as n}from"./index.389b283b.js";import{_ as d}from"./BasicForm.eea5fa1e.js";import{u as l}from"./useForm.7a8e214e.js";import{f as m,b as c}from"./module.data.892fd3fc.js";import{j as p,r as f,u,i as j,K as b,o as x,m as h,Q as g,n as v,N as y}from"./vendor.686fd1d4.js";import"./index.521cc965.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";var w=p({name:"ModuleModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=f(!0),[p,{resetFields:b,setFieldsValue:x,updateSchema:h,validate:g}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[v,{setModalProps:y,closeModal:w}]=n((e=>s(this,null,(function*(){b(),y({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),u(d)?(x(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&i(e,a,s[a]);if(o)for(var a of o(s))t.call(s,a)&&i(e,a,s[a]);return e})({},e.record)),h([{field:"component",show:!1},{field:"url",show:!1}])):h([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:v,registerForm:p,getTitle:j((()=>u(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{y({confirmLoading:!0});const e=yield g();yield c(e),w(),a("success")}finally{y({confirmLoading:!1})}}))}}}});w.render=function(e,o,r,t,i,s){const a=b("BasicForm"),n=b("BasicModal");return x(),h(n,y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:g((()=>[v(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
