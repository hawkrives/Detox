"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Using Launch Arguments",l={unversionedId:"guide/launch-args",id:"guide/launch-args",title:"Using Launch Arguments",description:"In Detox, the app under test is launched via an explicit call to device.launchApp(). Through various means, Detox enables specifying a set of user-defined arguments (key-value pairs) to be passed on to the app when launched, so as to make them available inside the launched app itself at runtime (both on the native side, and - if applicable, on the JavaScript side).",source:"@site/../docs/guide/launch-args.md",sourceDirName:"guide",slug:"/guide/launch-args",permalink:"/Detox/docs/next/guide/launch-args",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/launch-args.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mocking",permalink:"/Detox/docs/next/guide/mocking"},next:{title:"Mocking Open With URL (Deep Links)",permalink:"/Detox/docs/next/guide/mocking-open-with-url"}},s={},p=[{value:"Motivation",id:"motivation",level:3},{value:"Arguments Setup",id:"arguments-setup",level:3},{value:"In-App Arguments Access",id:"in-app-arguments-access",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-launch-arguments"},"Using Launch Arguments"),(0,i.kt)("p",null,"In Detox, the app under test is launched via an explicit call to ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/device"},(0,i.kt)("inlineCode",{parentName:"a"},"device.launchApp()")),". Through various means, Detox enables specifying a set of user-defined arguments (key-value pairs) to be passed on to the app when launched, so as to make them available inside the launched app itself at runtime (both on the native side, and - if applicable, on the JavaScript side)."),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If this is clear to you first hand, you can skip right to the section about arguments setup.")),(0,i.kt)("p",null,"In particular, the common use case of using launch argument (although not distinctly), is for ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/mocking"},"mocking")," external entities such as servers - replacing them with equivalent ",(0,i.kt)("em",{parentName:"p"},"mock servers"),", sporting equivalent (yet fake) API-endpoints that run alongside the testing host (i.e. the one running Detox). These mock servers can typically be configured during the test, to return deterministic responses to network requests coming from the app."),(0,i.kt)("p",null,"Typically, the process of setting up such servers - especially in a parallel test-execution environment, involves three major steps (within the context of a test set-up):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Allocating a port for a mock server, dynamically."),(0,i.kt)("li",{parentName:"ol"},"Bringing up a mock server instance bound to that port (e.g. at ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:1234"),")."),(0,i.kt)("li",{parentName:"ol"},"Launching the app with a predefined argument that holds the port, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"mockServerPort=1234"),".\n(It is assumed here that there\u2019s designated mocked code inside the app that can read ",(0,i.kt)("inlineCode",{parentName:"li"},"mockServerPort")," and rewire all connections to ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:1234")," instead of to the real production server).")),(0,i.kt)("p",null,"In this context, launch argument are useful for implementing step ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/3"},"#3"),"."),(0,i.kt)("h3",{id:"arguments-setup"},"Arguments Setup"),(0,i.kt)("p",null,"User-defined launch arguments specification is very flexible, and can be defined on 4 levels:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Level"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1. Static Configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"As a part of a static ",(0,i.kt)("a",{parentName:"td",href:"/Detox/docs/next/config/overview"},"Detox configuration"),", using the ",(0,i.kt)("inlineCode",{parentName:"td"},"launchArgs")," property.",(0,i.kt)("br",null),"This is can sufficient, for example, if you only require one mock server instance, and can use the same static port throughout the entire testing execution session.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2. Static via CLI"),(0,i.kt)("td",{parentName:"tr",align:null},"As arguments specified explicitly in the ",(0,i.kt)("a",{parentName:"td",href:"/Detox/docs/next/cli/test"},"command-line")," execution of ",(0,i.kt)("inlineCode",{parentName:"td"},"detox test"),", using ",(0,i.kt)("inlineCode",{parentName:"td"},"--app-launch-args"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3.",(0,i.kt)("inlineCode",{parentName:"td"},"device.appLaunchArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Dynamically, using the ",(0,i.kt)("a",{parentName:"td",href:"/Detox/docs/next/api/device#deviceapplaunchargs"},(0,i.kt)("inlineCode",{parentName:"a"},"device.appLaunchArgs"))," API, which initially holds the static configuration, and then allows for the modification of it before applied through ",(0,i.kt)("inlineCode",{parentName:"td"},"device.launchApp()"),".",(0,i.kt)("br",null),"Mostly required in complex test environments, where the servers and ports are dynamic, and are determined via distinct software components (e.g. separate test kits).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4. ",(0,i.kt)("inlineCode",{parentName:"td"},"device.launchApp()")," with ",(0,i.kt)("inlineCode",{parentName:"td"},"launchArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Dynamically and explicitly, using on-site arguments specified in calls to ",(0,i.kt)("a",{parentName:"td",href:"/Detox/docs/next/api/device#devicelaunchappparams"},(0,i.kt)("inlineCode",{parentName:"a"},"device.launchApp()"))," through the ",(0,i.kt)("inlineCode",{parentName:"td"},"launchArgs")," parameter.",(0,i.kt)("br",null),"Ideal for fairly simple test environments, where the ports are dynamic but are in complete control of the user.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important: Arguments specified in each level take precedence over equivalent underlying levels"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In an environment where ",(0,i.kt)("inlineCode",{parentName:"li"},"mockServerPort")," is statically pre-set to ",(0,i.kt)("inlineCode",{parentName:"li"},"1001")," in Detox configuration, and then set to ",(0,i.kt)("inlineCode",{parentName:"li"},"1003")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"device.appLaunchArgs")," inside a test, the app would eventually be launched with ",(0,i.kt)("inlineCode",{parentName:"li"},"1003")," as its value, in calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"device.launchApp()")," in that test."),(0,i.kt)("li",{parentName:"ol"},"(Scenario continues) In subsequent calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"device.launchApp()")," with this parameter: ",(0,i.kt)("inlineCode",{parentName:"li"},"device.launchApp({ launchArgs: {mockServerPort: 1004} })"),", the app will be (re-)launched with ",(0,i.kt)("inlineCode",{parentName:"li"},"1004")," as the value for ",(0,i.kt)("inlineCode",{parentName:"li"},"mockServerPort"),".")),(0,i.kt)("h3",{id:"in-app-arguments-access"},"In-App Arguments Access"),(0,i.kt)("p",null,"On iOS, the specified launch arguments are passed as the process launch arguments and available through normal means."),(0,i.kt)("p",null,"On Android, the launch arguments are set as bundle-extra\u2019s into the activity\u2019s intent. It will therefore be accessible on the native side via the current activity as: ",(0,i.kt)("inlineCode",{parentName:"p"},'currentActivity.getIntent().getBundleExtra("launchArgs")'),"."),(0,i.kt)("p",null,"Further, handling of these launch arguments is up to the user\u2019s responsibility and is out of scope for Detox."))}u.isMDXComponent=!0}}]);