import{j as e,by as t,i as n,K as i,o as s,m as o,n as r,Q as a,R as l,V as c,ah as m,N as u,b1 as d,z as g,r as p,a5 as v,u as f,bM as w,Y as L,bO as h,bP as I,aK as x}from"./vendor.686fd1d4.js";/* empty css              */import{p as _,c as b,j as y,aT as C}from"./index.7fecfddd.js";import{P as D}from"./index.b3b6fdb5.js";import"./useContentViewHeight.d2763f54.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var k=e({name:"ImagePreview",components:{Image:t,PreviewGroup:t.PreviewGroup},props:{functional:_.bool,imageList:{type:Array}},setup(e){const{prefixCls:t}=b("image-preview");return{prefixCls:t,getImageList:n((()=>{const{imageList:t}=e;return t?t.map((e=>y(e)?{src:e,placeholder:!1}:e)):[]}))}}});k.render=function(e,t,n,g,p,v){const f=i("Image"),w=i("PreviewGroup");return s(),o("div",{class:e.prefixCls},[r(w,null,{default:a((()=>[!e.imageList||e.$slots.default?l(e.$slots,"default",{key:0}):(s(!0),o(c,{key:1},m(e.getImageList,(e=>(s(),o(f,u({key:e.src},e),d({_:2},[e.placeholder?{name:"placeholder",fn:a((()=>[r(f,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:3})],2)};var O,P;(P=O||(O={}))[P.LOADING=0]="LOADING",P[P.DONE=1]="DONE",P[P.FAIL=2]="FAIL";const j={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0}},A="img-preview";var N=e({name:"ImagePreview",props:j,setup(e){const t=g({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:O.LOADING,currentIndex:0,moveX:0,moveY:0,show:e.show}),i=p(null),s=p(null);function o(){!function(){const e=f(i);if(!e)return;e.onmousewheel=l,document.body.addEventListener("DOMMouseScroll",l),document.ondragstart=function(){return!1}}();const{index:n,imageList:s}=e;if(!s||!s.length)throw new Error("imageList is undefined");t.currentIndex=n,d(s[n])}function a(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function l(e){(e=e||window.event).delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&c(.015),e.delta<0&&c(-.015)}function c(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function m(e){t.imgRotate+=e}function u(){const e=f(s);e&&(e.onmousemove=null)}function d(e){t.status=O.LOADING;const n=new Image;n.src=e,n.onload=()=>{t.currentUrl=e,t.status=O.DONE},n.onerror=()=>{t.status=O.FAIL}}function x(e){e&&e.stopPropagation(),t.show=!1,document.body.removeEventListener("DOMMouseScroll",l),document.ondragstart=null}function _(){a()}function b(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const n=f(s);n&&(n.onmousemove=y)}function y(e){(e=e||window.event).preventDefault();const n=e.clientX-t.moveX,i=e.clientY-t.moveY;t.imgLeft+=n,t.imgTop+=i,t.moveX=e.clientX,t.moveY=e.clientY}const C=n((()=>{const{imgScale:e,imgRotate:n,imgTop:i,imgLeft:s}=t;return{transform:`scale(${e}) rotate(${n}deg)`,marginTop:`${i}px`,marginLeft:`${s}px`}})),D=n((()=>{const{imageList:t}=e;return t.length>1}));v((()=>{e.show&&o(),e.imageList&&a()}));const k=()=>{if(!f(D))return null;const{currentIndex:n}=t,{imageList:i}=e;return r("div",{class:"img-preview__index"},[n+1,L(" / "),i.length])},P=n=>f(D)?r("div",{class:["img-preview__arrow",n],onClick:()=>function(n){const{currentIndex:i}=t,{imageList:s}=e;"left"===n&&(t.currentIndex--,i<=0&&(t.currentIndex=s.length-1)),"right"===n&&(t.currentIndex++,i>=s.length-1&&(t.currentIndex=0)),d(s[t.currentIndex])}(n)},[r("left"===n?h:I,null,null)]):null;return()=>t.show&&r("div",{class:A,ref:i,onMouseup:u},[r("div",{class:"img-preview-content"},[r("img",{style:f(C),class:["img-preview-image",t.status===O.DONE?"":"hidden"],ref:s,src:t.currentUrl,onMousedown:b},null),r("div",{class:"img-preview__close",onClick:x},[r(w,{class:"img-preview__close-icon"},null)]),k(),r("div",{class:"img-preview__controller"},[r("div",{class:"img-preview__controller-item",onClick:()=>c(-.15)},[r("img",{src:"/assets/unscale.99ad049c.svg"},null)]),r("div",{class:"img-preview__controller-item",onClick:()=>c(.15)},[r("img",{src:"/assets/scale.8d8ebde4.svg"},null)]),r("div",{class:"img-preview__controller-item",onClick:_},[r("img",{src:"/assets/resume.6e209205.svg"},null)]),r("div",{class:"img-preview__controller-item",onClick:()=>m(-90)},[r("img",{src:"/assets/unrotate.f9dd5a27.svg"},null)]),r("div",{class:"img-preview__controller-item",onClick:()=>m(90)},[r("img",{src:"/assets/p-rotate.1d232189.svg"},null)])]),P("left"),P("right")])])}});let E=null;const M=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var S=e({components:{PageWrapper:D,ImagePreview:k},setup:()=>({imgList:M,openImg:function(){!function(e){if(!C)return;const{imageList:t,show:n=!0,index:i=0}=e,s={},o=document.createElement("div");s.imageList=t,s.show=n,s.index=i,E=r(N,s),x(E,o),document.body.appendChild(o)}({imageList:M})}})});const Y=L("无预览图");S.render=function(e,t,n,l,c,m){const u=i("ImagePreview"),d=i("a-button"),g=i("PageWrapper");return s(),o(g,{title:"图片预览示例"},{default:a((()=>[r(u,{imageList:e.imgList},null,8,["imageList"]),r(d,{onClick:e.openImg,type:"primary"},{default:a((()=>[Y])),_:1},8,["onClick"])])),_:1})};export default S;
