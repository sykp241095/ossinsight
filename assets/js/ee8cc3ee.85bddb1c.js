"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5344],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>d});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||n;return a?o.createElement(m,i(i({ref:e},h),{},{components:a})):o.createElement(m,i({ref:e},h))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59320:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=a(87462),r=(a(67294),a(3905)),n=a(54225);const i={sidebar_position:0,title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter or Stackoverflow, which has big data with realtime insert/update.",image:"img/workshop-thumbnail.png",sidebar_label:"Workshop Overview",slug:"/workshop"},s=void 0,l={unversionedId:"workshop/overview",id:"workshop/overview",title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter or Stackoverflow, which has big data with realtime insert/update.",source:"@site/docs/workshop/overview.mdx",sourceDirName:"workshop",slug:"/workshop",permalink:"/docs/workshop",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter or Stackoverflow, which has big data with realtime insert/update.",image:"img/workshop-thumbnail.png",sidebar_label:"Workshop Overview",slug:"/workshop"},sidebar:"tutorialSidebar",previous:{title:"About OSS Insight",permalink:"/docs/about"},next:{title:"Introduction",permalink:"/docs/workshop/mini-ossinsight/introduction"}},p={},h=[{value:"What you will learn",id:"what-you-will-learn",level:2},{value:"1. Methodology to setup an insight system",id:"1-methodology-to-setup-an-insight-system",level:3},{value:"2. Knowledge about HTAP database",id:"2-knowledge-about-htap-database",level:3},{value:"Join a Workshop!",id:"join-a-workshop",level:2}],u={toc:h};function c(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to build ",(0,r.kt)("strong",{parentName:"p"},"Another Insight")," tool that analyzes data from a source rather than GitHub, then you're in the right place. This workshop will teach you that it's not too hard to get insights from big data expecially ",(0,r.kt)("strong",{parentName:"p"},"big data with real-time inserts and updates"),"."),(0,r.kt)("h2",{id:"what-you-will-learn"},"What you will learn"),(0,r.kt)("h3",{id:"1-methodology-to-setup-an-insight-system"},"1. Methodology to setup an insight system"),(0,r.kt)("p",null,"Usually, with enough abstraction, there will be 3 steps to setup an insight system like OSS Insight:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the data source (both historical and real-time data)."),(0,r.kt)("li",{parentName:"ol"},"Load data to TiDB (or any other HTAP database)."),(0,r.kt)("li",{parentName:"ol"},"Get insights with SQL.")),(0,r.kt)("h3",{id:"2-knowledge-about-htap-database"},"2. Knowledge about HTAP database"),(0,r.kt)("p",null,"It\u2019s best to run your insight tool on a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/dev/explore-htap"},"Hybrid Transactional and Analytical Processing(HTAP)")," database. It is ",(0,r.kt)("strong",{parentName:"p"},"SUPER EASY")," to handle both:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Acting as a ",(0,r.kt)("strong",{parentName:"li"},"primary")," RDBMS to ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("u",null,"serve requests in high concurrency"))," and ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("u",null,"insert/update in realtime"))),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("u",null,"analytical ability to get insights")))),(0,r.kt)("p",null,"We have a 10-minute blog post that explains ",(0,r.kt)("a",{parentName:"p",href:"/blog/why-we-choose-tidb-to-support-ossinsight"},"why we choose TiDB to support OSSInsight"),'. But to save you some time, the following diagram shows the architectural differences "before" and "after" we use TiDB:'),(0,r.kt)("center",null,(0,r.kt)("img",{width:"70%",src:a(48043).Z,alt:"Simplified architecture after we use TiDB"})),(0,r.kt)("center",null,(0,r.kt)("i",null,"Before and after we use TiDB")),(0,r.kt)("p",null,"Using this architecture means that we don\u2019t need to learn  traditional ",(0,r.kt)("inlineCode",{parentName:"p"},"big data")," skills such as: MySQL+sharding technologies -> industrial etl tools -> olap databases->MySQL(write back), and then setup/manage these infrastructures, but just get a ",(0,r.kt)("inlineCode",{parentName:"p"},"T+1")," analysis result finally."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can load data to MySQL instead of TiDB; however, you will have performance issues.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Ready to learn more? Click the link below and join a workshop. Each one will follow the 3 steps above!  \ud83c\udfc3\ud83c\udfc3\ud83c\udfc3"),(0,r.kt)("h2",{id:"join-a-workshop"},"Join a Workshop!"),(0,r.kt)("p",null,"We have implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"mini OSS Insights")," workshop and are thinking about creating three other workshops. You can try them by yourself with their historical and real-time API (a bit of a challenge, but not too hard :-)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/workshop/mini-ossinsight/introduction"},"Mini OSS Insight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/workshop/nft-insight"},"NFT Insight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hackernews-insight.vercel.app/"},"Hacker News Insight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/workshop/twitter-insight"},"Twitter Insight")," ",(0,r.kt)("em",{parentName:"li"},"Not ready")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/workshop/stackoverflow-insight"},"Stack Overflow Insight")," ",(0,r.kt)("em",{parentName:"li"},"Not ready"))),(0,r.kt)("p",null,"If you want a further talk about OSS Insight, please join our offline workshop, you may get help there:"),(0,r.kt)(n.Z,{component:"a",variant:"contained",sx:{":hover":{color:"#ffffff"}},href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm",target:"_blank",mdxType:"Button"},"Apply !"))}c.isMDXComponent=!0},48043:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/how-different-db-handle-github-data-097746b55085a93fa36a6bfb7af4cb0b.png"}}]);