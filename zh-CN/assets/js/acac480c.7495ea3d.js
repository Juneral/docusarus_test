"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37206],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});a(27378);var n=a(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},o="Static Assets",l={unversionedId:"static-assets",id:"version-2.0.0-beta.22/static-assets",title:"Static Assets",description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are.",source:"@site/versioned_docs/version-2.0.0-beta.22/static-assets.md",sourceDirName:".",slug:"/static-assets",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/static-assets",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.0.0-beta.22",frontMatter:{description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},sidebar:"docs",previous:{title:"Swizzling",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/swizzling"},next:{title:"Search",permalink:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/search"}},u={},p=[{value:"Referencing your static asset",id:"referencing-your-static-asset",level:2},{value:"In JSX",id:"in-jsx",level:3},{value:"In Markdown",id:"in-markdown",level:3},{value:"In CSS",id:"in-css",level:3},{value:"Caveats",id:"caveats",level:2}],c={toc:p};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"static-assets"}),"Static Assets"),(0,n.kt)("p",null,"Static assets are the non-code files that are directly copied to the build output. They include images, stylesheets, favicons, fonts, etc."),(0,n.kt)("p",null,"By default, you are suggested to put these assets in the ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," folder. Every file you put into ",(0,n.kt)("strong",{parentName:"p"},"that directory will be copied")," into the root of the generated ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it will be copied to ",(0,n.kt)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),(0,n.kt)("p",null,"This means that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for site ",(0,n.kt)("inlineCode",{parentName:"li"},"baseUrl: '/'"),", the image ",(0,n.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,n.kt)("inlineCode",{parentName:"li"},"/img/docusaurus.png"),"."),(0,n.kt)("li",{parentName:"ul"},"for site ",(0,n.kt)("inlineCode",{parentName:"li"},"baseUrl: '/subpath/'"),", the image ",(0,n.kt)("inlineCode",{parentName:"li"},"/static/img/docusaurus.png")," will be served at ",(0,n.kt)("inlineCode",{parentName:"li"},"/subpath/img/docusaurus.png"),".")),(0,n.kt)("p",null,"You can customize the static directory sources in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". For example, we can add ",(0,n.kt)("inlineCode",{parentName:"p"},"public")," as another possible path:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  title: 'My site',\n  staticDirectories: ['public', 'static'],\n  // ...\n};\n")),(0,n.kt)("p",null,"Now, all files in ",(0,n.kt)("inlineCode",{parentName:"p"},"public")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," will be copied to the build output."),(0,n.kt)("h2",r({},{id:"referencing-your-static-asset"}),"Referencing your static asset"),(0,n.kt)("h3",r({},{id:"in-jsx"}),"In JSX"),(0,n.kt)("p",null,"In JSX, you can reference assets from the ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," folder in your code using absolute URLs, but this is not ideal because changing the site ",(0,n.kt)("inlineCode",{parentName:"p"},"baseUrl")," will ",(0,n.kt)("strong",{parentName:"p"},"break those links"),". For the image ",(0,n.kt)("inlineCode",{parentName:"p"},'<img src="/img/docusaurus.png" />')," served at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/test"),", the browser will try to resolve it from the URL root, i.e. as ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/img/docusaurus.png"),", which will fail because it's actually served at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/test/img/docusaurus.png"),"."),(0,n.kt)("p",null,"You can ",(0,n.kt)("inlineCode",{parentName:"p"},"import()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"require()")," the static asset (recommended), or use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function: both prepend the ",(0,n.kt)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import DocusaurusImageUrl from '@site/static/img/docusaurus.png';\n\n<img src={DocusaurusImageUrl} />;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"<img src={require('@site/static/img/docusaurus.png').default} />\n")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),"import useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img src={useBaseUrl('/img/docusaurus.png')} />;\n")),(0,n.kt)("p",null,"You can also import SVG files: they will be transformed into React components."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-jsx",metastring:'title="MyComponent.js"',title:'"MyComponent.js"'}),'import DocusaurusLogoWithKeytar from \'@site/static/img/docusaurus_keytar.svg\';\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n')),(0,n.kt)("h3",r({},{id:"in-markdown"}),"In Markdown"),(0,n.kt)("p",null,"In Markdown, you can stick to using absolute paths when writing links or images ",(0,n.kt)("strong",{parentName:"p"},"in Markdown syntax")," because Docusaurus handles them as ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," calls instead of URLs when parsing the Markdown. See ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/2.0.0-beta.22/markdown-features/assets"}),"Markdown static assets"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-md"}),"You write a link like this: [Download this document](/files/note.docx)\n\nDocusaurus changes that to: <a href={require('static/files/note.docx')}>Download this document</a>\n")),(0,n.kt)("admonition",r({},{title:"use Markdown syntax",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Docusaurus will only parse links that are in Markdown syntax. If your asset references are using the JSX tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<a>")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"<img>"),", nothing will be done.")),(0,n.kt)("h3",r({},{id:"in-css"}),"In CSS"),(0,n.kt)("p",null,"In CSS, the ",(0,n.kt)("inlineCode",{parentName:"p"},"url()")," function is commonly used to reference assets like fonts and images. To reference a static asset, use absolute paths:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-css"}),"@font-face {\n  font-family: 'Caroline';\n  src: url('/font/Caroline.otf');\n}\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"static/font/Caroline.otf")," asset will be loaded by the bundler."),(0,n.kt)("admonition",r({},{title:"important takeaway",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"One important takeaway: ",(0,n.kt)("strong",{parentName:"p"},"never hardcode your base URL!")," The base URL is considered an implementation detail and should be easily changeable. All paths, even when they look like URL slugs, are actually file paths."),(0,n.kt)("p",{parentName:"admonition"},"If you find the URL slug mental model more understandable, here's a rule of thumb:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Pretend you have a base URL like ",(0,n.kt)("inlineCode",{parentName:"li"},"/test/")," when writing JSX so you don't use an absolute URL path like ",(0,n.kt)("inlineCode",{parentName:"li"},'src="/img/thumbnail.png"')," but instead ",(0,n.kt)("inlineCode",{parentName:"li"},"require")," the asset."),(0,n.kt)("li",{parentName:"ul"},"Pretend it's ",(0,n.kt)("inlineCode",{parentName:"li"},"/")," when writing Markdown or CSS so you always use absolute paths without the base URL."))),(0,n.kt)("h2",r({},{id:"caveats"}),"Caveats"),(0,n.kt)("p",null,"Keep in mind that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By default, none of the files in the ",(0,n.kt)("inlineCode",{parentName:"li"},"static")," folder will be post-processed, hashed, or minified.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"However, as we've demonstrated above, we are usually able to convert them to ",(0,n.kt)("inlineCode",{parentName:"li"},"require")," calls for you so they do get processed. This is good for aggressive caching and better user experience."))),(0,n.kt)("li",{parentName:"ul"},"Missing files referenced via hard-coded absolute paths will not be detected at compilation time and will result in a 404 error."),(0,n.kt)("li",{parentName:"ul"},"By default, GitHub Pages runs published files through ",(0,n.kt)("a",r({parentName:"li"},{href:"https://jekyllrb.com/"}),"Jekyll"),". Since Jekyll will discard any files that begin with ",(0,n.kt)("inlineCode",{parentName:"li"},"_"),", it is recommended that you disable Jekyll by adding an empty file named ",(0,n.kt)("inlineCode",{parentName:"li"},".nojekyll")," file to your ",(0,n.kt)("inlineCode",{parentName:"li"},"static")," directory if you are using GitHub pages for hosting.")))}d.isMDXComponent=!0}}]);