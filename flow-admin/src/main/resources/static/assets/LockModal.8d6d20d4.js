import{c as e,f as r,e as s}from"./index.eb9d6ed9.js";import{B as o,a}from"./index.2bb7e54d.js";import{_ as t}from"./BasicForm.5fbfb734.js";import{u as i}from"./useForm.1ee1a774.js";import{u as n}from"./lock.96b63d62.js";import{h as d}from"./header.d801b988.js";import{j as l,i as c,K as m,o as p,m as f,Q as u,n as x,q as j,Y as b,N as h}from"./vendor.686fd1d4.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var v=l({name:"LockModal",components:{BasicModal:o,BasicForm:t},setup(){const{t:o}=s(),{prefixCls:t}=e("header-lock-modal"),l=r(),m=n(),p=c((()=>{var e;return null==(e=l.getUserInfo)?void 0:e.realName})),[f,{closeModal:u}]=a(),[x,{validateFields:j,resetFields:b}]=i({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:o,prefixCls:t,getRealName:p,register:f,registerForm:x,handleLock:function(){return e=this,r=null,s=function*(){const e=(yield j()).password;u(),m.setLockInfo({isLock:!0,pwd:e}),yield b()},new Promise(((o,a)=>{var t=e=>{try{n(s.next(e))}catch(r){a(r)}},i=e=>{try{n(s.throw(e))}catch(r){a(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(t,i);n((s=s.apply(e,r)).next())}));var e,r,s},avatar:c((()=>{const{avatar:e}=l.getUserInfo;return e||d}))}}});v.render=function(e,r,s,o,a,t){const i=m("BasicForm"),n=m("a-button"),d=m("BasicModal");return p(),f(d,h({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:u((()=>[x("div",{class:`${e.prefixCls}__entry`},[x("div",{class:`${e.prefixCls}__header`},[x("img",{src:e.avatar,class:`${e.prefixCls}__header-img`},null,10,["src"]),x("p",{class:`${e.prefixCls}__header-name`},j(e.getRealName),3)],2),x(i,{onRegister:e.registerForm},null,8,["onRegister"]),x("div",{class:`${e.prefixCls}__footer`},[x(n,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:u((()=>[b(j(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default v;
