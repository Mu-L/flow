import{P as e}from"./index.b3b6fdb5.js";import{_ as s}from"./BasicForm.a98eb535.js";import{u as r}from"./useForm.7ff3fa79.js";import{j as t,K as i,o,m as n,Q as d,n as a,Y as c}from"./vendor.686fd1d4.js";import"./index.7fecfddd.js";import"./useContentViewHeight.d2763f54.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              */import"./index.f287750a.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";const m=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var l=t({name:"ChangePassword",components:{BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:t}]=r({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:m});return{register:e,resetFields:t,handleSubmit:function(){return e=this,r=null,t=function*(){try{const e=yield s(),{passwordOld:r,passwordNew:t}=e}catch(e){}},new Promise(((s,i)=>{var o=e=>{try{d(t.next(e))}catch(s){i(s)}},n=e=>{try{d(t.throw(e))}catch(s){i(s)}},d=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,n);d((t=t.apply(e,r)).next())}));var e,r,t}}}});const p={class:"py-8 bg-white flex flex-col justify-center items-center"},f={class:"flex justify-center"},u=c(" 重置 "),j=c(" 确认 ");l.render=function(e,s,r,t,c,m){const l=i("BasicForm"),b=i("a-button"),x=i("PageWrapper");return o(),n(x,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:d((()=>[a("div",p,[a(l,{onRegister:e.register},null,8,["onRegister"]),a("div",f,[a(b,{onClick:e.resetFields},{default:d((()=>[u])),_:1},8,["onClick"]),a(b,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:d((()=>[j])),_:1},8,["onClick"])])])])),_:1})};export default l;
