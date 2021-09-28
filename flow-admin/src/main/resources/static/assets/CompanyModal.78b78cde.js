var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t,a)=>new Promise(((r,s)=>{var o=e=>{try{l(a.next(e))}catch(t){s(t)}},i=e=>{try{l(a.throw(e))}catch(t){s(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);l((a=a.apply(e,t)).next())}));import{B as n,a as d}from"./index.0433a71f.js";import{_ as c}from"./BasicForm.8dd34761.js";import{u as m}from"./useForm.ba0f60da.js";import{af as u,b5 as p,y as f,r as g,u as b,j as h,Z as y,B as v,F as w,a2 as x,v as I,a0 as j}from"./vendor.880b4c6c.js";/* empty css              */import{c as P,s as O}from"./company.b32eb009.js";const q=[{title:"全称",dataIndex:"cname",align:"left"},{title:"编码",dataIndex:"code",align:"left",width:100},{title:"简称",dataIndex:"shortName",align:"left",width:180},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,a=t?"启用":"停用";return u(p,{color:t?"green":"red"},(()=>a))}},{title:"排序",dataIndex:"orderNo",align:"left",width:80},{title:"创建时间",dataIndex:"createTime",width:180},{title:"描述",dataIndex:"descr",align:"left"}],F=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],N=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"cname",label:"全称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"全称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"shortName",label:"简称",required:!1,component:"Input",rules:[{required:!0,whitespace:!0,message:"简称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"code",label:"编码",required:!0,component:"Input"},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"禁用"}},{field:"descr",label:"描述",required:!1,component:"InputTextArea",rules:[{max:200,message:"字符长度不能大于64！"}]}];var B=f({name:"CompanyModal",components:{BasicModal:n,BasicForm:c},emits:["success","register"],setup(e,{emit:n}){const c=g(!0),[u,{resetFields:p,updateSchema:f,setFieldsValue:y,validate:v}]=m({labelWidth:100,schemas:N,showActionButtonGroup:!1}),[w,{setModalProps:x,closeModal:I}]=d((e=>l(this,null,(function*(){yield p(),x({confirmLoading:!1}),c.value=!!(null==e?void 0:e.isUpdate);let l=e.record;var n,d;yield f([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:64,message:"字符长度不能大于64！"},...(e={id:b(c)&&l&&l.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?P({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),b(c)&&y((n=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e})({},l),d={status:1===l.status},t(n,a(d))))}))));return{registerModal:w,registerForm:u,getTitle:h((()=>b(c)?"修改":"新增")),handleSubmit:function(){return l(this,null,(function*(){try{x({confirmLoading:!0});const e=yield v();e.status=e.status?1:0,yield O(e),I(),n("success")}finally{x({confirmLoading:!1})}}))}}}});B.render=function(e,t,a,r,s,o){const i=y("BasicForm"),l=y("BasicModal");return v(),w(l,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[I(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});export{M as C,B as _,q as c,F as s};
