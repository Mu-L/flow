import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.550db6bb.js";import{g as t}from"./dicType.6f685c58.js";import{j as r,r as a,I as n,K as o,o as s,m as i,n as c}from"./vendor.686fd1d4.js";import"./index.643db95a.js";import"./useContextMenu.9c927229.js";/* empty css              */var l=r({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:r}){const o=a([]);function s(){return e=this,r=null,a=function*(){o.value=yield t()},new Promise(((t,n)=>{var o=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,r)).next())}));var e,r,a}return n((()=>{s()})),{treeData:o,handleSelect:function(e,t){r("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,r,a,n,l){const m=o("BasicTree");return s(),i("div",d,[c(m,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
