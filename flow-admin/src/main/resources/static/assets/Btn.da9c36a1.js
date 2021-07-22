import{j as e,bB as s,aV as a,i as o,k as r,l as t,K as i,at as n,o as d,m as c,x as l,n as m,q as u,V as f,X as p,w as x,Y as y}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import P from"./CurrentPermissionMode.559a28aa.js";import{ak as _,N as h,X as k,f as b,b2 as v}from"./index.643db95a.js";import{A as j}from"./index.1e57fd22.js";import{P as C}from"./index.2b3a6879.js";import"./useContentViewHeight.dc5cb96c.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var g=e({components:{Alert:s,PageWrapper:C,CurrentPermissionMode:P,Divider:a,Authority:j},setup(){const{hasPermission:e}=_(),s=h(),a=k(),r=b(),t=o((()=>a.getProjectConfig.permissionMode===v.BACK));return{hasPermission:e,permissionStore:s,switchToken:function(e){return a=this,o=null,t=function*(){const a="fakeToken"+e;r.setToken(a),r.getUserInfoAction(),s.changePermissionCode()},new Promise(((e,s)=>{var r=e=>{try{n(t.next(e))}catch(a){s(a)}},i=e=>{try{n(t.throw(e))}catch(a){s(a)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,i);n((t=t.apply(a,o)).next())}));var a,o,t},isBackPremissionMode:t}}});const w=l();r("data-v-3cba4497");const M=y(" 当前拥有的code列表: "),A=y(" 点击切换按钮权限(用户id为2) "),B=y(" 点击切换按钮权限(用户id为1,默认) "),T=y("组件方式判断权限"),S=y(" 拥有code ['1000']权限可见 "),V=y(" 拥有code ['2000']权限可见 "),W=y(" 拥有code ['1000','2000']角色权限可见 "),D=y("函数方式方式判断权限"),I=y(" 拥有code ['1000']权限可见 "),K=y(" 拥有code ['2000']权限可见 "),X=y(" 拥有code ['1000','2000']角色权限可见 "),q=y("指令方式方式判断权限(该方式不能动态修改权限.)"),z=y(" 拥有code ['1000']权限可见 "),F=y(" 拥有code ['2000']权限可见 "),H=y(" 拥有code ['1000','2000']角色权限可见 ");t();const L=w(((e,s,a,o,r,t)=>{const l=i("CurrentPermissionMode"),y=i("Divider"),P=i("Alert"),_=i("a-button"),h=i("Authority"),k=i("PageWrapper"),b=n("auth");return d(),c(k,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:w((()=>[m(l),m("p",null,[M,m("a",null,u(e.permissionStore.getPermCodeList),1)]),m(y),m(P,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),m(y),m(_,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:w((()=>[A])),_:1},8,["disabled"]),m(_,{type:"primary",onClick:s[2]||(s[2]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:w((()=>[B])),_:1},8,["disabled"]),e.isBackPremissionMode?(d(),c(f,{key:0},[m(y,null,{default:w((()=>[T])),_:1}),m(h,{value:"1000"},{default:w((()=>[m(_,{type:"primary",class:"mx-4"},{default:w((()=>[S])),_:1})])),_:1}),m(h,{value:"2000"},{default:w((()=>[m(_,{color:"success",class:"mx-4"},{default:w((()=>[V])),_:1})])),_:1}),m(h,{value:["1000","2000"]},{default:w((()=>[m(_,{color:"error",class:"mx-4"},{default:w((()=>[W])),_:1})])),_:1}),m(y,null,{default:w((()=>[D])),_:1}),e.hasPermission("1000")?(d(),c(_,{key:0,type:"primary",class:"mx-4"},{default:w((()=>[I])),_:1})):p("",!0),e.hasPermission("2000")?(d(),c(_,{key:1,color:"success",class:"mx-4"},{default:w((()=>[K])),_:1})):p("",!0),e.hasPermission(["1000","2000"])?(d(),c(_,{key:2,color:"error",class:"mx-4"},{default:w((()=>[X])),_:1})):p("",!0),m(y,null,{default:w((()=>[q])),_:1}),x(m(_,{type:"primary",class:"mx-4"},{default:w((()=>[z])),_:1},512),[[b,"1000"]]),x(m(_,{color:"success",class:"mx-4"},{default:w((()=>[F])),_:1},512),[[b,"2000"]]),x(m(_,{color:"error",class:"mx-4"},{default:w((()=>[H])),_:1},512),[[b,["1000","2000"]]])],64)):p("",!0)])),_:1})}));g.render=L,g.__scopeId="data-v-3cba4497";export default g;
