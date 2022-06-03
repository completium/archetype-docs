"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[1641],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1239:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:0},c="Access",p={unversionedId:"reference/expressions/operators/access",id:"reference/expressions/operators/access",title:"Access",description:"a[b]",source:"@site/docs/reference/expressions/operators/access.md",sourceDirName:"reference/expressions/operators",slug:"/reference/expressions/operators/access",permalink:"/docs/reference/expressions/operators/access",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/expressions/operators/access.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Constants",permalink:"/docs/reference/expressions/constants"},next:{title:"Copy",permalink:"/docs/reference/expressions/operators/copy"}},l={},u=[{value:"<code>a[b]</code>",id:"ab",level:3},{value:"Tuple",id:"tuple",level:4},{value:"Map",id:"map",level:4},{value:"<code>a.b</code>",id:"ab-1",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access"},"Access"),(0,o.kt)("h3",{id:"ab"},(0,o.kt)("inlineCode",{parentName:"h3"},"a[b]")),(0,o.kt)("h4",{id:"tuple"},"Tuple"),(0,o.kt)("p",null,"Accesses dimension ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," of ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#tuple"},"tuple")," ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," is a ",(0,o.kt)("em",{parentName:"p"},"literal")," integer value in the range ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to tuple's dimensionality minus 1."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'const t = (1, "a string", 0xbc); /* t\'s dimensionality is 3 */\nconst i = t[0]; /* 1          */\nconst s = t[1]; /* "a string" */\nconst b = t[2]; /* 0xbc       */\n')),(0,o.kt)("h4",{id:"map"},"Map"),(0,o.kt)("p",null,"Accesses value associated with key ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," in ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/container#map"},"map")," ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," (also ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"big_map"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"iterable_big_map")),")."),(0,o.kt)("p",null,"It fails with ",(0,o.kt)("inlineCode",{parentName:"p"},'"NotFound"')," if ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," is not found in ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'const m : map<nat, string> = [ (1, "a string"); (3, "another"); (5, "yet another") ]\nconst s1 = m[1]; /* "a string"    */\nconst s2 = m[3]; /* "another"     */\nconst s3 = m[5]; /* "yet another" */\n')),(0,o.kt)("h3",{id:"ab-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"a.b")),(0,o.kt)("p",null,"Accesses field ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," of ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},"record")," ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,o.kt)("p",null,"For example, consider the following declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"record person {\n  first_name : string;\n  last_name  : string;\n}\n")),(0,o.kt)("p",null,"Then fields are accessed the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'const p = {\n  first_name = "Albert";\n  last_name  = "Michelson"\n};\nconst hello = "Hello " + p.first_name + " " + p.last_name + "!";\n/* hello is "Hello Albert Michelson!" */\n')))}d.isMDXComponent=!0}}]);