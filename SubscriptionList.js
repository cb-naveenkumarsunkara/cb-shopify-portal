import{d as I,o as p,e as d,t as c,u as $,q as o,s as T,r as B,h as i,j as s,v as L,F as E,g as N,f as a,y as f,w as h,R as M,x as H,z as R,A as V,B as m,P as q}from"./index.js";import{_ as k}from"./plugin-vue_export-helper.js";import{S as A}from"./Spinner.js";const F={class:"c-shopify-header"},j=I({props:{title:null},setup(u){return(_,e)=>(p(),d("div",F,c(u.title),1))}});var z=k(j,[["__scopeId","data-v-cee2722c"]]);const D=u=>(H("data-v-39531fb0"),u=u(),R(),u),G={class:"c-subscription-card"},O={key:1},U=D(()=>a("hr",null,null,-1)),J={class:"c-subscription-pagination"},K={class:"c-subscription-button"},Q={class:"c-subscription-button__content__text"},W={class:"c-subscription-button__content__text"},X=I({setup(u){const _=q.SUBSCRIPTIONS,e=$(),v=o(()=>e.getters.authToken),b=o(()=>e.getters.urlParams),S=o(()=>e.getters.isSubscriptionLoading);T(async()=>{var t;await e.dispatch("listSubscription",{customerId:(t=b.value)==null?void 0:t.customer_id,authenticationToken:v.value})});const y=o(()=>!e.getters.subscriptions.pageInfo.hasPreviousPage),w=o(()=>!e.getters.subscriptions.pageInfo.hasNextPage),l=B(0),P=o(()=>e.getters.subscriptions),x=o(()=>Math.ceil(e.getters.subscriptions.pageInfo.maxCount/7)),C=o(()=>{const t=e.getters.subscriptions;return t.pageInfo.currentEnd%7===0?t.pageInfo.currentEnd/7:Math.floor(t.pageInfo.currentEnd/7)+1}),g=async t=>{var n,r;switch(window.scrollTo(0,0),t){case"next":l.value=l.value+_,await e.dispatch("listSubscription",{customerId:(n=b.value)==null?void 0:n.customer_id,authenticationToken:v.value,after:l.value});break;case"prev":l.value=l.value-_,await e.dispatch("listSubscription",{customerId:(r=b.value)==null?void 0:r.customer_id,authenticationToken:v.value,after:l.value});break}};return(t,n)=>(p(),d("div",G,[i(z,{title:t.$t("portal.subscriptions")},null,8,["title"]),s(S)?(p(),L(A,{key:0})):(p(),d("div",O,[(p(!0),d(E,null,N(s(P).subscriptionList,r=>(p(),d("div",{key:r.id},[i(s(V),{key:"test",product:r,labels:{quantity:"units"},class:"c-shopify-subscriptions"},null,8,["product"])]))),128)),U,a("div",J,[a("div",null,c(t.$t("portal.showing"))+" "+c(s(C))+" "+c(t.$t("portal.to"))+" "+c(s(x)),1),a("div",K,[i(s(f),{onClick:n[0]||(n[0]=r=>g("prev")),disabled:s(y),class:"c-subscription-button__content"},{default:h(()=>[a("div",Q,[i(s(m)),a("div",null,c(t.$t("portal.latest")),1)])]),_:1},8,["disabled"]),i(s(f),{onClick:n[1]||(n[1]=r=>g("next")),disabled:s(w),class:"c-subscription-button__content"},{default:h(()=>[a("div",W,[a("div",null,c(t.$t("portal.older")),1),i(s(m),{class:"c-subscription-front-arrow"})])]),_:1},8,["disabled"])])])])),i(s(M))]))}});var et=k(X,[["__scopeId","data-v-39531fb0"]]);export{et as default};
