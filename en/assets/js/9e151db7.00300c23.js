"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83861],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(27378);var n=r(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={date:"2019-07-20T20:00"},l="2.0.0-alpha.22",s={permalink:"/docusarus_test/en/changelog/2.0.0-alpha.22",source:"@site/changelog/source/2.0.0-alpha.22.md",title:"2.0.0-alpha.22",description:"- Add missing dependencies on @docusaurus/preset-classic",date:"2019-07-20T20:00:00.000Z",formattedDate:"July 20, 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-07-20T20:00"},prevItem:{title:"2.0.0-alpha.23",permalink:"/docusarus_test/en/changelog/2.0.0-alpha.23"},nextItem:{title:"2.0.0-alpha.21",permalink:"/docusarus_test/en/changelog/2.0.0-alpha.21"},listPageLink:"/docusarus_test/en/changelog/page/4"},u={authorsImageUrls:[]},c=[],p={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add missing dependencies on ",(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic")),(0,n.kt)("li",{parentName:"ul"},"New plugin ",(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-ideal-image")," to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)"),(0,n.kt)("li",{parentName:"ul"},"Better Twitter/discord image preview. Previously the size is too zoomed"),(0,n.kt)("li",{parentName:"ul"},"Allow prism syntax highlighting theme customization. Refer to ",(0,n.kt)("a",a({parentName:"li"},{href:"https://docusaurus.io/docs/markdown-features#syntax-highlighting"}),"https://docusaurus.io/docs/markdown-features#syntax-highlighting")),(0,n.kt)("li",{parentName:"ul"},"CSS is now autoprefixed using postcss"),(0,n.kt)("li",{parentName:"ul"},"Faster, lighter webpack bundle size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/theme-live-codeblock")," is now much smaller in size and no longer only load on viewport"),(0,n.kt)("li",{parentName:"ul"},"Blog markdown files now support using the id field to specify the path")))}m.isMDXComponent=!0}}]);