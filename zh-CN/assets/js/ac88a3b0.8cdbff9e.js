"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31986],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61132:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378),a=r(38944);const o="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function l({children:e,hidden:t,className:r}){return n.createElement("div",s({role:"tabpanel",className:(0,a.Z)(o,r)},{hidden:t}),e)}},38269:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(27378),a=r(38944),o=r(29088),s=r(52196),l=r(77468),i=r(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:d,groupId:f,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const O=null===m?m:null!==(g=null!=m?m:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:h[0].props.value;if(null!==O&&!v.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[j,T]=(0,n.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==j&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==j&&(N(t),T(n),null!=f&&w(f,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;var r;t=null!==(r=E[n])&&void 0!==r?r:E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;var n;t=null!==(n=E[r])&&void 0!==n?n:E[E.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},v.map((({value:e,label:t,attributes:r})=>n.createElement("li",p({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:P,onClick:x},r,{className:(0,a.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":j===e})}),null!=t?t:e)))),r?(0,n.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,o.Z)();return n.createElement(m,p({key:String(t)},e))}},87891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>m});r(27378);var n=r(35318),a=r(38269),o=r(61132);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},c="\ud83d\udce6 theme-classic",u={unversionedId:"api/themes/theme-classic",id:"version-2.0.0-beta.22/api/themes/theme-classic",title:"\ud83d\udce6 theme-classic",description:"The classic theme for Docusaurus.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/themes/theme-classic.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/@docusaurus/theme-classic",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration"},next:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/@docusaurus/theme-live-codeblock"}},p={},m=[],d={toc:m};function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",s({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"-theme-classic"}),"\ud83d\udce6 theme-classic"),(0,n.kt)("p",null,"The classic theme for Docusaurus."),(0,n.kt)("p",null,"You can refer to the ",(0,n.kt)("a",s({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration"}),"theme configuration page")," for more details on the configuration."),(0,n.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-classic\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-classic\n")))),(0,n.kt)("admonition",s({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"If you have installed ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")))}f.isMDXComponent=!0}}]);