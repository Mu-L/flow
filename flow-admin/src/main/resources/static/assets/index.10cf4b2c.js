import{ag as e,a6 as l,h as a}from"./index.f769efd5.js";import{P as s}from"./index.2ec2ebc0.js";import{j as t,ad as o,bB as r,r as n,K as c,o as i,m as d,Q as f,n as m,Y as u}from"./vendor.686fd1d4.js";/* empty css              */import"./useContentViewHeight.528cd165.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var p=t({name:"TabsDemo",components:{CollapseContainer:e,PageWrapper:s,[o.name]:o,[r.name]:r},setup(){const e=n(""),{closeAll:s,closeLeft:t,closeRight:o,closeOther:r,closeCurrent:c,refreshPage:i,setTitle:d}=l(),{createMessage:f}=a();return{closeAll:s,closeLeft:t,closeRight:o,closeOther:r,closeCurrent:c,refreshPage:i,setTabTitle:function(){e.value?d(e.value):f.error("请输入要设置的Tab标题！")},title:e}}});const C={class:"mt-2 flex flex-grow-0"},k=u(" 设置Tab标题 "),g=u(" 关闭所有 "),b=u(" 关闭左侧 "),h=u(" 关闭右侧 "),j=u(" 关闭其他 "),_=u(" 关闭当前 "),v=u(" 刷新当前 ");p.render=function(e,l,a,s,t,o){const r=c("a-alert"),n=c("a-button"),u=c("a-input"),p=c("CollapseContainer"),T=c("PageWrapper");return i(),d(T,{title:"标签页操作示例"},{default:f((()=>[m(p,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:f((()=>[m(r,{banner:"",message:"该操作不会影响页面标题，仅修改Tab标题"}),m("div",C,[m(n,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:f((()=>[k])),_:1},8,["onClick"]),m(u,{placeholder:"请输入",value:e.title,"onUpdate:value":l[1]||(l[1]=l=>e.title=l),class:"mr-4 w-12"},null,8,["value"])])])),_:1}),m(p,{class:"mt-4",title:"标签页操作"},{default:f((()=>[m(n,{class:"mr-2",onClick:e.closeAll},{default:f((()=>[g])),_:1},8,["onClick"]),m(n,{class:"mr-2",onClick:e.closeLeft},{default:f((()=>[b])),_:1},8,["onClick"]),m(n,{class:"mr-2",onClick:e.closeRight},{default:f((()=>[h])),_:1},8,["onClick"]),m(n,{class:"mr-2",onClick:e.closeOther},{default:f((()=>[j])),_:1},8,["onClick"]),m(n,{class:"mr-2",onClick:e.closeCurrent},{default:f((()=>[_])),_:1},8,["onClick"]),m(n,{class:"mr-2",onClick:e.refreshPage},{default:f((()=>[v])),_:1},8,["onClick"])])),_:1})])),_:1})};export default p;
