import{_ as e}from"./TableImg.f7de9836.js";import"./BasicForm.49b9f6b2.js";import{u as a}from"./useTable.948e93a8.js";import{P as t}from"./index.9f071deb.js";import{j as l,aV as i,b3 as d,ag as s,bn as n,cd as r,bj as o,K as u,o as m,m as b,Q as f,n as p,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{refundTimeTableSchema as _,refundTimeTableData as j}from"./data.7458c458.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.b444bbac.js";import"./onMountedOrActivated.172ad1ec.js";import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */var x=l({components:{BasicTable:e,PageWrapper:t,[i.name]:i,[d.name]:d,Empty:s,[n.name]:n,[n.Item.name]:n.Item,[r.name]:r,[r.Step.name]:r.Step,[o.name]:o,[o.TabPane.name]:o.TabPane},setup(){const[e]=a({title:"退货进度",columns:_,pagination:!1,dataSource:j,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const g=c(" 操作一 "),T=c(" 操作二 "),y=c(" 主操作 "),v={class:"pt-4 m-4 desc-wrap"},X=c(" 曲丽丽 "),h=c(" XX 服务 "),k=c(" 2017-01-10 "),w=p("a",null,"12421",-1),C=c(" 2017-07-07 ~ 2017-08-08 "),P=c(" 请于两个工作日内确认 "),S=p("div",null,"Vben",-1),B=c(),I=p("p",null,"2016-12-12 12:32",-1),z=p("p",null,"Chad",-1),F=c(" 付小小 "),V=c(" XX 32943898021309809423 "),W=c(" 3321944288191034921 "),Y=c(" 18112345678 "),E=c(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),M=c(" 111 "),R=c(" 2017-08-08 "),A=c(" 725 "),H=c(" 2017-08-08 "),K=p("h4",null,"信息组",-1),N=c(" 林东东 "),O=c(" 1234567 "),Q=c(" XX公司 - YY部 "),q=c(" 2017-08-08 "),D=c(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),G=c(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),J=c(" 付小小 "),L=c(" 1234568 ");x.render=function(e,a,t,l,i,d){const s=u("a-button"),n=u("a-tab-pane"),r=u("a-tabs"),o=u("a-descriptions-item"),c=u("a-descriptions"),_=u("a-step"),j=u("a-steps"),x=u("a-card"),U=u("a-divider"),Z=u("Empty"),$=u("BasicTable"),ee=u("PageWrapper");return m(),b(ee,{title:"单号：234231029431",contentBackground:""},{extra:f((()=>[p(s,null,{default:f((()=>[g])),_:1}),p(s,null,{default:f((()=>[T])),_:1}),p(s,{type:"primary"},{default:f((()=>[y])),_:1})])),footer:f((()=>[p(r,{"default-active-key":"1"},{default:f((()=>[p(n,{key:"1",tab:"详情"}),p(n,{key:"2",tab:"规则"})])),_:1})])),default:f((()=>[p("div",v,[p(c,{size:"small",column:2},{default:f((()=>[p(o,{label:"创建人"},{default:f((()=>[X])),_:1}),p(o,{label:"订购产品"},{default:f((()=>[h])),_:1}),p(o,{label:"创建时间"},{default:f((()=>[k])),_:1}),p(o,{label:"关联单据"},{default:f((()=>[w])),_:1}),p(o,{label:"生效日期"},{default:f((()=>[C])),_:1}),p(o,{label:"备注"},{default:f((()=>[P])),_:1})])),_:1}),p(x,{title:"流程进度",bordered:!1},{default:f((()=>[p(j,{current:1,"progress-dot":"",size:"small"},{default:f((()=>[p(_,{title:"创建项目"},{description:f((()=>[S,B,I])),_:1}),p(_,{title:"部门初审"},{description:f((()=>[z])),_:1}),p(_,{title:"财务复核"}),p(_,{title:"完成"})])),_:1})])),_:1}),p(x,{title:"用户信息",bordered:!1,class:"mt-5"},{default:f((()=>[p(c,{column:3},{default:f((()=>[p(o,{label:"用户姓名"},{default:f((()=>[F])),_:1}),p(o,{label:"会员卡号"},{default:f((()=>[V])),_:1}),p(o,{label:"身份证"},{default:f((()=>[W])),_:1}),p(o,{label:"联系方式"},{default:f((()=>[Y])),_:1}),p(o,{label:"联系地址",span:2},{default:f((()=>[E])),_:1})])),_:1}),p(c,{title:"信息组",column:3},{default:f((()=>[p(o,{label:"某某数据"},{default:f((()=>[M])),_:1}),p(o,{label:"该数据更新时间"},{default:f((()=>[R])),_:1}),p(o,{label:"某某数据"},{default:f((()=>[A])),_:1}),p(o,{label:"该数据更新时间"},{default:f((()=>[H])),_:1})])),_:1}),K,p(x,{title:"多层级信息组"},{default:f((()=>[p(c,{title:"组名称",column:3},{default:f((()=>[p(o,{label:"负责人"},{default:f((()=>[N])),_:1}),p(o,{label:"角色码"},{default:f((()=>[O])),_:1}),p(o,{label:"所属部门"},{default:f((()=>[Q])),_:1}),p(o,{label:"过期时间"},{default:f((()=>[q])),_:1}),p(o,{label:"描述",span:2},{default:f((()=>[D])),_:1})])),_:1}),p(U),p(c,{title:"组名称",column:1},{default:f((()=>[p(o,{label:"学名"},{default:f((()=>[G])),_:1})])),_:1}),p(U),p(c,{title:"组名称",column:1},{default:f((()=>[p(o,{label:"负责人"},{default:f((()=>[J])),_:1}),p(o,{label:"角色码"},{default:f((()=>[L])),_:1})])),_:1})])),_:1})])),_:1}),p(x,{title:"用户近半年来电记录",class:"my-5"},{default:f((()=>[p(Z)])),_:1}),p($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export default x;
