import{b3 as e,aR as o,aw as t}from"./index.f9173908.js";var i,n;(n=i||(i={})).GetPositionInfos="/flow/org/positionInfo/getPositionInfoTree",n.GetPositionInfoTree="/flow/org/positionInfo/getPositionInfoTree",n.GetPagerModel="/flow/org/positionInfo/getPagerModel",n.SaveOrUpdate="/flow/org/positionInfo/saveOrUpdate",n.BatchSaveOrUpdatePositionSeqAndPosition="/flow/org/positionInfo/batchSaveOrUpdatePositionSeqAndPosition",n.Delete="/flow/org/positionInfo/delete",n.CheckEntityExist="/flow/org/positionInfo/checkEntityExist";const s=n=>{const s=t.post({url:i.GetPositionInfoTree,params:n});return Promise.resolve(s).then((t=>{const i=e(t,{id:"id",children:"children",pid:"pid"});return o(i,(e=>{e.showName=`${e.name} (${e.code})`,"1"===e.sourceType&&(e.selectable=!1,e.disabled=!0),0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),i}))},r=e=>{const o=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let n=e||{};n&&(delete n.pageNum,delete n.pageSize);const s={query:o,entity:n};return t.post({url:i.GetPagerModel,params:s})},a=e=>t.post({url:i.SaveOrUpdate,params:e}),p=e=>t.post({url:i.CheckEntityExist,params:e}),d=e=>t.post({url:i.Delete,params:e});export{r as a,p as c,d,s as g,a as s};
