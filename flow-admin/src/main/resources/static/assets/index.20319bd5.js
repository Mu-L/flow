import{J as e,p as o,c as t,f as s,e as a,o as r}from"./index.081912a1.js";import{j as n,aw as i,ax as l,i as c,K as d,o as m,m as p,n as u,Q as f,X as g,q as k,V as x}from"./vendor.686fd1d4.js";import{D as h}from"./siteSetting.136c2269.js";import{c as b,u as _}from"./index.924abc7f.js";import{b as j}from"./index.08be5da6.js";import{h as w}from"./header.d801b988.js";import"./index.970f1cb3.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.c3b11b00.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */import"./useSortable.a0cc3f55.js";import"./lock.054be4a1.js";var C=n({name:"UserDropdown",components:{Dropdown:i,Menu:l,MenuItem:b((()=>e((()=>import("./DropMenuItem.75208a25.js")),["/assets/DropMenuItem.75208a25.js","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.081912a1.js","/assets/index.b89ee803.css"]))),MenuDivider:l.Divider,LockAction:b((()=>e((()=>import("./LockModal.0322fb59.js")),["/assets/LockModal.0322fb59.js","/assets/LockModal.8fa08283.css","/assets/index.fa262950.css","/assets/index.0edc9df2.css","/assets/index.8f1364b3.css","/assets/index.1028f51b.css","/assets/index.80c4f864.css","/assets/index.2558ae94.css","/assets/index.5dcbaae4.css","/assets/index.cc3997a0.css","/assets/index.29c0da9f.css","/assets/index.d060b1b4.css","/assets/index.6d85b653.css","/assets/index.13a891d2.css","/assets/index.081912a1.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.08be5da6.js","/assets/index.6379c5f3.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/BasicForm.437ea19e.js","/assets/BasicForm.c64f5389.css","/assets/index.3784ba30.js","/assets/index.07759353.css","/assets/uuid.2b29000c.js","/assets/download.456194d0.js","/assets/base64Conver.bb012c73.js","/assets/index.5abcd6f5.js","/assets/index.eeabf1c4.css","/assets/useForm.8fc55deb.js","/assets/lock.054be4a1.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:n,getUseLockPage:i}=_(),l=s(),d=c((()=>{const{realName:e="",image:o,desc:t}=l.getUserInfo||{};return{realName:e,avatar:o||w,desc:t}})),[m,{openModal:p}]=j();return{prefixCls:e,t:o,getUserInfo:d,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":r(h);break;case"lock":p(!0)}},getShowDoc:n,register:m,getUseLockPage:i}}});C.render=function(e,o,t,s,a,r){const n=d("MenuItem"),i=d("MenuDivider"),l=d("Menu"),c=d("Dropdown"),h=d("LockAction");return m(),p(x,null,[u(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:f((()=>[u(l,{onClick:e.handleMenuClick},{default:f((()=>[e.getShowDoc?(m(),p(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(m(),p(i,{key:1})):g("",!0),e.getUseLockPage?(m(),p(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),u(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:f((()=>[u("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[u("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),u("span",{class:`${e.prefixCls}__info hidden md:block`},[u("span",{class:[`${e.prefixCls}__name  `,"truncate"]},k(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),u(h,{onRegister:e.register},null,8,["onRegister"])],64)};export default C;
