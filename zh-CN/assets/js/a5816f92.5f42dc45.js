"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87564],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(38944);const l="tabItem_pnkT";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",r({role:"tabpanel",className:(0,o.Z)(l,n)},{hidden:t}),e)}},38269:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),o=n(38944),l=n(29088),r=n(52196),i=n(77468),s=n(75527);const u="tabList_Qoir",p="tabItem_AQgk";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:c,groupId:g,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=c?c:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,r.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const N=null===m?m:null!==(y=null!=m?m:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:b[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[x,T]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==x&&f.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==x&&(j(t),T(a),null!=g&&w(g,String(a)))},D=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>C.push(e),onKeyDown:D,onClick:O},n,{className:(0,o.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,l.Z)();return a.createElement(m,d({key:String(t)},e))}},93603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(27378);var a=n(35318),o=n(38269),l=n(61132);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={description:"Deploy a full-featured blog in no time with Docusaurus."},u="Blog",p={unversionedId:"blog",id:"blog",title:"Blog",description:"Deploy a full-featured blog in no time with Docusaurus.",source:"@site/docs/blog.mdx",sourceDirName:".",slug:"/blog",permalink:"/docusarus_test/zh-CN/docs/next/blog",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",frontMatter:{description:"Deploy a full-featured blog in no time with Docusaurus."},sidebar:"docs",previous:{title:"Docs Multi-instance",permalink:"/docusarus_test/zh-CN/docs/next/docs-multi-instance"},next:{title:"Markdown Features",permalink:"/docusarus_test/zh-CN/docs/next/markdown-features"}},d={},m=[{value:"Initial setup",id:"initial-setup",level:2},{value:"Adding posts",id:"adding-posts",level:2},{value:"Blog list",id:"blog-list",level:2},{value:"Blog sidebar",id:"blog-sidebar",level:2},{value:"Blog post date",id:"blog-post-date",level:2},{value:"Blog post authors",id:"blog-post-authors",level:2},{value:"Inline authors",id:"inline-authors",level:3},{value:"Global authors",id:"global-authors",level:3},{value:"Reading time",id:"reading-time",level:2},{value:"Feed",id:"feed",level:2},{value:"Advanced topics",id:"advanced-topics",level:2},{value:"Blog-only mode",id:"blog-only-mode",level:3},{value:"Multiple blogs",id:"multiple-blogs",level:3}],c={toc:m};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"blog"}),"Blog"),(0,a.kt)("p",null,"The blog feature enables you to deploy a full-featured blog in no time."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Check the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/api/plugins/@docusaurus/plugin-content-blog"}),"Blog Plugin API Reference documentation")," for an exhaustive list of options.")),(0,a.kt)("h2",r({},{id:"initial-setup"}),"Initial setup"),(0,a.kt)("p",null,"To set up your site's blog, start by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Then, add an item link to your blog within ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  themeConfig: {\n    // ...\n    navbar: {\n      items: [\n        // ...\n        // highlight-next-line\n        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'\n      ],\n    },\n  },\n};\n")),(0,a.kt)("h2",r({},{id:"adding-posts"}),"Adding posts"),(0,a.kt)("p",null,"To publish in the blog, create a Markdown file within the blog directory."),(0,a.kt)("p",null,"For example, create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"website/blog/2019-09-05-hello-docusaurus-v2.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="website/blog/2019-09-05-hello-docusaurus-v2.md"',title:'"website/blog/2019-09-05-hello-docusaurus-v2.md"'}),"---\ntitle: Welcome Docusaurus v2\ndescription: This is my first post on Docusaurus 2.\nslug: welcome-docusaurus-v2\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [hello, docusaurus-v2]\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\n\nWelcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).\n\n\x3c!--truncate--\x3e\n\nThis is my first post on Docusaurus 2.\n\nA whole bunch of exploration to follow.\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/markdown-features#front-matter"}),"front matter")," is useful to add more metadata to your blog post, for example, author information, but Docusaurus will be able to infer all necessary metadata without the front matter. For all possible fields, see ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter"}),"the API documentation"),"."),(0,a.kt)("h2",r({},{id:"blog-list"}),"Blog list"),(0,a.kt)("p",null,"The blog's index page (by default, it is at ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog"),") is the ",(0,a.kt)("em",{parentName:"p"},"blog list page"),", where all blog posts are collectively displayed."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above ",(0,a.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," will be part of the summary. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md"}),"---\ntitle: Truncation Example\n---\n\nAll these will be part of the blog post summary.\n\nEven this.\n\n\x3c!--truncate--\x3e\n\nBut anything from here on down will not be.\n\nNot this.\n\nOr this.\n")),(0,a.kt)("p",null,"By default, 10 posts are shown on each blog list page, but you can control pagination with the ",(0,a.kt)("inlineCode",{parentName:"p"},"postsPerPage")," option in the plugin configuration. If you set ",(0,a.kt)("inlineCode",{parentName:"p"},"postsPerPage: 'ALL'"),", pagination will be disabled and all posts will be displayed on the first page. You can also add a meta description to the blog list page for better SEO:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          blogTitle: 'Docusaurus blog!',\n          blogDescription: 'A Docusaurus powered blog!',\n          postsPerPage: 'ALL',\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h2",r({},{id:"blog-sidebar"}),"Blog sidebar"),(0,a.kt)("p",null,"The blog sidebar displays recent blog posts. The default number of items shown is 5, but you can customize with the ",(0,a.kt)("inlineCode",{parentName:"p"},"blogSidebarCount")," option in the plugin configuration. By setting ",(0,a.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 0"),", the sidebar will be completely disabled, with the container removed as well. This will increase the width of the main container. Specially, if you have set ",(0,a.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 'ALL'"),", ",(0,a.kt)("em",{parentName:"p"},"all")," posts will be displayed."),(0,a.kt)("p",null,"You can also alter the sidebar heading text with the ",(0,a.kt)("inlineCode",{parentName:"p"},"blogSidebarTitle")," option. For example, if you have set ",(0,a.kt)("inlineCode",{parentName:"p"},"blogSidebarCount: 'ALL'"),', instead of the default "Recent posts", you may rather make it say "All posts":'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          blogSidebarTitle: 'All posts',\n          blogSidebarCount: 'ALL',\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("h2",r({},{id:"blog-post-date"}),"Blog post date"),(0,a.kt)("p",null,"Docusaurus will extract a ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," date from a file/folder name such as ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD-my-blog-post-title.md"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example supported patterns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Pattern"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Single file"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"MDX file"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title.mdx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Single folder + ",(0,a.kt)("inlineCode",{parentName:"td"},"index.md")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021-05-28-my-blog-post-title/index.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Folder named by date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021-05-28/my-blog-post-title.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nested folders by date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021/05/28/my-blog-post-title.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Partially nested folders by date"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021/05-28-my-blog-post-title.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nested folders + ",(0,a.kt)("inlineCode",{parentName:"td"},"index.md")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"2021/05/28/my-blog-post-title/index.md"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Date in the middle of path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"category/2021/05-28-my-blog-post-title.md"))))),(0,a.kt)("p",null,"The date will be excised from the path and appended to the beginning of the URL slug.")),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Using a folder can be convenient to co-locate blog post images alongside the Markdown file.")),(0,a.kt)("p",null,"This naming convention is optional, and you can also provide the date as front matter. Since the front matter follows YAML syntax where the datetime notation is supported, you can use front matter if you need more fine-grained publish dates. For example, if you have multiple posts published on the same day, you can order them according to the time of the day:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="earlier-post.md"',title:'"earlier-post.md"'}),"---\ndate: 2021-09-13T10:00\n---\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="later-post.md"',title:'"later-post.md"'}),"---\ndate: 2021-09-13T18:00\n---\n")),(0,a.kt)("h2",r({},{id:"blog-post-authors"}),"Blog post authors"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," front matter field to declare blog post authors. An author should have at least a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"image_url"),". Docusaurus uses information like ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),", but any other information is allowed."),(0,a.kt)("h3",r({},{id:"inline-authors"}),"Inline authors"),(0,a.kt)("p",null,"Blog post authors can be declared directly inside the front matter:"),(0,a.kt)(o.Z,{groupId:"author-front-matter",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"single",label:"Single author",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n---\n"))),(0,a.kt)(l.Z,{value:"multiple",label:"Multiple authors",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n    email: jimarcey@gmail.com\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\n---\n")))),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"This option works best to get started, or for casual, irregular authors.")),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Prefer using the ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," front matter, but the legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"author_*")," front matter remains supported:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthor: Joel Marcey\nauthor_title: Co-creator of Docusaurus 1\nauthor_url: https://github.com/JoelMarcey\nauthor_image_url: https://github.com/JoelMarcey.png\n---\n"))),(0,a.kt)("h3",r({},{id:"global-authors"}),"Global authors"),(0,a.kt)("p",null,"For regular blog post authors, it can be tedious to maintain authors' information inlined in each blog post."),(0,a.kt)("p",null,"It is possible to declare those authors globally in a configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yml",metastring:'title="website/blog/authors.yml"',title:'"website/blog/authors.yml"'}),"jmarcey:\n  name: Joel Marcey\n  title: Co-creator of Docusaurus 1\n  url: https://github.com/JoelMarcey\n  image_url: https://github.com/JoelMarcey.png\n  email: jimarcey@gmail.com\n\nslorber:\n  name: S\xe9bastien Lorber\n  title: Docusaurus maintainer\n  url: https://sebastienlorber.com\n  image_url: https://github.com/slorber.png\n")),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorsMapPath")," plugin option to configure the path. JSON is also supported.")),(0,a.kt)("p",null,"In blog posts front matter, you can reference the authors declared in the global configuration file:"),(0,a.kt)(o.Z,{groupId:"author-front-matter",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"single",label:"Single author",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors: jmarcey\n---\n"))),(0,a.kt)(l.Z,{value:"multiple",label:"Multiple authors",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors: [jmarcey, slorber]\n---\n")))),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," system is very flexible and can suit more advanced use-case:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mix inline authors and global authors"),(0,a.kt)("p",{parentName:"admonition"},"You can use global authors most of the time, and still use inline authors:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors:\n  - jmarcey\n  - slorber\n  - name: Inline Author name\n    title: Inline Author Title\n    url: https://github.com/inlineAuthor\n    image_url: https://github.com/inlineAuthor\n---\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Local override of global authors"),(0,a.kt)("p",{parentName:"admonition"},"You can customize the global author's data on per-blog-post basis:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'title="my-blog-post.md"',title:'"my-blog-post.md"'}),"---\nauthors:\n  - key: jmarcey\n    title: Joel Marcey's new title\n  - key: slorber\n    name: S\xe9bastien Lorber's new name\n---\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Localize the author's configuration file"),(0,a.kt)("p",{parentName:"admonition"},"The configuration file can be localized, just create a localized copy of it at:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"website/i18n/[locale]/docusaurus-plugin-content-blog/authors.yml\n")))),(0,a.kt)("p",null,"An author, either declared through front matter or through the authors map, needs to have a name or an avatar, or both. If all authors of a post don't have names, Docusaurus will display their avatars compactly. See ",(0,a.kt)("a",r({parentName:"p"},{href:"/tests/blog/2022/01/20/image-only-authors"}),"this test post")," for the effect."),(0,a.kt)("admonition",r({},{title:"Feed generation",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",r({parentName:"p"},{href:"#feed"}),"RSS feeds")," require the author's email to be set for the author to appear in the feed.")),(0,a.kt)("h2",r({},{id:"reading-time"}),"Reading time"),(0,a.kt)("p",null,"Docusaurus generates a reading time estimation for each blog post based on word count. We provide an option to customize this."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          showReadingTime: true, // When set to false, the \"x min read\" won't be shown\n          readingTime: ({content, frontMatter, defaultReadingTime}) =>\n            defaultReadingTime({content, options: {wordsPerMinute: 300}}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"readingTime")," callback receives three parameters: the blog content text as a string, front matter as a record of string keys and their values, and the default reading time function. It returns a number (reading time in minutes) or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," (disable reading time for this page)."),(0,a.kt)("p",null,"The default reading time is able to accept additional options: ",(0,a.kt)("inlineCode",{parentName:"p"},"wordsPerMinute")," as a number (default: 300), and ",(0,a.kt)("inlineCode",{parentName:"p"},"wordBound")," as a function from string to boolean. If the string passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"wordBound")," should be a word bound (spaces, tabs, and line breaks by default), the function should return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Use the callback for all your customization needs:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"disable-per-post",label:"Per-post disabling",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Disable reading time on one page:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          showReadingTime: true,\n          // highlight-start\n          readingTime: ({content, frontMatter, defaultReadingTime}) =>\n            frontMatter.hide_reading_time\n              ? undefined\n              : defaultReadingTime({content}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",{parentName:"admonition"},"Usage:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-md",metastring:'"my-blog-post.md"','"my-blog-post.md"':!0}),"---\nhide_reading_time: true\n---\n\nThis page will no longer display the reading time stats!\n"))),(0,a.kt)(l.Z,{value:"passing-options",label:"Passing options",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Pass options to the default reading time function:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          readingTime: ({content, defaultReadingTime}) =>\n            defaultReadingTime({content, options: {wordsPerMinute: 100}}),\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"))),(0,a.kt)(l.Z,{value:"using-custom-algo",label:"Using custom algorithms",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Use a custom implementation of reading time:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"const myReadingTime = require('./myReadingTime');\n\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-next-line\n          readingTime: ({content}) => myReadingTime(content),\n        },\n      },\n    ],\n  ],\n};\n"))))),(0,a.kt)("h2",r({},{id:"feed"}),"Feed"),(0,a.kt)("p",null,"You can generate RSS / Atom / JSON feed by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"feedOptions"),". By default, RSS and Atom feeds are generated. To disable feed generation, set ",(0,a.kt)("inlineCode",{parentName:"p"},"feedOptions.type")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"type FeedType = 'rss' | 'atom' | 'json';\n\ntype BlogOptions = {\n  feedOptions?: {\n    type?: FeedType | 'all' | FeedType[] | null;\n    title?: string;\n    description?: string;\n    copyright: string;\n    language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n  };\n};\n")),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          // highlight-start\n          feedOptions: {\n            type: 'all',\n            copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`,\n          },\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"The feeds can be found at:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"RSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"https://example.com/blog/rss.xml\n"))),(0,a.kt)(l.Z,{value:"Atom",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"https://example.com/blog/atom.xml\n"))),(0,a.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-text"}),"https://example.com/blog/feed.json\n")))),(0,a.kt)("h2",r({},{id:"advanced-topics"}),"Advanced topics"),(0,a.kt)("h3",r({},{id:"blog-only-mode"}),"Blog-only mode"),(0,a.kt)("p",null,"You can run your Docusaurus 2 site without a dedicated landing page and instead have your blog's post list page as the index page. Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"routeBasePath")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"'/'")," to serve the blog through the root route ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com/")," instead of the subroute ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com/blog/"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        docs: false, // Optional: disable the docs plugin\n        blog: {\n          // highlight-next-line\n          routeBasePath: '/', // Serve the blog at the site's root\n          /* other blog options */\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Don't forget to delete the existing homepage at ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/pages/index.js")," or else there will be two files mapping to the same route!")),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},'There\'s also a "Docs-only mode" for those who only want to use the docs. Read ',(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/docs-introduction"}),"Docs-only mode")," for detailed instructions or a more elaborate explanation of ",(0,a.kt)("inlineCode",{parentName:"p"},"routeBasePath"),".")),(0,a.kt)("h3",r({},{id:"multiple-blogs"}),"Multiple blogs"),(0,a.kt)("p",null,"By default, the classic theme assumes only one blog per website and hence includes only one instance of the blog plugin. If you would like to have multiple blogs on a single website, it's possible too! You can add another blog by specifying another blog plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," option for ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"routeBasePath")," to the URL route that you want your second blog to be accessed on. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"routeBasePath")," here has to be different from the first blog or else there could be a collision of paths! Also, set ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," to the path to the directory containing your second blog's entries."),(0,a.kt)("p",null,"As documented for ",(0,a.kt)("a",r({parentName:"p"},{href:"/docusarus_test/zh-CN/docs/next/using-plugins#multi-instance-plugins-and-plugin-ids"}),"multi-instance plugins"),", you need to assign a unique ID to the plugins."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'}),"module.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        /**\n         * Required for any multi-instance plugin\n         */\n        id: 'second-blog',\n        /**\n         * URL route for the blog section of your site.\n         * *DO NOT* include a trailing slash.\n         */\n        routeBasePath: 'my-second-blog',\n        /**\n         * Path to data on filesystem relative to site dir.\n         */\n        path: './my-second-blog',\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"As an example, we host a second blog ",(0,a.kt)("a",r({parentName:"p"},{href:"/tests/blog"}),"here"),"."))}g.isMDXComponent=!0}}]);