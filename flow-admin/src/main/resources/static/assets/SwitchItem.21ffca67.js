import{j as e,bF as t,i,K as n,o as s,m as d,n as a,q as o,N as r,x as l}from"./vendor.686fd1d4.js";/* empty css              */import{c as p,e as f}from"./index.f9173908.js";import{b as m}from"./index.3a7fe7e0.js";import"./index.8d19647b.js";/* empty css              *//* empty css              */import"./index.55abb400.js";import"./index.5a2454ef.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.e47eafb1.js";import"./useContentViewHeight.1a732a79.js";/* empty css              */import"./useSortable.77b911cf.js";import"./lock.ffb7c980.js";var c=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:n}=f();return{prefixCls:t,t:n,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const h=l()(((e,t,i,l,p,f)=>{const m=n("Switch");return s(),d("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(m,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));c.render=h,c.__scopeId="data-v-fd7354e2";export default c;
