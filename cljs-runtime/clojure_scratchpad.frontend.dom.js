goog.provide('clojure_scratchpad.frontend.dom');
clojure_scratchpad.frontend.dom.q = (function clojure_scratchpad$frontend$dom$q(selector){
return document.querySelector(selector);
});
clojure_scratchpad.frontend.dom.set_value_BANG_ = (function clojure_scratchpad$frontend$dom$set_value_BANG_(el,value){
return (el.value = value);
});
clojure_scratchpad.frontend.dom.value = (function clojure_scratchpad$frontend$dom$value(el){
var val = el.value;
if(clojure.string.blank_QMARK_(val)){
return null;
} else {
return clojure.string.trim(val);
}
});
clojure_scratchpad.frontend.dom.date_value = (function clojure_scratchpad$frontend$dom$date_value(el){
var temp__5743__auto__ = clojure_scratchpad.frontend.dom.value(el);
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
clojure_scratchpad.frontend.dom.array_value = (function clojure_scratchpad$frontend$dom$array_value(el){
var temp__5743__auto__ = clojure_scratchpad.frontend.dom.value(el);
if(cljs.core.truth_(temp__5743__auto__)){
var val = temp__5743__auto__;
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/\s+/);
} else {
return null;
}
});

//# sourceMappingURL=clojure_scratchpad.frontend.dom.js.map
