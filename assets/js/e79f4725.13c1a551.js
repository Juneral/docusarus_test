"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65794],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(27378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(a),d=s,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61132:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(27378),s=a(38944);const r="tabItem_pnkT";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,s.Z)(r,a)},{hidden:t}),e)}},38269:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(27378),s=a(38944),r=a(29088),i=a(52196),l=a(77468),p=a(75527);const o="tabList_Qoir",m="tabItem_AQgk";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:d,groupId:h,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const b=null===c?c:null!==(y=null!=c?c:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[x,j]=(0,n.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==x&&(O(t),j(n),null!=h&&w(h,String(n)))},M=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",o)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},k)},f.map((({value:e,label:t,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:M,onClick:C},a,{className:(0,s.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,r.Z)();return n.createElement(c,u({key:String(t)},e))}},32068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(27378);var n=a(35318),s=a(38269),r=a(61132);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const p={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},o="MDX Plugins",m={unversionedId:"guides/markdown-features/plugins",id:"guides/markdown-features/plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/docs/markdown-features/plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-plugins.mdx",tags:[],version:"current",frontMatter:{id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Markdown links",permalink:"/docs/markdown-features/links"},next:{title:"Math Equations",permalink:"/docs/markdown-features/math-equations"}},u={},c=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}],d={toc:c};function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"mdx-plugins"}),"MDX Plugins"),(0,n.kt)("p",null,"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How do I embed youtube videos using the image syntax (",(0,n.kt)("inlineCode",{parentName:"li"},"![](https://youtu.be/yKNxeF4KMsY)"),")?"),(0,n.kt)("li",{parentName:"ul"},"How do I style links that are on their own lines differently, e.g., as a social card?"),(0,n.kt)("li",{parentName:"ul"},"How do I make every page start with a copyright notice?")),(0,n.kt)("p",null,"And the answer is: create an MDX plugin! MDX has a built-in ",(0,n.kt)("a",i({parentName:"p"},{href:"https://mdxjs.com/advanced/plugins/"}),"plugin system")," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using existing ",(0,n.kt)("a",i({parentName:"li"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"}),"remark plugins")," or ",(0,n.kt)("a",i({parentName:"li"},{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"}),"rehype plugins"),";"),(0,n.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"),(0,n.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to introduce new syntaxes to MDX.")),(0,n.kt)("p",null,"If you play with the ",(0,n.kt)("a",i({parentName:"p"},{href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"}),"MDX playground"),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",i({parentName:"strong"},{href:"https://github.com/remarkjs/remark/"}),"Remark")),": processes the Markdown AST."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",i({parentName:"strong"},{href:"https://github.com/rehypejs/rehype/"}),"Rehype")),": processes the Hypertext AST.")),(0,n.kt)("admonition",i({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/markdown-features/admonitions"}),"admonition")," syntax that we offer is also generated by a ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/elviswolcott/remark-admonitions"}),"Remark plugin"),", and you could do the same for your own use case.")),(0,n.kt)("h2",i({},{id:"default-plugins"}),"Default plugins"),(0,n.kt)("p",null,"Docusaurus injects ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark"}),"some default Remark plugins")," during Markdown processing. These plugins would:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate the table of contents;"),(0,n.kt)("li",{parentName:"ul"},"Add anchor links to each heading;"),(0,n.kt)("li",{parentName:"ul"},"Transform images and links to ",(0,n.kt)("inlineCode",{parentName:"li"},"require()")," calls."),(0,n.kt)("li",{parentName:"ul"},"\u2026")),(0,n.kt)("p",null,"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."),(0,n.kt)("h2",i({},{id:"installing-plugins"}),"Installing plugins"),(0,n.kt)("p",null,"An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/markdown-features/math-equations"}),"math plugins")," as an example."),(0,n.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm install --save remark-math@3 rehype-katex@4\n"))),(0,n.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn add remark-math@3 rehype-katex@4\n")))),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"There's recently a trend in the Remark/Rehype ecosystem to migrate to ES Modules, a new JavaScript module system, which Docusaurus doesn't support yet. Please make sure your installed plugin version is CommonJS-compatible before we officially support ESM. Alternatively, you can read about using dynamic ",(0,n.kt)("inlineCode",{parentName:"p"},"import()")," as a workaround in the tutorial of installing ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/markdown-features/math-equations#upgrading-rehype-katex-beyond-recommended-version"}),(0,n.kt)("inlineCode",{parentName:"a"},"rehype-katex")),".")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How are ",(0,n.kt)("code",null,"remark-math")," and ",(0,n.kt)("code",null,"rehype-katex")," different?"),(0,n.kt)("p",null,"In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,n.kt)("inlineCode",{parentName:"p"},"remark-math")," operates on the Markdown AST, where it sees text like ",(0,n.kt)("inlineCode",{parentName:"p"},"$...$"),", and all it does is transform that to the JSX ",(0,n.kt)("inlineCode",{parentName:"p"},'<span class="math math-inline">...</span>')," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,n.kt)("span",i({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",i({parentName:"span"},{className:"katex"}),(0,n.kt)("span",i({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",i({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,n.kt)("annotation",i({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),(0,n.kt)("span",i({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",i({parentName:"span"},{className:"base"}),(0,n.kt)("span",i({parentName:"span"},{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"K"),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-t"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.6833em"}}),(0,n.kt)("span",i({parentName:"span"},{style:{top:"-2.905em"}}),(0,n.kt)("span",i({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"T"),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.4678em"}}),(0,n.kt)("span",i({parentName:"span"},{style:{top:"-2.7845em"}}),(0,n.kt)("span",i({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"E")))),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"X")))))))," out with other math renderers, like MathJax (with ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax"}),(0,n.kt)("inlineCode",{parentName:"a"},"rehype-mathjax")),"), just by replacing the Rehype plugin."),(0,n.kt)("p",null,"Next, the ",(0,n.kt)("inlineCode",{parentName:"p"},"rehype-katex")," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,n.kt)("inlineCode",{parentName:"p"},"math")," class and uses ",(0,n.kt)("span",i({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",i({parentName:"span"},{className:"katex"}),(0,n.kt)("span",i({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",i({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"KaTeX")),(0,n.kt)("annotation",i({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),(0,n.kt)("span",i({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",i({parentName:"span"},{className:"base"}),(0,n.kt)("span",i({parentName:"span"},{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"K"),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-t"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.6833em"}}),(0,n.kt)("span",i({parentName:"span"},{style:{top:"-2.905em"}}),(0,n.kt)("span",i({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"T"),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.4678em"}}),(0,n.kt)("span",i({parentName:"span"},{style:{top:"-2.7845em"}}),(0,n.kt)("span",i({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord"}),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"E")))),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",i({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",i({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),(0,n.kt)("span",{parentName:"span"})))),(0,n.kt)("span",i({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),(0,n.kt)("span",i({parentName:"span"},{className:"mord textrm"}),"X")))))))," to parse and render the content to actual HTML.")),(0,n.kt)("p",null,"Next, add them to the plugin options through plugin or preset config in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-start\nconst math = require('remark-math');\nconst katex = require('rehype-katex');\n// highlight-end\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("h2",i({},{id:"configuring-plugins"}),"Configuring plugins"),(0,n.kt)("p",null,"Some plugins can be configured and accept their own options. In that case, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"[plugin, pluginOptions]")," syntax, like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [math],\n          rehypePlugins: [\n            // highlight-next-line\n            [katex, {strict: false}],\n          ],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("p",null,"You should check your plugin's documentation for the options it supports."),(0,n.kt)("h2",i({},{id:"creating-new-rehyperemark-plugins"}),"Creating new rehype/remark plugins"),(0,n.kt)("p",null,"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The writeup below is ",(0,n.kt)("strong",{parentName:"p"},"not")," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"}),"Remark")," or ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"}),"Rehype")," documentation for a more in-depth explanation of how they work.")),(0,n.kt)("p",null,"For example, let's make a plugin that visits every ",(0,n.kt)("inlineCode",{parentName:"p"},"h2")," heading and adds a ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X. ")," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/remark/section-prefix.js"),". A remark/rehype plugin is just a function that receives the ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer")," that operates on the AST."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'"src/remark/section-prefix.js"','"src/remark/section-prefix.js"':!0}),"const visit = require('unist-util-visit');\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nmodule.exports = plugin;\n")),(0,n.kt)("p",null,"You can now import your plugin in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and use it just like an installed plugin!"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"// highlight-next-line\nconst sectionPrefix = require('./src/remark/section-prefix');\n\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("admonition",i({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer")," has a second parameter ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/vfile/vfile"}),(0,n.kt)("inlineCode",{parentName:"a"},"vfile"))," which is useful if you need to access the current Markdown file's path."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",i({parentName:"pre"},{className:"language-js"}),"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n")),(0,n.kt)("p",{parentName:"admonition"},"Our ",(0,n.kt)("inlineCode",{parentName:"p"},"transformImage")," plugin uses this parameter, for example, to transform relative image references to ",(0,n.kt)("inlineCode",{parentName:"p"},"require()")," calls.")),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,n.kt)("inlineCode",{parentName:"p"},"require()")," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,n.kt)("inlineCode",{parentName:"p"},"h2")," headings are now prefixed by ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X."),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeDefaultRemarkPlugins")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeDefaultRehypePlugins"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,n.kt)("p",{parentName:"admonition"},"This would make the table of contents generated contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"Section X.")," prefix as well.")))}h.isMDXComponent=!0}}]);