"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"test-lifecycle",slug:"api/test-lifecycle",title:"Test Lifecycle",sidebar_label:"Test Lifecycle"},o=void 0,l={unversionedId:"test-lifecycle",id:"version-19.x/test-lifecycle",title:"Test Lifecycle",description:"Test Lifecycle",source:"@site/versioned_docs/version-19.x/APIRef.TestLifecycle.md",sourceDirName:".",slug:"/api/test-lifecycle",permalink:"/Detox/docs/api/test-lifecycle",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/APIRef.TestLifecycle.md",tags:[],version:"19.x",frontMatter:{id:"test-lifecycle",slug:"api/test-lifecycle",title:"Test Lifecycle",sidebar_label:"Test Lifecycle"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"The `device` Object",permalink:"/Detox/docs/api/device-object-api"},next:{title:"Matchers",permalink:"/Detox/docs/api/matchers"}},s={},c=[{value:"Test Lifecycle",id:"test-lifecycle",level:2},{value:"Initial Setup",id:"initial-setup",level:3},{value:"Before and After Each Test",id:"before-and-after-each-test",level:3},{value:"Teardown",id:"teardown",level:3},{value:"Repeating Setup for All Tests",id:"repeating-setup-for-all-tests",level:3},{value:"Reloading React Native",id:"reloading-react-native",level:4},{value:"Relaunching the Entire App",id:"relaunching-the-entire-app",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"test-lifecycle"},"Test Lifecycle"),(0,r.kt)("p",null,"Detox is test runner independent, and we encourage you to choose your own test runner, but for the sake of demonstration we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),"\u2019s syntax."),(0,r.kt)("h3",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"The setup phase happens inside ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.init()"),".\nThis is the phase where detox reads its configuration, starts a server, loads its expectation library and starts a simulator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"before(async () => {\n  await detox.init();\n});\n")),(0,r.kt)("p",null,"Of course, you can add any of your initializations in this phase."),(0,r.kt)("h3",{id:"before-and-after-each-test"},"Before and After Each Test"),(0,r.kt)("p",null,"Despite being a recent and ",(0,r.kt)("em",{parentName:"p"},"still")," an optional formation, ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.beforeEach")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.afterEach")," lifecycle functions are ",(0,r.kt)("strong",{parentName:"p"},"highly")," recommended to be called in your test setups. The newer features (including test artifacts: video recordings, screenshots, logs) are not expected to work without these calls."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TIP"),": This API is still apt to change in the future, thus to minimize the risks, you are encouraged to switch to the built-in adapters for ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," like in examples here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/init.js"},"mocha adapter example"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest/e2e/init.js"},"jest adapter example"),".")),(0,r.kt)("p",null,"If nevertheless you use another test runner with Detox (not ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"jest"),"), then you have to implement a logic similar to the one below. Futurewise, consider refactoring it to an adapter and sharing with Detox project (e.g. adapter for ",(0,r.kt)("inlineCode",{parentName:"p"},"ava.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tape"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let testSummary;\n\nbeforeEach(async function () {\n  testSummary = {\n    title: this.currentTest.title,\n    fullName: this.currentTest.fullTitle(),\n    status: 'running',\n  };\n\n await detox.beforeEach(testSummary);\n});\n\nafterEach(async function () {\n  testSummary.status = this.currentTest.state || 'failed';\n  await detox.afterEach(testSummary);\n});\n")),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"The cleanup phase should happen after all the tests have finished, can be initiated using ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.cleanup()"),". This is the phase where detox server shuts down. The simulator will also shut itself down if ",(0,r.kt)("inlineCode",{parentName:"p"},"--cleanup")," flag is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"after(async () => {\n  await detox.cleanup();\n});\n")),(0,r.kt)("h3",{id:"repeating-setup-for-all-tests"},"Repeating Setup for All Tests"),(0,r.kt)("p",null,"A good practice for testing in general is to have decoupled tests, meaning that each test has the same starting point, and the tests can run in any order and still produce the same results. We strongly encourage either restarting your application or restart react-native (if your application is built with it)."),(0,r.kt)("h4",{id:"reloading-react-native"},"Reloading React Native"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  beforeEach(async () => {\n    await device.reloadReactNative();\n  });\n")),(0,r.kt)("h4",{id:"relaunching-the-entire-app"},"Relaunching the Entire App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  beforeEach(async () => {\n    await device.launchApp({newInstance: true});\n  });\n")))}u.isMDXComponent=!0}}]);