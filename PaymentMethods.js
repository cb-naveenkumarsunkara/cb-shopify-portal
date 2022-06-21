import{S as z}from"./Spinner.js";import{_ as O}from"./plugin-vue_export-helper.js";import{d as I,f as s,g as n,E as L,h as e,t as i,s as b,x as E,M as T,r as P,a as U,v as p,S as V,G as K,l as o,F as $,k as f,w,y as S,j as x,i as Q}from"./index.js";const W={class:"index-page"},X={key:0},Z={key:1,class:"cb-header"},D={key:"content"},N=I({props:{header:String,inited:Boolean},setup(t){return(r,_)=>(s(),n("div",W,[r.$slots.header?(s(),n("div",X,[L(r.$slots,"header",{},void 0,!0)])):t.header?(s(),n("div",Z,[e("h1",null,i(t.header),1)])):b("",!0),e("div",null,[e("div",null,[t.inited?(s(),n("div",D,[L(r.$slots,"default",{},void 0,!0)])):(s(),E(z,{key:1}))])])]))}});var A=O(N,[["__scopeId","data-v-6eadbd9b"]]);const R={[T.PAYMENT_METHODS]:"listPaymentmethod",[T.SUBSCRIPTIONS]:"listSubscriptions"};function ee(t){const r=P(null),_=P(null),l=P(!1),c=U(),m=p(()=>c.getters.authToken),y=p(()=>c.getters.urlParams);async function d(){var h;r.value=null,_.value=null,l.value=!0;try{r.value=await V[R[t]](m.value,(h=y.value)==null?void 0:h.customer_id)}catch(k){k.value=k}finally{l.value=!1}}return d(),[r,_,l,d]}var te="https://cb-shopify-portal.netlify.app/visa.svg",ae="https://cb-shopify-portal.netlify.app/jcb.svg",se="https://cb-shopify-portal.netlify.app/mastercard.svg",oe="https://cb-shopify-portal.netlify.app/unionpay.svg",ne="https://cb-shopify-portal.netlify.app/amex.svg",re="https://cb-shopify-portal.netlify.app/dinersclub.svg",ie="https://cb-shopify-portal.netlify.app/discover.svg",le="https://cb-shopify-portal.netlify.app/paypal.svg",pe="https://cb-shopify-portal.netlify.app/apple-pay.svg",de="https://cb-shopify-portal.netlify.app/google-pay.svg",ce="https://cb-shopify-portal.netlify.app/shop-pay.svg",ue="https://cb-shopify-portal.netlify.app/card.svg",C=(t=>(t.visa="Visa",t.mastercard="MasterCard",t.american_express="American Express",t.discover="Discover",t.diners_club="Diners Club",t.jcb="JCB",t.unionpay="UnionPay",t.unknown="Card",t))(C||{});const he={class:"pm-container"},me={class:"pm-info-wrapper"},ye={class:"pm-info"},ve=["src"],_e={class:"pm-title"},fe={class:"pm-status"},ge={class:"pm-timeline"},be={key:1},Pe={key:0,class:"pm-edit-container"},ke={class:"pm-edit-info"},$e={class:"pm-edit-note"},we={class:"pm-edit-ctas"},Me=f(" Send update Email "),Se=f(" Cancel "),Te=I({props:{pm:Object},setup(t){const r=t,_={visa:te,jcb:ae,american_express:ne,diners_club:re,discover:ie,mastercard:se,unionpay:oe},{t:l}=K(),c=P(!1),m=P(!1),y=p(()=>{const{lastDigits:a,brand:u,paypalAccountEmail:B,source:q}=v.value;if(F)switch(q){case"apple_pay":return{title:l("portal.payment_method.card_ending",{method:"Apple Pay",lastDigits:a}),logo:pe};case"google_pay":return{title:l("portal.payment_method.card_ending",{method:"GPay",lastDigits:a}),logo:de};default:return{title:l("portal.payment_method.card_ending",{method:C[u]||C.unknown,lastDigits:a}),logo:_[u]||ue}}else{if(J)return{title:`PayPal ${B}`,logo:le};if(Y)return{title:`Shop Pay ending ${a}`,logo:ce}}return{}}),{pm:d}=r,h=U(),k=p(()=>h.getters.authToken),j=p(()=>h.getters.urlParams);p(()=>h.getters.toast);const g=p(()=>(d==null?void 0:d.instrument)||{}),F=p(()=>!!g.value.customerCreditCard),J=p(()=>!!g.value.customerPaypalBillingAgreement),Y=p(()=>!!g.value.customerShopPayAgreement),v=p(()=>g.value[Object.keys(g.value)[0]]||{});function M(){c.value=!c.value}function G(a=1){return["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a]}async function H(){var a;m.value=!0;try{const{id:u}=d||{};if(u)await V.sendUpdatePaymentmethodMail(u,k.value,(a=j.value)==null?void 0:a.customer_id),h.dispatch("showToast",{message:l("portal.payment_method.send_edit_mail.success"),showToast:!0,variant:"success"}),M();else throw l("portal.something_went_wrong")}catch(u){h.dispatch("showToast",{message:u,showToast:!0,variant:"alert"})}finally{m.value=!1}}return(a,u)=>(s(),n("div",he,[e("div",me,[e("div",ye,[e("img",{class:"pm-logo",src:o(y).logo,alt:"Payment method"},null,8,ve),e("div",null,[e("div",_e,i(o(y).title),1),e("div",fe,[o(v).expiryMonth&&o(v).expiryYear?(s(),n($,{key:0},[e("span",ge,[o(v).expired?(s(),n($,{key:0},[f(i(a.$t("portal.payment_method.expired")),1)],64)):(s(),n($,{key:1},[f(i(a.$t("portal.payment_method.valid_until")),1)],64))]),e("span",null,i(G(o(v).expiryMonth))+" "+i(o(v).expiryYear),1)],64)):o(v).inactive?(s(),n("span",be,i(a.$t("shopify.subscriptions_page.details.payment_methods.inactice")),1)):b("",!0)])])]),e("div",null,[c.value?b("",!0):(s(),E(o(S),{key:0,class:"pm-edit-btn",variant:"link",onClick:M},{default:w(()=>[f(i(a.$t("portal.common.edit")),1)]),_:1}))])]),c.value?(s(),n("div",Pe,[e("div",ke,[e("ul",null,[e("li",null,i(a.$t("portal.payment_method.send_edit_mail.title1")),1),e("li",null,i(a.$t("portal.payment_method.send_edit_mail.title2")),1),e("li",null,[e("span",$e,i(a.$t("portal.common.note"))+":",1),f(" "+i(a.$t("portal.payment_method.send_edit_mail.note")),1)])])]),e("div",we,[x(o(S),{variant:"primary",class:"pm-edit-primary-cta",onClick:H,loading:m.value},{default:w(()=>[Me]),_:1},8,["loading"]),x(o(S),{variant:"link",disabled:m.value,onClick:M},{default:w(()=>[Se]),_:1},8,["disabled"])])])):b("",!0)]))}});var xe=O(Te,[["__scopeId","data-v-c55c461c"]]);const Ce={key:0,class:"pm-main-container"},Oe=I({setup(t){const[r,_,l]=ee(T.PAYMENT_METHODS);return(c,m)=>(s(),E(A,{header:c.$t("portal.payment_methods"),inited:!o(l)},{default:w(()=>{var y;return[(y=o(r))!=null&&y.customerPaymentMethods?(s(),n("div",Ce,[(s(!0),n($,null,Q(o(r).customerPaymentMethods,d=>(s(),n("div",{key:d.id},[x(xe,{pm:d},null,8,["pm"])]))),128))])):b("",!0)]}),_:1},8,["header","inited"]))}});var Ue=O(Oe,[["__scopeId","data-v-3c374ada"]]);export{Ue as default};
