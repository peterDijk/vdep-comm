(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";n.r(t);n(152);var a=n(239),i=n(0),r=n.n(i),o=n(162),s=n(163),l=n(164),c=n(155),d=n(156),m=n(148),u=n(157),g=n(161);t.default=function(){var e=a.data,t=e.events.nodes,n=Object(d.a)(t),i=[n.eventsMiddleEast[0],n.eventsWestAfrica[0],n.eventsRussia[0]].sort(function(e,t){return new Date(e.data.starting_date)-new Date(t.data.starting_date)});return r.a.createElement(o.a,{lang:"nl-nl"},r.a.createElement(m.a,null,r.a.createElement(s.a,{language:"nl-nl",header:e.header}),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Bij Communicatie over Grenzen geloven wij in de kracht van duidelijke communicatie",keywords:["communicatie","grenzen","cultuur","culturen","bert","dijk"],description:"Met onze Seminars helpen we organisaties en individuelen met effectief communiceren met andere culturen in hun zakelijke relaties",lang:"nl-nl"})),r.a.createElement(l.a,{events:i,language:"nl-nl"})),r.a.createElement(m.b,null,r.a.createElement(u.a,{story:e.story,language:"nl-nl"}),r.a.createElement(g.a,{organisationCta:e.organisationCta,language:"nl-nl"})))}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(152);var a=function(e){return new Date(e)>=new Date},i=function(e){var t=e.filter(function(e){return"middle-east"===e.data.seminar.uid}),n=e.filter(function(e){return"west-africa"===e.data.seminar.uid}),i=e.filter(function(e){return"russia"===e.data.seminar.uid});return{eventsMiddleEast:t.filter(function(e){return a(e.data.starting_date)}).sort(function(e,t){return new Date(e.data.starting_date)-new Date(t.data.starting_date)}),eventsWestAfrica:n.filter(function(e){return a(e.data.starting_date)}).sort(function(e,t){return new Date(e.data.starting_date)-new Date(t.data.starting_date)}),eventsRussia:i.filter(function(e){return a(e.data.starting_date)}).sort(function(e,t){return new Date(e.data.starting_date)-new Date(t.data.starting_date)})}}},157:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),i=n(168),r=n.n(i),o=n(148),s=function(e){var t=e.story;e.language;return a.createElement(o.d,null,a.createElement("h2",null,t.data.title.text),r()(t.data.body.html))}},161:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),i=n(148),r=function(e){var t=e.organisationCta;e.language;return a.createElement(i.c,{imgUrl:t.data.image.url},a.createElement("h3",null,t.data.title),a.createElement("h2",null,t.data.organisation_cta))}},163:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(151),o=n(154),s=n(146),l=n(147),c=s.b.div.withConfig({displayName:"Header",componentId:"sc-188cg3-0"})(["width:100%;height:60%;position:relative;"]),d=s.b.div.withConfig({displayName:"Header__Hero",componentId:"sc-188cg3-1"})(["background-image:url(",");background-size:cover;background-position:top;height:100%;position:relative;"],function(e){return e.heroImgUrl}),m=s.b.div.withConfig({displayName:"Header__SiteTitleContainer",componentId:"sc-188cg3-2"})(["position:absolute;top:55%;left:50%;transform:translate(-50%,-50%);text-align:center;display:flex;flex-direction:column;align-items:center;"]),u=s.b.div.withConfig({displayName:"Header__SitePayoff",componentId:"sc-188cg3-3"})(['position:relative;top:3rem;font-family:"Roboto","sans-serif";color:',";width:100%;h2{font-size:1.4rem;font-weight:bold;margin:2rem 0;}h3{font-size:1.4rem;font-weight:normal;margin:2rem 0;}"],l.a.WHITE),g=s.b.div.withConfig({displayName:"Header__LogoContainer",componentId:"sc-188cg3-4"})(['display:flex;h1{font-family:"Roboto Slab","sans-serif";color:',";font-size:0.037rem;text-align:center;position:relative;top:0.5rem;font-weight:700;letter-spacing:0.1em;display:inline-block;}"],l.a.WHITE),f=s.b.div.withConfig({displayName:"Header__CoG",componentId:"sc-188cg3-5"})(["width:18rem;"]),p=s.b.div.withConfig({displayName:"Header__LogoTextOne",componentId:"sc-188cg3-6"})(["text-transform:uppercase;font-size:72em;display:block;"]),h=s.b.div.withConfig({displayName:"Header__LogoTextTwo",componentId:"sc-188cg3-7"})(['font-size:40em;text-transform:lowercase;display:inline-block;position:absolute;top:1.8em;left:0;width:100%;&:before,&:after{content:"";position:absolute;height:0.28em;border-bottom:0.15em solid ',";top:0.5em;left:0;width:10%;}&:before{margin-left:6px;width:38%;position:absolute;top:0.8rem;}&:after{left:55%;margin-left:9px;width:36%;position:absolute;top:0.8rem;}"],l.a.WHITE),_=s.b.div.withConfig({displayName:"Header__LogoTextThree",componentId:"sc-188cg3-8"})(["text-transform:uppercase;font-size:96em;display:block;letter-spacing:0.2em;position:absolute;top:1.1em;left:0.08em;font-weight:900;"]);t.a=function(e){var t=e.header,n=e.language;return console.log(t),i.a.createElement(c,null,i.a.createElement(d,{heroImgUrl:t.data.hero_image.url},i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(f,null,i.a.createElement(o.a,{fileName:"190425_CoG_Logo_WO-title.png"})),i.a.createElement("h1",null,i.a.createElement(p,null,Object(r.a)("COMMUNICATION",n)),i.a.createElement(h,null,Object(r.a)("ACCROSS",n)),i.a.createElement(_,null,Object(r.a)("BORDERS",n)))),i.a.createElement(u,null,i.a.createElement("h2",null,t.data.cog_message.text),i.a.createElement("h3",null,t.data.cog_sub_message.text)))))}},164:function(e,t,n){"use strict";var a=n(0),i=n(151),r=n(146),o=n(147),s=r.b.div.withConfig({displayName:"Events__UpcomingEventsContainer",componentId:"sc-1efbj50-0"})(["width:100%;padding:3rem 4rem;h2{color:",';font-size:2rem;font-family:"Roboto Slab","sans-serif";font-weight:bold;margin:0 0 2rem;}'],o.a.VDEP_DARK_BLUE),l=r.b.div.withConfig({displayName:"Events__TilesContainer",componentId:"sc-1efbj50-1"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin:0;"]),c=r.b.div.withConfig({displayName:"Events__EventTile",componentId:"sc-1efbj50-2"})(["position:relative;text-align:center;width:calc(100% / 3);margin-right:3rem;&:last-child{margin-right:0;}h2{color:",";font-size:1.5rem;text-transform:uppercase;position:absolute;top:1.6rem;left:2rem;font-weight:bold;letter-spacing:0.2rem;margin:0;}"],o.a.VDEP_TERTIARY_BLUE),d=r.b.div.withConfig({displayName:"Events__LocationDateContainer",componentId:"sc-1efbj50-3"})(['display:flex;flex-direction:row;justify-content:space-between;margin:1rem 3rem;h3{font-family:"Roboto Slab","sans-serif";color:',';letter-spacing:0.15rem;font-weight:bold;font-size:1.5rem;text-transform:uppercase;}h4{font-family:"Roboto Slab","sans-serif";color:',";letter-spacing:0.15rem;font-weight:normal;font-size:1.5rem;text-transform:uppercase;}"],o.a.VDEP_SECONDARY_BLUE,o.a.VDEP_SECONDARY_BLUE),m=r.b.div.withConfig({displayName:"Events__EventImage",componentId:"sc-1efbj50-4"})(["background-image:url(",");background-size:cover;background-position:top;border-radius:0.5rem;width:100%;height:13rem;"],function(e){return e.imgUrl});n.d(t,"a",function(){return u});var u=function(e){var t=e.events,n=e.language;return a.createElement(s,null,a.createElement("h2",null,Object(i.a)("UPCOMINGSEMINARS",n),":"),a.createElement(l,null,t.map(function(e){return a.createElement(c,{key:e.uid},a.createElement(m,{imgUrl:e.data.seminar.document[0].data.image_night.url}),a.createElement("h2",null,e.data.seminar.document[0].data.subject.text),a.createElement(d,null,a.createElement("h3",null,e.data.location_city),a.createElement("h4",null,e.data.dates_text)))})))}},178:function(e,t){},239:function(e){e.exports={data:{header:{id:"Prismic__Header__XMs85hAAAGH73QtO",uid:"header",type:"header",tags:["header"],slugs:["communicatie-over-grenzen"],lang:"nl-nl",data:{title:{text:"Communicatie over Grenzen"},cog_message:{text:"Bij Communicatie over Grenzen geloven wij in de kracht van duidelijke communicatie"},cog_sub_message:{text:"Met onze Seminars helpen we organisaties en individuelen met effectief communiceren met andere culturen in hun zakelijke relaties"},hero_image:{url:"https://communicatie-over-grenzen.cdn.prismic.io/communicatie-over-grenzen/6217c7510675e67f832aff51f324a300648450a7_nasa-53884-unsplash-graded.jpg"}}},events:{nodes:[{id:"Prismic__Event__XMtPjxAAAADx3WIo",uid:"russia-01",data:{location_venue:"Klooster Bovendonk",location_city:"Hoeven NB",starting_date:"2019-06-26",dates_text:"26, 27, 28 Jun 2019",seminar:{id:"XMtPMhAAAADx3WB2",uid:"russia",slug:"russia",document:[{data:{subject:{text:"Russia"},image_night:{dimensions:{width:1e3,height:300},alt:"",url:"https://communicatie-over-grenzen.cdn.prismic.io/communicatie-over-grenzen/b8dd09e5cee99eae1fac38237c19970c9faf8630_serge-kutuzov-496941-unsplash-graded-2880.jpg"}}}]}}},{id:"Prismic__Event__XMtRpxAAAGE-3WwV",uid:"middle-east-01",data:{location_venue:"Klooster Bovendonk",location_city:"Hoeven NB",starting_date:"2019-08-28",dates_text:"28, 29, 30 Aug 2019",seminar:{id:"XMtOwBAAAGH73V58",uid:"middle-east",slug:"middle-east",document:[{data:{subject:{text:"Middle-East"},image_night:{dimensions:{width:1e3,height:300},alt:"",url:"https://communicatie-over-grenzen.cdn.prismic.io/communicatie-over-grenzen/6bf54ff5f42fa0555c0c971d8f6f4b050f446e69_dubai-1767540-graded-2880.jpg"}}}]}}},{id:"Prismic__Event__XMtPzhAAAGH73WNC",uid:"west-africa-01",data:{location_venue:"Klooster Bovendonk",location_city:"Hoeven NB",starting_date:"2019-09-25",dates_text:"25, 26, 27 Sep 2019",seminar:{id:"XMtO-RAAAADx3V92",uid:"west-africa",slug:"west-africa",document:[{data:{subject:{text:"West-Africa"},image_night:{dimensions:{width:1e3,height:300},alt:"",url:"https://communicatie-over-grenzen.cdn.prismic.io/communicatie-over-grenzen/89adceae7c17be555849091ac467d34c76f9b679_table-bay-harbour-3541607-graded-2880.jpg"}}}]}}}]},story:{uid:"story",lang:"nl-nl",data:{title:{text:"Het belang van heldere communicatie"},body:{html:"<p><strong>Problems created while doing business with another culture are caused by misunderstandings. </strong>These misunderstandings are often the result of miscommunication.</p><p><strong>They can lead to irritation, resistance; and ultimately a standstill in project progress. </strong>A half-delivered or partially-paid product is the result.</p><p><strong>&quot;Understanding&quot; means knowing who you&#39;re communicating with -and how best to communicate with them.</strong></p><p><strong>We&#39;ll show you how to make yourself understood.</strong></p>"}}},organisationCta:{uid:"organisation-cta",data:{title:"Unieke problemen vragen om unieke oplossingen",organisation_cta:"Neem een CoG Seminar ontworpen voor jou organisatie",image:{url:"https://communicatie-over-grenzen.cdn.prismic.io/communicatie-over-grenzen/d8b5d96abce7368dc6956a23b1ad8617236f31a6_190430_cog_full-width-cta.jpg"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-nl-tsx-12870c6111d3dfc42f59.js.map