import{_ as e}from"./TableImg.51b451b7.js";import{f as o}from"./BasicForm.e292c287.js";import{u as i}from"./useTable.d377fe38.js";import{b as t}from"./index.393263b2.js";import{_ as n,c as r,s as a}from"./JobGradeTypeModal.7073ba64.js";import{a as s,d}from"./jobGradeType.332b958a.js";import{j as l,K as c,o as m,m as p,n as b,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";import"./index.f769efd5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";var j=l({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=t(),[n,{reload:l}]=i({title:"列表",api:s,columns:r,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{l()}))},handleSuccess:function(){l()}}}});const x=u(" 新增 ");j.render=function(e,o,i,t,n,r){const a=c("a-button"),s=c("TableAction"),d=c("BasicTable"),l=c("JobGradeTypeModal");return m(),p("div",null,[b(d,{onRegister:e.registerTable},{toolbar:f((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:f((()=>[x])),_:1},8,["onClick"])])),action:f((({record:o})=>[b(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
