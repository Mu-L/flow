import{_ as e}from"./TableImg.f7de9836.js";import{f as i}from"./BasicForm.49b9f6b2.js";import{u as o}from"./useTable.948e93a8.js";import{g as t,d as n}from"./appPrivilegeValue.adc0c2be.js";import{P as r}from"./perEnum.9a5ef72f.js";import{_ as a,c as s}from"./AppPrivilegeValueModal.76b57711.js";import{b as d}from"./index.b444bbac.js";import{A as l}from"./index.3ea445d8.js";import{j as m,K as c,o as p,m as u,n as b,Q as f,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";var x=m({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:i,AppModal:a,Authority:l},setup(){const[e,{openModal:i}]=d(),[a,{reload:l}]=o({title:"列表",api:t,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:r,registerTable:a,registerModal:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const h=j(" 新增 ");x.render=function(e,i,o,t,n,r){const a=c("a-button"),s=c("Authority"),d=c("TableAction"),l=c("BasicTable"),m=c("AppModal");return p(),u("div",null,[b(l,{onRegister:e.registerTable},{toolbar:f((()=>[b(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:f((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:f((()=>[h])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:f((({record:i})=>[b(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
