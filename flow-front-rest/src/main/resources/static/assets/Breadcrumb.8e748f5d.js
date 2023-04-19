var L=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&P(e,r,t[r]);if(M)for(var r of M(t))O.call(t,r)&&P(e,r,t[r]);return e},B=(e,t)=>T(e,V(t));var R=(e,t,r)=>new Promise((h,d)=>{var b=l=>{try{f(r.next(l))}catch(c){d(c)}},p=l=>{try{f(r.throw(l))}catch(c){d(c)}},f=l=>l.done?h(l.value):Promise.resolve(l.value).then(b,p);f((r=r.apply(e,t)).next())});import{L as j,a as q,b1 as F,aM as G,v as H,bQ as Q,b as X,br as J,bA as K,q as U,X as W,bS as Y,c7 as Z,bP as x,f0 as ee,aF as y,o as g,f as A,m as te,z as E,i as S,j as ne,t as w,B as ae,p as re,H as se}from"./index.d7db7941.js";import{B as D}from"./index.22ef89af.js";const oe=q({name:"LayoutBreadcrumb",components:{Icon:F,[D.name]:D},props:{theme:G.oneOf(["dark","light"])},setup(){const e=H([]),{currentRoute:t}=Q(),{prefixCls:r}=X("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=J(),d=K(),{t:b}=U();W(()=>R(this,null,function*(){var C,I,$;if(t.value.name===Y)return;const s=yield Z(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=x(s,o),m=s.filter(N=>N.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const _=f(i);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(B(k({},t.value),{name:(($=t.value.meta)==null?void 0:$.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var u,m;n.includes(o.path)&&a.push(B(k({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function f(s){return ee(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=s;if((o==null?void 0:o.length)&&!u){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(u&&se(u))d(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,d(i)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:b,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,d,b){const p=y("Icon"),f=y("router-link"),l=y("a-breadcrumb");return g(),A("div",{class:re([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[te(l,{routes:e.routes},{itemRender:E(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(g(),S(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):ne("",!0),e.hasRedirect(v,c)?(g(),S(f,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:E(()=>[ae(w(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(g(),A("span",ce,w(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=j(oe,[["render",ie]]);export{fe as default};
