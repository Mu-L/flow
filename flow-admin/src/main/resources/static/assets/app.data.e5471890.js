import{a1 as e,b2 as t}from"./vendor.686fd1d4.js";/* empty css              */import{_ as n}from"./index.521cc965.js";const a=[{title:"图标",dataIndex:"image",width:60,customRender:({record:t})=>e(n,{icon:t.image})},{title:"名称",dataIndex:"name",align:"left"},{title:"标识",dataIndex:"sn",width:180,align:"left"},{title:"URL",dataIndex:"url",align:"left"},{title:"首页",dataIndex:"indexUrl",width:100,align:"left"},{title:"状态",dataIndex:"status",width:80,customRender:({record:n})=>{const a=1==~~n.status,l=a?"启用":"停用";return e(t,{color:a?"green":"red"},(()=>l))}},{title:"排序",dataIndex:"orderNo",width:80},{title:"备注",dataIndex:"note",align:"left"}],l=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],s=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"sn",label:"标识",required:!0,component:"Input"},{field:"url",label:"系统URL",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"系统URL不能为空！"},{pattern:new RegExp("[a-zA-z]+://[^\\s]*"),type:"string",message:"请输入正确的URL地址！"},{max:40,message:"字符长度不能大于40！"}]},{field:"indexUrl",label:"首页URL",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"首页URL不能为空！"},{pattern:new RegExp("^\\/(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"请输入正确的URL地址！！"},{max:128,message:"字符长度不能大于128！"}]},{field:"image",label:"图标",required:!1,component:"IconPicker"},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"禁用"}},{label:"备注",field:"note",component:"InputTextArea",rules:[{max:500,message:"字符长度不能大于500！"}]}],d=[{field:"id",label:"ID",component:"Input",show:!1},{field:"sn",label:"标识",component:"Input",slot:"snSlot"},{label:"密钥",field:"secretKey",component:"InputTextArea",slot:"secretKeySlot"}];export{d as a,a as c,s as f,l as s};
