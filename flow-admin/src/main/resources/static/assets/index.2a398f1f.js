import{_ as e}from"./TableImg.53dad38d.js";import{f as o}from"./BasicForm.2372b7e8.js";import{u as i}from"./useTable.8df61517.js";import{_ as n,g as t,c as s,s as d,d as r}from"./SystemConfigModal.906e295a.js";import{b as a}from"./index.131f7f29.js";import{j as c,K as l,o as m,m as f,n as p,Q as u,Y as b}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.61e11b2d.js";import"./index.ba319b32.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";var j=c({name:"SystemConfig",components:{BasicTable:e,TableAction:o,SystemConfigModal:n},setup(){const[e,{openModal:o}]=a(),[n,{reload:c}]=i({title:"列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:d,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e){e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=b(" 新增 ");j.render=function(e,o,i,n,t,s){const d=l("a-button"),r=l("TableAction"),a=l("BasicTable"),c=l("SystemConfigModal");return m(),f("div",null,[p(a,{onRegister:e.registerTable},{toolbar:u((()=>[p(d,{type:"primary",onClick:e.handleCreate},{default:u((()=>[x])),_:1},8,["onClick"])])),action:u((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
