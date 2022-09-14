"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[3735],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={slug:"asset-access",title:"Accessing assets",authors:["gd"],tags:["asset","new feature"]},c=void 0,l={permalink:"/blog/asset-access",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-25-asset-access.md",source:"@site/blog/2022-05-25-asset-access.md",title:"Accessing assets",description:"We present an improvement in the way assets data are accessed in version 1.3.0.",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"asset",permalink:"/blog/tags/asset"},{label:"new feature",permalink:"/blog/tags/new-feature"}],readingTime:2.105,truncated:!0,authors:[{name:"Guillaume Duhamel",title:"CTO Completium",url:"https://www.linkedin.com/in/guillaumeduhamel/",imageURL:"https://media-exp1.licdn.com/dms/image/C4D03AQGxFFOLb-0sew/profile-displayphoto-shrink_400_400/0/1516528565176?e=1666224000&v=beta&t=0lnFhOYpH2z9LFK75bbnt0TEFrzy9Y9S7cjgsTNxEBQ",key:"gd"}],frontMatter:{slug:"asset-access",title:"Accessing assets",authors:["gd"],tags:["asset","new feature"]},prevItem:{title:"Shortcut evaluation",permalink:"/blog/shortcut-evaluation"},nextItem:{title:"Iterable big map",permalink:"/blog/iterable-big-map"}},p={authorsImageUrls:[void 0]},u=[{value:"Problems",id:"problems",level:3}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We present an improvement in the way ",(0,s.kt)("a",{parentName:"p",href:"/docs/asset"},"assets")," data are accessed in version ",(0,s.kt)("a",{parentName:"p",href:"/docs/installation"},(0,s.kt)("inlineCode",{parentName:"a"},"1.3.0")),"."),(0,s.kt)("h3",{id:"problems"},"Problems"),(0,s.kt)("p",null,"Until this version, the only way to access an asset data was the field accessor operator of the form ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/expressions/asset#ak--asset_keyaf"},(0,s.kt)("inlineCode",{parentName:"a"},"A[k].f")),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," is the asset collection, ",(0,s.kt)("inlineCode",{parentName:"p"},"k")," the asset key and ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," the asset field."))}f.isMDXComponent=!0}}]);