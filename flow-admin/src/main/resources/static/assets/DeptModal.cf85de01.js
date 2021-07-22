var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t,a)=>new Promise(((o,l)=>{var r=e=>{try{d(a.next(e))}catch(t){l(t)}},n=e=>{try{d(a.throw(e))}catch(t){l(t)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,n);d((a=a.apply(e,t)).next())}));import{B as n,b as d,a as i}from"./index.b444bbac.js";import{_ as s}from"./BasicForm.49b9f6b2.js";import{u as c}from"./useForm.bcbbeb77.js";import{c as m,s as p}from"./dept.71c9c08e.js";import{g as u}from"./company.1faf1c56.js";import{j as f,aL as g,b2 as b,r as h,u as y,i as v,K as P,o as w,m as I,Q as x,n as S,Y as N,q as j,X as C,N as L}from"./vendor.686fd1d4.js";/* empty css              */import M from"./index.6047146b.js";const B=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",width:120,align:"left"},{title:"部门领导",dataIndex:"leaderName",width:120,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"未设置"},{title:"所属公司",dataIndex:"companyName",width:120,align:"left"},{title:"创建时间",dataIndex:"createTime",width:180}],O=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],_=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"name",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:100,message:"字符长度不能大于100！"}]},{field:"code",label:"编码",component:"Input",required:!0},{field:"leaderCode",label:"部门领导",component:"Input",slot:"settingLeader",required:!1},{field:"leaderName",label:"部门领导",component:"Input",show:!1},{field:"companyId",label:"所属公司",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"},{label:"备注",field:"note",component:"InputTextArea",rules:[{max:256,message:"字符长度不能大于256！"}]}];var q=f({name:"DeptModal",components:{BasicModal:n,BasicForm:s,PersonalSelector:M,Button:g,Tag:b},emits:["success","register"],setup(e,{emit:n}){const s=h(!0),[f,{openModal:g,setModalProps:b}]=d(),P=h([]),[w,{setFieldsValue:I,updateSchema:x,resetFields:S,validate:N}]=c({labelWidth:100,schemas:_,showActionButtonGroup:!1,actionColOptions:{span:23}}),[j,{setModalProps:C,closeModal:L}]=i((e=>r(this,null,(function*(){yield S(),C({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate);const r=yield u();let n=e.record;n.id&&n.leaderCode?P.value=[{code:n.leaderCode,name:n.leaderName}]:P.value=[],yield x([{field:"companyId",componentProps:{treeData:r}},{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:64,message:"字符长度不能大于64！"},...(e={id:y(s)&&n&&n.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(t,a)=>a?m({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),y(s)?I(((e,r)=>{for(var n in r||(r={}))a.call(r,n)&&l(e,n,r[n]);if(t)for(var n of t(r))o.call(r,n)&&l(e,n,r[n]);return e})({},e.record)):n.companyId&&I({companyId:n.companyId})}))));return{registerModal:j,registerForm:w,getTitle:v((()=>y(s)?"修改部门":"新增部门")),registerPersonalModal:f,selectedPersonList:P,handleDeleteLeader:function(){return r(this,null,(function*(){I({leaderCode:"",leaderName:""}),P.value=[]}))},handleSettingLeader:function(){g(!0,{selectorProps:{multiSelect:!1,selectedList:P.value}}),b({title:"设置部门领导",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSubmit:function(){return r(this,null,(function*(){try{C({confirmLoading:!0});const e=yield N();yield p(e),L(),n("success")}finally{C({confirmLoading:!1})}}))},handleSettingLeaderSuccess:function(e){return r(this,null,(function*(){P.value=e.map((e=>({id:e.id,code:e.code,name:e.name}))),e&&e.length>0?I({leaderCode:e[0].code,leaderName:e[0].name}):I({leaderCode:"",leaderName:""})}))}}}});const F=N("设置领导");q.render=function(e,t,a,o,l,r){const n=P("Tag"),d=P("Button"),i=P("BasicForm"),s=P("PersonalSelector"),c=P("BasicModal");return w(),I(c,L(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[S(i,{onRegister:e.registerForm},{settingLeader:x((({model:t,field:a})=>[t[a]?(w(),I(n,{key:0,closable:"",onClose:e.handleDeleteLeader},{default:x((()=>[N(j(t.leaderName)+"["+j(t[a])+"] ",1)])),_:2},1032,["onClose"])):C("",!0),S(d,{style:{width:"110px"},type:"link",onClick:e.handleSettingLeader},{default:x((()=>[F])),_:1},8,["onClick"])])),_:1},8,["onRegister"]),S(s,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingLeaderSuccess},null,8,["onRegister","onSuccess"])])),_:1},16,["onRegister","title","onOk"])};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});export{k as D,q as _,B as c,O as s};
