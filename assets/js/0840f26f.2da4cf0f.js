"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={id:"configuration",slug:"api/configuration",title:"Configuration Options",sidebar_label:"Configuration Options"},r=void 0,l={unversionedId:"configuration",id:"version-19.x/configuration",title:"Configuration Options",description:"Configuration Options",source:"@site/versioned_docs/version-19.x/APIRef.Configuration.md",sourceDirName:".",slug:"/api/configuration",permalink:"/Detox/docs/api/configuration",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/APIRef.Configuration.md",tags:[],version:"19.x",frontMatter:{id:"configuration",slug:"api/configuration",title:"Configuration Options",sidebar_label:"Configuration Options"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Detox Command Line Tools",permalink:"/Detox/docs/api/detox-cli"},next:{title:"The `detox` Object",permalink:"/Detox/docs/api/detox-object-api"}},p={},s=[{value:"Configuration Options",id:"configuration-options",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Extending configurations",id:"extending-configurations",level:4},{value:"Individual Configurations",id:"individual-configurations",level:4},{value:"Device configurations",id:"device-configurations",level:4},{value:"Apps configurations",id:"apps-configurations",level:4},{value:"Artifacts Configuration",id:"artifacts-configuration",level:4},{value:"Behavior Configuration",id:"behavior-configuration",level:4},{value:"Server Configuration",id:"server-configuration",level:4},{value:"<code>detox-cli</code>",id:"detox-cli",level:3},{value:"Build Configuration",id:"build-configuration",level:4},{value:"Test Configuration",id:"test-configuration",level:4},{value:"Faster Test Runs with App Reuse",id:"faster-test-runs-with-app-reuse",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,i.kt)("p",null,"In order for Detox to know what device & app to use (and a lot more, actually), it needs some configuration to be statically available in a configuration file. It supports both standalone configuration files, and a configuration bundling inside the project\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"In essence, Detox scans for the configuration to use, through multiple files. It starts from the current working directory, and runs over the following options, in this order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".detoxrc.js")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".detoxrc.json")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".detoxrc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"detox.config.js")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"detox.config.json")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," (",(0,i.kt)("inlineCode",{parentName:"li"},'"detox"')," section)")),(0,i.kt)("p",null,"Options 1-5 allow for a standalone Detox configuration in either a ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," format or using JavaScript syntax.\nOption 6 means the configuration is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," format inside the project\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", which is more suitable if you like having all of your project\u2019s configurations in one place."),(0,i.kt)("p",null,"Please find the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/examples/demo-react-native/detox.config.js"},"Detox example app")," as a working reference. Also, look at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/detox/index.d.ts"},"the typings file")," provided by Detox."),(0,i.kt)("h4",{id:"extending-configurations"},"Extending configurations"),(0,i.kt)("p",null,"Since Detox ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/releases/tag/18.9.0"},"18.9.0"),", you can also define base Detox configurations,\ndistribute them as ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," modules for reuse across multiple projects, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "@my-org/detox-preset",\n  "runnerConfig": "e2e/jest.config.some-override.js"\n}\n')),(0,i.kt)("p",null,"Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," has to be a valid Node module path. Relative module paths will be resolved relatively\nto the Detox config file which contains that specific ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," property, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// given: ~/Projects/my-project/.detoxrc.json\n{ extends: "./e2e/detox-base-config" }\n// goes to: ~/Projects/my-project/e2e/detox-base-config.js\n{ extends: "./configs/base" }\n// then goes to: ~/Projects/my-project/e2e/configs/base/index.js\n// and so on...\n')),(0,i.kt)("h4",{id:"individual-configurations"},"Individual Configurations"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The configuration format has been significantly updated since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/18.3.1/docs/APIRef.Configuration.md"},"18.3.1")," in a backward-compatible way.\nClick ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/18.3.1/docs/APIRef.Configuration.md"},"here")," to the reference on the former configuration format.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configurations")," holds all the device/app-oriented configurations. To select a specific configuration when running Detox in command-line (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"detox build"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"detox test"),"), use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--configuration")," argument.\nNote: If there is only one configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"configurations"),", Detox will default to it."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Params"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"device")),(0,i.kt)("td",{parentName:"tr",align:null},"Device config (object) or an alias pointing to an already defined device in ",(0,i.kt)("inlineCode",{parentName:"td"},'"devices"')," dictionary (see below).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:null},"App config (object) or an alias pointing to an already defined application in ",(0,i.kt)("inlineCode",{parentName:"td"},'"apps"')," dictionary (see below).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apps")),(0,i.kt)("td",{parentName:"tr",align:null},"Same as the ",(0,i.kt)("inlineCode",{parentName:"td"},"app"),", but that is an array form used for multi-app testing. Mutually exclusive with the ",(0,i.kt)("inlineCode",{parentName:"td"},"app")," property.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"artifacts")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides to the artifacts config. See ",(0,i.kt)("a",{parentName:"td",href:"#artifacts-configuration"},"Artifacts guide"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"behavior")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides to the behavior config. See ",(0,i.kt)("a",{parentName:"td",href:"#behavior-configuration"},"Behavior guide"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"session")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides to the session config. See ",(0,i.kt)("a",{parentName:"td",href:"#server-configuration"},"Session guide"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"runnerConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the test runner config. Default value: ",(0,i.kt)("inlineCode",{parentName:"td"},"e2e/config.json")," (for Jest), ",(0,i.kt)("inlineCode",{parentName:"td"},"e2e/mocha.opts")," (for Mocha).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"specs")),(0,i.kt)("td",{parentName:"tr",align:null},"A default glob pattern for a test runner to use when no test files are specified, e.g.: ",(0,i.kt)("inlineCode",{parentName:"td"},"e2e/**/*.test.js"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // ...\n  "detox": {\n    // ...\n    "devices": {\n      // ... see below ...\n    },\n    "apps": {\n      // ... see below ...\n    },\n    "session": {\n      // ... see below ...\n    },\n    "configurations": {\n      "ios.sim.debug": {\n        "device": "simulator",\n        "app": "ios.debug"\n      },\n      "android.emu.release": {\n        "device": "emulator",\n        "app": "android.release"\n      },\n      "android.att.release": {\n        "device": "android.attached",\n        "app": "android.release"\n      },\n      "android.genymotion.release": {\n        "device": "android.genycloud",\n        "app": "android.release"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"device-configurations"},"Device configurations"),(0,i.kt)("p",null,"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        // one of these or a combination of them\n        "id": "D53474CF-7DD1-4673-8517-E75DAD6C34D6",\n        "type": "iPhone 11 Pro",\n        "name": "MySim",\n        "os": "iOS 13.0"\n      }\n    },\n    "emulator": {\n      "type": "android.emulator",\n      "device": {\n        "avdName": "Pixel_2_API_29"\n      },\n      "utilBinaryPaths": [\n        "optional-property-with/path/to/test-butler-or-anything-else.apk"\n      ]\n    },\n    "android.attached": {\n      "type": "android.attached",\n      "device": {\n        "adbName": "YOGAA1BBB412"\n      }\n    },\n    "android.genycloud": {\n      "type": "android.genycloud",\n      "device": {\n        "recipeUUID": "11111111-2222-3333-4444-555555555555"\n        // or recipeName: "MyRecipeName",\n      }\n    }\n  },\n  "apps": {\n    // ... see below ...\n  },\n  "configurations": {\n    // ... see above ...\n  }\n}\n')),(0,i.kt)("p",null,"A device config can have the following params:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Params"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},(0,i.kt)("strong",{parentName:"em"},"Required.")," String Literal"),". Mandatory property to discern device types: ",(0,i.kt)("inlineCode",{parentName:"td"},"ios.simulator"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"android.emulator"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"android.attached"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"android.genycloud"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ios.none"),", etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"device")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},(0,i.kt)("strong",{parentName:"em"},"Required.")," Object.")," Device query, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "byType": "iPhone 11 Pro" }')," for iOS simulator, ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "avdName": "Pixel_2_API_29" }')," for Android emulator or ",(0,i.kt)("inlineCode",{parentName:"td"},'{ "adbName": "<pattern>" }')," for attached Android device with name matching the regex.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bootArgs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. String. Supported by ",(0,i.kt)("inlineCode",{parentName:"em"},"ios.simulator")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,i.kt)("br",null)," Supply an extra ",(0,i.kt)("strong",{parentName:"td"},"string")," of arguments to ",(0,i.kt)("inlineCode",{parentName:"td"},"xcrun simctl boot ...")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"emulator -verbose ... @AVD_Name"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"forceAdbInstall")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. Boolean. Supported for Android devices only.")," ",(0,i.kt)("br",null)," A ",(0,i.kt)("strong",{parentName:"td"},"boolean")," value, ",(0,i.kt)("strong",{parentName:"td"},"false")," by default. When set ",(0,i.kt)("strong",{parentName:"td"},"true"),", it tells ",(0,i.kt)("inlineCode",{parentName:"td"},"device.installApp()")," to use ",(0,i.kt)("inlineCode",{parentName:"td"},"adb install"),". Otherwise, it would use the combination of ",(0,i.kt)("inlineCode",{parentName:"td"},"adb push <app.apk>")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"adb shell pm install"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"utilBinaryPaths")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. Array of strings. Supported for Android devices only.")," ",(0,i.kt)("br",null)," An array of relative paths of ",(0,i.kt)("em",{parentName:"td"},"utility")," app (APK) binary-files to preinstall on the tested devices - once before the test execution begins.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note"),": these are not affected by various install-lifecycle events, such as launching an app with ",(0,i.kt)("inlineCode",{parentName:"td"},"device.launchApp({delete: true})"),", which reinstalls the app. A good example of why this might come in handy is ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/linkedin/test-butler"},"Test Butler"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gpuMode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. String Literal (",(0,i.kt)("code",null,"auto ","|"," host ","|"," swiftshader","_","indirect ","|"," angle","_","indirect ","|"," guest"),"). Supported by ",(0,i.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,i.kt)("br",null)," A fixed ",(0,i.kt)("strong",{parentName:"td"},"string")," , which tells ",(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/run/emulator-acceleration#command-gpu"},"in which GPU mode")," the emulator should be booted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"headless")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. Boolean. Supported by ",(0,i.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,i.kt)("br",null),"  ",(0,i.kt)("em",{parentName:"td"},"False")," by default. When set to ",(0,i.kt)("em",{parentName:"td"},"true"),", it tells Detox to boot an Android emulator with ",(0,i.kt)("inlineCode",{parentName:"td"},"-no-window")," option.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"readonly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional. Boolean. Supported by ",(0,i.kt)("inlineCode",{parentName:"em"},"android.emulator")," only.")," ",(0,i.kt)("br",null),"  ",(0,i.kt)("em",{parentName:"td"},"False")," by default. When set to ",(0,i.kt)("em",{parentName:"td"},"true"),", it forces Detox to boot even a single emulator with ",(0,i.kt)("inlineCode",{parentName:"td"},"-read-only")," option.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note"),": when used with multiple workers, this setting has no effect \u2014 emulators will be booted always with ",(0,i.kt)("inlineCode",{parentName:"td"},"-read-only"),".")))),(0,i.kt)("p",null,"Also, in the Detox ",(0,i.kt)("inlineCode",{parentName:"p"},"configurations")," you can use the device configs as-is, without aliasing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "configurations": {\n    "ios.sim.debug": {\n      "device": {\n        "type": "ios.simulator",\n        "device": {\n          "type": "iPhone 12 Pro"\n        }\n      },\n      "app": "alias-to-app"\n      // ...\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"apps-configurations"},"Apps configurations"),(0,i.kt)("p",null,"The format of Detox config allows you to define inside it multiple app configs in a key-value manner, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "devices": {\n    // ... see above ...\n  },\n  "apps": {\n    "ios.debug": {\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",\n      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build"\n    },\n    "android.release": {\n      "type": "android.apk",\n      "binaryPath": "path/to/myApp.apk",\n      "build": "..."\n    }\n  },\n  "configurations": {\n    // ... see above ...\n  }\n}\n')),(0,i.kt)("p",null,"An app config can have the following params:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Params"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Mandatory property to discern app types: ",(0,i.kt)("inlineCode",{parentName:"td"},"ios.app"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"android.apk"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"Use only when working with multiple apps within the same configuration. See an example below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"binaryPath")),(0,i.kt)("td",{parentName:"tr",align:null},"Relative path to the ipa/app/apk due to be tested (make sure you build the app in a project relative path)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"[","optional]")," Build command (normally an ",(0,i.kt)("inlineCode",{parentName:"td"},"xcodebuild")," command you use to build your app), which can be called later using Detox CLI tool as a convenience.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"testBinaryPath")),(0,i.kt)("td",{parentName:"tr",align:null},"(optional, Android only): relative path to the test app (apk)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"launchArgs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"[","optional]")," An object specifying arguments (key-values pairs) to pass through into the app, upon launching on the device. For more info, refer to the dedicated ",(0,i.kt)("a",{parentName:"td",href:"/Detox/docs/api/launch-args"},"launch-arguments guide"),".")))),(0,i.kt)("p",null,"To work with multiple apps within the same configuration you should be giving each app its name, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "apps": {\n    "driver.ios.release": {\n      "type": "ios.app",\n      "name": "driver",\n      "binaryPath": "path/to/driver.app"\n    },\n    "passenger.ios.release": {\n      "type": "ios.app",\n      "name": "passenger",\n      "binaryPath": "path/to/passenger.app"\n    }\n  },\n  "configurations": {\n    "ios.release": {\n      "device": "simulator",\n      "apps": ["driver", "passenger"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"After that, you can change the current app in your tests via ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/device-object-api"},"device API"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await device.selectApp('driver');\nawait device.launchApp();\n// ... run tests ...\nawait device.selectApp('passenger');\nawait device.launchApp();\n// ... run tests ...\n")),(0,i.kt)("p",null,"Similar to device configs, any app config can be inlined as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "configurations": {\n    "ios.sim.debug": {\n      "device": "simulator",\n      "app": {\n        "type": "ios.app",\n        "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",\n        "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"artifacts-configuration"},"Artifacts Configuration"),(0,i.kt)("p",null,"See more details in ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/artifacts"},"artifacts doc"),"."),(0,i.kt)("p",null,"Detox can store artifacts such as transient screenshots and device logs.\nYou can control artifacts collection via Detox configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "artifacts": {\n    "rootDir": ".artifacts",\n    "pathBuilder": "./config/pathbuilder.js",\n    "plugins": {\n      "instruments": {"enabled": false},\n      "log": {"enabled": true},\n      "uiHierarchy": "enabled",\n      "screenshot": {\n        "shouldTakeAutomaticSnapshots": true,\n        "keepOnlyFailedTestsArtifacts": true,\n        "takeWhen": {\n          "testStart": false,\n          "testDone": true\n        }\n      },\n      "video": {\n        "android": {\n          "bitRate": 4000000\n        },\n        "simulator": {\n          "codec": "hevc"\n        }\n      }\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      // ...\n      "artifacts": {\n        "rootDir": ".artifacts/ios",\n        "plugins": {\n          "instruments": "all"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"As can be seen from the example above, in a specific configuration you may override individual properties from the default artifacts\nconfiguration. For instance, in the example above you can see that specifically in ",(0,i.kt)("inlineCode",{parentName:"p"},"ios.sim.release")," we turn on ",(0,i.kt)("inlineCode",{parentName:"p"},"instruments")," plugin."),(0,i.kt)("p",null,"CLI arguments (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"--artifacts-location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--record-logs"),") still have the highest priority and override their counterparts from JSON."),(0,i.kt)("p",null,"Also, that example demonstrates that you can use strings (identical to the ones from CLI) in parallel to the object configurations for plugins.\nBelow you can see mappings between the string presets and the corresponding objects:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"preset"),(0,i.kt)("th",{parentName:"tr",align:null},"object"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "enabled": false }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"all"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "enabled": true }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"failing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "enabled": true, "keepOnlyFailedTestsArtifacts": true }'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"manual"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "enabled": true, "shouldTakeAutomaticSnapshots": false }'))))),(0,i.kt)("p",null,"There is also a shortcut to disable artifacts for a specific configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "configurations": {\n    "ios.no-artifacts": {\n      // ...\n      "artifacts": false\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"behavior-configuration"},"Behavior Configuration"),(0,i.kt)("p",null,"If you need to tweak the flow of ",(0,i.kt)("inlineCode",{parentName:"p"},"detox.init()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"detox.cleanup()")," steps,\nyou have a few options to change. These are the default behavior values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "detox": {\n    "behavior": {\n      "init": {\n        "reinstallApp": true,\n        "exposeGlobals": true\n      },\n      "launchApp": "auto",\n      "cleanup": {\n        "shutdownDevice": false\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'launchApp: "auto"')," setting can be changed to ",(0,i.kt)("inlineCode",{parentName:"p"},'"manual"')," for cases when you want to debug the\nnative codebase when running Detox tests. Usually ",(0,i.kt)("strong",{parentName:"p"},"you never need that"),", but if you do, follow the\n",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/guide/debugging-in-android-studio"},"Debugging Apps in Android Studio During a Test")," guide to learn\nmore about this. When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"manual"),", it changes the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"reinstallApp")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"reinstallApp: false")," will make the tests reuse the currently installed app on the device,\nprovided you have installed it beforehand explicitly or manually."),(0,i.kt)("p",null,"If you do not wish to leak Detox globals (",(0,i.kt)("inlineCode",{parentName:"p"},"expect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"device"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"by"),", etc.) to the global\nscope, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},'"exposeGlobals": false')," and destructure them respectively from the\nexported Detox interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { by, device, expect, element } = require('detox');\n")),(0,i.kt)("p",null,"Also, you can override the behavior in specific Detox configurations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "behavior": {\n    // ... global behavior ...\n  },\n  "configurations": {\n    "ios.manual": {\n      "behavior": {\n        // ... overrides ...\n        "launchApp": "manual"\n        // ... overrides ...\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"server-configuration"},"Server Configuration"),(0,i.kt)("p",null,"Detox can either initialize a server using a generated configuration, or can be overridden with a manual configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "server": "ws://localhost:8099",\n    "sessionId": "YourProjectSessionId"\n  }\n}\n')),(0,i.kt)("p",null,"When you define a session config, the Detox server won\u2019t start automatically anymore \u2014 it is assumed that\nyou will be running it independently via ",(0,i.kt)("inlineCode",{parentName:"p"},"detox run-server")," CLI command. Alternatively, you can set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"autoStart")," property to be explicitly ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'   "session": {\n+    "autoStart": true,\n     "server": "ws://localhost:8099",\n     "sessionId": "YourProjectSessionId"\n')),(0,i.kt)("p",null,"Defining an explicit session config with ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionId")," also means you cannot use multiple workers,\nsince the specified port will become busy for any test worker next to the first one to occupy it."),(0,i.kt)("p",null,"Session can be set also per device configuration \u2014 then it takes a higher priority over the global\nsession config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configurations": {\n    "ios.sim.debug": {\n      // ...\n      "session": {\n        "server": "ws://localhost:8099",\n        "sessionId": "YourProjectSessionId"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Also, you can specify an optional numeric ",(0,i.kt)("inlineCode",{parentName:"p"},"debugSynchronization")," parameter\n(see also ",(0,i.kt)("inlineCode",{parentName:"p"},"--debug-synchronization")," in ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/detox-cli#test"},(0,i.kt)("inlineCode",{parentName:"a"},"detox-cli")," test section"),").\nWhen an action/expectation takes a significant amount time, use this option to print device synchronization status.\nThe status will be printed if the action takes more than ",(0,i.kt)("em",{parentName:"p"},"[","N]")," ms to complete."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "session": {\n    "debugSynchronization": 20000\n  }\n}\n')),(0,i.kt)("p",null,"To disable ",(0,i.kt)("inlineCode",{parentName:"p"},"debugSynchronization")," explicitly, use ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("h3",{id:"detox-cli"},(0,i.kt)("inlineCode",{parentName:"h3"},"detox-cli")),(0,i.kt)("h4",{id:"build-configuration"},"Build Configuration"),(0,i.kt)("p",null,"In your detox config (in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),") paste your build command into the configuration\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," field.\nThe build command will be triggered when running ",(0,i.kt)("inlineCode",{parentName:"p"},"detox build"),".\n",(0,i.kt)("strong",{parentName:"p"},"This is only a convenience method, to help you manage building multiple configurations of your app and couple them to your tests. You can also choose not to use it and provide a compiled ",(0,i.kt)("inlineCode",{parentName:"strong"},"app")," by yourself.")),(0,i.kt)("p",null,"You can choose to build your project in any of these ways..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there\u2019s only one configuration, you can simply use:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox build\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To choose a specific configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration yourConfiguration\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Building with ",(0,i.kt)("inlineCode",{parentName:"p"},"xcodebuild"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"xcodebuild -project ios/YourProject.xcodeproj -scheme YourProject -sdk iphonesimulator -derivedDataPath ios/build\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Building using React Native, this is the least suggested way of running your build, since it also starts a random simulator and installs the app on it."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native run-ios\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: remember to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," path in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,i.kt)("h4",{id:"test-configuration"},"Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there\u2019s only one configuration, you can simply use:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox test ./e2e\n")))),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"./e2e")," is the path to your Detox tests folder."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For multiple configurations, choose your configuration by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--configuration")," param:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox test ./e2e --configuration yourConfiguration\n")))),(0,i.kt)("h4",{id:"faster-test-runs-with-app-reuse"},"Faster Test Runs with App Reuse"),(0,i.kt)("p",null,"By default, the app is removed, reinstalled and launched before each run.\nStarting fresh is critical in CI but during the development you might be able to save time between test runs and reuse the app that was previously installed in the simulator. To do so use the ",(0,i.kt)("inlineCode",{parentName:"p"},"reuse")," flag and run your tests like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"detox test ./e2e --reuse\n")),(0,i.kt)("p",null,'This is especially useful with React Native development mode when making JavaScript code changes that are getting picked up by the packager (and thus no reinstall is needed). This can save up to 7 seconds per run!\nYou should not use this option if you made native code changes or if your app relies on local ("disk") storage.'))}u.isMDXComponent=!0}}]);