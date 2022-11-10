"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83861],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(27378);var n=r(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={date:"2019-07-20T20:00"},l="2.0.0-alpha.22",p={permalink:"/changelog/2.0.0-alpha.22",source:"@site/changelog/source/2.0.0-alpha.22.md",title:"2.0.0-alpha.22",description:"- Add missing dependencies on @docusaurus/preset-classic",date:"2019-07-20T20:00:00.000Z",formattedDate:"July 20, 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-07-20T20:00"},prevItem:{title:"2.0.0-alpha.23",permalink:"/changelog/2.0.0-alpha.23"},nextItem:{title:"2.0.0-alpha.21",permalink:"/changelog/2.0.0-alpha.21"},listPageLink:"/changelog/page/4"},s={authorsImageUrls:[]},c=[],u={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add missing dependencies on ",(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic")),(0,n.kt)("li",{parentName:"ul"},"New plugin ",(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-ideal-image")," to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)"),(0,n.kt)("li",{parentName:"ul"},"Better Twitter/discord image preview. Previously the size is too zoomed"),(0,n.kt)("li",{parentName:"ul"},"Allow prism syntax highlighting theme customization. Refer to ",(0,n.kt)("a",a({parentName:"li"},{href:"https://docusaurus.io/docs/markdown-features#syntax-highlighting"}),"https://docusaurus.io/docs/markdown-features#syntax-highlighting")),(0,n.kt)("li",{parentName:"ul"},"CSS is now autoprefixed using postcss"),(0,n.kt)("li",{parentName:"ul"},"Faster, lighter webpack bundle size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@docusaurus/theme-live-codeblock")," is now much smaller in size and no longer only load on viewport"),(0,n.kt)("li",{parentName:"ul"},"Blog markdown files now support using the id field to specify the path")))}m.isMDXComponent=!0}}]);