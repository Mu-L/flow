import{_ as e}from"./TableImg.a57718a0.js";import{f as i}from"./BasicForm.437ea19e.js";import{u as o}from"./useTable.eeda62e8.js";import{d as n}from"./system.f5b69d22.js";import{u as t}from"./index.e6724ba9.js";import{_ as r,c as s,s as a}from"./MenuDrawer.abca65be.js";import{j as d,K as c,o as m,m as l,n as p,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08be5da6.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";/* empty css              */var b=d({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:r,TableAction:i},setup(){const[e,{openDrawer:i}]=t(),[r,{reload:d}]=o({title:"菜单列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:a},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增菜单 ");b.render=function(e,i,o,n,t,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("MenuDrawer");return m(),l("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:i})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
