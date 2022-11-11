"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93845],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(g,s(s({ref:t},u),{},{components:o})):n.createElement(g,s({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},19134:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});o(27378);var n=o(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const s={id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},i="Docs Introduction",l={unversionedId:"guides/docs/introduction",id:"version-2.0.0-beta.22/guides/docs/introduction",title:"Docs Introduction",description:"The docs feature provides users with a way to organize Markdown files in a hierarchical format.",source:"@site/versioned_docs/version-2.0.0-beta.22/guides/docs/docs-introduction.md",sourceDirName:"guides/docs",slug:"/docs-introduction",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/docs-introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-introduction.md",tags:[],version:"2.0.0-beta.22",frontMatter:{id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},sidebar:"docs",previous:{title:"Pages",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/creating-pages"},next:{title:"Create a doc",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/create-doc"}},c={},u=[{value:"Docs-only mode",id:"docs-only-mode",level:2}],d={toc:u};function p(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",r({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"docs-introduction"}),"Docs Introduction"),(0,n.kt)("p",null,"The docs feature provides users with a way to organize Markdown files in a hierarchical format."),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Check the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-docs"}),"Docs Plugin API Reference documentation")," for an exhaustive list of options.")),(0,n.kt)("p",null,"Your site's documentation is organized by four levels, from lowest to highest:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Individual pages."),(0,n.kt)("li",{parentName:"ol"},"Sidebars."),(0,n.kt)("li",{parentName:"ol"},"Versions."),(0,n.kt)("li",{parentName:"ol"},"Plugin instances.")),(0,n.kt)("p",null,"The guide will introduce them in that order: starting from ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/create-doc"}),"how individual pages can be configured"),", to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/sidebar"}),"how to create a sidebar or multiple ones"),", to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/versioning"}),"how to create and manage versions"),", to ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/docs-multi-instance"}),"how to use multiple docs plugin instances"),"."),(0,n.kt)("h2",r({},{id:"docs-only-mode"}),"Docs-only mode"),(0,n.kt)("p",null,"A freshly initialized Docusaurus site has the following structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"example.com/                                -> generated from `src/pages/index.js`\n\nexample.com/docs/intro                      -> generated from `docs/intro.md`\nexample.com/docs/tutorial-basics/...        -> generated from `docs/tutorial-basics/...`\n...\n\nexample.com/blog/2021/08/26/welcome         -> generated from `blog/2021-08-26-welcome/index.md`\nexample.com/blog/2021/08/01/mdx-blog-post   -> generated from `blog/2021-08-01-mdx-blog-post.mdx`\n...\n")),(0,n.kt)("p",null,"All docs will be served under the subroute ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/"),". But what if ",(0,n.kt)("strong",{parentName:"p"},"your site only has docs"),", or you want to prioritize your docs by putting them at the root?"),(0,n.kt)("p",null,"Assume that you have the following in your configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    '@docusaurus/preset-classic',\n    {\n      docs: {\n        /* docs plugin options */\n      },\n      blog: {\n        /* blog plugin options */\n      },\n      // ...\n    },\n  ],\n};\n")),(0,n.kt)("p",null,"To enter docs-only mode, change it to like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    '@docusaurus/preset-classic',\n    {\n      docs: {\n        // highlight-next-line\n        routeBasePath: '/', // Serve the docs at the site's root\n        /* other docs plugin options */\n      },\n      // highlight-next-line\n      blog: false, // Optional: disable the blog plugin\n      // ...\n    },\n  ],\n};\n")),(0,n.kt)("p",null,"Note that you ",(0,n.kt)("strong",{parentName:"p"},"don't necessarily have to give up on using the blog")," or other plugins; all that ",(0,n.kt)("inlineCode",{parentName:"p"},"routeBasePath: '/'")," does is that instead of serving the docs through ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/docs/some-doc"),", they are now at the site root: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/some-doc"),". The blog, if enabled, can still be accessed through the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/")," subroute."),(0,n.kt)("p",null,"Don't forget to put some page at the root (",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/"),") through adding the front matter:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="docs/intro.md"',title:'"docs/intro.md"'}),"---\n# highlight-next-line\nslug: /\n---\n\nThis page will be the home page when users visit https://example.com/.\n")),(0,n.kt)("admonition",r({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"If you added ",(0,n.kt)("inlineCode",{parentName:"p"},"slug: /")," to a doc to make it the homepage, you should delete the existing homepage at ",(0,n.kt)("inlineCode",{parentName:"p"},"./src/pages/index.js"),", or else there will be two files mapping to the same route!")),(0,n.kt)("p",null,"Now, the site's structure will be like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"example.com/                       -> generated from `docs/intro.md`\nexample.com/tutorial-basics/...    -> generated from `docs/tutorial-basics/...`\n...\n")),(0,n.kt)("admonition",r({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},'There\'s also a "blog-only mode" for those who only want to use the blog feature of Docusaurus 2. You can use the same method detailed above. Follow the setup instructions on ',(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/blog#blog-only-mode"}),"Blog-only mode"),".")))}p.isMDXComponent=!0}}]);