(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(e,t,r){var content=r(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("29c5defe",content,!0,{sourceMap:!1})},235:function(e,t,r){"use strict";r(234)},236:function(e,t,r){var n=r(54)(!1);n.push([e.i,".crew[data-v-1e1d8434],.member-info[data-v-1e1d8434]{flex-direction:column;align-items:center}.member-info[data-v-1e1d8434]{text-align:center}img[data-v-1e1d8434]{height:223px}.member-role[data-v-1e1d8434]{font-size:16px;color:hsl(var(--clr-white)/.25)}.member-name[data-v-1e1d8434]{font-size:24px}.img-container[data-v-1e1d8434]{width:90vw;border-bottom:2px solid hsl(var(--clr-white)/.25);justify-content:center}.numbered-title[data-v-1e1d8434]{font-size:16px}",""]),e.exports=n},237:function(e,t,r){"use strict";r.r(t);var n=r(9),c=(r(53),r(16),{data:function(){return{crew:[],active:0}},computed:{member:function(){return this.crew[this.crew.length-1-this.active]}},methods:{loadData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://space.wp.seiwald.hak-stjo.schulwebspace.at/wp-json/wp/v2/crew");case 2:return r=t.sent,t.next=5,r.json();case 5:e.crew=t.sent;case 6:case"end":return t.stop()}}),t)})))()},setMember:function(e){this.active=e}},mounted:function(){this.loadData(),document.body.style.backgroundImage="url('background-crew-mobile.jpg')"}}),o=(r(235),r(32)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container flow flex crew"},[e._m(0),e._v(" "),e.member?r("div",{staticClass:"img-container flex"},[r("img",{staticClass:"member-picture",attrs:{src:e.member["webp-image"].guid,alt:""}})]):e._e(),e._v(" "),r("div",{staticClass:"dot-indicators flex"},e._l(e.crew,(function(t,n){return r("button",{key:n,on:{click:function(t){return e.setMember(n)}}})})),0),e._v(" "),e.member?r("div",{staticClass:"container flex member-info"},[r("div",{staticClass:"uppercase ff-serif member-role"},[e._v(e._s(e.member.role))]),e._v(" "),r("div",{staticClass:"uppercase ff-serif fs-700 member-name"},[e._v("\n      "+e._s(e.member["crew-name"])+"\n    ")]),e._v(" "),r("p",{staticClass:"text-accent"},[e._v(e._s(e.member.bio))])]):e._e()])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"numbered-title"},[r("span",[e._v("02")]),e._v(" Meet your Crew")])}],!1,null,"1e1d8434",null);t.default=component.exports}}]);