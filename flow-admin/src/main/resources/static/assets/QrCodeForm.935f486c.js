import{_ as e,u as s,L as n}from"./LoginFormTitle.03305010.js";import{j as t,aL as a,aV as o,i as r,u as i,K as l,o as d,m as c,n as m,Q as g,Y as u,q as f,V as x,X as p}from"./vendor.686fd1d4.js";/* empty css              */import{Q as j}from"./index.1a0d76d7.js";import{e as v}from"./index.f9173908.js";import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";var C=t({name:"QrCodeForm",components:{Button:a,QrCode:j,Divider:o,LoginFormTitle:e},setup(){const{t:e}=v(),{handleBackLogin:t,getLoginState:a}=s();return{t:e,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(a)===n.QR_CODE))}}});const L={class:"enter-x min-w-64 min-h-64"};C.render=function(e,s,n,t,a,o){const r=l("LoginFormTitle"),i=l("QrCode"),j=l("Divider"),v=l("Button");return e.getShow?(d(),c(x,{key:0},[m(r,{class:"enter-x"}),m("div",L,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(j,{class:"enter-x"},{default:g((()=>[u(f(e.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:g((()=>[u(f(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default C;
