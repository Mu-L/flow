import{_ as e}from"./TableImg.01909c7a.js";import{f as o}from"./BasicForm.eea5fa1e.js";import{u as t}from"./useTable.01292fb5.js";import{b as n,d as i,p as a,c as s}from"./modelInfo.a1af244c.js";import{P as d}from"./index.ea4ee88b.js";import r from"./FlowCategoryTree.a2a2823c.js";import{b as l}from"./index.389b283b.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.fff8d16b.js";import f from"./index.37f82999.js";import{j as u,br as b,bV as j,ay as x,b2 as g,b_ as h,r as X,J as w,u as y,k as v,l as C,K as M,at as I,w as S,o as T,m as B,x as F,n as P}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.dca456aa.js";import{r as _,h as R}from"./index.521cc965.js";import{A as k}from"./index.85c048a2.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";import"./useContentViewHeight.979ee31e.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.ab3c02da.js";import"./useContextMenu.7355e9cb.js";import"./category.b60b273c.js";/* empty css              *//* empty css              */import"./index.e471e336.js";import"./index.esm.01aeab01.js";const{createMessage:O}=R();var W=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:d,FlowCategoryTree:r,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:x,Tag:g,DeleteOutlined:h,Authority:k,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:d}]=l(),[r,{openModal:c,setModalProps:f}]=l();X({});const u=X({}),b=X(!1),[j,{getForm:x,reload:g}]=t({title:"列表",api:n,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function v(e){d(!0,{record:e,isUpdate:!0})}function C(e){i([e.id]).then((e=>{g()}))}function M(e){b.value=!0,a(e.modelId).then((e=>{g(),O.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function I(e){b.value=!0,s(e.modelId).then((e=>{g()})).finally((()=>{b.value=!1}))}return w((()=>{const{updateSchema:e}=x();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:r,registerModal:o,handlePublish:M,handleStop:I,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:M.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:I.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:v.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:C.bind(null,e)}}]},handleCreate:function(){y(u).code?d(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):O.warning("请选择分类！",2)},handleEdit:v,cancelDeleteRole:function(){},handleDelete:C,handleSuccess:function(){g()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};g({searchInfo:o})}}}});const D=F();v("data-v-ff135daa");const H=P("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," 敬请期待！ ",-1);C();const K=D(((e,o,t,n,i,a)=>{const s=M("PageWrapper"),d=I("loading");return S((T(),B(s,{dense:"",contentFullHeight:"",fixedHeight:""},{default:D((()=>[H])),_:1},512)),[[d,e.loadingRef]])}));W.render=K,W.__scopeId="data-v-ff135daa";export default W;
