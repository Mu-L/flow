import{_ as e}from"./index.ba319b32.js";import{a1 as t,b2 as n}from"./vendor.686fd1d4.js";/* empty css              */const l=[{title:"名称",dataIndex:"name",align:"left"},{title:"标识",dataIndex:"sn",width:180,align:"left"},{title:"用户",dataIndex:"users",align:"left",customRender:({record:e})=>{const l=e.users;return l&&l.map((e=>t(n,{color:"green",style:{marginRight:"5px"}},(()=>e.realName))))||[]}},{title:"备注",dataIndex:"note",align:"left"}],a=[{title:"菜单名称",dataIndex:"name",align:"left",width:150,customRender:({record:n})=>t("span",{title:n.name+"["+n.sn+"]"},[t(e,{icon:n.image}),t("span",n.name)])},{dataIndex:"pvs",align:"left",slots:{customRender:"pvs",title:"customTitle"}}],s=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],o=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:64,message:"字符长度不能大于64！"}]},{field:"sn",label:"标识",required:!0,component:"Input"},{label:"备注",field:"note",component:"InputTextArea",rules:[{max:1024,message:"字符长度不能大于1024！"}]}],d=[{field:"id",label:"ID",component:"Input",show:!1},{label:"选择用户",field:"users",slot:"users",component:"Input",labelWidth:65}],i=[{field:"id",label:"ID",component:"Input",show:!1},{field:"sn",label:"ID",required:!0,component:"Input",show:!1},{label:"",labelWidth:"0",field:"acls",slot:"acls",component:"Input"}];export{d as a,i as b,l as c,a as d,o as f,s};
