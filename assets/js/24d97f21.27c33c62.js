"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[6354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=n,b=h["".concat(d,".").concat(p)]||h[p]||u[p]||o;return r?a.createElement(b,i(i({ref:t},l),{},{components:r})):a.createElement(b,i({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"bentobox/SushiMakerKashi",id:"bentobox/SushiMakerKashi",title:"SushiMakerKashi",description:"SushiMakerKashi",source:"@site/docs/bentobox/SushiMakerKashi.md",sourceDirName:"bentobox",slug:"/bentobox/SushiMakerKashi",permalink:"/docs/bentobox/SushiMakerKashi",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/SushiMakerKashi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SushiMaker",permalink:"/docs/bentobox/SushiMaker"},next:{title:"SushiRoll",permalink:"/docs/bentobox/SushiRoll"}},d={},c=[{value:"<code>SushiMakerKashi</code>",id:"sushimakerkashi",level:2},{value:"<code>onlyEOA()</code>",id:"onlyeoa",level:3},{value:"<code>constructor(contract IUniswapV2Factory _factory, address _bar, contract IBentoBoxWithdraw _bentoBox, address _sushi, address _weth, bytes32 _pairCodeHash)</code> (public)",id:"constructorcontract-iuniswapv2factory-_factory-address-_bar-contract-ibentoboxwithdraw-_bentobox-address-_sushi-address-_weth-bytes32-_paircodehash-public",level:3},{value:"<code>setBridge(address token, address bridge)</code> (external)",id:"setbridgeaddress-token-address-bridge-external",level:3},{value:"<code>convert(contract IKashiWithdrawFee kashiPair)</code> (external)",id:"convertcontract-ikashiwithdrawfee-kashipair-external",level:3},{value:"<code>convertMultiple(contract IKashiWithdrawFee[] kashiPair)</code> (external)",id:"convertmultiplecontract-ikashiwithdrawfee-kashipair-external",level:3},{value:"<code>LogBridgeSet(address token, address bridge)</code>",id:"logbridgesetaddress-token-address-bridge",level:3},{value:"<code>LogConvert(address server, address token0, uint256 amount0, uint256 amountBENTO, uint256 amountSUSHI)</code>",id:"logconvertaddress-server-address-token0-uint256-amount0-uint256-amountbento-uint256-amountsushi",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sushimakerkashi"},(0,n.kt)("inlineCode",{parentName:"h2"},"SushiMakerKashi")),(0,n.kt)("h3",{id:"onlyeoa"},(0,n.kt)("inlineCode",{parentName:"h3"},"onlyEOA()")),(0,n.kt)("h3",{id:"constructorcontract-iuniswapv2factory-_factory-address-_bar-contract-ibentoboxwithdraw-_bentobox-address-_sushi-address-_weth-bytes32-_paircodehash-public"},(0,n.kt)("inlineCode",{parentName:"h3"},"constructor(contract IUniswapV2Factory _factory, address _bar, contract IBentoBoxWithdraw _bentoBox, address _sushi, address _weth, bytes32 _pairCodeHash)")," (public)"),(0,n.kt)("h3",{id:"setbridgeaddress-token-address-bridge-external"},(0,n.kt)("inlineCode",{parentName:"h3"},"setBridge(address token, address bridge)")," (external)"),(0,n.kt)("h3",{id:"convertcontract-ikashiwithdrawfee-kashipair-external"},(0,n.kt)("inlineCode",{parentName:"h3"},"convert(contract IKashiWithdrawFee kashiPair)")," (external)"),(0,n.kt)("h3",{id:"convertmultiplecontract-ikashiwithdrawfee-kashipair-external"},(0,n.kt)("inlineCode",{parentName:"h3"},"convertMultiple(contract IKashiWithdrawFee[] kashiPair)")," (external)"),(0,n.kt)("h3",{id:"logbridgesetaddress-token-address-bridge"},(0,n.kt)("inlineCode",{parentName:"h3"},"LogBridgeSet(address token, address bridge)")),(0,n.kt)("h3",{id:"logconvertaddress-server-address-token0-uint256-amount0-uint256-amountbento-uint256-amountsushi"},(0,n.kt)("inlineCode",{parentName:"h3"},"LogConvert(address server, address token0, uint256 amount0, uint256 amountBENTO, uint256 amountSUSHI)")))}u.isMDXComponent=!0}}]);