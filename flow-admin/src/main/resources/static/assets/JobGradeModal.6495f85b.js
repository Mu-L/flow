var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t,r)=>new Promise(((o,a)=>{var s=e=>{try{l(r.next(e))}catch(t){a(t)}},i=e=>{try{l(r.throw(e))}catch(t){a(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,i);l((r=r.apply(e,t)).next())}));import{B as i,a as l}from"./index.d939de4e.js";import{_ as n}from"./BasicForm.2ed1f7b7.js";import{u as d}from"./useForm.16917873.js";import{c,s as m}from"./jobGrade.27128786.js";import{j as u,r as p,u as f,i as g,K as b,o as h,m as y,Q as v,n as w,N as j}from"./vendor.686fd1d4.js";const I=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",align:"left"},{title:"排序号",dataIndex:"orderNo",width:60,align:"left"}],P=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],x=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"}]},{field:"code",label:"编码",required:!0,component:"Input",show:!0},{field:"typeId",label:"类型ID",required:!1,component:"Input",show:!1},{field:"typeCode",label:"类别编码",required:!1,component:"Input",show:!1},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber",show:!0}];var O=u({name:"JobGradeModal",components:{BasicModal:i,BasicForm:n},emits:["success","register"],setup(e,{emit:i}){const n=p(!0),[u,{resetFields:b,updateSchema:h,setFieldsValue:y,validate:v}]=d({labelWidth:100,schemas:x,showActionButtonGroup:!1}),[w,{setModalProps:j,closeModal:I}]=l((e=>s(this,null,(function*(){yield b(),j({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield h([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:40,message:"字符长度不能大于40！"},...(e={id:f(n)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(t,r)=>r?c({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),f(n)&&y(((e,s)=>{for(var i in s||(s={}))r.call(s,i)&&a(e,i,s[i]);if(t)for(var i of t(s))o.call(s,i)&&a(e,i,s[i]);return e})({},e.record))}))));return{registerModal:w,registerForm:u,getTitle:g((()=>f(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{j({confirmLoading:!0});const e=yield v();yield m(e),I(),i("success")}finally{j({confirmLoading:!1})}}))}}}});O.render=function(e,t,r,o,a,s){const i=b("BasicForm"),l=b("BasicModal");return h(),y(l,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{q as J,O as _,I as c,P as s};
