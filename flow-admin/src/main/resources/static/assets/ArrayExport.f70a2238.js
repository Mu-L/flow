import{_ as e}from"./TableImg.53dad38d.js";import"./BasicForm.2372b7e8.js";import"./index.12ab1f20.js";import{c as o,d as i,a as t,b as a,e as s}from"./data.6c67635b.js";import{P as d}from"./index.cbb9c5cf.js";import{j as r,K as n,o as m,m as c,Q as p,n as f,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.61e11b2d.js";import"./index.ba319b32.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.131f7f29.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";import"./useContentViewHeight.ea74a0c1.js";/* empty css              *//* empty css              */var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){t({data:a,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const x=j(" 导出 ");b.render=function(e,o,i,t,a,s){const d=n("a-button"),r=n("BasicTable"),j=n("PageWrapper");return m(),c(j,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[f(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[f(d,{onClick:e.aoaToExcel},{default:p((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
