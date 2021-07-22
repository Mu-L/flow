var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,t,o)=>new Promise(((r,a)=>{var s=e=>{try{l(o.next(e))}catch(t){a(t)}},n=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);l((o=o.apply(e,t)).next())}));import{B as n,a as l}from"./index.2bb7e54d.js";import{_ as i}from"./BasicForm.5fbfb734.js";import{u as d}from"./useForm.1ee1a774.js";import{a1 as c,b2 as u,j as m,r as p,u as f,i as b,K as h,o as g,m as w,Q as y,n as v,N as x}from"./vendor.686fd1d4.js";/* empty css              */import{s as I}from"./positionSeq.72b7fc83.js";const j=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",align:"left"},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,o=t?"启用":"停用";return c(u,{color:t?"green":"red"},(()=>o))}},{title:"排序编号",dataIndex:"orderNo",width:100,align:"left"},{title:"备注",dataIndex:"note",align:"left"}],P=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],q=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"}]},{field:"code",label:"编码",required:!0,component:"Input",show:!0},{field:"pid",label:"父级编码",required:!1,component:"Input",show:!1},{field:"orderNo",label:"排序编号",required:!1,component:"InputNumber",show:!0},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"停用"}},{field:"note",label:"备注",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"字符长度不能大于255！"}]}];var O=m({name:"PositionSeqModal",components:{BasicModal:n,BasicForm:i},emits:["success","register"],setup(e,{emit:n}){const i=p(!0),[c,{resetFields:u,updateSchema:m,setFieldsValue:h,validate:g}]=d({labelWidth:100,schemas:q,showActionButtonGroup:!1}),[w,{setModalProps:y,closeModal:v}]=l((e=>s(this,null,(function*(){yield u(),y({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),e.record,f(i)&&h(((e,s)=>{for(var n in s||(s={}))o.call(s,n)&&a(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&a(e,n,s[n]);return e})({},e.record))}))));return{registerModal:w,registerForm:c,getTitle:b((()=>f(i)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{y({confirmLoading:!0});const e=yield g();e.status=e.status?1:0,yield I(e),v(),n("success")}finally{y({confirmLoading:!1})}}))}}}});O.render=function(e,t,o,r,a,s){const n=h("BasicForm"),l=h("BasicModal");return g(),w(l,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[v(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{S as P,O as _,j as c,P as s};
