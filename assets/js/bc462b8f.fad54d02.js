"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[7259],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5589:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="CompoundStrategy",d={unversionedId:"bentobox/strategies/CompoundStrategy",id:"bentobox/strategies/CompoundStrategy",title:"CompoundStrategy",description:"Methods",source:"@site/docs/bentobox/strategies/CompoundStrategy.md",sourceDirName:"bentobox/strategies",slug:"/bentobox/strategies/CompoundStrategy",permalink:"/docs/bentobox/strategies/CompoundStrategy",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/strategies/CompoundStrategy.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1646890121,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"ISushiBar",permalink:"/docs/bentobox/interfaces/ISushiBar"},next:{title:"IFactory",permalink:"/docs/bentobox/strategies/IFactory"}},p={},u=[{value:"Methods",id:"methods",level:2},{value:"afterExit",id:"afterexit",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"bentobox",id:"bentobox",level:3},{value:"Returns",id:"returns-1",level:4},{value:"cToken",id:"ctoken",level:3},{value:"Returns",id:"returns-2",level:4},{value:"claimOwnership",id:"claimownership",level:3},{value:"compToken",id:"comptoken",level:3},{value:"Returns",id:"returns-3",level:4},{value:"exit",id:"exit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"exited",id:"exited",level:3},{value:"Returns",id:"returns-5",level:4},{value:"factory",id:"factory",level:3},{value:"Returns",id:"returns-6",level:4},{value:"harvest",id:"harvest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-7",level:4},{value:"harvestCOMP",id:"harvestcomp",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"owner",id:"owner",level:3},{value:"Returns",id:"returns-8",level:4},{value:"pendingOwner",id:"pendingowner",level:3},{value:"Returns",id:"returns-9",level:4},{value:"skim",id:"skim",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"token",id:"token",level:3},{value:"Returns",id:"returns-10",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"weth",id:"weth",level:3},{value:"Returns",id:"returns-11",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Events",id:"events",level:2},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Parameters",id:"parameters-7",level:4}],o={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compoundstrategy"},"CompoundStrategy"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"afterexit"},"afterExit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function afterExit(address to, uint256 value, bytes data) external nonpayable returns (bool success)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"bentobox"},"bentobox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function bentobox() external view returns (address)\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"ctoken"},"cToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function cToken() external view returns (contract IcToken)\n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IcToken"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"claimownership"},"claimOwnership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimOwnership() external nonpayable\n")),(0,r.kt)("p",null,"Needs to be called by ",(0,r.kt)("inlineCode",{parentName:"p"},"pendingOwner")," to claim ownership."),(0,r.kt)("h3",{id:"comptoken"},"compToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function compToken() external view returns (contract IERC20)\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IERC20"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"exit"},"exit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function exit(uint256 balance) external nonpayable returns (int256 amountAdded)\n")),(0,r.kt)("p",null,"Withdraw all assets in the safest way possible. This shouldn","'","t fail."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of tokens the caller thinks it has invested.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountAdded"),(0,r.kt)("td",{parentName:"tr",align:null},"int256"),(0,r.kt)("td",{parentName:"tr",align:null},"The delta (+profit or -loss) that occured in contrast to ",(0,r.kt)("inlineCode",{parentName:"td"},"balance"),".")))),(0,r.kt)("h3",{id:"exited"},"exited"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function exited() external view returns (bool)\n")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"factory"},"factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function factory() external view returns (contract IFactory)\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IFactory"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"harvest"},"harvest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function harvest(uint256 balance, address sender) external nonpayable returns (int256 amountAdded)\n")),(0,r.kt)("p",null,"Harvest any profits made converted to the asset and pass them to the caller."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of tokens the caller thinks it has invested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the initiator of this transaction. Can be used for reimbursements, etc.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amountAdded"),(0,r.kt)("td",{parentName:"tr",align:null},"int256"),(0,r.kt)("td",{parentName:"tr",align:null},"The delta (+profit or -loss) that occured in contrast to ",(0,r.kt)("inlineCode",{parentName:"td"},"balance"),".")))),(0,r.kt)("h3",{id:"harvestcomp"},"harvestCOMP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function harvestCOMP(uint256 minAmount) external nonpayable\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"owner"},"owner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() external view returns (address)\n")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"pendingowner"},"pendingOwner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function pendingOwner() external view returns (address)\n")),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"skim"},"skim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function skim(uint256 amount) external nonpayable\n")),(0,r.kt)("p",null,"Send the assets to the Strategy and call skim to invest them."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of tokens to invest.")))),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function token() external view returns (contract IERC20)\n")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IERC20"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable\n")),(0,r.kt)("p",null,"Transfers ownership to ",(0,r.kt)("inlineCode",{parentName:"p"},"newOwner"),". Either directly or claimable by the new\npending owner. Can only be invoked by the current ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),"."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newOwner"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the new owner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direct"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True if ",(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")," should be set immediately. False if ",(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")," needs to use ",(0,r.kt)("inlineCode",{parentName:"td"},"claimOwnership"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renounce"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the ",(0,r.kt)("inlineCode",{parentName:"td"},"newOwner")," to be ",(0,r.kt)("inlineCode",{parentName:"td"},"address(0)")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"direct")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"renounce")," is True. Has no effect otherwise.")))),(0,r.kt)("h3",{id:"weth"},"weth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function weth() external view returns (contract IERC20)\n")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","0"),(0,r.kt)("td",{parentName:"tr",align:null},"contract IERC20"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))),(0,r.kt)("h3",{id:"withdraw"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(uint256 amount) external nonpayable returns (uint256 actualAmount)\n")),(0,r.kt)("p",null,"Withdraw assets. The returned amount can differ from the requested amount due to\nrounding."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"actualAmount")," should be very close to the amount. The difference should\nNOT be used to report a loss. That","'","s what harvest is for.")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The requested amount the caller wants to withdraw.")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actualAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The real amount that is withdrawn.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)\n")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previousOwner ",(0,r.kt)("inlineCode",{parentName:"td"},"indexed")),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newOwner ",(0,r.kt)("inlineCode",{parentName:"td"},"indexed")),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined")))))}m.isMDXComponent=!0}}]);