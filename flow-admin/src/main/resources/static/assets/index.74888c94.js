var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import o from"./Step1.7fab25bd.js";import a from"./Step2.76016cdf.js";import p from"./Step3.e9ab129a.js";import{P as d}from"./index.3c0dbcda.js";import{j as s,cd as m,r as c,z as f,G as b,k as j,l,K as u,o as x,m as S,x as v,n as h,w as P,v as y,X as N}from"./vendor.686fd1d4.js";/* empty css              */import"./BasicForm.5f023be7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.566a0f72.js";import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./index.8fb54afb.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";import"./useForm.a5bb66b5.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d2889939.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var w=s({components:{Step1:o,Step2:a,Step3:p,PageWrapper:d,[m.name]:m,[m.Step.name]:m.Step},setup(){const e=c(0),o=f({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var a in o||(o={}))n.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&i(e,a,o[a]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},b(o))}});const O=v();j("data-v-3b1653d3");const g={class:"step-form-form"},k={class:"mt-5"};l();const R=O(((e,t,n,r,i,o)=>{const a=u("a-step"),p=u("a-steps"),d=u("Step1"),s=u("Step2"),m=u("Step3"),c=u("PageWrapper");return x(),S(c,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[h("div",g,[h(p,{current:e.current},{default:O((()=>[h(a,{title:"填写转账信息"}),h(a,{title:"确认转账信息"}),h(a,{title:"完成"})])),_:1},8,["current"])]),h("div",k,[P(h(d,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?P((x(),S(s,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):N("",!0),e.initSetp3?P((x(),S(m,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):N("",!0)])])),_:1})}));w.render=R,w.__scopeId="data-v-3b1653d3";export default w;
