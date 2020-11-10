// Compiled by ClojureScript 1.10.773 {}
goog.provide('daiquiri.normalize');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('daiquiri.util');
daiquiri.normalize.class_name = (function daiquiri$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
daiquiri.normalize.map_lookup_QMARK_ = (function daiquiri$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
daiquiri.normalize.normalize_class = (function daiquiri$normalize$normalize_class(class$){
if((class$ == null)){
return null;
} else {
if(daiquiri.normalize.map_lookup_QMARK_.call(null,class$)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_.call(null,class$)){
if((cljs.core.first.call(null,class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.call(null,daiquiri.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.normalize.class_name.call(null,class$)], null);
} else {
if(((((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))) && (cljs.core.every_QMARK_.call(null,(function (p1__29414_SHARP_){
return (((p1__29414_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__29414_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.call(null,daiquiri.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))){
return cljs.core.mapv.call(null,daiquiri.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
daiquiri.normalize.attributes = (function daiquiri$normalize$attributes(attrs){
var G__29415 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update.call(null,G__29415,new cljs.core.Keyword(null,"class","class",-2030961996),daiquiri.normalize.normalize_class);
} else {
return G__29415;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
daiquiri.normalize.merge_with_class = (function daiquiri$normalize$merge_with_class(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29418 = arguments.length;
var i__4737__auto___29419 = (0);
while(true){
if((i__4737__auto___29419 < len__4736__auto___29418)){
args__4742__auto__.push((arguments[i__4737__auto___29419]));

var G__29420 = (i__4737__auto___29419 + (1));
i__4737__auto___29419 = G__29420;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,daiquiri.normalize.attributes,maps);
var classes = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
if(cljs.core.seq.call(null,maps__$1)){
var G__29417 = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if((!(cljs.core.empty_QMARK_.call(null,classes)))){
return cljs.core.assoc.call(null,G__29417,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec.call(null,classes));
} else {
return G__29417;
}
} else {
return null;
}
}));

(daiquiri.normalize.merge_with_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(daiquiri.normalize.merge_with_class.cljs$lang$applyTo = (function (seq29416){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29416));
}));

/**
 * Strip the # and . characters from the beginning of `s`.
 */
daiquiri.normalize.strip_css = (function daiquiri$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
daiquiri.normalize.match_tag = (function daiquiri$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__29423 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null),cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__29423,(0),null);
var names = cljs.core.nth.call(null,vec__29423,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,daiquiri.normalize.strip_css.call(null,cljs.core.some.call(null,(function (p1__29421_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__29421_SHARP_))){
return p1__29421_SHARP_;
} else {
return null;
}
}),names)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__29422_SHARP_){
if(cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__29422_SHARP_))){
return daiquiri.normalize.strip_css.call(null,p1__29422_SHARP_);
} else {
return null;
}
})),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
daiquiri.normalize.children = (function daiquiri$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):((daiquiri.util.element_QMARK_.call(null,x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_.call(null,x))?x:((((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && ((!(typeof cljs.core.first.call(null,x) === 'string'))) && ((!(daiquiri.util.element_QMARK_.call(null,cljs.core.first.call(null,x)))))))?daiquiri.normalize.children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
daiquiri.normalize.attrs_QMARK_ = (function daiquiri$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_.call(null,x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
daiquiri.normalize.element = (function daiquiri$normalize$element(p__29426){
var vec__29427 = p__29426;
var seq__29428 = cljs.core.seq.call(null,vec__29427);
var first__29429 = cljs.core.first.call(null,seq__29428);
var seq__29428__$1 = cljs.core.next.call(null,seq__29428);
var tag = first__29429;
var content = seq__29428__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__29430 = daiquiri.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__29430,(0),null);
var id = cljs.core.nth.call(null,vec__29430,(1),null);
var class$ = cljs.core.nth.call(null,vec__29430,(2),null);
var tag_attrs = (function (){var G__29433 = cljs.core.PersistentArrayMap.EMPTY;
var G__29433__$1 = (((!(cljs.core.empty_QMARK_.call(null,id))))?cljs.core.assoc.call(null,G__29433,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__29433);
if((!(cljs.core.empty_QMARK_.call(null,class$)))){
return cljs.core.assoc.call(null,G__29433__$1,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__29433__$1;
}
})();
var map_attrs = cljs.core.first.call(null,content);
if(daiquiri.normalize.attrs_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,daiquiri.normalize.merge_with_class.call(null,tag_attrs,map_attrs),daiquiri.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,daiquiri.normalize.attributes.call(null,tag_attrs),daiquiri.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map?rel=1604387923077
