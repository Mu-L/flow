import{_ as e}from"./BasicForm.5f023be7.js";import{u as o}from"./useForm.a5bb66b5.js";import t from"./PersonTable.1cb5e5e1.js";import{P as r}from"./index.3c0dbcda.js";import{j as s,b3 as n,r as i,k as a,l,K as d,o as p,m as c,x as m,n as f,Y as b}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.566a0f72.js";import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./index.8fb54afb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";import"./TableImg.b2cbcdc7.js";import"./onMountedOrActivated.172ad1ec.js";import"./useSortable.daf56be4.js";/* empty css              */import"./useTable.3d3628a5.js";import"./useContentViewHeight.d2889939.js";/* empty css              *//* empty css              */const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var v=s({components:{BasicForm:e,PersonTable:t,PageWrapper:r,[n.name]:n},setup(){const e=i(null),[t,{validate:r}]=o({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:n}]=o({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:function(){return o=this,t=null,s=function*(){try{e.value;const[o,t]=yield Promise.all([r(),n()])}catch(o){}},new Promise(((e,r)=>{var n=e=>{try{a(s.next(e))}catch(o){r(o)}},i=e=>{try{a(s.throw(e))}catch(o){r(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,i);a((s=s.apply(o,t)).next())}));var o,t,s},tableRef:e}}});const g=m();a("data-v-3e634f2a");const h=b(" 提交 ");l();const q=g(((e,o,t,r,s,n)=>{const i=d("BasicForm"),a=d("a-card"),l=d("PersonTable"),m=d("a-button"),b=d("PageWrapper");return p(),c(b,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:g((()=>[f(m,{type:"primary",onClick:e.submitAll},{default:g((()=>[h])),_:1},8,["onClick"])])),default:g((()=>[f(a,{title:"仓库管理",bordered:!1},{default:g((()=>[f(i,{onRegister:e.register},null,8,["onRegister"])])),_:1}),f(a,{title:"任务管理",bordered:!1,class:"mt-5"},{default:g((()=>[f(i,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),f(a,{title:"成员管理",bordered:!1,class:"mt-5"},{default:g((()=>[f(l,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));v.render=q,v.__scopeId="data-v-3e634f2a";export default v;
