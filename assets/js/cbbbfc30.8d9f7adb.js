"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79043],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14141:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(27378),o=n(38944),r=n(89583),i=n(36712);const l="admonition_O4V7",s="admonitionHeading_mM4K",c="admonitionIcon_Wsqb",m="admonitionContent_wp6k";function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},f={secondary:"note",important:"info",success:"tip",warning:"danger"};function h(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null===(t=e.props)||void 0===t?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);var o;return p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){d(e,t,n[t])}))}return e}({},e),{title:null!==(o=e.title)&&void 0!==o?o:t,children:n})}function b(e){const{children:t,type:n,title:i,icon:d}=h(e),p=function(e){var t;const n=null!==(t=f[e])&&void 0!==t?t:e;return u[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),u.info)}(n),b=null!=i?i:p.label,{iconComponent:k}=p,y=null!=d?d:a.createElement(k,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${p.infimaClassName}`,l)},a.createElement("div",{className:s},a.createElement("span",{className:c},y),b),a.createElement("div",{className:m},t))}},61132:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(38944);const r="tabItem_pnkT";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),o=n(38944),r=n(29088),i=n(52196),l=n(77468),s=n(75527);const c="tabList_Qoir",m="tabItem_AQgk";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:u,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=u?u:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const g=null===p?p:null!==(v=null!=p?p:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[O,x]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==O&&(E(t),x(a),null!=f&&N(f,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:j,onClick:C},n,{className:(0,o.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function u(e){const t=(0,r.Z)();return a.createElement(p,d({key:String(t)},e))}},6698:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),o=n(38944);const r="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",s="browserWindowAddressBar_Pd8y",c="dot_giz1",m="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";function u({children:e,minHeight:t,url:n="http://localhost:3000"}){return a.createElement("div",{className:r,style:{minHeight:t}},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:c,style:{background:"#f25f58"}}),a.createElement("span",{className:c,style:{background:"#fbbe3c"}}),a.createElement("span",{className:c,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,o.Z)(s,"text--truncate")},n),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:p},e))}},26786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>f});n(27378);var a=n(35318),o=n(6698),r=n(38269),i=n(61132),l=n(14141);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},d="Admonitions",p={unversionedId:"guides/markdown-features/admonitions",id:"version-2.0.0-beta.22/guides/markdown-features/admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",source:"@site/versioned_docs/version-2.0.0-beta.22/guides/markdown-features/markdown-features-admonitions.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/admonitions",permalink:"/docs/2.0.0-beta.22/markdown-features/admonitions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-admonitions.mdx",tags:[],version:"2.0.0-beta.22",frontMatter:{id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},sidebar:"docs",previous:{title:"Code blocks",permalink:"/docs/2.0.0-beta.22/markdown-features/code-blocks"},next:{title:"Headings and Table of contents",permalink:"/docs/2.0.0-beta.22/markdown-features/toc"}},u={},f=[{value:"Usage with Prettier",id:"usage-with-prettier",level:2},{value:"Specifying title",id:"specifying-title",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:2},{value:"Usage in JSX",id:"usage-in-jsx",level:2}],h={toc:f};function b(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)("wrapper",s({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"admonitions"}),"Admonitions"),(0,a.kt)("p",null,"In addition to the basic Markdown syntax, we use ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/elviswolcott/remark-admonitions"}),"remark-admonitions")," alongside MDX to add support for admonitions. Admonitions are wrapped by a set of 3 colons."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-md"}),":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("admonition",s({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",s({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",s({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,a.kt)("admonition",s({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",s({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",s({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,a.kt)("admonition",s({},{type:"danger"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,a.kt)("a",s({parentName:"p"},{href:"#"}),"this ",(0,a.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,a.kt)("h2",s({},{id:"usage-with-prettier"}),"Usage with Prettier"),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",s({parentName:"p"},{href:"https://prettier.io"}),"Prettier")," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-md"}),"\x3c!-- Prettier doesn't change this --\x3e\n:::note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n:::note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n")),(0,a.kt)("h2",s({},{id:"specifying-title"}),"Specifying title"),(0,a.kt)("p",null,"You may also specify an optional title"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-md"}),":::note Your Title\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("admonition",s({},{title:"Your Title",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"content")," with ",(0,a.kt)("em",{parentName:"p"},"Markdown")," ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax"),"."))),(0,a.kt)("h2",s({},{id:"admonitions-with-mdx"}),"Admonitions with MDX"),(0,a.kt)("p",null,"You can use MDX inside admonitions too!"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip Use tabs in admonitions\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n')),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("admonition",s({},{title:"Use tabs in admonitions",type:"tip"}),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,a.kt)(i.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,a.kt)(i.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))),(0,a.kt)("h2",s({},{id:"usage-in-jsx"}),"Usage in JSX"),(0,a.kt)("p",null,"Outside of Markdown, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Admonition")," component to get the same output."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:'title="MyReactPage.jsx"',title:'"MyReactPage.jsx"'}),"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"The types that are accepted are the same as above: ",(0,a.kt)("inlineCode",{parentName:"p"},"note"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"danger"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"caution"),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:'title="MyReactPage.jsx"',title:'"MyReactPage.jsx"'}),'<Admonition type="tip" icon="\ud83d\udca1" title="Did you know...">\n  <p>\n    Use plugins to introduce shorter syntax for the most commonly used JSX\n    elements in your project.\n  </p>\n</Admonition>\n')),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)(l.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",mdxType:"Admonition"},(0,a.kt)("p",null,"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project."))))}b.isMDXComponent=!0}}]);