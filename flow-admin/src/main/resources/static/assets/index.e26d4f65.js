import{_ as e}from"./TableImg.51b451b7.js";import{f as o}from"./BasicForm.e292c287.js";import{u as t}from"./useTable.d377fe38.js";import{b as n}from"./index.393263b2.js";import{_ as i,g as r,c as s,s as a,d}from"./LoginLogModal.3f50805f.js";import{h as l}from"./index.f769efd5.js";import{P as c}from"./perEnum.9a5ef72f.js";import{A as m}from"./index.4dc635b3.js";import{j as u,K as f,o as p,m as b,n as j,Q as h,Y as g}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=l(),[i,{openModal:m}]=n(),[u,{reload:f,getSelectRows:p}]=t({title:"列表",api:r,columns:s,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:c,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{f()}))},handleDeleteAll:function(){const t=p();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{f()}))},new Promise(((t,i)=>{var r=e=>{try{a(n.next(e))}catch(o){i(o)}},s=e=>{try{a(n.throw(e))}catch(o){i(o)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,s);a((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){f()}}}});const v=g(" 删除 ");x.render=function(e,o,t,n,i,r){const s=f("a-button"),a=f("Authority"),d=f("TableAction"),l=f("BasicTable"),c=f("LoginLogModal");return p(),b("div",null,[j(l,{onRegister:e.registerTable},{toolbar:h((()=>[j(a,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:h((()=>[j(s,{type:"danger",onClick:e.handleDeleteAll},{default:h((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:h((({record:o})=>[j(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
