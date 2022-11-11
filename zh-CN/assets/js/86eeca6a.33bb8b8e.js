"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19949],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(38944);const r="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),o=n(38944),r=n(29088),l=n(52196),i=n(77468),s=n(75527);const u="tabList_Qoir",p="tabItem_AQgk";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const N=null===d?d:null!==(b=null!=d?d:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[T,C]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=h){const e=v[h];null!=e&&e!==T&&f.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==T&&(j(t),C(a),null!=h&&w(h,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var a;t=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>x.push(e),onKeyDown:I,onClick:O},n,{className:(0,o.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":T===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,r.Z)();return a.createElement(d,c({key:String(t)},e))}},86289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(27378);var a=n(35318),o=n(38269),r=n(61132);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"tutorial",description:"This tutorial will walk you through the basics of the Docusaurus i18n system.",slug:"/i18n/tutorial"},u="i18n - Tutorial",p={unversionedId:"i18n/tutorial",id:"version-2.0.0-rc.1/i18n/tutorial",title:"i18n - Tutorial",description:"This tutorial will walk you through the basics of the Docusaurus i18n system.",source:"@site/versioned_docs/version-2.0.0-rc.1/i18n/i18n-tutorial.md",sourceDirName:"i18n",slug:"/i18n/tutorial",permalink:"/docusarus_test/zh-CN/docs/i18n/tutorial",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-rc.1",frontMatter:{id:"tutorial",description:"This tutorial will walk you through the basics of the Docusaurus i18n system.",slug:"/i18n/tutorial"},sidebar:"docs",previous:{title:"i18n - Introduction",permalink:"/docusarus_test/zh-CN/docs/i18n/introduction"},next:{title:"i18n - Using git",permalink:"/docusarus_test/zh-CN/docs/i18n/git"}},c={},d=[{value:"Configure your site",id:"configure-your-site",level:2},{value:"Site configuration",id:"site-configuration",level:3},{value:"Theme configuration",id:"theme-configuration",level:3},{value:"Start your site",id:"start-your-site",level:3},{value:"Translate your site",id:"translate-your-site",level:2},{value:"Translate your React code",id:"translate-your-react-code",level:3},{value:"Pluralization",id:"pluralization",level:4},{value:"Translate plugin data",id:"translate-plugin-data",level:3},{value:"Translate Markdown files",id:"translate-markdown-files",level:3},{value:"Translate the docs",id:"translate-the-docs",level:4},{value:"Translate the blog",id:"translate-the-blog",level:4},{value:"Translate the pages",id:"translate-the-pages",level:4},{value:"Deploy your site",id:"deploy-your-site",level:2},{value:"Single-domain deployment",id:"single-domain-deployment",level:3},{value:"Multi-domain deployment",id:"multi-domain-deployment",level:3},{value:"Hybrid",id:"hybrid",level:3},{value:"Managing translations",id:"managing-translations",level:2}],m={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"i18n---tutorial"}),"i18n - Tutorial"),(0,a.kt)("p",null,"This tutorial will walk you through the basics of the ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus i18n system"),"."),(0,a.kt)("p",null,"We will add ",(0,a.kt)("strong",{parentName:"p"},"French")," translations to a ",(0,a.kt)("strong",{parentName:"p"},"newly initialized English Docusaurus website"),"."),(0,a.kt)("p",null,"Initialize a new site with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus@latest website classic")," (like ",(0,a.kt)("a",l({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/main/examples/classic"}),"this one"),")."),(0,a.kt)("h2",l({},{id:"configure-your-site"}),"Configure your site"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add the i18n support for the French language."),(0,a.kt)("h3",l({},{id:"site-configuration"}),"Site configuration"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/api/docusaurus-config#i18n"}),"site i18n configuration")," to declare the i18n locales:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr', 'fa'],\n    localeConfigs: {\n      en: {\n        htmlLang: 'en-GB',\n      },\n      // You can omit a locale (e.g. fr) if you don't need to override the defaults\n      fa: {\n        direction: 'rtl',\n      },\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The locale names are used for the translation files' locations, as well as your translated locales' base URL. When building all locales, only the default locale will have its name omitted in the base URL."),(0,a.kt)("p",null,"Docusaurus uses the locale names to provide ",(0,a.kt)("strong",{parentName:"p"},"sensible defaults"),": the ",(0,a.kt)("inlineCode",{parentName:"p"},'<html lang="...">')," attribute, locale label, calendar format, etc. You can customize these defaults with the ",(0,a.kt)("inlineCode",{parentName:"p"},"localeConfigs"),"."),(0,a.kt)("h3",l({},{id:"theme-configuration"}),"Theme configuration"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("strong",{parentName:"p"},"navbar item")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"localeDropdown")," so that users can select the locale they want:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("h3",l({},{id:"start-your-site"}),"Start your site"),(0,a.kt)("p",null,"Start your localized site in dev mode, using the locale of your choice:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run start -- --locale fr\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn run start -- --locale fr\n")))),(0,a.kt)("p",null,"Your site is accessible at ",(0,a.kt)("a",l({parentName:"p"},{href:"http://localhost:3000/fr/"}),"http://localhost:3000/fr/"),"."),(0,a.kt)("p",null,"We haven't provided any translation yet, so the site is mostly untranslated."),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Docusaurus provides ",(0,a.kt)("strong",{parentName:"p"},"default translations"),' for generic theme labels, such as "Next" and "Previous" for the pagination.'),(0,a.kt)("p",{parentName:"admonition"},"Please help us complete those ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",l({parentName:"strong"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales"}),"default translations")),".")),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Each locale is a ",(0,a.kt)("strong",{parentName:"p"},"distinct standalone single-page application"),": it is not possible to start the Docusaurus sites in all locales at the same time.")),(0,a.kt)("h2",l({},{id:"translate-your-site"}),"Translate your site"),(0,a.kt)("p",null,"All translation data for the French locale is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"website/i18n/fr"),". Each plugin sources its own translated content under the corresponding folder, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"code.json")," file defines all text labels used in the React code."),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"After copying files around, restart your site with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start -- --locale fr"),". Hot-reload will work better when editing existing files.")),(0,a.kt)("h3",l({},{id:"translate-your-react-code"}),"Translate your React code"),(0,a.kt)("p",null,"For any React code you've written yourself: React pages, React components, etc., you will use the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/docusaurus-core#translate"}),(0,a.kt)("strong",{parentName:"a"},"translation APIs")),"."),(0,a.kt)("p",null,"Locate all text labels in your React code that will be visible to your users, and mark them with the translation APIs. There are two kinds of APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"<Translate>")," component wraps a string as a JSX component;"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"translate()")," callback takes a message and returns a string.")),(0,a.kt)("p",null,"Use the one that better fits the context semantically. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Translate>")," can be used as React children, while for props that expect a string, the callback can be used."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Before",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Link from '@docusaurus/Link';\n\nexport default function Home() {\n  return (\n    <Layout>\n      {/* highlight-next-line */}\n      <h1>Welcome to my website</h1>\n      <main>\n        {/* highlight-start */}\n        You can also visit my\n        <Link to=\"https://docusaurus.io/blog\">blog</Link>\n        {/* highlight-end */}\n        <img\n          src=\"/img/home.png\"\n          // highlight-next-line\n          alt=\"Home icon\"\n        />\n      </main>\n    </Layout>\n  );\n}\n"))),(0,a.kt)(r.Z,{value:"After",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Link from '@docusaurus/Link';\n\n// highlight-next-line\nimport Translate, {translate} from '@docusaurus/Translate';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>\n        {/* highlight-next-line */}\n        <Translate>Welcome to my website</Translate>\n      </h1>\n      <main>\n        {/* highlight-start */}\n        <Translate\n          id=\"homepage.visitMyBlog\"\n          description=\"The homepage message to ask the user to visit my blog\"\n          values={{\n            blogLink: (\n              <Link to=\"https://docusaurus.io/blog\">\n                <Translate\n                  id=\"homepage.visitMyBlog.linkLabel\"\n                  description=\"The label for the link to my blog\">\n                  blog\n                </Translate>\n              </Link>\n            ),\n          }}>\n          {'You can also visit my {blogLink}'}\n        </Translate>\n        {/* highlight-end */}\n\n        <img\n          src=\"/img/home.png\"\n          alt={\n            // highlight-start\n            translate({\n              message: 'Home icon',\n              description: 'The homepage icon alt message',\n            })\n            // highlight-end\n          }\n        />\n      </main>\n    </Layout>\n  );\n}\n")))),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Docusaurus provides a ",(0,a.kt)("strong",{parentName:"p"},"very small and lightweight translation runtime")," on purpose, and only supports basic ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/docusaurus-core#interpolate"}),"placeholders interpolation"),", using a subset of the ",(0,a.kt)("a",l({parentName:"p"},{href:"https://formatjs.io/docs/core-concepts/icu-syntax/"}),"ICU Message Format"),"."),(0,a.kt)("p",{parentName:"admonition"},"Most documentation websites are generally ",(0,a.kt)("strong",{parentName:"p"},"static")," and don't need advanced i18n features (",(0,a.kt)("strong",{parentName:"p"},"plurals"),", ",(0,a.kt)("strong",{parentName:"p"},"genders"),", etc.). Use a library like ",(0,a.kt)("a",l({parentName:"p"},{href:"https://www.npmjs.com/package/react-intl"}),"react-intl")," for more advanced use-cases.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus write-translations")," command will statically analyze all React code files used in your site, extract calls to these APIs, and aggregate them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"code.json")," file. The translation files will be stored as maps from IDs to translation message objects (including the translated label and the description of the label). In your calls to the translation APIs (",(0,a.kt)("inlineCode",{parentName:"p"},"<Translate>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"translate()"),"), you need to specify either the default untranslated message or the ID, in order for Docusaurus to correctly correlate each translation entry to the API call."),(0,a.kt)("admonition",l({},{title:"text labels must be static",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus write-translations")," command only does ",(0,a.kt)("strong",{parentName:"p"},"static analysis")," of your code. It doesn't actually run your site. Therefore, dynamic messages can't be extracted, as the message is an ",(0,a.kt)("em",{parentName:"p"},"expression"),", not a ",(0,a.kt)("em",{parentName:"p"},"string"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"const items = [\n  {id: 1, title: 'Hello'},\n  {id: 2, title: 'World'},\n];\n\nfunction ItemsList() {\n  return (\n    <ul>\n      {/* DON'T DO THIS: doesn't work with the write-translations command */}\n      {items.map((item) => (\n        <li key={item.id}>\n          <Translate>{item.title}</Translate>\n        </li>\n      ))}\n    <ul>\n  );\n}\n")),(0,a.kt)("p",{parentName:"admonition"},'This still behaves correctly at runtime. However, in the future, we may provide a "no-runtime" mechanism, allowing the translations to be directly inlined in the React code through Babel transformations, instead of calling the APIs at runtime. Therefore, to be future-proof, you should always prefer statically analyzable messages. For example, we can refactor the code above to:'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"const items = [\n  {id: 1, title: <Translate>Hello</Translate>},\n  {id: 2, title: <Translate>World</Translate>},\n];\n\nfunction ItemsList() {\n  return (\n    <ul>\n      {/* The titles are now already translated when rendering! */}\n      {items.map((item) => (\n        <li key={item.id}>{item.title}</li>\n      ))}\n    <ul>\n  );\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"You can see the calls to the translation APIs as purely ",(0,a.kt)("em",{parentName:"p"},"markers"),' that tell Docusaurus that "here\'s a text label to be replaced with a translated message".')),(0,a.kt)("h4",l({},{id:"pluralization"}),"Pluralization"),(0,a.kt)("p",null,"When you run ",(0,a.kt)("inlineCode",{parentName:"p"},"write-translations"),", you will notice that some labels are pluralized:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-json",metastring:'title="i18n/en/code.json"',title:'"i18n/en/code.json"'}),'{\n  // ...\n  "theme.blog.post.plurals": "One post|{count} posts"\n  // ...\n}\n')),(0,a.kt)("p",null,"Every language will have a list of ",(0,a.kt)("a",l({parentName:"p"},{href:"https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html"}),"possible plural categories"),". Docusaurus will arrange them in the order of ",(0,a.kt)("inlineCode",{parentName:"p"},'["zero", "one", "two", "few", "many", "other"]'),". For example, because English (",(0,a.kt)("inlineCode",{parentName:"p"},"en"),') has two plural forms ("one" and "other"), the translation message has two labels separated by a pipe (',(0,a.kt)("inlineCode",{parentName:"p"},"|"),"). For Polish (",(0,a.kt)("inlineCode",{parentName:"p"},"pl"),') which has three plural forms ("one", "few", and "many"), you would provide three labels in that order, joined by pipes.'),(0,a.kt)("p",null,"You can pluralize your own code's messages as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import {translate} from '@docusaurus/Translate';\nimport {usePluralForm} from '@docusaurus/theme-common';\n\nfunction ItemsList({items}) {\n  // `usePluralForm` will provide the plural selector for the current locale\n  const {selectMessage} = usePluralForm();\n  // Select the appropriate pluralized label based on `items.length`\n  const message = selectMessage(\n    items.length,\n    translate(\n      {message: 'One item|{count} items'},\n      {count: items.length},\n    ),\n  );\n  return (\n    <>\n      <h2>{message}</h2>\n      <ul>{items.map((item) => <li key={item.id}>{item.title}</li>)}<ul>\n    </>\n  );\n}\n")),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Docusaurus uses ",(0,a.kt)("a",l({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules"}),(0,a.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," to resolve and select plural forms. It is important to provide the right number of plural forms in the right order for ",(0,a.kt)("inlineCode",{parentName:"p"},"selectMessage")," to work.")),(0,a.kt)("h3",l({},{id:"translate-plugin-data"}),"Translate plugin data"),(0,a.kt)("p",null,"JSON translation files are used for everything that is interspersed in your code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React code, including the translated labels you have marked above"),(0,a.kt)("li",{parentName:"ul"},"Navbar and footer labels in theme config"),(0,a.kt)("li",{parentName:"ul"},"Docs sidebar category labels in ",(0,a.kt)("inlineCode",{parentName:"li"},"sidebars.js")),(0,a.kt)("li",{parentName:"ul"},"Blog sidebar title in plugin options"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Run the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/cli#docusaurus-write-translations-sitedir"}),"write-translations")," command:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run write-translations -- --locale fr\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn run write-translations -- --locale fr\n")))),(0,a.kt)("p",null,"It will extract and initialize the JSON translation files that you need to translate. The ",(0,a.kt)("inlineCode",{parentName:"p"},"code.json")," file at the root includes all translation API calls extracted from the source code, which could either be written by you or provided by the themes, some of which may already be translated by default."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-json",metastring:'title="i18n/fr/code.json"',title:'"i18n/fr/code.json"'}),'{\n  // No ID for the <Translate> component: the default message is used as ID\n  "Welcome to my website": {\n    "message": "Welcome to my website"\n  },\n  "home.visitMyBlog": {\n    "message": "You can also visit my {blog}",\n    "description": "The homepage message to ask the user to visit my blog"\n  },\n  "homepage.visitMyBlog.linkLabel": {\n    "message": "Blog",\n    "description": "The label for the link to my blog"\n  },\n  "Home icon": {\n    "message": "Home icon",\n    "description": "The homepage icon alt message"\n  }\n}\n')),(0,a.kt)("p",null,"Plugins and themes will also write their own JSON translation files, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-json",metastring:'title="i18n/fr/docusaurus-theme-classic/navbar.json"',title:'"i18n/fr/docusaurus-theme-classic/navbar.json"'}),'{\n  "title": {\n    "message": "My Site",\n    "description": "The title in the navbar"\n  },\n  "item.label.Docs": {\n    "message": "Docs",\n    "description": "Navbar item with label Docs"\n  },\n  "item.label.Blog": {\n    "message": "Blog",\n    "description": "Navbar item with label Blog"\n  },\n  "item.label.GitHub": {\n    "message": "GitHub",\n    "description": "Navbar item with label GitHub"\n  }\n}\n')),(0,a.kt)("p",null,"Translate the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," attribute in the JSON files of ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr"),", and your site layout and homepage should now be translated."),(0,a.kt)("h3",l({},{id:"translate-markdown-files"}),"Translate Markdown files"),(0,a.kt)("p",null,"Official Docusaurus content plugins extensively use Markdown/MDX files and allow you to translate them."),(0,a.kt)("h4",l({},{id:"translate-the-docs"}),"Translate the docs"),(0,a.kt)("p",null,"Copy your docs Markdown files from ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current"),", and translate them:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n")),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-content-docs")," plugin always divides its content by versions. The data in ",(0,a.kt)("inlineCode",{parentName:"p"},"./docs")," folder will be translated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," subfolder and ",(0,a.kt)("inlineCode",{parentName:"p"},"current.json")," file. See ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/versioning#terminology"}),"the doc versioning guide"),' for more information about what "current" means.')),(0,a.kt)("h4",l({},{id:"translate-the-blog"}),"Translate the blog"),(0,a.kt)("p",null,"Copy your blog Markdown files to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-blog"),", and translate them:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n")),(0,a.kt)("h4",l({},{id:"translate-the-pages"}),"Translate the pages"),(0,a.kt)("p",null,"Copy your pages Markdown files to ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-pages"),", and translate them:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n")),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"We only copy ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".mdx")," files, as React pages are translated through JSON translation files already.")),(0,a.kt)("admonition",l({},{title:"Use explicit heading IDs",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"By default, a Markdown heading ",(0,a.kt)("inlineCode",{parentName:"p"},"### Hello World")," will have a generated ID ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world"),". Other documents can link it with ",(0,a.kt)("inlineCode",{parentName:"p"},"[link](#hello-world)"),". However, after translation, the heading becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"### Bonjour le Monde"),", with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"bonjour-le-monde"),"."),(0,a.kt)("p",{parentName:"admonition"},"Generated IDs are not always a good fit for localized sites, as it requires you to localize all the anchor links:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-diff"}),"- [link](#hello-world).\n+ [link](#bonjour-le-monde)\n")),(0,a.kt)("p",{parentName:"admonition"},"For localized sites, it is recommended to use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",l({parentName:"strong"},{href:"/docusarus_test/zh-CN/docs/markdown-features/toc#explicit-ids"}),"explicit heading IDs")),".")),(0,a.kt)("h2",l({},{id:"deploy-your-site"}),"Deploy your site"),(0,a.kt)("p",null,"You can choose to deploy your site under a ",(0,a.kt)("strong",{parentName:"p"},"single domain")," or use ",(0,a.kt)("strong",{parentName:"p"},"multiple (sub)domains"),"."),(0,a.kt)("h3",l({},{id:"single-domain-deployment"}),"Single-domain deployment"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run build\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn run build\n")))),(0,a.kt)("p",null,"Docusaurus will build ",(0,a.kt)("strong",{parentName:"p"},"one single-page application per locale"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/build"),": for the default, English language"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website/build/fr"),": for the French language")),(0,a.kt)("p",null,"You can now ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/deployment"}),"deploy")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder to the static hosting solution of your choice."),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The Docusaurus v2 website uses this strategy:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://docusaurus.io"}),"https://docusaurus.io")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://docusaurus.io/fr"}),"https://docusaurus.io/fr")))),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Static hosting providers generally redirect ",(0,a.kt)("inlineCode",{parentName:"p"},"/unknown/url")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/404.html")," by convention, always showing an ",(0,a.kt)("strong",{parentName:"p"},"English 404 page"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Localize your 404 pages")," by configuring your host to redirect ",(0,a.kt)("inlineCode",{parentName:"p"},"/fr/*")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/fr/404.html"),"."),(0,a.kt)("p",{parentName:"admonition"},"This is not always possible, and depends on your host: GitHub Pages can't do this, ",(0,a.kt)("a",l({parentName:"p"},{href:"https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page-handling"}),"Netlify")," can.")),(0,a.kt)("h3",l({},{id:"multi-domain-deployment"}),"Multi-domain deployment"),(0,a.kt)("p",null,"You can also build your site for a single locale:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"npm run build -- --locale fr\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn run build -- --locale fr\n")))),(0,a.kt)("p",null,"Docusaurus will not add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/fr/")," URL prefix."),(0,a.kt)("p",null,"On your ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/deployment"}),"static hosting provider"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create one deployment per locale"),(0,a.kt)("li",{parentName:"ul"},"configure the appropriate build command, using the ",(0,a.kt)("inlineCode",{parentName:"li"},"--locale")," option"),(0,a.kt)("li",{parentName:"ul"},"configure the (sub)domain of your choice for each deployment")),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This strategy is ",(0,a.kt)("strong",{parentName:"p"},"not possible")," with GitHub Pages, as it is only possible to ",(0,a.kt)("strong",{parentName:"p"},"have a single deployment"),".")),(0,a.kt)("h3",l({},{id:"hybrid"}),"Hybrid"),(0,a.kt)("p",null,"It is possible to have some locales using sub-paths, and others using subdomains."),(0,a.kt)("p",null,"It is also possible to deploy each locale as a separate subdomain, assemble the subdomains in a single unified domain at the CDN level:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy your site as ",(0,a.kt)("inlineCode",{parentName:"li"},"fr.docusaurus.io")),(0,a.kt)("li",{parentName:"ul"},"Configure a CDN to serve it from ",(0,a.kt)("inlineCode",{parentName:"li"},"docusaurus.io/fr"))),(0,a.kt)("h2",l({},{id:"managing-translations"}),"Managing translations"),(0,a.kt)("p",null,"Docusaurus doesn't care about how you manage your translations: all it needs is that all translation files (JSON, Markdown, or other data files) are available in the file system during building. However, as site creators, you would need to consider how translations are managed so your translation contributors could collaborate well."),(0,a.kt)("p",null,"We will share two common translation collaboration strategies: ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/i18n/git"}),(0,a.kt)("strong",{parentName:"a"},"using git"))," and ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/i18n/crowdin"}),(0,a.kt)("strong",{parentName:"a"},"using Crowdin")),"."))}h.isMDXComponent=!0}}]);