import{_ as e}from"./TableImg.51b451b7.js";import{f as o}from"./BasicForm.e292c287.js";import{u as i}from"./useTable.d377fe38.js";import{P as t}from"./index.2ec2ebc0.js";import{getBasicColumns as n}from"./tableData.83d6955e.js";import{d as r}from"./table.557dc46d.js";import{j as s,K as a,o as d,m as p,Q as l,n as c,q as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";import"./index.f769efd5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.393263b2.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";import"./useContentViewHeight.528cd165.js";/* empty css              *//* empty css              */var b=s({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:r,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});b.render=function(e,o,i,t,n,r){const s=a("TableAction"),b=a("BasicTable"),f=a("PageWrapper");return d(),p(f,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:l((()=>[c(b,{onRegister:e.registerTable},{expandedRowRender:l((({record:e})=>[c("span",null,"No: "+m(e.no),1)])),action:l((({record:o})=>[c(s,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default b;
