(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8251],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4914:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"Recoil 0.0.10"},c={permalink:"/fr/blog/2020/06/18/0.0.10-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-06-18-0.0.10-released.md",source:"@site/blog/2020-06-18-0.0.10-released.md",title:"Recoil 0.0.10",description:"Recoil 0.0.9 and 0.0.10 is being released with some bug fixes, TypeScript support, and a new API for Recoil Snapshots to observe, inspect, and manage global Recoil atom state.  Thanks again to everyone who helped make this possible and stay tuned for more exciting developments coming soon!",date:"2020-06-18T00:00:00.000Z",formattedDate:"17 juin 2020",tags:[],readingTime:7.44,truncated:!0,prevItem:{title:"Recoil 0.0.11",permalink:"/fr/blog/2020/09/15/0.0.11-released"},nextItem:{title:"Recoil 0.0.8",permalink:"/fr/blog/2020/05/30/0.0.8-released"}},l=[],p={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recoil 0.0.9 and 0.0.10 is being released with some bug fixes, ",(0,a.kt)("a",{parentName:"p",href:"#typescript-support"},"TypeScript support"),", and a new API for ",(0,a.kt)("a",{parentName:"p",href:"#recoil-snapshots"},"Recoil Snapshots")," to observe, inspect, and manage global Recoil atom state.  Thanks again to everyone who helped make this possible and stay tuned for more exciting developments coming soon!"))}s.isMDXComponent=!0}}]);