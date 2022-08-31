"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||a;return r?i.createElement(m,o(o({ref:t},d),{},{components:r})):i.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={id:"third-party-drivers",slug:"guide/third-party-drivers",title:"Third-Party Drivers",sidebar_label:"Third-Party Drivers"},o=void 0,s={unversionedId:"third-party-drivers",id:"version-19.x/third-party-drivers",title:"Third-Party Drivers",description:"Third-Party Drivers",source:"@site/versioned_docs/version-19.x/Guide.ThirdPartyDrivers.md",sourceDirName:".",slug:"/guide/third-party-drivers",permalink:"/Detox/docs/guide/third-party-drivers",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.ThirdPartyDrivers.md",tags:[],version:"19.x",frontMatter:{id:"third-party-drivers",slug:"guide/third-party-drivers",title:"Third-Party Drivers",sidebar_label:"Third-Party Drivers"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Parallel Test Execution",permalink:"/Detox/docs/guide/parallel-test-execution"},next:{title:"Expo",permalink:"/Detox/docs/guide/expo"}},l={},p=[{value:"Third-Party Drivers",id:"third-party-drivers",level:2},{value:"How to Use a Third-party Driver",id:"how-to-use-a-third-party-driver",level:3},{value:"Writing a New Third-party Driver",id:"writing-a-new-third-party-driver",level:3},{value:"Anatomy of the Drivers",id:"anatomy-of-the-drivers",level:4},{value:"Implementation Details",id:"implementation-details",level:4},{value:"Existing Third-party Drivers",id:"existing-third-party-drivers",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"third-party-drivers"},"Third-Party Drivers"),(0,n.kt)("p",null,'Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.\nFor example, the following configuration uses the "ios.simulator" driver.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ios.sim": {\n    "type": "ios.simulator",\n    "device": "...",\n    "binaryPath": "bin/YourApp.app"\n  }\n}\n')),(0,n.kt)("p",null,"While Detox technically supports Android devices and iOS simulators out of the box, devices running other platforms such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"Web")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-windows"},"Windows")," can be targeted."),(0,n.kt)("p",null,"If your app targets a third-party platform, you may switch to use a ",(0,n.kt)("a",{parentName:"p",href:"#how-to-use-a-third-party-driver"},"third-party driver")," to run your tests on said platform. If one doesn\u2019t already exist, you can ",(0,n.kt)("a",{parentName:"p",href:"#Writing-a-new-third-party-driver"},"write your own"),"."),(0,n.kt)("h3",{id:"how-to-use-a-third-party-driver"},"How to Use a Third-party Driver"),(0,n.kt)("p",null,"Check to see if a ",(0,n.kt)("a",{parentName:"p",href:"#existing-third-party-drivers"},"third-party driver")," already exists for the platform you wish to target. Mostly likely, the driver will have setup instructions."),(0,n.kt)("p",null,"Overall the setup for any third party driver is fairly simple."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the driver to your ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"npm install --save-dev detox-driver-package")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn add --dev detox-driver-package"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a new Detox configuration to your existing configurations with the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," set to driver\u2019s package name."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-diff"},'+  "thirdparty.driver.config": {\n+    "type": "detox-driver-package",\n+    "binaryPath": "bin/YourApp.app",\n+  }\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run Detox while specifying the name of your new configuration:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --configuration thirdparty.driver.config\n")))),(0,n.kt)("h3",{id:"writing-a-new-third-party-driver"},"Writing a New Third-party Driver"),(0,n.kt)("h4",{id:"anatomy-of-the-drivers"},"Anatomy of the Drivers"),(0,n.kt)("p",null,"The architecture of a driver is split into a few different pieces; Understanding the ",(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/how-detox-works#Architecture"},"overall architecture of Detox")," will help with this section."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Components running in the context of the test logic execution on the Node.js process on the host computer:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"The Device Drivers layer:")," The layer contains a collection of drivers, implementing - mostly, though not exclusively, the platform-specific details for the Detox ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md"},(0,n.kt)("inlineCode",{parentName:"a"},"device")," object")," that is exposed in the Detox tests.\nThe implementation is responsible for managing devices your tests will run on, in terms of device allocation, app installation user interactions (e.g. taps) execution and so on."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Matchers:")," code powering the ",(0,n.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"element"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"waitFor")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"by")," globals in your tests.\nIn essence, it translates and sends test-logic commands (such as taps and assertions) over the network to the device on which your tests are running. In turn, the device natively performs these commands.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The component running on the device being tested, injected into the test app:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Native Client:")," The driver client communicates with the server over\nwebsocket where it receives information from the serialized matchers, and expectations, and also sends responses\nback of whether each step of your test succeeds or fails. Typically, a device client will use an underlying library specific\nto the platform at hand to implement the expectations.")),(0,n.kt)("h4",{id:"implementation-details"},"Implementation Details"),(0,n.kt)("p",null,"In order to introduce a third-party Driver, there is a set of core classes you must implement - each responsible for a different Detox concern:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allocation: The process of launching / selecting a device over which the tests would run."),(0,n.kt)("li",{parentName:"ul"},"Pre-validation: The checkup of the execution-environment (e.g. verifying the Android SDK is installed)."),(0,n.kt)("li",{parentName:"ul"},"Artifact handlers registration: The process where platform-based artifacts generation handlers are registered (e.g. handlers for taking screenshots, which are different between the Android and iOS platforms)."),(0,n.kt)("li",{parentName:"ul"},"Runtime: The ",(0,n.kt)("em",{parentName:"li"},"de facto")," execution of test logic."),(0,n.kt)("li",{parentName:"ul"},"Matchers: The matching of visible elements and visibility assertion.")),(0,n.kt)("p",null,"To understand the exact contract of these classes, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/examples/demo-plugin/driver.js"},(0,n.kt)("inlineCode",{parentName:"a"},"examples/demo-plugin/driver.js"))," for a dummy implementation, or to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer")," for an actual implementation of such as driver."),(0,n.kt)("p",null,"Very roughly speaking, this is the expected skeletal implementation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const DeviceDriverBase = require('detox/src/devices/runtime/drivers/DeviceDriverBase');\n\nclass Cookie {\n  constructor(id) {\n    this.id = id; // hold any info necessary in order to identify the associated device\n  }\n}\n\nclass MyNewAllocationDriver {\n  constructor(deps) {\n    this.emitter = deps.eventEmitter;\n  }\n  \n  async allocate(deviceConfig) {\n    // ...\n    return new Cookie(id); // This is where a cookie is formed once for the entire process\n  }\n  \n  async free(cookie, options) {\n    // ...\n  }\n}\n\nclass MyNewEnvValidator {\n  validate() {\n    // ...\n  }\n}\n\nclass MyNewArtifactsProvider {\n  declareArtifactPlugins() {\n    // ...\n  }\n}\n\nclass MyNewRuntimeDriver extends DeviceDriverBase {\n  constructor(deps, cookie) {\n    // ...\n  }\n  \n  // ...\n}\n\nclass MyExpect {\n  // ...\n}\n\n\nmodule.exports = MyNewDriver;\n")),(0,n.kt)("h3",{id:"existing-third-party-drivers"},"Existing Third-party Drivers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer"))))}c.isMDXComponent=!0}}]);