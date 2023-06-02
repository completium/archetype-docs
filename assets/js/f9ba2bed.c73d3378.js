"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[3797],{1519:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(3366),i=a(7462),o=a(7294),r=a(6010),l=a(7192),p=a(1796),s=a(2110),c=a(1539),d=a(8979);function m(e){return(0,d.Z)("MuiDivider",e)}(0,a(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=a(5893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,p.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:p,className:s,component:d=(p?"div":"hr"),flexItem:v=!1,light:k=!1,orientation:w="horizontal",role:x=("hr"!==d?"separator":void 0),textAlign:y="center",variant:b="fullWidth"}=a,N=(0,n.Z)(a,u),Z=(0,i.Z)({},a,{absolute:o,component:d,flexItem:v,light:k,orientation:w,role:x,textAlign:y,variant:b}),A=(e=>{const{absolute:t,children:a,classes:n,flexItem:i,light:o,orientation:r,textAlign:p,variant:s}=e,c={root:["root",t&&"absolute",s,o&&"light","vertical"===r&&"vertical",i&&"flexItem",a&&"withChildren",a&&"vertical"===r&&"withChildrenVertical","right"===p&&"vertical"!==r&&"textAlignRight","left"===p&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,l.Z)(c,m,n)})(Z);return(0,h.jsx)(g,(0,i.Z)({as:d,className:(0,r.Z)(A.root,s),role:x,ref:t,ownerState:Z},N,{children:p?(0,h.jsx)(f,{className:A.wrapper,ownerState:Z,children:p}):null}))}))},5861:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3366),i=a(7462),o=a(7294),r=a(6010),l=a(9707),p=a(7192),s=a(2110),c=a(1539),d=a(8216),m=a(8979);function h(e){return(0,m.Z)("MuiTypography",e)}(0,a(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var u=a(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTypography"}),o=(e=>k[e]||e)(a.color),s=(0,l.Z)((0,i.Z)({},a,{color:o})),{align:m="inherit",className:w,component:x,gutterBottom:y=!1,noWrap:b=!1,paragraph:N=!1,variant:Z="body1",variantMapping:A=v}=s,S=(0,n.Z)(s,g),C=(0,i.Z)({},s,{align:m,color:o,className:w,component:x,gutterBottom:y,noWrap:b,paragraph:N,variant:Z,variantMapping:A}),P=x||(N?"p":A[Z]||v[Z])||"span",I=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:i,variant:o,classes:r}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,p.Z)(l,h,r)})(C);return(0,u.jsx)(f,(0,i.Z)({as:P,ref:t,ownerState:C,className:(0,r.Z)(I.root,w)},S))}))},8216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a(601).Z},9776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var n=a(7462),i=a(7294),o=a(3905),r=a(9960),l=a(6886),p=a(5861),s=a(1519),c=a(2321);function d(e){return i.createElement(l.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,style:{marginTop:"0px"}},i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"DApp URL")),i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(r.Z,{to:e.data.url},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.url))),i.createElement(l.ZP,{item:!0,xs:12},i.createElement(s.Z,{className:c.Z.divider})),i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Smart Contract")),i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(r.Z,{to:e.data.contract_url},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.contract))),i.createElement(l.ZP,{item:!0,xs:12},i.createElement(s.Z,{className:c.Z.divider})),i.createElement(l.ZP,{item:!0,xs:3,sm:2,md:2},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},"Repository")),i.createElement(l.ZP,{item:!0,xs:9,sm:10,md:10},i.createElement(r.Z,{to:e.data.repo},i.createElement(p.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.repo))))}const m={},h="Poll DApp",u={unversionedId:"dapps/example/index",id:"dapps/example/index",title:"Poll DApp",description:"This section presents the Poll DApp example: users can create and answer polls. An account can only answer a poll once.",source:"@site/docs/dapps/example/index.md",sourceDirName:"dapps/example",slug:"/dapps/example/",permalink:"/docs/dapps/example/",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/dapps/example/index.md",tags:[],version:"current",frontMatter:{},sidebar:"dapps",previous:{title:"Packages API",permalink:"/docs/dapps/project/packagesapi/"},next:{title:"Smart Contract",permalink:"/docs/dapps/example/contract"}},g={},f=[{value:"Login",id:"login",level:2},{value:"Answer a poll",id:"answer-a-poll",level:2},{value:"Event notifications",id:"event-notifications",level:2},{value:"Create a poll",id:"create-a-poll",level:2}],v={toc:f};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"poll-dapp"},"Poll DApp"),(0,o.kt)("p",null,"This section presents the ",(0,o.kt)("a",{parentName:"p",href:"https://completium.github.io/poll-dapp/"},(0,o.kt)("em",{parentName:"a"},"Poll DApp"))," example: users can create and answer polls. An account can only answer a poll once."),(0,o.kt)("p",null,"Poll definitions (question, image and possible answers) are stored on IPFS. The list of polls and user's answers are stored in a smart contract."),(0,o.kt)("p",null,"The DApp uses the ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"MUI")," UI widget library."),(0,o.kt)(d,{data:{url:"https://completium.github.io/poll-dapp/",contract_url:"https://better-call.dev/ghostnet/KT1FcUNmyZ255yyfqWL3GC1AGqSY2vKqYwEg/operations",contract:"KT1FcUNmyZ255yyfqWL3GC1AGqSY2vKqYwEg",repo:"https://github.com/completium/poll-dapp"},mdxType:"DAppInfo"}),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("p",null,"Click the topbar ",(0,o.kt)("inlineCode",{parentName:"p"},"LOGIN")," button to connect to a wallet; select a wallet you want to connect to (Temple, Kukai, Umami, ...)."),(0,o.kt)("p",null,"Once logged in, the login button is replaced by a panel with basic information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User address (",(0,o.kt)("inlineCode",{parentName:"li"},"tz1...")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"tz2..."),")"),(0,o.kt)("li",{parentName:"ul"},"Name of the wallet connected to"),(0,o.kt)("li",{parentName:"ul"},"Network (",(0,o.kt)("em",{parentName:"li"},"Ghostnet")," in this example)"),(0,o.kt)("li",{parentName:"ul"},"Balance"),(0,o.kt)("li",{parentName:"ul"},"Endpoint (the Tezos endpoint the DApp using)"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"LOGOUT")," button to disconnet from wallet")),(0,o.kt)("h2",{id:"answer-a-poll"},"Answer a poll"),(0,o.kt)("p",null,"Steps to answer a poll:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"click on a poll in the DApp's ",(0,o.kt)("a",{parentName:"li",href:"https://completium.github.io/poll-dapp"},"main panel")),(0,o.kt)("li",{parentName:"ol"},"click on one of the possible answers"),(0,o.kt)("li",{parentName:"ol"},"click the ",(0,o.kt)("inlineCode",{parentName:"li"},"SUBMIT")," button; it is then required to connect to a wallet (if not already logged in) and validate the transaction to the contract")),(0,o.kt)("p",null,"Once the transaction is validated on the blockchain, the statistic of the poll (number of answers per possible answer) is displayed."),(0,o.kt)("h2",{id:"event-notifications"},"Event notifications"),(0,o.kt)("p",null,"User is notified when another user either creates a new poll or answers a poll:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a message is displayed at the bottom of the screen for a few seconds"),(0,o.kt)("li",{parentName:"ul"},"the detailed event information is added to the ",(0,o.kt)("em",{parentName:"li"},"notification center"))),(0,o.kt)("h2",{id:"create-a-poll"},"Create a poll"),(0,o.kt)("p",null,"A poll is specified with a JSON file that defines the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"utterance"),': the question asked by the poll (for example "What is your favorite food?")'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"img"),": a ",(0,o.kt)("em",{parentName:"li"},"public")," URL to illustrate the question"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"choices"),": a list of choices")),(0,o.kt)("p",null,'For example, below is the "What is your favorite food?" poll definition:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance" : "What is your favorite food?",\n  "img" : "https://1.bp.blogspot.com/-WOrNura8t1g/W6ufizUlixI/AAAAAAAAA38/X05agj6atWcxyyaRgOl07jMeaZnuF7JwgCLcBGAs/w1200-h630-p-k-no-nu/World-Food-Day.jpg",\n  "choices" : [ "Pizza", "Burger", "Sushi", "Tacos", "Croissant" ]\n}\n')),(0,o.kt)("p",null,"The poll JSON file must be then uploaded to IPFS. The online app ",(0,o.kt)("a",{parentName:"p",href:"https://www.pinata.cloud/"},"Pinata")," may be used for that. Once uploaded, the data is identified by a unique hash value."),(0,o.kt)("p",null,"For example, the hash of the above poll definition is ",(0,o.kt)("inlineCode",{parentName:"p"},"QmZ8GxAwPvVDEtGxyUmfbB1dtmrdDR6tmMv9HUATaippqU")),(0,o.kt)("p",null,"Steps to add a poll:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"ADD POLL")," button in the DApp's ",(0,o.kt)("a",{parentName:"li",href:"https://completium.github.io/poll-dapp"},"main panel")),(0,o.kt)("li",{parentName:"ol"},"paste the hash value in the ",(0,o.kt)("em",{parentName:"li"},"IPFS hash")," field; the poll is then displayed for validation"),(0,o.kt)("li",{parentName:"ol"},"click the ",(0,o.kt)("inlineCode",{parentName:"li"},"SUBMIT")," button; it is then required to connect to a wallet (if not already logged in) and validate the transaction to the contract.")),(0,o.kt)("p",null,"Once submitted, the contract's owner (",(0,o.kt)("inlineCode",{parentName:"p"},"tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P"),") needs to validate the poll for it to appear in the main panel."))}k.isMDXComponent=!0},2321:(e,t,a)=>{a.d(t,{Z:()=>n});const n={divider:"divider_LuCZ",gradient:"gradient_kJ7D"}}}]);