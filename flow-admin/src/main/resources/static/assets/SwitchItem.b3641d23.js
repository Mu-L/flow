import{j as e,bF as t,i,K as d,o as n,m as s,n as a,q as o,N as r,x as l}from"./vendor.686fd1d4.js";/* empty css              */import{c as p,e as f}from"./index.7fecfddd.js";import{b as c}from"./index.8a7ce98a.js";import"./index.943a48a4.js";/* empty css              *//* empty css              */import"./index.608a72a0.js";import"./index.d3fffd33.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.a820d434.js";import"./useContentViewHeight.d2763f54.js";/* empty css              */import"./useSortable.dc62f82e.js";import"./lock.a6eaee00.js";var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:d}=f();return{prefixCls:t,t:d,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const h=l()(((e,t,i,l,p,f)=>{const c=d("Switch");return n(),s("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(c,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;
