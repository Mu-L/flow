import{b3 as e,aR as t,aw as a}from"./index.521cc965.js";var r,s;(s=r||(r={})).CompanyList="/flow/org/company/getCompanies",s.SaveOrUpdate="/flow/org/company/saveOrUpdate",s.Delete="/flow/org/company/delete",s.CheckEntityExist="/flow/org/company/checkEntityExist";const o=s=>{const o=a.post({url:r.CompanyList,params:s});return Promise.resolve(o).then((a=>{const r=e(a,{id:"id",children:"children",pid:"pid"});return t(r,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),r}))},i=e=>a.post({url:r.SaveOrUpdate,params:e}),n=e=>a.post({url:r.Delete,params:e}),p=e=>a.post({url:r.CheckEntityExist,params:e});export{p as c,n as d,o as g,i as s};
