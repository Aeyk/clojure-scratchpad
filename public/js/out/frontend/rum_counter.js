// Compiled by ClojureScript 1.10.773 {}
goog.provide('frontend.rum_counter');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.coercion.spec');
goog.require('spec_tools.data_spec');
goog.require('cljsjs.react');
cljs.core.enable_console_print_BANG_.call(null);
frontend.rum_counter.app = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (state,test){
var count = new cljs.core.Keyword("frontend.rum-counter","clicks","frontend.rum-counter/clicks",-1090316186).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element.call(null,"div",{'onClick':(function (_){
return cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
}),'className':"app"},[cljs.core.pr_str.call(null,cljs.core.deref.call(null,count))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,(0),new cljs.core.Keyword("frontend.rum-counter","clicks","frontend.rum-counter/clicks",-1090316186))], null),"frontend.rum-counter/app");
frontend.rum_counter.init_BANG_ = (function frontend$rum_counter$init_BANG_(){
return rum.core.mount.call(null,frontend.rum_counter.app.call(null),document.getElementById("app"));
});

//# sourceMappingURL=rum_counter.js.map?rel=1604387929905
