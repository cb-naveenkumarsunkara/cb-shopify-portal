import{d as T,a as B,v as n,x as $,o as L,r as N,f as l,g as _,j as r,l as e,y as E,F as M,i as R,h as i,t as u,z as f,w as h,R as V,A as D,B as q,C as A,D as m,P as F}from"./index.js";import{C as H}from"./CreateHeader.js";import{S as j}from"./Spinner.js";import{_ as z}from"./plugin-vue_export-helper.js";const G=d=>(D("data-v-6708f0e5"),d=d(),q(),d),O={class:"c-subscription-card"},U={key:1},J=G(()=>i("hr",null,null,-1)),K={class:"c-subscription-pagination"},Q={class:"c-subscription-button"},W={class:"c-subscription-button__content__text"},X={class:"c-subscription-button__content__text"},Y=T({setup(d){const b=F.SUBSCRIPTIONS,s=B(),v=n(()=>s.getters.authToken),p=n(()=>s.getters.urlParams),I=n(()=>s.getters.isViewLoading),k=$();L(async()=>{var t;await s.dispatch("listSubscription",{customerId:(t=p.value)==null?void 0:t.customer_id,authenticationToken:v.value})});const S=n(()=>!s.getters.subscriptions.pageInfo.hasPreviousPage),y=n(()=>!s.getters.subscriptions.pageInfo.hasNextPage),c=N(0),w=n(()=>s.getters.subscriptions),C=n(()=>Math.ceil(s.getters.subscriptions.pageInfo.maxCount/7)),P=n(()=>{const t=s.getters.subscriptions;return t.pageInfo.currentEnd%7===0?t.pageInfo.currentEnd/7:Math.floor(t.pageInfo.currentEnd/7)+1}),x=t=>{var o;k.push({name:"subscription_details",query:{subscription_id:t,customer_id:(o=p.value)==null?void 0:o.customer_id}})},g=async t=>{var o,a;switch(window.scrollTo(0,0),t){case"next":c.value=c.value+b,await s.dispatch("listSubscription",{customerId:(o=p.value)==null?void 0:o.customer_id,authenticationToken:v.value,after:c.value});break;case"prev":c.value=c.value-b,await s.dispatch("listSubscription",{customerId:(a=p.value)==null?void 0:a.customer_id,authenticationToken:v.value,after:c.value});break}};return(t,o)=>(l(),_("div",O,[r(H,{title:t.$t("portal.subscriptions")},null,8,["title"]),e(I)?(l(),E(j,{key:0})):(l(),_("div",U,[(l(!0),_(M,null,R(e(w).subscriptionList,a=>(l(),_("div",{key:a.id},[r(e(A),{key:"test",product:a,labels:{quantity:"units"},class:"c-shopify-subscriptions c-cursor-pointer",onClick:Z=>x(a.id)},null,8,["product","onClick"])]))),128)),J,i("div",K,[i("div",null,u(t.$t("portal.showing"))+" "+u(e(P))+" "+u(t.$t("portal.to"))+" "+u(e(C)),1),i("div",Q,[r(e(f),{"data-testid":"listPrevButton",onClick:o[0]||(o[0]=a=>g("prev")),disabled:e(S),class:"c-subscription-button__content"},{default:h(()=>[i("div",W,[r(e(m)),i("div",null,u(t.$t("portal.latest")),1)])]),_:1},8,["disabled"]),r(e(f),{"data-testid":"listNextButton",onClick:o[1]||(o[1]=a=>g("next")),disabled:e(y),class:"c-subscription-button__content"},{default:h(()=>[i("div",X,[i("div",null,u(t.$t("portal.older")),1),r(e(m),{class:"c-subscription-front-arrow"})])]),_:1},8,["disabled"])])])])),r(e(V))]))}});var at=z(Y,[["__scopeId","data-v-6708f0e5"]]);export{at as default};
