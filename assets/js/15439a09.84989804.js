"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95390],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(27378);var a=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={slug:"/migration/automated"},l="Automated migration",s={unversionedId:"migration/migration-automated",id:"version-2.0.0-rc.1/migration/migration-automated",title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/versioned_docs/version-2.0.0-rc.1/migration/migration-automated.md",sourceDirName:"migration",slug:"/migration/automated",permalink:"/docusarus_test/docs/migration/automated",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-automated.md",tags:[],version:"2.0.0-rc.1",frontMatter:{slug:"/migration/automated"},sidebar:"docs",previous:{title:"Migration overview",permalink:"/docusarus_test/docs/migration"},next:{title:"Manual migration",permalink:"/docusarus_test/docs/migration/manual"}},m={},p=[{value:"Options",id:"options",level:4}],u={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"automated-migration"}),"Automated migration"),(0,a.kt)("p",null,"The migration CLI automatically migrates your v1 website to a v2 website."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Manual work is still required after using the migration CLI, as we can't automate a full migration")),(0,a.kt)("p",null,"The migration CLI migrates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Site configurations (from ",(0,a.kt)("inlineCode",{parentName:"li"},"siteConfig.js")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sidebars.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/blog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/static")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versioned_sidebar.json")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/versioned_docs")," if your site uses versioning")),(0,a.kt)("p",null,"To use the migration CLI, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before using the migration CLI, ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/static"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"siteConfig.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," follow the ",(0,a.kt)("a",r({parentName:"p"},{href:"#"}),"structure")," shown at the start of this page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n")),(0,a.kt)("ol",r({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"To view your new website locally, go into your v2 website's directory and start your development server.")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"cd ./v2-website\nyarn install\nyarn start\n")),(0,a.kt)("admonition",r({},{type:"danger"}),(0,a.kt)("p",{parentName:"admonition"},"The migration CLI updates existing files. Be sure to have committed them first!")),(0,a.kt)("h4",r({},{id:"options"}),"Options"),(0,a.kt)("p",null,"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--mdx")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Add this flag to convert Markdown to MDX automatically")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--page")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Add this flag to migrate pages automatically")))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n")),(0,a.kt)("admonition",r({},{type:"danger"}),(0,a.kt)("p",{parentName:"admonition"},"The migration of pages and MDX is still a work in progress."),(0,a.kt)("p",{parentName:"admonition"},"We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--page")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--mdx")," options."),(0,a.kt)("p",{parentName:"admonition"},"This way, you'd be able to easily inspect and fix the diff.")))}d.isMDXComponent=!0}}]);