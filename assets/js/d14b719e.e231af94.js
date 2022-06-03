"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[7972],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6375:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=(r(4996),r(9750),["components"]),l={slug:"iterable-big-map",title:"Iterable big map",authors:["br"],tags:["big map","new feature"]},p=void 0,c={permalink:"/blog/iterable-big-map",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-24-iterable-big-map.md",source:"@site/blog/2022-04-24-iterable-big-map.md",title:"Iterable big map",description:"We present a new type of map called iterablebigmap, which has the scalability property of a bigmap, and which can be iterated like a basic map.",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"big map",permalink:"/blog/tags/big-map"},{label:"new feature",permalink:"/blog/tags/new-feature"}],readingTime:2.875,truncated:!0,authors:[{name:"Benoit Rognier",title:"CEO Completium",url:"https://www.linkedin.com/in/benoitrognier/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4",key:"br"}],frontMatter:{slug:"iterable-big-map",title:"Iterable big map",authors:["br"],tags:["big map","new feature"]},prevItem:{title:"Accessing assets",permalink:"/blog/asset-access"},nextItem:{title:"Events",permalink:"/blog/events"}},s={authorsImageUrls:[void 0]},m=[{value:"Example",id:"example",level:2}],u={toc:m};function b(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We present a new type of map called ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"iterable_big_map")),", which has the scalability property of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"big_map")),", and which can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/containers#map"},"iterated")," like a basic ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#map%3CK,%20V%3E"},(0,i.kt)("inlineCode",{parentName:"a"},"map")),"."),(0,i.kt)("p",null,"This feature was suggested by ",(0,i.kt)("a",{parentName:"p",href:"https://www.nomadic-labs.com/"},"Nomadic Labs"),". Thank you to ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/lucas-felli-815653111/"},"Lucas Feli")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/charles-dehlinger-a34699166/"},"Charles Delhinger")," for the algorithm."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider the following declaration of an iterable big map between a ",(0,i.kt)("inlineCode",{parentName:"p"},"nat")," key and a ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"variable ibm : iterable_big_map<nat, bytes> = []\n")))}b.isMDXComponent=!0}}]);