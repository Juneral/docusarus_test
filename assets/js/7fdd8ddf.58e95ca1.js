"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76581],{4567:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(27378);var o=n(35318),r=n(93457),l=n(6698),a=n(38269),s=n(61132);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={},d="Code block tests",p={type:"mdx",permalink:"/tests/pages/code-block-tests",source:"@site/_dogfooding/_pages tests/code-block-tests.mdx",title:"Code block tests",description:"See:",frontMatter:{}},m=[{value:"<code>pre</code>",id:"pre",level:2},{value:"<code>pre &gt; string</code>",id:"pre--string",level:3},{value:"<code>pre &gt; string[]</code>",id:"pre--string-1",level:3},{value:"<code>pre &gt; element</code>",id:"pre--element",level:3},{value:"<code>pre &gt; element[]</code>",id:"pre--element-1",level:3},{value:"<code>pre &gt; code &gt; element</code>",id:"pre--code--element",level:3},{value:"<code>code</code>",id:"code",level:2},{value:"<code>code &gt; string</code>",id:"code--string",level:3},{value:"<code>code &gt; string[]</code>",id:"code--string-1",level:3},{value:"<code>code &gt; element</code>",id:"code--element",level:3},{value:"<code>code &gt; element[]</code>",id:"code--element-1",level:3},{value:"<code>CodeBlock</code>",id:"codeblock",level:2},{value:"<code>CodeBlock &gt; string</code>",id:"codeblock--string",level:3},{value:"<code>CodeBlock &gt; string[]</code>",id:"codeblock--string-1",level:3},{value:"<code>CodeBlock &gt; element</code>",id:"codeblock--element",level:3},{value:"<code>CodeBlock &gt; element[]</code>",id:"codeblock--element-1",level:3},{value:"Code blocks with line numbering tests",id:"code-blocks-with-line-numbering-tests",level:2},{value:"Code block wrapping tests",id:"code-block-wrapping-tests",level:2}],b={toc:m};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",c({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",c({},{id:"code-block-tests"}),"Code block tests"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-java"}),'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')),(0,o.kt)("p",null,"See:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/1584"}),"https://github.com/facebook/docusaurus/pull/1584")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/3749"}),"https://github.com/facebook/docusaurus/pull/3749")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/docusaurus/pull/6177"}),"https://github.com/facebook/docusaurus/pull/6177"))),(0,o.kt)("h2",c({},{id:"pre"}),(0,o.kt)("inlineCode",{parentName:"h2"},"pre")),(0,o.kt)("h3",c({},{id:"pre--string"}),(0,o.kt)("inlineCode",{parentName:"h3"},"pre > string")),(0,o.kt)("p",null,"Multi-line text inside ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," will turn into one-liner, but it's okay (",(0,o.kt)("a",c({parentName:"p"},{href:"https://github.com/mdx-js/mdx/issues/1095"}),"https://github.com/mdx-js/mdx/issues/1095"),")"),(0,o.kt)("pre",null,"1 2 3"),(0,o.kt)("pre",null,"1 2 3"),(0,o.kt)("h3",c({},{id:"pre--string-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"pre > string[]")),(0,o.kt)("pre",null,"1","\n","2","\n","3","\n"),(0,o.kt)("h3",c({},{id:"pre--element"}),(0,o.kt)("inlineCode",{parentName:"h3"},"pre > element")),(0,o.kt)("pre",null,(0,o.kt)(l.Z,{mdxType:"BrowserWindow"},"Lol bro")),(0,o.kt)("h3",c({},{id:"pre--element-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"pre > element[]")),(0,o.kt)("pre",null,(0,o.kt)("a",{href:"/"},"Front page"),"\n",(0,o.kt)("strong",null,"Input: "),'a = "abcd", b = "cdabcdab"',"\n",(0,o.kt)("strong",null,"Output: "),"3","\n",(0,o.kt)("strong",null,"Explanation: "),'a after three repetitions become "ab',(0,o.kt)("strong",null,"cdabcdab"),'cd", at which time b is a substring.',"\n"),(0,o.kt)("h3",c({},{id:"pre--code--element"}),(0,o.kt)("inlineCode",{parentName:"h3"},"pre > code > element")),(0,o.kt)("pre",null,(0,o.kt)("code",null,(0,o.kt)("b",null,"Hey bro"))),(0,o.kt)("h2",c({},{id:"code"}),(0,o.kt)("inlineCode",{parentName:"h2"},"code")),(0,o.kt)("h3",c({},{id:"code--string"}),(0,o.kt)("inlineCode",{parentName:"h3"},"code > string")),(0,o.kt)("code",null,"1 2 3"),(0,o.kt)("code",null,"link:\n  title: front page\n  path: /docs/"),(0,o.kt)("h3",c({},{id:"code--string-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"code > string[]")),(0,o.kt)("code",null,"link:"," \n","  ","title: front page","\n","  ","path: /docs/","\n"),(0,o.kt)("h3",c({},{id:"code--element"}),(0,o.kt)("inlineCode",{parentName:"h3"},"code > element")),(0,o.kt)("code",null,(0,o.kt)(l.Z,{mdxType:"BrowserWindow"},"Lol bro")),(0,o.kt)("h3",c({},{id:"code--element-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"code > element[]")),(0,o.kt)("code",null,(0,o.kt)("a",{href:"/"},"Front page"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Input: "),'a = "abcd", b = "cdabcdab"',(0,o.kt)("br",null),(0,o.kt)("strong",null,"Output: "),"3",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Explanation: "),'a after three repetitions become "ab',(0,o.kt)("strong",null,"cdabcdab"),'cd", at which time b is a substring.',(0,o.kt)("br",null)),(0,o.kt)("h2",c({},{id:"codeblock"}),(0,o.kt)("inlineCode",{parentName:"h2"},"CodeBlock")),(0,o.kt)("h3",c({},{id:"codeblock--string"}),(0,o.kt)("inlineCode",{parentName:"h3"},"CodeBlock > string")),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"1 2 3"),(0,o.kt)(r.Z,{className:"language-yaml",title:"test",mdxType:"CodeBlock"},"link:\n  title: front page\n  path: /docs/"),(0,o.kt)("h3",c({},{id:"codeblock--string-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"CodeBlock > string[]")),(0,o.kt)(r.Z,{className:"language-yaml",title:"test",mdxType:"CodeBlock"},"link:","\n","  ","title: front page","\n","  ","path: /docs/","\n"),(0,o.kt)("h3",c({},{id:"codeblock--element"}),(0,o.kt)("inlineCode",{parentName:"h3"},"CodeBlock > element")),(0,o.kt)(r.Z,{className:"language-yaml",title:"test",mdxType:"CodeBlock"},(0,o.kt)(l.Z,{mdxType:"BrowserWindow"},"Lol bro")),(0,o.kt)("h3",c({},{id:"codeblock--element-1"}),(0,o.kt)("inlineCode",{parentName:"h3"},"CodeBlock > element[]")),(0,o.kt)(r.Z,{className:"language-yaml",title:"test",mdxType:"CodeBlock"},(0,o.kt)("a",{href:"/"},"Front page"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Input: "),'a = "abcd", b = "cdabcdab"',(0,o.kt)("br",null),(0,o.kt)("strong",null,"Output: "),"3",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Explanation: "),'a after three repetitions become "ab',(0,o.kt)("strong",null,"cdabcdab"),'cd", at which time b is a substring.',(0,o.kt)("br",null)),(0,o.kt)("h2",c({},{id:"code-blocks-with-line-numbering-tests"}),"Code blocks with line numbering tests"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),'function PageLayout(props) {\n  // highlight-next-line\n  return <Layout title="Awesome Docusaurus page" description="Test Test Test Test Test Test Test Test Test Test Test Test Test Test ">;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0}),'function PageLayout(props) {\n  // highlight-next-line\n  return <Layout title="Awesome Docusaurus page" description="Test Test Test Test Test Test Test Test Test Test Test Test Test Test ">;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"{1,3,6} showLineNumbers","{1,3,6}":!0,showLineNumbers:!0}),"function PageLayout(props) {\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n}\n")),(0,o.kt)("h2",c({},{id:"code-block-wrapping-tests"}),"Code block wrapping tests"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'mkdir this_is_a_loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong_string_to_test_code_block_wrapping\necho "this is a long string made up of many separate words that should be broken between words when possible"\ncurl https://docusaurus.io/tests/pages/code-block-tests\n')),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"short-tab-1",label:"Short tab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'echo "hi"\n'))),(0,o.kt)(s.Z,{value:"long-tab",label:"Long tab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"echo this will test whether a long string that is initially hidden will have the option to wrap when made visible\n"))),(0,o.kt)(s.Z,{value:"short-tab-2",label:"Short tab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"rm short_initially_hidden_string\n")))),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"long-tab",label:"Long tab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"echo medium_length_string_will_have_the_option_to_wrap_after_window_resized_while_it_is_hidden\n"))),(0,o.kt)(s.Z,{value:"short-tab",label:"Short tab",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'echo "short_initially_hidden_string"\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>\n        This is a React page. Let's make this sentence bit long. Some more words\n        to make sure... Some more words to make sure... Some more words to make\n        sure...\n      </p>\n    </Layout>\n  );\n}\n")))}g.isMDXComponent=!0},61132:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(27378),r=n(38944);const l="tabItem_pnkT";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return o.createElement("div",a({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(27378),r=n(38944),l=n(29088),a=n(52196),s=n(77468),c=n(75527);const i="tabList_Qoir",u="tabItem_AQgk";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:b,className:g}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,a.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===p?p:null!==(v=null!=p?p:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,s.U)(),[N,E]=(0,o.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=b){const e=T[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&E(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),o=k[n].value;o!==N&&(j(t),E(o),null!=b&&w(b,String(o)))},B=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const o=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[o])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var o;t=null!==(o=O[n])&&void 0!==o?o:O[O.length-1];break}}null==t||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},k.map((({value:e,label:t,attributes:n})=>o.createElement("li",d({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:B,onClick:C},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,d({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>l});var o=n(78844),r=n(73919);function l(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,l=e.darkTheme||n;return"dark"===t?l:n}},55188:(e,t,n)=>{n.d(t,{v:()=>s});var o=n(70124);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){return(0,o.v)(e,a(l({},t),{transforms:l({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(27378),r=n(29088);function l({children:e,fallback:t}){return(0,r.Z)()?o.createElement(o.Fragment,null,null==e?void 0:e()):null!=t?t:null}},6698:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(27378),r=n(38944);const l="browserWindow_my1Q",a="browserWindowHeader_jXSR",s="buttons_uHc7",c="browserWindowAddressBar_Pd8y",i="dot_giz1",u="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";function m({children:e,minHeight:t,url:n="http://localhost:3000"}){return o.createElement("div",{className:l,style:{minHeight:t}},o.createElement("div",{className:a},o.createElement("div",{className:s},o.createElement("span",{className:i,style:{background:"#f25f58"}}),o.createElement("span",{className:i,style:{background:"#fbbe3c"}}),o.createElement("span",{className:i,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,r.Z)(c,"text--truncate")},n),o.createElement("div",{className:u},o.createElement("div",null,o.createElement("span",{className:d}),o.createElement("span",{className:d}),o.createElement("span",{className:d})))),o.createElement("div",{className:p},e))}},93457:(e,t,n)=>{n.d(t,{Z:()=>he});var o={};n.r(o),n.d(o,{ButtonExample:()=>C});var r=n(27378),l=n(38944),a=n(29088),s=n(40935),c=n(36712),i=n(4423),u=n(94544),d=n(50016);const p="playgroundContainer_6Ior",m="playgroundHeader_Tvsk",b="playgroundEditor_TySg",g="playgroundPreview_mApW";function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f({children:e}){return r.createElement("div",{className:(0,l.Z)(m)},e)}function v(){return r.createElement("div",null,"Loading...")}function y(){return r.createElement(r.Fragment,null,r.createElement(f,null,r.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:g},r.createElement(u.Z,{fallback:r.createElement(v,null)},(()=>r.createElement(r.Fragment,null,r.createElement(s.i5,null),r.createElement(s.IF,null))))))}function T(){const e=(0,a.Z)();return r.createElement(s.uz,{key:String(e),className:b})}function w(){return r.createElement(r.Fragment,null,r.createElement(f,null,r.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(T,null))}function N(e){var t,{children:n,transformCode:o}=e,l=k(e,["children","transformCode"]);const{siteConfig:{themeConfig:a}}=(0,i.Z)(),{liveCodeBlock:{playgroundPosition:c}}=a,u=(0,d.p)();var m;const b=null!==(m=null===(t=l.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==m&&m;return r.createElement("div",{className:p},r.createElement(s.nu,h({code:n.replace(/\n$/,""),noInline:b,transformCode:null!=o?o:e=>`${e};`,theme:u},l),"top"===c?r.createElement(r.Fragment,null,r.createElement(y,null),r.createElement(w,null)):r.createElement(r.Fragment,null,r.createElement(w,null),r.createElement(y,null))))}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){E(e,t,n[t])}))}return e}function C(e){return r.createElement("button",O({type:"button"},e,{style:j({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){B(e,t,n[t])}))}return e}({React:r},r,o);var x,L,P=n(89583),S=n(6324),Z=n.n(S);const I=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),A=RegExp("\\{(?<range>[\\d,-]+)\\}"),W={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function D(e,t){const n=e.map((e=>{const{start:n,end:o}=W[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function H(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:l}=t;if(l&&A.test(l)){const e=l.match(A).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=Z()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"],t);case"jsx":case"tsx":return D(["js","jsBlock","jsx"],t);case"html":return D(["js","jsBlock","html"],t);case"python":case"py":case"bash":return D(["bash"],t);case"markdown":case"md":return D(["html","jsx","bash"],t);default:return D(Object.keys(W),t)}}(o,r),s=n.split("\n"),c=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let m=0;m<s.length;){const e=s[m].match(a);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${m},`:u[t]?c[u[t]].start=m:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${m-1},`),s.splice(m,1)}n=s.join("\n");const p={};return Object.entries(c).forEach((([e,{range:t}])=>{Z()(t).forEach((t=>{var n;null!==(n=(x=p)[L=t])&&void 0!==n||(x[L]=[]),p[t].push(e)}))})),{lineClassNames:p,code:n}}const R="codeBlockContainer_jDV4";function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},M.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function F(e){var{as:t}=e,n=$(e,["as"]);const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,o])=>{const r=t[e];r&&"string"==typeof o&&(n[r]=o)})),n}((0,d.p)());return r.createElement(t,M({},n,{style:o,className:(0,l.Z)(n.className,R,P.k.common.codeBlock)}))}const V={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function z({children:e,className:t}){return r.createElement(F,{as:"pre",tabIndex:0,className:(0,l.Z)(V.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:V.codeBlockLines},e))}var G=n(73919),q=n(51114);const Q={attributes:!0,characterData:!0,childList:!0,subtree:!0};function X(e,t){const[n,o]=(0,r.useState)(),l=(0,r.useCallback)((()=>{var t;o(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{l()}),[l]),function(e,t,n=Q){const o=(0,q.zX)(t),l=(0,q.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,l),()=>t.disconnect()}),[e,o,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var U=n(55620);const J="codeLine_qRmp",K="codeLineNumber_dS_J",Y="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const s=o({line:e,className:(0,l.Z)(t,n&&J)}),c=e.map(((e,t)=>r.createElement("span",ee({key:t},a({token:e,key:t})))));return r.createElement("span",ee({},s),n?r.createElement(r.Fragment,null,r.createElement("span",{className:K}),r.createElement("span",{className:Y},c)):c,r.createElement("br",null))}var ne=n(5568);const oe={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function re({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{(0,ne.Z)(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,c.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,c.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,c.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",t,oe.copyButton,n&&oe.copyButtonCopied),onClick:s},r.createElement("span",{className:oe.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:oe.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:oe.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const le="wordWrapButtonIcon_MQXS",ae="wordWrapButtonEnabled_TBIH";function se({className:e,onClick:t,isEnabled:n}){const o=(0,c.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,l.Z)("clean-btn",e,n&&ae),"aria-label":o,title:o},r.createElement("svg",{className:le,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ce.apply(this,arguments)}function ie({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:s}){const{prism:{defaultLanguage:c,magicComments:i}}=(0,G.L)();var u;const p=null!==(u=null!=s?s:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:c,m=(0,d.p)(),b=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),l=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),s=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");o(n)}),[l]);return X(l,s),(0,r.useEffect)((()=>{s()}),[e,s]),(0,r.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:a}}(),g=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(I))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||o,{lineClassNames:h,code:k}=H(e,{metastring:n,language:p,magicComments:i}),f=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(F,{as:"div",className:(0,l.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`)},g&&r.createElement("div",{className:V.codeBlockTitle},g),r.createElement("div",{className:V.codeBlockContent},r.createElement(U.ZP,ce({},U.lG,{theme:m,code:k,language:null!=p?p:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:o})=>r.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(e,V.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(V.codeBlockLines,f&&V.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:h[t],showLineNumbers:f}))))))),r.createElement("div",{className:V.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&r.createElement(se,{className:V.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),r.createElement(re,{className:V.codeButton,code:k}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},pe.apply(this,arguments)}const me=(be=function(e){var{children:t}=e,n=de(e,["children"]);const o=(0,a.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?ie:z;return r.createElement(s,ue({key:String(o)},n),l)},function(e){return e.live?r.createElement(N,pe({scope:_},e)):r.createElement(be,pe({},e))});var be;function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ge.apply(this,arguments)}function he(e){return r.createElement(me,ge({},e))}}}]);