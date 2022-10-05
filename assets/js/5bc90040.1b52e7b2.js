"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,u=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Logger",l={unversionedId:"api/logger",id:"api/logger",title:"Logger",description:"Detox Logger API allows you to save your custom messages and events alongside the built-in ones. In addition to being formatted and printed to the console, they can be preserved as artifacts: detox.log (plain text) and detox.trace.json (Google Chrome Trace Event format) files, if you enable that via CLI argument (--record-logs) or via config file (artifacts.plugins.log.enabled).",source:"@site/../docs/api/logger.mdx",sourceDirName:"api",slug:"/api/logger",permalink:"/Detox/docs/next/api/logger",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/api/logger.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Expect",permalink:"/Detox/docs/next/api/expect"},next:{title:"Internals API",permalink:"/Detox/docs/next/api/internals"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>log.level</code> [enum]",id:"loglevel-enum",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>log.*([event,] ...msg)</code>",id:"logevent-msg",level:3},{value:"<code>log.*.begin([event,] msg)</code>",id:"logbeginevent-msg",level:3},{value:"<code>log.*.end([event,] msg)</code>",id:"logendevent-msg",level:3},{value:"<code>log.*.complete([event,] msg, callback)</code>",id:"logcompleteevent-msg-callback",level:3},{value:"Example",id:"example",level:2},{value:"<code>detox.trace.json</code>",id:"detoxtracejson",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logger"},"Logger"),(0,o.kt)("p",null,"Detox Logger API allows you to save your custom messages and events alongside the built-in ones. In addition to being formatted and printed to the console, they can be preserved as artifacts: ",(0,o.kt)("inlineCode",{parentName:"p"},"detox.log")," (plain text) and ",(0,o.kt)("inlineCode",{parentName:"p"},"detox.trace.json")," (Google Chrome Trace Event format) files, if you enable that via CLI argument (",(0,o.kt)("inlineCode",{parentName:"p"},"--record-logs"),") or via config file (",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts.plugins.log.enabled"),")."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"loglevel-enum"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.level")," ","[","enum]"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,o.kt)("p",null,"Possible values: ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),"."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"logevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*([event,] ...msg)")),(0,o.kt)("p",null,"Logs an instant message with an optional ","[event metadata]",".\nThere are six methods for producing log messages varying by log level:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.fatal([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.error([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.warn([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.info([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.debug([event,] ...msg)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.trace([event,] ...msg)"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { log } = require('detox');\n\nlog.info('A simple message');\n// detox[2020] i A simple\n\nlog.error({ err: new Error('Test') }, 'An error message');\n// detox[2020] i An error message\n//   err: Test\n")),(0,o.kt)("h3",{id:"logbeginevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.begin([event,] msg)")),(0,o.kt)("p",null,"Logs a beginning of a duration event with an optional ","[event metadata]","."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info.begin('Login Flow');\n// detox[2020] E Login Flow\n")),(0,o.kt)("p",null,"TODO: Mention unfinished events and how they look like."),(0,o.kt)("h3",{id:"logendevent-msg"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.end([event,] msg)")),(0,o.kt)("p",null,"Logs an end of a duration event with an optional ","[event metadata]","."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.info.end({ success: true }, 'Login Flow');\n// detox[2020] E Login Flow\n")),(0,o.kt)("h3",{id:"logcompleteevent-msg-callback"},(0,o.kt)("inlineCode",{parentName:"h3"},"log.*.complete([event,] msg, callback)")),(0,o.kt)("p",null,"A convenience method to wrap functions and promises with ",(0,o.kt)("inlineCode",{parentName:"p"},"log.*.begin([event,] msg)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"log.*.end([event,] msg)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"detox[2020] B Your custom event\ndetox[2020] E Your custom event\n")),(0,o.kt)("p",null,"TODO: rewrite this document"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { log } = require('detox');\n\nit('Verify sanity things', async () => {\n  try {\n    log.info.begin('Turn off notifications');\n    await element(by.id('gotoNotifications')).tap();\n    await element(by.id('notificationsToggle')).tap();\n    await device.pressBack();\n  } finally {\n    log.trace.end('Turn off notifications');\n  }\n});\n")),(0,o.kt)("p",null,"Effectively, ",(0,o.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," can even be called in two complete different places - such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach"),", but that is discouraged."),(0,o.kt)("p",null,"In fact, ",(0,o.kt)("inlineCode",{parentName:"p"},"log.*.complete()")," is the recommended way of tracing things, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const detox = require('detox');\n\nit('Verify sanity things', async () => {\n  await detox.log.info.complete(('Turn off notifications', async () => {\n    await element(by.id('gotoNotifications')).tap();\n    await element(by.id('notificationsToggle')).tap();\n    await device.pressBack();\n  });\n});\n")),(0,o.kt)("h2",{id:"detoxtracejson"},(0,o.kt)("inlineCode",{parentName:"h2"},"detox.trace.json")),(0,o.kt)("p",null,"The final outcome is a JSON-like file named ",(0,o.kt)("inlineCode",{parentName:"p"},"detox.trace.json"),", which, if loaded into a Chrome-browser tab with the ",(0,o.kt)("inlineCode",{parentName:"p"},"chrome://tracing")," URL, would look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Timeline artifact example",src:n(6806).Z,width:"1760",height:"523"})),(0,o.kt)("p",null,"This ",(0,o.kt)("em",{parentName:"p"},"tracing")," view provides a visual, hierarchical representation of the various processes that took place during the execution of the testing session, over the execution\u2019s ",(0,o.kt)("em",{parentName:"p"},"time-line"),". These processes appear as hierarchical ",(0,o.kt)("em",{parentName:"p"},"sections")," \u2013 sometimes visually ordered in a parent-child way, depending on their formation time and context.\nTo name a few predefined events, which are generated by Detox itself:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"detoxInit"),":")," Initialization of Detox, prior to running the suites associated with a specific tests file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"awaitBoot"),":")," Waiting for an emulator to complete booting (thus being ready to run tests). Done in the surrounding context of ",(0,o.kt)("inlineCode",{parentName:"li"},"detoxInit")," (and hence visually appears \"below\" it), as waiting for emulators' boot is an inherent part of Detox' initialization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"appInstall")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"appUninstall")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"Sanity":')," Execution of a user test suite called ",(0,o.kt)("em",{parentName:"li"},"Sanity"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"reloadRN"),":")," A dynamic reload of the React-Native. Bound to calls to ",(0,o.kt)("inlineCode",{parentName:"li"},"device.reloadReactNative()"),", specifically.")),(0,o.kt)("p",null,"In the above example, the following can be observed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There were 2 test workers (the Worker #\u20601, Worker #\u20602 time-lines) executing a total of two test suites."),(0,o.kt)("li",{parentName:"ol"},"There were 2 Android emulators used for running the test session, namely ",(0,o.kt)("inlineCode",{parentName:"li"},"emulator-17800")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"emulator-12466"),". They were used by worker 1 and worker 2, respectively."),(0,o.kt)("li",{parentName:"ol"},"It took about a total of 54 seconds to initialize and run all the tests."),(0,o.kt)("li",{parentName:"ol"},"The first worker took longer to initialize (as depicted by the ",(0,o.kt)("inlineCode",{parentName:"li"},"detoxInit")," section). In particular, that happened because it took longer for the associated emulator too finish bootstrapping (see the child ",(0,o.kt)("inlineCode",{parentName:"li"},"awaitBoot")," section). That suggests there might be a problem with the test execution environment.")))}c.isMDXComponent=!0},6806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timeline-artifact-330d8f1de5146484a15c9f5c9f4d9709.png"}}]);