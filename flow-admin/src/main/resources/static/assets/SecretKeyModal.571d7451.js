var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,a=(e,r,t)=>new Promise(((o,i)=>{var a=e=>{try{n(t.next(e))}catch(r){i(r)}},s=e=>{try{n(t.throw(e))}catch(r){i(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,s);n((t=t.apply(e,r)).next())}));import{B as s,a as n}from"./index.2d1288e4.js";import{_ as d}from"./BasicForm.9dacb4c6.js";import{u as l}from"./useForm.04030879.js";import{a as c}from"./app.data.2ae12908.js";import{r as m}from"./app.7020f899.js";import{a_ as p,h as f}from"./index.643db95a.js";import{j as u,aL as j,ad as b,bW as y,ay as v,cf as x,r as g,u as h,i as S,K as w,o as O,m as C,Q as F,n as B,Y as M,q as P,N as _}from"./vendor.686fd1d4.js";/* empty css              */import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";const{TextArea:K}=b;var R=u({name:"SecretKeyModal",components:{BasicModal:s,BasicForm:d,Button:j,Input:b,TextArea:K,Space:y,Popconfirm:v,QuestionCircleOutlined:x},emits:["success","register"],setup(e,{emit:s}){const d=g(!0),u=g(""),{createMessage:j}=f(),{clipboardRef:b,copiedRef:y}=p(),[v,{resetFields:x,updateSchema:w,setFieldsValue:O,validate:C}]=l({labelWidth:100,schemas:c,showActionButtonGroup:!1}),[F,{setModalProps:B,closeModal:M}]=n((e=>a(this,null,(function*(){yield x(),B({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let a=e.record;u.value=a.secretKey,h(d)&&O(((e,a)=>{for(var s in a||(a={}))t.call(a,s)&&i(e,s,a[s]);if(r)for(var s of r(a))o.call(a,s)&&i(e,s,a[s]);return e})({},e.record))}))));return{registerModal:F,registerForm:v,getTitle:S((()=>h(d)?"修改":"新增")),handleCopy:function(){try{const e=h(u);if(!e)return void j.warning("请重新获取密钥！");b.value=e,h(y)&&j.success("拷贝成功！")}finally{B({confirmLoading:!1})}},refreshSecretKeyHandle:function(e){return a(this,null,(function*(){try{B({confirmLoading:!0});const r=yield m(e.id);u.value=r,O({secretKey:r})}finally{B({confirmLoading:!1})}}))}}}});const L={class:""},T=M(" 获取 "),k=M(" 复制 ");R.render=function(e,r,t,o,i,a){const s=w("TextArea"),n=w("QuestionCircleOutlined"),d=w("a-button"),l=w("Popconfirm"),c=w("Space"),m=w("BasicForm"),p=w("BasicModal");return O(),C(p,_(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:F((()=>[B(m,{onRegister:e.registerForm},{snSlot:F((({model:e,field:r})=>[M(P(e[r]),1)])),secretKeySlot:F((({model:r,field:t})=>[B("div",L,[B(s,{readonly:"",rows:4,value:r[t],"onUpdate:value":e=>r[t]=e},null,8,["value","onUpdate:value"]),B(c,null,{default:F((()=>[B(l,{title:"重新获取秘钥吗？",onConfirm:t=>e.refreshSecretKeyHandle(r)},{icon:F((()=>[B(n,{style:{color:"red"}})])),default:F((()=>[B(d,null,{default:F((()=>[T])),_:1})])),_:2},1032,["onConfirm"]),B(d,{type:"primary",onClick:e.handleCopy},{default:F((()=>[k])),_:1},8,["onClick"])])),_:2},1024)])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default R;
