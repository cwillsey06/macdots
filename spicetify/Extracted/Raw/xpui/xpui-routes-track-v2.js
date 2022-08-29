"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{2438:(e,n,i)=>{i.d(n,{L:()=>a.L});var a=i(3702)},98759:(e,n,i)=>{i.d(n,{X7:()=>d,pf:()=>l,qo:()=>t});var a=i(7073);const t=e=>`spotify:artist:${e}`,l=e=>({artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:e.coverArt?.sources||[],name:e.name,uri:e.uri,year:e.date?.year,type:e.type,sharingInfo:e.sharingInfo??null}),d=({track:{uri:e,name:n,playcount:i,duration:{totalMilliseconds:t},contentRating:l,artists:{items:d},album:{coverArt:r,uri:s},playability:{playable:m}}},o)=>({uri:e,contextUri:o,totalMilliseconds:t,name:n,contentRating:l?.label||a.KS.None,isPlayable:m,playcount:parseInt(i||"0",10),artists:d.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:r?.sources?.length?r.sources[0].url:"",albumUri:s})},13517:(e,n,i)=>{i.r(n),i.d(n,{default:()=>yn});var a=i(67294),t=i(86706),l=i(51615),d=i(69518),r=i.n(d),s=i(87577),m=i(30373),o=i(96206),c=i(18270),k=i(43683),u=i(48690),v=i(88214),S=i(70369),N=i(60289),p=i(59482),g=i(72907),F=i(6158),y=i(55120),b=i(53538),E=i(44065),h=i(51441),A=i(32626),L=i(85522),f=i(48817),C=i(32667),T=i(12902);let D;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(D||(D={}));const I=(0,T.ZP)(((e,n)=>{switch(n.type){case"LYRICS_LOADING":e[n.uri]={status:D.LOADING};break;case"LYRICS_LOADED":e[n.uri]={status:D.LOADED,data:{lyrics:{...n.response.lyrics}}};break;case"LYRICS_ERROR":e[n.uri]={status:D.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${n.type}`)}}));var R=i(87961),w=i(6024);const U={status:D.LOADING},P={status:D.UNAVAILABLE},x=a.createContext(void 0),B=({children:e,initialState:n={}})=>{const i=a.useReducer(I,n);return a.createElement(x.Provider,{value:i,children:e})},O=(e,n)=>{const i=a.useContext(x);if(void 0===i)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!r().isTrack(e)||n)return P;const[t,l]=i,d=t[e];return d||(l({type:"LYRICS_LOADING",uri:e}),(async e=>{const n=r().from(e);return(await w.Zz.getSEOTrackLyrics(R.b.getInstance(),n.getBase62Id())).body})(e).then((n=>{l({type:"LYRICS_LOADED",uri:e,response:n})})).catch((()=>{l({type:"LYRICS_ERROR",uri:e})})),U)},M="_WZNTY8cs6JMVcAp9j8A",V="br3AcUgf2WazXovcTr0L",_=({padded:e})=>a.createElement(C.D,{as:"p",dir:"auto",variant:"finale",className:`${M} ${e?V:""}`},"Lyrics powered by Musixmatch."),G=({uri:e})=>{const{status:n}=O(e);return n!==D.LOADED?null:a.createElement(_,null)};var Y=i(4383),z=i(84242),Z=i(55773),W=i(54444),$=i(8247),j=i(16526);var q=i(56802),H=i(45623),K=i(82789),Q=i(99195),J=i(8271);function X(){const e=(0,s.W6)($.Um,{loadingValue:null}),n=(0,t.v9)((e=>e.session?.user?.id)),i=(0,J.s4)();(0,a.useEffect)((()=>{if(!e)return;const a={category:"multivisit_exposure_event",action:"render",label:"dwp-multivisit",os:(0,Q.y)(),variant:e};i.send(n?(0,K.x)(a):(0,H.k)(a))}),[i,e,n])}var ee=i(80322),ne=i(4236),ie=i(29255),ae=i(72627),te=i(87462),le=i(67892),de=i(57060),re=i(70880),se=i(42922),me=i(7073),oe=i(34722),ce=i(19480),ke=i(29464);const ue=({artistName:e,artistId:n,artistUri:i,className:t,releases:l})=>l?a.createElement(se.ZP,{value:"shelf/releases"},a.createElement(ce.P,{total:10,title:o.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,oe.GJ)(n)}:discography:${me.VZ.Album.toLowerCase()}`,seeAllLabel:o.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:t},l.items.map(((e,n)=>a.createElement(ke.E,{album:e,index:n,artistURI:i,key:e.uri}))))):null;var ve=i(55095);const Se="JtmUDerSLCaN8LuQv9tM",Ne="mQtVA857h95uvEmY9SPP",pe="bObO_7Z_b1atmqMnYiU2",ge="vHqxBD3S0NJpGMsVRwHT",Fe="pxMz7QGxCF9LYKHJzOlY",ye="PTVcqp5lumB25L7FY7ai",be="DqqPRJJPXjVNE52h_cPt";var Ee=i(26375),he=i(48528),Ae=i(94184),Le=i.n(Ae),fe=i(37761),Ce=i(42781),Te=i(7469);let De;!function(e){e.SMALL="small",e.LARGE="large"}(De||(De={}));const Ie=({art:e,disabled:n=!1,LinkComponent:i,name:t,size:d=De.SMALL,type:s,uri:m})=>{const c=e?[e]:[],k=d===De.SMALL?(0,he.R)(s):function(e){switch(e){case Ee.albumType.SINGLE:return o.ag.get("track-page.from-the-single");case Ee.albumType.EP:return o.ag.get("track-page.from-the-ep");case Ee.albumType.COMPILATION:return o.ag.get("track-page.from-the-compilation");case Ee.albumType.ALBUM:default:return o.ag.get("track-page.from-the-album")}}(s),u=(0,l.k6)();return a.createElement("div",{className:Le()(Se,{[pe]:d===De.SMALL,[Ne]:n})},a.createElement("div",{className:ge},a.createElement(fe.O,{images:c,size:Te.m$.SIZE_80,title:t,type:Ce.p.ALBUM})),a.createElement("div",{className:Fe},a.createElement(C.D,{variant:d===De.SMALL?"minuetBold":"finale"},k),a.createElement(i,{to:m},a.createElement(C.D,{as:"div",className:ye,variant:"balladBold",dir:"auto"},t))),a.createElement("div",{onClick:()=>{u.push(r().from(m).toURLPath(!0))},className:be}))};var Re=i(98759),we=i(98984);const Ue={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackFields"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}},{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}},{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTracks"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumGroupPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTrack"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"previews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"audioPreviews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]};var Pe=i(2438),xe=i(75987);const Be="oTRKhYD0MZlNPm66W3Tw",Oe="sc95MwPalcHwYGZ7j3xN",Me="zrCZCfYv4zZiB1HYv9i8",Ve="RnlxIDmWcYTbbwNSJNjA",_e="SHkxfN1vy0wpRMP1hK7I",Ge="COXBS6zLyyxKNYuEAzjZ",Ye="sR5IpdOUvoUGYKlC9Dk1",ze="FHMr3WxshoYjZ7jd3YwI",Ze="Evcwc4KM2tf9xrLbfB8B",We=({richTrack:e})=>{const n=(0,l.k6)(),i=(0,a.useCallback)((()=>new URLSearchParams(n.location.search.slice(1)).get("highlight")||""),[n.location.search])(),{tracklistRef:t}=(0,xe.W)(),d=e.album,r=(0,ee.Y)(d.uri),{usePlayContextItem:s}=(0,z.n)({uri:r},{featureIdentifier:"album"}),m=(0,a.useMemo)((()=>({items:[],total_count:0})),[]);return d?a.createElement("div",{ref:t,className:Ye},a.createElement(Pe.L,{ariaLabel:d.name,nrTracks:d.tracks.totalCount,albumUri:d.uri,highlightUri:i,discs:m,usePlayContextItem:s,hasHeaderRow:!1})):null},$e=a.memo((function(){const{trackId:e}=(0,l.UO)(),n=r().trackURI(e).toURI(),i=(t={uri:n},(0,we.a)(Ue,t,d));var t,d;const s=(0,ne.k)();if(i.loading||!i.data?.trackUnion)return a.createElement(F.h,{hasError:null!==i.error,errorMessage:o.ag.get("track-page.error")});const m=i.data.trackUnion,c=m.album,k=c?.playability?.playable,u=m.artistsWithRoles.items[0]?.artist,v=u?.discography?.topTracks,S=u?.discography?.popularReleasesAlbums,N=u?.discography?.albums,p=u?.discography?.singles,g={artistId:u?.id,artistName:u?.profile?.name,artistUri:u?.uri};return a.createElement("div",{"data-testid":"rich-track"},a.createElement(re.j,{artistName:u?.profile?.name,artistUri:u?.uri,headerClassName:Ze,rowClassName:_e,topTracks:v,topTracksTransformer:Re.X7,uri:m.uri}),a.createElement(ue,(0,te.Z)({className:ze,releases:S},g)),a.createElement(de.R,(0,te.Z)({albums:N,className:ze},g)),a.createElement(ve.y,(0,te.Z)({className:ze,singles:p},g)),a.createElement(Ie,{art:c.coverArt?c.coverArt.sources[0]:void 0,disabled:!k||!s,LinkComponent:le.Z,name:c.name,type:c.type,size:De.LARGE,uri:c.uri}),a.createElement(We,{richTrack:m}))}));var je=i(86025),qe=i(34011);const He="QhDsXG1Gmo7XmQWLggAO",Ke="bZgWQj7UxvK8GYKWDA7N",Qe="AW61P3tnW5cKJCWtbhFh",Je=({buttonText:e,onSecondaryButtonClick:n,onPrimaryButtonClick:i,secondaryButtonText:t,text:l})=>a.createElement("div",{className:He,"data-testid":"static-activation-trigger"},a.createElement(C.D,{className:Ke,variant:"cello"},l),a.createElement("div",{className:Qe},a.createElement(je.oM,{onClick:n,semanticColor:"textBase"},t),a.createElement(qe.D,{onClick:i,colorSet:"invertedLight"},e))),Xe="FTTfxsCa1sJIu1Y7utDO",en="vrjrGtquvKnX8rzOuAaA",nn="HeVBalD_EHmtuqfIkkjo",an="GQqQDXMybjyriRQKH_ID",tn="DX4i2V_0jaKraBkfcDnR",ln="zCVFaVQz6MUyNwqjGS4c",dn="USV2e_90ZCdBCH9Dr5Vw",rn="PhpDpIcERAEMvFD0NvPk";let sn;!function(e){e.SMALL="small",e.LARGE="large"}(sn||(sn={}));const mn=e=>{const{disabled:n,images:i,LinkComponent:t,name:d,size:s,uri:m}=e,c=s===sn.SMALL,k=(0,l.k6)();return a.createElement("div",{className:Le()(en,{[nn]:n}),"data-testid":"track-artist-link-card"},a.createElement(fe.O,{shape:fe.K.CIRCLE,images:i,size:Te.m$.SIZE_80,title:d,type:Ce.p.ARTIST}),a.createElement("div",{className:Le()(tn,{[ln]:c})},a.createElement(C.D,{variant:"minuetBold",className:an},o.ag.get("card.tag.artist")),a.createElement(t,{to:m},a.createElement(C.D,{as:"div",dir:"ltr",className:dn,variant:"balladBold"},d))),a.createElement("div",{onClick:()=>{k.push(r().from(m).toURLPath(!0))},className:rn}))},on=({size:e=sn.LARGE,disabled:n=!1,...i})=>a.createElement("div",{className:Xe},i.artists.map((t=>a.createElement(mn,{key:t.id,name:t.name,uri:t.uri,images:t.images,size:e,LinkComponent:i.LinkComponent,disabled:n}))));var cn=i(19251);const kn="kyenoI4FJbhfBk7_5hWj",un="o7c89JiqZPfyQtLPjgrK",vn="uzdLGhPskgWtE64HOVL8",Sn=({lines:e=[]})=>0===e.length?null:a.createElement("div",{className:kn},a.createElement(C.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:un},o.ag.get("web-player.lyrics.title")),e.map((({words:e},n)=>a.createElement(C.D,{as:"p",dir:"auto",variant:"ballad",key:`lyrics-seo-line-${n}`,className:vn},e)))),Nn=({uri:e})=>{const{status:n,data:i}=O(e);return n!==D.LOADED?null:a.createElement(Sn,{lines:i?.lyrics.lines})},pn=e=>{const{albumArtists:n,columnCount:i,uri:l,isRtpEnabled:d,isLyricsEnabled:r}=e,s=i-2,m={"--column-count":i,"--left-column-end":s-2,"--right-column-start":s},{isAnonymous:c}=(0,t.v9)(ie.Gg),k=(0,ne.k)(),{data:u,status:v}=O(l,c),S=r&&!!u&&v!==D.UNAVAILABLE||r&&c;return a.createElement(a.Suspense,{fallback:null},S&&a.createElement("div",{className:Le()(Me,{[Ve]:i>5}),style:{...m}},c?a.createElement(Je,{buttonText:o.ag.get("sign_up"),secondaryButtonText:o.ag.get("login"),text:o.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:cn.L6,onSecondaryButtonClick:cn.h$}):a.createElement(Nn,{uri:l})),d&&a.createElement("div",{className:Le()(Be,{[Oe]:i>5&&S}),style:{...m}},a.createElement(on,{artists:n,LinkComponent:le.Z,disabled:!k})))},gn=(e,n,i)=>`${e} - ${i?"song and lyrics by":"song by"} ${n.map((e=>e.name)).join(o.ag.getSeparator())}`,Fn=({uri:e,track:n})=>{const i=(0,q.o)(),d=(0,ne.k)(),r=(0,l.TH)(),F=(0,Z.vI)(j.k.RtpLyricsHoldoutCookie,r),{isAnonymous:C}=(0,t.v9)(ie.Gg),{artistsWithRoles:T,album:D,duration:I,name:R}=n,w=D.coverArt,U=D.copyright.items,P=D.courtesyLine,x=D.date?.isoString,O=w?.extractedColors?.colorRaw.hex,M=(w?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),V=T.items.map((e=>({name:e.artist.profile.name,images:(e.artist.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.uri}))),{spec:_,logger:H}=(0,W.fU)(m.createDesktopTrackEventFactory,{data:{uri:e}}),K=(0,s.W6)($.fp),Q=F||K===$.JG.VARIANT;const J=n.playability.playable,ae=(0,ee.Y)(e),{togglePlay:te,isPlaying:le,isActive:de}=(0,z.n)({uri:ae},{featureIdentifier:"track"}),[re,se]=(0,Y.Z)(e),me=(0,a.useCallback)((async()=>{i({targetUri:e,intent:re?"unsave":"save",type:"click"});const n=_.actionBarFactory().saveButtonFactory();H.logInteraction(re?n.hitRemoveLike({itemNoLongerLiked:e}):n.hitLike({itemToBeLiked:e}));try{await se(!re)}catch{}}),[i,e,re,_,H,se]);X();const oe=(0,a.useCallback)((()=>{const e=gn(n.name,V,!0),i=gn(n.name,V,!1);return Q?e:i}),[V,Q,n.name]),ce=(0,a.useCallback)(((e,n)=>{H.logInteraction(_.headerFactory().artistLinkFactory({position:n.position,uri:n.creator.uri}).hitUiNavigate({destination:n.creator.uri}))}),[H,_]),ke=(0,a.useCallback)((()=>{const n=(0,b.aK)({isPlaying:le,isActive:de,spec:_.actionBarFactory().playButtonFactory(),logger:H,uri:e});te({loggingParams:n})}),[de,le,H,_,te,e]),ue=(0,a.useCallback)((()=>{H.logInteraction(_.actionBarFactory().contextButtonFactory().hitUiReveal())}),[H,_]);return a.createElement("section",{"data-testid":"track-page"},a.createElement(S.$,null,oe()),a.createElement(N.gF,{backgroundColor:O},a.createElement(p.W,null,a.createElement(y.$,{size:h.qE.sm,onClick:ke,disabled:!J,isPlaying:le,uri:e}),a.createElement(g.i,{text:R,dragUri:e,dragLabel:R})),a.createElement(A._P,{menu:a.createElement(v.$,{uri:e})},a.createElement(N.Oz,{dragUri:e,images:M,name:R,placeholderType:"album"})),a.createElement(N.sP,null,a.createElement(N.dy,{small:!0,uppercase:!0},o.ag.get("song")),a.createElement(A._P,{menu:a.createElement(v.$,{uri:e})},a.createElement(N.xd,{dragUri:e,dragLabel:R},R)),a.createElement(N.QS,{creators:V,releaseDate:x,durationMilliseconds:I.totalMilliseconds,onCreatorClick:ce,isTrack:!0}))),a.createElement(c.o,{backgroundColor:O},a.createElement(c.F,null,a.createElement(N.rn,null,a.createElement(y.$,{onClick:ke,isPlaying:le,disabled:!J,size:h.qE.lg,uri:e})),a.createElement(N.rn,null,a.createElement(E.H,{isAdded:!!re,onClick:me,disabled:!d,size:E.q.md})),a.createElement(k.o,{uri:e,isFollowing:!!re,canDownload:d,onFollow:me,size:k.q.md}),a.createElement(A.yj,{menu:a.createElement(v.$,{uri:e}),onShow:ue},a.createElement(u.z,{label:o.ag.get("more.label.context",R)})))),a.createElement(B,null,a.createElement("div",{className:"contentSpacing"},a.createElement("div",{className:_e},a.createElement(f.T,{render:n=>a.createElement(pn,{albumArtists:V.slice(0,1),columnCount:n,uri:e,isRtpEnabled:Q,isLyricsEnabled:Q})})),Q&&a.createElement($e,null)),a.createElement("div",{className:"contentSpacing"},a.createElement("div",{className:Ge},a.createElement(L.k,{copyrights:U,courtesyLine:P}),!C&&Q&&a.createElement(G,{uri:e})))))},yn=a.memo((function(){const{trackId:e}=(0,l.UO)(),n=r().trackURI(e).toURI(),i=(0,ae.QN)({uri:n});return i.loading||"Track"!==i.data?.trackUnion?.__typename?a.createElement(F.h,{hasError:null!==i.error,errorMessage:o.ag.get("track-page.error")}):a.createElement(Fn,{uri:n,track:i.data.trackUnion})}))},72627:(e,n,i)=>{i.d(n,{QN:()=>l});var a=i(98984);const t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackFields"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackNotFound"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbum"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbumCoverArt"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackNotFound"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"}}]}}]},l=(e,n)=>(0,a.a)(t,e,n)},75987:(e,n,i)=>{i.d(n,{W:()=>t});var a=i(97650);function t(){const{ref:e,inView:n}=(0,a.YD)({initialInView:!1}),{ref:i,inView:t}=(0,a.YD)({initialInView:!1});return{titleRef:e,tracklistRef:i,displayTopBar:!n&&t}}}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map