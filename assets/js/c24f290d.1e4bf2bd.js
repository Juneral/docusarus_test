"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62404],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});n(27378);var a=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={sidebar_position:2,slug:"/api/misc/@docusaurus/logger"},o="\ud83d\udce6 logger",s={unversionedId:"api/misc/logger/logger",id:"api/misc/logger/logger",title:"\ud83d\udce6 logger",description:"An encapsulated logger for semantically formatting console messages.",source:"@site/docs/api/misc/logger/logger.md",sourceDirName:"api/misc/logger",slug:"/api/misc/@docusaurus/logger",permalink:"/docs/next/api/misc/@docusaurus/logger",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/logger/logger.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/misc/@docusaurus/logger"},sidebar:"api",previous:{title:"string-literal-i18n-messages",permalink:"/docs/next/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},p={},m=[{value:"APIs",id:"apis",level:2},{value:"Using the template literal tag",id:"using-the-template-literal-tag",level:3}],u={toc:m};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"-logger"}),"\ud83d\udce6 logger"),(0,a.kt)("p",null,"An encapsulated logger for semantically formatting console messages."),(0,a.kt)("p",null,"Authors of packages in the Docusaurus ecosystem are encouraged to use this package to provide unified log formats."),(0,a.kt)("h2",r({},{id:"apis"}),"APIs"),(0,a.kt)("p",null,"It exports a single object as default export: ",(0,a.kt)("inlineCode",{parentName:"p"},"logger"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some useful colors.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"red")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yellow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"green")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bold")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dim")))),(0,a.kt)("li",{parentName:"ul"},"Formatters. These functions all have the signature ",(0,a.kt)("inlineCode",{parentName:"li"},"(msg: unknown) => string"),". Note that their implementations are not guaranteed. You should only care about their semantics.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": formats a file path."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url"),": formats a URL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": formats an identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code"),": formats a code snippet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subdue"),": subdues the text."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"num"),": formats a number."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"interpolate")," function. It is a template literal tag. The syntax can be found below."),(0,a.kt)("li",{parentName:"ul"},"Logging functions. All logging functions can both be used as normal functions (similar to the ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log")," family, but only accepts one parameter) or template literal tags.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info"),": prints information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"warn"),": prints a warning that should be payed attention to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"),": prints an error (not necessarily halting the program) that signals significant problems."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"success"),": prints a success message."))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"report")," function. It takes a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReportingSeverity")," value (",(0,a.kt)("inlineCode",{parentName:"li"},"ignore"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"log"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"warn"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"throw"),") and reports a message according to the severity.")),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"A word on the ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"error")," formatter"),(0,a.kt)("p",{parentName:"admonition"},"Beware that an ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," message, even when it doesn't hang the program, is likely going to cause confusion. When users inspect logs and find an ",(0,a.kt)("inlineCode",{parentName:"p"},"[ERROR]"),", even when the build succeeds, they will assume something is going wrong. Use it sparingly."),(0,a.kt)("p",{parentName:"admonition"},"Docusaurus only uses ",(0,a.kt)("inlineCode",{parentName:"p"},"logger.error")," when printing messages immediately before throwing an error, or when user has set the reporting severity of ",(0,a.kt)("inlineCode",{parentName:"p"},"onBrokenLink"),", etc. to ",(0,a.kt)("inlineCode",{parentName:"p"},'"error"'),"."),(0,a.kt)("p",{parentName:"admonition"},"In addition, ",(0,a.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," will color the ",(0,a.kt)("strong",{parentName:"p"},"entire")," message for better attention. If you are printing large blocks of help text about an error, better use ",(0,a.kt)("inlineCode",{parentName:"p"},"logger.info"),".")),(0,a.kt)("h3",r({},{id:"using-the-template-literal-tag"}),"Using the template literal tag"),(0,a.kt)("p",null,"The template literal tag evaluates the template and expressions embedded. ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolate")," returns a new string, while other logging functions prints it. Below is a typical usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"logger.info`Hello name=${name}! You have number=${money} dollars. Here are the ${\n  items.length > 1 ? 'items' : 'item'\n} on the shelf: ${items}\nTo buy anything, enter code=${'buy x'} where code=${'x'} is the item's name; to quit, press code=${'Ctrl + C'}.`;\n")),(0,a.kt)("p",null,"An embedded expression is optionally preceded by a flag in the form ",(0,a.kt)("inlineCode",{parentName:"p"},"[a-z]+=")," (a few lowercase letters, followed by an equals sign, directly preceding the embedded expression). If the expression is not preceded by any flag, it's printed out as-is. Otherwise, it's formatted with one of the formatters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subdue="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"subdue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number="),": ",(0,a.kt)("inlineCode",{parentName:"li"},"num"))),(0,a.kt)("p",null,"If the expression is an array, it's formatted by ",(0,a.kt)("inlineCode",{parentName:"p"},"`\\n- ${array.join('\\n- ')}\\n`")," (note it automatically gets a leading line end). Each member is formatted by itself and the bullet is not formatted. So you would see the above message printed as:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"demo",src:n(59352).Z,width:"1234",height:"150"})))}d.isMDXComponent=!0},59352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo-0e309a1a631b58ebe6d5f2d8014351e8.png"}}]);