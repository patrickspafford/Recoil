(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4064],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8266:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={title:"\uc124\uce58"},i={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"\uc124\uce58",description:"NPM",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/ko/docs/introduction/installation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.md",version:"current",frontMatter:{title:"\uc124\uce58"},sidebar:"docs",previous:{title:"\uc8fc\uc694 \uac1c\ub150",permalink:"/ko/docs/introduction/core-concepts"},next:{title:"Recoil \uc2dc\uc791\ud558\uae30",permalink:"/ko/docs/introduction/getting-started"}},p=[{value:"NPM",id:"npm",children:[{value:"Bundler",id:"bundler",children:[]},{value:"ES5 \uc9c0\uc6d0",id:"es5-\uc9c0\uc6d0",children:[]}]},{value:"CDN",id:"cdn",children:[]},{value:"ESLint",id:"eslint",children:[]},{value:"Nightly Builds",id:"nightly-builds",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"npm"},"NPM"),(0,l.kt)("p",null,"Recoil \ud328\ud0a4\uc9c0\ub294 ",(0,l.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),"\uc5d0 \uc874\uc7ac\ud55c\ub2e4. \uc548\uc815\ud654\ub41c \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc124\uce58\ud558\ub824\uba74 \uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),(0,l.kt)("p",null,"\ub610\ub294 ",(0,l.kt)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),(0,l.kt)("h3",{id:"bundler"},"Bundler"),(0,l.kt)("p",null,"Recoil\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," \ub610\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup"),"\uacfc \uac19\uc740 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\uc640\ub3c4 \ubb38\uc81c\uc5c6\uc774 \ud638\ud658\ub41c\ub2e4."),(0,l.kt)("h3",{id:"es5-\uc9c0\uc6d0"},"ES5 \uc9c0\uc6d0"),(0,l.kt)("p",null,"Recoil \ube4c\ub4dc\ub294 ES5\ub85c \ud2b8\ub79c\uc2a4\ud30c\uc77c \ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c, Recoil\uc744 ES5\uc640 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4. ES6 \uae30\ub2a5\uc744 natively\ud558\uac8c \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\ub97c \uc9c0\uc6d0\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel"),"\ub85c \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\uace0 preset ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env"),"\uc744 \uc774\uc6a9\ud558\uc5ec \uc774\ub97c \uc218\ud589\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud2b9\ud788, ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/javascript-environment-requirements.html"},"React\uc640 \uac19\uc774"),", Recoil\uc740 ES6\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"Set")," \ud0c0\uc785\uc5d0 \uc758\uc874\ud558\ub294\ub370, \uc774\ub7ec\ud55c ES6\uc758 \uc694\uc18c\ub4e4\uc744 polyfills\ub97c \ud1b5\ud574 \uc5d0\ubbac\ub808\uc774\uc158\ud558\ub294 \uac83\uc740 \uc131\ub2a5\uc0c1\uc758 \ubb38\uc81c\ub97c \uc57c\uae30\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"cdn"},"CDN"),(0,l.kt)("p",null,"\ubc84\uc804 0.0.11 \uc774\ud6c4, Recoil\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," \ud0dc\uadf8\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 UMD \ube4c\ub4dc\ub97c \uc81c\uacf5\ud558\uba70 ",(0,l.kt)("inlineCode",{parentName:"p"},"Recoil")," \uc2ec\ubcfc\uc744 \uae00\ub85c\ubc8c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \ub178\ucd9c\uc2dc\ud0a8\ub2e4. \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c\ubd80\ud130 \uc608\uae30\uce58 \uc54a\uc740 \uc190\uc0c1\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc548\uc815\ub41c \ud2b9\uc815 \ubc84\uc804 \ubc88\ud638 \ubc0f \ube4c\ub4dc\uc5d0 \uc5f0\uacb0\uc2dc\ud0a4\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"><\/script>\n')),(0,l.kt)("p",null,"CDN\uc758 \ubaa8\ub4e0 Recoil \ud30c\uc77c\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/recoil"},"jsdelivr"),"\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"eslint"},"ESLint"),(0,l.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0. \uc608\ub97c \ub4e4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 eslint \uc124\uc815\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// \uc774\uc804\uc758 .eslint \uc124\uc815\n{\n  "plugins": ["react-hooks"],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"docs/api-reference/core/useRecoilCallback"},(0,l.kt)("inlineCode",{parentName:"a"},"'useRecoilCallback'")),"\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"additionalHooks")," \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc774 \uc88b\ub2e4. \uc774\ub97c \ucd94\uac00\ud558\uba74, ESLint\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()"),"\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc804\ub2ec\ub41c \uc885\uc18d\uc131\uc774 \uc798\ubabb \uc9c0\uc815\ub418\uc5c8\uc744 \ub54c \uacbd\uace0\ub97c \ud45c\uc2dc\ud558\uace0 \ud574\uacb0 \ubc29\uc548\uc744 \uc81c\uc2dc\ud55c\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"additionalHooks"),"\uc758 \ud615\uc2dd\uc740 \uc815\uaddc\uc2dd(regex) \ubb38\uc790\uc5f4\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// \uc218\uc815\ub41c .eslint \uc124\uc815\n{\n  "plugins": ["react-hooks"],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": [\n      "warn",\n      {\n        "additionalHooks": "useRecoilCallback"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"nightly-builds"},"Nightly Builds"),(0,l.kt)("p",null,"\uc6b0\ub9ac\ub294 \ub9e4\uc77c \ud55c \ubc88\uc529 \ud604\uc7ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \ube0c\ub79c\uce58\uc5d0 \uae30\ubc18\ud558\uc5ec \ud328\ud0a4\uc9c0\ub97c \ube4c\ub4dc\ud558\uace0 GitHub\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"nightly")," \ube0c\ub79c\uce58\ub85c \ubc30\ud3ec\ud55c\ub2e4. \uc544\ub798\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"nightly")," \ube0c\ub79c\uce58\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,l.kt)("p",null," \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,l.kt)("p",null,"  \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc5d0 \uc885\uc18d\uc131\uc744 \ucd94\uac00\ud55c \ub4a4, ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install")," \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  "recoil": "facebookexperimental/Recoil.git#nightly",\n')))}s.isMDXComponent=!0}}]);