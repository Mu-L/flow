var e=(e,t,s)=>new Promise(((i,n)=>{var o=e=>{try{r(s.next(e))}catch(t){n(t)}},a=e=>{try{r(s.throw(e))}catch(t){n(t)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,a);r((s=s.apply(e,t)).next())}));import{_ as t}from"./BasicForm.5fbfb734.js";import{u as s}from"./useForm.1ee1a774.js";import{step2Schemas as i}from"./data.2505cb7f.js";import{j as n,bB as o,aV as a,bn as r,k as d,l as m,K as c,o as p,m as l,n as u,x as b,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.eb9d6ed9.js";import"./index.2aa1bf44.js";/* empty css              *//* empty css              */import"./index.2bb7e54d.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var j=n({components:{BasicForm:t,[o.name]:o,[a.name]:a,[r.name]:r,[r.Item.name]:r.Item},emits:["next","prev"],setup(t,{emit:n}){const[o,{validate:a,setProps:r}]=s({labelWidth:80,schemas:i,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:function(){return e(this,null,(function*(){n("prev")}))},submitFunc:function(){return e(this,null,(function*(){try{const e=yield a();r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),n("next",e)}),1500)}catch(e){}}))}});return{register:o}}});const x=b();d("data-v-0c66c08b");const v={class:"step2"},h=f(" ant-design@alipay.com "),g=f(" test@example.com "),B=f(" Vben "),_=f(" 500元 ");m();const F=x(((e,t,s,i,n,o)=>{const a=c("a-alert"),r=c("a-descriptions-item"),d=c("a-descriptions"),m=c("a-divider"),b=c("BasicForm");return p(),l("div",v,[u(a,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),u(d,{column:1,class:"mt-5"},{default:x((()=>[u(r,{label:"付款账户"},{default:x((()=>[h])),_:1}),u(r,{label:"收款账户"},{default:x((()=>[g])),_:1}),u(r,{label:"收款人姓名"},{default:x((()=>[B])),_:1}),u(r,{label:"转账金额"},{default:x((()=>[_])),_:1})])),_:1}),u(m),u(b,{onRegister:e.register},null,8,["onRegister"])])}));j.render=F,j.__scopeId="data-v-0c66c08b";export default j;
