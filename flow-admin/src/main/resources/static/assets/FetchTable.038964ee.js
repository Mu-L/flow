import{_ as e}from"./TableImg.3a357da5.js";import"./BasicForm.9dacb4c6.js";import{u as i}from"./useTable.4c66a5b7.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.4a445053.js";import{j as t,K as a,o as s,m as d,n,Q as m,Y as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";import"./index.643db95a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2d1288e4.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";var c=t({components:{BasicTable:e},setup(){const[e,{reload:t}]=i({title:"远程加载示例",api:r,columns:o()});return{registerTable:e,handleReloadCurrent:function(){t()},handleReload:function(){t({page:1})}}}});const j={class:"p-4"},l=p(" 刷新当前页 "),b=p(" 刷新并返回第一页 ");c.render=function(e,i,o,r,t,p){const c=a("a-button"),f=a("BasicTable");return s(),d("div",j,[n(f,{onRegister:e.registerTable},{toolbar:m((()=>[n(c,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[l])),_:1},8,["onClick"]),n(c,{type:"primary",onClick:e.handleReload},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;
