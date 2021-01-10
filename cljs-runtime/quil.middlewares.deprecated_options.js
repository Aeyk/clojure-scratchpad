goog.provide('quil.middlewares.deprecated_options');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157)) : features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157))))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks `options` map for deprecated options, removes them and
 *   prints messages explaining how to fix them.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function quil$middlewares$deprecated_options$deprecated_options_$_iter__43919(s__43920){
return (new cljs.core.LazySeq(null,(function (){
var s__43920__$1 = s__43920;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__43920__$1);
if(temp__5743__auto__){
var s__43920__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43920__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43920__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43922 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43921 = (0);
while(true){
if((i__43921 < size__4528__auto__)){
var vec__43924 = cljs.core._nth(c__4527__auto__,i__43921);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43924,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43924,(1),null);
cljs.core.chunk_append(b__43922,(function (){var temp__5741__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5741__auto__)){
var vec__43927 = temp__5741__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__43938 = (i__43921 + (1));
i__43921 = G__43938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43922),quil$middlewares$deprecated_options$deprecated_options_$_iter__43919(cljs.core.chunk_rest(s__43920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43922),null);
}
} else {
var vec__43930 = cljs.core.first(s__43920__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43930,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43930,(1),null);
return cljs.core.cons((function (){var temp__5741__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5741__auto__)){
var vec__43933 = temp__5741__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43933,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43933,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__43919(cljs.core.rest(s__43920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options__$1);
})()));
});

//# sourceMappingURL=quil.middlewares.deprecated_options.js.map
