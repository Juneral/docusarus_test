"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30935],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(27378);var n=r(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={date:"2019-11-08T20:00"},l="2.0.0-alpha.33",s={permalink:"/docusarus_test/changelog/2.0.0-alpha.33",source:"@site/changelog/source/2.0.0-alpha.33.md",title:"2.0.0-alpha.33",description:"Features",date:"2019-11-08T20:00:00.000Z",formattedDate:"November 8, 2019",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2019-11-08T20:00"},prevItem:{title:"2.0.0-alpha.34",permalink:"/docusarus_test/changelog/2.0.0-alpha.34"},nextItem:{title:"2.0.0-alpha.32",permalink:"/docusarus_test/changelog/2.0.0-alpha.32"},listPageLink:"/docusarus_test/changelog/page/4"},p={authorsImageUrls:[]},c=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Others",id:"others",level:2}],u={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"features"}),"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Table of contents is now highlighted depending on current active headings. (thanks to awesome @SantiagoGdaR) ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1896"}),"#1896")),(0,n.kt)("li",{parentName:"ul"},"Official blog plugin can now generate feed for blog posts. (thanks to awesome @moozzyk) ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1916"}),"#1916")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BREAKING")," ",(0,n.kt)("inlineCode",{parentName:"li"},"prismTheme")," is renamed to ",(0,n.kt)("inlineCode",{parentName:"li"},"theme")," as part new ",(0,n.kt)("inlineCode",{parentName:"li"},"prism")," object in ",(0,n.kt)("inlineCode",{parentName:"li"},"themeConfig")," field in your ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),". Eg:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",a({parentName:"pre"},{className:"language-diff"})," themeConfig: {\n-   prismTheme: require('prism-react-renderer/themes/dracula'),\n+   prism: {\n+     theme: require('prism-react-renderer/themes/dracula'),\n+   },\n},\n"))),(0,n.kt)("li",{parentName:"ul"},"Added new ",(0,n.kt)("inlineCode",{parentName:"li"},"prism")," option ",(0,n.kt)("inlineCode",{parentName:"li"},"defaultLanguage")," that is used if the language is not specified in code blocks. ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1910"}),"#1910"))),(0,n.kt)("h2",a({},{id:"fixes"}),"Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix babel/env not picking the correct browserslist configuration during development. When running ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus start"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," is now consistently set to ",(0,n.kt)("inlineCode",{parentName:"li"},"development"),"."),(0,n.kt)("li",{parentName:"ul"},"Ensure routes config generation to be more consistent in ordering. Nested routes should be placed last in routes.js. This will allow user to create ",(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/docs.js")," to create custom docs page for ",(0,n.kt)("inlineCode",{parentName:"li"},"/docs")," or even ",(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/docs/super.js")," to create page for ",(0,n.kt)("inlineCode",{parentName:"li"},"/docs/super/"),";"),(0,n.kt)("li",{parentName:"ul"},"Fix watcher does not trigger reload on windows."),(0,n.kt)("li",{parentName:"ul"},"Fix build compilation error if exists only one code tab."),(0,n.kt)("li",{parentName:"ul"},"Add minor padding to docs container so that hash-link won't be cut off.")),(0,n.kt)("h2",a({},{id:"others"}),"Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Misc dependency upgrades."),(0,n.kt)("li",{parentName:"ul"},"Stability improvement (more tests) & refactoring on docs plugin to prevent regression.")))}m.isMDXComponent=!0}}]);