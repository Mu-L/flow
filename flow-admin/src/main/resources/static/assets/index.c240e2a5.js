import{_ as e}from"./TableImg.fd7646bb.js";import{f as o}from"./BasicForm.5fbfb734.js";import{u as i}from"./useTable.3ae035a0.js";import{b as t}from"./index.2bb7e54d.js";import{_ as n,c as a,s as r}from"./JobGradeTypeModal.ca4b6db9.js";import{a as s,d}from"./jobGradeType.92cc60db.js";import{j as c,K as l,o as m,m as b,n as p,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";import"./index.eb9d6ed9.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=t(),[n,{reload:c}]=i({title:"列表",api:s,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const x=u(" 新增 ");j.render=function(e,o,i,t,n,a){const r=l("a-button"),s=l("TableAction"),d=l("BasicTable"),c=l("JobGradeTypeModal");return m(),b("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(r,{type:"primary",onClick:e.handleCreate},{default:f((()=>[x])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
