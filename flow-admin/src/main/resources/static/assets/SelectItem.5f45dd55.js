import{j as e,bv as t,i as s,K as i,o as a,m as n,n as o,q as d,N as r,x as l}from"./vendor.686fd1d4.js";import{c as p}from"./index.0bb7f928.js";import{b as m}from"./index.f1f4a668.js";import"./index.44b1980a.js";/* empty css              *//* empty css              */import"./index.280d6fe3.js";import"./index.665448a2.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.da7e86b8.js";import"./useContentViewHeight.099c9658.js";/* empty css              */import"./useSortable.146ae02b.js";import"./lock.fe18ba36.js";var f=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=l()(((e,t,s,l,p,m)=>{const f=i("Select");return a(),n("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(f,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-2dba4940";export default f;
