(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7780],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1245:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return a},default:function(){return c}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),s={title:"S\xe9lecteurs"},l={unversionedId:"basic-tutorial/selectors",id:"basic-tutorial/selectors",isDocsHomePage:!1,title:"S\xe9lecteurs",description:"Un s\xe9lecteur repr\xe9sente une partie d'un \xe9tat d\xe9riv\xe9. Vous pouvez consid\xe9rer un \xe9tat d\xe9riv\xe9 comme la sortie d'un \xe9tat passant \xe0 une fonction pure qui modifie l'\xe9tat donn\xe9 d'une mani\xe8re ou d'une autre.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basic-tutorial/selectors.md",sourceDirName:"basic-tutorial",slug:"/basic-tutorial/selectors",permalink:"/fr/docs/basic-tutorial/selectors",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/basic-tutorial/selectors.md",version:"current",frontMatter:{title:"S\xe9lecteurs"},sidebar:"docs",previous:{title:"Atomes",permalink:"/fr/docs/basic-tutorial/atoms"},next:{title:"Requ\xeates de donn\xe9es asynchrones",permalink:"/fr/docs/guides/asynchronous-data-queries"}},a=[],u={toc:a};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un ",(0,i.kt)("strong",{parentName:"p"},"s\xe9lecteur")," repr\xe9sente une partie d'un ",(0,i.kt)("strong",{parentName:"p"},"\xe9tat d\xe9riv\xe9"),". Vous pouvez consid\xe9rer un \xe9tat d\xe9riv\xe9 comme la sortie d'un \xe9tat passant \xe0 une fonction pure qui modifie l'\xe9tat donn\xe9 d'une mani\xe8re ou d'une autre."),(0,i.kt)("p",null,"Un \xe9tat d\xe9riv\xe9 est un concept puissant car il nous permet de cr\xe9er des donn\xe9es dynamiques qui d\xe9pendent d'autres donn\xe9es. Dans le contexte de notre application de liste de t\xe2ches, les \xe9l\xe9ments suivants sont consid\xe9r\xe9s comme des \xe9tats d\xe9riv\xe9s:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Liste de t\xe2ches filtr\xe9e"),": d\xe9riv\xe9e de la liste de t\xe2ches compl\xe8te en cr\xe9ant une nouvelle liste dans laquelle certains \xe9l\xe9ments sont filtr\xe9s en fonction de certains crit\xe8res (tels que le filtrage des \xe9l\xe9ments d\xe9j\xe0 termin\xe9s)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Statistiques de la liste"),": d\xe9riv\xe9e de la liste compl\xe8te des t\xe2ches en calculant les attributs utiles de la liste, tels que le nombre total d'\xe9l\xe9ments dans la liste, le nombre d'\xe9l\xe9ments termin\xe9s et le pourcentage d'\xe9l\xe9ments termin\xe9s.")),(0,i.kt)("p",null,'Pour impl\xe9menter une liste de t\xe2ches filtr\xe9e, nous devons choisir un ensemble de crit\xe8res de filtrage dont la valeur peut \xeatre enregistr\xe9e dans un atome. Les options de filtrage que nous utiliserons sont: "Afficher tout", "Afficher termin\xe9s" et "Afficher non termin\xe9s". La valeur par d\xe9faut sera "Afficher tout":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListFilterState = atom({\n  key: 'todoListFilterState',\n  default: 'Show All',\n});\n")),(0,i.kt)("p",null,"En utilisant ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListFilterState")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListState"),", nous pouvons construire un s\xe9lecteur ",(0,i.kt)("inlineCode",{parentName:"p"},"filteredTodoListState")," qui d\xe9rive une liste filtr\xe9e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const filteredTodoListState = selector({\n  key: 'filteredTodoListState',\n  get: ({get}) => {\n    const filter = get(todoListFilterState);\n    const list = get(todoListState);\n\n    switch (filter) {\n      case 'Show Completed':\n        return list.filter((item) => item.isComplete);\n      case 'Show Uncompleted':\n        return list.filter((item) => !item.isComplete);\n      default:\n        return list;\n    }\n  },\n});\n")),(0,i.kt)("p",null,"Le ",(0,i.kt)("inlineCode",{parentName:"p"},"filteredTodoListState")," garde en interne la trace de deux d\xe9pendances:",(0,i.kt)("inlineCode",{parentName:"p"}," todoListFilterState")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListState")," afin qu'il se r\xe9ex\xe9cute si l'une de ces modifications change."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Du point de vue d'un composant, les s\xe9lecteurs peuvent \xeatre lus \xe0 l'aide des m\xeames crochets que ceux utilis\xe9s pour lire les atomes. Cependant, il est important de noter que certains hooks ne fonctionnent qu'avec ",(0,i.kt)("strong",{parentName:"p"},"l'\xe9tat inscriptible")," (c'est-\xe0-dire ",(0,i.kt)("inlineCode",{parentName:"p"},"useRecoilState()"),"). Tous les atomes sont \xe0 l'\xe9tat inscriptible, mais seuls certains s\xe9lecteurs sont consid\xe9r\xe9s comme un \xe9tat inscriptible (s\xe9lecteurs qui ont \xe0 la fois une propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," et",(0,i.kt)("inlineCode",{parentName:"p"}," set"),"). Consultez la page ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/core-concepts"},"Concepts de base")," pour plus d'informations sur ce sujet.")),(0,i.kt)("p",null,"Afficher notre todoList filtr\xe9e est aussi simple que de changer une ligne dans le composant ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoList"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function TodoList() {\n  // chang\xe9e fr todoListState vers filteredTodoListState\n  const todoList = useRecoilValue(filteredTodoListState);\n\n  return (\n    <>\n      <TodoListStats />\n      <TodoListFilters />\n      <TodoItemCreator />\n\n      {todoList.map((todoItem) => (\n        <TodoItem item={todoItem} key={todoItem.id} />\n      ))}\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"Notez que l'interface utilisateur affiche chaque t\xe2che car ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListFilterState")," a re\xe7u la valeur par d\xe9faut ",(0,i.kt)("inlineCode",{parentName:"p"},'"Afficher tout"'),". Afin de changer le filtre, nous devons impl\xe9menter le composant ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoListFilters"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'function TodoListFilters() {\n  const [filter, setFilter] = useRecoilState(todoListFilterState);\n\n  const updateFilter = ({target: {value}}) => {\n    setFilter(value);\n  };\n\n  return (\n    <>\n      Filter:\n      <select value={filter} onChange={updateFilter}>\n        <option value="Afficher tout">Tout</option>\n        <option value="Afficher Termin\xe9s">Termin\xe9s</option>\n        <option value="Afficher Non-termin\xe9s">Non-termin\xe9s</option>\n      </select>\n    </>\n  );\n}\n')),(0,i.kt)("p",null,"Avec quelques lignes de code, nous avons r\xe9ussi \xe0 impl\xe9menter le filtrage! Nous utiliserons les m\xeames concepts pour impl\xe9menter le composant ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoListStats"),"."),(0,i.kt)("p",null,"Nous voulons afficher les statistiques suivantes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nombre total de t\xe2ches \xe0 faire"),(0,i.kt)("li",{parentName:"ul"},"Nombre total de t\xe2ches termin\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Nombre total de t\xe2ches non termin\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Pourcentage de t\xe2ches termin\xe9es")),(0,i.kt)("p",null,"Bien que nous puissions cr\xe9er un s\xe9lecteur pour chacune des statistiques, une approche plus simple serait de cr\xe9er un s\xe9lecteur qui renvoie un objet contenant les donn\xe9es dont nous avons besoin. Nous appellerons ce s\xe9lecteur ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListStatsState"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListStatsState = selector({\n  key: 'todoListStatsState',\n  get: ({get}) => {\n    const todoList = get(todoListState);\n    const totalNum = todoList.length;\n    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;\n    const totalUncompletedNum = totalNum - totalCompletedNum;\n    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;\n\n    return {\n      totalNum,\n      totalCompletedNum,\n      totalUncompletedNum,\n      percentCompleted,\n    };\n  },\n});\n")),(0,i.kt)("p",null,"Pour lire la valeur de ",(0,i.kt)("inlineCode",{parentName:"p"},"todoListStatsState"),", nous utilisons \xe0 nouveau ",(0,i.kt)("inlineCode",{parentName:"p"},"useRecoilValue()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function TodoListStats() {\n  const {\n    totalNum,\n    totalCompletedNum,\n    totalUncompletedNum,\n    percentCompleted,\n  } = useRecoilValue(todoListStatsState);\n\n  const formattedPercentCompleted = Math.round(percentCompleted);\n\n  return (\n    <ul>\n      <li>Total items: {totalNum}</li>\n      <li>Items completed: {totalCompletedNum}</li>\n      <li>Items not completed: {totalUncompletedNum}</li>\n      <li>Percent completed: {formattedPercentCompleted}</li>\n    </ul>\n  );\n}\n")),(0,i.kt)("p",null,"Pour r\xe9sumer, nous avons cr\xe9\xe9 une application de liste de t\xe2ches qui r\xe9pond \xe0 toutes nos exigences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ajouter des t\xe2ches \xe0 faire"),(0,i.kt)("li",{parentName:"ul"},"Modifier les t\xe2ches \xe0 faire"),(0,i.kt)("li",{parentName:"ul"},"Supprimer les t\xe2ches \xe0 faire"),(0,i.kt)("li",{parentName:"ul"},"Filtrer les t\xe2ches \xe0 faire"),(0,i.kt)("li",{parentName:"ul"},"Afficher des statistiques utiles")))}c.isMDXComponent=!0}}]);