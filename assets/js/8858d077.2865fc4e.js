"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[5470],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Migrator",o={unversionedId:"onsen/Migrator",id:"onsen/Migrator",title:"Migrator",description:"Methods",source:"@site/docs/onsen/Migrator.md",sourceDirName:"onsen",slug:"/onsen/Migrator",permalink:"/docs/onsen/Migrator",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/onsen/Migrator.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1646890121,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"MasterChefV2",permalink:"/docs/onsen/MasterChefV2"},next:{title:"MiniChefV2",permalink:"/docs/onsen/MiniChefV2"}},u={},d=[{value:"Methods",id:"methods",level:2},{value:"chef",id:"chef",level:3},{value:"Returns",id:"returns",level:4},{value:"desiredLiquidity",id:"desiredliquidity",level:3},{value:"Returns",id:"returns-1",level:4},{value:"factory",id:"factory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"migrate",id:"migrate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"notBeforeBlock",id:"notbeforeblock",level:3},{value:"Returns",id:"returns-4",level:4},{value:"oldFactory",id:"oldfactory",level:3},{value:"Returns",id:"returns-5",level:4}],p={toc:d};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrator"},"Migrator"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"chef"},"chef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function chef() external view returns (address)\n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"desiredliquidity"},"desiredLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function desiredLiquidity() external view returns (uint256)\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"factory"},"factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function factory() external view returns (contract IUniswapV2Factory)\n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IUniswapV2Factory"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"migrate"},"migrate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function migrate(contract IUniswapV2Pair orig) external nonpayable returns (contract IUniswapV2Pair)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orig"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IUniswapV2Pair"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IUniswapV2Pair"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"notbeforeblock"},"notBeforeBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function notBeforeBlock() external view returns (uint256)\n")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"oldfactory"},"oldFactory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function oldFactory() external view returns (address)\n")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))))}s.isMDXComponent=!0}}]);