"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10352],{61132:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(38944);const l="tabItem_pnkT";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),r=n(38944),l=n(29088),o=n(52196),i=n(77468),s=n(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:g,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===d?d:null!==(y=null!=d?d:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:E}=(0,i.U)(),[O,w]=(0,a.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==O&&(C(t),w(a),null!=g&&E(g,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[a])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var a;t=null!==(a=j[n])&&void 0!==a?a:j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},h.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:x,onClick:P},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,p({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>l});var a=n(78844),r=n(73919);function l(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,l=e.darkTheme||n;return"dark"===t?l:n}},55188:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(70124);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){return(0,a.v)(e,o(l({},t),{transforms:l({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(29088);function l({children:e,fallback:t}){return(0,r.Z)()?a.createElement(a.Fragment,null,null==e?void 0:e()):null!=t?t:null}},52605:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(35331);const l="apiTable_e8hp";function o({name:e,children:t},n){const l=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(t),o=e?`${e}-${l}`:l,i=`#${o}`,s=(0,r.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:s.location.hash===i?n:void 0,onClick:()=>{s.push(i)},onKeyDown:e=>{"Enter"===e.key&&s.push(i)}},t.props.children)}const i=a.forwardRef(o);function s({children:e,name:t}){const[n,r]=a.Children.toArray(e.props.children),o=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null===(e=o.current)||void 0===e||e.focus()}),[o]);const s=a.Children.map(r.props.children,(e=>a.createElement(i,{name:t,ref:o},e)));return a.createElement("table",{className:l},n,a.createElement("tbody",null,s))}},82064:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(13415),l=n(92053),o=n(36712),i=n(38269),s=n(61132),c=n(93457);function u({code:e,pluginName:t,presetOptionName:n}){const u=(0,l.zu)(undefined).path;return a.createElement(i.Z,{groupId:"api-config-ex"},a.createElement(s.Z,{value:"preset",label:(0,o.I)({message:"Preset options"})},a.createElement("p",null,a.createElement(o.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:a.createElement(r.Z,{to:`${u}/using-plugins#docusauruspreset-classic`},a.createElement(o.Z,null,"preset options"))}},"If you use a preset, configure this plugin through the {presetLink}:")),a.createElement("p",null,a.createElement(c.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${n}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`))),a.createElement(s.Z,{value:"plugin",label:(0,o.I)({message:"Plugin options"})},a.createElement("p",null,a.createElement(o.Z,null,"If you are using a standalone plugin, provide options directly to the plugin:")),a.createElement("p",null,a.createElement(c.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`))))}},93457:(e,t,n)=>{n.d(t,{Z:()=>be});var a={};n.r(a),n.d(a,{ButtonExample:()=>P});var r=n(27378),l=n(38944),o=n(29088),i=n(40935),s=n(36712),c=n(4423),u=n(94544),p=n(50016);const d="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",g="playgroundEditor_TySg",f="playgroundPreview_mApW";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function k({children:e}){return r.createElement("div",{className:(0,l.Z)(m)},e)}function y(){return r.createElement("div",null,"Loading...")}function v(){return r.createElement(r.Fragment,null,r.createElement(k,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:f},r.createElement(u.Z,{fallback:r.createElement(y,null)},(()=>r.createElement(r.Fragment,null,r.createElement(i.i5,null),r.createElement(i.IF,null))))))}function N(){const e=(0,o.Z)();return r.createElement(i.uz,{key:String(e),className:g})}function E(){return r.createElement(r.Fragment,null,r.createElement(k,null,r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(N,null))}function O(e){var t,{children:n,transformCode:a}=e,l=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:o}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:s}}=o,u=(0,p.p)();var m;const g=null!==(m=null===(t=l.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return r.createElement("div",{className:d},r.createElement(i.nu,b({code:n.replace(/\n$/,""),noInline:g,transformCode:null!=a?a:e=>`${e};`,theme:u},l),"top"===s?r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(E,null)):r.createElement(r.Fragment,null,r.createElement(E,null),r.createElement(v,null))))}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){w(e,t,n[t])}))}return e}function P(e){return r.createElement("button",j({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){x(e,t,n[t])}))}return e}({React:r},r,a);var T,I,_=n(89583),Z=n(6324),S=n.n(Z);const D=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),L=RegExp("\\{(?<range>[\\d,-]+)\\}"),R={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function $(e,t){const n=e.map((e=>{const{start:n,end:a}=R[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function M(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:l}=t;if(l&&L.test(l)){const e=l.match(L).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=S()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"],t);case"jsx":case"tsx":return $(["js","jsBlock","jsx"],t);case"html":return $(["js","jsBlock","html"],t);case"python":case"py":case"bash":return $(["bash"],t);case"markdown":case"md":return $(["html","jsx","bash"],t);default:return $(Object.keys(R),t)}}(a,r),i=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(r.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<i.length;){const e=i[m].match(o);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?s[c[t]].range+=`${m},`:u[t]?s[u[t]].start=m:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${m-1},`),i.splice(m,1)}n=i.join("\n");const d={};return Object.entries(s).forEach((([e,{range:t}])=>{S()(t).forEach((t=>{var n;null!==(n=(T=d)[I=t])&&void 0!==n||(T[I]=[]),d[t].push(e)}))})),{lineClassNames:d,code:n}}const A="codeBlockContainer_jDV4";function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},V.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function X(e){var{as:t}=e,n=H(e,["as"]);const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,a])=>{const r=t[e];r&&"string"==typeof a&&(n[r]=a)})),n}((0,p.p)());return r.createElement(t,V({},n,{style:a,className:(0,l.Z)(n.className,A,_.k.common.codeBlock)}))}const z={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function F({children:e,className:t}){return r.createElement(X,{as:"pre",tabIndex:0,className:(0,l.Z)(z.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:z.codeBlockLines},e))}var W=n(73919),G=n(51114);const q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Q(e,t){const[n,a]=(0,r.useState)(),l=(0,r.useCallback)((()=>{var t;a(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{l()}),[l]),function(e,t,n=q){const a=(0,G.zX)(t),l=(0,G.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var U=n(55620);const Y="codeLine_qRmp",J="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:a,getTokenProps:o}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=a({line:e,className:(0,l.Z)(t,n&&Y)}),s=e.map(((e,t)=>r.createElement("span",ee({key:t},o({token:e,key:t})))));return r.createElement("span",ee({},i),n?r.createElement(r.Fragment,null,r.createElement("span",{className:J}),r.createElement("span",{className:K},s)):s,r.createElement("br",null))}var ne=n(5568);const ae={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function re({code:e,className:t}){const[n,a]=(0,r.useState)(!1),o=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{(0,ne.Z)(e),a(!0),o.current=window.setTimeout((()=>{a(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(o.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",t,ae.copyButton,n&&ae.copyButtonCopied),onClick:i},r.createElement("span",{className:ae.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:ae.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:ae.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const le="wordWrapButtonIcon_MQXS",oe="wordWrapButtonEnabled_TBIH";function ie({className:e,onClick:t,isEnabled:n}){const a=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,l.Z)("clean-btn",e,n&&oe),"aria-label":a,title:a},r.createElement("svg",{className:le,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},se.apply(this,arguments)}function ce({children:e,className:t="",metastring:n,title:a,showLineNumbers:o,language:i}){const{prism:{defaultLanguage:s,magicComments:c}}=(0,W.L)();var u;const d=null!==(u=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,m=(0,p.p)(),g=function(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),l=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),i=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");a(n)}),[l]);return Q(l,i),(0,r.useEffect)((()=>{i()}),[e,i]),(0,r.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:o}}(),f=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(D))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||a,{lineClassNames:b,code:h}=M(e,{metastring:n,language:d,magicComments:c}),k=null!=o?o:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(X,{as:"div",className:(0,l.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},f&&r.createElement("div",{className:z.codeBlockTitle},f),r.createElement("div",{className:z.codeBlockContent},r.createElement(U.ZP,se({},U.lG,{theme:m,code:h,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:a})=>r.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,l.Z)(e,z.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(z.codeBlockLines,k&&z.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:a,classNames:b[t],showLineNumbers:k}))))))),r.createElement("div",{className:z.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&r.createElement(ie,{className:z.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),r.createElement(re,{className:z.codeButton,code:h}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},de.apply(this,arguments)}const me=(ge=function(e){var{children:t}=e,n=pe(e,["children"]);const a=(0,o.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?ce:F;return r.createElement(i,ue({key:String(a)},n),l)},function(e){return e.live?r.createElement(O,de({scope:B},e)):r.createElement(ge,de({},e))});var ge;function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function be(e){return r.createElement(me,fe({},e))}},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>g});n(27378);var a=n(35318),r=n(38269),l=n(61132),o=n(52605),i=n(82064);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={sidebar_position:3,slug:"/api/plugins/@docusaurus/plugin-content-pages"},p="\ud83d\udce6 plugin-content-pages",d={unversionedId:"api/plugins/plugin-content-pages",id:"version-2.0.0-beta.22/api/plugins/plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",description:"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/plugins/plugin-content-pages.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-pages",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-pages",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/api/plugins/@docusaurus/plugin-content-pages"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-blog"},next:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-client-redirects"}},m={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}],f={toc:g};function b(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)("wrapper",s({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"-plugin-content-pages"}),"\ud83d\udce6 plugin-content-pages"),(0,a.kt)("p",null,"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/creating-pages"}),"creating pages")," functionality."),(0,a.kt)("h2",s({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-content-pages\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-content-pages\n")))),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,a.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,a.kt)("h2",s({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Accepted fields:"),(0,a.kt)(o.Z,{mdxType:"APITable"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"path")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"'src/pages'")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"routeBasePath")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"'/'")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"URL route for the pages section of your site. ",(0,a.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"include")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"['**/*.{js,jsx,ts,tsx,md,mdx}']")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Matching files will be included and processed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"exclude")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"See example configuration")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No route will be created for matching files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mdxPageComponent")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"'@theme/MDXPage'")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Component used by each MDX page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"remarkPlugins")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Remark plugins passed to MDX.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"rehypePlugins")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Rehype plugins passed to MDX.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"beforeDefaultRemarkPlugins")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"beforeDefaultRehypePlugins")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."))))),(0,a.kt)("h3",s({},{id:"ex-config"}),"Example configuration"),(0,a.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,a.kt)(i.Z,{pluginName:"@docusaurus/plugin-content-pages",presetOptionName:"pages",code:"{\n  path: 'src/pages',\n  routeBasePath: '',\n  include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  mdxPageComponent: '@theme/MDXPage',\n  remarkPlugins: [require('remark-math')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n}",mdxType:"ConfigTabs"}),(0,a.kt)("h2",s({},{id:"i18n"}),"i18n"),(0,a.kt)("p",null,"Read the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/i18n/introduction"}),"i18n introduction")," first."),(0,a.kt)("h3",s({},{id:"translation-files-location"}),"Translation files location"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base path"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,a.kt)("a",s({parentName:"li"},{href:"/docusarus_test/docs/2.0.0-beta.22/cli#docusaurus-write-translations-sitedir"}),(0,a.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages"))),(0,a.kt)("h3",s({},{id:"example-file-system-structure"}),"Example file-system structure"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n")))}b.isMDXComponent=!0}}]);