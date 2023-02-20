"use strict";(self.webpackChunkbananasign=self.webpackChunkbananasign||[]).push([[290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),o=n(6010),i=n(6775),l=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??g;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=n(2466),b=n(2389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,f.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Create a new Document",sidebar_position:3},s=void 0,u={unversionedId:"tutorial/create-a-new-contract",id:"tutorial/create-a-new-contract",title:"Create a new Document",description:"In Bananasign, each signing flow is related to a document. A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Bananasign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages.",source:"@site/docs/tutorial/create-a-new-contract.mdx",sourceDirName:"tutorial",slug:"/tutorial/create-a-new-contract",permalink:"/bananasign-docs/docs/tutorial/create-a-new-contract",draft:!1,editUrl:"https://github.com/luminpdf/bananasign-docs/blob/main/docs/tutorial/create-a-new-contract.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create a new Document",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Starting the Signing Flow",permalink:"/bananasign-docs/docs/tutorial/startpage"},next:{title:"Launch Signing Flow",permalink:"/bananasign-docs/docs/tutorial/signing-flow"}},c={},p=[{value:"Creating a document",id:"creating-a-document",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Bananasign, each signing flow is related to a ",(0,r.kt)("em",{parentName:"p"},"document"),". A document is a PDF file and some associated metadata, that needs to be signed by one or more parties. In this page, we use the Bananasign API to create a new document. The document can then be displayed in an iFrame as explained on the following pages."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Prerequisites: You need to obtain an bearer token from ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/getting-an-bearer-token"},"Getting an Bearer Token"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are using our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luminpdf/bananasign-integration"},"simple react widget"),", you can skip this step and ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/signing-flow/"},"Launch Signing Flow"),".")),(0,r.kt)("h2",{id:"creating-a-document"},"Creating a document"),(0,r.kt)("p",null,"The Bananasign client can be used to create a new document."),(0,r.kt)("p",null,"Firstly, you need to call init api to obtain unique identifier of document."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more information, please visit: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contract-temporary"},"Contract Temporary API"))),(0,r.kt)(o.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},"  curl --request POST \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init \\\n  -d '{\"fileName\":\"sample.pdf\"}' \\\n  --header 'Authorization: Bearer $access_token' \\\n  --header 'Content-Type: application/json'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="response"',title:'"response"'},"  { \n    flowId: \"WNLW4u4dBOOn\",\n    preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n    owner: {\n      email: 'signer@luminpdf.com',\n      name: 'First Signer',\n    }\n  }\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="init-flow.js"',title:'"init-flow.js"'},"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/init', {\n    method: 'POST',\n    body: JSON.stringify({\n      fileName: 'sample.pdf',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    },\n  })\n    .then(async (response) => {\n      const data = await response.json();\n      // { \n      //   flowId: \"WNLW4u4dBOOn\",\n      //   preSignedUrl: \"https://bananasign-temporary-contracts.s3...\",\n      //   owner: {\n      //     email: 'signer@luminpdf.com',\n      //     name: 'First Signer',\n      //   }\n      // }\n    })\n")))),(0,r.kt)("p",null,"This API returns a unique identifier for the newly created document ",(0,r.kt)("inlineCode",{parentName:"p"},"(WNLW4u4dBOOn)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"preSignedUrl")," for upload document to bananasign."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"preSignedUrl")," for uploading document to bananasign"),(0,r.kt)(o.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},"  curl --request PUT \\\n  --url preSignedUrl \\\n  -d 'your_file' \\\n  --header 'Content-Type: application/pdf'\n"))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="upload.js"',title:'"upload.js"'}," fetch(preSignedUrl, {\n  method: 'PUT',\n  body: fileData, // Your document file object\n  headers: {\n    'Content-Type': 'application/pdf',\n  },\n})\n")))),(0,r.kt)("p",null,"After that, you can create temporary document with your signers and viewers by using a single PUT call:"),(0,r.kt)(o.Z,{defaultValue:"curl",values:[{label:"Shell/cURL",value:"curl"},{label:"Javascript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="init-flow"',title:'"init-flow"'},'  curl --request PUT \\\n  --url https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary \\\n  -d \'{"signers":[{"name":"First Signer","email":"signer@luminpdf.com"}],"viewers":[],"flowId":"WNLW4u4dBOOn"}\' \\\n  --header \'Authorization: Bearer $access_token\' \\\n  --header \'Content-Type: application/json\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="response"',title:'"response"'},'  {\n    flowId: "WNLW4u4dBOOn",\n    message: "You\'ve requested to a save document info successfully",\n    statusCode: 200\n  }\n'))),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="create-document.js"',title:'"create-document.js"'},"  fetch('https://app-auth-staging.bananasign.co/api/web/v1/document-signing/create-document-temporary', {\n    method: 'PUT',\n    body: JSON.stringify({\n      signers: [{\n        name: 'First Signer',\n        email: 'signer@luminpdf.com',\n      }],\n      viewers: [],\n      flowId: 'WNLW4u4dBOOn',\n    }),\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n      'Content-Type': 'application/json',\n    }\n  }).then(async (response) => {\n      const data = await response.json();\n      // {\n      //   flowId: \"WNLW4u4dBOOn\",\n      //   message: \"You've requested to a save document info successfully\",\n      //   statusCode: 200\n      // }\n    })\n")))))}m.isMDXComponent=!0}}]);