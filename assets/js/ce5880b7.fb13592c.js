"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17930],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(27378);var n=a(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},d="Head metadata",s={unversionedId:"guides/markdown-features/head-metadata",id:"guides/markdown-features/head-metadata",title:"Head metadata",description:"Declaring page-specific head metadata through MDX",source:"@site/docs/guides/markdown-features/markdown-features-head-metadata.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/head-metadata",permalink:"/docs/markdown-features/head-metadata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx",tags:[],version:"current",frontMatter:{id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},sidebar:"docs",previous:{title:"Diagrams",permalink:"/docs/markdown-features/diagrams"},next:{title:"Styling and Layout",permalink:"/docs/styling-layout"}},l={},c=[{value:"Customizing head metadata",id:"customizing-head-metadata",level:2},{value:"Markdown page description",id:"markdown-page-description",level:2}],m={toc:c};function p(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"head-metadata"}),"Head metadata"),(0,n.kt)("h2",r({},{id:"customizing-head-metadata"}),"Customizing head metadata"),(0,n.kt)("p",null,"Docusaurus automatically sets useful page metadata in ",(0,n.kt)("inlineCode",{parentName:"p"},"<html>"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<body>")," for you. It is possible to add extra metadata (or override existing ones) with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," tag in Markdown files:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',title:'"markdown-features-head-metadata.mdx"'}),'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# Head Metadata\n\nMy text\n')),(0,n.kt)("head",null,(0,n.kt)("html",{className:"some-extra-html-class"}),(0,n.kt)("body",{className:"other-extra-body-class"}),(0,n.kt)("title",null,"Head Metadata customized title!"),(0,n.kt)("meta",{charSet:"utf-8"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary"}),(0,n.kt)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})),(0,n.kt)("p",null,"This ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," declaration has been added to the current Markdown doc as a demo. Open your browser DevTools and check how this page's metadata has been affected."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"This feature is built on top of the Docusaurus ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/docusaurus-core#head"}),(0,n.kt)("inlineCode",{parentName:"a"},"<Head>"))," component. Refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/nfl/react-helmet"}),"react-helmet")," for exhaustive documentation.")),(0,n.kt)("admonition",r({},{title:"You don't need this for regular SEO",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Content plugins (e.g. docs and blog) provide front matter options like ",(0,n.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keywords"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),", which will be automatically applied to both ",(0,n.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"og:description"),", while you would have to manually declare two metadata tags when using the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," tag.")),(0,n.kt)("h2",r({},{id:"markdown-page-description"}),"Markdown page description"),(0,n.kt)("p",null,"The Markdown pages' description metadata may be used in more places than the head metadata. For example, the docs plugin's ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/sidebar/items#generated-index-page"}),"generated category index")," uses the description metadata for the doc cards."),(0,n.kt)("p",null,"By default, the description is the first content-ful line, with some efforts to convert it to plain text. For example, the following file..."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-md"}),"# Title\n\nMain content... May contain some [links](./file.md) or **emphasis**.\n")),(0,n.kt)("p",null,'...will have the default description "Main content... May contain some links or emphasis". However, ',(0,n.kt)("strong",{parentName:"p"},"it's not designed to be fully functional"),". Where it fails to produce reasonable descriptions, you can explicitly provide one through front matter:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-md"}),"---\ndescription: This description will override the default.\n---\n\n# Title\n\nMain content... May contain some [links](./file.md) or **emphasis**.\n")))}p.isMDXComponent=!0}}]);