(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1188:function(A,t,e){"use strict";e.d(t,"a",(function(){return c}));var o=e(93),r=(e(30),e(31),e(71),e(97),"Reconstitution ฐานข้อมูลรัฐธรรมนูญไทยออนไลน์"),n=function(A,content){return A.map((function(A){return{hid:A,property:A,content:content}}))},c=function(A){var title=A.title,t=A.description,image=A.image,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=title?"".concat(title," - ").concat(r):r,meta=Object(o.a)(e);return meta.push.apply(meta,Object(o.a)(n(["title","og:title","twitter:title"],c))),t&&meta.push.apply(meta,Object(o.a)(n(["description","og:description","twitter:description"],t))),image&&meta.push.apply(meta,Object(o.a)(n(["og:image","twitter:image"],image))),{title:c,meta:meta}}},1189:function(A,t,e){var content=e(1192);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[A.i,content,""]]),content.locals&&(A.exports=content.locals);(0,e(35).default)("4a9781d6",content,!0,{sourceMap:!1})},1190:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAFVBAMAAABr/UoQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwDfIJ8w7xDPgHBXeso1AAACsklEQVR42u3avY2TQRhG0dGSEIJERAYZBZBMtC0gbQFbBTHNINBUCcYY/32SA0jwPU8H79WZbMYwM/v3e6gH+PjYvv/FemoHmOvrYxvAahOYPwOUCewApAnMXwG6BPYAwgTm7wBVAgcAWQLzT4AmgSOAKIF5EqBI4BRAksA8C9AjcA4gSGBeBKgRuASQIzCvArQIXAOIEZgbAUoEtgCs9aoNoCRgG8ATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw9gPXp9T3vNoA7320AnQBJAKsOYNUBrDqAVQew6gBWHcCqA1h1AKsOYNUBrDqAfYCXKx7g4W39CbyrBwgTGHUCo05g1AmMOoFRJzDqBEadwKgTGHUCo05g1AmMOoFxm8Cb9/e8cZvAt+fOD4ltAp87ARBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEELhbAl9Gm8D30P2bBEoAtgikAGwRaAG4JhADcE2gBuCSQA7AJYEegHMCQQDnBIoATgkkAZwSaAI4EogCOBKoAjgQyAI4EOgC2BMIA9gTKAPYEUgD2BFoAxjjwzAz+w/2A9/yK/oHV6gjAAAAAElFTkSuQmCC"},1191:function(A,t,e){"use strict";e(1189)},1192:function(A,t,e){var o=e(34)(!1);o.push([A.i,"#topic-page-bound[data-v-7b231717]{width:80%;max-width:1000px}#header-tab-arrow[data-v-7b231717]{margin-left:35px;position:absolute}#header-tab-arrow-img[data-v-7b231717]{width:31px}@media only screen and (max-width:768px){.topic-page-bound[data-v-7b231717]{width:96%;max-width:none}#header-tab-arrow[data-v-7b231717]{margin-left:10px}#header-tab-arrow-img[data-v-7b231717]{width:22px;margin-top:3px}}",""]),A.exports=o},1200:function(A,t,e){"use strict";e.r(t);var o=e(29),r=e(7),n=(e(49),e(16),e(33),e(38),e(32),e(0)),c=e(98),l=e(1188),d=n.default.extend({asyncData:function(A){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,n,l,d,B,E,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=A.params,r=e.category_id,n=e.topic_id,!(null==(l=A.payload)?void 0:l.topic)||!(null==l?void 0:l.category)){t.next=5;break}return t.abrupt("return",l);case 5:return t.next=7,Promise.all([Object(c.c)(n),Object(c.b)(r)]);case 7:return d=t.sent,B=Object(o.a)(d,2),E=B[0],m=B[1],t.abrupt("return",{topic:E,category:m});case 12:case"end":return t.stop()}}),t)})))()},data:function(){return{topic:null,category:null,currentPanel:0}},head:function(){var A=this.topic,t=A.name,e=A.og_image;return Object(l.a)({title:t,image:e})}}),B=(e(1191),e(1)),component=Object(B.a)(d,(function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("div",[o("div",{staticClass:"flex flex-row bg-black text-white py-2 md:py-4",style:{backgroundColor:A.category.color}},[o("div",{staticClass:"absolute pl-4"},[o("NuxtLink",{staticClass:"curser-pointer float-left",attrs:{to:"/categories/"+A.category.category_id}},[o("img",{attrs:{id:"header-tab-arrow-img",src:e(1190)}})])],1),A._v(" "),o("div",{staticClass:"flex justify-center w-full"},[o("Heading3",{staticClass:"text-center font-black"},[A._v("\n        "+A._s(A.topic.category_name)+"\n      ")])],1)]),A._v(" "),o("div",{staticClass:"px-4 max-w-5xl mx-auto"},[o("div",{staticClass:"flex flex-row bg-white text-black justify-center pt-8 md:pt-20"},[o("Heading1",{staticClass:"text-center font-black"},[A._v("\n        "+A._s(A.topic.name)+"\n      ")])],1),A._v(" "),o("TopicPanel",{staticClass:"pt-8 md:pt-12",attrs:{"bg-color":A.category.color,opinions:A.topic.opinions,"current-panel":A.currentPanel},on:{change:function(t){return A.currentPanel=t}}}),A._v(" "),0===A.currentPanel?o("TopicSummary",{attrs:{summary:A.topic.summary}}):1===A.currentPanel?o("TopicComparison",{attrs:{versions:A.topic.constitutions,"bg-color":A.category.color}}):o("TopicOpinions",{attrs:{opinions:A.topic.opinions}}),A._v(" "),o("div",{staticClass:"flex justify-center my-6 md:my-12"},[o("social-sharer")],1),A._v(" "),o("hr",{staticClass:"border-0 h-px my-1 outline-none",staticStyle:{"background-color":"#929191"}}),A._v(" "),o("TopicRelatedPanel",{staticClass:"mx-auto",staticStyle:{width:"90%",height:"auto"},attrs:{"category-id":A.topic.category_id,"subcategory-id":A.topic.subcategory_id,subcategories:A.category.sub_categories}})],1)])}),[],!1,null,"7b231717",null);t.default=component.exports;installComponents(component,{Heading3:e(131).default,Heading1:e(194).default,TopicPanel:e(218).default,TopicSummary:e(220).default,TopicComparison:e(216).default,TopicOpinions:e(217).default,TopicRelatedPanel:e(219).default})}}]);