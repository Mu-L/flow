import{B as r,a as e}from"./index.6186eede.js";import{j as a,K as s,o as t,m as o,Q as n,n as i,N as d,Y as c}from"./vendor.686fd1d4.js";import"./index.643db95a.js";/* empty css              */var f=a({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:a}]=e();return{register:r,closeDrawer:a}}});const l=c(" Drawer Info. "),m=c(" 内部关闭drawer ");f.render=function(r,e,a,c,f,p){const w=s("a-button"),u=s("BasicDrawer");return t(),o(u,d(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:n((()=>[l,i(w,{type:"primary",onClick:r.closeDrawer},{default:n((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default f;
