import{c as e}from"./index.566a0f72.js";import{b as i}from"./index.492549ad.js";import{j as s,bQ as t,K as r,o as n,m as o,V as a,ah as d,n as p}from"./vendor.686fd1d4.js";import"./index.dce607c6.js";/* empty css              *//* empty css              */import"./index.b434e3e5.js";import"./index.c0282185.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.be09ea73.js";import"./useContentViewHeight.d2889939.js";/* empty css              */import"./useSortable.daf56be4.js";import"./lock.8525fc3a.js";var c=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});c.render=function(e,i,s,t,c,l){const m=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,d(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(m)],14,["onClick"])))),128))],2)};export default c;
