var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(e,i,r)=>new Promise(((t,o)=>{var s=e=>{try{l(r.next(e))}catch(i){o(i)}},a=e=>{try{l(r.throw(e))}catch(i){o(i)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);l((r=r.apply(e,i)).next())}));import{B as a,a as l}from"./index.2d1288e4.js";import{_ as n}from"./BasicForm.9dacb4c6.js";import{u as d}from"./useForm.04030879.js";import{k as m,l as c,m as f}from"./listener.data.ff3b8561.js";import{j as p,r as u,u as b,i as j,K as v,o as g,m as x,Q as y,n as h,N as P}from"./vendor.686fd1d4.js";import"./index.643db95a.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";var w=p({name:"ListenerPropertiesModal",components:{BasicModal:a,BasicForm:n},emits:["success","register"],setup(e,{emit:a}){const n=u(!0);let p=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],v={};p.forEach((e=>{v[e.value]=e.label}));const[g,{resetFields:x,updateSchema:y,setFieldsValue:h,validate:P}]=d({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:F,closeModal:O}]=l((e=>s(this,null,(function*(){yield x(),F({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;y({field:"value",label:v[s.type]}),yield y([{field:"type",componentProps:{options:p,onChange:e=>{y({field:"value",label:v[e.target.value]})}}},{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:b(n)&&s&&s.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(i)for(var a of i(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:w,registerForm:g,getTitle:j((()=>b(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{F({confirmLoading:!0});const e=yield P();yield f(e),O(),a("success")}finally{F({confirmLoading:!1})}}))}}}});w.render=function(e,i,r,t,o,s){const a=v("BasicForm"),l=v("BasicModal");return g(),x(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default w;
