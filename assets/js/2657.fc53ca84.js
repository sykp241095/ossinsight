"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[2657],{66242:function(r,n,i){i.d(n,{Z:function(){return f}});var e=i(87462),t=i(63366),o=i(67294),a=i(86010),s=i(94780),c=i(90948),p=i(71657),g=i(55113),m=i(34867);function u(r){return(0,m.Z)("MuiCard",r)}(0,i(1588).Z)("MuiCard",["root"]);var d=i(85893);const l=["className","raised"],x=(0,c.ZP)(g.Z,{name:"MuiCard",slot:"Root",overridesResolver:(r,n)=>n.root})((()=>({overflow:"hidden"})));var f=o.forwardRef((function(r,n){const i=(0,p.Z)({props:r,name:"MuiCard"}),{className:o,raised:c=!1}=i,g=(0,t.Z)(i,l),m=(0,e.Z)({},i,{raised:c}),f=(r=>{const{classes:n}=r;return(0,s.Z)({root:["root"]},u,n)})(m);return(0,d.jsx)(x,(0,e.Z)({className:(0,a.Z)(f.root,o),elevation:c?8:void 0,ref:n,ownerState:m},g))}))},86886:function(r,n,i){i.d(n,{ZP:function(){return b}});var e=i(63366),t=i(87462),o=i(67294),a=i(86010),s=i(95408),c=i(39707),p=i(94780),g=i(90948),m=i(71657);var u=o.createContext(),d=i(34867);function l(r){return(0,d.Z)("MuiGrid",r)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,i(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((r=>`spacing-xs-${r}`)),...["column-reverse","column","row-reverse","row"].map((r=>`direction-xs-${r}`)),...["nowrap","wrap-reverse","wrap"].map((r=>`wrap-xs-${r}`)),...x.map((r=>`grid-xs-${r}`)),...x.map((r=>`grid-sm-${r}`)),...x.map((r=>`grid-md-${r}`)),...x.map((r=>`grid-lg-${r}`)),...x.map((r=>`grid-xl-${r}`))]),S=i(85893);const $=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(r){const n=parseFloat(r);return`${n}${String(r).replace(String(n),"")||"px"}`}function h(r,n,i={}){if(!n||!r||r<=0)return[];if("string"==typeof r&&!Number.isNaN(Number(r))||"number"==typeof r)return[i[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`];const{xs:e,sm:t,md:o,lg:a,xl:s}=r;return[Number(e)>0&&(i[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`),Number(t)>0&&(i[`spacing-sm-${String(t)}`]||`spacing-sm-${String(t)}`),Number(o)>0&&(i[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(i[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(i[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const v=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,n)=>{const{container:i,direction:e,item:t,lg:o,md:a,sm:s,spacing:c,wrap:p,xl:g,xs:m,zeroMinWidth:u}=r.ownerState;return[n.root,i&&n.container,t&&n.item,u&&n.zeroMinWidth,...h(c,i,n),"row"!==e&&n[`direction-xs-${String(e)}`],"wrap"!==p&&n[`wrap-xs-${String(p)}`],!1!==m&&n[`grid-xs-${String(m)}`],!1!==s&&n[`grid-sm-${String(s)}`],!1!==a&&n[`grid-md-${String(a)}`],!1!==o&&n[`grid-lg-${String(o)}`],!1!==g&&n[`grid-xl-${String(g)}`]]}})((({ownerState:r})=>(0,t.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})),(function({theme:r,ownerState:n}){const i=(0,s.P$)({values:n.direction,breakpoints:r.breakpoints.values});return(0,s.k9)({theme:r},i,(r=>{const n={flexDirection:r};return 0===r.indexOf("column")&&(n[`& > .${f.item}`]={maxWidth:"none"}),n}))}),(function({theme:r,ownerState:n}){const{container:i,rowSpacing:e}=n;let t={};if(i&&0!==e){const n=(0,s.P$)({values:e,breakpoints:r.breakpoints.values});t=(0,s.k9)({theme:r},n,(n=>{const i=r.spacing(n);return"0px"!==i?{marginTop:`-${w(i)}`,[`& > .${f.item}`]:{paddingTop:w(i)}}:{}}))}return t}),(function({theme:r,ownerState:n}){const{container:i,columnSpacing:e}=n;let t={};if(i&&0!==e){const n=(0,s.P$)({values:e,breakpoints:r.breakpoints.values});t=(0,s.k9)({theme:r},n,(n=>{const i=r.spacing(n);return"0px"!==i?{width:`calc(100% + ${w(i)})`,marginLeft:`-${w(i)}`,[`& > .${f.item}`]:{paddingLeft:w(i)}}:{}}))}return t}),(function({theme:r,ownerState:n}){let i;return r.breakpoints.keys.reduce(((e,o)=>{let a={};if(n[o]&&(i=n[o]),!i)return e;if(!0===i)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:n.columns,breakpoints:r.breakpoints.values}),p="object"==typeof c?c[o]:c;if(null==p)return e;const g=Math.round(i/p*1e8)/1e6+"%";let m={};if(n.container&&n.item&&0!==n.columnSpacing){const i=r.spacing(n.columnSpacing);if("0px"!==i){const r=`calc(${g} + ${w(i)})`;m={flexBasis:r,maxWidth:r}}}a=(0,t.Z)({flexBasis:g,flexGrow:0,maxWidth:g},m)}return 0===r.breakpoints.values[o]?Object.assign(e,a):e[r.breakpoints.up(o)]=a,e}),{})}));var b=o.forwardRef((function(r,n){const i=(0,m.Z)({props:r,name:"MuiGrid"}),s=(0,c.Z)(i),{className:g,columns:d,columnSpacing:x,component:f="div",container:w=!1,direction:b="row",item:Z=!1,lg:k=!1,md:M=!1,rowSpacing:W,sm:N=!1,spacing:z=0,wrap:C="wrap",xl:P=!1,xs:G=!1,zeroMinWidth:R=!1}=s,j=(0,e.Z)(s,$),y=W||z,B=x||z,L=o.useContext(u),O=w?d||12:L,T=(0,t.Z)({},s,{columns:O,container:w,direction:b,item:Z,lg:k,md:M,sm:N,rowSpacing:y,columnSpacing:B,wrap:C,xl:P,xs:G,zeroMinWidth:R}),D=(r=>{const{classes:n,container:i,direction:e,item:t,lg:o,md:a,sm:s,spacing:c,wrap:g,xl:m,xs:u,zeroMinWidth:d}=r,x={root:["root",i&&"container",t&&"item",d&&"zeroMinWidth",...h(c,i),"row"!==e&&`direction-xs-${String(e)}`,"wrap"!==g&&`wrap-xs-${String(g)}`,!1!==u&&`grid-xs-${String(u)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==m&&`grid-xl-${String(m)}`]};return(0,p.Z)(x,l,n)})(T);return(0,S.jsx)(u.Provider,{value:O,children:(0,S.jsx)(v,(0,t.Z)({ownerState:T,className:(0,a.Z)(D.root,g),as:f,ref:n},j))})}))}}]);