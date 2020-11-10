// Compiled by ClojureScript 1.10.773 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (m){
return cljs.core.get.call(null,m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (m){
return cljs.core.keep.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31313 = arguments.length;
var i__4737__auto___31314 = (0);
while(true){
if((i__4737__auto___31314 < len__4736__auto___31313)){
args__4742__auto__.push((arguments[i__4737__auto___31314]));

var G__31315 = (i__4737__auto___31314 + (1));
i__4737__auto___31314 = G__31315;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq31310){
var G__31311 = cljs.core.first.call(null,seq31310);
var seq31310__$1 = cljs.core.next.call(null,seq31310);
var G__31312 = cljs.core.first.call(null,seq31310__$1);
var seq31310__$2 = cljs.core.next.call(null,seq31310__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31311,G__31312,seq31310__$2);
}));


//# sourceMappingURL=util.js.map?rel=1604387927024
