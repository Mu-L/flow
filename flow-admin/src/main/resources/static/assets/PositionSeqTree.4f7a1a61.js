import{j as e,aJ as t,r as a,I as n,K as r,at as i,w as o,o as s,m as l,n as c}from"./vendor.686fd1d4.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.2783998c.js";import{b4 as u}from"./index.eb9d6ed9.js";import{g as m}from"./positionSeq.72b7fc83.js";import"./useContextMenu.1accf34c.js";/* empty css              */var p=e({name:"PositionSeqTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),i=a(!1);function o(){return e=this,t=null,a=function*(){i.value=!0,m().then((e=>{r.value=e})).finally((()=>{i.value=!1}))},new Promise(((n,r)=>{var i=e=>{try{s(a.next(e))}catch(t){r(t)}},o=e=>{try{s(a.throw(e))}catch(t){r(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,o);s((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{o()})),{treeData:r,treeLoading:i,handleSelect:function(e,a){const n=u(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const f={class:"bg-white m-4 mr-0 overflow-hidden"};p.render=function(e,t,a,n,d,u){const m=r("BasicTree"),p=i("loading");return o((s(),l("div",f,[c(m,{title:"岗位序列",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default p;
