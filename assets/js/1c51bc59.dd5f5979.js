"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Workshop: Stack Overflow Insight",sidebar_label:"Stack Overflow Insight",sidebar_position:5},i=void 0,l={unversionedId:"workshop/stackoverflow-insight",id:"workshop/stackoverflow-insight",title:"Workshop: Stack Overflow Insight",description:"Stack Overflow helps people find the answers they need, when they need them. We're best known for our public Q&A platform that over 100 million people visit every month to ask questions, learn, and share technical knowledge.",source:"@site/docs/workshop/stackoverflow-insight.md",sourceDirName:"workshop",slug:"/workshop/stackoverflow-insight",permalink:"/docs/workshop/stackoverflow-insight",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/stackoverflow-insight.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Workshop: Stack Overflow Insight",sidebar_label:"Stack Overflow Insight",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Twitter Insight",permalink:"/docs/workshop/twitter-insight"},next:{title:"API Overview",permalink:"/docs/api"}},s={},c=[{value:"Step 1: Find Data Source",id:"step-1-find-data-source",level:2},{value:"Historical Stack Overflow Data",id:"historical-stack-overflow-data",level:3},{value:"Realtime Stack Overflow Data",id:"realtime-stack-overflow-data",level:3},{value:"Step 2: Load Data to TiDB",id:"step-2-load-data-to-tidb",level:2},{value:"Step 3: Get Insights with SQL",id:"step-3-get-insights-with-sql",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/"},"Stack Overflow")," helps people find the answers they need, when they need them. We're best known for our public Q&A platform that over 100 million people visit every month to ask questions, learn, and share technical knowledge."),(0,n.kt)("h2",{id:"step-1-find-data-source"},"Step 1: Find Data Source"),(0,n.kt)("h3",{id:"historical-stack-overflow-data"},"Historical Stack Overflow Data"),(0,n.kt)("p",null,"Stack Exchange Data Dump: ",(0,n.kt)("a",{parentName:"p",href:"https://archive.org/details/stackexchange"},"https://archive.org/details/stackexchange")),(0,n.kt)("h3",{id:"realtime-stack-overflow-data"},"Realtime Stack Overflow Data"),(0,n.kt)("p",null,"Stack Overflow /events API Docs: ",(0,n.kt)("a",{parentName:"p",href:"https://api.stackexchange.com/docs/events"},"https://api.stackexchange.com/docs/events")),(0,n.kt)("p",null,'The API considers the following "events":'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"posting a question"),(0,n.kt)("li",{parentName:"ul"},"posting an answer"),(0,n.kt)("li",{parentName:"ul"},"posting a comment"),(0,n.kt)("li",{parentName:"ul"},"editing a post"),(0,n.kt)("li",{parentName:"ul"},"creating a user")),(0,n.kt)("h2",{id:"step-2-load-data-to-tidb"},"Step 2: Load Data to TiDB"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Not ready,  you can try it.")),(0,n.kt)("h2",{id:"step-3-get-insights-with-sql"},"Step 3: Get Insights with SQL"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Not ready,  you can try it.")))}h.isMDXComponent=!0}}]);