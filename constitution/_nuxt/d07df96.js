(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(t,e,n){"use strict";n.r(e);var L=n(3),component=Object(L.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"font-body leading-1.6 text-15 md:text-16 lg:text-17"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);var L=n(1).default.extend({props:{isDark:{type:Boolean,default:!1}},data:function(){return{socialLinks:[]}},mounted:function(){var t=encodeURI(window.location.href);this.socialLinks=[{service:"Facebook",icon:n(234),href:"http://www.facebook.com/sharer/sharer.php?u=".concat(t)},{service:"Twitter",icon:n(235),href:"https://twitter.com/intent/tweet?url=".concat(t)},{service:"Line",icon:n(236),href:"https://social-plugins.line.me/lineit/share?url=".concat(t)}]}}),M=n(3),component=Object(M.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row h-10 p-1 justify-center space-x-4"},[n("Label1",{class:"my-auto "+(t.isDark?"text-white":"text-black")},[t._v("Share")]),t._v(" "),n("div",{staticClass:"flex flex-row"},t._l(t.socialLinks,(function(e){var L=e.service,M=e.icon,l=e.href;return n("a",{key:L,attrs:{href:l,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"h-full",style:t.isDark?{}:{filter:"brightness(0)"},attrs:{src:M,alt:L}})])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Label1:n(153).default})},234:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTUuMyAxMi4yaC0yYy0uOSAwLTEuNC41LTEuNSAxLjN2Mi4xYzAgLjMuMS4yLjMuMmgzYy4zIDAgLjQuMS40LjQtLjEgMS4yLS4yIDIuMy0uMyAzLjUgMCAuMy0uMS4zLS40LjNoLTIuNGMtLjYgMC0uNS0uMS0uNS41djExYzAgLjQtLjEuNS0uNS41aC00LjFjLS40IDAtLjQtLjEtLjQtLjV2LTExLjFjMC0uMy0uMS0uNC0uNC0uNGgtMS44Yy0uMiAwLS4zLS4xLS4zLS4zdi0zLjVjMC0uMi4xLS4zLjMtLjNoMS44Yy4zIDAgLjQtLjEuNC0uNHYtMi43YzAtMS4xLjMtMi4xIDEtMyAuOC0xLjEgMi0xLjYgMy4zLTEuNyAxLjQtLjEgMi44IDAgNC4xIDAgLjIgMCAuMi4xLjIuM3YzLjVjLjEuMiAwIC4zLS4yLjN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},235:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIC45NjhjLTExIDAtMjAgOS0yMCAyMHM5IDIwIDIwIDIwIDIwLTkgMjAtMjAtOS0yMC0yMC0yMHptOS42IDE1LjF2LjZjMCA2LjUtNSAxNC4xLTE0LjEgMTQuMS0yLjggMC01LjQtLjgtNy42LTIuMi40IDAgLjguMSAxLjIuMSAyLjMgMCA0LjQtLjggNi4xLTIuMS0yLjIgMC00LTEuNS00LjYtMy40LjMuMS42LjEuOS4xLjUgMCAuOS0uMSAxLjMtLjItMi4zLS41LTQtMi41LTQtNC44di0uMWMuNy40IDEuNC42IDIuMi42LTEuMi0xLTItMi41LTItNC4yIDAtLjkuMi0xLjguNy0yLjUgMi40IDMgNi4xIDUgMTAuMiA1LjItLjEtLjQtLjEtLjctLjEtMS4xIDAtMi43IDIuMi00LjkgNC45LTQuOSAxLjQgMCAyLjcuNiAzLjYgMS42IDEuMS0uMiAyLjItLjYgMy4xLTEuMi0uNCAxLjItMS4yIDIuMS0yLjIgMi43IDEtLjEgMi0uNCAyLjgtLjgtLjYuOS0xLjUgMS44LTIuNCAyLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},236:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3IDE2LjI2OGMtLjMgMC0uNi4zLS42LjZ2NC41YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di00LjVjMC0uMy0uMy0uNi0uNi0uNnptNS4zIDBjLS4zIDAtLjYuMy0uNi42djIuN2wtMi4xLTIuOWMtLjEtLjItLjQtLjMtLjctLjItLjIuMS0uNC4zLS40LjZ2NC40YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di0yLjZsMi4xIDIuOWMuMS4yLjMuMi41LjJoLjJjLjItLjEuNC0uMy40LS42di00LjVjLS4xLS4zLS4zLS42LS42LS42em0tNyA0LjVoLTEuNnYtMy45YzAtLjMtLjMtLjYtLjYtLjZzLS42LjMtLjYuNnY0LjVjMCAuMy4zLjYuNi42aDIuMWMuMyAwIC42LS4zLjYtLjZzLS4xLS42LS41LS42em0xMS44LS4xaC0yLjN2LTEuMWgxLjhjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMS44di0xLjFIMjdjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMi44Yy0uMyAwLS42LjMtLjYuNnY0LjRjMCAuMy4zLjYuNi42aDIuOWMuMyAwIC42LS4zLjYtLjZzLS4zLS40LS42LS40eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTEwLjMgMjQuM2MtMS42IDItOC42IDYuNy0xMC4yIDcuNy0uNy40LTEuNS0uMS0xLjUtLjl2LTIuNGMtMy45LS4yLTEwLjktMy42LTEwLjktMTAuNCAwLTcgNy0xMC40IDEyLjQtMTAuNCA1LjggMCAxMi40IDMuOCAxMi40IDEwLjQtLjEgMS44LS42IDQtMi4yIDZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},237:function(t,e,n){"use strict";n.r(e);var L=n(3),component=Object(L.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"font-heading leading-1.2 text-24 md:text-36 lg:text-48"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var L=n(3),component=Object(L.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"font-heading leading-1.2 text-21 md:text-24 lg:text-36"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},981:function(t,e,n){"use strict";n.r(e);var L=n(3),component=Object(L.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col space-y-12 p-4 py-12 md:py-24 max-w-3xl m-auto"},[n("Heading1",{staticClass:"font-black text-center"},[t._v("เกี่ยวกับโครงการ")]),t._v(" "),n("section",{staticClass:"space-y-6"},[n("Heading2",{staticClass:"font-black"},[t._v("เป้าหมาย")]),t._v(" "),n("Paragraph1",[t._v("\n      dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an\n      unknown printer took a galley of type and scrambled it to make a type\n      specimen book. It has survived not only five centuries, but also the\n      leap into electronic typesetting, remaining essentially unchanged. It\n      was popularised in the 1960s with the release of Letraset sheets\n      containing Lorem Ipsum passages, and more recently with desktop\n      publishing software like Aldus PageMaker including versions of Lorem\n      Ipsum.\n    ")])],1),t._v(" "),n("section",{staticClass:"space-y-6"},[n("Heading2",{staticClass:"font-black"},[t._v("ที่มาของข้อมูล & ข้อจำกัด")]),t._v(" "),n("Paragraph1",[t._v("\n      dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an\n      unknown printer took a galley of type and scrambled it to make a type\n      specimen book. It has survived not only five centuries, but also the\n      leap into electronic typesetting, remaining essentially unchanged. It\n      was popularised in the 1960s with the release of Letraset sheets\n      containing Lorem Ipsum passages, and more recently with desktop\n      publishing software like Aldus PageMaker including versions of Lorem\n      Ipsum.\n    ")])],1),t._v(" "),n("section",{staticClass:"space-y-6"},[n("Heading2",{staticClass:"font-black"},[t._v("อาสาสมัครร่วมพัฒนา")]),t._v(" "),n("Paragraph1",[t._v("\n      dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s, when an\n      unknown printer took a galley of type and scrambled it to make a type\n      specimen book. It has survived not only five centuries, but also the\n      leap into electronic typesetting, remaining essentially unchanged. It\n      was popularised in the 1960s with the release of Letraset sheets\n      containing Lorem Ipsum passages, and more recently with desktop\n      publishing software like Aldus PageMaker including versions of Lorem\n      Ipsum.\n    ")])],1),t._v(" "),n("section",[n("SocialSharer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading1:n(237).default,Heading2:n(241).default,Paragraph1:n(232).default,SocialSharer:n(233).default})}}]);