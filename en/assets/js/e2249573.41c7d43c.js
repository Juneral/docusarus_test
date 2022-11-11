"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7988],{26478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(27378);var r=n(35318),a=n(38269),o=n(61132),l=n(87048);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},u="Canary releases",p={unversionedId:"canary",id:"canary",title:"Canary releases",description:"Docusaurus has a canary releases system.",source:"@site/community/4-canary.md",sourceDirName:".",slug:"/canary",permalink:"/docusarus_test/en/community/canary",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/community/4-canary.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"community",previous:{title:"Contributing",permalink:"/docusarus_test/en/community/contributing"},next:{title:"Release process",permalink:"/docusarus_test/en/community/release-process"}},m={},d=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",level:2},{value:"Using a canary release",id:"using-a-canary-release",level:2}],f={toc:d};function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",c({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"canary-releases"}),"Canary releases"),(0,r.kt)(l.mC,{mdxType:"VersionsProvider"},(0,r.kt)("p",null,"Docusaurus has a canary releases system."),(0,r.kt)("p",null,"It permits you to ",(0,r.kt)("strong",{parentName:"p"},"test new unreleased features")," as soon as the pull requests are merged on the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docusarus_test/en/community/release-process#next-version"}),"next version")," of Docusaurus."),(0,r.kt)("p",null,"It is a good way to ",(0,r.kt)("strong",{parentName:"p"},"give feedback to maintainers"),", ensuring the newly implemented feature works as intended."),(0,r.kt)("admonition",c({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Using a canary release in production might seem risky, but in practice, it's not."),(0,r.kt)("p",{parentName:"admonition"},"A canary release passes all automated tests and is used in production by the Docusaurus site itself.")),(0,r.kt)(l.UM,{mdxType:"InsertIfCanaryVersionUnknown"},(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The canary version shown below ",(0,r.kt)("strong",{parentName:"p"},"may not be up-to-date"),". Please go to the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions"}),"npm page")," to find the actual version name."))),(0,r.kt)(l.FS,{mdxType:"InsertIfCanaryVersionKnown"},(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"The canary version shown below is directly fetched from npm and ",(0,r.kt)("strong",{parentName:"p"},"is up-to-date"),". You can directly use these numbers in your package.json."))),(0,r.kt)("h2",c({},{id:"canary-npm-dist-tag"}),"Canary npm dist tag"),(0,r.kt)("p",null,"For any code-related commit on ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", the continuous integration will publish a canary release under the ",(0,r.kt)("inlineCode",{parentName:"p"},"@canary")," npm dist tag. It generally takes up to 10 minutes."),(0,r.kt)("p",null,"You can see on ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions"}),"npm")," the current dist tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latest"),": stable releases (Current: ",(0,r.kt)(l.SR,{mdxType:"StableVersion"}),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canary"),": canary releases (",(0,r.kt)(l.I1,{mdxType:"CanaryVersion"}),")")),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Make sure to use the latest canary release and check the publication date (sometimes the publish process fails). ",(0,r.kt)(l.rv,{mdxType:"PublishTime"}))),(0,r.kt)("admonition",c({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Canary versions follow the naming convention ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0-commitNumber"),".")),(0,r.kt)("h2",c({},{id:"using-a-canary-release"}),"Using a canary release"),(0,r.kt)("p",null,"Take the latest version published under the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions"}),"canary npm dist tag")," (",(0,r.kt)(l.I1,{mdxType:"CanaryVersion"}),")."),(0,r.kt)("p",null,"Use it for all the ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," dependencies in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)(l.Hc,{mdxType:"PackageJSONDiff"}),(0,r.kt)("p",null,"Then, install the dependencies again and start your site:"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install\nnpm start\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn install\nyarn start\n# couldn't auto-convert command\n")))),(0,r.kt)("p",null,"You can also upgrade the ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," packages with command line:"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn add-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n")))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Make sure to include all the ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/*")," packages."),(0,r.kt)("p",{parentName:"admonition"},"For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," prefix)."))))}b.isMDXComponent=!0},61132:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(27378),a=n(38944);const o="tabItem_pnkT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(27378),a=n(38944),o=n(29088),l=n(52196),c=n(77468),s=n(75527);const i="tabList_Qoir",u="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:f,className:b}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===m?m:null!==(g=null!=m?m:null===(t=y.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:O}=(0,c.U)(),[w,N]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=E[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==w&&(C(t),N(r),null!=f&&O(f,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;var n;t=null!==(n=j[r])&&void 0!==n?n:j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;var r;t=null!==(r=j[n])&&void 0!==r?r:j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>j.push(e),onKeyDown:x,onClick:T},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,p({key:String(t)},e))}},50016:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(78844),a=n(73919);function o(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},55188:(e,t,n)=>{n.d(t,{v:()=>c});var r=n(70124);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){return(0,r.v)(e,l(o({},t),{transforms:o({asyncAwait:!1,classes:!1,getterSetter:!1},t.transforms)}))}},94544:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(27378),a=n(29088);function o({children:e,fallback:t}){return(0,a.Z)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},87048:(e,t,n)=>{n.d(t,{CW:()=>d,FS:()=>g,Fr:()=>f,Hc:()=>k,I1:()=>p,SR:()=>m,UM:()=>v,Zl:()=>y,mC:()=>i,mq:()=>h,rv:()=>E});var r=n(27378),a=n(32054),o=n(92053),l=n(36712),c=n(93457);const s=r.createContext(null);function i({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useRef)(!0);return(0,r.useEffect)((()=>(a.current=!0,()=>{a.current=!1})),[]),(0,r.useEffect)((()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then((e=>e.json())).then((e=>{if(!a.current)return;const t=Object.keys(e.versions).at(-1),r=e.time[t];n({name:t,time:r})}))}),[]),r.createElement(s.Provider,{value:t},e)}function u(){var e;const t=null===(e=(0,a.J)("default").preferredVersion)||void 0===e?void 0:e.name,n=(0,o.gB)("default");var r;const l=(null!==(r=n.find((e=>"current"!==e.name)))&&void 0!==r?r:n[0]).name;return t&&"current"!==t?t:l}function p(){const e=(0,r.useContext)(s);return e?r.createElement("span",null,r.createElement(l.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:r.createElement("b",null,e.name)}},"Current: {canaryVersionName}")):r.createElement("span",null,r.createElement(l.Z,{description:"An example canary version tag when the actual version can't be fetched."},"Example: 0.0.0-4922"))}function m(){const e=u();return r.createElement("span",null,e)}function d(){return r.createElement("span",null,3)}function f(){return r.createElement("span",null,2)}function b({branch:e}){return r.createElement("a",{href:`https://github.com/facebook/docusaurus/tree/${e}`},r.createElement("code",null,e))}function y(){return r.createElement(b,{branch:"docusaurus-v2"})}function h(){return r.createElement(b,{branch:"main"})}function v({children:e}){return(0,r.useContext)(s)?null:e}function g({children:e}){return(0,r.useContext)(s)?e:null}function k(){var e,t;const n=null!==(t=null===(e=(0,r.useContext)(s))||void 0===e?void 0:e.name)&&void 0!==t?t:"0.0.0-4922",a=u();return r.createElement(c.Z,{language:"diff"},`-  "@docusaurus/core": "^${a}",\n-  "@docusaurus/preset-classic": "^${a}",\n+  "@docusaurus/core": "${n}",\n+  "@docusaurus/preset-classic": "${n}",\n`)}function E(){var e;const t=null===(e=(0,r.useContext)(s))||void 0===e?void 0:e.time;return t?r.createElement(l.Z,{values:{time:r.createElement("b",null,new Date(t).toLocaleString())}},"The latest canary version that's available on npm is published at {time}."):null}},93457:(e,t,n)=>{n.d(t,{Z:()=>ye});var r={};n.r(r),n.d(r,{ButtonExample:()=>T});var a=n(27378),o=n(38944),l=n(29088),c=n(40935),s=n(36712),i=n(4423),u=n(94544),p=n(50016);const m="playgroundContainer_6Ior",d="playgroundHeader_Tvsk",f="playgroundEditor_TySg",b="playgroundPreview_mApW";function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v({children:e}){return a.createElement("div",{className:(0,o.Z)(d)},e)}function g(){return a.createElement("div",null,"Loading...")}function k(){return a.createElement(a.Fragment,null,a.createElement(v,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:b},a.createElement(u.Z,{fallback:a.createElement(g,null)},(()=>a.createElement(a.Fragment,null,a.createElement(c.i5,null),a.createElement(c.IF,null))))))}function E(){const e=(0,l.Z)();return a.createElement(c.uz,{key:String(e),className:f})}function O(){return a.createElement(a.Fragment,null,a.createElement(v,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(E,null))}function w(e){var t,{children:n,transformCode:r}=e,o=h(e,["children","transformCode"]);const{siteConfig:{themeConfig:l}}=(0,i.Z)(),{liveCodeBlock:{playgroundPosition:s}}=l,u=(0,p.p)();var d;const f=null!==(d=null===(t=o.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return a.createElement("div",{className:m},a.createElement(c.nu,y({code:n.replace(/\n$/,""),noInline:f,transformCode:null!=r?r:e=>`${e};`,theme:u},o),"top"===s?a.createElement(a.Fragment,null,a.createElement(k,null),a.createElement(O,null)):a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement(k,null))))}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}function T(e){return a.createElement("button",j({type:"button"},e,{style:C({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({React:a},a,r);var P,S,I=n(89583),Z=n(6324),L=n.n(Z);const _=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),D=RegExp("\\{(?<range>[\\d,-]+)\\}"),$={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function A(e,t){const n=e.map((e=>{const{start:n,end:r}=$[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function V(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&D.test(o)){const e=o.match(D).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=L()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"],t);case"jsx":case"tsx":return A(["js","jsBlock","jsx"],t);case"html":return A(["js","jsBlock","html"],t);case"python":case"py":case"bash":return A(["bash"],t);case"markdown":case"md":return A(["html","jsx","bash"],t);default:return A(Object.keys($),t)}}(r,a),c=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(a.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(a.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(s).forEach((([e,{range:t}])=>{L()(t).forEach((t=>{var n;null!==(n=(P=m)[S=t])&&void 0!==n||(P[S]=[]),m[t].push(e)}))})),{lineClassNames:m,code:n}}const M="codeBlockContainer_jDV4";function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H(e){var{as:t}=e,n=F(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const a=t[e];a&&"string"==typeof r&&(n[a]=r)})),n}((0,p.p)());return a.createElement(t,R({},n,{style:r,className:(0,o.Z)(n.className,M,I.k.common.codeBlock)}))}const U={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return a.createElement(H,{as:"pre",tabIndex:0,className:(0,o.Z)(U.codeBlockStandalone,"thin-scrollbar",t)},a.createElement("code",{className:U.codeBlockLines},e))}var q=n(73919),z=n(51114);const G={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Q(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n=G){const r=(0,z.zX)(t),o=(0,z.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Y=n(55620);const X="codeLine_qRmp",J="codeLineNumber_dS_J",K="codeLineContent_XF5l";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:l}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const c=r({line:e,className:(0,o.Z)(t,n&&X)}),s=e.map(((e,t)=>a.createElement("span",ee({key:t},l({token:e,key:t})))));return a.createElement("span",ee({},c),n?a.createElement(a.Fragment,null,a.createElement("span",{className:J}),a.createElement("span",{className:K},s)):s,a.createElement("br",null))}var ne=n(5568);const re={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ae({code:e,className:t}){const[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{(0,ne.Z)(e),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,re.copyButton,n&&re.copyButtonCopied),onClick:c},a.createElement("span",{className:re.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:re.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:re.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const oe="wordWrapButtonIcon_MQXS",le="wordWrapButtonEnabled_TBIH";function ce({className:e,onClick:t,isEnabled:n}){const r=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",e,n&&le),"aria-label":r,title:r},a.createElement("svg",{className:oe,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ie({children:e,className:t="",metastring:n,title:r,showLineNumbers:l,language:c}){const{prism:{defaultLanguage:s,magicComments:i}}=(0,q.L)();var u;const m=null!==(u=null!=c?c:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:s,d=(0,p.p)(),f=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return Q(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(_))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:y,code:h}=V(e,{metastring:n,language:m,magicComments:i}),v=null!=l?l:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return a.createElement(H,{as:"div",className:(0,o.Z)(t,m&&!t.includes(`language-${m}`)&&`language-${m}`)},b&&a.createElement("div",{className:U.codeBlockTitle},b),a.createElement("div",{className:U.codeBlockContent},a.createElement(Y.ZP,se({},Y.lG,{theme:d,code:h,language:null!=m?m:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>a.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,o.Z)(e,U.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,o.Z)(U.codeBlockLines,v&&U.codeBlockLinesWithNumbering)},t.map(((e,t)=>a.createElement(te,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:y[t],showLineNumbers:v}))))))),a.createElement("div",{className:U.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&a.createElement(ce,{className:U.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),a.createElement(ae,{className:U.codeButton,code:h}))))}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}const de=(fe=function(e){var{children:t}=e,n=pe(e,["children"]);const r=(0,l.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?ie:W;return a.createElement(c,ue({key:String(r)},n),o)},function(e){return e.live?a.createElement(w,me({scope:B},e)):a.createElement(fe,me({},e))});var fe;function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function ye(e){return a.createElement(de,be({},e))}}}]);