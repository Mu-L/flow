import{j as e,bF as t,i,K as n,o as s,m as d,n as a,q as o,N as r,x as l}from"./vendor.686fd1d4.js";/* empty css              */import{c as p,e as f}from"./index.ba319b32.js";import{b as c}from"./index.fe5590f5.js";import"./index.74a36caa.js";/* empty css              *//* empty css              */import"./index.d178f388.js";import"./index.3aa234c4.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.265d6b2e.js";import"./useContentViewHeight.ea74a0c1.js";/* empty css              */import"./useSortable.5cefd2fe.js";import"./lock.2f28a6a5.js";var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:n}=f();return{prefixCls:t,t:n,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const h=l()(((e,t,i,l,p,f)=>{const c=n("Switch");return s(),d("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(c,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;
