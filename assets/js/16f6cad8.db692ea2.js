"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84694],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,p=d["".concat(r,".").concat(b)]||d[b]||m[b]||s;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41124:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),i=n(4646);const s="tableOfContentsInline_2sru";function l({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return a.createElement("div",{className:s},a.createElement(i.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null}))}},4646:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(27378),i=n(73919);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e){const t=e.map((e=>o(l({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n}=e,i=r(e,["parentIndex"]);n>=0?t[n].children.push(i):a.push(i)})),a}function c({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const a=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[o(l({},e),{children:a})]:a}))}function m(e){const t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function d(e,{anchorTopOffset:t}){const n=e.find((e=>m(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(n))?n:null!==(a=e[e.indexOf(n)-1])&&void 0!==a?a:null;var a}var i;return null!==(i=e[e.length-1])&&void 0!==i?i:null}function b(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,a.useRef)(void 0),n=b();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),r=d(o,{anchorTopOffset:n.current}),u=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===u)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function h({toc:e,className:t,linkClassName:n,isChild:i}){return e.length?a.createElement("ul",{className:i?void 0:t},e.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(h,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}const v=a.memo(h);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e,m=f(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const d=(0,i.L)(),b=null!=o?o:d.tableOfContents.minHeadingLevel,h=null!=r?r:d.tableOfContents.maxHeadingLevel,g=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,a.useMemo)((()=>c({toc:u(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:b,maxHeadingLevel:h});return p((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:b,maxHeadingLevel:h}}),[s,l,b,h])),a.createElement(v,x({toc:g,className:n,linkClassName:s},m))}},6698:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(27378),i=n(38944);const s="browserWindow_my1Q",l="browserWindowHeader_jXSR",o="buttons_uHc7",r="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function b({children:e,minHeight:t,url:n="http://localhost:3000"}){return a.createElement("div",{className:s,style:{minHeight:t}},a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,i.Z)(r,"text--truncate")},n),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:d},e))}},11195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});n(27378);var a=n(35318),i=n(6698),s=n(41124);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},u="Headings and Table of contents",c={unversionedId:"guides/markdown-features/toc",id:"guides/markdown-features/toc",title:"Headings and Table of contents",description:"Customizing headings and table-of-contents in Markdown",source:"@site/docs/guides/markdown-features/markdown-features-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/toc",permalink:"/docusarus_test/docs/next/markdown-features/toc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-toc.mdx",tags:[],version:"current",frontMatter:{id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},sidebar:"docs",previous:{title:"Admonitions",permalink:"/docusarus_test/docs/next/markdown-features/admonitions"},next:{title:"Assets",permalink:"/docusarus_test/docs/next/markdown-features/assets"}},m={},d=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}],b={toc:d};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",l({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"headings-and-table-of-contents"}),"Headings and Table of contents"),(0,a.kt)("h2",l({},{id:"markdown-headings"}),"Markdown headings"),(0,a.kt)("p",null,"You can use regular Markdown headings."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-md"}),"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n")),(0,a.kt)("p",null,"Each Markdown heading will appear as a table of contents entry."),(0,a.kt)("h3",l({},{id:"heading-ids"}),"Heading IDs"),(0,a.kt)("p",null,"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-md"}),"[link](#heading-id)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),'<Link to="#heading-id">link</Link>\n')),(0,a.kt)("p",null,"By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"### Hello World")," will have ID ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world"),"."),(0,a.kt)("p",null,"Generated IDs have ",(0,a.kt)("strong",{parentName:"p"},"some limitations"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ID might not look good"),(0,a.kt)("li",{parentName:"ul"},"You might want to ",(0,a.kt)("strong",{parentName:"li"},"change or translate")," the text without updating the existing ID")),(0,a.kt)("p",null,"A special Markdown syntax lets you set an ",(0,a.kt)("strong",{parentName:"p"},"explicit heading id"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-md"}),"### Hello World {#my-explicit-id}\n")),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",l({parentName:"strong"},{href:"/docusarus_test/docs/next/cli#docusaurus-write-heading-ids-sitedir"}),"write-heading-ids"))," CLI command to add explicit IDs to all your Markdown documents.")),(0,a.kt)("admonition",l({},{title:"Avoid colliding IDs",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable.")),(0,a.kt)("h2",l({},{id:"inline-table-of-contents"}),"Inline table of contents"),(0,a.kt)("p",null,"Each Markdown document displays a table of contents on the top-right corner. But it is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"minHeadingLevel")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"maxHeadingLevel")," for individual ",(0,a.kt)("inlineCode",{parentName:"p"},"TOCInline")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n")),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)(s.Z,{toc:d,mdxType:"TOCInline"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," global is just a list of heading items:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"toc")," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n")),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)(s.Z,{toc:d.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4,mdxType:"TOCInline"})),(0,a.kt)("h2",l({},{id:"customizing-table-of-contents-generation"}),"Customizing table of contents generation"),(0,a.kt)("p",null,"The table-of-contents is generated by parsing the Markdown source with a ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features/plugins"}),"Remark plugin"),". There are known edge-cases where it generates false-positives and false-negatives."),(0,a.kt)("p",null,"Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features/tabs"}),(0,a.kt)("inlineCode",{parentName:"a"},"Tabs"))," and ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features#details"}),(0,a.kt)("inlineCode",{parentName:"a"},"details"))," will not be excluded."),(0,a.kt)("p",null,"Non-Markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-md"}),'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n')),(0,a.kt)("p",null,"The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,a.kt)("a",l({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/6201"}),"this issue"),"."),(0,a.kt)("hr",null),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Below is just some dummy content to have more table of contents items available on the current page.")),(0,a.kt)("h2",l({},{id:"example-section-1"}),"Example Section 1"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",l({},{id:"example-subsection-1-a"}),"Example Subsection 1 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-a-i"}),"Example subsubsection 1 a I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-a-ii"}),"Example subsubsection 1 a II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-a-iii"}),"Example subsubsection 1 a III"),(0,a.kt)("h3",l({},{id:"example-subsection-1-b"}),"Example Subsection 1 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-b-i"}),"Example subsubsection 1 b I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-b-ii"}),"Example subsubsection 1 b II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-b-iii"}),"Example subsubsection 1 b III"),(0,a.kt)("h3",l({},{id:"example-subsection-1-c"}),"Example Subsection 1 c"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-c-i"}),"Example subsubsection 1 c I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-c-ii"}),"Example subsubsection 1 c II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-1-c-iii"}),"Example subsubsection 1 c III"),(0,a.kt)("h2",l({},{id:"example-section-2"}),"Example Section 2"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",l({},{id:"example-subsection-2-a"}),"Example Subsection 2 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-a-i"}),"Example subsubsection 2 a I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-a-ii"}),"Example subsubsection 2 a II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-a-iii"}),"Example subsubsection 2 a III"),(0,a.kt)("h3",l({},{id:"example-subsection-2-b"}),"Example Subsection 2 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-b-i"}),"Example subsubsection 2 b I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-b-ii"}),"Example subsubsection 2 b II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-b-iii"}),"Example subsubsection 2 b III"),(0,a.kt)("h3",l({},{id:"example-subsection-2-c"}),"Example Subsection 2 c"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-c-i"}),"Example subsubsection 2 c I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-c-ii"}),"Example subsubsection 2 c II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-2-c-iii"}),"Example subsubsection 2 c III"),(0,a.kt)("h2",l({},{id:"example-section-3"}),"Example Section 3"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h3",l({},{id:"example-subsection-3-a"}),"Example Subsection 3 a"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-a-i"}),"Example subsubsection 3 a I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-a-ii"}),"Example subsubsection 3 a II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-a-iii"}),"Example subsubsection 3 a III"),(0,a.kt)("h3",l({},{id:"example-subsection-3-b"}),"Example Subsection 3 b"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-b-i"}),"Example subsubsection 3 b I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-b-ii"}),"Example subsubsection 3 b II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-b-iii"}),"Example subsubsection 3 b III"),(0,a.kt)("h3",l({},{id:"example-subsection-3-c"}),"Example Subsection 3 c"),(0,a.kt)("p",null,"Lorem ipsum"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-c-i"}),"Example subsubsection 3 c I"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-c-ii"}),"Example subsubsection 3 c II"),(0,a.kt)("h4",l({},{id:"example-subsubsection-3-c-iii"}),"Example subsubsection 3 c III"))}p.isMDXComponent=!0}}]);