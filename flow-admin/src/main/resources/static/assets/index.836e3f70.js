import{_ as e}from"./TableImg.55b28cb3.js";import{f as o}from"./BasicForm.aa38e971.js";import{u as t}from"./useTable.6d63aca0.js";import{_ as i,g as n,c as a,s as r,d}from"./AreaModal.e5bd5b93.js";import{h as s}from"./index.f9173908.js";import{b as l}from"./index.7e2439d5.js";import{j as c,K as m,o as p,m as f,n as u,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8a322010.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.77b911cf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";const{createMessage:h}=s();var g=c({name:"Area",components:{BasicTable:e,TableAction:o,AreaModal:i},setup(){const[e,{openModal:o,setModalProps:i}]=l(),[s,{reload:c}]=t({title:"列表",api:n,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,isTreeTable:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:s,registerModal:e,handleCreate:function(){i({title:"新增区域"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),i({title:"修改区域"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),i({title:"新增【"+e.name+"】的子区域"}),e={pcode:e.code},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):d(e.code).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=j(" 新增 ");g.render=function(e,o,t,i,n,a){const r=m("a-button"),d=m("TableAction"),s=m("BasicTable"),l=m("AreaModal");return p(),f("div",null,[u(s,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(d,{actions:[{title:"添加子节点",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal},null,8,["onRegister"])])};export default g;
