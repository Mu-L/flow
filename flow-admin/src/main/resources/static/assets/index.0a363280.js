var e=(e,t,n)=>new Promise(((o,i)=>{var r=e=>{try{a(n.next(e))}catch(t){i(t)}},s=e=>{try{a(n.throw(e))}catch(t){i(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,s);a((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.507e398b.js";import{f as n}from"./BasicForm.a98eb535.js";import{u as o}from"./useTable.54605782.js";import{g as i,c as r,s,a,b as l,d,p as c,e as p,f as u}from"./listener.data.7cd2f95e.js";import m from"./ListenerModal.6ceb9caf.js";import f from"./ListenerPropertiesModal.aca0cd46.js";import{b}from"./index.f287750a.js";import{j as h,r as g,I as j,u as y,K as x,o as v,m as T,n as P,Q as S,Y as C,q as w}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";import"./index.7fecfddd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";var M=h({name:"FlowListener",components:{BasicTable:t,TableAction:n,ListenerModal:m,ListenerPropertiesModal:f},setup(){const[t,{openModal:n,setModalProps:m}]=b(),f=g({}),h=g({}),x=g({}),v=g(!1),T=g([]),P=g({}),[S,{openModal:C,setModalProps:w}]=b(),[M,{reload:R,getForm:F,setProps:L}]=o({title:"列表",api:i,columns:r,formConfig:{labelWidth:80,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandedRowKeys:T,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,showTableSetting:!1,pagination:!1,rowKey:"id",canResize:!0,onExpand:(e,t)=>{e?(T.value=[t.id],P.value=t,E(t.id)):T.value=[]},resizeHeightOffset:-50});function E(e){v.value=!0,a({listenerId:e}).then((t=>{t&&t.length>0?f.value[e]=t:f.value[e]=[]})).finally((()=>{v.value=!1}))}return j((()=>{l().then((e=>{e.forEach((e=>{y(h)[e.value]=e.label}))}));const{updateSchema:t}=F();d().then((n=>{n.forEach((e=>{y(x)[e.value]=e.label})),t([{field:"listenerType",defaultValue:n[0].value,componentProps:{options:n,onChange:t=>e(this,[t],(function*({target:e}){const{setFieldsValue:t}=F();yield t({name:""}),L({searchInfo:{listenerType:e.value}}),R()}))}}])}))})),{registerTable:M,registerModal:t,registerPropertiesModal:S,expressionTypeObj:h,listenerTypeObj:x,propertiesColumns:c,listenerPropertiesData:f,propertiesTableLoading:v,handleDeleteProperty:function(e){u(e.id).then((()=>{E(y(P).id)})).finally((()=>{}))},handleCloseFunc:function(){return R(),Promise.resolve(!0)},handleCreate:function(){return e(this,null,(function*(){const{validate:e}=F(),t=yield e();n(!0,{isUpdate:!1,record:{listenerType:t.listenerType||"taskListener"}}),m({title:`新增${y(x)[t.listenerType]}`})}))},handleEditProperties:function(e){C(!0,{isUpdate:!0,record:e}),w({title:`修改【${e.name}】的属性`})},handleAddProperties:function(e,t){t.stopPropagation(),P.value=e,C(!0,{isUpdate:!1,record:{listenerId:e.id,type:"string"}}),w({title:`添加【${e.name}】的属性`})},handleEdit:function(e,t){t.stopPropagation(),n(!0,{record:e,isUpdate:!0})},handleDelete:function(e,t){t.stopPropagation(),p(e.id).then((()=>{R()}))},handleSuccess:function(){R()},handleUpdateSecretKeySuccess:function(){E(y(P).id),T.value=[y(P).id]}}}});const R=C(" 新增 ");M.render=function(e,t,n,o,i,r){const s=x("a-button"),a=x("TableAction"),l=x("BasicTable"),d=x("ListenerModal"),c=x("ListenerPropertiesModal");return v(),T("div",null,[P(l,{onRegister:e.registerTable,dense:"",contentFullHeight:"",fixedHeight:""},{toolbar:S((()=>[P(s,{type:"primary",onClick:e.handleCreate},{default:S((()=>[R])),_:1},8,["onClick"])])),action:S((({record:t})=>[P(a,{actions:[{icon:"ant-design:plus-outlined",title:"添加参数",onClick:e.handleAddProperties.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),typeRender:S((({record:t})=>[C(w(e.expressionTypeObj[t.type]),1)])),listenerTypeRender:S((({record:t})=>[C(w(e.listenerTypeObj[t.listenerType]),1)])),expandedRowRender:S((({record:t,index:n,indent:o,expanded:i})=>[P(l,{title:"",size:"small",columns:e.propertiesColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,emptyDataIsShowTable:!1,inset:!0,actionColumn:"{\n            align: 'center'\n          }",rowKey:"id",canResize:!1,loading:e.propertiesTableLoading,dataSource:e.listenerPropertiesData[t.id]},{action:S((({record:t})=>[P(a,{actions:[{icon:"clarity:note-edit-line",title:"编辑",onClick:e.handleEditProperties.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",popConfirm:{title:"是否确认删除",confirm:e.handleDeleteProperty.bind(null,t)}}]},null,8,["actions"])])),_:2},1032,["columns","loading","dataSource"])])),_:1},8,["onRegister"]),P(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),P(c,{onRegister:e.registerPropertiesModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default M;
