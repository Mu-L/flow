var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,t,a)=>new Promise(((r,o)=>{var s=e=>{try{l(a.next(e))}catch(t){o(t)}},i=e=>{try{l(a.throw(e))}catch(t){o(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,i);l((a=a.apply(e,t)).next())}));import{B as i,a as l}from"./index.08be5da6.js";import{_ as n}from"./BasicForm.437ea19e.js";import{u as d}from"./useForm.8fc55deb.js";import{a1 as c,b2 as m,j as u,r as p,u as f,i as g,K as h,o as b,m as y,Q as w,n as x,N as v}from"./vendor.686fd1d4.js";/* empty css              */import{c as I,s as j}from"./company.ae1793a1.js";const P=[{title:"全称",dataIndex:"cname",align:"left"},{title:"编码",dataIndex:"code",align:"left",width:100},{title:"简称",dataIndex:"shortName",align:"left",width:180},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,a=t?"启用":"停用";return c(m,{color:t?"green":"red"},(()=>a))}},{title:"排序",dataIndex:"orderNo",align:"left",width:80},{title:"创建时间",dataIndex:"createTime",width:180},{title:"描述",dataIndex:"descr",align:"left"}],q=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],N=[{field:"id",label:"ID",component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"cname",label:"全称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"全称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"shortName",label:"简称",required:!1,component:"Input",rules:[{required:!0,whitespace:!0,message:"简称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"code",label:"编码",required:!0,component:"Input"},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"禁用"}},{field:"descr",label:"描述",required:!1,component:"InputTextArea",rules:[{max:200,message:"字符长度不能大于64！"}]}];var O=u({name:"CompanyModal",components:{BasicModal:i,BasicForm:n},emits:["success","register"],setup(e,{emit:i}){const n=p(!0),[c,{resetFields:m,updateSchema:u,setFieldsValue:h,validate:b}]=d({labelWidth:100,schemas:N,showActionButtonGroup:!1}),[y,{setModalProps:w,closeModal:x}]=l((e=>s(this,null,(function*(){yield m(),w({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield u([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:64,message:"字符长度不能大于64！"},...(e={id:f(n)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?I({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),f(n)&&h(((e,s)=>{for(var i in s||(s={}))a.call(s,i)&&o(e,i,s[i]);if(t)for(var i of t(s))r.call(s,i)&&o(e,i,s[i]);return e})({},e.record))}))));return{registerModal:y,registerForm:c,getTitle:g((()=>f(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{w({confirmLoading:!0});const e=yield b();e.status=e.status?1:0,yield j(e),x(),i("success")}finally{w({confirmLoading:!1})}}))}}}});O.render=function(e,t,a,r,o,s){const i=h("BasicForm"),l=h("BasicModal");return b(),y(l,v(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[x(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{F as C,O as _,P as c,q as s};
