(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(160),s=n(158),m=n(161),p=n(152),c=n(153),d=n(154),u=n.n(d),g=n(156),f=p.b.div.withConfig({displayName:"Bio__BioWrapper",componentId:"d7fgaq-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#e7eef2 0 0 0 1px;}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),h=Object(p.b)(g.c).withConfig({displayName:"Bio__BioText",componentId:"d7fgaq-1"})(["& a{border-bottom:1px dotted rgba(162,162,162,0.8);}& a:hover{border-bottom-style:solid;}"]),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=Object(c.b)(u.a.authorAvatar);return i.a.createElement(f,null,i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{src:u.a.authorAvatar,alt:u.a.authorName,style:{backgroundImage:'url("'+e+'")'},className:"img"})),i.a.createElement("section",null,i.a.createElement("h4",null,"About the author"),i.a.createElement(h,{dangerouslySetInnerHTML:{__html:u.a.authorDescription}})))},t}(i.a.Component),x=n(186),w=p.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"jwdbi9-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),y=p.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"jwdbi9-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ebf2f6;"]),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post;return i.a.createElement(w,null,i.a.createElement(x.a,{content:e.html,date:e.frontmatter.date,tags:e.frontmatter.tags}),i.a.createElement(y,null,i.a.createElement(b,null)))},t}(i.a.Component),v=n(181),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=[e.previous,e.next].filter(function(e){return e}).map(function(e){return{node:e}});return i.a.createElement(o.Fragment,null,i.a.createElement(g.c,null,"Read next:"),i.a.createElement(v.a,{posts:t}))},t}(i.a.Component),k=n(159),C=n(182);n.d(t,"pageQuery",function(){return I});var N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,a=t.next;return i.a.createElement(l.a,{location:this.props.location},i.a.createElement(k.a,{title:e.frontmatter.title,description:e.excerpt,cover:e.frontmatter.cover&&e.frontmatter.cover.publicURL,imageFb:e.frontmatter.imageFb&&e.frontmatter.imageFb.publicURL,imageTw:e.frontmatter.imageTw&&e.frontmatter.imageTw.publicURL,lang:e.frontmatter.language,path:e.frontmatter.slug,isBlogPost:!0}),i.a.createElement(m.a,{heroImg:e.frontmatter.cover&&e.frontmatter.cover.publicURL,title:e.frontmatter.title}),i.a.createElement(s.a,null,i.a.createElement(A,{post:e})),i.a.createElement(s.a,null,i.a.createElement(C.a,{slug:e.frontmatter.slug,title:e.frontmatter.title}),i.a.createElement(E,{previous:n,next:a})))},t}(i.a.Component),I=(t.default=N,"2721612966")},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(32),s=n.n(l);n.d(t,"a",function(){return s.a}),n.d(t,"b",function(){return l.withPrefix});n(155),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},154:function(e,t){e.exports={siteTitle:"gatsby-starter-morning-dew",siteDescription:"👋 Hey I'm a Gatsby starter!",authorName:"Maxence Poutord",twitterUsername:"_maxpou",authorAvatar:"/images/avatar.jpeg",multilangPosts:!0,authorDescription:'\n  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.\n  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.\n  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>\n  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>\n  ',siteUrl:"https://maxpou.github.io/",disqusSiteUrl:"https://www.maxpou.fr/",pathPrefix:"/gatsby-starter-morning-dew",siteCover:"/images/cover.jpg",googleAnalyticsId:"UA-67868977-1",background_color:"#ffffff",theme_color:"#222222",display:"standalone",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"maxpou",headerLinks:[{label:"🏡",url:"/"},{label:"Blog",url:"/"},{label:"About",url:"/gatsby-starter-morning-dew"},{label:"Installation",url:"/how-to-install"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/"},{label:"About",url:"/gatsby-starter-morning-dew"},{label:"Installation",url:"/how-to-install"}],["Follow the author",{label:"Github",url:"https://github.com/maxpou/gatsby-starter-morning-dew",iconClassName:"fa fa-github"},{label:"Website",url:"https://www.maxpou.fr",iconClassName:"fa fa-globe"},{label:"Twitter",url:"https://twitter.com/_maxpou",iconClassName:"fa fa-twitter"}]]}},155:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},156:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return p});var a=n(170),r=n.n(a),o=n(152),i=n(153);function l(){var e=r()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return l=function(){return e},e}var s=Object(o.a)(l()),m=Object(o.b)(i.a).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1aaxjtz-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),p=o.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1aaxjtz-1"})(["line-height:1.6;margin:1em 0 0 0;"])},157:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),s=n(2),m=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},158:function(e,t,n){"use strict";var a=n(152).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"xmiwfw-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=a},159:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(171),s=n.n(l),m=n(153),p=n(154),c=n.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,a=void 0===n?"":n,r=e.lang,o=void 0===r?"en":r,l=this.props.title?this.props.title+" | "+c.a.siteTitle:c.a.siteTitle,p=c.a.siteUrl.substring(0,c.a.siteUrl.length-1),d=""+p+(this.props.imageFb||this.props.cover||Object(m.b)(c.a.siteCover)),u=""+p+(this.props.imageTw||this.props.cover||Object(m.b)(c.a.siteCover)),g=this.props.description||c.a.siteDescription;return i.a.createElement(s.a,{title:l},i.a.createElement("html",{lang:o}),i.a.createElement("meta",{name:"description",content:g}),i.a.createElement("link",{rel:"canonical",href:p+Object(m.b)(a)}),i.a.createElement("meta",{property:"og:url",content:p+Object(m.b)(a)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:g}),i.a.createElement("meta",{property:"og:image",content:d}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:c.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:g}),i.a.createElement("meta",{name:"twitter:image",content:u}))},t}(i.a.Component);t.a=d},160:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(153),s=n(152),m=s.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1glvhxp-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:rgba(32,35,42,0.85);"]),p=s.b.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1glvhxp-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;"]),c=Object(s.b)(l.a).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1glvhxp-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return i.a.createElement(m,null,i.a.createElement(p,null,e.map(function(e,t){return i.a.createElement(c,{to:e.url,key:"header-link-"+t},e.label)})))},t}(i.a.Component),u=(n(167),n(168),s.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"t92llg-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,a=e.websiteHost,r=function(e){var t=e.item;return"string"==typeof t?i.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?i.a.createElement("span",{className:"footer-item"},i.a.createElement(l.a,{className:"footer-link",to:t.url},t.label)):i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{className:"footer-link",href:t.url},t.label))},o=function(e){var t=e.column;return i.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return i.a.createElement(r,{item:e,key:"footer-column-item-"+t})}))};return i.a.createElement(u,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2018"),i.a.createElement("p",{className:"footer-item-text"},"Built with"," ",i.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),i.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",i.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),i.a.createElement("p",{className:"footer-item-text"},"Hosted with ",i.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",i.a.createElement("a",{className:"footer-link",href:a.url},a.name),".")),n.map(function(e,t){return i.a.createElement(o,{column:e,key:"footer-column-"+t})})))},t}(i.a.Component),f=n(154),h=n.n(f),b=(n(169),n(156)),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(d,{headerLinks:h.a.headerLinks}),i.a.createElement("div",{style:{margin:"60px 0"}},e),i.a.createElement(g,{siteConfig:h.a}))},t}(i.a.Component);t.a=x},161:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(153),s=n(154),m=n.n(s),p=n(152),c=p.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=p.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=p.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(l.b)(m.a.siteCover),t=this.props.title;return i.a.createElement(c,{style:{backgroundImage:'url("'+e+'")'}},i.a.createElement(d,null,i.a.createElement(u,null,t)))},t}(i.a.Component);t.a=g},162:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(163),m=n.n(s),p=n(164),c=n.n(p),d=l.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?m.a:c.a,n="en"===e?"english post":"post en francais";return i.a.createElement(d,{src:t,alt:n,className:"flag"})},t}(i.a.Component);t.a=u},163:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},164:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},165:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(153),s=n(152),m=s.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;margin:0 0.5rem 0 0;color:#787676;"]),p=Object(s.b)(l.a).withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-1"})(["margin-left:0.3rem;color:#787676;&:hover{border-bottom:1px dotted #787676;}&:before{content:'#';}"]),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return i.a.createElement(m,null,!0===n&&i.a.createElement(o.Fragment,null,"🏷 "),t.map(function(e,n){return i.a.createElement(o.Fragment,{key:"tag-list-"+n},i.a.createElement(p,{to:"tags/"+e},e),n<t.length-1?", ":"")}))},t}(i.a.Component);t.a=c},181:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(156),s=n(162),m=n(154),p=n.n(m),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement("ul",null,e.map(function(e){var t=e.node.frontmatter.title,n=e.node.frontmatter.slug,a=e.node.frontmatter.language||"en";return i.a.createElement("li",{key:n},i.a.createElement(l.b,{to:n},p.a.multilangPosts&&i.a.createElement(s.a,{language:a}),t))}))},t}(i.a.Component);t.a=c},182:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(193),s=n.n(l),m=n(154),p=n.n(m),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=p.a.disqusShortname;if(!e)return null;var t={url:""+p.a.disqusSiteUrl+this.props.slug,title:this.props.title};return i.a.createElement(s.a.DiscussionEmbed,{shortname:e,config:t})},t}(i.a.Component);t.a=c},186:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(165),m=l.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1qtxhip-0"})(["margin-bottom:2rem;color:#787676;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags;return i.a.createElement(m,null,t&&i.a.createElement("time",null,t),Array.isArray(n)&&n.length>0&&i.a.createElement(o.Fragment,null,i.a.createElement("span",null," in"),i.a.createElement(s.a,{tags:n})))},t}(i.a.Component),c=l.b.div.withConfig({displayName:"Content__ContentBody",componentId:"p0bolz-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;background:#2d2d2d;color:#ffffff;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:#022a4b;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:.75em;border-left:.25em solid #ffa7c4;}& p > code.language-text,& li > code.language-text{background:rgba(255,229,100,0.2);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#e8e8e8;border-bottom:2px solid white;}}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.date,a=e.tags;return i.a.createElement("section",null,(a||n)&&i.a.createElement(p,{date:n,tags:a}),i.a.createElement(c,{dangerouslySetInnerHTML:{__html:t}}))},t}(i.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-953961b403ea39f283ff.js.map