"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[9506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62677:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>c,toc:()=>l,default:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Permitable",c={unversionedId:"aggregation-protocol/smart-contract/helpers/Permitable",id:"aggregation-protocol/smart-contract/helpers/Permitable",isDocsHomePage:!1,title:"Permitable",description:"Base contract with common permit handling logics",source:"@site/docs/aggregation-protocol/smart-contract/helpers/Permitable.md",sourceDirName:"aggregation-protocol/smart-contract/helpers",slug:"/aggregation-protocol/smart-contract/helpers/Permitable",permalink:"/docs/aggregation-protocol/smart-contract/helpers/Permitable",editUrl:"https://github.com/manifoldfinance/sushi-docs/edit/master/docs/aggregation-protocol/smart-contract/helpers/Permitable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EthReceiver",permalink:"/docs/aggregation-protocol/smart-contract/helpers/EthReceiver"},next:{title:"IUniswapV3SwapCallback",permalink:"/docs/aggregation-protocol/smart-contract/interfaces/IUniswapV3SwapCallback"}},l=[{value:"Functions",id:"functions",children:[{value:"_permit",id:"_permit",children:[]}]}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permitable"},"Permitable"),(0,a.kt)("p",null,"Base contract with common permit handling logics"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"_permit"},"_permit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function _permit(\n  address token,\n  bytes permit\n) internal\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"permit")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);