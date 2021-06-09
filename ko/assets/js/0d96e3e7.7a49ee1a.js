(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1531],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,d=m["".concat(i,".").concat(p)]||m[p]||f[p]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7780:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l={title:"Atom Effects",sidebar_label:"Atom Effects"},s={unversionedId:"guides/atom-effects",id:"guides/atom-effects",isDocsHomePage:!1,title:"Atom Effects",description:"Atom Effects\ub294 \ubd80\uc218\ud6a8\uacfc\ub97c \ud1b5\uc81c\ud558\uace0 Recoil\uc758 atom\uc744 \ucd08\uae30\ud654 \ud558\uae30 \uc704\ud55c \uc0c8\ub85c\uc6b4 \uc2e4\ud5d8\uc801 API\uc785\ub2c8\ub2e4. Atom Effects\ub294 state persistence(\uc0c1\ud0dc \uc9c0\uc18d\uc131), state synchronization(\uc0c1\ud0dc \ub3d9\uae30\ud654), managing history(\ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac), logging(\ub85c\uae45) \ub4f1\ub4f1 \uc720\uc6a9\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub2e4\uc591\ud558\uac8c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. Atom Effects\ub294 atom \uc815\uc758\uc758 \uc77c\ubd80\ub85c \uc815\uc758\ub418\ubbc0\ub85c \uac01 atom\uc740 \uc790\uccb4\uc801\uc778 \uc815\ucc45\ub4e4\uc744 \uc9c0\uc815\ud558\uace0 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 API\ub294 \uc544\uc9c1 \ubc1c\uc804\uc911\uc774\uba70, \uadf8\ub7ec\ubbc0\ub85c _UNSTABLE(\ubd88\uc548\uc815)\ub85c \ub9c8\ud06c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/atom-effects.md",sourceDirName:"guides",slug:"/guides/atom-effects",permalink:"/ko/docs/guides/atom-effects",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/guides/atom-effects.md",version:"current",sidebar_label:"Atom Effects",frontMatter:{title:"Atom Effects",sidebar_label:"Atom Effects"},sidebar:"docs",previous:{title:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac",permalink:"/ko/docs/guides/asynchronous-data-queries"},next:{title:"\ud14c\uc2a4\ud305",permalink:"/ko/docs/guides/testing"}},i=[{value:"<em>IMPORTANT NOTE</em>",id:"important-note",children:[{value:"Compared to React Effects (React Effects\uc640 \ube44\uad50)",id:"compared-to-react-effects-react-effects\uc640-\ube44\uad50",children:[]},{value:"Compared to Snapshots (\uc2a4\ub0c5\uc0f7\uacfc \ube44\uad50)",id:"compared-to-snapshots-\uc2a4\ub0c5\uc0f7\uacfc-\ube44\uad50",children:[]}]},{value:"Logging Example (\ub85c\uae45 \uc608\uc2dc)",id:"logging-example-\ub85c\uae45-\uc608\uc2dc",children:[]},{value:"History Example (\ud788\uc2a4\ud1a0\ub9ac \uc608\uc2dc)",id:"history-example-\ud788\uc2a4\ud1a0\ub9ac-\uc608\uc2dc",children:[]},{value:"State Synchronization Example (\uc0c1\ud0dc \ub3d9\uae30\ud654 \uc608\uc81c)",id:"state-synchronization-example-\uc0c1\ud0dc-\ub3d9\uae30\ud654-\uc608\uc81c",children:[]},{value:"Write-Through Cache Example (\uc5f0\uc18d \uae30\uc785 \uce90\uc2dc \uc608\uc81c)",id:"write-through-cache-example-\uc5f0\uc18d-\uae30\uc785-\uce90\uc2dc-\uc608\uc81c",children:[]},{value:"Local Storage Persistence (\ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uc9c0\uc18d\uc131)",id:"local-storage-persistence-\ub85c\uceec-\uc2a4\ud1a0\ub9ac\uc9c0-\uc9c0\uc18d\uc131",children:[]},{value:"Asynchronous Storage Persistence (\ube44\ub3d9\uae30\uc801 \uc2a4\ud1a0\ub9ac\uc9c0 \uc9c0\uc18d\uc131)",id:"asynchronous-storage-persistence-\ube44\ub3d9\uae30\uc801-\uc2a4\ud1a0\ub9ac\uc9c0-\uc9c0\uc18d\uc131",children:[{value:"Initialize with <code>Promise</code> (Promise\ub85c \ucd08\uae30\ud654\ud558\uae30)",id:"initialize-with-promise-promise\ub85c-\ucd08\uae30\ud654\ud558\uae30",children:[]},{value:"Asynchronous setSelf() (\ube44\ub3d9\uae30 setSelf())",id:"asynchronous-setself-\ube44\ub3d9\uae30-setself",children:[]}]},{value:"Backward Compatibility (\ud558\uc704 \ud638\ud658\uc131)",id:"backward-compatibility-\ud558\uc704-\ud638\ud658\uc131",children:[]},{value:"Browser URL History Persistence (\ube0c\ub77c\uc6b0\uc800 URL \ud788\uc2a4\ud1a0\ub9ac \uc9c0\uc18d\uc131)",id:"browser-url-history-persistence-\ube0c\ub77c\uc6b0\uc800-url-\ud788\uc2a4\ud1a0\ub9ac-\uc9c0\uc18d\uc131",children:[]}],c={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Atom Effects\ub294 \ubd80\uc218\ud6a8\uacfc\ub97c \ud1b5\uc81c\ud558\uace0 Recoil\uc758 atom\uc744 \ucd08\uae30\ud654 \ud558\uae30 \uc704\ud55c \uc0c8\ub85c\uc6b4 \uc2e4\ud5d8\uc801 API\uc785\ub2c8\ub2e4. Atom Effects\ub294 state persistence(\uc0c1\ud0dc \uc9c0\uc18d\uc131), state synchronization(\uc0c1\ud0dc \ub3d9\uae30\ud654), managing history(\ud788\uc2a4\ud1a0\ub9ac \uad00\ub9ac), logging(\ub85c\uae45) \ub4f1\ub4f1 \uc720\uc6a9\ud55c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub2e4\uc591\ud558\uac8c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. Atom Effects\ub294 atom \uc815\uc758\uc758 \uc77c\ubd80\ub85c \uc815\uc758\ub418\ubbc0\ub85c \uac01 atom\uc740 \uc790\uccb4\uc801\uc778 \uc815\ucc45\ub4e4\uc744 \uc9c0\uc815\ud558\uace0 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 API\ub294 \uc544\uc9c1 \ubc1c\uc804\uc911\uc774\uba70, \uadf8\ub7ec\ubbc0\ub85c _UNSTABLE(\ubd88\uc548\uc815)\ub85c \ub9c8\ud06c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"important-note"},(0,r.kt)("em",{parentName:"h2"},"IMPORTANT NOTE")),(0,r.kt)("p",null,"\uc774 API\ub294 \ud604\uc7ac \uac1c\ubc1c\uc911\uc774\uba70 \ubcc0\uacbd\uc810\uc774 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4..."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Atom Effect"),"\ub294 \ub2e4\uc74c\uc758 \uc815\uc758\ub97c \ub530\ub974\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type AtomEffect<T> = ({\n  node: RecoilState<T>, // A reference to the atom itself\n  trigger: 'get' | 'set', // The action which triggered initialization of the atom\n\n  // Callbacks to set or reset the value of the atom.\n  // This can be called from the atom effect function directly to initialize the\n  // initial value of the atom, or asynchronously called later to change it.\n  setSelf: (\n    | T\n    | DefaultValue\n    | Promise<T | DefaultValue> // Only allowed for initialization at this time\n    | ((T | DefaultValue) => T | DefaultValue),\n  ) => void,\n  resetSelf: () => void,\n\n  // Subscribe to changes in the atom value.\n  // The callback is not called due to changes from this effect's own setSelf().\n  onSet: (\n    (newValue: T | DefaultValue, oldValue: T | DefaultValue) => void,\n  ) => void,\n\n}) => void | () => void; // Optionally return a cleanup handler\n")),(0,r.kt)("p",null,"Atom Effects\ub294 effects_UNSTABLE \uc635\uc158\uc744 \ud1b5\ud574\uc11c atoms\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 atom\uc740 atom\uc774 \ucd08\uae30\ud654 \ub420 \ub54c \uc6b0\uc120 \uc21c\uc704\uc5d0 \ub530\ub77c \ud638\ucd9c\ub418\ub294 atom effect \ud568\uc218\ub4e4\uc758 \ubc30\uc5f4\uc744 \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Atom\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>")," \ub0b4\uc5d0\uc11c \ucc98\uc74c \uc0ac\uc6a9\ub420 \ub54c\uc5d0 \ucd08\uae30\ud654\ub418\uc9c0\ub9cc, \ub9cc\uc57d \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uac70\ub098 \uc815\ub9ac\ub418\uc5b4 \uc5c6\uc5b4\uc84c\uc744 \ub54c \ub2e4\uc2dc \ucd08\uae30\ud654 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Atom Effect \ud568\uc218\ub294 cleanup\uc758 \ubd80\uc218\ud6a8\uacfc\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574\uc11c \uc120\ud0dd\uc801 cleanup \ud578\ub4e4\ub7ec\ub97c \ub9ac\ud134\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: [\n    () => {\n      ...effect 1...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2... },\n  ],\n});\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/utils/atomFamily"},"Atom families"),"\ub294 \ub9e4\uac1c\ubcc0\uc218\ud654 \ud639\uc740 \ube44-\ub9e4\uac1c\ubcc0\uc218\ud654\ub41c \ud6a8\uacfc\ub4e4 \uc5ed\uc2dc \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myStateFamily = atomFamily({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: param => [\n    () => {\n      ...effect 1 using param...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2 using param... },\n  ],\n});\n")),(0,r.kt)("h3",{id:"compared-to-react-effects-react-effects\uc640-\ube44\uad50"},"Compared to React Effects (React Effects\uc640 \ube44\uad50)"),(0,r.kt)("p",null,"Atom Effects\ub294 \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ub9ac\uc561\ud2b8\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect()"),"\ub85c \ub300\uccb4\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 atom\uc758 \uc9d1\ud569\uc740 \ub9ac\uc561\ud2b8 \ucee8\ud14d\uc2a4\ud2b8\uc758 \uc678\ubd80\uc5d0\uc11c \uc0dd\uc131\ub418\uba70, \ud2b9\ud788 \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c atom\uc758 \uacbd\uc6b0 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\uc5d0\uc11c \ud6a8\uacfc\ub97c \uad00\ub9ac\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd08\uae30 atom \uac12\uc744 \ucd08\uae30\ud654\ud558\uac70\ub098 \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1(SSR)\uacfc \ud568\uaed8 \uc0ac\uc6a9\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. atom effects\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 effects\uc640 atom \uc815\uc758\ub97c \ud568\uaed8 \ubc30\uce58\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({key: 'Key', default: null});\n\nfunction MyStateEffect(): React.Node {\n  const [value, setValue] = useRecoilState(myState);\n  useEffect(() => {\n    // Called when the atom value changes\n    store.set(value);\n    store.onChange(setValue);\n    return () => { store.onChange(null); }; // Cleanup effect\n  }, [value]);\n  return null;\n}\n\nfunction MyApp(): React.Node {\n  return (\n    <div>\n      <MyStateEffect />\n      ...\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"compared-to-snapshots-\uc2a4\ub0c5\uc0f7\uacfc-\ube44\uad50"},"Compared to Snapshots (\uc2a4\ub0c5\uc0f7\uacfc \ube44\uad50)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/Snapshot#hooks"},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshot hooks"))," API\ub3c4 atom \uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \uac10\uc2dc\ud560 \uc218 \uc788\uc73c\uba70 ",(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/RecoilRoot"},(0,r.kt)("inlineCode",{parentName:"a"},"<RecoilRoot>")),"\uc758 initializeState prop\uc740 \ucd08\uae30 \ub80c\ub354\ub9c1\uc744 \uc704\ud55c \uac12\uc744 \ucd08\uae30\ud654 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774 API\ub4e4\uc740 \ubaa8\ub4e0 \uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \ub3d9\uc801 atom, \ud2b9\ud788 atom family\ub97c \uad00\ub9ac\ud558\ub294 \ub370\uc5d0\ub294 \uc5b4\uc0c9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Atom Effects\ub97c \uc0ac\uc6a9\ud558\uba74 atom \uc815\uc758\uc640 \ud568\uaed8 atom \ubcc4\ub85c \ubd80\uc218\ud6a8\uacfc\uac00 \uc815\uc758\ub420 \uc218 \uc788\uc73c\uba70 \uc5ec\ub7ec \uc815\ucc45\ub4e4\uc744 \uc27d\uac8c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"logging-example-\ub85c\uae45-\uc608\uc2dc"},"Logging Example (\ub85c\uae45 \uc608\uc2dc)"),(0,r.kt)("p",null,"atom effects\ub97c \uc0ac\uc6a9\ud558\ub294 \uac04\ub2e8\ud55c \uc608\uc2dc\ub294 \ud2b9\uc815 atom\uc758 \uc0c1\ud0dc \ubcc0\ud654\uc744 \uae30\ub85d\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: null,\n  effects_UNSTABLE: [\n    ({onSet}) => {\n      onSet(newID => {\n        console.debug(\"Current user ID:\", newID);\n      });\n    },\n  ],\n});\n")),(0,r.kt)("h2",{id:"history-example-\ud788\uc2a4\ud1a0\ub9ac-\uc608\uc2dc"},"History Example (\ud788\uc2a4\ud1a0\ub9ac \uc608\uc2dc)"),(0,r.kt)("p",null,"\ub85c\uae45\uc758 \ub354 \ubcf5\uc7a1\ud55c \uc608\uc2dc\ub294 \ubcc0\ud654\uc758 \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc2dc\ub294 \ud2b9\uc815 \ubcc0\ud654\ub97c \uc6d0\uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9ac\ub294 \ucf5c\ubc31 \ud578\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uc758 \ubcc0\uacbd \ub0b4\uc5ed \ud050\ub97c \uc720\uc9c0\ud558\ub294 \ud6a8\uacfc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const history: Array<{\n  label: string,\n  undo: () => void,\n}> = [];\n\nconst historyEffect = name => ({setSelf, onSet}) => {\n  onSet((newValue, oldValue) => {\n    history.push({\n      label: `${name}: ${JSON.serialize(oldValue)} -> ${JSON.serialize(newValue)}`,\n      undo: () => {\n        setSelf(oldValue);\n      },\n    });\n  });\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n  ],\n});\n")),(0,r.kt)("h2",{id:"state-synchronization-example-\uc0c1\ud0dc-\ub3d9\uae30\ud654-\uc608\uc81c"},"State Synchronization Example (\uc0c1\ud0dc \ub3d9\uae30\ud654 \uc608\uc81c)"),(0,r.kt)("p",null,"atom\uc744 \uc6d0\uaca9 \ub370\uc774\ud130\ubca0\uc774\uc2a4, \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \ub4f1 \ucc98\ub7fc \ub2e4\ub978 \uc0c1\ud0dc\uc758 \ub85c\uceec \uce90\uc2dc \uac12\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. store\uc758 \uac12\uc744 \uc5bb\uae30\uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\ud504\ub85c\ud37c\ud2f0\uc640 selector\ub97c \uc774\uc6a9\ud574 atom\uc758 \uae30\ubcf8\uac12\uc744 \uc124\uc815\ud574 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 \uc77c\ud68c\uc131 \uc870\ud68c \uc77c \ubfd0\uc785\ub2c8\ub2e4. store\uc758 \uac12\uc774 \ubcc0\uacbd\ub41c\ub2e4\uba74 atom\uc758 \uac12\uc740 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. effects\uc640 \ud568\uaed8\ub77c\uba74, store\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4  store\ub97c \uad6c\ub3c5\ud558\uace0 atom\uc758 \uac12\uc744 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. effect\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 \uadf8 \uac12\uc73c\ub85c atom\uc744 \ucd08\uae30\ud654\ud558\uace0 \ucd08\uae30 \ub80c\ub354\ub9c1\uc5d0 \uc774\uc6a9\ub420 \uac83\uc785\ub2c8\ub2e4. Atom\uc774 \ub9ac\uc14b\ub418\uba74, \ucd08\uae30\ud654\ub41c \uac12\uc774 \uc544\ub2c8\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\uac12\uc73c\ub85c \ub3cc\uc544\uac08\uac81\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, trigger}) => {\n  // Initialize atom value to the remote storage state\n  if (trigger === 'get') { // Avoid expensive initialization\n    setSelf(myRemoteStorage.get(userID)); // Call synchronously to initialize\n  }\n\n  // Subscribe to remote storage changes and update the atom value\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Call asynchronously to change value\n  });\n\n  // Cleanup remote storage subscription\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n    syncStorageEffect(userID),\n  ],\n});\n")),(0,r.kt)("h2",{id:"write-through-cache-example-\uc5f0\uc18d-\uae30\uc785-\uce90\uc2dc-\uc608\uc81c"},"Write-Through Cache Example (\uc5f0\uc18d \uae30\uc785 \uce90\uc2dc \uc608\uc81c)"),(0,r.kt)("p",null,"atom \uac12\uc744 \uc6d0\uaca9 \uc2a4\ud1a0\ub9ac\uc9c0\uc640 \uc591\ubc29\ud5a5\uc73c\ub85c \ub3d9\uae30\ud654 \ud560 \uc218\ub3c4 \uc788\uc73c\ubbc0\ub85c \uc11c\ubc84\uc758 \ubcc0\uacbd\uc810\uc774 atom \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0, \ub85c\uceec atom\uc758 \ubcc0\uacbd\uc810\uc740 \uc11c\ubc84\uc5d0 \ub2e4\uc2dc \uae30\ub85d\ud569\ub2c8\ub2e4. effect\ub294 \ud53c\ub4dc\ubc31 \ub8e8\ud504\ub97c \ud53c\ud558\uae30 \uc704\ud574\uc11c, \ud574\ub2f9 effect\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," \ub97c \ud1b5\ud574\uc11c \ubcc0\uacbd\ub420 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"onSet()"),"\ud578\ub4e4\ub7ec\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, onSet, trigger}) => {\n  // Initialize atom value to the remote storage state\n  if (trigger === 'get') { // Avoid expensive initialization\n    setSelf(myRemoteStorage.get(userID)); // Call synchronously to initialize\n  }\n\n  // Subscribe to remote storage changes and update the atom value\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Call asynchronously to change value\n  });\n\n  // Subscribe to local changes and update the server value\n  onSet(userInfo => {\n    myRemoteStorage.set(userID, userInfo);\n  });\n\n  // Cleanup remote storage subscription\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n")),(0,r.kt)("h2",{id:"local-storage-persistence-\ub85c\uceec-\uc2a4\ud1a0\ub9ac\uc9c0-\uc9c0\uc18d\uc131"},"Local Storage Persistence (\ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uc9c0\uc18d\uc131)"),(0,r.kt)("p",null,"Atom Effects\ub294 atom \uc0c1\ud0dc\ub97c \ube0c\ub77c\uc6b0\uc800 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc720\uc9c0\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \ub3d9\uae30\uc2dd\uc774\ubbc0\ub85c \ub370\uc774\ud130\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," \ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \uc5c6\uc774 \uc9c1\uc811 \ubc1b\uc544\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uc758 \uc608\uc81c \uc124\uba85\uc744 \uc704\ud574\uc11c \ub2e8\uc21c\ud654 \ub418\uc5c8\uc73c\uba70 \ubaa8\ub4e0 \ucf00\uc774\uc2a4\ub97c \ud3ec\ud568\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localStorageEffect = key => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(key)\n  if (savedValue != null) {\n    setSelf(JSON.parse(savedValue));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h2",{id:"asynchronous-storage-persistence-\ube44\ub3d9\uae30\uc801-\uc2a4\ud1a0\ub9ac\uc9c0-\uc9c0\uc18d\uc131"},"Asynchronous Storage Persistence (\ube44\ub3d9\uae30\uc801 \uc2a4\ud1a0\ub9ac\uc9c0 \uc9c0\uc18d\uc131)"),(0,r.kt)("p",null,"If your persisted data needs to be retrieved asynchronously, you can either ",(0,r.kt)("a",{parentName:"p",href:"#initialize-with-promise"},"use a ",(0,r.kt)("inlineCode",{parentName:"a"},"Promise"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," function or call it ",(0,r.kt)("a",{parentName:"p",href:"#asynchronous-setself"},"asynchronously"),"."),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," \ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"localForage"),"\ub97c \ube44\ub3d9\uae30 store\uc758 \uc608\uc2dc\ub85c \uc0ac\uc6a9\ud574 \ubcfc \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"initialize-with-promise-promise\ub85c-\ucd08\uae30\ud654\ud558\uae30"},"Initialize with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise")," (Promise\ub85c \ucd08\uae30\ud654\ud558\uae30)"),(0,r.kt)("p",null,"Promise\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\ub97c \ub3d9\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uba74,  ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot />")," \ub0b4\ubd80\uc758 \uad6c\uc131\uc694\uc18c\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense />")," \uad6c\uc131\uc694\uc18c\ub85c \uac10\uc2f8 Recoil\uc774 \uc9c0\uc18d \ub41c \uac12\uc744 \ub85c\ub4dc \ud560 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9ac\ub294 \ub3d9\uc548 fallcack\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\uc5d0 \uc81c\uacf5\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\uac00 resolve \ub420 \ub54c\uae4c\uc9c0 fallback\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. Atom\uc774 Promise\uac00 resolve \ub418\uae30 \uc804\uc5d0 \uac12\uc73c\ub85c \uc124\uc815\ub418\uba74 \ucd08\uae30\ud654\ub41c \uac12\uc740 \ubb34\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,'\ub098\uc911\uc758 atom\ub4e4\uc774 "\ub9ac\uc14b"\ub418\uba74, \ucd08\uae30\ud654\ub41c \uac12\uc774 \uc544\ub2c8\ub77c \uae30\ubcf8\uac12\uc73c\ub85c \ub418\ub3cc\uc544\uac11\ub2c8\ub2e4.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  setSelf(localForage.getItem(key).then(savedValue =>\n    savedValue != null\n      ? JSON.parse(savedValue)\n      : new DefaultValue() // Abort initialization if no value was stored\n  ));\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h3",{id:"asynchronous-setself-\ube44\ub3d9\uae30-setself"},"Asynchronous setSelf() (\ube44\ub3d9\uae30 setSelf())"),(0,r.kt)("p",null,"\uc774 \uc811\uadfc\ubc95\uc73c\ub85c, \uac12\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud560 \ub54c \ube44\ub3d9\uae30\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \ub85c \ucd08\uae30\ud654\ud558\ub294 \uac83\uacfc \ub2ec\ub9ac atom\uc758 \uae30\ubcf8\uac12\uc774 \ucc98\uc74c\uc73c\ub85c \uc0ac\uc6a9\ub418\ubbc0\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>"),"\ub294 atom\uc758 \uae30\ubcf8\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\uc774\uac70\ub098 async selector\uac00 \uc544\ub2c8\ub77c\uba74 fallback\uc744 \ud45c\uc2dc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d atom\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()")," \ud638\ucd9c \uc774\uc804\uc5d0 \uac12\uc73c\ub85c \uc124\uc815\ub418\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\ub85c \ub36e\uc5b4\uc50c\uc6cc\uc9d1\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc811\uadfc\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),"\uc5d0  \ud55c\uc815\ub418\uc9c0\ub9cc\uc740 \uc54a\uc73c\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout()")," \uacfc \uac19\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelf()"),"\uc758 \uc5b4\ub5a0\ud55c \ube44\ub3d9\uae30\uc801 \ud65c\uc6a9\uc744 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  /** If there's a persisted value - set it on load  */\n  const loadPersisted = async () => {\n    const savedValue = await localForage.getItem(key);\n\n    if (savedValue != null) {\n      setSelf(JSON.parse(savedValue));\n    }\n  };\n\n  // Load the persisted data\n  loadPersisted();\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localForage.removeItem(key);\n    } else {\n      localForage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,r.kt)("h2",{id:"backward-compatibility-\ud558\uc704-\ud638\ud658\uc131"},"Backward Compatibility (\ud558\uc704 \ud638\ud658\uc131)"),(0,r.kt)("p",null,"\ub9cc\uc57d atom\uc758 \ud3ec\ub9f7\uc744 \ubc14\uafbc\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \uc624\ub798\ub41c \ud3ec\ub9f7\uc744 \ubc14\ud0d5\uc73c\ub85c \ub9cc\ub4e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage"),"\uc640  \uc0c8\ub85c\uc6b4 \ud3ec\ub9f7\uc73c\ub85c \ud398\uc774\uc9c0\ub97c \ub85c\ub529\ud558\ub294 \uac83\uc740 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. effect\ub97c \uac12\uc758 \ubcf5\uad6c\uc640 \uc720\ud6a8\uc131 \uac80\uc0ac\uac00 type-safe\ud55c \ubc29\ubc95\uc73c\ub85c \ube4c\ub4dc\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(options.key)\n  if (savedValue != null) {\n    setSelf(options.restorer(JSON.parse(savedValue), new DefaultValue()));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue) =>\n        // values are currently persisted as numbers\n        typeof value === 'number'\n          ? value\n          // if value was previously persisted as a string, parse it to a number\n          : typeof value === 'string'\n          ? parseInt(value, 10)\n          // if type of value is not recognized, then use the atom's default value.\n          : defaultValue\n    }),\n  ],\n});\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \ud0a4\uac00 \uac12\uc758 \ubcc0\uacbd\uc744 \uc9c0\uc18d\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub418\uac70\ub098, \ud558\ub098\uc758 \ud0a4\ub9cc\uc73c\ub85c \uc9c0\uc18d\uc131\uc744 \uc720\uc9c0\ud558\ub358 \uac12\uc774 \uc774\uc81c\ub294 \uc5ec\ub7ec\uac1c\uc758 \ud0a4\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694? \uc544\ub2c8\uba74 \uadf8 \ubc18\ub300\ub294\uc694? \uc774\ub7ec\ud55c \ubd80\ubd84\ub4e4\ub3c4 type-safe\ud55c \ubc29\ubc95\uc73c\ub85c \ub2e4\ub8f0 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue, Map<string, mixed>) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValues = parseValuesFromStorage(localStorage);\n  const savedValue = savedValues.get(options.key);\n  setSelf(\n    options.restorer(savedValue ?? new DefaultValue(), new DefaultValue(), savedValues),\n  );\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue, values) => {\n        if (typeof value === 'number') {\n          return value;\n        }\n\n        const oldValue = values.get('old_key');\n        if (typeof oldValue === 'number') {\n          return oldValue;\n        }\n\n        return defaultValue;\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"browser-url-history-persistence-\ube0c\ub77c\uc6b0\uc800-url-\ud788\uc2a4\ud1a0\ub9ac-\uc9c0\uc18d\uc131"},"Browser URL History Persistence (\ube0c\ub77c\uc6b0\uc800 URL \ud788\uc2a4\ud1a0\ub9ac \uc9c0\uc18d\uc131)"),(0,r.kt)("p",null,"Atom \uc0c1\ud0dc\ub294 \ube0c\ub77c\uc6b0\uc800 URL \ud788\uc2a4\ud1a0\ub9ac\ub85c \uc9c0\uc18d\ub418\uace0 \ub3d9\uae30\ud654 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c1\ud0dc\uc758 \ubcc0\uacbd\uc774 \ud604\uc7ac\uc758 URL\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \uc800\uc7a5\ud558\uac70\ub098 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uacf5\uc720\ud558\uc5ec \ud574\ub2f9\ud558\ub294 \uc0c1\ud0dc\ub97c \ubcf5\uc6d0\ud558\ub294\ub370\uc5d0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800 \ud788\uc2a4\ud1a0\ub9ac\uc640 \ud1b5\ud569\ud558\uc5ec \ube0c\ub77c\uc6b0\uc800\uc758 \uc55e\uc73c\ub85c/\ub4a4\ub85c \ubc84\ud2bc\ub4e4\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"\uc774\ub7ec\ud55c \ud0c0\uc785\uc758 \uc9c0\uc18d\uc131\uc744 \uc81c\uacf5\ud558\ub294 \uc608\uc81c\ub098 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uace7 \uc81c\uacf5\ub420 \uc608\uc815\uc785\ub2c8\ub2e4...")))}u.isMDXComponent=!0}}]);