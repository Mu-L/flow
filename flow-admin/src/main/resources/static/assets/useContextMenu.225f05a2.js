var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{_ as a,aT as i}from"./index.f769efd5.js";import{j as c,r as u,i as d,I as p,J as m,a0 as f,u as y,n as b,V as v,ax as h,aV as x,bo as j,aK as O,a2 as w}from"./vendor.686fd1d4.js";/* empty css              */const E={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},g=e=>{const{item:t}=e;return b("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&b(a,{class:"mr-2",icon:t.icon},null),b("span",null,[t.label])])};var I=c({name:"ContextMenu",props:E,setup(e){const a=u(null),i=u(!1),c=d((()=>{const{axis:a,items:i,styles:c,width:u}=e,{x:d,y:p}=a||{x:0,y:0},m=40*(i||[]).length,f=u,y=document.body,b=y.clientWidth<d+f?d-f:d,v=y.clientHeight<p+m?p-m:p;return h=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&r(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&r(e,n,t[n]);return e})({},c),t(h,n({width:`${u}px`,left:`${b+1}px`,top:`${v+1}px`}));var h}));function O(e,t){const{handler:n,disabled:l}=e;l||(i.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function w(t){return t.map((t=>{const{disabled:n,label:l,children:o,divider:s=!1}=t,r={item:t,handler:O,showIcon:e.showIcon};return o&&0!==o.length?y(i)?b(h.SubMenu,{key:l,disabled:n,popupClassName:"context-menu__popup"},{title:()=>b(g,r,null),default:()=>w(o)}):null:b(v,null,[b(h.Item,{disabled:n,class:"context-menu__item",key:l},{default:()=>[b(g,r,null)]}),s?b(x,{key:`d-${l}`},null):null])}))}return p((()=>{m((()=>i.value=!0))})),f((()=>{const e=y(a);e&&document.body.removeChild(e)})),()=>{let t;if(!y(i))return null;const{items:n}=e;return b(h,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:a,style:y(c)},"function"==typeof(l=t=w(n))||"[object Object]"===Object.prototype.toString.call(l)&&!j(l)?t:{default:()=>[t]});var l}}});const L={domList:[],resolve:()=>{}},k=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),i)return new Promise((n=>{const l=document.body,o=document.createElement("div"),s={};e.styles&&(s.styles=e.styles),e.items&&(s.items=e.items),e.event&&(s.customEvent=t,s.axis={x:t.clientX,y:t.clientY});const r=b(I,s);O(r,o);const a=function(){L.resolve("")};L.domList.push(o);const i=function(){L.domList.forEach((e=>{try{e&&l.removeChild(e)}catch(t){}})),l.removeEventListener("click",a),l.removeEventListener("scroll",a)};L.resolve=function(e){i(),n(e)},i(),l.appendChild(o),l.addEventListener("click",a),l.addEventListener("scroll",a)}))},P=function(){L&&(L.resolve(""),L.domList=[])};function C(e=!0){return w()&&e&&f((()=>{P()})),[k,P]}export{C as u};
