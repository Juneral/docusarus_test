"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83692],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,d=h["".concat(s,".").concat(p)]||h[p]||u[p]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>f,default:()=>E,frontMatter:()=>g,metadata:()=>y,toc:()=>v});var r=a(27378),n=a(35318),o=a(36712),i=a(13415);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s({to:e,children:t}){return r.createElement(i.Z,{to:e},null!=t?t:r.createElement(o.Z,{id:"team.profile.websiteLinkLabel"},"website"))}function c({className:e,name:t,children:a,githubUrl:n,twitterUrl:o}){return r.createElement("div",{className:e},r.createElement("div",{className:"card card--full-height"},r.createElement("div",{className:"card__header"},r.createElement("div",{className:"avatar avatar--vertical"},r.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${n}.png`,alt:`${t}'s avatar`}),r.createElement("div",{className:"avatar__intro"},r.createElement("h3",{className:"avatar__name"},t)))),r.createElement("div",{className:"card__body"},a),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},n&&r.createElement("a",{className:"button button--secondary",href:n},"GitHub"),o&&r.createElement("a",{className:"button button--secondary",href:o},"Twitter")))))}function m(e){return r.createElement(c,l({},e,{className:"col col--6 margin-bottom--lg"}))}function u(){return r.createElement("div",{className:"row"},r.createElement(m,{name:"Alexey Pyltsyn",githubUrl:"https://github.com/lex111"},r.createElement(o.Z,{id:"team.profile.Alexey Pyltsyn.body"},"Obsessed open-source enthusiast \ud83d\udc4b Eternal amateur at everything \ud83e\udd37\u200d\u2642\ufe0f Maintainer of Russian docs on PHP, React, Kubernetes and much more \ud83e\uddd0")),r.createElement(m,{name:"Joel Marcey",githubUrl:"https://github.com/JoelMarcey",twitterUrl:"https://twitter.com/joelmarcey"},r.createElement(o.Z,{id:"team.profile.Joel Marcey.body"},"Docusaurus founder and now ever grateful Docusaurus cheerleader to those who actually write code for it.")),r.createElement(m,{name:"S\xe9bastien Lorber",githubUrl:"https://github.com/slorber",twitterUrl:"https://twitter.com/sebastienlorber"},r.createElement(o.Z,{id:"team.profile.Sebastien Lorber.body",values:{website:r.createElement(s,{to:"https://sebastienlorber.com/"}),devto:r.createElement(i.Z,{to:"https://dev.to/sebastienlorber"},"Dev.to")}},"React lover since 2014. Freelance, helping Facebook ship Docusaurus v2. He writes regularly, on his {website} and {devto}.")),r.createElement(m,{name:"Sida Chen",githubUrl:"https://github.com/Josh-Cena",twitterUrl:"https://twitter.com/SidaChen63"},r.createElement(o.Z,{id:"team.profile.Sida Chen.body"},"Student from Shanghai, China. Enthusiastic open-source project creator, but never actually works hard on those projects he created.")),r.createElement(m,{name:"Yangshun Tay",githubUrl:"https://github.com/yangshun",twitterUrl:"https://twitter.com/yangshunz"},r.createElement(o.Z,{id:"team.profile.Yangshun Tay.body"},"Full Front End Stack developer who likes working on the Jamstack. Working on Docusaurus made him Facebook's unofficial part-time Open Source webmaster, which is an awesome role to be in.")))}function h(){return r.createElement("div",{className:"row"},r.createElement(m,{name:"Endilie Yacop Sucipto",githubUrl:"https://github.com/endiliey",twitterUrl:"https://twitter.com/endiliey"},r.createElement(o.Z,{id:"team.profile.Endilie Yacop Sucipto.body"},"Maintainer @docusaurus \xb7 \ud83d\udd25\ud83d\udd25\ud83d\udd25")),r.createElement(m,{name:"Wei Gao",githubUrl:"https://github.com/wgao19",twitterUrl:"https://twitter.com/wgao19"},r.createElement(o.Z,{id:"team.profile.Wei Gao.body"},"\ud83c\udffb\u200d\ud83c\udf3e Work in progress React developer, maintains Docusaurus, writes docs and spams this world with many websites.")))}function p(){return r.createElement("div",{className:"row"},r.createElement(m,{name:"Anshul Goyal",githubUrl:"https://github.com/anshulrgoyal",twitterUrl:"https://twitter.com/ar_goyal"},r.createElement(o.Z,{id:"team.profile.Anshul Goyal.body",values:{websiteLink:r.createElement(i.Z,{href:"https://anshulgoyal.dev/"},r.createElement(o.Z,{id:"team.profile.Anshul Goyal.body.websiteLink.label"},"website"))}},"Fullstack developer who loves to code and try new technologies. In his free time, he contributes to open source, writes blog posts on his {websiteLink} and watches Anime.")),r.createElement(m,{name:"Drew Alexander",githubUrl:"https://github.com/drewbi"},r.createElement(o.Z,{id:"team.profile.Drew Alexander.body"},"Developer and Creative, trying to gain the skills to build whatever he can think of.")),r.createElement(m,{name:"Fanny Vieira",githubUrl:"https://github.com/fanny",twitterUrl:"https://twitter.com/fannyvieiira"},r.createElement(o.Z,{id:"team.profile.Fanny Vieira.body",values:{blogLink:r.createElement(i.Z,{href:"https://dev.to/fannyvieira"},r.createElement(o.Z,{id:"team.profile.Fanny Vieira.body.blogLink.label"},"her blog")),spotifyLink:r.createElement(i.Z,{href:"https://open.spotify.com/user/anotherfanny"},r.createElement(o.Z,{id:"team.profile.Fanny Vieira.body.spotifyLink.label"},"Spotify playlists"))}},"Fanny got started with web development in high school, building a project for the school kitchen. In her free time she loves contributing to Open Source, occasionally writing on {blogLink} about her experiences, cooking, and creating {spotifyLink}.")),r.createElement(m,{name:"Sam Zhou",githubUrl:"https://github.com/SamChou19815",twitterUrl:"https://twitter.com/SamChou19815"},r.createElement(o.Z,{id:"team.profile.Sam Zhou.body",values:{websiteLink:r.createElement(i.Z,{href:"https://developersam.com"},r.createElement(o.Z,{id:"team.profile.Anshul Goyal.body.websiteLink.label"},"website")),samLangLink:r.createElement(i.Z,{href:"https://samlang.developersam.com/"},r.createElement(o.Z,{id:"team.profile.Sam Zhou.body.samLangLink.label"},"programming language")),miniReactLink:r.createElement(i.Z,{href:"https://github.com/SamChou19815/mini-react"},r.createElement(o.Z,{id:"team.profile.Sam Zhou.body.miniReactLink.label"},"mini React"))}},"Sam started programming in 2011 and built his {websiteLink} in 2015. He is interested in programming languages, dev infra and web development, and has built his own {samLangLink} and {miniReactLink}.")),r.createElement(m,{name:"Tan Teik Jun",githubUrl:"https://github.com/teikjun",twitterUrl:"https://twitter.com/teik_jun"},r.createElement(o.Z,{id:"team.profile.Tan Teik Jun.body"},"Open-source enthusiast who aims to become as awesome as the other humans on this page. Working on Docusaurus brought him closer to his goal. \ud83c\udf31")),r.createElement(m,{name:"Nisarag Bhatt",githubUrl:"https://github.com/FocalChord",twitterUrl:"https://twitter.com/focalchord_"},r.createElement(o.Z,{id:"team.profile.Nisarag Bhatt.body"},"Fullstack web developer who loves learning new technologies and applying them! Loves contributing to open source as well as writing content articles and tutorials.")))}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const g={},f="Team",y={unversionedId:"team",id:"team",title:"Team",description:"Active Team",source:"@site/community/1-team.mdx",sourceDirName:".",slug:"/team",permalink:"/docusarus_test/zh-CN/community/team",draft:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"community",previous:{title:"Support",permalink:"/docusarus_test/zh-CN/community/support"},next:{title:"Awesome Resources",permalink:"/docusarus_test/zh-CN/community/resources"}},w={},v=[{value:"Active Team",id:"active-team",level:2},{value:"Honorary Alumni",id:"honorary-alumni",level:2},{value:"Student Fellows",id:"student-fellows",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],k={toc:v};function E(e){var{components:t}=e,a=b(e,["components"]);return(0,n.kt)("wrapper",d({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"team"}),"Team"),(0,n.kt)("h2",d({},{id:"active-team"}),"Active Team"),(0,n.kt)("p",null,"The Docusaurus team works on the core functionality, plugins for the classic theme, as well as the Docusaurus documentation website."),(0,n.kt)("p",null,"Current members of the Docusaurus team are listed in alphabetical order below."),(0,n.kt)(u,{mdxType:"ActiveTeamRow"}),(0,n.kt)("h2",d({},{id:"honorary-alumni"}),"Honorary Alumni"),(0,n.kt)("p",null,"Docusaurus would never be what it is today without the huge contributions from these folks who have moved on to bigger and greater things."),(0,n.kt)(h,{mdxType:"HonoraryAlumniTeamRow"}),(0,n.kt)("h2",d({},{id:"student-fellows"}),"Student Fellows"),(0,n.kt)("p",null,"A handful of students have also worked on Docusaurus as part of their school term/internship and the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://fellowship.mlh.io/"}),"Major League Hacking Fellowship program"),", contributing amazing features such as plugin options validation, migration tooling, and a Bootstrap theme."),(0,n.kt)(p,{mdxType:"StudentFellowsTeamRow"}),(0,n.kt)("h2",d({},{id:"acknowledgements"}),"Acknowledgements"),(0,n.kt)("p",null,"Docusaurus was originally created by Joel Marcey. Today, Docusaurus has a few hundred open source contributors. We\u2019d like to recognize a few people who have made significant contributions to Docusaurus and its documentation in the past and have helped maintain them over the years:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/amyrlam"}),"Amy Lam")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/chenglou"}),"Cheng Lou")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/caabernathy"}),"Christine Abernathy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/vjeux"}),"Christopher Chedeau")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/elviswolcott"}),"Elvis Wolcott")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/ericnakagawa"}),"Eric Nakagawa")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/fiennyangeln"}),"Fienny Angelina")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/deltice"}),"Frank Li")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/hramos"}),"H\xe9ctor Ramos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/rlamana"}),"Ram\xf3n Lamana")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/rickyvetter"}),"Ricky Vetter"))))}E.isMDXComponent=!0}}]);