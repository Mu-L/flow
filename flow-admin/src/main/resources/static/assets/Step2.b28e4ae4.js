var t=(t,e,s)=>new Promise(((i,n)=>{var o=t=>{try{r(s.next(t))}catch(e){n(e)}},a=t=>{try{r(s.throw(t))}catch(e){n(e)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(o,a);r((s=s.apply(t,e)).next())}));import{_ as e}from"./BasicForm.8dd34761.js";import{u as s}from"./useForm.ba0f60da.js";import{step2Schemas as i}from"./data.2505cb7f.js";import{y as n,bE as o,aZ as a,bp as r,z as c,A as d,Z as m,B as p,F as l,v as u,K as f,a9 as b}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.63ccfb82.js";import"./index.b3d678de.js";/* empty css              *//* empty css              */import"./index.0433a71f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";var j=n({components:{BasicForm:e,[o.name]:o,[a.name]:a,[r.name]:r,[r.Item.name]:r.Item},emits:["next","prev"],setup(e,{emit:n}){const[o,{validate:a,setProps:r}]=s({labelWidth:80,schemas:i,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:function(){return t(this,null,(function*(){n("prev")}))},submitFunc:function(){return t(this,null,(function*(){try{const t=yield a();r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),n("next",t)}),1500)}catch(t){}}))}});return{register:o}}});const x=f("data-v-0c66c08b");c("data-v-0c66c08b");const v={class:"step2"},h=b(" ant-design@alipay.com "),g=b(" test@example.com "),B=b(" Vben "),F=b(" 500元 ");d();const _=x(((t,e,s,i,n,o)=>{const a=m("a-alert"),r=m("a-descriptions-item"),c=m("a-descriptions"),d=m("a-divider"),f=m("BasicForm");return p(),l("div",v,[u(a,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),u(c,{column:1,class:"mt-5"},{default:x((()=>[u(r,{label:"付款账户"},{default:x((()=>[h])),_:1}),u(r,{label:"收款账户"},{default:x((()=>[g])),_:1}),u(r,{label:"收款人姓名"},{default:x((()=>[B])),_:1}),u(r,{label:"转账金额"},{default:x((()=>[F])),_:1})])),_:1}),u(d),u(f,{onRegister:t.register},null,8,["onRegister"])])}));j.render=_,j.__scopeId="data-v-0c66c08b";export default j;
