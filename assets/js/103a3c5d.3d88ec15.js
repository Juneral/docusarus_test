"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86857],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(27378);var a=n(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={sidebar_position:0,description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},r="docusaurus.config.js",s={unversionedId:"api/docusaurus.config.js",id:"version-2.0.0-rc.1/api/docusaurus.config.js",title:"docusaurus.config.js",description:"API reference for Docusaurus configuration file.",source:"@site/versioned_docs/version-2.0.0-rc.1/api/docusaurus.config.js.md",sourceDirName:"api",slug:"/api/docusaurus-config",permalink:"/docs/2.0.0-rc.1/api/docusaurus-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/docusaurus.config.js.md",tags:[],version:"2.0.0-rc.1",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"API reference for Docusaurus configuration file.",slug:"/api/docusaurus-config"},sidebar:"api",previous:{title:"Client API",permalink:"/docs/2.0.0-rc.1/docusaurus-core"},next:{title:"Plugin Method References",permalink:"/docs/2.0.0-rc.1/api/plugin-methods/"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Required fields",id:"required-fields",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>baseUrl</code>",id:"baseUrl",level:3},{value:"Optional fields",id:"optional-fields",level:2},{value:"<code>favicon</code>",id:"favicon",level:3},{value:"<code>trailingSlash</code>",id:"trailingSlash",level:3},{value:"<code>i18n</code>",id:"i18n",level:3},{value:"<code>noIndex</code>",id:"noIndex",level:3},{value:"<code>onBrokenLinks</code>",id:"onBrokenLinks",level:3},{value:"<code>onBrokenMarkdownLinks</code>",id:"onBrokenMarkdownLinks",level:3},{value:"<code>onDuplicateRoutes</code>",id:"onDuplicateRoutes",level:3},{value:"<code>tagline</code>",id:"tagline",level:3},{value:"<code>organizationName</code>",id:"organizationName",level:3},{value:"<code>projectName</code>",id:"projectName",level:3},{value:"<code>deploymentBranch</code>",id:"deploymentBranch",level:3},{value:"<code>githubHost</code>",id:"githubHost",level:3},{value:"<code>githubPort</code>",id:"githubPort",level:3},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>themes</code>",id:"themes",level:3},{value:"<code>presets</code>",id:"presets",level:3},{value:"<code>customFields</code>",id:"customfields",level:3},{value:"<code>staticDirectories</code>",id:"staticDirectories",level:3},{value:"<code>scripts</code>",id:"scripts",level:3},{value:"<code>stylesheets</code>",id:"stylesheets",level:3},{value:"<code>clientModules</code>",id:"clientModules",level:3},{value:"<code>ssrTemplate</code>",id:"ssrTemplate",level:3},{value:"<code>titleDelimiter</code>",id:"titleDelimiter",level:3},{value:"<code>baseUrlIssueBanner</code>",id:"baseUrlIssueBanner",level:3}],p={toc:d};function c(e){var{components:t}=e,o=l(e,["components"]);return(0,a.kt)("wrapper",i({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"docusaurusconfigjs"}),(0,a.kt)("inlineCode",{parentName:"h1"},"docusaurus.config.js")),(0,a.kt)("h2",i({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," contains configurations for your site and is placed in the root directory of your site."),(0,a.kt)("p",null,"It usually exports a site configuration object:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // site config...\n};\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Config files also support config creator functions and async code."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = function configCreator() {\n  return {\n    // site config...\n  };\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = async function configCreatorAsync() {\n  return {\n    // site config...\n  };\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = Promise.resolve({\n  // site config...\n});\n"))),(0,a.kt)("h2",i({},{id:"required-fields"}),"Required fields"),(0,a.kt)("h3",i({},{id:"title"}),(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Title for your website. Will be used in metadata and as browser tab title."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'Docusaurus',\n};\n")),(0,a.kt)("h3",i({},{id:"url"}),(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"URL for your website. This can also be considered the top-level hostname. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://facebook.github.io")," is the URL of ",(0,a.kt)("a",i({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"https://facebook.github.io/metro/"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://docusaurus.io")," is the URL for ",(0,a.kt)("a",i({parentName:"p"},{href:"https://docusaurus.io."}),"https://docusaurus.io.")," This field is related to the ",(0,a.kt)("a",i({parentName:"p"},{href:"#baseUrl"}),(0,a.kt)("inlineCode",{parentName:"a"},"baseUrl"))," field."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  url: 'https://docusaurus.io',\n};\n")),(0,a.kt)("h3",i({},{id:"baseUrl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"baseUrl")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Base URL for your site. Can be considered as the path after the host. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/metro/")," is the base URL of ",(0,a.kt)("a",i({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"https://facebook.github.io/metro/"),". For URLs that have no path, the baseUrl should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". This field is related to the ",(0,a.kt)("a",i({parentName:"p"},{href:"#url"}),(0,a.kt)("inlineCode",{parentName:"a"},"url"))," field. Always has both leading and trailing slash."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  baseUrl: '/',\n};\n")),(0,a.kt)("h2",i({},{id:"optional-fields"}),"Optional fields"),(0,a.kt)("h3",i({},{id:"favicon"}),(0,a.kt)("inlineCode",{parentName:"h3"},"favicon")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | undefined"))),(0,a.kt)("p",null,"Path to your site favicon; must be a URL that can be used in link's href. For example, if your favicon is in ",(0,a.kt)("inlineCode",{parentName:"p"},"static/img/favicon.ico"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  favicon: '/img/favicon.ico',\n};\n")),(0,a.kt)("h3",i({},{id:"trailingSlash"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trailingSlash")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | undefined"))),(0,a.kt)("p",null,"Allow to customize the presence/absence of a trailing slash at the end of URLs/links, and how static HTML files are generated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," (default): keeps URLs untouched, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc/index.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": add trailing slashes to URLs/links, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc/index.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),": remove trailing slashes from URLs/links, and emit ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.html")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs/myDoc.md"))),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Each static hosting provider serves static files differently (this behavior may even change over time)."),(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/deployment"}),"deployment guide")," and ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/slorber/trailing-slash-guide"}),"slorber/trailing-slash-guide")," to choose the appropriate setting.")),(0,a.kt)("h3",i({},{id:"i18n"}),(0,a.kt)("inlineCode",{parentName:"h3"},"i18n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("p",null,"The i18n configuration object to ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/i18n/introduction"}),"localize your site"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fa'],\n    path: 'i18n',\n    localeConfigs: {\n      en: {\n        label: 'English',\n        direction: 'ltr',\n        htmlLang: 'en-US',\n        calendar: 'gregory',\n        path: 'en',\n      },\n      fa: {\n        label: '\u0641\u0627\u0631\u0633\u06cc',\n        direction: 'rtl',\n        htmlLang: 'fa-IR',\n        calendar: 'persian',\n        path: 'fa',\n      },\n    },\n  },\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultLocale"),": The locale that (1) does not have its name in the base URL (2) gets started with ",(0,a.kt)("inlineCode",{parentName:"li"},"docusaurus start")," without ",(0,a.kt)("inlineCode",{parentName:"li"},"--locale")," option (3) will be used for the ",(0,a.kt)("inlineCode",{parentName:"li"},'<link hrefLang="x-default">')," tag"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locales"),": List of locales deployed on your site. Must contain ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultLocale"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": Root folder which all locale folders are relative to. Can be absolute or relative to the config file. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"localeConfigs"),": Individual options for each locale.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": The label displayed for this locale in the locales dropdown."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"direction"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"ltr")," (default) or ",(0,a.kt)("inlineCode",{parentName:"li"},"rtl")," (for ",(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/rtl"}),"right-to-left languages")," like Farsi, Arabic, Hebrew, etc.). Used to select the locale's CSS and HTML meta attribute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"htmlLang"),": BCP 47 language tag to use in ",(0,a.kt)("inlineCode",{parentName:"li"},'<html lang="...">')," and in ",(0,a.kt)("inlineCode",{parentName:"li"},'<link ... hreflang="...">')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"calendar"),": the ",(0,a.kt)("a",i({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar"}),"calendar")," used to calculate the date era. Note that it doesn't control the actual string displayed: ",(0,a.kt)("inlineCode",{parentName:"li"},"MM/DD/YYYY")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DD/MM/YYYY")," are both ",(0,a.kt)("inlineCode",{parentName:"li"},"gregory"),". To choose the format (",(0,a.kt)("inlineCode",{parentName:"li"},"DD/MM/YYYY")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"MM/DD/YYYY"),"), set your locale name to ",(0,a.kt)("inlineCode",{parentName:"li"},"en-GB")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"en-US")," (",(0,a.kt)("inlineCode",{parentName:"li"},"en")," means ",(0,a.kt)("inlineCode",{parentName:"li"},"en-US"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": Root folder that all plugin localization folders of this locale are relative to. Will be resolved against ",(0,a.kt)("inlineCode",{parentName:"li"},"i18n.path"),". Defaults to the locale's name. Note: this has no effect on the locale's ",(0,a.kt)("inlineCode",{parentName:"li"},"baseUrl"),"\u2014customization of base URL is a work-in-progress.")))),(0,a.kt)("h3",i({},{id:"noIndex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"noIndex")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("p",null,"This option adds ",(0,a.kt)("inlineCode",{parentName:"p"},'<meta name="robots" content="noindex, nofollow">')," to every page to tell search engines to avoid indexing your site (more information ",(0,a.kt)("a",i({parentName:"p"},{href:"https://moz.com/learn/seo/robots-meta-directives"}),"here"),")."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  noIndex: true, // Defaults to `false`\n};\n")),(0,a.kt)("h3",i({},{id:"onBrokenLinks"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onBrokenLinks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus when it detects any broken link."),(0,a.kt)("p",null,"By default, it throws an error, to ensure you never ship any broken link, but you can lower this security if needed."),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The broken links detection is only available for a production build (",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus build"),").")),(0,a.kt)("h3",i({},{id:"onBrokenMarkdownLinks"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onBrokenMarkdownLinks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus when it detects any broken Markdown link."),(0,a.kt)("p",null,"By default, it prints a warning, to let you know about your broken Markdown link, but you can change this security if needed."),(0,a.kt)("h3",i({},{id:"onDuplicateRoutes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDuplicateRoutes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ignore' | 'log' | 'warn' | 'throw'"))),(0,a.kt)("p",null,"The behavior of Docusaurus when it detects any ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/creating-pages#duplicate-routes"}),"duplicate routes"),"."),(0,a.kt)("p",null,"By default, it displays a warning after you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,a.kt)("h3",i({},{id:"tagline"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tagline")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The tagline for your website."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  tagline:\n    'Docusaurus makes it easy to maintain Open Source documentation websites.',\n};\n")),(0,a.kt)("h3",i({},{id:"organizationName"}),(0,a.kt)("inlineCode",{parentName:"h3"},"organizationName")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The GitHub user or organization that owns the repository. You don't need this if you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // Docusaurus' organization is facebook\n  organizationName: 'facebook',\n};\n")),(0,a.kt)("h3",i({},{id:"projectName"}),(0,a.kt)("inlineCode",{parentName:"h3"},"projectName")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The name of the GitHub repository. You don't need this if you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  projectName: 'docusaurus',\n};\n")),(0,a.kt)("h3",i({},{id:"deploymentBranch"}),(0,a.kt)("inlineCode",{parentName:"h3"},"deploymentBranch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The name of the branch to deploy the static files to. You don't need this if you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  deploymentBranch: 'gh-pages',\n};\n")),(0,a.kt)("h3",i({},{id:"githubHost"}),(0,a.kt)("inlineCode",{parentName:"h3"},"githubHost")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The hostname of your server. Useful if you are using GitHub Enterprise. You don't need this if you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  githubHost: 'github.com',\n};\n")),(0,a.kt)("h3",i({},{id:"githubPort"}),(0,a.kt)("inlineCode",{parentName:"h3"},"githubPort")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"The port of your server. Useful if you are using GitHub Enterprise. You don't need this if you are not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus deploy")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  githubPort: '22',\n};\n")),(0,a.kt)("h3",i({},{id:"themeConfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/api/themes/configuration"}),"theme configuration")," object to customize your site UI like navbar and footer."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    docs: {\n      sidebar: {\n        hideable: false,\n        autoCollapseCategories: false,\n      },\n    },\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n    },\n    navbar: {\n      title: 'Site Title',\n      logo: {\n        alt: 'Site Logo',\n        src: 'img/logo.svg',\n        width: 32,\n        height: 32,\n      },\n      items: [\n        {\n          to: 'docs/docusaurus.config.js',\n          activeBasePath: 'docs',\n          label: 'docusaurus.config.js',\n          position: 'left',\n        },\n        // ... other links\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Docs',\n              to: 'docs/doc1',\n            },\n          ],\n        },\n        // ... other links\n      ],\n      logo: {\n        alt: 'Meta Open Source Logo',\n        src: 'img/meta_oss_logo.png',\n        href: 'https://opensource.fb.com',\n        width: 160,\n        height: 51,\n      },\n      copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here\n    },\n  },\n};\n")),(0,a.kt)("h3",i({},{id:"plugins"}),(0,a.kt)("inlineCode",{parentName:"h3"},"plugins")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type PluginConfig = string | [string, any] | PluginModule | [PluginModule, any];\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/api/plugin-methods/"}),"plugin method references")," for the shape of a ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    'docusaurus-plugin-awesome',\n    ['docusuarus-plugin-confetti', {fancy: false}],\n    () => ({\n      postBuild() {\n        console.log('Build finished');\n      },\n    }),\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"themes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"themes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,a.kt)("h3",i({},{id:"presets"}),(0,a.kt)("inlineCode",{parentName:"h3"},"presets")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"PresetConfig[]"))),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type PresetConfig = string | [string, any];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [],\n};\n")),(0,a.kt)("h3",i({},{id:"customfields"}),(0,a.kt)("inlineCode",{parentName:"h3"},"customFields")),(0,a.kt)("p",null,"Docusaurus guards ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add a custom field, define it on ",(0,a.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object"))),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  customFields: {\n    admin: 'endi',\n    superman: 'lol',\n  },\n};\n")),(0,a.kt)("p",null,"Attempting to add unknown fields in the config will lead to errors during build time:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"Error: The field(s) 'foo', 'bar' are not recognized in docusaurus.config.js\n")),(0,a.kt)("h3",i({},{id:"staticDirectories"}),(0,a.kt)("inlineCode",{parentName:"h3"},"staticDirectories")),(0,a.kt)("p",null,"An array of paths, relative to the site's directory or absolute. Files under these paths will be copied to the build output as-is."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  staticDirectories: ['static'],\n};\n")),(0,a.kt)("h3",i({},{id:"scripts"}),(0,a.kt)("inlineCode",{parentName:"h3"},"scripts")),(0,a.kt)("p",null,"An array of scripts to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags will be inserted in the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>"),". If you use a plain object, the only required attribute is ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),", and any other attributes are permitted (each one should have boolean/string values)."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," added here are render-blocking, so you might want to add ",(0,a.kt)("inlineCode",{parentName:"p"},"async: true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"defer: true")," to the objects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  scripts: [\n    // String format.\n    'https://docusaurus.io/script.js',\n    // Object format.\n    {\n      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',\n      async: true,\n    },\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"stylesheets"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stylesheets")),(0,a.kt)("p",null,"An array of CSS sources to load. The values can be either strings or plain objects of attribute-value maps. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," tags will be inserted in the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>"),". If you use an object, the only required attribute is ",(0,a.kt)("inlineCode",{parentName:"p"},"href"),", and any other attributes are permitted (each one should have boolean/string values)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"(string | Object)[]"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  stylesheets: [\n    // String format.\n    'https://docusaurus.io/style.css',\n    // Object format.\n    {\n      href: 'http://mydomain.com/style.css',\n    },\n  ],\n};\n")),(0,a.kt)("admonition",i({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," tags will have ",(0,a.kt)("inlineCode",{parentName:"p"},'rel="stylesheet"'),", but you can explicitly add a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"rel")," value to inject any kind of ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," tag, not necessarily stylesheets.")),(0,a.kt)("h3",i({},{id:"clientModules"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clientModules")),(0,a.kt)("p",null,"An array of ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/2.0.0-rc.1/advanced/client#client-modules"}),"client modules")," to load globally on your site."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  clientModules: [\n    require.resolve('./mySiteGlobalJs.js'),\n    require.resolve('./mySiteGlobalCss.css'),\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"ssrTemplate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ssrTemplate")),(0,a.kt)("p",null,"An HTML template written in ",(0,a.kt)("a",i({parentName:"p"},{href:"https://eta.js.org/docs/syntax#syntax-overview"}),"Eta's syntax")," that will be used to render your application. This can be used to set custom attributes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," tags, additional ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," tags, customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewport"),", etc. Please note that Docusaurus will rely on the template to be correctly structured in order to function properly, once you do customize it, you will have to make sure that your template is compliant with the requirements from upstream."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),'module.exports = {\n  ssrTemplate: `<!DOCTYPE html>\n<html <%~ it.htmlAttributes %>>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="generator" content="Docusaurus v<%= it.version %>">\n    <% if (it.noIndex) { %>\n      <meta name="robots" content="noindex, nofollow" />\n    <% } %>\n    <%~ it.headTags %>\n    <% it.metaAttributes.forEach((metaAttribute) => { %>\n      <%~ metaAttribute %>\n    <% }); %>\n    <% it.stylesheets.forEach((stylesheet) => { %>\n      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />\n    <% }); %>\n    <% it.scripts.forEach((script) => { %>\n      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">\n    <% }); %>\n  </head>\n  <body <%~ it.bodyAttributes %>>\n    <%~ it.preBodyTags %>\n    <div id="__docusaurus">\n      <%~ it.appHtml %>\n    </div>\n    <% it.scripts.forEach((script) => { %>\n      <script src="<%= it.baseUrl %><%= script %>"><\/script>\n    <% }); %>\n    <%~ it.postBodyTags %>\n  </body>\n</html>`,\n};\n')),(0,a.kt)("h3",i({},{id:"titleDelimiter"}),(0,a.kt)("inlineCode",{parentName:"h3"},"titleDelimiter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Will be used as title delimiter in the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"<title>")," tag."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  titleDelimiter: '\ud83e\udd96', // Defaults to `|`\n};\n")),(0,a.kt)("h3",i({},{id:"baseUrlIssueBanner"}),(0,a.kt)("inlineCode",{parentName:"h3"},"baseUrlIssueBanner")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("p",null,"When enabled, will show a banner in case your site can't load its CSS or JavaScript files, which is a very common issue, often related to a wrong ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," in site config."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  baseUrlIssueBanner: true, // Defaults to `true`\n};\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"baseUrlIssueBanner",src:n(18155).Z,width:"1864",height:"1384"})),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This banner needs to inline CSS / JS in case all asset loading fails due to wrong base URL."),(0,a.kt)("p",{parentName:"admonition"},"If you have a strict ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}),"Content Security Policy"),", you should rather disable it.")))}c.isMDXComponent=!0},18155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/baseUrlIssueBanner-3292a9164bf77c06a723e8d3ddfe66c0.png"}}]);