import{P as e}from"./index.3c0dbcda.js";import{f as t}from"./index.566a0f72.js";import"./account.8b69242d.js";import{j as n,K as o,o as r,m as s,Q as a,n as i,Y as d}from"./vendor.686fd1d4.js";import"./useContentViewHeight.d2889939.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var c=n({name:"TestSessionTimeout",components:{PageWrapper:e},setup(){const e=t();return{test:function(){return t=this,n=null,o=function*(){e.setToken(void 0),e.setSessionTimeout(!0)},new Promise(((e,r)=>{var s=e=>{try{i(o.next(e))}catch(t){r(t)}},a=e=>{try{i(o.throw(e))}catch(t){r(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,a);i((o=o.apply(t,n)).next())}));var t,n,o}}}});const m=d("点击触发用户登录过期");c.render=function(e,t,n,d,c,p){const u=o("a-button"),f=o("PageWrapper");return r(),s(f,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a((()=>[i(u,{type:"primary",onClick:e.test},{default:a((()=>[m])),_:1},8,["onClick"])])),_:1})};export default c;
