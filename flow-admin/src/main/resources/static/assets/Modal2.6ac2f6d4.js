import{B as e,a as s}from"./index.389b283b.js";import{j as o,K as t,o as a,m as r,Q as l,n as i,N as n,Y as d}from"./vendor.686fd1d4.js";import"./index.521cc965.js";import"./useWindowSizeFn.d82e06bf.js";var c=o({components:{BasicModal:e},setup(){const[e,{closeModal:o,setModalProps:t}]=s();return{register:e,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=d(" 从内部关闭弹窗 "),m=d(" 从内部修改title ");c.render=function(e,s,o,d,c,M){const u=t("a-button"),f=t("BasicModal");return a(),r(f,n(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:l((()=>[i(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:l((()=>[p])),_:1},8,["onClick"]),i(u,{type:"primary",onClick:e.setModalProps},{default:l((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;
