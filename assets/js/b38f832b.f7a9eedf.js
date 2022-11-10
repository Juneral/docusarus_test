"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55735],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(v,s(s({ref:n},c),{},{components:t})):r.createElement(v,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(27378);var r=t(35318);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={slug:"/migration/versioned-sites"},a="Versioned sites",l={unversionedId:"migration/migration-versioned-sites",id:"migration/migration-versioned-sites",title:"Versioned sites",description:"Read up https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning first for problems in v1's approach.",source:"@site/docs/migration/migration-versioned-sites.md",sourceDirName:"migration",slug:"/migration/versioned-sites",permalink:"/docs/next/migration/versioned-sites",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-versioned-sites.md",tags:[],version:"current",frontMatter:{slug:"/migration/versioned-sites"},sidebar:"docs",previous:{title:"Manual migration",permalink:"/docs/next/migration/manual"},next:{title:"Translated sites",permalink:"/docs/next/migration/translated-sites"}},d={},c=[{value:"Migrate your <code>versioned_docs</code> front matter",id:"migrate-your-versioned_docs-front-matter",level:2},{value:"Migrate your <code>versioned_sidebars</code>",id:"migrate-your-versioned_sidebars",level:2},{value:"Populate your <code>versioned_sidebars</code> and <code>versioned_docs</code>",id:"populate-your-versioned_sidebars-and-versioned_docs",level:2},{value:"Convert style attributes to style objects in MDX",id:"convert-style-attributes-to-style-objects-in-mdx",level:2}],p={toc:c};function u(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"versioned-sites"}),"Versioned sites"),(0,r.kt)("p",null,"Read up ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning"}),"https://docusaurus.io/blog/2018/09/11/Towards-Docusaurus-2#versioning")," first for problems in v1's approach."),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"The versioned docs should normally be migrated correctly by the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/next/migration/automated"}),"migration CLI"))),(0,r.kt)("h2",o({},{id:"migrate-your-versioned_docs-front-matter"}),"Migrate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_docs")," front matter"),(0,r.kt)("p",null,"Unlike v1, The Markdown header for each versioned doc is no longer altered by using ",(0,r.kt)("inlineCode",{parentName:"p"},"version-${version}-${original_id}")," as the value for the actual ID field. See scenario below for better explanation."),(0,r.kt)("p",null,"For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-md"}),"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"When you cut a new version 1.0.0, in Docusaurus v1, ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"In comparison, Docusaurus 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")," looks like this (exactly same as original)"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-md"}),"---\nid: hello\ntitle: Hello, World !\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"Since we're going for snapshot and allow people to move (and edit) docs easily inside version. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," front matter is no longer altered and will remain the same. Internally, it is set as ",(0,r.kt)("inlineCode",{parentName:"p"},"version-${version}/${id}"),"."),(0,r.kt)("p",null,"Essentially, here are the necessary changes in each versioned_docs file:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-diff",metastring:"{2-3,5}","{2-3,5}":!0}),"---\n- id: version-1.0.0-hello\n+ id: hello\ntitle: Hello, World !\n- original_id: hello\n---\nHi, Endilie here :)\n")),(0,r.kt)("h2",o({},{id:"migrate-your-versioned_sidebars"}),"Migrate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_sidebars")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refer to ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs")," ID as ",(0,r.kt)("inlineCode",{parentName:"li"},"version-${version}/${id}")," (v2) instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"version-${version}-${original_id}")," (v1).")),(0,r.kt)("p",null,"Because in v1 there is a good chance someone created a new file with front matter ID ",(0,r.kt)("inlineCode",{parentName:"p"},'"version-${version}-${id}"')," that can conflict with ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs")," ID."),(0,r.kt)("p",null,"For example, Docusaurus 1 can't differentiate ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/xxx.md")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\n---\n\nAnother content\n")),(0,r.kt)("p",null,"vs ",(0,r.kt)("inlineCode",{parentName:"p"},"website/versioned_docs/version-1.0.0/hello.md")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-md"}),"---\nid: version-1.0.0-hello\ntitle: Hello, World !\noriginal_id: hello\n---\n\nHi, Endilie here :)\n")),(0,r.kt)("p",null,"Since we don't allow ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," in v1 & v2 for front matter, conflicts are less likely to occur."),(0,r.kt)("p",null,"So v1 users need to migrate their versioned_sidebars file"),(0,r.kt)("p",null,"Example ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars/version-1.0.0-sidebars.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-diff",metastring:'{2-3,5-6,9-10}  title="versioned_sidebars/version-1.0.0-sidebars.json"',"{2-3,5-6,9-10}":!0,"":!0,title:'"versioned_sidebars/version-1.0.0-sidebars.json"'}),'{\n+ "version-1.0.0/docs": {\n- "version-1.0.0-docs": {\n    "Test": [\n+    "version-1.0.0/foo/bar",\n-    "version-1.0.0-foo/bar",\n    ],\n    "Guides": [\n+    "version-1.0.0/hello",\n-    "version-1.0.0-hello"\n    ]\n  }\n}\n')),(0,r.kt)("h2",o({},{id:"populate-your-versioned_sidebars-and-versioned_docs"}),"Populate your ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_sidebars")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"versioned_docs")),(0,r.kt)("p",null,"In v2, we use snapshot approach for documentation versioning. ",(0,r.kt)("strong",{parentName:"p"},"Every versioned docs does not depends on other version"),". It is possible to have ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.md")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"version-1.0.0")," but it doesn't exist in ",(0,r.kt)("inlineCode",{parentName:"p"},"version-1.2.0"),". This is not possible in previous version due to Docusaurus v1 fallback functionality (",(0,r.kt)("a",o({parentName:"p"},{href:"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality"}),"https://v1.docusaurus.io/docs/en/versioning#fallback-functionality"),")."),(0,r.kt)("p",null,"For example, if your ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," looks like this in v1"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json",metastring:'title="versions.json"',title:'"versions.json"'}),'["1.1.0", "1.0.0"]\n')),(0,r.kt)("p",null,"Docusaurus v1 creates versioned docs ",(0,r.kt)("strong",{parentName:"p"},"if and only if the doc content is different"),". Your docs structure might look like this if the only doc changed from v1.0.0 to v1.1.0 is ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"website\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n")),(0,r.kt)("p",null,"In v2, you have to populate the missing ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")," (with the right front matter and ID reference too)."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash",metastring:"{3-5,12}","{3-5,12}":!0}),"website\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n")),(0,r.kt)("h2",o({},{id:"convert-style-attributes-to-style-objects-in-mdx"}),"Convert style attributes to style objects in MDX"),(0,r.kt)("p",null,"Docusaurus 2 uses JSX for doc files. If you have any style attributes in your Docusaurus 1 docs, convert them to style objects, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-diff"}),"---\nid: demo\ntitle: Demo\n---\n\n## Section\n\nhello world\n\n- pre style=\"background: black\">zzz</pre>\n+ pre style={{background: 'black'}}>zzz</pre>\n")))}u.isMDXComponent=!0}}]);