(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10,11,17,24,28],{308:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({props:{withIndent:{type:Boolean,default:!1}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-body leading-1.6 text-15 md:text-16 lg:text-17",style:{textIndent:t.withIndent?"3em":"none"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("5550771a",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.r(e);var l=n(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"font-subtitle leading-1.5 text-14 md:text-16 lg:text-18"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({props:{coup:{type:Boolean,default:!1},isDark:{type:Boolean,default:!1}}}),o=(n(314),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-1"},[n("div",{class:t.coup?"cross-fill":"white-fill",style:{filter:"brightness("+(t.isDark?0:1)+")"}})])}),[],!1,null,"331f63a8",null);e.default=component.exports},314:function(t,e,n){"use strict";n(309)},315:function(t,e,n){var l=n(59),o=n(196),r=n(306),c=l(!1),d=o(r);c.push([t.i,".white-fill[data-v-331f63a8]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));height:3px}.cross-fill[data-v-331f63a8],.white-fill[data-v-331f63a8]{margin-top:auto;margin-bottom:auto}.cross-fill[data-v-331f63a8]{height:.25rem;background-image:url("+d+");background-repeat:repeat-x;background-position:0}",""]),t.exports=c},316:function(t,e,n){"use strict";n.r(e);var l=n(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"font-heading leading-1.2 text-18 md:text-21 lg:text-24"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";var l;n.d(e,"a",(function(){return o})),function(t){t[t.md=768]="md",t[t.lg=1024]="lg"}(l||(l={}));var o=function(){return window.innerWidth>l.lg}},359:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({props:{isExpanded:{type:Boolean,required:!0}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row rounded-md border border-gray-1 overflow-hidden",on:{click:function(e){return t.$emit("toggle")}}},[n("div",{staticClass:"flex rounded-tr-md rounded-br-md px-2",class:t.isExpanded?"text-dark bg-light-gray-3":"text-light-gray-3 bg-dark"},[n("svg",{staticClass:"stroke-current m-auto",attrs:{width:"9",height:"17",viewBox:"0 0 9 17",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2",fill:"none"}},[n("path",{attrs:{d:"M8.23793 5.36891L4.70239 1.83337L1.16686 5.36891"}}),t._v(" "),n("path",{attrs:{d:"M1.16686 11.063L4.70239 14.5985L8.23793 11.063"}})])]),t._v(" "),n("div",{staticClass:"flex rounded-tl-md rounded-bl-md px-2",class:t.isExpanded?"text-light-gray-3 bg-dark":"text-dark bg-light-gray-3"},[n("svg",{staticClass:"stroke-current m-auto",attrs:{width:"11",height:"22",viewBox:"0 0 11 22",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2",fill:"none"}},[n("line",{attrs:{x1:"0.500183",y1:"10.4727",x2:"10.5002",y2:"10.4727"}}),t._v(" "),n("path",{attrs:{d:"M8.75172 17.5082L5.21619 13.9727L1.68065 17.5082"}}),t._v(" "),n("path",{attrs:{d:"M1.68065 4.03551L5.21619 7.57104L8.75172 4.03551"}})])])])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,n){"use strict";n.r(e);var l=n(0),o=n(318),r=l.default.extend({props:{constitution:{type:Object,required:!0},categoriesMap:{type:Object,required:!0},isExpanded:{type:Boolean,default:!0},showPageLabel:{type:Boolean,default:!1}},data:function(){return{hoveringPageIndex:null,selectedPageIndex:null}},methods:{isLargeOrMore:o.a}}),c=n(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col space-y-4"},[l("div",{staticClass:"flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 lg:p-1 lg:pb-0 w-full space-y-2 lg:space-y-1",on:{click:function(e){return t.$emit("header-click")}}},[l("CoupIndicator",{attrs:{coup:t.constitution.isInvolvedWithCoup}}),t._v(" "),l("div",{staticClass:"flex flex-row"},[l("div",{staticClass:"flex-1 lg:text-center"},[l("h3",{staticClass:"font-heading font-black text-21 lg:text-16 leading-1.2"},[t._v("\n          "+t._s(t.constitution.year)+"\n        ")]),t._v(" "),l("p",{class:"font-button text-12 lg:text-10 "+(t.constitution.isInterim?"":"opacity-0")},[t._v("\n          ชั่วคราว\n        ")])]),t._v(" "),l("div",{staticClass:"lg:hidden -mt-1"},[l("Label1",[t._v(t._s(t.constitution.pageCount)+" หน้า")])],1)])],1),t._v(" "),l("Label2",{staticClass:"hidden lg:block text-center"},[t._v(t._s(t.constitution.pageCount)+t._s(t.showPageLabel?" หน้า":""))]),t._v(" "),l("div",{staticClass:"flex flex-row lg:flex-col flex-wrap relative"},t._l(t.constitution.pages,(function(e,o){return l("div",{key:o,staticClass:"flex flex-row"},[l("div",{staticClass:"`flex flex-col w-6 mr-2 lg:mx-auto transition-size-spacing duration-500 ease-in-out cursor-pointer",class:[t.hoveringPageIndex===o?"border-white":"border-dark",t.isExpanded?"h-8 mb-3 lg:mb-1 border":"h-1"],on:{mouseover:function(e){t.isLargeOrMore()&&(t.hoveringPageIndex=o)},mouseleave:function(e){t.isLargeOrMore()&&(t.hoveringPageIndex=null)},click:function(e){t.isLargeOrMore()&&(t.selectedPageIndex=o)}}},t._l(e,(function(e,n){var o=e.categoryId,r=e.pageRatio;return l("div",{key:n,style:{height:Math.round(100*r)+"%",backgroundColor:t.categoriesMap[o].color}})})),0),t._v(" "),t.hoveringPageIndex===o?l("div",{staticClass:"relative"},[l("div",{staticClass:"absolute z-10 top-0 left-0 bg-white shadow-md"},[l("img",{staticClass:"w-24 h-auto max-w-none max-h-none",attrs:{src:n(356)("./"+t.constitution.id+"/"+(o+1)+".png"),alt:t.constitution.name+" หน้า "+o}})])]):t._e()])})),0),t._v(" "),null!==t.selectedPageIndex?l("ConstitutionPageDialog",{attrs:{constitution:t.constitution,"page-index":t.selectedPageIndex},on:{close:function(e){t.selectedPageIndex=null},change:function(e){return t.selectedPageIndex=e}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoupIndicator:n(311).default,Label1:n(195).default,Label2:n(194).default,ConstitutionPageDialog:n(376).default})},361:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({props:{constitution:{type:Object,required:!0}},methods:{close:function(){this.$emit("close")}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"fixed z-10 inset-0 flex"},[l("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"flex flex-col w-full h-full min-h-screen md:min-h-0 md:h-auto bg-white text-black m-auto md:max-w-lg p-2 md:p-1 shadow-md overflow-y-auto"},[l("CoupIndicator",{attrs:{"is-dark":"",coup:t.constitution.isInvolvedWithCoup}}),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("button",{on:{click:t.close}},[l("img",{staticClass:"w-4",staticStyle:{filter:"brightness(0)"},attrs:{src:n(306),alt:"close"}})])]),t._v(" "),l("div",{staticClass:"flex flex-col p-2 md:p-6 space-y-4 mb-4"},[l("Heading3",{staticClass:"font-black text-center"},[t._v("\n        "+t._s(t.constitution.name)+"\n      ")]),t._v(" "),l("Paragraph1",[t._v(t._s(t.constitution.context))])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoupIndicator:n(311).default,Heading3:n(316).default,Paragraph1:n(308).default})},409:function(t,e,n){"use strict";n.r(e);n(41),n(34),n(31),n(51),n(35),n(52);var l=n(23),o=n(137);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=n(0).default.extend({props:{categories:{type:Array,required:!0},constitutions:{type:Array,required:!0}},data:function(){return{selectedConstitutionId:null,isExpanded:!0}},computed:{categoriesMap:function(){return this.categories?this.categories.reduce((function(t,e){var n=e.id,r=Object(o.a)(e,["id"]);return c(c({},t),{},Object(l.a)({},n,r))}),{}):null}}}),f=n(10),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col space-y-8"},[n("div",{staticClass:"flex flex-col px-2 space-y-4"},[n("Subtitle2",{staticClass:"md:hidden font-semibold"},[t._v("เปลี่ยนมาแล้ว 20 ฉบับ")]),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("div",{staticClass:"flex flex-col md:flex-row opacity-75 space-y-2 md:space-y-0 md:space-x-4"},[n("div",{staticClass:"flex flex-row space-x-1"},[n("CoupIndicator",{staticClass:"w-8 my-auto"}),t._v(" "),n("Label2",{staticClass:"my-auto"},[t._v("ฉบับที่เกิดจากรัฐบาลปกติ")])],1),t._v(" "),n("div",{staticClass:"flex flex-row space-x-1"},[n("CoupIndicator",{staticClass:"w-8 my-auto",attrs:{coup:""}}),t._v(" "),n("Label2",{staticClass:"my-auto"},[t._v("ฉบับที่เกิดจากรัฐประหาร")])],1)]),t._v(" "),n("div",{staticClass:"hidden lg:flex flex-1 justify-end"},[n("ConstitutionExpandToggle",{attrs:{"is-expanded":t.isExpanded},on:{toggle:function(e){t.isExpanded=!t.isExpanded}}})],1)])],1),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row space-y-8 md:space-y-0 md:space-x-1"},t._l(t.constitutions,(function(e,l){return n("div",{key:e.id},[n("ConstitutionOverview",{attrs:{constitution:e,"categories-map":t.categoriesMap,"is-expanded":t.isExpanded,"show-page-label":0===l},on:{"header-click":function(n){t.selectedConstitutionId=e.id}}}),t._v(" "),t.selectedConstitutionId===e.id?n("ConstitutionContextDialog",{attrs:{constitution:e},on:{close:function(e){t.selectedConstitutionId=null}}}):t._e()],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subtitle2:n(310).default,CoupIndicator:n(311).default,Label2:n(194).default,ConstitutionExpandToggle:n(359).default,ConstitutionOverview:n(360).default,ConstitutionContextDialog:n(361).default})}}]);