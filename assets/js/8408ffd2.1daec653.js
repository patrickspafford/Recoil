(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[925],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8210:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l={title:"Atom Effects",sidebar_label:"Atom Effects"},s={unversionedId:"guides/atom-effects",id:"guides/atom-effects",isDocsHomePage:!1,title:"Atom Effects",description:"Atom Effects are a new experimental API for managing side-effects and initializing Recoil atoms.  They have a variety of useful applications such as state persistence, state synchronization, managing history, logging, &c.  They are defined as part of the atom definition, so each atom can specify and compose their own policies.  This API is still evolving, and thus marked as _UNSTABLE.",source:"@site/docs/guides/atom-effects.md",sourceDirName:"guides",slug:"/guides/atom-effects",permalink:"/docs/guides/atom-effects",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/guides/atom-effects.md",version:"current",sidebar_label:"Atom Effects",frontMatter:{title:"Atom Effects",sidebar_label:"Atom Effects"},sidebar:"docs",previous:{title:"Asynchronous Data Queries",permalink:"/docs/guides/asynchronous-data-queries"},next:{title:"Testing",permalink:"/docs/guides/testing"}},i=[{value:"<em>IMPORTANT NOTE</em>",id:"important-note",children:[{value:"Compared to React Effects",id:"compared-to-react-effects",children:[]},{value:"Compared to Snapshots",id:"compared-to-snapshots",children:[]}]},{value:"Logging Example",id:"logging-example",children:[]},{value:"History Example",id:"history-example",children:[]},{value:"State Synchronization Example",id:"state-synchronization-example",children:[]},{value:"Write-Through Cache Example",id:"write-through-cache-example",children:[]},{value:"Local Storage Persistence",id:"local-storage-persistence",children:[]},{value:"Asynchronous Storage Persistence",id:"asynchronous-storage-persistence",children:[{value:"Initialize with <code>Promise</code>",id:"initialize-with-promise",children:[]},{value:"Asynchronous setSelf()",id:"asynchronous-setself",children:[]}]},{value:"Backward Compatibility",id:"backward-compatibility",children:[]},{value:"Browser URL History Persistence",id:"browser-url-history-persistence",children:[]}],c={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Atom Effects are a new experimental API for managing side-effects and initializing Recoil atoms.  They have a variety of useful applications such as state persistence, state synchronization, managing history, logging, &c.  They are defined as part of the atom definition, so each atom can specify and compose their own policies.  This API is still evolving, and thus marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"_UNSTABLE"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"important-note"},(0,r.kt)("em",{parentName:"h2"},"IMPORTANT NOTE")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"This API is currently under development and will change.  Please stay tuned..."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"atom effect")," is a ",(0,r.kt)("em",{parentName:"p"},"function")," with the following definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type AtomEffect<T> = ({\n  node: RecoilState<T>, // A reference to the atom itself\n  trigger: 'get' | 'set', // The action which triggered initialization of the atom\n\n  // Callbacks to set or reset the value of the atom.\n  // This can be called from the atom effect function directly to initialize the\n  // initial value of the atom, or asynchronously called later to change it.\n  setSelf: (\n    | T\n    | DefaultValue\n    | Promise<T | DefaultValue> // Only allowed for initialization at this time\n    | ((T | DefaultValue) => T | DefaultValue),\n  ) => void,\n  resetSelf: () => void,\n\n  // Subscribe to changes in the atom value.\n  // The callback is not called due to changes from this effect's own setSelf().\n  onSet: (\n    (newValue: T | DefaultValue, oldValue: T | DefaultValue) => void,\n  ) => void,\n\n}) => void | () => void; // Optionally return a cleanup handler\n")),(0,r.kt)("p",null,"Atom effects are attached to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atoms")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"effects_UNSTABLE")," option.  Each atom can reference an array of these atom effect functions which are called in priority order when the atom is initialized.  Atoms are initialized when they are used for the first time within a ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),", but may be re-initialized again if they were unused and cleaned up.  The atom effect function may return an optional cleanup handler to manage cleanup side-effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: [\n    () => {\n      ...effect 1...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2... },\n  ],\n});\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/atomFamily"},"Atom families")," also support parameterized or non-parameterized effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myStateFamily = atomFamily({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: param => [\n    () => {\n      ...effect 1 using param...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2 using param... },\n  ],\n});\n")),(0,r.kt)("h3",{id:"compared-to-react-effects"},"Compared to React Effects"),(0,r.kt)("p",null,"Atom effects could mostly be implemented via React ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect()"),".  However, the set of atoms are created outside of a React context, and it can be difficult to manage effects from within React components, particularly for dynamically created atoms.  They also cannot be used to initialize the initial atom value or be used with server-side rendering.  Using atom effects also co-locates the effects with the atom definitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({key: 'Key', default: null});\n\nfunction MyStateEffect(): React.Node {\n  const [value, setValue] = useRecoilState(myState);\n  useEffect(() => {\n    // Called when the atom value changes\n    store.set(value);\n    store.onChange(setValue);\n    return () => { store.onChange(null); }; // Cleanup effect\n  }, [value]);\n  return null;\n}\n\nfunction MyApp(): React.Node {\n  return (\n    <div>\n      <MyStateEffect />\n      ...\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"compared-to-snapshots"},"Compared to Snapshots"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#hooks"},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshot hooks"))," API can also monitor atom state changes and the ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeState")," prop in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/RecoilRoot"},(0,r.kt)("inlineCode",{parentName:"a"},"<RecoilRoot>"))," can initialize values for initial render. However, these APIs monitor all state changes and can be awkward to manage dynamic atoms, particularly atom families.  With atom effects, the side-effect can be defined per-atom alongside the atom definition and multiple policies can be easily composed."),(0,r.kt)("h2",{id:"logging-example"},"Logging Example"),(0,r.kt)("p",null,"A simple example of using atom effects are for logging a specific atom's state changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: null,\n  effects_UNSTABLE: [\n    ({onSet}) => {\n      onSet(newID => {\n        console.debug(\"Current user ID:\", newID);\n      });\n    },\n  ],\n});\n")),(0,r.kt)("h2",{id:"history-example"},"History Example"),(0,r.kt)("p",null,"A more complex example of logging might maintain a history of changes.  This example provides an effect which maintains a history queue of state changes with callback handlers that undo that particular change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const history: Array<{\n  label: string,\n  undo: () => void,\n}> = [];\n\nconst historyEffect = name => ({setSelf, onSet}) => {\n  onSet((newValue, oldValue) => {\n    history.push({\n      label: `${name}: ${JSON.serialize(oldValue)} -> ${JSON.serialize(newValue)}`,\n      undo: () => {\n        setSelf(oldValue);\n      },\n    });\n  });\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n  ],\n});\n")),(0,r.kt)("h2",{id:"state-synchronization-example"},"State Synchronization Example"),(0,r.kt)("p",null,"It can be useful to use atoms as a local cached value of some other state such as a remote database, local storage, &c.  You could set the default value of an atom using the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," property with a selector to get the store's value.  However, that is only a one-time lookup; if the store's value changes the atom value will not change.  With effects, we can subscribe to the store and update the atom's value whenever the store changes.  Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," from the effect will initialize the atom to that value and will be used for the initial render.  If the atom is reset, it will revert to the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value, not the initialized value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, trigger}) => {\n  // Initialize atom value to the remote storage state\n  if (trigger === 'get') { // Avoid expensive initialization\n    setSelf(myRemoteStorage.get(userID)); // Call synchronously to initialize\n  }\n\n  // Subscribe to remote storage changes and update the atom value\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Call asynchronously to change value\n  });\n\n  // Cleanup remote storage subscription\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n    syncStorageEffect(userID),\n  ],\n});\n")),(0,r.kt)("h2",{id:"write-through-cache-example"},"Write-Through Cache Example"),(0,r.kt)("p",null,"We can also bi-directionally sync atom values with remote storage so changes on the server update the atom value and changes in the local atom are written back to the server.  The effect will not call the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSet()")," handler when changed via that effect's ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," to help avoid feedback loops."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, onSet, trigger}) => {\n  // Initialize atom value to the remote storage state\n  if (trigger === 'get') { // Avoid expensive initialization\n    setSelf(myRemoteStorage.get(userID)); // Call synchronously to initialize\n  }\n\n  // Subscribe to remote storage changes and update the atom value\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Call asynchronously to change value\n  });\n\n  // Subscribe to local changes and update the server value\n  onSet(userInfo => {\n    myRemoteStorage.set(userID, userInfo);\n  });\n\n  // Cleanup remote storage subscription\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n")),(0,r.kt)("h2",{id:"local-storage-persistence"},"Local Storage Persistence"),(0,r.kt)("p",null,"Atom effects can be used to persist atom state with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"browser local storage"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," is synchronous, so we can retrieve the data directly without ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,r.kt)("p",null,"Note that the following examples are simplified for illustrative purposes and do not cover all cases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localStorageEffect = key => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(key)\n  if (savedValue != null) {\n    setSelf(JSON.parse(savedValue));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h2",{id:"asynchronous-storage-persistence"},"Asynchronous Storage Persistence"),(0,r.kt)("p",null,"If your persisted data needs to be retrieved asynchronously, you can either ",(0,r.kt)("a",{parentName:"p",href:"#initialize-with-promise"},"use a ",(0,r.kt)("inlineCode",{parentName:"a"},"Promise"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," function or call it ",(0,r.kt)("a",{parentName:"p",href:"#asynchronous-setself"},"asynchronously"),"."),(0,r.kt)("p",null,"Below we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"localForage")," as an example of an asynchronous store."),(0,r.kt)("h3",{id:"initialize-with-promise"},"Initialize with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise")),(0,r.kt)("p",null,"By synchronously calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", you'll be able to wrap the components inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot/>")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," component to show a fallback while waiting for ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil")," to load the persisted values.  ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," will show a fallback until the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," resolves.  If the atom is set to a value before the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," resolves then the initialized value will be ignored."),(0,r.kt)("p",null,"Note that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"atoms"),' later are "reset", they will revert to their default value, and not the initialized value.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  setSelf(localForage.getItem(key).then(savedValue =>\n    savedValue != null\n      ? JSON.parse(savedValue)\n      : new DefaultValue() // Abort initialization if no value was stored\n  ));\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h3",{id:"asynchronous-setself"},"Asynchronous setSelf()"),(0,r.kt)("p",null,"With this approach, you can asynchronously call ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," when the value is available.  Unlike initializing to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", the atom's default value will be used initially, so ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," will not show a fallback unless the atom's default is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," or async selector.  If the atom is set to a value before the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," is called, then it will be overwritten by the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),".  This approach isn't just limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),", but for any asynchronous usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  /** If there's a persisted value - set it on load  */\n  const loadPersisted = async () => {\n    const savedValue = await localForage.getItem(key);\n\n    if (savedValue != null) {\n      setSelf(JSON.parse(savedValue));\n    }\n  };\n\n  // Load the persisted data\n  loadPersisted();\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localForage.removeItem(key);\n    } else {\n      localForage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h2",{id:"backward-compatibility"},"Backward Compatibility"),(0,r.kt)("p",null,"What if you change the format for an atom?  Loading a page with the new format with a ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," based on the old format could cause a problem.  You could build effects to handle restoring and validating the value in a type safe way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(options.key)\n  if (savedValue != null) {\n    setSelf(options.restorer(JSON.parse(savedValue), new DefaultValue()));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue) =>\n        // values are currently persisted as numbers\n        typeof value === 'number'\n          ? value\n          // if value was previously persisted as a string, parse it to a number\n          : typeof value === 'string'\n          ? parseInt(value, 10)\n          // if type of value is not recognized, then use the atom's default value.\n          : defaultValue\n    }),\n  ],\n});\n")),(0,r.kt)("p",null,"What if the key used to persist the value changes?  Or what used to be persisted using one key now uses several?  Or vice versa?  That can also be handled in a type-safe way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue, Map<string, mixed>) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValues = parseValuesFromStorage(localStorage);\n  const savedValue = savedValues.get(options.key);\n  setSelf(\n    options.restorer(savedValue ?? new DefaultValue(), new DefaultValue(), savedValues),\n  );\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue, values) => {\n        if (typeof value === 'number') {\n          return value;\n        }\n\n        const oldValue = values.get('old_key');\n        if (typeof oldValue === 'number') {\n          return oldValue;\n        }\n\n        return defaultValue;\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"browser-url-history-persistence"},"Browser URL History Persistence"),(0,r.kt)("p",null,"Atom state can also be persisted and synced with the browser URL history.  This can be useful to have state changes update the current URL so it can be saved or shared with others to restore that state.  It can also be integrated with the browser history to leverage the browser forward/back buttons.  ",(0,r.kt)("em",{parentName:"p"},"Examples or a library to provide this type of persistence are coming soon...")))}u.isMDXComponent=!0}}]);