"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[4721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var u=2;u<s;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7968:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>r,toc:()=>l,default:()=>p});var o=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},i="Bentobox - Concepts",r={unversionedId:"bentobox/concepts",id:"bentobox/concepts",isDocsHomePage:!1,title:"Bentobox - Concepts",description:"The BentoBox is a vault that holds tokens and generate yield from flash loans",source:"@site/docs/bentobox/concepts.mdx",sourceDirName:"bentobox",slug:"/bentobox/concepts",permalink:"/docs/bentobox/concepts",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/concepts.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bentobox",permalink:"/docs/bentobox/introduction"},next:{title:"Deployment",permalink:"/docs/bentobox/DEPLOYMENT"}},l=[{value:"MasterContracts and clones",id:"mastercontracts-and-clones",children:[]},{value:"Multiple protocols and Master Contracts",id:"multiple-protocols-and-master-contracts",children:[]},{value:"Approval of protocols (master contracts) not tokens",id:"approval-of-protocols-master-contracts-not-tokens",children:[]},{value:"Deposit and Withdrawal Functions",id:"deposit-and-withdrawal-functions",children:[]},{value:"Free token units due to rounding (fixed)",id:"free-token-units-due-to-rounding-fixed",children:[]}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bentobox---concepts"},"Bentobox - Concepts"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The BentoBox is a vault that holds tokens and generate yield from flash loans\nand strategies for any protocol built on top of it.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The BentoBox is the main vault that holds all funds, not only for the lending\ncontracts, but also for any future extensions. Anyone can build extensions that\nuse the BentoBox as vault with these benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once a token is approved for the Vault, any protocol built using BentoBox\ndoesn't need per token approval anymore.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Low flat costs of internal token transfers and advanced transfers such as\none-to-many transfers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Funds of users and protocols are safely separated internally. Only protocols\nthat the user approves can access the user's funds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Passive income from flash loans.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Potential passive income from strategies."))),(0,a.kt)("p",null,"Placing your tokens in a single vault brings a range of benefits. As more\nprotocols get added to the BentoBox, gas costs will come down, while\ncomparability, capital efficiency and flexibility will go up."),(0,a.kt)("p",null,"Not all tokens are created equal. Some have very high gas costs, some are not\nquite ERC20 compliant. Once they are stored in the BentoBox, you can use your\ntokens in any BentoBox enabled protocols. These protocols don't have to worry\nabout any token quirks or handle ETH. The BentoBox takes care of all that. On\ntop of that, tokens in the BentoBox will generate extra returns through flash\nloans and potentially a token strategy."),(0,a.kt)("h2",{id:"mastercontracts-and-clones"},"MasterContracts and clones"),(0,a.kt)("p",null,"Tokens in the BentoBox can be flash loaned. The fee is 0.05% and this fee goes\nto the share owners in the BentoBox. Multiple assets can be flash loaned at the\nsame time."),(0,a.kt)("p",null,"ERC3156 wasn't final at release of the BentoBox and the BentoBox is not ERC3156\ncompliant at this time. The BentoBox uses push instead of pull to get the\nreturned funds. This is for flexibility and security reasons."),(0,a.kt)("p",null,"The BentoBox has a simple strategy system per token. A strategy is a contract\nthat invests a single token for profit and returns the profit in that same\ntoken. The safest strategies would be those that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Can only ever grow in token amount. Principal is always safe.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Can be deposited and withdraw at will."))),(0,a.kt)("p",null,"Some examples of this would be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The SushiBar: SUSHI can be invested and held as xSUSHI. See SushiStrategy.sol.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Staking contracts, such as MasterChef and Onsen."))),(0,a.kt)("p",null,"It will be up to the community and the Sushi team to decide which strategies are\nsafe enough to enable. The BentoBox has a hardcoded 2 weeks waiting period for\nenabling or changing strategies."),(0,a.kt)("p",null,"When you deposit token in the BentoBox, you receive a number of shares. This\nrepresents your shares of the total token amount in the BentoBox. As the amount\nof tokens grows due to flash loan fees and profit from strategies, you will get\nyour share of that. Simple depositing tokens into the BentoBox can provide\nreturns."),(0,a.kt)("p",null,"Because of limited precision in the accounting, there will be small rounding\ndifferences. For most tokens these will be incredibly small and have no useful\nvalue. In the top 100 tokens, currently $XAUT is worth the most for a single\naccounting unit, at about $0.00185. BentoBox is designed to never round in your\nfavour, because that could be exploited by clever hackers. But because of this,\nwhen you deposit 100 tokens and withdraw it straight away, you may only receive\nfor instance 99.9999."),(0,a.kt)("p",null,"The batch function allows the batching of multiple BentoBox function calls in a\nsingle transaction."),(0,a.kt)("p",null,"While most ERC20 tokens are supported by the BentoBox, there are some tokens\nthat should not be deposited into the BentoBox:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rebasing tokens are not directly supported. Since rebasing is just a visual\n(psychological) trick rather than an actual feature, direct support was not\nadded. However, most rebasing tokens could easily be wrapped exposing the\nunderlying balances as an ERC20 token. These could be deposited into the\nBentoBox without problem.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tokens where a single 'unit' has significant value. Due to rounding and gas\noptimizations, it is possible to craft transactions that will give you 'free'\nunits of a token. In case of a token, such as $SUSHI, with 18 decimals, this\nwould be worth about $0.00000000000000001. As long as gas costs are more than\nthis, it's safe. In the case of WBTC, 1 unit is about $0.00033, which still\nhas a safety margin of about 4 orders of magnitude. There may however be some\ntokens with low or no decimals and a high value that should not be added to\nthe BentoBox.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tokens where the totalSupply in token units is greater than uint128, which is\nabout 38 decimals. With a maximum of 18 decimals normally used, this would\nstill allow for a totalSupply of 100.000.000.000.000.000.000, which is more\nthan enough. While ERC20 supports uint256, this limit was added to safe on\ngas."))),(0,a.kt)("p",null,"To prevent a far-fetched grieving attack on the amount to share ratio, a minimum\nof 1000 shares of each token have to remain in the BentoBox OR it has to be\nemptied completely. Normally this is an insignificant amount, and even in case\nof WBTC, it's only $3.30. If you're the last user, you can fully withdraw your\nshares, so no funds are lost/inaccessible because of this."),(0,a.kt)("h2",{id:"multiple-protocols-and-master-contracts"},"Multiple protocols and Master Contracts"),(0,a.kt)("p",null,"Any protocol can use BentoBox as it's storage of funds. The contract just needs\nto implement the init function."),(0,a.kt)("h2",{id:"approval-of-protocols-master-contracts-not-tokens"},"Approval of protocols (master contracts) not tokens"),(0,a.kt)("p",null,"For every new master contract, each user manually approves the protocol. Once\napproved, functions of the protocol contract have access to all funds of the\nuser that are not in other protocols. Because this is quite a powerful approval,\nusers tricked into approving a malicious contract could lose a lot of funds. To\nmitigate this and improve usability, the approval is done through a signed typed\ndata message. A wallet such as Metamask will display the typed data, which\nincludes this message:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Give FULL access to funds in (and approved to) BentoBox?")),(0,a.kt)("p",null,"This will prompt users to the potential effects of the approval. Because some\nhardware wallets are unable to sign typed data, such as the Ledger, a fallback\nis available. The Sushi team has the ability to white-list master contracts so\nthey can be approved by a simple contract call."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapping(IERC20 => mapping(address => uint256)) public balanceOf")),(0,a.kt)("p",null,"The balance of shares per token per user (or contract)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapping(IERC20 => Rebase) public totals")),(0,a.kt)("p",null,"totals.elastic = actual total token balance in the BentoBox + the balance of\ntokens sent to the strategy. totals.base = total shares (the sum of all the\nbalances of all users)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapping(address => uint256) public nonces")," mapping of nonces for user addresses"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapping(address => bool) public whitelistedMasterContracts")," returns contracts\nwhitelisted to be approved in the fallback function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"domainSeparator")," function returns the domain separator."),(0,a.kt)("p",null,"Calls the permit function on a token confirming to\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2612"},"EIP-2612"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setMasterContractApproval")," function allows users to approve all clones of a\nmasterContract to manage their funds using a typed message following the\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712 standard"),". To approve a master\ncontract ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," should be called with the appropriate data."),(0,a.kt)("p",null,"BentoBox also offers a fallback functionality targeted at Ledger devices which\nonly allows approving masterContracts whitelisted by the SushiSwap team. To use\nthe fallback, set the v, r, s values to 0."),(0,a.kt)("h2",{id:"deposit-and-withdrawal-functions"},"Deposit and Withdrawal Functions"),(0,a.kt)("p",null,"Deposit and withdraw functions are used to add and remove funds from the\nBentoBox. A range of different variants is available. Support for ERC721 permits\nis also included, by batching a deposit with the ",(0,a.kt)("inlineCode",{parentName:"p"},"permit")," function."),(0,a.kt)("p",null,"When depositing ETH, use the 0 address\n(0x0000000000000000000000000000000000000000) and set the amount correctly. ETH\nwill be converted to WETH9 when depositing and back to ETH when withdrawn.\nSetting a lower amount will cause a loss of ETH. This is not protected to\nsupport batch deposits through the batch function."),(0,a.kt)("p",null,"Once a user approves a masterContract, all clones of that contract can withdraw\nand deposit for that user."),(0,a.kt)("p",null,"The deposit function is used to add a BentoBox balance for a token to an address\n(user or contract). This can be done in 2 ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pulling in approved tokens using transferFrom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"transfer the tokens onto the BentoBox contract address and use the BentoBox\ncontract address to 'skim' the tokens to the 'to' address."))),(0,a.kt)("p",null,"Inputs: ",(0,a.kt)("inlineCode",{parentName:"p"},"IERC20 token_")," The contract address of the token being deposited. Use\n",(0,a.kt)("inlineCode",{parentName:"p"},"address(0)")," for ETH. ",(0,a.kt)("inlineCode",{parentName:"p"},"address from")," The address the tokens are coming from.\nMust have permission. ",(0,a.kt)("inlineCode",{parentName:"p"},"address to")," The address the BentoBox balance will be\nassigned to. ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256 amount")," The amount of tokens being deposited. Only used if\n",(0,a.kt)("inlineCode",{parentName:"p"},"share")," is 0. ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256 share")," The number of shares worth being deposited.\nCalculated from ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"share")," is 0."),(0,a.kt)("p",null,"Outputs: ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256 amountOut")," The actual amount deposited. ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256 shareOut")," The\nactual shares added."),(0,a.kt)("p",null,"Note: when the amount is calculated from the share and converting the amount\nback to share results in less, amount is increased by 1. This is effectively\nrounding up instead of down, to ensure the amount being added at a minimum\nmatches the value of the shares given."),(0,a.kt)("p",null,"Transfer functions are used to transfer funds from one account to another within\nthe BentoBox. Once a user approves a masterContract, all clones of that contract\ncan access the user's funds in the BentoBox and transfer them."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transferMultiple")," function does a one-to-many transfer in a more gas\nefficient manner. Other complicated transfers can be composed through ",(0,a.kt)("inlineCode",{parentName:"p"},"batch"),"."),(0,a.kt)("p",null,"The batch function allows for executing multiple actions on the BentoBox\ncontract in a single transaction."),(0,a.kt)("h2",{id:"free-token-units-due-to-rounding-fixed"},"Free token units due to rounding (fixed)"),(0,a.kt)("p",null,"Due to rounding, it may be possible to deposit (or withdraw) a tiny amount of\ntokens for 'free'. Since these amounts would normally be worth nothing, the gas\ncosts to do this would make this pointless."),(0,a.kt)("p",null,"However, for tokens where a single 'unit' has significant value this could be\nproblematic. These tokens should not be added to the BentoBox. In practice, this\nis not an issue for nearly all popular tokens. Some examples, including the\nworst cases from the CoinGecko top 100 Ethereum tokens:"),(0,a.kt)("p",null,"$SUSHI - 18 decimals - $10 - single unit value is $0.00000000000000001 $WTB - 8\ndecimals - $33.000 - single unit value is $0.00033 $USDC - 6 decimals - $1 -\nsingle unit value is $0.000001 $CEL - 4 decimals - $4,75 - single unit value is\n$0.000475 $XAUT - 6 decimals - $1.850 - single unit value is $0.001850"),(0,a.kt)("p",null,"As long as gas costs are more than this, it's safe. In the case of WBTC, 1 unit\nis about $0.00033, which still has a safety margin of about 4 orders of\nmagnitude. There may however be some tokens with low or no decimals and a high\nvalue that should not be added to the BentoBox."))}p.isMDXComponent=!0}}]);