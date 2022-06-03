"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2461],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={slug:"asset-access",title:"Accessing assets",authors:["gd"],tags:["asset","new feature"]},l=void 0,c={permalink:"/blog/asset-access",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-25-asset-access.md",source:"@site/blog/2022-05-25-asset-access.md",title:"Accessing assets",description:"We present an improvement in the way assets data are accessed since version 1.2.16 of Archetype.",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"asset",permalink:"/blog/tags/asset"},{label:"new feature",permalink:"/blog/tags/new-feature"}],readingTime:1.825,truncated:!0,authors:[{name:"Guillaume Duhamel",title:"CTO Completium",url:"https://www.linkedin.com/in/guillaumeduhamel/",imageURL:"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1658966400&v=beta&t=w8NwuTiiP--EwNxQK57UHYvBGFvcTccj8NTFav5unVo",key:"gd"}],frontMatter:{slug:"asset-access",title:"Accessing assets",authors:["gd"],tags:["asset","new feature"]},prevItem:{title:"Shortcut evaluation",permalink:"/blog/shortcut-evaluation"},nextItem:{title:"Iterable big map",permalink:"/blog/iterable-big-map"}},p={authorsImageUrls:[void 0]},u=[{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Single field access",id:"single-field-access",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We present an improvement in the way ",(0,s.kt)("a",{parentName:"p",href:"/docs/asset"},"assets")," data are accessed since version ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/edukera/archetype-lang/releases/tag/1.2.16"},(0,s.kt)("inlineCode",{parentName:"a"},"1.2.16"))," of Archetype."),(0,s.kt)("h3",{id:"problem"},"Problem"),(0,s.kt)("p",null,"Until this version, the only way to access an asset data was the field accessor operator of the form ",(0,s.kt)("inlineCode",{parentName:"p"},"A[k].f"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," is the asset collection, ",(0,s.kt)("inlineCode",{parentName:"p"},"k")," the asset key and ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," the asset field."),(0,s.kt)("p",null,"For example, consider the following asset declaration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},"asset vehicle {\n  vin          : string;\n  manufacturer : string;\n  year         : nat;\n  nbdoors      : nat\n}\n")),(0,s.kt)("p",null,"The manufacturer of vehicle ",(0,s.kt)("inlineCode",{parentName:"p"},'"1G1AF1F57A7192174"')," is then accessed as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const m = vehicle["1G1AF1F57A7192174"].manufacturer\n')),(0,s.kt)("p",null,"This expression fails when the key is not found in the asset collection. As a consequence, accessing several fields sucessively repeats the test and fail instruction as in:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const m = vehicle["1G1AF1F57A7192174"].manufacturer;\nconst y = vehicle["1G1AF1F57A7192174"].year;\nconst n = vehicle["1G1AF1F57A7192174"].nbdoors\n')),(0,s.kt)("p",null,"Here the test and fail instructions are repeated three times."),(0,s.kt)("h3",{id:"solution"},"Solution"),(0,s.kt)("p",null,"It is now possible to retrieve the asset data in the form of a record with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/expressions/asset#ak--asset_keya"},(0,s.kt)("inlineCode",{parentName:"a"},"[]"))," operator."),(0,s.kt)("p",null,"In the example above, the proper way to retrieve all asset data is now as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const v = vehicle["1G1AF1F57A7192174"];\nconst m = v.manufacturer;\nconst y = v.year;\nconst n = v.nbdoors\n')),(0,s.kt)("p",null,"The access operator still fails if the key is not ",(0,s.kt)("inlineCode",{parentName:"p"},"vehicle")," collection."),(0,s.kt)("p",null,"Version ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/edukera/archetype-lang/releases/tag/1.2.16"},(0,s.kt)("inlineCode",{parentName:"a"},"1.2.16"))," also introduces the ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/expressions/asset#agetk--asset_keya"},(0,s.kt)("inlineCode",{parentName:"a"},"get"))," method for asset collection. As for ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/types#map%3CK,%20V%3E"},(0,s.kt)("inlineCode",{parentName:"a"},"map")),", it returns an option of record:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const k = "1G1AF1F57A7192174";\nmatch vehicle.get(k) with\n| some v ->\n  const m = v.manufacturer;\n  const y = v.year;\n  const n = v.nbdoors;\n  /* ... */\n| none -> fail("Key " + k + " not found in collection")\nend\n')),(0,s.kt)("h3",{id:"single-field-access"},"Single field access"),(0,s.kt)("p",null,"Situations where a single asset field is accessed is very common though. In this case, version ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/edukera/archetype-lang/releases/tag/1.2.16"},(0,s.kt)("inlineCode",{parentName:"a"},"1.2.16"))," provides two new dedicated operators: ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/expressions/asset#ak--asset_keyaf"},(0,s.kt)("inlineCode",{parentName:"a"},"[]?."))," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/expressions/asset#ak--asset_keya--e--d"},(0,s.kt)("inlineCode",{parentName:"a"},"[]?:")),"."),(0,s.kt)("p",null,"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"is_coupe")," below is true if field ",(0,s.kt)("inlineCode",{parentName:"p"},"nbdoors")," is equal to 3, and ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," if asset is not found:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const k = "1G1AF1F57A7192174";\nconst is_coupe = vehicle[k] ? the.nbdoors = 3 : false\n')),(0,s.kt)("p",null,"The following retrieves an ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,s.kt)("inlineCode",{parentName:"a"},"option"))," of ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,s.kt)("inlineCode",{parentName:"a"},"nat"))," to treat more specifically the case when the asset is not found:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-archetype"},'const on = vehicle["1G1AF1F57A7192174"]?.nbdoors\n')))}d.isMDXComponent=!0}}]);