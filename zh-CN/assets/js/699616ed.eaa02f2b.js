"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94757],{35318:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var r=t(27378);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(t),d=n,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(m,s(s({ref:a},u),{},{components:t})):r.createElement(m,s({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},61132:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(27378),n=t(38944);const o="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function l({children:e,hidden:a,className:t}){return r.createElement("div",s({role:"tabpanel",className:(0,n.Z)(o,t)},{hidden:a}),e)}},38269:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(27378),n=t(38944),o=t(29088),s=t(52196),l=t(77468),i=t(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function h(e){var a;const{lazy:t,block:o,defaultValue:h,values:d,groupId:m,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=d?d:f.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),y=(0,s.l)(k,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const v=null===h?h:null!==(b=null!=h?h:null===(a=f.find((e=>e.props.default)))||void 0===a?void 0:a.props.value)&&void 0!==b?b:f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[S,x]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:D}=(0,i.o5)();if(null!=m){const e=N[m];null!=e&&e!==S&&k.some((a=>a.value===e))&&x(e)}const O=e=>{const a=e.currentTarget,t=C.indexOf(a),r=k[t].value;r!==S&&(D(a),x(r),null!=m&&w(m,String(r)))},T=e=>{let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;var t;a=null!==(t=C[r])&&void 0!==t?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;var r;a=null!==(r=C[t])&&void 0!==r?r:C[C.length-1];break}}null==a||a.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},g)},k.map((({value:e,label:a,attributes:t})=>r.createElement("li",p({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:e=>C.push(e),onKeyDown:T,onClick:O},t,{className:(0,n.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":S===e})}),null!=a?a:e)))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==S})))))}function d(e){const a=(0,o.Z)();return r.createElement(h,p({key:String(a)},e))}},26414:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});t(27378);var r=t(35318),n=t(38269),o=t(61132);function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={keywords:["algolia","search"]},c="Search",u={unversionedId:"search",id:"version-2.0.0-rc.1/search",title:"Search",description:"There are a few options you can use to add search to your website:",source:"@site/versioned_docs/version-2.0.0-rc.1/search.md",sourceDirName:".",slug:"/search",permalink:"/docusarus_test/zh-CN/docs/search",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-rc.1",frontMatter:{keywords:["algolia","search"]},sidebar:"docs",previous:{title:"Static Assets",permalink:"/docusarus_test/zh-CN/docs/static-assets"},next:{title:"Browser support",permalink:"/docusarus_test/zh-CN/docs/browser-support"}},p={},h=[{value:"\ud83e\udd47 Using Algolia DocSearch",id:"using-algolia-docsearch",level:2},{value:"Index Configuration",id:"algolia-index-configuration",level:3},{value:"Connecting Algolia",id:"connecting-algolia",level:3},{value:"Contextual search",id:"contextual-search",level:3},{value:"Styling your Algolia search",id:"styling-your-algolia-search",level:3},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",level:3},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",level:3},{value:"Support",id:"algolia-support",level:3},{value:"\ud83d\udc65 Using Typesense DocSearch",id:"using-typesense-docsearch",level:2},{value:"\ud83d\udc65 Using Local Search",id:"using-local-search",level:2},{value:"\ud83d\udc65 Using your own search",id:"using-your-own-search",level:2}],d={toc:h};function m(e){var{components:a}=e,t=l(e,["components"]);return(0,r.kt)("wrapper",s({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"search"}),"Search"),(0,r.kt)("p",null,"There are a few options you can use to add search to your website:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd47 ",(0,r.kt)("a",s({parentName:"li"},{href:"#using-algolia-docsearch"}),"Algolia DocSearch")," (",(0,r.kt)("strong",{parentName:"li"},"official"),")"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,r.kt)("a",s({parentName:"li"},{href:"#using-typesense-docsearch"}),"Typesense DocSearch")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,r.kt)("a",s({parentName:"li"},{href:"#using-local-search"}),"Local Search")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,r.kt)("a",s({parentName:"li"},{href:"#using-your-own-search"}),"Your own ",(0,r.kt)("inlineCode",{parentName:"a"},"SearchBar")," component"))),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\ud83e\udd47 Docusaurus provides ",(0,r.kt)("strong",{parentName:"p"},"first-class support")," for ",(0,r.kt)("a",s({parentName:"p"},{href:"#using-algolia-docsearch"}),"Algolia DocSearch"),"."),(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc65 Other options are ",(0,r.kt)("strong",{parentName:"p"},"maintained by the community"),": please report bugs to their respective repositories.")),(0,r.kt)("h2",s({},{id:"using-algolia-docsearch"}),"\ud83e\udd47 Using Algolia DocSearch"),(0,r.kt)("p",null,"Docusaurus has ",(0,r.kt)("strong",{parentName:"p"},"official support")," for ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com"}),"Algolia DocSearch"),"."),(0,r.kt)("p",null,"The service is ",(0,r.kt)("strong",{parentName:"p"},"free")," for any open-source project: just make sure to read the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/who-can-apply/"}),"checklist")," and ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/apply"}),"apply to the DocSearch program"),"."),(0,r.kt)("p",null,"DocSearch crawls your website once a week (the schedule is configurable from the web interface) and aggregates all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API."),(0,r.kt)("p",null,"If your website is ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/who-can-apply"}),"not eligible")," for the free, hosted version of DocSearch, or if your website sits behind a firewall and is not public, then you can ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/run-your-own/"}),"run your own")," DocSearch crawler."),(0,r.kt)("admonition",s({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"By default, the Docusaurus preset generates a ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docusaurus.io/sitemap.xml"}),"sitemap.xml")," that the Algolia crawler can use.")),(0,r.kt)("admonition",s({},{title:"From the old docsearch?",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"You can read more about migration from the legacy DocSearch infra in ",(0,r.kt)("a",s({parentName:"p"},{href:"/blog/2021/11/21/algolia-docsearch-migration"}),"our blog post")," or ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/migrating-from-legacy"}),"the DocSearch migration docs"),".")),(0,r.kt)("h3",s({},{id:"algolia-index-configuration"}),"Index Configuration"),(0,r.kt)("p",null,"After your application has been approved and deployed, you will receive an email with all the details for you to add DocSearch to your project. Editing and managing your crawls can be done via ",(0,r.kt)("a",s({parentName:"p"},{href:"https://crawler.algolia.com/"}),"the web interface"),". Indices are readily available after deployment, so manual configuration usually isn't necessary."),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"It is highly recommended to use a config similar to the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template"}),(0,r.kt)("strong",{parentName:"a"},"Docusaurus 2 website config")),".")),(0,r.kt)("h3",s({},{id:"connecting-algolia"}),"Connecting Algolia"),(0,r.kt)("p",null,"Docusaurus' own ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," supports Algolia DocSearch integration. If you use the classic preset, no additional installation is needed."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Installation steps when not using ",(0,r.kt)("code",null,"@docusaurus/preset-classic")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package:")),(0,r.kt)(n.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-search-algolia\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-search-algolia\n")))),(0,r.kt)("ol",s({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Register the theme in ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'My site',\n  // ...\n  themes: ['@docusaurus/theme-search-algolia'],\n  themeConfig: {\n    // ...\n  },\n};\n"))),(0,r.kt)("p",null,"Then, add an ",(0,r.kt)("inlineCode",{parentName:"p"},"algolia")," field in your ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig"),". ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",s({parentName:"strong"},{href:"https://docsearch.algolia.com/apply/"}),"Apply for DocSearch"))," to get your Algolia index and API key."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.\n      externalUrlRegex: 'external\\\\.com|domain\\\\.com',\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      // Optional: path for search page that enabled by default (`false` to disable it)\n      searchPagePath: 'search',\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n")),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParameters")," option used to be named ",(0,r.kt)("inlineCode",{parentName:"p"},"algoliaOptions")," in Docusaurus v1."),(0,r.kt)("p",{parentName:"admonition"},"Refer to its ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docsearch.algolia.com/docs/api#searchparameters"}),"official DocSearch documentation")," for possible values.")),(0,r.kt)("admonition",s({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The search feature will not work reliably until Algolia crawls your site."),(0,r.kt)("p",{parentName:"admonition"},"If search doesn't work after any significant change, please use the Algolia dashboard to ",(0,r.kt)("strong",{parentName:"p"},"trigger a new crawl"),".")),(0,r.kt)("h3",s({},{id:"contextual-search"}),"Contextual search"),(0,r.kt)("p",null,"Contextual search is ",(0,r.kt)("strong",{parentName:"p"},"enabled by default"),"."),(0,r.kt)("p",null,"It ensures that search results are ",(0,r.kt)("strong",{parentName:"p"},"relevant to the current language and version"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: true,\n    },\n    // highlight-end\n  },\n};\n")),(0,r.kt)("p",null,"Let's consider you have 2 docs versions (",(0,r.kt)("strong",{parentName:"p"},"v1")," and ",(0,r.kt)("strong",{parentName:"p"},"v2"),") and 2 languages (",(0,r.kt)("inlineCode",{parentName:"p"},"en")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fr"),")."),(0,r.kt)("p",null,"When browsing v2 docs, it would be odd to return search results for the v1 documentation. Sometimes v1 and v2 docs are quite similar, and you would end up with duplicate search results for the same query (one result per version)."),(0,r.kt)("p",null,"Similarly, when browsing the French site, it would be odd to return search results for the English docs."),(0,r.kt)("p",null,"To solve this problem, the contextual search feature understands that you are browsing a specific docs version and language, and will create the search query filters dynamically."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on ",(0,r.kt)("inlineCode",{parentName:"li"},"/en/docs/v1/myDoc"),", search results will only include ",(0,r.kt)("strong",{parentName:"li"},"English")," results for the ",(0,r.kt)("strong",{parentName:"li"},"v1")," docs (+ other unversioned pages)"),(0,r.kt)("li",{parentName:"ul"},"on ",(0,r.kt)("inlineCode",{parentName:"li"},"/fr/docs/v2/myDoc"),", search results will only include ",(0,r.kt)("strong",{parentName:"li"},"French")," results for the ",(0,r.kt)("strong",{parentName:"li"},"v2")," docs (+ other unversioned pages)")),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"contextualSearch: true")," (default), the contextual facet filters will be merged with the ones provided with ",(0,r.kt)("inlineCode",{parentName:"p"},"algolia.searchParameters.facetFilters")," ."),(0,r.kt)("p",{parentName:"admonition"},"For specific needs, you can disable ",(0,r.kt)("inlineCode",{parentName:"p"},"contextualSearch")," and define your own ",(0,r.kt)("inlineCode",{parentName:"p"},"facetFilters"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: false,\n      searchParameters: {\n        facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,r.kt)("p",{parentName:"admonition"},"Refer to the relevant ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/"}),"Algolia faceting documentation"),".")),(0,r.kt)("h3",s({},{id:"styling-your-algolia-search"}),"Styling your Algolia search"),(0,r.kt)("p",null,"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."),(0,r.kt)("p",null,"Still, you can reuse the ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/styling-layout#styling-your-site-with-infima"}),"Infima CSS variables")," from Docusaurus to style DocSearch by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/css/custom.css")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'}),"[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\n[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n")),(0,r.kt)("h3",s({},{id:"customizing-the-algolia-search-behavior"}),"Customizing the Algolia search behavior"),(0,r.kt)("p",null,"Algolia DocSearch supports a ",(0,r.kt)("a",s({parentName:"p"},{href:"https://autocomplete-experimental.netlify.app/docs/DocSearchModal#reference"}),"list of options")," that you can pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"algolia")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n")),(0,r.kt)("h3",s({},{id:"editing-the-algolia-search-component"}),"Editing the Algolia search component"),(0,r.kt)("p",null,"If you prefer to edit the Algolia search React component, swizzle the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-search-algolia"),":"),(0,r.kt)(n.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-search-algolia SearchBar\n")))),(0,r.kt)("h3",s({},{id:"algolia-support"}),"Support"),(0,r.kt)("p",null,"The Algolia DocSearch team can help you figure out search problems on your site."),(0,r.kt)("p",null,"You can contact them by ",(0,r.kt)("a",s({parentName:"p"},{href:"mailto:documentationsearch@algolia.com"}),"email")," or on ",(0,r.kt)("a",s({parentName:"p"},{href:"https://discord.gg/tXdr5mP"}),"Discord"),"."),(0,r.kt)("p",null,"Docusaurus also has an ",(0,r.kt)("inlineCode",{parentName:"p"},"#algolia")," channel on ",(0,r.kt)("a",s({parentName:"p"},{href:"https://discordapp.com/invite/docusaurus"}),"Discord"),"."),(0,r.kt)("h2",s({},{id:"using-typesense-docsearch"}),"\ud83d\udc65 Using Typesense DocSearch"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://typesense.org"}),"Typesense")," DocSearch works similar to Algolia DocSearch, except that your website is indexed into a Typesense search cluster."),(0,r.kt)("p",null,"Typesense is an ",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/typesense/typesense"}),"open source")," instant-search engine that you can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://typesense.org/docs/latest/guide/install-typesense.html#option-2-local-machine-self-hosting"}),"Self-Host")," on your own servers or"),(0,r.kt)("li",{parentName:"ul"},"Use the Managed ",(0,r.kt)("a",s({parentName:"li"},{href:"https://cloud.typesense.org"}),"Typesense Cloud")," service.")),(0,r.kt)("p",null,"Similar to Algolia DocSearch, there are two components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/typesense/typesense-docsearch-scraper"}),"typesense-docsearch-scraper")," - which scrapes your website and indexes the data in your Typesense cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/typesense/docusaurus-theme-search-typesense"}),"docusaurus-theme-search-typesense")," - a search bar UI component to add to your website.")),(0,r.kt)("p",null,"Read a step-by-step walk-through of how to ",(0,r.kt)("a",s({parentName:"p"},{href:"https://typesense.org/docs/latest/guide/docsearch.html#step-1-set-up-docsearch-scraper"}),"run typesense-docsearch-scraper here")," and how to ",(0,r.kt)("a",s({parentName:"p"},{href:"https://typesense.org/docs/latest/guide/docsearch.html#option-a-docusaurus-powered-sites"}),"install the Search Bar in your Docusaurus Site here"),"."),(0,r.kt)("h2",s({},{id:"using-local-search"}),"\ud83d\udc65 Using Local Search"),(0,r.kt)("p",null,"You can use a local search plugin for websites where the search index is small and can be downloaded to your users' browsers when they visit your website."),(0,r.kt)("p",null,"You'll find a list of community-supported ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docusaurus.io/community/resources#search"}),"local search plugins listed here"),"."),(0,r.kt)("h2",s({},{id:"using-your-own-search"}),"\ud83d\udc65 Using your own search"),(0,r.kt)("p",null,"To use your own search, swizzle the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchBar")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")),(0,r.kt)(n.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic SearchBar\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic SearchBar\n")))),(0,r.kt)("p",null,"This will create an ",(0,r.kt)("inlineCode",{parentName:"p"},"src/themes/SearchBar")," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchBar")," component now."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),": You can alternatively ",(0,r.kt)("a",s({parentName:"p"},{href:"#editing-the-algolia-search-component"}),"swizzle from Algolia SearchBar")," and create your own search component from there."))}m.isMDXComponent=!0}}]);