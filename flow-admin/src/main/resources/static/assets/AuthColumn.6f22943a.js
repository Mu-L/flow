import{_ as e}from"./TableImg.507e398b.js";import{f as t}from"./BasicForm.a98eb535.js";import{u as i}from"./useTable.54605782.js";import{d as n}from"./table.5fce85f8.js";import{j as o,K as d,o as a,m as s,n as r,Q as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";import"./index.7fecfddd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.f287750a.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";const c=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"test"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=o({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:n,columns:c,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleEdit:function(e){},handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,t,i,n,o,c){const m=d("TableAction"),f=d("BasicTable");return a(),s("div",p,[r(f,{onRegister:e.registerTable},{action:l((({record:t})=>[r(m,{actions:[{label:"编辑",onClick:e.handleEdit.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)},ifShow:e=>"enable"!==t.status},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:e.handleOpen.bind(null,t)},ifShow:()=>"enable"===t.status},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:e.handleOpen.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
