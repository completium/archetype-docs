"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[9445],{1519:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(3366),n=a(7462),i=a(7294),o=a(6010),s=a(7192),l=a(1796),p=a(2110),c=a(1539),d=a(8979);function m(e){return(0,d.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=a(5893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],k=(0,p.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,p.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),y=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:l,className:p,component:d=(l?"div":"hr"),flexItem:y=!1,light:u=!1,orientation:f="horizontal",role:v=("hr"!==d?"separator":void 0),textAlign:x="center",variant:_="fullWidth"}=a,C=(0,r.Z)(a,g),N=(0,n.Z)({},a,{absolute:i,component:d,flexItem:y,light:u,orientation:f,role:v,textAlign:x,variant:_}),Z=(e=>{const{absolute:t,children:a,classes:r,flexItem:n,light:i,orientation:o,textAlign:l,variant:p}=e,c={root:["root",t&&"absolute",p,i&&"light","vertical"===o&&"vertical",n&&"flexItem",a&&"withChildren",a&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,s.Z)(c,m,r)})(N);return(0,h.jsx)(k,(0,n.Z)({as:d,className:(0,o.Z)(Z.root,p),role:v,ref:t,ownerState:N},C,{children:l?(0,h.jsx)(b,{className:Z.wrapper,ownerState:N,children:l}):null}))}))},5861:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(3366),n=a(7462),i=a(7294),o=a(6010),s=a(9707),l=a(7192),p=a(2110),c=a(1539),d=a(8216),m=a(8979);function h(e){return(0,m.Z)("MuiTypography",e)}(0,a(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=a(5893);const k=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},u={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTypography"}),i=(e=>u[e]||e)(a.color),p=(0,s.Z)((0,n.Z)({},a,{color:i})),{align:m="inherit",className:f,component:v,gutterBottom:x=!1,noWrap:_=!1,paragraph:C=!1,variant:N="body1",variantMapping:Z=y}=p,T=(0,r.Z)(p,k),w=(0,n.Z)({},p,{align:m,color:i,className:f,component:v,gutterBottom:x,noWrap:_,paragraph:C,variant:N,variantMapping:Z}),E=v||(C?"p":Z[N]||y[N])||"span",P=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:i,classes:o}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,h,o)})(w);return(0,g.jsx)(b,(0,n.Z)({as:E,ref:t,ownerState:w,className:(0,o.Z)(P.root,f)},T))}))},8216:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(601).Z},4810:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var r=a(4880),n=a(8357),i=a(5893);const o=(0,n.Z)({key:"css",prepend:!0});function s(e){const{injectFirst:t,children:a}=e;return t?(0,i.jsx)(r.C,{value:o,children:a}):a}},6457:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7294),n=a(9960),i=a(6886),o=a(1519),s=a(5861),l=a(4810),p=a(2321);const c=e=>r.createElement(i.ZP,{item:!0,container:!0,xs:12},1==e.divider?r.createElement(i.ZP,{item:!0,xs:12},r.createElement(o.Z,{className:p.Z.divider,style:{marginBottom:"8px",marginTop:"4px"}})):r.createElement("div",null),r.createElement(i.ZP,{item:!0,xs:12,sm:e.xs,md:e.xs,style:{paddingLeft:"8px"}},null==e.data.link?r.createElement("code",null,e.data.label):r.createElement(n.Z,{to:e.data.link},r.createElement("code",null,e.data.label))),r.createElement(i.ZP,{item:!0,xs:12,sm:12-e.xs,md:12-e.xs,style:{paddingLeft:"8px",marginBottom:"8px"}},r.createElement(s.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)));function d(e){const t=null==e.xs?3:e.xs;return r.createElement(l.Z,{injectFirst:!0},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,style:{paddingLeft:"8px"}},r.createElement(s.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},e.title)),e.data.map(((a,n)=>r.createElement(c,{divider:n>0||0==n&&e.title.length>0,data:a,xs:t})))))}},2156:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(1519),i=a(4810),o=a(2321);function s(){return r.createElement(i.Z,{injectFirst:!0},r.createElement(n.Z,{className:o.Z.divider}))}},8473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>h,toc:()=>k});var r=a(7462),n=(a(7294),a(3905)),i=a(6886),o=a(2156);const s="/docs/reference/types#",l="/docs/reference/expressions/builtins#",p={basic:[{label:"bool",link:s+"bool",desc:"Boolean type to represent truth values"},{label:"string",link:s+"string",desc:"String of characters type to represent textual values"},{label:"nat",link:s+"nat",desc:"Natural type to represent long positive integers"},{label:"int",link:s+"int",desc:"Integer type to represent long integers"},{label:"rational",link:s+"rational",desc:"Rational type to represent floating point values"},{label:"date",link:s+"date",desc:"Date type to represent ISO date values"},{label:"duration",link:s+"duration",desc:"Duration type to represent difference of dates"},{label:"bytes",link:s+"bytes",desc:"Bytes type to represent any serialised value"},{label:"tez",link:s+"tez",desc:"Tez type to represent an amount in tez currency"},{label:"address",link:s+"address",desc:"Address type to represent an account or contract address"}],conversions:[{label:"address_to_contract",link:l+"address_to_contract(a%20:%20address)",desc:"Converts an address to contract"},{label:"bytes_to_nat",link:l+"bytes_to_nat(b%20:%20bytes)",desc:"Converts bytes to a natural"},{label:"contract_to_address",link:l+"contract_to_address(c%20:%20contract<T>)",desc:"Converts a contract to an address"},{label:"int_to_bytes",link:l+"int_to_bytes(i%20:%20int)",desc:"Converts an integer to bytes"},{label:"int_to_date",link:l+"int_to_date(i%20:%20int)",desc:"Converts an integer to a date"},{label:"int_to_nat",link:l+"contract_to_address(c%20:%20contract<T>)",desc:"Converts an integer to natural"},{label:"key_hash_to_contract",link:l+"key_hash_to_contract(pkh%20:%20key_hash)",desc:"Converts a key hash to contract (without entrypoint)"},{label:"key_to_address",link:l+"key_to_address(k%20:%20key)",desc:"Converts key to address"},{label:"key_to_key_hash",link:l+"key_to_key_hash(k%20:%20key)",desc:"Converts key to hash key"},{label:"mutez_to_nat",link:l+"mutez_to_nat(v%20:%20tez)",desc:"Converts a mutez amount to natural"},{label:"nat_to_bytes",link:l+"nat_to_bytes(n%20:%20nat)",desc:"Converts a natural to bytes"},{label:"nat_to_string",link:l+"nat_to_string(n%20:%20nat)",desc:"Converts a natural to its string representation"}]};var c=a(6457);const d={sidebar_position:1},m="Types",h={unversionedId:"language-basics/types",id:"language-basics/types",title:"Types",description:"Basic types",source:"@site/docs/language-basics/types.md",sourceDirName:"language-basics",slug:"/language-basics/types",permalink:"/docs/language-basics/types",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/language-basics/types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Comments",permalink:"/docs/language-basics/comments"},next:{title:"Composite types",permalink:"/docs/language-basics/composite"}},g={},k=[{value:"Basic types",id:"basic-types",level:2},{value:"Conversion",id:"conversion",level:2},{value:"Properties",id:"properties",level:2},{value:"Comparable",id:"comparable",level:4},{value:"Packable",id:"packable",level:4},{value:"Passable",id:"passable",level:4},{value:"Storable",id:"storable",level:4}],b={toc:k};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"types"},"Types"),(0,n.kt)("h2",{id:"basic-types"},"Basic types"),(0,n.kt)(c.Z,{title:"",data:p.basic,mdxType:"Api"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"List of all ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/#types"},"available types"),"."),(0,n.kt)("h2",{id:"conversion"},"Conversion"),(0,n.kt)("p",null,"List of conversion functions"),(0,n.kt)(c.Z,{title:"",data:p.conversions,mdxType:"Api"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)(i.ZP,{container:!0,mdxType:"Grid"},(0,n.kt)(i.ZP,{xs:12,sm:12,md:3,mdxType:"Grid"},(0,n.kt)("h4",{id:"comparable"},"Comparable")),(0,n.kt)(i.ZP,{xs:12,sm:12,md:9,mdxType:"Grid"},(0,n.kt)("p",null,"Comparable values have a natural ",(0,n.kt)("em",{parentName:"p"},"order")," used to order elements in ",(0,n.kt)("a",{parentName:"p",href:"/docs/language-basics/container"},"containers")," (set and map's key). Comparison operators ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b-9"},(0,n.kt)("inlineCode",{parentName:"a"},"<"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b-10"},(0,n.kt)("inlineCode",{parentName:"a"},"<="))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b-11"},(0,n.kt)("inlineCode",{parentName:"a"},">"))," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b-12"},(0,n.kt)("inlineCode",{parentName:"a"},">=")),"  are available the order of two value."),(0,n.kt)("p",null,"All types are comparable except: ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"big_map"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"iterable_big_map"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_fr"},(0,n.kt)("inlineCode",{parentName:"a"},"bls12_381_fr"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_g1"},(0,n.kt)("inlineCode",{parentName:"a"},"bls12_381_g1"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#bls12_381_g2"},(0,n.kt)("inlineCode",{parentName:"a"},"bls12_381_g2"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#contract%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"contract"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#lambda%3CT,%20R%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"lambda"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#list%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"list"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#map%3CK,%20V%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"map"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#operation"},(0,n.kt)("inlineCode",{parentName:"a"},"operation"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#sapling_state(n)"},(0,n.kt)("inlineCode",{parentName:"a"},"sapling_state"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#sapling_transaction(n)"},(0,n.kt)("inlineCode",{parentName:"a"},"sapling_transaction"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#set%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"set"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#ticket%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"ticket"))))),(0,n.kt)(o.Z,{mdxType:"ThemedDivider"}),(0,n.kt)(i.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,n.kt)(i.ZP,{xs:12,sm:12,md:3,mdxType:"Grid"},(0,n.kt)("h4",{id:"packable"},"Packable")),(0,n.kt)(i.ZP,{xs:12,sm:12,md:9,mdxType:"Grid"},(0,n.kt)("p",null,"A packable value can be ",(0,n.kt)("em",{parentName:"p"},"serialised")," with ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#pack(o%20:%20T)"},(0,n.kt)("inlineCode",{parentName:"a"},"pack"))," and deserialised with ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#unpack%3CT%3E(b%20:%20bytes)"},(0,n.kt)("inlineCode",{parentName:"a"},"unpack")),"."),(0,n.kt)("p",null,"All types are packable except: ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"big_map"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"iterable_big_map"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#operation"},(0,n.kt)("inlineCode",{parentName:"a"},"operation"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#sapling_state(n)"},(0,n.kt)("inlineCode",{parentName:"a"},"sapling_state"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#ticket%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"ticket"))))),(0,n.kt)(o.Z,{mdxType:"ThemedDivider"}),(0,n.kt)(i.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,n.kt)(i.ZP,{xs:12,sm:12,md:3,mdxType:"Grid"},(0,n.kt)("h4",{id:"passable"},"Passable")),(0,n.kt)(i.ZP,{xs:12,sm:12,md:9,mdxType:"Grid"},(0,n.kt)("p",null,"A passable value can be the parameter of an ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint"},"entrypoint"),", a ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#lambda%3CT,%20R%3E"},"lambda")," and (not inlined) ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/declarations/function"},"function"),"."),(0,n.kt)("p",null,"All types are passable except: ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#operation"},(0,n.kt)("inlineCode",{parentName:"a"},"operation"))))),(0,n.kt)(o.Z,{mdxType:"ThemedDivider"}),(0,n.kt)(i.ZP,{container:!0,style:{marginTop:"18px"},mdxType:"Grid"},(0,n.kt)(i.ZP,{xs:12,sm:12,md:3,mdxType:"Grid"},(0,n.kt)("h4",{id:"storable"},"Storable")),(0,n.kt)(i.ZP,{xs:12,sm:12,md:9,mdxType:"Grid"},(0,n.kt)("p",null,"A storable value may be a contract's storage element."),(0,n.kt)("p",null,"All types are storable except: ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#contract%3CT%3E"},(0,n.kt)("inlineCode",{parentName:"a"},"contract"))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/types#operation"},(0,n.kt)("inlineCode",{parentName:"a"},"operation"))))))}y.isMDXComponent=!0},2321:(e,t,a)=>{a.d(t,{Z:()=>r});const r={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);