import{j as s,bt as a,b3 as l,aS as e,aR as n,K as o,o as t,m as i,Q as c,n as d,V as r,ah as f,X as p,Y as m,q as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_}from"./index.7fecfddd.js";import{applicationList as x}from"./data.565ebb3f.js";var b=s({components:{List:a,ListItem:a.Item,Card:l,Icon:_,[e.name]:e,[n.name]:n},setup:()=>({prefixCls:"account-center-application",list:x})});const C=m(" 活跃用户："),j=m(" 万 "),v=m(" 新增用户：");b.render=function(s,a,l,e,n,_){const x=o("Icon"),b=o("Card"),w=o("ListItem"),I=o("a-col"),$=o("a-row"),L=o("List");return t(),i(L,{class:s.prefixCls},{default:c((()=>[d($,{gutter:16},{default:c((()=>[(t(!0),i(r,null,f(s.list,(a=>(t(),i(I,{key:a.title,span:6},{default:c((()=>[d(w,null,{default:c((()=>[d(b,{hoverable:!0,class:`${s.prefixCls}__card`},{default:c((()=>[d("div",{class:`${s.prefixCls}__card-title`},[a.icon?(t(),i(x,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):p("",!0),m(" "+u(a.title),1)],2),d("div",{class:`${s.prefixCls}__card-num`},[C,d("span",null,u(a.active),1),j],2),d("div",{class:`${s.prefixCls}__card-num`},[v,d("span",null,u(a.new),1)],2),a.download?(t(),i(x,{key:0,class:`${s.prefixCls}__card-download`,icon:a.download},null,8,["class","icon"])):p("",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default b;
