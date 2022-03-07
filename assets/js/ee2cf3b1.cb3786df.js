"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[1946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(c,l(l({ref:t},h),{},{components:a})):n.createElement(c,l({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={},l=void 0,i={unversionedId:"kashi/getting-started",id:"kashi/getting-started",title:"getting-started",description:"Overview",source:"@site/docs/kashi/getting-started.mdx",sourceDirName:"kashi",slug:"/kashi/getting-started",permalink:"/docs/kashi/getting-started",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/kashi/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sushi Contracts Deployments",permalink:"/docs/deployments"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"<strong>Table of content</strong>",id:"table-of-content",level:3},{value:"<strong>Lending and borrowing in DeFi</strong>",id:"lending-and-borrowing-in-defi",level:2},{value:"<strong>What is Kashi?</strong>",id:"what-is-kashi",level:2},{value:"<strong>How is Kashi different from other lending platforms?</strong>",id:"how-is-kashi-different-from-other-lending-platforms",level:2},{value:"<strong>How to lend on Kashi</strong>",id:"how-to-lend-on-kashi",level:3},{value:"<strong>How to borrow on Kashi ?</strong>",id:"how-to-borrow-on-kashi-",level:3},{value:"<strong>How to leverage on Kashi ?</strong>",id:"how-to-leverage-on-kashi-",level:3},{value:"<strong>How to repay on Kashi</strong>",id:"how-to-repay-on-kashi",level:3}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lending and borrowing use overcollaterization."),(0,o.kt)("li",{parentName:"ul"},"Kashi allows anyone to lend and take loans without the need for third party\n(other than bots)."),(0,o.kt)("li",{parentName:"ul"},"It is gas efficient and generate double yield thanks\nto\xa0",(0,o.kt)("a",{parentName:"li",href:"https://www.notion.so/What-is-Bentobox-9bfc54d8f79347bdbe7552d673868a95"},"BentoBox"),"."),(0,o.kt)("li",{parentName:"ul"},"Isolated markets allowing permissionless listing of assets and collaterals."),(0,o.kt)("li",{parentName:"ul"},"Elastic interest rates targeting 70-80% utilization."),(0,o.kt)("li",{parentName:"ul"},"Allows you to lend, borrow and leverage easily.")),(0,o.kt)("h3",{id:"table-of-content"},(0,o.kt)("strong",{parentName:"h3"},"Table of content")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction to lending and borrowing in DeFi"),(0,o.kt)("li",{parentName:"ul"},"What is Kashi?"),(0,o.kt)("li",{parentName:"ul"},"How is Kashi different from other lending platforms?"),(0,o.kt)("li",{parentName:"ul"},"How to lend on Kashi"),(0,o.kt)("li",{parentName:"ul"},"How to borrow on Kashi"),(0,o.kt)("li",{parentName:"ul"},"How to leverage on Kashi"),(0,o.kt)("li",{parentName:"ul"},"How to repay on Kashi"),(0,o.kt)("li",{parentName:"ul"},"FAQ")),(0,o.kt)("h2",{id:"lending-and-borrowing-in-defi"},(0,o.kt)("strong",{parentName:"h2"},"Lending and borrowing in DeFi")),(0,o.kt)("p",null,"If you are new to DeFi,you may wonder how can people lend and ensure that they\nwill get their assets back?"),(0,o.kt)("p",null,"Most lending protocols in DeFi use the same system: overcollateralized loans."),(0,o.kt)("p",null,"This means that borrowers need to lock a collateral in the system to be able to\nborrow, this collateral needs to have a value superior than the loan."),(0,o.kt)("p",null,"For example, Alice can borrow 100$ of USDC if she locks 150$ of ETH in the\nprotocol. Then if the collateral value of Alice falls under the value of her\nloan, her collateral will be sold against the asset she borrowed and the lender\nwill be repaid by the protocol. This is called liquidation."),(0,o.kt)("p",null,"So if we take our previous example: if ETH collateral value drops close to\n100$, the protocol will sell it to repay the user that lent 100$ of USDC to\nAlice."),(0,o.kt)("p",null,"Usually the liquidation happens way before the collateral value goes under the\nloan value, usually 80% is the maximum, we call it LTV ",(0,o.kt)("em",{parentName:"p"},"(loan to value.)")," This\nmeans that if the loan value if over 80% of the collateral value, collateral\nwill be liquidated."),(0,o.kt)("p",null,"This liquidations are called in by liquidation bots that monitor the protocol\nearning a small fee when they do."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/zskJsKg.png",alt:"https://i.imgur.com/zskJsKg.png"})),(0,o.kt)("p",null,"This systems allows anyone to borrow and lend from anywhere in the world,\nwithout the need for third party (other than bots), everything working thanks to\nsmart contracts."),(0,o.kt)("h2",{id:"what-is-kashi"},(0,o.kt)("strong",{parentName:"h2"},"What is Kashi?")),(0,o.kt)("p",null,"Kashi is a lending and margin trading platform, built on\nthe\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/What-is-BentoBox-7e640bbaf82f44d0949fa7f0bc1beec7"},"BentoBox"),",\nthat allows for anyone to create customized and gas-efficient markets for\nlending, borrowing, and collateralizing a variety of DeFi tokens, stable coins,\nand synthetic assets. Kashi\u2019s broad diversity of tokens is supported through the\nuse of a unique isolated market framework. Unlike traditional DeFi money markets\nwhere high-risk assets can introduce risk to the entire protocol, in Kashi, each\nmarket is entirely separate (similar to the Sushiswap DEX), meaning the risk of\nassets within one lending market has no effect over the risk of another lending\nmarket."),(0,o.kt)("p",null,"Traditional lending projects have permitted users to add liquidity into a\npool-based system. In these systems, if one of the assets were to drop in price\nfaster than liquidators could react, every user and every asset would be\nnegatively impacted. In this sense, the total risk of pool-based platforms\ndetermined largely by the riskiest asset listed on the platform. This risk\nincreases with every extra asset that is added, leading to a very limited choice\nin assets on most platforms. Kashi\u2019s unique design enables a new kind of lending\nand borrowing. The ability to isolate risks into individual lending markets\nmeans that Kashi can permit users to add any token."),(0,o.kt)("p",null,"In addition, Kashi and SushiSwap together enables users to achieve leverage in\none click, without ever leaving the platform. Users can borrow an asset and swap\nit instanlty against more collateral, thus leveraging a long on the collateral."),(0,o.kt)("h2",{id:"how-is-kashi-different-from-other-lending-platforms"},(0,o.kt)("strong",{parentName:"h2"},"How is Kashi different from other lending platforms?")),(0,o.kt)("p",null,"The main difference is that Kashi uses lending markets, and isolated risk\nmarkets, while other lending platforms both calculate risks globally, such that\nthe solvency of any token can affect the solvency of the whole platform. One\nimportant consequence of using isolated risk markets is that Kashi is able to\nallow any token to be listed. Another important consequence is that an elastic\ninterest rate is used to incentivize liquidity in a certain range. Yet another\nconsequence of lending pairs and isolated risk markets is that\nKashi\u2019s\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/What-is-an-oracle-b94885ed0a9a4de88a2e7261190cf8a4"},"oracles"),"\xa0need\nto be customizable to provide price feeds for infinitely many tokens."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature:"),(0,o.kt)("th",{parentName:"tr",align:null},"Aave, Compound, and others:"),(0,o.kt)("th",{parentName:"tr",align:null},"Kashi Lending:"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Markets"),(0,o.kt)("td",{parentName:"tr",align:null},"Large pool with a variety of tokens"),(0,o.kt)("td",{parentName:"tr",align:null},"A market is one asset and one collateral token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Risk"),(0,o.kt)("td",{parentName:"tr",align:null},"Systemic risk, each token can cripple the system"),(0,o.kt)("td",{parentName:"tr",align:null},"Isolated risk in each market")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Assets listed"),(0,o.kt)("td",{parentName:"tr",align:null},"\u201cCompany\u201d/DAO decides if/when assets get listed"),(0,o.kt)("td",{parentName:"tr",align:null},"Users can create any markets they want")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interest rate"),(0,o.kt)("td",{parentName:"tr",align:null},"Fixed curve that needs manual adjustment"),(0,o.kt)("td",{parentName:"tr",align:null},"Elastic interest rates responding to supply and demand")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Oracles"),(0,o.kt)("td",{parentName:"tr",align:null},"Chosen/maintained by the \u201cCompany\u201d/DAO"),(0,o.kt)("td",{parentName:"tr",align:null},"Open to use any oracle, user decides")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Liquidations"),(0,o.kt)("td",{parentName:"tr",align:null},"Profits go to the liquidator"),(0,o.kt)("td",{parentName:"tr",align:null},"Liquidity providers can get the profits")))),(0,o.kt)("h3",{id:"how-to-lend-on-kashi"},(0,o.kt)("strong",{parentName:"h3"},"How to lend on Kashi")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you are new to Kashi, it is recommended to use a small amount and a cheap\nchain so you can afford mistakes. In this article, we will use Kashi\non\xa0",(0,o.kt)("a",{parentName:"em",href:"http://polygon.technology"},"Polygon"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\xa0Go to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://app.sushi.com/lend"},"https://app.sushi.com/lend"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:"),"\xa0Select a pair with the asset you want to lend as well as a\ncollateral you trust."),(0,o.kt)("aside",null,"\u26a0\ufe0f The collateral selection is important, if you select a collateral that can drop in price really fast, liquidation bots may not have the time to liquidate borrowers before their collateral value is under their loan value resulting in a part of your funds being loss. So if you are new to DeFi, select a collateral with high market share (~top 50 marketcap)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this example we will lend USDC on the WMATIC-USDC pair.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/na4axD1.png",alt:"https://i.imgur.com/na4axD1.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," ","*","*","Once you clicked on the pair, you\u2019ll be redirected to a new\ninterface, If its your first time using Kashi, you\u2019ll have\nto\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/What-is-a-token-approval-decfbde1fa3443e1a96218186f662219"},"approve"),"\xa0it."),(0,o.kt)("p",null,"Then select wallet or bentobox depending where your USDC comes from, enter an\namount and click on deposit."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/4GksFL3.png",alt:"https://i.imgur.com/4GksFL3.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/anzDuhK.png",alt:"https://i.imgur.com/anzDuhK.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good job ! Check your wallet\non\xa0",(0,o.kt)("a",{parentName:"strong",href:"https://www.notion.so/Getting-started-with-Kashi-c4593b374d67474386ecec3d1073a48e"},"etherscan"),",\nyou should have received KMP tokens, they reprensent your underlying liquidity\nlent. You\u2019ll need them to get you liquidity back.")," \u2705"),(0,o.kt)("h3",{id:"how-to-borrow-on-kashi-"},(0,o.kt)("strong",{parentName:"h3"},"How to borrow on Kashi ?")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you are new to Kashi, it is recommended to use a small amount and a cheap\nchain so you can afford mistakes. In this article, we will use Kashi\non\xa0",(0,o.kt)("a",{parentName:"em",href:"http://polygon.technology"},"Polygon."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\xa0Go to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://app.sushi.com/borrow"},"https://app.sushi.com/borrow"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:"),"\xa0Select a pair with the collateral you have and the asset you want to\nborrow."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this example we will use WMATIC as collateral and borrow USDC.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/nSXshKF.png",alt:"https://i.imgur.com/nSXshKF.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:"),"\xa0Once you clicked on the pair, you\u2019ll be redirected to a new\ninterface, If its your first time using Kashi, you\u2019ll have\nto\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/What-is-a-token-approval-decfbde1fa3443e1a96218186f662219"},"approve"),"\xa0it."),(0,o.kt)("p",null,"Then select wallet or Bentobox depending where your WMATIC comes from, enter an\namount to add as collateral and how much you want to borrow and select wallet or\nBentobox depending where the borrowed assets should be sent then click on\nborrow."),(0,o.kt)("aside",null,"\u26a0\ufe0f *Do not click on the multipliers nor \u201cSwap borrowed USDC for WMATIC collateral\u201d, it will swap the borrowed assets against more collateral. This means going long/leverage your collateral, see more in the next part :\xa0How to leverage with Kashi*"),(0,o.kt)("aside",null,"\ud83d\udca1 *A checkbox with \u201cUpdate exchange rate from the oracle\u201d might appear, you can check it if you want, it will slighly increase the maximum borrowable amount.*"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/omTIocW.png",alt:"https://i.imgur.com/omTIocW.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good job ! Check your wallet or Bentobox depending where you sent the borrowed\nassets, they should appear there."),"\xa0\u2705"),(0,o.kt)("aside",null,"\u26a0\ufe0f Keep the percentage under \u201cBorrowed\u201d below 100% (75% of your collateral value) if you don\u2019t want to be liquidated."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/GxlHkrJ.png",alt:"https://i.imgur.com/GxlHkrJ.png"})),(0,o.kt)("h3",{id:"how-to-leverage-on-kashi-"},(0,o.kt)("strong",{parentName:"h3"},"How to leverage on Kashi ?")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you are new to Kashi, it is recommended to use a small amount and a cheap\nchain so you can afford mistakes. In this article, we will use Kashi\non\xa0",(0,o.kt)("a",{parentName:"em",href:"http://polygon.technology"},"Polygon"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\xa0Go to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://app.sushi.com/borrow"},"https://app.sushi.com/borrow"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:"),"\xa0Select a pair with the collateral you want to long and the asset you\nwant to borrow (token to short)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this example we will put WMATIC as collateral and borrow USDC.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/nSXshKF.png",alt:"https://i.imgur.com/nSXshKF.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:"),"\xa0Once you clicked on the pair, you\u2019ll be redirected to a new\ninterface, If its your first time using Kashi, you\u2019ll have\nto\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/What-is-a-token-approval-decfbde1fa3443e1a96218186f662219"},"approve"),"\xa0it."),(0,o.kt)("p",null,"Then select wallet or Bentobox depending where your WMATIC tokens come from,\nenter an amount to add as collateral and then select a multiplier. It will\nborrow the asset and swap it against more collateral."),(0,o.kt)("aside",null,"\ud83d\udca1 *A checkbox with \u201cUpdate exchange rate from the oracle\u201d might appear, you can check it if you want, it will slighly increase the maximum borrowable amount.*"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/dFvNT4d.png",alt:"https://i.imgur.com/dFvNT4d.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good job ! You are now longing your collateral and shorting the asset\nborrowed.")),(0,o.kt)("aside",null,"\u26a0\ufe0f **Keep the percentage under \u201cBorrowed\u201d below 100% (75% of your collateral value) if you don\u2019t want to be liquidated.**"),(0,o.kt)("h3",{id:"how-to-repay-on-kashi"},(0,o.kt)("strong",{parentName:"h3"},"How to repay on Kashi")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:"),"\xa0Go to\xa0",(0,o.kt)("a",{parentName:"p",href:"https://app.sushi.com/borrow"},"https://app.sushi.com/borrow"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:"),"\xa0Select the pair where your loan is and click on \u201cRepay\u201d."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this example its WMATIC as collateral and a USDC loan.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1mp8oVc.png",alt:"https://i.imgur.com/1mp8oVc.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mPwMIPn.png",alt:"https://i.imgur.com/mPwMIPn.png"})),(0,o.kt)("p",null,"There is two way to repay your loan :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Repay with the asset borrowed."),(0,o.kt)("li",{parentName:"ul"},"Repay with collateral : this will sell a part of your collateral to payback\nthe loan and will send the remaining collateral balance to BentoBox.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.1:"),"\xa0To repay with the borrowed asset, you\u2019ll need to have the asset in\nyour wallet or in BentoBox."),(0,o.kt)("p",null,"Enter the amount you want to repay and from where (BentoBox or wallet), enter\nthe amount of collateral you want to remove and to where (BentoBox or wallet)\nthen click on \u201crepay and remove collateral\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/b35pLl3.png",alt:"https://i.imgur.com/b35pLl3.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.2:"),"\xa0To repay with your collateral, simply check \u201cSwap\ncollateral\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"COLLATERAL NAME")," (WMATIC in this case) for ",(0,o.kt)("inlineCode",{parentName:"p"},"ASSET NAME"),' (USDC in\nthis case) and repay" then click on \u201cAutomatic repay\u201d'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ngy47fU.png",alt:"https://i.imgur.com/ngy47fU.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good job ! Check your wallet or Bentobox depending where you sent the\ncollateral (BentoBox if used repay with collateral), tokens should appear\nthere.")," \u2705"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"})))}u.isMDXComponent=!0}}]);