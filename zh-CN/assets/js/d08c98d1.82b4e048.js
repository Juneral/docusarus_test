"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51964],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(27378);var n=r(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={date:"2019-07-24T20:00"},i="2.0.0-alpha.24",c={permalink:"/docusarus_test/zh-CN/changelog/2.0.0-alpha.24",source:"@site/changelog/source/2.0.0-alpha.24.md",title:"2.0.0-alpha.24",description:"- Remove unused metadata for pages. This minimize number of http request & smaller bundle size.",date:"2019-07-24T20:00:00.000Z",formattedDate:"2019\u5e747\u670824\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-07-24T20:00"},prevItem:{title:"2.0.0-alpha.25",permalink:"/docusarus_test/zh-CN/changelog/2.0.0-alpha.25"},nextItem:{title:"2.0.0-alpha.23",permalink:"/docusarus_test/zh-CN/changelog/2.0.0-alpha.23"},listPageLink:"/docusarus_test/zh-CN/changelog/page/4"},s={authorsImageUrls:[]},u=[],p={toc:u};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove unused metadata for pages. This minimize number of http request & smaller bundle size."),(0,n.kt)("li",{parentName:"ul"},"Upgrade dependencies of css-loader from 2.x to 3.x. CSS modules localIdentName hash now only use the last 4 characters instead of 8."),(0,n.kt)("li",{parentName:"ul"},"Fix broken markdown linking replacement for mdx files"),(0,n.kt)("li",{parentName:"ul"},"Fix potential security vulnerability because we're exposing the directory structure of the host machine. Instead of absolute path, we use relative path from site directory. Resulting in shorter webpack chunk naming and smaller bundle size."),(0,n.kt)("li",{parentName:"ul"},"Use contenthash instead of chunkhash for better long term caching"),(0,n.kt)("li",{parentName:"ul"},"Allow user to customize generated heading from MDX. Swizzle ",(0,n.kt)("inlineCode",{parentName:"li"},"@theme/Heading"))))}m.isMDXComponent=!0}}]);