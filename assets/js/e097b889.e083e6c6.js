"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[2421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||s[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>d,toc:()=>l,default:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={},a=void 0,d={unversionedId:"bentobox/MasterChefV2",id:"bentobox/MasterChefV2",isDocsHomePage:!1,title:"MasterChefV2",description:"MasterChefV2",source:"@site/docs/bentobox/MasterChefV2.md",sourceDirName:"bentobox",slug:"/bentobox/MasterChefV2",permalink:"/docs/bentobox/MasterChefV2",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/MasterChefV2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MasterChef",permalink:"/docs/bentobox/MasterChef"},next:{title:"Migrator",permalink:"/docs/bentobox/Migrator"}},l=[{value:"<code>MasterChefV2</code>",id:"masterchefv2",children:[{value:"<code>constructor(contract IMasterChef _MASTER_CHEF, contract IERC20 _sushi, uint256 _MASTER_PID)</code> (public)",id:"constructorcontract-imasterchef-_master_chef-contract-ierc20-_sushi-uint256-_master_pid-public",children:[]},{value:"<code>init(contract IERC20 dummyToken)</code> (external)",id:"initcontract-ierc20-dummytoken-external",children:[]},{value:"<code>poolLength() \u2192 uint256 pools</code> (public)",id:"poollength--uint256-pools-public",children:[]},{value:"<code>add(uint256 allocPoint, contract IERC20 _lpToken, contract IRewarder _rewarder)</code> (public)",id:"adduint256-allocpoint-contract-ierc20-_lptoken-contract-irewarder-_rewarder-public",children:[]},{value:"<code>set(uint256 _pid, uint256 _allocPoint, contract IRewarder _rewarder, bool overwrite)</code> (public)",id:"setuint256-_pid-uint256-_allocpoint-contract-irewarder-_rewarder-bool-overwrite-public",children:[]},{value:"<code>setMigrator(contract IMigratorChef _migrator)</code> (public)",id:"setmigratorcontract-imigratorchef-_migrator-public",children:[]},{value:"<code>migrate(uint256 _pid)</code> (public)",id:"migrateuint256-_pid-public",children:[]},{value:"<code>pendingSushi(uint256 _pid, address _user) \u2192 uint256 pending</code> (external)",id:"pendingsushiuint256-_pid-address-_user--uint256-pending-external",children:[]},{value:"<code>massUpdatePools(uint256[] pids)</code> (external)",id:"massupdatepoolsuint256-pids-external",children:[]},{value:"<code>sushiPerBlock() \u2192 uint256 amount</code> (public)",id:"sushiperblock--uint256-amount-public",children:[]},{value:"<code>updatePool(uint256 pid) \u2192 struct MasterChefV2.PoolInfo pool</code> (public)",id:"updatepooluint256-pid--struct-masterchefv2poolinfo-pool-public",children:[]},{value:"<code>deposit(uint256 pid, uint256 amount, address to)</code> (public)",id:"deposituint256-pid-uint256-amount-address-to-public",children:[]},{value:"<code>withdraw(uint256 pid, uint256 amount, address to)</code> (public)",id:"withdrawuint256-pid-uint256-amount-address-to-public",children:[]},{value:"<code>harvest(uint256 pid, address to)</code> (public)",id:"harvestuint256-pid-address-to-public",children:[]},{value:"<code>withdrawAndHarvest(uint256 pid, uint256 amount, address to)</code> (public)",id:"withdrawandharvestuint256-pid-uint256-amount-address-to-public",children:[]},{value:"<code>harvestFromMasterChef()</code> (public)",id:"harvestfrommasterchef-public",children:[]},{value:"<code>emergencyWithdraw(uint256 pid, address to)</code> (public)",id:"emergencywithdrawuint256-pid-address-to-public",children:[]},{value:"<code>Deposit(address user, uint256 pid, uint256 amount, address to)</code>",id:"depositaddress-user-uint256-pid-uint256-amount-address-to",children:[]},{value:"<code>Withdraw(address user, uint256 pid, uint256 amount, address to)</code>",id:"withdrawaddress-user-uint256-pid-uint256-amount-address-to",children:[]},{value:"<code>EmergencyWithdraw(address user, uint256 pid, uint256 amount, address to)</code>",id:"emergencywithdrawaddress-user-uint256-pid-uint256-amount-address-to",children:[]},{value:"<code>Harvest(address user, uint256 pid, uint256 amount)</code>",id:"harvestaddress-user-uint256-pid-uint256-amount",children:[]},{value:"<code>LogPoolAddition(uint256 pid, uint256 allocPoint, contract IERC20 lpToken, contract IRewarder rewarder)</code>",id:"logpooladditionuint256-pid-uint256-allocpoint-contract-ierc20-lptoken-contract-irewarder-rewarder",children:[]},{value:"<code>LogSetPool(uint256 pid, uint256 allocPoint, contract IRewarder rewarder, bool overwrite)</code>",id:"logsetpooluint256-pid-uint256-allocpoint-contract-irewarder-rewarder-bool-overwrite",children:[]},{value:"<code>LogUpdatePool(uint256 pid, uint64 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare)</code>",id:"logupdatepooluint256-pid-uint64-lastrewardblock-uint256-lpsupply-uint256-accsushipershare",children:[]},{value:"<code>LogInit()</code>",id:"loginit",children:[]},{value:"<code>UserInfo</code>",id:"userinfo",children:[]},{value:"<code>PoolInfo</code>",id:"poolinfo",children:[]}]}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"masterchefv2"},(0,r.kt)("inlineCode",{parentName:"h2"},"MasterChefV2")),(0,r.kt)("p",null,"The (older) MasterChef contract gives out a constant number of SUSHI tokens per block.\nIt is the only address with minting rights for SUSHI.\nThe idea for this MasterChef V2 (MCV2) contract is therefore to be the owner of a dummy token\nthat is deposited into the MasterChef V1 (MCV1) contract.\nThe allocation point for this pool on MCV1 is the total allocation point for all pools that receive double incentives."),(0,r.kt)("h3",{id:"constructorcontract-imasterchef-_master_chef-contract-ierc20-_sushi-uint256-_master_pid-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"constructor(contract IMasterChef _MASTER_CHEF, contract IERC20 _sushi, uint256 _MASTER_PID)")," (public)"),(0,r.kt)("h3",{id:"initcontract-ierc20-dummytoken-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"init(contract IERC20 dummyToken)")," (external)"),(0,r.kt)("p",null,"Deposits a dummy token to ",(0,r.kt)("inlineCode",{parentName:"p"},"MASTER_CHEF")," MCV1. This is required because MCV1 holds the minting rights for SUSHI.\nAny balance of transaction sender in ",(0,r.kt)("inlineCode",{parentName:"p"},"dummyToken")," is transferred.\nThe allocation point for the pool on MCV1 is the total allocation point for all pools that receive double incentives."),(0,r.kt)("h3",{id:"poollength--uint256-pools-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"poolLength() \u2192 uint256 pools")," (public)"),(0,r.kt)("p",null,"Returns the number of MCV2 pools."),(0,r.kt)("h3",{id:"adduint256-allocpoint-contract-ierc20-_lptoken-contract-irewarder-_rewarder-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"add(uint256 allocPoint, contract IERC20 _lpToken, contract IRewarder _rewarder)")," (public)"),(0,r.kt)("p",null,"Add a new LP to the pool. Can only be called by the owner.\nDO NOT add the same LP token more than once. Rewards will be messed up if you do."),(0,r.kt)("h3",{id:"setuint256-_pid-uint256-_allocpoint-contract-irewarder-_rewarder-bool-overwrite-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"set(uint256 _pid, uint256 _allocPoint, contract IRewarder _rewarder, bool overwrite)")," (public)"),(0,r.kt)("p",null,"Update the given pool's SUSHI allocation point and ",(0,r.kt)("inlineCode",{parentName:"p"},"IRewarder")," contract. Can only be called by the owner."),(0,r.kt)("h3",{id:"setmigratorcontract-imigratorchef-_migrator-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"setMigrator(contract IMigratorChef _migrator)")," (public)"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrator")," contract. Can only be called by the owner."),(0,r.kt)("h3",{id:"migrateuint256-_pid-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"migrate(uint256 _pid)")," (public)"),(0,r.kt)("p",null,"Migrate LP token to another LP contract through the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrator")," contract."),(0,r.kt)("h3",{id:"pendingsushiuint256-_pid-address-_user--uint256-pending-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"pendingSushi(uint256 _pid, address _user) \u2192 uint256 pending")," (external)"),(0,r.kt)("p",null,"View function to see pending SUSHI on frontend."),(0,r.kt)("h3",{id:"massupdatepoolsuint256-pids-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"massUpdatePools(uint256[] pids)")," (external)"),(0,r.kt)("p",null,"Update reward variables for all pools. Be careful of gas spending!"),(0,r.kt)("h3",{id:"sushiperblock--uint256-amount-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"sushiPerBlock() \u2192 uint256 amount")," (public)"),(0,r.kt)("p",null,"Calculates and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of SUSHI per block."),(0,r.kt)("h3",{id:"updatepooluint256-pid--struct-masterchefv2poolinfo-pool-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"updatePool(uint256 pid) \u2192 struct MasterChefV2.PoolInfo pool")," (public)"),(0,r.kt)("p",null,"Update reward variables of the given pool."),(0,r.kt)("h3",{id:"deposituint256-pid-uint256-amount-address-to-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"deposit(uint256 pid, uint256 amount, address to)")," (public)"),(0,r.kt)("p",null,"Deposit LP tokens to MCV2 for SUSHI allocation."),(0,r.kt)("h3",{id:"withdrawuint256-pid-uint256-amount-address-to-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"withdraw(uint256 pid, uint256 amount, address to)")," (public)"),(0,r.kt)("p",null,"Withdraw LP tokens from MCV2."),(0,r.kt)("h3",{id:"harvestuint256-pid-address-to-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"harvest(uint256 pid, address to)")," (public)"),(0,r.kt)("p",null,"Harvest proceeds for transaction sender to ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,r.kt)("h3",{id:"withdrawandharvestuint256-pid-uint256-amount-address-to-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"withdrawAndHarvest(uint256 pid, uint256 amount, address to)")," (public)"),(0,r.kt)("p",null,"Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,r.kt)("h3",{id:"harvestfrommasterchef-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"harvestFromMasterChef()")," (public)"),(0,r.kt)("p",null,"Harvests SUSHI from ",(0,r.kt)("inlineCode",{parentName:"p"},"MASTER_CHEF")," MCV1 and pool ",(0,r.kt)("inlineCode",{parentName:"p"},"MASTER_PID")," to this MCV2 contract."),(0,r.kt)("h3",{id:"emergencywithdrawuint256-pid-address-to-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"emergencyWithdraw(uint256 pid, address to)")," (public)"),(0,r.kt)("p",null,"Withdraw without caring about rewards. EMERGENCY ONLY."),(0,r.kt)("h3",{id:"depositaddress-user-uint256-pid-uint256-amount-address-to"},(0,r.kt)("inlineCode",{parentName:"h3"},"Deposit(address user, uint256 pid, uint256 amount, address to)")),(0,r.kt)("h3",{id:"withdrawaddress-user-uint256-pid-uint256-amount-address-to"},(0,r.kt)("inlineCode",{parentName:"h3"},"Withdraw(address user, uint256 pid, uint256 amount, address to)")),(0,r.kt)("h3",{id:"emergencywithdrawaddress-user-uint256-pid-uint256-amount-address-to"},(0,r.kt)("inlineCode",{parentName:"h3"},"EmergencyWithdraw(address user, uint256 pid, uint256 amount, address to)")),(0,r.kt)("h3",{id:"harvestaddress-user-uint256-pid-uint256-amount"},(0,r.kt)("inlineCode",{parentName:"h3"},"Harvest(address user, uint256 pid, uint256 amount)")),(0,r.kt)("h3",{id:"logpooladditionuint256-pid-uint256-allocpoint-contract-ierc20-lptoken-contract-irewarder-rewarder"},(0,r.kt)("inlineCode",{parentName:"h3"},"LogPoolAddition(uint256 pid, uint256 allocPoint, contract IERC20 lpToken, contract IRewarder rewarder)")),(0,r.kt)("h3",{id:"logsetpooluint256-pid-uint256-allocpoint-contract-irewarder-rewarder-bool-overwrite"},(0,r.kt)("inlineCode",{parentName:"h3"},"LogSetPool(uint256 pid, uint256 allocPoint, contract IRewarder rewarder, bool overwrite)")),(0,r.kt)("h3",{id:"logupdatepooluint256-pid-uint64-lastrewardblock-uint256-lpsupply-uint256-accsushipershare"},(0,r.kt)("inlineCode",{parentName:"h3"},"LogUpdatePool(uint256 pid, uint64 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare)")),(0,r.kt)("h3",{id:"loginit"},(0,r.kt)("inlineCode",{parentName:"h3"},"LogInit()")),(0,r.kt)("h3",{id:"userinfo"},(0,r.kt)("inlineCode",{parentName:"h3"},"UserInfo")),(0,r.kt)("p",null,"uint256 amount"),(0,r.kt)("p",null,"int256 rewardDebt"),(0,r.kt)("h3",{id:"poolinfo"},(0,r.kt)("inlineCode",{parentName:"h3"},"PoolInfo")),(0,r.kt)("p",null,"uint128 accSushiPerShare"),(0,r.kt)("p",null,"uint64 lastRewardBlock"),(0,r.kt)("p",null,"uint64 allocPoint"))}c.isMDXComponent=!0}}]);