import{D as e}from"./index.230aa949.js";import{_ as i}from"./TableImg.f7de9836.js";import"./BasicForm.49b9f6b2.js";import{u as r}from"./useTable.948e93a8.js";import{P as t}from"./index.9f071deb.js";import{j as a,aV as o,K as s,o as n,m as d,x as m,n as p}from"./vendor.686fd1d4.js";/* empty css              */import{refundSchema as c,refundData as b,personSchema as f,personData as l,refundTableData as u,refundTableSchema as j,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.a10bdb0a.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.b444bbac.js";import"./onMountedOrActivated.172ad1ec.js";import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */var h=a({components:{Description:e,BasicTable:i,PageWrapper:t,[o.name]:o},setup(){const[e]=r({title:"退货商品",dataSource:u,columns:j,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,r=0;return e.forEach((e=>{i+=e.t5,r+=e.t6})),[{t1:"总计",t5:i,t6:r}]}}),[i]=r({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:c,refundData:b,personSchema:f,personData:l}}});const T=m(),S=T(((e,i,r,t,a,o)=>{const m=s("Description"),c=s("a-divider"),b=s("BasicTable"),f=s("PageWrapper");return n(),d(f,{title:"基础详情页",contentBackground:""},{default:T((()=>[p(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),p(c),p(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),p(c),p(b,{onRegister:e.registerRefundTable},null,8,["onRegister"]),p(c),p(b,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-109959ad";export default h;
