(self.webpackChunkgatsby_starter_ghost=self.webpackChunkgatsby_starter_ghost||[]).push([[756],{8574:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(7294)),n=i(a(5697)),l=i(a(8902)),s=a(8733);function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t={limit:e.limit,from:e.from,to:e.to,fallback:e.fallback,visibility:e.visibility},a=0,n=function(e){return a+=1,"".concat(e,"_").concat(a)};return Object.defineProperty(t,"separator",{get:function(){return""===e.separator?null:r.default.isValidElement(e.separator)?r.default.createElement(r.default.Fragment,{key:n("separator")},e.separator):r.default.createElement("span",{className:e.separatorClasses,key:n("separator")},e.separator)}}),e.prefix&&(t.prefix=r.default.isValidElement(e.prefix)?e.prefix:r.default.createElement("span",{className:e.prefixClasses,key:"prefix"},e.prefix)),e.suffix&&(t.suffix=r.default.isValidElement(e.suffix)?e.suffix:r.default.createElement("span",{className:e.suffixClasses,key:"suffix"},e.suffix)),t.fn=function(t){var a=e.permalink;return a=a.replace(/:slug/,t.slug)||"/".concat(t.slug,"/"),e.autolink?r.default.createElement("span",{className:e.classes,key:t.slug},r.default.createElement(l.default,{to:a,className:e.linkClasses},t.name)):r.default.createElement("span",{className:e.classes,key:t.slug},t.name)},(0,s.tags)(e.post,t)};u.defaultProps={separator:", ",from:1,classes:"category text-info",separatorClasses:"",prefixClasses:"text-white hover:text-gray-50",suffixClasses:"",linkClasses:"text-white hover:text-gray-50",permalink:"/:slug/",autolink:!0},u.propTypes={post:n.default.shape({tags:n.default.arrayOf(n.default.shape({name:n.default.string,slug:n.default.string})).isRequired}).isRequired,limit:n.default.number,from:n.default.number,to:n.default.number,fallback:n.default.object,visibility:n.default.oneOf(["public","all","internal"]),permalink:n.default.string,autolink:n.default.bool,classes:n.default.string,separatorClasses:n.default.string,prefixClasses:n.default.string,suffixClasses:n.default.string,linkClasses:n.default.string};var o=u;t.default=o},9142:function(e,t,a){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return n.default}});var r,n=(r=a(8574))&&r.__esModule?r:{default:r}},8011:function(e,t,a){"use strict";a.d(t,{tl:function(){return m},y4:function(){return o}});a(3904);var r=a(7294),n=a(5444),l=a(9142),s=a(8733),i=a(6807),u=a.n(i),o=function(e){var t=e.post,a="/"+t.slug+"/",i=(0,s.readingTime)(t),o=u()(t.created_at,"mmmm dS");t.feature_image;return r.createElement(r.Fragment,null,r.createElement("article",{className:"Card"},r.createElement("div",{className:"Card__Image Card__Image_blue"},t.feature_image&&r.createElement(n.Link,{to:a},r.createElement("img",{src:t.feature_image,alt:t.title}))),r.createElement("div",{className:"Card__Content"},r.createElement("div",{className:"Card__Header"},r.createElement("span",{className:"Card__Tag"},"          ",r.createElement(l.$,{post:t,visibility:"public",autolink:!0})),r.createElement("span",{className:"Card__Date"},o,"            ")),r.createElement("div",{className:"Card__Body"},r.createElement("span",{className:"Card__Title"},t.title),r.createElement("div",{className:"Card_Description"},r.createElement("p",null,t.excerpt))),r.createElement("div",{className:"Card__Footer"},r.createElement("div",{className:"Card__Footer-Author"},r.createElement("div",{className:"Author-Img"}),r.createElement("div",{className:"Author-Name"},i)),r.createElement("div",{className:"Card__Footer-Link"},r.createElement("a",{nofollow:!0,noreferrer:!0,href:"{url}"},"Read more 🡢"))))))},m=function(e){var t=e.pageContext,a=t.previousPagePath,l=t.nextPagePath,s=t.humanPageNumber,i=t.numberOfPages;return r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("div",null,a&&r.createElement(n.Link,{to:a,rel:"prev"},"Previous")),i>1&&r.createElement("div",{className:"pagination-location"},"Page ",s," of ",i),r.createElement("div",null,l&&r.createElement(n.Link,{to:l,rel:"next"},"Next")))},c=function(e){var t=e.data,a=e.navClass;return r.createElement(r.Fragment,null,t.map((function(e,t){return e.url.match(/^\s?http(s?)/gi)?r.createElement("a",{className:a,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):r.createElement(n.Link,{className:a,to:e.url,key:t},e.label)})))};c.defaultProps={navClass:"site-nav-item"}},7281:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(3904),l=a(8011),s=a(1431);t.default=function(e){var t=e.data,a=e.location,i=e.pageContext,u=t.ghostAuthor,o=t.allGhostPost.edges,m=u.twitter?"https://twitter.com/"+u.twitter.replace(/^@/,""):null,c=u.facebook?"https://www.facebook.com/"+u.facebook.replace(/^\//,""):null;return r.createElement(r.Fragment,null,r.createElement(s.U,{data:t,location:a,type:"profile"}),r.createElement(n.Z,null,r.createElement("div",{className:"container"},r.createElement("header",{className:"author-header"},r.createElement("div",{className:"author-header-content"},r.createElement("h1",null,u.name),u.bio&&r.createElement("p",null,u.bio),r.createElement("div",{className:"author-header-meta"},u.website&&r.createElement("a",{className:"author-header-item",href:u.website,target:"_blank",rel:"noopener noreferrer"},"Website"),m&&r.createElement("a",{className:"author-header-item",href:m,target:"_blank",rel:"noopener noreferrer"},"Twitter"),c&&r.createElement("a",{className:"author-header-item",href:c,target:"_blank",rel:"noopener noreferrer"},"Facebook"))),r.createElement("div",{className:"author-header-image"},u.profile_image&&r.createElement("img",{src:u.profile_image,alt:u.name}))),r.createElement("section",{className:"post-feed"},o.map((function(e){var t=e.node;return r.createElement(l.y4,{key:t.id,post:t})}))),r.createElement(l.tl,{pageContext:i}))))}},6807:function(e,t,a){"use strict";var r;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(l){var s,i,u,o=arguments,m=(s=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,u=/[^-+\dA-Z]/g,function(e,t,a,r){if(1!==o.length||"string"!==p(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var n=(t=String(m.masks[t]||t||m.masks.default)).slice(0,4);"UTC:"!==n&&"GMT:"!==n||(t=t.slice(4),a=!0,"GMT:"===n&&(r=!0));var l=function(){return a?"getUTC":"get"},g=function(){return e[l()+"Date"]()},h=function(){return e[l()+"Day"]()},v=function(){return e[l()+"Month"]()},N=function(){return e[l()+"FullYear"]()},b=function(){return e[l()+"Hours"]()},E=function(){return e[l()+"Minutes"]()},M=function(){return e[l()+"Seconds"]()},T=function(){return e[l()+"Milliseconds"]()},_=function(){return a?0:e.getTimezoneOffset()},D=function(){return d(e)},k={d:function(){return g()},dd:function(){return c(g())},ddd:function(){return m.i18n.dayNames[h()]},DDD:function(){return f({y:N(),m:v(),d:g(),_:l(),dayName:m.i18n.dayNames[h()],short:!0})},dddd:function(){return m.i18n.dayNames[h()+7]},DDDD:function(){return f({y:N(),m:v(),d:g(),_:l(),dayName:m.i18n.dayNames[h()+7]})},m:function(){return v()+1},mm:function(){return c(v()+1)},mmm:function(){return m.i18n.monthNames[v()]},mmmm:function(){return m.i18n.monthNames[v()+12]},yy:function(){return String(N()).slice(2)},yyyy:function(){return c(N(),4)},h:function(){return b()%12||12},hh:function(){return c(b()%12||12)},H:function(){return b()},HH:function(){return c(b())},M:function(){return E()},MM:function(){return c(E())},s:function(){return M()},ss:function(){return c(M())},l:function(){return c(T(),3)},L:function(){return c(Math.floor(T()/10))},t:function(){return b()<12?m.i18n.timeNames[0]:m.i18n.timeNames[1]},tt:function(){return b()<12?m.i18n.timeNames[2]:m.i18n.timeNames[3]},T:function(){return b()<12?m.i18n.timeNames[4]:m.i18n.timeNames[5]},TT:function(){return b()<12?m.i18n.timeNames[6]:m.i18n.timeNames[7]},Z:function(){return r?"GMT":a?"UTC":(String(e).match(i)||[""]).pop().replace(u,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(_()>0?"-":"+")+c(100*Math.floor(Math.abs(_())/60)+Math.abs(_())%60,4)},p:function(){return(_()>0?"-":"+")+c(Math.floor(Math.abs(_())/60),2)+":"+c(Math.floor(Math.abs(_())%60),2)},S:function(){return["th","st","nd","rd"][g()%10>3?0:(g()%100-g()%10!=10)*g()%10]},W:function(){return D()},WW:function(){return c(D())},N:function(){return y(e)}};return t.replace(s,(function(e){return e in k?k[e]():e.slice(1,e.length-1)}))});m.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},m.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},f=function(e){var t=e.y,a=e.m,r=e.d,n=e._,l=e.dayName,s=e.short,i=void 0!==s&&s,u=new Date,o=new Date;o.setDate(o[n+"Date"]()-1);var m=new Date;m.setDate(m[n+"Date"]()+1);return u[n+"FullYear"]()===t&&u[n+"Month"]()===a&&u[n+"Date"]()===r?i?"Tdy":"Today":o[n+"FullYear"]()===t&&o[n+"Month"]()===a&&o[n+"Date"]()===r?i?"Ysd":"Yesterday":m[n+"FullYear"]()===t&&m[n+"Month"]()===a&&m[n+"Date"]()===r?i?"Tmw":"Tomorrow":l},d=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var r=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-r);var n=(t-a)/6048e5;return 1+Math.floor(n)},y=function(e){var t=e.getDay();return 0===t&&(t=7),t},p=function(e){return null===e?"null":void 0===e?"undefined":"object"!==n(e)?n(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return m}.call(t,a,t,e))||(e.exports=r)}(void 0)}}]);
//# sourceMappingURL=component---src-templates-author-js-8ea3a13ab256b04e109e.js.map