var e=(e,t,i)=>new Promise(((n,o)=>{var d=e=>{try{l(i.next(e))}catch(t){o(t)}},a=e=>{try{l(i.throw(e))}catch(t){o(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(d,a);l((i=i.apply(e,t)).next())}));import{_ as t}from"./TableImg.53dad38d.js";import{f as i}from"./BasicForm.2372b7e8.js";import{u as n}from"./useTable.8df61517.js";import{o}from"./select.49398e66.js";import{d}from"./table.addd839d.js";import{j as a,r as l,K as r,o as s,m,n as c,Q as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.61e11b2d.js";import"./index.ba319b32.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.131f7f29.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>e(this,null,(function*(){return"2"===t?"不能输入该值":""}))},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:o},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:100}];var f=a({components:{BasicTable:t,TableAction:i},setup(){const t=l(""),[i]=n({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:d,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(e){var i;t.value=e.key,null==(i=e.onEdit)||i.call(e,!0)}function a(e){var i;t.value="",null==(i=e.onEdit)||i.call(e,!1,!1)}function r(i){return e(this,null,(function*(){var e;(yield null==(e=i.onEdit)?void 0:e.call(i,!1,!0))&&(t.value="")}))}return{registerTable:i,handleEdit:o,createActions:function(e,i){return e.editable?[{label:"保存",onClick:r.bind(null,e,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:a.bind(null,e,i)}}]:[{label:"编辑",disabled:!!t.value&&t.value!==e.key,onClick:o.bind(null,e)}]},onEditChange:function({column:e,value:t,record:i}){"id"===e.dataIndex&&(i.editValueRefs.name4.value=`${t}`)}}}});const b={class:"p-4"};f.render=function(e,t,i,n,o,d){const a=r("TableAction"),l=r("BasicTable");return s(),m("div",b,[c(l,{onRegister:e.registerTable,onEditChange:e.onEditChange},{action:p((({record:t,column:i})=>[c(a,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"])])};export default f;
