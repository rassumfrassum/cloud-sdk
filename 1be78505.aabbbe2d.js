(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),l=a.n(n),r=a(163),c=a(164),s=a(47),o=a(175),i=a(1),m=a(166),u=a.n(m),b=a(173),d=a(174),h=a(167),g=a(169),f=a(109),E=a.n(f);function k({item:e,onItemClick:t,collapsible:a}){const{items:r,href:c,label:s,type:o}=e,[m,b]=Object(n.useState)(e.collapsed),[d,f]=Object(n.useState)(null);e.collapsed!==d&&(f(e.collapsed),b(e.collapsed));const E=Object(n.useCallback)(e=>{e.preventDefault(),b(e=>!e)});switch(o){case"category":return r.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":m}),key:s},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?E:void 0},s),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(k,{key:e.label,item:e,onItemClick:t,collapsible:a}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(h.a,Object(i.a)({className:"menu__link",to:c},Object(g.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),s))}}var p=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:r,hideOnScroll:s=!1}={}}}={},isClient:o}=Object(c.a)(),{logoLink:m,logoLinkProps:g,logoImageUrl:f,logoAlt:p}=Object(d.a)(),{docsSidebars:v,path:_,sidebar:j,sidebarCollapsible:O}=e;if(Object(b.a)(t),!j)return null;const N=v[j];if(!N)throw new Error(`Cannot find the sidebar "${j}" in the sidebar config!`);return O&&N.forEach(e=>function e(t,a){const{items:n,href:l,type:r}=t;switch(r){case"category":{const l=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!l,l}case"link":default:return l===a}}(e,_)),l.a.createElement("div",{className:E.a.sidebar},s&&l.a.createElement(h.a,Object(i.a)({className:E.a.sidebarLogo,to:m},g),null!=f&&l.a.createElement("img",{key:o,src:f,alt:p}),null!=r&&l.a.createElement("strong",null,r)),l.a.createElement("div",{className:u()("menu","menu--responsive",E.a.menu,{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?l.a.createElement("span",{className:u()(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},N.map(e=>l.a.createElement(k,{key:e.label,item:e,onItemClick:()=>{a(!1)},collapsible:O})))))},v=a(182),_=a(189),j=a(176),O=a(110),N=a.n(O);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,i=t.routes.find(e=>Object(j.a)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:b}=a,d=m[i.path],{siteConfig:{themeConfig:h={}}={},isClient:g}=Object(c.a)(),{sidebarCollapsible:f=!0}=h;return 0===Object.keys(i).length?l.a.createElement(_.default,e):l.a.createElement(o.a,{version:b,key:g},l.a.createElement("div",{className:N.a.docPage},d&&l.a.createElement("div",{className:N.a.docSidebarContainer},l.a.createElement(p,{docsSidebars:u,path:i.path,sidebar:d,sidebarCollapsible:f})),l.a.createElement("main",{className:N.a.docMainContainer},l.a.createElement(r.a,{components:v.a},Object(s.a)(t.routes)))))}},168:function(e,t,a){"use strict";var n=a(0),l=a(170);t.a=function(){return Object(n.useContext)(l.a)}},170:function(e,t,a){"use strict";var n=a(0);const l=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=l},172:function(e,t,a){"use strict";var n=a(0);const l=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=l},173:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},174:function(e,t,a){"use strict";var n=a(164),l=a(168),r=a(165),c=a(169);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(l.a)(),s=t.href||e;let o={};t.target?o={target:t.target}:Object(c.a)(s)||(o={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:s,logoLinkProps:o,logoImageUrl:Object(r.a)(i),logoAlt:t.alt}}},175:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(178),c=a(169),s=a(164),o=a(165);const i="",m="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(s.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),l=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),r=Object(n.useCallback)(()=>{a(i),l(i)},[]),c=Object(n.useCallback)(()=>{a(m),l(m)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?m:i)})},[]),{isDarkTheme:t===m,setLightTheme:r,setDarkTheme:c}},b=a(170);var d=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return l.a.createElement(b.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var h=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}},g=a(172);var f=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=h();return l.a.createElement(g.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},E=a(93),k=a.n(E);var p=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(s.a)(),{id:t,content:a,backgroundColor:r,textColor:c}=e,[o,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)},[]),!a||o?null:l.a.createElement("div",{className:k.a.announcementBar,style:{backgroundColor:r,color:c},role:"banner"},l.a.createElement("div",{className:k.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("button",{type:"button",className:k.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)},"aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},v=a(1),_=a(166),j=a.n(_),O=a(167),N=a(171),C=a(177),y=a.n(C),w=a(94),S=a.n(w);const L=()=>l.a.createElement("span",{className:j()(S.a.toggle,S.a.moon)}),T=()=>l.a.createElement("span",{className:j()(S.a.toggle,S.a.sun)});var I=function(e){const{isClient:t}=Object(s.a)();return l.a.createElement(y.a,Object(v.a)({disabled:!t,icons:{checked:l.a.createElement(L,null),unchecked:l.a.createElement(T,null)}},e))},x=a(168),B=a(176);var D=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var M=e=>{const[t,a]=Object(n.useState)(!0),[l,r]=Object(n.useState)(!1),[c,s]=Object(n.useState)(0),[o,i]=Object(n.useState)(0),m=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),u=Object(B.b)(),[b,d]=D(u.hash),h=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&a(!0),e<o)return;if(l)return r(!1),a(!1),void s(e);const t=document.documentElement.scrollHeight-o,n=window.innerHeight;c&&e>=c?a(!1):e+n<t&&a(!0),s(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}},[c,o]),Object(n.useEffect)(()=>{e&&(a(!0),d(u.hash))},[u]),Object(n.useEffect)(()=>{e&&b&&r(!0)},[b]),{navbarRef:m,isNavbarVisible:t}},$=a(173),P=a(174);var A=()=>{const{siteConfig:{baseUrl:e,customFields:{logo:t={}}}={}}=Object(s.a)(),{isDarkTheme:a}=Object(x.a)(),n=t.href||e;let l={};t.target?l={target:t.target}:Object(c.a)(n)||(l={rel:"noopener noreferrer",target:"_blank"});const r=t.srcDark&&a?t.srcDark:t.src;return{logoLink:n,logoLinkProps:l,logoImageUrl:Object(o.a)(r),logoAlt:t.alt}},U=a(95),G=a.n(U);function H({activeBasePath:e,to:t,href:a,label:n,position:r,...c}){const s=Object(o.a)(t),i=Object(o.a)(e);return l.a.createElement(O.a,Object(v.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:s,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},c),n)}function R({items:e,position:t,...a}){return e?l.a.createElement("div",{className:j()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},l.a.createElement(H,Object(v.a)({className:"navbar__item navbar__link"},a),a.label),l.a.createElement("ul",{className:"dropdown__menu"},e.map((e,t)=>l.a.createElement("li",{key:t},l.a.createElement(H,Object(v.a)({className:"navbar__item navbar__link"},e)))))):l.a.createElement(H,Object(v.a)({className:"navbar__item navbar__link"},a))}function W({items:e,...t}){return e?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(H,Object(v.a)({className:"menu__link menu__link--sublist"},t),t.label),l.a.createElement("ul",{className:"menu__list"},e.map((e,t)=>l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(H,Object(v.a)({className:"menu__link"},e)))))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(H,Object(v.a)({className:"menu__link"},t)))}var F=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:r=!1}},isClient:c}=Object(s.a)(),[o,i]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!1),{isDarkTheme:b,setLightTheme:d,setDarkTheme:h}=Object(x.a)(),{navbarRef:g,isNavbarVisible:f}=M(a),{logoLink:E,logoLinkProps:k,logoImageUrl:p,logoAlt:_}=Object(P.a)(),C=A();Object($.a)(o);const y=Object(n.useCallback)(()=>{i(!0)},[i]),w=Object(n.useCallback)(()=>{i(!1)},[i]),S=Object(n.useCallback)(e=>e.target.checked?h():d(),[d,h]);return l.a.createElement("nav",{ref:g,className:j()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":o,[G.a.navbarHideable]:a,[G.a.navbarHidden]:!f})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:y,onKeyDown:y},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(O.a,Object(v.a)({className:"navbar__brand",to:E},k),null!=p&&l.a.createElement("img",{key:c,className:"navbar__logo",src:p,alt:_}),null!=e&&l.a.createElement("strong",{className:j()("navbar__title",{[G.a.hideLogoText]:m})},e)),t.filter(e=>"left"===e.position).map((e,t)=>l.a.createElement(R,Object(v.a)({},e,{key:t})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(R,Object(v.a)({},e,{key:t}))),!r&&l.a.createElement(I,{className:G.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:b,onChange:S}),l.a.createElement(N.a,{handleSearchBarToggle:u,isSearchBarExpanded:m}),l.a.createElement(O.a,Object(v.a)({className:j()("navbar__brand",G.a.sapBrand),to:C.logoLink},C.logoLinkProps),null!=C.logoImageUrl&&l.a.createElement("img",{key:c,className:"navbar__logo",src:C.logoImageUrl,alt:C.logoAlt})))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(O.a,Object(v.a)({className:"navbar__brand",onClick:w,to:E},k),null!=p&&l.a.createElement("img",{key:c,className:"navbar__logo",src:p,alt:_}),null!=e&&l.a.createElement("strong",{className:"navbar__title"},e)),!r&&o&&l.a.createElement(I,{"aria-label":"Dark mode toggle in sidebar",checked:b,onChange:S})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>l.a.createElement(W,Object(v.a)({},e,{onClick:w,key:t}))))))))},V=a(96),J=a.n(V);function K({to:e,href:t,label:a,...n}){const r=Object(o.a)(e);return l.a.createElement(O.a,Object(v.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:r},n),a)}const Y=({url:e,alt:t})=>l.a.createElement("img",{className:"footer__logo",alt:t,src:e});var q=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:c=[],logo:i={}}=n||{},m=Object(o.a)(i.src);return n?l.a.createElement("footer",{className:j()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(K,e)))):null))),(i||r)&&l.a.createElement("div",{className:"text--center"},i&&i.src&&l.a.createElement("div",{className:"margin-bottom--sm"},i.href?l.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:J.a.footerLogoLink},l.a.createElement(Y,{alt:i.alt,url:m})):l.a.createElement(Y,{alt:i.alt,url:m})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};a(97);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:a,title:n,themeConfig:{image:i},url:m}=t,{children:u,title:b,noFooter:h,description:g,image:E,keywords:k,permalink:v,version:_}=e,j=b?`${b} | ${n}`:n,O=E||i;let N=m+Object(o.a)(O);Object(c.a)(O)||(N=O);const C=Object(o.a)(a);return l.a.createElement(d,null,l.a.createElement(f,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),j&&l.a.createElement("title",null,j),j&&l.a.createElement("meta",{property:"og:title",content:j}),a&&l.a.createElement("link",{rel:"shortcut icon",href:C}),g&&l.a.createElement("meta",{name:"description",content:g}),g&&l.a.createElement("meta",{property:"og:description",content:g}),_&&l.a.createElement("meta",{name:"docsearch:version",content:_}),k&&k.length&&l.a.createElement("meta",{name:"keywords",content:k.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:N}),O&&l.a.createElement("meta",{property:"twitter:image",content:N}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${j}`}),v&&l.a.createElement("meta",{property:"og:url",content:m+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),l.a.createElement(p,null),l.a.createElement(F,null),l.a.createElement("div",{className:"main-wrapper"},u),!h&&l.a.createElement(q,null)))}},182:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(167),s=a(166),o=a.n(s),i=a(187),m=a(186),u=a.n(m),b=a(184),d=a.n(b),h=a(185),g=a.n(h),f=a(164),E=a(168),k=a(98),p=a.n(k);const v=/{([\d,-]+)}/,_=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map(e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},j=/title=".*"/;var O=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(f.a)(),[s,m]=Object(l.useState)(!1),[b,h]=Object(l.useState)(!1);Object(l.useEffect)(()=>{h(!0)},[]);const k=Object(l.useRef)(null),O=Object(l.useRef)(null);let N=[],C="";const{isDarkTheme:y}=Object(E.a)(),w=c.theme||u.a,S=c.darkTheme||w,L=y?S:w;if(a&&v.test(a)){const e=a.match(v)[1];N=g.a.parse(e).filter(e=>e>0)}a&&j.test(a)&&(C=a.match(j)[0].split("title=")[1].replace(/"+/g,"")),Object(l.useEffect)(()=>{let e;return O.current&&(e=new d.a(O.current,{target:()=>k.current})),()=>{e&&e.destroy()}},[O.current,k.current]);let T=t&&t.replace(/language-/,"");!T&&c.defaultLanguage&&(T=c.defaultLanguage);let I=e.replace(/\n$/,"");if(0===N.length&&void 0!==T){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}})(T),n=e.replace(/\n$/,"").split("\n");let l;for(let e=0;e<n.length;){const r=e+1,c=n[e].match(a);if(null!==c){switch(c.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=`${r},`;break;case"highlight-start":l=r;break;case"highlight-end":t+=`${l}-${r-1},`}n.splice(e,1)}else e+=1}N=g.a.parse(t),I=n.join("\n")}const x=()=>{window.getSelection().empty(),m(!0),setTimeout(()=>m(!1),2e3)};return r.a.createElement(i.a,Object(n.a)({},i.b,{key:b,theme:L,code:I,language:T}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:c})=>r.a.createElement(r.a.Fragment,null,C&&r.a.createElement("div",{style:t,className:p.a.codeBlockTitle},C),r.a.createElement("div",{className:p.a.codeBlockContent},r.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:o()(p.a.copyButton,{[p.a.copyButtonWithTitle]:C}),onClick:x},s?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:o()(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:C})},r.a.createElement("div",{ref:k,className:p.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return N.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>r.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))}))))))},N=(a(99),a(100)),C=a.n(N);var y=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(f.a)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",{[C.a.enhancedAnchor]:!n}),id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)},w=a(101),S=a.n(w);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(O,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(c.a,e),pre:e=>r.a.createElement("div",Object(n.a)({className:S.a.mdxCodeBlock},e)),h1:y("h1"),h2:y("h2"),h3:y("h3"),h4:y("h4"),h5:y("h5"),h6:y("h6")}},189:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(175);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);