var r;import e from"./DetailModal.d0847803.js";import{_ as o}from"./TableImg.55b28cb3.js";import{f as i}from"./BasicForm.aa38e971.js";import{u as t}from"./useTable.6d63aca0.js";import{b as a}from"./index.7e2439d5.js";import{aw as s,e as n,a$ as d}from"./index.f9173908.js";import{getColumns as l}from"./data.0bd01027.js";import{j as c,r as m,C as f,J as p,am as u,K as j,o as b,m as x,V as g,ah as y,w as v,v as E,n as h,Q as w,Y as C,q as D}from"./vendor.686fd1d4.js";import"./index.4e800eb0.js";/* empty css              */import"./useDescription.e966e468.js";/* empty css              *//* empty css              */import"./useForm.8a322010.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.77b911cf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";(r||(r={})).Error="/error";var L=c({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=m(),o=m([]),{t:i}=n(),c=d(),[j,{setTableData:b}]=t({title:i("sys.errorLog.tableTitle"),columns:l(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=a();return f((()=>c.getErrorLogInfoList),(r=>{p((()=>{b(u(r))}))}),{immediate:!0}),{register:j,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield s.get({url:r.Error})},new Promise(((r,t)=>{var a=r=>{try{n(i.next(r))}catch(e){t(e)}},s=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,a){const s=j("DetailModal"),n=j("a-button"),d=j("TableAction"),l=j("BasicTable");return b(),x("div",T,[(b(!0),x(g,null,y(r.imgList,(r=>v((b(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(l,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(d,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
