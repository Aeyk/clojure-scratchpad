// Compiled by ClojureScript 1.10.773 {}
goog.provide('frontend.dom');
goog.require('cljs.core');
goog.require('clojure.string');
frontend.dom.q = (function frontend$dom$q(selector){
return document.querySelector(selector);
});
frontend.dom.set_value_BANG_ = (function frontend$dom$set_value_BANG_(el,value){
return (el.value = value);
});
frontend.dom.value = (function frontend$dom$value(el){
var val = el.value;
if(clojure.string.blank_QMARK_.call(null,val)){
return null;
} else {
return clojure.string.trim.call(null,val);
}
});
frontend.dom.date_value = (function frontend$dom$date_value(el){
var temp__5743__auto__ = frontend.dom.value.call(null,el);
if(cljs.core.truth_(temp__5743__auto__)){
var val = temp__5743__auto__;
var val__$1 = Date.parse(val);
if(cljs.core.truth_(isNaN(val__$1))){
return null;
} else {
return (new Date(val__$1));
}
} else {
return null;
}
});
frontend.dom.array_value = (function frontend$dom$array_value(el){
var temp__5743__auto__ = frontend.dom.value.call(null,el);
if(cljs.core.truth_(temp__5743__auto__)){
var val = temp__5743__auto__;
return clojure.string.split.call(null,val,/\s+/);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1604396930268
