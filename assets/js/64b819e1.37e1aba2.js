"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(4996),n(941);const o={slug:"v152",title:"Version 1.5.2",authors:["br","gd"],tags:["version"]},i=void 0,l={permalink:"/blog/v152",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-04-26-v1.5.2.md",source:"@site/blog/2024-04-26-v1.5.2.md",title:"Version 1.5.2",description:"We are pleased to announce the initial beta release of the Michelson decompiler. The purpose is to decompile any contract to Archetype in order to know what a contract does.",date:"2024-04-26T00:00:00.000Z",formattedDate:"April 26, 2024",tags:[{label:"version",permalink:"/blog/tags/version"}],readingTime:1.735,hasTruncateMarker:!0,authors:[{name:"Benoit Rognier",title:"CEO Completium",url:"https://www.linkedin.com/in/benoitrognier/",imageURL:"/img/blog/br.jpeg",key:"br"},{name:"Guillaume Duhamel",title:"CTO Completium",url:"https://www.linkedin.com/in/guillaumeduhamel/",imageURL:"/img/blog/gd.jpeg",key:"gd"}],frontMatter:{slug:"v152",title:"Version 1.5.2",authors:["br","gd"],tags:["version"]},nextItem:{title:"Version 1.5.0",permalink:"/blog/v150"}},p={authorsImageUrls:[void 0,void 0]},s=[{value:"Example",id:"example",level:2},{value:"Limits",id:"limits",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are pleased to announce the initial ",(0,a.kt)("em",{parentName:"p"},"beta")," release of the Michelson decompiler. The purpose is to decompile any contract to Archetype in order to know what a contract does."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider the following mainnet contract ",(0,a.kt)("a",{parentName:"p",href:"https://better-call.dev/mainnet/KT1Ly9NLfDb2DESnysqfQpAaB3r9x497TZoY/operations"},(0,a.kt)("inlineCode",{parentName:"a"},"KT1Ly9NLfDb2DESnysqfQpAaB3r9x497TZoY"))," whose code is reproduced below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'parameter (or (nat %divide) (or (unit %double) (nat %replace)));\nstorage (pair (int %nbVotes) (nat %storedValue));\ncode { DUP ;\n       CDR ;\n       SWAP ;\n       CAR ;\n       IF_LEFT\n         { DUP ;\n           PUSH nat 5 ;\n           COMPARE ;\n           LT ;\n           IF {} { PUSH string "WrongCondition: params.divisor > 5" ; FAILWITH } ;\n           SWAP ;\n           DUP ;\n           CAR ;\n           SWAP ;\n           CDR ;\n           YOU 2 ;\n           SWAP ;\n           EDIV ;\n           IF_NONE { PUSH int 26 ; FAILWITH } { CAR } ;\n           SWAP ;\n           PAIR }\n         { IF_LEFT\n             { DROP ; DUP ; CAR ; SWAP ; CDR ; PUSH nat 2 ; MUL ; SWAP ; PAIR }\n             { SWAP ; DUP ; CDR ; SWAP ; CAR ; PUSH int 1 ; ADD ; PAIR ; CAR ; PAIR } } ;\n       NIL operation ;\n       PAIR }\n')),(0,a.kt)("p",null,"Store te code in ",(0,a.kt)("inlineCode",{parentName:"p"},"avv.tz"),"file for example and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ archetype -d avv.tz\n")),(0,a.kt)("p",null,"Use additional ",(0,a.kt)("inlineCode",{parentName:"p"},"-ij")," option when dealing with json Michelson."),(0,a.kt)("p",null,"It generates the following Archetype code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype avv(\n  nbVotes : int,\n  storedValue : nat\n)\n\nentry divide (arg : nat) {\n  do_require ((5 < arg), "WrongCondition: params.divisor > 5");\n  match storedValue /% arg with\n  | some (x76, x77) -> (storedValue := x76)\n  | none -> (fail (26i))\n  end\n}\n\nentry double () {\n  storedValue := 2 * storedValue\n}\n\nentry replace (arg : nat) {\n  storedValue := arg;\n  nbVotes := 1i + nbVotes\n}\n')),(0,a.kt)("h2",{id:"limits"},"Limits"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The decompiler is still in beta. In this version, we do not garantee that the decompiled version is equivalent to the Michelson contract.")),(0,a.kt)("p",null,"This is Work Under Progress and some contracts may not decompile yet. Unsupported instructions are for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EXEC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE_CONTRACT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TICKET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAP"))))}u.isMDXComponent=!0}}]);