import{_ as e}from"./TableImg.fd7646bb.js";import{f as o}from"./BasicForm.5fbfb734.js";import{u as i}from"./useTable.3ae035a0.js";import{c as t}from"./system.0536d2e1.js";import{u as n}from"./index.a5a7ac1b.js";import{_ as r,c as s,s as a}from"./RoleDrawer.8e2a8ad2.js";import{j as d,K as c,o as m,m as l,n as p,Q as f,Y as b}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";import"./index.eb9d6ed9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2bb7e54d.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.2783998c.js";import"./useContextMenu.1accf34c.js";var u=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:r,TableAction:o},setup(){const[e,{openDrawer:o}]=n(),[r,{reload:d}]=i({title:"角色列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=b(" 新增角色 ");u.render=function(e,o,i,t,n,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),b=c("RoleDrawer");return m(),l("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(b,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default u;
