import{_ as e}from"./BasicForm.437ea19e.js";import{ag as i,h as s}from"./index.081912a1.js";import{M as t}from"./index.9c5b7352.js";import{P as o}from"./index.eb6697bf.js";import{j as r,a1 as a,K as n,o as d,m,Q as p,n as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./index.08be5da6.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>a(t,{value:e[i],onChange:s=>{e[i]=s}})}];var f=r({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const{createMessage:e}=s();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,s,t,o,r){const a=n("BasicForm"),c=n("CollapseContainer"),f=n("PageWrapper");return d(),m(f,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[l(c,{title:"MarkDown表单"},{default:p((()=>[l(a,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
