var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(e,i,r)=>new Promise(((t,o)=>{var s=e=>{try{n(r.next(e))}catch(i){o(i)}},a=e=>{try{n(r.throw(e))}catch(i){o(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((r=r.apply(e,i)).next())}));import{B as a,a as n}from"./index.b444bbac.js";import{_ as d}from"./BasicForm.49b9f6b2.js";import{u as l}from"./useForm.bcbbeb77.js";import{d as m,c,s as f}from"./dictionary.64d16345.js";import{j as p,r as u,u as b,i as j,K as g,o as x,m as y,Q as v,n as h,N as w}from"./vendor.686fd1d4.js";import"./index.0bb7f928.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";var P=p({name:"DictionaryItemModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[p,{setFieldsValue:g,updateSchema:x,resetFields:y,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[h,{setModalProps:w,closeModal:P}]=n((e=>s(this,null,(function*(){yield y(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield x([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"名称不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...(e={id:b(d)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(i,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(i)for(var a of i(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:h,registerForm:p,getTitle:j((()=>b(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{w({confirmLoading:!0});const e=yield v();yield f(e),P(),a("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,i,r,t,o,s){const a=g("BasicForm"),n=g("BasicModal");return x(),y(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
