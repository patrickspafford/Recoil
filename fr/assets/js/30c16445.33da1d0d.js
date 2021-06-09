(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[825],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9704:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"waitForNone(dependencies)",sidebar_label:"waitForNone()"},l={unversionedId:"api-reference/utils/waitForNone",id:"api-reference/utils/waitForNone",isDocsHomePage:!1,title:"waitForNone(dependencies)",description:"Un assistant de concurrence qui renvoie un ensemble de [Loadables] (/docs/api-reference/core/Loadable) pour l'\xe9tat actuel des d\xe9pendances demand\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForNone.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForNone",permalink:"/fr/docs/api-reference/utils/waitForNone",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForNone.md",version:"current",sidebar_label:"waitForNone()",frontMatter:{title:"waitForNone(dependencies)",sidebar_label:"waitForNone()"},sidebar:"docs",previous:{title:"waitForAllSettled(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForAllSettled"},next:{title:"waitForAny(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForAny"}},c=[{value:"Exemple de chargement incr\xe9mentiel",id:"exemple-de-chargement-incr\xe9mentiel",children:[]}],u={toc:c};function s(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un assistant de concurrence qui renvoie un ensemble de ","[",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable"),"s]"," (/docs/api-reference/core/Loadable) pour l'\xe9tat actuel des d\xe9pendances demand\xe9es."),(0,o.kt)("p",null,"Les d\xe9pendances peuvent \xeatre fournies sous forme de tableau de tuples ou de d\xe9pendances nomm\xe9es dans un objet."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForNone(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForNone(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForNone()")," est similaire \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForAll"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForAll()")),", sauf qu'il retourne imm\xe9diatement et renvoie un ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," pour chaque d\xe9pendance au lieu des valeurs directement. Il est similaire \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/noWait"},(0,o.kt)("inlineCode",{parentName:"a"},"noWait()")),", sauf qu'il permet de demander plusieurs d\xe9pendances \xe0 la fois."),(0,o.kt)("p",null,"Cet assistant est utile pour travailler avec des donn\xe9es partielles ou mettre \xe0 jour de mani\xe8re incr\xe9mentielle l'interface utilisateur lorsque diff\xe9rentes donn\xe9es deviennent disponibles."),(0,o.kt)("h3",{id:"exemple-de-chargement-incr\xe9mentiel"},"Exemple de chargement incr\xe9mentiel"),(0,o.kt)("p",null,"Cet exemple rend un graphique avec plusieurs couches. Chaque couche a une requ\xeate de donn\xe9es potentiellement co\xfbteuse. Il rendra le graphique imm\xe9diatement en utilisant des fl\xe8ches pour chaque couche qui est toujours en attente et mettra \xe0 jour le graphique pour ajouter chaque nouvelle couche au fur et \xe0 mesure que les donn\xe9es de cette couche arrivent. Si l'une des couches a une erreur avec la requ\xeate, seule cette couche sera afficher un message d'erreur et le reste continuera \xe0 s'afficher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyChart({layerQueries}: {layerQueries: Array<RecoilValue<Layer>>}) {\n  const layerLoadables = useRecoilValue(waitForNone(layerQueries));\n\n  return (\n    <Chart>\n      {layerLoadables.map((layerLoadable, i) => {\n        switch (layerLoadable.state) {\n          case 'hasValue':\n            return <Layer key={i} data={layerLoadable.contents} />;\n          case 'hasError':\n            return <LayerErrorBadge key={i} error={layerLoadable.contents} />;\n          case 'loading':\n            return <LayerWithSpinner key={i} />;\n        }\n      })}\n    </Chart>\n  );\n}\n\n")))}s.isMDXComponent=!0}}]);