import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.ab3c02da.js";import{a as t}from"./system.ceb52c6e.js";import{j as a,r,I as n,K as s,o,m as c,n as i}from"./vendor.686fd1d4.js";import"./index.521cc965.js";import"./useContextMenu.7355e9cb.js";/* empty css              */var l=a({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const s=r([]);function o(){return e=this,a=null,r=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{c(r.next(e))}catch(t){n(t)}},o=e=>{try{c(r.throw(e))}catch(t){n(t)}},c=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);c((r=r.apply(e,a)).next())}));var e,a,r}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,a,r,n,l){const m=s("BasicTree");return o(),c("div",d,[i(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;
