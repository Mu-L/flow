import{j as e,aJ as t,r as a,I as n,K as r,at as o,w as i,o as s,m as l,n as d}from"./vendor.686fd1d4.js";import{_ as c}from"./Tree.vue_vue&type=style&index=0&lang.1da13907.js";import{b4 as u}from"./index.081912a1.js";import{g as m}from"./jobGradeType.d63935a3.js";import"./useContextMenu.d993d7fe.js";/* empty css              */var p=e({name:"JobGradeTypeList",components:{BasicTree:c,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),o=a(!1);function i(){return e=this,t=null,a=function*(){o.value=!0,m().then((e=>{r.value=e})).finally((()=>{o.value=!1}))},new Promise(((n,r)=>{var o=e=>{try{s(a.next(e))}catch(t){r(t)}},i=e=>{try{s(a.throw(e))}catch(t){r(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{i()})),{treeData:r,treeLoading:o,handleSelect:function(e,a){const n=u(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const v={class:"bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,n,c,u){const m=r("BasicTree"),p=o("loading");return i((s(),l("div",v,[d(m,{title:"职级分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
