import{aw as e}from"./index.7fecfddd.js";var o,l;(l=o||(o={})).PageList="/flow/org/role/getPagerModel",l.PageListByPersonalId="/flow/org/role/getPagerModelByPersonalId",l.GetPersonalsByRole="/flow/org/role/getPersonalsByRole",l.SaveOrUpdate="/flow/org/role/saveOrUpdate",l.AddPersonalRoles="/flow/org/role//addPersonalRoles",l.Delete="/flow/org/role/delete",l.DeleteRolePersonal="/flow/org/role/deleteRolePersonal",l.CheckEntityExist="/flow/org/role/checkEntityExist",l.AllocationPersonals="/flow/org/personalRole/allocationPersonals";const a=l=>{const a=l&&{pageNum:l.pageNum,pageSize:l.pageSize};let r=l;const s=l.personalId;r&&(delete r.pageNum,delete r.pageSize,delete r.personalId);const t=s?o.PageListByPersonalId+`?personalId=${s}`:o.PageList,n={query:a,entity:r};return e.post({url:t,params:n})},r=l=>e.post({url:o.GetPersonalsByRole+"/"+l.roleId,params:l.personal}),s=l=>e.post({url:o.SaveOrUpdate,params:l}),t=l=>e.post({url:o.AllocationPersonals+"/"+l.roleId,params:l.personalList}),n=l=>e.post({url:o.Delete,params:l}),p=l=>e.post({url:o.CheckEntityExist,params:l});export{r as a,t as b,p as c,n as d,a as g,s};
