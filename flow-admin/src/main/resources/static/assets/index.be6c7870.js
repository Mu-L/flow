var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,r=(e,r)=>{for(var i in r||(r={}))l.call(r,i)&&s(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&s(e,i,r[i]);return e};import{B as i,a as n}from"./index.393263b2.js";import{P as o}from"./index.2ec2ebc0.js";import{j as c,b2 as d,aJ as u,ce as p,r as m,C as v,J as f,i as h,u as S,K as y,at as g,o as b,m as O,Q as C,n as j,V as k,ah as x,Y as N,q as w,X as J,w as P,N as T}from"./vendor.686fd1d4.js";/* empty css              */import{a as K}from"./dept.5c1dec99.js";import{b4 as M}from"./index.f769efd5.js";import{_ as E}from"./Tree.vue_vue&type=style&index=0&lang.4da3b2fa.js";import"./useWindowSizeFn.d82e06bf.js";import"./useContentViewHeight.528cd165.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";import"./useContextMenu.225f05a2.js";/* empty css              */var L=c({props:{title:{type:String,default:"人员选择"}},name:"OrgSelector",components:{BasicModal:i,PageWrapper:o,Tag:d,BasicTree:E,Spin:u,CloseCircleOutlined:p},setup(e,{emit:t}){const l=m([]),a=m(!1),s=m([]),i=m(!1),o=m([]),c=m([]),d=m(null);function u(){const e=S(d);if(!e)throw new Error("tree is null!");return e}v(c,((e,t)=>{if(a.value){const t=e.map((e=>{let t=M(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));f((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setCheckedKeys(e)}))}else{const t=e.map((e=>{let t=M(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));f((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setSelectedKeys(e)}))}}),{immediate:!0,deep:!0}),v(o,((e,t)=>{if(!a.value){const t=e.map((e=>{let t=M(s.value,(t=>t.id===e),{id:"id",pid:"pid",children:"children"});return t=r({},t),delete t.children,t}));f((()=>{l.value=JSON.parse(JSON.stringify(t)),u().setSelectedKeys(e)}))}}),{immediate:!0,deep:!0});const[p,{setModalProps:y,closeModal:g}]=n((e=>{return t=this,l=null,r=function*(){const{selectorProps:t}=e;i.value=!0,a.value=t.multiSelect,K().then((e=>{s.value=e;let l=t.selectedList.map((e=>e.id));a.value?(c.value=l,setTimeout((()=>{u().setCheckedKeys(c.value),u().setExpandedKeys(c.value)}),200)):(o.value=l,setTimeout((()=>{u().setSelectedKeys(o.value),u().setExpandedKeys(o.value)}),200))})).finally((()=>{i.value=!1})),y({wrapClassName:"selector-content"})},new Promise(((e,a)=>{var s=e=>{try{n(r.next(e))}catch(t){a(t)}},i=e=>{try{n(r.throw(e))}catch(t){a(t)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);n((r=r.apply(t,l)).next())}));var t,l,r}));const b=h((()=>"选择人员"));return{treeRef:d,multiSelect:a,treeData:s,treeLoading:i,registerModal:p,getTitle:b,selectedList:l,removeAllSelected:function(){a.value?c.value=[]:o.value=[]},removeSelectedItem:function(e){a.value?c.value.splice(c.value.findIndex((t=>t===e)),1):o.value.splice(o.value.findIndex((t=>t===e)),1)},handleSubmit:function(){t("success",l),g()},handleCheck:function(e){a.value?c.value=JSON.parse(JSON.stringify(e.checked)):c.value=JSON.parse(JSON.stringify(e.checked.length>0?[e.checked[0]]:[]))},handleSelect:function(e){a.value||(o.value=e)}}}});const B={class:"selected-items"};L.render=function(e,t,l,a,s,r){const i=y("Tag"),n=y("CloseCircleOutlined"),o=y("BasicTree"),c=y("PageWrapper"),d=y("BasicModal"),u=g("loading");return b(),O(d,T({wrapClassName:"selector-body org"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:C((()=>[j("div",B,[(b(!0),O(k,null,x(e.selectedList,(t=>(b(),O(i,{color:"processing",closable:"",onClose:l=>{l.preventDefault(),e.removeSelectedItem(t.id)}},{default:C((()=>[N(w(t.shortName),1)])),_:2},1032,["onClose"])))),256)),e.selectedList.length>0?(b(),O(n,{key:0,class:"close-all",title:"清空",onClick:e.removeAllSelected},null,8,["onClick"])):J("",!0)]),j(c,{dense:"",contentClass:"flex"},{default:C((()=>[P(j(o,{ref:"treeRef",class:"w-4/4 org-tree",title:"组织",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onCheck:e.handleCheck,onSelect:e.handleSelect,checkable:!!e.multiSelect,selectable:!e.multiSelect,checkStrictly:!0,autoExpandParent:""},null,8,["treeData","onCheck","onSelect","checkable","selectable"]),[[u,e.treeLoading]])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default L;
