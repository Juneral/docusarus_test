"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40645],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(27378);var a=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:0,slug:"/api/misc/create-docusaurus"},l="\ud83d\udce6 create-docusaurus",s={unversionedId:"api/misc/create-docusaurus",id:"api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"A scaffolding utility to help you instantly set up a functional Docusaurus app.",source:"@site/docs/api/misc/create-docusaurus.md",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docusarus_test/docs/next/api/misc/create-docusaurus",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docusarus_test/docs/next/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docusarus_test/docs/next/api/misc/@docusaurus/eslint-plugin"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}],u={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"-create-docusaurus"}),"\ud83d\udce6 create-docusaurus"),(0,a.kt)("p",null,"A scaffolding utility to help you instantly set up a functional Docusaurus app."),(0,a.kt)("h2",r({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest [name] [template] [rootDir]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," argument will be used as the site's path as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,a.kt)("inlineCode",{parentName:"p"},"rootDir"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," argument can be one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"classic"),": Uses the classic template (recommended)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"facebook"),": Uses the Facebook/Meta template, which contains some Meta-specific setup"),(0,a.kt)("li",{parentName:"ul"},"A git repo URL (beginning with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"git@"),"), which can be cloned to the destination"),(0,a.kt)("li",{parentName:"ul"},"A local file path relative to CWD, which contains the files to be copied to destination")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rootDir")," will be used to resolve the absolute path to the site directory. The default is CWD."),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This command should be preferably used in an interactive shell so all features are available.")),(0,a.kt)("h2",r({},{id:"options"}),"Options"),(0,a.kt)("h3",r({},{id:"typescript"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-t, --typescript")),(0,a.kt)("p",null,"Used when the template argument is a recognized name. Currently, only ",(0,a.kt)("inlineCode",{parentName:"p"},"classic")," provides a TypeScript variant."),(0,a.kt)("h3",r({},{id:"git-strategy"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-g, --git-strategy")),(0,a.kt)("p",null,"Used when the template argument is a git repo. It needs to be one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deep"),": preserves full git history"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shallow"),": clones with ",(0,a.kt)("inlineCode",{parentName:"li"},"--depth=1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"copy"),": does a shallow clone, but does not create a git repo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"custom"),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone --depth 10"),", and we will append the repository URL and destination directory.")),(0,a.kt)("h3",r({},{id:"package-manager"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-p, --package-manager")),(0,a.kt)("p",null,"Value should be one of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),". If it's not explicitly provided, Docusaurus will infer one based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"),(0,a.kt)("li",{parentName:"ul"},"The command used to invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"create-docusaurus")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"npm init"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"npx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn create"),", etc.)"),(0,a.kt)("li",{parentName:"ul"},"Interactive prompting, in case all heuristics are not present")),(0,a.kt)("h3",r({},{id:"skip-install"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-s, --skip-install")),(0,a.kt)("p",null,"If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--package-manager")," option is only useful when you are actually installing dependencies."))}d.isMDXComponent=!0}}]);