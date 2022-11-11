"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27657],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},99238:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(27378),o=r(38944),c=r(41876),a=r(13415),i=r(64149),s=r(36712);const l="cardContainer_Uewx",u="cardTitle_dwRT",d="cardDescription_mCBT";function p({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,o.Z)("card padding--lg",l)},t)}function f({href:e,icon:t,title:r,description:c}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:r},t," ",r),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:c},c))}function m({item:e}){const t=(0,c.Wl)(e);return t?n.createElement(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,c.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);return n.createElement(f,{href:e.href,icon:t,title:e.label,description:null==o?void 0:o.description})}function y({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function g({className:e}){const t=(0,c.jA)();return n.createElement(b,{items:t.items,className:e})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,v({},e));const a=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},84864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});r(27378);var n=r(35318),o=r(99238);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={},s="Advanced Tutorials",l={unversionedId:"advanced/index",id:"advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/docs/advanced/index.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docusarus_test/zh-CN/docs/next/advanced/",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docusarus_test/zh-CN/docs/next/guides/whats-next"},next:{title:"Architecture",permalink:"/docusarus_test/zh-CN/docs/next/advanced/architecture"}},u={},d=[],p={toc:d};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",c({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"advanced-tutorials"}),"Advanced Tutorials"),(0,n.kt)("p",null,"This section is not going to be very structured, but we will cover the following topics:"),(0,n.kt)(o.Z,{mdxType:"DocCardList"}),(0,n.kt)("p",null,"We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,n.kt)("a",c({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/api/plugin-methods/"}),"plugin APIs")," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"))}f.isMDXComponent=!0}}]);