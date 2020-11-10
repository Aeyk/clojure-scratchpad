// Compiled by ClojureScript 1.10.773 {}
goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form.call(null,spec);
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_.call(null,form)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,form));
} else {
return spec_tools.visitor.spec_dispatch.call(null,form,accept,options);
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_.call(null,spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_.call(null,spec)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,spec_tools.impl.strip_fn_if_needed.call(null,spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol.call(null,spec);
} else {
return spec_tools.impl.normalize_symbol.call(null,spec_tools.form.resolve_form.call(null,spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__30498 = arguments.length;
switch (G__30498) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.call(null,spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__30499){
var map__30500 = p__30499;
var map__30500__$1 = (((((!((map__30500 == null))))?(((((map__30500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30500):map__30500);
var options = map__30500__$1;
var visited = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not.call(null,cljs.core.get.call(null,visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.call(null,options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.call(null,null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),spec,cljs.core.vec.call(null,(((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form.call(null,spec):spec)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),spec,cljs.core.mapv.call(null,(function (p1__30503_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30503_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__30505 = spec_tools.impl.extract_form.call(null,spec);
var seq__30506 = cljs.core.seq.call(null,vec__30505);
var first__30507 = cljs.core.first.call(null,seq__30506);
var seq__30506__$1 = cljs.core.next.call(null,seq__30506);
var _ = first__30507;
var map__30508 = seq__30506__$1;
var map__30508__$1 = (((((!((map__30508 == null))))?(((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var inner_spec_map = map__30508__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),spec,cljs.core.mapv.call(null,(function (p1__30504_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30504_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__30511 = spec_tools.impl.extract_form.call(null,spec);
var seq__30512 = cljs.core.seq.call(null,vec__30511);
var first__30513 = cljs.core.first.call(null,seq__30512);
var seq__30512__$1 = cljs.core.next.call(null,seq__30512);
var _ = first__30513;
var inner_specs = seq__30512__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),spec,cljs.core.mapv.call(null,(function (p1__30510_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30510_SHARP_,accept,options);
}),inner_specs),options);
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__30515 = spec_tools.impl.extract_form.call(null,spec);
var seq__30516 = cljs.core.seq.call(null,vec__30515);
var first__30517 = cljs.core.first.call(null,seq__30516);
var seq__30516__$1 = cljs.core.next.call(null,seq__30516);
var _ = first__30517;
var inner_specs = seq__30516__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),spec,cljs.core.mapv.call(null,(function (p1__30514_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30514_SHARP_,accept,options);
}),inner_specs),options);
});
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__30518 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30518,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30518,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__30522 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30522,(0),null);
var inner_spec1 = cljs.core.nth.call(null,vec__30522,(1),null);
var inner_spec2 = cljs.core.nth.call(null,vec__30522,(2),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),spec,cljs.core.mapv.call(null,(function (p1__30521_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30521_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form.call(null,spec);
var pred = cljs.core.second.call(null,form);
var map__30525 = spec_tools.parse.parse_spec.call(null,form);
var map__30525__$1 = (((((!((map__30525 == null))))?(((((map__30525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30525):map__30525);
var type = cljs.core.get.call(null,map__30525__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__30527 = type;
var G__30527__$1 = (((G__30527 instanceof cljs.core.Keyword))?G__30527.fqn:null);
switch (G__30527__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30527__$1)].join('')));

}
})();
return accept.call(null,dispatch,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,pred,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__30530 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30530,(0),null);
var k = cljs.core.nth.call(null,vec__30530,(1),null);
var v = cljs.core.nth.call(null,vec__30530,(2),null);
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908),spec,cljs.core.mapv.call(null,(function (p1__30529_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30529_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__30533 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30533,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30533,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__30536 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30536,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30536,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__30539 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30539,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30539,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__30543 = spec_tools.impl.extract_form.call(null,spec);
var seq__30544 = cljs.core.seq.call(null,vec__30543);
var first__30545 = cljs.core.first.call(null,seq__30544);
var seq__30544__$1 = cljs.core.next.call(null,seq__30544);
var _ = first__30545;
var map__30546 = seq__30544__$1;
var map__30546__$1 = (((((!((map__30546 == null))))?(((((map__30546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30546):map__30546);
var inner_spec_map = map__30546__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),spec,cljs.core.mapv.call(null,(function (p1__30542_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30542_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__30549 = spec_tools.impl.extract_form.call(null,spec);
var seq__30550 = cljs.core.seq.call(null,vec__30549);
var first__30551 = cljs.core.first.call(null,seq__30550);
var seq__30550__$1 = cljs.core.next.call(null,seq__30550);
var _ = first__30551;
var map__30552 = seq__30550__$1;
var map__30552__$1 = (((((!((map__30552 == null))))?(((((map__30552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30552):map__30552);
var inner_spec_map = map__30552__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),spec,cljs.core.mapv.call(null,(function (p1__30548_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30548_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__30554 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30554,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30554,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__30558 = spec_tools.impl.extract_form.call(null,spec);
var seq__30559 = cljs.core.seq.call(null,vec__30558);
var first__30560 = cljs.core.first.call(null,seq__30559);
var seq__30559__$1 = cljs.core.next.call(null,seq__30559);
var _ = first__30560;
var inner_specs = seq__30559__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),spec,cljs.core.mapv.call(null,(function (p1__30557_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30557_SHARP_,accept,options);
}),inner_specs),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),spec,cljs.core.mapv.call(null,(function (p1__30561_SHARP_){
return spec_tools.visitor.visit.call(null,p1__30561_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__30562 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30562,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__30562,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__30565 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__30565,(0),null);
var map__30568 = cljs.core.nth.call(null,vec__30565,(1),null);
var map__30568__$1 = (((((!((map__30568 == null))))?(((((map__30568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);
var inner_spec = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
return accept.call(null,spec_tools.visitor.spec_dispatch.call(null,spec,accept,options),spec,null,options);
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5741__auto__ = cljs.spec.alpha.get_spec.call(null,spec);
if(cljs.core.truth_(temp__5741__auto__)){
var s = temp__5741__auto__;
return cljs.core.swap_BANG_.call(null,specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref.call(null,specs);
}
});
});

//# sourceMappingURL=visitor.js.map?rel=1604387924915
