"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[6780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(i,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8946:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>s,toc:()=>i,default:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="Development",s={unversionedId:"bentobox/DEVELOPMENT",id:"bentobox/DEVELOPMENT",isDocsHomePage:!1,title:"Development",description:"Local environment",source:"@site/docs/bentobox/DEVELOPMENT.md",sourceDirName:"bentobox",slug:"/bentobox/DEVELOPMENT",permalink:"/docs/bentobox/DEVELOPMENT",editUrl:"https://github.com/manifoldfinance/sushi-doc-portal/edit/master/docs/bentobox/DEVELOPMENT.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/bentobox/DEPLOYMENT"},next:{title:"HISTORY (How it happened)",permalink:"/docs/bentobox/HISTORY"}},i=[{value:"Local environment",id:"local-environment",children:[]},{value:"Mainnet forking",id:"mainnet-forking",children:[]},{value:"Testing",id:"testing",children:[{value:"Single files",id:"single-files",children:[]},{value:"Running Tests on VSCode",id:"running-tests-on-vscode",children:[]}]},{value:"Seeding",id:"seeding",children:[]},{value:"Console",id:"console",children:[]},{value:"Coverage",id:"coverage",children:[]},{value:"Gas Usage",id:"gas-usage",children:[]},{value:"Lint",id:"lint",children:[]},{value:"Watch",id:"watch",children:[]}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development"},"Development"),(0,a.kt)("h2",{id:"local-environment"},"Local environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx hardhat node\n")),(0,a.kt)("h2",{id:"mainnet-forking"},"Mainnet forking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx hardhat node --fork <https://eth-mainnet.alchemyapi.io/v2/API_KEY>\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/mainnet-forking.html#mainnet-forking"},"https://hardhat.org/guides/mainnet-forking.html#mainnet-forking")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")),(0,a.kt)("h3",{id:"single-files"},"Single files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test test/MasterChef.test.js\n")),(0,a.kt)("p",null,"Mocha & Chai with Waffle matchers (these are really useful)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum-waffle.readthedocs.io/en/latest/matchers.html"},"https://ethereum-waffle.readthedocs.io/en/latest/matchers.html")),(0,a.kt)("h3",{id:"running-tests-on-vscode"},"Running Tests on VSCode"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/vscode-tests.html#running-tests-on-visual-studio-code"},"https://hardhat.org/guides/vscode-tests.html#running-tests-on-visual-studio-code")),(0,a.kt)("h2",{id:"seeding"},"Seeding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx hardhat run --network localhost scripts/seed.js\n")),(0,a.kt)("h2",{id:"console"},"Console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn console\n\nnpx hardhat --network localhost console\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/hardhat-console.html"},"https://hardhat.org/guides/hardhat-console.html")),(0,a.kt)("h2",{id:"coverage"},"Coverage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test:coverage\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/solidity-coverage.html#tasks"},"https://hardhat.org/plugins/solidity-coverage.html#tasks")),(0,a.kt)("h2",{id:"gas-usage"},"Gas Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test:gas\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cgewecke/hardhat-gas-reporter"},"https://github.com/cgewecke/hardhat-gas-reporter")),(0,a.kt)("h2",{id:"lint"},"Lint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn lint\n")),(0,a.kt)("h2",{id:"watch"},"Watch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx hardhat watch compile\n")))}p.isMDXComponent=!0}}]);