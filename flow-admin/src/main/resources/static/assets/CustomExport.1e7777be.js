import{_ as e}from"./TableImg.a57718a0.js";import"./BasicForm.437ea19e.js";import{E as o}from"./index.b964329b.js";import{c as i,d as t,j as a}from"./data.a9009431.js";import{b as s}from"./index.08be5da6.js";import{P as r}from"./index.eb6697bf.js";import{j as d,K as n,o as m,m as p,Q as c,n as f,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */var b=d({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:r},setup(){const[e,{openModal:o}]=s();return{defaultHeader:function({filename:e,bookType:o}){a({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const l=j(" 导出 ");b.render=function(e,o,i,t,a,s){const r=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModal"),b=n("PageWrapper");return m(),p(b,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(r,{onClick:e.openModal},{default:c((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default b;
