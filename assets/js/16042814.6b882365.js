"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[346],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,d={unversionedId:"bentobox/mocks/CloneRewarderTime",id:"bentobox/mocks/CloneRewarderTime",title:"CloneRewarderTime",description:"CloneRewarderTime",source:"@site/docs/bentobox/mocks/CloneRewarderTime.md",sourceDirName:"bentobox/mocks",slug:"/bentobox/mocks/CloneRewarderTime",permalink:"/docs/bentobox/mocks/CloneRewarderTime",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/mocks/CloneRewarderTime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SignedSafeMath",permalink:"/docs/bentobox/libraries/SignedSafeMath"},next:{title:"CloneRewarderTimeDual",permalink:"/docs/bentobox/mocks/CloneRewarderTimeDual"}},l={},u=[{value:"<code>CloneRewarderTime</code>",id:"clonerewardertime",level:2},{value:"<code>lock()</code>",id:"lock",level:3},{value:"<code>onlyMCV2()</code>",id:"onlymcv2",level:3},{value:"<code>constructor(address _MASTERCHEF_V2)</code> (public)",id:"constructoraddress-_masterchef_v2-public",level:3},{value:"<code>init(bytes data)</code> (public)",id:"initbytes-data-public",level:3},{value:"<code>onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpTokenAmount)</code> (external)",id:"onsushirewarduint256-pid-address-_user-address-to-uint256-uint256-lptokenamount-external",level:3},{value:"<code>pendingTokens(uint256 pid, address user, uint256) \u2192 contract IERC20[] rewardTokens, uint256[] rewardAmounts</code> (external)",id:"pendingtokensuint256-pid-address-user-uint256--contract-ierc20-rewardtokens-uint256-rewardamounts-external",level:3},{value:"<code>rewardRates() \u2192 uint256[]</code> (external)",id:"rewardrates--uint256-external",level:3},{value:"<code>setRewardPerSecond(uint256 _rewardPerSecond)</code> (public)",id:"setrewardperseconduint256-_rewardpersecond-public",level:3},{value:"<code>reclaimTokens(address token, uint256 amount, address payable to)</code> (public)",id:"reclaimtokensaddress-token-uint256-amount-address-payable-to-public",level:3},{value:"<code>pendingToken(uint256 _pid, address _user) \u2192 uint256 pending</code> (public)",id:"pendingtokenuint256-_pid-address-_user--uint256-pending-public",level:3},{value:"<code>updatePool(uint256 pid) \u2192 struct CloneRewarderTime.PoolInfo pool</code> (public)",id:"updatepooluint256-pid--struct-clonerewardertimepoolinfo-pool-public",level:3},{value:"<code>LogOnReward(address user, uint256 pid, uint256 amount, address to)</code>",id:"logonrewardaddress-user-uint256-pid-uint256-amount-address-to",level:3},{value:"<code>LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accToken1PerShare)</code>",id:"logupdatepooluint256-pid-uint64-lastrewardtime-uint256-lpsupply-uint256-acctoken1pershare",level:3},{value:"<code>LogRewardPerSecond(uint256 rewardPerSecond)</code>",id:"logrewardperseconduint256-rewardpersecond",level:3},{value:"<code>LogInit(contract IERC20 rewardToken, address owner, uint256 rewardPerSecond, contract IERC20 masterLpToken)</code>",id:"loginitcontract-ierc20-rewardtoken-address-owner-uint256-rewardpersecond-contract-ierc20-masterlptoken",level:3},{value:"<code>UserInfo</code>",id:"userinfo",level:3},{value:"<code>PoolInfo</code>",id:"poolinfo",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"clonerewardertime"},(0,o.kt)("inlineCode",{parentName:"h2"},"CloneRewarderTime")),(0,o.kt)("h3",{id:"lock"},(0,o.kt)("inlineCode",{parentName:"h3"},"lock()")),(0,o.kt)("h3",{id:"onlymcv2"},(0,o.kt)("inlineCode",{parentName:"h3"},"onlyMCV2()")),(0,o.kt)("h3",{id:"constructoraddress-_masterchef_v2-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"constructor(address _MASTERCHEF_V2)")," (public)"),(0,o.kt)("h3",{id:"initbytes-data-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(bytes data)")," (public)"),(0,o.kt)("p",null,"Serves as the constructor for clones, as clones can't have a regular constructor"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," is abi encoded in the format: (IERC20 collateral, IERC20 asset, IOracle\noracle, bytes oracleData)"),(0,o.kt)("h3",{id:"onsushirewarduint256-pid-address-_user-address-to-uint256-uint256-lptokenamount-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpTokenAmount)")," (external)"),(0,o.kt)("h3",{id:"pendingtokensuint256-pid-address-user-uint256--contract-ierc20-rewardtokens-uint256-rewardamounts-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"pendingTokens(uint256 pid, address user, uint256) \u2192 contract IERC20[] rewardTokens, uint256[] rewardAmounts")," (external)"),(0,o.kt)("h3",{id:"rewardrates--uint256-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"rewardRates() \u2192 uint256[]")," (external)"),(0,o.kt)("h3",{id:"setrewardperseconduint256-_rewardpersecond-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"setRewardPerSecond(uint256 _rewardPerSecond)")," (public)"),(0,o.kt)("p",null,"Sets the sushi per second to be distributed. Can only be called by the owner."),(0,o.kt)("h3",{id:"reclaimtokensaddress-token-uint256-amount-address-payable-to-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"reclaimTokens(address token, uint256 amount, address payable to)")," (public)"),(0,o.kt)("p",null,"Allows owner to reclaim/withdraw any tokens (including reward tokens) held by\nthis contract"),(0,o.kt)("h3",{id:"pendingtokenuint256-_pid-address-_user--uint256-pending-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"pendingToken(uint256 _pid, address _user) \u2192 uint256 pending")," (public)"),(0,o.kt)("p",null,"View function to see pending Token"),(0,o.kt)("h3",{id:"updatepooluint256-pid--struct-clonerewardertimepoolinfo-pool-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"updatePool(uint256 pid) \u2192 struct CloneRewarderTime.PoolInfo pool")," (public)"),(0,o.kt)("p",null,"Update reward variables of the given pool."),(0,o.kt)("h3",{id:"logonrewardaddress-user-uint256-pid-uint256-amount-address-to"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogOnReward(address user, uint256 pid, uint256 amount, address to)")),(0,o.kt)("h3",{id:"logupdatepooluint256-pid-uint64-lastrewardtime-uint256-lpsupply-uint256-acctoken1pershare"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accToken1PerShare)")),(0,o.kt)("h3",{id:"logrewardperseconduint256-rewardpersecond"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogRewardPerSecond(uint256 rewardPerSecond)")),(0,o.kt)("h3",{id:"loginitcontract-ierc20-rewardtoken-address-owner-uint256-rewardpersecond-contract-ierc20-masterlptoken"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogInit(contract IERC20 rewardToken, address owner, uint256 rewardPerSecond, contract IERC20 masterLpToken)")),(0,o.kt)("h3",{id:"userinfo"},(0,o.kt)("inlineCode",{parentName:"h3"},"UserInfo")),(0,o.kt)("p",null,"uint256 amount"),(0,o.kt)("p",null,"uint256 rewardDebt"),(0,o.kt)("p",null,"uint256 unpaidRewards"),(0,o.kt)("h3",{id:"poolinfo"},(0,o.kt)("inlineCode",{parentName:"h3"},"PoolInfo")),(0,o.kt)("p",null,"uint128 accToken1PerShare"),(0,o.kt)("p",null,"uint64 lastRewardTime"))}c.isMDXComponent=!0}}]);