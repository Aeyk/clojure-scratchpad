// Compiled by ClojureScript 1.10.773 {}
goog.provide('daiquiri.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
daiquiri.util.valid_key_QMARK_ = (function daiquiri$util$valid_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)));
});
daiquiri.util._camel_case = (function daiquiri$util$_camel_case(k){
if(typeof k === 'string'){
return k;
} else {
var vec__24158 = cljs.core.name.call(null,k).split("-");
var seq__24159 = cljs.core.seq.call(null,vec__24158);
var first__24160 = cljs.core.first.call(null,seq__24159);
var seq__24159__$1 = cljs.core.next.call(null,seq__24159);
var first_word = first__24160;
var words = seq__24159__$1;
if(((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
}
});
daiquiri.util.attrs_cache = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 *   Does not convert string attributes.
 */
daiquiri.util.camel_case = (function daiquiri$util$camel_case(k){
if(daiquiri.util.valid_key_QMARK_.call(null,k)){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,daiquiri.util.attrs_cache),k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var kk = daiquiri.util._camel_case.call(null,k);
cljs.core._vreset_BANG_.call(null,daiquiri.util.attrs_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,daiquiri.util.attrs_cache),k,kk));

return kk;
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
daiquiri.util.camel_case_keys = (function daiquiri$util$camel_case_keys(m){
if(cljs.core.map_QMARK_.call(null,m)){
var m__$1 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (p1__24161_SHARP_,p2__24162_SHARP_,p3__24163_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__24161_SHARP_,daiquiri.util.camel_case.call(null,p2__24162_SHARP_),p3__24163_SHARP_);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
var G__24164 = m__$1;
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.call(null,G__24164,new cljs.core.Keyword(null,"style","style",-496642736),daiquiri.util.camel_case_keys);
} else {
return G__24164;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
daiquiri.util.element_QMARK_ = (function daiquiri$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.nth.call(null,x,(0),null) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
daiquiri.util.html_to_dom_attrs = (function daiquiri$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys.call(null,daiquiri.util.camel_case_keys.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
daiquiri.util.join_classes = (function daiquiri$util$join_classes(classes){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq.call(null,x);
}
})),cljs.core.remove.call(null,cljs.core.nil_QMARK_)),classes));
});

//# sourceMappingURL=util.js.map?rel=1604387910608
