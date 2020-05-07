/*! For license information please see 91d31c8e.dcd41c83.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(213)),i=a(227),c=a(226),l={id:"java-generate-odata-vmd-v2-v4",title:"OData VDM Generator for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate a VDM for OData",description:"This article describes how to leverage the OData Generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OData requests.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},d={id:"java/features/odata/java-generate-odata-vmd-v2-v4",title:"OData VDM Generator for Java",description:"This article describes how to leverage the OData Generator to obtain Java classes from a service definition. These classes can then be used to build type-safe OData requests.",source:"@site/docs/java/features/odata/generate-client.md",permalink:"/cloud-sdk/docs/java/features/odata/java-generate-odata-vmd-v2-v4",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1588836025,sidebar_label:"Generate a VDM for OData",sidebar:"someSidebar",previous:{title:"OData with the Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/odata/overview"},next:{title:"Use the VDM to consume OData Services",permalink:"/cloud-sdk/docs/java/features/odata/use-generated-odata-vdm-v2-v4"}},p=[{value:"Generate a Virtual Data Model with the OData Generator",id:"generate-a-virtual-data-model-with-the-odata-generator",children:[]},{value:"Using the OData Generator",id:"using-the-odata-generator",children:[{value:"Using the OData Generator Maven Plugin",id:"using-the-odata-generator-maven-plugin",children:[]},{value:"Using the CLI",id:"using-the-cli",children:[]},{value:"Invoke the generator programmatically",id:"invoke-the-generator-programmatically",children:[]}]}],u={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"generate-a-virtual-data-model-with-the-odata-generator"},"Generate a Virtual Data Model with the OData Generator"),Object(o.b)("p",null,"The OData Generator allows for generating Java classes from the metadata of an OData service. These classes which are refered to as Virtual Data Model (VDM) provide type-safe access to the service."),Object(o.b)("p",null,"In general there are three ways to use the generator:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Via the dedicated maven plugin"),Object(o.b)("li",{parentName:"ul"},"Via the CLI"),Object(o.b)("li",{parentName:"ul"},"By instantiating and invoking it at runtime")),Object(o.b)("p",null,"The maven plugin is usually the recommended way as it integrates nicely with most project setups and makes configuration easy. However, the other two approaches are available and all are documented below."),Object(o.b)("p",null,"For all three the required input is an ",Object(o.b)("inlineCode",{parentName:"p"},"EDMX")," file holding the service metadata."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please be aware that OData v2 and OData v4 service definitions are not interchangeable. There is a dedicated generator for each protocol version and it only accepts service definitions for that version."))),Object(o.b)("h2",{id:"using-the-odata-generator"},"Using the OData Generator"),Object(o.b)("p",null,"Regardless of how the generator is invoked the generated code requires some dependencies to be present. Therefore it is required to ensure the following dependencies are present in your project:"),Object(o.b)(i.a,{defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v4",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>javax.inject</groupId>\n    <artifactId>javax.inject</artifactId>\n    <scope>provided</scope>\n</dependency>\n"))),Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n<dependency>\n    <groupId>javax.inject</groupId>\n    <artifactId>javax.inject</artifactId>\n    <scope>provided</scope>\n</dependency>\n")))),Object(o.b)("p",null,"Lombok and dependency injections are used by the generated VDM classes, that is why they are needed but only with the scope ",Object(o.b)("em",{parentName:"p"},"provided"),"."),Object(o.b)("h3",{id:"using-the-odata-generator-maven-plugin"},"Using the OData Generator Maven Plugin"),Object(o.b)(i.a,{defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v4",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your ",Object(o.b)("inlineCode",{parentName:"p"},"application/pom.xml")," file by adding the generator plugin under the ",Object(o.b)("inlineCode",{parentName:"p"},"<plugin>")," section."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-generator-maven-plugin</artifactId>\n    \x3c!-- Please use the latest version here--\x3e\n    <version>3.18.0</version>\n    <executions>\n        <execution>\n            <id>generate-consumption</id>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputDirectory>${project.basedir}/edmx</inputDirectory>\n                <outputDirectory>${project.build.directory}/vdm</outputDirectory>\n                <deleteOutputDirectory>true</deleteOutputDirectory>\n                <packageName>com.mycompany.vdm</packageName>\n                <defaultBasePath>odata/v4/</defaultBasePath>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"))))),Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your ",Object(o.b)("inlineCode",{parentName:"p"},"application/pom.xml")," file by adding the generator plugin under the ",Object(o.b)("inlineCode",{parentName:"p"},"<plugin>")," section."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-generator-maven-plugin</artifactId>\n    \x3c!-- Please use the latest version here--\x3e\n    <version>3.18.0</version>\n    <executions>\n        <execution>\n            <id>generate-consumption</id>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputDirectory>${project.basedir}/edmx</inputDirectory>\n                <outputDirectory>${project.build.directory}/vdm</outputDirectory>\n                <deleteOutputDirectory>true</deleteOutputDirectory>\n                <packageName>com.mycompany.vdm</packageName>\n                <defaultBasePath>odata/v4/</defaultBasePath>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")))))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Adapt the ",Object(o.b)("inlineCode",{parentName:"p"},"<inputDirectory>")," to point to the location of your service definition.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In case the target directory should be automatically added as a source folder by maven you can leverage the build helper plugin:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>org.codehaus.mojo</groupId>\n    <artifactId>build-helper-maven-plugin</artifactId>\n    <version>3.0.0</version>\n    <executions>\n        <execution>\n            <phase>generate-sources</phase>\n            <goals>\n                <goal>add-source</goal>\n            </goals>\n            <configuration>\n                <sources>\n                    <source>${project.build.directory}/vdm</source>\n                </sources>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")))),Object(o.b)("p",null,"Now maven will run the generator within the ",Object(o.b)("inlineCode",{parentName:"p"},"process-sources")," phase which is executed before compile."),Object(o.b)("p",null,"The following parameters allow to configure the generator further:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Explanation"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<inputDirectory>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of the metadata file.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<outputDirectory>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Location of the output directory for generated sources.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<deleteOutputDirectory>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Target directory is deleted before every execution of the generator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<packageName>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Package name for the generated sources")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<defaultBasePath>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Base path of the exposed API")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please note that if you use the generator for services other than SAP S/4HANA services, you need to add the parameter ",Object(o.b)("inlineCode",{parentName:"p"},"defaultBasePath")," to the configuration section, which should provide the base path to the exposed API (e.g ",Object(o.b)("em",{parentName:"p"},"odata/v4/"),")."))),Object(o.b)("h3",{id:"using-the-cli"},"Using the CLI"),Object(o.b)(i.a,{defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v4",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the latest command line interface (CLI) of the generator from ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk.datamodel/odata-v4-generator-cli"}),"maven central"),". Rename it to ",Object(o.b)("inlineCode",{parentName:"li"},"odata-generator-cli.jar")," and put it in a directory of your choice."))),Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the latest command line interface (CLI) of the generator from ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk.datamodel/odata-generator-cli"}),"maven central"),". Rename it to ",Object(o.b)("inlineCode",{parentName:"li"},"odata-generator-cli.jar")," and put it in a directory of your choice.")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"java -jar odata-generator-cli.jar -i /path/to/input/folder -o /path/to/output/folder"),". You can also specify the parameter ",Object(o.b)("inlineCode",{parentName:"p"},'-p "my.package.name"')," to choose the package name and ",Object(o.b)("inlineCode",{parentName:"p"},'-b "/my/path"')," to choose the base path.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Put the generated Java source files from the output folder into your project that is using the SAP Cloud SDK so that they are picked up by Java. For example, move them to the ",Object(o.b)("inlineCode",{parentName:"p"},"application/src/main/java")," folder."))),Object(o.b)("h3",{id:"invoke-the-generator-programmatically"},"Invoke the generator programmatically"),Object(o.b)(i.a,{defaultValue:"v4",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"v4",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Please include the ",Object(o.b)("inlineCode",{parentName:"li"},"odata-v4-generator")," artifact as a dependency in a your project. Choose a module and location from which you intend to invoke the generator and add the following dependency to the appropriate ",Object(o.b)("inlineCode",{parentName:"li"},"pom.xml"),".",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"})," <dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-v4-generator</artifactId>\n  </dependency>\n"))))),Object(o.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Please include the ",Object(o.b)("inlineCode",{parentName:"li"},"odata-generator")," artifact as a dependency in a your project. Choose a module and location from which you intend to invoke the generator and add the following dependency to the appropriate ",Object(o.b)("inlineCode",{parentName:"li"},"pom.xml"),".",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"})," <dependency>\n    <groupId>com.sap.cloud.sdk.datamodel</groupId>\n    <artifactId>odata-generator</artifactId>\n  </dependency>\n")))))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Copy the following code which will later invoke the generator:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'final Path inputDirectory = Paths.get("application/src/main/resources/");\nfinal Path outputDirectory = Paths.get("application/src/main/java/");\nfinal Path serviceNameMapping = inputDirectory.resolve("serviceNameMappings.properties");\n\nnew DataModelGenerator()\n    .withInputDirectory(inputDirectory.toFile())\n    .withOutputDirectory(outputDirectory.toFile())\n    .withServiceNameMapping(serviceNameMapping.toFile())\n    .pojosOnly(false)\n    .withNameSource(DefaultNamingStrategy.NameSource.NAME)\n    .withPackageName("org.example")\n    .withDefaultBasePath("/my/path/")\n    .execute();\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Adapt the input & output directory as well as the package name according to your setup. Place your EDMX file within the input folder and run the generator.")),Object(o.b)("p",null,"This should give you the generated classes in the desired folder. You can now proceed with using them to build requests."),Object(o.b)("p",null,"In case you run into issues with the above process: Double check your service and file names, check that the folders are setup correctly and that the service name mappings meet your expectations."))}s.isMDXComponent=!0},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return a?r.a.createElement(m,c({ref:t},d,{components:a})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},215:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},222:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},226:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},227:function(e,t,a){"use strict";a(27),a(19),a(20);var n=a(0),r=a.n(n),o=a(222);var i=function(){return Object(n.useContext)(o.a)},c=a(215),l=a.n(c),d=a(132),p=a.n(d),u=37,s=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,c=e.values,d=e.groupId,b=i(),m=b.tabGroupChoices,h=b.setTabGroupChoices,v=Object(n.useState)(o),g=v[0],O=v[1];if(null!=d){var j=m[d];null!=j&&j!==g&&O(j)}var f=function(e){O(e),null!=d&&h(d,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:l()("tab-item",p.a.tabItem,{"tab-item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===g}))[0]))}}}]);