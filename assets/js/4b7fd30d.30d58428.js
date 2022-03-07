"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[8101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||d;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<d;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const d={},o=void 0,i={unversionedId:"bentobox/SushiToken",id:"bentobox/SushiToken",title:"SushiToken",description:"SushiToken",source:"@site/docs/bentobox/SushiToken.md",sourceDirName:"bentobox",slug:"/bentobox/SushiToken",permalink:"/docs/bentobox/SushiToken",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/SushiToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SushiRoll",permalink:"/docs/bentobox/SushiRoll"},next:{title:"BaseBoringBatchable",permalink:"/docs/bentobox/bentobox/BaseBoringBatchable"}},s={},l=[{value:"<code>SushiToken</code>",id:"sushitoken",level:2},{value:"<code>mint(address _to, uint256 _amount)</code> (public)",id:"mintaddress-_to-uint256-_amount-public",level:3},{value:"<code>delegates(address delegator) \u2192 address</code> (external)",id:"delegatesaddress-delegator--address-external",level:3},{value:"<code>delegate(address delegatee)</code> (external)",id:"delegateaddress-delegatee-external",level:3},{value:"<code>delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)</code> (external)",id:"delegatebysigaddress-delegatee-uint256-nonce-uint256-expiry-uint8-v-bytes32-r-bytes32-s-external",level:3},{value:"<code>getCurrentVotes(address account) \u2192 uint256</code> (external)",id:"getcurrentvotesaddress-account--uint256-external",level:3},{value:"<code>getPriorVotes(address account, uint256 blockNumber) \u2192 uint256</code> (external)",id:"getpriorvotesaddress-account-uint256-blocknumber--uint256-external",level:3},{value:"<code>_delegate(address delegator, address delegatee)</code> (internal)",id:"_delegateaddress-delegator-address-delegatee-internal",level:3},{value:"<code>_moveDelegates(address srcRep, address dstRep, uint256 amount)</code> (internal)",id:"_movedelegatesaddress-srcrep-address-dstrep-uint256-amount-internal",level:3},{value:"<code>_writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes)</code> (internal)",id:"_writecheckpointaddress-delegatee-uint32-ncheckpoints-uint256-oldvotes-uint256-newvotes-internal",level:3},{value:"<code>safe32(uint256 n, string errorMessage) \u2192 uint32</code> (internal)",id:"safe32uint256-n-string-errormessage--uint32-internal",level:3},{value:"<code>getChainId() \u2192 uint256</code> (internal)",id:"getchainid--uint256-internal",level:3},{value:"<code>DelegateChanged(address delegator, address fromDelegate, address toDelegate)</code>",id:"delegatechangedaddress-delegator-address-fromdelegate-address-todelegate",level:3},{value:"<code>DelegateVotesChanged(address delegate, uint256 previousBalance, uint256 newBalance)</code>",id:"delegatevoteschangedaddress-delegate-uint256-previousbalance-uint256-newbalance",level:3},{value:"<code>Checkpoint</code>",id:"checkpoint",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sushitoken"},(0,r.kt)("inlineCode",{parentName:"h2"},"SushiToken")),(0,r.kt)("h3",{id:"mintaddress-_to-uint256-_amount-public"},(0,r.kt)("inlineCode",{parentName:"h3"},"mint(address _to, uint256 _amount)")," (public)"),(0,r.kt)("p",null,"Creates ",(0,r.kt)("inlineCode",{parentName:"p"},"_amount")," token to ",(0,r.kt)("inlineCode",{parentName:"p"},"_to"),". Must only be called by the owner (MasterChef)."),(0,r.kt)("h3",{id:"delegatesaddress-delegator--address-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"delegates(address delegator) \u2192 address")," (external)"),(0,r.kt)("p",null,"Delegate votes from ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatee")),(0,r.kt)("h3",{id:"delegateaddress-delegatee-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"delegate(address delegatee)")," (external)"),(0,r.kt)("p",null,"Delegate votes from ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatee")),(0,r.kt)("h3",{id:"delegatebysigaddress-delegatee-uint256-nonce-uint256-expiry-uint8-v-bytes32-r-bytes32-s-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)")," (external)"),(0,r.kt)("p",null,"Delegates votes from signatory to ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatee")),(0,r.kt)("h3",{id:"getcurrentvotesaddress-account--uint256-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"getCurrentVotes(address account) \u2192 uint256")," (external)"),(0,r.kt)("p",null,"Gets the current votes balance for ",(0,r.kt)("inlineCode",{parentName:"p"},"account")),(0,r.kt)("h3",{id:"getpriorvotesaddress-account-uint256-blocknumber--uint256-external"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPriorVotes(address account, uint256 blockNumber) \u2192 uint256")," (external)"),(0,r.kt)("p",null,"Determine the prior number of votes for an account as of a block number"),(0,r.kt)("p",null,"Block number must be a finalized block or else this function will revert to\nprevent misinformation."),(0,r.kt)("h3",{id:"_delegateaddress-delegator-address-delegatee-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"_delegate(address delegator, address delegatee)")," (internal)"),(0,r.kt)("h3",{id:"_movedelegatesaddress-srcrep-address-dstrep-uint256-amount-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"_moveDelegates(address srcRep, address dstRep, uint256 amount)")," (internal)"),(0,r.kt)("h3",{id:"_writecheckpointaddress-delegatee-uint32-ncheckpoints-uint256-oldvotes-uint256-newvotes-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"_writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes)")," (internal)"),(0,r.kt)("h3",{id:"safe32uint256-n-string-errormessage--uint32-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"safe32(uint256 n, string errorMessage) \u2192 uint32")," (internal)"),(0,r.kt)("h3",{id:"getchainid--uint256-internal"},(0,r.kt)("inlineCode",{parentName:"h3"},"getChainId() \u2192 uint256")," (internal)"),(0,r.kt)("h3",{id:"delegatechangedaddress-delegator-address-fromdelegate-address-todelegate"},(0,r.kt)("inlineCode",{parentName:"h3"},"DelegateChanged(address delegator, address fromDelegate, address toDelegate)")),(0,r.kt)("p",null,"An event thats emitted when an account changes its delegate"),(0,r.kt)("h3",{id:"delegatevoteschangedaddress-delegate-uint256-previousbalance-uint256-newbalance"},(0,r.kt)("inlineCode",{parentName:"h3"},"DelegateVotesChanged(address delegate, uint256 previousBalance, uint256 newBalance)")),(0,r.kt)("p",null,"An event thats emitted when a delegate account's vote balance changes"),(0,r.kt)("h3",{id:"checkpoint"},(0,r.kt)("inlineCode",{parentName:"h3"},"Checkpoint")),(0,r.kt)("p",null,"uint32 fromBlock"),(0,r.kt)("p",null,"uint256 votes"))}c.isMDXComponent=!0}}]);