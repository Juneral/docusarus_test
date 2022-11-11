"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54705],{44902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(27378);var r=n(35318),a=n(87048);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},s="Release process",c={unversionedId:"release-process",id:"release-process",title:"Release process",description:"Let's see how Docusaurus handles versioning, releases and breaking changes.",source:"@site/community/5-release-process.md",sourceDirName:".",slug:"/release-process",permalink:"/docusarus_test/community/release-process",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/community/5-release-process.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"community",previous:{title:"Canary releases",permalink:"/docusarus_test/community/canary"}},u={},p=[{value:"Semantic versioning",id:"semantic-versioning",level:2},{value:"Major versions",id:"major-versions",level:3},{value:"Minor versions",id:"minor-versions",level:3},{value:"Patch versions",id:"patch-versions",level:3},{value:"Versions",id:"versions",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Next version",id:"next-version",level:3},{value:"Public API surface",id:"public-api-surface",level:2},{value:"Core public API",id:"core-public-api",level:3},{value:"Theming public API",id:"theming-public-api",level:3}],m={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"release-process"}),"Release process"),(0,r.kt)("p",null,"Let's see how Docusaurus handles ",(0,r.kt)("strong",{parentName:"p"},"versioning, releases and breaking changes"),"."),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"This topic is particularly important for highly customized sites that may have difficulties to upgrade.")),(0,r.kt)("h2",o({},{id:"semantic-versioning"}),"Semantic versioning"),(0,r.kt)("p",null,"Docusaurus versioning is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," scheme and respects ",(0,r.kt)("a",o({parentName:"p"},{href:"https://semver.org/"}),"Semantic Versioning"),"."),(0,r.kt)("p",null,"Respecting Semantic Versioning is important for multiple reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It ",(0,r.kt)("strong",{parentName:"li"},"guarantees simple minor version upgrades"),", as long as you only use the ",(0,r.kt)("a",o({parentName:"li"},{href:"##public-api-surface"}),"public API")),(0,r.kt)("li",{parentName:"ul"},"It follows front-end ecosystem conventions"),(0,r.kt)("li",{parentName:"ul"},"A new major version is an opportunity to thoroughly document breaking changes"),(0,r.kt)("li",{parentName:"ul"},"A new major/minor version is an opportunity to communicate new features through a blog post")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Releasing Docusaurus 2.0 took a very long time. From now on, Docusaurus will ",(0,r.kt)("strong",{parentName:"p"},"release new major versions more regularly"),". In practice, you can expect a new major version every 2\u20134 months."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",o({parentName:"p"},{href:"https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred.html"}),"Major version numbers are not sacred"),", but we still group breaking changes together and avoid releasing major versions too often.")),(0,r.kt)("h3",o({},{id:"major-versions"}),"Major versions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"major")," version number is incremented on ",(0,r.kt)("strong",{parentName:"p"},"every breaking change"),"."),(0,r.kt)("p",null,"Whenever a new major version is released, we publish:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a blog post with feature highlights, major bug fixes, ",(0,r.kt)("strong",{parentName:"li"},"breaking changes, and upgrade instructions"),"."),(0,r.kt)("li",{parentName:"ul"},"an exhaustive changelog entry")),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Read our ",(0,r.kt)("a",o({parentName:"p"},{href:"##public-api-surface"}),"public API surface")," section to clearly understand what we consider as a breaking change.")),(0,r.kt)("h3",o({},{id:"minor-versions"}),"Minor versions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"minor")," version number is incremented on every significant retro-compatible change."),(0,r.kt)("p",null,"Whenever a new minor version is released, we publish:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a blog post with a list of feature highlights and major bug fixes"),(0,r.kt)("li",{parentName:"ul"},"an exhaustive changelog entry")),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"If you only use our ",(0,r.kt)("a",o({parentName:"p"},{href:"##public-api-surface"}),"public API surface"),", you should be able to upgrade in no time!")),(0,r.kt)("h3",o({},{id:"patch-versions"}),"Patch versions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," version number is incremented on bugfixes releases."),(0,r.kt)("p",null,"Whenever a new patch version is released, we publish:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an exhaustive changelog entry")),(0,r.kt)("h2",o({},{id:"versions"}),"Versions"),(0,r.kt)("p",null,"The Docusaurus team is usually working on 2 major versions at the same time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docusaurus ",(0,r.kt)(a.Fr,{mdxType:"StableMajorVersion"})),": the ",(0,r.kt)("strong",{parentName:"li"},"stable")," version, on the ",(0,r.kt)(a.Zl,{mdxType:"StableMajorBranchLink"})," branch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docusaurus ",(0,r.kt)(a.CW,{mdxType:"NextMajorVersion"})),": the ",(0,r.kt)("strong",{parentName:"li"},"next")," version, on the ",(0,r.kt)(a.mq,{mdxType:"NextMajorBranchLink"})," branch")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)(a.Zl,{mdxType:"StableMajorBranchLink"})," branch is created just before releasing the first v",(0,r.kt)(a.Fr,{mdxType:"StableMajorVersion"})," release candidate.")),(0,r.kt)("h3",o({},{id:"stable-version"}),"Stable version"),(0,r.kt)("p",null,"The stable version (v",(0,r.kt)(a.Fr,{mdxType:"StableMajorVersion"}),", on ",(0,r.kt)(a.Zl,{mdxType:"StableMajorBranchLink"}),") is recommended for most Docusaurus users."),(0,r.kt)("p",null,"We regularly backport retro-compatible features, bug and security fixes from ",(0,r.kt)(a.mq,{mdxType:"NextMajorBranchLink"})," to ",(0,r.kt)(a.Zl,{mdxType:"StableMajorBranchLink"})," with ",(0,r.kt)("inlineCode",{parentName:"p"},"git cherry-pick")," to make them available to those not ready for the next version."),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"After a new stable version has been released, the former stable version will continue to receive support only for ",(0,r.kt)("strong",{parentName:"p"},"major security issues")," for ",(0,r.kt)("strong",{parentName:"p"},"3 months"),". Otherwise, all features will be frozen and non-critical bugs will not be fixed."),(0,r.kt)("p",{parentName:"admonition"},"It is recommended to upgrade within that time frame to the new stable version.")),(0,r.kt)("h3",o({},{id:"next-version"}),"Next version"),(0,r.kt)("p",null,"The next version (v",(0,r.kt)(a.CW,{mdxType:"NextMajorVersion"}),", on ",(0,r.kt)(a.mq,{mdxType:"NextMajorBranchLink"}),") is the version the Docusaurus team is currently working on."),(0,r.kt)("p",null,"The ",(0,r.kt)(a.mq,{mdxType:"NextMajorBranchLink"})," branch is the ",(0,r.kt)("strong",{parentName:"p"},"default target branch")," for all pull requests, including core team and external contributions."),(0,r.kt)("p",null,"This version is recommended for ",(0,r.kt)("strong",{parentName:"p"},"early adopters")," that want to use the latest Docusaurus features as soon as possible. It is also a good way to help us by reporting bugs and giving some feedback."),(0,r.kt)("p",null,"There are 3 ways to use the next version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"with an ",(0,r.kt)("inlineCode",{parentName:"li"},"alpha"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"beta")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"rc")," pre-release"),(0,r.kt)("li",{parentName:"ul"},"with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@next")," npm dist tag for the latest pre-release"),(0,r.kt)("li",{parentName:"ul"},"with a ",(0,r.kt)("a",o({parentName:"li"},{href:"/docusarus_test/community/canary"}),"canary release")," for the very latest features")),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"The next version passes all our automated tests and is used by the Docusaurus site itself. It is relatively safe: don't be afraid to give it a try.")),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Breaking changes can happen on the next version: detailed upgrade instructions are available in the changelog and pull requests."),(0,r.kt)("p",{parentName:"admonition"},"At the ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rc")," (release candidate) phases, we avoid introducing major breaking changes.")),(0,r.kt)("h2",o({},{id:"public-api-surface"}),"Public API surface"),(0,r.kt)("p",null,"Docusaurus commits to respecting Semantic Versioning. This means that whenever changes occur in Docusaurus public APIs and break backward compatibility, we will increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"major")," version number."),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Docusaurus guarantees public API retro-compatibility across ",(0,r.kt)("inlineCode",{parentName:"p"},"minor")," versions. Unless you use internal APIs, ",(0,r.kt)("inlineCode",{parentName:"p"},"minor")," version upgrades should be easy.")),(0,r.kt)("p",null,"We will outline what accounts as the public API surface."),(0,r.kt)("h3",o({},{id:"core-public-api"}),"Core public API"),(0,r.kt)("p",null,"\u2705 Our public API includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docusaurus config"),(0,r.kt)("li",{parentName:"ul"},"Docusaurus client APIs"),(0,r.kt)("li",{parentName:"ul"},"Docusaurus CLI"),(0,r.kt)("li",{parentName:"ul"},"Preset options"),(0,r.kt)("li",{parentName:"ul"},"Plugin options"),(0,r.kt)("li",{parentName:"ul"},"Plugin lifecycle APIs"),(0,r.kt)("li",{parentName:"ul"},"Theme config"),(0,r.kt)("li",{parentName:"ul"},"Core plugins route component props"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/types")," TypeScript types",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We still retain the freedom to make types stricter (which may break type-checking).")))),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"For non-theme APIs, any documented API is considered public (and will be stable); any undocumented API is considered internal.")),(0,r.kt)("p",null,'An API being "stable" means if you increment the patch or minor version of your Docusaurus installation without any other change, running ',(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus build")," should not throw an error."),(0,r.kt)("h3",o({},{id:"theming-public-api"}),"Theming public API"),(0,r.kt)("p",null,"Docusaurus has a very flexible theming system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use custom CSS"),(0,r.kt)("li",{parentName:"ul"},"You can ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/swizzling"}),"swizzle")," any React theme component")),(0,r.kt)("p",null,"This system also implicitly creates a very large API surface. To be able to move fast and improve Docusaurus, we can't guarantee retro-compatibility."),(0,r.kt)("p",null,"\u2705 Our public theming API includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"/docs/styling-layout#theme-class-names"}),"Theme class names")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"/docs/styling-layout#styling-your-site-with-infima"}),"Infima")," class names and CSS variables"),(0,r.kt)("li",{parentName:"ul"},"React components that are ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/swizzling#what-is-safe-to-swizzle"}),"safe to swizzle")),(0,r.kt)("li",{parentName:"ul"},"The theme user experience"),(0,r.kt)("li",{parentName:"ul"},"Browser support")),(0,r.kt)("admonition",o({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"You may not be able to achieve your site customization through this public API."),(0,r.kt)("p",{parentName:"admonition"},"In this case, please ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/discussions/5468"}),"report your customization use case")," and we will figure out how to expand our public API.")),(0,r.kt)("p",null,"\u274c Our public theming API ",(0,r.kt)("strong",{parentName:"p"},"excludes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The DOM structure"),(0,r.kt)("li",{parentName:"ul"},"CSS module class names with a hash suffix (usually targeted with ",(0,r.kt)("inlineCode",{parentName:"li"},"[class*='myClassName']")," selectors)"),(0,r.kt)("li",{parentName:"ul"},"React components that are ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/swizzling#what-is-safe-to-swizzle"}),"unsafe or forbidden to swizzle")),(0,r.kt)("li",{parentName:"ul"},"React components that import from ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/theme-common/internal")),(0,r.kt)("li",{parentName:"ul"},"The exact visual appearance of the theme")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/swizzling"}),"swizzling")," safe components, you might encounter components that import undocumented APIs from ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-common")," (without the ",(0,r.kt)("inlineCode",{parentName:"p"},"/internal")," subpath)."),(0,r.kt)("p",{parentName:"admonition"},'We still maintain retro-compatibility on those APIs (hence they are marked as "safe"), but we don\'t encourage a direct usage.')))}d.isMDXComponent=!0},50016:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(78844),a=n(73919);function o(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},55188:(e,t,n)=>{n.d(t,{v:()=>l});var r=n(70124);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){return(0,r.v)(e,i(o({},t),{transforms:o({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(29088);function o({children:e,fallback:t}){return(0,a.Z)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},87048:(e,t,n)=>{n.d(t,{CW:()=>d,FS:()=>v,Fr:()=>h,Hc:()=>y,I1:()=>p,SR:()=>m,UM:()=>k,Zl:()=>b,mC:()=>c,mq:()=>g,rv:()=>N});var r=n(27378),a=n(32054),o=n(92053),i=n(36712),l=n(93457);const s=r.createContext(null);function c({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useRef)(!0);return(0,r.useEffect)((()=>(a.current=!0,()=>{a.current=!1})),[]),(0,r.useEffect)((()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then((e=>e.json())).then((e=>{if(!a.current)return;const t=Object.keys(e.versions).at(-1),r=e.time[t];n({name:t,time:r})}))}),[]),r.createElement(s.Provider,{value:t},e)}function u(){var e;const t=null===(e=(0,a.J)("default").preferredVersion)||void 0===e?void 0:e.name,n=(0,o.gB)("default");var r;const i=(null!==(r=n.find((e=>"current"!==e.name)))&&void 0!==r?r:n[0]).name;return t&&"current"!==t?t:i}function p(){const e=(0,r.useContext)(s);return e?r.createElement("span",null,r.createElement(i.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:r.createElement("b",null,e.name)}},"Current: {canaryVersionName}")):r.createElement("span",null,r.createElement(i.Z,{description:"An example canary version tag when the actual version can't be fetched."},"Example: 0.0.0-4922"))}function m(){const e=u();return r.createElement("span",null,e)}function d(){return r.createElement("span",null,3)}function h(){return r.createElement("span",null,2)}function f({branch:e}){return r.createElement("a",{href:`https://github.com/facebook/docusaurus/tree/${e}`},r.createElement("code",null,e))}function b(){return r.createElement(f,{branch:"docusaurus-v2"})}function g(){return r.createElement(f,{branch:"main"})}function k({children:e}){return(0,r.useContext)(s)?null:e}function v({children:e}){return(0,r.useContext)(s)?e:null}function y(){var e,t;const n=null!==(t=null===(e=(0,r.useContext)(s))||void 0===e?void 0:e.name)&&void 0!==t?t:"0.0.0-4922",a=u();return r.createElement(l.Z,{language:"diff"},`-  "@docusaurus/core": "^${a}",\n-  "@docusaurus/preset-classic": "^${a}",\n+  "@docusaurus/core": "${n}",\n+  "@docusaurus/preset-classic": "${n}",\n`)}function N(){var e;const t=null===(e=(0,r.useContext)(s))||void 0===e?void 0:e.time;return t?r.createElement(i.Z,{values:{time:r.createElement("b",null,new Date(t).toLocaleString())}},"The latest canary version that's available on npm is published at {time}."):null}},93457:(e,t,n)=>{n.d(t,{Z:()=>be});var r={};n.r(r),n.d(r,{ButtonExample:()=>P});var a=n(27378),o=n(38944),i=n(29088),l=n(40935),s=n(36712),c=n(4423),u=n(94544),p=n(50016);const m="playgroundContainer_6Ior",d="playgroundHeader_Tvsk",h="playgroundEditor_TySg",f="playgroundPreview_mApW";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k({children:e}){return a.createElement("div",{className:(0,o.Z)(d)},e)}function v(){return a.createElement("div",null,"Loading...")}function y(){return a.createElement(a.Fragment,null,a.createElement(k,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:f},a.createElement(u.Z,{fallback:a.createElement(v,null)},(()=>a.createElement(a.Fragment,null,a.createElement(l.i5,null),a.createElement(l.IF,null))))))}function N(){const e=(0,i.Z)();return a.createElement(l.uz,{key:String(e),className:h})}function w(){return a.createElement(a.Fragment,null,a.createElement(k,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(N,null))}function j(e){var t,{children:n,transformCode:r}=e,o=g(e,["children","transformCode"]);const{siteConfig:{themeConfig:i}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:s}}=i,u=(0,p.p)();var d;const h=null!==(d=null===(t=o.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return a.createElement("div",{className:m},a.createElement(l.nu,b({code:n.replace(/\n$/,""),noInline:h,transformCode:null!=r?r:e=>`${e};`,theme:u},o),"top"===s?a.createElement(a.Fragment,null,a.createElement(y,null),a.createElement(w,null)):a.createElement(a.Fragment,null,a.createElement(w,null),a.createElement(y,null))))}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}function P(e){return a.createElement("button",E({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({React:a},a,r);var I,S,T=n(89583),A=n(6324),L=n.n(A);const D=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),M=RegExp("\\{(?<range>[\\d,-]+)\\}"),z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Z(e,t){const n=e.map((e=>{const{start:n,end:r}=z[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function _(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&M.test(o)){const e=o.match(M).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=L()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"],t);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"],t);case"html":return Z(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Z(["bash"],t);case"markdown":case"md":return Z(["html","jsx","bash"],t);default:return Z(Object.keys(z),t)}}(r,a),l=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<l.length;){const e=l[d].match(i);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?s[c[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const m={};return Object.entries(s).forEach((([e,{range:t}])=>{L()(t).forEach((t=>{var n;null!==(n=(I=m)[S=t])&&void 0!==n||(I[S]=[]),m[t].push(e)}))})),{lineClassNames:m,code:n}}const R="codeBlockContainer_jDV4";function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function $(e){var{as:t}=e,n=W(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const a=t[e];a&&"string"==typeof r&&(n[a]=r)})),n}((0,p.p)());return a.createElement(t,V({},n,{style:r,className:(0,o.Z)(n.className,R,T.k.common.codeBlock)}))}const F={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function H({children:e,className:t}){return a.createElement($,{as:"pre",tabIndex:0,className:(0,o.Z)(F.codeBlockStandalone,"thin-scrollbar",t)},a.createElement("code",{className:F.codeBlockLines},e))}var q=n(73919),G=n(51114);const U={attributes:!0,characterData:!0,childList:!0,subtree:!0};function X(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n=U){const r=(0,G.zX)(t),o=(0,G.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Q=n(55620);const Y="codeLine_qRmp",J="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:i}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=r({line:e,className:(0,o.Z)(t,n&&Y)}),s=e.map(((e,t)=>a.createElement("span",ee({key:t},i({token:e,key:t})))));return a.createElement("span",ee({},l),n?a.createElement(a.Fragment,null,a.createElement("span",{className:J}),a.createElement("span",{className:K},s)):s,a.createElement("br",null))}var ne=n(5568);const re={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ae({code:e,className:t}){const[n,r]=(0,a.useState)(!1),i=(0,a.useRef)(void 0),l=(0,a.useCallback)((()=>{(0,ne.Z)(e),r(!0),i.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,a.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,re.copyButton,n&&re.copyButtonCopied),onClick:l},a.createElement("span",{className:re.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:re.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:re.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const oe="wordWrapButtonIcon_MQXS",ie="wordWrapButtonEnabled_TBIH";function le({className:e,onClick:t,isEnabled:n}){const r=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",e,n&&ie),"aria-label":r,title:r},a.createElement("svg",{className:oe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ce({children:e,className:t="",metastring:n,title:r,showLineNumbers:i,language:l}){const{prism:{defaultLanguage:s,magicComments:c}}=(0,q.L)();var u;const m=null!==(u=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,d=(0,p.p)(),h=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),i=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return X(o,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(D))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:b,code:g}=_(e,{metastring:n,language:m,magicComments:c}),k=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return a.createElement($,{as:"div",className:(0,o.Z)(t,m&&!t.includes(`language-${m}`)&&`language-${m}`)},f&&a.createElement("div",{className:F.codeBlockTitle},f),a.createElement("div",{className:F.codeBlockContent},a.createElement(Q.ZP,se({},Q.lG,{theme:d,code:g,language:null!=m?m:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>a.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,o.Z)(e,F.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,o.Z)(F.codeBlockLines,k&&F.codeBlockLinesWithNumbering)},t.map(((e,t)=>a.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:b[t],showLineNumbers:k}))))))),a.createElement("div",{className:F.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&a.createElement(le,{className:F.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),a.createElement(ae,{className:F.codeButton,code:g}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}const de=(he=function(e){var{children:t}=e,n=pe(e,["children"]);const r=(0,i.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?ce:H;return a.createElement(l,ue({key:String(r)},n),o)},function(e){return e.live?a.createElement(j,me({scope:B},e)):a.createElement(he,me({},e))});var he;function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}function be(e){return a.createElement(de,fe({},e))}}}]);