"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81461],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52605:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(27378),a=n(35331);const l="apiTable_e8hp";function o({name:e,children:t},n){const l=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(t),o=e?`${e}-${l}`:l,i=`#${o}`,s=(0,a.k6)();return r.createElement("tr",{id:o,tabIndex:0,ref:s.location.hash===i?n:void 0,onClick:()=>{s.push(i)},onKeyDown:e=>{"Enter"===e.key&&s.push(i)}},t.props.children)}const i=r.forwardRef(o);function s({children:e,name:t}){const[n,a]=r.Children.toArray(e.props.children),o=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=o.current)||void 0===e||e.focus()}),[o]);const s=r.Children.map(a.props.children,(e=>r.createElement(i,{name:t,ref:o},e)));return r.createElement("table",{className:l},n,r.createElement("tbody",null,s))}},48266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(27378);var r=n(35318),a=n(52605);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},s="no-untranslated-text",u={unversionedId:"api/misc/eslint-plugin/no-untranslated-text",id:"version-2.0.0-beta.22/api/misc/eslint-plugin/no-untranslated-text",title:"no-untranslated-text",description:"Enforce text labels in JSX to be wrapped by translate calls.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/misc/eslint-plugin/no-untranslated-text.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.md",tags:[],version:"2.0.0-beta.22",frontMatter:{slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},sidebar:"api",previous:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/misc/@docusaurus/eslint-plugin"},next:{title:"string-literal-i18n-messages",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},c={},p=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",l({},{id:"no-untranslated-text"}),"no-untranslated-text"),(0,r.kt)("p",null,"Enforce text labels in JSX to be wrapped by translate calls."),(0,r.kt)("p",null,"When the ",(0,r.kt)("a",l({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/i18n/introduction"}),"i18n feature")," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."),(0,r.kt)("h2",l({},{id:"details"}),"Rule Details"),(0,r.kt)("p",null,"Examples of ",(0,r.kt)("strong",{parentName:"p"},"incorrect")," code for this rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js"}),"// Hello World is not translated\n<Component>Hello World</Component>\n")),(0,r.kt)("p",null,"Examples of ",(0,r.kt)("strong",{parentName:"p"},"correct")," code for this rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js"}),"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n")),(0,r.kt)("h2",l({},{id:"configuration"}),"Rule Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(a.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Option"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"ignoredStrings")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Text labels that only contain strings in this list will not be reported."))))),(0,r.kt)("h2",l({},{id:"when-not-to-use"}),"When Not To Use It"),(0,r.kt)("p",null,"If you're not using the ",(0,r.kt)("a",l({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/i18n/introduction"}),"i18n feature"),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."),(0,r.kt)("h2",l({},{id:"further-reading"}),"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",l({parentName:"li"},{href:"https://docusaurus.io/docs/docusaurus-core#translate"}),"https://docusaurus.io/docs/docusaurus-core#translate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",l({parentName:"li"},{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"}),"https://docusaurus.io/docs/docusaurus-core#translate-imperative"))))}m.isMDXComponent=!0}}]);