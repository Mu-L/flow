var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import o from"./Step1.949cd770.js";import p from"./Step2.8624ead7.js";import a from"./Step3.e9ab129a.js";import{P as s}from"./index.cbb9c5cf.js";import{j as d,cd as c,r as m,z as f,G as j,k as l,l as u,K as b,o as x,m as S,x as v,n as h,w as P,v as y,X as N}from"./vendor.686fd1d4.js";/* empty css              */import"./BasicForm.2372b7e8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.ba319b32.js";import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./index.131f7f29.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";import"./useForm.61e11b2d.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./useContentViewHeight.ea74a0c1.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var w=d({components:{Step1:o,Step2:p,Step3:a,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),o=f({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var p in o||(o={}))n.call(o,p)&&i(e,p,o[p]);if(t)for(var p of t(o))r.call(o,p)&&i(e,p,o[p]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},j(o))}});const O=v();l("data-v-3b1653d3");const g={class:"step-form-form"},k={class:"mt-5"};u();const R=O(((e,t,n,r,i,o)=>{const p=b("a-step"),a=b("a-steps"),s=b("Step1"),d=b("Step2"),c=b("Step3"),m=b("PageWrapper");return x(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[h("div",g,[h(a,{current:e.current},{default:O((()=>[h(p,{title:"填写转账信息"}),h(p,{title:"确认转账信息"}),h(p,{title:"完成"})])),_:1},8,["current"])]),h("div",k,[P(h(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?P((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):N("",!0),e.initSetp3?P((x(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):N("",!0)])])),_:1})}));w.render=R,w.__scopeId="data-v-3b1653d3";export default w;
