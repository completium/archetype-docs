"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[992],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:7},c="Operation",p={unversionedId:"reference/instructions/operation",id:"reference/instructions/operation",title:"Operation",description:"transfer",source:"@site/docs/reference/instructions/operation.md",sourceDirName:"reference/instructions",slug:"/reference/instructions/operation",permalink:"/docs/reference/instructions/operation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/instructions/operation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Asset",permalink:"/docs/reference/instructions/asset"},next:{title:"Constants",permalink:"/docs/reference/expressions/constants"}},s={},u=[{value:"<code>transfer</code>",id:"transfer",level:2},{value:"Transfer balance",id:"transfer-balance",level:3},{value:"Call another contract",id:"call-another-contract",level:3},{value:"Call current contract",id:"call-current-contract",level:3},{value:"Low level instruction",id:"low-level-instruction",level:3},{value:"<code>emit</code>",id:"emit",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operation"},"Operation"),(0,o.kt)("h2",{id:"transfer"},(0,o.kt)("inlineCode",{parentName:"h2"},"transfer")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," instruction generates an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#operation"},"operation"),"."),(0,o.kt)("p",null,"This operation is either a simple transfer operation of a part of the contract ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#balance"},(0,o.kt)("inlineCode",{parentName:"a"},"balance"))," to an account or a contract, or a call to another contract's entrypoint."),(0,o.kt)("h3",{id:"transfer-balance"},"Transfer balance"),(0,o.kt)("p",null,"The following transfers an amount ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," of tez to address ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer a to c\n")),(0,o.kt)("p",null,"It fails if amount ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is greater than the contract ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#balance"},(0,o.kt)("inlineCode",{parentName:"a"},"balance")),"."),(0,o.kt)("h3",{id:"call-another-contract"},"Call another contract"),(0,o.kt)("p",null,"Consider a contract with address ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," that declares an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint"},"entrypoint")," ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," with argument of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"entry e(x : T) { /* ... */ }\n")),(0,o.kt)("p",null,"The following calls entrypoint ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," with argument value ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer a to c call e<T>(x)\n")),(0,o.kt)("p",null,"It fails if amount ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is greater than the contract balance or if contract ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," does not have entrypoint ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," with corresponding signature."),(0,o.kt)("p",null,"For example, consider the following contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype called_contract\n\nvariable r : nat = 0\n\nentry exec(x : nat, y : nat) {\n    r := r * x + y\n}\n")),(0,o.kt)("p",null,"Then the following ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," instruction calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," entrypoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer 0tz to c call exec<nat * nat>((4,5))\n")),(0,o.kt)("p",null,"Note that the multiple arguments of ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," is turned into a tuple of corresponding values."),(0,o.kt)("h3",{id:"call-current-contract"},"Call current contract"),(0,o.kt)("p",null,"It is possible to call another entrypoint ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," of the current contract with the follwing instruction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer a to entry self.e(x)\n")),(0,o.kt)("p",null,"For example, the following would call the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," entrypoint from another entrypoint of the same contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer 0tz to entry self.exec(4,5)\n")),(0,o.kt)("h3",{id:"low-level-instruction"},"Low level instruction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," instruction is pre-compiled to the low level instruction ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract%3CT%3E,%20arg%20:%20T)"},(0,o.kt)("inlineCode",{parentName:"a"},"make_operation")),"."),(0,o.kt)("p",null,"The following instruction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"transfer a to c call e<T>(x)\n")),(0,o.kt)("p",null,"is equivalent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'const e = get_entrypoint<T>("%e", c) ? the : fail("ENTRY_NOT_FOUND");\nconst o = make_operation(a, e, x);\noperations := reverse(prepend(reverse(operations), o))\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"operations")," is the builtin list of operations returned by the entrypoint."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Operations generated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," instruction will be executed in the order ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," instructions appear in the code."))),(0,o.kt)("h2",{id:"emit"},(0,o.kt)("inlineCode",{parentName:"h2"},"emit")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"emit")," instruction emits an event of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," and value ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"emit<T>(x)\n")),(0,o.kt)("p",null,"For example, consider the event declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"event HighestBidIncreased {\n  bidder : address;\n  amount : tez\n}\n")),(0,o.kt)("p",null,"Then the following emits the ",(0,o.kt)("inlineCode",{parentName:"p"},"HighestBidIncreased")," event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"emit<HighestBidIncreased>({ source; transferred })\n")),(0,o.kt)("p",null,"An operation to call the ",(0,o.kt)("em",{parentName:"p"},"event well")," contract is then generated."),(0,o.kt)("p",null,"See this ",(0,o.kt)("a",{parentName:"p",href:"/blog/events"},"blog entry")," for further information."))}m.isMDXComponent=!0}}]);