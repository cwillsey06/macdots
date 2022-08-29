"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8123],{22578:(e,t,n)=>{n.d(t,{$:()=>u});var i=n(67294),a=n(64593),l=n(96206),r=n(69691),o=n(8341),c=n(89952),s=n(51615),d=n(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const u=({children:e,usePlayingItem:t})=>{let n=m(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),n=(0,s.k6)(),a=n.location?.state?.preventMoveFocus,l=(0,i.useRef)(n.length<2);l.current=n.length<2,(0,i.useEffect)((()=>{const n=t.current;!a&&!l.current&&n&&e&&(n.setAttribute("aria-label",e),n.focus())}),[e,t,a])})(e);const{isPlaying:u}=(0,r.IK)(),E=(0,o.Y)((e=>e?.item));return E&&(u||t)&&((0,c.G_)(E)?n=[E.name,E.artists.map((e=>e.name)).join(l.ag.getSeparator())].join(" • "):(0,c.iw)(E)?n=[E.name,E.show.name].join(" • "):(0,c.k6)(E)&&(n=m(l.ag.get("ad-formats.advertisement")))),i.createElement(a.q,{defaultTitle:"Spotify",defer:!1},i.createElement("title",null,n))}},70369:(e,t,n)=>{n.d(t,{$:()=>i.$});var i=n(22578)},326:(e,t,n)=>{n.d(t,{l:()=>u});var i=n(67294),a=n(32667),l=n(34011),r=n(18864),o=n(16367),c=n(85166);const s={[r.Uo.MEDIUM]:"alto",[r.Uo.LARGE]:"alto",[r.Uo.XLARGE]:"forte"},d={[r.Uo.LARGE]:"ballad",[r.Uo.XLARGE]:"cello"},m={[r.Uo.LARGE]:"viola",[r.Uo.XLARGE]:"viola"},u=({title:e,subtitle:t,body:n,footnote:u,buttonText:E,callToActionClicked:b})=>{const g=(0,r.jh)(),v=g&&s[g]||"canon",h=g&&d[g]||"mesto",p=g&&m[g]||"finale";return i.createElement(i.Fragment,null,i.createElement(a.D,{as:"h1",variant:v,semanticColor:"textBase",className:c.Z.title},e),i.createElement(a.D,{as:"h2",variant:h,semanticColor:"textSubdued",className:c.Z.subtitle},t),n,b&&i.createElement(l.D,{className:c.Z.button,colorSet:"invertedLight",onClick:b,"data-testid":o.xd},E),u&&i.createElement(a.D,{as:"p",variant:p,semanticColor:"textSubdued",className:c.Z.note},u))}},27887:(e,t,n)=>{n.d(t,{H:()=>h});var i=n(67294),a=n(20394),l=n(96206),r=n(20367),o=n(70369),c=n(18864);const s="NTT5CathoDEMjrmgfv9y",d="WmmNhmwHDNvDxInfukYO",m=e=>i.createElement("div",{className:s},i.createElement("div",{className:d},i.createElement("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"}))));var u=n(326),E=n(16367),b=n(85166);const g={name:"",username:"",image_url:null,hash:""},v={[c.Uo.MEDIUM]:164,[c.Uo.LARGE]:164,[c.Uo.XLARGE]:270},h=({invitation:e,callToActionClicked:t,breakpointEltRef:n})=>{const s=!!e.members?.length,d=s&&e.members?.[0]||e.recipient||g,h=s&&e.recipient||null,p=(0,c.jh)(),f=p&&v[p]||128,w=Math.round(.475*f);return i.createElement("div",{className:(0,a.cx)(b.Z.container,b.Z.TwoUsers),"data-testid":E.xS,ref:n},i.createElement(o.$,null,l.ag.get("blend.invite.page-title")),i.createElement("div",{className:b.Z.facepile},i.createElement(r.q,{label:d.name,images:[{url:d.image_url??"",width:f,height:f}],width:f,userIconSize:w}),h?i.createElement(r.q,{label:h.name,images:[{url:h.image_url??"",width:f,height:f}],width:f,userIconSize:w,piled:!0}):((e,t)=>i.createElement(r.q,{label:l.ag.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:t,customPlaceholder:i.createElement(m,{iconSize:t}),piled:!0}))(f,w)),i.createElement(u.l,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,buttonText:e.button_text,callToActionClicked:t}))}},16367:(e,t,n)=>{n.d(t,{Eh:()=>r,ab:()=>l,e0:()=>i,xS:()=>a,xd:()=>o});const i="blend-deleted-container",a="blend-two-user-container",l="blend-multi-user-container",r="blend-full-container",o="blend-cta-button"},80647:(e,t,n)=>{n.d(t,{Z:()=>i});const i=()=>{const e=window.location.href;return window.location.href=`https://accounts.spotify.com/login?continue=${encodeURIComponent(e)}`,null}},22250:(e,t,n)=>{n.d(t,{Ag:()=>o,V3:()=>a,nW:()=>r,oN:()=>l});var i=n(16516);let a;!function(e){e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED"}(a||(a={}));const l=(e,t)=>e.build().withHost(i.cM).withPath(`/v3/view-invitation/${encodeURIComponent(t)}`).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send(),r=(e,t)=>e.build().withHost(i.cM).withMethod("PUT").withPath(`/v2/join/${encodeURIComponent(t)}`).withEndpointIdentifier("join/{invitationId}").send(),o=e=>e.build().withHost(i.cM).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()},52201:(e,t,n)=>{n.d(t,{j:()=>l});var i=n(82144),a=n(53052);const l=()=>(0,a.D)({[i.U.SMALL]:536,[i.U.MEDIUM]:792,[i.U.LARGE]:1048,[i.U.XLARGE]:1688})},60210:(e,t,n)=>{n.d(t,{i:()=>d});var i=n(86706),a=n(96206),l=n(87961),r=n(25853),o=n(51867),c=n(29255),s=n(22250);function d(){const{user:e}=(0,i.v9)(c.Gg),t=(0,o.k)();return async()=>{try{const n=await(0,s.Ag)(l.b.getInstance()),i=n.body?.invite;if(!i)throw new Error("unable to generate invite link");const o=e?.display_name?a.ag.get("blend.invite.body-with-name",e.display_name,n.body?.invite):a.ag.get("blend.invite.body-without-name",n.body?.invite);(0,r.v)(o),t(a.ag.get("feedback.link-copied"))}catch{t(a.ag.get("error.generic"))}}}},81070:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(67294),a=n(86706),l=n(96206),r=n(70369),o=n(29255),c=n(18864),s=n(15429),d=n(49961),m=n(22250),u=n(52201),E=n(60210),b=n(27887),g=n(80647);const v={page_type:m.V3.PENDING_INVITATION,get title(){return l.ag.get("web-player.blend.group-invite.header")},get subtitle(){return l.ag.get("web-player.blend.duo-invite.description")},get button_text(){return l.ag.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null},h=()=>{const e=(0,E.i)(),{ref:t,breakpoint:n}=(0,u.j)(),{user:m}=(0,a.v9)(o.Gg),h=m?.uri?(0,s.C)(m?.uri):"",p=(e=>({...v,members:[e],footnote:l.ag.get("web-player.blend.group-invite.warning")}))({name:m?.display_name||"",username:h,image_url:(0,d.X)(m?.images)?.url||null,hash:""});return m?i.createElement(i.Suspense,{fallback:null},i.createElement(r.$,null,l.ag.get("web-player.blend.invite.page-title")),i.createElement(c.ZU.Provider,{value:n},i.createElement(b.H,{invitation:p,callToActionClicked:e,breakpointEltRef:t}))):i.createElement(g.Z,null)}},80417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(67294),a=n(86706),l=n(51615),r=n(29255),o=n(29634),c=n(69518),s=n.n(c),d=n(33661),m=n(87577),u=n(96206),E=n(87972),b=n(49207),g=n(18864),v=n(6158),h=n(22250),p=n(52201),f=n(60210),w=n(87961),_=n(51867);var y=n(15358),A=n(326),I=n(16367),N=n(85166);const T=({invitation:e,callToActionClicked:t,breakpointEltRef:n})=>i.createElement("div",{className:N.Z.container,"data-testid":I.Eh,ref:n},i.createElement(y.Z,{iconSize:64}),i.createElement(A.l,{title:e.title,subtitle:e.subtitle,buttonText:e.button_text,footnote:null,callToActionClicked:t}));var k=n(70369),x=n(94184),D=n.n(x),R=n(32667),U=n(20367),L=n(18261),M=n(43480),C=n(67892);const O="HKAYWYmxd5Ie8WSi0a4y",S="i52u_T3b50wraodIaORk",P="xakiNVMlUf6geF67FEgy",Z="IRhTesoeIiwswlly0Dvg",Y="LNJzE17iskXWmfKAzY4U",G="qzBr7X7cdLUhWdk0r8lL",V=({uri:e,imageUrl:t,name:n})=>i.createElement("li",null,i.createElement(L._,{menu:i.createElement(M.I,{uri:e})},i.createElement(C.r,{to:e},i.createElement("div",{className:Z},i.createElement(U.q,{images:[{url:t,width:null,height:null}],label:n,width:32,userIconSize:24,className:Y}),i.createElement(R.D,{variant:"violaBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase"},n))))),B=({members:e,headingText:t,className:n})=>i.createElement("div",{className:D()(O,n)},i.createElement("div",null,i.createElement(R.D,{as:"h4",variant:"minuetBold",semanticColor:"textSubdued",className:S},t)),i.createElement("ul",{className:P},e&&e.map((e=>i.createElement(V,{imageUrl:e.image_url||"",name:e.name,uri:s().profileURI(e.username).toURI(),key:e.username})))),i.createElement("div",{className:G})),j=({invitation:e,callToActionClicked:t,breakpointEltRef:n})=>{const a=e.members||[],l=i.createElement("div",{className:N.Z.userListContainer,"data-testid":I.ab},i.createElement(B,{className:N.Z.userList,headingText:e.members_title,members:a}));return i.createElement("div",{className:N.Z.container,ref:n},i.createElement(k.$,null,u.ag.get("blend.join.title")),i.createElement(A.l,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,body:l,buttonText:e.button_text,callToActionClicked:t}))};var z=n(27887);const X=({invitationId:e})=>{const t=(0,l.k6)(),n=(0,m.W6)(b.c$),{data:a,error:r,loading:o}=(0,E.J)(h.oN,[e]),c=(0,f.i)(),y=function(e){const t=(0,_.k)(),n=(0,l.k6)();return async()=>{try{const t=await(0,h.nW)(w.b.getInstance(),e),i=s().from(t?.body.playlist_uri).toURLPath(!0);if(!i)throw new Error("unable to join");n.replace(i)}catch{t(u.ag.get("error.request-playlist-failure"))}}}(e),{ref:k,breakpoint:x}=(0,p.j)(),D=null===a||!a.body;if(D||o||r)return i.createElement(v.h,{timeoutInMs:1e3,hasError:!!r||!o&&D,errorMessage:u.ag.get("error.generic")});const R=s().from(a?.body.playlist_uri)?.toURLPath(!0),U=a?.body.members?.length||0,L=n===b.rS.TWO_USER;switch(a?.body.page_type){case h.V3.DELETED:return i.createElement(g.ZU.Provider,{value:x},i.createElement("div",{className:N.Z.container,ref:k,"data-testid":I.e0},i.createElement(d.F,{iconSize:64}),i.createElement(A.l,{title:a.body.title,subtitle:a.body.subtitle,buttonText:a.body.button_text,footnote:a.body.footnote,callToActionClicked:c})));case h.V3.ALREADY_JOINED:return R&&t.replace(R),i.createElement(v.h,{hasError:!1,errorMessage:u.ag.get("error.request-playlist-failure")});case h.V3.READY_TO_JOIN_EMPTY_BLEND:return i.createElement(g.ZU.Provider,{value:x},i.createElement(z.H,{invitation:a.body,breakpointEltRef:k,callToActionClicked:y}));case h.V3.READY_TO_JOIN_ALREADY_CREATED_BLEND:return L&&U>=2?i.createElement(g.ZU.Provider,{value:x},i.createElement(T,{invitation:{...a.body,title:u.ag.get("blend.link-invialid.header"),subtitle:u.ag.get("blend.link-invalid.subtitle"),button_text:u.ag.get("blend.invite.button-title")},callToActionClicked:c,breakpointEltRef:k})):i.createElement(g.ZU.Provider,{value:x},i.createElement(j,{invitation:a.body,callToActionClicked:y,breakpointEltRef:k}));case h.V3.MAX_MEMBERS:return i.createElement(g.ZU.Provider,{value:x},i.createElement(T,{invitation:a.body,callToActionClicked:c,breakpointEltRef:k}));case h.V3.PENDING_INVITATION:return i.createElement(g.ZU.Provider,{value:x},i.createElement(z.H,{invitation:a.body,callToActionClicked:c,breakpointEltRef:k}));default:return i.createElement(v.h,{timeoutInMs:1e3,hasError:!0,errorMessage:u.ag.get("error.generic")})}};var q=n(80647);const W=({invitationId:e})=>{const{user:t}=(0,a.v9)(r.Gg);return t?i.createElement(o.n,{fallback:null},i.createElement(X,{invitationId:e})):i.createElement(q.Z,null)},H=i.memo((()=>i.createElement(W,(0,l.UO)())))},85166:(e,t,n)=>{n.d(t,{Z:()=>i});const i={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map