"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Double Rewards: A Developer's Guide - Dev Hub",d={unversionedId:"onsen/masterchef/guide_doublerewards",id:"onsen/masterchef/guide_doublerewards",title:"Double Rewards: A Developer's Guide - Dev Hub",description:"In a dependent implementation of the rewarder contract, the additional rewards a",source:"@site/docs/onsen/masterchef/guide_doublerewards.mdx",sourceDirName:"onsen/masterchef",slug:"/onsen/masterchef/guide_doublerewards",permalink:"/docs/onsen/masterchef/guide_doublerewards",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/onsen/masterchef/guide_doublerewards.mdx",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1646890121,formattedLastUpdatedAt:"3/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"MasterChef V2 - Sushi",permalink:"/docs/onsen/masterchef/Introduction"},next:{title:"MasterChefV2",permalink:"/docs/onsen/masterchef/masterchef2"}},s={},l=[{value:"Independent (Complex)",id:"independent-complex",level:3},{value:"Getting Your Contract Whitelisted",id:"getting-your-contract-whitelisted",level:3},{value:"Dependent/Simple Rewarder",id:"dependentsimple-rewarder",level:4},{value:"Independent/Complex Rewarder",id:"independentcomplex-rewarder",level:4}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"double-rewards-a-developers-guide---dev-hub"},"Double Rewards: A Developer's Guide - Dev Hub"),(0,a.kt)("p",null,"In a dependent implementation of the rewarder contract, the additional rewards a\nproject can offer are dependent on the amount of $SUSHI that is allocated to\ntheir pool (15:20: Keno describes the example simple contract). This means that\nprojects using dependent rewarder contracts must have an allocation of $SUSHI\ngiven, or else their additional liquidity mining rewards will invariably be 0.\nThat said, the dependent implementation of the rewarder contract is much\nsimpler, less time consuming to develop, and cheaper for the end user. So, the\ndependent rewarder contract may be ideal for projects that know in advance they\nwill be receiving an allocation of $SUSHI incentives."),(0,a.kt)("p",null,"Dependent rewarder contracts are specified by setting a rewardMultiplier (15:51\nKeno describes the rewardMultiplier). The rewardMultiplier is equal to the\namount the partner project would like their rewardToken to be dispersed relative\nto the $SUSHI rewards in their pool. In the simplest case, this multiplier would\nbe 1, which would entail 1:1 $SUSHI:rewardToken rewards. The rewardToken balance\nis dispersed in addition to the $SUSHI already being given out. Therefore, in a\ndependent implementation of a rewarder contract, the project in question simply\nneeds to keep an artificial balance of the rewardToken in MCV2, that is\ncalculated and dispersed to the user through the rewarder interface."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In a dependent implementation of the rewarder contract, the additional rewards a\nproject can offer are dependent on the amount of $SUSHI that is allocated to\ntheir pool (15:20: Keno describes the example simple contract). This means that\nprojects using dependent rewarder contracts must have an allocation of $SUSHI\ngiven, or else their additional liquidity mining rewards will invariably be 0.\nThat said, the dependent implementation of the rewarder contract is much\nsimpler, less time consuming to develop, and cheaper for the end user. So, the\ndependent rewarder contract may be ideal for projects that know in advance they\nwill be receiving an allocation of $SUSHI incentives. Dependent rewarder\ncontracts are specified by setting a rewardMultiplier (15:51 Keno describes the\nrewardMultiplier). The rewardMultiplier is equal to the amount the partner\nproject would like their rewardToken to be dispersed relative to the $SUSHI\nrewards in their pool. In the simplest case, this multiplier would be 1, which\nwould entail 1:1 $SUSHI:rewardToken rewards. The rewardToken balance is\ndispersed in addition to the $SUSHI already being given out. Therefore, in a\ndependent implementation of a rewarder contract, the project in question simply\nneeds to keep an artificial balance of the rewardToken in MCV2, that is\ncalculated and dispersed to the user through the rewarder interface."),(0,a.kt)("h3",{id:"independent-complex"},"Independent (Complex)"),(0,a.kt)("p",null,"An independent implementation of the rewarder contract is more customizable, but\nit is more difficult and more expensive for the end user, because it attaches\nmore storage slots. The idea behind the independent rewarder contract is that it\nallows projects to distribute rewards at a rate that is determined by an\nindependent variable (time-based logic or block-based logic), and the number of\nSLP tokens the user has (17:42: Keno describes the types of logic available for\ncomplex rewarders). The developer can use any baseline to calculate the reward\nmultiplier independent of their $SUSHI allocation. Projects using the\nindependent rewarder can add rewards to a SushiSwap pool without having any\nallocation of $SUSHI at all. The following values are passed through the\nrewarder contract to determine the calculations for the user\u2019s rewards: the pool\nID, the user\u2019s address, the recipient\u2019s address, the pending $SUSHI amount, and\nthe new amount of LP tokens the user has after the event in question. In the\nexample complex rewarder given in the first paragraph, a hybrid model is used to\nkey into some of the storage advantages of MCV2, which allows for onSushiRewards\nto track any changes and harvest at the same time, which lowers the overhead\naccounting costs to a degree (18:36: Keno describes the hybrid model used)."),(0,a.kt)("h3",{id:"getting-your-contract-whitelisted"},"Getting Your Contract Whitelisted"),(0,a.kt)("p",null,"After the status of the allocations for a project has been confirmed by the\nSushiSwap team, you can get started. If you need the pool id on MasterChefV2, we\ncan provide you with it in advance."),(0,a.kt)("h4",{id:"dependentsimple-rewarder"},"Dependent/Simple Rewarder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the reward token multiplier indicating how many tokens are given out\nper sushi token earned, the reward token and MasterChefV2."),(0,a.kt)("li",{parentName:"ol"},"Edit the Name to reflect your project e.g. SampleProjectRewarder."),(0,a.kt)("li",{parentName:"ol"},"Deploy the rewarder and provide the SushiSwap team with the Rewarder address"),(0,a.kt)("li",{parentName:"ol"},"Fund the Rewarder by sending the tokens selected in step 1 to the contract.")),(0,a.kt)("h4",{id:"independentcomplex-rewarder"},"Independent/Complex Rewarder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select tokens distributed per block, the reward token and MasterChefV2."),(0,a.kt)("li",{parentName:"ol"},"Edit the Name to reflect your project e.g. SampleProjectRewarder."),(0,a.kt)("li",{parentName:"ol"},"Deploy the ComplexRewarder and provide the SushiSwap team with the Rewarder\naddress."),(0,a.kt)("li",{parentName:"ol"},"Fund the Rewarder by sending the tokens selected in step 1 to the contract.")))}p.isMDXComponent=!0}}]);