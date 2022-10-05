"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return n?i.createElement(d,s(s({ref:t},u),{},{components:n})):i.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={},s="Dealing With Synchronization Issues in Tests",r={unversionedId:"troubleshooting/synchronization",id:"troubleshooting/synchronization",title:"Dealing With Synchronization Issues in Tests",description:"Traditionally, one of the most difficult aspects of E2E testing is synchronizing the test scenario with the app. Complex operations inside the app (like accessing servers or performing animations) often take variable amount of time to complete. We can\u2019t continue the test until they\u2019ve completed. How can we synchronize the test with these operations?",source:"@site/../docs/troubleshooting/synchronization.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/synchronization",permalink:"/Detox/docs/next/troubleshooting/synchronization",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/troubleshooting/synchronization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dealing With Problems With Running Tests",permalink:"/Detox/docs/next/troubleshooting/running-tests"},next:{title:"Dealing With Flakiness in Tests",permalink:"/Detox/docs/next/troubleshooting/flakiness"}},l={},c=[{value:"What operations do we try to synchronize with automatically",id:"what-operations-do-we-try-to-synchronize-with-automatically",level:3},{value:"Automatic synchronization works most of the time",id:"automatic-synchronization-works-most-of-the-time",level:3},{value:"Are we waiting too much or not waiting enough?",id:"are-we-waiting-too-much-or-not-waiting-enough",level:3},{value:"Identifying which synchronization mechanism causes us to wait too much",id:"identifying-which-synchronization-mechanism-causes-us-to-wait-too-much",level:3},{value:"Lower-level Idling Resources Debug (iOS Only)",id:"lower-level-idling-resources-debug-ios-only",level:4},{value:"Switching to manual synchronization as a workaround",id:"switching-to-manual-synchronization-as-a-workaround",level:3},{value:"How do we turn off automatic synchronization?",id:"how-do-we-turn-off-automatic-synchronization",level:4},{value:"Controlling the entire synchronization mechanism",id:"controlling-the-entire-synchronization-mechanism",level:5},{value:"Controlling network synchronization",id:"controlling-network-synchronization",level:5},{value:"How do we wait manually?",id:"how-do-we-wait-manually",level:4},{value:"Tweaking and fine-tuning the synchronization mechanisms",id:"tweaking-and-fine-tuning-the-synchronization-mechanisms",level:3},{value:"Modifying your app to avoid waiting too much",id:"modifying-your-app-to-avoid-waiting-too-much",level:3},{value:"<code>setTimeout</code> and <code>setInterval</code>",id:"settimeout-and-setinterval",level:4},{value:"Endless looping animations",id:"endless-looping-animations",level:4}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dealing-with-synchronization-issues-in-tests"},"Dealing With Synchronization Issues in Tests"),(0,o.kt)("p",null,"Traditionally, one of the most difficult aspects of E2E testing is synchronizing the test scenario with the app. Complex operations inside the app (like accessing servers or performing animations) often take variable amount of time to complete. We can\u2019t continue the test until they\u2019ve completed. How can we synchronize the test with these operations?"),(0,o.kt)("p",null,"Synchronizing manually with ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep()")," commands is a bad idea. It\u2019s flaky, complicates the tests, behaves differently on different machines and makes tests needlessly slow."),(0,o.kt)("p",null,"Instead, Detox tries to synchronize the test with the app completely ",(0,o.kt)("em",{parentName:"p"},"automatically"),"."),(0,o.kt)("p",null,"When this works it\u2019s like magic. You simply execute actions one after the other without worrying about timing, and Detox waits for the app to stabilize before moving to the next test line. If there\u2019s an in-flight request to a server, for example, the test will not move forward until the request completes."),(0,o.kt)("h3",{id:"what-operations-do-we-try-to-synchronize-with-automatically"},"What operations do we try to synchronize with automatically"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Network requests")," - Detox monitors in-flight requests over the network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Main thread (native)")," - Detox monitors pending native operations on the main thread (main dispatch queue and main ",(0,o.kt)("inlineCode",{parentName:"p"},"NSOperationQueue"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Layout of UI")," - Detox monitors UI layout operations. There\u2019s also special support for React Native layout which includes the Shadow Queue where ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/yoga"},"yoga")," runs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Timers")," - Detox monitors timers (explicit asynchronous delays). There\u2019s special support for JavaScript timers like ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Animations")," - Detox monitors active animations and transitions. There\u2019s special support for React Native animations with the Animated library.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React Native JavaScript thread")," - Detox monitors pending operations on the JavaScript thread in RN apps.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React Native bridge")," - Detox monitors the React Native bridge and asynchronous messages sent on it."))),(0,o.kt)("h3",{id:"automatic-synchronization-works-most-of-the-time"},"Automatic synchronization works most of the time"),(0,o.kt)("p",null,"It\u2019s difficult for an automatic mechanism to be correct in 100% of the cases. There are always exceptions. We are optimizing for the common case so most of your scenarios will not have to deal with synchronization issues."),(0,o.kt)("p",null,"For the rest of this tutorial, we\u2019ll assume the test is having some sort of synchronization issue."),(0,o.kt)("h3",{id:"are-we-waiting-too-much-or-not-waiting-enough"},"Are we waiting too much or not waiting enough?"),(0,o.kt)("p",null,"When the automatic synchronization mechanism doesn\u2019t work, we have 2 potential problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are waiting too much - The test will appear to hang and fail with timeout. This happens because Detox thinks an asynchronous operation is currently taking place and is waiting for it endlessly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are not waiting enough - The test will appear to fail at some point because an element isn\u2019t found according to an expectation or isn\u2019t found when attempting to perform an action on it. This happens because Detox didn\u2019t take some asynchronous operation into account and isn\u2019t waiting until it completes."))),(0,o.kt)("h3",{id:"identifying-which-synchronization-mechanism-causes-us-to-wait-too-much"},"Identifying which synchronization mechanism causes us to wait too much"),(0,o.kt)("p",null,"Interactions with the application are synchronized, meaning that they will not execute unless the app is idle. You may encounter situations where the tests just hang.\nWhen an action/expectation takes a significant amount of time use this option to print device synchronization status.\nThe status will be printed if the action takes more than ","[","value] (in ms) to complete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --debug-synchronization 500\n")),(0,o.kt)("p",null,"Then, reproduce your issue, and you should see output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'detox[9733] INFO:  [APP_STATUS] The app is busy with the following tasks:\n\u2022 There are 1 work items pending on the dispatch queue: "Main Queue (<OS_dispatch_queue_main: com.apple.main-thread>)".\n\u2022 Run loop "Main Run Loop" is awake.\n\u2022 1 enqueued native timers:\n  - Timer #1:\n    + Fire date: 2021-11-11 14:19:57 +0200.\n    + Time until fire: 0.072.\n    + Repeat interval: 0.\n    + Is recurring: NO.\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxSync/blob/master/StatusDocumentation.md"},"this document")," for documentation of the debug synchronization output."),(0,o.kt)("h4",{id:"lower-level-idling-resources-debug-ios-only"},"Lower-level Idling Resources Debug (iOS Only)"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-synchronization")," does not provide the necessary information, on iOS you can add the following launch argument to your app (using ",(0,o.kt)("inlineCode",{parentName:"p"},"launchArgs")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"launchApp()")," call) to enable a very verbose logging of the idling resource system to the system log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"-DTXEnableVerboseSyncSystem YES -DTXEnableVerboseSyncResources YES\n")),(0,o.kt)("p",null,"You can then obtain this log by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl spawn booted log stream --level debug --style compact --predicate \"category=='SyncManager'\"\n")),(0,o.kt)("p",null,"For example, change your ",(0,o.kt)("inlineCode",{parentName:"p"},"/e2e/init.js")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await detox.init(undefined, { launchApp: false });\nawait device.launchApp({\n  newInstance: true,\n  launchArgs: { 'DTXEnableVerboseSyncSystem': 'YES', 'DTXEnableVerboseSyncResources': 'YES' }\n});\n")),(0,o.kt)("h3",{id:"switching-to-manual-synchronization-as-a-workaround"},"Switching to manual synchronization as a workaround"),(0,o.kt)("p",null,"We always have the fail-safe of turning off automatic synchronization and waiting manually by ourselves. This isn\u2019t the recommended approach, but sometimes we don\u2019t have a choice."),(0,o.kt)("h4",{id:"how-do-we-turn-off-automatic-synchronization"},"How do we turn off automatic synchronization?"),(0,o.kt)("p",null,"This makes sense only if we\u2019re waiting too much."),(0,o.kt)("h5",{id:"controlling-the-entire-synchronization-mechanism"},(0,o.kt)("a",{parentName:"h5",href:"/Detox/docs/next/api/device#devicedisablesynchronization"},"Controlling the entire synchronization mechanism")),(0,o.kt)("p",null,"The synchronization mechanism can be shut down using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.disableSynchronization();\n")),(0,o.kt)("p",null,"to turn it on again use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.enableSynchronization();\n")),(0,o.kt)("h5",{id:"controlling-network-synchronization"},(0,o.kt)("a",{parentName:"h5",href:"/Detox/docs/next/api/device#deviceseturlblacklisturls"},"Controlling network synchronization")),(0,o.kt)("p",null,"You can skip over synchronizing on certain URLs (for long polling tasks, or websocket connections)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.setURLBlacklist(['.*127.0.0.1.*']);\n")),(0,o.kt)("p",null,"In order to gain sync back on an endpoint, just remove it from the blacklist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.setURLBlacklist([]);\n")),(0,o.kt)("p",null,"Alternatively, you can launch your app already with the URL blacklist defined \u2014 that can help with a network sync issue at the very beginning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await device.launchApp({\n  launchArgs: {\n    detoxURLBlacklistRegex: '(\".*example.com/some-url/.*\")',\n  },\n});\n")),(0,o.kt)("h4",{id:"how-do-we-wait-manually"},"How do we wait manually?"),(0,o.kt)("p",null,"This makes sense only if we\u2019re not waiting enough (or if we\u2019ve disabled automatic synchronization). Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"withTimeout()")," API to wait until an expectation is met. The API is documented ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect#withtimeouttimeout"},"here"),"."),(0,o.kt)("h3",{id:"tweaking-and-fine-tuning-the-synchronization-mechanisms"},"Tweaking and fine-tuning the synchronization mechanisms"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This isn\u2019t exposed yet, to be done...")),(0,o.kt)("h3",{id:"modifying-your-app-to-avoid-waiting-too-much"},"Modifying your app to avoid waiting too much"),(0,o.kt)("p",null,"When facing a synchronization issue and tweaking doesn\u2019t help, consider modifying your app. When Detox is having trouble synchronizing due to intense non-stopping activity, it may be a sign that your app is abusing resources."),(0,o.kt)("p",null,"You can also modify your app, for the sake of tests only, by using mocking. Read more ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/mocking"},"here"),"."),(0,o.kt)("h4",{id:"settimeout-and-setinterval"},(0,o.kt)("inlineCode",{parentName:"h4"},"setTimeout")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"setInterval")),(0,o.kt)("p",null,"By default, Detox is designed to ignore ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval")," and will only wait for ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," of up to 1.5 seconds. If you have an endless polling loop with short intervals implemented with ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout"),", switch the implementation to ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval"),". If possible, avoid aggressive polling in your app altogether, the poor single JavaScript thread we have doesn\u2019t like it."),(0,o.kt)("h4",{id:"endless-looping-animations"},"Endless looping animations"),(0,o.kt)("p",null,"By default, Detox will wait until animations complete. If you have an endless looping animation, this may cause Detox to hang. In this case, consider turning off the animation synchronization or remove the endless loop in your E2E build with ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/mocking"},"mocking"),"."))}h.isMDXComponent=!0}}]);