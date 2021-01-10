goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57834){
var map__57835 = p__57834;
var map__57835__$1 = (((((!((map__57835 == null))))?(((((map__57835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57835):map__57835);
var m = map__57835__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5743__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5743__auto__)){
var ns = temp__5743__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57837_57938 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57838_57939 = null;
var count__57839_57940 = (0);
var i__57840_57941 = (0);
while(true){
if((i__57840_57941 < count__57839_57940)){
var f_57942 = chunk__57838_57939.cljs$core$IIndexed$_nth$arity$2(null,i__57840_57941);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57942], 0));


var G__57943 = seq__57837_57938;
var G__57944 = chunk__57838_57939;
var G__57945 = count__57839_57940;
var G__57946 = (i__57840_57941 + (1));
seq__57837_57938 = G__57943;
chunk__57838_57939 = G__57944;
count__57839_57940 = G__57945;
i__57840_57941 = G__57946;
continue;
} else {
var temp__5743__auto___57947 = cljs.core.seq(seq__57837_57938);
if(temp__5743__auto___57947){
var seq__57837_57948__$1 = temp__5743__auto___57947;
if(cljs.core.chunked_seq_QMARK_(seq__57837_57948__$1)){
var c__4556__auto___57949 = cljs.core.chunk_first(seq__57837_57948__$1);
var G__57950 = cljs.core.chunk_rest(seq__57837_57948__$1);
var G__57951 = c__4556__auto___57949;
var G__57952 = cljs.core.count(c__4556__auto___57949);
var G__57953 = (0);
seq__57837_57938 = G__57950;
chunk__57838_57939 = G__57951;
count__57839_57940 = G__57952;
i__57840_57941 = G__57953;
continue;
} else {
var f_57954 = cljs.core.first(seq__57837_57948__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57954], 0));


var G__57955 = cljs.core.next(seq__57837_57948__$1);
var G__57956 = null;
var G__57957 = (0);
var G__57958 = (0);
seq__57837_57938 = G__57955;
chunk__57838_57939 = G__57956;
count__57839_57940 = G__57957;
i__57840_57941 = G__57958;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57959 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57959], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57959)))?cljs.core.second(arglists_57959):arglists_57959)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57841_57960 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57842_57961 = null;
var count__57843_57962 = (0);
var i__57844_57963 = (0);
while(true){
if((i__57844_57963 < count__57843_57962)){
var vec__57855_57964 = chunk__57842_57961.cljs$core$IIndexed$_nth$arity$2(null,i__57844_57963);
var name_57965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855_57964,(0),null);
var map__57858_57966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855_57964,(1),null);
var map__57858_57967__$1 = (((((!((map__57858_57966 == null))))?(((((map__57858_57966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57858_57966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57858_57966):map__57858_57966);
var doc_57968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858_57967__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858_57967__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57965], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57969], 0));

if(cljs.core.truth_(doc_57968)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57968], 0));
} else {
}


var G__57970 = seq__57841_57960;
var G__57971 = chunk__57842_57961;
var G__57972 = count__57843_57962;
var G__57973 = (i__57844_57963 + (1));
seq__57841_57960 = G__57970;
chunk__57842_57961 = G__57971;
count__57843_57962 = G__57972;
i__57844_57963 = G__57973;
continue;
} else {
var temp__5743__auto___57974 = cljs.core.seq(seq__57841_57960);
if(temp__5743__auto___57974){
var seq__57841_57975__$1 = temp__5743__auto___57974;
if(cljs.core.chunked_seq_QMARK_(seq__57841_57975__$1)){
var c__4556__auto___57976 = cljs.core.chunk_first(seq__57841_57975__$1);
var G__57977 = cljs.core.chunk_rest(seq__57841_57975__$1);
var G__57978 = c__4556__auto___57976;
var G__57979 = cljs.core.count(c__4556__auto___57976);
var G__57980 = (0);
seq__57841_57960 = G__57977;
chunk__57842_57961 = G__57978;
count__57843_57962 = G__57979;
i__57844_57963 = G__57980;
continue;
} else {
var vec__57860_57981 = cljs.core.first(seq__57841_57975__$1);
var name_57982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57860_57981,(0),null);
var map__57863_57983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57860_57981,(1),null);
var map__57863_57984__$1 = (((((!((map__57863_57983 == null))))?(((((map__57863_57983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57863_57983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57863_57983):map__57863_57983);
var doc_57985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57863_57984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57863_57984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57982], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57986], 0));

if(cljs.core.truth_(doc_57985)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57985], 0));
} else {
}


