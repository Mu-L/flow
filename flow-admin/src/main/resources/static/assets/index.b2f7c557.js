var r;import e from"./DetailModal.64aa2090.js";import{_ as o}from"./TableImg.a57718a0.js";import{f as i}from"./BasicForm.437ea19e.js";import{u as t}from"./useTable.eeda62e8.js";import{b as a}from"./index.08be5da6.js";import{aw as s,e as n,a$ as d}from"./index.081912a1.js";import{getColumns as l}from"./data.294ab16f.js";import{j as m,r as c,C as f,J as p,am as u,K as j,o as b,m as x,V as g,ah as y,w as v,v as E,n as h,Q as w,Y as C,q as D}from"./vendor.686fd1d4.js";import"./index.e76a3901.js";/* empty css              */import"./useDescription.f8462bba.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";(r||(r={})).Error="/error";var L=m({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=c(),o=c([]),{t:i}=n(),m=d(),[j,{setTableData:b}]=t({title:i("sys.errorLog.tableTitle"),columns:l(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=a();return f((()=>m.getErrorLogInfoList),(r=>{p((()=>{b(u(r))}))}),{immediate:!0}),{register:j,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield s.get({url:r.Error})},new Promise(((r,t)=>{var a=r=>{try{n(i.next(r))}catch(e){t(e)}},s=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,a){const s=j("DetailModal"),n=j("a-button"),d=j("TableAction"),l=j("BasicTable");return b(),x("div",T,[(b(!0),x(g,null,y(r.imgList,(r=>v((b(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(l,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(d,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
