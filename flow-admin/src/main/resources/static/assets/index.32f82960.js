import{_ as e}from"./BasicForm.437ea19e.js";import{u as o}from"./useForm.8fc55deb.js";import t from"./PersonTable.4b135925.js";import{P as r}from"./index.eb6697bf.js";import{j as s,b3 as n,r as i,k as a,l,K as p,o as d,m as c,x as m,n as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.081912a1.js";import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./index.08be5da6.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./TableImg.a57718a0.js";import"./onMountedOrActivated.172ad1ec.js";import"./useSortable.a0cc3f55.js";/* empty css              */import"./useTable.eeda62e8.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */const b=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:b},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:b},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:b},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:b},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var v=s({components:{BasicForm:e,PersonTable:t,PageWrapper:r,[n.name]:n},setup(){const e=i(null),[t,{validate:r}]=o({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:n}]=o({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:function(){return o=this,t=null,s=function*(){try{e.value;const[o,t]=yield Promise.all([r(),n()])}catch(o){}},new Promise(((e,r)=>{var n=e=>{try{a(s.next(e))}catch(o){r(o)}},i=e=>{try{a(s.throw(e))}catch(o){r(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,i);a((s=s.apply(o,t)).next())}));var o,t,s},tableRef:e}}});const g=m();a("data-v-3e634f2a");const h=u(" 提交 ");l();const q=g(((e,o,t,r,s,n)=>{const i=p("BasicForm"),a=p("a-card"),l=p("PersonTable"),m=p("a-button"),u=p("PageWrapper");return d(),c(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:g((()=>[f(m,{type:"primary",onClick:e.submitAll},{default:g((()=>[h])),_:1},8,["onClick"])])),default:g((()=>[f(a,{title:"仓库管理",bordered:!1},{default:g((()=>[f(i,{onRegister:e.register},null,8,["onRegister"])])),_:1}),f(a,{title:"任务管理",bordered:!1,class:"mt-5"},{default:g((()=>[f(i,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),f(a,{title:"成员管理",bordered:!1,class:"mt-5"},{default:g((()=>[f(l,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));v.render=q,v.__scopeId="data-v-3e634f2a";export default v;
