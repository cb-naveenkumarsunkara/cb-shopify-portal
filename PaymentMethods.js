import{S as m}from"./Spinner.js";import{u as v,M as f}from"./MethodCard.js";import{_ as u}from"./plugin-vue_export-helper.js";import{d as l,f as e,g as t,G as c,h as n,t as y,s as p,l as _,y as h,w as g,M as k,F as M,i as S,j as x}from"./index.js";const $={class:"index-page"},B={key:0},I={key:1,class:"cb-header"},P={key:"content"},C=l({props:{header:String,inited:Boolean,resource:String},setup(a){const r=a,[i,o,s,V]=v(r.resource);return(d,w)=>(e(),t("div",$,[d.$slots.header?(e(),t("div",B,[c(d.$slots,"header",{},void 0,!0)])):a.header?(e(),t("div",I,[n("h1",null,y(a.header),1)])):p("",!0),n("div",null,[_(s)?(e(),h(m,{key:1})):(e(),t("div",P,[c(d.$slots,"default",{data:_(i)},void 0,!0)]))])]))}});var D=u(C,[["__scopeId","data-v-f17d5cda"]]);const E={key:0},N={class:"pm-main-container"},L=l({setup(a){return(r,i)=>(e(),h(D,{header:r.$t("portal.payment_methods"),resource:_(k).PAYMENT_METHODS},{default:g(({data:o})=>[o?(e(),t("div",E,[n("div",N,[(e(!0),t(M,null,S(o,s=>(e(),t("div",{key:s.id},[x(f,{pm:s},null,8,["pm"])]))),128))])])):p("",!0)]),_:1},8,["header","resource"]))}});var j=u(L,[["__scopeId","data-v-348fd54a"]]);export{j as default};
