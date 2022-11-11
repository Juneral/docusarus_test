"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35111],{58073:(e,t,n)=>{n.d(t,{Z:()=>r});const r="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// @ts-check\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Migrating from v1 to v2',\n      items: [\n        'migration/migration-overview',\n        'migration/migration-automated',\n        'migration/migration-manual',\n        'migration/migration-versioned-sites',\n        'migration/migration-translated-sites',\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\n\nmodule.exports = sidebars;\n"},99238:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(27378),a=n(38944),o=n(41876),s=n(13415),i=n(64149),l=n(36712);const c="cardContainer_Uewx",u="cardTitle_dwRT",d="cardDescription_mCBT";function p({href:e,children:t}){return r.createElement(s.Z,{href:e,className:(0,a.Z)("card padding--lg",c)},t)}function m({href:e,icon:t,title:n,description:o}){return r.createElement(p,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:n},t," ",n),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function g({item:e}){const t=(0,o.Wl)(e);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function b({item:e}){const t=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,o.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);return r.createElement(m,{href:e.href,icon:t,title:e.label,description:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return r.createElement(b,{item:e});case"category":return r.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function y({className:e}){const t=(0,o.jA)();return r.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,h({},e));const s=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},50016:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(78844),a=n(73919);function o(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},55188:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(70124);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){return(0,r.v)(e,s(o({},t),{transforms:o({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(29088);function o({children:e,fallback:t}){return(0,a.Z)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},93457:(e,t,n)=>{n.d(t,{Z:()=>fe});var r={};n.r(r),n.d(r,{ButtonExample:()=>x});var a=n(27378),o=n(38944),s=n(29088),i=n(40935),l=n(36712),c=n(4423),u=n(94544),d=n(50016);const p="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",g="playgroundEditor_TySg",b="playgroundPreview_mApW";function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y({children:e}){return a.createElement("div",{className:(0,o.Z)(m)},e)}function k(){return a.createElement("div",null,"Loading...")}function v(){return a.createElement(a.Fragment,null,a.createElement(y,null,a.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:b},a.createElement(u.Z,{fallback:a.createElement(k,null)},(()=>a.createElement(a.Fragment,null,a.createElement(i.i5,null),a.createElement(i.IF,null))))))}function j(){const e=(0,s.Z)();return a.createElement(i.uz,{key:String(e),className:g})}function w(){return a.createElement(a.Fragment,null,a.createElement(y,null,a.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(j,null))}function O(e){var t,{children:n,transformCode:r}=e,o=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:l}}=s,u=(0,d.p)();var m;const g=null!==(m=null===(t=o.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return a.createElement("div",{className:p},a.createElement(i.nu,f({code:n.replace(/\n$/,""),noInline:g,transformCode:null!=r?r:e=>`${e};`,theme:u},o),"top"===l?a.createElement(a.Fragment,null,a.createElement(v,null),a.createElement(w,null)):a.createElement(a.Fragment,null,a.createElement(w,null),a.createElement(v,null))))}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}function x(e){return a.createElement("button",N({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({React:a},a,r);var P,T,I=n(89583),L=n(6324),Z=n.n(L);const _=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),D=RegExp("\\{(?<range>[\\d,-]+)\\}"),A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function z(e,t){const n=e.map((e=>{const{start:n,end:r}=A[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function M(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&D.test(o)){const e=o.match(D).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=Z()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return z(["js","jsBlock"],t);case"jsx":case"tsx":return z(["js","jsBlock","jsx"],t);case"html":return z(["js","jsBlock","html"],t);case"python":case"py":case"bash":return z(["bash"],t);case"markdown":case"md":return z(["html","jsx","bash"],t);default:return z(Object.keys(A),t)}}(r,a),i=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<i.length;){const e=i[m].match(s);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?l[c[t]].range+=`${m},`:u[t]?l[u[t]].start=m:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${m-1},`),i.splice(m,1)}n=i.join("\n");const p={};return Object.entries(l).forEach((([e,{range:t}])=>{Z()(t).forEach((t=>{var n;null!==(n=(P=p)[T=t])&&void 0!==n||(P[T]=[]),p[t].push(e)}))})),{lineClassNames:p,code:n}}const F="codeBlockContainer_jDV4";function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function G(e){var{as:t}=e,n=$(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const a=t[e];a&&"string"==typeof r&&(n[a]=r)})),n}((0,d.p)());return a.createElement(t,H({},n,{style:r,className:(0,o.Z)(n.className,F,I.k.common.codeBlock)}))}const W={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function R({children:e,className:t}){return a.createElement(G,{as:"pre",tabIndex:0,className:(0,o.Z)(W.codeBlockStandalone,"thin-scrollbar",t)},a.createElement("code",{className:W.codeBlockLines},e))}var V=n(73919),q=n(51114);const U={attributes:!0,characterData:!0,childList:!0,subtree:!0};function X(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n=U){const r=(0,q.zX)(t),o=(0,q.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Q=n(55620);const J="codeLine_qRmp",Y="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:s}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=r({line:e,className:(0,o.Z)(t,n&&J)}),l=e.map(((e,t)=>a.createElement("span",ee({key:t},s({token:e,key:t})))));return a.createElement("span",ee({},i),n?a.createElement(a.Fragment,null,a.createElement("span",{className:Y}),a.createElement("span",{className:K},l)):l,a.createElement("br",null))}var ne=n(5568);const re={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ae({code:e,className:t}){const[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{(0,ne.Z)(e),r(!0),s.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,re.copyButton,n&&re.copyButtonCopied),onClick:i},a.createElement("span",{className:re.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:re.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:re.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const oe="wordWrapButtonIcon_MQXS",se="wordWrapButtonEnabled_TBIH";function ie({className:e,onClick:t,isEnabled:n}){const r=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",e,n&&se),"aria-label":r,title:r},a.createElement("svg",{className:oe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ce({children:e,className:t="",metastring:n,title:r,showLineNumbers:s,language:i}){const{prism:{defaultLanguage:l,magicComments:c}}=(0,V.L)();var u;const p=null!==(u=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:l,m=(0,d.p)(),g=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),s=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return X(o,i),(0,a.useEffect)((()=>{i()}),[e,i]),(0,a.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:s}}(),b=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(_))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:f,code:h}=M(e,{metastring:n,language:p,magicComments:c}),y=null!=s?s:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return a.createElement(G,{as:"div",className:(0,o.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`)},b&&a.createElement("div",{className:W.codeBlockTitle},b),a.createElement("div",{className:W.codeBlockContent},a.createElement(Q.ZP,le({},Q.lG,{theme:m,code:h,language:null!=p?p:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>a.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,o.Z)(e,W.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,o.Z)(W.codeBlockLines,y&&W.codeBlockLinesWithNumbering)},t.map(((e,t)=>a.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:f[t],showLineNumbers:y}))))))),a.createElement("div",{className:W.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&a.createElement(ie,{className:W.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),a.createElement(ae,{className:W.codeButton,code:h}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}const me=(ge=function(e){var{children:t}=e,n=de(e,["children"]);const r=(0,s.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?ce:R;return a.createElement(i,ue({key:String(r)},n),o)},function(e){return e.live?a.createElement(O,pe({scope:S},e)):a.createElement(ge,pe({},e))});var ge;function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function fe(e){return a.createElement(me,be({},e))}},16325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(27378);var r=n(35318),a=n(99238),o=n(93457);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={slug:"/sidebar"},c="Sidebar",u={unversionedId:"guides/docs/sidebar/index",id:"guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/docs/guides/docs/sidebar/index.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docusarus_test/zh-CN/docs/next/sidebar",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docusarus_test/zh-CN/docs/next/create-doc"},next:{title:"Sidebar items",permalink:"/docusarus_test/zh-CN/docs/next/sidebar/items"}},d={},p=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}],m={toc:p};function g(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",s({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"sidebar"}),"Sidebar"),(0,r.kt)("p",null,"Creating a sidebar is useful to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group multiple ",(0,r.kt)("strong",{parentName:"li"},"related documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display a sidebar")," on each of those documents"),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"paginated navigation"),", with next/previous button")),(0,r.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define a file that exports a dictionary of ",(0,r.kt)("a",s({parentName:"li"},{href:"#sidebar-object"}),"sidebar objects"),"."),(0,r.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"),(0,r.kt)(a.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",s({},{id:"default-sidebar"}),"Default sidebar"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarPath")," is unspecified, Docusaurus ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/sidebar/autogenerated"}),"automatically generates a sidebar")," for you, by using the filesystem structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"You can also define your sidebars explicitly."),(0,r.kt)("h2",s({},{id:"sidebar-object"}),"Sidebar object"),(0,r.kt)("p",null,"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"This is a sidebars file that exports one sidebar, called ",(0,r.kt)("inlineCode",{parentName:"p"},"mySidebar"),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."),(0,r.kt)("p",null,"A sidebars file can contain ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/sidebar/multiple-sidebars"}),(0,r.kt)("strong",{parentName:"a"},"multiple sidebar objects")),", identified by their object keys."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n")),(0,r.kt)("h2",s({},{id:"theme-configuration"}),"Theme configuration"),(0,r.kt)("h3",s({},{id:"hideable-sidebar"}),"Hideable sidebar"),(0,r.kt)("p",null,"By enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.hideable")," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,r.kt)("h3",s({},{id:"auto-collapse-sidebar-categories"}),"Auto-collapse sidebar categories"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.autoCollapseCategories")," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,r.kt)("h2",s({},{id:"passing-custom-props"}),"Passing custom props"),(0,r.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"{\n  type: 'doc',\n  id: 'doc1',\n  customProps: {\n    /* props */\n  },\n};\n")),(0,r.kt)("h2",s({},{id:"sidebar-breadcrumbs"}),"Sidebar Breadcrumbs"),(0,r.kt)("p",null,'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'),(0,r.kt)("p",null,"This behavior can be disabled with plugin options:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h2",s({},{id:"complex-sidebars-example"}),"Complex sidebars example"),(0,r.kt)("p",null,"A real-world example from the Docusaurus site:"),(0,r.kt)(o.Z,{language:"js",title:"sidebars.js",mdxType:"CodeBlock"},n(58073).Z.split("\n").map((e=>!["//","/*","*"].some((t=>e.trim().startsWith(t)))&&e)).filter(Boolean).join("\n")))}g.isMDXComponent=!0}}]);