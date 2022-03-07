"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[5754],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),m=u(n),p=o,k=m["".concat(s,".").concat(p)]||m[p]||l[p]||a;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8310:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,c={unversionedId:"bentobox/bentobox/BentoBoxV1",id:"bentobox/bentobox/BentoBoxV1",title:"BentoBoxV1",description:"BentoBoxV1",source:"@site/docs/bentobox/bentobox/BentoBoxV1.md",sourceDirName:"bentobox/bentobox",slug:"/bentobox/bentobox/BentoBoxV1",permalink:"/docs/bentobox/bentobox/BentoBoxV1",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/bentobox/BentoBoxV1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BaseBoringBatchable",permalink:"/docs/bentobox/bentobox/BaseBoringBatchable"},next:{title:"BoringBatchable",permalink:"/docs/bentobox/bentobox/BoringBatchable"}},s={},u=[{value:"<code>BentoBoxV1</code>",id:"bentoboxv1",level:2},{value:"<code>allowed(address from)</code>",id:"allowedaddress-from",level:3},{value:"<code>constructor(contract IERC20 wethToken_)</code> (public)",id:"constructorcontract-ierc20-wethtoken_-public",level:3},{value:"<code>_tokenBalanceOf(contract IERC20 token) \u2192 uint256 amount</code> (internal)",id:"_tokenbalanceofcontract-ierc20-token--uint256-amount-internal",level:3},{value:"<code>toShare(contract IERC20 token, uint256 amount, bool roundUp) \u2192 uint256 share</code> (external)",id:"tosharecontract-ierc20-token-uint256-amount-bool-roundup--uint256-share-external",level:3},{value:"<code>toAmount(contract IERC20 token, uint256 share, bool roundUp) \u2192 uint256 amount</code> (external)",id:"toamountcontract-ierc20-token-uint256-share-bool-roundup--uint256-amount-external",level:3},{value:"<code>deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) \u2192 uint256 amountOut, uint256 shareOut</code> (public)",id:"depositcontract-ierc20-token_-address-from-address-to-uint256-amount-uint256-share--uint256-amountout-uint256-shareout-public",level:3},{value:"<code>withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) \u2192 uint256 amountOut, uint256 shareOut</code> (public)",id:"withdrawcontract-ierc20-token_-address-from-address-to-uint256-amount-uint256-share--uint256-amountout-uint256-shareout-public",level:3},{value:"<code>transfer(contract IERC20 token, address from, address to, uint256 share)</code> (public)",id:"transfercontract-ierc20-token-address-from-address-to-uint256-share-public",level:3},{value:"<code>transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares)</code> (public)",id:"transfermultiplecontract-ierc20-token-address-from-address-tos-uint256-shares-public",level:3},{value:"<code>flashLoan(contract IFlashBorrower borrower, address receiver, contract IERC20 token, uint256 amount, bytes data)</code> (public)",id:"flashloancontract-iflashborrower-borrower-address-receiver-contract-ierc20-token-uint256-amount-bytes-data-public",level:3},{value:"<code>batchFlashLoan(contract IBatchFlashBorrower borrower, address[] receivers, contract IERC20[] tokens, uint256[] amounts, bytes data)</code> (public)",id:"batchflashloancontract-ibatchflashborrower-borrower-address-receivers-contract-ierc20-tokens-uint256-amounts-bytes-data-public",level:3},{value:"<code>setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_)</code> (public)",id:"setstrategytargetpercentagecontract-ierc20-token-uint64-targetpercentage_-public",level:3},{value:"<code>setStrategy(contract IERC20 token, contract IStrategy newStrategy)</code> (public)",id:"setstrategycontract-ierc20-token-contract-istrategy-newstrategy-public",level:3},{value:"<code>harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount)</code> (public)",id:"harvestcontract-ierc20-token-bool-balance-uint256-maxchangeamount-public",level:3},{value:"<code>receive()</code> (external)",id:"receive-external",level:3},{value:"<code>LogDeposit(contract IERC20 token, address from, address to, uint256 amount, uint256 share)</code>",id:"logdepositcontract-ierc20-token-address-from-address-to-uint256-amount-uint256-share",level:3},{value:"<code>LogWithdraw(contract IERC20 token, address from, address to, uint256 amount, uint256 share)</code>",id:"logwithdrawcontract-ierc20-token-address-from-address-to-uint256-amount-uint256-share",level:3},{value:"<code>LogTransfer(contract IERC20 token, address from, address to, uint256 share)</code>",id:"logtransfercontract-ierc20-token-address-from-address-to-uint256-share",level:3},{value:"<code>LogFlashLoan(address borrower, contract IERC20 token, uint256 amount, uint256 feeAmount, address receiver)</code>",id:"logflashloanaddress-borrower-contract-ierc20-token-uint256-amount-uint256-feeamount-address-receiver",level:3},{value:"<code>LogStrategyTargetPercentage(contract IERC20 token, uint256 targetPercentage)</code>",id:"logstrategytargetpercentagecontract-ierc20-token-uint256-targetpercentage",level:3},{value:"<code>LogStrategyQueued(contract IERC20 token, contract IStrategy strategy)</code>",id:"logstrategyqueuedcontract-ierc20-token-contract-istrategy-strategy",level:3},{value:"<code>LogStrategySet(contract IERC20 token, contract IStrategy strategy)</code>",id:"logstrategysetcontract-ierc20-token-contract-istrategy-strategy",level:3},{value:"<code>LogStrategyInvest(contract IERC20 token, uint256 amount)</code>",id:"logstrategyinvestcontract-ierc20-token-uint256-amount",level:3},{value:"<code>LogStrategyDivest(contract IERC20 token, uint256 amount)</code>",id:"logstrategydivestcontract-ierc20-token-uint256-amount",level:3},{value:"<code>LogStrategyProfit(contract IERC20 token, uint256 amount)</code>",id:"logstrategyprofitcontract-ierc20-token-uint256-amount",level:3},{value:"<code>LogStrategyLoss(contract IERC20 token, uint256 amount)</code>",id:"logstrategylosscontract-ierc20-token-uint256-amount",level:3},{value:"<code>StrategyData</code>",id:"strategydata",level:3}],d={toc:u};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bentoboxv1"},(0,o.kt)("inlineCode",{parentName:"h2"},"BentoBoxV1")),(0,o.kt)("p",null,"e BentoBox will be lost, use the deposit function instead. contract BentoBoxV1\nis MasterContractManager, BoringBatchable { using BoringMath for uint256; using\nBoringMath128 for uint128; using BoringERC20 for IERC20; using RebaseLibrary for\nRebase;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// ************** //\n// *** EVENTS *** //\n// ************** //\n\nevent LogDeposit(IERC20 indexed token\n")),(0,o.kt)("h3",{id:"allowedaddress-from"},(0,o.kt)("inlineCode",{parentName:"h3"},"allowed(address from)")),(0,o.kt)("p",null,"enable skimming, not just for deposits, but also for withdrawals or transfers,\nenabling better composability. If 'from' is a clone of a masterContract AND the\n'from' address has approved that masterContract, it's allowed. modifier\nallowed(address from) { if (from != msg.sender && from != address(this)) { //\nFrom is sender or you are skimming address masterContract =\nmasterContractOf","[msg.sender]",'; require(masterContract != address(0), "BentoBox:\nno masterContract"); require(masterC'),(0,o.kt)("h3",{id:"constructorcontract-ierc20-wethtoken_-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"constructor(contract IERC20 wethToken_)")," (public)"),(0,o.kt)("h3",{id:"_tokenbalanceofcontract-ierc20-token--uint256-amount-internal"},(0,o.kt)("inlineCode",{parentName:"h3"},"_tokenBalanceOf(contract IERC20 token) \u2192 uint256 amount")," (internal)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"****"),"*","*","*",(0,o.kt)("strong",{parentName:"p"},"****")," // // ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"}," PUBLIC FUNCTIONS "))," // //\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"**")),"*","*","*","*",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"**"))," //"),(0,o.kt)("p",null,"Helper function to represent a"),(0,o.kt)("h3",{id:"tosharecontract-ierc20-token-uint256-amount-bool-roundup--uint256-share-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"toShare(contract IERC20 token, uint256 amount, bool roundUp) \u2192 uint256 share")," (external)"),(0,o.kt)("p",null,"n, uint256 amount, bool roundUp ) external view returns (uint256 share) { share\n= totals","[token]",".toBase(amount, roundUp); }"),(0,o.kt)("p",null,"Helper function represent shares back into the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," amount."),(0,o.kt)("h3",{id:"toamountcontract-ierc20-token-uint256-share-bool-roundup--uint256-amount-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"toAmount(contract IERC20 token, uint256 share, bool roundUp) \u2192 uint256 amount")," (external)"),(0,o.kt)("p",null,"token, uint256 share, bool roundUp ) external view returns (uint256 amount) {\namount = totals","[token]",".toElastic(share, roundUp); }"),(0,o.kt)("p",null,"Deposit an amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," represented in either ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"share"),"."),(0,o.kt)("h3",{id:"depositcontract-ierc20-token_-address-from-address-to-uint256-amount-uint256-share--uint256-amountout-uint256-shareout-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) \u2192 uint256 amountOut, uint256 shareOut")," (public)"),(0,o.kt)("p",null,"aram share Token amount represented in shares to deposit. Takes precedence over\n",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,o.kt)("h3",{id:"withdrawcontract-ierc20-token_-address-from-address-to-uint256-amount-uint256-share--uint256-amountout-uint256-shareout-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) \u2192 uint256 amountOut, uint256 shareOut")," (public)"),(0,o.kt)("p",null,"re Like above, but ",(0,o.kt)("inlineCode",{parentName:"p"},"share")," takes precedence over ",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),". function withdraw(\nIERC20 token","_",', address from, address to, uint256 amount, uint256 share ) public\nallowed(from) returns (uint256 amountOut, uint256 shareOut) { // Checks\nrequire(to != address(0), "BentoBox: to not set"); // To avoid a bad UI from\nburning fu'),(0,o.kt)("h3",{id:"transfercontract-ierc20-token-address-from-address-to-uint256-share-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"transfer(contract IERC20 token, address from, address to, uint256 share)")," (public)"),(0,o.kt)("p",null,"y account that has approved them // F3 - Can it be combined with another similar\nfunction? // F3: This isn't combined with transferMultiple for gas optimization\nfunction transfer( IERC20 token, address from, address to, uint"),(0,o.kt)("h3",{id:"transfermultiplecontract-ierc20-token-address-from-address-tos-uint256-shares-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares)")," (public)"),(0,o.kt)("p",null,"be combined with another similar function? // F3: This isn't combined with\ntransfer for gas optimization function transferMultiple( IERC20 token, address\nfrom, address[] calldata tos, uint256[] calldata shares ) public allowed(from) {\n// Checks"),(0,o.kt)("h3",{id:"flashloancontract-iflashborrower-borrower-address-receiver-contract-ierc20-token-uint256-amount-bytes-data-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"flashLoan(contract IFlashBorrower borrower, address receiver, contract IERC20 token, uint256 amount, bytes data)")," (public)"),(0,o.kt)("h3",{id:"batchflashloancontract-ibatchflashborrower-borrower-address-receivers-contract-ierc20-tokens-uint256-amounts-bytes-data-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"batchFlashLoan(contract IBatchFlashBorrower borrower, address[] receivers, contract IERC20[] tokens, uint256[] amounts, bytes data)")," (public)"),(0,o.kt)("p",null,"ing with ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amounts"),"."),(0,o.kt)("h3",{id:"setstrategytargetpercentagecontract-ierc20-token-uint64-targetpercentage_-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_)")," (public)"),(0,o.kt)("p",null,"CENTAGE`. function setStrategyTargetPercentage(IERC20 token, uint64\ntargetPercentage",(0,o.kt)("em",{parentName:"p"},") public onlyOwner { // Checks require(targetPercentage"),' <=\nMAX_TARGET_PERCENTAGE, "StrategyManager: Target too high");'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    // Effects\n    strategyData[token].targetPercentage = targetPercentage_;\n    emit LogStrat\n")),(0,o.kt)("h3",{id:"setstrategycontract-ierc20-token-contract-istrategy-newstrategy-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"setStrategy(contract IERC20 token, contract IStrategy newStrategy)")," (public)"),(0,o.kt)("h3",{id:"harvestcontract-ierc20-token-bool-balance-uint256-maxchangeamount-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount)")," (public)"),(0,o.kt)("p",null,"m balance True if housekeeping should be done."),(0,o.kt)("h3",{id:"receive-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"receive()")," (external)"),(0,o.kt)("h3",{id:"logdepositcontract-ierc20-token-address-from-address-to-uint256-amount-uint256-share"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogDeposit(contract IERC20 token, address from, address to, uint256 amount, uint256 share)")),(0,o.kt)("h3",{id:"logwithdrawcontract-ierc20-token-address-from-address-to-uint256-amount-uint256-share"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogWithdraw(contract IERC20 token, address from, address to, uint256 amount, uint256 share)")),(0,o.kt)("h3",{id:"logtransfercontract-ierc20-token-address-from-address-to-uint256-share"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogTransfer(contract IERC20 token, address from, address to, uint256 share)")),(0,o.kt)("h3",{id:"logflashloanaddress-borrower-contract-ierc20-token-uint256-amount-uint256-feeamount-address-receiver"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogFlashLoan(address borrower, contract IERC20 token, uint256 amount, uint256 feeAmount, address receiver)")),(0,o.kt)("h3",{id:"logstrategytargetpercentagecontract-ierc20-token-uint256-targetpercentage"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyTargetPercentage(contract IERC20 token, uint256 targetPercentage)")),(0,o.kt)("h3",{id:"logstrategyqueuedcontract-ierc20-token-contract-istrategy-strategy"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyQueued(contract IERC20 token, contract IStrategy strategy)")),(0,o.kt)("h3",{id:"logstrategysetcontract-ierc20-token-contract-istrategy-strategy"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategySet(contract IERC20 token, contract IStrategy strategy)")),(0,o.kt)("h3",{id:"logstrategyinvestcontract-ierc20-token-uint256-amount"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyInvest(contract IERC20 token, uint256 amount)")),(0,o.kt)("h3",{id:"logstrategydivestcontract-ierc20-token-uint256-amount"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyDivest(contract IERC20 token, uint256 amount)")),(0,o.kt)("h3",{id:"logstrategyprofitcontract-ierc20-token-uint256-amount"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyProfit(contract IERC20 token, uint256 amount)")),(0,o.kt)("h3",{id:"logstrategylosscontract-ierc20-token-uint256-amount"},(0,o.kt)("inlineCode",{parentName:"h3"},"LogStrategyLoss(contract IERC20 token, uint256 amount)")),(0,o.kt)("h3",{id:"strategydata"},(0,o.kt)("inlineCode",{parentName:"h3"},"StrategyData")),(0,o.kt)("p",null,"uint64 strategyStartDate"),(0,o.kt)("p",null,"uint64 targetPercentage"),(0,o.kt)("p",null,"uint128 balance"))}l.isMDXComponent=!0}}]);