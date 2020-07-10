(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),i=t(9),r=(t(0),t(212)),o={id:"manage-dependencies",title:"Manage Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"],image:null},l={id:"java/guides/manage-dependencies",title:"Manage Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs/java/guides/dependencies.md",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/guides/dependencies.md",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1594375520,sidebar_label:"Dependency Management",sidebar:"someSidebar",previous:{title:"Change log level",permalink:"/cloud-sdk/docs/java/guides/change-log-level"},next:{title:"Tutorials for the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},c=[{value:"General Information",id:"general-information",children:[{value:"The SDK Bill of Material",id:"the-sdk-bill-of-material",children:[]}]},{value:"Dealing with Dependency Conflicts",id:"dealing-with-dependency-conflicts",children:[{value:"Updating the SDK Version",id:"updating-the-sdk-version",children:[]}]}],d={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"general-information"},"General Information"),Object(r.b)("p",null,"The SAP Cloud SDK for Java is a set of libraries that itself depend on other libraries.\nTo manage these relationships it relies on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"}),"dependency management functionality")," of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/index.html"}),"Maven"),"."),Object(r.b)("p",null,"This article provides guidance on how to manage dependencies to the Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."),Object(r.b)("h3",{id:"the-sdk-bill-of-material"},"The SDK Bill of Material"),Object(r.b)("p",null,"The SDK provides a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dzone.com/articles/the-bill-of-materials-in-maven"}),"Bill of Material"),".\nIt comprises all dependencies and their specific version that the SDK relies upon."),Object(r.b)("p",null,"It can be used in the dependency management as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>        \n</dependencyManagement>\n")),Object(r.b)("p",null,"It helps in various ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"minimizing the effort for updating SDK versions"),Object(r.b)("li",{parentName:"ul"},"ensuring all SDK components are used consistently with the same version"),Object(r.b)("li",{parentName:"ul"},"compatibility with some other key SAP libraries or frameworks like ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/SAP/cloud-security-xsuaa-integration"}),"XSUAA")," and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://cap.cloud.sap/docs/"}),"CAP"),"."),Object(r.b)("li",{parentName:"ul"},"avoiding some potential dependency conflicts"),Object(r.b)("li",{parentName:"ul"},"checking which components & their respective version the SDK depends upon")),Object(r.b)("p",null,"For these reasons we highly recommend using the ",Object(r.b)("inlineCode",{parentName:"p"},"sdk-bom")," in your project."),Object(r.b)("h2",{id:"dealing-with-dependency-conflicts"},"Dealing with Dependency Conflicts"),Object(r.b)("p",null,"When using multiple libraries you will probably run into conflicts at some point.\nThis lies in the nature of how dependencies work.\nIf you are using two libraries ",Object(r.b)("inlineCode",{parentName:"p"},"A")," and ",Object(r.b)("inlineCode",{parentName:"p"},"B")," where both depend on a different version of ",Object(r.b)("inlineCode",{parentName:"p"},"C")," you encounter a conflict."),Object(r.b)("p",null,"This conflict can only be solved by you as the consumer be explicitly stating which version of ",Object(r.b)("inlineCode",{parentName:"p"},"C")," should be used."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven"}),"This guide")," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."),Object(r.b)("h3",{id:"updating-the-sdk-version"},"Updating the SDK Version"),Object(r.b)("p",null,"You may run into dependency related problems when updating SDK versions since it's dependencies are frequently updated.\nHere are some recommendations from our experience that should help mitigating any problems:"),Object(r.b)("p",null,"We recommend increasing the SDK version in a dedicated change e.g. a pull request."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This isolates the change and makes finding problems easier.")),Object(r.b)("p",null,"Look out for ",Object(r.b)("inlineCode",{parentName:"p"},"MethodNotFound")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ClassDefNotFound")," exceptions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"They are very typical when a library is provided with an unexpected version.")),Object(r.b)("p",null,"Check out our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}),"release notes"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Under improvements you will see all dependency changes.")),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"mvn dependency:tree")," to analyze the dependency tree."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It shows where dependencies are used and in which version.")),Object(r.b)("p",null,"Google the error message."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Usually you will at least get an idea which library is causing the problems.")),Object(r.b)("p",null,"Update the SDK version frequently."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This mitigates the risk per update and ensures you are up to date.")))}s.isMDXComponent=!0},212:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),s=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return t?i.a.createElement(m,l(l({ref:n},d),{},{components:t})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);