"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[8607],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=o(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5437:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i="SushiRoll",u={unversionedId:"onsen/SushiRoll",id:"onsen/SushiRoll",title:"SushiRoll",description:"Methods",source:"@site/docs/onsen/SushiRoll.md",sourceDirName:"onsen",slug:"/onsen/SushiRoll",permalink:"/docs/onsen/SushiRoll",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/onsen/SushiRoll.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1646890121,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"SushiMakerKashi",permalink:"/docs/onsen/SushiMakerKashi"},next:{title:"SushiToken",permalink:"/docs/onsen/SushiToken"}},d={},o=[{value:"Methods",id:"methods",level:2},{value:"migrate",id:"migrate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"migrateWithPermit",id:"migratewithpermit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"oldRouter",id:"oldrouter",level:3},{value:"Returns",id:"returns",level:4},{value:"router",id:"router",level:3},{value:"Returns",id:"returns-1",level:4}],p={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sushiroll"},"SushiRoll"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"migrate"},"migrate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function migrate(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline) external nonpayable\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenA"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenB"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liquidity"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountAMin"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountBMin"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"migratewithpermit"},"migrateWithPermit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function migrateWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenA"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenB"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liquidity"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountAMin"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountBMin"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v"),(0,r.kt)("td",{parentName:"tr",align:null},"uint8"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"r"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"oldrouter"},"oldRouter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function oldRouter() external view returns (contract IUniswapV2Router01)\n")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IUniswapV2Router01"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"router"},"router"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function router() external view returns (contract IUniswapV2Router01)\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IUniswapV2Router01"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))))}m.isMDXComponent=!0}}]);