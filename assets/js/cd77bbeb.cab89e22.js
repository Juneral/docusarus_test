"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10156],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),o=n(38944);const r="tabItem_pnkT";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),o=n(38944),r=n(29088),i=n(52196),s=n(77468),l=n(75527);const p="tabList_Qoir",m="tabItem_AQgk";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:d,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var w;const b=null===u?u:null!==(w=null!=u?u:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==w?w:k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[z,T]=(0,a.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=h){const e=v[h];null!=e&&e!==z&&f.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==z&&(x(t),T(a),null!=h&&N(h,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>C.push(e),onKeyDown:I,onClick:j},n,{className:(0,o.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":z===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function d(e){const t=(0,r.Z)();return a.createElement(u,c({key:String(t)},e))}},90750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>u});n(27378);var a=n(35318),o=n(38269),r=n(61132);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={description:"Customize your site's appearance through creating your own theme components"},p="Swizzling",m={unversionedId:"swizzling",id:"swizzling",title:"Swizzling",description:"Customize your site's appearance through creating your own theme components",source:"@site/docs/swizzling.md",sourceDirName:".",slug:"/swizzling",permalink:"/docs/next/swizzling",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/swizzling.md",tags:[],version:"current",frontMatter:{description:"Customize your site's appearance through creating your own theme components"},sidebar:"docs",previous:{title:"Styling and Layout",permalink:"/docs/next/styling-layout"},next:{title:"Static Assets",permalink:"/docs/next/static-assets"}},c={},u=[{value:"Swizzling Process",id:"swizzling-process",level:2},{value:"Overview",id:"overview",level:3},{value:"Ejecting",id:"ejecting",level:3},{value:"Wrapping",id:"wrapping",level:3},{value:"What is safe to swizzle?",id:"what-is-safe-to-swizzle",level:2},{value:"Which component should I swizzle?",id:"which-component-should-i-swizzle",level:2},{value:"Do I need to swizzle?",id:"do-i-need-to-swizzle",level:2},{value:"Wrapping your site with <code>&lt;Root&gt;</code>",id:"wrapper-your-site-with-root",level:2}],d={toc:u};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"swizzling"}),"Swizzling"),(0,a.kt)("p",null,"In this section, we will introduce how customization of layout is done in Docusaurus."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"D\xe9ja vu...?")),(0,a.kt)("p",null,"This section is similar to ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/next/styling-layout"}),"Styling and Layout"),", but this time, we will write actual React code instead of playing with stylesheets. We will talk about a central concept in Docusaurus: ",(0,a.kt)("strong",{parentName:"p"},"swizzling"),", which allows ",(0,a.kt)("strong",{parentName:"p"},"deeper site customizations"),"."),(0,a.kt)("p",null,"In practice, swizzling permits to ",(0,a.kt)("strong",{parentName:"p"},"swap a theme component with your own implementation"),", and it comes in 2 patterns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"#ejecting"}),(0,a.kt)("strong",{parentName:"a"},"Ejecting")),": creates a ",(0,a.kt)("strong",{parentName:"li"},"copy")," of the original theme component, which you can fully ",(0,a.kt)("strong",{parentName:"li"},"customize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"#wrapping"}),(0,a.kt)("strong",{parentName:"a"},"Wrapping")),": creates a ",(0,a.kt)("strong",{parentName:"li"},"wrapper")," around the original theme component, which you can ",(0,a.kt)("strong",{parentName:"li"},"enhance"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why is it called swizzling?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The name comes from Objective-C and Swift-UI"),": ",(0,a.kt)("a",i({parentName:"p"},{href:"https://pspdfkit.com/blog/2019/swizzling-in-swift/"}),"method swizzling")," is the process of changing the implementation of an existing selector (method)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Docusaurus, component swizzling means providing an alternative component that takes precedence over the component provided by the theme.")),(0,a.kt)("p",null,"You can think of it as ",(0,a.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Monkey_patch"}),"Monkey Patching")," for React components, enabling you to override the default implementation. Gatsby has a similar concept called ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/"}),"theme shadowing"),"."),(0,a.kt)("p",null,"To gain a deeper understanding of this, you have to understand ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/next/advanced/client#theme-aliases"}),"how theme components are resolved"),".")),(0,a.kt)("h2",i({},{id:"swizzling-process"}),"Swizzling Process"),(0,a.kt)("h3",i({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Docusaurus provides an convenient ",(0,a.kt)("strong",{parentName:"p"},"interactive CLI")," to swizzle components. You generally only need to remember the following command:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle\n")))),(0,a.kt)("p",null,"It will generate a new component your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," directory, which should look like this example:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Ejecting",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',title:'"src/theme/SomeComponent.js"'}),"import React from 'react';\n\nexport default function SomeComponent(props) {\n  // You can fully customize this implementation\n  // including changing the JSX, CSS and React hooks\n  return (\n    <div className=\"some-class\">\n      <h1>Some Component</h1>\n      <p>Some component implementation details</p>\n    </div>\n  );\n}\n"))),(0,a.kt)(r.Z,{value:"Wrapping",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',title:'"src/theme/SomeComponent.js"'}),"import React from 'react';\nimport SomeComponent from '@theme-original/SomeComponent';\n\nexport default function SomeComponentWrapper(props) {\n  // You can enhance the original component,\n  // including adding extra props or JSX elements around it\n  return (\n    <>\n      <SomeComponent {...props} />\n    </>\n  );\n}\n")))),(0,a.kt)("p",null,"To get an overview of all the themes and components available to swizzle, run:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle -- --list\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle -- --list\n")))),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," to see all available CLI options, or refer to the reference ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/next/cli#docusaurus-swizzle"}),"swizzle CLI documentation"),"."),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"After swizzling a component, ",(0,a.kt)("strong",{parentName:"p"},"restart your dev server")," in order for Docusaurus to know about the new component.")),(0,a.kt)("admonition",i({},{title:"Prefer staying on the safe side",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"Be sure to understand ",(0,a.kt)("a",i({parentName:"p"},{href:"#what-is-safe-to-swizzle"}),"which components are ",(0,a.kt)("strong",{parentName:"a"},"safe to swizzle")),". Some components are ",(0,a.kt)("strong",{parentName:"p"},"internal implementation details")," of a theme.")),(0,a.kt)("admonition",i({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus swizzle")," is only an automated way to help you swizzle the component. You can also create the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/SomeComponent.js")," file manually, and Docusaurus will ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/next/advanced/client#theme-aliases"}),"resolve it"),". There's no internal magic behind this command!")),(0,a.kt)("h3",i({},{id:"ejecting"}),"Ejecting"),(0,a.kt)("p",null,"Ejecting a theme component is the process of ",(0,a.kt)("strong",{parentName:"p"},"creating a copy")," of the original theme component, which you can ",(0,a.kt)("strong",{parentName:"p"},"fully customize and override"),"."),(0,a.kt)("p",null,"To eject a theme component, use the swizzle CLI interactively, or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--eject")," option:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle [theme name] [component name] -- --eject\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle [theme name] [component name] -- --eject\n")))),(0,a.kt)("p",null,"An example:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer -- --eject\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer -- --eject\n")))),(0,a.kt)("p",null,"This will copy the current ",(0,a.kt)("inlineCode",{parentName:"p"},"<Footer />")," component's implementation to your site's ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," directory. Docusaurus will now use this ",(0,a.kt)("inlineCode",{parentName:"p"},"<Footer>")," component copy instead of the original one. You are now free to completely re-implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Footer>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',title:'"src/theme/SomeComponent.js"'}),"import React from 'react';\n\nexport default function Footer(props) {\n  return (\n    <footer>\n      <h1>This is my custom site footer</h1>\n      <p>And it is very different from the original</p>\n    </footer>\n  );\n}\n")),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Ejecting an ",(0,a.kt)("a",i({parentName:"p"},{href:"#what-is-safe-to-swizzle"}),(0,a.kt)("strong",{parentName:"a"},"unsafe"))," component can sometimes lead to copying a large amount of internal code, which you now have to maintain yourself. It can make Docusaurus upgrades more difficult, as you will need to migrate your customizations if the props received or internal theme APIs used have changed."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Prefer ",(0,a.kt)("a",i({parentName:"strong"},{href:"#wrapping"}),"wrapping")," whenever possible"),": the amount of code to maintain is smaller.")),(0,a.kt)("admonition",i({},{title:"Re-swizzling",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"To keep ejected components up-to-date after a Docusaurus upgrade, re-run the eject command and compare the changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff"),". You are also recommended to write a brief comment at the top of the file explaining what changes you have made, so that you could more easily re-apply your changes after re-ejection.")),(0,a.kt)("h3",i({},{id:"wrapping"}),"Wrapping"),(0,a.kt)("p",null,"Wrapping a theme component is the process of ",(0,a.kt)("strong",{parentName:"p"},"creating a wrapper")," around the original theme component, which you can ",(0,a.kt)("strong",{parentName:"p"},"enhance"),"."),(0,a.kt)("p",null,"To wrap a theme component, use the swizzle CLI interactively, or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--wrap")," option:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle [theme name] [component name] -- --wrap\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle [theme name] [component name] -- --wrap\n")))),(0,a.kt)("p",null,"An example:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer -- --wrap\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer -- --wrap\n")))),(0,a.kt)("p",null,"This will create a wrapper in your site's ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," directory. Docusaurus will now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<FooterWrapper>")," component instead of the original one. You can now add customizations around the original component."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/theme/SomeComponent.js"',title:'"src/theme/SomeComponent.js"'}),"import React from 'react';\nimport Footer from '@theme-original/Footer';\n\nexport default function FooterWrapper(props) {\n  return (\n    <>\n      <section>\n        <h2>Extra section</h2>\n        <p>This is an extra section that appears above the original footer</p>\n      </section>\n      <Footer {...props} />\n    </>\n  );\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is this ",(0,a.kt)("code",null,"@theme-original")," thing?"),(0,a.kt)("p",null,"Docusaurus uses ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/next/advanced/client#theme-aliases"}),"theme aliases")," to resolve the theme components to use. The newly created wrapper takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/SomeComponent")," alias. ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-original/SomeComponent")," permits to import original component that the wrapper shadows without creating an infinite import loop where the wrapper imports itself.")),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Wrapping a theme is a great way to ",(0,a.kt)("strong",{parentName:"p"},"add extra components around existing one")," without ",(0,a.kt)("a",i({parentName:"p"},{href:"#ejecting"}),"ejecting")," it. For example, you can easily add a custom comment system under each blog post:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="src/theme/BlogPostItem.js"',title:'"src/theme/BlogPostItem.js"'}),"import React from 'react';\nimport BlogPostItem from '@theme-original/BlogPostItem';\nimport MyCustomCommentSystem from '@site/src/MyCustomCommentSystem';\n\nexport default function BlogPostItemWrapper(props) {\n  return (\n    <>\n      <BlogPostItem {...props} />\n      <MyCustomCommentSystem />\n    </>\n  );\n}\n"))),(0,a.kt)("h2",i({},{id:"what-is-safe-to-swizzle"}),"What is safe to swizzle?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With great power comes great responsibility")),(0,a.kt)("p",null,"Some theme components are ",(0,a.kt)("strong",{parentName:"p"},"internal implementation details")," of a theme. Docusaurus allows you to swizzle them, but it ",(0,a.kt)("strong",{parentName:"p"},"might be risky"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why is it risky?"),(0,a.kt)("p",null,"Theme authors (including us) might have to update their theme over time: changing the component props, name, file system location, types... For example, consider a component that receives two props ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"age"),", but after a refactor, it now receives a ",(0,a.kt)("inlineCode",{parentName:"p"},"person")," prop with the above two properties. Your component, which still expects these two props, will render ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," instead."),(0,a.kt)("p",null,"Moreover, internal components may simply disappear. If a component is called ",(0,a.kt)("inlineCode",{parentName:"p"},"Sidebar")," and it's later renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"DocSidebar"),", your swizzled component will be completely ignored."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Theme components marked as unsafe may change in a backward-incompatible way between theme minor versions.")," When upgrading a theme (or Docusaurus), your customizations might ",(0,a.kt)("strong",{parentName:"p"},"behave unexpectedly"),", and can even ",(0,a.kt)("strong",{parentName:"p"},"break your site"),".")),(0,a.kt)("p",null,"For each theme component, the swizzle CLI will indicate ",(0,a.kt)("strong",{parentName:"p"},"3 different levels of safety")," declared by theme authors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Safe"),": this component is safe to be swizzled, its public API is considered stable, and no breaking changes should happen within a theme ",(0,a.kt)("strong",{parentName:"li"},"major version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unsafe"),": this component is a theme implementation detail, not safe to be swizzled, and breaking changes might happen within a theme ",(0,a.kt)("strong",{parentName:"li"},"minor version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Forbidden"),": the swizzle CLI will prevent you from swizzling this component, because it is not designed to be swizzled at all")),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Some components might be safe to wrap, but not safe to eject.")),(0,a.kt)("admonition",i({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Don't be too ",(0,a.kt)("strong",{parentName:"p"},"afraid to swizzle unsafe components"),": just keep in mind that ",(0,a.kt)("strong",{parentName:"p"},"breaking changes")," might happen, and you might need to upgrade your customizations manually on minor version upgrades.")),(0,a.kt)("admonition",i({},{title:"Report your use-case",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"If you have a ",(0,a.kt)("strong",{parentName:"p"},"strong use-case for swizzling an unsafe component"),", please ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/docusaurus/discussions/5468"}),(0,a.kt)("strong",{parentName:"a"},"report it here"))," and we will work together to find a solution to make it safe.")),(0,a.kt)("h2",i({},{id:"which-component-should-i-swizzle"}),"Which component should I swizzle?"),(0,a.kt)("p",null,"It is not always clear which component you should swizzle exactly to achieve the desired result. ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),", which provides most of the theme components, has about ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme"}),"100 components"),"!"),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"To print an overview of all the ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," components:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic -- --list\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic -- --list\n"))))),(0,a.kt)("p",null,"You can follow these steps to locate the appropriate component to swizzle:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Component description.")," Some components provide a short description, which is a good way to find the right one."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Component name.")," Official theme components are semantically named, so you should be able to infer its function from the name. The swizzle CLI allows you to enter part of a component name to narrow down the available choices. For example, if you run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn swizzle @docusaurus/theme-classic"),", and enter ",(0,a.kt)("inlineCode",{parentName:"li"},"Doc"),", only the docs-related components will be listed."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start with a higher-level component.")," Components form a tree with some components importing others. Every route will be associated with one top-level component that the route will render (most of them listed in ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/next/advanced/routing#routing-in-content-plugins"}),"Routing in content plugins"),"). For example, all blog post pages have ",(0,a.kt)("inlineCode",{parentName:"li"},"@theme/BlogPostPage")," as the topmost component. You can start with swizzling this component, and then go down the component tree to locate the component that renders just what you are targeting. Don't forget to unswizzle the rest by deleting the files after you've found the correct one, so you don't maintain too many components."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Read the ",(0,a.kt)("a",i({parentName:"strong"},{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme"}),"theme source code"))," and use search wisely.")),(0,a.kt)("admonition",i({},{title:"Just ask!",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"If you still have no idea which component to swizzle to achieve the desired effect, you can reach out for help in one of our ",(0,a.kt)("a",i({parentName:"p"},{href:"/community/support"}),"support channels"),"."),(0,a.kt)("p",{parentName:"admonition"},"We also want to understand better your fanciest customization use-cases, so please ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/facebook/docusaurus/discussions/5468"}),(0,a.kt)("strong",{parentName:"a"},"report them")),".")),(0,a.kt)("h2",i({},{id:"do-i-need-to-swizzle"}),"Do I need to swizzle?"),(0,a.kt)("p",null,"Swizzling ultimately means you have to maintain some additional React code that interact with Docusaurus internal APIs. If you can, think about the following alternatives when customizing your site:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use CSS.")," CSS rules and selectors can often help you achieve a decent degree of customization. Refer to ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/next/styling-layout"}),"styling and layout")," for more details."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use translations.")," It may sound surprising, but translations are ultimately just a way to customize the text labels. For example, if your site's default language is ",(0,a.kt)("inlineCode",{parentName:"li"},"en"),", you can still run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn write-translations -l en")," and edit the ",(0,a.kt)("inlineCode",{parentName:"li"},"code.json")," emitted. Refer to the ",(0,a.kt)("a",i({parentName:"li"},{href:"/docs/next/i18n/tutorial"}),"i18n tutorial")," for more details.")),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"The smaller, the better.")," If swizzling is inevitable, prefer to swizzle only the relevant part and maintain as little code on your own as possible. Swizzling a small component often means less risk of ",(0,a.kt)("strong",{parentName:"p"},"breaking changes")," during upgrade."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",i({parentName:"p"},{href:"#wrapping"}),"Wrapping")," is also a far safer alternative to ",(0,a.kt)("a",i({parentName:"p"},{href:"#ejecting"}),"ejecting"),".")),(0,a.kt)("h2",i({},{id:"wrapper-your-site-with-root"}),"Wrapping your site with ",(0,a.kt)("inlineCode",{parentName:"h2"},"<Root>")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Root>")," component is rendered at the ",(0,a.kt)("strong",{parentName:"p"},"very top")," of the React tree, above the theme ",(0,a.kt)("inlineCode",{parentName:"p"},"<Layout>"),", and ",(0,a.kt)("strong",{parentName:"p"},"never unmounts"),". It is the perfect place to add stateful logic that should not be re-initialized across navigations (user authentication status, shopping card state...)."),(0,a.kt)("p",null,"Swizzle it ",(0,a.kt)("strong",{parentName:"p"},"manually")," by creating a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/Root.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="src/theme/Root.js"',title:'"src/theme/Root.js"'}),"import React from 'react';\n\n// Default implementation, that you can customize\nexport default function Root({children}) {\n  return <>{children}</>;\n}\n")),(0,a.kt)("admonition",i({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use this component to render React Context providers.")))}h.isMDXComponent=!0}}]);