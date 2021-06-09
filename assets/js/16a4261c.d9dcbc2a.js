(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3721],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),l=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?i.createElement(d,a(a({ref:e},u),{},{components:n})):i.createElement(d,a({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a={title:"Motivation"},c={unversionedId:"introduction/motivation",id:"introduction/motivation",isDocsHomePage:!1,title:"Motivation",description:"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:",source:"@site/docs/introduction/motivation.md",sourceDirName:"introduction",slug:"/introduction/motivation",permalink:"/docs/introduction/motivation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/motivation.md",version:"current",frontMatter:{title:"Motivation"},sidebar:"docs",next:{title:"Core Concepts",permalink:"/docs/introduction/core-concepts"}},s=[],l={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Component state can only be shared by pushing it up to the common ancestor, but this might include a huge tree that then needs to re-render."),(0,o.kt)("li",{parentName:"ul"},"Context can only store a single value, not an indefinite set of values each with its own consumers."),(0,o.kt)("li",{parentName:"ul"},"Both of these make it difficult to code-split the top of the tree (where the state has to live) from the leaves of the tree (where the state is used).")),(0,o.kt)("p",null,"We want to improve this while keeping both the API and the semantics and behavior as Reactish as possible."),(0,o.kt)("p",null,"Recoil defines a directed graph orthogonal to but also intrinsic and attached to your React tree. State changes flow from the roots of this graph (which we call atoms) through pure functions (which we call selectors) and into components. With this approach:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We get a boilerplate-free API where shared state has the same simple get/set interface as React local state (yet can be encapsulated with reducers etc. if needed)."),(0,o.kt)("li",{parentName:"ul"},"We have the possibility of compatibility with Concurrent Mode and other new React features as they become available."),(0,o.kt)("li",{parentName:"ul"},"The state definition is incremental and distributed, making code-splitting possible."),(0,o.kt)("li",{parentName:"ul"},"State can be replaced with derived data without modifying the components that use it."),(0,o.kt)("li",{parentName:"ul"},"Derived data can move between being synchronous and asynchronous without modifying the components that use it."),(0,o.kt)("li",{parentName:"ul"},"We can treat navigation as a first-class concept, even encoding state transitions in links."),(0,o.kt)("li",{parentName:"ul"},"It's easy to persist the entire application state in a way that is backwards-compatible, so persisted states can survive application changes.")))}u.isMDXComponent=!0}}]);