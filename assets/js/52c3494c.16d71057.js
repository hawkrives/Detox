"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={id:"workflows",slug:"introduction/workflows",title:"Workflows",sidebar_label:"Workflows"},a=void 0,l={unversionedId:"workflows",id:"workflows",title:"Workflows",description:"Workflows",source:"@site/../docs/Introduction.Workflows.md",sourceDirName:".",slug:"/introduction/workflows",permalink:"/Detox/docs/next/introduction/workflows",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.Workflows.md",tags:[],version:"current",frontMatter:{id:"workflows",slug:"introduction/workflows",title:"Workflows",sidebar_label:"Workflows"},sidebar:"tutorialSidebar",previous:{title:"Design Principles",permalink:"/Detox/docs/next/introduction/design-principles"},next:{title:"Detox Command Line Tools",permalink:"/Detox/docs/next/api/detox-cli"}},s={},u=[{value:"Workflows",id:"workflows",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflows"},"Workflows"),(0,n.kt)("p",null,"There are multiple recommended ways to work with Detox and make it a part of your development process. Choose the best workflow for your needs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/running-locally"},"Running Tests Locally on Your Machine")," \u2014 If your app is ready and does not require any active development, you can write your tests using this workflow and run them locally on your machine. This is convenient for developing your test suite without actively developing your app.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/developing-while-writing-tests"},"Developing Your App While Writing Tests")," \u2014 If your app requires active development, such as adding ",(0,n.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#testid"},"testID")," fields for tests, this is a good workflow. It allows you to work both on your app and your tests at the same time.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/running-on-ci"},"Running Tests on CI (like Travis)")," \u2014 When your test suite is finally ready, it should be set up to run automatically on your CI server on every git push. This will alert you if new changes to the app break existing functionality.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/debugging-in-xcode"},"Debugging Apps in Xcode During a Test")," \u2014 Advanced users might need to natively debug their app inside Xcode during a Detox test. This is mostly useful for investigating weird crashes or when contributing to Detox itself."))))}p.isMDXComponent=!0}}]);