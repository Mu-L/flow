import{B as e,_ as s}from"./BasicForm.2ed1f7b7.js";import{h as i}from"./index.5dab9bd2.js";import{u as o}from"./useForm.16917873.js";import{P as a}from"./index.e2991800.js";import{j as r,bB as n,K as t,o as d,m as p,Q as m,n as c}from"./vendor.686fd1d4.js";/* empty css              */import{u as f}from"./upload.b8eb2aa5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.98a0466e.js";/* empty css              *//* empty css              */import"./index.d939de4e.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.37bc3259.js";import"./base64Conver.bb012c73.js";import"./index.f0f47cc5.js";import"./useContentViewHeight.e8047e09.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var l=r({components:{BasicUpload:e,BasicForm:s,PageWrapper:a,[n.name]:n},setup(){const{createMessage:e}=i(),[s]=o({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:f,register:s}}});l.render=function(e,s,i,o,a,r){const n=t("a-alert"),f=t("BasicUpload"),j=t("BasicForm"),l=t("PageWrapper");return d(),p(l,{title:"上传组件示例"},{default:m((()=>[c(n,{message:"基础示例"}),c(f,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),c(n,{message:"嵌入表单,加入表单校验"}),c(j,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default l;
