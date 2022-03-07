"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[4753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var d=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,d)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,d,a=function(e,t){if(null==e)return{};var r,d,a={},n=Object.keys(e);for(d=0;d<n.length;d++)r=n[d],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)r=n[d],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=d.createContext({}),c=function(e){var t=d.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return d.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},p=d.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,w=p["".concat(i,".").concat(b)]||p[b]||u[b]||n;return r?d.createElement(w,o(o({ref:t},l),{},{components:r})):d.createElement(w,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return d.createElement.apply(null,o)}return d.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var d=r(7462),a=(r(7294),r(3905));const n={},o=void 0,s={unversionedId:"bentobox/mocks/WETH9Mock",id:"bentobox/mocks/WETH9Mock",title:"WETH9Mock",description:"WETH9Mock",source:"@site/docs/bentobox/mocks/WETH9Mock.md",sourceDirName:"bentobox/mocks",slug:"/bentobox/mocks/WETH9Mock",permalink:"/docs/bentobox/mocks/WETH9Mock",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/mocks/WETH9Mock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SushiSwapPairMock",permalink:"/docs/bentobox/mocks/SushiSwapPairMock"},next:{title:"IMigrator",permalink:"/docs/bentobox/uniswapv2/IMigrator"}},i={},c=[{value:"<code>WETH9Mock</code>",id:"weth9mock",level:2},{value:"<code>deposit()</code> (public)",id:"deposit-public",level:3},{value:"<code>withdraw(uint256 wad)</code> (public)",id:"withdrawuint256-wad-public",level:3},{value:"<code>totalSupply() \u2192 uint256</code> (public)",id:"totalsupply--uint256-public",level:3},{value:"<code>approve(address guy, uint256 wad) \u2192 bool</code> (public)",id:"approveaddress-guy-uint256-wad--bool-public",level:3},{value:"<code>transfer(address dst, uint256 wad) \u2192 bool</code> (public)",id:"transferaddress-dst-uint256-wad--bool-public",level:3},{value:"<code>transferFrom(address src, address dst, uint256 wad) \u2192 bool</code> (public)",id:"transferfromaddress-src-address-dst-uint256-wad--bool-public",level:3},{value:"<code>Approval(address src, address guy, uint256 wad)</code>",id:"approvaladdress-src-address-guy-uint256-wad",level:3},{value:"<code>Transfer(address src, address dst, uint256 wad)</code>",id:"transferaddress-src-address-dst-uint256-wad",level:3},{value:"<code>Deposit(address dst, uint256 wad)</code>",id:"depositaddress-dst-uint256-wad",level:3},{value:"<code>Withdrawal(address src, uint256 wad)</code>",id:"withdrawaladdress-src-uint256-wad",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,d.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"weth9mock"},(0,a.kt)("inlineCode",{parentName:"h2"},"WETH9Mock")),(0,a.kt)("h3",{id:"deposit-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"deposit()")," (public)"),(0,a.kt)("h3",{id:"withdrawuint256-wad-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"withdraw(uint256 wad)")," (public)"),(0,a.kt)("h3",{id:"totalsupply--uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"totalSupply() \u2192 uint256")," (public)"),(0,a.kt)("h3",{id:"approveaddress-guy-uint256-wad--bool-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"approve(address guy, uint256 wad) \u2192 bool")," (public)"),(0,a.kt)("h3",{id:"transferaddress-dst-uint256-wad--bool-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"transfer(address dst, uint256 wad) \u2192 bool")," (public)"),(0,a.kt)("h3",{id:"transferfromaddress-src-address-dst-uint256-wad--bool-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"transferFrom(address src, address dst, uint256 wad) \u2192 bool")," (public)"),(0,a.kt)("h3",{id:"approvaladdress-src-address-guy-uint256-wad"},(0,a.kt)("inlineCode",{parentName:"h3"},"Approval(address src, address guy, uint256 wad)")),(0,a.kt)("h3",{id:"transferaddress-src-address-dst-uint256-wad"},(0,a.kt)("inlineCode",{parentName:"h3"},"Transfer(address src, address dst, uint256 wad)")),(0,a.kt)("h3",{id:"depositaddress-dst-uint256-wad"},(0,a.kt)("inlineCode",{parentName:"h3"},"Deposit(address dst, uint256 wad)")),(0,a.kt)("h3",{id:"withdrawaladdress-src-uint256-wad"},(0,a.kt)("inlineCode",{parentName:"h3"},"Withdrawal(address src, uint256 wad)")))}u.isMDXComponent=!0}}]);