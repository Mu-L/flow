import{_ as e}from"./TableImg.f7de9836.js";import{f as i}from"./BasicForm.49b9f6b2.js";import{u as t}from"./useTable.948e93a8.js";import{d as o}from"./table.e88268c1.js";import{j as n,K as d,o as a,m as s,n as r,Q as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.b444bbac.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";const c=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:i},setup(){const[e]=t({title:"TableAction组件及固定列示例",api:o,columns:c,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const b={class:"p-4"};m.render=function(e,i,t,o,n,c){const m=d("TableAction"),p=d("BasicTable");return a(),s("div",b,[r(p,{onRegister:e.registerTable},{action:l((({record:i})=>[r(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
