import{B as u}from"./TableImg.bc479f0e.js";import"./useForm.61a9a859.js";import{u as d}from"./useTable.ae9e3c85.js";import{P as f}from"./index.1b5d0750.js";import{L as _,a as T,aF as i,o as m,f as b,m as h,z as p,i as g,B,t as k,j as y}from"./index.f3fe0f3f.js";import{T as t}from"./index.f8e018fb.js";import{todoTableSchema as v,searchFormSchema as $}from"./data.c2b4f70f.js";import x from"./ProcessHeader.66d0c5d0.js";import C from"./LaunchButton.9e1515d6.js";import{a as I,c as P}from"./process.023768c5.js";import"./index.73c18e7d.js";import"./index.34bbe3a9.js";import"./index.0db522c7.js";import"./index.5c6ad28f.js";import"./get.ac77a413.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./index.033bc9aa.js";import"./FullscreenOutlined.a1ca65d7.js";import"./index.78295ba6.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.523ef589.js";import"./eagerComputed.cc2dc322.js";import"./scrollTo.87072542.js";import"./index.bc06cf2e.js";import"./index.aeb627bf.js";import"./index.00811394.js";import"./useFlexGapSupport.396b27be.js";import"./_baseIteratee.0c18463b.js";import"./useSize.5ce57631.js";import"./index.a027b304.js";import"./transButton.b11946f6.js";import"./index.be9b0bc6.js";import"./useRefs.e4782df1.js";import"./download.63b4aeaf.js";import"./index.0fe5727c.js";import"./ClockCircleOutlined.fad12e2b.js";import"./index.17a7febc.js";import"./uniqBy.28c373f9.js";import"./index.e70aa727.js";import"./index.f1d0cead.js";import"./useContentViewHeight.d39ef36d.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.3b80093e.js";import"./PlusOutlined.c106decb.js";const S=T({components:{BasicTable:u,ProcessHeader:x,LaunchButton:C,PageWrapper:f,[t.name]:t,[t.TabPane.name]:t.TabPane},setup(){const[e,{getForm:r}]=d({api:I,title:"",columns:v,formConfig:{labelWidth:120,schemas:$,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return P().then(s=>{const{updateSchema:a}=r();a({field:"appSn",componentProps:{options:s}})}),{registerTodoTable:e}}}),w={class:"desc-wrap process"};function N(e,r,s,a,F,R){const n=i("router-link"),c=i("BasicTable");return m(),b("div",w,[h(c,{onRegister:e.registerTodoTable},{bodyCell:p(({column:l,record:o})=>[l.key==="formName"?(m(),g(n,{key:0,to:`/process/approve/${o.processDefinitionKey}?taskId=${o.taskId}&procInstId=${o.processInstanceId}&businessKey=${o.businessKey}`},{default:p(()=>[B(k(o.formName),1)]),_:2},1032,["to"])):y("",!0)]),_:1},8,["onRegister"])])}var xo=_(S,[["render",N]]);export{xo as default};
