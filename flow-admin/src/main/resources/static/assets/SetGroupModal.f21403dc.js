var e=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,n=(e,o,r)=>new Promise(((t,i)=>{var s=e=>{try{n(r.next(e))}catch(o){i(o)}},a=e=>{try{n(r.throw(e))}catch(o){i(o)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((r=r.apply(e,o)).next())}));import{B as d,a as l}from"./index.08be5da6.js";import{_ as p}from"./BasicForm.437ea19e.js";import{u as c}from"./useForm.8fc55deb.js";import{b as m}from"./account.data.54aff4b6.js";import{b as u}from"./account.4bad63f0.js";import{g as f}from"./group.6a6732c8.js";import{j as b,bv as j,r as g,u as v,i as x,K as y,o as h,m as O,Q as w,n as F,N as P}from"./vendor.686fd1d4.js";import"./index.081912a1.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";var B=b({name:"AccountModal",components:{BasicModal:d,BasicForm:p,Select:j},emits:["success","register"],setup(e,{emit:d}){const p=g(!0),b=g([]),j=g("设置组"),[y,{setFieldsValue:h,updateSchema:O,resetFields:w,validate:F}]=c({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[P,{setModalProps:B,closeModal:M}]=l((e=>n(this,null,(function*(){w(),B({confirmLoading:!1,title:"给账号【"+e.record.realName+"("+e.record.username+")】设置组"}),p.value=!!(null==e?void 0:e.isUpdate);const n=yield f();if(n.forEach((e=>{e.label=e.name,e.value=e.id})),b.value=n,v(p)){let n=e.record.groups||[];n=n.map((e=>e.id)),h((d=((e,o)=>{for(var r in o||(o={}))i.call(o,r)&&a(e,r,o[r]);if(t)for(var r of t(o))s.call(o,r)&&a(e,r,o[r]);return e})({},e.record),o(d,r({groups:n}))))}var d}))));return{registerModal:P,registerForm:y,getTitle:x((()=>v(p)?j.value:"新增")),groupOptions:b,handleSubmit:function(){return n(this,null,(function*(){try{B({confirmLoading:!0});const e=yield F();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield u(e),M(),d("success")}finally{B({confirmLoading:!1})}}))}}}});B.render=function(e,o,r,t,i,s){const a=y("Select"),n=y("BasicForm"),d=y("BasicModal");return h(),O(d,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[F(n,{onRegister:e.registerForm},{groups:w((({model:o,field:r})=>[F(a,{value:o[r],"onUpdate:value":e=>o[r]=e,mode:"multiple",style:{width:"100%"},placeholder:"请选择组","option-label-prop":"label",options:e.groupOptions},null,8,["value","onUpdate:value","options"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default B;
