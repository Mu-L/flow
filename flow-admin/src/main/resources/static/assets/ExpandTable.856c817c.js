import{_ as e}from"./TableImg.a57718a0.js";import{f as o}from"./BasicForm.437ea19e.js";import{u as i}from"./useTable.eeda62e8.js";import{P as t}from"./index.eb6697bf.js";import{getBasicColumns as n}from"./tableData.83d6955e.js";import{d as a}from"./table.5a110fbb.js";import{j as r,K as s,o as d,m as p,Q as l,n as m,q as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08be5da6.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */var b=r({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:a,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});b.render=function(e,o,i,t,n,a){const r=s("TableAction"),b=s("BasicTable"),f=s("PageWrapper");return d(),p(f,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:l((()=>[m(b,{onRegister:e.registerTable},{expandedRowRender:l((({record:e})=>[m("span",null,"No: "+c(e.no),1)])),action:l((({record:o})=>[m(r,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default b;
