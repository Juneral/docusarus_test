"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37819],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});t(27378);var o=t(35318);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const a={},s="Plugin Method References",l={unversionedId:"api/plugin-methods/README",id:"api/plugin-methods/README",title:"Plugin Method References",description:"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable.",source:"@site/docs/api/plugin-methods/README.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/",permalink:"/docusarus_test/docs/next/api/plugin-methods/",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"docusaurus.config.js",permalink:"/docusarus_test/docs/next/api/docusaurus-config"},next:{title:"Lifecycle APIs",permalink:"/docusarus_test/docs/next/api/plugin-methods/lifecycle-apis"}},u={},c=[{value:"Plugin module",id:"plugin-module",level:2},{value:"Plugin constructor",id:"plugin-constructor",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){var{components:n}=e,t=i(e,["components"]);return(0,o.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"plugin-method-references"}),"Plugin Method References"),(0,o.kt)("admonition",r({},{type:"caution"}),(0,o.kt)("p",{parentName:"admonition"},"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable.")),(0,o.kt)("p",null,"Plugin APIs are shared by themes and plugins\u2014themes are loaded just like plugins."),(0,o.kt)("h2",r({},{id:"plugin-module"}),"Plugin module"),(0,o.kt)("p",null,"Every plugin is imported as a module. The module is expected to have the following members:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"default export"),": the constructor function for the plugin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Named exports"),": the ",(0,o.kt)("a",r({parentName:"li"},{href:"/docusarus_test/docs/next/api/plugin-methods/static-methods"}),"static methods")," called before plugins are initialized.")),(0,o.kt)("h2",r({},{id:"plugin-constructor"}),"Plugin constructor"),(0,o.kt)("p",null,"The plugin module's default export is a constructor function with the signature ",(0,o.kt)("inlineCode",{parentName:"p"},"(context: LoadContext, options: PluginOptions) => Plugin | Promise<Plugin>"),"."),(0,o.kt)("h3",r({},{id:"context"}),(0,o.kt)("inlineCode",{parentName:"h3"},"context")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic, and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"type LoadContext = {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n};\n")),(0,o.kt)("h3",r({},{id:"options"}),(0,o.kt)("inlineCode",{parentName:"h3"},"options")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"options")," are the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docusarus_test/docs/next/using-plugins#configuring-plugins"}),"second optional parameter when the plugins are used"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". If there's a ",(0,o.kt)("a",r({parentName:"p"},{href:"/docusarus_test/docs/next/api/plugin-methods/static-methods#validateOptions"}),(0,o.kt)("inlineCode",{parentName:"a"},"validateOptions"))," function exported, the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," will be validated and normalized beforehand."),(0,o.kt)("p",null,"Alternatively, if a preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to the individual plugin to define what options it takes."),(0,o.kt)("h2",r({},{id:"example"}),"Example"),(0,o.kt)("p",null,"Here's a mental model for a presumptuous plugin implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// A JavaScript function that returns an object.\n// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.\n// `opts` is the user-defined options.\nasync function myPlugin(context, opts) {\n  return {\n    // A compulsory field used as the namespace for directories to cache\n    // the intermediate data for each plugin.\n    // If you're writing your own local plugin, you will want it to\n    // be unique in order not to potentially conflict with imported plugins.\n    // A good way will be to add your own project name within.\n    name: 'docusaurus-my-project-cool-plugin',\n\n    async loadContent() {\n      // The loadContent hook is executed after siteConfig and env has been loaded.\n      // You can return a JavaScript object that will be passed to contentLoaded hook.\n    },\n\n    async contentLoaded({content, actions}) {\n      // The contentLoaded hook is done after loadContent hook is done.\n      // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)\n    },\n\n    async postBuild(props) {\n      // After docusaurus <build> finish.\n    },\n\n    // TODO\n    async postStart(props) {\n      // docusaurus <start> finish\n    },\n\n    // TODO\n    afterDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverbefore\n    },\n\n    // TODO\n    beforeDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverafter\n    },\n\n    configureWebpack(config, isServer, utils, content) {\n      // Modify internal webpack config. If returned value is an Object, it\n      // will be merged into the final config using webpack-merge;\n      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.\n    },\n\n    getPathsToWatch() {\n      // Paths to watch.\n    },\n\n    getThemePath() {\n      // Returns the path to the directory where the theme components can\n      // be found.\n    },\n\n    getClientModules() {\n      // Return an array of paths to the modules that are to be imported\n      // in the client bundle. These modules are imported globally before\n      // React even renders the initial UI.\n    },\n\n    extendCli(cli) {\n      // Register an extra command to enhance the CLI of Docusaurus\n    },\n\n    injectHtmlTags({content}) {\n      // Inject head and/or body HTML tags.\n    },\n\n    async getTranslationFiles({content}) {\n      // Return translation files\n    },\n\n    translateContent({content, translationFiles}) {\n      // translate the plugin content here\n    },\n\n    translateThemeConfig({themeConfig, translationFiles}) {\n      // translate the site themeConfig here\n    },\n\n    async getDefaultCodeTranslationMessages() {\n      // return default theme translations here\n    },\n  };\n}\n\nmyPlugin.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n\nmyPlugin.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n\nmodule.exports = myPlugin;\n")))}d.isMDXComponent=!0}}]);