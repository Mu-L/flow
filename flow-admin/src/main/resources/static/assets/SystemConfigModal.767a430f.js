var e,t,a=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,o=(e,t,a)=>new Promise(((i,s)=>{var r=e=>{try{o(a.next(e))}catch(t){s(t)}},l=e=>{try{o(a.throw(e))}catch(t){s(t)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,l);o((a=a.apply(e,t)).next())}));import{B as n,a as d}from"./index.8fb54afb.js";import{_ as m}from"./BasicForm.5f023be7.js";import{u as f}from"./useForm.a5bb66b5.js";import{aw as c}from"./index.566a0f72.js";import{j as p,r as u,u as g,i as y,K as b,o as h,m as x,Q as w,n as v,N as S}from"./vendor.686fd1d4.js";(t=e||(e={})).SystemConfigPageList="/flow/base/systemConfig/getPagerModel",t.SaveOrUpdate="/flow/base/systemConfig/saveOrUpdate",t.Delete="/flow/base/systemConfig/delete",t.CheckEntityExist="/flow/base/systemConfig/checkEntityExist";const I=t=>{const a=t&&{pageNum:t.pageNum,pageSize:t.pageSize};let i=t||{};i&&(delete i.pageNum,delete i.pageSize);const s={query:a,entity:i};return c.post({url:e.SystemConfigPageList,params:s})},P=t=>c.post({url:e.Delete,params:t}),O=[{title:"名称",dataIndex:"configName",align:"left"},{title:"标识",dataIndex:"configSn",width:100,align:"left"},{title:"配置Key",dataIndex:"configKey",width:100,align:"left"},{title:"配置Value",dataIndex:"configValue",align:"left"},{title:"备注",dataIndex:"remark",align:"left"},{title:"排序",dataIndex:"configOrder",width:80},{title:"创建时间",dataIndex:"createTime",width:180}],j=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],N=[{field:"id",label:"ID",component:"Input",show:!1},{field:"configName",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:30,message:"字符长度不能大于30！"}]},{field:"configSn",label:"标识",required:!0,component:"Input"},{field:"configKey",label:"配置Key",required:!0,component:"Input"},{field:"configValue",label:"配置Value",component:"Input",rules:[{max:100,message:"字符长度不能大于100！"}]},{field:"configOrder",label:"排序号",required:!1,component:"InputNumber"},{field:"remark",label:"描述",required:!1,component:"InputTextArea",rules:[{max:80,message:"字符长度不能大于80！"}]}];var q=p({name:"SystemConfigModal",components:{BasicModal:n,BasicForm:m},emits:["success","register"],setup(t,{emit:a}){const n=u(!0),[m,{resetFields:p,updateSchema:b,setFieldsValue:h,validate:x}]=f({labelWidth:100,schemas:N,showActionButtonGroup:!1}),w=t=>[{trigger:"blur",validator:(a,i)=>i?(t=>c.post({url:e.CheckEntityExist,params:t}))({id:t.id,field:t.field,fieldValue:i,fieldName:t.fieldName}).then((e=>e?Promise.resolve():Promise.reject(t.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[v,{setModalProps:S,closeModal:I}]=d((e=>o(this,null,(function*(){yield p(),S({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let t=e.record;yield b([{field:"configSn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:60,message:"字符长度不能大于60！"},...w({id:g(n)&&t&&t.id||"",field:"configSn",fieldValue:"",fieldName:"标识"})]},{field:"configKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"配置Key不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:30,message:"字符长度不能大于30！"},...w({id:g(n)&&t&&t.id||"",field:"configKey",fieldValue:"",fieldName:"配置Key"})]}]),g(n)&&h(((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(i)for(var a of i(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e.record))}))));return{registerModal:v,registerForm:m,getTitle:y((()=>g(n)?"修改":"新增")),handleSubmit:function(){return o(this,null,(function*(){try{S({confirmLoading:!0});const i=yield x();yield(t=i,c.post({url:e.SaveOrUpdate,params:t})),I(),a("success")}finally{S({confirmLoading:!1})}var t}))}}}});q.render=function(e,t,a,i,s,r){const l=b("BasicForm"),o=b("BasicModal");return h(),x(o,S(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[v(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});export{C as S,q as _,O as c,P as d,I as g,j as s};
