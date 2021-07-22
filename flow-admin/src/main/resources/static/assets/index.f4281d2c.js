import{i as t,e,c as n,w as a}from"./index.643db95a.js";import{z as u,A as o,a5 as r,i as s,a2 as l,b0 as i,r as c,u as d,_ as v,j as p,aL as f,K as m,o as C,m as y,N as S,Q as b,Y as g,q as x,n as h}from"./vendor.686fd1d4.js";function w(t,e="value",n="change"){const a=l(),c=null==a?void 0:a.emit,d=u({value:t[e]}),v=o(d);r((()=>{d.value=t[e]}));return[s({get:()=>d.value,set(t){i(t,v.value)||(d.value=t,null==c||c(n,t))}}),t=>{d.value=t},v]}var z=p({name:"CountButton",components:{Button:f},props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(n){const a=c(!1),{currentCount:u,isStart:o,start:l,reset:i}=function(t){const e=c(t),n=c(!1);let a;function u(){a&&window.clearInterval(a)}function o(){n.value=!1,u(),a=null}function r(){d(n)||a||(n.value=!0,a=setInterval((()=>{1===d(e)?(o(),e.value=t):e.value-=1}),1e3))}function s(){e.value=t,o()}return v((()=>{s()})),{start:r,reset:s,restart:function(){s(),r()},clear:u,stop:o,currentCount:e,isStart:n}}(n.count),{t:p}=e(),f=s((()=>d(o)?p("component.countdown.sendText",[d(u)]):p("component.countdown.normalText")));return r((()=>{void 0===n.value&&i()})),{handleStart:function(){return e=this,u=null,o=function*(){const{beforeStartFunc:e}=n;if(e&&t(e)){a.value=!0;try{(yield e())&&l()}finally{a.value=!1}}else l()},new Promise(((t,n)=>{var a=t=>{try{s(o.next(t))}catch(e){n(e)}},r=t=>{try{s(o.throw(t))}catch(e){n(e)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);s((o=o.apply(e,u)).next())}));var e,u,o},currentCount:u,loading:a,getButtonText:f,isStart:o}}});z.render=function(t,e,n,a,u,o){const r=m("Button");return C(),y(r,S(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:b((()=>[g(x(t.getButtonText),1)])),_:1},16,["disabled","onClick","loading"])};var B=p({name:"CountDownInput",components:{CountButton:z},inheritAttrs:!1,props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:e}=n("countdown-input"),[a]=w(t);return{prefixCls:e,state:a}}});B.render=function(t,e,n,a,u,o){const r=m("CountButton"),s=m("a-input");return C(),y(s,S(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),{addonAfter:b((()=>[h(r,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:1},16,["class","size","value"])};const A=a(B);a(z);export{A as C,w as u};
