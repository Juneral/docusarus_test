"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27762],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"create-doc",description:"Create a Markdown Document",slug:"/create-doc"},s="Create a doc",l={unversionedId:"guides/docs/create-doc",id:"guides/docs/create-doc",title:"Create a doc",description:"Create a Markdown Document",source:"@site/docs/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/docusarus_test/docs/next/create-doc",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{id:"create-doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docusarus_test/docs/next/docs-introduction"},next:{title:"Sidebar",permalink:"/docusarus_test/docs/next/sidebar"}},d={},u=[{value:"Doc front matter",id:"doc-front-matter",level:2},{value:"Doc tags",id:"doc-tags",level:2},{value:"Organizing folder structure",id:"organizing-folder-structure",level:2},{value:"Document ID",id:"document-id",level:3},{value:"Doc URLs",id:"doc-urls",level:3},{value:"Sidebars",id:"sidebars",level:3}],c={toc:u};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"create-a-doc"}),"Create a doc"),(0,r.kt)("p",null,"Create a Markdown file, ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-md"}),"---\ndescription: Create a doc page with rich content.\n---\n\n# Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n## Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n## Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n## Custom ID headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header ID.\n")),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"All files prefixed with an underscore (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),") under the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs"),' directory are treated as "partial" pages and will be ignored by default.'),(0,r.kt)("p",{parentName:"admonition"},"Read more about ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features/react#importing-markdown"}),"importing partial pages"),".")),(0,r.kt)("h2",a({},{id:"doc-front-matter"}),"Doc front matter"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features#front-matter"}),"front matter")," is used to provide additional metadata for your doc page. Front matter is optional\u2014Docusaurus will be able to infer all necessary metadata without the front matter. For example, the ",(0,r.kt)("a",a({parentName:"p"},{href:"#dog-tags"}),"doc tags")," feature introduced below requires using front matter. For all possible fields, see ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"}),"the API documentation"),"."),(0,r.kt)("h2",a({},{id:"doc-tags"}),"Doc tags"),(0,r.kt)("p",null,"Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/docs/next/sidebar"}),"docs sidebar"),". Tags are passed in the front matter as a list of labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-md",metastring:'"your-doc-page.md"','"your-doc-page.md"':!0}),"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n")),(0,r.kt)("admonition",a({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Tags can also be declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"tags: [Demo, Getting started]"),"."),(0,r.kt)("p",{parentName:"admonition"},"Read more about all the possible ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.w3schools.io/file/yaml-arrays/"}),"Yaml array syntaxes"),".")),(0,r.kt)("h2",a({},{id:"organizing-folder-structure"}),"Organizing folder structure"),(0,r.kt)("p",null,"How the Markdown files are arranged under the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder can have multiple impacts on Docusaurus content generation. However, most of them can be decoupled from the file structure."),(0,r.kt)("h3",a({},{id:"document-id"}),"Document ID"),(0,r.kt)("p",null,"Every document has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". By default, a document ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is the name of the document (without the extension) relative to the root docs directory."),(0,r.kt)("p",null,"For example, the ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting.md")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting"),", and the ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"guide/hello.md")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"guide/hello"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"website # Root directory of your site\n\u2514\u2500\u2500 docs\n   \u251c\u2500\u2500 greeting.md\n   \u2514\u2500\u2500 guide\n      \u2514\u2500\u2500 hello.md\n")),(0,r.kt)("p",null,"However, the ",(0,r.kt)("strong",{parentName:"p"},"last part")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," can be defined by the user in the front matter. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"guide/hello.md"),"'s content is defined as below, its final ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"guide/part1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-md"}),"---\nid: part1\n---\n\nLorem ipsum\n")),(0,r.kt)("p",null,"The ID is used to refer to a document when hand-writing sidebars, or when using docs-related layout components or hooks."),(0,r.kt)("h3",a({},{id:"doc-urls"}),"Doc URLs"),(0,r.kt)("p",null,"By default, a document's URL location is its file path relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," front matter to change a document's URL."),(0,r.kt)("p",null,"For example, suppose your site structure looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"website # Root directory of your site\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 guide\n        \u2514\u2500\u2500 hello.md\n")),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.md")," will be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/guide/hello"),". You can change its URL location to ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/bonjour"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-md"}),"---\nslug: /bonjour\n---\n\nLorem ipsum\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"slug")," will be appended to the doc plugin's ",(0,r.kt)("inlineCode",{parentName:"p"},"routeBasePath"),", which is ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," by default. See ",(0,r.kt)("a",a({parentName:"p"},{href:"#docs-only-mode"}),"Docs-only mode")," for how to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," part from the URL."),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"It is possible to use:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"absolute slugs: ",(0,r.kt)("inlineCode",{parentName:"li"},"slug: /mySlug"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"slug: /"),"..."),(0,r.kt)("li",{parentName:"ul"},"relative slugs: ",(0,r.kt)("inlineCode",{parentName:"li"},"slug: mySlug"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"slug: ./../mySlug"),"..."))),(0,r.kt)("p",null,"If you want a document to be available at the root, and have a path like ",(0,r.kt)("inlineCode",{parentName:"p"},"https://docusaurus.io/docs/"),", you can use the slug front matter:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-md"}),"---\nid: my-home-doc\nslug: /\n---\n\nLorem ipsum\n")),(0,r.kt)("h3",a({},{id:"sidebars"}),"Sidebars"),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/docs/next/sidebar/autogenerated"}),"autogenerated sidebars"),", the file structure will determine the sidebar structure."),(0,r.kt)("p",null,"Our recommendation for file system organization is: make your file system mirror the sidebar structure (so you don't need to handwrite your ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js")," file), and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," front matter to customize URLs of each document."))}p.isMDXComponent=!0}}]);