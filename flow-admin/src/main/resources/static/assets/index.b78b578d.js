import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.b3cfc306.js";import{t}from"./data.5e96733f.js";import{P as a}from"./index.9f071deb.js";import{j as r,K as s,o as n,m as i,Q as o,n as d}from"./vendor.686fd1d4.js";import"./index.0bb7f928.js";import"./useContextMenu.7d6ce859.js";/* empty css              */import"./useContentViewHeight.099c9658.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var c=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,handleCheck:function(e,t){}})});const l={class:"flex"};c.render=function(e,t,a,r,c,p){const f=s("BasicTree"),m=s("PageWrapper");return n(),i(m,{title:"Tree基础示例"},{default:o((()=>[d("div",l,[d(f,{treeData:e.treeData,title:"基础示例，默认展开第一层",defaultExpandLevel:"1",class:"w-1/3"},null,8,["treeData"]),d(f,{treeData:e.treeData,title:"可勾选，默认全部展开",checkable:!0,class:"w-1/3 mx-4",defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),d(f,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default c;
