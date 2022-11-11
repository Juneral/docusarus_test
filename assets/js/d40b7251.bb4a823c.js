"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27125],{61132:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(38944);const r="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),o=n(38944),r=n(29088),l=n(52196),i=n(77468),s=n(75527);const c="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:g,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===d?d:null!==(v=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[O,j]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=g){const e=w[g];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==O&&(E(t),j(a),null!=g&&N(g,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>C.push(e),onKeyDown:P,onClick:x},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,r.Z)();return a.createElement(d,p({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(78844),o=n(73919);function r(){const{prism:e}=(0,o.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}},55188:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(70124);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){return(0,a.v)(e,l(r({},t),{transforms:r({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378),o=n(29088);function r({children:e,fallback:t}){return(0,o.Z)()?a.createElement(a.Fragment,null,null==e?void 0:e()):null!=t?t:null}},93457:(e,t,n)=>{n.d(t,{Z:()=>he});var a={};n.r(a),n.d(a,{ButtonExample:()=>x});var o=n(27378),r=n(38944),l=n(29088),i=n(40935),s=n(36712),c=n(4423),u=n(94544),p=n(50016);const d="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",g="playgroundEditor_TySg",f="playgroundPreview_mApW";function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k({children:e}){return o.createElement("div",{className:(0,r.Z)(m)},e)}function v(){return o.createElement("div",null,"Loading...")}function y(){return o.createElement(o.Fragment,null,o.createElement(k,null,o.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),o.createElement("div",{className:f},o.createElement(u.Z,{fallback:o.createElement(v,null)},(()=>o.createElement(o.Fragment,null,o.createElement(i.i5,null),o.createElement(i.IF,null))))))}function w(){const e=(0,l.Z)();return o.createElement(i.uz,{key:String(e),className:g})}function N(){return o.createElement(o.Fragment,null,o.createElement(k,null,o.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),o.createElement(w,null))}function O(e){var t,{children:n,transformCode:a}=e,r=b(e,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:s}}=l,u=(0,p.p)();var m;const g=null!==(m=null===(t=r.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return o.createElement("div",{className:d},o.createElement(i.nu,h({code:n.replace(/\n$/,""),noInline:g,transformCode:null!=a?a:e=>`${e};`,theme:u},r),"top"===s?o.createElement(o.Fragment,null,o.createElement(y,null),o.createElement(N,null)):o.createElement(o.Fragment,null,o.createElement(N,null),o.createElement(y,null))))}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C.apply(this,arguments)}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){j(e,t,n[t])}))}return e}function x(e){return o.createElement("button",C({type:"button"},e,{style:E({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){P(e,t,n[t])}))}return e}({React:o},o,a);var S,B,I=n(89583),A=n(6324),_=n.n(A);const W=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),L=RegExp("\\{(?<range>[\\d,-]+)\\}"),D={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Z(e,t){const n=e.map((e=>{const{start:n,end:a}=D[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function M(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&L.test(r)){const e=r.match(L).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=_()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"],t);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"],t);case"html":return Z(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Z(["bash"],t);case"markdown":case"md":return Z(["html","jsx","bash"],t);default:return Z(Object.keys(D),t)}}(a,o),i=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<i.length;){const e=i[m].match(l);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?s[c[t]].range+=`${m},`:u[t]?s[u[t]].start=m:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${m-1},`),i.splice(m,1)}n=i.join("\n");const d={};return Object.entries(s).forEach((([e,{range:t}])=>{_()(t).forEach((t=>{var n;null!==(n=(S=d)[B=t])&&void 0!==n||(S[B]=[]),d[t].push(e)}))})),{lineClassNames:d,code:n}}const z="codeBlockContainer_jDV4";function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function q(e){var{as:t}=e,n=H(e,["as"]);const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,a])=>{const o=t[e];o&&"string"==typeof a&&(n[o]=a)})),n}((0,p.p)());return o.createElement(t,R({},n,{style:a,className:(0,r.Z)(n.className,z,I.k.common.codeBlock)}))}const $={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function F({children:e,className:t}){return o.createElement(q,{as:"pre",tabIndex:0,className:(0,r.Z)($.codeBlockStandalone,"thin-scrollbar",t)},o.createElement("code",{className:$.codeBlockLines},e))}var V=n(73919),U=n(51114);const G={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Y(e,t){const[n,a]=(0,o.useState)(),r=(0,o.useCallback)((()=>{var t;a(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n=G){const a=(0,U.zX)(t),r=(0,U.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,r),()=>t.disconnect()}),[e,a,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Q=n(55620);const X="codeLine_qRmp",J="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:a,getTokenProps:l}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=a({line:e,className:(0,r.Z)(t,n&&X)}),s=e.map(((e,t)=>o.createElement("span",ee({key:t},l({token:e,key:t})))));return o.createElement("span",ee({},i),n?o.createElement(o.Fragment,null,o.createElement("span",{className:J}),o.createElement("span",{className:K},s)):s,o.createElement("br",null))}var ne=n(5568);const ae={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function oe({code:e,className:t}){const[n,a]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,ne.Z)(e),a(!0),l.current=window.setTimeout((()=>{a(!1)}),1e3)}),[e]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),o.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",t,ae.copyButton,n&&ae.copyButtonCopied),onClick:i},o.createElement("span",{className:ae.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:ae.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:ae.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const re="wordWrapButtonIcon_MQXS",le="wordWrapButtonEnabled_TBIH";function ie({className:e,onClick:t,isEnabled:n}){const a=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:t,className:(0,r.Z)("clean-btn",e,n&&le),"aria-label":a,title:a},o.createElement("svg",{className:re,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},se.apply(this,arguments)}function ce({children:e,className:t="",metastring:n,title:a,showLineNumbers:l,language:i}){const{prism:{defaultLanguage:s,magicComments:c}}=(0,V.L)();var u;const d=null!==(u=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,m=(0,p.p)(),g=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");a(n)}),[r]);return Y(r,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),f=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(W))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||a,{lineClassNames:h,code:b}=M(e,{metastring:n,language:d,magicComments:c}),k=null!=l?l:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return o.createElement(q,{as:"div",className:(0,r.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},f&&o.createElement("div",{className:$.codeBlockTitle},f),o.createElement("div",{className:$.codeBlockContent},o.createElement(Q.ZP,se({},Q.lG,{theme:m,code:b,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:a})=>o.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,r.Z)(e,$.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,r.Z)($.codeBlockLines,k&&$.codeBlockLinesWithNumbering)},t.map(((e,t)=>o.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:a,classNames:h[t],showLineNumbers:k}))))))),o.createElement("div",{className:$.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&o.createElement(ie,{className:$.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),o.createElement(oe,{className:$.codeButton,code:b}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},de.apply(this,arguments)}const me=(ge=function(e){var{children:t}=e,n=pe(e,["children"]);const a=(0,l.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof r?ce:F;return o.createElement(i,ue({key:String(a)},n),r)},function(e){return e.live?o.createElement(O,de({scope:T},e)):o.createElement(ge,de({},e))});var ge;function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function he(e){return o.createElement(me,fe({},e))}},10795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(27378);var a=n(35318),o=n(38269),r=n(61132),l=n(93457);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},u="\ud83d\udce6 plugin-pwa",p={unversionedId:"api/plugins/plugin-pwa",id:"version-2.0.0-beta.22/api/plugins/plugin-pwa",title:"\ud83d\udce6 plugin-pwa",description:"Docusaurus Plugin to add PWA support using Workbox. This plugin generates a Service Worker in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/plugins/plugin-pwa.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-pwa",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-pwa",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-ideal-image"},next:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docusarus_test/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-sitemap"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Progressive Web App",id:"progressive-web-app",level:2},{value:"App installation support",id:"app-installation-support",level:2},{value:"Offline mode (precaching)",id:"offline-mode-precaching",level:2},{value:"Options",id:"options",level:2},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",level:3},{value:"<code>pwaHead</code>",id:"pwahead",level:3},{value:"<code>swCustom</code>",id:"swcustom",level:3},{value:"<code>swRegister</code>",id:"swregister",level:3},{value:"Manifest example",id:"manifest-example",level:2},{value:"Customizing reload popup",id:"customizing-reload-popup",level:2}],g={toc:m};function f(e){var{components:t}=e,c=s(e,["components"]);return(0,a.kt)("wrapper",i({},g,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"-plugin-pwa"}),"\ud83d\udce6 plugin-pwa"),(0,a.kt)("p",null,"Docusaurus Plugin to add PWA support using ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox"}),"Workbox"),". This plugin generates a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers"}),"Service Worker")," in production build only, and allows you to create fully PWA-compliant documentation site with offline and installation support."),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-pwa\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-pwa\n")))),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://web.dev/add-manifest/"}),"PWA manifest")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"./static/manifest.json"),"."),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," with a minimal PWA config, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        debug: true,\n        offlineModeActivationStrategies: [\n          'appInstalled',\n          'standalone',\n          'queryString',\n        ],\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json', // your PWA manifest\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n        ],\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h2",i({},{id:"progressive-web-app"}),"Progressive Web App"),(0,a.kt)("p",null,"Having a service worker installed is not enough to make your application a PWA. You'll need to at least include a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"}),"Web App Manifest")," and have the correct tags in ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," (",(0,a.kt)("a",i({parentName:"p"},{href:"#pwahead"}),"Options > pwaHead"),")."),(0,a.kt)("p",null,"After deployment, you can use ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.google.com/web/tools/lighthouse"}),"Lighthouse")," to run an audit on your site."),(0,a.kt)("p",null,"For a more exhaustive list of what it takes for your site to be a PWA, refer to the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.google.com/web/progressive-web-apps/checklist"}),"PWA Checklist")),(0,a.kt)("h2",i({},{id:"app-installation-support"}),"App installation support"),(0,a.kt)("p",null,"If your browser supports it, you should be able to install a Docusaurus site as an app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pwa_install.gif",src:n(11128).Z,width:"640",height:"505"})),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"App installation requires the HTTPS protocol and a valid manifest.")),(0,a.kt)("h2",i({},{id:"offline-mode-precaching"}),"Offline mode (precaching)"),(0,a.kt)("p",null,"We enable users to browse a Docusaurus site offline, by using service-worker precaching."),(0,a.kt)("blockquote",null,(0,a.kt)("h3",i({parentName:"blockquote"},{id:"what-is-precaching"}),(0,a.kt)("a",i({parentName:"h3"},{href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching"}),"What is Precaching?")),(0,a.kt)("p",{parentName:"blockquote"},'One feature of service workers is the ability to save a set of files to the cache when the service worker is installing. This is often referred to as "precaching", since you are caching content ahead of the service worker being used.'),(0,a.kt)("p",{parentName:"blockquote"},"The main reason for doing this is that it gives developers control over the cache, meaning they can determine when and how long a file is cached as well as serve it to the browser without going to the network, meaning it can be used to create web apps that work offline."),(0,a.kt)("p",{parentName:"blockquote"},"Workbox takes a lot of the heavy lifting out of precaching by simplifying the API and ensuring assets are downloaded efficiently.")),(0,a.kt)("p",null,"By default, offline mode is enabled when the site is installed as an app. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"offlineModeActivationStrategies")," option for details."),(0,a.kt)("p",null,"After the site has been precached, the service worker will serve cached responses for later visits. When a new build is deployed along with a new service worker, the new one will begin installing and eventually move to a waiting state. During this waiting state, a reload popup will show and ask the user to reload the page for new content. Until the user either clears the application cache or clicks the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," button on the popup, the service worker will continue serving the old content."),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Offline mode / precaching requires downloading all the static assets of the site ahead of time, and can consume unnecessary bandwidth. It may not be a good idea to activate it for all kind of sites.")),(0,a.kt)("h2",i({},{id:"options"}),"Options"),(0,a.kt)("h3",i({},{id:"debug"}),(0,a.kt)("inlineCode",{parentName:"h3"},"debug")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Turn debug mode on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Workbox logs"),(0,a.kt)("li",{parentName:"ul"},"Additional Docusaurus logs"),(0,a.kt)("li",{parentName:"ul"},"Unoptimized SW file output"),(0,a.kt)("li",{parentName:"ul"},"Source maps")),(0,a.kt)("h3",i({},{id:"offlinemodeactivationstrategies"}),(0,a.kt)("inlineCode",{parentName:"h3"},"offlineModeActivationStrategies")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"('appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always')[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"['appInstalled', 'queryString', 'standalone']"))),(0,a.kt)("p",null,"Strategies used to turn the offline mode on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appInstalled"),": activates for users having installed the site as an app (not 100% reliable)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"standalone"),": activates for users running the app as standalone (often the case once a PWA is installed)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryString"),": activates if queryString contains ",(0,a.kt)("inlineCode",{parentName:"li"},"offlineMode=true")," (convenient for PWA debugging)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mobile"),": activates for mobile users (width <= 996px)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"saveData"),": activates for users with ",(0,a.kt)("inlineCode",{parentName:"li"},"navigator.connection.saveData === true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"always"),": activates for all users")),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Use this carefully: some users may not like to be forced to use the offline mode.")),(0,a.kt)("admonition",i({},{type:"danger"}),(0,a.kt)("p",{parentName:"admonition"},"It is not possible to detect if an as a PWA in a very reliable way."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"appinstalled")," event has been ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/w3c/manifest/pull/836"}),"removed from the specification"),", and the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://web.dev/get-installed-related-apps/"}),(0,a.kt)("inlineCode",{parentName:"a"},"navigator.getInstalledRelatedApps()"))," API is only supported in recent Chrome versions and require ",(0,a.kt)("inlineCode",{parentName:"p"},"related_applications")," declared in the manifest."),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",i({parentName:"p"},{href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/"}),(0,a.kt)("inlineCode",{parentName:"a"},"standalone")," strategy")," is a nice fallback to activate the offline mode (at least when running the installed app).")),(0,a.kt)("h3",i({},{id:"injectmanifestconfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"injectManifestConfig")),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.injectManifest"}),"Workbox options")," to pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"workbox.injectManifest()"),". This gives you control over which assets will be precached, and be available offline."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"InjectManifestOptions")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"))),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (HTML, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ['**/*.{pdf,docx,xlsx}'],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"pwahead"}),(0,a.kt)("inlineCode",{parentName:"h3"},"pwaHead")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"({ tagName: string; [attributeName: string]: string })[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"Array of objects containing ",(0,a.kt)("inlineCode",{parentName:"p"},"tagName")," and key-value pairs for attributes to inject into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," tag. Technically you can inject any head tag through this, but it's ideally used for tags to make your site PWA compliant. Here's a list of tag to make your app fully compliant:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-pwa',\n      {\n        pwaHead: [\n          {\n            tagName: 'link',\n            rel: 'icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'manifest',\n            href: '/manifest.json',\n          },\n          {\n            tagName: 'meta',\n            name: 'theme-color',\n            content: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-capable',\n            content: 'yes',\n          },\n          {\n            tagName: 'meta',\n            name: 'apple-mobile-web-app-status-bar-style',\n            content: '#000',\n          },\n          {\n            tagName: 'link',\n            rel: 'apple-touch-icon',\n            href: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'link',\n            rel: 'mask-icon',\n            href: '/img/docusaurus.svg',\n            color: 'rgb(37, 194, 160)',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileImage',\n            content: '/img/docusaurus.png',\n          },\n          {\n            tagName: 'meta',\n            name: 'msapplication-TileColor',\n            content: '#000',\n          },\n        ],\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"swcustom"}),(0,a.kt)("inlineCode",{parentName:"h3"},"swCustom")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | undefined")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"Useful for additional Workbox rules. You can do whatever a service worker can do here, and use the full power of workbox libraries. The code is transpiled, so you can use modern ES6+ syntax here."),(0,a.kt)("p",null,"For example, to cache files from external routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"import {registerRoute} from 'workbox-routing';\nimport {StaleWhileRevalidate} from 'workbox-strategies';\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [\n      /graph\\.facebook\\.com\\/.*\\/picture/,\n      /netlify\\.com\\/img/,\n      /avatars1\\.githubusercontent/,\n    ].some((regex) => context.url.href.match(regex));\n  }, new StaleWhileRevalidate());\n}\n")),(0,a.kt)("p",null,"The module should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," function export, and receives some params."),(0,a.kt)("h3",i({},{id:"swregister"}),(0,a.kt)("inlineCode",{parentName:"h3"},"swRegister")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string | false")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'docusaurus-plugin-pwa/src/registerSW.js'"))),(0,a.kt)("p",null,"Adds an entry before the Docusaurus app so that registration can happen before the app runs. The default ",(0,a.kt)("inlineCode",{parentName:"p"},"registerSW.js")," file is enough for simple registration."),(0,a.kt)("p",null,"Passing ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," will disable registration entirely."),(0,a.kt)("h2",i({},{id:"manifest-example"}),"Manifest example"),(0,a.kt)("p",null,"The Docusaurus site manifest can serve as an inspiration:"),(0,a.kt)(l.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(n(8047),null,2)),(0,a.kt)("h2",i({},{id:"customizing-reload-popup"}),"Customizing reload popup"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/PwaReloadPopup")," component is rendered when a new service worker is waiting to be installed, and we suggest a reload to the user. You can ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/swizzling"}),"swizzle")," this component and implement your own UI. It will receive an ",(0,a.kt)("inlineCode",{parentName:"p"},"onReload")," callback as props, which should be called when the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," button is clicked. This will tell the service worker to install the waiting service worker and reload the page."),(0,a.kt)("p",null,"The default theme includes an implementation for the reload popup and uses ",(0,a.kt)("a",i({parentName:"p"},{href:"https://infima.dev/docs/components/alert"}),"Infima Alerts"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pwa_reload.gif",src:n(68188).Z,width:"1000",height:"502"})),(0,a.kt)("p",null,"Your component can render ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", but this is not recommended: users won't have a way to get up-to-date content."))}f.isMDXComponent=!0},11128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},68188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},8047:e=>{e.exports=JSON.parse('{"name":"Docusaurus v2","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);