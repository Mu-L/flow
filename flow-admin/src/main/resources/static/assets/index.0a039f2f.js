import{_ as e}from"./TableImg.fd7646bb.js";import{f as o}from"./BasicForm.5fbfb734.js";import{u as i}from"./useTable.3ae035a0.js";import{b as t}from"./index.2bb7e54d.js";import{_ as n,c as a,s}from"./PositionSeqModal.4856014e.js";import{g as r,d}from"./positionSeq.72b7fc83.js";import{h as l}from"./index.eb9d6ed9.js";import{j as c,K as m,o as p,m as f,n as u,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";const{createMessage:h}=l();var x=c({name:"PositionSeq",components:{BasicTable:e,TableAction:o,PositionSeqModal:n},setup(){const[e,{openModal:o,setModalProps:n}]=t(),[l,{reload:c}]=i({title:"列表",api:r,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:l,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1}),n({title:"新增岗位序列"})},handleEdit:function(e,i){i.stopPropagation(),o(!0,{record:e,isUpdate:!0}),n({title:"修改岗位序列"})},handleCreateChild:function(e,i){i.stopPropagation(),n({title:"新增【"+e.name+"】的子序列"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):d([e.id]).then((e=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const g=j(" 新增 ");x.render=function(e,o,i,t,n,a){const s=m("a-button"),r=m("TableAction"),d=m("BasicTable"),l=m("PositionSeqModal");return p(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(r,{actions:[{title:"添加子序列",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
