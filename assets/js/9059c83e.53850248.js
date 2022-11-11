"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96677],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(27378);var a=r(35318);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={date:"2019-11-04T20:00"},l="2.0.0-alpha.32",s={permalink:"/docusarus_test/changelog/2.0.0-alpha.32",source:"@site/changelog/source/2.0.0-alpha.32.md",title:"2.0.0-alpha.32",description:"Features",date:"2019-11-04T20:00:00.000Z",formattedDate:"2019\u5e7411\u67084\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-11-04T20:00"},prevItem:{title:"2.0.0-alpha.33",permalink:"/docusarus_test/changelog/2.0.0-alpha.33"},nextItem:{title:"2.0.0-alpha.31",permalink:"/docusarus_test/changelog/2.0.0-alpha.31"},listPageLink:"/docusarus_test/changelog/page/4"},u={authorsImageUrls:[]},c=[{value:"Features",id:"features",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Performance Improvement",id:"performance-improvement",level:2},{value:"Others",id:"others",level:2}],p={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"features"}),"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"<Redirect>")," component for client side redirect. Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nfunction Home() {\n  return <Redirect to=\"/docs/test\" />;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allow user to add custom HTML to footer items. ",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1905"}),"#1905")),(0,a.kt)("li",{parentName:"ul"},"Added code block line highlighting feature (thanks @lex111)! If you have previously swizzled the ",(0,a.kt)("inlineCode",{parentName:"li"},"CodeBlock")," theme component, it is recommended to update your source code to have this feature. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1860"}),"#1860"),")")),(0,a.kt)("h2",n({},{id:"bug-fixes"}),"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"@theme/Tabs")," component to be able to create tabs with only one item."),(0,a.kt)("li",{parentName:"ul"},"Fix MDX ",(0,a.kt)("inlineCode",{parentName:"li"},"@theme/Heading")," component. If there is no id, it should not create anchor link."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug in which if ",(0,a.kt)("inlineCode",{parentName:"li"},"themeConfig.algolia")," is not defined, the custom searchbar won't appear. If you've swizzled Algolia ",(0,a.kt)("inlineCode",{parentName:"li"},"SearchBar")," component before, please update your source code otherwise CSS might break. See ",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1909/files"}),"#1909")," for reference.")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-js"}),'- <Fragment>\n+ <div className="navbar__search" key="search-box">\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slightly adjust search icon position to be more aligned on small width device. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1893"}),"#1893"),")"),(0,a.kt)("li",{parentName:"ul"},"Fix algolia styling bug, previously search suggestion result is sometimes hidden. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1915"}),"#1915"),")"),(0,a.kt)("li",{parentName:"ul"},"Changed the way we read the ",(0,a.kt)("inlineCode",{parentName:"li"},"USE_SSH")," env variable during deployment to be the same as in v1."),(0,a.kt)("li",{parentName:"ul"},"Fix accessing ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/xxxx")," that does not match any existing doc page should return 404 (Not found) page, not blank page. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1903"}),"#1903"),")"),(0,a.kt)("li",{parentName:"ul"},"Prioritize ",(0,a.kt)("inlineCode",{parentName:"li"},"@docusaurus/core")," dependencies/ node_modules over user's node_modules. This fix a bug whereby if user has core-js@3 on its own node_modules but docusaurus depends on core-js@2, we previously encounter ",(0,a.kt)("inlineCode",{parentName:"li"},"Module not found: core-js/modules/xxxx")," (because core-js@3 doesn't have that)."),(0,a.kt)("li",{parentName:"ul"},"Fix a bug where docs plugin add ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs")," route even if docs folder is empty. We also improved docs plugin test coverage to 100% for stability before working on docs versioning. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1912"}),"#1912"),")")),(0,a.kt)("h2",n({},{id:"performance-improvement"}),"Performance Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduce memory usage consumption. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1900"}),"#1900"),")"),(0,a.kt)("li",{parentName:"ul"},"Significantly reduce main bundle size and initial HTML payload on production build. Generated files from webpack is also shorter in name. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1898"}),"#1898"),")"),(0,a.kt)("li",{parentName:"ul"},"Simplify blog metadata. Previously, accessing ",(0,a.kt)("inlineCode",{parentName:"li"},"/blog/post-xxx")," will request for next and prev blog post metadata too aside from target post metadata. We should only request target post metadata. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1908"}),"#1908"),")")),(0,a.kt)("h2",n({},{id:"others"}),"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Convert sitemap plugin to TypeScript. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1894"}),"#1894"),")"),(0,a.kt)("li",{parentName:"ul"},"Refactor dark mode toggle into a hook. (",(0,a.kt)("a",n({parentName:"li"},{href:"https://github.com/facebook/Docusaurus/issues/1899"}),"#1899"),")")))}m.isMDXComponent=!0}}]);