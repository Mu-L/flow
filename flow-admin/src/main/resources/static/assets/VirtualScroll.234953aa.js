import{n as t,af as e,w as i}from"./index.f769efd5.js";import{j as s,r,z as a,i as l,u as n,C as o,I as m,J as d,n as c,aV as u,k as h,l as p,K as g,o as f,m as v,q as _,x as b,Y as x}from"./vendor.686fd1d4.js";/* empty css              */import{P as H}from"./index.2ec2ebc0.js";import"./useContentViewHeight.528cd165.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";function S(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}var w=s({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(i,{slots:s}){const u=r(null),h=a({first:0,last:0,scrollTop:0}),p=l((()=>parseInt(i.bench,10))),g=l((()=>parseInt(i.itemHeight,10))),f=l((()=>Math.max(0,h.first-n(p)))),v=l((()=>Math.min((i.items||[]).length,h.last+n(p)))),_=l((()=>({height:S((i.items||[]).length*n(g))}))),b=l((()=>{const t={},e=S(i.height),s=S(i.minHeight),r=S(i.minWidth),a=S(i.maxHeight),l=S(i.maxWidth),n=S(i.width);return e&&(t.height=e),s&&(t.minHeight=s),r&&(t.minWidth=r),a&&(t.maxHeight=a),l&&(t.maxWidth=l),n&&(t.width=n),t}));function x(t){const e=n(u);if(!e)return 0;const s=parseInt(i.height||0,10)||e.clientHeight;return t+Math.ceil(s/n(g))}function H(){const t=n(u);t&&(h.scrollTop=t.scrollTop,h.first=Math.floor(h.scrollTop/n(g)),h.last=x(h.first))}function w(){const{items:t=[]}=i;return t.slice(n(f),n(v)).map(N)}function N(t,i){const r=S((i+=n(f))*n(g));return c("div",{class:"virtual-scroll__item",style:{top:r},key:i},[e(s,"default",{index:i,item:t})])}return o([()=>i.itemHeight,()=>i.height],(()=>{H()})),m((()=>{h.last=x(0),d((()=>{const e=n(u);e&&t({el:e,name:"scroll",listener:H,wait:0})}))})),()=>c("div",{class:"virtual-scroll",style:n(b),ref:u},[c("div",{class:"virtual-scroll__container",style:n(_)},[w()])])}});w.__scopeId="data-v-0610daca";const N=i(w),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var W=s({components:{VScroll:N,Divider:u,PageWrapper:H},setup:()=>({data:j})});const y=b();h("data-v-918662a0");const I=x("基础滚动示例"),M={class:"virtual-scroll-demo-wrap"},V={class:"virtual-scroll-demo__item"},T=x("即使不可见，也预先加载50条数据，防止空白"),P={class:"virtual-scroll-demo-wrap"},k={class:"virtual-scroll-demo__item"};p();const q=y(((t,e,i,s,r,a)=>{const l=g("Divider"),n=g("VScroll"),o=g("PageWrapper");return f(),v(o,{class:"virtual-scroll-demo"},{default:y((()=>[c(l,null,{default:y((()=>[I])),_:1}),c("div",M,[c(n,{itemHeight:41,items:t.data,height:300,width:300},{default:y((({item:t})=>[c("div",V,_(t.title),1)])),_:1},8,["items"])]),c(l,null,{default:y((()=>[T])),_:1}),c("div",P,[c(n,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:y((({item:t})=>[c("div",k,_(t.title),1)])),_:1},8,["items"])])])),_:1})}));W.render=q,W.__scopeId="data-v-918662a0";export default W;
