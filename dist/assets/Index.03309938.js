import{g as $,h as P,r as f,a as j,j as U,d as n,o as V,k as A,w as t,b as e,e as s,f as B,l as D,c as E,i as G}from"./index.cab202b7.js";import{_ as H}from"./UploadImage.bb9df4ea.js";import{N}from"./validate.f5f1e6c0.js";const K={class:"w-full flex flex-col min-h-[300px]"},R=s("label",{for:""},"Post Title",-1),q=s("label",{for:""},"Post Content",-1),S={__name:"ModalAddPostContent",props:{visible:{type:Boolean,default:!1}},emits:["change"],setup(C,{emit:p}){const m=C;$(),P();const d={xl:4,md:6,xs:8},r={xl:12,md:14,xs:16},u=f(!1),_=f(null),o=j({name:""}),b=c=>{_.value=c},v={name:[N("name")]};function h(c){u.value=c,p("change",c)}return U(()=>m.visible,c=>{u.value=c},{deep:!0}),(c,g)=>{const a=H,l=n("a-form-item"),y=n("a-input"),i=n("QuillEditor"),w=n("a-button"),M=n("a-modal");return V(),A(l,{form:o,ref:b,model:o,rules:v,"label-col":d,"wrapper-col":r},{default:t(()=>[e(M,{title:"Post Content",visible:u.value,width:920,footer:!1,onCancel:g[0]||(g[0]=k=>h(!1))},{default:t(()=>[s("div",K,[e(l,null,{default:t(()=>[e(a,{title:"image"})]),_:1}),e(l,null,{default:t(()=>[R,e(y)]),_:1}),e(l,null,{default:t(()=>[q,e(i,{theme:"snow"})]),_:1}),e(l,null,{default:t(()=>[e(w,{type:"primary",class:"base-color-theme"},{default:t(()=>[B(" save change ")]),_:1})]),_:1})])]),_:1},8,["visible"])]),_:1},8,["form","model"])}}},z=s("div",{class:"w-full h-[200px]"},[s("img",{class:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:""})],-1),F={class:"relative flex flex-col w-full min-h-[300px]"},Q=s("i",{class:"fal fa-plus"},null,-1),W=s("div",{class:"w-full mt-10 h-[200px]"},[s("img",{class:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:""})],-1),Y=s("h3",{class:"mt-2 font-bold"},"Title Post Content",-1),L=s("p",{class:"text-justify"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores blanditiis commodi consectetur culpa dolorum earum eos esse impedit ipsa iure molestiae non nostrum obcaecati provident saepe, sed temporibus?",-1),J={__name:"CompanyTable",setup(C){const p=$();P();const m=f(!1),d={xl:4,md:6,xs:8},r={xl:12,md:14,xs:16},u=f(null),_=j(),o=f({}),b=a=>{u.value=a},v=()=>{u.value.validate().then(a=>{console.log(a)}).catch(a=>{})},h={name:[N("name")]};function c(){p.dispatch("data-resources/listing",{actionUri:"company"}).then(a=>{a.code===200&&(o.value=a.data,console.log(o.value))}).catch(a=>{console.log(a)})}function g(){m.value=!0}return D(()=>{c()}),(a,l)=>{const y=H,i=n("a-form-item"),w=n("a-input"),M=n("a-divider"),k=n("a-button"),I=n("a-form"),T=S;return V(),E("div",null,[e(I,{form:_,ref:b,model:_,rules:h,"label-col":d,"wrapper-col":r},{default:t(()=>[e(i,{label:" "},{default:t(()=>[e(y,{title:"Profile"})]),_:1}),e(i,{label:"Company Name",name:"company_name"},{default:t(()=>[e(w,{size:"large",value:o.value.name,"onUpdate:value":l[0]||(l[0]=x=>o.value.name=x)},null,8,["value"])]),_:1}),e(i,{label:"Slogan",name:"company_name"},{default:t(()=>[e(w,{size:"large",value:o.value.slogan,"onUpdate:value":l[1]||(l[1]=x=>o.value.slogan=x)},null,8,["value"])]),_:1}),e(i,{label:" "},{default:t(()=>[z]),_:1}),e(i,{label:" "},{default:t(()=>[e(y,{title:"gallery"})]),_:1}),e(i,{label:" "},{default:t(()=>[e(M,null,{default:t(()=>[B("Manage Post Content")]),_:1}),s("div",F,[e(k,{onClick:g,type:"primary",shape:"circle",class:"absolute base-color-theme right-0"},{default:t(()=>[Q]),_:1}),W,Y,L])]),_:1}),e(i,{label:" "},{default:t(()=>[e(k,{class:"bg-blue-500",type:"primary",onClick:v},{default:t(()=>[B("save change")]),_:1})]),_:1})]),_:1},8,["form","model"]),e(T,{visible:m.value,onChange:l[2]||(l[2]=x=>m.value=x)},null,8,["visible"])])}}},ee={__name:"Index",setup(C){const p=P(),m=G(),d=p.meta.tab,r=f(d);function u(_){_===1&&m.push({name:"company.index"}).catch(()=>{})}return(_,o)=>{const b=n("a-tab-pane"),v=n("a-tabs");return V(),A(v,{class:"base-table-main",activeKey:r.value,"onUpdate:activeKey":o[0]||(o[0]=h=>r.value=h),"tab-click":u(r.value)},{default:t(()=>[e(b,{key:"1",tab:"Company Info"},{default:t(()=>[e(J)]),_:1})]),_:1},8,["activeKey","tab-click"])}}};export{ee as default};
