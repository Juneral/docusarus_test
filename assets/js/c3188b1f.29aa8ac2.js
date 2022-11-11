"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71546],{61132:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(27378),o=n(38944);const a="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(27378),o=n(38944),a=n(29088),l=n(52196),c=n(77468),s=n(75527);const i="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:a,defaultValue:d,values:m,groupId:f,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const k=null===d?d:null!==(y=null!=d?d:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:O}=(0,c.U)(),[j,N]=(0,r.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=E[f];null!=e&&e!==j&&h.some((t=>t.value===e))&&N(e)}const B=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==j&&(C(t),N(r),null!=f&&O(f,String(r)))},P=e=>{let t=null;switch(e.key){case"Enter":B(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;var n;t=null!==(n=w[r])&&void 0!==n?n:w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;var r;t=null!==(r=w[n])&&void 0!==r?r:w[w.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},b)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>w.push(e),onKeyDown:P,onClick:B},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":j===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,a.Z)();return r.createElement(d,p({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(78844),o=n(73919);function a(){const{prism:e}=(0,o.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},55188:(e,t,n)=>{n.d(t,{v:()=>c});var r=n(70124);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){return(0,r.v)(e,l(a({},t),{transforms:a({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(27378),o=n(29088);function a({children:e,fallback:t}){return(0,o.Z)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},82064:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(27378),o=n(13415),a=n(92053),l=n(36712),c=n(38269),s=n(61132),i=n(93457);function u({code:e,pluginName:t,presetOptionName:n}){const u=(0,a.zu)(undefined).path;return r.createElement(c.Z,{groupId:"api-config-ex"},r.createElement(s.Z,{value:"preset",label:(0,l.I)({message:"Preset options"})},r.createElement("p",null,r.createElement(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:r.createElement(o.Z,{to:`${u}/using-plugins#docusauruspreset-classic`},r.createElement(l.Z,null,"preset options"))}},"If you use a preset, configure this plugin through the {presetLink}:")),r.createElement("p",null,r.createElement(i.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${n}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`))),r.createElement(s.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"})},r.createElement("p",null,r.createElement(l.Z,null,"If you are using a standalone plugin, provide options directly to the plugin:")),r.createElement("p",null,r.createElement(i.Z,{language:"js",title:"docusaurus.config.js"},`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`))))}},93457:(e,t,n)=>{n.d(t,{Z:()=>ge});var r={};n.r(r),n.d(r,{ButtonExample:()=>B});var o=n(27378),a=n(38944),l=n(29088),c=n(40935),s=n(36712),i=n(4423),u=n(94544),p=n(50016);const d="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",f="playgroundEditor_TySg",b="playgroundPreview_mApW";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v({children:e}){return o.createElement("div",{className:(0,a.Z)(m)},e)}function y(){return o.createElement("div",null,"Loading...")}function k(){return o.createElement(o.Fragment,null,o.createElement(v,null,o.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),o.createElement("div",{className:b},o.createElement(u.Z,{fallback:o.createElement(y,null)},(()=>o.createElement(o.Fragment,null,o.createElement(c.i5,null),o.createElement(c.IF,null))))))}function E(){const e=(0,l.Z)();return o.createElement(c.uz,{key:String(e),className:f})}function O(){return o.createElement(o.Fragment,null,o.createElement(v,null,o.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),o.createElement(E,null))}function j(e){var t,{children:n,transformCode:r}=e,a=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,i.Z)(),{liveCodeBlock:{playgroundPosition:s}}=l,u=(0,p.p)();var m;const f=null!==(m=null===(t=a.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return o.createElement("div",{className:d},o.createElement(c.nu,g({code:n.replace(/\n$/,""),noInline:f,transformCode:null!=r?r:e=>`${e};`,theme:u},a),"top"===s?o.createElement(o.Fragment,null,o.createElement(k,null),o.createElement(O,null)):o.createElement(o.Fragment,null,o.createElement(O,null),o.createElement(k,null))))}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}function B(e){return o.createElement("button",w({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}({React:o},o,r);var T,I,S=n(89583),Z=n(6324),_=n.n(Z);const L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),D=RegExp("\\{(?<range>[\\d,-]+)\\}"),A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function $(e,t){const n=e.map((e=>{const{start:n,end:r}=A[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function M(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&D.test(a)){const e=a.match(D).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=_()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"],t);case"jsx":case"tsx":return $(["js","jsBlock","jsx"],t);case"html":return $(["js","jsBlock","html"],t);case"python":case"py":case"bash":return $(["bash"],t);case"markdown":case"md":return $(["html","jsx","bash"],t);default:return $(Object.keys(A),t)}}(r,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<c.length;){const e=c[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${m},`:u[t]?s[u[t]].start=m:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((([e,{range:t}])=>{_()(t).forEach((t=>{var n;null!==(n=(T=d)[I=t])&&void 0!==n||(T[I]=[]),d[t].push(e)}))})),{lineClassNames:d,code:n}}const R="codeBlockContainer_jDV4";function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function z(e){var{as:t}=e,n=V(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}((0,p.p)());return o.createElement(t,H({},n,{style:r,className:(0,a.Z)(n.className,R,S.k.common.codeBlock)}))}const F={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return o.createElement(z,{as:"pre",tabIndex:0,className:(0,a.Z)(F.codeBlockStandalone,"thin-scrollbar",t)},o.createElement("code",{className:F.codeBlockLines},e))}var G=n(73919),q=n(51114);const Q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function X(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n=Q){const r=(0,q.zX)(t),a=(0,q.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var U=n(55620);const Y="codeLine_qRmp",J="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:l}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const c=r({line:e,className:(0,a.Z)(t,n&&Y)}),s=e.map(((e,t)=>o.createElement("span",ee({key:t},l({token:e,key:t})))));return o.createElement("span",ee({},c),n?o.createElement(o.Fragment,null,o.createElement("span",{className:J}),o.createElement("span",{className:K},s)):s,o.createElement("br",null))}var ne=n(5568);const re={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function oe({code:e,className:t}){const[n,r]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{(0,ne.Z)(e),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),o.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,re.copyButton,n&&re.copyButtonCopied),onClick:c},o.createElement("span",{className:re.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:re.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:re.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const ae="wordWrapButtonIcon_MQXS",le="wordWrapButtonEnabled_TBIH";function ce({className:e,onClick:t,isEnabled:n}){const r=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",e,n&&le),"aria-label":r,title:r},o.createElement("svg",{className:ae,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ie({children:e,className:t="",metastring:n,title:r,showLineNumbers:l,language:c}){const{prism:{defaultLanguage:s,magicComments:i}}=(0,G.L)();var u;const d=null!==(u=null!=c?c:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,m=(0,p.p)(),f=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return X(a,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(L))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:g,code:h}=M(e,{metastring:n,language:d,magicComments:i}),v=null!=l?l:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return o.createElement(z,{as:"div",className:(0,a.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},b&&o.createElement("div",{className:F.codeBlockTitle},b),o.createElement("div",{className:F.codeBlockContent},o.createElement(U.ZP,se({},U.lG,{theme:m,code:h,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>o.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,a.Z)(e,F.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,a.Z)(F.codeBlockLines,v&&F.codeBlockLinesWithNumbering)},t.map(((e,t)=>o.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:g[t],showLineNumbers:v}))))))),o.createElement("div",{className:F.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&o.createElement(ce,{className:F.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),o.createElement(oe,{className:F.codeButton,code:h}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}const me=(fe=function(e){var{children:t}=e,n=pe(e,["children"]);const r=(0,l.Z)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof a?ie:W;return o.createElement(c,ue({key:String(r)},n),a)},function(e){return e.live?o.createElement(j,de({scope:x},e)):o.createElement(fe,de({},e))});var fe;function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function ge(e){return o.createElement(me,be({},e))}},82499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});n(27378);var r=n(35318),o=n(38269),a=n(61132),l=n(82064);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},u="\ud83d\udce6 theme-classic",p={unversionedId:"api/themes/theme-classic",id:"api/themes/theme-classic",title:"\ud83d\udce6 theme-classic",description:"The classic theme for Docusaurus.",source:"@site/docs/api/themes/theme-classic.md",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-classic",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docusarus_test/docs/next/api/themes/configuration"},next:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-live-codeblock"}},d={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],f=(b="APITable",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",c({},e))});var b;const g={toc:m};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"-theme-classic"}),"\ud83d\udce6 theme-classic"),(0,r.kt)("p",null,"The classic theme for Docusaurus."),(0,r.kt)("p",null,"You can refer to the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docusarus_test/docs/next/api/themes/configuration"}),"theme configuration page")," for more details on the configuration."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-classic\n"))),(0,r.kt)(a.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-classic\n")))),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"If you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")),(0,r.kt)("h2",c({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(f,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Option"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"customCss")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string[] ","|"," string")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Stylesheets to be imported globally as ",(0,r.kt)("a",c({parentName:"td"},{href:"/docusarus_test/docs/next/advanced/client#client-modules"}),"client modules"),". Relative paths are resolved against the site directory."))))),(0,r.kt)("admonition",c({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Most configuration for the theme is done in ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig"),", which can be found in ",(0,r.kt)("a",c({parentName:"p"},{href:"/docusarus_test/docs/next/api/themes/configuration"}),"theme configuration"),".")),(0,r.kt)("h3",c({},{id:"ex-config"}),"Example configuration"),(0,r.kt)("p",null,"You can configure this theme through preset options or plugin options."),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)(l.Z,{pluginName:"@docusaurus/theme-classic",presetOptionName:"theme",code:"{\n  customCss: require.resolve('./src/css/custom.css'),\n}",mdxType:"ConfigTabs"}))}h.isMDXComponent=!0}}]);