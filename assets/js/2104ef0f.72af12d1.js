"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49317],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:2},s="Extending infrastructure",l={unversionedId:"api/plugin-methods/extend-infrastructure",id:"version-2.0.0-rc.1/api/plugin-methods/extend-infrastructure",title:"Extending infrastructure",description:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins.",source:"@site/versioned_docs/version-2.0.0-rc.1/api/plugin-methods/extend-infrastructure.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/extend-infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/extend-infrastructure.md",tags:[],version:"2.0.0-rc.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Lifecycle APIs",permalink:"/docs/api/plugin-methods/lifecycle-apis"},next:{title:"I18n lifecycles",permalink:"/docs/api/plugin-methods/i18n-lifecycles"}},c={},p=[{value:"<code>getPathsToWatch()</code>",id:"getPathsToWatch",level:2},{value:"<code>extendCli(cli)</code>",id:"extendCli",level:2},{value:"<code>getThemePath()</code>",id:"getThemePath",level:2},{value:"<code>getTypeScriptThemePath()</code>",id:"getTypeScriptThemePath",level:2},{value:"<code>getSwizzleComponentList()</code>",id:"getSwizzleComponentList",level:2}],u={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"extending-infrastructure"}),"Extending infrastructure"),(0,r.kt)("p",null,"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins."),(0,r.kt)("h2",a({},{id:"getPathsToWatch"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getPathsToWatch()")),(0,r.kt)("p",null,"Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," from Node, which you may use to find the necessary directory information about the site."),(0,r.kt)("p",null,"Use this for files that are consumed server-side, because theme files are automatically watched by Webpack dev server."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"const path = require('path');\nmodule.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",a({},{id:"extendCli"}),(0,r.kt)("inlineCode",{parentName:"h2"},"extendCli(cli)")),(0,r.kt)("p",null,"Register an extra command to enhance the CLI of Docusaurus. ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," is a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/commander/v/5.1.0"}),"commander")," object."),(0,r.kt)("admonition",a({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The commander version matters! We use commander v5, and make sure you are referring to the right version documentation for available APIs.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",a({},{id:"getThemePath"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getThemePath()")),(0,r.kt)("p",null,"Returns the path to the directory where the theme components can be found. When your users call ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath")," is called and its returned path is used to find your theme components. Relative paths are resolved against the folder containing the entry point."),(0,r.kt)("p",null,"For example, your ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath")," can be:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      return './theme';\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",a({},{id:"getTypeScriptThemePath"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getTypeScriptThemePath()")),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()"),", it should return the path to the directory where the source code of TypeScript theme components can be found. This path is purely for swizzling TypeScript theme components, and theme components under this path will ",(0,r.kt)("strong",{parentName:"p"},"not")," be resolved by Webpack. Therefore, it is not a replacement for ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()"),". Typically, you can make the path returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getTypeScriptThemePath()")," be your source directory, and make the path returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getThemePath()")," be the compiled JavaScript output."),(0,r.kt)("admonition",a({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"For TypeScript theme authors: you are strongly advised to make your compiled output as human-readable as possible. Only strip type annotations and don't transpile any syntaxes, because they will be handled by Webpack's Babel loader based on the targeted browser versions."),(0,r.kt)("p",{parentName:"admonition"},"You should also format these files with Prettier. Remember\u2014JS files can and will be directly consumed by your users.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return '../lib/theme';\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return '../src/theme';\n    },\n    // highlight-end\n  };\n};\n")),(0,r.kt)("h2",a({},{id:"getSwizzleComponentList"}),(0,r.kt)("inlineCode",{parentName:"h2"},"getSwizzleComponentList()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is a static method, not attached to any plugin instance.")),(0,r.kt)("p",null,"Returns a list of stable components that are considered safe for swizzling. These components will be swizzlable without ",(0,r.kt)("inlineCode",{parentName:"p"},"--danger"),". All components are considered unstable by default. If an empty array is returned, all components are considered unstable. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is returned, all components are considered stable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const swizzleAllowedComponents = [\n  'CodeBlock',\n  'DocSidebar',\n  'Footer',\n  'NotFound',\n  'SearchBar',\n  'hooks/useTheme',\n  'prism-include-languages',\n];\n\nmyTheme.getSwizzleComponentList = () => swizzleAllowedComponents;\n")))}d.isMDXComponent=!0}}]);