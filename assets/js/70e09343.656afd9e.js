(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35870],{35318:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46768:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(27378),o=r(58413),a=r(36712);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,a.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{const{pickedSrc:e}=t,{size:r}=e,n=r?` (${function(e){const t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";const r=Math.floor(Math.log(e)/Math.log(1024));return 0===r?`${e} ${t[r]}`:`${(e/1024**r).toFixed(1)} ${t[r]}`}(r)})`:"";return(0,a.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:n})}case"offline":return(0,a.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{const{loadInfo:e}=t;return 404===e?(0,a.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"}):(0,a.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw new Error(`Wrong icon: ${e}`)}}function p(e){const{img:t}=e,r=l(e,["img"]);return"string"==typeof t||"default"in t?n.createElement("img",s({src:"string"==typeof t?t:t.default},r)):n.createElement(o.Z,s({},r,{height:null!==(a=t.src.height)&&void 0!==a?a:100,width:null!==(p=t.src.width)&&void 0!==p?p:100,placeholder:{lqip:t.preSrc},src:t.src.src,srcSet:t.src.images.map((e=>c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},e),{src:e.path}))),getMessage:u}));var a,p}},78019:(e,t,r)=>{"use strict";r.d(t,{P:()=>p});var n=r(27378),o=r(38944),a=r(36712),i=r(13415),s=r(46768);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}const l=[{name:"\ud83d\udce6 CodeSandbox",image:r(43376),url:"https://docusaurus.new/codesandbox",description:n.createElement(a.Z,{id:"playground.codesandbox.description"},"CodeSandbox is a popular playground solution. Runs Docusaurus in a remote Docker container.")},{name:"\u26a1 StackBlitz \ud83c\udd95",image:r(14046),url:"https://docusaurus.new/stackblitz",description:n.createElement(a.Z,{id:"playground.stackblitz.description",values:{webContainersLink:n.createElement(i.Z,{href:"https://blog.stackblitz.com/posts/introducing-webcontainers/"},"WebContainers")}},"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.")}];function u({name:e,image:t,url:r,description:c}){return n.createElement("div",{className:"col col--6 margin-bottom--lg"},n.createElement("div",{className:(0,o.Z)("card")},n.createElement("div",{className:(0,o.Z)("card__image")},n.createElement(i.Z,{to:r},n.createElement(s.Z,{img:t,alt:`${e}'s image`}))),n.createElement("div",{className:"card__body"},n.createElement("h3",null,e),n.createElement("p",null,c)),n.createElement("div",{className:"card__footer"},n.createElement("div",{className:"button-group button-group--block"},n.createElement(i.Z,{className:"button button--secondary",to:r},n.createElement(a.Z,{id:"playground.tryItButton"},"Try it now!"))))))}function p(){return n.createElement("div",{className:"row"},l.map((e=>n.createElement(u,c({key:e.name},e)))))}},15334:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(27378);var n=r(35318),o=r(78019);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={},c="Playground",l={unversionedId:"playground",id:"playground",title:"Playground",description:"Playgrounds allow you to run Docusaurus in your browser, without installing anything!",source:"@site/docs/playground.mdx",sourceDirName:".",slug:"/playground",permalink:"/docs/playground",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/playground.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"TypeScript Support",permalink:"/docs/typescript-support"}},u={},p=[],d={toc:p};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"playground"}),"Playground"),(0,n.kt)("p",null,"Playgrounds allow you to run Docusaurus ",(0,n.kt)("strong",{parentName:"p"},"in your browser, without installing anything"),"!"),(0,n.kt)("p",null,"They are mostly useful for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Testing Docusaurus"),(0,n.kt)("li",{parentName:"ul"},"Reporting bugs")),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docusaurus.new"}),"docusaurus.new")," as an easy-to-remember shortcut."),(0,n.kt)("p",null,"Choose one of the available options below."),(0,n.kt)(o.P,{mdxType:"PlaygroundCardsRow"}),(0,n.kt)("admonition",a({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"For convenience, we'll remember your choice next time you visit ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docusaurus.new"}),"docusaurus.new"),".")))}g.isMDXComponent=!0},43376:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png 640w,"+r.p+"assets/ideal-img/codesandbox.dea65d6.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png",width:640,height:355},{path:r.p+"assets/ideal-img/codesandbox.dea65d6.1030.png",width:1030,height:571}],src:r.p+"assets/ideal-img/codesandbox.16b17cd.640.png",toString:function(){return r.p+"assets/ideal-img/codesandbox.16b17cd.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAqklEQVQImTXOsQ2CQABAURZQQYW7g4PDiByGyhoHYAPdzMaEgo5VhJaSNSg0+UaNf4H/HGstuT2SHXLy3LLPDigVst5sCYRESUmUnXCkVMQqRAmBEALP9ajOFbf7jbZt6bqOpmlwRBBgdMwu1pgkwl0uuF4vPJ8v5nnmn+P7PiYx7I0hMyneyqWuax59Tz8MTNPEOI6ftSRNNDqMvrZQSbSO+NktZVlSFAVvkYFdfbS2yD0AAAAASUVORK5CYII="}},14046:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/stackblitz.da95b77.640.png 640w,"+r.p+"assets/ideal-img/stackblitz.ab6e191.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/stackblitz.da95b77.640.png",width:640,height:356},{path:r.p+"assets/ideal-img/stackblitz.ab6e191.1030.png",width:1030,height:572}],src:r.p+"assets/ideal-img/stackblitz.da95b77.640.png",toString:function(){return r.p+"assets/ideal-img/stackblitz.da95b77.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAsUlEQVQImTXNS2rCQACA4blCxUeciWFemZpUpTdx4aollt5abbGbEElWBkIbs/oFod8FPpGGjGz1ig852gYW2mP8ku1ux1uxp9h/8l58IKLYoUzGRDpmyvE0Vlj/QlVf6PuefyJSFmnXRMkSGVvGkcaGDV+nb8qypG1buq5DqCTFpCsS84xMAqPJAuNzzucfmqbhbxj4HW6IeWyRsWMmDdO5ftTa5RyOJ6rqQl03XK8td+CsbYe8OUkaAAAAAElFTkSuQmCC"}}}]);