var e=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,i,r)=>i in a?e(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,t=(e,a,i)=>new Promise(((r,s)=>{var t=e=>{try{d(i.next(e))}catch(a){s(a)}},o=e=>{try{d(i.throw(e))}catch(a){s(a)}},d=e=>e.done?r(e.value):Promise.resolve(e.value).then(t,o);d((i=i.apply(e,a)).next())}));import{B as o,a as d}from"./index.131f7f29.js";import{_ as l}from"./BasicForm.2372b7e8.js";import{u as n}from"./useForm.61e11b2d.js";import{j as m,bZ as c,bw as p,bA as u,r as f,u as g,i as b,k as j,l as y,K as x,o as v,m as w,n as h,N as R,x as P}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import{h as F}from"./index.ba319b32.js";import{a as O}from"./account.data.54aff4b6.js";import{c as N,s as M}from"./account.a949b850.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";var U=m({name:"AccountModal",components:{BasicModal:o,BasicForm:l,PlusOutlined:c,LoadingOutlined:p,Upload:u},emits:["success","register"],setup(e,{emit:o}){const l=f(!0),m=f(""),{createMessage:c}=F(),[p,{setFieldsValue:u,updateSchema:j,resetFields:y,validate:x}]=n({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),v=e=>[{trigger:"blur",validator:(a,i)=>i?N({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[w,{setModalProps:h,closeModal:R}]=d((e=>t(this,null,(function*(){yield y(),h({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let t=e.record;yield j([{field:"username",dynamicRules:()=>[{required:!0,whitespace:!0,message:"用户名不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:30,message:"字符长度不能大于30！"},...v({id:g(l)&&t&&t.id||"",field:"username",fieldValue:"",fieldName:"用户名"})]},{field:"userNo",dynamicRules:()=>[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...v({id:g(l)&&t&&t.id||"",field:"userNo",fieldValue:"",fieldName:"工号"})]},{field:"mobile",dynamicRules:()=>[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"},...v({id:g(l)&&t&&t.id||"",field:"mobile",fieldValue:"",fieldName:"手机号"})]},{field:"email",dynamicRules:()=>[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"},...v({id:g(l)&&t&&t.id||"",field:"email",fieldValue:"",fieldName:"邮箱"})]}]),m.value=e.record.image,u(((e,t)=>{for(var o in t||(t={}))i.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))r.call(t,o)&&s(e,o,t[o]);return e})({},e.record))})))),P=b((()=>g(l)?"修改":"新增"));return{registerModal:w,registerForm:p,getTitle:P,imageUrl:m,handleSubmit:function(){return t(this,null,(function*(){try{h({confirmLoading:!0});const e=yield x();e.image=m.value,yield M(e),R(),o("success")}finally{h({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return c.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,a)=>{const i=new FileReader;i.addEventListener("load",(()=>a(i.result))),i.readAsDataURL(e)})(e,(e=>{m.value=e})),!1):(c.error("图片不能大于2MB！"),!1)}}}});const B=P();j("data-v-7499d809");const _={key:1},A=h("div",{class:"ant-upload-text"},"上传头像",-1);y();const E=B(((e,a,i,r,s,t)=>{const o=x("plus-outlined"),d=x("Upload"),l=x("BasicForm"),n=x("BasicModal");return v(),w(n,R(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:B((()=>[h(l,{onRegister:e.registerForm,class:"accountForm"},{headImg:B((({model:a,field:i})=>[h(d,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:B((()=>[e.imageUrl?(v(),w("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(v(),w("div",_,[h(o),A]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}));U.render=E,U.__scopeId="data-v-7499d809";export default U;
