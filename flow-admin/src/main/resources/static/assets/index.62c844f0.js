import{P as e}from"./index.b3b6fdb5.js";import{j as t,k as o,l as n,K as i,at as r,o as s,m as a,w as d,n as l,x as p}from"./vendor.686fd1d4.js";import"./index.7fecfddd.js";import"./useContentViewHeight.d2763f54.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const u={event:"mousedown",transition:400},c={beforeMount:(e,t)=>{if(!1===t.value)return;const o=e.getAttribute("ripple-background");var n,i;n=Object.keys(t.modifiers),i=u,n.forEach((e=>{isNaN(Number(e))?i.event=e:i.transition=e}));const r=o||c.background,s=c.zIndex;e.addEventListener(u.event,(t=>{!function({event:e,el:t,zIndex:o,background:n}){var i,r;const s=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=e.clientX||e.touches[0].clientX,d=e.clientY||e.touches[0].clientY,l=t.getBoundingClientRect(),{left:p,top:c}=l,{offsetWidth:m,offsetHeight:g}=t,{transition:v}=u,b=a-p,f=d-c,h=Math.max(b,m-b),x=Math.max(f,g-f),R=window.getComputedStyle(t),y=Math.sqrt(h*h+x*x),j=s>0?s:0,L=document.createElement("div"),k=document.createElement("div");L.className="ripple",Object.assign(null!=(i=L.style)?i:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${v}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:null!=o?o:"9999",backgroundColor:null!=n?n:"rgba(0, 0, 0, 0.12)"}),k.className="ripple-container",Object.assign(null!=(r=k.style)?r:{},{position:"absolute",left:0-j+"px",top:0-j+"px",height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const w=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==w&&(t.style.position="relative");k.appendChild(L),t.appendChild(k),Object.assign(L.style,{marginTop:`${f}px`,marginLeft:`${b}px`});const{borderTopLeftRadius:E,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:N}=R;function B(){setTimeout((()=>{L.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{var e;null==(e=null==k?void 0:k.parentNode)||e.removeChild(k)}),850),t.removeEventListener("mouseup",B,!1),t.removeEventListener("mouseleave",B,!1),t.removeEventListener("dragstart",B,!1),setTimeout((()=>{let e=!0;for(let o=0;o<t.childNodes.length;o++)"ripple-container"===t.childNodes[o].className&&(e=!1);e&&(t.style.position="static"!==w?w:"")}),u.transition+260)}Object.assign(k.style,{width:`${m}px`,height:`${g}px`,direction:"ltr",borderTopLeftRadius:E,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:N}),setTimeout((()=>{var e;const t=2*y+"px";Object.assign(null!=(e=L.style)?e:{},{width:t,height:t,marginLeft:b-y+"px",marginTop:f-y+"px"})}),0),"mousedown"===e.type?(t.addEventListener("mouseup",B,!1),t.addEventListener("mouseleave",B,!1),t.addEventListener("dragstart",B,!1)):B();t.setBackground=e=>{e&&(L.style.backgroundColor=e)}}({event:t,el:e,background:r,zIndex:s})}))},updated(e,t){var o,n;if(!t.value)return void(null==(o=null==e?void 0:e.clearRipple)||o.call(e));const i=e.getAttribute("ripple-background");null==(n=null==e?void 0:e.setBackground)||n.call(e,i)}};var m=t({components:{PageWrapper:e},directives:{Ripple:c}});const g=p();o("data-v-17ea7006");const v={class:"demo-box"};n();const b=g(((e,t,o,n,p,u)=>{const c=i("PageWrapper"),m=r("ripple");return s(),a(c,{title:"Ripple示例"},{default:g((()=>[d(l("div",v," content ",512),[[m]])])),_:1})}));m.render=b,m.__scopeId="data-v-17ea7006";export default m;
