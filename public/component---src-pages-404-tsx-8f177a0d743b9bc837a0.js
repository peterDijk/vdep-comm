(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found",description:"not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),u=a.n(s);a.d(t,"a",function(){return u.a});a(147);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Communicatie over Grenzen"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(151),r=a(4),i=a.n(r);function o(e){var t=e.description,a=(e.lang,e.meta,e.keywords,e.title,n.data.site);t||a.siteMetadata.description;return null}o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=o},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Communicatie over Grenzen",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),s=a.n(o),u=a(146),c="#fff",d="#00AEED",l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:d,marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{to:"/",style:{color:c,textDecoration:"none"}},t))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var m=l,p=(a(153),a(154)),f=a.n(p),g=a(155),y=g.c;g.b,g.d,g.a;function h(){var e=f()(["\n  box-sizing: border-box;\n  width: 100%;\n  background: ",";\n"]);return h=function(){return e},e}var v=y.div(h(),c),E=function(e){var t=e.children;return i.a.createElement(u.b,{query:"755544856",render:function(e){return i.a.createElement(v,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})};E.propTypes={children:s.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-404-tsx-8f177a0d743b9bc837a0.js.map