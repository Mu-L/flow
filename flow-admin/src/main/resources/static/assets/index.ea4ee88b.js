var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&s(e,o,t[o]);return e};import{c as i,x as c,p as g,w as d}from"./index.521cc965.js";import{j as u,o as f,m as p,n as h,R as m,x as v,bm as C,r as b,i as y,C as $,ao as H,J as x,u as j,K as F,N as S,b1 as w,ah as P,Q as O,X as _,V as k,Y as R,q as A}from"./vendor.686fd1d4.js";import{b as N,a as B}from"./useContentViewHeight.979ee31e.js";/* empty css              *//* empty css              */import{o as W}from"./onMountedOrActivated.172ad1ec.js";var q=u({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=i("page-footer"),{getCalcContentWidth:t}=c();return{prefixCls:e,getCalcContentWidth:t}}});const V=v()(((e,t,o,n,l,r)=>(f(),p("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[h("div",{class:`${e.prefixCls}__left`},[m(e.$slots,"left",{},void 0,!0)],2),m(e.$slots,"default",{},void 0,!0),h("div",{class:`${e.prefixCls}__right`},[m(e.$slots,"right",{},void 0,!0)],2)],6))));q.render=V,q.__scopeId="data-v-7fd791c4";var I=u({name:"PageWrapper",components:{PageFooter:q,PageHeader:C},inheritAttrs:!1,props:{title:g.string,dense:g.bool,ghost:g.bool,content:g.string,contentStyle:{type:Object},contentBackground:g.bool,contentFullHeight:g.bool,contentClass:g.string,fixedHeight:g.bool},setup(e,{slots:n}){const l=b(null),r=b(null),s=b(0),{prefixCls:c,prefixVar:g}=i("page-wrapper"),{contentHeight:d,setPageHeight:u,pageHeight:f}=N(),{footerHeightRef:p}=B(),h=y((()=>[c,{[`${c}--dense`]:e.dense}])),m=y((()=>(null==n?void 0:n.leftFooter)||(null==n?void 0:n.rightFooter))),v=y((()=>Object.keys(H(n,"default","leftFooter","rightFooter","headerContent")))),C=y((()=>{const{contentFullHeight:n,contentStyle:l,fixedHeight:r}=e;if(!n)return a({},l);const s=`${j(f)}px`;return a((i=a({},l),t(i,o({minHeight:s}))),r?{height:s}:{});var i})),F=y((()=>{const{contentBackground:t,contentClass:o}=e;return[`${c}-content`,o,{[`${c}-content-bg`]:t}]}));function S(){var t,o,n,a,i,c;if(!e.contentFullHeight)return;const f=j(r),h=j(l);s.value=0;const v=null==f?void 0:f.$el;v&&(s.value+=null!=(t=null==v?void 0:v.offsetHeight)?t:0);let C=0;const b=null==h?void 0:h.$el;b&&(C+=null!=(o=null==b?void 0:b.offsetHeight)?o:0);let y=0;const $="0px";let H=$,x=$;const F=document.querySelectorAll(`.${g}-page-wrapper-content`);if(F&&F.length>0){const e=F[0],t=getComputedStyle(e);H=null!=(n=null==t?void 0:t.marginBottom)?n:$,x=null!=(a=null==t?void 0:t.marginTop)?a:$}if(H){y+=Number(H.replace(/[^\d]/g,""))}if(x){y+=Number(x.replace(/[^\d]/g,""))}let S=0,w=$,P=$;const O=document.querySelectorAll(`.${g}-page-wrapper`);if(O&&O.length>0){const e=O[0],t=getComputedStyle(e);w=null!=(i=null==t?void 0:t.marginBottom)?i:$,P=null!=(c=null==t?void 0:t.marginTop)?c:$}if(w){S+=Number(w.replace(/[^\d]/g,""))}if(P){S+=Number(P.replace(/[^\d]/g,""))}let _=j(d)-j(s)-C-y-S;j(m)&&(_-=j(p)),null==u||u(_)}return $((()=>[null==d?void 0:d.value,m.value,p.value]),(()=>{S()}),{flush:"post",immediate:!0}),W((()=>{x((()=>{S()}))})),{getContentStyle:C,footerRef:r,headerRef:l,getClass:h,getHeaderSlots:v,prefixCls:c,getShowFooter:m,pageHeight:f,omit:H,getContentClass:F}}});I.render=function(e,t,o,n,l,r){const s=F("PageHeader"),a=F("PageFooter");return f(),p("div",{class:e.getClass},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(f(),p(s,S({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),w({default:O((()=>[e.content?(f(),p(k,{key:0},[R(A(e.content),1)],64)):m(e.$slots,"headerContent",{key:1})])),_:2},[P(e.getHeaderSlots,(t=>({name:t,fn:O((o=>[m(e.$slots,t,o)]))})))]),1040,["ghost","title"])):_("",!0),h("div",{class:["overflow-hidden",e.getContentClass],style:e.getContentStyle},[m(e.$slots,"default")],6),e.getShowFooter?(f(),p(a,{key:1,ref:"footerRef"},{left:O((()=>[m(e.$slots,"leftFooter")])),right:O((()=>[m(e.$slots,"rightFooter")])),_:1},512)):_("",!0)],2)},d(q);const T=d(I);export{T as P};
