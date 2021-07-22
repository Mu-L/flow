import{_ as e}from"./TableImg.507e398b.js";import{f as t}from"./BasicForm.a98eb535.js";import{u as o}from"./useTable.54605782.js";import{g as n,d as i}from"./dept.f2b4019a.js";import{P as a}from"./index.b3b6fdb5.js";import r from"./CompanyTree.375f36c7.js";import{h as s}from"./index.7fecfddd.js";import{b as d}from"./index.f287750a.js";import{_ as l,c,s as p}from"./DeptModal.ed12a6df.js";import{j as m,r as f,u,K as j,o as b,m as h,Q as x,n as g,Y as C}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";import"./useContentViewHeight.d2763f54.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.ae01db06.js";import"./useContextMenu.27a98d06.js";import"./company.87d52192.js";import"./index.ff0780ca.js";import"./personal.bca02cf0.js";import"./OrgTree.1939a8d1.js";const{createMessage:w}=s();var S=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:t},setup(){const[e,{openModal:t,setModalProps:a}]=d(),r=f({}),[s,{reload:l}]=o({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),t(!0,{record:{companyId:null==(e=u(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改部门"}),t(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?w.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const T=C("新增");S.render=function(e,t,o,n,i,a){const r=j("CompanyTree"),s=j("a-button"),d=j("TableAction"),l=j("BasicTable"),c=j("DeptModal"),p=j("PageWrapper");return b(),h(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:x((()=>[g(s,{type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])])),action:x((({record:t})=>[g(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default S;
