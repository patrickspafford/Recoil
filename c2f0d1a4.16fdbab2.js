(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),c=(r(0),r(167)),a={title:"useRecoilBridgeAcrossReactRoots()",sidebar_label:"useRecoilBridgeAcrossReactRoots()"},i={id:"api-reference/core/useRecoilBridgeAcrossReactRoots",title:"useRecoilBridgeAcrossReactRoots()",description:"A hook to help with bridging Recoil state with a nested React root and renderer.",source:"@site/docs/api-reference/core/useRecoilBridgeAcrossReactRoots.md",permalink:"/docs/api-reference/core/useRecoilBridgeAcrossReactRoots",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilBridgeAcrossReactRoots.md",sidebar_label:"useRecoilBridgeAcrossReactRoots()",sidebar:"docs",previous:{title:"useRecoilCallback(callback, deps)",permalink:"/docs/api-reference/core/useRecoilCallback"},next:{title:"atomFamily(options)",permalink:"/docs/api-reference/utils/atomFamily"}},s=[{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A hook to help with bridging Recoil state with a nested React root and renderer."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function useRecoilBridgeAcrossReactRoots_UNSTABLE():\n  React.AbstractComponent<{children: React.Node}>;\n")),Object(c.b)("p",null,"If a nested React root is created with ",Object(c.b)("inlineCode",{parentName:"p"},"ReactDOM.render()"),', or a nested custom renderer is used, React will not propagate context state to the child root.  This hook is useful if you would like to "bridge" and share Recoil state with a nested React root.  The hook returns a React component which you can use instead of ',Object(c.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," in your nested React root to share the same consistent Recoil store state. As with any state sharing across React roots, changes may not be perfectly synchronized in all cases."),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function Bridge() {\n  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();\n\n  return (\n    <CustomRenderer>\n      <RecoilBridge>\n        ...\n      </RecoilBridge>\n    </CustomRenderer>\n  );\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      ...\n      <Bridge />\n    </RecoilRoot>\n  );\n}\n")))}u.isMDXComponent=!0},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return r?o.a.createElement(f,i({ref:t},l,{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);