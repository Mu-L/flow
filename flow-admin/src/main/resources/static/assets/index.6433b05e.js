var r;import e from"./DetailModal.e0071641.js";import{_ as o}from"./TableImg.f7de9836.js";import{f as i}from"./BasicForm.49b9f6b2.js";import{u as t}from"./useTable.948e93a8.js";import{b as a}from"./index.b444bbac.js";import{aw as s,e as n,a$ as l}from"./index.0bb7f928.js";import{getColumns as d}from"./data.c477eccb.js";import{j as c,r as m,C as f,J as p,am as u,K as b,o as j,m as x,V as g,ah as y,w as v,v as E,n as h,Q as w,Y as C,q as D}from"./vendor.686fd1d4.js";import"./index.230aa949.js";/* empty css              */import"./useDescription.e4a37a49.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";(r||(r={})).Error="/error";var L=c({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=m(),o=m([]),{t:i}=n(),c=l(),[b,{setTableData:j}]=t({title:i("sys.errorLog.tableTitle"),columns:d(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=a();return f((()=>c.getErrorLogInfoList),(r=>{p((()=>{j(u(r))}))}),{immediate:!0}),{register:b,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield s.get({url:r.Error})},new Promise(((r,t)=>{var a=r=>{try{n(i.next(r))}catch(e){t(e)}},s=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,a){const s=b("DetailModal"),n=b("a-button"),l=b("TableAction"),d=b("BasicTable");return j(),x("div",T,[(j(!0),x(g,null,y(r.imgList,(r=>v((j(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(d,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
