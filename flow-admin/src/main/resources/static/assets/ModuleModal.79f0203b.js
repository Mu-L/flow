var e=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(r,i,t)=>i in r?e(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,o=(e,r,i)=>new Promise(((t,s)=>{var o=e=>{try{d(i.next(e))}catch(r){s(r)}},a=e=>{try{d(i.throw(e))}catch(r){s(r)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,a);d((i=i.apply(e,r)).next())}));import{B as a,a as d}from"./index.08be5da6.js";import{_ as n}from"./BasicForm.437ea19e.js";import{u as l}from"./useForm.8fc55deb.js";import{f as m,a as c,b as f}from"./module.data.bea9eecd.js";import{j as u,r as p,u as b,i as j,K as g,o as h,m as x,Q as v,n as y,N as w}from"./vendor.686fd1d4.js";import"./index.081912a1.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";var P=u({name:"ModuleModal",components:{BasicModal:a,BasicForm:n},emits:["success","register"],setup(e,{emit:a}){const n=p(!0),[u,{resetFields:g,setFieldsValue:h,updateSchema:x,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[y,{setModalProps:w,closeModal:P}]=d((e=>o(this,null,(function*(){yield g(),w({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let o=e.record;yield x([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{trigger:["change","blur"],max:64,message:"字符长度不能大于64！"},...(e={id:b(n)&&o&&o.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,i)=>i?c({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),b(n)&&h(((e,o)=>{for(var a in o||(o={}))i.call(o,a)&&s(e,a,o[a]);if(r)for(var a of r(o))t.call(o,a)&&s(e,a,o[a]);return e})({},e.record)),e.record.id?x([{field:"component",show:!1},{field:"url",show:!1}]):x([{field:"component",show:!0},{field:"url",show:!0}])}))));return{registerModal:y,registerForm:u,getTitle:j((()=>b(n)?"修改":"新增")),handleSubmit:function(){return o(this,null,(function*(){try{w({confirmLoading:!0});const e=yield v();e.status=e.status?1:0,e.showStatus=e.showStatus?1:0,yield f(e),P(),a("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,r,i,t,s,o){const a=g("BasicForm"),d=g("BasicModal");return h(),x(d,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[y(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
