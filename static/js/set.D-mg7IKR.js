import{d as e,av as a,r as s,aA as t,o as l,c as r,m as u,w as o,Z as n,l as m,t as d,$ as p,a2 as c,ay as i,aH as v,cP as f,cQ as _,a0 as x,a1 as g}from"./index.Ba5-doou.js";import{E as w}from"./el-card.D2khrh39.js";import{E as h,a as y}from"./el-col.DfHEDFCu.js";import{E as j}from"./el-image-viewer.Clqu8uYO.js";import{_ as V}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./debounce.CcJUImaE.js";import"./position.CWH-O7Qp.js";const U=V(e({__name:"set",setup(e){const{t:V}=a(),U=s(),$=t();l((async()=>{U.value=await $.getUserInfo()}));const C=s(""),E=s("");function I(e){C.value&&E.value?E.value.length<6?i.error(V("userset.message.xx2")):v.confirm(V("userset.message.xx3"),V("userset.message.title"),{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{f(C.value.trim(),E.value.trim()).then((()=>{i.success(V("userset.message.xx4")+E.value),window.location.reload()}))})):i.error(V("userset.message.xx1"))}return(e,a)=>{const s=h,t=j,l=_,i=x,v=g,f=y,V=w;return r(),u(V,{style:{margin:"10px","text-align":"center"}},{default:o((()=>[n(f,{gutter:20},{default:o((()=>[n(s,{span:18},{default:o((()=>[m("h2",null,d(e.$t("userset.title")),1)])),_:1}),U.value?(r(),u(s,{key:0,span:18},{default:o((()=>[n(l,{value:U.value.username,class:"item"},{default:o((()=>[n(t,{src:U.value.avatar},null,8,["src"])])),_:1},8,["value"])])),_:1})):p("",!0),n(s,{span:18},{default:o((()=>[n(i,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),placeholder:e.$t("userset.newUsername")},null,8,["modelValue","placeholder"])])),_:1}),n(s,{span:18},{default:o((()=>[n(i,{type:"password",modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value=e),placeholder:e.$t("userset.newPassword")},null,8,["modelValue","placeholder"])])),_:1}),n(s,{span:18},{default:o((()=>[n(v,{type:"primary",onClick:I},{default:o((()=>[c("修改")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-a5ead824"]]);export{U as default};
