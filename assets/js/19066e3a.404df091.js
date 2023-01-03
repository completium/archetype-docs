"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[4925],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=c,k=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2268:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var a=n(7462),c=n(3366),o=(n(7294),n(3905)),r=(n(9960),["components"]),i={sidebar_position:1,sidebar_label:"Account"},l="Account",u={unversionedId:"cli/account",id:"cli/account",title:"Account",description:"Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address, usually starting with tz1, like for example tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P.",source:"@site/docs/cli/account.md",sourceDirName:"cli",slug:"/cli/account",permalink:"/docs/cli/account",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/cli/account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Account"},sidebar:"cli",previous:{title:"Introduction",permalink:"/docs/cli/introduction"},next:{title:"Network",permalink:"/docs/cli/network"}},p={},s=[{value:"<code>generate account</code>",id:"generate-account",level:3},{value:"<code>import privatekey</code>",id:"import-privatekey",level:3},{value:"<code>show account</code>",id:"show-account",level:3},{value:"<code>switch account</code>",id:"switch-account",level:3},{value:"<code>set account</code>",id:"set-account",level:3},{value:"<code>transfer</code>",id:"transfer",level:3},{value:"<code>remove account</code>",id:"remove-account",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,c.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account"},"Account"),(0,o.kt)("p",null,"Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address, usually starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"tz1"),", like for example ",(0,o.kt)("inlineCode",{parentName:"p"},"tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"completium-cli")," provides a convenient account management system to register, list and switch account. Each account is associated with an alias.`"),(0,o.kt)("h3",{id:"generate-account"},(0,o.kt)("inlineCode",{parentName:"h3"},"generate account")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"generate account")," command creates a new account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli generate account as <ACCOUNT_ALIAS> [--force]\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli generate account as john\nAccount tz1ciEuzRw5GnwXjNGXbdZTf8QxiRDBqUYp1 is registered as 'john'.\n")),(0,o.kt)("p",null,"In order to use an account on the test and ghost networks, it is required to fund the account with the Tezos ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.ghostnet.teztnets.xyz/"},"faucet"),"."),(0,o.kt)("h3",{id:"import-privatekey"},(0,o.kt)("inlineCode",{parentName:"h3"},"import privatekey")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"import privatekey")," command imports an existing account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli import privatekey <PRIVATE_KEY> as <ACCOUNT_ALIAS>\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli import privatekey edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq as alice\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://templewallet.com/"},"Temple wallet"),', it is possible to display the private key of an account by selecting "Reveal Private Key" in the "Settings" menu.'),(0,o.kt)("h3",{id:"show-account"},(0,o.kt)("inlineCode",{parentName:"h3"},"show account")),(0,o.kt)("p",null,"The following command displays the account ",(0,o.kt)("inlineCode",{parentName:"p"},"$completium-cli")," is currently using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli show account\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--with-private-key")," to display the private key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli show account --with-private-key --alias alice\nCurrent account:        alice\nPublic  key hash:       tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\nPublic  key:            edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn\nPrivate key:            edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq\nBalance on ghost:       4877.573685 \ua729\n")),(0,o.kt)("h3",{id:"switch-account"},(0,o.kt)("inlineCode",{parentName:"h3"},"switch account")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"switch account")," command opens a menu that displays registered accounts to select from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli switch account\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli switch account\nCurrent account: alice\n? Switch account \u2026\n\u276f alice                             tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\n  bob                               tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6\n  carl                              tz1aGDrJ58LbcnD47CkwSk3myfTxJxipYJyk\n  bootstrap1                        tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx\n  bootstrap2                        tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN\n  bootstrap3                        tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU\n  bootstrap4                        tz1b7tUupMgCNw2cCLpKTkSD1NZzB5TkP2sv\n  bootstrap5                        tz1ddb9NMYHZi5UzPdzTZMYQQZoMub195zgv\n")),(0,o.kt)("p",null,"Use keys up/down and enter to select current account."),(0,o.kt)("h3",{id:"set-account"},(0,o.kt)("inlineCode",{parentName:"h3"},"set account")),(0,o.kt)("p",null,"The following command sets the current account from its alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli set account <ACCOUNT_ALIAS>\n")),(0,o.kt)("h3",{id:"transfer"},(0,o.kt)("inlineCode",{parentName:"h3"},"transfer")),(0,o.kt)("p",null,"The following command transfers tez from one account to another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli transfer <AMOUNT>(tz|utz) from <ACCOUNT_ALIAS> to <ACCOUNT_ALIAS|ACCOUNT_ADDRESS>\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"$ completium-cli transfer 5.2tz from bob to alice\n")),(0,o.kt)("h3",{id:"remove-account"},(0,o.kt)("inlineCode",{parentName:"h3"},"remove account")),(0,o.kt)("p",null,"The following command removes an account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-completium"},"completium-cli remove account <ACCOUNT_ALIAS>\n")))}d.isMDXComponent=!0}}]);