"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3196],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99238:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(27378),r=n(38944),i=n(41876),s=n(13415),o=n(64149),l=n(36712);const d="cardContainer_Uewx",c="cardTitle_dwRT",p="cardDescription_mCBT";function u({href:e,children:t}){return a.createElement(s.Z,{href:e,className:(0,r.Z)("card padding--lg",d)},t)}function m({href:e,icon:t,title:n,description:i}){return a.createElement(u,{href:e},a.createElement("h2",{className:(0,r.Z)("text--truncate",c),title:n},t," ",n),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:i},i))}function g({item:e}){const t=(0,i.Wl)(e);return t?a.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){const t=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const r=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);return a.createElement(m,{href:e.href,icon:t,title:e.label,description:null==r?void 0:r.description})}function b({item:e}){switch(e.type){case"link":return a.createElement(h,{item:e});case"category":return a.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function y({className:e}){const t=(0,i.jA)();return a.createElement(f,{items:t.items,className:e})}function f(e){const{items:t,className:n}=e;if(!t)return a.createElement(y,k({},e));const s=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},s.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},61132:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(38944);const i="tabItem_pnkT";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",s({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),r=n(38944),i=n(29088),s=n(52196),o=n(77468),l=n(75527);const d="tabList_Qoir",c="tabItem_AQgk";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:m,groupId:g,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=m?m:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const N=null===u?u:null!==(f=null!=u?u:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==f?f:b[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,o.U)(),[w,j]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=g){const e=v[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==w&&(T(t),j(a),null!=g&&x(g,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>C.push(e),onKeyDown:O,onClick:E},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(u,p({key:String(t)},e))}},6698:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(27378),r=n(38944);const i="browserWindow_my1Q",s="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",d="dot_giz1",c="browserWindowMenuIcon_Vhuh",p="bar_rrRL",u="browserWindowBody_Idgs";function m({children:e,minHeight:t,url:n="http://localhost:3000"}){return a.createElement("div",{className:i,style:{minHeight:t}},a.createElement("div",{className:s},a.createElement("div",{className:o},a.createElement("span",{className:d,style:{background:"#f25f58"}}),a.createElement("span",{className:d,style:{background:"#fbbe3c"}}),a.createElement("span",{className:d,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l,"text--truncate")},n),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:p}),a.createElement("span",{className:p}),a.createElement("span",{className:p})))),a.createElement("div",{className:u},e))}},55045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>g});n(27378);var a=n(35318),r=n(38269),i=n(61132),s=n(6698),o=n(99238);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={toc_max_heading_level:4,slug:"/sidebar/items"},p="Sidebar items",u={unversionedId:"guides/docs/sidebar/items",id:"guides/docs/sidebar/items",title:"Sidebar items",description:"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.",source:"@site/docs/guides/docs/sidebar/items.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/items",permalink:"/docusarus_test/en/docs/next/sidebar/items",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.md",tags:[],version:"current",frontMatter:{toc_max_heading_level:4,slug:"/sidebar/items"},sidebar:"docs",previous:{title:"Sidebar",permalink:"/docusarus_test/en/docs/next/sidebar"},next:{title:"Autogenerated",permalink:"/docusarus_test/en/docs/next/sidebar/autogenerated"}},m={},g=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}],h={toc:g};function b(e){var{components:t}=e,n=d(e,["components"]);return(0,a.kt)("wrapper",l({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"sidebar-items"}),"Sidebar items"),(0,a.kt)("p",null,"We have introduced three types of item types in the example in the previous section: ",(0,a.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"category"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"link"),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,a.kt)("inlineCode",{parentName:"p"},"autogenerated"),", which we will explain in detail later."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"#sidebar-item-doc"}),"Doc")),": link to a doc page, associating it with the sidebar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"#sidebar-item-link"}),"Link")),": link to any internal or external page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"#sidebar-item-category"}),"Category")),": creates a dropdown of sidebar items"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"/docusarus_test/en/docs/next/sidebar/autogenerated"}),"Autogenerated")),": generate a sidebar slice automatically"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"#sidebar-item-html"}),"HTML")),": renders pure HTML in the item's position"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",l({parentName:"strong"},{href:"/docusarus_test/en/docs/next/sidebar/multiple-sidebars#sidebar-item-ref"}),"*","Ref")),": link to a doc page, without making the item take part in navigation generation")),(0,a.kt)("h2",l({},{id:"sidebar-item-doc"}),"Doc: link to a doc"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," type to link to a doc page and assign that doc to a sidebar:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("p",null,"If you use the doc shorthand or ",(0,a.kt)("a",l({parentName:"p"},{href:"#sidebar-item-autogenerated"}),"autogenerated")," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_label")," Markdown front matter within that doc, which has higher precedence over the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," key in the sidebar item. Similarly, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props")," to declare custom metadata for a doc page."),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," item sets an ",(0,a.kt)("a",l({parentName:"p"},{href:"#sidebar-association"}),"implicit sidebar association"),". Don't assign the same doc to multiple sidebars: change the type to ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," instead.")),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object.")),(0,a.kt)("h2",l({},{id:"sidebar-item-link"}),"Link: link to any page"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," type to link to any page (internal or external) that is not a doc."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("h2",l({},{id:"sidebar-item-html"}),"HTML: render custom markup"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," type to render custom HTML within the item's ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>")," tag."),(0,a.kt)("p",null,"This can be useful for inserting custom items such as dividers, section titles, ads, and images."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"The menu item is already wrapped in an ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>")," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," property to style it:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"))),(0,a.kt)("h2",l({},{id:"sidebar-item-category"}),"Category: create a hierarchy"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," type to create a hierarchy of sidebar items."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use the ",(0,a.kt)("a",l({parentName:"p"},{href:"#category-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"shorthand syntax"))," when you don't need customizations:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"))),(0,a.kt)("h3",l({},{id:"category-link"}),"Category links"),(0,a.kt)("p",null,"With category links, clicking on a category can navigate you to another page."),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use category links to introduce a category of documents."),(0,a.kt)("p",{parentName:"admonition"},"Autogenerated categories can use the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/en/docs/next/sidebar/autogenerated#category-item-metadata"}),(0,a.kt)("inlineCode",{parentName:"a"},"_category_.yml"))," file to declare the link.")),(0,a.kt)("h4",l({},{id:"generated-index-page"}),"Generated index page"),(0,a.kt)("p",null,"You can auto-generate an index page that displays all the direct children of this category. The ",(0,a.kt)("inlineCode",{parentName:"p"},"slug")," allows you to customize the generated page's route, which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"/category/[categoryName]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"See it in action on the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/category/guides"}),"Docusaurus Guides page"),"."),(0,a.kt)("admonition",l({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"generated-index")," links as a quick way to get an introductory document.")),(0,a.kt)("h4",l({},{id:"category-doc-link"}),"Doc link"),(0,a.kt)("p",null,"A category can link to an existing document."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"See it in action on the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/en/docs/next/i18n/introduction"}),"i18n introduction page"),"."),(0,a.kt)("h4",l({},{id:"embedding-generated-index-in-doc-page"}),"Embedding generated index in doc page"),(0,a.kt)("p",null,"You can embed the generated cards list in a normal doc page as well with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DocCardList")," component. It will display all the sidebar items of the parent category of the current document."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-md",metastring:'title="docs/sidebar/index.md"',title:'"docs/sidebar/index.md"'}),"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n")),(0,a.kt)(s.Z,{mdxType:"BrowserWindow"},(0,a.kt)(o.Z,{mdxType:"DocCardList"})),(0,a.kt)("h3",l({},{id:"collapsible-categories"}),"Collapsible categories"),(0,a.kt)("p",null,"We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible: false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"To make all categories non-collapsible by default, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-content-docs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("admonition",l({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The option in ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebarCollapsible")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," globally.")),(0,a.kt)("h3",l({},{id:"expanded-categories-by-default"}),"Expanded categories by default"),(0,a.kt)("p",null,"Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible"),", you can also set the global configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"options.sidebarCollapsed")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Individual ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed")," options in ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," will still take precedence over this configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"When a category has ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed: true")," but ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsible: false")," (either through ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded.")),(0,a.kt)("h2",l({},{id:"using-shorthands"}),"Using shorthands"),(0,a.kt)("p",null,"You can express typical sidebar items without much customization more concisely with ",(0,a.kt)("strong",{parentName:"p"},"shorthand syntaxes"),". There are two parts to this: ",(0,a.kt)("a",l({parentName:"p"},{href:"#doc-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"doc shorthand"))," and ",(0,a.kt)("a",l({parentName:"p"},{href:"#category-shorthand"}),(0,a.kt)("strong",{parentName:"a"},"category shorthand")),"."),(0,a.kt)("h3",l({},{id:"doc-shorthand"}),"Doc shorthand"),(0,a.kt)("p",null,"An item with type ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," can be simply a string representing its ID:"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Longhand",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"))),(0,a.kt)(i.Z,{value:"Shorthand",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n")))),(0,a.kt)("p",null,"So it's possible to simplify the example above to:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("h3",l({},{id:"category-shorthand"}),"Category shorthand"),(0,a.kt)("p",null,"A category item can be represented by an object whose key is its label, and the value is an array of subitems."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Longhand",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"))),(0,a.kt)(i.Z,{value:"Shorthand",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n")))),(0,a.kt)("p",null,"This permits us to simplify that example to:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,a.kt)("strong",{parentName:"p"},"sidebar slice"),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,a.kt)("a",l({parentName:"p"},{href:"/docusarus_test/en/docs/next/sidebar/autogenerated"}),"autogenerated sidebars"),"."),(0,a.kt)("p",null,"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Before",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"))),(0,a.kt)(i.Z,{value:"After",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'}),"module.exports = {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n")))))}b.isMDXComponent=!0}}]);