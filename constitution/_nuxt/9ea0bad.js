(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1161:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(493),l=n.n(r);n(494);o.default.component("Multiselect",l.a);var c=o.default.extend({components:{Multiselect:l.a},props:{versions:Array,isLeft:{type:Boolean,default:!1}},data:function(){return{version:null}},methods:{selectVersion:function(t){this.$emit("select-version",t)}}}),d=n(3),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comparison-select"},[n("multiselect",{staticClass:"text-black shadow-none outline-none",style:t.isLeft?"margin-left: auto; margin-right: 0;":"margin-left: 0; margin-right: auto;",attrs:{placeholder:"เลือกฉบับรัฐธรรมนูญ","track-by":"name",label:"name",options:t.versions,searchable:!1,"allow-empty":!1,"select-label":"","deselect-label":""},on:{select:t.selectVersion},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)}),[],!1,null,"9e16c63e",null);e.default=component.exports},1171:function(t,e,n){"use strict";n.r(e);n(42),n(17),n(43),n(57);var o=n(51),r=(n(28),n(5)),l=n(1),c=n(348),d=n(349),A=n(350),f=n(351),m=n(352),h=n(267),x=n(113),v=n(276),y=l.default.extend({components:{TopicPanel:c.default,TopicSummary:d.default,TopicComparison:A.default,TopicOpinions:f.default,SocialSharer:h.default,TopicRelatedPanel:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d,A,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=n.category_id,l=n.topic_id,!(null==(c=t.payload)?void 0:c.topic)||!(null==c?void 0:c.category)){e.next=5;break}return e.abrupt("return",c);case 5:return e.next=7,Promise.all([Object(x.c)(l),Object(x.b)(r)]);case 7:return d=e.sent,A=Object(o.a)(d,2),f=A[0],m=A[1],e.abrupt("return",{topic:f,category:m});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{topic:null,category:null}},head:function(){var t=this.topic,e=t.name,n=t.og_image;return Object(v.a)({title:e,image:n})},mounted:function(){this.onClickPanel(0)},methods:{onClickPanel:function(t){var summary=document.getElementById("topic-summary");summary&&(summary.style.display=0===t?"flex":"none");var e=document.getElementById("topic-comparison");e&&(e.style.display=1===t?"flex":"none");var n=document.getElementById("topic-opinions");n&&(n.style.display=2===t?"flex":"none")}}}),L=(n(499),n(3)),component=Object(L.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex flex-row bg-black text-white",style:{backgroundColor:t.category.color},attrs:{id:"header-tab"}},[o("div",{attrs:{id:"header-tab-arrow"}},[o("NuxtLink",{staticClass:"curser-pointer float-left",attrs:{to:"/categories/"+t.category.category_id}},[o("img",{attrs:{id:"header-tab-arrow-img",src:n(356)}})])],1),t._v(" "),o("div",{staticClass:"flex justify-center",attrs:{id:"header-tab-text"}},[o("Heading3",{staticClass:"text-center font-black"},[t._v("\n        "+t._s(t.topic.category_name)+"\n      ")])],1)]),t._v(" "),o("div",{staticClass:"topic-page-bound"},[o("div",{staticClass:"flex flex-row bg-white text-black justify-center",attrs:{id:"title"}},[o("Heading1",{staticClass:"text-center font-black"},[t._v("\n        "+t._s(t.topic.name)+"\n      ")])],1),t._v(" "),o("TopicPanel",{attrs:{id:"topic-panel","bg-color":t.category.color,opinions:t.topic.opinions},on:{clicked:t.onClickPanel}}),t._v(" "),o("TopicSummary",{attrs:{id:"topic-summary",summary:t.topic.summary}}),t._v(" "),o("TopicComparison",{staticStyle:{display:"none"},attrs:{id:"topic-comparison",versions:t.topic.constitutions,"bg-color":t.category.color}}),t._v(" "),o("TopicOpinions",{staticStyle:{display:"none"},attrs:{id:"topic-opinions",opinions:t.topic.opinions}}),t._v(" "),o("SocialSharer",{attrs:{id:"social-sharer"}}),t._v(" "),o("hr",{attrs:{id:"hr-end"}}),t._v(" "),o("TopicRelatedPanel",{staticClass:"mx-auto",staticStyle:{width:"90%",height:"auto"},attrs:{"category-id":t.topic.category_id,"subcategory-id":t.topic.subcategory_id,subcategories:t.category.sub_categories}})],1)])}),[],!1,null,"39acfe33",null);e.default=component.exports;installComponents(component,{Heading3:n(297).default,Heading1:n(286).default,TopicPanel:n(348).default,TopicSummary:n(349).default,TopicComparison:n(350).default,TopicOpinions:n(351).default,SocialSharer:n(267).default,TopicRelatedPanel:n(352).default})},267:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{isDark:{type:Boolean,default:!1}},data:function(){return{socialLinks:[]}},mounted:function(){var t=encodeURI(window.location.href);this.socialLinks=[{service:"Facebook",icon:n(268),href:"http://www.facebook.com/sharer/sharer.php?u=".concat(t)},{service:"Twitter",icon:n(269),href:"https://twitter.com/intent/tweet?url=".concat(t)},{service:"Line",icon:n(270),href:"https://social-plugins.line.me/lineit/share?url=".concat(t)}]}}),r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row h-10 p-1 justify-center space-x-4"},[n("Label1",{class:"my-auto "+(t.isDark?"text-white":"text-black")},[t._v("Share")]),t._v(" "),n("div",{staticClass:"flex flex-row"},t._l(t.socialLinks,(function(e){var o=e.service,r=e.icon,l=e.href;return n("a",{key:o,attrs:{href:l,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"h-full",style:t.isDark?{}:{filter:"brightness(0)"},attrs:{src:r,alt:o}})])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Label1:n(170).default})},268:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTUuMyAxMi4yaC0yYy0uOSAwLTEuNC41LTEuNSAxLjN2Mi4xYzAgLjMuMS4yLjMuMmgzYy4zIDAgLjQuMS40LjQtLjEgMS4yLS4yIDIuMy0uMyAzLjUgMCAuMy0uMS4zLS40LjNoLTIuNGMtLjYgMC0uNS0uMS0uNS41djExYzAgLjQtLjEuNS0uNS41aC00LjFjLS40IDAtLjQtLjEtLjQtLjV2LTExLjFjMC0uMy0uMS0uNC0uNC0uNGgtMS44Yy0uMiAwLS4zLS4xLS4zLS4zdi0zLjVjMC0uMi4xLS4zLjMtLjNoMS44Yy4zIDAgLjQtLjEuNC0uNHYtMi43YzAtMS4xLjMtMi4xIDEtMyAuOC0xLjEgMi0xLjYgMy4zLTEuNyAxLjQtLjEgMi44IDAgNC4xIDAgLjIgMCAuMi4xLjIuM3YzLjVjLjEuMiAwIC4zLS4yLjN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},269:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIC45NjhjLTExIDAtMjAgOS0yMCAyMHM5IDIwIDIwIDIwIDIwLTkgMjAtMjAtOS0yMC0yMC0yMHptOS42IDE1LjF2LjZjMCA2LjUtNSAxNC4xLTE0LjEgMTQuMS0yLjggMC01LjQtLjgtNy42LTIuMi40IDAgLjguMSAxLjIuMSAyLjMgMCA0LjQtLjggNi4xLTIuMS0yLjIgMC00LTEuNS00LjYtMy40LjMuMS42LjEuOS4xLjUgMCAuOS0uMSAxLjMtLjItMi4zLS41LTQtMi41LTQtNC44di0uMWMuNy40IDEuNC42IDIuMi42LTEuMi0xLTItMi41LTItNC4yIDAtLjkuMi0xLjguNy0yLjUgMi40IDMgNi4xIDUgMTAuMiA1LjItLjEtLjQtLjEtLjctLjEtMS4xIDAtMi43IDIuMi00LjkgNC45LTQuOSAxLjQgMCAyLjcuNiAzLjYgMS42IDEuMS0uMiAyLjItLjYgMy4xLTEuMi0uNCAxLjItMS4yIDIuMS0yLjIgMi43IDEtLjEgMi0uNCAyLjgtLjgtLjYuOS0xLjUgMS44LTIuNCAyLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},270:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3IDE2LjI2OGMtLjMgMC0uNi4zLS42LjZ2NC41YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di00LjVjMC0uMy0uMy0uNi0uNi0uNnptNS4zIDBjLS4zIDAtLjYuMy0uNi42djIuN2wtMi4xLTIuOWMtLjEtLjItLjQtLjMtLjctLjItLjIuMS0uNC4zLS40LjZ2NC40YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di0yLjZsMi4xIDIuOWMuMS4yLjMuMi41LjJoLjJjLjItLjEuNC0uMy40LS42di00LjVjLS4xLS4zLS4zLS42LS42LS42em0tNyA0LjVoLTEuNnYtMy45YzAtLjMtLjMtLjYtLjYtLjZzLS42LjMtLjYuNnY0LjVjMCAuMy4zLjYuNi42aDIuMWMuMyAwIC42LS4zLjYtLjZzLS4xLS42LS41LS42em0xMS44LS4xaC0yLjN2LTEuMWgxLjhjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMS44di0xLjFIMjdjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMi44Yy0uMyAwLS42LjMtLjYuNnY0LjRjMCAuMy4zLjYuNi42aDIuOWMuMyAwIC42LS4zLjYtLjZzLS4zLS40LS42LS40eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTEwLjMgMjQuM2MtMS42IDItOC42IDYuNy0xMC4yIDcuNy0uNy40LTEuNS0uMS0xLjUtLjl2LTIuNGMtMy45LS4yLTEwLjktMy42LTEwLjktMTAuNCAwLTcgNy0xMC40IDEyLjQtMTAuNCA1LjggMCAxMi40IDMuOCAxMi40IDEwLjQtLjEgMS44LS42IDQtMi4yIDZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},271:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"font-subtitle leading-1.5 text-14 md:text-16 lg:text-18"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{withIndent:{type:Boolean,default:!1}}}),r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"font-body leading-1.6 text-15 md:text-16 lg:text-17",style:{textIndent:this.withIndent?"3em":"none"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(277),n(280),n(68),n(26);var o=n(114),r="Reconstitution ฐานข้อมูลรัฐธรรมนูญไทยออนไลน์",l=function(t,content){return t.map((function(t){return{hid:t,property:t,content:content}}))},c=function(t){var title=t.title,e=t.description,image=t.image,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=title?"".concat(title," - ").concat(r):r,meta=Object(o.a)(n);return meta.push.apply(meta,Object(o.a)(l(["title","og:title","twitter:title"],c))),e&&meta.push.apply(meta,Object(o.a)(l(["description","og:description","twitter:description"],e))),image&&meta.push.apply(meta,Object(o.a)(l(["og:image","twitter:image"],image))),{title:c,meta:meta}}},281:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7f0d7596",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"font-heading leading-1.2 text-24 md:text-36 lg:text-48"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h3",{staticClass:"font-heading leading-1.2 text-18 md:text-21 lg:text-24"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n(281)},299:function(t,e,n){(e=n(38)(!1)).push([t.i,".swiper-slide[data-v-62b4ac9b]{width:auto}",""]),t.exports=e},311:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(314),l=(n(315),o.default.extend({components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},props:{categoryId:{type:String,required:!0},topics:{type:Array,required:!0}},data:function(){return{swiperOptions:{slidesPerView:"auto",spaceBetween:5}}},computed:{swiper:function(){return this.$refs.swiper.$swiper}}})),c=(n(298),n(3)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row h-32 md:h-56"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slidePrev()}}},[n("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"15 18 9 12 15 6"}})])])]),t._v(" "),n("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},t._l(t.topics,(function(e){var o=e.id,r=e.name,l=e.thumbnail_image;return n("swiper-slide",{key:o},[n("NuxtLink",{attrs:{to:"/categories/"+t.categoryId+"/topics/"+o}},[n("img",{staticClass:"h-full cursor-pointer",attrs:{src:l,alt:r}})])],1)})),1),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slideNext()}}},[n("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"9 18 15 12 9 6"}})])])])],1)}),[],!1,null,"62b4ac9b",null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"font-heading leading-1.2 text-21 md:text-24 lg:text-36"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3a567d97",content,!0,{sourceMap:!1})},340:function(t,e,n){var content=n(486);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("8518c398",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5a05dd2a",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("6e005878",content,!0,{sourceMap:!1})},343:function(t,e,n){var content=n(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("37bb018a",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("079b98e7",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{bgColor:{type:String,default:""},opinions:{type:Array}},data:function(){return{current_panel:0}},computed:{sections:function(){return 0===this.opinions.length?["สรุป","เปรียบเทียบ"]:["สรุป","เปรียบเทียบ","ข้อคิดเห็น"]}},methods:{clickPanel:function(t){this.current_panel=t,this.$emit("clicked",t)}}}),r=(n(357),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-box bg-white justify-center h-10",attrs:{id:"panel-container"}},t._l(t.sections,(function(e,o){return n("div",{key:o,staticClass:"h-full w-full ml-1"},[n("button",{staticClass:"flex justify-center w-full border-none",staticStyle:{height:"calc(100% - 5px)",outline:"none"},on:{click:function(e){return t.clickPanel(o)}}},[n("Label1",[t._v("\n          "+t._s(e)+"\n        ")])],1),t._v(" "),n("button",{staticClass:"panel-button-border",style:o===t.current_panel?{borderColor:t.bgColor,opacity:1}:{borderColor:t.bgColor,opacity:.2},on:{click:function(e){return t.clickPanel(o)}}})])})),0)])}),[],!1,null,"3d469a9c",null);e.default=component.exports;installComponents(component,{Label1:n(170).default})},349:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(353),l=o.default.extend({components:{TopicSummaryTable:r.default},props:{summary:String},computed:{summary_table:function(){return this.summary}}}),c=(n(487),n(3)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col justify-center w-full"},[e("div",{staticClass:"flex flex-row bg-white text-black justify-center mx-auto"},[e("div",{staticClass:"justify-center w-full px-3 md:px-6"},[e("TopicSummaryTable",{staticClass:"mt-16 md:mt-20 w-full",attrs:{table:this.summary_table}})],1)])])}),[],!1,null,"1ca97aae",null);e.default=component.exports;installComponents(component,{TopicSummaryTable:n(353).default})},350:function(t,e,n){"use strict";n.r(e);n(75),n(76);var o=n(1),r=n(354),l=o.default.extend({components:{TopicComparisonSide:r.default},props:{bgColor:{type:String,default:""},versions:{type:Array,default:function(){return[]}}},mounted:function(){var t=this.bgColor;document.querySelectorAll(".multiselect__tags").forEach((function(e){e.style.borderColor=t}))}}),c=n(3),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-row justify-center align-center w-full pt-10 md:pt-24",attrs:{id:"comparison-container"}},[e("TopicComparisonSide",{staticClass:"w-1/2 md:w-5/12",staticStyle:{"min-width":"140px"},attrs:{versions:this.versions,"is-left":""}}),this._v(" "),e("span",{staticClass:"flex text-white justify-center text-center rounded-full hidden md:flex w-12 h-12 mx-12",style:{backgroundColor:this.bgColor},attrs:{id:"vs-icon"}},[e("Label1",{staticClass:"text-center text-justify m-auto"},[this._v(" vs. ")])],1),this._v(" "),e("span",{staticClass:"flex md:hidden w-3",attrs:{id:"vs-padding"}}),this._v(" "),e("TopicComparisonSide",{staticClass:"w-1/2 md:w-5/12",staticStyle:{"min-width":"140px"},attrs:{versions:this.versions}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopicComparisonSide:n(354).default,Label1:n(170).default})},351:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{opinions:Array}}),r=(n(496),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col pb-4 md:pb-8"},t._l(t.opinions,(function(e,o){return n("div",{key:o,staticClass:"flex bg-white justify-center"},[n("div",{staticClass:"mx-auto pt-12 md:pt-32 pb-0 md:pb-16",staticStyle:{width:"100%","max-width":"750px"}},[n("div",{staticClass:"flex flex-row w-full",style:o%2==0?"":"margin-right: 0; margin-left: auto;"},[o%2==0?n("img",{staticClass:"rounded-full w-16 md:w-20 h-16 md:h-20",attrs:{src:e.speaker_image}}):t._e(),t._v(" "),n("div",{class:{"opinion-credentials-left":o%2==0,"opinion-credentials-right":o%2==1}},[n("Heading2",{staticClass:"font-semibold",staticStyle:{"padding-top":"8px"}},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]),t._v(" "),n("Subtitle2",[t._v("\n            "+t._s(e.speaker_position)+"\n          ")])],1),t._v(" "),o%2==1?n("img",{staticClass:"rounded-full w-16 md:w-20 h-16 md:h-20",attrs:{src:e.speaker_image}}):t._e()]),t._v(" "),n("Paragraph1",{staticClass:"text-center w-full mt-5 md:mt-20"},[t._v("\n        "+t._s(e.content)+"\n      ")])],1)])})),0)}),[],!1,null,"245c164f",null);e.default=component.exports;installComponents(component,{Heading2:n(313).default,Subtitle2:n(271).default,Paragraph1:n(275).default})},352:function(t,e,n){"use strict";n.r(e);n(498);var o=n(1).default.extend({props:{categoryId:{type:String,required:!0},subcategories:{type:Array,required:!0},subcategoryId:{type:String,required:!0}},computed:{related_topics:function(){var t=this,e=this.subcategories.find((function(e){return e.sub_category_id===t.subcategoryId}));return null==e?void 0:e.topics}}}),r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.related_topics?e("div",[e("Heading7",{staticClass:"text-center font-black my-12"},[this._v(" RELATED TOPICS ")]),this._v(" "),e("TopicsCarousal",{staticClass:"flex max-w-5xl mx-auto w-full mb-10 md:mb-24",attrs:{"category-id":this.categoryId,topics:this.related_topics}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading7:n(180).default,TopicsCarousal:n(311).default})},353:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(359),l=n.n(r),c=o.default.extend({components:{"vue-markdown":l.a},props:{table:String}}),d=(n(485),n(3)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-row w-full mx-auto justify-center",attrs:{id:"table-container"}},[e("vue-markdown",{attrs:{id:"table-md"}},[this._v(this._s(this.table))])],1)])}),[],!1,null,"6bdb540c",null);e.default=component.exports},354:function(t,e,n){"use strict";n.r(e);n(58),n(75),n(44),n(77),n(76);var o=n(1),r=(n(489),o.default.extend({props:{versions:Array,isLeft:{type:Boolean,default:!1}},data:function(){return{version:null,sections:null,amendments:null}},methods:{selectVersion:function(t){this.sections=t.sections,t.sections.forEach((function(section){section.content=section.content.replace("\\n","<br/>"),section.content=section.content.replace("\n","<br/>"),section.footer_id="<b>มาตรา</b> "+section.id,section.footer_part=null,section.partId&&(section.footer_part="<b>ส่วน</b> "+section.partId+" "+section.partName),section.footer_chapter=null,section.chapterId&&(section.footer_chapter="<b>หมวด</b> "+section.chapterId+" "+section.chapterName),section.footer="<b>มาตรา</b> "+section.id,section.partId&&(section.footer+=" <b>ส่วน</b> "+section.partId+" "+section.partName),section.chapterId&&(section.footer+=" <b>หมวด</b> "+section.chapterId+" "+section.chapterName),section.amendments=[],section.amendmentIds.forEach((function(e){var n=t.amendments.filter((function(a){return a.id===e}))[0];n.header="<b>"+n.affectedBy+"</b>",section.amendments.push(n)}))}))}}})),l=(n(491),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"justify-center text-center align-center w-full"},[n("TopicComparisonSelect",{attrs:{versions:t.versions,"is-left":t.isLeft},on:{"select-version":t.selectVersion}}),t._v(" "),t._l(t.sections,(function(section,e){return n("div",{key:e},[n("div",{staticClass:"flex flex-col text-left",class:{"section-l":t.isLeft,"section-r":!t.isLeft}},[n("div",{staticClass:"hidden md:flex justify-end w-full"},[n("Label1",{staticClass:"text-left w-full",domProps:{innerHTML:t._s(section.footer)}})],1),t._v(" "),n("div",{staticClass:"flex md:hidden flex-col justify-end w-full"},[n("Label1",{staticClass:"text-left w-full",domProps:{innerHTML:t._s(section.footer_id)}}),t._v(" "),n("Label1",{staticClass:"text-left w-full",domProps:{innerHTML:t._s(section.footer_part)}}),t._v(" "),n("Label1",{staticClass:"text-left w-full",domProps:{innerHTML:t._s(section.footer_chapter)}})],1),t._v(" "),n("Paragraph1",{staticClass:"pt-4 md:pt-8",domProps:{innerHTML:t._s(section.content)}})],1)])}))],2)}),[],!1,null,"f9ea5130",null);e.default=component.exports;installComponents(component,{TopicComparisonSelect:n(1161).default,Label1:n(170).default,Paragraph1:n(275).default})},356:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAFVBAMAAABr/UoQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwDfIJ8w7xDPgHBXeso1AAACsklEQVR42u3avY2TQRhG0dGSEIJERAYZBZBMtC0gbQFbBTHNINBUCcYY/32SA0jwPU8H79WZbMYwM/v3e6gH+PjYvv/FemoHmOvrYxvAahOYPwOUCewApAnMXwG6BPYAwgTm7wBVAgcAWQLzT4AmgSOAKIF5EqBI4BRAksA8C9AjcA4gSGBeBKgRuASQIzCvArQIXAOIEZgbAUoEtgCs9aoNoCRgG8ATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw9gPXp9T3vNoA7320AnQBJAKsOYNUBrDqAVQew6gBWHcCqA1h1AKsOYNUBrDqAfYCXKx7g4W39CbyrBwgTGHUCo05g1AmMOoFRJzDqBEadwKgTGHUCo05g1AmMOoFxm8Cb9/e8cZvAt+fOD4ltAp87ARBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEELhbAl9Gm8D30P2bBEoAtgikAGwRaAG4JhADcE2gBuCSQA7AJYEegHMCQQDnBIoATgkkAZwSaAI4EogCOBKoAjgQyAI4EOgC2BMIA9gTKAPYEUgD2BFoAxjjwzAz+w/2A9/yK/oHV6gjAAAAAElFTkSuQmCC"},357:function(t,e,n){"use strict";n(316)},358:function(t,e,n){(e=n(38)(!1)).push([t.i,".panel-button-border[data-v-3d469a9c]{display:flex;justify-content:center;height:0;border-bottom:5px solid;width:100%;outline:none;transition:opacity .1s ease-in-out}",""]),t.exports=e},485:function(t,e,n){"use strict";n(340)},486:function(t,e,n){(e=n(38)(!1)).push([t.i,"div[data-v-6bdb540c] td{padding-top:15px;padding-bottom:15px;vertical-align:text-top}div[data-v-6bdb540c] tr:not(:last-child){border-bottom:1px solid #cecece}div[data-v-6bdb540c]{text-align:center}div[data-v-6bdb540c] table{width:100%;margin-top:68px;margin-bottom:16px}div[data-v-6bdb540c] tr{text-align:left}div[data-v-6bdb540c] td{line-height:160%}@media only screen and (max-width:768px){div[data-v-6bdb540c] table{margin-top:27px;margin-bottom:26px}}",""]),t.exports=e},487:function(t,e,n){"use strict";n(341)},488:function(t,e,n){(e=n(38)(!1)).push([t.i,'div[data-v-1ca97aae] h1,h2[data-v-1ca97aae],h3[data-v-1ca97aae],h4[data-v-1ca97aae],h5[data-v-1ca97aae],h6[data-v-1ca97aae]{padding-left:120px;padding-right:120px}div[data-v-1ca97aae] h1,h2[data-v-1ca97aae]{font-family:Kondolar Thai,Georgia,Cambria,"Times New Roman",Times,serif;line-height:120%;font-size:48px;font-weight:400}div[data-v-1ca97aae] h1{font-weight:900}div[data-v-1ca97aae] h3,h4[data-v-1ca97aae]{font-family:Kondolar Thai,Georgia,Cambria,"Times New Roman",Times,serif;line-height:120%;font-size:36px;font-weight:400}div[data-v-1ca97aae] h3{font-weight:900}div[data-v-1ca97aae] h5,h6[data-v-1ca97aae]{font-family:Anuphan,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:150%;font-size:24px;font-weight:400}div[data-v-1ca97aae] h5{font-weight:600}div[data-v-1ca97aae] p{padding:0 12%;font-family:Bai Jamjuri,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:160%;font-size:17px;font-weight:400}div[data-v-1ca97aae] p.thick{font-weight:700}@media only screen and (max-width:768px){div[data-v-1ca97aae] h1,h2[data-v-1ca97aae]{font-size:36px}div[data-v-1ca97aae] h3,h4[data-v-1ca97aae]{font-size:24px}div[data-v-1ca97aae] h5,h6[data-v-1ca97aae]{font-size:21px}div[data-v-1ca97aae] p{padding:0 8px;font-size:16px}}@media only screen and (max-width:640px){div[data-v-1ca97aae] h1,h2[data-v-1ca97aae],h3[data-v-1ca97aae],h4[data-v-1ca97aae],h5[data-v-1ca97aae],h6[data-v-1ca97aae],p[data-v-1ca97aae]{margin-left:7px;margin-right:7px}div[data-v-1ca97aae] h1,h2[data-v-1ca97aae]{font-size:24px}div[data-v-1ca97aae] h3,h4[data-v-1ca97aae]{font-size:21px}div[data-v-1ca97aae] h5,h6[data-v-1ca97aae]{font-size:18px}div[data-v-1ca97aae] p{padding:0 8px;font-size:14px}}',""]),t.exports=e},491:function(t,e,n){"use strict";n(342)},492:function(t,e,n){(e=n(38)(!1)).push([t.i,".section-l[data-v-f9ea5130],.section-r[data-v-f9ea5130]{margin-top:64px}.section-l[data-v-f9ea5130]{padding-left:10%;padding-right:12px}.section-r[data-v-f9ea5130]{padding-left:12px;padding-right:10%}@media only screen and (max-width:768px){.section-l[data-v-f9ea5130],.section-r[data-v-f9ea5130]{margin-top:17px}.section-l[data-v-f9ea5130]{padding-left:9%;padding-right:0}.section-r[data-v-f9ea5130]{padding-left:0;padding-right:9%}.section-label-mobile[data-v-f9ea5130]{margin-top:15px;margin-bottom:23px}}",""]),t.exports=e},494:function(t,e,n){var content=n(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7d1e2dfe",content,!0,{sourceMap:!1})},495:function(t,e,n){(e=n(38)(!1)).push([t.i,".multiselect,.multiselect__input,.multiselect__single{font-size:14px}.multiselect{width:calc(90% - 12px)}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input:hover,.multiselect__single:hover{border-color:#fff}.multiselect__input:focus,.multiselect__single:focus{border-color:#fff;outline:none}.multiselect__tag{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.multiselect__tags{width:100%;border:1px solid #000}.multiselect__current{overflow:hidden;white-space:nowrap;padding:8px 30px 0 12px}.multiselect__select{padding:0}.multiselect__select:before{color:#000;border-color:#000 transparent transparent}.multiselect__placeholder{color:#000;display:inline-block}.multiselect__content-wrapper{overflow:auto;-webkit-overflow-scrolling:touch;word-wrap:break-word}.multiselect__content::webkit-scrollbar{display:none}.multiselect__content{word-wrap:break-word}.multiselect__option{line-height:120%;word-wrap:break-word;white-space:normal}.multiselect__option--highlight{background:#000}.multiselect__option--selected:after{color:#fff}.multiselect__option--selected.multiselect__option--highlight,.multiselect__option--selected.multiselect__option--highlight:after{background:#000;color:#fff}.multiselect__option--group{background:#ededed;color:#000}.multiselect__option--group.multiselect__option--highlight{background:#000;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#000}@media only screen and (max-width:768px){.multiselect{width:90%}}",""]),t.exports=e},496:function(t,e,n){"use strict";n(343)},497:function(t,e,n){(e=n(38)(!1)).push([t.i,".opinion-credentials-left[data-v-245c164f]{flex-direction:column;margin-left:30px;text-align:left}.opinion-credentials-right[data-v-245c164f]{flex-direction:column;margin-right:30px;text-align:right}@media only screen and (max-width:768px){.opinion-credentials-left[data-v-245c164f]{margin-left:15px}.opinion-credentials-right[data-v-245c164f]{margin-right:15px}}",""]),t.exports=e},499:function(t,e,n){"use strict";n(344)},500:function(t,e,n){(e=n(38)(!1)).push([t.i,"#header-tab[data-v-39acfe33]{padding-top:16px;padding-bottom:15px}.topic-page-bound[data-v-39acfe33]{margin-left:auto;margin-right:auto;width:80%;max-width:1280px}#header-tab-arrow[data-v-39acfe33]{margin-left:35px;position:absolute}#header-tab-arrow-img[data-v-39acfe33]{width:31px}#header-tab-text[data-v-39acfe33]{width:100%}#title[data-v-39acfe33]{padding-top:95px}#topic-panel[data-v-39acfe33]{padding-top:52px}#social-sharer[data-v-39acfe33]{margin-top:60px;margin-bottom:60px}#hr-end[data-v-39acfe33]{border:0;height:1px;background-color:#929191;margin-top:1px;margin-bottom:1px;outline:none}@media only screen and (max-width:768px){#header-tab[data-v-39acfe33]{padding-top:8px;padding-bottom:8px}.topic-page-bound[data-v-39acfe33]{margin-left:auto;margin-right:auto;width:94%;max-width:none}#header-tab-arrow[data-v-39acfe33]{margin-left:10px}#header-tab-arrow-img[data-v-39acfe33]{width:22px;margin-top:3px}#title[data-v-39acfe33]{padding-top:29px}#topic-panel[data-v-39acfe33]{padding-top:25px}#social-sharer[data-v-39acfe33]{margin-top:25px;margin-bottom:25px}}",""]),t.exports=e}}]);