import{y as e,bH as t,j as i,Z as n,B as s,F as d,v as a,J as o,a0 as r,K as c}from"./vendor.880b4c6c.js";/* empty css              */import{c as l,e as p}from"./index.63ccfb82.js";import{b as f}from"./index.8fbfa3cc.js";import"./index.3bb6d2f5.js";/* empty css              *//* empty css              */import"./index.604329de.js";import"./index.5e9ed71f.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.7ee6ff1f.js";import"./useContentViewHeight.0b72030b.js";/* empty css              */import"./useSortable.7fdc4a8b.js";import"./lock.579cdda6.js";var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:n}=p();return{prefixCls:t,t:n,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,i,c,l,p)=>{const f=n("Switch");return s(),d("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(f,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-fd7354e2";export default m;
