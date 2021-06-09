(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2353],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2510:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l={title:"noWait(state)",sidebar_label:"noWait()"},i={unversionedId:"api-reference/utils/noWait",id:"api-reference/utils/noWait",isDocsHomePage:!1,title:"noWait(state)",description:"\uc81c\uacf5\ub41c atom \ud639\uc740 selector\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc5d0 \ub300\ud55c Loadable\uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 selector helper\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/noWait.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/noWait",permalink:"/ko/docs/api-reference/utils/noWait",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/noWait.md",version:"current",sidebar_label:"noWait()",frontMatter:{title:"noWait(state)",sidebar_label:"noWait()"},sidebar:"docs",previous:{title:"errorSelector(message)",permalink:"/ko/docs/api-reference/utils/errorSelector"},next:{title:"waitForAll(dependencies)",permalink:"/ko/docs/api-reference/utils/waitForAll"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc81c\uacf5\ub41c ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," \ud639\uc740 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector")),"\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc5d0 \ub300\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable")),"\uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 selector helper\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function noWait<T>(state: RecoilValue<T>): RecoilValueReadOnly<Loadable<T>>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uc774 helper\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5d0\ub7ec\uac00 \uc874\uc7ac\ud558\uac70\ub098 \uc885\uc18d\uc774 \uc544\uc9c1 \ubcf4\ub958\uc911\uc778 \uacbd\uc6b0 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uc9c0 \uc54a\uace0 \uc7a0\uc7ac\uc801\uc778 \ube44\ub3d9\uae30 \uc885\uc18d\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 helper\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilValueLoadable"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilValueLoadable()")),"\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc, hook\uc774 \uc544\ub2cc selector\ub77c\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"noWait()"),"\uc740 selector\ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc5d0, \ub2e4\ub978 Recoil selector\ub4e4\uacfc hook\uc5d0\uc11c \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: ({get}) => {\n    const loadable = get(noWait(dbQuerySelector));\n\n    return {\n      hasValue: {data: loadable.contents},\n      hasError: {error: loadable.contents},\n      loading: {data: 'placeholder while loading'},\n    }[loadable.state];\n  }\n})\n\n")))}u.isMDXComponent=!0}}]);