"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21374],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(27378);var a=n(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},o="Static Assets",l={unversionedId:"static-assets",id:"static-assets",title:"Static Assets",description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are.",source:"@site/docs/static-assets.md",sourceDirName:".",slug:"/static-assets",permalink:"/docusarus_test/en/docs/next/static-assets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/static-assets.md",tags:[],version:"current",frontMatter:{description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},sidebar:"docs",previous:{title:"Swizzling",permalink:"/docusarus_test/en/docs/next/swizzling"},next:{title:"Search",permalink:"/docusarus_test/en/docs/next/search"}},u={},c=[{value:"Referencing your static asset",id:"referencing-your-static-asset",level:2},{value:"In JSX",id:"in-jsx",level:3},{value:"In Markdown",id:"in-markdown",level:3},{value:"In CSS",id:"in-css",level:3},{value:"Caveats",id:"caveats",level:2}],p={toc:c};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"static-assets"}),"Static Assets"),(0,a.kt)("p",null,"Static assets are the non-code files that are directly copied to the build output. They include images, stylesheets, favicons, fonts, etc."),(0,a.kt)("p",null,"By default, you are suggested to put these assets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," folder. Every file you put into ",(0,a.kt)("strong",{parentName:"p"},"that directory will be copied")," into the root of the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it will be copied to ",(0,a.kt)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),(0,a.kt)("p",null,"This means that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for site ",(0,a.kt)("inlineCode",{parentName:"li"},"baseUrl: '/'"),", the image ",(0,a.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,a.kt)("inlineCode",{parentName:"li"},"/img/docusaurus.png"),"."),(0,a.kt)("li",{parentName:"ul"},"for site ",(0,a.kt)("inlineCode",{parentName:"li"},"baseUrl: '/subpath/'"),", the image ",(0,a.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,a.kt)("inlineCode",{parentName:"li"},"/subpath/img/docusaurus.png"),".")),(0,a.kt)("p",null,"You can customize the static directory sources in ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". For example, we can add ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," as another possible path:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'My site',\n  staticDirectories: ['public', 'static'],\n  // ...\n};\n")),(0,a.kt)("p",null,"Now, all files in ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," will be copied to the build output."),(0,a.kt)("h2",i({},{id:"referencing-your-static-asset"}),"Referencing your static asset"),(0,a.kt)("h3",i({},{id:"in-jsx"}),"In JSX"),(0,a.kt)("p",null,"In JSX, you can reference assets from the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," folder in your code using absolute URLs, but this is not ideal because changing the site ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," will ",(0,a.kt)("strong",{parentName:"p"},"break those links"),". For the image ",(0,a.kt)("inlineCode",{parentName:"p"},'<img src="/img/docusaurus.png" />')," served at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/test"),", the browser will try to resolve it from the URL root, i.e. as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/img/docusaurus.png"),", which will fail because it's actually served at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/test/img/docusaurus.png"),"."),(0,a.kt)("p",null,"You can ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," the static asset (recommended), or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function: both prepend the ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import DocusaurusImageUrl from '@site/static/img/docusaurus.png';\n\n<img src={DocusaurusImageUrl} />;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"<img src={require('@site/static/img/docusaurus.png').default} />\n")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img src={useBaseUrl('/img/docusaurus.png')} />;\n")),(0,a.kt)("p",null,"You can also import SVG files: they will be transformed into React components."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),'import DocusaurusLogoWithKeytar from \'@site/static/img/docusaurus_keytar.svg\';\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n')),(0,a.kt)("h3",i({},{id:"in-markdown"}),"In Markdown"),(0,a.kt)("p",null,"In Markdown, you can stick to using absolute paths when writing links or images ",(0,a.kt)("strong",{parentName:"p"},"in Markdown syntax")," because Docusaurus handles them as ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," calls instead of URLs when parsing the Markdown. See ",(0,a.kt)("a",i({parentName:"p"},{href:"/docusarus_test/en/docs/next/markdown-features/assets"}),"Markdown static assets"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-md"}),"You write a link like this: [Download this document](/files/note.docx)\n\nDocusaurus changes that to: <a href={require('static/files/note.docx')}>Download this document</a>\n")),(0,a.kt)("admonition",i({},{title:"use Markdown syntax",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Docusaurus will only parse links that are in Markdown syntax. If your asset references are using the JSX tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>"),", nothing will be done.")),(0,a.kt)("h3",i({},{id:"in-css"}),"In CSS"),(0,a.kt)("p",null,"In CSS, the ",(0,a.kt)("inlineCode",{parentName:"p"},"url()")," function is commonly used to reference assets like fonts and images. To reference a static asset, use absolute paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-css"}),"@font-face {\n  font-family: 'Caroline';\n  src: url('/font/Caroline.otf');\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"static/font/Caroline.otf")," asset will be loaded by the bundler."),(0,a.kt)("admonition",i({},{title:"important takeaway",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"One important takeaway: ",(0,a.kt)("strong",{parentName:"p"},"never hardcode your base URL!")," The base URL is considered an implementation detail and should be easily changeable. All paths, even when they look like URL slugs, are actually file paths."),(0,a.kt)("p",{parentName:"admonition"},"If you find the URL slug mental model more understandable, here's a rule of thumb:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Pretend you have a base URL like ",(0,a.kt)("inlineCode",{parentName:"li"},"/test/")," when writing JSX so you don't use an absolute URL path like ",(0,a.kt)("inlineCode",{parentName:"li"},'src="/img/thumbnail.png"')," but instead ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," the asset."),(0,a.kt)("li",{parentName:"ul"},"Pretend it's ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," when writing Markdown or CSS so you always use absolute paths without the base URL."))),(0,a.kt)("h2",i({},{id:"caveats"}),"Caveats"),(0,a.kt)("p",null,"Keep in mind that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, none of the files in the ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," folder will be post-processed, hashed, or minified.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"However, as we've demonstrated above, we are usually able to convert them to ",(0,a.kt)("inlineCode",{parentName:"li"},"require")," calls for you so they do get processed. This is good for aggressive caching and better user experience."))),(0,a.kt)("li",{parentName:"ul"},"Missing files referenced via hard-coded absolute paths will not be detected at compilation time and will result in a 404 error."),(0,a.kt)("li",{parentName:"ul"},"By default, GitHub Pages runs published files through ",(0,a.kt)("a",i({parentName:"li"},{href:"https://jekyllrb.com/"}),"Jekyll"),". Since Jekyll will discard any files that begin with ",(0,a.kt)("inlineCode",{parentName:"li"},"_"),", it is recommended that you disable Jekyll by adding an empty file named ",(0,a.kt)("inlineCode",{parentName:"li"},".nojekyll")," file to your ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," directory if you are using GitHub pages for hosting.")))}d.isMDXComponent=!0}}]);