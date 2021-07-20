import{_ as e}from"./TableImg.51b451b7.js";import{f as o}from"./BasicForm.e292c287.js";import{u as t}from"./useTable.d377fe38.js";import{b as n,d as i,p as a,c as d}from"./modelInfo.ff0de3fb.js";import{P as s}from"./index.2ec2ebc0.js";import r from"./FlowCategoryTree.cd7a55b1.js";import{b as l}from"./index.393263b2.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.e151af0e.js";import f from"./index.211a0172.js";import{j as b,br as u,bV as j,ay as x,b2 as g,b_ as h,r as X,J as w,u as y,k as v,l as C,K as M,at as I,w as S,o as T,m as B,x as F,n as P}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.1bdce5a2.js";import{r as _,h as R}from"./index.f769efd5.js";import{A as k}from"./index.4dc635b3.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";import"./useContentViewHeight.528cd165.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.4da3b2fa.js";import"./useContextMenu.225f05a2.js";import"./category.55e32c0a.js";/* empty css              *//* empty css              */import"./index.2fdfcb53.js";import"./index.esm.01aeab01.js";const{createMessage:O}=R();var W=b({name:"Bpmn",components:{BasicTable:e,PageWrapper:s,FlowCategoryTree:r,ModelInfoModal:c,TableAction:o,Avatar:u,Badge:j,Popconfirm:x,Tag:g,DeleteOutlined:h,Authority:k,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:s}]=l(),[r,{openModal:c,setModalProps:f}]=l();X({});const b=X({}),u=X(!1),[j,{getForm:x,reload:g}]=t({title:"列表",api:n,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function v(e){s(!0,{record:e,isUpdate:!0})}function C(e){i([e.id]).then((e=>{g()}))}function M(e){u.value=!0,a(e.modelId).then((e=>{g(),O.success("发布成功！",2)})).finally((()=>{u.value=!1}))}function I(e){u.value=!0,d(e.modelId).then((e=>{g()})).finally((()=>{u.value=!1}))}return w((()=>{const{updateSchema:e}=x();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:u,registerTable:j,registerBpmnPreviewModal:r,registerModal:o,handlePublish:M,handleStop:I,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:M.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:I.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:v.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:C.bind(null,e)}}]},handleCreate:function(){y(b).code?s(!0,{record:{categoryCode:y(b).code},isUpdate:!0}):O.warning("请选择分类！",2)},handleEdit:v,cancelDeleteRole:function(){},handleDelete:C,handleSuccess:function(){g()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){b.value=e;let o={categoryCode:e?e.code:""};g({searchInfo:o})}}}});const D=F();v("data-v-163f921b");const H=P("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," 敬请期待！ ",-1);C();const K=D(((e,o,t,n,i,a)=>{const d=M("PageWrapper"),s=I("loading");return S((T(),B(d,{dense:"",contentFullHeight:"",fixedHeight:""},{default:D((()=>[H])),_:1},512)),[[s,e.loadingRef]])}));W.render=K,W.__scopeId="data-v-163f921b";export default W;
