import{_ as e}from"./TableImg.fd7646bb.js";import"./BasicForm.5fbfb734.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.83d6955e.js";import{h as i}from"./index.eb9d6ed9.js";import{d as n}from"./table.b3033b18.js";import{j as s,r as a,u as l,K as c,o as r,m as d,n as m,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.1ee1a774.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2bb7e54d.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.28b3aabe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";var b=s({components:{BasicTable:e},setup(){const e=a(null),{createMessage:s}=i();function c(){const o=l(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:n,columns:o(),changeLoading:function(){c().setLoading(!0),setTimeout((()=>{c().setLoading(!1)}),1e3)},changeColumns:function(){c().setColumns(t())},reloadTable:function(){c().setColumns(o()),c().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){c().setPagination({current:2}),c().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){c().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){c().clearSelectedRowKeys()}}}});const p={class:"p-4"},C={class:"mb-4"},j=u(" 还原 "),g=u(" 开启loading "),k=u(" 更改Columns "),x=u(" 获取Columns "),w=u(" 获取表格数据 "),R=u(" 跳转到第2页 "),S={class:"mb-4"},_=u(" 获取选中行 "),L=u(" 获取选中行Key "),y=u(" 设置选中行 "),K=u(" 清空选中行 "),T=u(" 获取分页信息 ");b.render=function(e,o,t,i,n,s){const a=c("a-button"),l=c("BasicTable");return r(),d("div",p,[m("div",C,[m(a,{class:"mr-2",onClick:e.reloadTable},{default:f((()=>[j])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeLoading},{default:f((()=>[g])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeColumns},{default:f((()=>[k])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getColumn},{default:f((()=>[x])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getTableData},{default:f((()=>[w])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:f((()=>[R])),_:1},8,["onClick"])]),m("div",S,[m(a,{class:"mr-2",onClick:e.getSelectRowList},{default:f((()=>[_])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:f((()=>[L])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:f((()=>[y])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.clearSelect},{default:f((()=>[K])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getPagination},{default:f((()=>[T])),_:1},8,["onClick"])]),m(l,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default b;
