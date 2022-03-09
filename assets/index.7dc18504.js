import{G as S}from"./index.5d5a7776.js";import{_ as c,u as b,s as g,b as m}from"./index.83d7437d.js";import{o as i,i as u,l as e,a9 as $,a3 as v,g as k,t as w,n as I,y as C,r as l,c as B,e as p,f as t,h as d,p as T,k as N}from"./vendor.27ec842b.js";const z={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},M={class:"pan-info"},V={class:"pan-info-roles-container"};function D(a,r,s,_,h,n){return i(),u("div",{style:v({zIndex:s.zIndex,height:s.height,width:s.width}),class:"pan-item"},[e("div",M,[e("div",V,[$(a.$slots,"default",{},void 0,!0)])]),e("div",{style:v({backgroundImage:`url(${s.image})`}),class:"pan-thumb"},null,4)],4)}var f=c(z,[["render",D],["__scopeId","data-v-553eb806"]]);const E={props:{className:{type:String,default:""},text:{type:String,default:"vue-element-admin"}}},P=["data-letters"],j=["data-letters"];function G(a,r,s,_,h,n){return i(),u("a",{class:I([s.className,"link--mallki"]),href:"#"},[k(w(s.text)+" ",1),e("span",{"data-letters":s.text},null,8,P),e("span",{"data-letters":s.text},null,8,j)],2)}var x=c(E,[["render",G]]);const o=a=>(T("data-v-49d6a386"),a=a(),N(),a),L=o(()=>e("div",{class:"box-card-header"},[e("img",{src:"https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"})],-1)),R={style:{position:"relative"}},q={style:{"padding-top":"35px"},class:"progress-item"},A=o(()=>e("span",null,"JavaScript/ES6+",-1)),F={class:"progress-item"},H=o(()=>e("span",null,"CSS3/SASS",-1)),J={class:"progress-item"},O=o(()=>e("span",null,"HTML",-1)),U={class:"progress-item"},K=o(()=>e("span",null,"Vue3",-1)),Q={class:"progress-item"},W=o(()=>e("span",null,"ESLint/Prettier",-1)),X={class:"progress-item"},Y=o(()=>e("span",null,"TypeScript",-1)),Z={class:"progress-item"},ee=o(()=>e("span",null,"React",-1)),te={class:"progress-item"},se=o(()=>e("span",null,"Data Structure",-1)),ae={style:{margin:"20px 0",position:"relative"}},ne={style:{float:"right"}},oe=["href"],re={style:{float:"right","margin-right":"10px"}},_e=["href"],ce={components:{PanThumb:f,Mallki:x},filters:{statusFilter(a){return{success:"success",pending:"danger"}[a]}},data(){return{statisticsData:{article_count:1024,pageviews_count:1024}}}},ie=Object.assign(ce,{setup(a){const r=b(),{avatar:s}=C(r);return(_,h)=>{const n=l("el-progress"),y=l("el-card");return i(),B(y,{class:"box-card-component",style:{"margin-left":"-20px","min-width":"300px"}},{header:p(()=>[L]),default:p(()=>[e("div",R,[t(f,{image:d(s),class:"panThumb"},null,8,["image"]),t(x,{"class-name":"mallki-text",text:"newbee's resume"}),e("div",q,[A,t(n,{percentage:90})]),e("div",F,[H,t(n,{percentage:90})]),e("div",J,[O,t(n,{percentage:90})]),e("div",U,[K,t(n,{percentage:85})]),e("div",Q,[W,t(n,{percentage:95})]),e("div",X,[Y,t(n,{percentage:70})]),e("div",Z,[ee,t(n,{percentage:50})]),e("div",te,[se,t(n,{percentage:80})]),e("div",ae,[e("div",ne,[e("a",{href:d(g).leetcode,target:"_blank"},[t(m,{"icon-class":"leetcode"})],8,oe)]),e("div",re,[e("a",{href:d(g).github,target:"_blank"},[t(m,{"icon-class":"github"})],8,_e)])])])]),_:1})}}});var de=c(ie,[["__scopeId","data-v-49d6a386"]]);const le={class:"container"},pe={setup(a){return(r,s)=>{const _=l("el-row");return i(),u("div",le,[t(S,{class:"github-corner"}),t(_,{style:{"justify-content":"center"}},{default:p(()=>[t(de)]),_:1})])}}};var me=c(pe,[["__scopeId","data-v-65fc3dd1"]]);export{me as default};
