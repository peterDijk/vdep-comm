(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(166),i=a.d,o=(a.c,a.b);a.e,a.a;t.b=i},147:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={BLACK:"#000",WHITE:"#fff",WHITE_RGB:"255,255,255",RICHBLACK:"#002233",RICHBLACK_RBG:"0,34,51",VDEP_BLUE:"#00ADF1",VDEP_SECONDARY_BLUE:"#0084B5",VDEP_TERTIARY_BLUE:"#D4F3FA",VDEP_DARK_BLUE:"#005B80",VDEP_GREEN:"7CC04E",RICHBLACK_80:"rgba(0,34,51,.8)",WHITE_15:"rgba(255,255,255, .15)",RICKBLACK_15:"rgba(0,34,51, .15)"}},148:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return d});var a=n(146),i=n(147),o=a.b.div.withConfig({displayName:"Main__StyledContainer",componentId:"sc-1jg8liq-0"})(["box-sizing:border-box;width:100%;height:100%;background:",";position:relative;"],i.a.WHITE),r=a.b.div.withConfig({displayName:"Main__AboveTheFold",componentId:"sc-1jg8liq-1"})(["position:relative;height:100vh;box-shadow:0 0.8rem 1rem 0 rgba(",",0.15);z-index:10;"],i.a.RICHBLACK_RBG),s=a.b.div.withConfig({displayName:"Main__BrowserWindow",componentId:"sc-1jg8liq-2"})(["position:relative;height:calc(100vh - 6rem);z-index:8;"]),l=a.b.div.withConfig({displayName:"Main__StoryTelling",componentId:"sc-1jg8liq-3"})(["position:relative;height:calc(85% - 6rem);background-color:",";z-index:2;text-align:center;display:flex;flex-direction:column;justify-content:center;color:",';h2{font-family:"Roboto Slab","sans-serif";text-transform:uppercase;font-size:2.2rem;font-weight:bold;margin:0 0 3rem 0;}p{font-family:"Roboto Slab","sans-serif";font-size:1.8rem;margin:2rem auto;max-width:70rem;}'],i.a.VDEP_TERTIARY_BLUE,i.a.VDEP_DARK_BLUE),d=a.b.div.withConfig({displayName:"Main__OrganisationCTA",componentId:"sc-1jg8liq-4"})(["position:relative;height:13rem;background-image:url(",');background-size:cover;background-position:center;text-align:center;padding:4rem;h3{font-family:"Roboto","sans-serif";color:',';font-size:2rem;}h2{font-family:"Roboto Slab","sans-serif";color:',";font-size:2.2rem;}"],function(e){return e.imgUrl},i.a.VDEP_SECONDARY_BLUE,i.a.VDEP_TERTIARY_BLUE)},151:function(e,t,n){"use strict";n.d(t,"b",function(){return A});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(33),l=n.n(s);n.d(t,"a",function(){return l.a});n(152);var d=i.a.createContext({}),A=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};A.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},152:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},153:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a={COMMUNICATION:{nl:"Communicatie",en:"Communication"},ACCROSS:{nl:"over",en:"accross"},BORDERS:{nl:"grenzen",en:"borders"},ABOUTUS:{nl:"Over ons",en:"About us"},OURSEMINARS:{nl:"Onze Seminars",en:"Our Seminars"},FAQs:{nl:"FAQs",en:"FAQs"},MAKEINQ:{nl:"Doe een aanvraag",en:"Make an Inquiry"},UPCOMINGSEMINARS:{nl:"Bekijk Aankomende Seminars",en:"View Upcoming Seminars"}},i=function(e,t){return a[e][t]}},154:function(e,t,n){"use strict";n(75),n(76),n(74);var a=n(159),i=n(0),o=n.n(i),r=n(151),s=n(165),l=n.n(s);t.a=function(e){return o.a.createElement(r.b,{query:"1345654842",render:function(t){var n=t.images.edges.find(function(t){return t.node.relativePath.includes(e.fileName)});if(!n)return null;var a=n.node.childImageSharp.sizes;return o.a.createElement(l.a,{alt:e.alt,sizes:a})},data:a})}},155:function(e,t,n){"use strict";var a=n(160),i=n(0),o=n.n(i),r=n(4),s=n.n(r),l=n(168),d=n.n(l);function A(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,s=e.title,l=a.data.site,A=t||l.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:A},{property:"og:title",content:s},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:A}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}A.defaultProps={lang:"en",meta:[],keywords:[]},A.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=A},157:function(e,t,n){"use strict";var a=n(7),i=n.n(a),o=n(0),r=n.n(o),s=o.createContext({}),l=(s.Consumer,s.Provider),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).setLanguage=function(e){n.setState({language:e})},n.state={language:"nl",availableLanguages:["nl","en"]},n}return i()(t,e),t.prototype.render=function(){return o.createElement(l,{value:{language:this.state.language,setLanguage:this.setLanguage,availableLanguages:this.state.availableLanguages}},this.props.children)},t}(o.Component),A=function(e){var t=e.children;return o.createElement(d,null,t)},c=n(151),u=n(154),m=n(153),g=n(146),f=n(147),p=g.b.div.withConfig({displayName:"buttons__Button",componentId:"sc-1jy9u3b-0"})(["margin-right:1rem;width:16rem;min-width:4rem;height:4.5rem;border:1px solid transparent;border-radius:0.5rem;background-color:",";color:"," font-family:'Roboto Slab','sans-serif';font-weight:bold;font-size:1.5rem;line-height:1;display:flex;align-items:center;justify-content:center;padding:0 1.6rem;cursor:pointer;"],f.a.VDEP_BLUE,f.a.WHITE),h=g.b.div.withConfig({displayName:"NavBar",componentId:"ve7od4-0"})(["height:6rem;width:100%;display:flex;position:fixed;background:",";transition:all 0.2s;border-bottom:0.1rem solid ",';z-index:1000;justify-content:space-evenly;align-items:center;font-family:"Roboto Slab","sans-serif";font-size:1.5rem;'],function(e){return e.switchBg?f.a.WHITE:f.a.WHITE_15},f.a.VDEP_BLUE),b=g.b.div.withConfig({displayName:"NavBar__NavBarRight",componentId:"ve7od4-1"})(["margin-left:4rem;","{margin-right:3rem;}display:flex;"],p),v=g.b.div.withConfig({displayName:"NavBar__LangBox",componentId:"ve7od4-2"})(["color:",";font-weight:normal;min-width:10rem;display:flex;align-items:center;"],f.a.VDEP_SECONDARY_BLUE),y=g.b.div.withConfig({displayName:"NavBar__LangOption",componentId:"ve7od4-3"})(["",";cursor:pointer;"],function(e){return e.isActive?"font-weight: 900":"font-weight: 100"}),E=g.b.div.withConfig({displayName:"NavBar__LogoBox",componentId:"ve7od4-4"})(["margin-left:3rem;width:30rem;"]),w=g.b.div.withConfig({displayName:"NavBar__Logo",componentId:"ve7od4-5"})(["width:4.5rem;"]),D=g.b.div.withConfig({displayName:"NavBar__Menu",componentId:"ve7od4-6"})(["display:flex;justify-content:center;width:100%;"]),B=g.b.div.withConfig({displayName:"NavBar__MenuItem",componentId:"ve7od4-7"})(["font-weight:bold;color:",";margin:0 3rem;"],f.a.VDEP_BLUE),C=function(e){var t=e.language,n=e.switchBg;return o.createElement(h,{switchBg:n},o.createElement(E,null,o.createElement(c.a,{to:"/"},o.createElement(w,null,o.createElement(u.a,{fileName:"VDEP_Vignet_Logo.png"})))),o.createElement(D,null,o.createElement(B,null,Object(m.a)("ABOUTUS",t)),o.createElement(B,null,Object(m.a)("OURSEMINARS",t)),o.createElement(B,null,Object(m.a)("FAQs",t))),o.createElement(b,null,o.createElement(v,null,o.createElement(c.a,{to:"/en"},o.createElement(y,{isActive:"en"===t},"EN")),"/",o.createElement(c.a,{to:"/"},o.createElement(y,{isActive:"nl"===t},"NL"))),o.createElement(p,null,Object(m.a)("MAKEINQ",t))))},N=n(167),_=n.n(N);function R(){var e=_()(["\n@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');\n@import url('https://fonts.googleapis.com/css?family=Roboto');\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  // This defines what 1rem is. 100% is 16px (most of the time).\n  font-size: 62.5%; // 10px\n  font-family: 'Roboto';\n}\n\nbody {\n  box-sizing: border-box;\n}\n\na,\na:visited {\n  text-decoration: none;\n  color: ","\n}\n"]);return R=function(){return e},e}var x=Object(g.a)(R(),f.a.VDEP_SECONDARY_BLUE),I=n(148),Q=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={navWhite:!1},t.changeNavColor=function(e,t){return e>.12*t},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("scroll",function(){e.changeNavColor(window.scrollY,window.innerHeight)!==e.state.navWhite&&e.setState({navWhite:!e.state.navWhite})})},n.render=function(){var e=this.props.lang;return r.a.createElement(A,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(I.e,{id:"StyledContainer"},r.a.createElement(C,{language:e,switchBg:this.state.navWhite}),r.a.createElement("div",null,r.a.createElement("main",null,this.props.children),r.a.createElement("footer",null)))))},t}(r.a.Component);t.a=Q},158:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(56),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},159:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"190425_CoG_Logo_WO-title.png",name:"190425_CoG_Logo_WO-title",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz2P4//8/EwMUANmS//790wDSPCB+3QE3ZgYkULhDgxEox4isHogVgZgVWR1IQgmIt/6HAqChf4C4DiS34awR54MLDGL//6OoNwDKH/qPAC+AOAvZlpdQg5YDcfOvv3/PArlhlbvV44r2xxxw2T7tZPKe/JVlO8R0gOKy//79hVk8D0i1A/F7IHsJzMAFUFuCkF2dedjdMXtv4mPxDRePMKz6v5Zt3asrabtjjp950OgEVHvn99+fzkgu5gViThgHZN0REBtoC/PNX/9ZWJo2+vJO3bOCYfXnGwxrv73mW3vbiGHBf3GtzTvOpu6OiwWqt2EQZ2AEupQJyGYGYpA5TED9jAxQ120FGXj62Qd2EM3bvcuLoXHzb4aufdcZ1n9aw7D6A8Q1a34eZ1j9pQ3MLv/PCAxodqhDJgDNOAZ2JZBzEGqoOkpMNW6uZZh86j9D7eoYMP/BfyHmNW/vM3QdLwCq9Xv/868SkpfXAPEPIOYGcSyhAfwSiGN//vnrAOTW7LjzyoShftMlxilAQ1u2rmWYeOIYY/f+2wxJ09SA8if+/P33GKjeD6r/IhB/BmI+mA1BQPzhPyooYWCI5WZt2zYTaOBxhsaNy5jr15qA1P/687cAGvbIYCE4jcISNpAWAOJAoK2pQNr2wouP3AzYQMJcRmi4SQFxBBAnA9Wbw6QBl/jGjpvMCnMAAAAASUVORK5CYII=",aspectRatio:1.9316239316239316,src:"/static/39494cfeda3e3b9391a863fc735e3a5e/95787/190425_CoG_Logo_WO-title.png",srcSet:"/static/39494cfeda3e3b9391a863fc735e3a5e/d3809/190425_CoG_Logo_WO-title.png 150w,\n/static/39494cfeda3e3b9391a863fc735e3a5e/95787/190425_CoG_Logo_WO-title.png 226w",sizes:"(max-width: 226px) 100vw, 226px"}}}},{node:{relativePath:"VDEP_Logo_Embleem-RGB.jpg",name:"VDEP_Logo_Embleem-RGB",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMCBAX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHsQlm8d5IlbxAsDf/EABwQAAICAgMAAAAAAAAAAAAAAAEDAAIEEhETM//aAAgBAQABBQJl9QLMlTyMmmpDFhSfOdSwZ//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAEDAQE/AVdhyZX/xAAXEQADAQAAAAAAAAAAAAAAAAABEiAx/9oACAECAQE/AVGx/8QAHhAAAQQBBQAAAAAAAAAAAAAAAAEQERICISJBgZH/2gAIAQEABj8C0J4JL49m3wRpqjf/xAAbEAEAAwADAQAAAAAAAAAAAAABABFBECExgf/aAAgBAQABPyHOW65BB7inGymLp8x6Kl0wpd8uIJT2QqF3H//aAAwDAQACAAMAAAAQ8+D8/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8Q3RcyNQsQ9K//xAAbEQEAAgIDAAAAAAAAAAAAAAABABEQMYGh8P/aAAgBAgEBPxAY2b69zEpq4Kax/8QAHBABAAIDAQEBAAAAAAAAAAAAAQARITFBYRCR/9oACAEBAAE/EKAVyrMQhRV2o/oagHkpp55EpdKDT6nuoDoLeUKdXkyRzb0SIgEwibhkcNjWvn//2Q==",aspectRatio:1,src:"/static/5cdeb6adab15a3e7a05d4f8ac0dce723/a911e/VDEP_Logo_Embleem-RGB.jpg",srcSet:"/static/5cdeb6adab15a3e7a05d4f8ac0dce723/a911e/VDEP_Logo_Embleem-RGB.jpg 50w",sizes:"(max-width: 50px) 100vw, 50px"}}}},{node:{relativePath:"VDEP_Vignet_Logo.png",name:"VDEP_Vignet_Logo",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAADb0lEQVQ4y2WTa2gTWRTH/5OY9YGyq34R/eIHZUFcv/lBxKL4KAXT+mhdKyzi4hcpivVVazVtp0mD1eKzq0ULvpZlN83k0UxMX2YmUVuqVRQ0qGgFXVy0aZrWVtuod8/M3JigA3/OmTn3/O45594B+FOuWFERseo+WSHt6zG1YN4BtXDjPmXTll3h335B1nNIzTfxHJSHMzmoUPM5zFjAF/1OsLu27nXM2ZPLHNHlI6REVST3aZm6ofR7aD7/wKuhgGBY66QK1eoX7xWy2vsFrDKS17061HB5rr/LtSDQ9s+2zt0+MboqRet7ytX8n/jmpuzKUaoUf/UPquvV2lgxs3UVsP3KpgDcwy3wMoZOUivJxd7Mb1HOVUdXj1IHDw4rVjMvxABYHF7k/llm0XxHNGe/Pbp8kCqI1d9a3DPF81pChDGz9Pa5IPU3kcLm0EeCfvmU13qqse7hWkYFOHiHZnz7FIcrz0/3PolOlV4qs/33GiAlmSDF/85eY5L6c+AeHJns+bfTeXPZK5on26v8Ot2IVstAjTwLYmjJRHtzLi79dxKeD08QotbkLwzSwBjciV2kBtLPaShtsoJGcfuQuu68GF2ZrIqs2WxEauTJEOXTqFMY6lSGKl9SqPa342rfNXgHU3APfIaUGMYdpsFteo47MUW3UvwymlNv5vh6QzvD2/IMoKOFg4PbYb/OYA8xHCOwzfMCV/qa4B9h6NBgiThpoQEasHBwiaDF2rWDGi8xQCK1LAYFDrXrldYER3EsQtX6I/AkqbWBPaR5HCIQ0MzBuyGPMeqECU2xP7C2dFq6bQ6UJ5L6UNumQT+iPspwxLPj62m44wK8QwRKTDCACa9+lXxDL+DsaESFa7YGSUMncFuG41SdKI/pI6gJpuBsX6THatst+OFHY3NXfyFa6dD8I6O48LgZNu9faZDWaqZKUZ5BegdHqwYbJ4hmX5OW6nHGBAQ+lMA3nCTFcDHWSKMZos2LMhdLAxrWmI0Y3Mqr/ETfxnSodlhiwIUTt8/gwqM2nO110Tc/39BnXMGAkAWV09WaOFzUD8bZoYHHSSkcvUHJNIZK33uKM5zp1d5vUMzCc7KAopypNuNvIT2jGTIcDTMdWEfWuAlx0pFMftD03W+X1boGTV8lC/k5lHCQdIW6OE3vReTPzIKl54//Aelb9Q4YhrH9AAAAAElFTkSuQmCC",aspectRatio:1.1839080459770115,src:"/static/60256332860d8cf2265fe48103e37e3b/02f0c/VDEP_Vignet_Logo.png",srcSet:"/static/60256332860d8cf2265fe48103e37e3b/02f0c/VDEP_Vignet_Logo.png 103w",sizes:"(max-width: 103px) 100vw, 103px"}}}},{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/static/4a9773549091c227cd2eb82ccd9c5e3a/d3809/gatsby-icon.png 150w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png 300w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"vdep-vignet.jpg",name:"vdep-vignet",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAMCBAX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAHsQlm8d5IlbxAsDf/EABwQAAICAgMAAAAAAAAAAAAAAAEDAAIEEhETM//aAAgBAQABBQJl9QLMlTyMmmpDFhSfOdSwZ//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAEDAQE/AVdhyZX/xAAXEQADAQAAAAAAAAAAAAAAAAABEiAx/9oACAECAQE/AVGx/8QAHhAAAQQBBQAAAAAAAAAAAAAAAAEQERICISJBgZH/2gAIAQEABj8C0J4JL49m3wRpqjf/xAAbEAEAAwADAQAAAAAAAAAAAAABABFBECExgf/aAAgBAQABPyHOW65BB7inGymLp8x6Kl0wpd8uIJT2QqF3H//aAAwDAQACAAMAAAAQ8+D8/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8Q3RcyNQsQ9K//xAAbEQEAAgIDAAAAAAAAAAAAAAABABEQMYGh8P/aAAgBAgEBPxAY2b69zEpq4Kax/8QAHBABAAIDAQEBAAAAAAAAAAAAAQARITFBYRCR/9oACAEBAAE/EKAVyrMQhRV2o/oagHkpp55EpdKDT6nuoDoLeUKdXkyRzb0SIgEwibhkcNjWvn//2Q==",aspectRatio:1,src:"/static/5cdeb6adab15a3e7a05d4f8ac0dce723/a911e/vdep-vignet.jpg",srcSet:"/static/5cdeb6adab15a3e7a05d4f8ac0dce723/a911e/vdep-vignet.jpg 50w",sizes:"(max-width: 50px) 100vw, 50px"}}}},{node:{relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 600px) 100vw, 600px"}}}}]}}}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Communicatie over Grenzen",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},170:function(e){e.exports={data:{drupal:{events:{entities:[{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"f8e08fb9-1d5a-4b11-8d9b-fceb9dc9b1d8",langcode:{value:"nl"},title:"First on Russia",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-06-26",date:"2019-06-26 12:00:00 UTC"},fieldDatesText:"26, 27, 28 Jun 2019",fieldSeminar:{targetId:6,entity:{__typename:"DRUPAL_NodeSeminar",title:"Russia",fieldImageNight:{derivative:{height:152,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/serge-kutuzov-496941-unsplash-graded-crop-web.jpg?itok=yQX9JWIJ"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"cd3cf623-415e-47f7-9a84-7d4e6e5e2f52",langcode:{value:"nl"},title:"First on Middle-East",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-08-28",date:"2019-08-28 12:00:00 UTC"},fieldDatesText:"28, 29, 30 Aug 2019",fieldSeminar:{targetId:4,entity:{__typename:"DRUPAL_NodeSeminar",title:"Middle-East",fieldImageNight:{derivative:{height:134,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/dubai-1767540-graded-crop-web.jpg?itok=PXCeUO6U"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"cac9c3dd-fdfe-4767-abf7-60e0aaca9eba",langcode:{value:"nl"},title:"First on West-Africa",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-09-25",date:"2019-09-25 12:00:00 UTC"},fieldDatesText:"25, 26, 27 Sep 2019",fieldSeminar:{targetId:5,entity:{__typename:"DRUPAL_NodeSeminar",title:"West-Africa",fieldImageNight:{derivative:{height:144,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/table-bay-harbour-3541607-graded-crop-web.jpg?itok=tzWJb6tf"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"32e5030e-58fb-4e16-869e-ed95df5583b9",langcode:{value:"nl"},title:"Second on Russia",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-10-23",date:"2019-10-23 12:00:00 UTC"},fieldDatesText:"23, 24, 25 Oct 2019",fieldSeminar:{targetId:6,entity:{__typename:"DRUPAL_NodeSeminar",title:"Russia",fieldImageNight:{derivative:{height:152,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/serge-kutuzov-496941-unsplash-graded-crop-web.jpg?itok=yQX9JWIJ"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"95f1e5d4-75b4-4cc7-b9b2-e035a7d1721c",langcode:{value:"nl"},title:"Second on Middle-East",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-11-27",date:"2019-11-27 12:00:00 UTC"},fieldDatesText:"27, 28, 29 Nov 2019",fieldSeminar:{targetId:4,entity:{__typename:"DRUPAL_NodeSeminar",title:"Middle-East",fieldImageNight:{derivative:{height:134,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/dubai-1767540-graded-crop-web.jpg?itok=PXCeUO6U"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"d9248911-0eb2-4a65-8449-7f4f848b8a04",langcode:{value:"nl"},title:"Second on West-Africa",fieldLocationCity:"Hoeven - NB",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-12-18",date:"2019-12-18 12:00:00 UTC"},fieldDatesText:"18, 19, 20 Dec 2019",fieldSeminar:{targetId:5,entity:{__typename:"DRUPAL_NodeSeminar",title:"West-Africa",fieldImageNight:{derivative:{height:144,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/table-bay-harbour-3541607-graded-crop-web.jpg?itok=tzWJb6tf"}}}}},{__typename:"DRUPAL_NodeEvents",entityType:"node",uuid:"f6e0fe7c-d830-4f53-8453-21819209588a",langcode:{value:"nl"},title:"Test in past",fieldLocationCity:"Rotterdam",fieldLocationVenue:"Klooster Bovendonk",fieldDateDay1:{value:"2019-04-10",date:"2019-04-10 12:00:00 UTC"},fieldDatesText:"23 april",fieldSeminar:{targetId:6,entity:{__typename:"DRUPAL_NodeSeminar",title:"Russia",fieldImageNight:{derivative:{height:152,width:480,url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/styles/large/public/2019-04/serge-kutuzov-496941-unsplash-graded-crop-web.jpg?itok=yQX9JWIJ"}}}}}]}}}}},171:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(161);var a=function(e){return new Date(e)>=new Date},i=function(e){var t=e.filter(function(e){return"Middle-East"===e.fieldSeminar.entity.title}),n=e.filter(function(e){return"West-Africa"===e.fieldSeminar.entity.title}),i=e.filter(function(e){return"Russia"===e.fieldSeminar.entity.title});return{eventsMiddleEast:t.filter(function(e){return a(e.fieldDateDay1.date)}).sort(function(e,t){return new Date(e.fieldDateDay1.date)-new Date(t.fieldDateDay1.date)}),eventsWestAfrica:n.filter(function(e){return a(e.fieldDateDay1.date)}).sort(function(e,t){return new Date(e.fieldDateDay1.date)-new Date(t.fieldDateDay1.date)}),eventsRussia:i.filter(function(e){return a(e.fieldDateDay1.date)}).sort(function(e,t){return new Date(e.fieldDateDay1.date)-new Date(t.fieldDateDay1.date)})}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(74);var a=n(204),i=n(0),o=n(205),r=n.n(o),s=n(148),l=function(e){var t=e.language,n=a.data.drupal.articles.entities.find(function(e){return"story"===e.fieldIdentifier}).entityTranslations.find(function(e){return e.langcode.value===t});return i.createElement(s.d,null,i.createElement("h2",null,n.title),r()(n.body.processed))}},185:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(74);var a=n(241),i=n(0),o=n(148),r=function(e){var t=e.language,n=a.data.drupal;console.log(n);var r=n.nodeQuery.entities[0].entityTranslations.find(function(e){return e.langcode.value===t});return r&&i.createElement(o.c,{imgUrl:r.fieldImage.url},i.createElement("h3",null,r.title),i.createElement("h2",null,r.fieldCta))}},186:function(e,t,n){"use strict";n(74);var a=n(203),i=n(0),o=n.n(i),r=n(153),s=n(154),l=n(146),d=n(147),A=l.b.div.withConfig({displayName:"Header",componentId:"sc-188cg3-0"})(["width:100%;height:60%;position:relative;"]),c=l.b.div.withConfig({displayName:"Header__Hero",componentId:"sc-188cg3-1"})(["background-image:url(",");background-size:cover;background-position:top;height:100%;position:relative;"],function(e){return e.heroImgUrl}),u=l.b.div.withConfig({displayName:"Header__SiteTitleContainer",componentId:"sc-188cg3-2"})(["position:absolute;top:55%;left:50%;transform:translate(-50%,-50%);text-align:center;display:flex;flex-direction:column;align-items:center;"]),m=l.b.div.withConfig({displayName:"Header__SitePayoff",componentId:"sc-188cg3-3"})(['position:relative;top:3rem;font-family:"Roboto","sans-serif";color:',";width:100%;h2{font-size:1.4rem;font-weight:bold;margin:2rem 0;}h3{font-size:1.4rem;font-weight:normal;margin:2rem 0;}"],d.a.WHITE),g=l.b.div.withConfig({displayName:"Header__LogoContainer",componentId:"sc-188cg3-4"})(['display:flex;h1{font-family:"Roboto Slab","sans-serif";color:',";font-size:0.037rem;text-align:center;position:relative;top:0.5rem;font-weight:700;letter-spacing:0.1em;display:inline-block;}"],d.a.WHITE),f=l.b.div.withConfig({displayName:"Header__CoG",componentId:"sc-188cg3-5"})(["width:18rem;"]),p=l.b.div.withConfig({displayName:"Header__LogoTextOne",componentId:"sc-188cg3-6"})(["text-transform:uppercase;font-size:72em;display:block;"]),h=l.b.div.withConfig({displayName:"Header__LogoTextTwo",componentId:"sc-188cg3-7"})(['font-size:40em;text-transform:lowercase;display:inline-block;position:absolute;top:1.8em;left:0;width:100%;&:before,&:after{content:"";position:absolute;height:0.28em;border-bottom:0.15em solid ',";top:0.5em;left:0;width:10%;}&:before{margin-left:6px;width:38%;position:absolute;top:0.8rem;}&:after{left:55%;margin-left:9px;width:36%;position:absolute;top:0.8rem;}"],d.a.WHITE),b=l.b.div.withConfig({displayName:"Header__LogoTextThree",componentId:"sc-188cg3-8"})(["text-transform:uppercase;font-size:96em;display:block;letter-spacing:0.2em;position:absolute;top:1.1em;left:0.08em;font-weight:900;"]);t.a=function(e){var t=e.language,n=a.data.drupal.nodeQuery.entities[0].entityTranslations.find(function(e){return e.langcode.value===t});return n?o.a.createElement(A,null,o.a.createElement(c,{heroImgUrl:n.fieldHeroImage.url},o.a.createElement(u,null,o.a.createElement(g,null,o.a.createElement(f,null,o.a.createElement(s.a,{fileName:"190425_CoG_Logo_WO-title.png"})),o.a.createElement("h1",null,o.a.createElement(p,null,Object(r.a)("COMMUNICATION",t)),o.a.createElement(h,null,Object(r.a)("ACCROSS",t)),o.a.createElement(b,null,Object(r.a)("BORDERS",t)))),o.a.createElement(m,null,o.a.createElement("h2",null,n.fieldCogMessage),o.a.createElement("h3",null,n.fieldCogSubMessage))))):null}},187:function(e,t,n){"use strict";var a=n(0),i=n(153),o=n(146),r=n(147),s=o.b.div.withConfig({displayName:"Events__UpcomingEventsContainer",componentId:"sc-1efbj50-0"})(["width:100%;padding:3rem 4rem;h2{color:",';font-size:2rem;font-family:"Roboto Slab","sans-serif";font-weight:bold;margin:0 0 2rem;}'],r.a.VDEP_DARK_BLUE),l=o.b.div.withConfig({displayName:"Events__TilesContainer",componentId:"sc-1efbj50-1"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin:0;"]),d=o.b.div.withConfig({displayName:"Events__EventTile",componentId:"sc-1efbj50-2"})(["position:relative;text-align:center;width:calc(100% / 3);margin-right:3rem;&:last-child{margin-right:0;}h2{color:",";font-size:1.5rem;text-transform:uppercase;position:absolute;top:1.6rem;left:2rem;font-weight:bold;letter-spacing:0.2rem;margin:0;}"],r.a.VDEP_TERTIARY_BLUE),A=o.b.div.withConfig({displayName:"Events__LocationDateContainer",componentId:"sc-1efbj50-3"})(['display:flex;flex-direction:row;justify-content:space-between;margin:1rem 3rem;h3{font-family:"Roboto Slab","sans-serif";color:',';letter-spacing:0.15rem;font-weight:bold;font-size:1.5rem;text-transform:uppercase;}h4{font-family:"Roboto Slab","sans-serif";color:',";letter-spacing:0.15rem;font-weight:normal;font-size:1.5rem;text-transform:uppercase;}"],r.a.VDEP_SECONDARY_BLUE,r.a.VDEP_SECONDARY_BLUE),c=o.b.div.withConfig({displayName:"Events__EventImage",componentId:"sc-1efbj50-4"})(["background-image:url(",");background-size:cover;background-position:top;border-radius:0.5rem;width:100%;height:13rem;"],function(e){return e.imgUrl});n.d(t,"a",function(){return u});var u=function(e){var t=e.events,n=e.language;return a.createElement(s,null,a.createElement("h2",null,Object(i.a)("UPCOMINGSEMINARS",n),":"),a.createElement(l,null,t.map(function(e){return a.createElement(d,{key:e.uuid},a.createElement(c,{imgUrl:e.fieldSeminar.entity.fieldImageNight.derivative.url}),a.createElement("h2",null,e.fieldSeminar.entity.title),a.createElement(A,null,a.createElement("h3",null,e.fieldLocationCity),a.createElement("h4",null,e.fieldDatesText)))})))}},203:function(e){e.exports={data:{drupal:{nodeQuery:{entities:[{__typename:"DRUPAL_NodeHeader",entityTranslations:[{__typename:"DRUPAL_NodeHeader",uuid:"2f8ce04e-9ed3-4ed3-8d65-072980a9bba8",langcode:{value:"en"},title:"Communication across Borders",fieldCogMessage:"At Communication across Borders, we believe in The Power of Clear Communication",fieldCogSubMessage:"Through our Seminars, we teach organisations and individuals to communicate effectively with other cultures in their business relationships",fieldHeroImage:{alt:"Earth - NASA",url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/2019-04/cog-hero-earth-1100px_0.jpg",height:649,width:1098}},{__typename:"DRUPAL_NodeHeader",uuid:"2f8ce04e-9ed3-4ed3-8d65-072980a9bba8",langcode:{value:"nl"},title:"Communicatie over Grenzen",fieldCogMessage:"Bij Communicatie over Grenzen geloven wij in de kracht van duidelijke communicatie",fieldCogSubMessage:"Met onze Seminars helpen we organisaties en individuelen met effectief communiceren met andere culturen in hun zakelijke relaties",fieldHeroImage:{alt:"Earth - NASA",url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/2019-04/cog-hero-earth-1100px_0.jpg",height:649,width:1098}}]}]}}}}},204:function(e){e.exports={data:{drupal:{articles:{entities:[{__typename:"DRUPAL_NodeArticle",fieldIdentifier:"expertise",entityTranslations:[{__typename:"DRUPAL_NodeArticle",uuid:"a9d45184-fbe1-4419-b37c-482f058efb30",langcode:{value:"en"},title:"Our inter-cultural expertise",fieldIdentifier:"expertise",body:{value:"<p><strong>Communication across Border is an initiave of Bert van Dijk, who has amassed more than 30 year of experience in intercultural communication.</strong><br />\r\nAs a business development director in the offshore industry, he has worked with countries in West Africa, the Middle East, the Russian Region and Central Asia. With an in-depth understanding of these cultures, we zoom in upon these areas with expertise.</p>\r\n",format:"basic_html",processed:"<p><strong>Communication across Border is an initiave of Bert van Dijk, who has amassed more than 30 year of experience in intercultural communication.</strong><br />\nAs a business development director in the offshore industry, he has worked with countries in West Africa, the Middle East, the Russian Region and Central Asia. With an in-depth understanding of these cultures, we zoom in upon these areas with expertise.</p>",summary:"",summaryProcessed:""}},{__typename:"DRUPAL_NodeArticle",uuid:"a9d45184-fbe1-4419-b37c-482f058efb30",langcode:{value:"nl"},title:"Our inter-cultural expertise",fieldIdentifier:"expertise",body:{value:"<p><strong>Communication across Border is an initiave of Bert van Dijk, who has amassed more than 30 year of experience in intercultural communication.</strong><br />\r\nAs a business development director in the offshore industry, he has worked with countries in West Africa, the Middle East, the Russian Region and Central Asia. With an in-depth understanding of these cultures, we zoom in upon these areas with expertise.</p>\r\n",format:"basic_html",processed:"<p><strong>Communication across Border is an initiave of Bert van Dijk, who has amassed more than 30 year of experience in intercultural communication.</strong><br />\nAs a business development director in the offshore industry, he has worked with countries in West Africa, the Middle East, the Russian Region and Central Asia. With an in-depth understanding of these cultures, we zoom in upon these areas with expertise.</p>",summary:"",summaryProcessed:""}}]},{__typename:"DRUPAL_NodeArticle",fieldIdentifier:"story",entityTranslations:[{__typename:"DRUPAL_NodeArticle",uuid:"f9701b9b-20f9-44b1-926d-4e1c7978bfca",langcode:{value:"en"},title:"The importance of clear communication",fieldIdentifier:"story",body:{value:"<p><strong>Problems created while doing business with another culture are caused by misunderstandings. </strong>These misunderstandings are often the result of miscommunication.</p>\r\n\r\n<p><strong>They can lead to irritation, resistance; and ultimately a standstill in project progress.&nbsp;</strong>A half-delivered or partially-paid product is the result.</p>\r\n\r\n<p><strong>\"Understanding\" means knowing who you're communicating with -and how best to communicate with them.</strong></p>\r\n\r\n<p><u><strong>We'll show you how to make yourself understood.</strong></u></p>\r\n",format:"full_html",processed:"<p><strong>Problems created while doing business with another culture are caused by misunderstandings. </strong>These misunderstandings are often the result of miscommunication.</p>\n\n<p><strong>They can lead to irritation, resistance; and ultimately a standstill in project progress. </strong>A half-delivered or partially-paid product is the result.</p>\n\n<p><strong>\"Understanding\" means knowing who you're communicating with -and how best to communicate with them.</strong></p>\n\n<p><u><strong>We'll show you how to make yourself understood.</strong></u></p>\n",summary:"",summaryProcessed:""}},{__typename:"DRUPAL_NodeArticle",uuid:"f9701b9b-20f9-44b1-926d-4e1c7978bfca",langcode:{value:"nl"},title:"The importance of clear communication",fieldIdentifier:"story",body:{value:"<p><strong>Problems created while doing business with another culture are caused by misunderstandings. </strong>These misunderstandings are often the result of miscommunication.</p>\r\n\r\n<p><strong>They can lead to irritation, resistance; and ultimately a standstill in project progress.&nbsp;</strong>A half-delivered or partially-paid product is the result.</p>\r\n\r\n<p><strong>\"Understanding\" means knowing who you're communicating with -and how best to communicate with them.</strong></p>\r\n\r\n<p><u><strong>We'll show you how to make yourself understood.</strong></u></p>\r\n",format:"full_html",processed:"<p><strong>Problems created while doing business with another culture are caused by misunderstandings. </strong>These misunderstandings are often the result of miscommunication.</p>\n\n<p><strong>They can lead to irritation, resistance; and ultimately a standstill in project progress. </strong>A half-delivered or partially-paid product is the result.</p>\n\n<p><strong>\"Understanding\" means knowing who you're communicating with -and how best to communicate with them.</strong></p>\n\n<p><u><strong>We'll show you how to make yourself understood.</strong></u></p>\n",summary:"",summaryProcessed:""}}]}]}}}}},223:function(e,t){},241:function(e){e.exports={data:{drupal:{nodeQuery:{entities:[{__typename:"DRUPAL_NodeOrganisationCta",entityTranslations:[{__typename:"DRUPAL_NodeOrganisationCta",uuid:"51633811-ba49-4f3f-aa73-2e4e4dd3049e",langcode:{value:"en"},title:"Unique problems require unique solutions",fieldCta:"Get a CoG Seminar designed for your organisation",fieldImage:{url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/2019-05/190430_CoG_full-width-cta-web.jpg"}},{__typename:"DRUPAL_NodeOrganisationCta",uuid:"51633811-ba49-4f3f-aa73-2e4e4dd3049e",langcode:{value:"nl"},title:"Unieke problemen vragen om unieke oplossingen",fieldCta:"Neem een CoG Seminar ontworpen voor jou organisatie",fieldImage:{url:"https://drupal.communicatieovergrenzen.nl/sites/default/files/2019-05/190430_CoG_full-width-cta-web.jpg"}}]}]}}}}}}]);
//# sourceMappingURL=2-d9254f5727579a928388.js.map