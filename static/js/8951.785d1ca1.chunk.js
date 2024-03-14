"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8951],{88951:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(24846),n=a(72791),r=a(89743),l=a(2677),i=a(43360),d=a(75630),c=a(11087),o=a(81482),h=a(62591),m=a(78983),u=a(55294),x=a(80184);const b=()=>{const[e,t]=(0,n.useState)(!1),[a,b]=(0,n.useState)([]),[j,p]=(0,n.useState)({circle:"",dthNumber:"",dthAmount:"",tpin:""});(0,n.useEffect)((()=>{u.Z.get("https://backend-razo.vercel.app/list/dth/recharge").then((e=>{const t=e.data;b(t)})).catch((e=>{console.log(e)}))}),[]);const g=e=>{p({...j,[e.target.name]:e.target.value})};return(0,x.jsx)("div",{children:(0,x.jsxs)(r.Z,{className:"m-2",children:[(0,x.jsx)(l.Z,{md:4,sm:12,className:"",children:(0,x.jsxs)("div",{className:"shadow p-3 mb-5 bg-white rounded",children:[(0,x.jsx)("div",{className:"fw-bold text-light bg-black p-2  rounded-2",children:(0,x.jsx)("h5",{children:"Dth Recharge"})}),(0,x.jsxs)(d.Z,{className:"m-4 border-bottom",noValidate:!0,validated:e,onSubmit:e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),t(!0),u.Z.post("https://backend-razo.vercel.app/dth/recharge",j).then((e=>{alert("dth recharged successfully"),console.log(e.data)})).catch((e=>console.log(e)))},children:[(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{className:"fw-medium",children:"Mobile Operator"}),(0,x.jsxs)(d.Z.Select,{"aria-label":"Default select example",name:"operator",required:!0,id:"validationCustom02",onChange:g,children:[(0,x.jsx)("option",{className:"text-secondary",children:"Select Operator"}),(0,x.jsx)("option",{children:"Tata Sky"}),(0,x.jsx)("option",{children:"Dish Tv"}),(0,x.jsx)("option",{children:"Videocon D2H"}),(0,x.jsx)("option",{children:"Sun Direct Tv (with Validation)"}),(0,x.jsx)("option",{children:"Airtel DTH"})]}),(0,x.jsx)(m.CO,{invalid:!0,children:"Please provide a valid Operator"})]}),(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{className:"fw-medium",children:"Dth Number"}),(0,x.jsx)(d.Z.Control,{type:"number",placeholder:"Enter dth number",name:"dthNumber",required:!0,onChange:g}),(0,x.jsx)(m.CO,{invalid:!0,children:"Please Enter your Mobile Number"})]}),(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{className:"fw-medium",children:"Recharge Amount"}),(0,x.jsx)(d.Z.Control,{type:"number",placeholder:"Enter dth amount",name:"dthAmount",required:!0,onChange:g}),(0,x.jsx)(m.CO,{invalid:!0,children:"Please Enter your Amount"}),(0,x.jsx)("div",{className:"mt-1",children:(0,x.jsx)("button",{className:"text-light rounded bg-info border-0",children:"Plan"})})]}),(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{className:"fw-medium",children:"T-Pin"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Enter transaction pin",name:"tpin",required:!0,onChange:g}),(0,x.jsx)(m.CO,{invalid:!0,children:"Please Enter your pin"}),(0,x.jsx)("div",{className:"text-end m-0",children:(0,x.jsx)(c.OL,{className:"text-decoration-none",children:"Generate Or Forgot Pin ??"})})]}),(0,x.jsx)("div",{className:"text-center",children:(0,x.jsxs)(i.Z,{className:"text-italic",type:"submit",children:[" ",(0,x.jsx)(s.Z,{icon:o.t,className:"me-2"}),"Pay Now"]})})]})]})}),(0,x.jsx)(l.Z,{md:8,sm:12,children:(0,x.jsxs)("div",{className:"shadow p-3 mb-5 bg-white rounded",children:[(0,x.jsx)("div",{className:"fw-bold text-light bg-black p-2 rounded",children:(0,x.jsx)("h5",{children:"Recent Dth Recharge"})}),(0,x.jsxs)(h.Z,{responsive:!0,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Order ID"}),(0,x.jsx)("th",{children:"Recharge Details"}),(0,x.jsx)("th",{children:"Amount/ Commission"}),(0,x.jsx)("th",{children:"Status"})]})}),(0,x.jsx)("tbody",{children:a.map(((e,t)=>(0,x.jsxs)("tr",{className:"align-middle",children:[(0,x.jsxs)("td",{children:[e.transactionId,(0,x.jsx)("p",{children:e.rechargeTime})]}),(0,x.jsxs)("td",{children:[(0,x.jsxs)("h6",{children:["Number - ",e.dthNumber]}),(0,x.jsxs)("h6",{children:["Operator - ",e.operator]})]}),(0,x.jsx)("td",{children:(0,x.jsxs)("h6",{children:["Amount-",e.dthAmount]})}),(0,x.jsx)("td",{children:(0,x.jsx)("button",{className:"bg-success text-light rounded",children:"Success"})})]},t)))})]}),(0,x.jsx)("div",{className:"p-2",children:(0,x.jsx)("span",{children:"Showing of 0 to 0 of entires"})})]})})]})})}},15341:(e,t,a)=>{a.d(t,{FT:()=>l,ZP:()=>d});var s=a(72791),n=a(80184);const r=["as","disabled"];function l(e){let{tagName:t,disabled:a,href:s,target:n,rel:r,role:l,onClick:i,tabIndex:d=0,type:c}=e;t||(t=null!=s||null!=n||null!=r?"a":"button");const o={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},o];const h=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(s||(s="#"),a&&(s=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:a?void 0:d,href:s,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?r:void 0,onClick:h,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),h(e))}},o]}const i=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,i=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);const[d,{tagName:c}]=l(Object.assign({tagName:a,disabled:s},i));return(0,n.jsx)(c,Object.assign({},i,d,{ref:t}))}));i.displayName="Button";const d=i},43360:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(41418),n=a.n(s),r=a(72791),l=a(15341),i=a(10162),d=a(80184);const c=r.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:r="primary",size:c,active:o=!1,disabled:h=!1,className:m,...u}=e;const x=(0,i.vE)(s,"btn"),[b,{tagName:j}]=(0,l.FT)({tagName:a,disabled:h,...u}),p=j;return(0,d.jsx)(p,{...b,...u,ref:t,disabled:h,className:n()(m,x,o&&"active",r&&"".concat(x,"-").concat(r),c&&"".concat(x,"-").concat(c),u.href&&h&&"disabled")})}));c.displayName="Button";const o=c}}]);
//# sourceMappingURL=8951.785d1ca1.chunk.js.map