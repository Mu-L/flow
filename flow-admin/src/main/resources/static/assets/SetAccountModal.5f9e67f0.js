var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,n=(e,o,t)=>new Promise(((r,i)=>{var s=e=>{try{n(t.next(e))}catch(o){i(o)}},a=e=>{try{n(t.throw(e))}catch(o){i(o)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((t=t.apply(e,o)).next())}));import{B as d,a as l}from"./index.2d1288e4.js";import{_ as c}from"./BasicForm.9dacb4c6.js";import{u as p}from"./useForm.04030879.js";import{a as m}from"./group.data.28115059.js";import{e as u}from"./account.08a01eaa.js";import{b as f}from"./group.3c2f8c62.js";import{j as b,bv as j,r as v,u as g,i as x,K as y,o as h,m as O,Q as w,n as F,N as P}from"./vendor.686fd1d4.js";import"./index.643db95a.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";var S=b({name:"SetAccountModal",components:{BasicModal:d,BasicForm:c,Select:j},emits:["success","register"],setup(e,{emit:d}){const c=v(!0),b=v([]),[j,{setFieldsValue:y,updateSchema:h,resetFields:O,validate:w}]=p({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[F,{setModalProps:P,closeModal:S}]=l((e=>n(this,null,(function*(){O(),P({confirmLoading:!1,title:"给组【"+e.record.name+"("+e.record.sn+")】分配用户"}),c.value=!!(null==e?void 0:e.isUpdate);const n=yield u();if(n.forEach((e=>{e.label=e.realName+"("+e.username+")",e.value=e.id})),b.value=n,g(c)){let n=e.record.users||[];n=n.map((e=>e.id)),y((d=((e,o)=>{for(var t in o||(o={}))i.call(o,t)&&a(e,t,o[t]);if(r)for(var t of r(o))s.call(o,t)&&a(e,t,o[t]);return e})({},e.record),o(d,t({users:n}))))}var d}))));return{registerModal:F,registerForm:j,getTitle:x((()=>g(c)?"修改":"新增")),accountOptions:b,handleSubmit:function(){return n(this,null,(function*(){try{P({confirmLoading:!0});const e=yield w();e.users=e.users.map((e=>({id:e}))),e.groupId=e.id,delete e.id,yield f(e),S(),d("success")}finally{P({confirmLoading:!1})}}))}}}});S.render=function(e,o,t,r,i,s){const a=y("Select"),n=y("BasicForm"),d=y("BasicModal");return h(),O(d,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[F(n,{onRegister:e.registerForm},{users:w((({model:o,field:t})=>[F(a,{value:o[t],"onUpdate:value":e=>o[t]=e,mode:"multiple",style:{width:"100%"},placeholder:"请选择用户","option-label-prop":"label",options:e.accountOptions},null,8,["value","onUpdate:value","options"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default S;
