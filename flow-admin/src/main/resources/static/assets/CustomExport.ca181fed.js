import{_ as e}from"./TableImg.3a357da5.js";import"./BasicForm.9dacb4c6.js";import{E as o}from"./index.bf85298e.js";import{c as i,d as t,j as s}from"./data.279151dd.js";import{b as a}from"./index.2d1288e4.js";import{P as d}from"./index.2b3a6879.js";import{j as r,K as n,o as m,m as p,Q as c,n as f,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";import"./index.643db95a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";import"./useContentViewHeight.dc5cb96c.js";/* empty css              *//* empty css              */var l=r({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:d},setup(){const[e,{openModal:o}]=a();return{defaultHeader:function({filename:e,bookType:o}){s({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const b=j(" 导出 ");l.render=function(e,o,i,t,s,a){const d=n("a-button"),r=n("BasicTable"),j=n("ExpExcelModal"),l=n("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(d,{onClick:e.openModal},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
