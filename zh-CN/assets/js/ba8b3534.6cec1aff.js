"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12983],{66074:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(27378),a=n(93127),r=n(20469);function u({pluginId:e,pluginInstanceContent:t}){return l.createElement("section",{style:{marginBottom:30}},l.createElement("code",null,e),l.createElement(r.Z,{src:t,collapseDepth:2}))}function c({pluginName:e,pluginContent:t}){return l.createElement("section",{style:{marginBottom:60}},l.createElement("h3",null,e),l.createElement("div",null,Object.entries(t).filter((([,e])=>!!e)).map((([e,t])=>l.createElement(u,{key:e,pluginId:e,pluginInstanceContent:t})))))}function o({allContent:e}){return l.createElement(a.Z,null,l.createElement("h2",null,"Plugin content"),l.createElement("div",null,Object.entries(e).filter((([,e])=>Object.values(e).some((e=>!!e)))).map((([e,t])=>l.createElement(c,{key:e,pluginName:e,pluginContent:t})))))}},20469:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(27378),a=n(94544);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function u(e){return l.createElement(a.Z,null,(()=>{const{default:t}=n(51366);return l.createElement(t,r({},e))}))}function c({src:e,collapseDepth:t}){return l.createElement(u,{src:e,style:{marginTop:"10px",padding:"10px",borderRadius:"4px",backgroundColor:"#292a2b"},name:null,theme:"paraiso",shouldCollapse:e=>null!==e.name&&Object.keys(e.src).length>50,collapsed:t,groupArraysAfterLength:5,enableClipboard:!1,displayDataTypes:!1})}},93127:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(27378),a=n(97134),r=n(13415);const u="container_tECh",c="nav_sWk6",o="navlink__gTJ";function s({to:e,children:t}){return l.createElement(r.Z,{className:o,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},t)}function i({children:e}){return l.createElement(l.Fragment,null,l.createElement(a.Z,null,l.createElement("html",{lang:"en"}),l.createElement("title",null,"Docusaurus debug panel"),l.createElement("meta",{name:"robots",content:"noindex"})),l.createElement("div",null,l.createElement("nav",{className:c},l.createElement(s,{to:"/__docusaurus/debug"},"Config"),l.createElement(s,{to:"/__docusaurus/debug/metadata"},"Metadata"),l.createElement(s,{to:"/__docusaurus/debug/registry"},"Registry"),l.createElement(s,{to:"/__docusaurus/debug/routes"},"Routes"),l.createElement(s,{to:"/__docusaurus/debug/content"},"Content"),l.createElement(s,{to:"/__docusaurus/debug/globalData"},"Global data")),l.createElement("main",{className:u},e)))}},94544:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(27378),a=n(29088);function r({children:e,fallback:t}){return(0,a.Z)()?l.createElement(l.Fragment,null,null==e?void 0:e()):null!=t?t:null}}}]);