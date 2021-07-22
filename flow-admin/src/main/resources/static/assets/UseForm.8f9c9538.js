import{_ as e}from"./BasicForm.a98eb535.js";import{u as s}from"./useForm.7ff3fa79.js";import{ag as o,h as t}from"./index.7fecfddd.js";import{P as l}from"./index.b3b6fdb5.js";import{j as a,K as i,o as n,m as r,Q as p,n as d,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./index.f287750a.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";import"./useContentViewHeight.d2763f54.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var f=a({components:{BasicForm:e,CollapseContainer:o,PageWrapper:l},setup(){const{createMessage:e}=t(),[o,{setProps:l}]=s({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:l}}});const u={class:"mb-4"},b=c(" 更改labelWidth "),P=c(" 还原labelWidth "),j=c(" 更改Size "),C=c(" 还原Size "),h=c(" 禁用表单 "),k=c(" 解除禁用 "),x=c(" 紧凑表单 "),_=c(" 还原正常间距 "),g=c(" 操作按钮位置 "),v={class:"mb-4"},B=c(" 隐藏操作按钮 "),S=c(" 显示操作按钮 "),w=c(" 隐藏重置按钮 "),W=c(" 显示重置按钮 "),F=c(" 隐藏查询按钮 "),O=c(" 显示查询按钮 "),z=c(" 修改重置按钮 "),R=c(" 修改查询按钮 ");f.render=function(e,s,o,t,l,a){const c=i("a-button"),m=i("BasicForm"),f=i("CollapseContainer"),G=i("PageWrapper");return n(),r(G,{title:"UseForm操作示例"},{default:p((()=>[d("div",u,[d(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:p((()=>[b])),_:1}),d(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:p((()=>[P])),_:1}),d(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:p((()=>[j])),_:1}),d(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:p((()=>[C])),_:1}),d(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:p((()=>[h])),_:1}),d(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:p((()=>[k])),_:1}),d(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:p((()=>[x])),_:1}),d(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:p((()=>[_])),_:1}),d(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:p((()=>[g])),_:1})]),d("div",v,[d(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:p((()=>[B])),_:1}),d(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:p((()=>[S])),_:1}),d(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:p((()=>[w])),_:1}),d(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:p((()=>[W])),_:1}),d(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:p((()=>[F])),_:1}),d(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:p((()=>[O])),_:1}),d(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:p((()=>[z])),_:1}),d(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:p((()=>[R])),_:1})]),d(f,{title:"useForm示例"},{default:p((()=>[d(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
