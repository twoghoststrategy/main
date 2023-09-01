"use strict";(self.webpackChunkgatsby_starter_ghost=self.webpackChunkgatsby_starter_ghost||[]).push([[744],{8003:function(e,t,n){var r;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}!function(m){var o,i,u,l=arguments,s=(o=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,u=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==l.length||"string"!==g(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(s.masks[t]||t||s.masks.default)).slice(0,4);"UTC:"!==a&&"GMT:"!==a||(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var m=function(){return n?"getUTC":"get"},h=function(){return e[m()+"Date"]()},p=function(){return e[m()+"Day"]()},v=function(){return e[m()+"Month"]()},M=function(){return e[m()+"FullYear"]()},N=function(){return e[m()+"Hours"]()},D=function(){return e[m()+"Minutes"]()},T=function(){return e[m()+"Seconds"]()},E=function(){return e[m()+"Milliseconds"]()},_=function(){return n?0:e.getTimezoneOffset()},b=function(){return f(e)},C={d:function(){return h()},dd:function(){return c(h())},ddd:function(){return s.i18n.dayNames[p()]},DDD:function(){return d({y:M(),m:v(),d:h(),_:m(),dayName:s.i18n.dayNames[p()],short:!0})},dddd:function(){return s.i18n.dayNames[p()+7]},DDDD:function(){return d({y:M(),m:v(),d:h(),_:m(),dayName:s.i18n.dayNames[p()+7]})},m:function(){return v()+1},mm:function(){return c(v()+1)},mmm:function(){return s.i18n.monthNames[v()]},mmmm:function(){return s.i18n.monthNames[v()+12]},yy:function(){return String(M()).slice(2)},yyyy:function(){return c(M(),4)},h:function(){return N()%12||12},hh:function(){return c(N()%12||12)},H:function(){return N()},HH:function(){return c(N())},M:function(){return D()},MM:function(){return c(D())},s:function(){return T()},ss:function(){return c(T())},l:function(){return c(E(),3)},L:function(){return c(Math.floor(E()/10))},t:function(){return N()<12?s.i18n.timeNames[0]:s.i18n.timeNames[1]},tt:function(){return N()<12?s.i18n.timeNames[2]:s.i18n.timeNames[3]},T:function(){return N()<12?s.i18n.timeNames[4]:s.i18n.timeNames[5]},TT:function(){return N()<12?s.i18n.timeNames[6]:s.i18n.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(e).match(i)||[""]).pop().replace(u,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(_()>0?"-":"+")+c(100*Math.floor(Math.abs(_())/60)+Math.abs(_())%60,4)},p:function(){return(_()>0?"-":"+")+c(Math.floor(Math.abs(_())/60),2)+":"+c(Math.floor(Math.abs(_())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return b()},WW:function(){return c(b())},N:function(){return y(e)}};return t.replace(o,(function(e){return e in C?C[e]():e.slice(1,e.length-1)}))});s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},d=function(e){var t=e.y,n=e.m,r=e.d,a=e._,m=e.dayName,o=e.short,i=void 0!==o&&o,u=new Date,l=new Date;l.setDate(l[a+"Date"]()-1);var s=new Date;s.setDate(s[a+"Date"]()+1);return u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?i?"Tdy":"Today":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?i?"Ysd":"Yesterday":s[a+"FullYear"]()===t&&s[a+"Month"]()===n&&s[a+"Date"]()===r?i?"Tmw":"Tomorrow":m},f=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},y=function(e){var t=e.getDay();return 0===t&&(t=7),t},g=function(e){return null===e?"null":void 0===e?"undefined":"object"!==a(e)?a(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}(void 0)},8011:function(e,t,n){n.d(t,{tl:function(){return s},y4:function(){return l}});n(2494);var r=n(7294),a=n(5444),m=n(9142),o=n(2377),i=n(8003),u=n.n(i);var l=e=>{let{post:t}=e;const n="/"+t.slug+"/",i=(0,o.readingTime)(t),l=u()(t.created_at,"mmmm dS");t.feature_image;return r.createElement(r.Fragment,null,r.createElement("article",{className:"Card"},r.createElement("div",{className:"Card__Image Card__Image_blue"},t.feature_image&&r.createElement(a.Link,{to:n},r.createElement("img",{src:t.feature_image,alt:t.title}))),r.createElement("div",{className:"Card__Content"},r.createElement("div",{className:"Card__Header"},r.createElement("span",{className:"Card__Tag"},"          ",r.createElement(m.$,{post:t,visibility:"public",autolink:!0})),r.createElement("span",{className:"Card__Date"},l,"            ")),r.createElement("div",{className:"Card__Body"},r.createElement("span",{className:"Card__Title"},t.title),r.createElement("div",{className:"Card_Description"},r.createElement("p",null,t.excerpt))),r.createElement("div",{className:"Card__Footer"},r.createElement("div",{className:"Card__Footer-Author"},r.createElement("div",{className:"Author-Img"}),r.createElement("div",{className:"Author-Name"},i)),r.createElement("div",{className:"Card__Footer-Link"},r.createElement("a",{nofollow:!0,noreferrer:!0,href:"{url}"},"Read more 🡢"))))))};var s=e=>{let{pageContext:t}=e;const{previousPagePath:n,nextPagePath:m,humanPageNumber:o,numberOfPages:i}=t;return r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("div",null,n&&r.createElement(a.Link,{to:n,rel:"prev"},"Previous")),i>1&&r.createElement("div",{className:"pagination-location"},"Page ",o," of ",i),r.createElement("div",null,m&&r.createElement(a.Link,{to:m,rel:"next"},"Next")))};const c=e=>{let{data:t,navClass:n}=e;return r.createElement(r.Fragment,null,t.map(((e,t)=>e.url.match(/^\s?http(s?)/gi)?r.createElement("a",{className:n,href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},e.label):r.createElement(a.Link,{className:n,to:e.url,key:t},e.label))))};c.defaultProps={navClass:"site-nav-item"}},8770:function(e,t,n){n.r(t);var r=n(7294),a=n(2494),m=n(8011),o=n(1224),i=n(1431);t.default=e=>{let{data:t,location:n,pageContext:u}=e;const l=t.allGhostPost.edges;return r.createElement(r.Fragment,null,r.createElement(i.U,{location:n}),r.createElement(a.Z,{isHome:!0},r.createElement("div",{className:"flex flex-wrap w-full -mx-6 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6"},l.map((e=>{let{node:t,index:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex-none w-full px-6 my-6 overflow-hidden sm:my-6 sm:px-6 sm:w-full md:my-6 md:px-6 md:w-full lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3"},r.createElement(o.Z,{key:t.id,index:n+1,post:t})))}))),r.createElement(m.tl,{pageContext:u})))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-7d8123bcfec4bb754fba.js.map