import{_ as e}from"./TableImg.41359114.js";import{f as i}from"./BasicForm.2ed1f7b7.js";import{u as o}from"./useTable.9b3a557e.js";import{j as t,k as n,l as a,m as r}from"./dictionary.4a4b0ac5.js";import{P as s}from"./index.e2991800.js";import{h as d}from"./index.5dab9bd2.js";import{b as c}from"./index.d939de4e.js";import l from"./DictionaryModal.88242005.js";import{j as m,r as p,K as f,o as u,m as b,n as j,Q as h,X as g,Y as y}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.16917873.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.d45a4f2e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.98a0466e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.37bc3259.js";import"./base64Conver.bb012c73.js";import"./index.f0f47cc5.js";import"./useContentViewHeight.e8047e09.js";/* empty css              *//* empty css              */const{createMessage:x}=d();var w=m({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:i},setup(e,{emit:i}){const[s,{openModal:d,setModalProps:l}]=c(),m=p(""),[f,{reload:u,setProps:b,setTableData:j,setSelectedRowKeys:h}]=o({title:"列表",api:t,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:f,registerModal:s,dictTypeId:m,handleDeleteStop:function(e,i){i.stopPropagation()},clickDictionary:function(e){h(e.id),i("handleSelect",e.id)},changeDictionary:function({keys:e,rows:o}){i("handleSelect",o[0].id)},filterByDictType:function(e){m.value=e,b({searchInfo:{dicTypeId:e}}),u({page:1})},cleanTableData:function(){j([]),m.value=""},handleCreate:function(){""!==m.value?(l({title:"新增字典"}),d(!0,{record:{dicTypeId:m.value},isUpdate:!1})):x.warning("请选择数据类型！",2)},handleEdit:function(e,i){i.stopPropagation(),l({title:"修改字典"}),d(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{u()}))},handleSuccess:function(){u()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");w.render=function(e,i,o,t,n,a){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("DictionaryModal");return u(),b("div",S,[j(d,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h((()=>[""!==e.dictTypeId?(u(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:i})=>[j(s,{actions:[{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,i),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default w;
