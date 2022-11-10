"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33643],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(27378);var i=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={sidebar_position:4},l="Static methods",s={unversionedId:"api/plugin-methods/static-methods",id:"version-2.0.0-beta.22/api/plugin-methods/static-methods",title:"Static methods",description:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance.",source:"@site/versioned_docs/version-2.0.0-beta.22/api/plugin-methods/static-methods.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/static-methods",permalink:"/docs/2.0.0-beta.22/api/plugin-methods/static-methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/static-methods.md",tags:[],version:"2.0.0-beta.22",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"I18n lifecycles",permalink:"/docs/2.0.0-beta.22/api/plugin-methods/i18n-lifecycles"},next:{title:"Plugins overview",permalink:"/docs/2.0.0-beta.22/api/plugins"}},d={},p=[{value:"<code>validateOptions({options, validate})</code>",id:"validateOptions",level:2},{value:"<code>options</code>",id:"options",level:3},{value:"<code>validate</code>",id:"validate",level:3},{value:"<code>validateThemeConfig({themeConfig, validate})</code>",id:"validateThemeConfig",level:2},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>validate</code>",id:"validate-1",level:3}],c={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",a({},{id:"static-methods"}),"Static methods"),(0,i.kt)("p",null,"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance."),(0,i.kt)("h2",a({},{id:"validateOptions"}),(0,i.kt)("inlineCode",{parentName:"h2"},"validateOptions({options, validate})")),(0,i.kt)("p",null,"Returns validated and normalized options for the plugin. This method is called before the plugin is initialized. You must return the options since they will be passed to the plugin during initialization."),(0,i.kt)("h3",a({},{id:"options"}),(0,i.kt)("inlineCode",{parentName:"h3"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," passed to plugin for validation and normalization."),(0,i.kt)("h3",a({},{id:"validate"}),(0,i.kt)("inlineCode",{parentName:"h3"},"validate")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateOptions")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",a({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," schema and options as the arguments, returns validated and normalized options. ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,i.kt)("admonition",a({},{type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/joi"}),"Joi")," is recommended for validation and normalization of options."),(0,i.kt)("p",{parentName:"admonition"},"To avoid mixing Joi versions, use ",(0,i.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")'))),(0,i.kt)("p",null,"If you don't use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",a({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options and return options in case of success."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="my-plugin/src/index.js"',title:'"my-plugin/src/index.js"'}),"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n// highlight-end\n\nmodule.exports = myPlugin;\n")),(0,i.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-ts",metastring:'title="my-plugin/src/index.ts"',title:'"my-plugin/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n}\n// highlight-end\n")),(0,i.kt)("h2",a({},{id:"validateThemeConfig"}),(0,i.kt)("inlineCode",{parentName:"h2"},"validateThemeConfig({themeConfig, validate})")),(0,i.kt)("p",null,"Return validated and normalized configuration for the theme."),(0,i.kt)("h3",a({},{id:"themeConfig"}),(0,i.kt)("inlineCode",{parentName:"h3"},"themeConfig")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," provided in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," for validation and normalization."),(0,i.kt)("h3",a({},{id:"validate-1"}),(0,i.kt)("inlineCode",{parentName:"h3"},"validate")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"validateThemeConfig")," is called with ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," function which takes a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",a({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," schema and ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," as the arguments, returns validated and normalized options. ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," will automatically handle error and validation config."),(0,i.kt)("admonition",a({},{type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/joi"}),"Joi")," is recommended for validation and normalization of theme config."),(0,i.kt)("p",{parentName:"admonition"},"To avoid mixing Joi versions, use ",(0,i.kt)("inlineCode",{parentName:"p"},'const {Joi} = require("@docusaurus/utils-validation")'))),(0,i.kt)("p",null,"If you don't use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",a({parentName:"strong"},{href:"https://www.npmjs.com/package/joi"}),"Joi"))," for validation you can throw an Error in case of invalid options."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nmyPlugin.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n// highlight-end\n\nmodule.exports = validateThemeConfig;\n")),(0,i.kt)("p",null,"In TypeScript, you can also choose to export this as a separate named export."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-ts",metastring:'title="my-theme/src/index.ts"',title:'"my-theme/src/index.ts"'}),"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n// highlight-end\n")))}m.isMDXComponent=!0}}]);