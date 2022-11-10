"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72576],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(38944);const l="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",s({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27378),a=n(38944),l=n(29088),s=n(52196),o=n(77468),i=n(75527);const u="tabList_Qoir",c="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:g,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const k=null===d?d:null!==(y=null!=d?d:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,o.U)(),[x,E]=(0,r.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==x&&(j(t),E(r),null!=g&&O(g,String(r)))},D=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;var n;t=null!==(n=w[r])&&void 0!==n?n:w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;var r;t=null!==(r=w[n])&&void 0!==r?r:w[w.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},v.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>w.push(e),onKeyDown:D,onClick:T},n,{className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,p({key:String(t)},e))}},17799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});n(27378);var r=n(35318),a=n(38269),l=n(61132);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},u="\ud83d\udce6 eslint-plugin",c={unversionedId:"api/misc/eslint-plugin/README",id:"api/misc/eslint-plugin/README",title:"\ud83d\udce6 eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/docs/api/misc/eslint-plugin/README.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/docs/next/api/misc/@docusaurus/eslint-plugin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docs/next/api/misc/create-docusaurus"},next:{title:"no-untranslated-text",permalink:"/docs/next/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Configs",id:"supported-configs",level:2},{value:"Supported Rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}],m={toc:d};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"-eslint-plugin"}),"\ud83d\udce6 eslint-plugin"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."),(0,r.kt)("h2",s({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev @docusaurus/eslint-plugin\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @docusaurus/eslint-plugin\n")))),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus")," to the plugins section of your ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'}),'{\n  "plugins": ["@docusaurus"]\n}\n')),(0,r.kt)("p",null,"Then, you can extend one of the configs (e.g. the ",(0,r.kt)("inlineCode",{parentName:"p"},"recommended")," config):"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'}),'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n')),(0,r.kt)("p",null,"Each config contains a set of rules. For more fine-grained control, you can also configure the rules you want to use directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'}),'{\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n')),(0,r.kt)("h2",s({},{id:"supported-configs"}),"Supported Configs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommended: recommended rule set for most Docusaurus sites that should be extended from."),(0,r.kt)("li",{parentName:"ul"},"All: ",(0,r.kt)("strong",{parentName:"li"},"all")," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes.")),(0,r.kt)("h2",s({},{id:"supported-rules"}),"Supported Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/docs/next/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}),(0,r.kt)("inlineCode",{parentName:"a"},"@docusaurus/no-untranslated-text"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Enforce text labels in JSX to be wrapped by translate calls"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/docs/next/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}),(0,r.kt)("inlineCode",{parentName:"a"},"@docusaurus/string-literal-i18n-messages"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Enforce translate APIs to be called on plain text labels"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u2705")))),(0,r.kt)("p",null,"\u2705 = recommended"),(0,r.kt)("h2",s({},{id:"example-configuration"}),"Example configuration"),(0,r.kt)("p",null,"Here's an example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'}),"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  plugins: ['@docusaurus'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n")))}g.isMDXComponent=!0}}]);