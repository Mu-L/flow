import{_ as e}from"./TableImg.c292f6c6.js";import{g as o}from"./BasicForm.8dd34761.js";import{u as i}from"./useTable.28113166.js";import{b as t}from"./index.0433a71f.js";import{_ as n,c as a,s}from"./PositionSeqModal.a82afdb8.js";import{g as r,d}from"./positionSeq.e4889417.js";import{h as l}from"./index.63ccfb82.js";import{y as c,Z as p,B as m,F as f,v as u,a2 as b,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";const{createMessage:h}=l();var g=c({name:"PositionSeq",components:{BasicTable:e,TableAction:o,PositionSeqModal:n},setup(){const[e,{openModal:o,setModalProps:n}]=t(),[l,{reload:c}]=i({title:"列表",api:r,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},isTreeTable:!0,expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:l,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1}),n({title:"新增岗位序列"})},handleEdit:function(e,i){i.stopPropagation(),o(!0,{record:e,isUpdate:!0}),n({title:"修改岗位序列"})},handleCreateChild:function(e,i){i.stopPropagation(),n({title:"新增【"+e.name+"】的子序列"}),e={pid:e.id,status:1},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):d([e.id]).then((e=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=j(" 新增 ");g.render=function(e,o,i,t,n,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),l=p("PositionSeqModal");return m(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(r,{actions:[{tooltip:"添加子序列",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
