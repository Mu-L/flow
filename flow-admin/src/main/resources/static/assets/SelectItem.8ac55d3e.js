import{j as e,bv as t,i as s,K as a,o as i,m as n,n as o,q as d,N as r,x as l}from"./vendor.686fd1d4.js";import{c as p}from"./index.ba319b32.js";import{b as m}from"./index.fe5590f5.js";import"./index.74a36caa.js";/* empty css              *//* empty css              */import"./index.d178f388.js";import"./index.3aa234c4.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.265d6b2e.js";import"./useContentViewHeight.ea74a0c1.js";/* empty css              */import"./useSortable.5cefd2fe.js";import"./lock.2f28a6a5.js";var f=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=l()(((e,t,s,l,p,m)=>{const f=a("Select");return i(),n("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(f,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-2dba4940";export default f;
