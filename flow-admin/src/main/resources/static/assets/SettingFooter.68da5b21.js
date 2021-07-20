import{N as e,c as t,a0 as s,f as a,X as o,e as n,a_ as l,a9 as r,bc as c,bd as i,h as d}from"./index.f769efd5.js";import{j as u,cs as f,bi as g,u as p,K as C,o as y,m,n as S,Y as k,q as h,x as b}from"./vendor.686fd1d4.js";var x=u({name:"SettingFooter",components:{CopyOutlined:f,RedoOutlined:g},setup(){const u=e(),{prefixCls:f}=t("setting-footer"),{t:g}=n(),{createSuccessModal:C,createMessage:y}=d(),m=s(),S=a(),k=o();return{prefixCls:f,t:g,handleCopy:function(){const{isSuccessRef:e}=l(JSON.stringify(p(k.getProjectConfig),null,2));p(e)&&C({title:g("layout.setting.operatingTitle"),content:g("layout.setting.operatingContent")})},handleResetSetting:function(){try{k.setProjectConfig(r);const{colorWeak:e,grayMode:t}=r;c(e),i(t),y.success(g("layout.setting.resetSuccess"))}catch(e){y.error(e)}},handleClearAndRedo:function(){localStorage.clear(),k.resetAllState(),u.resetState(),m.resetState(),S.resetState(),location.reload()}}}});const R=b(),_=R(((e,t,s,a,o,n)=>{const l=C("CopyOutlined"),r=C("a-button"),c=C("RedoOutlined");return y(),m("div",{class:e.prefixCls},[S(r,{type:"primary",block:"",onClick:e.handleCopy},{default:R((()=>[S(l,{class:"mr-2"}),k(" "+h(e.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),S(r,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:R((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("common.resetText")),1)])),_:1},8,["onClick"]),S(r,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:R((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));x.render=_,x.__scopeId="data-v-c36cd858";export default x;
