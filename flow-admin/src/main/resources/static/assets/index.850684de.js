import{D as e}from"./index.e76a3901.js";import{_ as i}from"./TableImg.a57718a0.js";import"./BasicForm.437ea19e.js";import{u as r}from"./useTable.eeda62e8.js";import{P as t}from"./index.eb6697bf.js";import{j as a,aV as o,K as s,o as n,m as d,x as m,n as p}from"./vendor.686fd1d4.js";/* empty css              */import{refundSchema as c,refundData as f,personSchema as l,personData as u,refundTableData as j,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.3832fe34.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./useForm.8fc55deb.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08be5da6.js";import"./onMountedOrActivated.172ad1ec.js";import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */var h=a({components:{Description:e,BasicTable:i,PageWrapper:t,[o.name]:o},setup(){const[e]=r({title:"退货商品",dataSource:j,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,r=0;return e.forEach((e=>{i+=e.t5,r+=e.t6})),[{t1:"总计",t5:i,t6:r}]}}),[i]=r({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:c,refundData:f,personSchema:l,personData:u}}});const T=m(),S=T(((e,i,r,t,a,o)=>{const m=s("Description"),c=s("a-divider"),f=s("BasicTable"),l=s("PageWrapper");return n(),d(l,{title:"基础详情页",contentBackground:""},{default:T((()=>[p(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),p(c),p(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),p(c),p(f,{onRegister:e.registerRefundTable},null,8,["onRegister"]),p(c),p(f,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-109959ad";export default h;
