import{_ as e,u as s,L as n}from"./LoginFormTitle.73ff7bb2.js";import{j as t,aL as o,aV as a,i as r,u as i,K as l,o as c,m as d,n as m,Q as f,Y as g,q as u,V as x,X as p}from"./vendor.686fd1d4.js";/* empty css              */import{Q as b}from"./index.cc8e4217.js";import{e as j}from"./index.7fecfddd.js";import"./download.c870abce.js";import"./base64Conver.bb012c73.js";var v=t({name:"QrCodeForm",components:{Button:o,QrCode:b,Divider:a,LoginFormTitle:e},setup(){const{t:e}=j(),{handleBackLogin:t,getLoginState:o}=s();return{t:e,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(o)===n.QR_CODE))}}});const C={class:"enter-x min-w-64 min-h-64"};v.render=function(e,s,n,t,o,a){const r=l("LoginFormTitle"),i=l("QrCode"),b=l("Divider"),j=l("Button");return e.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",C,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(b,{class:"enter-x"},{default:f((()=>[g(u(e.t("sys.login.scanSign")),1)])),_:1}),m(j,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:f((()=>[g(u(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default v;
