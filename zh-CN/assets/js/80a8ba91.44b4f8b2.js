"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58286],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(v,r(r({ref:t},u),{},{components:n})):a.createElement(v,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(38944);const i="tabItem_pnkT";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return a.createElement("div",r({role:"tabpanel",className:(0,o.Z)(i,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),o=n(38944),i=n(29088),r=n(52196),l=n(77468),s=n(75527);const d="tabList_Qoir",u="tabItem_AQgk";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:v,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,r.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const N=null===p?p:null!==(g=null!=p?p:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:k[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.U)(),[C,T]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=v){const e=y[v];null!=e&&e!==C&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==C&&(j(t),T(a),null!=v&&w(v,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var a;t=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>x.push(e),onKeyDown:E,onClick:O},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,c({key:String(t)},e))}},88096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(27378);var a=n(35318),o=n(38269),i=n(61132);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={slug:"/versioning"},d="Versioning",u={unversionedId:"guides/docs/versioning",id:"version-2.0.0-beta.22/guides/docs/versioning",title:"Versioning",description:"You can use the versioning CLI to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory continues to evolve.",source:"@site/versioned_docs/version-2.0.0-beta.22/guides/docs/versioning.md",sourceDirName:"guides/docs",slug:"/versioning",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/versioning",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",frontMatter:{slug:"/versioning"},sidebar:"docs",previous:{title:"Using multiple sidebars",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/sidebar/multiple-sidebars"},next:{title:"Docs Multi-instance",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/docs-multi-instance"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Tutorials",id:"tutorials",level:2},{value:"Tagging a new version",id:"tagging-a-new-version",level:3},{value:"Creating new docs",id:"creating-new-docs",level:3},{value:"Updating an existing version",id:"updating-an-existing-version",level:3},{value:"Deleting an existing version",id:"deleting-an-existing-version",level:3},{value:"Configuring versioning behavior",id:"configuring-versioning-behavior",level:2},{value:"Navbar items",id:"navbar-items",level:2},{value:"Recommended practices",id:"recommended-practices",level:2},{value:"Version your documentation only when needed",id:"version-your-documentation-only-when-needed",level:3},{value:"Keep the number of versions small",id:"keep-the-number-of-versions-small",level:3},{value:"Use absolute import within the docs",id:"use-absolute-import-within-the-docs",level:3},{value:"Link docs by file paths",id:"link-docs-by-file-paths",level:3},{value:"Global or versioned collocated assets",id:"global-or-versioned-collocated-assets",level:3}],m={toc:p};function v(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"versioning"}),"Versioning"),(0,a.kt)("p",null,"You can use the versioning CLI to create a new documentation version based on the latest content in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory continues to evolve."),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!")),(0,a.kt)("p",null,"Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,a.kt)("strong",{parentName:"p"},"best suited for websites with high-traffic and rapid changes to documentation between versions"),". If your documentation rarely changes, don't add versioning to your documentation."),(0,a.kt)("p",null,"To better understand how versioning works and see if it suits your needs, you can read on below."),(0,a.kt)("h2",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"A typical versioned doc site looks like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"website\n\u251c\u2500\u2500 sidebars.json        # sidebar for the current docs version\n\u251c\u2500\u2500 docs                 # docs directory for the current docs version\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251c\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251c\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"versions.json")," file is a list of version names, ordered from newest to oldest."),(0,a.kt)("p",null,"The table below explains how a versioned file maps to its version and the generated URL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"URL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.0/hello.md")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1.0.0"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/docs/1.0.0/hello")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.1.0/hello.md")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1.1.0 (latest)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/docs/hello")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"current"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"/docs/next/hello")))),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"The files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," directory belong to the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," docs version."),(0,a.kt)("p",{parentName:"admonition"},"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," docs version is labeled as ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," and hosted under ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/next/*"),", but it is entirely configurable to fit your project's release lifecycle.")),(0,a.kt)("h3",r({},{id:"terminology"}),"Terminology"),(0,a.kt)("p",null,"Note the terminology we use here."),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("b",null,"Current version")),(0,a.kt)("dd",null,"The version placed in the ",(0,a.kt)("code",null,"./docs")," folder."),(0,a.kt)("dt",null,(0,a.kt)("b",null,"Latest version / last version")),(0,a.kt)("dd",null,"The version served by default for docs navbar items. Usually has path ",(0,a.kt)("code",null,"/docs"),".")),(0,a.kt)("p",null,"Current version is defined by the ",(0,a.kt)("strong",{parentName:"p"},"file system location"),", while latest version is defined by the ",(0,a.kt)("strong",{parentName:"p"},"the navigation behavior"),". They may or may not be the same version! (And the default configuration, as shown in the table above, would treat them as different: current version at ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/next")," and latest at ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs"),".)"),(0,a.kt)("h2",r({},{id:"tutorials"}),"Tutorials"),(0,a.kt)("h3",r({},{id:"tagging-a-new-version"}),"Tagging a new version"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, make sure the current docs version (the ",(0,a.kt)("inlineCode",{parentName:"li"},"./docs")," directory) is ready to be frozen."),(0,a.kt)("li",{parentName:"ol"},"Enter a new version number.")),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run docusaurus docs:version 1.1.0\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn run docusaurus docs:version 1.1.0\n")))),(0,a.kt)("p",null,"When tagging a new version, the document versioning mechanism will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy the full ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/")," folder contents into a new ",(0,a.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-[versionName]/")," folder."),(0,a.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current ",(0,a.kt)("a",r({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/docs-introduction#sidebar"}),"sidebar")," configuration (if it exists) - saved as ",(0,a.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-[versionName]-sidebars.json"),"."),(0,a.kt)("li",{parentName:"ul"},"Append the new version number to ",(0,a.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,a.kt)("h3",r({},{id:"creating-new-docs"}),"Creating new docs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Place the new file into the corresponding version folder."),(0,a.kt)("li",{parentName:"ol"},"Include the reference to the new file in the corresponding sidebar file according to the version number.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Current version structure",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebars.js\n"))),(0,a.kt)(i.Z,{value:"Older version structure",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n")))),(0,a.kt)("h3",r({},{id:"updating-an-existing-version"}),"Updating an existing version"),(0,a.kt)("p",null,"You can update multiple docs versions at the same time because each directory in ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," represents specific routes when published."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Edit any file."),(0,a.kt)("li",{parentName:"ol"},"Commit and push changes."),(0,a.kt)("li",{parentName:"ol"},"It will be published to the version.")),(0,a.kt)("p",null,"Example: When you change any file in ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-2.6/"),", it will only affect the docs for version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.6"),"."),(0,a.kt)("h3",r({},{id:"deleting-an-existing-version"}),"Deleting an existing version"),(0,a.kt)("p",null,"You can delete/remove versions as well."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Remove the version from ",(0,a.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-diff"}),'[\n  "2.0.0",\n  "1.9.0",\n  // highlight-next-line\n- "1.8.0"\n]\n')),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Delete the versioned docs directory. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.8.0"),"."),(0,a.kt)("li",{parentName:"ol"},"Delete the versioned sidebars file. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-1.8.0-sidebars.json"),".")),(0,a.kt)("h2",r({},{id:"configuring-versioning-behavior"}),"Configuring versioning behavior"),(0,a.kt)("p",null,'The "current" version is the version name for the ',(0,a.kt)("inlineCode",{parentName:"p"},"./docs")," folder. There are different ways to manage versioning, but two very common patterns are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You release v1, and start immediately working on v2 (including its docs). In this case, the ",(0,a.kt)("strong",{parentName:"li"},"current version")," is v2, which is in the ",(0,a.kt)("inlineCode",{parentName:"li"},"./docs")," source folder, and can be browsed at ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com/docs/next"),". The ",(0,a.kt)("strong",{parentName:"li"},"latest version")," is v1, which is in the ",(0,a.kt)("inlineCode",{parentName:"li"},"./versioned_docs/version-1")," source folder, and is browsed by most of your users at ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com/docs"),"."),(0,a.kt)("li",{parentName:"ul"},"You release v1, and will maintain it for some time before thinking about v2. In this case, the ",(0,a.kt)("strong",{parentName:"li"},"current version")," and ",(0,a.kt)("strong",{parentName:"li"},"latest version")," will both be point to v1, since the v2 docs doesn't even exist yet!")),(0,a.kt)("p",null,'Docusaurus defaults work great for the first use case. We will label the current version as "next" and you can even choose not to publish it.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For the 2nd use case"),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,a.kt)("inlineCode",{parentName:"p"},"./docs")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"./versioned_docs/version-1.0.0"),'), you may consider "pretending" that the current version is a cut version by giving it a path and a label:'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    '@docusaurus/preset-classic',\n    docs: {\n      // highlight-start\n      lastVersion: 'current',\n      versions: {\n        current: {\n          label: '1.0.0',\n          path: '1.0.0',\n        },\n      },\n      // highlight-end\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"The docs in ",(0,a.kt)("inlineCode",{parentName:"p"},"./docs")," will be served at ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/1.0.0")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/next"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0")," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,a.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,a.kt)("p",null,"We offer these plugin options to customize versioning behavior:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disableVersioning"),": Explicitly disable versioning even with versions. This will make the site only include the current version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeCurrentVersion"),": Include the current version (the ",(0,a.kt)("inlineCode",{parentName:"li"},"./docs")," folder) of your docs.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tip"),": turn it off if the current version is a work-in-progress, not ready to be published."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lastVersion"),': Sets which version "latest version" (the ',(0,a.kt)("inlineCode",{parentName:"li"},"/docs")," route) refers to.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tip"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"lastVersion: 'current'")," makes sense if your current version refers to a major version that's constantly patched and released. The actual route base path and label of the latest version are configurable."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onlyIncludeVersions"),": Defines a subset of versions from ",(0,a.kt)("inlineCode",{parentName:"li"},"versions.json")," to be deployed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tip"),": limit to 2 or 3 versions in dev and deploy previews to improve startup and build time."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versions"),": A dictionary of version metadata. For each version, you can customize the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": the label displayed in the versions dropdown and banner."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": the route base path of this version. By default, latest version has ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," and current version has ",(0,a.kt)("inlineCode",{parentName:"li"},"/next"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"banner"),": one of ",(0,a.kt)("inlineCode",{parentName:"li"},"'none'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'unreleased'"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"'unmaintained'"),'. Determines what\'s displayed at the top of every doc page. Any version above the latest version would be "unreleased", and any version below would be "unmaintained".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"badge"),": show a badge with the version name at the top of a doc of that version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"className"),": add a custom ",(0,a.kt)("inlineCode",{parentName:"li"},"className")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"<html>")," element of doc pages of that version.")))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/plugins/@docusaurus/plugin-content-docs#configuration"}),"docs plugin configuration")," for more details."),(0,a.kt)("h2",r({},{id:"navbar-items"}),"Navbar items"),(0,a.kt)("p",null,"We offer several navbar items to help you quickly set up navigation without worrying about versioned routes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration#navbar-doc-link"}),(0,a.kt)("inlineCode",{parentName:"a"},"doc")),": a link to a doc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration#navbar-doc-sidebar"}),(0,a.kt)("inlineCode",{parentName:"a"},"docSidebar")),": a link to the first item in a sidebar."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration#navbar-docs-version"}),(0,a.kt)("inlineCode",{parentName:"a"},"docsVersion")),": a link to the main doc of the currently viewed version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/api/themes/configuration#navbar-docs-version-dropdown"}),(0,a.kt)("inlineCode",{parentName:"a"},"docsVersionDropdown")),": a dropdown containing all the versions available.")),(0,a.kt)("p",null,"These links would all look for an appropriate version to link to, in the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Active version"),": the version that the user is currently browsing, if she is on a page provided by this doc plugin. If she's not on a doc page, fall back to..."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Preferred version"),": the version that the user last viewed. If there's no history, fall back to..."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Latest version"),": the default version that we navigate to, configured by the ",(0,a.kt)("inlineCode",{parentName:"li"},"lastVersion")," option.")),(0,a.kt)("h2",r({},{id:"recommended-practices"}),"Recommended practices"),(0,a.kt)("h3",r({},{id:"version-your-documentation-only-when-needed"}),"Version your documentation only when needed"),(0,a.kt)("p",null,"For example, you are building documentation for your npm package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."),(0,a.kt)("p",null,"Should you cut a new documentation version 1.0.1? ",(0,a.kt)("strong",{parentName:"p"},"You probably shouldn't"),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."),(0,a.kt)("h3",r({},{id:"keep-the-number-of-versions-small"}),"Keep the number of versions small"),(0,a.kt)("p",null,"As a good rule of thumb, try to keep the number of your versions below 10. You will ",(0,a.kt)("strong",{parentName:"p"},"very likely")," to have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,a.kt)("a",r({parentName:"p"},{href:"https://jestjs.io/versions"}),"Jest")," is currently in version ",(0,a.kt)("inlineCode",{parentName:"p"},"27.4"),", and only maintains several latest documentation versions with the lowest being ",(0,a.kt)("inlineCode",{parentName:"p"},"25.X"),". Keep it small \ud83d\ude0a"),(0,a.kt)("admonition",r({},{title:"archive older versions",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"If you deploy your site on a Jamstack provider (e.g. ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/deployment"}),"Netlify"),"), the provider will save each production build as a snapshot under an immutable URL. You can include archived versions that will never be rebuilt as external links to these immutable URLs. The Jest website and the Docusaurus website both use such pattern to keep the number of actively built versions low.")),(0,a.kt)("h3",r({},{id:"use-absolute-import-within-the-docs"}),"Use absolute import within the docs"),(0,a.kt)("p",null,"Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"@site")," alias provided by Docusaurus that points to the ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," directory. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-diff"}),"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n")),(0,a.kt)("h3",r({},{id:"link-docs-by-file-paths"}),"Link docs by file paths"),(0,a.kt)("p",null,"Refer to other docs by relative file paths with the ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," extension, so that Docusaurus can rewrite them to actual URL paths during building. Files will be linked to the correct corresponding version."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md"}),"The [@hello](hello.md#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.md) for more info.\n")),(0,a.kt)("h3",r({},{id:"global-or-versioned-collocated-assets"}),"Global or versioned collocated assets"),(0,a.kt)("p",null,"You should decide if assets like images and files are per-version or shared between versions."),(0,a.kt)("p",null,"If your assets should be versioned, put them in the docs version, and use relative paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md"}),"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n")),(0,a.kt)("p",null,"If your assets are global, put them in ",(0,a.kt)("inlineCode",{parentName:"p"},"/static")," and use absolute paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md"}),"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n")))}v.isMDXComponent=!0}}]);