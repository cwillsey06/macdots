"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3727],{22578:(e,t,a)=>{a.d(t,{$:()=>d});var n=a(67294),i=a(64593),r=a(96206),l=a(69691),s=a(8341),c=a(89952),o=a(51615),u=a(24183);function m(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const d=({children:e,usePlayingItem:t})=>{let a=m(e);(e=>{const{mainLandmarkRef:t}=(0,u.Oh)(),a=(0,o.k6)(),i=a.location?.state?.preventMoveFocus,r=(0,n.useRef)(a.length<2);r.current=a.length<2,(0,n.useEffect)((()=>{const a=t.current;!i&&!r.current&&a&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t,i])})(e);const{isPlaying:d}=(0,l.IK)(),E=(0,s.Y)((e=>e?.item));return E&&(d||t)&&((0,c.G_)(E)?a=[E.name,E.artists.map((e=>e.name)).join(r.ag.getSeparator())].join(" • "):(0,c.iw)(E)?a=[E.name,E.show.name].join(" • "):(0,c.k6)(E)&&(a=m(r.ag.get("ad-formats.advertisement")))),n.createElement(i.q,{defaultTitle:"Spotify",defer:!1},n.createElement("title",null,a))}},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},69376:(e,t,a)=>{a.d(t,{n:()=>T});var n=a(67294),i=a(94184),r=a.n(i),l=a(51615),s=a(32667),c=a(34142),o=a(47921),u=a(96206),m=a(24697),d=a(32648),E=a(85951);var g=a(32626),p=a(43031),y=a(30005),f=a(21691);const x="BkpKedcdaMGbvgXMlmcg",b="muYk5XIwKmqR9iNibk_f",v="queue-tabBar-header",h="m20ShRDiGGDpJ5LSABTi",k="Hvv0e7WKQ4kyftgSQJhg",C="yxf_6IsQEmHjijEBUMTP",N="oaNVBli46GtVjaQKB15g",P="JdlKTdpMquftpMwwegZo",I="Nts_ArOCGeROTDZND3M6",U="FvDsfgxSvLvL3q8d7nQv",w=({items:e,activeItemId:t})=>n.createElement(y.v,null,e.map((e=>e.disabled?n.createElement(f.s,{key:e.uri,disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick},e.title):n.createElement(f.s,{key:e.uri,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:C,activeClassName:N,onClick:e.handleClick},e.title)))),T=n.memo((function({isCentered:e,links:t,landmarkLabel:a,className:i}){const y=(0,n.useRef)(null),[f,C]=(0,n.useState)([]),[T,R]=(0,n.useState)(0),[A,O]=(0,n.useState)([]),D=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,n.useContext)(d.VX),i=(0,m.y1)((e=>{e?.width&&t(e.width)}),250);return(0,E.y)({refOrElement:a,observeOnly:"width",onResize:i}),e}()??1/0,{pathname:S}=(0,l.TH)(),q=t.find((e=>e.to===S));return(0,n.useEffect)((()=>{y.current&&R(y.current.clientWidth)}),[D]),(0,n.useEffect)((()=>{if(!y.current)return;const e=Array.from(y.current.children).map((e=>e.clientWidth));C(e)}),[t]),(0,n.useEffect)((()=>{if(!y.current)return;if(f.slice(0,-1).reduce(((e,t)=>e+t),0)<=T)return void O([]);const e=f.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;f.forEach(((e,n)=>{T>=a+e?a+=e:t.push(n)})),O(t)}),[T,f]),n.createElement("nav",{className:r()(i,x),"aria-label":a},n.createElement("ul",{className:e?b:I,ref:y},t.filter(((e,t)=>!A.includes(t))).map((e=>(e?.render??(e=>e))(n.createElement("li",{key:e.to,className:v},e.disabled?n.createElement("div",{className:P},n.createElement(s.D,{variant:"mestoBold"},e.title)):n.createElement(p.O,{exact:!0,className:P,activeClassName:N,to:e.to,onClick:e.handleClick},n.createElement(s.D,{variant:"mestoBold"},e.title)))))),A.length||0===f.length?n.createElement("li",{className:v},n.createElement(g.xV,{renderInline:!0,menu:n.createElement(w,{items:t.filter(((e,t)=>A.includes(t))),activeItemId:q?.itemId})},((e,t,a)=>n.createElement("button",{className:r()(h,{[k]:q}),type:"button",onClick:t,ref:a},n.createElement(s.D,{variant:"mestoBold"},q?q.title:u.ag.get("more")),e?n.createElement(c.U,{iconSize:16,className:U}):n.createElement(o.i,{iconSize:16,className:U}))))):null))}))},32594:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Se});var n=a(67294),i=a(73305),r=a(74414),l=a(26700),s=a(96335),c=a(68960),o=a(32667),u=a(96206),m=a(22141);const d="gTvMl6pwfRD9PobMSB5x",E="hNAQG0TAe2WFYyf_iZEB",g="Zhzrb2k9nQRActS2lp4U",p=()=>n.createElement("div",{className:d},n.createElement(m.Y,{iconSize:64}),n.createElement(o.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:E},u.ag.get("history.empty-title")),n.createElement("p",null,u.ag.get("history.empty-description")));var y=a(28248),f=a(47991),x=a(42922),b=a(89952),v=a(42781),h=a(38470),k=a(49961),C=a(69518),N=a.n(C),P=a(25988),I=a(26921),U=a(88214),w=a(21509),T=a(94107),R=a(82760),A=a(18261),O=a(85576),D=a(87257),S=a(57978),q=a(26010),L=a(84242),M=a(84788),Q=a(22345);const _=n.memo((function({uri:e,name:t,duration_ms:a,index:i,imgUrl:r,artists:l,album:s,isExplicit:c,isMOGEFRestricted:o,type:m}){const{useCurrentAvailability:d}=(0,n.useContext)(q.I),[E,g]=d(e),{isActive:p,isPlaying:y,triggerPlay:f,togglePlay:b}=(0,L.n)({uri:e},{featureIdentifier:"history"}),h=m===v.p.TRACK,k=m===v.p.EPISODE,C=m===v.p.CHAPTER,{badges:_,hasBadges:F}=(0,M.r)({offlineAvailability:g,isExplicit:c,isMOGEFRestricted:o}),B=E,G=l?.map((e=>e.name)).join(u.ag.getSeparator())||"";let $;return k?$=n.createElement(P.k,{uri:e,contextUri:e,showUri:s.uri}):C?$=n.createElement(Q.r,{uri:e,contextUri:e,showUri:s.uri}):h&&N().isLocalTrack(e)?$=n.createElement(I.N,{uri:e,contextUri:e}):h&&($=n.createElement(U.$,{uri:e,contextUri:e,albumUri:s.uri,artists:l})),n.createElement(x.ZP,{value:"row",index:i},n.createElement(A._,{menu:$},n.createElement(R.c,{uri:e,contextUri:e,index:i,ariaRowIndex:i,onTriggerPlay:()=>{f()},isActive:p,isPlayable:B,ageRestricted:o,dragMetadata:{name:t,createdBy:G}},n.createElement(w.vZ,{ariaColIndex:0},n.createElement(w.VG,{uri:e,src:r,isPlaying:y,isActive:p,isLocked:!1,onClick:()=>{b()},isEpisode:N().isEpisode(e),playAriaLabel:u.ag.get("tracklist.a11y.play",t,G)}),n.createElement(w.vm,null,n.createElement(w.Wh,{titleText:t},t),F&&n.createElement(w.g3,null,_.download&&n.createElement(O.G,{size:16}),_.explicit&&n.createElement(D.N,null),_.nineteen&&n.createElement(S.X,{className:T.Z.nineteen,size:16})),n.createElement(w.K9,null,N().isTrack(e)?n.createElement(w.T6,{artists:l}):l[0]?.name??""))),n.createElement(w.UA,{ariaColIndex:2},n.createElement(w.BM,{nonInteractive:N().isLocalTrack(e),uri:s.uri,name:s.name,creatorUri:l?.[0]?.uri},s.name)),n.createElement(w.mU,{ariaColIndex:1},!N().isLocalTrack(e)&&n.createElement(w.qS,{uri:e,type:m}),n.createElement(w.A$,{duration:a}),n.createElement(w.Zv,{menu:$,label:u.ag.get("more.label.track",t,G)})))))}),((e,t)=>e.uri===t.uri)),F=n.memo((function({items:e}){const t=(0,n.useCallback)(((e,t)=>{const a=(0,k.X)(e.images??[],{desiredSize:40});return(0,b.G_)(e)?e.isLocal?n.createElement(_,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:a?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:v.p.TRACK}):n.createElement(_,{key:t+e.uri,index:t,uri:(0,f.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:a?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:v.p.TRACK}):(0,b.iw)(e)?n.createElement(_,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:a?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:v.p.EPISODE}):(0,b.G7)(e)?n.createElement(_,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:a?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:v.p.CHAPTER}):((0,b.k6)(e)||(0,b.RB)(e)||(0,h._)(e),n.createElement(y.hU,{height:`${y.dN}px`}))}),[]),a=(0,n.useMemo)((()=>[y.QD.TITLE,y.QD.ALBUM_OR_PODCAST,y.QD.DURATION]),[]),i=(0,n.useCallback)((e=>e.uri),[]);return n.createElement(n.Fragment,null,n.createElement(x.ZP,{value:"play-history-tracklist"},n.createElement(y.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:a,renderRow:t,resolveUri:i,tracks:e,nrTracks:e.length,rowPlaceholder:y.hU,limit:50})))})),B="dt3fysZYdQ6hhWfpmjAu",G="n6LsTkKvpO88xeRyRTdw",$=()=>{const e=(0,s.U5)();return e&&e.items.length>0?n.createElement("div",{className:B},n.createElement(o.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:G},u.ag.get("view.recently-played")),n.createElement(F,{items:e.items})):n.createElement(p,null)};var W=a(94184),Z=a.n(W),K=a(56081),z=a(70369),H=a(67892),Y=a(23716),X=a(34891),j=a(86081);var V=a(14472),J=a(54444),ee=a(74257);const te=({onClick:e})=>n.createElement(ee.P,{onClick:e,buttonSize:"sm"},u.ag.get("queue.clear-queue"));var ae=a(73753),ne=a(86025),ie=a(34011),re=(a(31143),a(84465));const le="i9rTNwKyT_NMDghd8q65",se="DXBMXJD8Zoj4V8MxIVTB",ce="UEtqSfWDubkNdPIaEkfA",oe="I_Rc74Je7W4sk6KAVR05",ue=n.memo((function({onClose:e,onConfirm:t,isOpen:a,itemCount:i}){const r=(0,n.useCallback)((a=>{t(),e(a)}),[t,e]),l=u.ag.get("queue.confirm-title",i);return n.createElement(re.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:l,isOpen:a},n.createElement("div",{className:le},n.createElement(o.D,{as:"h2",variant:"cello",className:se},l),n.createElement(o.D,{as:"p",variant:"mesto",className:ce,paddingBottom:ae.g4V},u.ag.get("queue.confirm-message")),n.createElement("div",{className:Z()("encore-light-theme",oe)},n.createElement(ne.oM,{onClick:e},u.ag.get("queue.cancel-button")),n.createElement(ie.D,{onClick:r},u.ag.get("queue.confirm-button")))))}));var me=a(73727),de=a(15935);const Ee=()=>n.createElement("div",{className:d},n.createElement(de.S,{iconSize:64}),n.createElement(o.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:E},u.ag.get("queue.empty-title")),n.createElement("p",null,u.ag.get("queue.empty-description")),n.createElement(me.OL,{to:"/search",className:g},n.createElement(ie.D,{colorSet:"invertedLight"},u.ag.get("queue.fine-something"))));let ge;!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(ge||(ge={}));var pe=a(56802),ye=a(74548),fe=a(1848),xe=a(57784),be=a(69691);let ve;!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local"}(ve||(ve={}));const he=n.memo((function({uri:e,uid:t,contextUri:a,name:i,duration_ms:r,artists:l,index:s,rowNumberOffset:c,imgUrl:o,isExplicit:m,isPlayable:d,isMOGEFRestricted:E,album:g,type:p,section:y,usePlayContextItem:f,isAutoPlay:b=!1,isEnhanced:v,queueSpec:h}){const k=(0,J.$P)(),C=(0,Y.g)(),{useCurrentAvailability:L}=(0,n.useContext)(q.I),[_,F]=L(e),{triggerPlay:B,togglePlay:G}=f({uid:t,uri:e,index:s}),{spec:$}=(0,J.fU)(fe.createDesktopTrackListRowEventFactory,{data:{position:s,reason:"",uri:e}}),{isActive:W,isPlaying:Z}=(0,be.$o)(e),K=(0,n.useCallback)(((a,n)=>{t?B({loggingParams:n},(()=>C.skipToNext({uri:e,uid:t}))):B({loggingParams:n})}),[C,B,e,t]),z=(0,n.useCallback)((a=>{t?G({loggingParams:a},(()=>C.skipToNext({uri:e,uid:t}))):G({loggingParams:a})}),[C,G,e,t]),H=d&&(N().isLocalTrack(e)||_),X=p===ve.TRACK,j=p===ve.EPISODE,V=p===ve.CHAPTER,ee=j&&"video"===g?.mediaType,te=p===ve.LOCAL,ae=l?.map((e=>e.name)).join(u.ag.getSeparator())||"",{badges:ne,hasBadges:ie}=(0,M.r)({offlineAvailability:F,isExplicit:m,isMOGEFRestricted:E,isEnhanced:v});let re;re=j?n.createElement(P.k,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:a}):V?n.createElement(Q.r,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:a}):te?n.createElement(I.N,{uri:e,uid:b?void 0:t,contextUri:a}):n.createElement(U.$,{uri:e,uid:b?void 0:t,albumUri:g.uri,artists:l,contextUri:a});const le=(0,n.useCallback)(((a,n)=>{const{meta:i,uris:r}=a,l=r.map((e=>({uri:e,uid:null})));let s;s=n===R.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},i.section===ge.NowPlaying?C.addToQueue(l):i.origin===ge.NowPlaying?C.insertIntoQueue(l,s):C.reorderQueue(l,s)}),[C,t,e]),se=(0,n.useCallback)(((a,n)=>{const{uids:i}=a,r=i.map((e=>({uri:"",uid:e})));let l;l=n===R.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},C.reorderQueue(r,l)}),[C,t,e]),ce=b?[]:[xe.aN[N().Type.TRACK],xe.aN[N().Type.EPISODE]];return n.createElement(x.ZP,{value:"row",index:s},n.createElement(A._,{menu:re},n.createElement(R.c,{uri:e,contextUri:a,index:s,onTriggerPlay:K,isActive:y===ge.NowPlaying&&W,ariaRowIndex:s,isPlayable:H,ageRestricted:E,spec:$,dragMetadata:{name:i,createdBy:ae,sectionId:y},onInsert:(t,a,n,i,r)=>{le({uris:t,dropIndex:a,meta:r},n),h&&k.logInteraction(h.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,t,a,n)=>{se({uids:e,dropIndex:t,meta:n},a),h&&k.logInteraction(h.dragSort())},allowedDropTypes:ce},n.createElement(w.Dd,{ariaColIndex:0},n.createElement(w.Du,{uri:e,playAriaLabel:u.ag.get("tracklist.a11y.play",i,ae),isPlaying:y===ge.NowPlaying&&Z,isActive:y===ge.NowPlaying&&W,spec:$,onClick:(e,t)=>{z(t)}},n.createElement(w.km,null,s+c+1))),n.createElement(w.vZ,{ariaColIndex:1},n.createElement(w.lD,{src:o,isVideo:ee,isEpisode:j||V}),n.createElement(w.vm,null,n.createElement(w.Wh,{titleText:i},i),ie&&n.createElement(w.g3,null,ne.enhanced&&n.createElement(ye._,{iconSize:16,className:T.Z.enhanced,title:u.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":u.ag.get("web-player.enhance.button_text_enhanced")}),ne.download&&n.createElement(O.G,{size:16}),ne.explicit&&n.createElement(D.N,null),ne.nineteen&&n.createElement(S.X,{className:T.Z.nineteen,size:16})),n.createElement(w.K9,null,X&&n.createElement(w.T6,{artists:l,spec:$}),(j||te)&&!ee&&ae))),n.createElement(w.UA,{ariaColIndex:2},n.createElement(w.BM,{nonInteractive:te,uri:g.uri,name:g.name,creatorUri:l?.[0]?.uri,spec:$},g.name)),n.createElement(w.mU,{ariaColIndex:3},!te&&!V&&n.createElement(w.qS,{uri:e,type:p}),n.createElement(w.A$,{duration:r}),n.createElement(w.Zv,{menu:re,label:u.ag.get("more.label.track",i,ae),spec:$})))))}),((e,t)=>e.uri===t.uri&&e.index===t.index)),ke=n.memo((function({tracks:e,ariaLabel:t,contextUri:a,rowNumberOffset:i=0,section:r,usePlayContextItem:l}){const s=(0,pe.o)(),c=(0,Y.g)(),o=(0,n.useCallback)(((e,t)=>{s({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(t)}),[c,s]),u=(0,n.useCallback)(((e,t)=>{if((0,b.iw)(e)){const s=(0,k.X)(e.show?.images,{desiredSize:40});return n.createElement(he,{key:`${t}${i}${e.uid}`,index:t,rowNumberOffset:i,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ve.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,b.G7)(e)){const s=(0,k.X)(e.images||void 0,{desiredSize:40});return n.createElement(he,{key:`${t}${i}${e.uid}`,index:t,rowNumberOffset:i,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:ve.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider})}if((0,b.G_)(e)||(0,b.RB)(e)){const s=(0,k.X)(e?.album?.images,{desiredSize:40}),c=e.type===v.p.TRACK?e:null;return n.createElement(he,{key:`${t}${i}${e.uid}`,index:t,rowNumberOffset:i,imgUrl:s?.url||"",uri:(0,f.$)(e),uid:e.uid??e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:c?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:c?.is19PlusOnly??!1,type:c?.isLocal?ve.LOCAL:ve.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===e.metadata?.provider})}return n.createElement(y.Lb,{height:`${y.dN}px`})}),[i,a,r,l]),m=(0,n.useMemo)((()=>[y.QD.INDEX,y.QD.TITLE,y.QD.ALBUM,y.QD.DURATION]),[]),d=(0,n.useCallback)((e=>e.uri),[]),E=(0,n.useCallback)((e=>e.uid??e.uri),[]);return n.createElement(y.Pv,{ariaLabel:t,tracks:e,nrTracks:e.length,onRemove:o,renderRow:u,resolveUri:d,resolveUid:E,columns:m})})),Ce="rHpv7osDRvs3SUPMpQ_g",Ne="DG9CsoFIptJhAneKoo_F",Pe="jf2HafzDEI9jn7Yo05eM",Ie="H3Puuvc2nV0GoZRrfpRS",Ue="HckHyQocDDePWQL2baOY",we=()=>{const{uri:e,description:t}=(0,V.$)(),{spec:a,logger:r,UBIFragment:l}=(0,J.fU)(K.createDesktopNowPlayingQueueEventFactory,{data:{identifier:i.Wg.NOWPLAYING_QUEUE,uri:e??""}}),s=(0,n.useMemo)((()=>a.nowPlayingSectionFactory()),[a]),c=(0,n.useMemo)((()=>a.nextInQueueSectionFactory()),[a]),m=(0,n.useMemo)((()=>a.nextFromSectionFactory()),[a]),d=(0,Y.g)(),{current:E,nextUp:g,queued:p}=function(){const e=(0,Y.g)(),[t,a]=(0,n.useState)(e.getQueue());return(0,j.G)(X.rg.QUEUE_UPDATE,(e=>a(e.data))),t}(),[y,f]=(0,n.useState)(!1),b=(0,n.useCallback)((()=>{f(!1)}),[f]),v=(0,n.useCallback)((()=>{d.clearQueue(),f(!1)}),[d]),h=(0,n.useCallback)((async()=>{let e;const t=c.clearQueueButtonFactory();p.length>0&&(e=t.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:p.length}),r.logInteraction(e)),f(!0)}),[r,c,p]),{usePlayContextItem:k}=(0,L.n)({uri:e??""},{featureIdentifier:"queue"}),C="autoplay"===E?.provider,N=g.filter((e=>C?e:"autoplay"!==e.provider)),P=!!p?.length,I=!!N?.length,U=!1===(E||P||I),w=(0,n.useCallback)((async()=>{if(!I)return;const t=a.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});r.logInteraction(t)}),[I,r,a,e]);return U?n.createElement(Ee,null):n.createElement("section",{className:Ce},n.createElement(z.$,null,u.ag.get("queue.page-title")),n.createElement(o.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:Ne},u.ag.get("playback-control.queue")),E&&e&&n.createElement(n.Fragment,null,n.createElement(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},u.ag.get("queue.now-playing")),n.createElement(l,{spec:s},n.createElement(x.ZP,{value:"now-playing"},n.createElement(ke,{ariaLabel:u.ag.get("queue.now-playing"),tracks:[E],contextUri:e,section:ge.NowPlaying,usePlayContextItem:k})))),P&&e&&n.createElement(n.Fragment,null,n.createElement("div",{className:Z()(Ue,Pe)},n.createElement(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},u.ag.get("queue.next-in-queue")),P&&n.createElement(te,{onClick:h})),n.createElement(l,{spec:c},n.createElement(x.ZP,{value:"next-in-queue"},n.createElement(ke,{ariaLabel:u.ag.get("queue.next-in-queue"),tracks:p,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:ge.NextInQueue,usePlayContextItem:k})))),I&&e&&n.createElement(n.Fragment,null,n.createElement(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:Z()(Pe,"standalone-ellipsis-one-line")},t&&!C?n.createElement(n.Fragment,null,u.ag.get("queue.next-from")," ",n.createElement(H.r,{className:Ie,to:e,onClick:w},t)):u.ag.get("queue.next-up")),n.createElement(l,{spec:m},n.createElement(x.ZP,{value:"next-up"},n.createElement(ke,{ariaLabel:u.ag.get("queue.next-up"),tracks:N,rowNumberOffset:1+(p?.length||0),contextUri:"spotify:app:queue:NextUp",section:ge.NextUp,usePlayContextItem:k})))),n.createElement(ue,{itemCount:p?.length||0,isOpen:y,onClose:b,onConfirm:v}))};var Te=a(69376),Re=a(28638),Ae=a(63138);const Oe="vhW0kRN8JJD5UwW4TdXi",De=()=>{const e=(0,c.Y)(),t=(0,n.useCallback)((e=>n.createElement(Ae.v,{placement:"bottomEnd",arrow:"topStart",title:u.ag.get("pick-and-shuffle.upsell.title.queue")},e)),[]),a=(0,n.useMemo)((()=>[{title:u.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:t,disabled:e},{title:u.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,t]);return n.createElement(Re.w,null,n.createElement(Te.n,{className:Oe,links:a}))},Se=()=>{const e=(0,s.nF)(),t=(0,c.Y)();return n.createElement("section",{className:"contentSpacing"},t&&n.createElement(r.o,{from:"/queue",to:"/history"}),e&&n.createElement(l.l,{path:"/history",pageId:i.Wg.NOWPLAYING_HISTORY},n.createElement($,null)),n.createElement(l.l,{path:"/queue",pageId:i.Wg.NOWPLAYING_QUEUE},n.createElement(n.Suspense,{fallback:null},n.createElement(we,null))),e&&n.createElement(De,null))}},47991:(e,t,a)=>{a.d(t,{$:()=>n});const n=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue.js.map