"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9722],{8106:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),o=n(86010),i=n(95999),a=n(25108);const s={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function p(e){let{code:t,className:n}=e;const[p,l]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),d=(0,r.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(a.error),l(!0),c.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":p?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,s.copyButton,p&&s.copyButtonCopied),onClick:d},r.createElement("span",{className:s.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:s.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:s.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},89910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>_});var r=n(87462),o=(n(67294),n(3905)),i=n(26389),a=n(94891),s=n(75190),p=n(47507),l=n(24310),c=n(63303),d=(n(75035),n(85162));const m={id:"collection-repo-ranking-by-prs",title:"Repository ranking by prs",description:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",sidebar_label:"Repository ranking by prs",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"collection-repo-ranking-by-prs",tags:["Collections"],description:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",parameters:[{schema:{type:"string",enum:["past_28_days","past_month"],default:"past_28_days"},in:"query",name:"period",required:!1,description:"The period of the range."},{schema:{type:"number"},in:"path",name:"collection_id",required:!0,description:"The ID of collection"}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"repo_id",data_type:"BIGINT",nullable:!1},{col:"repo_name",data_type:"VARCHAR",nullable:!1},{col:"current_period_growth",data_type:"BIGINT",nullable:!1},{col:"current_period_rank",data_type:"BIGINT",nullable:!1},{col:"past_period_growth",data_type:"BIGINT",nullable:!1},{col:"past_period_rank",data_type:"BIGINT",nullable:!1},{col:"growth_pop",data_type:"DECIMAL",nullable:!1},{col:"rank_pop",data_type:"BIGINT",nullable:!1},{col:"total",data_type:"BIGINT",nullable:!1}]},rows:{type:"array",items:{type:"object",properties:{repo_id:{type:"string",description:"The repository ID"},repo_name:{type:"string",description:"The repository name"},current_period_growth:{type:"string",description:"prs growth in the current period (past 28 days / current month)"},past_period_growth:{type:"string",description:"prs growth in the past period (The 28 days before the past 28 days / past month)"},growth_pop:{type:"string",description:"The period-over-period growth of prs"},rank_pop:{type:"string",description:"The period-over-period rank changes of prs"},total:{type:"string",description:"The current total prs of repository"}},additionalProperties:!0},example:[{repo_id:"16563587",repo_name:"cockroachdb/cockroach",current_period_growth:"677",past_period_growth:"729",growth_pop:"-7.13",rank_pop:"0",total:"54541",current_period_rank:"1",past_period_rank:"1"},{repo_id:"60246359",repo_name:"clickhouse/clickhouse",current_period_growth:"268",past_period_growth:"296",growth_pop:"-9.46",rank_pop:"-1",total:"16732",current_period_rank:"2",past_period_rank:"3"},{repo_id:"41986369",repo_name:"pingcap/tidb",current_period_growth:"263",past_period_growth:"214",growth_pop:"22.90",rank_pop:"-3",total:"15622",current_period_rank:"3",past_period_rank:"6"},{repo_id:"105944401",repo_name:"yugabyte/yugabyte-db",current_period_growth:"246",past_period_growth:"298",growth_pop:"-17.45",rank_pop:"2",total:"15079",current_period_rank:"4",past_period_rank:"2"},{repo_id:"208728772",repo_name:"milvus-io/milvus",current_period_growth:"234",past_period_growth:"237",growth_pop:"-1.27",rank_pop:"0",total:"8675",current_period_rank:"5",past_period_rank:"5"},{repo_id:"507775",repo_name:"elastic/elasticsearch",current_period_growth:"214",past_period_growth:"144",growth_pop:"48.61",rank_pop:"-3",total:"31578",current_period_rank:"6",past_period_rank:"9"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:7,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/collections/{collection_id}/ranking_by_prs/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"Repository ranking by prs",description:{content:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",type:"text/plain"},url:{path:["collections",":collection_id","ranking_by_prs",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The period of the range.",type:"text/plain"},key:"period",value:""}],variable:[{disabled:!1,description:{content:"(Required) The ID of collection",type:"text/plain"},type:"any",value:"",key:"collection_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},u=void 0,h={unversionedId:"api/collection-repo-ranking-by-prs",id:"api/collection-repo-ranking-by-prs",title:"Repository ranking by prs",description:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",source:"@site/docs/api/collection-repo-ranking-by-prs.api.mdx",sourceDirName:"api",slug:"/api/collection-repo-ranking-by-prs",permalink:"/docs/api/collection-repo-ranking-by-prs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"collection-repo-ranking-by-prs",title:"Repository ranking by prs",description:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",sidebar_label:"Repository ranking by prs",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"collection-repo-ranking-by-prs",tags:["Collections"],description:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",parameters:[{schema:{type:"string",enum:["past_28_days","past_month"],default:"past_28_days"},in:"query",name:"period",required:!1,description:"The period of the range."},{schema:{type:"number"},in:"path",name:"collection_id",required:!0,description:"The ID of collection"}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"repo_id",data_type:"BIGINT",nullable:!1},{col:"repo_name",data_type:"VARCHAR",nullable:!1},{col:"current_period_growth",data_type:"BIGINT",nullable:!1},{col:"current_period_rank",data_type:"BIGINT",nullable:!1},{col:"past_period_growth",data_type:"BIGINT",nullable:!1},{col:"past_period_rank",data_type:"BIGINT",nullable:!1},{col:"growth_pop",data_type:"DECIMAL",nullable:!1},{col:"rank_pop",data_type:"BIGINT",nullable:!1},{col:"total",data_type:"BIGINT",nullable:!1}]},rows:{type:"array",items:{type:"object",properties:{repo_id:{type:"string",description:"The repository ID"},repo_name:{type:"string",description:"The repository name"},current_period_growth:{type:"string",description:"prs growth in the current period (past 28 days / current month)"},past_period_growth:{type:"string",description:"prs growth in the past period (The 28 days before the past 28 days / past month)"},growth_pop:{type:"string",description:"The period-over-period growth of prs"},rank_pop:{type:"string",description:"The period-over-period rank changes of prs"},total:{type:"string",description:"The current total prs of repository"}},additionalProperties:!0},example:[{repo_id:"16563587",repo_name:"cockroachdb/cockroach",current_period_growth:"677",past_period_growth:"729",growth_pop:"-7.13",rank_pop:"0",total:"54541",current_period_rank:"1",past_period_rank:"1"},{repo_id:"60246359",repo_name:"clickhouse/clickhouse",current_period_growth:"268",past_period_growth:"296",growth_pop:"-9.46",rank_pop:"-1",total:"16732",current_period_rank:"2",past_period_rank:"3"},{repo_id:"41986369",repo_name:"pingcap/tidb",current_period_growth:"263",past_period_growth:"214",growth_pop:"22.90",rank_pop:"-3",total:"15622",current_period_rank:"3",past_period_rank:"6"},{repo_id:"105944401",repo_name:"yugabyte/yugabyte-db",current_period_growth:"246",past_period_growth:"298",growth_pop:"-17.45",rank_pop:"2",total:"15079",current_period_rank:"4",past_period_rank:"2"},{repo_id:"208728772",repo_name:"milvus-io/milvus",current_period_growth:"234",past_period_growth:"237",growth_pop:"-1.27",rank_pop:"0",total:"8675",current_period_rank:"5",past_period_rank:"5"},{repo_id:"507775",repo_name:"elastic/elasticsearch",current_period_growth:"214",past_period_growth:"144",growth_pop:"48.61",rank_pop:"-3",total:"31578",current_period_rank:"6",past_period_rank:"9"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:7,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/collections/{collection_id}/ranking_by_prs/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"Repository ranking by prs",description:{content:"Rank the GitHub repositories in the specified collection according to the number of pull requests.",type:"text/plain"},url:{path:["collections",":collection_id","ranking_by_prs",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The period of the range.",type:"text/plain"},key:"period",value:""}],variable:[{disabled:!1,description:{content:"(Required) The ID of collection",type:"text/plain"},type:"any",value:"",key:"collection_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Repository ranking by issues",permalink:"/docs/api/collection-repo-ranking-by-issues"},next:{title:"List issue creators",permalink:"/docs/api/list-issue-creators"}},y={},_=[{value:"Repository ranking by prs",id:"repository-ranking-by-prs",level:2}],g={toc:_};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"repository-ranking-by-prs"},"Repository ranking by prs"),(0,o.kt)("p",null,"Rank the GitHub repositories in the specified collection according to the number of pull requests."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{schema:{type:"number"},in:"path",name:"collection_id",required:!0,description:"The ID of collection"},mdxType:"ParamsItem"})))),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{schema:{type:"string",enum:["past_28_days","past_month"],default:"past_28_days"},in:"query",name:"period",required:!1,description:"The period of the range."},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Default Response")),(0,o.kt)("div",null,(0,o.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`sql_endpoint`]",schema:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"columns"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"col",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the column in the query result."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"data_type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`CHAR`, `BIGINT`, `DECIMAL`, `INT`, `UNSIGNED BIGINT`, `TINYINT`, `TIMESTAMP`, `TEXT`, `VARCHAR`, `DATETIME`, `DOUBLE`, `FLOAT`, `DATE`, `TIME`, `YEAR`, `MEDIUMINT`, `SMALLINT`, `BIT`, `BINARY`, `VARBINARY`, `JSON`, `ENUM`, `SET`, `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`, `TINYBLOB`, `MEDIUMBLOB`, `BLOB`, `LONGBLOB`]",schema:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"nullable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the column is nullable."},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"rows"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"repo_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The repository ID"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"repo_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The repository name"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"current_period_growth",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"prs growth in the current period (past 28 days / current month)"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"past_period_growth",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"prs growth in the past period (The 28 days before the past 28 days / past month)"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"growth_pop",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The period-over-period growth of prs"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"rank_pop",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The period-over-period rank changes of prs"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"total",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The current total prs of repository"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"result"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The code of the response."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The message of the response."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"start_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The start time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"end_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The end time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"latency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The latency of the query."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"row_count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows in the query result."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"row_affect",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows affected by the query."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of rows in the query result."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"databases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The databases used in the query.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:7,row_affect:0,limit:50,databases:["gharchive_dev"]}},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "repo_id",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "repo_name",\n        "data_type": "VARCHAR",\n        "nullable": false\n      },\n      {\n        "col": "current_period_growth",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "current_period_rank",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "past_period_growth",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "past_period_rank",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "growth_pop",\n        "data_type": "DECIMAL",\n        "nullable": false\n      },\n      {\n        "col": "rank_pop",\n        "data_type": "BIGINT",\n        "nullable": false\n      },\n      {\n        "col": "total",\n        "data_type": "BIGINT",\n        "nullable": false\n      }\n    ],\n    "rows": [\n      {\n        "repo_id": "16563587",\n        "repo_name": "cockroachdb/cockroach",\n        "current_period_growth": "677",\n        "past_period_growth": "729",\n        "growth_pop": "-7.13",\n        "rank_pop": "0",\n        "total": "54541",\n        "current_period_rank": "1",\n        "past_period_rank": "1"\n      },\n      {\n        "repo_id": "60246359",\n        "repo_name": "clickhouse/clickhouse",\n        "current_period_growth": "268",\n        "past_period_growth": "296",\n        "growth_pop": "-9.46",\n        "rank_pop": "-1",\n        "total": "16732",\n        "current_period_rank": "2",\n        "past_period_rank": "3"\n      },\n      {\n        "repo_id": "41986369",\n        "repo_name": "pingcap/tidb",\n        "current_period_growth": "263",\n        "past_period_growth": "214",\n        "growth_pop": "22.90",\n        "rank_pop": "-3",\n        "total": "15622",\n        "current_period_rank": "3",\n        "past_period_rank": "6"\n      },\n      {\n        "repo_id": "105944401",\n        "repo_name": "yugabyte/yugabyte-db",\n        "current_period_growth": "246",\n        "past_period_growth": "298",\n        "growth_pop": "-17.45",\n        "rank_pop": "2",\n        "total": "15079",\n        "current_period_rank": "4",\n        "past_period_rank": "2"\n      },\n      {\n        "repo_id": "208728772",\n        "repo_name": "milvus-io/milvus",\n        "current_period_growth": "234",\n        "past_period_growth": "237",\n        "growth_pop": "-1.27",\n        "rank_pop": "0",\n        "total": "8675",\n        "current_period_rank": "5",\n        "past_period_rank": "5"\n      },\n      {\n        "repo_id": "507775",\n        "repo_name": "elastic/elasticsearch",\n        "current_period_growth": "214",\n        "past_period_growth": "144",\n        "growth_pop": "48.61",\n        "rank_pop": "-3",\n        "total": "31578",\n        "current_period_rank": "6",\n        "past_period_rank": "9"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690957407469,\n      "end_ms": 1690957407499,\n      "latency": "30ms",\n      "row_count": 7,\n      "row_affect": 0,\n      "limit": 50,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);