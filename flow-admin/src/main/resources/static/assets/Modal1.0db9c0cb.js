import{B as a,a as e}from"./index.389b283b.js";import{j as s,r as o,C as n,k as t,l as i,K as d,o as l,m as r,n as u,X as c,V as g,ah as m,q as h,N as p,x as f,Y as v}from"./vendor.686fd1d4.js";import"./index.521cc965.js";import"./useWindowSizeFn.d82e06bf.js";var M=s({components:{BasicModal:a},setup(){const a=o(!0),s=o(10),[t,{setModalProps:i,redoModalHeight:d}]=e();return n((()=>s.value),(()=>{d()})),{register:t,loading:a,handleShow:function(e){e&&(a.value=!0,i({loading:!0,confirmLoading:!0}),setTimeout((()=>{s.value=Math.round(30*Math.random()+5),a.value=!1,i({loading:!1,confirmLoading:!1})}),3e3))},lines:s,setLines:function(){s.value=Math.round(20*Math.random()+10)}}}});const b=f();t("data-v-15978d93");const k=v("点我更新内容"),y={key:0,class:"empty-tips"},C={key:1};i();const j=b(((a,e,s,o,n,t)=>{const i=d("a-button"),f=d("BasicModal");return l(),r(f,p(a.$attrs,{destroyOnClose:"",onRegister:a.register,title:"Modal Title",helpMessage:["提示1","提示2"],onVisibleChange:a.handleShow}),{insertFooter:b((()=>[u(i,{type:"danger",onClick:a.setLines,disabled:a.loading},{default:b((()=>[k])),_:1},8,["onClick","disabled"])])),default:b((()=>[a.loading?(l(),r("div",y," 加载中，稍等3秒…… ")):c("",!0),a.loading?c("",!0):(l(),r("ul",C,[(l(!0),r(g,null,m(a.lines,(a=>(l(),r("li",{key:a},"加载完成"+h(a)+"！",1)))),128))]))])),_:1},16,["onRegister","onVisibleChange"])}));M.render=j,M.__scopeId="data-v-15978d93";export default M;
