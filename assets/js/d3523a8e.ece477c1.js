"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16525],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(38944);const o="tabItem_pnkT";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),r=n(38944),o=n(29088),i=n(52196),l=n(77468),s=n(75527);const u="tabList_Qoir",p="tabItem_AQgk";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===d?d:null!==(y=null!=d?d:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[T,O]=(0,a.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&k.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==T&&(x(t),O(a),null!=f&&N(f,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[a])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var a;t=null!==(a=j[n])&&void 0!==a?a:j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:I,onClick:C},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":T===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,c({key:String(t)},e))}},1594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(27378);var a=n(35318),r=n(38269),o=n(61132);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"git",slug:"/i18n/git"},u="i18n - Using git",p={unversionedId:"i18n/git",id:"i18n/git",title:"i18n - Using git",description:"A possible translation strategy is to version control the translation files with Git (or any other VCS).",source:"@site/docs/i18n/i18n-git.md",sourceDirName:"i18n",slug:"/i18n/git",permalink:"/docusarus_test/docs/next/i18n/git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-git.md",tags:[],version:"current",frontMatter:{id:"git",slug:"/i18n/git"},sidebar:"docs",previous:{title:"i18n - Tutorial",permalink:"/docusarus_test/docs/next/i18n/tutorial"},next:{title:"i18n - Using Crowdin",permalink:"/docusarus_test/docs/next/i18n/crowdin"}},c={},d=[{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",level:3},{value:"Translate the files",id:"translate-the-files",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Markdown translations",id:"markdown-translations",level:3},{value:"JSON translations",id:"json-translations",level:3},{value:"Localize edit URLs",id:"localize-edit-urls",level:3}],m={toc:d};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"i18n---using-git"}),"i18n - Using git"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"possible translation strategy")," is to ",(0,a.kt)("strong",{parentName:"p"},"version control the translation files")," with Git (or any other ",(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Version_control"}),"VCS"),")."),(0,a.kt)("h2",i({},{id:"tradeoffs"}),"Tradeoffs"),(0,a.kt)("p",null,"This strategy has advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to get started"),": just commit the ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n")," folder to Git"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy for developers"),": Git, GitHub and pull requests are mainstream developer tools"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Free")," (or without any additional cost, assuming you already use Git)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Low friction"),": does not require signing up to an external tool"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rewarding"),": contributors are happy to have a nice contribution history")),(0,a.kt)("p",null,"Using Git also present some shortcomings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard for non-developers"),": they do not master Git and pull-requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard for professional translators"),": they are used to SaaS translation softwares and advanced features"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard to maintain"),": you have to keep the translated files ",(0,a.kt)("strong",{parentName:"li"},"in sync")," with the untranslated files")),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Some ",(0,a.kt)("strong",{parentName:"p"},"large-scale technical projects")," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."),(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3317"}),"Docusaurus i18n RFC")," for our notes and links studying these systems.")),(0,a.kt)("h2",i({},{id:"initialization"}),"Initialization"),(0,a.kt)("p",null,"This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/next/i18n/tutorial"}),"i18n tutorial"),"."),(0,a.kt)("h3",i({},{id:"prepare-the-docusaurus-site"}),"Prepare the Docusaurus site"),(0,a.kt)("p",null,"Initialize a new Docusaurus site:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest website classic\n")),(0,a.kt)("p",null,"Add the site configuration for the French language:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n")),(0,a.kt)("p",null,"Translate the homepage:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'}),"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n")),(0,a.kt)("h3",i({},{id:"initialize-the-i18n-folder"}),"Initialize the ",(0,a.kt)("inlineCode",{parentName:"h3"},"i18n")," folder"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/next/cli#docusaurus-write-translations-sitedir"}),"write-translations")," CLI command to initialize the JSON translation files for the French locale:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n")))),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--messagePrefix '(fr) '")," option to make the untranslated strings stand out."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Hello")," will appear as ",(0,a.kt)("inlineCode",{parentName:"p"},"(fr) Hello")," and makes it clear a translation is missing.")),(0,a.kt)("p",null,"Copy your untranslated Markdown files to the French folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n")),(0,a.kt)("p",null,"Add all these files to Git."),(0,a.kt)("h3",i({},{id:"translate-the-files"}),"Translate the files"),(0,a.kt)("p",null,"Translate the Markdown and JSON files in ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr")," and commit the translation."),(0,a.kt)("p",null,"You should now be able to start your site in French and see the translations:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run start -- --locale fr\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run start -- --locale fr\n")))),(0,a.kt)("p",null,"You can also build the site locally or on your CI:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run build\n# or\nnpm run build -- --locale fr\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run build\n# or\nyarn run build -- --locale fr\n")))),(0,a.kt)("h3",i({},{id:"repeat"}),"Repeat"),(0,a.kt)("p",null,"Follow the same process for each locale you need to support."),(0,a.kt)("h2",i({},{id:"maintenance"}),"Maintenance"),(0,a.kt)("p",null,"Keeping translated files ",(0,a.kt)("strong",{parentName:"p"},"consistent")," with the originals ",(0,a.kt)("strong",{parentName:"p"},"can be challenging"),", in particular for Markdown documents."),(0,a.kt)("h3",i({},{id:"markdown-translations"}),"Markdown translations"),(0,a.kt)("p",null,"When an untranslated Markdown document is edited, it is ",(0,a.kt)("strong",{parentName:"p"},"your responsibility to maintain the respective translated files"),", and we unfortunately don't have a good way to help you do so."),(0,a.kt)("p",null,"To keep your translated sites consistent, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md")," doc is edited, you need ",(0,a.kt)("strong",{parentName:"p"},"backport these edits")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."),(0,a.kt)("h3",i({},{id:"json-translations"}),"JSON translations"),(0,a.kt)("p",null,"To help you maintain the JSON translation files, it is possible to run again the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/next/cli#docusaurus-write-translations-sitedir"}),"write-translations")," CLI command:"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run write-translations -- --locale fr\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run write-translations -- --locale fr\n")))),(0,a.kt)("p",null,"New translations will be appended, and existing ones will not be overridden."),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Reset your translations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--override")," option.")),(0,a.kt)("h3",i({},{id:"localize-edit-urls"}),"Localize edit URLs"),(0,a.kt)("p",null,"When the user is browsing a page at ",(0,a.kt)("inlineCode",{parentName:"p"},"/fr/doc1"),", the edit button will link by default to the unlocalized doc at ",(0,a.kt)("inlineCode",{parentName:"p"},"website/docs/doc1.md"),"."),(0,a.kt)("p",null,"Your translations are on Git, and you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"editLocalizedFiles: true")," option of the docs and blog plugins."),(0,a.kt)("p",null,"The edit button will link to the localized doc at ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"),"."))}f.isMDXComponent=!0}}]);