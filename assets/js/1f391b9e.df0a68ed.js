"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3085],{87529:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),o=n(86010),i=n(10059),l=n(3905),c=n(73491),r=n(70541),s=n(53810),m="mdxPageWrapper_eQvw";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,f=n.description,p=n.wrapperClassName,v=n.hide_table_of_contents,g=u.permalink;return a.createElement(i.Z,{title:d,description:f,permalink:g,wrapperClassName:null!=p?p:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,o.Z)("row",m)},a.createElement("div",{className:(0,o.Z)("col",!v&&"col--8")},a.createElement(l.Zo,{components:c.Z},a.createElement(t,null))),!v&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(r.Z,{toc:t.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},25002:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(87462),o=n(63366),i=n(67294),l=n(53810),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var t=e.toc,n=e.className,a=e.linkClassName,o=e.isChild;return t.length?i.createElement("ul",{className:o?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function s(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,g=(0,o.Z)(e,c),k=(0,l.LU)(),h=null!=p?p:k.tableOfContents.minHeadingLevel,b=null!=v?v:k.tableOfContents.maxHeadingLevel,E=(0,l.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:b}),N=(0,i.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:h,maxHeadingLevel:b}}),[u,f,h,b]);return(0,l.Si)(N),i.createElement(r,(0,a.Z)({toc:E,className:s,linkClassName:u},g))}},71516:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),o=n(55113);function i(e,t,n){if(t&&n){var a=new URL(e,/^https?:\/\//.test(e)?void 0:"undefined"==typeof window?"https://ossinsight.io":window.location.origin);return a.searchParams.set(t,n),a.toString()}return e}var l=n(46483),c=n(93946),r=n(95537),s=n(41556),m=n(49990);function u(e){e.show;var t,n,u,d=e.campaign,f=e.fixed,p=void 0!==f&&f,v=(0,a.useState)(!1),g=v[0],k=v[1],h=(t="/try-your-own-dataset",n="utm_campaign",u=d,(0,a.useMemo)((function(){return i(t,n,u)}),[t,n,u])),b=(0,a.useMemo)((function(){return p?[{position:"fixed",right:2,bottom:8,zIndex:"var(--ifm-z-index-fixed-mui)"},(0,s.m)((function(e){return{right:"1.3em",bottom:"calc(4.3em + "+e.spacing(2)+")"}}),(function(e){return{right:"1.3em",bottom:"calc(4.3em + "+e.spacing(2)+")"}}),(function(e){return{right:e.spacing(4),bottom:"50vh"}}))]:{position:"static",mb:3,width:"calc(100% - 1px)"}}),[p]);return g?a.createElement(o.Z,{sx:b},a.createElement(m.Z,{sx:{position:"relative",display:"block",":hover":{textDecoration:"none",color:"unset"},p:2,backgroundColor:"#2c2c2c"},href:h,component:"a",target:"_blank"},a.createElement(l.Z,{variant:"body2",sx:{pr:2}},"\ud83d\udca1 ",a.createElement("b",{style:{color:"var(--ifm-color-primary)"}},"Try")," Your Own Dataset"),a.createElement(c.Z,{size:"small",sx:{position:"absolute",right:8,top:8},onClick:function(e){k(!1),e.stopPropagation(),e.preventDefault()}},a.createElement(r.Z,{sx:{fontSize:16}})))):a.createElement(a.Fragment,null)}},41556:function(e,t,n){function a(e,t,n,a){return function(o){var i,l,c;return(c={})[e]=a,c[o.breakpoints.down("lg")]=((i={})[e]=n,i),c[o.breakpoints.down("md")]=((l={})[e]=t,l),c}}function o(e,t){return"function"==typeof t?t(e):t}function i(e,t,n){return function(t){var a;return Object.assign({},o(t,n),((a={})[t.breakpoints.down("md")]=o(t,e),a[t.breakpoints.down("lg")]=o(t,e),a))}}n.d(t,{j:function(){return a},m:function(){return i}})},20819:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),o=n(67294),i=n(86010),l=n(23746),c=n(95999),r=n(53810),s=n(83229),m="codeBlockContainer_EiTO",u="codeBlockContent_X2I6",d="codeBlockTitle_PQMO",f="codeBlock_UxnK",p="copyButton_V-PD",v="codeBlockLines_W6UD";function g(e){var t,n=e.children,g=e.className,k=e.metastring,h=e.title,b=(0,r.LU)().prism,E=(0,o.useState)(!1),N=E[0],y=E[1],C=(0,o.useState)(!1),Z=C[0],_=C[1];(0,o.useEffect)((function(){_(!0)}),[]);var x=(0,r.bc)(k)||h,w=(0,s.Z)(),L=Array.isArray(n)?n.join(""):n,H=null!=(t=(0,r.Vo)(g))?t:b.defaultLanguage,B=(0,r.nZ)(L,k,H),A=B.highlightLines,I=B.code,P=function(){navigator.clipboard.writeText(I).then((function(){y(!0)})).catch((function(e){console.error("failed to copy",e)})).finally((function(){setTimeout((function(){return y(!1)}),2e3)}))};return o.createElement(l.ZP,(0,a.Z)({},l.lG,{key:String(Z),theme:w,code:I,language:H}),(function(e){var t=e.className,n=e.style,l=e.tokens,s=e.getLineProps,k=e.getTokenProps;return o.createElement("div",{className:(0,i.Z)(m,g,r.kM.common.codeBlock)},x&&o.createElement("div",{style:n,className:d},x),o.createElement("div",{className:(0,i.Z)(u,H)},o.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,f,"thin-scrollbar"),style:n},o.createElement("code",{className:v},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return A.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},k({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),disabled:!L,className:(0,i.Z)(p,"clean-btn"),onClick:P},N?o.createElement(c.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(c.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},70541:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),o=n(63366),i=n(67294),l=n(86010),c=n(25002),r="tableOfContents_H-s0",s=n(71516),m=["className","tryItYourselfCampaign","tryItYourselfShow"];var u=function(e){var t=e.className,n=e.tryItYourselfCampaign,u=e.tryItYourselfShow,d=void 0!==u&&u,f=(0,o.Z)(e,m);return i.createElement("div",{className:(0,l.Z)(r,"thin-scrollbar",t)},i.createElement(s.Z,{show:d,campaign:n}),i.createElement(c.Z,(0,a.Z)({},f,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);