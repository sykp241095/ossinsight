"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[866],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74614:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:1,title:"GET /q/trending-repos",description:"OSS Insight Trending Repos API Overview",sidebar_label:"Trending Repos"},p=void 0,s={unversionedId:"api/trending-repos",id:"api/trending-repos",title:"GET /q/trending-repos",description:"OSS Insight Trending Repos API Overview",source:"@site/docs/api/trending-repos.md",sourceDirName:"api",slug:"/api/trending-repos",permalink:"/docs/api/trending-repos",editUrl:"https://github.com/pingcap/ossinsight/tree/main/docs/api/trending-repos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"GET /q/trending-repos",description:"OSS Insight Trending Repos API Overview",sidebar_label:"Trending Repos"},sidebar:"tutorialSidebar",previous:{title:"API Overview",permalink:"/docs/"},next:{title:"Showcase",permalink:"/docs/showcase"}},u=[{value:"Endpoint URL",id:"endpoint-url",children:[],level:2},{value:"Query parameters",id:"query-parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"endpoint-url"},"Endpoint URL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.ossinsight.io/q/trending-repos")),(0,i.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"language"),(0,i.kt)("td",{parentName:"tr",align:null},"enum(All,JavaScript,Java,Python,PHP,Rust,Go,Kotlin,PowerShell...)"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"period"),(0,i.kt)("td",{parentName:"tr",align:null},"enum(last_day,last_week,last_month)"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.ossinsight.io/q/trending-repos?language=All&period=last_day")))}d.isMDXComponent=!0}}]);