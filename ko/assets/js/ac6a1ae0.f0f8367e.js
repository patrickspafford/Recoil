(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[315],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9507:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},Highlight:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),i={id:"mdx",title:"Powered by MDX"},a={unversionedId:"mdx",id:"mdx",isDocsHomePage:!1,title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/mdx.md",sourceDirName:".",slug:"/mdx",permalink:"/ko/docs/mdx",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/mdx.md",version:"current",frontMatter:{id:"mdx",title:"Powered by MDX"}},u=[],l=function(e){var t=e.children,r=e.color;return(0,c.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",t," ")},p={toc:u,Highlight:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"You can write JSX and use React components within your Markdown thanks to ",(0,c.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,c.kt)(l,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,c.kt)(l,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,c.kt)("p",null,"I can write ",(0,c.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,c.kt)("em",{parentName:"p"},"JSX"),"!"))}s.isMDXComponent=!0}}]);