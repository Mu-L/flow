import{J as e,p as o,c as t,f as s,e as a,o as r}from"./index.7fecfddd.js";import{j as n,aw as i,ax as l,i as d,K as c,o as m,m as p,n as f,Q as u,X as g,q as k,V as x}from"./vendor.686fd1d4.js";import{D as h}from"./siteSetting.136c2269.js";import{c as _,u as j}from"./index.608a72a0.js";import{b as w}from"./index.f287750a.js";import{h as C}from"./header.d801b988.js";import"./index.d3fffd33.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.a820d434.js";import"./useContentViewHeight.d2763f54.js";/* empty css              *//* empty css              */import"./useSortable.dc62f82e.js";import"./lock.a6eaee00.js";var D=n({name:"UserDropdown",components:{Dropdown:i,Menu:l,MenuItem:_((()=>e((()=>import("./DropMenuItem.5e22a4ca.js")),["/assets/DropMenuItem.5e22a4ca.js","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.7fecfddd.js","/assets/index.b89ee803.css"]))),MenuDivider:l.Divider,LockAction:_((()=>e((()=>import("./LockModal.1fa71def.js")),["/assets/LockModal.1fa71def.js","/assets/LockModal.8fa08283.css","/assets/index.fa262950.css","/assets/index.0edc9df2.css","/assets/index.8f1364b3.css","/assets/index.1028f51b.css","/assets/index.80c4f864.css","/assets/index.2558ae94.css","/assets/index.5dcbaae4.css","/assets/index.cc3997a0.css","/assets/index.29c0da9f.css","/assets/index.d060b1b4.css","/assets/index.6d85b653.css","/assets/index.13a891d2.css","/assets/index.7fecfddd.js","/assets/index.b89ee803.css","/assets/vendor.686fd1d4.js","/assets/vendor.caa95c00.css","/assets/index.f287750a.js","/assets/index.6379c5f3.css","/assets/useWindowSizeFn.d82e06bf.js","/assets/BasicForm.a98eb535.js","/assets/BasicForm.c64f5389.css","/assets/index.099c2235.js","/assets/index.07759353.css","/assets/uuid.2b29000c.js","/assets/download.c870abce.js","/assets/base64Conver.bb012c73.js","/assets/index.d2ff26f2.js","/assets/index.eeabf1c4.css","/assets/useForm.7ff3fa79.js","/assets/lock.a6eaee00.js","/assets/header.d801b988.js"])))},props:{theme:o.oneOf(["dark","light"])},setup(){const{prefixCls:e}=t("header-user-dropdown"),{t:o}=a(),{getShowDoc:n,getUseLockPage:i}=j(),l=s(),c=d((()=>{const{realName:e="",image:o,desc:t}=l.getUserInfo||{};return{realName:e,avatar:o||C,desc:t}})),[m,{openModal:p}]=w();return{prefixCls:e,t:o,getUserInfo:c,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":r(h);break;case"lock":p(!0)}},getShowDoc:n,register:m,getUseLockPage:i}}});D.render=function(e,o,t,s,a,r){const n=c("MenuItem"),i=c("MenuDivider"),l=c("Menu"),d=c("Dropdown"),h=c("LockAction");return m(),p(x,null,[f(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:u((()=>[f(l,{onClick:e.handleMenuClick},{default:u((()=>[e.getShowDoc?(m(),p(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(m(),p(i,{key:1})):g("",!0),e.getUseLockPage?(m(),p(n,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),f(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:u((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.getUserInfo.avatar},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},k(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(h,{onRegister:e.register},null,8,["onRegister"])],64)};export default D;
