(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),c=(n(0),n(203)),i=n(218),a={id:"api-documentation",title:"Cloud SDK API Documentation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"API Documentation (JSDoc)",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},u={id:"js/api-documentation",title:"Cloud SDK API Documentation",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/js/api-documentation.md",permalink:"/cloud-sdk/docs/js/api-documentation",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587312889,sidebar_label:"API Documentation (JSDoc)",sidebar:"someSidebar",previous:{title:"Getting started - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"CI/CD getting started",permalink:"/cloud-sdk/docs/devops/getting-started"}},s=[{value:"JSDoc - Cloud SDK",id:"jsdoc---cloud-sdk",children:[{value:"API Version",id:"api-version",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"jsdoc---cloud-sdk"},"JSDoc - Cloud SDK"),Object(c.b)("h3",{id:"api-version"},"API Version"),Object(c.b)(i.a,{mdxType:"ApiReleaseList"}))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),p=r,b=l["".concat(i,".").concat(p)]||l[p]||f[p]||c;return n?o.a.createElement(b,a({ref:t},s,{components:n})):o.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},205:function(e,t,n){"use strict";var r=n(1),o=n(0),c=n.n(o),i=n(39),a=n(211),u=n(33),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,d=n||u,l=Object(a.a)(d),f=Object(o.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!p&&l&&window.docusaurus.prefetch(d),function(){p&&t&&t.disconnect()}}),[d,p,l]),d&&l?c.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(d),f.current=!0)},innerRef:function(e){var n,r;p&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(d)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:d})):c.a.createElement("a",Object(r.a)({},e,{href:d}))}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(208);var r=n(204);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},208:function(e,t,n){"use strict";var r=n(12),o=n(24),c=n(209),i="".startsWith;r(r.P+r.F*n(210)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},209:function(e,t,n){var r=n(75),o=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},210:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},211:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},218:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=(n(205),n(206)),i=["1.19.0","1.18.1","1.18.0"];t.a=function(){return o.a.createElement("ul",null,i.map((function(e){return o.a.createElement("li",{key:""+e},o.a.createElement("a",{href:Object(c.a)("api/"+e+"/")},""+e))})))}}}]);