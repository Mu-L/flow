import{_ as e}from"./TableImg.55b28cb3.js";import"./BasicForm.aa38e971.js";import{u as o}from"./useTable.6d63aca0.js";import{getBasicColumns as t,getFormConfig as i}from"./tableData.83d6955e.js";import{d as r}from"./table.c95e3be2.js";import{j as s,K as a,o as m,m as d,Q as n,n as p,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8a322010.js";import"./index.f9173908.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.7e2439d5.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.77b911cf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";var f=s({components:{BasicTable:e},setup(){const[e,{getForm:s}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:i(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const j=c(" custom-slot "),b=c("获取表单数据");f.render=function(e,o,t,i,r,s){const c=a("a-button"),f=a("BasicTable");return m(),d(f,{onRegister:e.registerTable},{"form-custom":n((()=>[j])),toolbar:n((()=>[p(c,{type:"primary",onClick:e.getFormValues},{default:n((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default f;
