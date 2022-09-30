"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={},r="Using Genymotion SaaS",s={unversionedId:"guide/genymotion-saas",id:"guide/genymotion-saas",title:"Using Genymotion SaaS",description:"As the number of your end-to-end tests grows, the overall test session duration might easily surpass an hour or two.",source:"@site/../docs/guide/genymotion-saas.mdx",sourceDirName:"guide",slug:"/guide/genymotion-saas",permalink:"/Detox/docs/next/guide/genymotion-saas",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/guide/genymotion-saas.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel Test Execution",permalink:"/Detox/docs/next/guide/parallel-test-execution"},next:{title:"Taking Screenshots",permalink:"/Detox/docs/next/guide/taking-screenshots"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring",id:"configuring",level:2},{value:"Running",id:"running",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Termination",id:"termination",level:3},{value:"<code>behavior.shutdownDevice</code> is ignored",id:"behaviorshutdowndevice-is-ignored",level:3}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-genymotion-saas"},"Using Genymotion SaaS"),(0,o.kt)("p",null,"As the number of your end-to-end tests grows, the overall test session duration might easily surpass an hour or two.\nA good idea first would be to parallelize the test execution using your test runner (e.g. for Jest that\nwould be forwarding ",(0,o.kt)("inlineCode",{parentName:"p"},"--maxWorkers <N>"),"), but this approach has its limitations. Indeed, an average build agent would handle\nrunning a few virtual devices at once, but running a dozen devices at once would make it slow and unreliable."),(0,o.kt)("p",null,"In other words, if you're experiencing scaling issues or struggling with managing local Android emulators,\na good idea would be to migrate to SaaS platforms, where you can start and stop devices on demand at any scale.\nAt the moment, Detox can offer you a first-class integration with\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.geny.io/"},"Genymotion SaaS"),", the platform that offers cloud-based Android Virtual Devices."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You need to register an account in ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.geny.io/"},"Genymotion SaaS"),", so that you have valid credentials to use with their CLI tool,\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/gmsaas"},(0,o.kt)("inlineCode",{parentName:"a"},"gmsaas")),". If you already have an account there, make sure there are available device minutes. Don't worry about\nthe new accounts \u2013 they come with ",(0,o.kt)("strong",{parentName:"p"},"2")," concurrent devices and free ",(0,o.kt)("strong",{parentName:"p"},"60")," minutes out of the box."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1299).Z,width:"966",height:"864"})),(0,o.kt)("p",null,"Next, you should get ",(0,o.kt)("inlineCode",{parentName:"p"},"gmsaas")," CLI tool ",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/gmsaas/01_Get_Started"},"installed and configured"),",\nso that you're able to see your e-mail after running this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gmsaas auth whoami\n# your_email@example.com\n")),(0,o.kt)("p",null,"If you encounter errors instead, please revisit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/gmsaas/01_Get_Started"},"Genymotion SaaS tutorial")," and check out their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/gmsaas/04_Issues/"},"Known Issues"),"\nsection if your problem persists."),(0,o.kt)("h2",{id:"configuring"},"Configuring"),(0,o.kt)("p",null,"To run tests on a device, you need to define its properties first: OS version, screen dimensions, etc.\nThis entire set of device specs is called a ",(0,o.kt)("strong",{parentName:"p"},"recipe"),". Genymotion SaaS offers you a predefined list of recipes\nto pick from, but you can create custom recipes as well. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/saas/04_Basic_Steps/"},"Basic Steps")," tutorial on their website for\nmore details."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9375).Z,width:"1025",height:"762"})),(0,o.kt)("p",null,"Each recipe item in the list can be expanded for extra details, and that's where you can find its respective ",(0,o.kt)("em",{parentName:"p"},"UUID"),".\nCopy that UUID and use it to create a new device and a new configuration in your Detox config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title=".detoxrc.js"',title:'".detoxrc.js"'}," module.exports = {\n   devices: {\n     simulator: { /* ... */ },\n     emulator: { /* ... */ },\n+    genycloud: {\n+      type: 'android.genycloud',\n+      device: {\n+        recipeUUID: '<paste your chosen recipe UUID>'\n+      },\n+    },\n   },\n   apps: {\n     'ios.debug': { /* ... */ },\n     'ios.release': { /* ... */ },\n     'android.debug': { /* ... */ },\n     'android.release': { /* ... */ },\n   },\n   configurations: {\n     'ios.debug': { /* ... */ },\n     'ios.release': { /* ... */ },\n     'android.debug': { /* ... */ },\n     'android.release': { /* ... */ },\n+    'android.genycloud.release': {\n+      device: 'genycloud',\n+      app: 'android.release',\n+    },\n   },\n };\n")),(0,o.kt)("p",null,"Although the ",(0,o.kt)("em",{parentName:"p"},"recipe UUIDs")," are guaranteed to be unique and never change unlike the ",(0,o.kt)("em",{parentName:"p"},"recipe names"),", you still can use\nthe latter if you like \u2013 just switch from ",(0,o.kt)("inlineCode",{parentName:"p"},"recipeUUID")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"recipeName")," property like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"     genycloud: {\n       type: 'android.genycloud',\n       device: {\n-        recipeUUID: '<delete your recipeUUID property>'\n+        recipeName: '<paste the recipe name>'\n       },\n     },\n   },\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the example above we assume you'll be running a ",(0,o.kt)("em",{parentName:"p"},"release configuration")," of your app since this is what\nusually happens on CI."),(0,o.kt)("p",{parentName:"admonition"},"Running ",(0,o.kt)("em",{parentName:"p"},"debug builds")," is trickier to set up (and might be less stable), but if you have to do it,\nfollow the instructions. You'll be setting up tunneling between your local machine (where React Native packager is\nrunning on port 8081) and the remote device in the cloud."),(0,o.kt)("p",{parentName:"admonition"},"First, patch your ",(0,o.kt)("inlineCode",{parentName:"p"},"MainApplication.java")," (or your main activity class) to override ",(0,o.kt)("inlineCode",{parentName:"p"},"debug_http_host"),", e.g.:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' package com.example;\n\n import android.app.Application;\n+import android.content.SharedPreferences;\n+import android.os.Bundle;\n+import android.preference.PreferenceManager;\n\n import com.facebook.react.ReactApplication;\n import com.facebook.react.ReactNativeHost;\n@@ -37,6 +40,9 @@ public class MainApplication extends Application implements ReactApplication {\n     public void onCreate() {\n         super.onCreate();\n         SoLoader.init(this, /* native exopackage */ false);\n+        SharedPreferences preferences =\n+            PreferenceManager.getDefaultSharedPreferences(getApplicationContext());\n+        preferences.edit().putString("debug_http_host", "localhost:8081").apply();\n     }\n\n }\n')),(0,o.kt)("p",{parentName:"admonition"},"Now, as your React Native app will be forced to use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8081")," to download the bundle, you'll need to make sure\nthat there is a tunnel between your local machine and the remote device \u2013 add 8081 to ",(0,o.kt)("inlineCode",{parentName:"p"},"reversePorts")," in your app config,\ne.g.:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  'android.debug': {\n    type: 'android.apk',\n    binaryPath: 'android/app/build/outputs/apk/fromBin/debug/app-fromBin-debug.apk',\n    build: 'cd android && ./gradlew assembleFromBinDebug assembleFromBinDebugAndroidTest -DtestBuildType=debug && cd ..',\n+   reversePorts: [8081],\n  },\n")),(0,o.kt)("p",{parentName:"admonition"},"Clean your Android build intermediates and build your app again:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd android\n./gradlew clean # remove ./ on Windows\ncd ..\ndetox build -c android.emu.debug\n")),(0,o.kt)("p",{parentName:"admonition"},"If your application is trivial enough, these adjustments should be already enough to run ",(0,o.kt)("em",{parentName:"p"},"debug builds")," remotely.")),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,"Assuming you have created a new ",(0,o.kt)("inlineCode",{parentName:"p"},"android.genycloud.release")," configuration, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox test -c android.genycloud.release\n")),(0,o.kt)("p",null,"Soon enough you'll be seeing an output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Allocating Genymotion-Cloud instance Detox.62dfc57b-3201-c861-29bb-8f31f60a8d39.w1 for testing.\nTo access it via a browser, go to: https://cloud.geny.io/instance/8fc62d21-3de0-4ed8-bf18-e69b90246dc5\n")),(0,o.kt)("p",null,"Use the link to see what's happening on your device in real time:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2405).Z,width:"1034",height:"975"})),(0,o.kt)("p",null,"After that, try running tests with 2 workers to make sure that your tests don't have issues with\nconcurrency. The latter might happen if different test files are fighting over the same resource\n(e.g. deleting an account while another test is using it, and so on):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'detox test -c android.genycloud.release --maxWorkers 2\n# DETOX_CONFIGURATION="android.genycloud.release" jest --config e2e/jest.config.js --maxWorkers 2\n# \u2026\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Free Genymotion SaaS accounts are limited to ",(0,o.kt)("strong",{parentName:"p"},"2")," concurrently running devices.\nIf you need more devices or more minutes for testing, you can reach Genymotion's team\nat ",(0,o.kt)("a",{parentName:"p",href:"mailto:sales@genymobile.com"},"sales@genymobile.com"),".")),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("h3",{id:"termination"},"Termination"),(0,o.kt)("p",null,"If you have to terminate your tests execution via ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," or another forcible way, pay attention to\nthe warnings printed, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"detox[22314] i WARNING! Detected a Genymotion SaaS instance leakage, for the following instances:\ndetox[22314] i Instance Detox.1e0ee8a4-6949-90c7-6680-5c3a9010d1e5.w1 (8fc62d21-3de0-4ed8-bf18-e69b90246dc5)\n    Kill it by visiting https://cloud.geny.io/instance/8fc62d21-3de0-4ed8-bf18-e69b90246dc5, or by running:\n    gmsaas instances stop 8fc62d21-3de0-4ed8-bf18-e69b90246dc5\n")),(0,o.kt)("p",null,"Leaving the device unattended would mean spending extra money \ud83d\ude2c \ud83d\udcb5, so make sure to follow the\ninstructions and stop your instances, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gmsaas instances stop 8fc62d21-3de0-4ed8-bf18-e69b90246dc5\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can set up a safeguard for the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.genymotion.com/saas/05_Administration_interface/#maximum-run-duration"},"maximum run duration"),"\non the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.geny.io/administration/settings"},"Administration > Settings")," panel. This can minimize the costs\neven if you accidentally leave the device powered on.")),(0,o.kt)("p",null,"We plan to improve this behavior and secure emergency teardown someday, but beforehand the next issue\nshould be resolved (see it below). Besides, ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"'ing proves to be useful when you want to leave the device active\nat some point of your test scenario and interact with it manually."),(0,o.kt)("h3",{id:"behaviorshutdowndevice-is-ignored"},(0,o.kt)("inlineCode",{parentName:"h3"},"behavior.shutdownDevice")," is ignored"),(0,o.kt)("p",null,"Detox CLI has ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/detox-cli#test"},(0,o.kt)("inlineCode",{parentName:"a"},"-u, --cleanup")," argument"),", and the behavior config has the respective ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/config/behavior"},(0,o.kt)("inlineCode",{parentName:"a"},"shutdownDevice"),"\nproperty"),", but ",(0,o.kt)("strong",{parentName:"p"},"none of them has effect")," on Genymotion SaaS devices. Detox ",(0,o.kt)("em",{parentName:"p"},"always shuts them down")," in the end\nof the test session, unless you abruptly terminate its execution (see the previous caveat)."),(0,o.kt)("p",null,"In other words, you can't leave Genymotion SaaS devices up and running after your test session ends. On the ond hand,\nthat reduces your chances to forget a running device. On the other hand, that doesn't allow you to keep a pool of\nimmediately ready devices \u2013 a kind of strategy that could be more efficient for busier CI pipelines. There are plans\nto improve this in the future, but currently you have to bare with this caveat."))}c.isMDXComponent=!0},2405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/live-e732e39661a935cd3829e0e2e4bd55e5.png"},9375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/recipe-054d0e32b829a3aaaa8deac37e1fee37.png"},1299:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/register-3d3806a023e9b96a628b00837cfe1ba5.png"}}]);