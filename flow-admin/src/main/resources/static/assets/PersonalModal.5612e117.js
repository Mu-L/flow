var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&l(e,s,r[s]);if(a)for(var s of a(r))o.call(r,s)&&l(e,s,r[s]);return e},s=(e,a,t)=>new Promise(((o,l)=>{var r=e=>{try{n(t.next(e))}catch(a){l(a)}},s=e=>{try{n(t.throw(e))}catch(a){l(a)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);n((t=t.apply(e,a)).next())}));import{B as n,a as d}from"./index.b444bbac.js";import{_ as i}from"./BasicForm.49b9f6b2.js";import{u as p}from"./useForm.bcbbeb77.js";import{a1 as c,b2 as m,j as u,bZ as f,bw as g,bA as b,r as y,u as h,i as P,k as I,l as v,K as w,o as x,m as j,n as R,N as F,x as N}from"./vendor.686fd1d4.js";/* empty css              */import{aB as C,aQ as O,h as _}from"./index.0bb7f928.js";import{g as B}from"./dept.71c9c08e.js";import{g as k}from"./company.1faf1c56.js";import{c as D,e as M}from"./personal.d9bb19c1.js";/* empty css              *//* empty css              */import{a as S}from"./jobGrade.a906400d.js";import{g as q}from"./positionInfo.1a6314ca.js";const T=[{title:"姓名",dataIndex:"name",width:120,align:"left",slots:{customRender:"nameRender"}},{title:"工号",dataIndex:"code",width:100,align:"left"},{title:"状态",dataIndex:"status",width:60,customRender:({record:e})=>{const a=1==~~e.status,t=a?"在职":"离职";return c(m,{color:a?"green":"red"},(()=>t))}},{title:"邮箱",dataIndex:"email",width:120,align:"left"},{title:"手机",dataIndex:"mobile",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"上级领导",dataIndex:"leaderName",width:140,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"未设置"},{title:"角色",dataIndex:"roles",width:300,align:"left",slots:{customRender:"rolesRender"}},{title:"离职日期",dataIndex:"leaveDate",width:100,customRender:({text:e})=>e?C(e):""},{title:"创建时间",dataIndex:"createTime",width:130,customRender:({text:e})=>e?O(e):""}],U=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入姓名/工号/手机/邮箱"},labelWidth:60,colProps:{span:8,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],G=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"姓名",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"姓名不能为空！"},{max:20,message:"字符长度不能大于20！"}]},{field:"code",label:"工号",component:"Input",required:!0,colProps:{span:9}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: -100px;",span:8}},{field:"sex",label:"性别",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"男",value:1},{label:"女",value:2}]}},{field:"jobGradeCode",label:"职级",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"positionCode",label:"岗位",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"companyId",label:"所属公司",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"deptId",label:"所属部门",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"name",replaceFields:{title:"name",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{label:"手机",field:"mobile",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"}]},{label:"邮箱",field:"email",component:"Input",colProps:{span:9},rules:[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"}]},{field:"status",label:"在职状态",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"在职",value:1},{label:"离职",value:0}]}},{label:"地址",field:"address",component:"InputTextArea",rules:[{max:400,message:"字符长度不能大于400！"}]}];var L=u({name:"PersonalModal",components:{BasicModal:n,BasicForm:i,PlusOutlined:f,LoadingOutlined:g,Upload:b},emits:["success","register"],setup(e,{emit:a}){const t=y(!0),o=y(""),{createMessage:l}=_(),[n,{setFieldsValue:i,updateSchema:c,resetFields:m,validate:u}]=p({labelWidth:100,schemas:G,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:g,closeModal:b,changeLoading:I}]=d((e=>s(this,null,(function*(){I(!0),m(),g({confirmLoading:!1}),t.value=!!(null==e?void 0:e.isUpdate);const a=yield k(),l=yield S(),s=yield q();let n=e.record;if(yield c([{field:"jobGradeCode",componentProps:{treeData:l}},{field:"positionCode",componentProps:{treeData:s}},{field:"companyId",componentProps:{treeData:a,onChange:e=>{c([{field:"deptId",componentProps:{treeData:[]}}]),i({deptId:""}),e&&B({companyId:e}).then((e=>{c([{field:"deptId",componentProps:{treeData:e}}])}))}}},{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...(e={id:h(t)&&n&&n.id||"",field:"code",fieldValue:"",fieldName:"工号"},[{trigger:"blur",validator:(a,t)=>t?D({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(t)){const a=yield B({companyId:e.record.companyId});c([{field:"deptId",componentProps:{treeData:a}}]),i(r({},e.record)),o.value=e.record.headImg}else{if(n.companyId){const e=yield B({companyId:n.companyId});c([{field:"deptId",componentProps:{treeData:e}}]),i(r({},n))}o.value=""}I(!1)})))),v=P((()=>h(t)?"编辑":"新增"));return{registerModal:f,registerForm:n,getTitle:v,imageUrl:o,handleSubmit:function(){return s(this,null,(function*(){try{g({confirmLoading:!0});const e=yield u();e.headImg=o.value,yield M(e),b(),a("success")}finally{g({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return l.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,a)=>{const t=new FileReader;t.addEventListener("load",(()=>a(t.result))),t.readAsDataURL(e)})(e,(e=>{o.value=e})),!1):(l.error("图片不能大于2MB！"),!1)}}}});const $=N();I("data-v-5c4a674c");const A={key:1},E=R("div",{class:"ant-upload-text"},"上传头像",-1);v();const V=$(((e,a,t,o,l,r)=>{const s=w("plus-outlined"),n=w("Upload"),d=w("BasicForm"),i=w("BasicModal");return x(),j(i,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:$((()=>[R(d,{onRegister:e.registerForm,class:"personalForm"},{headImg:$((({model:a,field:t})=>[R(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:$((()=>[e.imageUrl?(x(),j("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(x(),j("div",A,[R(s),E]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}));L.render=V,L.__scopeId="data-v-5c4a674c";var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{z as P,L as _,T as c,U as s};
