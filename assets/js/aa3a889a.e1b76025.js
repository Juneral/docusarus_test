"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53855],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61132:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),o=r(38944);const a="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:r}){return n.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a,r)},{hidden:t}),e)}},38269:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(27378),o=r(38944),a=r(29088),l=r(52196),i=r(77468),s=r(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:r,block:a,defaultValue:d,values:m,groupId:b,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:f.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===d?d:null!==(g=null!=d?d:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[j,T]=(0,n.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=O[b];null!=e&&e!==j&&h.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==j&&(x(t),T(n),null!=b&&w(b,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;var r;t=null!==(r=E[n])&&void 0!==r?r:E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;var n;t=null!==(n=E[r])&&void 0!==n?n:E[E.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},v)},h.map((({value:e,label:t,attributes:r})=>n.createElement("li",p({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:P,onClick:N},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":j===e})}),null!=t?t:e)))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,a.Z)();return n.createElement(d,p({key:String(t)},e))}},87074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(27378);var n=r(35318),o=r(38269),a=r(61132);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},c="\ud83d\udce6 theme-live-codeblock",u={unversionedId:"api/themes/theme-live-codeblock",id:"api/themes/theme-live-codeblock",title:"\ud83d\udce6 theme-live-codeblock",description:"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.",source:"@site/docs/api/themes/theme-live-codeblock.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-live-codeblock",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-live-codeblock",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-classic",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-classic"},next:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-search-algolia"}},p={},d=[{value:"Configuration",id:"configuration",level:3}],m={toc:d};function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",l({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"-theme-live-codeblock"}),"\ud83d\udce6 theme-live-codeblock"),(0,n.kt)("p",null,"This theme provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",(0,n.kt)("a",l({parentName:"p"},{href:"/docusarus_test/docs/next/markdown-features/code-blocks#interactive-code-editor"}),"interactive code editor")," documentation."),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-live-codeblock\n"))),(0,n.kt)(a.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-live-codeblock\n")))),(0,n.kt)("h3",l({},{id:"configuration"}),"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n")))}b.isMDXComponent=!0}}]);