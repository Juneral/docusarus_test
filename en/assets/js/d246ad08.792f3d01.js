"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26629],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=u,f=g["".concat(o,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:u,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});n(27378);var r=n(35318);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}const i={sidebar_position:0,id:"plugins-overview",sidebar_label:"Plugins overview",slug:"/api/plugins"},s="Docusaurus plugins",o={unversionedId:"api/plugins/plugins-overview",id:"version-2.0.0-beta.22/api/plugins/plugins-overview",title:"Docusaurus plugins",description:"We provide official Docusaurus plugins.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/plugins/overview.md",sourceDirName:"api/plugins",slug:"/api/plugins",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/overview.md",tags:[],version:"2.0.0-beta.22",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"plugins-overview",sidebar_label:"Plugins overview",slug:"/api/plugins"},sidebar:"api",previous:{title:"Static methods",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugin-methods/static-methods"},next:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-docs"}},l={},p=[{value:"Content plugins",id:"content-plugins",level:2},{value:"Behavior plugins",id:"behavior-plugins",level:2}],c={toc:p};function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"docusaurus-plugins"}),"Docusaurus plugins"),(0,r.kt)("p",null,"We provide official Docusaurus plugins."),(0,r.kt)("h2",u({},{id:"content-plugins"}),"Content plugins"),(0,r.kt)("p",null,"These plugins are responsible for loading your site's content, and creating pages for your theme to render."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-docs"}),"@docusaurus/plugin-content-docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-blog"}),"@docusaurus/plugin-content-blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-pages"}),"@docusaurus/plugin-content-pages"))),(0,r.kt)("h2",u({},{id:"behavior-plugins"}),"Behavior plugins"),(0,r.kt)("p",null,"These plugins will add a useful behavior to your Docusaurus site."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-debug"}),"@docusaurus/plugin-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-sitemap"}),"@docusaurus/plugin-sitemap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-pwa"}),"@docusaurus/plugin-pwa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-client-redirects"}),"@docusaurus/plugin-client-redirects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-ideal-image"}),"@docusaurus/plugin-ideal-image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-google-analytics"}),"@docusaurus/plugin-google-analytics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-google-gtag"}),"@docusaurus/plugin-google-gtag"))))}g.isMDXComponent=!0}}]);