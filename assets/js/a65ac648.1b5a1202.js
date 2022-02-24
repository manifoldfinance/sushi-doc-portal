"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[8672],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(t),m=i,h=s["".concat(l,".").concat(m)]||s[m]||p[m]||r;return t?o.createElement(h,d(d({ref:n},c),{},{components:t})):o.createElement(h,d({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,d=new Array(r);d[0]=s;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,d[1]=a;for(var u=2;u<r;u++)d[u]=t[u];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2181:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>d,metadata:()=>a,toc:()=>l,default:()=>c});var o=t(7462),i=(t(7294),t(3905));const r={},d=void 0,a={unversionedId:"bentobox/mocks/ComplexRewarderTime",id:"bentobox/mocks/ComplexRewarderTime",isDocsHomePage:!1,title:"ComplexRewarderTime",description:"ComplexRewarderTime",source:"@site/docs/bentobox/mocks/ComplexRewarderTime.md",sourceDirName:"bentobox/mocks",slug:"/bentobox/mocks/ComplexRewarderTime",permalink:"/docs/bentobox/mocks/ComplexRewarderTime",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/mocks/ComplexRewarderTime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComplexRewarder",permalink:"/docs/bentobox/mocks/ComplexRewarder"},next:{title:"ERC20Mock",permalink:"/docs/bentobox/mocks/ERC20Mock"}},l=[{value:"<code>ComplexRewarderTime</code>",id:"complexrewardertime",children:[{value:"<code>lock()</code>",id:"lock",children:[]},{value:"<code>onlyMCV2()</code>",id:"onlymcv2",children:[]},{value:"<code>constructor(contract IERC20 _rewardToken, uint256 _rewardPerSecond, address _MASTERCHEF_V2)</code> (public)",id:"constructorcontract-ierc20-_rewardtoken-uint256-_rewardpersecond-address-_masterchef_v2-public",children:[]},{value:"<code>onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpToken)</code> (external)",id:"onsushirewarduint256-pid-address-_user-address-to-uint256-uint256-lptoken-external",children:[]},{value:"<code>pendingTokens(uint256 pid, address user, uint256) \u2192 contract IERC20[] rewardTokens, uint256[] rewardAmounts</code> (external)",id:"pendingtokensuint256-pid-address-user-uint256--contract-ierc20-rewardtokens-uint256-rewardamounts-external",children:[]},{value:"<code>setRewardPerSecond(uint256 _rewardPerSecond)</code> (public)",id:"setrewardperseconduint256-_rewardpersecond-public",children:[]},{value:"<code>poolLength() \u2192 uint256 pools</code> (public)",id:"poollength--uint256-pools-public",children:[]},{value:"<code>add(uint256 allocPoint, uint256 _pid)</code> (public)",id:"adduint256-allocpoint-uint256-_pid-public",children:[]},{value:"<code>set(uint256 _pid, uint256 _allocPoint)</code> (public)",id:"setuint256-_pid-uint256-_allocpoint-public",children:[]},{value:"<code>reclaimTokens(address token, uint256 amount, address payable to)</code> (public)",id:"reclaimtokensaddress-token-uint256-amount-address-payable-to-public",children:[]},{value:"<code>pendingToken(uint256 _pid, address _user) \u2192 uint256 pending</code> (public)",id:"pendingtokenuint256-_pid-address-_user--uint256-pending-public",children:[]},{value:"<code>massUpdatePools(uint256[] pids)</code> (external)",id:"massupdatepoolsuint256-pids-external",children:[]},{value:"<code>updatePool(uint256 pid) \u2192 struct ComplexRewarderTime.PoolInfo pool</code> (public)",id:"updatepooluint256-pid--struct-complexrewardertimepoolinfo-pool-public",children:[]},{value:"<code>LogOnReward(address user, uint256 pid, uint256 amount, address to)</code>",id:"logonrewardaddress-user-uint256-pid-uint256-amount-address-to",children:[]},{value:"<code>LogPoolAddition(uint256 pid, uint256 allocPoint)</code>",id:"logpooladditionuint256-pid-uint256-allocpoint",children:[]},{value:"<code>LogSetPool(uint256 pid, uint256 allocPoint)</code>",id:"logsetpooluint256-pid-uint256-allocpoint",children:[]},{value:"<code>LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accSushiPerShare)</code>",id:"logupdatepooluint256-pid-uint64-lastrewardtime-uint256-lpsupply-uint256-accsushipershare",children:[]},{value:"<code>LogRewardPerSecond(uint256 rewardPerSecond)</code>",id:"logrewardperseconduint256-rewardpersecond",children:[]},{value:"<code>LogInit()</code>",id:"loginit",children:[]},{value:"<code>UserInfo</code>",id:"userinfo",children:[]},{value:"<code>PoolInfo</code>",id:"poolinfo",children:[]}]}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"complexrewardertime"},(0,i.kt)("inlineCode",{parentName:"h2"},"ComplexRewarderTime")),(0,i.kt)("h3",{id:"lock"},(0,i.kt)("inlineCode",{parentName:"h3"},"lock()")),(0,i.kt)("h3",{id:"onlymcv2"},(0,i.kt)("inlineCode",{parentName:"h3"},"onlyMCV2()")),(0,i.kt)("h3",{id:"constructorcontract-ierc20-_rewardtoken-uint256-_rewardpersecond-address-_masterchef_v2-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"constructor(contract IERC20 _rewardToken, uint256 _rewardPerSecond, address _MASTERCHEF_V2)")," (public)"),(0,i.kt)("h3",{id:"onsushirewarduint256-pid-address-_user-address-to-uint256-uint256-lptoken-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpToken)")," (external)"),(0,i.kt)("h3",{id:"pendingtokensuint256-pid-address-user-uint256--contract-ierc20-rewardtokens-uint256-rewardamounts-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"pendingTokens(uint256 pid, address user, uint256) \u2192 contract IERC20[] rewardTokens, uint256[] rewardAmounts")," (external)"),(0,i.kt)("h3",{id:"setrewardperseconduint256-_rewardpersecond-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"setRewardPerSecond(uint256 _rewardPerSecond)")," (public)"),(0,i.kt)("p",null,"Sets the sushi per second to be distributed. Can only be called by the owner."),(0,i.kt)("h3",{id:"poollength--uint256-pools-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"poolLength() \u2192 uint256 pools")," (public)"),(0,i.kt)("p",null,"Returns the number of MCV2 pools."),(0,i.kt)("h3",{id:"adduint256-allocpoint-uint256-_pid-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"add(uint256 allocPoint, uint256 _pid)")," (public)"),(0,i.kt)("p",null,"Add a new LP to the pool. Can only be called by the owner.\nDO NOT add the same LP token more than once. Rewards will be messed up if you do."),(0,i.kt)("h3",{id:"setuint256-_pid-uint256-_allocpoint-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"set(uint256 _pid, uint256 _allocPoint)")," (public)"),(0,i.kt)("p",null,"Update the given pool's SUSHI allocation point and ",(0,i.kt)("inlineCode",{parentName:"p"},"IRewarder")," contract. Can only be called by the owner."),(0,i.kt)("h3",{id:"reclaimtokensaddress-token-uint256-amount-address-payable-to-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"reclaimTokens(address token, uint256 amount, address payable to)")," (public)"),(0,i.kt)("p",null,"Allows owner to reclaim/withdraw any tokens (including reward tokens) held by this contract"),(0,i.kt)("h3",{id:"pendingtokenuint256-_pid-address-_user--uint256-pending-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"pendingToken(uint256 _pid, address _user) \u2192 uint256 pending")," (public)"),(0,i.kt)("p",null,"View function to see pending Token"),(0,i.kt)("h3",{id:"massupdatepoolsuint256-pids-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"massUpdatePools(uint256[] pids)")," (external)"),(0,i.kt)("p",null,"Update reward variables for all pools. Be careful of gas spending!"),(0,i.kt)("h3",{id:"updatepooluint256-pid--struct-complexrewardertimepoolinfo-pool-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"updatePool(uint256 pid) \u2192 struct ComplexRewarderTime.PoolInfo pool")," (public)"),(0,i.kt)("p",null,"Update reward variables of the given pool."),(0,i.kt)("h3",{id:"logonrewardaddress-user-uint256-pid-uint256-amount-address-to"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogOnReward(address user, uint256 pid, uint256 amount, address to)")),(0,i.kt)("h3",{id:"logpooladditionuint256-pid-uint256-allocpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogPoolAddition(uint256 pid, uint256 allocPoint)")),(0,i.kt)("h3",{id:"logsetpooluint256-pid-uint256-allocpoint"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogSetPool(uint256 pid, uint256 allocPoint)")),(0,i.kt)("h3",{id:"logupdatepooluint256-pid-uint64-lastrewardtime-uint256-lpsupply-uint256-accsushipershare"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accSushiPerShare)")),(0,i.kt)("h3",{id:"logrewardperseconduint256-rewardpersecond"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogRewardPerSecond(uint256 rewardPerSecond)")),(0,i.kt)("h3",{id:"loginit"},(0,i.kt)("inlineCode",{parentName:"h3"},"LogInit()")),(0,i.kt)("h3",{id:"userinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"UserInfo")),(0,i.kt)("p",null,"uint256 amount"),(0,i.kt)("p",null,"uint256 rewardDebt"),(0,i.kt)("p",null,"uint256 unpaidRewards"),(0,i.kt)("h3",{id:"poolinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"PoolInfo")),(0,i.kt)("p",null,"uint128 accSushiPerShare"),(0,i.kt)("p",null,"uint64 lastRewardTime"),(0,i.kt)("p",null,"uint64 allocPoint"))}c.isMDXComponent=!0}}]);