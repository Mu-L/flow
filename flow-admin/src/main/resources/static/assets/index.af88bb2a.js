import{_ as e}from"./TableImg.fd7646bb.js";import{f as o}from"./BasicForm.5fbfb734.js";import{u as n}from"./useTable.3ae035a0.js";import{b as t,d as i,p as a,c as s}from"./modelInfo.25f79ee2.js";import{P as r}from"./index.e083521e.js";import l from"./FlowCategoryTree.5716d15f.js";import{b as d}from"./index.2bb7e54d.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.01fbe7d1.js";import f from"./index.957ec7ce.js";import{j as u,br as b,bV as j,ay as g,b2 as x,b_ as h,r as w,J as X,u as y,k as C,l as S,K as v,at as M,w as T,o as B,m as I,n as P,x as R,Y as F}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.b596e5c2.js";import{r as _,h as k}from"./index.eb9d6ed9.js";import{A as O}from"./index.07622b26.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";import"./useContentViewHeight.2141a994.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.2783998c.js";import"./useContextMenu.1accf34c.js";import"./category.de8c5b6f.js";/* empty css              *//* empty css              */import"./index.d199e23d.js";import"./index.esm.01aeab01.js";const{createMessage:W}=k();var D=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:r,FlowCategoryTree:l,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:g,Tag:x,DeleteOutlined:h,Authority:O,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:r}]=d(),[l,{openModal:c,setModalProps:f}]=d();w({});const u=w({}),b=w(!1),[j,{getForm:g,reload:x}]=n({title:"列表",api:t,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function h(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function C(e){r(!0,{record:e,isUpdate:!0})}function S(e){i([e.id]).then((e=>{x()}))}function v(e){b.value=!0,a(e.modelId).then((e=>{x(),W.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function M(e){b.value=!0,s(e.modelId).then((e=>{x()})).finally((()=>{b.value=!1}))}return X((()=>{const{updateSchema:e}=g();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:l,registerModal:o,handlePublish:v,handleStop:M,createActions:function(e,o){const{status:n}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:h.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:v.bind(null,e)},ifShow:2===n},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:M.bind(null,e)},ifShow:3===n||2===n},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:C.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:S.bind(null,e)}}]},handleCreate:function(){y(u).code?r(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):W.warning("请选择分类！",2)},handleEdit:C,cancelDeleteRole:function(){},handleDelete:S,handleSuccess:function(){x()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};x({searchInfo:o})}}}});const H=R();C("data-v-1636c3ca");const K=F(" 新增 ");S();const U=H(((e,o,n,t,i,a)=>{const s=v("FlowCategoryTree"),r=v("a-button"),l=v("TableAction"),d=v("BasicTable"),c=v("ModelInfoModal"),m=v("BpmnPreviewModal"),p=v("PageWrapper"),f=M("loading");return T((B(),I(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:H((()=>[P(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),P(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:H((()=>[P(r,{type:"primary",onClick:e.handleCreate},{default:H((()=>[K])),_:1},8,["onClick"])])),action:H((({record:o,column:n})=>[P(l,{actions:e.createActions(o,n)},null,8,["actions"])])),_:1},8,["onRegister"]),P(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),P(m,{onRegister:e.registerBpmnPreviewModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},512)),[[f,e.loadingRef]])}));D.render=U,D.__scopeId="data-v-1636c3ca";export default D;
