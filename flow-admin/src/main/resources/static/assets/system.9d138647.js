import{aw as s}from"./index.63ccfb82.js";var t,e;(e=t||(t={})).AccountList="/system/getAccountList",e.IsAccountExist="/system/accountExist",e.DeptList="/system/getDeptList",e.setRoleStatus="/system/setRoleStatus",e.MenuList="/system/getMenuList",e.RolePageList="/system/getRoleListByPage",e.GetAllRoleList="/system/getAllRoleList";const a=e=>s.get({url:t.AccountList,params:e}),o=e=>s.get({url:t.DeptList,params:e}),i=e=>s.get({url:t.MenuList,params:e}),l=e=>s.get({url:t.RolePageList,params:e}),r=e=>s.get({url:t.GetAllRoleList,params:e}),u=(e,a)=>s.post({url:t.setRoleStatus,params:{id:e,status:a}}),c=e=>s.post({url:t.IsAccountExist,params:{account:e}},{errorMessageMode:"none"});export{o as a,r as b,l as c,i as d,a as g,c as i,u as s};
