import{_ as e}from"./TableImg.507e398b.js";import"./BasicForm.a98eb535.js";import"./index.71480b77.js";import{c as o,d as i,a as t,b as a,e as s}from"./data.21199165.js";import{P as d}from"./index.b3b6fdb5.js";import{j as r,K as n,o as m,m as p,Q as f,n as c,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";import"./index.7fecfddd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.f287750a.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";import"./useContentViewHeight.d2763f54.js";/* empty css              *//* empty css              */var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){t({data:a,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const x=j(" 导出 ");b.render=function(e,o,i,t,a,s){const d=n("a-button"),r=n("BasicTable"),j=n("PageWrapper");return m(),p(j,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:f((()=>[c(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:f((()=>[c(d,{onClick:e.aoaToExcel},{default:f((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
