"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[1020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),b=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>b});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"bentobox/bentobox/PeggedOracleV1",id:"bentobox/bentobox/PeggedOracleV1",title:"PeggedOracleV1",description:"PeggedOracleV1",source:"@site/docs/bentobox/bentobox/PeggedOracleV1.md",sourceDirName:"bentobox/bentobox",slug:"/bentobox/bentobox/PeggedOracleV1",permalink:"/docs/bentobox/bentobox/PeggedOracleV1",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/bentobox/PeggedOracleV1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MasterContractManager",permalink:"/docs/bentobox/bentobox/MasterContractManager"},next:{title:"RebaseLibrary",permalink:"/docs/bentobox/bentobox/RebaseLibrary"}},c={},b=[{value:"<code>PeggedOracleV1</code>",id:"peggedoraclev1",level:2},{value:"<code>getDataParameter(uint256 rate) \u2192 bytes</code> (public)",id:"getdataparameteruint256-rate--bytes-public",level:3},{value:"<code>get(bytes data) \u2192 bool, uint256</code> (public)",id:"getbytes-data--bool-uint256-public",level:3},{value:"<code>peek(bytes data) \u2192 bool, uint256</code> (public)",id:"peekbytes-data--bool-uint256-public",level:3},{value:"<code>peekSpot(bytes data) \u2192 uint256 rate</code> (external)",id:"peekspotbytes-data--uint256-rate-external",level:3},{value:"<code>name(bytes) \u2192 string</code> (public)",id:"namebytes--string-public",level:3},{value:"<code>symbol(bytes) \u2192 string</code> (public)",id:"symbolbytes--string-public",level:3}],s={toc:b};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"peggedoraclev1"},(0,a.kt)("inlineCode",{parentName:"h2"},"PeggedOracleV1")),(0,a.kt)("p",null,"Oracle used for pegged prices that don't change @dev"),(0,a.kt)("h3",{id:"getdataparameteruint256-rate--bytes-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"getDataParameter(uint256 rate) \u2192 bytes")," (public)"),(0,a.kt)("p",null,"@notice @dev"),(0,a.kt)("h3",{id:"getbytes-data--bool-uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"get(bytes data) \u2192 bool, uint256")," (public)"),(0,a.kt)("p",null,"Get the latest exchange rate."),(0,a.kt)("h3",{id:"peekbytes-data--bool-uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"peek(bytes data) \u2192 bool, uint256")," (public)"),(0,a.kt)("p",null,"Check the last exchange rate without any state changes."),(0,a.kt)("h3",{id:"peekspotbytes-data--uint256-rate-external"},(0,a.kt)("inlineCode",{parentName:"h3"},"peekSpot(bytes data) \u2192 uint256 rate")," (external)"),(0,a.kt)("p",null,"Check the current spot exchange rate without any state changes. For oracles like\nTWAP this will be different from peek()."),(0,a.kt)("h3",{id:"namebytes--string-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"name(bytes) \u2192 string")," (public)"),(0,a.kt)("p",null,"Returns a human readable name about this oracle."),(0,a.kt)("h3",{id:"symbolbytes--string-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"symbol(bytes) \u2192 string")," (public)"),(0,a.kt)("p",null,"Returns a human readable (short) name about this oracle."))}u.isMDXComponent=!0}}]);