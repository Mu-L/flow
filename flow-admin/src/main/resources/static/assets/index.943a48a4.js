var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,r=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))a.call(t,o)&&n(e,o,t[o]);return e},i=(e,s)=>t(e,o(s));import{e as c,c as u,ay as p,p as d,V as f,ae as g,av as h,k as w,i as y,ah as v,au as b,w as C}from"./index.7fecfddd.js";import{j as m,i as k,K as D,o as x,m as B,V as $,R as O,N as P,Q as S,Y as T,q as _,X as j,c3 as F,n as V,bh as L,r as H,a5 as N,C as A,a2 as E,u as I,t as M,J as R,at as q,b1 as z,w as J,ah as K,z as Q,_ as X,b0 as Y}from"./vendor.686fd1d4.js";/* empty css              */const{t:G}=c(),U={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:G("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:G("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},W=r({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},U);var Z=m({name:"BasicDrawerFooter",props:i(r({},U),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:k((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});Z.render=function(e,t,o,s,l,a){const n=D("a-button");return e.showFooter||e.$slots.footer?(x(),B("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?O(e.$slots,"footer",{key:1}):(x(),B($,{key:0},[O(e.$slots,"insertFooter"),e.showCancelBtn?(x(),B(n,P({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:S((()=>[T(_(e.cancelText),1)])),_:1},16,["onClick"])):j("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(x(),B(n,P({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:S((()=>[T(_(e.okText),1)])),_:1},16,["type","onClick","loading"])):j("",!0),O(e.$slots,"appendFooter")],64))],6)):j("",!0)};var ee=m({name:"BasicDrawerHeader",components:{BasicTitle:p,ArrowLeftOutlined:F},props:{isDetail:d.bool,showDetailBack:d.bool,title:d.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:o}=u("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}});const te={key:1};ee.render=function(e,t,o,s,l,a){const n=D("BasicTitle"),r=D("ArrowLeftOutlined");return e.isDetail?(x(),B("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[V("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(x(),B("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[V(r,{class:`${e.prefixCls}__back`},null,8,["class"])])):j("",!0),e.title?(x(),B("span",te,_(e.title),1)):j("",!0)],2),V("span",{class:`${e.prefixCls}__toolbar`},[O(e.$slots,"titleToolbar")],2)],2)):(x(),B(n,{key:0,class:e.prefixCls},{default:S((()=>[O(e.$slots,"title"),T(" "+_(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var oe=m({components:{Drawer:L,ScrollContainer:f,DrawerFooter:Z,DrawerHeader:ee},inheritAttrs:!1,props:W,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const o=H(!1),s=g(),l=H(null),{t:a}=c(),{prefixVar:n,prefixCls:p}=u("basic-drawer"),d={setDrawerProps:function(e){l.value=h(I(l)||{},e),Reflect.has(e,"visible")&&(o.value=!!e.visible)},emitVisible:void 0},f=E();f&&t("register",d,f.uid);const v=k((()=>h(M(e),I(l)))),b=k((()=>{const e=i(r(r({placement:"right"},I(s)),I(v)),{visible:I(o)});e.title=void 0;const{isDetail:t,width:l,wrapClassName:a,getContainer:c}=e;if(t){l||(e.width="100%");const t=`${p}__detail`;e.wrapClassName=a?`${a} ${t}`:t,c||(e.getContainer=`.${n}-layout-content`)}return e})),C=k((()=>r(r({},s),I(b)))),m=k((()=>{const{footerHeight:e,showFooter:t}=I(b);return t&&e?w(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),D=k((()=>({position:"relative",height:`calc(100% - ${I(m)})`}))),x=k((()=>{var e;return!!(null==(e=I(b))?void 0:e.loading)}));return N((()=>{o.value=e.visible})),A((()=>o.value),(e=>{R((()=>{var o;t("visible-change",e),f&&(null==(o=d.emitVisible)||o.call(d,e,f.uid))}))})),{onClose:function(e){return s=this,l=null,a=function*(){const{closeFunc:s}=I(b);if(t("close",e),s&&y(s)){const e=yield s();o.value=!e}else o.value=!1},new Promise(((t,o)=>{var n=t=>{try{i(a.next(t))}catch(e){o(e)}},r=t=>{try{i(a.throw(t))}catch(e){o(e)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,r);i((a=a.apply(s,l)).next())}));var s,l,a},t:a,prefixCls:p,getMergeProps:v,getScrollContentStyle:D,getProps:b,getLoading:x,getBindValues:C,getFooterHeight:m,handleOk:function(){t("ok")}}}});oe.render=function(e,t,o,s,l,a){const n=D("DrawerHeader"),r=D("ScrollContainer"),i=D("DrawerFooter"),c=D("Drawer"),u=q("loading");return x(),B(c,P({class:e.prefixCls,onClose:e.onClose},e.getBindValues),z({default:S((()=>[J(V(r,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:S((()=>[O(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[u,e.getLoading]]),V(i,P(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),z({_:2},[K(Object.keys(e.$slots),(t=>({name:t,fn:S((o=>[O(e.$slots,t,o)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:S((()=>[O(e.$slots,"title")]))}:{name:"title",fn:S((()=>[V(n,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:S((()=>[O(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const se=Q({}),le=Q({});function ae(){if(!E())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=H(null),t=H(!1),o=H("");const s=()=>{const t=I(e);return t||b("useDrawer instance is undefined!"),t};return[function(s,l){X((()=>{e.value=null,t.value=null,se[I(o)]=null})),I(t)&&v()&&s===I(e)||(o.value=l,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{le[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:k((()=>le[~~I(o)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=s())||a.setDrawerProps({visible:e}),!t)return;if(l)return se[I(o)]=null,void(se[I(o)]=M(t));Y(M(se[I(o)]),M(t))||(se[I(o)]=M(t))},closeDrawer:()=>{var e;null==(e=s())||e.setDrawerProps({visible:!1})}}]}const ne=e=>{const t=H(null),o=E(),s=H("");if(!E())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const e=I(t);if(e)return e;b("useDrawerInner instance is undefined!")};return N((()=>{const t=se[I(s)];t&&e&&y(e)&&R((()=>{e(t)}))})),[(e,l)=>{X((()=>{t.value=null})),s.value=l,t.value=e,null==o||o.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:k((()=>le[~~I(s)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]},re=C(oe);export{re as B,ne as a,ae as u};
