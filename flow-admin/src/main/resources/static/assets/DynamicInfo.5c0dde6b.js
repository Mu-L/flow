import{j as t,b3 as e,bt as a,K as s,o as i,m as r,Q as n,n as d,Y as o,q as m,N as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as c}from"./data.8ddc77c3.js";import{h as u}from"./header.d801b988.js";import{_ as p}from"./index.521cc965.js";var f=t({components:{Card:e,List:a,ListItem:a.Item,ListItemMeta:a.Item.Meta,Icon:p},setup:()=>({items:c,headerImg:u})});const I=o("更多");f.render=function(t,e,a,c,u,p){const f=s("a-button"),j=s("Icon"),b=s("ListItemMeta"),L=s("ListItem"),x=s("List"),_=s("Card");return i(),r(_,l({title:"最新动态"},t.$attrs),{extra:n((()=>[d(f,{type:"link",size:"small"},{default:n((()=>[I])),_:1})])),default:n((()=>[d(x,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[d(L,null,{default:n((()=>[d(b,null,{description:n((()=>[o(m(t.date),1)])),title:n((()=>[o(m(t.name)+" ",1),d("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:n((()=>[d(j,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;