var G__57987 = cljs.core.next(seq__57841_57975__$1);
var G__57988 = null;
var G__57989 = (0);
var G__57990 = (0);
seq__57841_57960 = G__57987;
chunk__57842_57961 = G__57988;
count__57843_57962 = G__57989;
i__57844_57963 = G__57990;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5743__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5743__auto__)){
var fnspec = temp__5743__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__57865 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57866 = null;
var count__57867 = (0);
var i__57868 = (0);
while(true){
if((i__57868 < count__57867)){
var role = chunk__57866.cljs$core$IIndexed$_nth$arity$2(null,i__57868);
var temp__5743__auto___57991__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5743__auto___57991__$1)){
var spec_57992 = temp__5743__auto___57991__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57992)], 0));
} else {
}


var G__57993 = seq__57865;
var G__57994 = chunk__57866;
var G__57995 = count__57867;
var G__57996 = (i__57868 + (1));
seq__57865 = G__57993;
chunk__57866 = G__57994;
count__57867 = G__57995;
i__57868 = G__57996;
continue;
} else {
var temp__5743__auto____$1 = cljs.core.seq(seq__57865);
if(temp__5743__auto____$1){
var seq__57865__$1 = temp__5743__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__57865__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57865__$1);
var G__57997 = cljs.core.chunk_rest(seq__57865__$1);
var G__57998 = c__4556__auto__;
var G__57999 = cljs.core.count(c__4556__auto__);
var G__58000 = (0);
seq__57865 = G__57997;
chunk__57866 = G__57998;
count__57867 = G__57999;
i__57868 = G__58000;
continue;
} else {
var role = cljs.core.first(seq__57865__$1);
var temp__5743__auto___58001__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5743__auto___58001__$2)){
var spec_58002 = temp__5743__auto___58001__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58002)], 0));
} else {
}


