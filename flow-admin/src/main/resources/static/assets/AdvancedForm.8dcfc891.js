import{_ as e}from"./BasicForm.8dd34761.js";import{u as o}from"./useForm.ba0f60da.js";import{ag as l}from"./index.63ccfb82.js";import{P as n}from"./index.19a7a7bf.js";import{y as p,Z as t,B as i,F as s,a2 as a,v as r}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./index.0433a71f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.0b72030b.js";var c=p({components:{BasicForm:e,CollapseContainer:l,PageWrapper:n},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[l]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:l}}});c.render=function(e,o,l,n,p,c){const d=t("BasicForm"),m=t("CollapseContainer"),f=t("PageWrapper");return i(),s(f,{title:"可折叠表单示例"},{default:a((()=>[r(m,{title:"基础收缩示例"},{default:a((()=>[r(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),r(m,{title:"超过3行自动收起",class:"mt-4"},{default:a((()=>[r(d,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default c;
