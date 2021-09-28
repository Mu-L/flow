import{_ as e}from"./TableImg.c292f6c6.js";import{g as o}from"./BasicForm.8dd34761.js";import{u as i}from"./useTable.28113166.js";import{a as t,d as n}from"./positionInfo.ef29d4f0.js";import{P as s}from"./index.19a7a7bf.js";import a from"./PositionSeqTree.3ac7aeac.js";import{b as r}from"./index.0433a71f.js";import{_ as d,c,s as l}from"./PositionInfoModal.f46ad307.js";import{y as f,az as m,r as p,u,Z as j,B as b,F as x,a2 as h,v as g,a9 as S}from"./vendor.880b4c6c.js";import{h as C}from"./index.63ccfb82.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0b72030b.js";import"./Tree.vue_vue&type=style&index=0&lang.c66d441a.js";import"./useContextMenu.fffc8c34.js";import"./positionSeq.e4889417.js";const{createMessage:P}=C();var w=f({name:"PositionInfo",components:{BasicTable:e,PageWrapper:s,PositionSeqTree:a,PositionInfoModal:d,TableAction:o,Popconfirm:m},setup(){const[e,{openModal:o,setModalProps:s}]=r(),a=p({}),[d,{reload:f,setProps:m}]=i({title:"列表",api:t,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function j(e){a.value=e;let o={positionSeqId:e?e.id:""};m({searchInfo:o}),f({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){u(a).id?(s({title:"新增岗位"}),o(!0,{record:{positionSeqId:u(a).id,positionSeqCode:u(a).code},isUpdate:!0})):P.warning("请选择岗位序列！",2)},handleEdit:function(e){s({title:"修改岗位"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{f()}))},handleSuccess:function(){j(a.value)},handleSelect:j}}});const I=S("新增");w.render=function(e,o,i,t,n,s){const a=j("PositionSeqTree"),r=j("a-button"),d=j("TableAction"),c=j("BasicTable"),l=j("PositionInfoModal"),f=j("PageWrapper");return b(),x(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[g(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[g(r,{type:"primary",onClick:e.handleCreate},{default:h((()=>[I])),_:1},8,["onClick"])])),action:h((({record:o})=>[g(d,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;
