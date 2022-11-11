"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77337],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(27378);var a=n(35318);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"introduction",slug:"/i18n/introduction"},i="i18n - Introduction",s={unversionedId:"i18n/introduction",id:"i18n/introduction",title:"i18n - Introduction",description:"It is easy to translate a Docusaurus website with its internationalization (i18n) support.",source:"@site/docs/i18n/i18n-introduction.md",sourceDirName:"i18n",slug:"/i18n/introduction",permalink:"/docusarus_test/zh-CN/docs/next/i18n/introduction",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{id:"introduction",slug:"/i18n/introduction"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docusarus_test/zh-CN/docs/next/deployment"},next:{title:"i18n - Tutorial",permalink:"/docusarus_test/zh-CN/docs/next/i18n/tutorial"}},u={},p=[{value:"Goals",id:"goals",level:2},{value:"i18n goals",id:"i18n-goals",level:3},{value:"i18n non-goals",id:"i18n-non-goals",level:3},{value:"Translation workflow",id:"translation-workflow",level:2},{value:"Overview",id:"overview",level:3},{value:"Translation files",id:"translation-files",level:3},{value:"Markdown files",id:"markdown-files",level:4},{value:"JSON files",id:"json-files",level:4},{value:"Data files",id:"data-files",level:4},{value:"Translation files location",id:"translation-files-location",level:3}],c={toc:p};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",o({},{id:"i18n---introduction"}),"i18n - Introduction"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"easy to translate a Docusaurus website")," with its internationalization (",(0,a.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"}),"i18n"),") support."),(0,a.kt)("h2",o({},{id:"goals"}),"Goals"),(0,a.kt)("p",null,"It is important to understand the ",(0,a.kt)("strong",{parentName:"p"},"design decisions")," behind the Docusaurus i18n support."),(0,a.kt)("p",null,"For more context, you can read the initial ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/3317"}),"RFC")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/3325"}),"PR"),"."),(0,a.kt)("h3",o({},{id:"i18n-goals"}),"i18n goals"),(0,a.kt)("p",null,"The goals of the Docusaurus i18n system are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple"),": just put the translated files in the correct filesystem location"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexible translation workflows"),": use Git (monorepo, forks, or submodules), SaaS software, FTP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexible deployment options"),": single, multiple domains, or hybrid"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modular"),": allow plugin authors to provide i18n support"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Low-overhead runtime"),": documentation is mostly static and does not require heavy JS libraries or polyfills"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scalable build-times"),": allow building and deploying localized sites independently"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Localize assets"),": an image of your site might contain text that should be translated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No coupling"),": not forced to use any SaaS, yet integrations are possible"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to use with ",(0,a.kt)("a",o({parentName:"strong"},{href:"https://crowdin.com/"}),"Crowdin")),": a lot of Docusaurus v1 sites use Crowdin and should be able to migrate to v2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Good SEO defaults"),": we set useful SEO headers like ",(0,a.kt)("a",o({parentName:"li"},{href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions"}),(0,a.kt)("inlineCode",{parentName:"a"},"hreflang"))," for you"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RTL support"),": locales reading right-to-left (Arabic, Hebrew, etc.) are supported and easy to implement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Default translations"),": classic theme labels are translated for you in ",(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales"}),"many languages"))),(0,a.kt)("h3",o({},{id:"i18n-non-goals"}),"i18n non-goals"),(0,a.kt)("p",null,"We don't provide support for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic locale detection"),": opinionated, and best done on the ",(0,a.kt)("a",o({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/next/deployment"}),"server (your hosting provider)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Translation SaaS software"),": you are responsible to understand the external tools of your choice"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Translation of slugs"),": technically complicated, little SEO value")),(0,a.kt)("h2",o({},{id:"translation-workflow"}),"Translation workflow"),(0,a.kt)("h3",o({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Overview of the workflow to create a translated Docusaurus website:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure"),": declare the default locale and alternative locales in ",(0,a.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Translate"),": put the translation files at the correct filesystem location"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Deploy"),": build and deploy your site using a single or multi-domain strategy")),(0,a.kt)("h3",o({},{id:"translation-files"}),"Translation files"),(0,a.kt)("p",null,"You will work with three kinds of translation files."),(0,a.kt)("h4",o({},{id:"markdown-files"}),"Markdown files"),(0,a.kt)("p",null,"This is the main content of your Docusaurus website."),(0,a.kt)("p",null,"Markdown and MDX documents are translated as a whole, to fully preserve the translation context, instead of splitting each sentence as a separate string."),(0,a.kt)("h4",o({},{id:"json-files"}),"JSON files"),(0,a.kt)("p",null,"JSON is used to translate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your React code: standalone React pages in ",(0,a.kt)("inlineCode",{parentName:"li"},"src/pages"),", or other components"),(0,a.kt)("li",{parentName:"ul"},"Layout labels provided through ",(0,a.kt)("inlineCode",{parentName:"li"},"themeConfig"),": navbar, footer"),(0,a.kt)("li",{parentName:"ul"},"Layout labels provided through plugin options: docs sidebar category labels, blog sidebar title...")),(0,a.kt)("p",null,"The JSON format used is called ",(0,a.kt)("strong",{parentName:"p"},"Chrome i18n"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "myTranslationKey1": {\n    "message": "Translated message 1",\n    "description": "myTranslationKey1 is used on the homepage"\n  },\n  "myTranslationKey2": {\n    "message": "Translated message 2",\n    "description": "myTranslationKey2 is used on the FAQ page"\n  }\n}\n')),(0,a.kt)("p",null,"The choice was made for 2 reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description attribute"),": to help translators with additional context"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Widely supported"),": ",(0,a.kt)("a",o({parentName:"li"},{href:"https://developer.chrome.com/docs/extensions/mv2/i18n-messages/"}),"Chrome extensions"),", ",(0,a.kt)("a",o({parentName:"li"},{href:"https://support.crowdin.com/file-formats/chrome-json/"}),"Crowdin"),", ",(0,a.kt)("a",o({parentName:"li"},{href:"https://docs.transifex.com/formats/chrome-json"}),"Transifex"),", ",(0,a.kt)("a",o({parentName:"li"},{href:"https://help.phrase.com/help/chrome-json-messages"}),"Phrase"),", ",(0,a.kt)("a",o({parentName:"li"},{href:"https://www.applanga.com/docs/formats/chrome_i18n_json"}),"Applanga"),", etc.")),(0,a.kt)("h4",o({},{id:"data-files"}),"Data files"),(0,a.kt)("p",null,"Some plugins may read from external data files that are localized as a whole. For example, the blog plugin uses an ",(0,a.kt)("a",o({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/blog#global-authors"}),(0,a.kt)("inlineCode",{parentName:"a"},"authors.yml"))," file that can be translated by creating a copy under ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/[locale]/docusaurus-plugin-content-blog/authors.yml"),"."),(0,a.kt)("h3",o({},{id:"translation-files-location"}),"Translation files location"),(0,a.kt)("p",null,"The translation files should be created at the correct filesystem location."),(0,a.kt)("p",null,"Each locale and plugin has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n")," subfolder:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"website/i18n/[locale]/[pluginName]/...\n")),(0,a.kt)("admonition",o({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"For multi-instance plugins, the path is ",(0,a.kt)("inlineCode",{parentName:"p"},"website/i18n/[locale]/[pluginName]-[pluginId]/..."),".")),(0,a.kt)("p",null,"Translating a very simple Docusaurus site in French would lead to the following tree:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"website/i18n\n\u2514\u2500\u2500 fr\n    \u251c\u2500\u2500 code.json  # Any text label present in the React code\n    \u2502              # Includes text labels from the themes' code\n    \u251c\u2500\u2500 docusaurus-plugin-content-blog # translation data the blog plugin needs\n    \u2502   \u2514\u2500\u2500 2020-01-01-hello.md\n    \u2502\n    \u251c\u2500\u2500 docusaurus-plugin-content-docs # translation data the docs plugin needs\n    \u2502   \u251c\u2500\u2500 current\n    \u2502   \u2502   \u251c\u2500\u2500 doc1.md\n    \u2502   \u2502   \u2514\u2500\u2500 doc2.mdx\n    \u2502   \u2514\u2500\u2500 current.json\n    \u2502\n    \u2514\u2500\u2500 docusaurus-theme-classic # translation data the classic theme needs\n        \u251c\u2500\u2500 footer.json   # Text labels in your footer theme config\n        \u2514\u2500\u2500 navbar.json   # Text labels in your navbar theme config\n")),(0,a.kt)("p",null,"The JSON files are initialized with the ",(0,a.kt)("a",o({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/cli#docusaurus-write-translations-sitedir"}),(0,a.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))," CLI command. Each plugin sources its own translated content under the corresponding folder, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"code.json")," file defines all text labels used in the React code."),(0,a.kt)("p",null,"Each content plugin or theme is different, and ",(0,a.kt)("strong",{parentName:"p"},"defines its own translation files location"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/next/api/plugins/@docusaurus/plugin-content-docs#i18n"}),"Docs i18n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/next/api/plugins/@docusaurus/plugin-content-blog#i18n"}),"Blog i18n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/next/api/plugins/@docusaurus/plugin-content-pages#i18n"}),"Pages i18n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/next/api/themes/configuration#i18n"}),"Themes i18n"))))}d.isMDXComponent=!0}}]);