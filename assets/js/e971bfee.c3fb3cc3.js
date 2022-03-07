"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[8821],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>p});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=i.createContext({}),s=function(t){var e=i.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return i.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),c=s(n),p=r,b=c["".concat(d,".").concat(p)]||c[p]||m[p]||a;return n?i.createElement(b,o(o({ref:e},l),{},{components:n})):i.createElement(b,o({ref:e},l))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=c;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6624:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,u={unversionedId:"bentobox/SushiRoll",id:"bentobox/SushiRoll",title:"SushiRoll",description:"SushiRoll",source:"@site/docs/bentobox/SushiRoll.md",sourceDirName:"bentobox",slug:"/bentobox/SushiRoll",permalink:"/docs/bentobox/SushiRoll",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/SushiRoll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SushiMakerKashi",permalink:"/docs/bentobox/SushiMakerKashi"},next:{title:"SushiToken",permalink:"/docs/bentobox/SushiToken"}},d={},s=[{value:"<code>SushiRoll</code>",id:"sushiroll",level:2},{value:"<code>constructor(contract IUniswapV2Router01 _oldRouter, contract IUniswapV2Router01 _router)</code> (public)",id:"constructorcontract-iuniswapv2router01-_oldrouter-contract-iuniswapv2router01-_router-public",level:3},{value:"<code>migrateWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline, uint8 v, bytes32 r, bytes32 s)</code> (public)",id:"migratewithpermitaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline-uint8-v-bytes32-r-bytes32-s-public",level:3},{value:"<code>migrate(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline)</code> (public)",id:"migrateaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline-public",level:3},{value:"<code>removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline) \u2192 uint256 amountA, uint256 amountB</code> (internal)",id:"removeliquidityaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline--uint256-amounta-uint256-amountb-internal",level:3},{value:"<code>pairForOldRouter(address tokenA, address tokenB) \u2192 address pair</code> (internal)",id:"pairforoldrouteraddress-tokena-address-tokenb--address-pair-internal",level:3},{value:"<code>addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired) \u2192 uint256 amountA, uint256 amountB</code> (internal)",id:"addliquidityaddress-tokena-address-tokenb-uint256-amountadesired-uint256-amountbdesired--uint256-amounta-uint256-amountb-internal",level:3},{value:"<code>_addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired) \u2192 uint256 amountA, uint256 amountB</code> (internal)",id:"_addliquidityaddress-tokena-address-tokenb-uint256-amountadesired-uint256-amountbdesired--uint256-amounta-uint256-amountb-internal",level:3}],l={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sushiroll"},(0,r.kt)("inlineCode",{parentName:"h2"},"SushiRoll")),(0,r.kt)("h3",{id:"constructorcontract-iuniswapv2router01-_oldrouter-contract-iuniswapv2router01-_router-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"constructor(contract IUniswapV2Router01 _oldRouter, contract IUniswapV2Router01 _router)")," (public)"),(0,r.kt)("h3",{id:"migratewithpermitaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline-uint8-v-bytes32-r-bytes32-s-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"migrateWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline, uint8 v, bytes32 r, bytes32 s)")," (public)"),(0,r.kt)("h3",{id:"migrateaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"migrate(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline)")," (public)"),(0,r.kt)("h3",{id:"removeliquidityaddress-tokena-address-tokenb-uint256-liquidity-uint256-amountamin-uint256-amountbmin-uint256-deadline--uint256-amounta-uint256-amountb-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline) \u2192 uint256 amountA, uint256 amountB")," (internal)"),(0,r.kt)("h3",{id:"pairforoldrouteraddress-tokena-address-tokenb--address-pair-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"pairForOldRouter(address tokenA, address tokenB) \u2192 address pair")," (internal)"),(0,r.kt)("h3",{id:"addliquidityaddress-tokena-address-tokenb-uint256-amountadesired-uint256-amountbdesired--uint256-amounta-uint256-amountb-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired) \u2192 uint256 amountA, uint256 amountB")," (internal)"),(0,r.kt)("h3",{id:"_addliquidityaddress-tokena-address-tokenb-uint256-amountadesired-uint256-amountbdesired--uint256-amounta-uint256-amountb-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"_addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired) \u2192 uint256 amountA, uint256 amountB")," (internal)"))}m.isMDXComponent=!0}}]);