var G__58003 = cljs.core.next(seq__57865__$1);
var G__58004 = null;
var G__58005 = (0);
var G__58006 = (0);
seq__57865 = G__58003;
chunk__57866 = G__58004;
count__57867 = G__58005;
i__57868 = G__58006;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5743__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5743__auto__)){
var msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5743__auto__)){
var ed = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58008 = cljs.core.ex_cause(t);
via = G__58007;
t = G__58008;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5743__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5743__auto__)){
var root_msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5743__auto__)){
var data = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5743__auto__)){
var phase = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__57871 = datafied_throwable;
var map__57871__$1 = (((((!((map__57871 == null))))?(((((map__57871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57871):map__57871);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57871__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57871__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57871__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57872 = cljs.core.last(via);
var map__57872__$1 = (((((!((map__57872 == null))))?(((((map__57872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57872):map__57872);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57873 = data;
var map__57873__$1 = (((((!((map__57873 == null))))?(((((map__57873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57873):map__57873);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57873__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57873__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57873__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57874 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__57874__$1 = (((((!((map__57874 == null))))?(((((map__57874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57874):map__57874);
var top_data = map__57874__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__57879 = phase;
var G__57879__$1 = (((G__57879 instanceof cljs.core.Keyword))?G__57879.fqn:null);
switch (G__57879__$1) {
case "read-source":
var map__57880 = data;
var map__57880__$1 = (((((!((map__57880 == null))))?(((((map__57880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57880):map__57880);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57880__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57880__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57882 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__57882__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57882,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57882);
var G__57882__$2 = (cljs.core.truth_((function (){var fexpr__57883 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57883.cljs$core$IFn$_invoke$arity$1 ? fexpr__57883.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57883.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57882__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57882__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57882__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57882__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57884 = top_data;
var G__57884__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57884,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57884);
var G__57884__$2 = (cljs.core.truth_((function (){var fexpr__57885 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57885.cljs$core$IFn$_invoke$arity$1 ? fexpr__57885.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57885.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57884__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57884__$1);
var G__57884__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57884__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57884__$2);
var G__57884__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57884__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57884__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57884__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57884__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57886 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57886,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57886,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57886,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57886,(3),null);
var G__57889 = top_data;
var G__57889__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57889,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57889);
var G__57889__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57889__$1);
var G__57889__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57889__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57889__$2);
var G__57889__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57889__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57889__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57889__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57889__$4;
}

break;
case "execution":
var vec__57890 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57890,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57890,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57890,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57890,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57870_SHARP_){
var or__4126__auto__ = (p1__57870_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__57894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57894.cljs$core$IFn$_invoke$arity$1 ? fexpr__57894.cljs$core$IFn$_invoke$arity$1(p1__57870_SHARP_) : fexpr__57894.call(null,p1__57870_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__57895 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57895__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57895,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57895);
var G__57895__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57895__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57895__$1);
var G__57895__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57895__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57895__$2);
var G__57895__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57895__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57895__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57895__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57895__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57879__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57898){
var map__57899 = p__57898;
var map__57899__$1 = (((((!((map__57899 == null))))?(((((map__57899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57899):map__57899);
var triage_data = map__57899__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57899__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__57901 = phase;
var G__57901__$1 = (((G__57901 instanceof cljs.core.Keyword))?G__57901.fqn:null);
switch (G__57901__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57902 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57903 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57904 = loc;
var G__57905 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57906_58011 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57907_58012 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57908_58013 = true;
var _STAR_print_fn_STAR__temp_val__57909_58014 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57908_58013);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57909_58014);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57896_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57896_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57907_58012);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57906_58011);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57902,G__57903,G__57904,G__57905) : format.call(null,G__57902,G__57903,G__57904,G__57905));

break;
case "macroexpansion":
var G__57910 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57911 = cause_type;
var G__57912 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57913 = loc;
var G__57914 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57910,G__57911,G__57912,G__57913,G__57914) : format.call(null,G__57910,G__57911,G__57912,G__57913,G__57914));

break;
case "compile-syntax-check":
var G__57915 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57916 = cause_type;
var G__57917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57918 = loc;
var G__57919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57915,G__57916,G__57917,G__57918,G__57919) : format.call(null,G__57915,G__57916,G__57917,G__57918,G__57919));

break;
case "compilation":
var G__57920 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57921 = cause_type;
var G__57922 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57923 = loc;
var G__57924 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57920,G__57921,G__57922,G__57923,G__57924) : format.call(null,G__57920,G__57921,G__57922,G__57923,G__57924));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57925 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57926 = symbol;
var G__57927 = loc;
var G__57928 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57929_58015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57930_58016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57931_58017 = true;
var _STAR_print_fn_STAR__temp_val__57932_58018 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57931_58017);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57932_58018);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57897_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57897_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57930_58016);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57929_58015);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57925,G__57926,G__57927,G__57928) : format.call(null,G__57925,G__57926,G__57927,G__57928));
} else {
var G__57933 = "Execution error%s at %s(%s).\n%s\n";
var G__57934 = cause_type;
var G__57935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57936 = loc;
var G__57937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57933,G__57934,G__57935,G__57936,G__57937) : format.call(null,G__57933,G__57934,G__57935,G__57936,G__57937));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57901__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
