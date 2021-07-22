import{_ as e}from"./TableImg.55b28cb3.js";import{f as o}from"./BasicForm.aa38e971.js";import{u as i}from"./useTable.6d63aca0.js";import{g as n,d as t}from"./account.e2578e05.js";import{P as s}from"./index.c524f834.js";import{b as a}from"./index.7e2439d5.js";import r from"./AccountModal.2465c184.js";import d from"./PasswordModal.958a9623.js";import c from"./SetGroupModal.2311ed33.js";import{c as l,s as u}from"./account.data.54aff4b6.js";import{j as m,br as p,by as f,ci as g,r as b,K as j,o as h,m as w,n as S,Q as v,Y as x}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.8a322010.js";import"./index.f9173908.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.77b911cf.js";/* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";import"./useContentViewHeight.1a732a79.js";/* empty css              */import"./group.f904087d.js";var C=m({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:r,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:p,Image:f,UserOutlined:g},setup(){const[e,{openModal:o}]=a(),[s,{openModal:r}]=a(),[d,{openModal:c}]=a(),m=b(""),p=b(!1),[f,{reload:g}]=i({title:"列表",api:n,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:m,previewImageVisible:p,previewImageHandle:function(e){e&&(m.value=e,p.value=!0)},previewImageVisibleChange:function(e,o){p.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){r(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){t([e.id]).then((e=>{g()}))},handleSuccess:function(){g()},handlePasswordSuccess:function(){g()},handleSetGroupSuccess:function(){g()}}}});const M=x(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};C.render=function(e,o,i,n,t,s){const a=j("a-button"),r=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),m=j("AccountModal"),p=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(a,{type:"primary",onClick:e.handleCreate},{default:v((()=>[M])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(r,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(p,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default C;
