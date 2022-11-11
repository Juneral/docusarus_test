"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1564],{43380:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),o=n(78844),a=n(9209);n(72481);function i({children:e}){const{colorMode:t}=(0,o.I)();return r.createElement(a.Z,{overlayBgColorEnd:"dark"===t?"rgba(0, 0, 0, 0.95)":"rgba(255, 255, 255, 0.95)"},e)}},62785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(27378);var r=n(35318),o=n(43380);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={description:"How Docusaurus works to build your app"},u="Architecture",c={unversionedId:"advanced/architecture",id:"advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/docs/advanced/architecture.md",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docusarus_test/zh-CN/docs/next/advanced/architecture",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docusarus_test/zh-CN/docs/next/advanced/"},next:{title:"Plugins",permalink:"/docusarus_test/zh-CN/docs/next/advanced/plugins"}},l={},d=[],p={toc:d};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"architecture"}),"Architecture"),(0,r.kt)(o.Z,{mdxType:"Zoom"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture overview",src:n(76721).Z,width:"2228",height:"2007"}))),(0,r.kt)("p",null,"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."),(0,r.kt)("p",null,"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as CommonJS that can be ",(0,r.kt)("inlineCode",{parentName:"li"},"require"),"'d."),(0,r.kt)("li",{parentName:"ul"},"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions.")),(0,r.kt)("p",null,"Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"addRoute"),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", which itself is run in Node (hence you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," and pass callbacks as plugin options)."),(0,r.kt)("p",null,"During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," through ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/docusaurus-core#useDocusaurusContext"}),(0,r.kt)("inlineCode",{parentName:"a"},"useDocusaurusContext()")),". However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"siteConfig")," object only contains ",(0,r.kt)("strong",{parentName:"p"},"serializable values")," (values that are preserved after ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"). Functions, regexes, etc. would be lost on the client side. The ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," is designed to be entirely serializable."))}h.isMDXComponent=!0},76721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);