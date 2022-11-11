"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16093],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),a=n(38944);const o="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",s({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27378),a=n(38944),o=n(29088),s=n(52196),i=n(77468),p=n(75527);const l="tabList_Qoir",u="tabItem_AQgk";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:y,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const k=null===d?d:null!==(v=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,i.U)(),[N,S]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=y){const e=T[y];null!=e&&e!==N&&g.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==N&&(j(t),S(r),null!=y&&w(y,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[r])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var r;t=null!==(r=O[n])&&void 0!==r?r:O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},f)},g.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:C,onClick:x},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,c({key:String(t)},e))}},48402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(27378);var r=n(35318),a=n(38269),o=n(61132);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},l="TypeScript Support",u={unversionedId:"typescript-support",id:"version-2.0.0-beta.22/typescript-support",title:"TypeScript Support",description:"Docusaurus is written in TypeScript and provides first-class TypeScript support.",source:"@site/versioned_docs/version-2.0.0-beta.22/typescript-support.md",sourceDirName:".",slug:"/typescript-support",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/typescript-support",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/typescript-support.md",tags:[],version:"2.0.0-beta.22",frontMatter:{description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},sidebar:"docs",previous:{title:"Playground",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/playground"},next:{title:"Guides",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/category/guides"}},c={},d=[{value:"Initialization",id:"initialization",level:2},{value:"Setup",id:"setup",level:2},{value:"Typing the config file",id:"typing-config",level:2},{value:"Swizzling TypeScript theme components",id:"swizzling-typescript-theme-components",level:2}],m={toc:d};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"typescript-support"}),"TypeScript Support"),(0,r.kt)("p",null,"Docusaurus is written in TypeScript and provides first-class TypeScript support."),(0,r.kt)("h2",s({},{id:"initialization"}),"Initialization"),(0,r.kt)("p",null,"Docusaurus supports writing and using TypeScript theme components. If the init template provides a TypeScript variant, you can directly initialize a site with full TypeScript support by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--typescript")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest my-website classic --typescript\n")),(0,r.kt)("p",null,"Below are some guides on how to migrate an existing project to TypeScript."),(0,r.kt)("h2",s({},{id:"setup"}),"Setup"),(0,r.kt)("p",null,"To start using TypeScript, add ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/module-type-aliases")," and the base TS config to your project:"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add --dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus\n")))),(0,r.kt)("p",null,"Then add ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to your project root with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "extends": "@tsconfig/docusaurus/tsconfig.json"\n}\n')),(0,r.kt)("p",null,"Docusaurus doesn't use this ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to compile your project. It is added just for a nicer Editor experience, although you can choose to run ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," to type check your code for yourself or on CI."),(0,r.kt)("p",null,"Now you can start writing TypeScript theme components."),(0,r.kt)("h2",s({},{id:"typing-config"}),"Typing the config file"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"not possible")," to use a TypeScript config file in Docusaurus unless you compile it yourself to JavaScript."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"}),"JSDoc type annotations"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Plugin} */\nfunction MyPlugin(context, options) {\n  return {\n    name: 'my-plugin',\n  };\n}\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  organizationName: 'facebook',\n  projectName: 'docusaurus',\n  plugins: [MyPlugin],\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          path: 'docs',\n          sidebarPath: 'sidebars.js',\n        },\n        blog: {\n          path: 'blog',\n          postsPerPage: 5,\n        },\n      }),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      colorMode: {\n        defaultMode: 'dark',\n      },\n      navbar: {\n        hideOnScroll: true,\n        title: 'Docusaurus',\n        logo: {\n          alt: 'Docusaurus Logo',\n          src: 'img/docusaurus.svg',\n          srcDark: 'img/docusaurus_keytar.svg',\n        },\n      },\n    }),\n};\n\nmodule.exports = config;\n")),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Type annotations are very useful and help your IDE understand the type of config objects!"),(0,r.kt)("p",{parentName:"admonition"},"The best IDEs (VS Code, WebStorm, IntelliJ...) will provide a nice auto-completion experience.")),(0,r.kt)("admonition",s({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"By default, the Docusaurus TypeScript config does not type-check JavaScript files."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"// @ts-check")," comment ensures the config file is properly type-checked when running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx tsc"),".")),(0,r.kt)("h2",s({},{id:"swizzling-typescript-theme-components"}),"Swizzling TypeScript theme components"),(0,r.kt)("p",null,"For themes that support TypeScript theme components, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--typescript")," flag to the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command to get TypeScript source code. For example, the following command will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.module.css")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme/Footer"),"."),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer -- --typescript\n")))),(0,r.kt)("p",null,"All official Docusaurus themes support TypeScript theme components, including ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/themes/@docusaurus/theme-classic"}),(0,r.kt)("inlineCode",{parentName:"a"},"theme-classic")),", ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/themes/@docusaurus/theme-live-codeblock"}),(0,r.kt)("inlineCode",{parentName:"a"},"theme-live-codeblock")),", and ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/themes/@docusaurus/theme-search-algolia"}),(0,r.kt)("inlineCode",{parentName:"a"},"theme-search-algolia")),". If you are a Docusaurus theme package author who wants to add TypeScript support, see the ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath"}),"Lifecycle APIs docs"),"."))}y.isMDXComponent=!0}}]);