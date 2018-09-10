!function(t){var e={};function s(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e){t.exports=function(t,e,s,a,r,i){var n,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,o=t.default);var c,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),r&&(d._scopeId=r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=c):a&&(c=a),c){var _=d.functional,v=_?d.render:d.beforeCreate;_?(d._injectStyles=c,d.render=function(t,e){return c.call(e),v(t,e)}):d.beforeCreate=v?[].concat(v,c):[c]}return{esModule:n,exports:o,options:d}}},function(t,e,s){t.exports=s(2)},function(t,e,s){Nova.booting(function(t,e){t.component("intercom-viewer",s(3)),t.component("nav-menu",s(6)),e.addRoutes([{name:"intercom-viewer-more",path:"/intercom-viewer/:resourceName/more/:userId",component:s(9),props:!0},{name:"intercom-viewer-events",path:"/intercom-viewer/:resourceName/events/:userId",component:s(12),props:!0},{name:"intercom-viewer-notes",path:"/intercom-viewer/:resourceName/notes/:userId",component:s(15),props:!0},{name:"intercom-viewer-conversations",path:"/intercom-viewer/:resourceName/conversations/:userId",component:s(18),props:!0}])})},function(t,e,s){var a=s(0)(s(4),s(5),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","resourceId","field"],data:function(){return{loading:!0,user:null,intercomUser:!1,app_id:Nova.config.app_id}},computed:{basePath:function(){return Nova.config.base},morePath:function(){return this.basePath+"/intercom-viewer/"+this.resourceName+"/more/"+this.resourceId},conversationsPath:function(){return this.basePath+"/intercom-viewer/"+this.resourceName+"/conversations/"+this.resourceId},eventsPath:function(){return this.basePath+"/intercom-viewer/"+this.resourceName+"/events/"+this.resourceId},notesPath:function(){return this.basePath+"/intercom-viewer/"+this.resourceName+"/notes/"+this.resourceId}},mounted:function(){this.loadUserData()},methods:{loadUserData:function(){var t=this;Nova.request().get("/nova-vendor/intercom-viewer/user/"+this.resourceId).then(function(e){t.user=e.data,t.intercomUser=!0,t.loading=!1})},created:function(t){var e=new Date(1e3*t);return e.toDateString()+" "+e.toLocaleTimeString()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading-view",{attrs:{loading:t.loading}},[t.intercomUser?t._e():s("p",{staticClass:"text-90"},[t._v("\n            User has no data on intercom\n        ")]),t._v(" "),t.intercomUser?s("div",[t.field.hide_field_avatar?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("avatar")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("span",{staticClass:"whitespace-no-wrap text-left flex items-center"},[s("img",{staticClass:"w-8 h-8 rounded-full mr-4",attrs:{src:t.user.avatar.image_url,alt:"`Avatar of ${user.name}`"}})])])]),t._v(" "),t.field.hide_field_id?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("intercom's id")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.id))])])]),t._v(" "),t.field.hide_field_email?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("email")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.email))])])]),t._v(" "),t.field.hide_field_phone?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("phone")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.phone))])])]),t._v(" "),t.field.hide_field_name?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("name")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.name))])])]),t._v(" "),t.field.hide_field_anonymous?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("anonymous")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.anonymous))])])]),t._v(" "),t.field.hide_field_pseudonym?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("pseudonym")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.pseudonym))])])]),t._v(" "),t.field.hide_field_last_seen_ip?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("last_seen_ip")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.last_seen_ip))])])]),t._v(" "),t.field.hide_field_remote_created_at?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("remote_created_at")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.created(t.user.remote_created_at)))])])]),t._v(" "),t.field.hide_field_created_at?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("created_at")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.created(t.user.created_at)))])])]),t._v(" "),t.field.hide_field_updated_at?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("updated_at")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.created(t.user.updated_at)))])])]),t._v(" "),t.field.hide_field_signed_up_at?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("signed_up_at")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.created(t.user.signed_up_at)))])])]),t._v(" "),t.field.hide_field_last_request_at?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("last_request_at")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.created(t.user.last_request_at)))])])]),t._v(" "),t.field.hide_field_session_count?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("session_count")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.session_count))])])]),t._v(" "),t.field.hide_field_unsubscribed_from_emails?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("unsubscribed_from_emails")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.unsubscribed_from_emails))])])]),t._v(" "),t.field.hide_field_marked_email_as_spam?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("marked_email_as_spam")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.marked_email_as_spam))])])]),t._v(" "),t.field.hide_field_has_hard_bounced?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("has_hard_bounced")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.has_hard_bounced))])])]),t._v(" "),t.field.hide_field_user_agent_data?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("user_agent_data")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.user.user_agent_data))])])]),t._v(" "),t.field.hide_field_analytics?t._e():s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("Analytics")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[s("strong",[t._v("referrer")]),t._v(": "+t._s(t.user.referrer)+"\n                    "),s("strong",[t._v("utm_campaign")]),t._v(": "+t._s(t.user.utm_campaign)+"\n                    "),s("strong",[t._v("utm_content")]),t._v(": "+t._s(t.user.utm_content)+"\n                    "),s("strong",[t._v("utm_medium")]),t._v(": "+t._s(t.user.utm_medium)+"\n                    "),s("strong",[t._v("utm_source")]),t._v(": "+t._s(t.user.utm_source)+"\n                    "),s("strong",[t._v("utm_term")]),t._v(": "+t._s(t.user.utm_term)+"\n                    \n                ")])])]),t._v(" "),t.intercomUser?s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80 font-bold"},[t._v("More")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[s("a",{staticClass:"text-primary no-underline",attrs:{href:"https://app.intercom.io/a/apps/"+this.app_id+"/users/"+this.user.id}},[t._v("\n                        User @ Intercom\n                    ")]),t._v(" / Panels:\n                    "),s("a",{staticClass:"text-primary no-underline",attrs:{href:t.morePath}},[t._v("\n                        Social, Location & Custom Attributes\n                    ")]),t._v(" / "),s("a",{staticClass:"text-primary no-underline",attrs:{href:t.conversationsPath}},[t._v("\n                        Conversations\n                    ")]),t._v(" / "),s("a",{staticClass:"text-primary no-underline",attrs:{href:t.eventsPath}},[t._v("\n                        Events\n                    ")]),t._v(" / "),s("a",{staticClass:"text-primary no-underline",attrs:{href:t.notesPath}},[t._v("\n                        Notes\n                    ")])])])]):t._e()]):t._e()])],1)},staticRenderFns:[]}},function(t,e,s){var a=s(0)(s(7),s(8),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourcename","resourceid","current"],data:function(){return{basePath:Nova.config.base}},methods:{path:function(t){return this.basePath+"/intercom-viewer/"+this.resourcename+"/"+t+"/"+this.resourceid},classes:function(t){return"btn btn-default btn-white hover:bg-80 hover:text-white text-80 mr-"+t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml-auto flex"},[s("a",{class:t.classes(6),attrs:{href:t.basePath+"/resources/"+t.resourcename+"/"+t.resourceid}},[t._v("Back")]),t._v(" "),t._l(["conversations","events","more","notes"],function(e){return t.current!=e?s("a",{class:t.classes(2),attrs:{href:t.path(e)}},[t._v(t._s(e))]):t._e()})],2)},staticRenderFns:[]}},function(t,e,s){var a=s(0)(s(10),s(11),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","userId"],data:function(){return{loading:!0,user:[],social_profiles:[],location_data:[],custom_attributes:[]}},mounted:function(){this.loadUserData()},methods:{loadUserData:function(){var t=this;Nova.request().get("/nova-vendor/intercom-viewer/user/"+this.userId).then(function(e){t.user=e.data,t.social_profiles=t.user.social_profiles.social_profiles,t.location_data=t.user.location_data,t.custom_attributes=t.user.custom_attributes,t.loading=!1})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center mb-3"},[s("heading",{staticClass:"mb-6"},[t._v("More User Info")]),t._v(" "),s("nav-menu",{attrs:{resourcename:t.resourceName,resourceid:t.userId,current:"more"}})],1),t._v(" "),s("loading-view",{attrs:{loading:t.loading}},[s("card",{staticClass:"mb-6 relative"},[s("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[s("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Social Network")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("ID")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Username")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("URL")])])])]),t._v(" "),s("tbody",t._l(t.social_profiles,function(e){return s("tr",[s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.name))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.id))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.username))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[s("a",{staticClass:"text-primary no-underline",attrs:{href:e.url,target:"_social"}},[t._v(t._s(e.url))])])])])}))])])]),t._v(" "),s("heading",{staticClass:"mb-6"},[t._v("Location Data")]),t._v(" "),s("card",{staticClass:"h-auto p-4 mb-4"},[s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("city_name")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.city_name))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("continent_code")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.continent_code))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("country_code")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.country_code))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("country_name")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.country_name))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("latitude, longitude")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[s("a",{staticClass:"text-primary no-underline",attrs:{href:"https://www.google.com/maps/search/"+t.location_data.latitude+","+t.location_data.longitude,target:"_maps"}},[t._v(t._s(t.location_data.latitude)+", "+t._s(t.location_data.longitude))])])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("postal_code")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.postal_code))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("region_name")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.region_name))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("timezone")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.timezone))])])]),t._v(" "),s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v("city_name")])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(t.location_data.city_name))])])])]),t._v(" "),s("heading",{staticClass:"mb-6"},[t._v("Custom Attributes")]),t._v(" "),s("card",{staticClass:"h-auto p-4 mb-4"},t._l(t.custom_attributes,function(e,a){return s("div",{staticClass:"flex border-b border-40"},[s("div",{staticClass:"w-1/4 py-4"},[s("h4",{staticClass:"font-normal text-80"},[t._v(t._s(a))])]),t._v(" "),s("div",{staticClass:"w-3/4 py-4"},[s("p",{staticClass:"text-90"},[t._v(t._s(e))])])])}))],1)],1)},staticRenderFns:[]}},function(t,e,s){var a=s(0)(s(13),s(14),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","userId"],data:function(){return{loading:!0,events:[]}},computed:{basePath:function(){return Nova.config.base}},mounted:function(){this.loadUserEvents()},methods:{loadUserEvents:function(){var t=this;Nova.request().get("/nova-vendor/intercom-viewer/user/"+this.userId+"/events").then(function(e){t.events=e.data,t.loading=!1})},created:function(t){var e=new Date(1e3*t);return e.toDateString()+" "+e.toLocaleTimeString()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center mb-3"},[s("heading",{staticClass:"mb-6"},[t._v("User Events")]),t._v(" "),s("nav-menu",{attrs:{resourcename:t.resourceName,resourceid:t.userId,current:"events"}})],1),t._v(" "),s("loading-view",{attrs:{loading:t.loading}},[!t.loading&&t.events&&t.events.length?s("div",{staticClass:"card mb-6 relative"},[s("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[s("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Created")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Name")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("metadata")])])])]),t._v(" "),s("tbody",t._l(t.events,function(e){return s("tr",[s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(t.created(e.created_at)))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.event_name))])]),t._v(" "),s("td",[Object.getOwnPropertyNames(e.metadata).length>1?s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.metadata))]):t._e()])])}))])])]):t._e(),t._v(" "),t.events.length?s("card",{staticClass:"h-auto p-4 mb-4"},[s("p",[s("strong",[t._v("Created")]),t._v(": The time the event occurred as a UTC Unix timestamp.\n                ")]),s("hr"),t._v(" "),s("strong",[t._v("Name")]),t._v(": The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example updated-plan.\n                "),s("hr"),t._v(" "),s("strong",[t._v("Metadata")]),t._v(": optional metadata about the event.\n            "),s("p")]):t._e()],1),t._v(" "),t.loading||t.events.length?t._e():s("div",{staticClass:"card mb-6 py-3 px-6"},[s("p",{staticClass:"text-90"},[t._v("User has no events.")])])],1)},staticRenderFns:[]}},function(t,e,s){var a=s(0)(s(16),s(17),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","userId"],data:function(){return{loading:!0,notes:[]}},computed:{basePath:function(){return Nova.config.base}},mounted:function(){this.loadUserNotes()},methods:{loadUserNotes:function(){var t=this;Nova.request().get("/nova-vendor/intercom-viewer/user/"+this.userId+"/notes").then(function(e){t.notes=e.data,t.loading=!1})},created:function(t){var e=new Date(1e3*t);return e.toDateString()+" "+e.toLocaleTimeString()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center mb-3"},[s("heading",{staticClass:"mb-6"},[t._v("User Notes")]),t._v(" "),s("nav-menu",{attrs:{resourcename:t.resourceName,resourceid:t.userId,current:"notes"}})],1),t._v(" "),s("loading-view",{attrs:{loading:t.loading}},[!t.loading&&t.notes&&t.notes.length?s("div",{staticClass:"card mb-6 relative"},[s("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[s("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Created")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Author")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Body")])])])]),t._v(" "),s("tbody",t._l(t.notes,function(e){return s("tr",[s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(t.created(e.created_at)))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left flex items-center"},[s("img",{staticClass:"w-8 h-8 rounded-full mr-4",attrs:{src:e.author.avatar.image_url,alt:"`Avatar of ${note.author.name}`"}}),t._v(" "),s("div",{staticClass:"text-sm"},[s("p",{staticClass:"text-black leading-none"},[t._v(t._s(e.author.name))]),t._v(" "),s("p",{staticClass:"text-grey-dark"},[t._v(t._s(e.author.type))])])])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.body.replace(/<[^>]*>/g,"")))])])])}))])])]):t._e(),t._v(" "),t.notes.length?s("card",{staticClass:"h-auto p-4 mb-4"},[s("p",[s("strong",[t._v("Created")]),t._v(": The time the note was created as a UTC Unix timestamp.\n                ")]),s("hr"),t._v(" "),s("strong",[t._v("Author")]),t._v(": Optional. Represents the Admin that created the note.\n                "),s("hr"),t._v(" "),s("strong",[t._v("Body")]),t._v(": The body text of the note.\n            "),s("p")]):t._e()],1),t._v(" "),t.loading||t.notes.length?t._e():s("div",{staticClass:"card mb-6 py-3 px-6"},[s("p",{staticClass:"text-90"},[t._v("User has no notes.")])])],1)},staticRenderFns:[]}},function(t,e,s){var a=s(0)(s(19),s(20),!1,null,null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resourceName","userId"],data:function(){return{loading:!0,conversations:[],app_id:Nova.config.app_id}},computed:{basePath:function(){return Nova.config.base}},mounted:function(){this.loadUserConversations()},methods:{loadUserConversations:function(){var t=this;Nova.request().get("/nova-vendor/intercom-viewer/user/"+this.userId+"/conversations").then(function(e){t.conversations=e.data,t.loading=!1})},created:function(t){var e=new Date(1e3*t);return e.toDateString()+" "+e.toLocaleTimeString()},conversationPath:function(t){return"https://app.intercom.io/a/apps/"+this.app_id+"/inbox/inbox/all/conversations/"+t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex items-center mb-3"},[s("heading",{staticClass:"mb-6"},[t._v("User Conversations")]),t._v(" "),s("nav-menu",{attrs:{resourcename:t.resourceName,resourceid:t.userId,current:"conversations"}})],1),t._v(" "),s("loading-view",{attrs:{loading:t.loading}},[!t.loading&&t.conversations&&t.conversations.length?s("div",{staticClass:"card mb-6 relative"},[s("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[s("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Time")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Message")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("Read?")])]),t._v(" "),s("th",{staticClass:"text-left"},[s("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("State")])]),t._v(" "),s("th")])]),t._v(" "),s("tbody",t._l(t.conversations,function(e){return s("tr",[s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                            Created: "+t._s(t.created(e.created_at))),s("hr"),t._v("\n                            Updated: "+t._s(t.created(e.updated_at))+"\n                        ")])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[e.conversation_message.subject?s("span",[t._v("Subject: "+t._s(e.conversation_message.subject)),s("hr")]):t._e(),t._v("\n                            "+t._s(e.conversation_message.body.replace(/<[^>]*>/g,""))+"\n                        ")])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.state))])]),t._v(" "),s("td",[s("span",{staticClass:"whitespace-no-wrap text-left"},[t._v(t._s(e.read?"read":"unread"))])]),t._v(" "),s("td",{staticClass:"text-right"},[s("a",{staticClass:"text-primary no-underline",attrs:{href:t.conversationPath(e.id),target:"conversation_"+e.id}},[t._v("\n                                Conversation\n                            ")])])])}))])])]):t._e(),t._v(" "),t.conversations.length?s("card",{staticClass:"h-auto p-4 mb-4"},[s("p",[s("strong",[t._v("Created")]),t._v(": The time the conversation was created as a UTC Unix timestamp.\n                ")]),s("hr"),t._v(" "),s("strong",[t._v("Updated")]),t._v(": The last time the conversation was updated as a UTC Unix timestamp.\n                "),s("hr"),t._v(" "),s("strong",[t._v("Message")]),t._v(": The message that started the conversation rendered for presentation.\n                "),s("hr"),t._v(" "),s("strong",[t._v("State")]),t._v(': Can be set to "open", "closed" or "snoozed".\n                '),s("hr"),t._v(" "),s("strong",[t._v("Read?")]),t._v(": Indicates whether a conversation has been read.\n            "),s("p")]):t._e()],1),t._v(" "),t.loading||t.conversations.length?t._e():s("div",{staticClass:"card mb-6 py-3 px-6"},[s("p",{staticClass:"text-90"},[t._v("User has no conversations.")])])],1)},staticRenderFns:[]}}]);