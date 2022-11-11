"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2392],{61132:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),a=n(38944);const o="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27378),a=n(38944),o=n(29088),l=n(52196),i=n(77468),s=n(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:g,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const k=null===d?d:null!==(v=null!=d?d:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:O}=(0,i.U)(),[N,w]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=E[g];null!=e&&e!==N&&h.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==N&&(C(t),w(r),null!=g&&O(g,String(r)))},B=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[r])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var r;t=null!==(r=j[n])&&void 0!==r?r:j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},f)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>j.push(e),onKeyDown:B,onClick:P},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,p({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(78844),a=n(73919);function o(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},55188:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(70124);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){return(0,r.v)(e,l(o({},t),{transforms:o({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(29088);function o({children:e,fallback:t}){return(0,a.Z)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},52605:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(27378),a=n(35331);const o="apiTable_e8hp";function l({name:e,children:t},n){const o=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(t),l=e?`${e}-${o}`:o,i=`#${l}`,s=(0,a.k6)();return r.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===i?n:void 0,onClick:()=>{s.push(i)},onKeyDown:e=>{"Enter"===e.key&&s.push(i)}},t.props.children)}const i=r.forwardRef(l);function s({children:e,name:t}){const[n,a]=r.Children.toArray(e.props.children),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const s=r.Children.map(a.props.children,(e=>r.createElement(i,{name:t,ref:l},e)));return r.createElement("table",{className:o},n,r.createElement("tbody",null,s))}},82064:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(27378),a=n(13415),o=n(92053),l=n(36712),i=n(38269),s=n(61132),c=n(93457);function u({code:e,pluginName:t,presetOptionName:n}){const u=(0,o.zu)(undefined).path;return r.createElement(i.Z,{groupId:"api-config-ex"},r.createElement(s.Z,{value:"preset",label:(0,l.I)({message:"Preset options"})},r.createElement("p",null,r.createElement(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:r.createElement(a.Z,{to:`${u}/using-plugins#docusauruspreset-classic`},r.createElement(l.Z,null,"preset options"))}},"If you use a preset, configure this plugin through the {presetLink}:")),r.createElement("p",null,r.createElement(c.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${n}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`))),r.createElement(s.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"})},r.createElement("p",null,r.createElement(l.Z,null,"If you are using a standalone plugin, provide options directly to the plugin:")),r.createElement("p",null,r.createElement(c.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`))))}},93457:(e,t,n)=>{n.d(t,{Z:()=>be});var r={};n.r(r),n.d(r,{ButtonExample:()=>P});var a=n(27378),o=n(38944),l=n(29088),i=n(40935),s=n(36712),c=n(4423),u=n(94544),p=n(50016);const d="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",g="playgroundEditor_TySg",f="playgroundPreview_mApW";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y({children:e}){return a.createElement("div",{className:(0,o.Z)(m)},e)}function v(){return a.createElement("div",null,"Loading...")}function k(){return a.createElement(a.Fragment,null,a.createElement(y,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:f},a.createElement(u.Z,{fallback:a.createElement(v,null)},(()=>a.createElement(a.Fragment,null,a.createElement(i.i5,null),a.createElement(i.IF,null))))))}function E(){const e=(0,l.Z)();return a.createElement(i.uz,{key:String(e),className:g})}function O(){return a.createElement(a.Fragment,null,a.createElement(y,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(E,null))}function N(e){var t,{children:n,transformCode:r}=e,o=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:s}}=l,u=(0,p.p)();var m;const g=null!==(m=null===(t=o.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return a.createElement("div",{className:d},a.createElement(i.nu,b({code:n.replace(/\n$/,""),noInline:g,transformCode:null!=r?r:e=>`${e};`,theme:u},o),"top"===s?a.createElement(a.Fragment,null,a.createElement(k,null),a.createElement(O,null)):a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement(k,null))))}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function P(e){return a.createElement("button",j({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({React:a},a,r);var T,x,Z=n(89583),S=n(6324),_=n.n(S);const L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),A=RegExp("\\{(?<range>[\\d,-]+)\\}"),D={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function $(e,t){const n=e.map((e=>{const{start:n,end:r}=D[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function R(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&A.test(o)){const e=o.match(A).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=_()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"],t);case"jsx":case"tsx":return $(["js","jsBlock","jsx"],t);case"html":return $(["js","jsBlock","html"],t);case"python":case"py":case"bash":return $(["bash"],t);case"markdown":case"md":return $(["html","jsx","bash"],t);default:return $(Object.keys(D),t)}}(r,a),i=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<i.length;){const e=i[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?s[c[t]].range+=`${m},`:u[t]?s[u[t]].start=m:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${m-1},`),i.splice(m,1)}n=i.join("\n");const d={};return Object.entries(s).forEach((([e,{range:t}])=>{_()(t).forEach((t=>{var n;null!==(n=(T=d)[x=t])&&void 0!==n||(T[x]=[]),d[t].push(e)}))})),{lineClassNames:d,code:n}}const M="codeBlockContainer_jDV4";function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function G(e){var{as:t}=e,n=z(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const a=t[e];a&&"string"==typeof r&&(n[a]=r)})),n}((0,p.p)());return a.createElement(t,V({},n,{style:r,className:(0,o.Z)(n.className,M,Z.k.common.codeBlock)}))}const H={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return a.createElement(G,{as:"pre",tabIndex:0,className:(0,o.Z)(H.codeBlockStandalone,"thin-scrollbar",t)},a.createElement("code",{className:H.codeBlockLines},e))}var F=n(73919),q=n(51114);const Q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function U(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n=Q){const r=(0,q.zX)(t),o=(0,q.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var X=n(55620);const J="codeLine_qRmp",Y="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:l}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=r({line:e,className:(0,o.Z)(t,n&&J)}),s=e.map(((e,t)=>a.createElement("span",ee({key:t},l({token:e,key:t})))));return a.createElement("span",ee({},i),n?a.createElement(a.Fragment,null,a.createElement("span",{className:Y}),a.createElement("span",{className:K},s)):s,a.createElement("br",null))}var ne=n(5568);const re={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ae({code:e,className:t}){const[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),i=(0,a.useCallback)((()=>{(0,ne.Z)(e),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,re.copyButton,n&&re.copyButtonCopied),onClick:i},a.createElement("span",{className:re.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:re.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:re.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const oe="wordWrapButtonIcon_MQXS",le="wordWrapButtonEnabled_TBIH";function ie({className:e,onClick:t,isEnabled:n}){const r=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",e,n&&le),"aria-label":r,title:r},a.createElement("svg",{className:oe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ce({children:e,className:t="",metastring:n,title:r,showLineNumbers:l,language:i}){const{prism:{defaultLanguage:s,magicComments:c}}=(0,F.L)();var u;const d=null!==(u=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,m=(0,p.p)(),g=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return U(o,i),(0,a.useEffect)((()=>{i()}),[e,i]),(0,a.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),f=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(L))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:b,code:h}=R(e,{metastring:n,language:d,magicComments:c}),y=null!=l?l:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return a.createElement(G,{as:"div",className:(0,o.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},f&&a.createElement("div",{className:H.codeBlockTitle},f),a.createElement("div",{className:H.codeBlockContent},a.createElement(X.ZP,se({},X.lG,{theme:m,code:h,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>a.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,o.Z)(e,H.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,o.Z)(H.codeBlockLines,y&&H.codeBlockLinesWithNumbering)},t.map(((e,t)=>a.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:b[t],showLineNumbers:y}))))))),a.createElement("div",{className:H.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&a.createElement(ie,{className:H.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),a.createElement(ae,{className:H.codeButton,code:h}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}const me=(ge=function(e){var{children:t}=e,n=pe(e,["children"]);const r=(0,l.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?ce:W;return a.createElement(i,ue({key:String(r)},n),o)},function(e){return e.live?a.createElement(N,de({scope:I},e)):a.createElement(ge,de({},e))});var ge;function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}function be(e){return a.createElement(me,fe({},e))}},84957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>g});n(27378);var r=n(35318),a=n(38269),o=n(61132),l=n(52605),i=n(82064);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},p="\ud83d\udce6 plugin-google-analytics",d={unversionedId:"api/plugins/plugin-google-analytics",id:"version-2.0.0-beta.22/api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/plugins/plugin-google-analytics.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.md",tags:[],version:"2.0.0-beta.22",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-google-gtag"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],f={toc:g};function b(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",s({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"-plugin-google-analytics"}),"\ud83d\udce6 plugin-google-analytics"),(0,r.kt)("p",null,"The default ",(0,r.kt)("a",s({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/"}),"Google Analytics")," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,r.kt)("strong",{parentName:"p"},"in the production build"),". If you are using Google Analytics 4 you might need to consider using ",(0,r.kt)("a",s({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-google-gtag"}),"plugin-google-gtag")," instead."),(0,r.kt)("admonition",s({},{title:"production only",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,r.kt)("strong",{parentName:"p"},"only active in production")," to avoid polluting the analytics statistics.")),(0,r.kt)("h2",s({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-google-analytics\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-google-analytics\n")))),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,r.kt)("h2",s({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"trackingID")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The tracking ID of your analytics service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"anonymizeIP")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Whether the IP should be anonymized when sending requests."))))),(0,r.kt)("h3",s({},{id:"ex-config"}),"Example configuration"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)(i.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}",mdxType:"ConfigTabs"}))}b.isMDXComponent=!0}}]);