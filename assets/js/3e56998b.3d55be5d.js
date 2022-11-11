"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92516],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});a(27378);var n=a(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={slug:"/migration/automated"},l="Automated migration",s={unversionedId:"migration/migration-automated",id:"version-2.0.0-beta.22/migration/migration-automated",title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/versioned_docs/version-2.0.0-beta.22/migration/migration-automated.md",sourceDirName:"migration",slug:"/migration/automated",permalink:"/docusarus_test/docs/2.0.0-beta.22/migration/automated",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-automated.md",tags:[],version:"2.0.0-beta.22",frontMatter:{slug:"/migration/automated"},sidebar:"docs",previous:{title:"Migration overview",permalink:"/docusarus_test/docs/2.0.0-beta.22/migration"},next:{title:"Manual migration",permalink:"/docusarus_test/docs/2.0.0-beta.22/migration/manual"}},m={},p=[{value:"Options",id:"options",level:4}],u={toc:p};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"automated-migration"}),"Automated migration"),(0,n.kt)("p",null,"The migration CLI automatically migrates your v1 website to a v2 website."),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Manual work is still required after using the migration CLI, as we can't automate a full migration")),(0,n.kt)("p",null,"The migration CLI migrates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Site configurations (from ",(0,n.kt)("inlineCode",{parentName:"li"},"siteConfig.js")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"package.json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sidebars.json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/blog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/static")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"versioned_sidebar.json")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"/versioned_docs")," if your site uses versioning")),(0,n.kt)("p",null,"To use the migration CLI, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before using the migration CLI, ensure that ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/blog"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/static"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebars.json"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"siteConfig.js"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," follow the ",(0,n.kt)("a",r({parentName:"p"},{href:"#"}),"structure")," shown at the start of this page.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n")),(0,n.kt)("ol",r({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"To view your new website locally, go into your v2 website's directory and start your development server.")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"cd ./v2-website\nyarn install\nyarn start\n")),(0,n.kt)("admonition",r({},{type:"danger"}),(0,n.kt)("p",{parentName:"admonition"},"The migration CLI updates existing files. Be sure to have committed them first!")),(0,n.kt)("h4",r({},{id:"options"}),"Options"),(0,n.kt)("p",null,"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--mdx")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add this flag to convert Markdown to MDX automatically")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--page")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add this flag to migrate pages automatically")))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n")),(0,n.kt)("admonition",r({},{type:"danger"}),(0,n.kt)("p",{parentName:"admonition"},"The migration of pages and MDX is still a work in progress."),(0,n.kt)("p",{parentName:"admonition"},"We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--page")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--mdx")," options."),(0,n.kt)("p",{parentName:"admonition"},"This way, you'd be able to easily inspect and fix the diff.")))}d.isMDXComponent=!0}}]);