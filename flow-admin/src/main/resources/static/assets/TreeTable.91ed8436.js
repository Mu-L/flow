import{_ as e}from"./TableImg.b2cbcdc7.js";import"./BasicForm.5f023be7.js";import{u as i}from"./useTable.3d3628a5.js";import{getBasicColumns as o,getTreeTableData as s}from"./tableData.83d6955e.js";import{j as t,K as r,o as a,m as d,n,Q as p,Y as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.a5bb66b5.js";import"./index.566a0f72.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.8fb54afb.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.daf56be4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";var l=t({components:{BasicTable:e},setup(){const[e,{expandAll:t,collapseAll:r}]=i({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:o(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:t,collapseAll:r}}});const b={class:"p-4"},c=m("展开全部"),j=m("折叠全部");l.render=function(e,i,o,s,t,m){const l=r("a-button"),f=r("BasicTable");return a(),d("div",b,[n(f,{onRegister:e.register},{toolbar:p((()=>[n(l,{type:"primary",onClick:e.expandAll},{default:p((()=>[c])),_:1},8,["onClick"]),n(l,{type:"primary",onClick:e.collapseAll},{default:p((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;
