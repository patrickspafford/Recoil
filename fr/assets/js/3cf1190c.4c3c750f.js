(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8585],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8070:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={title:"Installation"},l={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"Installation",description:"NPM",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/fr/docs/introduction/installation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/introduction/installation.md",version:"current",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Concepts de base",permalink:"/fr/docs/introduction/core-concepts"},next:{title:"Commencer",permalink:"/fr/docs/introduction/getting-started"}},s=[{value:"NPM",id:"npm",children:[{value:"Groupeur de modules",id:"groupeur-de-modules",children:[]},{value:"Prise en charge ES5",id:"prise-en-charge-es5",children:[]}]},{value:"RDC",id:"rdc",children:[]},{value:"ESLint",id:"eslint",children:[]},{value:"Version journali\xe8re",id:"version-journali\xe8re",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"npm"},"NPM"),(0,o.kt)("p",null,"Le packet Recoil est h\xe9berg\xe9 sur ",(0,o.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"}," npm "),". Pour installer la derni\xe8re version stable, utiliser la commande suivante:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),(0,o.kt)("p",null,"Ou si vous utilisez ",(0,o.kt)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),(0,o.kt)("h3",{id:"groupeur-de-modules"},"Groupeur de modules"),(0,o.kt)("p",null,"Recoil, install\xe9 via NPM, fonctionne sans soucis avec des groupeur de modules tels que ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," ou ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup"),"."),(0,o.kt)("h3",{id:"prise-en-charge-es5"},"Prise en charge ES5"),(0,o.kt)("p",null,"Recoil n'est pas transpil\xe9 vers ES5 et nous ne prenons pas en charge l'utilisation de Recoil avec ES5. Si vous avez besoin de prendre en charge des navigateurs qui ne fournissent pas un niveau de fonctionnalit\xe9s ES6 de mani\xe8re native, vous pouvez le compiler votre code avec ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," et en utilisant le preset ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env"),". Cependant, nous ne prenons pas en charge ce cas et vous \xeates suceptible de rencontrer des probl\xe8mes."),(0,o.kt)("p",null,"En particulier, ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/javascript-environment-requirements.html"},"tout comme React"),", Recoil d\xe9pend des types ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," et",(0,o.kt)("inlineCode",{parentName:"p"}," Set")," et d'autres fonctionnalit\xe9s d'ES6. L'\xe9mulation de ces fonctionnalit\xe9s \xe0 l'aide de polyfills peut entra\xeener des probl\xe8me de performances."),(0,o.kt)("h2",{id:"rdc"},"RDC"),(0,o.kt)("p",null,"Depuis la version 0.0.11, Recoil offre un packet UMD qui peut \xeatre directement utilis\xe9e dans une balise ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," et expose le symbole ",(0,o.kt)("inlineCode",{parentName:"p"},"Recoil")," globalement. Nous vous recommandons de cr\xe9er un lien vers un num\xe9ro de version et une version sp\xe9cifiques pour \xe9viter une rupture inattendue des versions plus r\xe9centes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src = "https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"> <\/script>\n')),(0,o.kt)("p",null,"Vous pouvez parcourir tous les fichiers Recoil sur le RDC \xe0 ",(0,o.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/recoil"},"jsdelivr"),"."),(0,o.kt)("h2",{id:"eslint"},"ESLint"),(0,o.kt)("p",null,"Si vous utilisez ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks")," dans votre projet. Par exemple, avec une configuration eslint comme celle-ci:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Configuration .eslint avant\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}\n')),(0,o.kt)("p",null,"Il est recommand\xe9 d'ajouter ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"'useRecoilCallback'"))," \xe0 la liste des ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalHooks"),". Avec ce changement, ESLint avertira lorsque les d\xe9pendances pass\xe9es \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()")," sont sp\xe9cifi\xe9es de mani\xe8re incorrecte et sugg\xe9rera un correctif. Le format de ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalHooks")," est une cha\xeene d'expression r\xe9guli\xe8re."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Configuration .eslint apr\xe8s\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": [\n      "warn", {\n        "additionalHooks": "useRecoilCallback"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"version-journali\xe8re"},"Version journali\xe8re"),(0,o.kt)("p",null,"Nous construisons un packet une fois par jour bas\xe9 sur la branche ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," courrente et le publions en tant que branche ",(0,o.kt)("inlineCode",{parentName:"p"},"nightly")," sur GitHub. Vous pouvez utiliser cette branche via ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,o.kt)("p",null,"ou ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add https://github.com/facebookexperimental/Recoil.nit#nightly\n")),(0,o.kt)("p",null,"ou ajoutez une d\xe9pendance dans ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," et ex\xe9cutez",(0,o.kt)("inlineCode",{parentName:"p"}," npm install")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  "recoil": "facebookexperimental/Recoil.git#nightly",\n')))}p.isMDXComponent=!0}}]);