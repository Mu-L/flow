import{_ as e,u as s,L as n}from"./LoginFormTitle.016e81fe.js";import{j as t,aL as a,aV as o,i as r,u as i,K as l,o as d,m as c,n as m,Q as g,Y as u,q as f,V as x,X as p}from"./vendor.686fd1d4.js";/* empty css              */import{Q as b}from"./index.1418a6c7.js";import{e as j}from"./index.5dab9bd2.js";import"./download.37bc3259.js";import"./base64Conver.bb012c73.js";var v=t({name:"QrCodeForm",components:{Button:a,QrCode:b,Divider:o,LoginFormTitle:e},setup(){const{t:e}=j(),{handleBackLogin:t,getLoginState:a}=s();return{t:e,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(a)===n.QR_CODE))}}});const C={class:"enter-x min-w-64 min-h-64"};v.render=function(e,s,n,t,a,o){const r=l("LoginFormTitle"),i=l("QrCode"),b=l("Divider"),j=l("Button");return e.getShow?(d(),c(x,{key:0},[m(r,{class:"enter-x"}),m("div",C,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(b,{class:"enter-x"},{default:g((()=>[u(f(e.t("sys.login.scanSign")),1)])),_:1}),m(j,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:g((()=>[u(f(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default v;
