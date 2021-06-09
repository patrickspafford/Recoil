(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7291],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,f=m["".concat(c,".").concat(h)]||m[h]||s[h]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6440:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={title:"Recoil 0.3.0"},i={permalink:"/blog/2021/05/14/0.3.0-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-05-14-0.3.0-released.md",source:"@site/blog/2021-05-14-0.3.0-released.md",title:"Recoil 0.3.0",description:"We are pleased to announce the release of Recoil 0.3.0.",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 13, 2021",tags:[],readingTime:1.73,truncated:!1,nextItem:{title:"Recoil 0.2.0",permalink:"/blog/2021/03/22/0.2.0-released"}},c=[{value:"New Features",id:"new-features",children:[]},{value:"Breaking Change: Preparing for Memory Management",id:"breaking-change-preparing-for-memory-management",children:[]},{value:"Bug Fixes, Performance, and Other Improvements",id:"bug-fixes-performance-and-other-improvements",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are pleased to announce the release of Recoil 0.3.0."),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can now create a RecoilRoot that falls through to the surrounding root if one exists. This lets you create re-usable components that use Recoil, yet can be used within or without the context of a larger Recoil app. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/973"},"#973"),")"),(0,o.kt)("li",{parentName:"ul"},"You can now return Recoil callbacks from selectors. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/989"},"#989"),")")),(0,o.kt)("h2",{id:"breaking-change-preparing-for-memory-management"},"Breaking Change: Preparing for Memory Management"),(0,o.kt)("p",null,"The next release of Recoil will have a breaking API change. Today's release issues a console warning in development builds if you have any code that will need to be updated. Most apps will not need any code changes."),(0,o.kt)("p",null,"When we ship memory management, Snapshots (such as the one you get as an argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()"),") will only be valid for the tick in which they are created. If you want to keep a Snapshot around for longer, you need to manually retain and then release it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const release = snapshot.retain();\ntry {\n  await someAsyncWork(snapshot);\n} finally {\n  release();\n}\n")),(0,o.kt)("p",null,"In 0.3.0, if you use a Snapshot that hasn't been retained, you will get a console warning in development. There is no change in behavior in production. In the next release, it will throw an exception, in both development and production."),(0,o.kt)("p",null,"Retaining Snapshots should be avoided whenever possible, because it will prevent reclaiming of memory for all atoms for as long as that Snapshot is retained. Instead, pull out just the values you need before going to async."),(0,o.kt)("h2",{id:"bug-fixes-performance-and-other-improvements"},"Bug Fixes, Performance, and Other Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduced overhead when using ",(0,o.kt)("inlineCode",{parentName:"li"},"atomFamily"),". One app with thousands of atoms saw 200MB less memory usage."),(0,o.kt)("li",{parentName:"ul"},"Fix a bug where errors throws from async selectors were not caught by React error boundaries. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/998"},"#998"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1017"},"#1017"),")"),(0,o.kt)("li",{parentName:"ul"},"Experimental Atom Effects ",(0,o.kt)("inlineCode",{parentName:"li"},"onSet()")," is no longer called when triggered from ",(0,o.kt)("inlineCode",{parentName:"li"},"setSelf()")," initializing with a Promise or from the same ",(0,o.kt)("inlineCode",{parentName:"li"},"onSet()")," handler.  (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/974"},"#974"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/979"},"#979"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/953"},"#953"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/986"},"#986"),")"),(0,o.kt)("li",{parentName:"ul"},"Improved support for Safari. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/967"},"#967"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/609"},"#609"),")"),(0,o.kt)("li",{parentName:"ul"},"Values stored in selectors are now frozen in dev mode. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/911"},"#911"),")"),(0,o.kt)("li",{parentName:"ul"},"Improved TypeScript support for ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),"s.")))}u.isMDXComponent=!0}}]);