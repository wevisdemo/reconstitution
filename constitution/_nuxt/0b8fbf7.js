(window.webpackJsonp=window.webpackJsonp||[]).push([[39,15,16,17,21,24,25,28,29,30,31,32,33,34,35,36],{1194:function(t,e,o){"use strict";o.r(e);var l=o(24),n=o(5),r=(o(43),o(19),o(34),o(41),o(28),o(0)),c=o(81),d=o(330),f=r.default.extend({asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,d,f,m,A,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.params,n=o.category_id,r=o.topic_id,!(null==(d=t.payload)?void 0:d.topic)||!(null==d?void 0:d.category)){e.next=5;break}return e.abrupt("return",d);case 5:return e.next=7,Promise.all([Object(c.c)(r),Object(c.b)(n)]);case 7:return f=e.sent,m=Object(l.a)(f,2),A=m[0],_=m[1],e.abrupt("return",{topic:A,category:_});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{topic:null,category:null,currentPanel:0}},head:function(){var t=this.topic,e=t.name,o=t.og_image;return Object(d.a)({title:e,image:o})}}),m=(o(410),o(10)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"flex flex-row bg-black text-white py-2 md:py-4",style:{backgroundColor:t.category.color}},[l("div",{staticClass:"absolute pl-4"},[l("NuxtLink",{staticClass:"curser-pointer float-left",attrs:{to:"/categories/"+t.category.category_id}},[l("img",{attrs:{id:"header-tab-arrow-img",src:o(409)}})])],1),t._v(" "),l("div",{staticClass:"flex justify-center w-full"},[l("Heading3",{staticClass:"text-center font-black"},[t._v("\n        "+t._s(t.topic.category_name)+"\n      ")])],1)]),t._v(" "),l("div",{staticClass:"px-4 max-w-5xl mx-auto"},[l("div",{staticClass:"flex flex-row bg-white text-black justify-center pt-8 md:pt-20"},[l("Heading1",{staticClass:"text-center font-black"},[t._v("\n        "+t._s(t.topic.name)+"\n      ")])],1),t._v(" "),l("TopicPanel",{staticClass:"pt-8 md:pt-12",attrs:{"bg-color":t.category.color,opinions:t.topic.opinions,"current-panel":t.currentPanel},on:{change:function(e){return t.currentPanel=e}}}),t._v(" "),0===t.currentPanel?l("TopicSummary",{attrs:{summary:t.topic.summary}}):1===t.currentPanel?l("TopicComparison",{attrs:{versions:t.topic.constitutions,"bg-color":t.category.color}}):l("TopicOpinions",{attrs:{opinions:t.topic.opinions}}),t._v(" "),l("div",{staticClass:"flex justify-center my-6 md:my-12"},[l("social-sharer")],1),t._v(" "),l("hr",{staticClass:"border-0 h-px my-1 outline-none",staticStyle:{"background-color":"#929191"}}),t._v(" "),l("TopicRelatedPanel",{staticClass:"mx-auto",staticStyle:{width:"90%",height:"auto"},attrs:{"category-id":t.topic.category_id,"subcategory-id":t.topic.subcategory_id,subcategories:t.category.sub_categories}})],1)])}),[],!1,null,"7b231717",null);e.default=component.exports;installComponents(component,{Heading3:o(313).default,Heading1:o(328).default,TopicPanel:o(401).default,TopicSummary:o(402).default,TopicComparison:o(403).default,TopicOpinions:o(404).default,TopicRelatedPanel:o(405).default})},304:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-body leading-1.6 text-12 md:text-13 lg:text-14"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,o){"use strict";o.r(e);var l=o(0).default.extend({props:{withIndent:{type:Boolean,default:!1}}}),n=o(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-body leading-1.6 text-15 md:text-16 lg:text-17",style:{textIndent:t.withIndent?"3em":"none"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-subtitle leading-1.5 text-14 md:text-16 lg:text-18"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("79bfae04",content,!0,{sourceMap:!1})},313:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"font-heading leading-1.2 text-18 md:text-21 lg:text-24"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,o){"use strict";o(309)},318:function(t,e,o){var l=o(55)(!1);l.push([t.i,".swiper-slide[data-v-5568a03c]{width:auto}",""]),t.exports=l},319:function(t,e,o){var content=o(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("45e38fc5",content,!0,{sourceMap:!1})},320:function(t,e,o){var l=o(55)(!1);l.push([t.i,".multiselect,.multiselect__input,.multiselect__single{font-size:14px}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input:hover,.multiselect__single:hover{border-color:#fff}.multiselect__input:focus,.multiselect__single:focus{border-color:#fff;outline:none}.multiselect__tag{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.multiselect__tags{width:100%;border:1px solid #000}.multiselect__current{overflow:hidden;white-space:nowrap;padding:8px 30px 0 12px}.multiselect__option--selected{color:#000}.multiselect__select{padding:0}.multiselect__select:before{color:#000;border-color:#000 transparent transparent}.multiselect__placeholder{color:#000;display:inline-block}.multiselect__content-wrapper{overflow:auto;-webkit-overflow-scrolling:touch;word-wrap:break-word}.multiselect__content{word-wrap:break-word}.multiselect__option{line-height:120%;word-wrap:break-word;white-space:normal}.multiselect__option--highlight{background:#000}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#e8e8e8}.multiselect__option--selected:after{color:#f3f3f3}.multiselect__option--selected.multiselect__option--highlight,.multiselect__option--selected.multiselect__option--highlight:after{background:#000;color:#e8e8e8}.multiselect__option--group{background:#ededed;color:#000}.multiselect__option--group.multiselect__option--highlight{background:#000;color:#ededed}.multiselect__option--group.multiselect__option--highlight:after{background:#000}",""]),t.exports=l},324:function(t,e,o){"use strict";o.r(e);var l=o(0),n=o(339),r=(o(340),l.default.extend({components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},props:{categoryId:{type:String,required:!0},topics:{type:Array,required:!0}},data:function(){return{swiperOptions:{slidesPerView:"auto",spaceBetween:5}}},computed:{swiper:function(){return this.$refs.swiper.$swiper}}})),c=(o(317),o(10)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row h-32 md:h-56"},[o("div",{staticClass:"flex"},[o("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slidePrev()}}},[o("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"15 18 9 12 15 6"}})])])]),t._v(" "),o("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},t._l(t.topics,(function(e){var l=e.id,n=e.name,r=e.thumbnail_image;return o("swiper-slide",{key:l},[o("NuxtLink",{attrs:{to:"/categories/"+t.categoryId+"/topics/"+l}},[o("img",{staticClass:"h-32 md:h-56 cursor-pointer",attrs:{src:r,alt:n}})])],1)})),1),t._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slideNext()}}},[o("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("polyline",{attrs:{points:"9 18 15 12 9 6"}})])])])],1)}),[],!1,null,"5568a03c",null);e.default=component.exports},325:function(t,e,o){"use strict";o.r(e);var l=o(0),n=(o(337),l.default.extend({props:{versions:{type:Array,required:!0},isLeft:{type:Boolean,default:!1}},data:function(){return{version:null,sections:null,amendments:null}},methods:{selectVersion:function(t){var e=t.sections;this.sections=e}}})),r=o(10),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col w-full space-y-12"},[o("TopicComparisonSelect",{attrs:{versions:t.versions,"is-left":t.isLeft},on:{"select-version":t.selectVersion}}),t._v(" "),t._l(t.sections,(function(section){return o("div",{key:section.id},[o("div",{staticClass:"flex flex-col text-left space-y-6"},[o("div",{staticClass:"flex justify-end w-full"},[o("Paragraph2",{staticClass:"flex flex-col md:inline text-left w-full"},["-"!==section.chapter_id||"-"!==section.chapter_name?o("span",[o("span",{staticClass:"font-semibold"},[t._v("หมวด")]),t._v(" "),"-"!==section.chapter_id?o("span",[t._v("\n              "+t._s(section.chapter_id)+"\n            ")]):t._e(),t._v("\n            "+t._s(section.chapter_name)+"\n          ")]):t._e(),t._v(" "),section.part_id&&"-"!==section.part_id?o("span",[o("span",{staticClass:"font-semibold"},[t._v("ส่วน")]),t._v(" "+t._s(section.part_id)+"\n            "+t._s(section.part_name)+"\n          ")]):t._e(),t._v(" "),o("span",[o("span",{staticClass:"font-semibold"},[t._v("มาตรา")]),t._v(" "+t._s(section.id)+"\n          ")])])],1),t._v(" "),t._l(section.content.split("\n").filter((function(p){return p.length>0})),(function(e,l){return o("Paragraph1",{key:l},[t._v("\n        "+t._s(e)+"\n      ")])}))],2)])}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopicComparisonSelect:o(326).default,Paragraph2:o(304).default,Paragraph1:o(305).default})},326:function(t,e,o){"use strict";o.r(e);var l=o(0),n=o(352),r=o.n(n);o(319);l.default.component("Multiselect",r.a);var c=l.default.extend({components:{Multiselect:r.a},props:{versions:{type:Array,required:!0},isLeft:{type:Boolean,default:!1}},data:function(){return{version:null}},methods:{selectVersion:function(t){this.$emit("select-version",t)}}}),d=o(10),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comparison-select"},[o("multiselect",{staticClass:"text-black shadow-none outline-none",class:t.isLeft?"ml-auto mr-0":"ml-0 mr-auto",attrs:{placeholder:"เลือกฉบับรัฐธรรมนูญ","track-by":"name",label:"name",options:t.versions,searchable:!1,"allow-empty":!1,"open-direction":"bottom","selected-label":"","select-label":"","deselect-label":""},on:{select:t.selectVersion},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"font-heading leading-1.2 text-24 md:text-36 lg:text-48"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"font-heading leading-1.2 text-21 md:text-24 lg:text-36"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var l=o(135),n=(o(32),o(39),o(61),o(76),"Reconstitution ฐานข้อมูลรัฐธรรมนูญไทยออนไลน์"),r=function(t,content){return t.map((function(t){return{hid:t,property:t,content:content}}))},c=function(t){var title=t.title,e=t.description,image=t.image,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=title?"".concat(title," - ").concat(n):n,meta=Object(l.a)(o);return meta.push.apply(meta,Object(l.a)(r(["title","og:title","twitter:title"],c))),e&&meta.push.apply(meta,Object(l.a)(r(["description","og:description","twitter:description"],e))),image&&meta.push.apply(meta,Object(l.a)(r(["og:image","twitter:image"],image))),{title:c,meta:meta}}},331:function(t,e,o){"use strict";var l=o(13),n=o(7),r=o(79),c=o(20),d=o(16),f=o(51),m=o(133),A=o(77),_=o(9),v=o(60),h=o(78).f,x=o(42).f,w=o(18).f,y=o(332).trim,C="Number",k=n.Number,E=k.prototype,B=f(v(E))==C,O=function(t){var e,o,l,n,r,c,d,code,f=A(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+f}for(c=(r=f.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>n)return NaN;return parseInt(r,l)}return+f};if(r(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var j,S=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof S&&(B?_((function(){E.valueOf.call(o)})):f(o)!=C)?m(new k(O(e)),o,S):O(e)},Q=l?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;Q.length>I;I++)d(k,j=Q[I])&&!d(S,j)&&w(S,j,x(k,j));S.prototype=E,E.constructor=S,c(n,C,S)}},332:function(t,e,o){var l=o(25),n="["+o(333)+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),d=function(t){return function(e){var o=String(l(e));return 1&t&&(o=o.replace(r,"")),2&t&&(o=o.replace(c,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},333:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},336:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("09e6432e",content,!0,{sourceMap:!1})},337:function(t,e,o){var content=o(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("2584b1b1",content,!0,{sourceMap:!1})},338:function(t,e,o){var l=o(55)(!1);l.push([t.i,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]),t.exports=l},359:function(t,e,o){"use strict";o.r(e);var l=o(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-heading leading-1.4 text-10 md:text-12 lg:text-14"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,o){"use strict";o(336)},371:function(t,e,o){var l=o(55)(!1);l.push([t.i,'div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2,div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6,div[data-v-7a688cd6] p,div[data-v-7a688cd6] table{margin-bottom:50px}div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2,div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6{padding-left:120px;padding-right:120px}div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2{font-family:Kondolar Thai,Georgia,Cambria,"Times New Roman",Times,serif;line-height:120%;font-size:36px;font-weight:400}div[data-v-7a688cd6] h1{font-weight:900}div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4{font-family:Kondolar Thai,Georgia,Cambria,"Times New Roman",Times,serif;line-height:120%;font-size:24px;font-weight:400}div[data-v-7a688cd6] h3{font-weight:900}div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6{font-family:Anuphan,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:150%;font-size:24px;font-weight:400}div[data-v-7a688cd6] h5{font-weight:600}div[data-v-7a688cd6] p{padding:0 12%;font-family:Bai Jamjuri,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:160%;font-size:17px;font-weight:400}div[data-v-7a688cd6] p.thick{font-weight:700}div[data-v-7a688cd6] td{padding-top:15px;padding-bottom:15px;vertical-align:text-top}div[data-v-7a688cd6] tr:not(:last-child){border-bottom:1px solid #cecece}div[data-v-7a688cd6] td:not(:last-child),div[data-v-7a688cd6] th:not(:last-child){padding-right:6.5%}div[data-v-7a688cd6] table{width:100%;table-layout:fixed}div[data-v-7a688cd6] tr{text-align:left}div[data-v-7a688cd6] td{line-height:160%}@media only screen and (max-width:768px){div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2{font-size:24px}div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6{font-size:21px}div[data-v-7a688cd6] p{padding:0 8px;font-size:16px}}@media only screen and (max-width:640px){div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2,div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6,div[data-v-7a688cd6] p,div[data-v-7a688cd6] table{margin-bottom:30px}div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2,div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6,div[data-v-7a688cd6] p{margin-left:7px;margin-right:7px}div[data-v-7a688cd6] h1,div[data-v-7a688cd6] h2{font-size:21px}div[data-v-7a688cd6] h3,div[data-v-7a688cd6] h4,div[data-v-7a688cd6] h5,div[data-v-7a688cd6] h6{font-size:18px}div[data-v-7a688cd6] p{padding:0 8px;font-size:14px}}',""]),t.exports=l},372:function(t,e,o){"use strict";var l=o(2),n=o(80).find,r=o(134),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),l({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},375:function(t,e,o){var content=o(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("4a9781d6",content,!0,{sourceMap:!1})},401:function(t,e,o){"use strict";o.r(e);o(331);var l=o(0).default.extend({props:{bgColor:{type:String,default:""},opinions:{type:Array,required:!0},currentPanel:{type:Number,required:!0}},computed:{sections:function(){return 0===this.opinions.length?["สรุป","เปรียบเทียบ"]:["สรุป","เปรียบเทียบ","ข้อคิดเห็น"]}}}),n=o(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex flex-row bg-white space-x-1"},t._l(t.sections,(function(e,l){return o("button",{key:l,staticClass:"flex-1 border-none focus:outline-none",on:{click:function(e){return t.$emit("change",l)}}},[o("Label1",{staticClass:"flex py-4 justify-center"},[t._v("\n        "+t._s(e)+"\n      ")]),t._v(" "),o("div",{staticClass:"h-1 w-full transition-opacity duration-100 ease-in-out",class:l!==t.currentPanel?"opacity-25":"",style:{backgroundColor:t.bgColor}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Label1:o(194).default})},402:function(t,e,o){"use strict";o.r(e);o(97),o(57);var l=o(0),n=o(341),r=o.n(n),c=l.default.extend({components:{"vue-markdown":r.a},props:{summary:{type:String,required:!0}},computed:{summaryWithAbsoluteImageUrl:function(){return this.summary?this.summary.replace(/\(\/uploads\//gi,"(".concat("https://cms.constitution.kickdown.dev","/uploads/")):""}}}),d=(o(370),o(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col justify-center w-full"},[o("div",{staticClass:"flex flex-row bg-white text-black justify-center mx-auto"},[o("div",{staticClass:"flex justify-center w-full md:px-6"},[o("vue-markdown",{staticClass:"mt-12 md:mt-20 w-full justify-center mx-auto"},[t._v(t._s(t.summaryWithAbsoluteImageUrl))])],1)])])}),[],!1,null,"7a688cd6",null);e.default=component.exports},403:function(t,e,o){"use strict";o.r(e);o(40);var l=o(0),n=o(325),r=l.default.extend({components:{TopicComparisonSide:n.default},props:{bgColor:{type:String,default:""},versions:{type:Array,default:function(){return[]}}},mounted:function(){var t=this.bgColor;document.querySelectorAll(".multiselect__tags").forEach((function(e){e.style.borderColor=t}))}}),c=o(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-row justify-center align-center w-full pt-10 md:pt-16"},[o("TopicComparisonSide",{staticClass:"w-1/2 md:w-5/12",attrs:{versions:t.versions,"is-left":""}}),t._v(" "),o("span",{staticClass:"text-white justify-center text-center rounded-full hidden md:flex w-12 h-12 mx-12",style:{backgroundColor:t.bgColor}},[o("Label1",{staticClass:"text-center m-auto"},[t._v("vs.")])],1),t._v(" "),o("span",{staticClass:"flex md:hidden w-4"}),t._v(" "),o("TopicComparisonSide",{staticClass:"w-1/2 md:w-5/12",attrs:{versions:t.versions}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopicComparisonSide:o(325).default,Label1:o(194).default})},404:function(t,e,o){"use strict";o.r(e);o(50),o(39),o(33),o(58),o(40),o(59);var l=o(30),n=(o(32),o(213),o(57),o(19),o(98),o(0)),r=o(341),c=o.n(r);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=n.default.extend({components:{"vue-markdown":c.a},props:{opinions:{type:Array,required:!0}},computed:{computed_opinions:function(){var t=this;return this.opinions.map((function(e){return f(f({},e),{},{thai_date:t.get_thai_datestring(e.date)})}))}},methods:{get_thai_datestring:function(t){var e=parseInt(t.split("-")[0])+543,o=parseInt(t.split("-")[1]);return parseInt(t.split("-")[2]).toString()+" "+{1:"มกราคม",2:"กุมภาพันธุ์",3:"มีนาคม",4:"เมษายน",5:"พฤษภาคม",6:"มิถุนายน",7:"กรกฎาคม",8:"สิงหาคม",9:"กันยายน",10:"ตุลาคม",11:"พฤศจิกายน",12:"ธันวาคม"}[o]+" "+e.toString()}}}),A=o(10),component=Object(A.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col pb-4 md:pb-8 space-y-12 md:space-y-24 pt-12 md:pt-24"},t._l(t.computed_opinions,(function(e,l){return o("div",{key:l,staticClass:"flex"},[o("div",{staticClass:"mx-auto max-w-3xl"},[o("div",{staticClass:"flex w-full",class:l%2==0?"flex-row":"flex-row-reverse"},[o("img",{staticClass:"rounded-full w-16 md:w-20 h-16 md:h-20 object-cover my-auto",attrs:{src:e.speaker_image}}),t._v(" "),o("div",{class:l%2==0?"flex flex-col text-left ml-4 md:ml-8":"flex flex-col text-right mr-4 md:mr-8"},[o("Heading2",{staticClass:"font-semibold"},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]),t._v(" "),o("Subtitle2",[t._v("\n            "+t._s(e.speaker_position)+"\n          ")]),t._v(" "),o("div",{staticClass:"font-subtitle leading-1.3 text-12 md:text-13 lg:text-14",staticStyle:{color:"#888"}},[t._v("\n            "+t._s(e.thai_date)+"\n          ")])],1)]),t._v(" "),o("Paragraph1",{staticStyle:{"max-width":"100%"}},[o("vue-markdown",{staticClass:"w-full mt-5 md:mt-20 mx-auto"},[t._v(t._s(e.content))])],1)],1)])})),0)}),[],!1,null,"61c1265a",null);e.default=component.exports;installComponents(component,{Heading2:o(329).default,Subtitle2:o(307).default,Paragraph1:o(305).default})},405:function(t,e,o){"use strict";o.r(e);o(372);var l=o(0).default.extend({props:{categoryId:{type:String,required:!0},subcategories:{type:Array,required:!0},subcategoryId:{type:String,required:!0}},computed:{related_topics:function(){var t=this,e=this.subcategories.find((function(e){return e.sub_category_id===t.subcategoryId}));return null==e?void 0:e.topics}}}),n=o(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.related_topics?o("div",[o("Heading7",{staticClass:"text-center font-black my-12"},[t._v(" RELATED TOPICS ")]),t._v(" "),o("TopicsCarousal",{staticClass:"flex max-w-5xl mx-auto w-full mb-10 md:mb-24",attrs:{"category-id":t.categoryId,topics:t.related_topics}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading7:o(359).default,TopicsCarousal:o(324).default})},409:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAFVBAMAAABr/UoQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwDfIJ8w7xDPgHBXeso1AAACsklEQVR42u3avY2TQRhG0dGSEIJERAYZBZBMtC0gbQFbBTHNINBUCcYY/32SA0jwPU8H79WZbMYwM/v3e6gH+PjYvv/FemoHmOvrYxvAahOYPwOUCewApAnMXwG6BPYAwgTm7wBVAgcAWQLzT4AmgSOAKIF5EqBI4BRAksA8C9AjcA4gSGBeBKgRuASQIzCvArQIXAOIEZgbAUoEtgCs9aoNoCRgG8ATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw9gPXp9T3vNoA7320AnQBJAKsOYNUBrDqAVQew6gBWHcCqA1h1AKsOYNUBrDqAfYCXKx7g4W39CbyrBwgTGHUCo05g1AmMOoFRJzDqBEadwKgTGHUCo05g1AmMOoFxm8Cb9/e8cZvAt+fOD4ltAp87ARBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEELhbAl9Gm8D30P2bBEoAtgikAGwRaAG4JhADcE2gBuCSQA7AJYEegHMCQQDnBIoATgkkAZwSaAI4EogCOBKoAjgQyAI4EOgC2BMIA9gTKAPYEUgD2BFoAxjjwzAz+w/2A9/yK/oHV6gjAAAAAElFTkSuQmCC"},410:function(t,e,o){"use strict";o(375)},411:function(t,e,o){var l=o(55)(!1);l.push([t.i,"#topic-page-bound[data-v-7b231717]{width:80%;max-width:1000px}#header-tab-arrow[data-v-7b231717]{margin-left:35px;position:absolute}#header-tab-arrow-img[data-v-7b231717]{width:31px}@media only screen and (max-width:768px){.topic-page-bound[data-v-7b231717]{width:96%;max-width:none}#header-tab-arrow[data-v-7b231717]{margin-left:10px}#header-tab-arrow-img[data-v-7b231717]{width:22px;margin-top:3px}}",""]),t.exports=l}}]);