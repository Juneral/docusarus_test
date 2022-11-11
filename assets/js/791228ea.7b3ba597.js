"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49137],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,m=d["".concat(l,".").concat(b)]||d[b]||c[b]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(27378);var n=r(35318);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={description:"How to keep a reasonable bundle size while ensuring sufficient browser support."},i="Browser support",l={unversionedId:"browser-support",id:"version-2.0.0-rc.1/browser-support",title:"Browser support",description:"How to keep a reasonable bundle size while ensuring sufficient browser support.",source:"@site/versioned_docs/version-2.0.0-rc.1/browser-support.md",sourceDirName:".",slug:"/browser-support",permalink:"/docusarus_test/docs/browser-support",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/browser-support.md",tags:[],version:"2.0.0-rc.1",frontMatter:{description:"How to keep a reasonable bundle size while ensuring sufficient browser support."},sidebar:"docs",previous:{title:"Search",permalink:"/docusarus_test/docs/search"},next:{title:"SEO",permalink:"/docusarus_test/docs/seo"}},p={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Default values",id:"default-values",level:2},{value:"Read more",id:"read-more",level:2}],c={toc:u};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browser-support"}),"Browser support"),(0,n.kt)("p",null,"Docusaurus allows sites to define the list of supported browsers through a ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),"browserslist configuration"),"."),(0,n.kt)("h2",o({},{id:"purpose"}),"Purpose"),(0,n.kt)("p",null,"Websites need to balance between backward compatibility and bundle size. As old browsers do not support modern APIs or syntax, more code is needed to implement the same functionality."),(0,n.kt)("p",null,"For example, you may use the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),"optional chaining syntax"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const value = obj?.prop?.val;\n")),(0,n.kt)("p",null,"...which unfortunately is only recognized by browser versions released after 2020. To be compatible with earlier browser versions, when building your site for production, our JS loader will transpile your code to a more verbose syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var _obj, _obj$prop;\n\nconst value =\n  (_obj = obj) === null || _obj === void 0\n    ? void 0\n    : (_obj$prop = _obj.prop) === null || _obj$prop === void 0\n    ? void 0\n    : _obj$prop.val;\n")),(0,n.kt)("p",null,"However, this penalizes all other users with increased site load time because the 29-character line now becomes 168 characters\u2014a 6-fold increase! (In practice, it will be better because the names used will be shorter.) As a tradeoff, the JS loader only transpiles the syntax to the degree that's supported by all browser versions defined in the browser list."),(0,n.kt)("p",null,"The browser list by default is provided through the ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file as a root ",(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," field."),(0,n.kt)("admonition",o({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"On old browsers, the compiled output will use unsupported (too recent) JS syntax, causing React to fail to initialize and end up with a static website with only HTML/CSS and no JS.")),(0,n.kt)("h2",o({},{id:"default-values"}),"Default values"),(0,n.kt)("p",null,"Websites initialized with the default classic template has the following in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  "name": "docusaurus",\n  // ...\n  // highlight-start\n  "browserslist": {\n    "production": [">0.5%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n  // highlight-end\n  // ...\n}\n')),(0,n.kt)("p",null,"Explained in natural language, the browsers supported in production are those:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With more than 0.5% of market share; ",(0,n.kt)("em",{parentName:"li"},"and")),(0,n.kt)("li",{parentName:"ul"},'Has official support or updates in the past 24 months (the opposite of "dead"); ',(0,n.kt)("em",{parentName:"li"},"and")),(0,n.kt)("li",{parentName:"ul"},"Is not Opera Mini.")),(0,n.kt)("p",null,"And browsers used in development are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The latest version of Chrome ",(0,n.kt)("em",{parentName:"li"},"or")," Firefox ",(0,n.kt)("em",{parentName:"li"},"or")," Safari.")),(0,n.kt)("p",null,'You can "evaluate" any config with the ',(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," CLI to obtain the actual list:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'npx browserslist --env="production"\n')),(0,n.kt)("p",null,"The output is all browsers supported in production. Below is the output in January 2022:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-text"}),"and_chr 96\nand_uc 12.12\nchrome 96\nchrome 95\nchrome 94\nedge 96\nfirefox 95\nfirefox 94\nie 11\nios_saf 15.2\nios_saf 15.0-15.1\nios_saf 14.5-14.8\nios_saf 14.0-14.4\nios_saf 12.2-12.5\nopera 82\nopera 81\nsafari 15.1\nsafari 14.1\nsafari 13.1\n")),(0,n.kt)("h2",o({},{id:"read-more"}),"Read more"),(0,n.kt)("p",null,"You may wish to visit the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md"}),"browserslist documentation")," for more specifications, especially the accepted ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md#queries"}),"query values")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/browserslist/browserslist/blob/main/README.md#best-practices"}),"best practices"),"."))}d.isMDXComponent=!0}}]);