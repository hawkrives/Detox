"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),l=n(6010),r=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:r,block:c,defaultValue:m,values:h,groupId:k,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,s.U)(),[w,j]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=k){const e=N[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),o=v[n].value;o!==w&&(D(t),j(o),null!=k&&x(k,String(o)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=T.indexOf(e.currentTarget)+1;n=null!=(o=T[t])?o:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:C,onClick:C},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},1414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),l=n(5488),r=n(5162);const i={id:"getting-started",slug:"introduction/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},s=void 0,u={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Getting Started",source:"@site/../docs/Introduction.GettingStarted.md",sourceDirName:".",slug:"/introduction/getting-started",permalink:"/Detox/docs/next/introduction/getting-started",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.GettingStarted.md",tags:[],version:"current",frontMatter:{id:"getting-started",slug:"introduction/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Setting Up an iOS Development & Testing Environment",permalink:"/Detox/docs/next/introduction/ios-dev-env"}},d={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Environment Setup",id:"step-1-environment-setup",level:2},{value:"Install Node.js",id:"install-nodejs",level:3},{value:"Install Detox Command Line Tools (<code>detox-cli</code>)",id:"install-detox-command-line-tools-detox-cli",level:3},{value:"Install Platform-specific Dependencies, Tools and SDKs",id:"install-platform-specific-dependencies-tools-and-sdks",level:3},{value:"Step 2: Add Detox to Your Project",id:"step-2-add-detox-to-your-project",level:2},{value:"Install the Detox Node-module",id:"install-the-detox-node-module",level:3},{value:"Set Up a Test Runner",id:"set-up-a-test-runner",level:3},{value:"Apply Detox Configuration",id:"apply-detox-configuration",level:3},{value:"Step 3: Build Your App and Run Detox Tests",id:"step-3-build-your-app-and-run-detox-tests",level:2},{value:"1. Build Your App",id:"1-build-your-app",level:3},{value:"2. Run the Tests",id:"2-run-the-tests",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome to Detox!")),(0,a.kt)("p",null,"In this guide, we will walk you through setting Detox up in your project, one step at a time."),(0,a.kt)("p",null,"You will find that some steps are longer than the others: some are just one-paragraph long, while for others we have a dedicated multistep guide worked out. Bear with us - it is all necessary, and once set-up, it is easy to move forward with writing tests very rapidly."),(0,a.kt)("h2",{id:"step-1-environment-setup"},"Step 1: Environment Setup"),(0,a.kt)("h3",{id:"install-nodejs"},"Install ",(0,a.kt)("a",{parentName:"h3",href:"https://nodejs.org/en/"},"Node.js")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")," is the JavaScript runtime Detox will run on. ",(0,a.kt)("strong",{parentName:"p"},"Install Node.js ",(0,a.kt)("inlineCode",{parentName:"strong"},"v12.0")," or above"),"."),(0,a.kt)("p",null,"There\u2019s more than one way to install Node.js:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download from the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official download page")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"nvm")," - if you need to allow for several versions to be installed on a single machine")),(0,a.kt)("p",null,"The simplest way is to use Homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tip: Verify installation succeeded by typing in ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v")," in the terminal to output current node version.")),(0,a.kt)("h3",{id:"install-detox-command-line-tools-detox-cli"},"Install Detox Command Line Tools (",(0,a.kt)("inlineCode",{parentName:"h3"},"detox-cli"),")"),(0,a.kt)("p",null,"This package makes it easier to operate Detox from the command line. ",(0,a.kt)("inlineCode",{parentName:"p"},"detox-cli")," should be installed globally, enabling usage of the command line tools outside your npm scripts. ",(0,a.kt)("inlineCode",{parentName:"p"},"detox-cli")," is merely a script that passes commands through to a command line tool shipped inside ",(0,a.kt)("inlineCode",{parentName:"p"},"detox")," package (in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/detox"),")."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g detox-cli\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -g detox-cli\n")))),(0,a.kt)("h3",{id:"install-platform-specific-dependencies-tools-and-sdks"},"Install Platform-specific Dependencies, Tools and SDKs"),(0,a.kt)("p",null,"Depending on the platform/s you\u2019re aiming at (iOS, Android), take the time to run through these environment setup guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/introduction/android-dev-env"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/introduction/ios-dev-env"},"iOS"))),(0,a.kt)("h2",{id:"step-2-add-detox-to-your-project"},"Step 2: Add Detox to Your Project"),(0,a.kt)("h3",{id:"install-the-detox-node-module"},"Install the Detox Node-module"),(0,a.kt)("p",null,"If you have a React Native project, go to its root folder (where ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is found) and type the following command:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev\n")))),(0,a.kt)("p",null,"If you have a project without Node integration (such as a native project), add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file to the root folder of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "<your_project_name>",\n  "version": "0.0.1"\n}\n')),(0,a.kt)("p",null,"Name your project in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and then run the following command:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev --no-package-lock\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev --no-lockfile\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You should now have Detox available in ",(0,a.kt)("inlineCode",{parentName:"strong"},"node_modules/detox"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," Remember to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to your git ignore file (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),").")),(0,a.kt)("h3",{id:"set-up-a-test-runner"},"Set Up a Test Runner"),(0,a.kt)("p",null,"Detox delegates the actual JavaScript test-code execution to a dedicated test-runner. It supports the popular ",(0,a.kt)("inlineCode",{parentName:"p"},"Jest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocha")," out of the box. You need to choose and set up one of them now, but it ",(0,a.kt)("em",{parentName:"p"},"is")," possible to switch later on, should you change your mind."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"Jest")," is the recommended test runner for use with Detox"),", since it provides parallel test execution and a complete lifecycle integration with Detox. To set up, follow ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/guide/jest"},"our comprehensive guide for Jest"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mochajs.org/"},"Mocha"),", albeit its integration is less complete, is still lightweight, and a bit easier to set up. To set up, follow ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/guide/mocha"},"our guide for Mocha"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Detox is coupled to neither Mocha or Jest, nor with a specific directory structure. Both runners are just a recommendation \u2014 with some effort, they can be replaced without touching the internal implementation of Detox itself.")),(0,a.kt)("h3",{id:"apply-detox-configuration"},"Apply Detox Configuration"),(0,a.kt)("p",null,"If you\u2019ve completed the test-runner setup successfully using ",(0,a.kt)("inlineCode",{parentName:"p"},"detox init"),", you should have a ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc.json")," file containing a skeletal configuration for Detox to use. This configuration is only half-baked and needs to be set up properly. You now need to either create or edit that file, and apply the actual configuration suitable for your specific project."),(0,a.kt)("p",null,"Detox scans for a configuration through multiple files. It starts from the current working directory, and runs over the following options, in this order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc.js")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc.json")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".detoxrc")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"detox.config.js")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"detox.config.json")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," (",(0,a.kt)("inlineCode",{parentName:"li"},'"detox"')," section)")),(0,a.kt)("p",null,"If you prefer to use something other than ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc.json"),"\u2014for example, would like to keep all project configs in one place\u2014you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"detox")," section in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". If you otherwise prefer separating configs, all of the other options are valid."),(0,a.kt)("p",null,"For specific configuration options for each supported platform, see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/introduction/android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/introduction/ios"},"iOS"))),(0,a.kt)("h2",{id:"step-3-build-your-app-and-run-detox-tests"},"Step 3: Build Your App and Run Detox Tests"),(0,a.kt)("h3",{id:"1-build-your-app"},"1. Build Your App"),(0,a.kt)("p",null,"Use a convenience method in Detox command line tools to build your project easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration <your configuration name>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Detox executes the build command you specified in your Detox configuration. If your build fails, make sure to provide the correct build command.")),(0,a.kt)("h3",{id:"2-run-the-tests"},"2. Run the Tests"),(0,a.kt)("p",null,"Use the Detox command line tools to test your project easily:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --configuration <your configuration name>\n")),(0,a.kt)("p",null,"That\u2019s it. Your first failing Detox test is running!"),(0,a.kt)("p",null,"Next, we\u2019ll go over usage and how to make this test ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/writing-first-test"},"actually pass"),"."))}m.isMDXComponent=!0}}]);