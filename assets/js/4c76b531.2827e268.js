"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"ios-dev-env",slug:"introduction/ios-dev-env",title:"Setting Up an iOS Development & Testing Environment",sidebar_label:"Setting Up an iOS Development & Testing Environment"},a=void 0,l={unversionedId:"ios-dev-env",id:"version-19.x/ios-dev-env",title:"Setting Up an iOS Development & Testing Environment",description:"Setting Up an iOS Development & Testing Environment",source:"@site/versioned_docs/version-19.x/Introduction.iOSDevEnv.md",sourceDirName:".",slug:"/introduction/ios-dev-env",permalink:"/Detox/docs/introduction/ios-dev-env",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Introduction.iOSDevEnv.md",tags:[],version:"19.x",frontMatter:{id:"ios-dev-env",slug:"introduction/ios-dev-env",title:"Setting Up an iOS Development & Testing Environment",sidebar_label:"Setting Up an iOS Development & Testing Environment"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Getting Started",permalink:"/Detox/docs/introduction/getting-started"},next:{title:"Setting Up an Android Development & Testing Environment",permalink:"/Detox/docs/introduction/android-dev-env"}},s={},p=[{value:"Setting Up an iOS Development &amp; Testing Environment",id:"setting-up-an-ios-development--testing-environment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Install the Latest Version of Homebrew",id:"install-the-latest-version-of-homebrew",level:4},{value:"Install <code>applesimutils</code>",id:"install-applesimutils",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"setting-up-an-ios-development--testing-environment"},"Setting Up an iOS Development & Testing Environment"),(0,i.kt)("p",null,"This guide sums up the tools required for an environment for running automated UI tests using iOS simulators (using Detox, in particular)."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Running Detox (on iOS) requires the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MacOS Catalina or newer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Xcode ",(0,i.kt)("inlineCode",{parentName:"p"},"v12.x")," or newer (",(0,i.kt)("inlineCode",{parentName:"p"},"v13")," support - see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/2895"},"here"),"), with Xcode command-line tools installed"),(0,i.kt)("p",{parentName:"li"},"Xcode can be installed from the App Store, or downloaded ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/download/more/"},"directly from Apple Developer")))),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("h4",{id:"install-the-latest-version-of-homebrew"},"Install the Latest Version of ",(0,i.kt)("a",{parentName:"h4",href:"http://brew.sh"},"Homebrew")),(0,i.kt)("p",null,"Homebrew is a package manager for macOS, used to install other command line tools."),(0,i.kt)("p",null,"To ensure everything needed for Homebrew tool installation is installed, run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"xcode-select --install\n")),(0,i.kt)("h4",{id:"install-applesimutils"},"Install ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/wix/AppleSimulatorUtils"},(0,i.kt)("inlineCode",{parentName:"a"},"applesimutils"))),(0,i.kt)("p",null,"A collection of utils for Apple simulators, Detox uses it to query and communicate with the simulator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap wix/brew\nbrew install applesimutils\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure to periodically update your version of ",(0,i.kt)("inlineCode",{parentName:"p"},"applesimutils")," to the latest version.")))}d.isMDXComponent=!0}}]);