import{B as e}from"./index.389b283b.js";import{D as t}from"./index.988e0f96.js";import{e as s}from"./index.521cc965.js";import{getDescSchema as o}from"./data.ec18c99a.js";import{u as r}from"./useDescription.329ab4f6.js";import{j as i,K as a,o as n,m as d,Q as m,n as f,N as c}from"./vendor.686fd1d4.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */var p=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=r({column:2,schema:o()});return{register:t,useI18n:s,t:e}}});p.render=function(e,t,s,o,r,i){const p=a("Description"),l=a("BasicModal");return n(),d(l,c({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:m((()=>[f(p,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default p;
