var e=Object.defineProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(o,a,n)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n;import{aX as i,aY as r}from"./index.44a64fe8.js";import{u as s,j as l,bB as p,r as d,z as c,G as u,K as m,at as f,w as g,o as b,m as y,Q as L,n as C,Y as j}from"./vendor.686fd1d4.js";import{P as v}from"./index.30fbc9dc.js";/* empty css              */import"./useContentViewHeight.7797c6a9.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";function k(e){let o,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const n=e;o=n.props||{},a=n.target||document.body}else o=e;const n=i(o,void 0,!0);return[()=>{const e=s(a);e&&n.open(e)},()=>{n.close()}]}var F=l({components:{Loading:r,PageWrapper:v,[p.name]:p},setup(){const e=d(null),i=d(!1),r=c({absolute:!1,loading:!1,tip:"加载中..."}),[s,l]=k({tip:"加载中..."}),[p,m]=k({target:e,props:{tip:"加载中...",absolute:!0}});function f(e){r.absolute=e,r.loading=!0,setTimeout((()=>{r.loading=!1}),2e3)}return((e,i)=>{for(var r in i||(i={}))a.call(i,r)&&t(e,r,i[r]);if(o)for(var r of o(i))n.call(i,r)&&t(e,r,i[r]);return e})({openCompFullLoading:function(){f(!1)},openFnFullLoading:function(){s(),setTimeout((()=>{l()}),2e3)},openFnWrapLoading:function(){p(),setTimeout((()=>{m()}),2e3)},openCompAbsolute:function(){f(!0)},wrapEl:e,loadingRef:i,openDirectiveLoading:function(){i.value=!0,setTimeout((()=>{i.value=!1}),2e3)}},u(r))}});const w={ref:"wrapEl"},O=j(" 全屏 Loading "),x=j(" 容器内 Loading "),P=j(" 全屏 Loading "),_=j(" 容器内 Loading "),W=j(" 打开指令Loading ");F.render=function(e,o,a,n,t,i){const r=m("a-alert"),s=m("a-button"),l=m("Loading"),p=m("PageWrapper"),d=f("loading");return g((b(),y(p,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:L((()=>[C("div",w,[C(r,{message:"组件方式"}),C(s,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:L((()=>[O])),_:1},8,["onClick"]),C(s,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:L((()=>[x])),_:1},8,["onClick"]),C(l,{loading:e.loading,absolute:e.absolute,tip:e.tip},null,8,["loading","absolute","tip"]),C(r,{message:"函数方式"}),C(s,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:L((()=>[P])),_:1},8,["onClick"]),C(s,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:L((()=>[_])),_:1},8,["onClick"]),C(r,{message:"指令方式"}),C(s,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:L((()=>[W])),_:1},8,["onClick"])],512)])),_:1},512)),[[d,e.loadingRef]])};export default F;
