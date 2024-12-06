import{g as V,w as F,A as Z,x as G,y as K,P as h,j as e,z as k,r as y,B as Y,E as O,D as H,u as E,k as A,l as R,n as J,i as Q,S as X,L as b,o as ee}from"./index-0e8f3c6f.js";/* empty css               */import{v as se}from"./v4-4a60fe23.js";import{s as q}from"./styled-components.browser.esm-8b345603.js";import{u as ae,y as te,a as ie,b as oe,F as re}from"./yupFormSchemas-99bc6c52.js";import{F as le}from"./FormErrors-c0ebe89e.js";import{u as ne}from"./useDispatch-b139ab9d.js";var D={exports:{}};(function(i,o){(function(a){var s=/^(b|B)$/,d={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},x={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function n(u){var m,f,g,w,_,j,C,r,p,v,N,I,z,S,P,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},t=[],M=0,l=void 0,B=void 0;if(isNaN(u))throw new TypeError("Invalid number");return f=c.bits===!0,N=c.unix===!0,m=c.base||2,v=c.round!==void 0?c.round:N?1:2,j=c.locale!==void 0?c.locale:"",C=c.localeOptions||{},I=c.separator!==void 0?c.separator:"",z=c.spacer!==void 0?c.spacer:N?"":" ",P=c.symbols||{},S=m===2&&c.standard||"jedec",p=c.output||"string",w=c.fullform===!0,_=c.fullforms instanceof Array?c.fullforms:[],l=c.exponent!==void 0?c.exponent:-1,g=2<m?1e3:1024,(r=(B=Number(u))<0)&&(B=-B),(l===-1||isNaN(l))&&(l=Math.floor(Math.log(B)/Math.log(g)))<0&&(l=0),8<l&&(l=8),p==="exponent"?l:(B===0?(t[0]=0,t[1]=N?"":d[S][f?"bits":"bytes"][l]):(M=B/(m===2?Math.pow(2,10*l):Math.pow(1e3,l)),f&&g<=(M*=8)&&l<8&&(M/=g,l++),t[0]=Number(M.toFixed(0<l?v:0)),t[0]===g&&l<8&&c.exponent===void 0&&(t[0]=1,l++),t[1]=m===10&&l===1?f?"kb":"kB":d[S][f?"bits":"bytes"][l],N&&(t[1]=S==="jedec"?t[1].charAt(0):0<l?t[1].replace(/B$/,""):t[1],s.test(t[1])&&(t[0]=Math.floor(t[0]),t[1]=""))),r&&(t[0]=-t[0]),t[1]=P[t[1]]||t[1],j===!0?t[0]=t[0].toLocaleString():0<j.length?t[0]=t[0].toLocaleString(j,C):0<I.length&&(t[0]=t[0].toString().replace(".",I)),p==="array"?t:(w&&(t[1]=_[l]?_[l]:x[S][l]+(f?"bit":"byte")+(t[0]===1?"":"s")),p==="object"?{value:t[0],symbol:t[1],exponent:l}:t.join(z)))}n.partial=function(u){return function(m){return n(m,u)}},i.exports=n})()})(D);var ce=D.exports;const de=V(ce);class L{static validate(o,a){if(!a)return;if(a.image&&!o.type.startsWith("image"))throw new Error(F("fileUploader.image"));if(a.storage.maxSizeInBytes&&o.size>a.storage.maxSizeInBytes)throw new Error(F("fileUploader.size",de(a.storage.maxSizeInBytes)));const s=$(o.name);if(a.formats&&!a.formats.includes(s))throw new Error(F("fileUploader.formats",a.formats.join(", ")))}static async upload(o,a){try{this.validate(o,a)}catch(f){return Promise.reject(f)}const s=$(o.name),d=se(),x=`${d}.${s}`,{uploadCredentials:n,downloadUrl:u,privateUrl:m}=await this.fetchFileCredentials(x,a);return await this.uploadToServer(o,n),{id:d,name:o.name,sizeInBytes:o.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:m,downloadUrl:u,new:!0}}static async fetchFileCredentials(o,a){const s=Z.get(),{data:d}=await G.get(`/tenant/${s}/file/credentials`,{params:{filename:o,storageId:a.storage.id}});return d}static async uploadToServer(o,a){try{const s=a.url,d=new FormData;for(const[x,n]of Object.entries(a.fields||{}))d.append(x,n);return d.append("file",o),K.post(s,d,{headers:{"Content-Type":"multipart/form-data"}})}catch(s){throw console.error(s),s}}}function $(i){if(!i)return null;const a=/(?:\.([^.]+))?$/.exec(i);return a?a[1]:null}const me=q.div`
  .img-card:hover .img-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .img-buttons {
    display: none;
    position: relative;
    bottom: 2.1rem;
    width: calc(100px);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .img-buttons * {
    color: white;
  }
`,he=q.div`
  /* The Modal (background) */
  .modal {
    display: block;
    position: fixed; /* Stay in place */
    z-index: 9999; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(
      0,
      0,
      0,
      0.9
    ); /* Black w/ opacity */
  }

  /* Modal Content (Image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image (Image Text) - Same Width as the Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation - Zoom in the Modal */
  .modal-content,
  #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
`;function W(i){return e.jsx(he,{children:e.jsxs("div",{className:"modal",children:[e.jsx("span",{className:"close",onClick:i.onClose,children:"×"}),e.jsx("img",{className:"modal-content",src:i.src,alt:i.alt})]})})}W.propTypes={src:h.string.isRequired,alt:h.string.isRequired,onClose:h.func.isRequired};const xe=i=>i.loading?e.jsx("span",{className:"spinner-border spinner-border-sm"}):i.iconClass?e.jsx("i",{className:i.iconClass}):null;class ue{static success(o){k.options.toastClass="toastr",k.options.positionClass="toast-bottom-left",k.success(o)}static error(o){k.options.toastClass="toastr",k.options.positionClass="toast-bottom-left",k.error(o)}}function U(i){const[o,a]=y.useState(!1),[s,d]=y.useState(null),x=y.useRef(),n=()=>{const{value:r}=i;return r?Array.isArray(r)?r:[r]:[]},u=()=>n().map(r=>({uid:r.id||void 0,name:r.name,status:"done",url:r.downloadUrl})),m=r=>{i.onChange(n().filter(p=>p.id!==r))},f=async r=>{try{const p=r.target.files;if(!p||!p.length)return;let v=p[0];L.validate(v,{storage:i.storage,image:!0}),a(!0),v=await L.upload(v,{storage:i.storage,image:!0});const N={avatars:v};x.current.value="",await Y.updateProfile(N),ue.success(F("auth.profile.success")),a(!1),i.onChange([...n(),v])}catch(p){x.current.value="",console.error(p),a(!1),O.showMessage(p)}},g=r=>{d({src:r.downloadUrl,alt:r.name})},w=()=>{d(null)},{max:_,readonly:j}=i,C=e.jsxs("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[e.jsx(xe,{loading:o,iconClass:"fas fa-plus"}),e.jsx("div",{className:"header__image"}),e.jsx("input",{style:{display:"none"},disabled:o||j,accept:"image/*",type:"file",onChange:f,ref:x})]});return e.jsxs(me,{children:[j||_&&u().length>=_?null:C,n()&&n().length?e.jsx("div",{className:"d-flex flex-row flex-wrap",children:n().map(r=>e.jsxs("div",{className:"mr-2 mb-2 img-card",style:{height:"100px"},children:[e.jsx("img",{alt:r.name,src:r.downloadUrl,className:"header__profile__image",style:{width:"100px",height:"100px",objectFit:"cover"}}),e.jsxs("div",{className:"img-buttons rounded-bottom ",children:[e.jsx("button",{type:"button",className:"btn btn-link",onClick:()=>g(r),children:e.jsx("i",{className:"fas fa-search"})}),!j&&e.jsx("button",{type:"button",className:"btn btn-link ml-2",onClick:()=>m(r.id),children:e.jsx("i",{className:"fas fa-times"})})]})]},r.id))}):null,s&&e.jsx(W,{src:s.src,alt:s.alt,onClose:()=>w()})]})}U.propTypes={readonly:h.bool,max:h.number,storage:h.object,value:h.any,onChange:h.func};function T(i){const{label:o,name:a,hint:s,storage:d,max:x,required:n,externalErrorMessage:u}=i,{errors:m,formState:{touched:f,isSubmitted:g},setValue:w,watch:_,register:j}=ae();y.useEffect(()=>{j({name:a})},[j,a]);const C=le.errorMessage(a,m,f,g,u);return e.jsxs("div",{className:"form-group",children:[!!o&&e.jsx("label",{className:`col-form-label ${n?"required":null}`,htmlFor:a,children:o}),e.jsx("br",{}),e.jsx(U,{storage:d,value:_(a),onChange:r=>{w(a,r,{shouldValidate:!0,shouldDirty:!0}),i.onChange&&i.onChange(r)},max:x}),e.jsx("div",{className:"invalid-feedback",children:C}),!!s&&e.jsx("small",{className:"form-text text-muted",children:s})]})}T.defaultProps={max:void 0,required:!1};T.propTypes={storage:h.object.isRequired,max:h.number,required:h.bool,name:h.string.isRequired,label:h.string,hint:h.string,formItemProps:h.object};const pe=H().shape({avatars:te.images(F("user.fields.avatars"),{max:1})});function ye(){var u;const i=ne();E(A.selectTotal);const o=E(A.selectTotalPerday);y.useEffect(()=>{const m={status:"completed"};i(R.doCountDay()),i(R.doFetch(m,m))},[i]);const a=()=>{i(ee.doSignout())};J();const s=E(Q.selectCurrentUser),d=y.useRef(null),[x]=y.useState(()=>({avatars:(s||{}).avatars||[]})),n=ie({resolver:oe.yupResolver(pe),mode:"all",defaultValues:x});return e.jsxs("div",{className:"app__profile",children:[e.jsxs("div",{className:"profiles__header",children:[e.jsx("div",{className:"header__background"}),e.jsxs("div",{className:"carde__profile",children:[e.jsx("div",{className:"cadre__top",children:e.jsxs("div",{className:"cadre__left",children:[e.jsx(re,{...n,children:e.jsx("form",{children:e.jsx(T,{name:"avatars",storage:X.values.userAvatarsProfiles,max:1})})}),e.jsxs("div",{className:"left__details",children:[e.jsxs("div",{className:"user__title",children:[s==null?void 0:s.fullName,e.jsx("img",{src:"/images/check.png",alt:"",style:{width:30}})]}),e.jsxs("div",{className:"my__code",children:["UID : ",s==null?void 0:s.invitationcode]}),e.jsx("div",{className:"small__invitation",children:e.jsxs("div",{className:"small__inviation__left",children:[e.jsx("span",{className:"promotion__code",children:"Promotion code:"}),e.jsxs("span",{ref:d,children:[" ",s==null?void 0:s.refcode]})]})})]})]})}),e.jsxs("div",{className:"cadre__bottom",children:[e.jsxs("div",{className:"",children:[e.jsxs("span",{className:"title__cadre",children:["$",o]}),e.jsx("span",{className:"promotion__code",children:"Today's earnings"})]}),e.jsx("div",{className:"second__cadre"}),e.jsxs("div",{className:"firt__cadre",children:[e.jsxs("span",{className:"title__cadre",children:[" ","$",((u=s==null?void 0:s.balance)==null?void 0:u.toFixed(2))||0]}),e.jsx("span",{className:"promotion__code",children:"Wallet Amount"})]})]}),e.jsxs("div",{className:"assesment__",children:[e.jsx("div",{className:"text__assesment",children:"Credit assesment:"}),e.jsx("div",{className:"credit__bar",children:e.jsxs("div",{className:"circle__bar",style:{left:`calc(${s!=null&&s.score?s.score:100}% - 30px)`},children:[s!=null&&s.score?s.score:100,"%"]})})]})]})]}),e.jsxs("div",{className:"profile__content",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",className:"titre",children:"My Finance"}),e.jsxs("div",{className:"detail__section",children:[e.jsx(b,{to:"/withdraw",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-money-check"}),e.jsx("span",{children:"withdraw"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(b,{to:"/validation",className:"remove__ligne",children:e.jsxs("div",{className:"line__section",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa fa-check"}),e.jsx("span",{children:"Validation"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",className:"titre",children:"My Details"}),e.jsxs("div",{className:"detail__section",children:[e.jsx(b,{to:"/myprofile",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-user profile__icon"}),e.jsx("span",{children:"Profile"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(b,{to:"/wallet",className:"remove__ligne",children:e.jsxs("div",{className:"line__section",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-wallet profile__icon"}),e.jsx("span",{children:"Wallet"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",className:"titre",children:"Other"}),e.jsxs("div",{className:"detail__section",children:[e.jsx(b,{to:"/online",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("img",{src:"/icons/headset.svg",alt:"",style:{width:20,color:"white"}})," ",e.jsx("span",{children:"Customer Support"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(b,{to:"/transacation",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-arrow-right-arrow-left profile__icon"}),e.jsx("span",{children:"Transaction"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(b,{to:"/order",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-clock-rotate-left profile__icon"}),e.jsx("span",{children:"Tasks History"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(b,{to:"/security",className:"remove__ligne",children:e.jsxs("div",{className:"line__section",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-lock profile__icon"}),e.jsx("span",{children:"Security"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]})]}),e.jsx("div",{className:"logout__button",onClick:()=>a(),children:"Logout"})]})}export{ye as default};
