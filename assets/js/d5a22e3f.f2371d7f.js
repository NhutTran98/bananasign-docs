(self.webpackChunkbananasign=self.webpackChunkbananasign||[]).push([[693],{5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(6775),s=a(1980),i=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:a,groupId:n}),[h,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=i??h;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var g=a(2466),b=a(2389);const f="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,g.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==o&&(c(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},s,{className:(0,l.Z)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},4319:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,bg:a}=e;return n.createElement("span",{style:{padding:"3px 10px",color:"rgb(255, 255, 255)",backgroundColor:a,lineHeight:"20px",textTransform:"uppercase",boxSizing:"border-box"}},t)}},5938:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),l=a(1574),o=a(814),s=a(4319),i=a(4866),u=a(5162);const c={title:"Contract Temporary",sidebar_position:3},d=void 0,p={unversionedId:"api/contract-temporary",id:"api/contract-temporary",title:"Contract Temporary",description:"This API allows customers to create a Contract with 2 steps.",source:"@site/docs/api/contract-temporary.mdx",sourceDirName:"api",slug:"/api/contract-temporary",permalink:"/bananasign-docs/docs/api/contract-temporary",draft:!1,editUrl:"https://github.com/luminpdf/bananasign-docs/blob/main/docs/api/contract-temporary.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Contract Temporary",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Upload",permalink:"/bananasign-docs/docs/api/upload"},next:{title:"Webhooks",permalink:"/bananasign-docs/docs/category/webhooks"}},m={},h=[{value:"Init create contract flow",id:"init-create-contract-flow",level:3},{value:"Header:",id:"header",level:4},{value:"Request body schema:",id:"request-body-schema",level:4},{value:"Payload:",id:"payload",level:4},{value:"Example:",id:"example",level:4},{value:"Create document temporary",id:"create-document-temporary",level:3},{value:"Header:",id:"header-1",level:4},{value:"Request body schema:",id:"request-body-schema-1",level:4},{value:"Payload:",id:"payload-1",level:4},{value:"Example:",id:"example-1",level:4}],g={toc:h};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This API allows customers to create a Contract with 2 steps."),(0,r.kt)("p",null,"An example call to this API could look like:"),(0,r.kt)("h3",{id:"init-create-contract-flow"},"Init create contract flow"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},(0,r.kt)(s.Z,{bg:"rgb(24, 111, 175)",mdxType:"Badge"},"POST")," ","https://app-auth-staging.bananasign.co/api/web/v1",(0,r.kt)("b",null,"/document-signing/init")),(0,r.kt)("h4",{id:"header"},"Header:"),(0,r.kt)("p",null,"Provide your bearer token in the Authorization Header"),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer 111098")),(0,r.kt)("h4",{id:"request-body-schema"},"Request body schema:"),(0,r.kt)(l.Z,{id:"contract-yml",pointer:"#/components/schemas/Init",mdxType:"ApiSchema"}),(0,r.kt)("h4",{id:"payload"},"Payload:"),(0,r.kt)(l.Z,{id:"contract-yml",pointer:"#/components/schemas/InitPayload",mdxType:"ApiSchema"}),(0,r.kt)("h4",{id:"example"},"Example:"),(0,r.kt)(i.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},"  curl --request POST \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init \\\n  -d '{\"fileName\":\"sample.pdf\"}' \\\n  --header 'Authorization: Bearer $access_token' \\\n  --header 'Content-Type: application/json'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="response"',title:'"response"'},"  { \n    flowId: \"WNLW4u4dBOOn\",\n    preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n    owner: {\n      email: 'signer@luminpdf.com',\n      name: 'First Signer',\n    }\n  }\n"))),(0,r.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="init-flow.js"',title:'"init-flow.js"'},"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init', {\n    method: 'POST',\n    body: JSON.stringify({\n      fileName: 'sample.pdf',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    },\n  })\n    .then(async (response) => {\n      const data = await response.json();\n      // { \n      //   flowId: \"WNLW4u4dBOOn\",\n      //   preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n      //   owner: {\n      //     email: 'signer@luminpdf.com',\n      //     name: 'First Signer',\n      //   }\n      // }\n    })\n")))),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"preSignedUrl")," for uploading document to bananasign"),(0,r.kt)(i.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},"  curl --request PUT \\\n  --url preSignedUrl \\\n  -d 'your_file' \\\n  --header 'Content-Type: application/pdf'\n"))),(0,r.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="upload.js"',title:'"upload.js"'}," fetch(preSignedUrl, {\n  method: 'PUT',\n  body: fileData, // Your document file object\n  headers: {\n    'Content-Type': 'application/pdf',\n  },\n})\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must use preSignedUrl for uploading your document to bananasign before going to next step")),(0,r.kt)("h3",{id:"create-document-temporary"},"Create document temporary"),(0,r.kt)("p",null,"You can create temporary document with your signers and viewers with ",(0,r.kt)("inlineCode",{parentName:"p"},"flowId")),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},(0,r.kt)(s.Z,{bg:"rgb(149, 80, 124)",mdxType:"Badge"},"PUT")," ","https://app-auth-staging.bananasign.co/api/web/v1",(0,r.kt)("b",null,"/document-signing/create-document-temporary")),(0,r.kt)("h4",{id:"header-1"},"Header:"),(0,r.kt)("p",null,"Provide your bearer token in the Authorization Header"),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer 111098")),(0,r.kt)("h4",{id:"request-body-schema-1"},"Request body schema:"),(0,r.kt)(l.Z,{id:"contract-yml",pointer:"#/components/schemas/ContractTemporary",mdxType:"ApiSchema"}),(0,r.kt)("h4",{id:"payload-1"},"Payload:"),(0,r.kt)(l.Z,{id:"contract-yml",pointer:"#/components/schemas/ContractTemporaryPayload",mdxType:"ApiSchema"}),(0,r.kt)("h4",{id:"example-1"},"Example:"),(0,r.kt)(i.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},'  curl --request PUT \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary \\\n  -d \'{"signers":[{"name":"First Signer","email":"signer@luminpdf.com"}],"viewers":[],"flowId":"WNLW4u4dBOOn"}\' \\\n  --header \'Authorization: Bearer $access_token\' \\\n  --header \'Content-Type: application/json\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="response"',title:'"response"'},'  {\n    flowId: "WNLW4u4dBOOn",\n    message: "You\'ve requested to a save document info successfully",\n    statusCode: 200\n  }\n'))),(0,r.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="create.js"',title:'"create.js"'},"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary', {\n    method: 'PUT',\n    body: JSON.stringify({\n      signers: [{\n        name: 'First Signer',\n        email: 'signer@luminpdf.com',\n      }],\n      viewers: [],\n      flowId: 'WNLW4u4dBOOn',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    }\n  }).then(async (response) => {\n      const data = await response.json();\n      // { \n      //   flowId: \"WNLW4u4dBOOn\",\n      //   message: \"You've requested to a save document info successfully\",\n      //   statusCode: 200,\n      // }\n    })\n")))))}b.isMDXComponent=!0},5101:()=>{},2116:()=>{},4904:()=>{},6918:()=>{},4819:()=>{},3197:()=>{},996:()=>{}}]);