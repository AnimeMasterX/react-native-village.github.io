(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return r?o.a.createElement(b,u(u({ref:t},p),{},{components:r})):o.a.createElement(b,u({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},178:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/patreon-15b4e66595efdb2e079faf18b89cff7c.png"},252:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/06-0603e0a89e1e7f4e323cc88d0de3bbb1.gif"},60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(177)),c={id:"redux-06",title:"Thunk",sidebar_label:"Thunk"},u={unversionedId:"redux-06",id:"redux-06",isDocsHomePage:!1,title:"Thunk",description:"\u0418 \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u043c\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043d\u0430\u0448\u0438 \u0444\u0438\u043b\u044c\u043c\u044b, \u0447\u0435\u0440\u0435\u0437 Thunk. \u0421\u0430\u043c Redux \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435, \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u043a redux-thunk \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.",source:"@site/docs/redux06.md",slug:"/redux-06",permalink:"/docs/redux-06",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/redux06.md",version:"current",sidebar_label:"Thunk",sidebar:"someSidebar",previous:{title:"Boilerplate",permalink:"/docs/redux-05"},next:{title:"UI Kit - Unicorn",permalink:"/docs/unicorn00"}},i=[],p={rightToc:i};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0418 \u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u043c\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043d\u0430\u0448\u0438 \u0444\u0438\u043b\u044c\u043c\u044b, \u0447\u0435\u0440\u0435\u0437 Thunk. \u0421\u0430\u043c Redux \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435, \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u043a redux-thunk \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439."),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/-eE3ySQIV80"}),Object(a.b)("img",{alt:"redux",src:r(252).default}))),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=31769291"}),Object(a.b)("img",{alt:"Become a Patron!",src:r(178).default}))))}l.isMDXComponent=!0}}]);