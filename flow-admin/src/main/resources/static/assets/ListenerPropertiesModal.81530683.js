var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(e,i,r)=>new Promise(((t,o)=>{var a=e=>{try{l(r.next(e))}catch(i){o(i)}},s=e=>{try{l(r.throw(e))}catch(i){o(i)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);l((r=r.apply(e,i)).next())}));import{B as s,a as l}from"./index.2bb7e54d.js";import{_ as n}from"./BasicForm.5fbfb734.js";import{u as d}from"./useForm.1ee1a774.js";import{k as m,l as c,m as f}from"./listener.data.83e40af5.js";import{j as p,r as u,u as b,i as j,K as v,o as g,m as x,Q as y,n as h,N as P}from"./vendor.686fd1d4.js";import"./index.eb9d6ed9.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var w=p({name:"ListenerPropertiesModal",components:{BasicModal:s,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const n=u(!0);let p=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],v={};p.forEach((e=>{v[e.value]=e.label}));const[g,{resetFields:x,updateSchema:y,setFieldsValue:h,validate:P}]=d({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:F,closeModal:O}]=l((e=>a(this,null,(function*(){yield x(),F({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let a=e.record;y({field:"value",label:v[a.type]}),yield y([{field:"type",componentProps:{options:p,onChange:e=>{y({field:"value",label:v[e.target.value]})}}},{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:b(n)&&a&&a.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(((e,a)=>{for(var s in a||(a={}))r.call(a,s)&&o(e,s,a[s]);if(i)for(var s of i(a))t.call(a,s)&&o(e,s,a[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:g,getTitle:j((()=>b(n)?"修改":"新增")),handleSubmit:function(){return a(this,null,(function*(){try{F({confirmLoading:!0});const e=yield P();yield f(e),O(),s("success")}finally{F({confirmLoading:!1})}}))}}}});w.render=function(e,i,r,t,o,a){const s=v("BasicForm"),l=v("BasicModal");return g(),x(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[h(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
