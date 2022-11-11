"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9043],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61132:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(27378),i=t(38944);const o="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function r({children:e,hidden:n,className:t}){return a.createElement("div",s({role:"tabpanel",className:(0,i.Z)(o,t)},{hidden:n}),e)}},38269:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(27378),i=t(38944),o=t(29088),s=t(52196),r=t(77468),l=t(75527);const u="tabList_Qoir",c="tabItem_AQgk";function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:m,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),f=(0,s.l)(b,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const y=null===p?p:null!==(k=null!=p?p:null===(n=v.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==k?k:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,r.U)(),[T,O]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:D}=(0,l.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&b.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,t=j.indexOf(n),a=b[t].value;a!==T&&(D(n),O(a),null!=h&&w(h,String(a)))},I=e=>{let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;var t;n=null!==(t=j[a])&&void 0!==t?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;var a;n=null!==(a=j[t])&&void 0!==a?a:j[j.length-1];break}}null==n||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},b.map((({value:e,label:n,attributes:t})=>a.createElement("li",d({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>j.push(e),onKeyDown:I,onClick:C},t,{className:(0,i.Z)("tabs__item",c,null==t?void 0:t.className,{"tabs__item--active":T===e})}),null!=n?n:e)))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,d({key:String(n)},e))}},86047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});t(27378);var a=t(35318),i=t(38269),o=t(61132);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},u="Docs Multi-instance",c={unversionedId:"guides/docs/multi-instance",id:"version-2.0.0-beta.22/guides/docs/multi-instance",title:"Docs Multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",source:"@site/versioned_docs/version-2.0.0-beta.22/guides/docs/docs-multi-instance.mdx",sourceDirName:"guides/docs",slug:"/docs-multi-instance",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/docs-multi-instance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-multi-instance.mdx",tags:[],version:"2.0.0-beta.22",frontMatter:{id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},sidebar:"docs",previous:{title:"Versioning",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/versioning"},next:{title:"Blog",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/blog"}},d={},p=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}],m={toc:p};function h(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",s({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"docs-multi-instance"}),"Docs Multi-instance"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," plugin can support ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/using-plugins#multi-instance-plugins-and-plugin-ids"}),"multi-instance"),"."),(0,a.kt)("admonition",s({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This feature is only useful for ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/versioning"}),"versioned documentation"),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/sidebar/multiple-sidebars"}),"multiple sidebars"),", you can do so within one plugin.")),(0,a.kt)("h2",s({},{id:"use-cases"}),"Use-cases"),(0,a.kt)("p",null,"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."),(0,a.kt)("p",null,"These documentations may even have different versioning/release lifecycles."),(0,a.kt)("h3",s({},{id:"mobile-sdks-documentation"}),"Mobile SDKs documentation"),(0,a.kt)("p",null,"If you build a cross-platform mobile SDK, you may have 2 documentations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android SDK documentation (",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.1"),")"),(0,a.kt)("li",{parentName:"ul"},"iOS SDK documentation (",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v2.0"),")")),(0,a.kt)("p",null,"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."),(0,a.kt)("p",{parentName:"admonition"},"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?")),(0,a.kt)("h3",s({},{id:"versioned-and-unversioned-doc"}),"Versioned and unversioned doc"),(0,a.kt)("p",null,'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'),(0,a.kt)("p",null,"We use this pattern on the Docusaurus website itself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs"}),"/docs/","*")," section is versioned"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",s({parentName:"li"},{href:"/community/support"}),"/community/","*")," section is unversioned")),(0,a.kt)("h2",s({},{id:"setup"}),"Setup"),(0,a.kt)("p",null,"Suppose you have 2 documentations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Product: some versioned doc about your product"),(0,a.kt)("li",{parentName:"ul"},"Community: some unversioned doc about the community around your product")),(0,a.kt)("p",null,"In this case, you should use the same plugin twice in your site configuration."),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," already includes a docs plugin instance for you!")),(0,a.kt)("p",null,"When using the preset:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: require.resolve('./sidebarsProduct.js'),\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"When not using the preset:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: require.resolve('./sidebarsProduct.js'),\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: require.resolve('./sidebarsCommunity.js'),\n        // ... other options\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"Don't forget to assign a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute to plugin instances."),(0,a.kt)("admonition",s({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"We consider that the ",(0,a.kt)("inlineCode",{parentName:"p"},"product"),' instance is the most important one, and make it the "default" instance by not assigning any ID.')),(0,a.kt)("h2",s({},{id:"versioned-paths"}),"Versioned paths"),(0,a.kt)("p",null,"Each plugin instance will store versioned docs in a distinct folder."),(0,a.kt)("p",null,"The default plugin instance will use these paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versions.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versioned_docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/versioned_sidebars"))),(0,a.kt)("p",null,"The other plugin instances (with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute) will use these paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versions.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versioned_docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/[pluginId]_versioned_sidebars"))),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"You can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute (defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),") for one of the docs plugin instances."),(0,a.kt)("p",{parentName:"admonition"},"The instance paths will be simpler, and retro-compatible with a single-instance setup.")),(0,a.kt)("h2",s({},{id:"tagging-new-versions"}),"Tagging new versions"),(0,a.kt)("p",null,"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus -- --help\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus -- --help\n")))),(0,a.kt)("p",null,"To version the product/default docs plugin instance:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus docs:version 1.0.0\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus docs:version 1.0.0\n")))),(0,a.kt)("p",null,"To version the non-default/community docs plugin instance:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus docs:version:community 1.0.0\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus docs:version:community 1.0.0\n")))),(0,a.kt)("h2",s({},{id:"docs-navbar-items"}),"Docs navbar items"),(0,a.kt)("p",null,"Each docs-related ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/themes/configuration#navbar"}),"theme navbar items")," take an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"docsPluginId")," attribute."),(0,a.kt)("p",null,"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n")))}h.isMDXComponent=!0}}]);