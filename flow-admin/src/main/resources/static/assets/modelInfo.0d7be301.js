import{aw as e}from"./index.566a0f72.js";var l,o;(o=l||(l={})).ModelInfoPageList="/flow/flowable/modelInfo/getPagerModel",o.GetById="/flow/flowable/modelInfo/get",o.GetByModelId="/flow/flowable/modelInfo/getByModelId",o.PublishBpmn="/flow/flowable/bpmn/publishBpmn",o.StopBpmn="/flow/flowable/bpmn/stopBpmn",o.SaveOrUpdate="/flow/flowable/modelInfo/saveOrUpdateModelInfo",o.Delete="/flow/flowable/modelInfo/deleteByIds",o.CheckEntityExist="/flow/flowable/modelInfo/checkEntityExist",o.GetBpmnByModelKey="/flow/flowable/bpmn/getBpmnByModelKey";const t=o=>{const t=o&&{pageNum:o.pageNum,pageSize:o.pageSize};let a=o||{};a&&(delete a.pageNum,delete a.pageSize);const p={query:t,entity:a};return e.post({url:l.ModelInfoPageList,params:p})};function a(o){return e.get({url:l.GetBpmnByModelKey+"/"+o.modelKey,params:{}})}const p=o=>e.post({url:l.SaveOrUpdate,params:o}),s=o=>e.post({url:l.PublishBpmn+"/"+o}),n=o=>e.post({url:l.StopBpmn+"/"+o}),d=o=>e.get({url:l.GetByModelId+"/"+o}),f=o=>e.post({url:l.Delete,params:o}),m=o=>e.post({url:l.CheckEntityExist,params:o});export{d as a,t as b,n as c,f as d,m as e,a as g,s as p,p as s};
