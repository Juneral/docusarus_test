"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81293],{35318:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(27378);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),b=l,c=d["".concat(i,".").concat(b)]||d[b]||m[b]||s;return t?n.createElement(c,r(r({ref:a},p),{},{components:t})):n.createElement(c,r({ref:a},p))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<s;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61132:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(27378),l=t(38944);const s="tabItem_pnkT";function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o({children:e,hidden:a,className:t}){return n.createElement("div",r({role:"tabpanel",className:(0,l.Z)(s,t)},{hidden:a}),e)}},38269:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(27378),l=t(38944),s=t(29088),r=t(52196),o=t(77468),i=t(75527);const u="tabList_Qoir",p="tabItem_AQgk";function m(){return m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function d(e){var a;const{lazy:t,block:s,defaultValue:d,values:b,groupId:c,className:T}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:h.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),v=(0,r.l)(g,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const f=null===d?d:null!==(y=null!=d?d:null===(a=h.find((e=>e.props.default)))||void 0===a?void 0:a.props.value)&&void 0!==y?y:h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,o.U)(),[I,x]=(0,n.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=c){const e=k[c];null!=e&&e!==I&&g.some((a=>a.value===e))&&x(e)}const C=e=>{const a=e.currentTarget,t=N.indexOf(a),n=g[t].value;n!==I&&(O(a),x(n),null!=c&&w(c,String(n)))},Z=e=>{let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;var t;a=null!==(t=N[n])&&void 0!==t?t:N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;var n;a=null!==(n=N[t])&&void 0!==n?n:N[N.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},T)},g.map((({value:e,label:a,attributes:t})=>n.createElement("li",m({role:"tab",tabIndex:I===e?0:-1,"aria-selected":I===e,key:e,ref:e=>N.push(e),onKeyDown:Z,onClick:C},t,{className:(0,l.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":I===e})}),null!=a?a:e)))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==I})))))}function b(e){const a=(0,s.Z)();return n.createElement(d,m({key:String(a)},e))}},6698:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(27378),l=t(38944);const s="browserWindow_my1Q",r="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",u="dot_giz1",p="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function b({children:e,minHeight:a,url:t="http://localhost:3000"}){return n.createElement("div",{className:s,style:{minHeight:a}},n.createElement("div",{className:r},n.createElement("div",{className:o},n.createElement("span",{className:u,style:{background:"#f25f58"}}),n.createElement("span",{className:u,style:{background:"#fbbe3c"}}),n.createElement("span",{className:u,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,l.Z)(i,"text--truncate")},t),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:d},e))}},14937:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>T,contentTitle:()=>b,default:()=>v,frontMatter:()=>d,metadata:()=>c,toc:()=>h});t(27378);var n=t(35318),l=t(6698),s=t(38269),r=t(61132);const o="red_qMgG",i="orange_Su5Z",u="yellow_MDJn";function p(){return p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const d={id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},b="Tabs",c={unversionedId:"guides/markdown-features/tabs",id:"version-2.0.0-beta.22/guides/markdown-features/tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",source:"@site/versioned_docs/version-2.0.0-beta.22/guides/markdown-features/markdown-features-tabs.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/tabs",permalink:"/docusarus_test/docs/2.0.0-beta.22/markdown-features/tabs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-tabs.mdx",tags:[],version:"2.0.0-beta.22",frontMatter:{id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},sidebar:"docs",previous:{title:"MDX and React",permalink:"/docusarus_test/docs/2.0.0-beta.22/markdown-features/react"},next:{title:"Code blocks",permalink:"/docusarus_test/docs/2.0.0-beta.22/markdown-features/code-blocks"}},T={},h=[{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3}],g={toc:h};function v(e){var{components:a}=e,t=m(e,["components"]);return(0,n.kt)("wrapper",p({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"tabs"}),"Tabs"),(0,n.kt)("p",null,"Docusaurus provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tabs>")," component that you can use in Markdown thanks to ",(0,n.kt)("a",p({parentName:"p"},{href:"/docusarus_test/docs/2.0.0-beta.22/markdown-features/react"}),"MDX"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(r.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(r.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It is also possible to provide ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," props to ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(r.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(r.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("code",null,"Tabs")," props take precedence over the ",(0,n.kt)("code",null,"TabItem")," props:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"apple",label:"Apple 2",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(r.Z,{value:"orange",label:"Orange 2",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(r.Z,{value:"banana",label:"Banana 2",default:!0,mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))),(0,n.kt)("admonition",p({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."),(0,n.kt)("p",{parentName:"admonition"},"It is possible to only render the default tab with ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tabs lazy />"),".")),(0,n.kt)("h2",p({},{id:"displaying-a-default-tab"}),"Displaying a default tab"),(0,n.kt)("p",null,"The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," to one of the tab items. You can also set the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," component to the label value of your choice. For example, in the example above, either setting ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},'value="apple"')," tab or setting ",(0,n.kt)("inlineCode",{parentName:"p"},'defaultValue="apple"'),' for the tabs forces the "Apple" tab to be open by default.'),(0,n.kt)("p",null,"Docusaurus will throw an error if a ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue")," is provided for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultValue={null}"),"."),(0,n.kt)("h2",p({},{id:"syncing-tab-choices"}),"Syncing tab choices"),(0,n.kt)("p",null,"You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the choice in ",(0,n.kt)("inlineCode",{parentName:"p"},"localStorage")," and all ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tab>")," instances with the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,n.kt)(r.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,n.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,n.kt)(r.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste."))),(0,n.kt)("p",null,"For all tab groups that have the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,n.kt)("inlineCode",{parentName:"p"},"groupId"),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,n.kt)(r.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,n.kt)(r.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux."))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Tab choices with different group IDs will not interfere with each other:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows in windows."),(0,n.kt)(r.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS is macOS.")),(0,n.kt)(s.Z,{groupId:"non-mac-operating-systems",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows is windows."),(0,n.kt)(r.Z,{value:"unix",label:"Unix",mdxType:"TabItem"},"Unix is unix."))),(0,n.kt)("h2",p({},{id:"customizing-tabs"}),"Customizing tabs"),(0,n.kt)("p",null,"You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,n.kt)("inlineCode",{parentName:"p"},"className")," prop, and the specified CSS class will be added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n')),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(r.Z,{value:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(r.Z,{value:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("h3",p({},{id:"customizing-tab-headings"}),"Customizing tab headings"),(0,n.kt)("p",null,"You can also customize each tab heading independently by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"attributes")," field. The extra props can be passed to the headings either through the ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," prop in ",(0,n.kt)("inlineCode",{parentName:"p"},"Tabs"),", or props of each ",(0,n.kt)("inlineCode",{parentName:"p"},"TabItem"),"\u2014in the same way as you declare ",(0,n.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:'title="some-doc.mdx"',title:'"some-doc.mdx"'}),'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'}),".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n")),(0,n.kt)(l.Z,{mdxType:"BrowserWindow"},(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"apple",label:"Apple",attributes:{className:o},mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(r.Z,{value:"orange",label:"Orange",attributes:{className:i},mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(r.Z,{value:"banana",label:"Banana",attributes:{className:u},mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,n.kt)("admonition",p({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"className")," would be merged with other default class names. You may also use a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"data-value")," field (",(0,n.kt)("inlineCode",{parentName:"p"},"{'data-value': 'apple'}"),") paired with CSS attribute selectors:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",p({parentName:"pre"},{className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'}),"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n"))))}v.isMDXComponent=!0}}]);