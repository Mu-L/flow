import{_ as e}from"./TableImg.55b28cb3.js";import"./BasicForm.aa38e971.js";import"./index.2d732c49.js";import{c as i,d as a,j as o}from"./data.680902d2.js";import{P as t}from"./index.c524f834.js";import{j as d,K as s,o as r,m as n,Q as m,n as c,Y as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8a322010.js";import"./index.f9173908.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.7e2439d5.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.77b911cf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";import"./useContentViewHeight.1a732a79.js";/* empty css              *//* empty css              */var f=d({components:{BasicTable:e,PageWrapper:t},setup:()=>({defaultHeader:function(){o({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const j=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");f.render=function(e,i,a,o,t,d){const p=s("a-button"),f=s("BasicTable"),l=s("PageWrapper");return r(),n(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;
