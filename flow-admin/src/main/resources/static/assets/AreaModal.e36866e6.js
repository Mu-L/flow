var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,o=(e,a,t)=>new Promise(((r,s)=>{var o=e=>{try{l(t.next(e))}catch(a){s(a)}},i=e=>{try{l(t.throw(e))}catch(a){s(a)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);l((t=t.apply(e,a)).next())}));import{B as i,a as l}from"./index.d939de4e.js";import{_ as n}from"./BasicForm.2ed1f7b7.js";import{u as d}from"./useForm.16917873.js";import{aw as c,b3 as m,aR as p}from"./index.5dab9bd2.js";import{j as u,r as f,u as g,i as h,K as b,o as y,m as v,Q as w,n as x,N as P}from"./vendor.686fd1d4.js";const j=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",width:100,align:"left"},{title:"创建时间",dataIndex:"createTime",width:180}],O=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],A=[{field:"pcode",label:"pcode",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:20,message:"字符长度不能大于20！"}]},{field:"code",label:"编码",required:!0,component:"Input"}];var B,E;(E=B||(B={})).GetAreas="/flow/base/area/getAreas",E.SaveOrUpdate="/flow/base/area/saveOrUpdate",E.Delete="/flow/base/area/delete",E.GetAreasByPcode="/flow/base/area/getAreasByPcode",E.CheckEntityExist="/flow/base/area/checkEntityExist";const F=e=>{const a=c.post({url:B.GetAreas,params:e});return Promise.resolve(a).then((e=>{const a=m(e,{id:"code",children:"children",pid:"pcode"});return p(a,(e=>{0===e.children.length&&delete e.children}),{id:"code",children:"children",pid:"pcode"}),a}))},I=e=>c.post({url:B.Delete+"/",params:e});var M=u({name:"AreaModal",components:{BasicModal:i,BasicForm:n},emits:["success","register"],setup(e,{emit:i}){const n=f(!0),[m,{resetFields:p,updateSchema:u,setFieldsValue:b,validate:y}]=d({labelWidth:100,schemas:A,showActionButtonGroup:!1}),v=e=>[{trigger:"blur",validator:(a,t)=>t?(e=>c.post({url:B.CheckEntityExist,params:e}))({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[w,{setModalProps:x,closeModal:P,changeLoading:j}]=l((e=>o(this,null,(function*(){yield p(),x({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let o=e.record;yield u([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:10,message:"字符长度不能大于10！"},...v({id:g(n)&&o&&o.code||"",field:"code",fieldValue:"",fieldName:"标识"})]}]),g(n)&&b(((e,o)=>{for(var i in o||(o={}))t.call(o,i)&&s(e,i,o[i]);if(a)for(var i of a(o))r.call(o,i)&&s(e,i,o[i]);return e})({},e.record))}))));return{registerModal:w,registerForm:m,getTitle:h((()=>g(n)?"修改":"新增")),handleSubmit:function(){return o(this,null,(function*(){j(!0);try{x({confirmLoading:!0});const a=yield y();yield(e=a,c.post({url:B.SaveOrUpdate,params:e})),P(),i("success")}finally{x({confirmLoading:!1}),j(!1)}var e}))}}}});M.render=function(e,a,t,r,s,o){const i=b("BasicForm"),l=b("BasicModal");return y(),v(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[x(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{S as A,M as _,j as c,I as d,F as g,O as s};
