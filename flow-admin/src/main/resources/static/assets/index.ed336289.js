import{_ as e}from"./TableImg.a57718a0.js";import{f as o}from"./BasicForm.437ea19e.js";import{u as t}from"./useTable.eeda62e8.js";import{g as n,d as i}from"./app.d7074c12.js";import{c as s,s as r}from"./app.data.a577d7de.js";import a from"./AppModal.78f50bdf.js";import d from"./SecretKeyModal.6b38449f.js";import{b as c}from"./index.08be5da6.js";import{j as l,K as m,o as p,m as u,n as f,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";/* empty css              */var h=l({name:"App",components:{BasicTable:e,TableAction:o,AppModal:a,SecretKeyModal:d},setup(){const[e,{openModal:o}]=c(),[a,{openModal:d,setModalProps:l}]=c(),[m,{reload:p}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:100,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:m,registerModal:e,registerSecretKeyModal:a,handleCloseFunc:function(){return p(),Promise.resolve(!0)},handleCreate:function(){o(!0,{isUpdate:!1})},handleEditSecretKey:function(e){d(!0,{record:e,isUpdate:!0}),l({title:`修改【${e.name}】的密钥`,showOkBtn:!1,cancelText:"关闭"})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((()=>{p()}))},handleSuccess:function(){p()},handleUpdateSecretKeySuccess:function(){p()}}}});const x=j(" 新增 ");h.render=function(e,o,t,n,i,s){const r=m("a-button"),a=m("TableAction"),d=m("BasicTable"),c=m("AppModal"),l=m("SecretKeyModal");return p(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(a,{actions:[{title:"编辑密钥",icon:"ant-design:eye-outlined",onClick:e.handleEditSecretKey.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),f(l,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default h;
