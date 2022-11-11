"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76324],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(27378);var n=r(35318),o=r(99238),a=r(41876);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={},l="Category with a doc of category's name",u={unversionedId:"tests/category-links/with-category-name-doc/with-category-name-doc",id:"tests/category-links/with-category-name-doc/with-category-name-doc",title:"Category with a doc of category's name",description:"You should be able to click on the category and browse this /.md doc",source:"@site/_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.md",sourceDirName:"tests/category-links/with-category-name-doc",slug:"/tests/category-links/with-category-name-doc/",permalink:"/docusarus_test/zh-CN/tests/docs/tests/category-links/with-category-name-doc/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Sample doc",permalink:"/docusarus_test/zh-CN/tests/docs/tests/category-links/regular-category/sample-doc"},next:{title:"Sample doc",permalink:"/docusarus_test/zh-CN/tests/docs/tests/category-links/with-category-name-doc/sample-doc"}},m={},d=[{value:"Intro",id:"intro",level:2},{value:"Category content",id:"category-content",level:2}],p={toc:d};function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",c({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"category-with-a-doc-of-categorys-name"}),"Category with a doc of category's name"),(0,n.kt)("p",null,"You should be able to click on the category and browse this ",(0,n.kt)("inlineCode",{parentName:"p"},"<categoryName>/<categoryName>.md")," doc"),(0,n.kt)("h2",c({},{id:"intro"}),"Intro"),(0,n.kt)("p",null,"Some intro text"),(0,n.kt)("admonition",c({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"It is also possible to render the card items for that category thanks to MDX:")),(0,n.kt)("h2",c({},{id:"category-content"}),"Category content"),(0,n.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0},99238:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(27378),o=r(38944),a=r(41876),c=r(13415),i=r(64149),s=r(36712);const l="cardContainer_Uewx",u="cardTitle_dwRT",m="cardDescription_mCBT";function d({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",l)},t)}function p({href:e,icon:t,title:r,description:a}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:r},t," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function y({item:e}){const t=(0,a.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,a.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);return n.createElement(p,{href:e.href,icon:t,title:e.label,description:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function b({className:e}){const t=(0,a.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,h({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}}}]);