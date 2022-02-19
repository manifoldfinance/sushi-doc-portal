"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[1680],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),m=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(r),c=n,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return r?a.createElement(k,l(l({ref:e},p),{},{components:r})):a.createElement(k,l({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59315:(t,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,toc:()=>d,default:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3},l="Limit order structure",o={unversionedId:"limit-order-protocol/guide/limit-order-structure",id:"limit-order-protocol/guide/limit-order-structure",isDocsHomePage:!1,title:"Limit order structure",description:"| Field            | Type     | Description                                                                                                                        |",source:"@site/docs/limit-order-protocol/guide/limit-order-structure.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/limit-order-structure",permalink:"/docs/limit-order-protocol/guide/limit-order-structure",editUrl:"https://github.com/manifoldfinance/sushi-docs/edit/master/docs/limit-order-protocol/guide/limit-order-structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a limit order",permalink:"/docs/limit-order-protocol/guide/create-limit-order"},next:{title:"Fill a limit order",permalink:"/docs/limit-order-protocol/guide/fill-limit-order"}},d=[],m={toc:d};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"limit-order-structure"},"Limit order structure"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"salt")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"some unique value. It is necessary to be able to create limit orders with the same parameters (so that they have a different hash)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"makerAsset")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"the address of the asset you want to sell (address of a token contract)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"takerAsset")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"the address of the asset you want to buy (address of a token contract)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"maker")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"the address of the limit order creator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"receiver")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"by default contains a zero address, which means that taker asset will be sent to the address of the creator of the limit order. If you set a value, then taker asset will be sent to the specified address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"allowedSender")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"by default contains a zero address, which means that a limit order is available for everyone to fill. If you set a value, then the limit order will be available for execution only for the specified address (private limit order)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"amount of maker asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"amount of taker asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"makerAssetData")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"the technical info about a maker asset and its amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"takerAssetData")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"the technical info about a taker asset and its amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"getMakerAmount")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"technical information to get the amount of the maker asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"getTakerAmount")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"technical information to get the amount of the taker asset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"predicate")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"a predicate call data. See more ",(0,n.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/predicate"},"Predicate docs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"permit")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"a permit (",(0,n.kt)("inlineCode",{parentName:"td"},"EIP-2612"),") call data. Could be built using ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/1inch/permit-signed-approvals-utils"},"utility library"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"interaction")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"a call data for InteractiveNotificationReceiver. See more ",(0,n.kt)("a",{parentName:"td",href:"/docs/limit-order-protocol/guide/interactive-receiver"},"Interaction receiver docs"))))))}p.isMDXComponent=!0}}]);