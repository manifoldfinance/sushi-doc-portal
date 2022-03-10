"use strict";(self.webpackChunk_sushiswap_kitchen_docs=self.webpackChunk_sushiswap_kitchen_docs||[]).push([[9817],{4067:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(650);const i="breadcrumbsContainer_Xlws",l="breadcrumbsItemLink_e5ie";var s=n(6010),c=n(9960),o=n(4996);function m(e){let{children:t,href:n}=e;const r=(0,s.Z)("breadcrumbs__link",l);return n?a.createElement(c.Z,{className:r,href:n},t):a.createElement("span",{className:r},t)}function d(e){let{children:t,active:n}=e;return a.createElement("li",{className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t)}function u(){const e=(0,o.Z)("/");return a.createElement(d,null,a.createElement(m,{href:e},"\ud83c\udfe0"))}function h(){const e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,s.Z)(r.kM.docs.docBreadcrumbs,i),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs"},t&&a.createElement(u,null),e.map(((t,n)=>a.createElement(d,{key:n,active:n===e.length-1},a.createElement(m,{href:t.href},t.label)))))):null}},8507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(7294),r=n(650),i=n(9960),l=n(6010);const s="cardContainer_woeA",c="cardContainerLink_iOSj",o="cardTitle_pNjP",m="cardDescription_qC_k";var d=n(3919),u=n(5999);function h(e){let{href:t,children:n}=e;const r=(0,l.Z)("card margin-bottom--lg padding--lg",s,t&&c);return t?a.createElement(i.Z,{href:t,className:r},n):a.createElement("div",{className:r},n)}function v(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(h,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:r},n," ",r),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:i},i))}function b(e){let{item:t}=e;const n=(0,r.Wl)(t);return a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function E(e){var t;let{item:n}=e;const i=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:i,title:n.label,description:null==l?void 0:l.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(E,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){let{items:t}=e;return a.createElement("div",{className:"row"},t.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6"},a.createElement(g,{item:e})))))}var f=n(5214),Z=n(1217),N=n(4474),_=n(7597),k=n(4067),L=n(9649),T=n(4996);const w="generatedIndexPage_vzzw",y="title_qBh7";function x(e){let{categoryGeneratedIndex:t}=e;const n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(Z.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,T.Z)(t.image)}),a.createElement("div",{className:w},a.createElement(N.Z,null),a.createElement(k.Z,null),a.createElement(_.Z,null),a.createElement("header",null,a.createElement(L.Z,{as:"h1",className:y},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(p,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(f.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},5214:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(5999),l=n(9960);function s(e){const{permalink:t,title:n,subLabel:a}=e;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function c(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(5999),i=n(650),l=n(6010);function s(e){let{className:t}=e;const n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4474:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294),r=n(2263),i=n(9960),l=n(5999),s=n(5551),c=n(650),o=n(6010);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){const t=m[e.versionMetadata.banner];return a.createElement(t,e)}function u(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,r.Z)(),{pluginId:l}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,c.J)(l),{latestDocSuggestion:h,latestVersionSuggestion:v}=(0,s.Jo)(l),b=null!=h?h:(E=v).docs.find((e=>e.id===E.mainDocId));var E;return a.createElement("div",{className:(0,o.Z)(t,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:v.label,to:b.path,onClick:()=>m(v.name)})))}function v(e){let{className:t}=e;const n=(0,c.E6)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},9649:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),l=n(5999),s=n(650);const c="anchorWithStickyNavbar_mojV",o="anchorWithHideOnScrollNavbar_R0VQ";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.LU)();return n?r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",{[o]:d,[c]:!d}),id:n}),m.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,m)}function d(e){let{as:t,...n}=e;return"h1"===t?r.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):r.createElement(m,(0,a.Z)({as:t},n))}}}]);