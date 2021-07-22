var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,l=(e,o,a)=>new Promise(((t,r)=>{var s=e=>{try{l(a.next(e))}catch(o){r(o)}},i=e=>{try{l(a.throw(e))}catch(o){r(o)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);l((a=a.apply(e,o)).next())}));import{B as n,a as d}from"./index.131f7f29.js";import{_ as c}from"./TableImg.53dad38d.js";import{_ as u}from"./BasicForm.2372b7e8.js";import{u as m}from"./useTable.8df61517.js";import{u as p}from"./useForm.61e11b2d.js";import{b as f,d as b}from"./group.data.39618fc9.js";import{b as h}from"./account.a949b850.js";import{_ as g,g as v,s as j}from"./AclCheckboxGroup.46aa967d.js";import{j as x,bv as k,aT as C,r as S,u as A,K as y,o as T,m as I,Q as O,n as B,N as w,Y as F}from"./vendor.686fd1d4.js";/* empty css              */import{aR as M}from"./index.ba319b32.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";var P=x({name:"SetAclModal",components:{BasicModal:n,BasicTable:c,BasicForm:u,Select:k,Checkbox:C,CheckboxGroup:C.Group,AclCheckboxGroup:g},emits:["success","register"],setup(e,{emit:n}){const c=S(!0),u=S(""),g=S([]),x=S(!0),k=S(!1),C=S(!1),[y,{setFieldsValue:T,updateSchema:I,resetFields:O,validate:B}]=p({labelWidth:100,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:0}}),[w,{getDataSource:F,setTableData:P,reload:R,expandAll:_}]=m({title:"",size:"small",dataSource:g,loading:x,immediate:!1,searchInfo:{},columns:b,formConfig:{labelWidth:120},canResize:!0,maxHeight:400,isTreeTable:!0,useSearchForm:!1,showTableSetting:!1,bordered:!1,showIndexColumn:!1,pagination:!1}),[G,{setModalProps:L,closeModal:U}]=d((e=>l(this,null,(function*(){if(O(),L({confirmLoading:!1,title:"给组【"+e.record.name+"("+e.record.sn+")】设置权限"}),c.value=!!(null==e?void 0:e.isUpdate),A(c)){let n=e.record.groups||[];n=n.map((e=>e.id)),T((l=((e,o)=>{for(var a in o||(o={}))r.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))s.call(o,a)&&i(e,a,o[a]);return e})({},e.record),o(l,a({groups:n})))),u.value=e.record.id}var l;x.value=!0,v({groupId:e.record.id}).then((e=>{z(e),g.value=e,x.value=!1,setTimeout((()=>{_()}))}))}))));function z(e){let o=0,a=0,t=0;M(e,(e=>{e.pvs&&e.pvs.forEach((e=>{o++,e.flag?a++:t++}))})),a===o?(C.value=!0,k.value=!1):t===o?(C.value=!1,k.value=!1):k.value=!0}return{registerTable:w,registerModal:G,indeterminate:k,registerForm:y,checkAllBox:C,handelChangeCheckAllStatus:function(){v({groupId:u.value}).then((e=>{z(e)}))},checkAll:e=>{x.value=!0,k.value=!1,j({checked:e.target.checked?1:0,aclInfo:{releaseId:A(u)}}).then((o=>{M(g.value,(o=>{o.pvs&&o.pvs.forEach((o=>{o.flag=e.target.checked}))})),P(g.value),x.value=!1,setTimeout((()=>{_()}))})).catch((()=>{x.value=!1}))},handleSubmit:function(){return l(this,null,(function*(){try{L({confirmLoading:!0});const e=yield B();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield h(e),U(),n("success")}finally{L({confirmLoading:!1})}}))}}}});const R=F("全选");P.render=function(e,o,a,t,r,s){const i=y("Checkbox"),l=y("AclCheckboxGroup"),n=y("BasicTable"),d=y("BasicForm"),c=y("BasicModal");return T(),I(c,w(e.$attrs,{onRegister:e.registerModal,onOk:e.handleSubmit}),{default:O((()=>[B(d,{onRegister:e.registerForm},{acls:O((({model:a,field:t})=>[B(n,{value:a[t],"onUpdate:value":e=>a[t]=e,onRegister:e.registerTable},{customTitle:O((()=>[B("span",null,[B(i,{checked:e.checkAllBox,"onUpdate:checked":o[1]||(o[1]=o=>e.checkAllBox=o),indeterminate:e.indeterminate,onClick:e.checkAll},{default:O((()=>[R])),_:1},8,["checked","indeterminate","onClick"])])])),pvs:O((({record:o})=>[B(l,{onChangeCheckAllStatus:e.handelChangeCheckAllStatus,checkboxList:o.pvs.map((e=>({label:e.name,value:e.position,checked:e.flag}))),groupId:a.id,moduleSn:o.sn,moduleId:o.id},null,8,["onChangeCheckAllStatus","checkboxList","groupId","moduleSn","moduleId"])])),_:2},1032,["value","onUpdate:value","onRegister"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","onOk"])};export default P;
