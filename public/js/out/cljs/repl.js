// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42832){
var map__42833 = p__42832;
var map__42833__$1 = (((((!((map__42833 == null))))?(((((map__42833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42833):map__42833);
var m = map__42833__$1;
var n = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
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
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42835_42867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42836_42868 = null;
var count__42837_42869 = (0);
var i__42838_42870 = (0);
while(true){
if((i__42838_42870 < count__42837_42869)){
var f_42871 = cljs.core._nth.call(null,chunk__42836_42868,i__42838_42870);
cljs.core.println.call(null,"  ",f_42871);


var G__42872 = seq__42835_42867;
var G__42873 = chunk__42836_42868;
var G__42874 = count__42837_42869;
var G__42875 = (i__42838_42870 + (1));
seq__42835_42867 = G__42872;
chunk__42836_42868 = G__42873;
count__42837_42869 = G__42874;
i__42838_42870 = G__42875;
continue;
} else {
var temp__5743__auto___42876 = cljs.core.seq.call(null,seq__42835_42867);
if(temp__5743__auto___42876){
var seq__42835_42877__$1 = temp__5743__auto___42876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42835_42877__$1)){
var c__4556__auto___42878 = cljs.core.chunk_first.call(null,seq__42835_42877__$1);
var G__42879 = cljs.core.chunk_rest.call(null,seq__42835_42877__$1);
var G__42880 = c__4556__auto___42878;
var G__42881 = cljs.core.count.call(null,c__4556__auto___42878);
var G__42882 = (0);
seq__42835_42867 = G__42879;
chunk__42836_42868 = G__42880;
count__42837_42869 = G__42881;
i__42838_42870 = G__42882;
continue;
} else {
var f_42883 = cljs.core.first.call(null,seq__42835_42877__$1);
cljs.core.println.call(null,"  ",f_42883);


var G__42884 = cljs.core.next.call(null,seq__42835_42877__$1);
var G__42885 = null;
var G__42886 = (0);
var G__42887 = (0);
seq__42835_42867 = G__42884;
chunk__42836_42868 = G__42885;
count__42837_42869 = G__42886;
i__42838_42870 = G__42887;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42888 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42888);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42888)))?cljs.core.second.call(null,arglists_42888):arglists_42888));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42839_42889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42840_42890 = null;
var count__42841_42891 = (0);
var i__42842_42892 = (0);
while(true){
if((i__42842_42892 < count__42841_42891)){
var vec__42853_42893 = cljs.core._nth.call(null,chunk__42840_42890,i__42842_42892);
var name_42894 = cljs.core.nth.call(null,vec__42853_42893,(0),null);
var map__42856_42895 = cljs.core.nth.call(null,vec__42853_42893,(1),null);
var map__42856_42896__$1 = (((((!((map__42856_42895 == null))))?(((((map__42856_42895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42856_42895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42856_42895):map__42856_42895);
var doc_42897 = cljs.core.get.call(null,map__42856_42896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42898 = cljs.core.get.call(null,map__42856_42896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42894);

cljs.core.println.call(null," ",arglists_42898);

if(cljs.core.truth_(doc_42897)){
cljs.core.println.call(null," ",doc_42897);
} else {
}


var G__42899 = seq__42839_42889;
var G__42900 = chunk__42840_42890;
var G__42901 = count__42841_42891;
var G__42902 = (i__42842_42892 + (1));
seq__42839_42889 = G__42899;
chunk__42840_42890 = G__42900;
count__42841_42891 = G__42901;
i__42842_42892 = G__42902;
continue;
} else {
var temp__5743__auto___42903 = cljs.core.seq.call(null,seq__42839_42889);
if(temp__5743__auto___42903){
var seq__42839_42904__$1 = temp__5743__auto___42903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42839_42904__$1)){
var c__4556__auto___42905 = cljs.core.chunk_first.call(null,seq__42839_42904__$1);
var G__42906 = cljs.core.chunk_rest.call(null,seq__42839_42904__$1);
var G__42907 = c__4556__auto___42905;
var G__42908 = cljs.core.count.call(null,c__4556__auto___42905);
var G__42909 = (0);
seq__42839_42889 = G__42906;
chunk__42840_42890 = G__42907;
count__42841_42891 = G__42908;
i__42842_42892 = G__42909;
continue;
} else {
var vec__42858_42910 = cljs.core.first.call(null,seq__42839_42904__$1);
var name_42911 = cljs.core.nth.call(null,vec__42858_42910,(0),null);
var map__42861_42912 = cljs.core.nth.call(null,vec__42858_42910,(1),null);
var map__42861_42913__$1 = (((((!((map__42861_42912 == null))))?(((((map__42861_42912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42861_42912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42861_42912):map__42861_42912);
var doc_42914 = cljs.core.get.call(null,map__42861_42913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42915 = cljs.core.get.call(null,map__42861_42913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42911);

cljs.core.println.call(null," ",arglists_42915);

if(cljs.core.truth_(doc_42914)){
cljs.core.println.call(null," ",doc_42914);
} else {
}


var G__42916 = cljs.core.next.call(null,seq__42839_42904__$1);
var G__42917 = null;
var G__42918 = (0);
var G__42919 = (0);
seq__42839_42889 = G__42916;
chunk__42840_42890 = G__42917;
count__42841_42891 = G__42918;
i__42842_42892 = G__42919;
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
var temp__5743__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5743__auto__)){
var fnspec = temp__5743__auto__;
cljs.core.print.call(null,"Spec");

var seq__42863 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42864 = null;
var count__42865 = (0);
var i__42866 = (0);
while(true){
if((i__42866 < count__42865)){
var role = cljs.core._nth.call(null,chunk__42864,i__42866);
var temp__5743__auto___42920__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___42920__$1)){
var spec_42921 = temp__5743__auto___42920__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42921));
} else {
}


var G__42922 = seq__42863;
var G__42923 = chunk__42864;
var G__42924 = count__42865;
var G__42925 = (i__42866 + (1));
seq__42863 = G__42922;
chunk__42864 = G__42923;
count__42865 = G__42924;
i__42866 = G__42925;
continue;
} else {
var temp__5743__auto____$1 = cljs.core.seq.call(null,seq__42863);
if(temp__5743__auto____$1){
var seq__42863__$1 = temp__5743__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42863__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__42863__$1);
var G__42926 = cljs.core.chunk_rest.call(null,seq__42863__$1);
var G__42927 = c__4556__auto__;
var G__42928 = cljs.core.count.call(null,c__4556__auto__);
var G__42929 = (0);
seq__42863 = G__42926;
chunk__42864 = G__42927;
count__42865 = G__42928;
i__42866 = G__42929;
continue;
} else {
var role = cljs.core.first.call(null,seq__42863__$1);
var temp__5743__auto___42930__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___42930__$2)){
var spec_42931 = temp__5743__auto___42930__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42931));
} else {
}


var G__42932 = cljs.core.next.call(null,seq__42863__$1);
var G__42933 = null;
var G__42934 = (0);
var G__42935 = (0);
seq__42863 = G__42932;
chunk__42864 = G__42933;
count__42865 = G__42934;
i__42866 = G__42935;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5743__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5743__auto__)){
var msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5743__auto__)){
var ed = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42936 = cljs.core.conj.call(null,via,t);
var G__42937 = cljs.core.ex_cause.call(null,t);
via = G__42936;
t = G__42937;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5743__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5743__auto__)){
var root_msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5743__auto__)){
var data = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5743__auto__)){
var phase = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__42940 = datafied_throwable;
var map__42940__$1 = (((((!((map__42940 == null))))?(((((map__42940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42940):map__42940);
var via = cljs.core.get.call(null,map__42940__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__42940__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__42940__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42941 = cljs.core.last.call(null,via);
var map__42941__$1 = (((((!((map__42941 == null))))?(((((map__42941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42941):map__42941);
var type = cljs.core.get.call(null,map__42941__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__42941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__42941__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42942 = data;
var map__42942__$1 = (((((!((map__42942 == null))))?(((((map__42942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42942):map__42942);
var problems = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42943 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__42943__$1 = (((((!((map__42943 == null))))?(((((map__42943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42943):map__42943);
var top_data = map__42943__$1;
var source = cljs.core.get.call(null,map__42943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__42948 = phase;
var G__42948__$1 = (((G__42948 instanceof cljs.core.Keyword))?G__42948.fqn:null);
switch (G__42948__$1) {
case "read-source":
var map__42949 = data;
var map__42949__$1 = (((((!((map__42949 == null))))?(((((map__42949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42949):map__42949);
var line = cljs.core.get.call(null,map__42949__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42949__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42951 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__42951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42951);
var G__42951__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42952 = top_data;
var G__42952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42952);
var G__42952__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42952__$1);
var G__42952__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42952__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42952__$2);
var G__42952__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42952__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42952__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42952__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42952__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42953 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42953,(0),null);
var method = cljs.core.nth.call(null,vec__42953,(1),null);
var file = cljs.core.nth.call(null,vec__42953,(2),null);
var line = cljs.core.nth.call(null,vec__42953,(3),null);
var G__42956 = top_data;
var G__42956__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__42956,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42956);
var G__42956__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__42956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42956__$1);
var G__42956__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__42956__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42956__$2);
var G__42956__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42956__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42956__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42956__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42956__$4;
}

break;
case "execution":
var vec__42957 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42957,(0),null);
var method = cljs.core.nth.call(null,vec__42957,(1),null);
var file = cljs.core.nth.call(null,vec__42957,(2),null);
var line = cljs.core.nth.call(null,vec__42957,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__42939_SHARP_){
var or__4126__auto__ = (p1__42939_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__42939_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42960 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42960__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__42960,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42960);
var G__42960__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42960__$1);
var G__42960__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__42960__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42960__$2);
var G__42960__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__42960__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42960__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42948__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42964){
var map__42965 = p__42964;
var map__42965__$1 = (((((!((map__42965 == null))))?(((((map__42965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42965):map__42965);
var triage_data = map__42965__$1;
var phase = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__42965__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42967 = phase;
var G__42967__$1 = (((G__42967 instanceof cljs.core.Keyword))?G__42967.fqn:null);
switch (G__42967__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42968_42977 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42969_42978 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42970_42979 = true;
var _STAR_print_fn_STAR__temp_val__42971_42980 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42970_42979);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42971_42980);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__42962_SHARP_){
return cljs.core.dissoc.call(null,p1__42962_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42969_42978);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42968_42977);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42972_42981 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42973_42982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42974_42983 = true;
var _STAR_print_fn_STAR__temp_val__42975_42984 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42974_42983);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42975_42984);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__42963_SHARP_){
return cljs.core.dissoc.call(null,p1__42963_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42973_42982);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42972_42981);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42967__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1604387945719
