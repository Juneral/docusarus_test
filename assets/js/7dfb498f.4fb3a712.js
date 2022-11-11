"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79897],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});n(27378);var a=n(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={},s="Plugins",l={unversionedId:"advanced/plugins",id:"version-2.0.0-beta.22/advanced/plugins",title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets.",source:"@site/versioned_docs/version-2.0.0-beta.22/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docusarus_test/docs/2.0.0-beta.22/advanced/plugins",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",frontMatter:{},sidebar:"docs",previous:{title:"Architecture",permalink:"/docusarus_test/docs/2.0.0-beta.22/advanced/architecture"},next:{title:"Routing",permalink:"/docusarus_test/docs/2.0.0-beta.22/advanced/routing"}},u={},c=[{value:"Creating plugins",id:"creating-plugins",level:2},{value:"Function definition",id:"function-definition",level:3},{value:"Module definition",id:"module-definition",level:3},{value:"Plugin design",id:"plugin-design",level:2},{value:"Theme design",id:"theme-design",level:3}],p={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"plugins"}),"Plugins"),(0,a.kt)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets."),(0,a.kt)("h2",i({},{id:"creating-plugins"}),"Creating plugins"),(0,a.kt)("p",null,"A plugin is a function that takes two parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),". It returns a plugin instance object (or a promise). You can create plugins as functions or modules. For more information, refer to the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugin-methods/"}),"plugin method references section"),"."),(0,a.kt)("h3",i({},{id:"function-definition"}),"Function definition"),(0,a.kt)("p",null,"You can use a plugin as a function directly included in the Docusaurus config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    // highlight-start\n    async function myPlugin(context, options) {\n      // ...\n      return {\n        name: 'my-plugin',\n        async loadContent() {\n          // ...\n        },\n        async contentLoaded({content, actions}) {\n          // ...\n        },\n        /* other lifecycle API */\n      };\n    },\n    // highlight-end\n  ],\n};\n")),(0,a.kt)("h3",i({},{id:"module-definition"}),"Module definition"),(0,a.kt)("p",null,"You can use a plugin as a module path referencing a separate file or npm package:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    // without options:\n    './my-plugin',\n    // or with options:\n    ['./my-plugin', options],\n  ],\n};\n")),(0,a.kt)("p",null,"Then in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"my-plugin"),", you can create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," such as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="my-plugin/index.js"',title:'"my-plugin/index.js"'}),"module.exports = async function myPlugin(context, options) {\n  // ...\n  return {\n    name: 'my-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can view all plugins installed in your site using the ",(0,a.kt)("a",i({parentName:"p"},{href:"/__docusaurus/debug/metadata"}),"debug plugin's metadata panel"),"."),(0,a.kt)("p",null,"Plugins come as several types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package"),": an external package you installed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project"),": a plugin you created in your project, given to Docusaurus as a local file path"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"local"),": a plugin created using the function definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"synthetic"),": a \"fake plugin\" Docusaurus created internally, so we take advantage of our modular architecture and don't let the core do much special work. You won't see this in the metadata because it's an implementation detail.")),(0,a.kt)("p",null,"You can access them on the client side with ",(0,a.kt)("inlineCode",{parentName:"p"},"useDocusaurusContext().siteMetadata.pluginVersions"),"."),(0,a.kt)("h2",i({},{id:"plugin-design"}),"Plugin design"),(0,a.kt)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but is not limited to) extending the webpack config, modifying the data loaded, and creating new components to be used in a page."),(0,a.kt)("h3",i({},{id:"theme-design"}),"Theme design"),(0,a.kt)("p",null,"When plugins have loaded their content, the data is made available to the client side through actions like ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugin-methods/lifecycle-apis#addRoute"}),(0,a.kt)("inlineCode",{parentName:"a"},"createData")," + ",(0,a.kt)("inlineCode",{parentName:"a"},"addRoute"))," or ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugin-methods/lifecycle-apis#setGlobalData"}),(0,a.kt)("inlineCode",{parentName:"a"},"setGlobalData")),". This data has to be ",(0,a.kt)("em",{parentName:"p"},"serialized")," to plain strings, because ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/advanced/architecture"}),"plugins and themes run in different environments"),". Once the data arrives on the client side, the rest becomes familiar to React developers: data is passed along components, components are bundled with Webpack, and rendered to the window through ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Themes provide the set of UI components to render the content.")," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, which makes swapping designs easy."),(0,a.kt)("p",null,"For example, a Docusaurus blog may consist of a blog plugin and a blog theme."),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This is a contrived example: in practice, ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," provides the theme for docs, blog, and layouts.")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // highlight-next-line\n  themes: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n};\n")),(0,a.kt)("p",null,"And if you want to use Bootstrap styling, you can swap out the theme with ",(0,a.kt)("inlineCode",{parentName:"p"},"theme-blog-bootstrap")," (another fictitious non-existing theme):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // highlight-next-line\n  themes: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n};\n")),(0,a.kt)("p",null,"Now, although the theme receives the same data from the plugin, how the theme chooses to ",(0,a.kt)("em",{parentName:"p"},"render")," the data as UI can be drastically different."),(0,a.kt)("p",null,"While themes share the exact same lifecycle methods with plugins, themes' implementations can look very different from those of plugins based on themes' designed objectives."),(0,a.kt)("p",null,"Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. A theme still acts like a plugin and exposes some lifecycle methods, but most likely they would not use ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugin-methods/lifecycle-apis#loadContent"}),(0,a.kt)("inlineCode",{parentName:"a"},"loadContent")),", since they only receive data from plugins, but don't generate data themselves; themes are typically also accompanied by an ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," directory full of components, which are made known to the core through the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/api/plugin-methods/extend-infrastructure#getThemePath"}),(0,a.kt)("inlineCode",{parentName:"a"},"getThemePath"))," lifecycle."),(0,a.kt)("p",null,"To summarize:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Themes share the same lifecycle methods with Plugins"),(0,a.kt)("li",{parentName:"ul"},"Themes are run after all existing Plugins"),(0,a.kt)("li",{parentName:"ul"},"Themes add component aliases by providing ",(0,a.kt)("inlineCode",{parentName:"li"},"getThemePath"),".")))}d.isMDXComponent=!0}}]);