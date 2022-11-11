"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96122],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),g=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=g(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||c[b]||s;return r?o.createElement(d,l(l({ref:t},u),{},{components:r})):o.createElement(d,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var g=2;g<s;g++)l[g]=r[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});r(27378);var o=r(35318);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},a=void 0,i={permalink:"/docusarus_test/tests/blog/2021/10/07/blog-post-mdx-feed-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",source:"@site/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx",title:"Blog post MDX Feed tests",description:"Some MDX tests, mostly to test how the RSS feed render those",date:"2021-10-07T00:00:00.000Z",formattedDate:"October 7, 2021",tags:[{label:"paginated-tag",permalink:"/docusarus_test/tests/blog/tags/paginated-tag"},{label:"blog",permalink:"/docusarus_test/tests/blog/tags/blog"},{label:"docusaurus",permalink:"/docusarus_test/tests/blog/tags/docusaurus"},{label:"long-long",permalink:"/docusarus_test/tests/blog/tags/long-long"},{label:"long-long-long",permalink:"/docusarus_test/tests/blog/tags/long-long-long"},{label:"long-long-long-long",permalink:"/docusarus_test/tests/blog/tags/long-long-long-long"}],hasTruncateMarker:!0,authors:[{name:"Sebastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Blog post MDX Feed tests",authors:["slorber"],tags:["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],hide_reading_time:!0},prevItem:{title:"Post with duplicate title",permalink:"/docusarus_test/tests/blog/2021/09/13/dup-title"},nextItem:{title:"Blog post MDX require Feed tests",permalink:"/docusarus_test/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"}},g={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){var{components:t}=e,r=s(e,["components"]);return(0,o.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some MDX tests, mostly to test how the RSS feed render those"))}p.isMDXComponent=!0}}]);