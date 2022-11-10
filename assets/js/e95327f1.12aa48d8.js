"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36064],{35318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},86419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});t(27378);var a=t(35318);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const r={sidebar_position:1,toc_max_heading_level:4},s="Lifecycle APIs",l={unversionedId:"api/plugin-methods/lifecycle-apis",id:"api/plugin-methods/lifecycle-apis",title:"Lifecycle APIs",description:"During the build, plugins are loaded in parallel to fetch their own contents and render them to routes. Plugins may also configure webpack or post-process the generated files.",source:"@site/docs/api/plugin-methods/lifecycle-apis.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/lifecycle-apis",permalink:"/docs/api/plugin-methods/lifecycle-apis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/lifecycle-apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:4},sidebar:"api",previous:{title:"Plugin Method References",permalink:"/docs/api/plugin-methods/"},next:{title:"Extending infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure"}},u={},d=[{value:"<code>async loadContent()</code>",id:"loadContent",level:2},{value:"<code>async contentLoaded({content, actions})</code>",id:"contentLoaded",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>actions</code>",id:"actions",level:3},{value:"<code>addRoute(config: RouteConfig): void</code>",id:"addRoute",level:4},{value:"<code>createData(name: string, data: any): Promise&lt;string&gt;</code>",id:"createData",level:4},{value:"<code>setGlobalData(data: any): void</code>",id:"setGlobalData",level:4},{value:"<code>configureWebpack(config, isServer, utils, content)</code>",id:"configureWebpack",level:2},{value:"<code>config</code>",id:"config",level:3},{value:"<code>isServer</code>",id:"isServer",level:3},{value:"<code>utils</code>",id:"utils",level:3},{value:"<code>content</code>",id:"content-1",level:3},{value:"Merge strategy",id:"merge-strategy",level:3},{value:"Configuring dev server",id:"configuring-dev-server",level:3},{value:"<code>configurePostCss(options)</code>",id:"configurePostCss",level:2},{value:"<code>postBuild(props)</code>",id:"postBuild",level:2},{value:"<code>injectHtmlTags({content})</code>",id:"injectHtmlTags",level:2},{value:"<code>getClientModules()</code>",id:"getClientModules",level:2}],c={toc:d};function p(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",i({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"lifecycle-apis"}),"Lifecycle APIs"),(0,a.kt)("p",null,"During the build, plugins are loaded in parallel to fetch their own contents and render them to routes. Plugins may also configure webpack or post-process the generated files."),(0,a.kt)("h2",i({},{id:"loadContent"}),(0,a.kt)("inlineCode",{parentName:"h2"},"async loadContent()")),(0,a.kt)("p",null,"Plugins should use this lifecycle to fetch from data sources (filesystem, remote API, headless CMS, etc.) or do some server processing. The return value is the content it needs."),(0,a.kt)("p",null,"For example, this plugin below return a random integer between 1 to 10 as content."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    async loadContent() {\n      return 1 + Math.floor(Math.random() * 10);\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",i({},{id:"contentLoaded"}),(0,a.kt)("inlineCode",{parentName:"h2"},"async contentLoaded({content, actions})")),(0,a.kt)("p",null,"The data that was loaded in ",(0,a.kt)("inlineCode",{parentName:"p"},"loadContent")," will be consumed in ",(0,a.kt)("inlineCode",{parentName:"p"},"contentLoaded"),". It can be rendered to routes, registered as global data, etc."),(0,a.kt)("h3",i({},{id:"content"}),(0,a.kt)("inlineCode",{parentName:"h3"},"content")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"contentLoaded")," will be called ",(0,a.kt)("em",{parentName:"p"},"after")," ",(0,a.kt)("inlineCode",{parentName:"p"},"loadContent")," is done. The return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"loadContent()")," will be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"contentLoaded")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"content"),"."),(0,a.kt)("h3",i({},{id:"actions"}),(0,a.kt)("inlineCode",{parentName:"h3"},"actions")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"actions")," contain three functions:"),(0,a.kt)("h4",i({},{id:"addRoute"}),(0,a.kt)("inlineCode",{parentName:"h4"},"addRoute(config: RouteConfig): void")),(0,a.kt)("p",null,"Create a route to add to the website."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type RouteConfig = {\n  path: string;\n  component: string;\n  modules?: RouteModules;\n  routes?: RouteConfig[];\n  exact?: boolean;\n  priority?: number;\n};\ntype RouteModules = {\n  [module: string]: Module | RouteModules | RouteModules[];\n};\ntype Module =\n  | {\n      path: string;\n      __import?: boolean;\n      query?: ParsedUrlQueryInput;\n    }\n  | string;\n")),(0,a.kt)("h4",i({},{id:"createData"}),(0,a.kt)("inlineCode",{parentName:"h4"},"createData(name: string, data: any): Promise<string>")),(0,a.kt)("p",null,"A declarative callback to create static data (generally JSON or string) which can later be provided to your routes as props. Takes the file name and data to be stored, and returns the actual data file's path."),(0,a.kt)("p",null,"For example, this plugin below creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"/friends")," page which displays ",(0,a.kt)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'}),"import React from 'react';\n\nexport default function FriendsComponent({friends}) {\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',title:'"docusaurus-friends-plugin/src/index.js"'}),"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    // highlight-start\n    async contentLoaded({content, actions}) {\n      const {createData, addRoute} = actions;\n      // Create friends.json\n      const friends = ['Yangshun', 'Sebastien'];\n      const friendsJsonPath = await createData(\n        'friends.json',\n        JSON.stringify(friends),\n      );\n\n      // Add the '/friends' routes, and ensure it receives the friends props\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        modules: {\n          // propName -> JSON file path\n          friends: friendsJsonPath,\n        },\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n")),(0,a.kt)("h4",i({},{id:"setGlobalData"}),(0,a.kt)("inlineCode",{parentName:"h4"},"setGlobalData(data: any): void")),(0,a.kt)("p",null,"This function permits one to create some global plugin data that can be read from any page, including the pages created by other plugins, and your theme layout."),(0,a.kt)("p",null,"This data becomes accessible to your client-side/theme code through the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/docusaurus-core#useGlobalData"}),(0,a.kt)("inlineCode",{parentName:"a"},"useGlobalData"))," and ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/docusaurus-core#usePluginData"}),(0,a.kt)("inlineCode",{parentName:"a"},"usePluginData"))," hooks."),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Global data is... global: its size affects the loading time of all pages of your site, so try to keep it small. Prefer ",(0,a.kt)("inlineCode",{parentName:"p"},"createData")," and page-specific data whenever possible.")),(0,a.kt)("p",null,"For example, this plugin below creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"/friends")," page which displays ",(0,a.kt)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'}),"import React from 'react';\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nexport default function FriendsComponent() {\n  const {friends} = usePluginData('my-friends-plugin');\n  return <div>Your friends are {friends.join(',')}</div>;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',title:'"docusaurus-friends-plugin/src/index.js"'}),"export default function friendsPlugin(context, options) {\n  return {\n    name: 'docusaurus-friends-plugin',\n    // highlight-start\n    async contentLoaded({content, actions}) {\n      const {setGlobalData, addRoute} = actions;\n      // Create friends global data\n      setGlobalData({friends: ['Yangshun', 'Sebastien']});\n\n      // Add the '/friends' routes\n      addRoute({\n        path: '/friends',\n        component: '@site/src/components/Friends.js',\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n")),(0,a.kt)("h2",i({},{id:"configureWebpack"}),(0,a.kt)("inlineCode",{parentName:"h2"},"configureWebpack(config, isServer, utils, content)")),(0,a.kt)("p",null,"Modifies the internal webpack config. If the return value is a JavaScript object, it will be merged into the final config using ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge"}),(0,a.kt)("inlineCode",{parentName:"a"},"webpack-merge")),". If it is a function, it will be called and receive ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," as the first argument and an ",(0,a.kt)("inlineCode",{parentName:"p"},"isServer")," flag as the second argument."),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The API of ",(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," will be modified in the future to accept an object (",(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack({config, isServer, utils, content})"),")")),(0,a.kt)("h3",i({},{id:"config"}),(0,a.kt)("inlineCode",{parentName:"h3"},"config")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," is called with ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," generated according to client/server build. You may treat this as the base config to be merged with."),(0,a.kt)("h3",i({},{id:"isServer"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isServer")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," will be called both in server build and in client build. The server build receives ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and the client build receives ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"isServer"),"."),(0,a.kt)("h3",i({},{id:"utils"}),(0,a.kt)("inlineCode",{parentName:"h3"},"utils")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," also receives an util object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getStyleLoaders(isServer: boolean, cssOptions: {[key: string]: any}): Loader[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getJSLoader(isServer: boolean, cacheOptions?: {}): Loader | null"))),(0,a.kt)("p",null,"You may use them to return your webpack configuration conditionally."),(0,a.kt)("p",null,"For example, this plugin below modify the webpack config to transpile ",(0,a.kt)("inlineCode",{parentName:"p"},".foo")," files."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    // highlight-start\n    configureWebpack(config, isServer, utils) {\n      const {getJSLoader} = utils;\n      return {\n        module: {\n          rules: [\n            {\n              test: /\\.foo$/,\n              use: [getJSLoader(isServer), 'my-custom-webpack-loader'],\n            },\n          ],\n        },\n      };\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h3",i({},{id:"content-1"}),(0,a.kt)("inlineCode",{parentName:"h3"},"content")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," will be called both with the content loaded by the plugin."),(0,a.kt)("h3",i({},{id:"merge-strategy"}),"Merge strategy"),(0,a.kt)("p",null,"We merge the Webpack configuration parts of plugins into the global Webpack config using ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge"}),"webpack-merge"),"."),(0,a.kt)("p",null,"It is possible to specify the merge strategy. For example, if you want a webpack rule to be prepended instead of appended:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        mergeStrategy: {'module.rules': 'prepend'},\n        module: {rules: [myRuleToPrepend]},\n        // highlight-end\n      };\n    },\n  };\n};\n")),(0,a.kt)("p",null,"Read the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge#merging-with-strategies"}),"webpack-merge strategy doc")," for more details."),(0,a.kt)("h3",i({},{id:"configuring-dev-server"}),"Configuring dev server"),(0,a.kt)("p",null,"The dev server can be configured through returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"devServer")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        devServer: {\n          open: '/docs', // Opens localhost:3000/docs instead of localhost:3000/\n        },\n        // highlight-end\n      };\n    },\n  };\n};\n")),(0,a.kt)("h2",i({},{id:"configurePostCss"}),(0,a.kt)("inlineCode",{parentName:"h2"},"configurePostCss(options)")),(0,a.kt)("p",null,"Modifies ",(0,a.kt)("a",i({parentName:"p"},{href:"https://webpack.js.org/loaders/postcss-loader/#postcssoptions"}),(0,a.kt)("inlineCode",{parentName:"a"},"postcssOptions")," of ",(0,a.kt)("inlineCode",{parentName:"a"},"postcss-loader"))," during the generation of the client bundle."),(0,a.kt)("p",null,"Should return the mutated ",(0,a.kt)("inlineCode",{parentName:"p"},"postcssOptions"),"."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"postcssOptions")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),"const postcssOptions = {\n  ident: 'postcss',\n  plugins: [require('autoprefixer')],\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    configurePostCss(postcssOptions) {\n      // Appends new PostCSS plugin.\n      postcssOptions.plugins.push(require('postcss-import'));\n      return postcssOptions;\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",i({},{id:"postBuild"}),(0,a.kt)("inlineCode",{parentName:"h2"},"postBuild(props)")),(0,a.kt)("p",null,"Called when a (production) build finishes."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"interface Props {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n  headTags: string;\n  preBodyTags: string;\n  postBodyTags: string;\n  routesPaths: string[];\n  plugins: Plugin<any>[];\n  content: Content;\n}\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {\n      // Print out to console all the rendered routes.\n      routesPaths.map((route) => {\n        console.log(route);\n      });\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",i({},{id:"injectHtmlTags"}),(0,a.kt)("inlineCode",{parentName:"h2"},"injectHtmlTags({content})")),(0,a.kt)("p",null,"Inject head and/or body HTML tags to Docusaurus generated HTML."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"injectHtmlTags")," will be called both with the content loaded by the plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"function injectHtmlTags(): {\n  headTags?: HtmlTags;\n  preBodyTags?: HtmlTags;\n  postBodyTags?: HtmlTags;\n};\n\ntype HtmlTags = string | HtmlTagObject | (string | HtmlTagObject)[];\n\ntype HtmlTagObject = {\n  /**\n   * Attributes of the HTML tag\n   * E.g. `{'disabled': true, 'value': 'demo', 'rel': 'preconnect'}`\n   */\n  attributes?: {\n    [attributeName: string]: string | boolean;\n  };\n  /**\n   * The tag name e.g. `div`, `script`, `link`, `meta`\n   */\n  tagName: string;\n  /**\n   * The inner HTML\n   */\n  innerHTML?: string;\n};\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'}),"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    loadContent: async () => {\n      return {remoteHeadTags: await fetchHeadTagsFromAPI()};\n    },\n    // highlight-start\n    injectHtmlTags({content}) {\n      return {\n        headTags: [\n          {\n            tagName: 'link',\n            attributes: {\n              rel: 'preconnect',\n              href: 'https://www.github.com',\n            },\n          },\n          ...content.remoteHeadTags,\n        ],\n        preBodyTags: [\n          {\n            tagName: 'script',\n            attributes: {\n              charset: 'utf-8',\n              src: '/noflash.js',\n            },\n          },\n        ],\n        postBodyTags: [`<div> This is post body </div>`],\n      };\n    },\n    // highlight-end\n  };\n};\n")),(0,a.kt)("h2",i({},{id:"getClientModules"}),(0,a.kt)("inlineCode",{parentName:"h2"},"getClientModules()")),(0,a.kt)("p",null,"Returns an array of paths to the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/advanced/client#client-modules"}),"client modules")," that are to be imported into the client bundle."),(0,a.kt)("p",null,"As an example, to make your theme load a ",(0,a.kt)("inlineCode",{parentName:"p"},"customCss")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"customJs")," file path from ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," passed in by the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'}),"const path = require('path');\n\nmodule.exports = function (context, options) {\n  const {customCss, customJs} = options || {};\n  return {\n    name: 'name-of-my-theme',\n    // highlight-start\n    getClientModules() {\n      return [customCss, customJs];\n    },\n    // highlight-end\n  };\n};\n")))}p.isMDXComponent=!0}}]);