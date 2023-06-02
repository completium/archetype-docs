"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2684],{4048:(e,t,a)=>{var n=a(4836);t.Z=void 0;var l=n(a(4938)),r=a(5893),i=(0,l.default)((0,r.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");t.Z=i},1519:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(3366),l=a(7462),r=a(7294),i=a(6010),o=a(7192),c=a(1796),s=a(2110),m=a(1539),d=a(8979);function p(e){return(0,d.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var y=a(5893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],b=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,l.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,l.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),h=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:c,className:s,component:d=(c?"div":"hr"),flexItem:h=!1,light:f=!1,orientation:g="horizontal",role:E=("hr"!==d?"separator":void 0),textAlign:x="center",variant:k="fullWidth"}=a,Z=(0,n.Z)(a,u),_=(0,l.Z)({},a,{absolute:r,component:d,flexItem:h,light:f,orientation:g,role:E,textAlign:x,variant:k}),w=(e=>{const{absolute:t,children:a,classes:n,flexItem:l,light:r,orientation:i,textAlign:c,variant:s}=e,m={root:["root",t&&"absolute",s,r&&"light","vertical"===i&&"vertical",l&&"flexItem",a&&"withChildren",a&&"vertical"===i&&"withChildrenVertical","right"===c&&"vertical"!==i&&"textAlignRight","left"===c&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,o.Z)(m,p,n)})(_);return(0,y.jsx)(b,(0,l.Z)({as:d,className:(0,i.Z)(w.root,s),role:E,ref:t,ownerState:_},Z,{children:c?(0,y.jsx)(v,{className:w.wrapper,ownerState:_,children:c}):null}))}))},3465:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(5861),l=a(6886),r=a(1519),i=a(7294),o=a(2321),c=a(8271),s=a(563);const m=e=>void 0===e.fails||0===e.fails.length?i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey",fontStyle:"italic"}},"does not fail"):i.createElement(l.ZP,{container:!0},e.fails.map(((t,a)=>i.createElement(l.ZP,{container:!0,style:{marginBottom:e.fails.length>1?"22px":"0px"}},i.createElement(l.ZP,{key:"fk"+a,item:!0,xs:t.keyword.length>12?12:2,style:{marginBottom:t.keyword.length>12?"12px":"0px"}},i.createElement(n.Z,null,i.createElement("code",null,t.keyword))),i.createElement(l.ZP,{key:"fd"+a,item:!0,xs:t.keyword.length>12?12:10},i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans"}},t.desc)),a<e.fails.length-1?i.createElement(l.ZP,{item:!0,xs:12},i.createElement(r.Z,{className:o.Z.divider,style:{marginTop:"12px"}})):i.createElement("div",null)))));function d(e){return i.createElement(l.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,style:{marginTop:"0px"}},null==e.showfail||null!=e.showfail&&e.showfail?i.createElement(i.Fragment,null,i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Fails with")),i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(m,{fails:e.fails}))):i.createElement("div",null),void 0!==e.michelson?i.createElement(l.ZP,{item:!0,xs:12},i.createElement(r.Z,{className:o.Z.divider})):i.createElement("div",null),void 0!==e.michelson?i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Michelson")):i.createElement("div",null),void 0!==e.michelson?i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(c.R,{michelson:e.michelson,michelson_ref_url:e.michelson_ref_url})):i.createElement("div",null),void 0!==e.emits?i.createElement(l.ZP,{item:!0,xs:12},i.createElement(r.Z,{className:o.Z.divider})):i.createElement("div",null),void 0!==e.emits?i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Emits")):i.createElement("div",null),void 0!==e.emits?i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(l.ZP,{container:!0,direction:"row",spacing:3},e.emits.map(((e,t)=>i.createElement(s.n,{key:"rel"+t,value:e.keyword,link:e.link,code:e.code}))))):i.createElement("div",null),void 0!==e.related?i.createElement(l.ZP,{item:!0,xs:12},i.createElement(r.Z,{className:o.Z.divider})):i.createElement("div",null),void 0!==e.related?i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(n.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Related")):i.createElement("div",null),void 0!==e.related?i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(l.ZP,{container:!0,direction:"row",spacing:3},e.related.map(((e,t)=>i.createElement(s.n,{key:"rel"+t,value:e.keyword,link:e.link,code:e.code}))))):i.createElement("div",null))}},8271:(e,t,a)=>{a.d(t,{R:()=>c});var n=a(7294),l=a(6292),r=a(6886),i=a(9960),o=a(4048);const c=e=>void 0===e.michelson_ref_url?"[object Array]"!==Object.prototype.toString.call(e.michelson)?n.createElement(l.Z,{style:{textTransform:"none",fontFamily:"Roboto Mono",color:"var(--ifm-color-primary)"},disableFocusRipple:!0,size:"small",disableRipple:!0},e.michelson):n.createElement(r.ZP,{container:!0,spacing:1},e.michelson.map(((e,t)=>n.createElement(r.ZP,{item:!0,key:"mt"+t},n.createElement(l.Z,{style:{textTransform:"none",fontFamily:"Roboto Mono",color:"var(--ifm-color-primary)"},disableFocusRipple:!0,size:"small",disableRipple:!0},e))))):n.createElement(i.Z,{to:e.michelson_ref_url},n.createElement(l.Z,{style:{textTransform:"none",fontFamily:"Roboto Mono",color:"var(--ifm-color-primary)"},size:"small",disableRipple:!0,endIcon:n.createElement(o.Z,{fontSize:"small"})},e.michelson))},1353:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(9960),l=a(6886),r=a(1519),i=a(5861),o=a(4810),c=a(7294),s=a(2321),m=a(3465);const d=e=>c.createElement(l.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1},c.createElement(l.ZP,{item:!0,xs:12},c.createElement(r.Z,{className:s.Z.divider,style:{marginBottom:"0px"}})),c.createElement(l.ZP,{item:!0,xs:4},c.createElement(i.Z,null,c.createElement(n.Z,{to:"/docs/reference/types#"+e.typa},c.createElement("code",null,e.typa)))),void 0!==e.typb?c.createElement(l.ZP,{item:!0,xs:4},c.createElement(i.Z,null,c.createElement(n.Z,{to:"/docs/reference/types#"+e.typb},c.createElement("code",null,e.typb)))):c.createElement("div",null),c.createElement(l.ZP,{item:!0,xs:4},void 0===e.withLink||e.withLink?c.createElement(i.Z,null,c.createElement(n.Z,{to:"/docs/reference/types#"+e.typr},c.createElement("code",null,e.typr))):c.createElement(i.Z,null,c.createElement("code",null,e.typr))),void 0!==e.comment?c.createElement(l.ZP,{item:!0,xs:12},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans"}},e.comment)):c.createElement("div",null));function p(e){return c.createElement(o.Z,{injectFirst:!0},c.createElement(l.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,style:{marginBottom:"60px"}},c.createElement(l.ZP,{item:!0,xs:12},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",marginBottom:"12px"}},e.data.desc)),c.createElement(l.ZP,{item:!0,xs:12},c.createElement(l.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1},c.createElement(l.ZP,{item:!0,xs:4},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey",marginBottom:"12px"}},"Type of ",c.createElement("code",null,"a"))),void 0===e.data.binary||e.data.binary?c.createElement(l.ZP,{item:!0,xs:4},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey",marginBottom:"12px"}},"Type of ",c.createElement("code",null,"b"))):c.createElement("div",null),c.createElement(l.ZP,{item:!0,xs:4},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey",marginBottom:"12px"}},"Type of ",c.createElement("code",null,e.data.label))),e.data.types.map(((e,t)=>c.createElement(l.ZP,{key:"typs"+t,item:!0,xs:12},c.createElement(d,{typa:e.typa,typb:e.typb,typr:e.typr,comment:e.comment,withLink:e.withLink})))),void 0!==e.data.promotions?c.createElement(l.ZP,{item:!0,xs:12},c.createElement(i.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey",marginTop:"12px",marginBottom:"6px",fontSize:"12px"}},"WITH TYPE PROMOTION")):c.createElement("div",null),void 0!==e.data.promotions?e.data.promotions.map(((e,t)=>c.createElement(l.ZP,{key:"typs"+t,item:!0,xs:12},c.createElement(d,{typa:e.typa,typb:e.typb,typr:e.typr,comment:e.comment,withLink:e.withLink})))):c.createElement("div",null))),c.createElement(l.ZP,{item:!0,xs:12,style:{marginTop:"12px"}},c.createElement(m.Z,{fails:e.data.fails,michelson:e.data.michelson,michelson_ref_url:e.data.michelson_ref_url,related:e.data.related}))))}},563:(e,t,a)=>{a.d(t,{n:()=>o});var n=a(9960),l=a(6886),r=a(5861),i=a(7294);const o=e=>i.createElement(l.ZP,{item:!0},i.createElement(n.Z,{to:e.link},i.createElement(r.Z,{style:{fontFamily:"IBM Plex Sans"}},null!=e.code&&!1===e.code?e.value:i.createElement("code",null,e.value))))},2464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>y});var n=a(7462),l=a(7294),r=a(3905),i=a(9960);const o={plusequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Increments ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) by value of ",l.createElement("code",null,"b"),". It is equivalent to ",l.createElement("code",null,"a := a + b")," (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a--b"},l.createElement("code",null,"+"))," operator)."),binary:!1,types:[{typa:"nat",typr:"nat"},{typa:"int",typr:"int"},{typa:"rational",typr:"rational"},{typa:"duration",typr:"duration"},{typa:"date",typr:"duration"},{typa:"tez",typr:"tez"},{typa:"string",typr:"string"},{typa:"bls12_381_fr",typr:"bls12_381_fr"},{typa:"bls12_381_g1",typr:"bls12_381_g1"},{typa:"bls12_381_g2",typr:"bls12_381_g2"}],promotions:[{typa:"int",typr:"nat"},{typa:"rational",typr:"nat"},{typa:"rational",typr:"int"},{typa:"bls12_381_fr",typr:"nat"},{typa:"bls12_381_fr",typr:"int"}]},minusequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Decrements ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) by value of ",l.createElement("code",null,"b"),". It is similar to ",l.createElement("code",null,"a := a - b")," (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a---b"},l.createElement("code",null,"-"))," operator). It is not exaclty equivalent because if may fail on ",l.createElement("code",null,"nat")," values (see fail conditions below)."),binary:!1,types:[{typa:"nat",typr:"nat"},{typa:"int",typr:"int"},{typa:"rational",typr:"rational"},{typa:"duration",typr:"duration"},{typa:"date",typr:"duration"},{typa:"tez",typr:"tez"},{typa:"bls12_381_fr",typr:"bls12_381_fr"},{typa:"bls12_381_g1",typr:"bls12_381_g1"},{typa:"bls12_381_g2",typr:"bls12_381_g2"}],promotions:[{typa:"int",typr:"nat"},{typa:"rational",typr:"nat"},{typa:"rational",typr:"int"},{typa:"bls12_381_fr",typr:"nat"},{typa:"bls12_381_fr",typr:"int"}],fails:[{keyword:'"NAT_NEG_ASSIGN"',desc:l.createElement("div",null,"when ",l.createElement("code",null,"a")," (typed ",l.createElement("code",null,"nat"),")is less than ",l.createElement("code",null,"b")," (typed ",l.createElement("code",null,"nat"),").")},{keyword:'"INVALID_NEGATIVE_TEZ"',desc:l.createElement("div",null,"when ",l.createElement("code",null,"a - b")," value typed ",l.createElement("code",null,"tez")," is negative.")}]},timesequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Multiplies ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) by value of ",l.createElement("code",null,"b"),". It is equivalent to ",l.createElement("code",null,"a := a * b")," (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a--b-1"},l.createElement("code",null,"*"))," operator)."),binary:!1,types:[{typa:"nat",typr:"nat"},{typa:"int",typr:"int"},{typa:"rational",typr:"rational"},{typa:"bls12_381_fr",typr:"bls12_381_fr"},{typa:"bls12_381_g1",typr:"bls12_381_g1"},{typa:"bls12_381_g2",typr:"bls12_381_g2"}],promotions:[{typa:"int",typr:"nat"},{typa:"rational",typr:"nat"},{typa:"rational",typr:"int"},{typa:"bls12_381_fr",typr:"nat"},{typa:"bls12_381_fr",typr:"int"},{typa:"bls12_381_g1",typr:"bls12_381_fr"},{typa:"bls12_381_g2",typr:"bls12_381_fr"}]},divequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Divides ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) by value of ",l.createElement("code",null,"b"),". It is equivalent to ",l.createElement("code",null,"a := a / b")," (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a--b-2"},l.createElement("code",null,"*"))," operator)."),binary:!1,types:[{typa:"rational",typr:"rational"}],promotions:[{typa:"rational",typr:"nat"},{typa:"rational",typr:"int"}]},andequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Assigns ",l.createElement("code",null,"a and b")," to ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a-and-b"},l.createElement("code",null,"and"))," operator)."),binary:!1,types:[{typa:"bool",typr:"bool"}]},orequal:{label:"b",link:"--a",desc:l.createElement("div",null,"Assigns ",l.createElement("code",null,"a or b")," to ",l.createElement("i",null,"variable")," ",l.createElement("code",null,"a")," (local variable, tuple dimension or record field) (see ",l.createElement(i.Z,{to:"/docs/reference/expressions/operators/arithmetic#a-or-b"},l.createElement("code",null,"or"))," operator)."),binary:!1,types:[{typa:"bool",typr:"bool"}]}};var c=a(1353);const s={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:3},m="Assignment",d={unversionedId:"reference/instructions/assignment",id:"reference/instructions/assignment",title:"Assignment",description:"a := b",source:"@site/docs/reference/instructions/assignment.md",sourceDirName:"reference/instructions",slug:"/reference/instructions/assignment",permalink:"/docs/reference/instructions/assignment",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/instructions/assignment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"docs",previous:{title:"Local variable",permalink:"/docs/reference/instructions/localvariable"},next:{title:"Control",permalink:"/docs/reference/instructions/control"}},p={},y=[{value:"<code>a := b</code>",id:"a--b",level:3},{value:"Local variable",id:"local-variable",level:4},{value:"Tuple",id:"tuple",level:4},{value:"Record",id:"record",level:4},{value:"<code>a ?:= b : e</code>",id:"a--b--e",level:3},{value:"<code>a += b</code>",id:"a--b-1",level:3},{value:"<code>a -= b</code>",id:"a---b",level:3},{value:"<code>a *= b</code>",id:"a--b-2",level:3},{value:"<code>a /= b</code>",id:"a--b-3",level:3},{value:"<code>a &amp;= b</code>",id:"a--b-4",level:3},{value:"<code>a |= b</code>",id:"a--b-5",level:3}],u={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment"},"Assignment"),(0,r.kt)("h3",{id:"a--b"},(0,r.kt)("inlineCode",{parentName:"h3"},"a := b")),(0,r.kt)("h4",{id:"local-variable"},"Local variable"),(0,r.kt)("p",null,"Assigns value of expression ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," to ",(0,r.kt)("em",{parentName:"p"},"variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". Type of ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," must be the same as (or compliant with) the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types"},"types")," are assignable, except ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#ticket%3CT%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"ticket"))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},'var s = "a string";\ns := "another string"\n')),(0,r.kt)("h4",{id:"tuple"},"Tuple"),(0,r.kt)("p",null,"Assigns a dimension of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#tuple"},(0,r.kt)("inlineCode",{parentName:"a"},"tuple"))," ",(0,r.kt)("em",{parentName:"p"},"variable"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},'var t = (2, "a string");\nt[0] := 4;\nt[1] := "another string";\n/* t is (4, "another string") */\n')),(0,r.kt)("h4",{id:"record"},"Record"),(0,r.kt)("p",null,"Assigns a field value of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},(0,r.kt)("inlineCode",{parentName:"a"},"record"))," ",(0,r.kt)("em",{parentName:"p"},"variable"),"."),(0,r.kt)("p",null,"For example, consider the following ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/declarations/compositetypes#record"},"record")," declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"record color {\n  red   : bytes;\n  green : bytes;\n  blue  : bytes\n}\n")),(0,r.kt)("p",null,"Then the following assigns the ",(0,r.kt)("inlineCode",{parentName:"p"},"red")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"var r = { red = 0xc6; green = 0x6d; blue = 0x32 };\nr.red := 0xc8;\n/* r is { red = 0xc8; green = 0x6d; blue = 0x32 } */\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Other assignment operators below are also available for tuple dimension and record field.")),(0,r.kt)("h3",{id:"a--b--e"},(0,r.kt)("inlineCode",{parentName:"h3"},"a ?:= b : e")),(0,r.kt)("p",null,"Assigns the ",(0,r.kt)("inlineCode",{parentName:"p"},"some")," value of ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"option"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", and fails with ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," otherwise."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},'var a : 0;\na ?:= unpack<nat>(0x0505) : "ERROR"\n')),(0,r.kt)("p",null,"This is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},'var a = 0;\nmatch unpack<nat>(0x0505) with\n| some(v) -> a := v\n| none    -> fail("ERROR")\nend\n')),(0,r.kt)("h3",{id:"a--b-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"a += b")),(0,r.kt)(c.Z,{data:o.plusequal,mdxType:"Operator"}),(0,r.kt)("h3",{id:"a---b"},(0,r.kt)("inlineCode",{parentName:"h3"},"a -= b")),(0,r.kt)(c.Z,{data:o.minusequal,mdxType:"Operator"}),(0,r.kt)("h3",{id:"a--b-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"a *= b")),(0,r.kt)(c.Z,{data:o.timesequal,mdxType:"Operator"}),(0,r.kt)("h3",{id:"a--b-3"},(0,r.kt)("inlineCode",{parentName:"h3"},"a /= b")),(0,r.kt)(c.Z,{data:o.divequal,mdxType:"Operator"}),(0,r.kt)("h3",{id:"a--b-4"},(0,r.kt)("inlineCode",{parentName:"h3"},"a &= b")),(0,r.kt)(c.Z,{data:o.andequal,mdxType:"Operator"}),(0,r.kt)("h3",{id:"a--b-5"},(0,r.kt)("inlineCode",{parentName:"h3"},"a |= b")),(0,r.kt)(c.Z,{data:o.orequal,mdxType:"Operator"}))}b.isMDXComponent=!0},2321:(e,t,a)=>{a.d(t,{Z:()=>n});const n={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);