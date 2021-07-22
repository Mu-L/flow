var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,l=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&i(e,o,t[o]);if(a)for(var o of a(t))n.call(t,o)&&i(e,o,t[o]);return e},s=(e,t,o)=>new Promise(((a,r)=>{var n=e=>{try{l(o.next(e))}catch(t){r(t)}},i=e=>{try{l(o.throw(e))}catch(t){r(t)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,i);l((o=o.apply(e,t)).next())}));import{B as d,a as c}from"./index.d9d5a299.js";import{_ as p}from"./BasicForm.8c0fc6b8.js";import{u}from"./useForm.ed657ed4.js";import{b as m,a as f}from"./system.a348d5af.js";import{j as b,r as g,i as h,u as v,K as y,o as w,m as P,Q as I,n as j,N as O}from"./vendor.686fd1d4.js";const x=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],F=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],S=[{field:"account",label:"用户名",component:"Input",required:!0},{field:"pwd",label:"密码",component:"InputPassword",required:!0,ifShow:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:m,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var k=b({name:"AccountModal",components:{BasicModal:d,BasicForm:p},emits:["success","register"],setup(e,{emit:a}){const r=g(!0),n=g(""),[i,{setFieldsValue:d,updateSchema:p,resetFields:m,validate:b}]=u({labelWidth:100,schemas:S,showActionButtonGroup:!1,actionColOptions:{span:23}}),[y,{setModalProps:w,closeModal:P}]=c((e=>s(this,null,(function*(){m(),w({confirmLoading:!1}),r.value=!!(null==e?void 0:e.isUpdate),v(r)&&(n.value=e.record.id,d(l({},e.record)));const t=yield f();p([{field:"pwd",show:!v(r)},{field:"dept",componentProps:{treeData:t}}])}))));return{registerModal:y,registerForm:i,getTitle:h((()=>v(r)?"编辑账号":"新增账号")),handleSubmit:function(){return s(this,null,(function*(){try{const s=yield b();w({confirmLoading:!0}),P(),a("success",{isUpdate:v(r),values:(e=l({},s),i={id:n.value},t(e,o(i)))})}finally{w({confirmLoading:!1})}var e,i}))}}}});k.render=function(e,t,o,a,r,n){const i=y("BasicForm"),l=y("BasicModal");return w(),P(l,O(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:I((()=>[j(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});export{M as A,k as _,x as c,F as s};
