import{X as e,ak as s,b2 as o}from"./index.f769efd5.js";import{j as i,aV as n,i as r,K as t,o as a,m as d,n as m,Q as l,Y as p,q as c}from"./vendor.686fd1d4.js";/* empty css              */var f=i({name:"CurrentPermissionMode",components:{Divider:n},setup(){const i=e(),n=r((()=>i.getProjectConfig.permissionMode)),{togglePermissionMode:t}=s();return{permissionMode:n,PermissionModeEnum:o,togglePermissionMode:t}}});const u={class:"mt-2"},M=p(" 当前权限模式： "),g=p(" 切换权限模式 ");f.render=function(e,s,o,i,n,r){const f=t("a-button"),P=t("Divider");return a(),d("div",u,[M,m(f,{type:"link"},{default:l((()=>[p(c(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),m(f,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:l((()=>[g])),_:1},8,["onClick"]),m(P)])};export default f;
