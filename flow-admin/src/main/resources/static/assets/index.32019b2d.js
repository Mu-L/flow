var r;import e from"./DetailModal.e7fdcb71.js";import{_ as o}from"./TableImg.51b451b7.js";import{f as i}from"./BasicForm.e292c287.js";import{u as t}from"./useTable.d377fe38.js";import{b as s}from"./index.393263b2.js";import{aw as a,e as n,a$ as d}from"./index.f769efd5.js";import{getColumns as l}from"./data.e18b3fde.js";import{j as m,r as c,C as f,J as p,am as u,K as b,o as j,m as x,V as g,ah as y,w as v,v as E,n as h,Q as w,Y as C,q as D}from"./vendor.686fd1d4.js";import"./index.804e62e6.js";/* empty css              */import"./useDescription.ecefb78d.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";(r||(r={})).Error="/error";var L=m({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=c(),o=c([]),{t:i}=n(),m=d(),[b,{setTableData:j}]=t({title:i("sys.errorLog.tableTitle"),columns:l(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=s();return f((()=>m.getErrorLogInfoList),(r=>{p((()=>{j(u(r))}))}),{immediate:!0}),{register:b,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield a.get({url:r.Error})},new Promise(((r,t)=>{var s=r=>{try{n(i.next(r))}catch(e){t(e)}},a=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,s){const a=b("DetailModal"),n=b("a-button"),d=b("TableAction"),l=b("BasicTable");return j(),x("div",T,[(j(!0),x(g,null,y(r.imgList,(r=>v((j(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(a,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(l,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(d,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
