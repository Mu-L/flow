import{B as b}from"./TableImg.dfdbdfe5.js";import"./useForm.4ad9ba51.js";import{u as g}from"./useTable.d768b499.js";import{P as T}from"./index.065426b6.js";import{L as B,a as k,aF as e,o as n,i as c,z as t,m as a,l as x,B as y,t as P,j as v}from"./index.54e75e3e.js";import{T as r}from"./index.2167587e.js";import{todoTableSchema as C,searchFormSchema as $}from"./data.fb00eb25.js";import I from"./ProcessHeader.8797e48d.js";import S from"./LaunchButton.480c8584.js";import{a as N,n as w}from"./process.0c905273.js";import"./index.ff0801ff.js";import"./index.be77b62f.js";import"./index.b8df24b3.js";import"./index.0ff17afb.js";import"./get.e264171e.js";import"./useWindowSizeFn.42b5da8d.js";import"./index.d4677f89.js";import"./FullscreenOutlined.88a2731c.js";import"./index.f7634222.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1624e934.js";import"./eagerComputed.e474cd0d.js";import"./scrollTo.d3985c8e.js";import"./index.5a03476b.js";import"./index.76e75e35.js";import"./index.4c5a4512.js";import"./useFlexGapSupport.f9214675.js";import"./_baseIteratee.e704fbfd.js";import"./useSize.5174038b.js";import"./index.34264968.js";import"./transButton.f88255e1.js";import"./index.39b3ae58.js";import"./useRefs.ab942c9d.js";import"./download.3e769148.js";import"./index.6193b74a.js";import"./ClockCircleOutlined.c0cc8f82.js";import"./index.4d74564a.js";import"./uniqBy.75a3f23b.js";import"./index.5c6125f6.js";import"./index.c5343d42.js";import"./useContentViewHeight.027863b0.js";import"./ArrowLeftOutlined.e237c43c.js";import"./index.24ba8bad.js";const F=k({components:{BasicTable:b,ProcessHeader:I,LaunchButton:S,PageWrapper:T,[r.name]:r,[r.TabPane.name]:r.TabPane},setup(){const[s,{getForm:p}]=g({api:N,title:"",columns:C,formConfig:{labelWidth:120,schemas:$,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return w().then(i=>{const{updateSchema:m}=p();m({field:"appSn",componentProps:{options:i}})}),{registerTodoTable:s}}}),A={class:"mt-2 desc-wrap process"};function D(s,p,i,m,R,V){const u=e("launch-button"),l=e("process-header"),d=e("router-link"),_=e("BasicTable"),f=e("PageWrapper");return n(),c(f,{title:"\u6D41\u7A0B\u4E2D\u5FC3",class:"!mt-4 process-list-container"},{extra:t(()=>[a(u)]),footer:t(()=>[a(l,{current:"todo"})]),default:t(()=>[x("div",A,[a(_,{onRegister:s.registerTodoTable},{bodyCell:t(({column:h,record:o})=>[h.key==="formName"?(n(),c(d,{key:0,to:`/process/approve/${o.processDefinitionKey}?taskId=${o.taskId}&procInstId=${o.processInstanceId}&businessKey=${o.businessKey}`},{default:t(()=>[y(P(o.formName),1)]),_:2},1032,["to"])):v("",!0)]),_:1},8,["onRegister"])])]),_:1})}var $o=B(F,[["render",D]]);export{$o as default};
