import{_ as e}from"./BasicForm.5f023be7.js";import{ag as i,h as t}from"./index.566a0f72.js";import{T as s}from"./index.15c5d458.js";import{P as a}from"./index.3c0dbcda.js";import{j as o,a1 as d,K as n,o as r,m,Q as p,n as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./index.8fb54afb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";import"./onMountedOrActivated.172ad1ec.js";import"./useContentViewHeight.d2889939.js";/* empty css              *//* empty css              */const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>d(s,{value:e[i],onChange:t=>{e[i]=t}})}];var f=o({components:{BasicForm:e,CollapseContainer:i,PageWrapper:a},setup(){const{createMessage:e}=t();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,s,a,o){const d=n("BasicForm"),c=n("CollapseContainer"),f=n("PageWrapper");return r(),m(f,{title:"富文本嵌入表单示例"},{default:p((()=>[l(c,{title:"富文本表单"},{default:p((()=>[l(d,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;
