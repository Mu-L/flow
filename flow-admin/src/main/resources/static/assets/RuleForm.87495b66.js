var e=(e,o,i)=>new Promise(((l,s)=>{var r=e=>{try{a(i.next(e))}catch(o){s(o)}},t=e=>{try{a(i.throw(e))}catch(o){s(o)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(r,t);a((i=i.apply(e,o)).next())}));import{_ as o}from"./BasicForm.5f023be7.js";import{u as i}from"./useForm.a5bb66b5.js";import{ag as l,h as s}from"./index.566a0f72.js";import{P as r}from"./index.3c0dbcda.js";import{j as t,K as a,o as n,m as d,Q as c,n as p,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./index.8fb54afb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";import"./useContentViewHeight.d2889939.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"验证码",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o,i)=>e(this,null,(function*(){return i?"1"===i?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空")})),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var f=t({components:{BasicForm:o,CollapseContainer:l,PageWrapper:r},setup(){const{createMessage:o}=s(),[l,{validateFields:r,clearValidate:t,getFieldsValue:a,resetFields:n,setFieldsValue:d}]=i({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:l,schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},getFormValues:function(){const e=a();o.success("values:"+JSON.stringify(e))},setFormValues:function(){d({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})},validateForm:function(){return e(this,null,(function*(){try{yield r()}catch(e){}}))},resetValidate:function(){return e(this,null,(function*(){t()}))},resetFields:n}}});const b={class:"mb-4"},j=u(" 手动校验表单 "),v=u(" 清空校验信息 "),x=u(" 获取表单值 "),P=u(" 设置表单值 "),g=u(" 重置 ");f.render=function(e,o,i,l,s,r){const t=a("a-button"),u=a("BasicForm"),m=a("CollapseContainer"),f=a("PageWrapper");return n(),d(f,{title:"表单校验示例"},{default:c((()=>[p("div",b,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:c((()=>[v])),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:c((()=>[P])),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:c((()=>[g])),_:1},8,["onClick"])]),p(m,{title:"表单校验"},{default:c((()=>[p(u,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
