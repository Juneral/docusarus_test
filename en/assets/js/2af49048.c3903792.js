"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34583],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={slug:"/migration/translated-sites"},s="Translated sites",l={unversionedId:"migration/migration-translated-sites",id:"version-2.0.0-beta.22/migration/migration-translated-sites",title:"Translated sites",description:"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2.",source:"@site/versioned_docs/version-2.0.0-beta.22/migration/migration-translated-sites.md",sourceDirName:"migration",slug:"/migration/translated-sites",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/migration/translated-sites",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-translated-sites.md",tags:[],version:"2.0.0-beta.22",frontMatter:{slug:"/migration/translated-sites"},sidebar:"docs",previous:{title:"Versioned sites",permalink:"/docusarus_test/en/docs/2.0.0-beta.22/migration/versioned-sites"}},u={},d=[{value:"i18n differences",id:"i18n-differences",level:2},{value:"Different filesystem paths",id:"different-filesystem-paths",level:3},{value:"Updated translation APIs",id:"updated-translation-apis",level:3},{value:"Stricter Markdown parser",id:"stricter-markdown-parser",level:3},{value:"Migration strategies",id:"migration-strategies",level:2},{value:"Create a new Crowdin project",id:"create-a-new-crowdin-project",level:3},{value:"Use the existing Crowdin project",id:"use-the-existing-crowdin-project",level:3},{value:"Use Git instead of Crowdin",id:"use-git-instead-of-crowdin",level:3}],p={toc:d};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"translated-sites"}),"Translated sites"),(0,r.kt)("p",null,"This page explains how migrate a translated Docusaurus v1 site to Docusaurus v2."),(0,r.kt)("h2",a({},{id:"i18n-differences"}),"i18n differences"),(0,r.kt)("p",null,"Docusaurus v2 i18n is conceptually quite similar to Docusaurus v1 i18n with a few differences."),(0,r.kt)("p",null,"It is not tightly coupled to Crowdin, and you can use Git or another SaaS instead."),(0,r.kt)("h3",a({},{id:"different-filesystem-paths"}),"Different filesystem paths"),(0,r.kt)("p",null,"On Docusaurus v2, localized content is generally found at ",(0,r.kt)("inlineCode",{parentName:"p"},"website/i18n/[locale]"),"."),(0,r.kt)("p",null,"Docusaurus v2 is modular based on a plugin system, and each plugin is responsible to manage its own translations."),(0,r.kt)("p",null,"Each plugin has its own i18n subfolder, like: ",(0,r.kt)("inlineCode",{parentName:"p"},"website/i18n/fr/docusaurus-plugin-content-blog")),(0,r.kt)("h3",a({},{id:"updated-translation-apis"}),"Updated translation APIs"),(0,r.kt)("p",null,"With Docusaurus v1, you translate your pages with ",(0,r.kt)("inlineCode",{parentName:"p"},"<translate>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"const translate = require('../../server/translate.js').translate;\n\n<h2>\n  <translate desc=\"the header description\">\n    This header will be translated\n  </translate>\n</h2>;\n")),(0,r.kt)("p",null,"On Docusaurus v2, you translate your pages with ",(0,r.kt)("inlineCode",{parentName:"p"},"<Translate>")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),'import Translate from \'@docusaurus/Translate\';\n\n<h2>\n  <Translate id="header.translation.id" description="the header description">\n    This header will be translated\n  </Translate>\n</h2>;\n')),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write-translations")," CLI still works to extract translations from your code."),(0,r.kt)("p",{parentName:"admonition"},"The code translations are now added to ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/[locale]/code.json")," using Chrome i18n JSON format.")),(0,r.kt)("h3",a({},{id:"stricter-markdown-parser"}),"Stricter Markdown parser"),(0,r.kt)("p",null,"Docusaurus v2 is using ",(0,r.kt)("a",a({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX")," to parse Markdown files."),(0,r.kt)("p",null,"MDX compiles Markdown files to React components, is stricter than the Docusaurus v1 parser, and will make your build fail on error instead of rendering some bad content."),(0,r.kt)("p",null,"Also, the HTML elements must be replaced by JSX elements."),(0,r.kt)("p",null,"This is particularly important for i18n because if your translations are not good on Crowdin and use invalid Markup, your v2 translated site might fail to build: you may need to do some translation cleanup to fix the errors."),(0,r.kt)("h2",a({},{id:"migration-strategies"}),"Migration strategies"),(0,r.kt)("p",null,"This section will help you figure out how to ",(0,r.kt)("strong",{parentName:"p"},"keep your existing v1 translations after you migrate to v2"),"."),(0,r.kt)("p",null,"There are ",(0,r.kt)("strong",{parentName:"p"},"multiple possible strategies")," to migrate a Docusaurus v1 site using Crowdin, with different tradeoffs."),(0,r.kt)("admonition",a({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This documentation is a best-effort to help you migrate, please help us improve it if you find a better way!")),(0,r.kt)("p",null,"Before all, we recommend to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrate your v1 Docusaurus site to v2 without the translations"),(0,r.kt)("li",{parentName:"ul"},"Get familiar with the ",(0,r.kt)("a",a({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/i18n/introduction"}),"new i18n system of Docusaurus v2")," an"),(0,r.kt)("li",{parentName:"ul"},"Make Crowdin work for your v2 site, using a new and untranslated Crowdin project and the ",(0,r.kt)("a",a({parentName:"li"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/i18n/crowdin"}),"Crowdin tutorial"))),(0,r.kt)("admonition",a({},{type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},"Don't try to migrate without understanding both Crowdin and Docusaurus v2 i18n.")),(0,r.kt)("h3",a({},{id:"create-a-new-crowdin-project"}),"Create a new Crowdin project"),(0,r.kt)("p",null,"To avoid any ",(0,r.kt)("strong",{parentName:"p"},"risk of breaking your v1 site in production"),", one possible strategy is to duplicate the original v1 Crowdin project."),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"This strategy was used to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://jestjs.io/blog/2021/03/09/jest-website-upgrade"}),"upgrade the Jest website"),".")),(0,r.kt)("p",null,'Unfortunately, Crowdin does not have any "Duplicate/clone Project" feature, which makes things complicated.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the translation memory of your original project in ",(0,r.kt)("inlineCode",{parentName:"li"},".tmx")," format (",(0,r.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<ORIGINAL_PROJECT>/settings#tm")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"View Records"),")"),(0,r.kt)("li",{parentName:"ul"},"Upload the translation memory to your new project (",(0,r.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<NEW_PROJECT>/settings#tm")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"View Records"),")"),(0,r.kt)("li",{parentName:"ul"},"Reconfigure ",(0,r.kt)("inlineCode",{parentName:"li"},"crowdin.yml")," for Docusaurus v2 according to the i18n docs"),(0,r.kt)("li",{parentName:"ul"},"Upload the Docusaurus v2 source files with the Crowdin CLI to the new project"),(0,r.kt)("li",{parentName:"ul"},"Mark sensitive strings like ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"slug"),' as "hidden string" on Crowdin'),(0,r.kt)("li",{parentName:"ul"},'On the "Translations" tab, click on "Pre-Translation > via TM" (',(0,r.kt)("inlineCode",{parentName:"li"},"https://crowdin.com/project/<NEW_PROJECT>/settings#translations"),")"),(0,r.kt)("li",{parentName:"ul"},'Try first with "100% match" (more content will be translated than "Perfect"), and pre-translate your sources'),(0,r.kt)("li",{parentName:"ul"},"Download the Crowdin translations locally"),(0,r.kt)("li",{parentName:"ul"},"Try to run/build your site and see if there are any errors")),(0,r.kt)("p",null,"You will likely have errors on your first-try: the pre-translation might try to translate things that it should not be translated (front matter, admonition, code blocks...), and the translated MD files might be invalid for the MDX parser."),(0,r.kt)("p",null,"You will have to fix all the errors until your site builds. You can do that by modifying the translated MD files locally, and fix your site for one locale at a time using ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus build --locale fr"),"."),(0,r.kt)("p",null,"There is no ultimate guide we could write to fix these errors, but common errors are due to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Not marking enough strings as "hidden strings" in Crowdin, leading to pre-translation trying to translate these strings.'),(0,r.kt)("li",{parentName:"ul"},"Having bad v1 translations, leading to invalid markup in v2: bad HTML elements inside translations and unclosed tags"),(0,r.kt)("li",{parentName:"ul"},"Anything rejected by the MDX parser, like using HTML elements instead of JSX elements (use the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://mdxjs.com/playground/"}),"MDX playground")," for debugging)")),(0,r.kt)("p",null,'You might want to repeat this pre-translation process, eventually trying the "Perfect" option and limiting pre-translation only some languages/files.'),(0,r.kt)("admonition",a({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",a({parentName:"p"},{href:"/docusarus_test/en/docs/2.0.0-beta.22/i18n/crowdin#mdx-solutions"}),(0,r.kt)("inlineCode",{parentName:"a"},"mdx-code-block"))," around problematic Markdown elements: Crowdin is less likely mess things up with code blocks.")),(0,r.kt)("admonition",a({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"You will likely notice that some things were translated on your old project, but are now untranslated in your new project."),(0,r.kt)("p",{parentName:"admonition"},"The Crowdin Markdown parser is evolving other time and each Crowdin project has a different parser version, which can lead to pre-translation not being able to pre-translate all the strings."),(0,r.kt)("p",{parentName:"admonition"},"This parser version is undocumented, and you will have to ask the Crowdin support to know your project's parser version and fix one specific version."),(0,r.kt)("p",{parentName:"admonition"},"Using the same CLI version and parser version across the 2 Crowdin projects might give better results.")),(0,r.kt)("admonition",a({},{type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},'Crowdin has an "upload translations" feature, but in our experience it does not give very good results for Markdown')),(0,r.kt)("h3",a({},{id:"use-the-existing-crowdin-project"}),"Use the existing Crowdin project"),(0,r.kt)("p",null,"If you don't mind modifying your existing Crowdin project and risking to mess things up, it may be possible to use the Crowdin branch system."),(0,r.kt)("admonition",a({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This workflow has not been tested in practice, please report us how good it is.")),(0,r.kt)("p",null,"This way, you wouldn't need to create a new Crowdin project, transfer the translation memory, apply pre-translations, and try to fix the pre-translations errors."),(0,r.kt)("p",null,"You could create a Crowdin branch for Docusaurus v2, where you upload the v2 sources, and merge the Crowdin branch to main once ready."),(0,r.kt)("h3",a({},{id:"use-git-instead-of-crowdin"}),"Use Git instead of Crowdin"),(0,r.kt)("p",null,"It is possible to migrate away of Crowdin, and add the translation files to Git instead."),(0,r.kt)("p",null,"Use the Crowdin CLI to download the v1 translated files, and put these translated files at the correct Docusaurus v2 filesystem location."))}c.isMDXComponent=!0}}]);