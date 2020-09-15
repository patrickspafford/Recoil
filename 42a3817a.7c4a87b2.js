(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(6),r=(n(0),n(167)),i={title:"Atoms"},c={id:"basic-tutorial/atoms",title:"Atoms",description:"Atoms contain the source of truth for our application state. In our todo-list, the source of truth will be an array of objects, with each object representing a todo item.",source:"@site/docs/basic-tutorial/atoms.mdx",permalink:"/docs/basic-tutorial/atoms",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/basic-tutorial/atoms.mdx",sidebar:"docs",previous:{title:"Intro",permalink:"/docs/basic-tutorial/intro"},next:{title:"Selectors",permalink:"/docs/basic-tutorial/selectors"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Atoms contain the source of truth for our application state. In our todo-list, the source of truth will be an array of objects, with each object representing a todo item."),Object(r.b)("p",null,"We'll call our list atom ",Object(r.b)("inlineCode",{parentName:"p"},"todoListState")," and create it using the ",Object(r.b)("inlineCode",{parentName:"p"},"atom()")," function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const todoListState = atom({\n  key: 'todoListState',\n  default: [],\n});\n")),Object(r.b)("p",null,"We give our atom a unique ",Object(r.b)("inlineCode",{parentName:"p"},"key")," and set the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," value to an empty array. To read the contents of this atom, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," hook in our ",Object(r.b)("inlineCode",{parentName:"p"},"TodoList")," component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function TodoList() {\n  const todoList = useRecoilValue(todoListState);\n\n  return (\n    <>\n      {/* <TodoListStats /> */}\n      {/* <TodoListFilters /> */}\n      <TodoItemCreator />\n\n      {todoList.map((todoItem) => (\n        <TodoItem key={todoItem.id} item={todoItem} />\n      ))}\n    </>\n  );\n}\n")),Object(r.b)("p",null,"The commented-out components will be implemented in the sections that follow."),Object(r.b)("p",null,"To create new todo items, we need to access a setter function that will update the contents of the ",Object(r.b)("inlineCode",{parentName:"p"},"todoListState"),". We can use the ",Object(r.b)("inlineCode",{parentName:"p"},"useSetRecoilState()")," hook to get a setter function in our ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemCreator")," component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function TodoItemCreator() {\n  const [inputValue, setInputValue] = useState('');\n  const setTodoList = useSetRecoilState(todoListState);\n\n  const addItem = () => {\n    setTodoList((oldTodoList) => [\n      ...oldTodoList,\n      {\n        id: getId(),\n        text: inputValue,\n        isComplete: false,\n      },\n    ]);\n    setInputValue('');\n  };\n\n  const onChange = ({target: {value}}) => {\n    setInputValue(value);\n  };\n\n  return (\n    <div>\n      <input type=\"text\" value={inputValue} onChange={onChange} />\n      <button onClick={addItem}>Add</button>\n    </div>\n  );\n}\n\n// utility for creating unique Id\nlet id = 0;\nfunction getId() {\n  return id++;\n}\n")),Object(r.b)("p",null,"Notice we use the ",Object(r.b)("strong",{parentName:"p"},"updater")," form of the setter function so that we can create a new todo list based on the old todo list."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," component will display the value of the todo item while allowing you to change its text and delete the item. We use ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilState()")," to read ",Object(r.b)("inlineCode",{parentName:"p"},"todoListState")," and to get a setter function that we use to update the item text, mark it as completed, and delete it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'function TodoItem({item}) {\n  const [todoList, setTodoList] = useRecoilState(todoListState);\n  const index = todoList.findIndex((listItem) => listItem === item);\n\n  const editItemText = ({target: {value}}) => {\n    const newList = replaceItemAtIndex(todoList, index, {\n      ...item,\n      text: value,\n    });\n\n    setTodoList(newList);\n  };\n\n  const toggleItemCompletion = () => {\n    const newList = replaceItemAtIndex(todoList, index, {\n      ...item,\n      isComplete: !item.isComplete,\n    });\n\n    setTodoList(newList);\n  };\n\n  const deleteItem = () => {\n    const newList = removeItemAtIndex(todoList, index);\n\n    setTodoList(newList);\n  };\n\n  return (\n    <div>\n      <input type="text" value={item.text} onChange={editItemText} />\n      <input\n        type="checkbox"\n        checked={item.isComplete}\n        onChange={toggleItemCompletion}\n      />\n      <button onClick={deleteItem}>X</button>\n    </div>\n  );\n}\n\nfunction replaceItemAtIndex(arr, index, newValue) {\n  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];\n}\n\nfunction removeItemAtIndex(arr, index) {\n  return [...arr.slice(0, index), ...arr.slice(index + 1)];\n}\n')),Object(r.b)("p",null,"And with that we've got a fully functional todo list! In the next section we'll see how we can use selectors to take our list to the next level."))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);