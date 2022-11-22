"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[3920],{1519:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3366),l=n(7462),i=n(7294),a=n(6010),o=n(7192),s=n(1796),c=n(2110),d=n(1539),m=n(8979);function u(e){return(0,m.Z)("MuiDivider",e)}(0,n(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var p=n(5893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,l.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,l.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,l.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var f=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:c,component:m=(s?"div":"hr"),flexItem:f=!1,light:b=!1,orientation:E="horizontal",role:_=("hr"!==m?"separator":void 0),textAlign:k="center",variant:x="fullWidth"}=n,y=(0,r.Z)(n,g),Z=(0,l.Z)({},n,{absolute:i,component:m,flexItem:f,light:b,orientation:E,role:_,textAlign:k,variant:x}),w=(e=>{const{absolute:t,children:n,classes:r,flexItem:l,light:i,orientation:a,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,i&&"light","vertical"===a&&"vertical",l&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,o.Z)(d,u,r)})(Z);return(0,p.jsx)(h,(0,l.Z)({as:m,className:(0,a.Z)(w.root,c),role:_,ref:t,ownerState:Z},y,{children:s?(0,p.jsx)(v,{className:w.wrapper,ownerState:Z,children:s}):null}))}))},5861:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(3366),l=n(7462),i=n(7294),a=n(6010),o=n(9707),s=n(7192),c=n(2110),d=n(1539),m=n(8216),u=n(8979);function p(e){return(0,u.Z)("MuiTypography",e)}(0,n(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(5893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,m.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,l.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var E=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiTypography"}),i=(e=>b[e]||e)(n.color),c=(0,o.Z)((0,l.Z)({},n,{color:i})),{align:u="inherit",className:E,component:_,gutterBottom:k=!1,noWrap:x=!1,paragraph:y=!1,variant:Z="body1",variantMapping:w=f}=c,T=(0,r.Z)(c,h),I=(0,l.Z)({},c,{align:u,color:i,className:E,component:_,gutterBottom:k,noWrap:x,paragraph:y,variant:Z,variantMapping:w}),A=_||(y?"p":w[Z]||f[Z])||"span",N=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:l,variant:i,classes:a}=e,o={root:["root",i,"inherit"!==e.align&&`align${(0,m.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",l&&"paragraph"]};return(0,s.Z)(o,p,a)})(I);return(0,g.jsx)(v,(0,l.Z)({as:A,ref:t,ownerState:I,className:(0,a.Z)(N.root,E)},T))}))},8216:function(e,t,n){var r=n(601);t.Z=r.Z},4810:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var r=n(4880),l=n(8357),i=n(5893);const a=(0,l.Z)({key:"css",prepend:!0});function o(e){const{injectFirst:t,children:n}=e;return t?(0,i.jsx)(r.C,{value:a,children:n}):n}},4124:function(e,t,n){n.d(t,{_:function(){return l}});var r=n(7294),l={sections:[{label:"no transfer",link:"/docs/reference/declarations/entrypoint#no-transfer",desc:r.createElement("div",null,r.createElement("code",null,"refuse transfer"))},{label:"fail if",link:"/docs/reference/declarations/entrypoint#fail-if",desc:r.createElement("div",null,r.createElement("code",null,"failif"))}],types:[{label:"asset_key",link:"/docs/reference/types#asset_key<A>",desc:r.createElement("div",null,r.createElement("code",null,"pkey"))}],instructions:[{label:"do_require",link:"/docs/reference/instructions/divergent#do_requiret--bool-e--t",desc:r.createElement("div",null,r.createElement("code",null,"dorequire"))},{label:"do_fail_if",link:"/docs/reference/instructions/divergent#do_fail_ift--bool-e--t",desc:r.createElement("div",null,r.createElement("code",null,"dofailif"))}],constants:[{label:"self_chain_id",link:"/docs/reference/expressions/constants#chain_id",desc:r.createElement("div",null,r.createElement("code",null,"chainid"))},{label:"self_address",link:"/docs/reference/expressions/constants#self_address",desc:r.createElement("div",null,r.createElement("code",null,"selfaddress"))}],builtins:[{label:"call_view",link:"/docs/reference/expressions/builtins#call_view<T>(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)",desc:r.createElement("div",null,r.createElement("code",null,"callview"))},{label:"contract_to_address",link:"/docs/reference/expressions/builtins#contract_to_address(c%20:%20contract<T>)",desc:r.createElement("div",null,r.createElement("code",null,"contract_address"))},{label:"int_to_date",link:"/docs/reference/expressions/builtins#int_to_date(i%20:%20int)",desc:r.createElement("div",null,r.createElement("code",null,"date_from_timestamp"))},{label:"key_to_key_hash",link:"/docs/reference/expressions/builtins#key_to_key_hash(k%20:%20key)",desc:r.createElement("div",null,r.createElement("code",null,"hash_key"))},{label:"key_hash_to_contract",link:"/docs/reference/expressions/builtins#key_hash_to_contract(pkh%20:%20key_hash)",desc:r.createElement("div",null,r.createElement("code",null,"implicit_account"))},{label:"int_to_nat",link:"/docs/reference/expressions/builtins#int_to_nat(i%20:%20int)",desc:r.createElement("div",null,r.createElement("code",null,"isnat"))},{label:"is_none",link:"/docs/reference/expressions/builtins#is_none(o%20:%20option<T>)",desc:r.createElement("div",null,r.createElement("code",null,"isnone"))},{label:"is_some",link:"/docs/reference/expressions/builtins#is_some(o%20:%20option<T>)",desc:r.createElement("div",null,r.createElement("code",null,"issome"))},{label:"key_to_address",link:"/docs/reference/expressions/builtins#key_to_address(k%20:%20key)",desc:r.createElement("div",null,r.createElement("code",null,"key_address"))},{label:"make_operation",link:"/docs/reference/expressions/builtins#make_operation(a%20:%20tez,%20c%20:%20contract<T>,%20arg%20:%20T)",desc:r.createElement("div",null,r.createElement("code",null,"mkoperation"))},{label:"get_some",link:"/docs/reference/expressions/builtins#get_some(o%20:%20option<T>)",desc:r.createElement("div",null,r.createElement("code",null,"opt_get"))},{label:"nat_to_string",link:"/docs/reference/expressions/builtins#nat_to_string(n%20:%20nat)",desc:r.createElement("div",null,r.createElement("code",null,"to_string"))},{label:"get_entrypoint",link:"/docs/reference/expressions/builtins#get_entrypoint<T>(s,%20a%20:%20address)",desc:r.createElement("div",null,r.createElement("code",null,"entrypoint"))}],assets:[{label:"get",link:"/docs/reference/expressions/asset#agetk--asset_keya",desc:r.createElement("div",null,r.createElement("code",null,"get_opt"))},{label:"add_update",link:"/docs/reference/expressions/asset#agetk--asset_keya",desc:r.createElement("div",null,r.createElement("code",null,"addupdate"))},{label:"remove_if",link:"/docs/reference/instructions/asset#aremove_ifp",desc:r.createElement("div",null,r.createElement("code",null,"removeif"))},{label:"remove_all",link:"/docs/reference/instructions/asset#aremove_all",desc:r.createElement("div",null,r.createElement("code",null,"clear"))}],errors:[{label:'"ASSET_NOT_FOUND"',desc:r.createElement("div",null,r.createElement("code",null,'"AssetNotFound"'))},{label:'"DIV_BY_ZERO"',desc:r.createElement("div",null,r.createElement("code",null,'"divbyzero"'))},{label:'"INVALID_CALLER"',desc:r.createElement("div",null,r.createElement("code",null,'"InvalidCaller"'))},{label:'"INVALID_NEGATIVE_TEZ"',desc:r.createElement("div",null,r.createElement("code",null,'"InvalidNegativeTez"'))},{label:'"INVALID_SOURCE"',desc:r.createElement("div",null,r.createElement("code",null,'"InvalidSource"'))},{label:'"INVALID_STATE"',desc:r.createElement("div",null,r.createElement("code",null,'"InvalidState"'))},{label:'"INVALID_CONDITION"',desc:r.createElement("div",null,r.createElement("code",null,'"InvalidCondition"'))},{label:'"KEY_EXISTS"',desc:r.createElement("div",null,r.createElement("code",null,'"KeyExists"'))},{label:'"KEY_EXISTS_OR_NOT_FOUND"',desc:r.createElement("div",null,r.createElement("code",null,'"KeyExistsOrNotFound"'))},{label:'"NO_TRANSFER"',desc:r.createElement("div",null,r.createElement("code",null,'"NoTransfer"'))}]}},6457:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),l=n(9960),i=n(6886),a=n(1519),o=n(5861),s=n(4810),c=n(2321),d=function(e){return r.createElement(i.ZP,{item:!0,container:!0,xs:12},1==e.divider?r.createElement(i.ZP,{item:!0,xs:12},r.createElement(a.Z,{className:c.Z.divider,style:{marginBottom:"8px",marginTop:"4px"}})):r.createElement("div",null),r.createElement(i.ZP,{item:!0,xs:12,sm:e.xs,md:e.xs,style:{paddingLeft:"8px"}},null==e.data.link?r.createElement("code",null,e.data.label):r.createElement(l.Z,{to:e.data.link},r.createElement("code",null,e.data.label))),r.createElement(i.ZP,{item:!0,xs:12,sm:12-e.xs,md:12-e.xs,style:{paddingLeft:"8px",marginBottom:"8px"}},r.createElement(o.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)))};function m(e){var t=null==e.xs?3:e.xs;return r.createElement(s.Z,{injectFirst:!0},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,style:{paddingLeft:"8px"}},r.createElement(o.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},e.title)),e.data.map((function(n,l){return r.createElement(d,{divider:l>0||0==l&&e.title.length>0,data:n,xs:t})}))))}},2156:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),l=n(1519),i=n(4810),a=n(2321);function o(){return r.createElement(i.Z,{injectFirst:!0},r.createElement(l.Z,{className:a.Z.divider}))}},1838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=n(6886),o=n(2156),s=(n(4124),n(6457),["components"]),c={slug:"v131",title:"Version 1.3.1",authors:["br","gd"],tags:["version"]},d=void 0,m={permalink:"/blog/v131",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-24-v1.3.1.md",source:"@site/blog/2022-06-24-v1.3.1.md",title:"Version 1.3.1",description:"We present version 1.3.1 of Archetype language.",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"version",permalink:"/blog/tags/version"}],readingTime:.895,truncated:!0,authors:[{name:"Benoit Rognier",title:"CEO Completium",url:"https://www.linkedin.com/in/benoitrognier/",imageURL:"/img/blog/br.jpeg",key:"br"},{name:"Guillaume Duhamel",title:"CTO Completium",url:"https://www.linkedin.com/in/guillaumeduhamel/",imageURL:"/img/blog/gd.jpeg",key:"gd"}],frontMatter:{slug:"v131",title:"Version 1.3.1",authors:["br","gd"],tags:["version"]},prevItem:{title:"Version 1.3.2",permalink:"/blog/v132"},nextItem:{title:"Version 1.3.0",permalink:"/blog/v13"}},u={authorsImageUrls:[void 0,void 0]},p=[{value:"Added",id:"added",level:2},{value:"Constant section",id:"constant-section",level:4}],g={toc:p};function h(e){var t,n=e.components,c=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We present version ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation"},(0,i.kt)("inlineCode",{parentName:"a"},"1.3.1"))," of Archetype language."),(0,i.kt)("h2",{id:"added"},"Added"),(0,i.kt)(a.ZP,((t={container:!0}).container=!0,t.direction="row",t.justifyContent="center",t.alignItems="center",t.mdxType="Grid",t),(0,i.kt)(a.ZP,{xs:12,sm:12,md:3,mdxType:"Grid"},(0,i.kt)("h4",{id:"constant-section"},"Constant section")),(0,i.kt)(a.ZP,{xs:12,sm:12,md:9,mdxType:"Grid"},(0,i.kt)("p",null,"This new entrypoint's section ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#constant"},(0,i.kt)("inlineCode",{parentName:"a"},"constant"))," allows the declaration of local constants to be used in other sections."))),(0,i.kt)(o.Z,{mdxType:"ThemedDivider"}))}h.isMDXComponent=!0},2321:function(e,t){t.Z={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);