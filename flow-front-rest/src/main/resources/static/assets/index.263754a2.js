import{y as n,b6 as e,r as o,Z as a,B as t,F as r,a1 as i,v as d}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              */import{P as s}from"./index.f67f9ef2.js";import l from"./DynamicInfo.3404c682.js";import m from"./BannerInfo.5c13e7c5.js";import c from"./NoticeInfo.7b9a417d.js";import f from"./ITWikiCard.eddb8b71.js";import p from"./ITContactCard.8a610c26.js";import u from"./CommonDownCard.a1c2df7f.js";import{dynamicInfoItems as I,bannerList as g,noticeInfoItems as j}from"./data.7c378f20.js";import"./index.06582e88.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.efd2f5af.js";/* empty css              *//* empty css              *//* empty css              */var y=n({components:{PageWrapper:s,DynamicInfo:l,BannerInfo:m,NoticeInfo:c,ITWikiCard:f,ITContactCard:p,CommonDownCard:u,Card:e},setup(){const n=o(!0);return setTimeout((()=>{n.value=!1}),1500),{loading:n,dynamicInfoItems:I,bannerInfoItems:g,noticeInfoItems:j}}});const x={class:"lg:flex"},C={class:"lg:w-10/10 w-full enter-y"},v={class:"flex"},w={class:"w-1/3 mr-4 enter-y"},b={class:"w-2/3 enter-y"},S={class:"lg:flex mt-4"},T={class:"w-1/4 w-full !mr-4 enter-y"},h={class:"w-3/4 w-full enter-y"};y.render=function(n,e,o,s,l,m){const c=a("BannerInfo"),f=a("NoticeInfo"),p=a("ITContactCard"),u=a("DynamicInfo"),I=a("PageWrapper");return t(),r(I,null,{default:i((()=>[d("div",x,[d("div",C,[d(c,{dataSource:n.bannerInfoItems,height:"400",class:"!my-4 enter-y",loading:n.loading},null,8,["dataSource","loading"])])]),d("div",v,[d("div",w,[d(c,{dataSource:n.bannerInfoItems,height:"270",class:"enter-y",loading:n.loading},null,8,["dataSource","loading"])]),d("div",b,[d(f,{dataSource:n.noticeInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),d("div",S,[d("div",T,[d(p,{loading:n.loading,class:"enter-y"},null,8,["loading"])]),d("div",h,[d(u,{dataSource:n.dynamicInfoItems,loading:n.loading,class:"enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default y;
