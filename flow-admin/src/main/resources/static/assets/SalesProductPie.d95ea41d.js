import{j as e,b3 as a,r as t,C as n,K as i,o as r,m as o,Q as s,n as d}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              */import{u as l}from"./useECharts.c55ecc62.js";import"./index.566a0f72.js";var u=e({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:i}=l(a);return n((()=>e.loading),(()=>{e.loading||i({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"电子产品"},{value:310,name:"服装"},{value:274,name:"化妆品"},{value:400,name:"家居"}].sort((function(e,a){return e.value-a.value})),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 400*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});u.render=function(e,a,t,n,l,u){const m=i("Card");return r(),o(m,{title:"成交占比",loading:e.loading},{default:s((()=>[d("div",{ref:"chartRef",style:{width:e.width,height:e.height}},null,4)])),_:1},8,["loading"])};export default u;
