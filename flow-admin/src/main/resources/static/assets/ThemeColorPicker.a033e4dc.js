import{c as e}from"./index.521cc965.js";import{b as i}from"./index.742c524b.js";import{j as s,bQ as t,K as r,o as n,m as o,V as d,ah as p,n as a}from"./vendor.686fd1d4.js";import"./index.30873e6d.js";/* empty css              *//* empty css              */import"./index.d54d4f4e.js";import"./index.ff178832.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.79485438.js";import"./useContentViewHeight.979ee31e.js";/* empty css              */import"./useSortable.2c598b04.js";import"./lock.02a81dbd.js";var c=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});c.render=function(e,i,s,t,c,l){const m=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(d,null,p(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[a(m)],14,["onClick"])))),128))],2)};export default c;
