/*! For license information please see c838a4c5.5bc32d67.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17769],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28475:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(27378),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function r(e){var t=n.useState(!1),a=t[0],r=t[1],s=n.useState(!1),i=s[0],l=s[1],u=encodeURIComponent(e.id),p="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,c=e.title,d=e.poster||"hqdefault",m="&"+e.params||0,h=e.muted?"&mute=1":"",g=e.announce||"Watch",f=e.webp?"webp":"jpg",k=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+k+"/"+p+"/"+d+"."+f:"https://i.ytimg.com/"+k+"/"+u+"/"+d+"."+f),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?b+"/embed/videoseries?autoplay=1"+h+"&list="+u+m:b+"/embed/"+u+"?autoplay=1&state=1"+h+m,v=e.activatedClass||"lyt-activated",N=e.adNetwork||!1,D=e.aspectHeight||9,O=e.aspectWidth||16,j=e.iframeClass||"",x=e.playerClass||"lty-playbtn",P=e.wrapperClass||"yt-lite",S=e.onIframeAdded||function(){};return n.useEffect((function(){i&&S()}),[i]),n.createElement(n.Fragment,null,n.createElement("link",{rel:"preload",href:y,as:"image"}),n.createElement(n.Fragment,null,a&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:b}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),N&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){a||r(!0)},onClick:function(){i||l(!0)},className:P+" "+(i?v:""),"data-title":c,style:o({backgroundImage:"url("+y+")"},{"--aspect-ratio":D/O*100+"%"})},n.createElement("button",{className:x,"aria-label":g+" "+c}),i&&n.createElement("iframe",{className:j,title:c,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}},23349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});a(27378);var n=a(35318),o=a(28475);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},l="Introduction",u={unversionedId:"introduction",id:"version-2.0.0-beta.22/introduction",title:"Introduction",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",source:"@site/versioned_docs/version-2.0.0-beta.22/introduction.md",sourceDirName:".",slug:"/",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction.md",tags:[],version:"2.0.0-beta.22",frontMatter:{description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/category/getting-started"}},p={},c=[{value:"Fast Track \u23f1\ufe0f",id:"fast-track",level:2},{value:"Docusaurus: Documentation Made Easy",id:"docusaurus-documentation-made-easy",level:2},{value:"Migrating from v1",id:"migrating-from-v1",level:2},{value:"Features",id:"features",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Comparison with other tools",id:"comparison-with-other-tools",level:2},{value:"Gatsby",id:"gatsby",level:3},{value:"Next.js",id:"nextjs",level:3},{value:"VuePress",id:"vuepress",level:3},{value:"MkDocs",id:"mkdocs",level:3},{value:"Docsify",id:"docsify",level:3},{value:"GitBook",id:"gitbook",level:3},{value:"Jekyll",id:"jekyll",level:3},{value:"Staying informed",id:"staying-informed",level:2},{value:"Something missing?",id:"something-missing",level:2}],d={toc:c};function m(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"introduction"}),"Introduction"),(0,n.kt)("p",null,"\u26a1\ufe0f Docusaurus will help you ship a ",(0,n.kt)("strong",{parentName:"p"},"beautiful documentation site in no time"),"."),(0,n.kt)("p",null,"\ud83d\udcb8 Building a custom tech stack is expensive. Instead, ",(0,n.kt)("strong",{parentName:"p"},"focus on your content")," and just write Markdown files."),(0,n.kt)("p",null,"\ud83d\udca5 Ready for more? Use ",(0,n.kt)("strong",{parentName:"p"},"advanced features")," like versioning, i18n, search and theme customizations."),(0,n.kt)("p",null,"\ud83d\udc85 Check the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"/showcase?tags=favorite"}),"best Docusaurus sites"))," for inspiration and read some ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"https://twitter.com/sebastienlorber/timelines/1392048416872706049"}),"testimonials")),"."),(0,n.kt)("p",null,"\ud83e\uddd0 Docusaurus is a ",(0,n.kt)("strong",{parentName:"p"},"static-site generator"),". It builds a ",(0,n.kt)("strong",{parentName:"p"},"single-page application")," with fast client-side navigation, leveraging the full power of ",(0,n.kt)("strong",{parentName:"p"},"React")," to make your site interactive. It provides out-of-the-box ",(0,n.kt)("strong",{parentName:"p"},"documentation features")," but can be used to create ",(0,n.kt)("strong",{parentName:"p"},"any kind of site")," (personal website, product, blog, marketing landing pages, etc)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Slash Introduction",src:a(19267).Z,width:"760",height:"160"})),(0,n.kt)("h2",r({},{id:"fast-track"}),"Fast Track \u23f1\ufe0f"),(0,n.kt)("p",null,"Understand Docusaurus in ",(0,n.kt)("strong",{parentName:"p"},"5 minutes")," by playing!"),(0,n.kt)("p",null,"Create a new Docusaurus site and follow the ",(0,n.kt)("strong",{parentName:"p"},"very short")," embedded tutorial."),(0,n.kt)("p",null,"Install ",(0,n.kt)("a",r({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js")," and create a new Docusaurus site:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npx create-docusaurus@latest my-website classic\n")),(0,n.kt)("p",null,"Start the site:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"cd my-website\nnpx docusaurus start\n")),(0,n.kt)("p",null,"Open ",(0,n.kt)("a",r({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," and follow the tutorial."),(0,n.kt)("admonition",r({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Use ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"https://docusaurus.new"}),"docusaurus.new"))," to test Docusaurus immediately in your browser!"),(0,n.kt)("p",{parentName:"admonition"},"Or read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"https://tutorial.docusaurus.io"}),"5-minute tutorial"))," online.")),(0,n.kt)("h2",r({},{id:"docusaurus-documentation-made-easy"}),"Docusaurus: Documentation Made Easy"),(0,n.kt)("p",null,"In this presentation at ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.algolia.com/"}),"Algolia Community Event"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"https://opensource.facebook.com/"}),"Meta Open Source team")," shared a brief walk-through of Docusaurus. They covered how to get started with the project, enable plugins, and set up functionalities like documentation and blogging."),(0,n.kt)("div",{className:"video-container"},(0,n.kt)(o.Z,{id:"Yhyx7otSksg",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Docusaurus: Documentation Made Easy",poster:"maxresdefault",webp:!0,mdxType:"LiteYouTubeEmbed"})),(0,n.kt)("h2",r({},{id:"migrating-from-v1"}),"Migrating from v1"),(0,n.kt)("p",null,"Docusaurus v2 has been a total rewrite from Docusaurus v1, taking advantage of a completely modernized toolchain. After ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docusaurus.io/blog/2022/08/01/announcing-docusaurus-2.0"}),"v2's official release"),", we highly encourage you to ",(0,n.kt)("strong",{parentName:"p"},"use Docusaurus v2 over Docusaurus v1"),", as Docusaurus v1 has been deprecated."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",r({parentName:"p"},{href:"/showcase"}),"lot of users")," are already using Docusaurus v2 (",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.npmtrends.com/docusaurus-vs-@docusaurus/core"}),"trends"),")."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Docusaurus v2 if:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 You want a modern Jamstack documentation site"),(0,n.kt)("li",{parentName:"ul"},"\u2705 You want a single-page application (SPA) with client-side routing"),(0,n.kt)("li",{parentName:"ul"},"\u2705 You want the full power of React and MDX"),(0,n.kt)("li",{parentName:"ul"},"\u2705 You do not need support for IE11")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use ",(0,n.kt)("a",r({parentName:"strong"},{href:"https://v1.docusaurus.io/"}),"Docusaurus v1")," if:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u274c You don't want a single-page application (SPA)"),(0,n.kt)("li",{parentName:"ul"},"\u274c You need support for IE11 (...do you? IE ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.microsoft.com/en-us/lifecycle/products/internet-explorer-11"}),"has already reached end-of-life")," and is no longer officially supported)")),(0,n.kt)("p",null,"For existing v1 users that are seeking to upgrade to v2, you can follow our ",(0,n.kt)("a",r({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/migration"}),"migration guide"),"."),(0,n.kt)("h2",r({},{id:"features"}),"Features"),(0,n.kt)("p",null,"Docusaurus is built with high attention to the developer and contributor experience."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u269b\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Built with \ud83d\udc9a and React"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Extend and customize with React"),(0,n.kt)("li",{parentName:"ul"},"Gain full control of your site's browsing experience by providing your own React components"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pluggable"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bootstrap your site with a basic template, then use advanced features and plugins"),(0,n.kt)("li",{parentName:"ul"},"Open source your plugins to share with the community"))),(0,n.kt)("li",{parentName:"ul"},"\u2702\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Developer experience"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Start writing your docs right now"),(0,n.kt)("li",{parentName:"ul"},"Universal configuration entry point to make it more maintainable by contributors"),(0,n.kt)("li",{parentName:"ul"},"Hot reloading with lightning-fast incremental build on changes"),(0,n.kt)("li",{parentName:"ul"},"Route-based code and data splitting"),(0,n.kt)("li",{parentName:"ul"},"Publish to GitHub Pages, Netlify, Vercel, and other deployment services with ease")))),(0,n.kt)("p",null,"Our shared goal\u2014to help your users quickly find what they need and understand your products better. We share our best practices to help you build your docs site right and well."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfaf ",(0,n.kt)("strong",{parentName:"li"},"SEO friendly"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML files are statically generated for every possible path."),(0,n.kt)("li",{parentName:"ul"},"Page-specific SEO to help your users land on your official docs directly relating their problems at hand."))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,n.kt)("strong",{parentName:"li"},"Powered by MDX"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Write interactive components via JSX and React embedded in Markdown."),(0,n.kt)("li",{parentName:"ul"},"Share your code in live editors to get your users to love your products on the spot."))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0d ",(0,n.kt)("strong",{parentName:"li"},"Search"),": Your full site is searchable."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcbe ",(0,n.kt)("strong",{parentName:"li"},"Document Versioning"),": Helps you keep documentation in sync with project releases."),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf0d ",(0,n.kt)("strong",{parentName:"li"},"Internationalization (i18n)"),": Translate your site in multiple locales.")),(0,n.kt)("p",null,"Docusaurus 2 is born to be compassionately accessible to all your users, and lightning-fast."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Lightning-fast"),". Docusaurus 2 follows the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/"}),"PRPL Pattern")," that makes sure your content loads blazing fast."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd96 ",(0,n.kt)("strong",{parentName:"li"},"Accessible"),". Attention to accessibility, making your site equally accessible to all users.")),(0,n.kt)("h2",r({},{id:"design-principles"}),"Design principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Little to learn"),". Docusaurus should be easy to learn and use as the API is quite small. Most things will still be achievable by users, even if it takes them more code and more time to write. Not having abstractions is better than having the wrong abstractions, and we don't want users to have to hack around the wrong abstractions. Mandatory talk\u2014",(0,n.kt)("a",r({parentName:"li"},{href:"https://www.youtube.com/watch?v=4anAwXYqLG8"}),"Minimal API Surface Area"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Intuitive"),". Users will not feel overwhelmed when looking at the project directory of a Docusaurus project or adding new features. It should look intuitive and easy to build on top of, using approaches they are familiar with."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Layered architecture"),". The separations of concerns between each layer of our stack (content/theming/styling) should be clear\u2014well-abstracted and modular."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sensible defaults"),". Common and popular performance optimizations and configurations will be done for users but they are given the option to override them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No vendor lock-in"),". Users are not required to use the default plugins or CSS, although they are highly encouraged to. Certain core infrastructures like React Loadable and React Router cannot be swapped because we do default performance optimization on them, but not higher-level ones. Choice of Markdown engines, CSS frameworks, CSS methodology, and other architectures will be entirely up to users.")),(0,n.kt)("p",null,"We believe that, as developers, knowing how a library works helps us become better at using it. Hence we're dedicating effort to explaining the architecture and various components of Docusaurus with the hope that users reading it will gain a deeper understanding of the tool and be even more proficient in using it."),(0,n.kt)("h2",r({},{id:"comparison-with-other-tools"}),"Comparison with other tools"),(0,n.kt)("p",null,"Across all static site generators, Docusaurus has a unique focus on documentation sites and has many out-of-the-box features."),(0,n.kt)("p",null,"We've also studied other main static site generators and would like to share our insights on the comparison, hopefully helping you navigate through the prismatic choices out there."),(0,n.kt)("h3",r({},{id:"gatsby"}),"Gatsby"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://www.gatsbyjs.com/"}),"Gatsby")," is packed with a lot of features, has a rich ecosystem of plugins, and is capable of doing everything that Docusaurus does. Naturally, that comes at a cost of a higher learning curve. Gatsby does many things well and is suitable for building many types of websites. On the other hand, Docusaurus tries to do one thing super well - be the best tool for writing and publishing content."),(0,n.kt)("p",null,"GraphQL is also pretty core to Gatsby, although you don't necessarily need GraphQL to build a Gatsby site. In most cases when building static websites, you won't need the flexibility that GraphQL provides."),(0,n.kt)("p",null,"Many aspects of Docusaurus 2 were inspired by the best things about Gatsby and it's a great alternative."),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/pedronauck/docz"}),"Docz")," is a Gatsby theme to build documentation websites. It is currently less featured than Docusaurus."),(0,n.kt)("h3",r({},{id:"nextjs"}),"Next.js"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://nextjs.org/"}),"Next.js")," is another very popular hybrid React framework. It can help you build a good documentation website, but it is not opinionated toward the documentation use-case, and it will require a lot more work to implement what Docusaurus provides out-of-the-box."),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/shuding/nextra"}),"Nextra")," is an opinionated static site generator built on top of Next.js. It is currently less featured than Docusaurus."),(0,n.kt)("h3",r({},{id:"vuepress"}),"VuePress"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://vuepress.vuejs.org/"}),"VuePress")," has many similarities with Docusaurus - both focus heavily on content-centric website and provides tailored documentation features out of the box. However, VuePress is powered by Vue, while Docusaurus is powered by React. If you want a Vue-based solution, VuePress would be a decent choice."),(0,n.kt)("h3",r({},{id:"mkdocs"}),"MkDocs"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://www.mkdocs.org/"}),"MkDocs")," is a popular Python static site generator with value propositions similar to Docusaurus."),(0,n.kt)("p",null,"It is a good option if you don't need a single-page application and don't plan to leverage React."),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://squidfunk.github.io/mkdocs-material/"}),"Material for MkDocs")," is a beautiful theme."),(0,n.kt)("h3",r({},{id:"docsify"}),"Docsify"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://docsify.js.org/"}),"Docsify")," makes it easy to create a documentation website, but is not a static-site generator and is not SEO friendly."),(0,n.kt)("h3",r({},{id:"gitbook"}),"GitBook"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://www.gitbook.com/"}),"GitBook")," has a very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs of open source projects' documentation sites. As a result, many have turned to other products. You may read about Redux's switch to Docusaurus ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/reduxjs/redux/issues/3161"}),"here"),"."),(0,n.kt)("p",null,"Currently, GitBook is only free for open-source and non-profit teams. Docusaurus is free for everyone."),(0,n.kt)("h3",r({},{id:"jekyll"}),"Jekyll"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/jekyll/jekyll"}),"Jekyll")," is one of the most mature static site generators around and has been a great tool to use \u2014 in fact, before Docusaurus, most of Facebook's Open Source websites are/were built on Jekyll! It is extremely simple to get started. We want to bring a similar developer experience as building a static site with Jekyll."),(0,n.kt)("p",null,"In comparison with statically generated HTML and interactivity added using ",(0,n.kt)("inlineCode",{parentName:"p"},"<script />")," tags, Docusaurus sites are React apps. Using modern JavaScript ecosystem tooling, we hope to set new standards on doc sites' performance, asset building pipeline and optimizations, and ease to set up."),(0,n.kt)("h2",r({},{id:"staying-informed"}),"Staying informed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/facebook/docusaurus"}),"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://twitter.com/docusaurus"}),"Twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/blog"}),"Blog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://discord.gg/docusaurus"}),"Discord"))),(0,n.kt)("h2",r({},{id:"something-missing"}),"Something missing?"),(0,n.kt)("p",null,"If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"file an issue")," for us, or send a tweet mentioning the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/docusaurus"}),"@docusaurus")," Twitter account."),(0,n.kt)("p",null,"For new feature requests, you can create a post on our ",(0,n.kt)("a",r({parentName:"p"},{href:"/feature-requests"}),"feature requests board (Canny)"),", which is a handy tool for road-mapping and allows for sorting by upvotes, which gives the core team a better indicator of what features are in high demand, as compared to GitHub issues which are harder to triage. Refrain from making a Pull Request for new features (especially large ones) as someone might already be working on it or will be part of our roadmap. Talk to us first!"))}m.isMDXComponent=!0},19267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/slash-introducing-411a16dd05086935b8e9ddae38ae9b45.svg"}}]);