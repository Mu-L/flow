import{_ as e}from"./TableImg.01909c7a.js";import"./BasicForm.eea5fa1e.js";import{getBasicColumns as i,getBasicData as o}from"./tableData.83d6955e.js";import{j as a,r as n,K as t,o as r,m as d,n as s,Q as l,Y as p,q as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";import"./index.521cc965.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.389b283b.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";var c=a({components:{BasicTable:e},setup(){const e=n(!1),a=n(!1),t=n(!0),r=n(!0),d=n(!1);return{columns:i(),data:o(),canResize:e,loading:a,striped:t,border:r,toggleStriped:function(){t.value=!t.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){a.value=!0,setTimeout((()=>{a.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:d,handleColumnChange:function(e){}}}});const u={class:"p-4"},g=p(" 开启loading ");c.render=function(e,i,o,a,n,c){const f=t("a-button"),b=t("BasicTable");return r(),d("div",u,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination,onColumnsChange:e.handleColumnChange},{toolbar:l((()=>[s(f,{type:"primary",onClick:e.toggleCanResize},{default:l((()=>[p(m(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleBorder},{default:l((()=>[p(m(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleLoading},{default:l((()=>[g])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleStriped},{default:l((()=>[p(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])};export default c;
