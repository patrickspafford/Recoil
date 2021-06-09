(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8706],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8483:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"atome(options)",sidebar_label:"atom()"},l={unversionedId:"api-reference/core/atom",id:"api-reference/core/atom",isDocsHomePage:!1,title:"atome(options)",description:"Un atome repr\xe9sente l'\xe9tat dans Recoil. La fonction atom() renvoie un objet RecoilState inscriptible.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/atom",permalink:"/fr/docs/api-reference/core/atom",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",version:"current",sidebar_label:"atom()",frontMatter:{title:"atome(options)",sidebar_label:"atom()"},sidebar:"docs",previous:{title:"<RecoilRoot ...props />",permalink:"/fr/docs/api-reference/core/RecoilRoot"},next:{title:"selector(options)",permalink:"/fr/docs/api-reference/core/selector"}},u=[{value:"Exemple",id:"exemple",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un ",(0,a.kt)("em",{parentName:"p"},"atome")," repr\xe9sente l'\xe9tat dans Recoil. La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"atom()")," renvoie un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilState")," inscriptible."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n\n  effects_UNSTABLE?: $ReadOnlyArray<AtomEffect<T>>,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - Une cha\xeene unique utilis\xe9e pour identifier l'atome en interne. Cette cha\xeene doit \xeatre unique par rapport aux autres atomes et s\xe9lecteurs dans l'ensemble de l'application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," - La valeur initiale de l'atome ou d'une",(0,a.kt)("inlineCode",{parentName:"li"}," Promise")," ou d'un autre atome ou s\xe9lecteur repr\xe9sentant une valeur du m\xeame type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"effects_UNSTABLE")," - Un tableau optionnel d'",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Effets Atomiques")," pour l'atome."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Dans certains cas, il peut \xeatre souhaitable d'autoriser la mutation d'objets stock\xe9s dans des atomes qui ne repr\xe9sentent pas des changements d'\xe9tat. Utilisez cette option pour remplacer le gel des objets en mode d\xe9veloppement.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Recoil g\xe8re les changements d'\xe9tat de l'atome pour savoir quand notifier les composants souscrivant \xe0 cet atome pour un nouveau rendu, vous devez donc utiliser les hooks r\xe9pertori\xe9s ci-dessous pour changer l'\xe9tat de l'atome. Si un objet stock\xe9 dans un atome a \xe9t\xe9 mut\xe9 directement, il peut le contourner et provoquer des changements d'\xe9tat sans notifier correctement les composants abonn\xe9s. Pour aider \xe0 d\xe9tecter les bogues, Recoil g\xe8lera les objets stock\xe9s dans les atomes en mode d\xe9veloppement."),(0,a.kt)("p",null,"Le plus souvent, vous utiliserez les crochets suivants pour interagir avec les atomes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilState()")),": Utilisez ce hook lorsque vous avez l'intention de lire et d'\xe9crire sur l'atome. Ce hook abonne le composant \xe0 l'atome."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilValue"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilValue()")),": utilisez ce hook lorsque vous avez l'intention de lire uniquement l'atome. Ce hook abonne le composant \xe0 l'atome."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetRecoilState()")),": utilisez ce hook lorsque vous avez l'intention d'\xe9crire uniquement sur l'atome."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useResetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useResetRecoilState()")),": utilisez ce hook pour r\xe9initialiser un atome \xe0 sa valeur par d\xe9faut.")),(0,a.kt)("p",null,"Pour les rares cas o\xf9 vous devez lire la valeur d'un atome sans vous abonner au composant, consultez ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),"."),(0,a.kt)("p",null,"Vous pouvez initialiser un atome soit avec une valeur statique, soit avec une ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," ou une",(0,a.kt)("inlineCode",{parentName:"p"}," RecoilValue")," repr\xe9sentant une valeur du m\xeame type. Parce que la ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," peut \xeatre en attente ou que le s\xe9lecteur par d\xe9faut peut \xeatre asynchrone, cela signifie que la valeur de l'atome peut \xe9galement \xeatre en attente ou g\xe9n\xe9rer une erreur lors de la lecture. Notez que vous ne pouvez pas actuellement attribuer de ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," lors de la d\xe9finition d'un atome. Veuillez utiliser des ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"s\xe9lecteurs")," pour les fonctions asynchrones."),(0,a.kt)("p",null,"Les atomes ne peuvent pas \xeatre utilis\xe9s pour stocker directement les \xabPromise\xbb ou \xabRecoilValue\xbb, mais ils peuvent \xeatre envelopp\xe9s dans un objet. Notez que les promesses peuvent \xeatre mutables. Les atomes peuvent \xeatre d\xe9finis sur une ",(0,a.kt)("inlineCode",{parentName:"p"},"fonction"),", tant qu'ils sont purs, mais pour ce faire, vous devrez peut-\xeatre utiliser la forme de mise \xe0 jour des setters. (par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"set (myAtom, () => myFunc);"),")."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilState} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counter);\n  const incrementByOne = () => setCount(count + 1);\n\n  return (\n    <div>\n      Count: {count}\n      <br />\n      <button onClick={incrementByOne}>Increment</button>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);