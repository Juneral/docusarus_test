"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89004],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41124:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(27378),r=t(4646);const a="tableOfContentsInline_2sru";function i({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return o.createElement("div",{className:a},o.createElement(r.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null}))}},4646:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(27378),r=t(73919);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e){const n=e.map((e=>s(i({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t}=e,r=l(e,["parentIndex"]);t>=0?n[t].children.push(r):o.push(r)})),o}function c({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const o=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[s(i({},e),{children:o})]:o}))}function p(e){const n=e.getBoundingClientRect();return n.top===n.bottom?p(e.parentNode):n}function d(e,{anchorTopOffset:n}){const t=e.find((e=>p(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(t))?t:null!==(o=e[e.indexOf(t)-1])&&void 0!==o?o:null;var o}var r;return null!==(r=e[e.length-1])&&void 0!==r?r:null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){const n=(0,o.useRef)(void 0),t=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),s=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let o=e;o<=n;o+=1)t.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),l=d(s,{anchorTopOffset:t.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}function g({toc:e,className:n,linkClassName:t,isChild:r}){return e.length?o.createElement("ul",{className:r?void 0:n},e.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:t}))))):null}const h=o.memo(g);function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},y.apply(this,arguments)}function v(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function b(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e,p=v(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const d=(0,r.L)(),m=null!=s?s:d.tableOfContents.minHeadingLevel,g=null!=l?l:d.tableOfContents.maxHeadingLevel,b=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,o.useMemo)((()=>c({toc:u(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:n,minHeadingLevel:m,maxHeadingLevel:g});return f((0,o.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:g}}),[a,i,m,g])),o.createElement(h,y({toc:b,className:t,linkClassName:a},p))}},47729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});t(27378);var o=t(35318),r=t(41124);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={description:"Configuring your site's behavior through docusaurus.config.js and more."},l="Configuration",u={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Configuring your site's behavior through docusaurus.config.js and more.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"Configuring your site's behavior through docusaurus.config.js and more."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Playground",permalink:"/docs/playground"}},c={},p=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}],d={toc:p};function m(e){var{components:n}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",a({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",a({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."),(0,o.kt)("p",null,"Keeping a well-maintained ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."),(0,o.kt)("h2",a({},{id:"what-goes-into-a-docusaurusconfigjs"}),"What goes into a ",(0,o.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),(0,o.kt)("p",null,"You should not have to write your ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),(0,o.kt)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),(0,o.kt)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),(0,o.kt)(r.Z,{toc:p,minHeadingLevel:3,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,o.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/api/docusaurus-config"}),(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),(0,o.kt)("h3",a({},{id:"site-metadata"}),"Site metadata"),(0,o.kt)("p",null,"Site metadata contains the essential global metadata such as ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,o.kt)("p",null,"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),(0,o.kt)("h3",a({},{id:"deployment-configurations"}),"Deployment configurations"),(0,o.kt)("p",null,"Deployment configurations such as ",(0,o.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"organizationName"),", and optionally ",(0,o.kt)("inlineCode",{parentName:"p"},"deploymentBranch")," are used when you deploy your site with the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,o.kt)("p",null,"It is recommended to check the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/deployment"}),"deployment docs")," for more information."),(0,o.kt)("h3",a({},{id:"theme-plugin-and-preset-configurations"}),"Theme, plugin, and preset configurations"),(0,o.kt)("p",null,"List the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/using-plugins#using-themes"}),"themes"),", ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/using-plugins"}),"plugins"),", and ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/using-plugins#using-presets"}),"presets")," for your site in the ",(0,o.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,o.kt)("admonition",a({},{type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},"Docusaurus supports ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/using-plugins#module-shorthands"}),(0,o.kt)("strong",{parentName:"a"},"module shorthands")),", allowing you to simplify the above configuration as:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"))),(0,o.kt)("p",null,"They can also be loaded from local directories:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),(0,o.kt)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n")),(0,o.kt)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,o.kt)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," refers to ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," refers to ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n")),(0,o.kt)("admonition",a({},{type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"presets: [['classic', {...}]]")," shorthand works as well.")),(0,o.kt)("p",null,"For further help configuring themes, plugins, and presets, see ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/using-plugins"}),"Using Plugins"),"."),(0,o.kt)("h3",a({},{id:"custom-configurations"}),"Custom configurations"),(0,o.kt)("p",null,"Docusaurus guards ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",(0,o.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),(0,o.kt)("h2",a({},{id:"accessing-configuration-from-components"}),"Accessing configuration from components"),(0,o.kt)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,o.kt)("inlineCode",{parentName:"p"},"siteConfig"),"."),(0,o.kt)("p",null,"Basic example:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),(0,o.kt)("admonition",a({},{type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),".")),(0,o.kt)("h2",a({},{id:"customizing-babel-configuration"}),"Customizing Babel Configuration"),(0,o.kt)("p",null,"For new Docusaurus projects, we automatically generated a ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),(0,o.kt)("p",null,"Most of the time, this configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."))}m.isMDXComponent=!0}}]);