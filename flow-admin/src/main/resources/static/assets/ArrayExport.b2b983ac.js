import{_ as e}from"./TableImg.3a357da5.js";import"./BasicForm.9dacb4c6.js";import"./index.bf85298e.js";import{c as o,d as i,a,b as t,e as s}from"./data.279151dd.js";import{P as d}from"./index.2b3a6879.js";import{j as r,K as n,o as m,m as c,Q as p,n as j,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";import"./index.643db95a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2d1288e4.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";import"./useContentViewHeight.dc5cb96c.js";/* empty css              *//* empty css              */var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){a({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const x=f(" 导出 ");b.render=function(e,o,i,a,t,s){const d=n("a-button"),r=n("BasicTable"),f=n("PageWrapper");return m(),c(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[j(d,{onClick:e.aoaToExcel},{default:p((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
