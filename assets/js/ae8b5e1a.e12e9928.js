"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77991],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f.mdxType="string"==typeof e?e:n,s[1]=f;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>f,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});r(27378);var o=r(35318);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Second post with footnote to test posts with same footnote reference."},f=void 0,i={permalink:"/docusarus_test/tests/blog/2022/01/22/dup-footnote",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-01-22-dup-footnote.md",source:"@site/_dogfooding/_blog tests/2022-01-22-dup-footnote.md",title:"Second post with footnote to test posts with same footnote reference.",description:"foo",date:"2022-01-22T00:00:00.000Z",formattedDate:"2022\u5e741\u670822\u65e5",tags:[],readingTime:1.8,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Second post with footnote to test posts with same footnote reference."},prevItem:{title:"Third post with footnote to test posts with same footnote reference.",permalink:"/docusarus_test/tests/blog/2022/01/21/dup-footnote"},nextItem:{title:"First post with footnote to test posts with same footnote reference.",permalink:"/docusarus_test/tests/blog/2022/04/20/dup-footnote"}},p={authorsImageUrls:[]},c=[],l={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"foo",(0,o.kt)("sup",n({parentName:"p"},{id:"fnref-1-0bd981"}),(0,o.kt)("a",n({parentName:"sup"},{href:"#fn-1-0bd981",className:"footnote-ref"}),"1"))),(0,o.kt)("p",null,"bar",(0,o.kt)("sup",n({parentName:"p"},{id:"fnref-2-0bd981"}),(0,o.kt)("a",n({parentName:"sup"},{href:"#fn-2-0bd981",className:"footnote-ref"}),"2"))),(0,o.kt)("p",null,"baz",(0,o.kt)("sup",n({parentName:"p"},{id:"fnref-3-0bd981"}),(0,o.kt)("a",n({parentName:"sup"},{href:"#fn-3-0bd981",className:"footnote-ref"}),"3"))),(0,o.kt)("div",n({},{className:"footnotes"}),(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",n({parentName:"ol"},{id:"fn-1-0bd981"}),"foo",(0,o.kt)("a",n({parentName:"li"},{href:"#fnref-1-0bd981",className:"footnote-backref"}),"\u21a9")),(0,o.kt)("li",n({parentName:"ol"},{id:"fn-2-0bd981"}),"bar",(0,o.kt)("a",n({parentName:"li"},{href:"#fnref-2-0bd981",className:"footnote-backref"}),"\u21a9")),(0,o.kt)("li",n({parentName:"ol"},{id:"fn-3-0bd981"}),"baz",(0,o.kt)("a",n({parentName:"li"},{href:"#fnref-3-0bd981",className:"footnote-backref"}),"\u21a9")))))}u.isMDXComponent=!0}}]);