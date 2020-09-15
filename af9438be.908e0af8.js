(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(6),a=(n(0),n(167)),c={title:"useGotoRecoilSnapshot(snapshot)",sidebar_label:"useGotoRecoilSnapshot()"},s={id:"api-reference/core/useGotoRecoilSnapshot",title:"useGotoRecoilSnapshot(snapshot)",description:"This hook returns a callback which takes a [`Snapshot`](/docs/api-reference/core/Snapshot) as a parameter and will update the current [`<RecoilRoot>`](/docs/api-reference/core/RecoilRoot) state to match this atom state.",source:"@site/docs/api-reference/core/useGotoRecoilSnapshot.md",permalink:"/docs/api-reference/core/useGotoRecoilSnapshot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useGotoRecoilSnapshot.md",sidebar_label:"useGotoRecoilSnapshot()",sidebar:"docs",previous:{title:"useRecoilSnapshot()",permalink:"/docs/api-reference/core/useRecoilSnapshot"},next:{title:"useRecoilCallback(callback, deps)",permalink:"/docs/api-reference/core/useRecoilCallback"}},i=[{value:"Time Travel Example",id:"time-travel-example",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This hook returns a callback which takes a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot"}),Object(a.b)("inlineCode",{parentName:"a"},"Snapshot"))," as a parameter and will update the current ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference/core/RecoilRoot"}),Object(a.b)("inlineCode",{parentName:"a"},"<RecoilRoot>"))," state to match this atom state."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function useGotoRecoilSnapshot(): Snapshot => void\n")),Object(a.b)("h3",{id:"time-travel-example"},"Time Travel Example"),Object(a.b)("p",null,"Example list of history of state changes with the ability to go back and restore previous global state."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  useRecoilTransactionObserver(({snapshot}) => {\n    setSnapshots([...snapshots, snapshot]);\n  });\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>\n            Restore\n          </button>\n        </li>\n      ))}\n    </ol>\n  );\n}\n")))}l.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,h=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return n?r.a.createElement(h,s({ref:t},p,{components:n})):r.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);