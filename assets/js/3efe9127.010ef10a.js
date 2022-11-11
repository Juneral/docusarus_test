"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22968],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(38944);const l="tabItem_pnkT";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(38944),l=n(29088),i=n(52196),o=n(77468),u=n(75527);const s="tabList_Qoir",p="tabItem_AQgk";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:c,groupId:g,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=c?c:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===m?m:null!==(y=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,o.U)(),[C,O]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==C&&b.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==C&&(E(t),O(a),null!=g&&w(g,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var a;t=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>x.push(e),onKeyDown:T,onClick:j},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,l.Z)();return a.createElement(m,d({key:String(t)},e))}},52605:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(35331);const l="apiTable_e8hp";function i({name:e,children:t},n){const l=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(t),i=e?`${e}-${l}`:l,o=`#${i}`,u=(0,r.k6)();return a.createElement("tr",{id:i,tabIndex:0,ref:u.location.hash===o?n:void 0,onClick:()=>{u.push(o)},onKeyDown:e=>{"Enter"===e.key&&u.push(o)}},t.props.children)}const o=a.forwardRef(i);function u({children:e,name:t}){const[n,r]=a.Children.toArray(e.props.children),i=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null===(e=i.current)||void 0===e||e.focus()}),[i]);const u=a.Children.map(r.props.children,(e=>a.createElement(o,{name:t,ref:i},e)));return a.createElement("table",{className:l},n,a.createElement("tbody",null,u))}},26353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});n(27378);var a=n(35318),r=n(38269),l=n(61132),i=n(52605);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},p="\ud83d\udce6 plugin-ideal-image",d={unversionedId:"api/plugins/plugin-ideal-image",id:"api/plugins/plugin-ideal-image",title:"\ud83d\udce6 plugin-ideal-image",description:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).",source:"@site/docs/api/plugins/plugin-ideal-image.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-ideal-image",permalink:"/docusarus_test/docs/next/api/plugins/@docusaurus/plugin-ideal-image",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docusarus_test/docs/next/api/plugins/@docusaurus/plugin-google-gtag"},next:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docusarus_test/docs/next/api/plugins/@docusaurus/plugin-pwa"}},m={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],g={toc:c};function f(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)("wrapper",o({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",o({},{id:"-plugin-ideal-image"}),"\ud83d\udce6 plugin-ideal-image"),(0,a.kt)("p",null,"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"By default, the plugin is ",(0,a.kt)("strong",{parentName:"p"},"inactive in development")," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,a.kt)("a",o({parentName:"p"},{href:"#disableInDev"}),(0,a.kt)("inlineCode",{parentName:"a"},"disableInDev"))," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-ideal-image\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-ideal-image\n")))),(0,a.kt)("h2",o({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"This plugin supports the PNG and JPG formats only."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n")),(0,a.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Accepted fields:"),(0,a.kt)(i.Z,{mdxType:"APITable"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Option"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ideal-img/[name].[hash:hex:7].[width].[ext]")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Filename template for output files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sizes")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"original size")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"original size")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"min")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"As an alternative to manually specifying ",(0,a.kt)("inlineCode",{parentName:"td"},"sizes"),", you can specify ",(0,a.kt)("inlineCode",{parentName:"td"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"max")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"steps"),", and the sizes will be generated for you.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"max")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null})),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"See ",(0,a.kt)("inlineCode",{parentName:"td"},"min")," above")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"steps")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Configure the number of images generated between ",(0,a.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"max")," (inclusive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"quality")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"85")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"JPEG compression quality")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"disableInDev")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"You can test ideal image behavior in dev mode by setting this to ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),". ",(0,a.kt)("strong",{parentName:"td"},"Tip"),": use ",(0,a.kt)("a",o({parentName:"td"},{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome"}),"network throttling")," in your browser to simulate slow networks."))))),(0,a.kt)("h3",o({},{id:"ex-config"}),"Example configuration"),(0,a.kt)("p",null,"Here's an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}f.isMDXComponent=!0}}]);