import{_ as e}from"./TableImg.507e398b.js";import"./BasicForm.a98eb535.js";import{u as o}from"./useTable.54605782.js";import{getBasicColumns as t,getBasicShortColumns as n}from"./tableData.83d6955e.js";import{h as i}from"./index.7fecfddd.js";import{d as s}from"./table.5fce85f8.js";import{j as a,K as c,o as l,m as r,n as d,Q as f,Y as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7ff3fa79.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.f287750a.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.dc62f82e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";var u=a({components:{BasicTable:e},setup(){const{createMessage:e}=i();function a(){}const[c,{setLoading:l,setColumns:r,getColumns:d,getDataSource:f,reload:m,getPaginationRef:u,setPagination:g,getSelectRows:p,getSelectRowKeys:b,setSelectedRowKeys:C,clearSelectedRowKeys:j}]=o({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:s,columns:t(),rowKey:"id",showTableSetting:!0,onChange:a,rowSelection:{type:"checkbox"},onColumnsChange:e=>{}});return{registerTable:c,changeLoading:function(){l(!0),setTimeout((()=>{l(!1)}),1e3)},changeColumns:function(){r(n())},reloadTable:function(){r(t()),m({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){g({current:2}),m()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){C(["0","1","2"])},clearSelect:function(){j()},onChange:a}}});const g={class:"p-4"},p={class:"mb-4"},b=m(" 还原 "),C=m(" 开启loading "),j=m(" 更改Columns "),k=m(" 获取Columns "),x=m(" 获取表格数据 "),S=m(" 跳转到第2页 "),w={class:"mb-4"},R=m(" 获取选中行 "),T=m(" 获取选中行Key "),_=m(" 设置选中行 "),h=m(" 清空选中行 "),y=m(" 获取分页信息 ");u.render=function(e,o,t,n,i,s){const a=c("a-button"),m=c("BasicTable");return l(),r("div",g,[d("div",p,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:f((()=>[b])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:f((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:f((()=>[j])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:f((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:f((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:f((()=>[S])),_:1},8,["onClick"])]),d("div",w,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:f((()=>[R])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:f((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:f((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:f((()=>[h])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:f((()=>[y])),_:1},8,["onClick"])]),d(m,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;
