import{_ as e}from"./TableImg.b2cbcdc7.js";import{f as t}from"./BasicForm.5f023be7.js";import{u as o}from"./useTable.3d3628a5.js";import{g as i}from"./system.38cad8e7.js";import{P as n}from"./index.3c0dbcda.js";import s from"./DeptTree.11c87e04.js";import{b as a}from"./index.8fb54afb.js";import{_ as r,c as d,s as c}from"./AccountModal.8315afa5.js";import{j as l,K as m,o as p,m as f,Q as b,n as u,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.a5bb66b5.js";import"./index.566a0f72.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.daf56be4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";import"./useContentViewHeight.d2889939.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.cd8b2d6e.js";import"./useContextMenu.a426886d.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:n,DeptTree:s,AccountModal:r,TableAction:t},setup(){const[e,{openModal:t}]=a(),[n,{reload:s,updateTableDataRecord:r}]=o({title:"账号列表",api:i,rowKey:"id",columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){r(t.id,t)}else s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,i,n,s){const a=m("DeptTree"),r=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),f(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:b((()=>[u(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),u(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),action:b((({record:t})=>[u(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
