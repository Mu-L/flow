import{V as s}from"./index.f9173908.js";import{P as o}from"./index.c524f834.js";import{j as l,r,u as e,k as t,l as a,K as c,o as n,m as i,n as d,V as f,ah as m,q as p,x as u,Y as j}from"./vendor.686fd1d4.js";import"./useContentViewHeight.1a732a79.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var x=l({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=e(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const _=u();t("data-v-83ef995e");const v={class:"my-4"},C=j(" 滚动到100px位置 "),k=j(" 滚动到800px位置 "),b=j(" 滚动到顶部 "),w=j(" 滚动到底部 "),T={class:"scroll-wrap"},g={class:"p-3"};a();const h=_(((s,o,l,r,e,t)=>{const a=c("a-button"),u=c("ScrollContainer"),j=c("PageWrapper");return n(),i(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:_((()=>[d("div",v,[d(a,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[C])),_:1}),d(a,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[k])),_:1}),d(a,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[b])),_:1}),d(a,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[w])),_:1})]),d("div",T,[d(u,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[d("ul",g,[(n(),i(f,null,m(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},p(s),1))),64))])])),_:1},512)])])),_:1})}));x.render=h,x.__scopeId="data-v-83ef995e";export default x;
