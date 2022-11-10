"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8920],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(38944);const i="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(i,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27378),a=n(38944),i=n(29088),l=n(52196),o=n(77468),s=n(75527);const u="tabList_Qoir",c="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const v=null===d?d:null!==(k=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,o.U)(),[O,T]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==O&&(E(t),T(r),null!=g&&w(g,String(r)))},R=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var r;t=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},f)},y.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:R,onClick:C},n,{className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,p({key:String(t)},e))}},52605:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(27378),a=n(35331);const i="apiTable_e8hp";function l({name:e,children:t},n){const i=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(t),l=e?`${e}-${i}`:i,o=`#${l}`,s=(0,a.k6)();return r.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===o?n:void 0,onClick:()=>{s.push(o)},onKeyDown:e=>{"Enter"===e.key&&s.push(o)}},t.props.children)}const o=r.forwardRef(l);function s({children:e,name:t}){const[n,a]=r.Children.toArray(e.props.children),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const s=r.Children.map(a.props.children,(e=>r.createElement(o,{name:t,ref:l},e)));return r.createElement("table",{className:i},n,r.createElement("tbody",null,s))}},89681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(27378);var r=n(35318),a=n(38269),i=n(61132),l=n(52605);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},c="\ud83d\udce6 plugin-client-redirects",p={unversionedId:"api/plugins/plugin-client-redirects",id:"version-2.0.0-rc.1/api/plugins/plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/versioned_docs/version-2.0.0-rc.1/api/plugins/plugin-client-redirects.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-client-redirects.md",tags:[],version:"2.0.0-rc.1",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}],g={toc:m};function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"-plugin-client-redirects"}),"\ud83d\udce6 plugin-client-redirects"),(0,r.kt)("p",null,"Docusaurus Plugin to generate ",(0,r.kt)("strong",{parentName:"p"},"client-side redirects"),"."),(0,r.kt)("p",null,"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."),(0,r.kt)("admonition",o({},{title:"production only",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,r.kt)("strong",{parentName:"p"},"only active in production")," because it works on the build output.")),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"It is better to use server-side redirects whenever possible."),(0,r.kt)("p",{parentName:"admonition"},"Before using this plugin, you should look if your hosting provider doesn't offer this feature.")),(0,r.kt)("h2",o({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-client-redirects\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-client-redirects\n")))),(0,r.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Option"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fromExtensions")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The extensions to be removed from the route after redirecting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"toExtensions")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The extensions to be appended to the route after redirecting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"redirects")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("code",null,(0,r.kt)("a",{href:"#RedirectRule"},"RedirectRule"),"[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The list of redirect rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"createRedirects")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("code",null,(0,r.kt)("a",{href:"#CreateRedirectsFn"},"CreateRedirectsFn"))),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths."))))),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This plugin will also read the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/api/docusaurus-config#onDuplicateRoutes"}),(0,r.kt)("inlineCode",{parentName:"a"},"siteConfig.onDuplicateRoutes"))," config to adjust its logging level when multiple files will be emitted to the same location.")),(0,r.kt)("h3",o({},{id:"types"}),"Types"),(0,r.kt)("h4",o({},{id:"RedirectRule"}),(0,r.kt)("inlineCode",{parentName:"h4"},"RedirectRule")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},'The idea of "from" and "to" is central in this plugin. "From" means a path that you want to ',(0,r.kt)("em",{parentName:"p"},"create"),', i.e. an extra HTML file that will be written; "to" means a path to want to redirect ',(0,r.kt)("em",{parentName:"p"},"to"),", usually a route that Docusaurus already knows about."),(0,r.kt)("p",{parentName:"admonition"},'This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.')),(0,r.kt)("h4",o({},{id:"CreateRedirectsFn"}),(0,r.kt)("inlineCode",{parentName:"h4"},"CreateRedirectsFn")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),'// The parameter `path` is a route that Docusaurus has already created. It can\n// be seen as the "to", and your return value is the "from". Returning a falsy\n// value will not create any redirect pages for this particular path.\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n')),(0,r.kt)("h3",o({},{id:"ex-config"}),"Example configuration"),(0,r.kt)("p",null,"Here's an example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}f.isMDXComponent=!0}}]);