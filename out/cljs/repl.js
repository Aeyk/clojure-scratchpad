// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8070){
var map__8071 = p__8070;
var map__8071__$1 = (((((!((map__8071 == null))))?(((((map__8071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8071):map__8071);
var m = map__8071__$1;
var n = cljs.core.get.call(null,map__8071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__8071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__8073_8105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8074_8106 = null;
var count__8075_8107 = (0);
var i__8076_8108 = (0);
while(true){
if((i__8076_8108 < count__8075_8107)){
var f_8109 = cljs.core._nth.call(null,chunk__8074_8106,i__8076_8108);
cljs.core.println.call(null,"  ",f_8109);


var G__8110 = seq__8073_8105;
var G__8111 = chunk__8074_8106;
var G__8112 = count__8075_8107;
var G__8113 = (i__8076_8108 + (1));
seq__8073_8105 = G__8110;
chunk__8074_8106 = G__8111;
count__8075_8107 = G__8112;
i__8076_8108 = G__8113;
continue;
} else {
var temp__5743__auto___8114 = cljs.core.seq.call(null,seq__8073_8105);
if(temp__5743__auto___8114){
var seq__8073_8115__$1 = temp__5743__auto___8114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8073_8115__$1)){
var c__4556__auto___8116 = cljs.core.chunk_first.call(null,seq__8073_8115__$1);
var G__8117 = cljs.core.chunk_rest.call(null,seq__8073_8115__$1);
var G__8118 = c__4556__auto___8116;
var G__8119 = cljs.core.count.call(null,c__4556__auto___8116);
var G__8120 = (0);
seq__8073_8105 = G__8117;
chunk__8074_8106 = G__8118;
count__8075_8107 = G__8119;
i__8076_8108 = G__8120;
continue;
} else {
var f_8121 = cljs.core.first.call(null,seq__8073_8115__$1);
cljs.core.println.call(null,"  ",f_8121);


var G__8122 = cljs.core.next.call(null,seq__8073_8115__$1);
var G__8123 = null;
var G__8124 = (0);
var G__8125 = (0);
seq__8073_8105 = G__8122;
chunk__8074_8106 = G__8123;
count__8075_8107 = G__8124;
i__8076_8108 = G__8125;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8126 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8126);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8126)))?cljs.core.second.call(null,arglists_8126):arglists_8126));
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
var seq__8077_8127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8078_8128 = null;
var count__8079_8129 = (0);
var i__8080_8130 = (0);
while(true){
if((i__8080_8130 < count__8079_8129)){
var vec__8091_8131 = cljs.core._nth.call(null,chunk__8078_8128,i__8080_8130);
var name_8132 = cljs.core.nth.call(null,vec__8091_8131,(0),null);
var map__8094_8133 = cljs.core.nth.call(null,vec__8091_8131,(1),null);
var map__8094_8134__$1 = (((((!((map__8094_8133 == null))))?(((((map__8094_8133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8094_8133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8094_8133):map__8094_8133);
var doc_8135 = cljs.core.get.call(null,map__8094_8134__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8136 = cljs.core.get.call(null,map__8094_8134__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8132);

cljs.core.println.call(null," ",arglists_8136);

if(cljs.core.truth_(doc_8135)){
cljs.core.println.call(null," ",doc_8135);
} else {
}


var G__8137 = seq__8077_8127;
var G__8138 = chunk__8078_8128;
var G__8139 = count__8079_8129;
var G__8140 = (i__8080_8130 + (1));
seq__8077_8127 = G__8137;
chunk__8078_8128 = G__8138;
count__8079_8129 = G__8139;
i__8080_8130 = G__8140;
continue;
} else {
var temp__5743__auto___8141 = cljs.core.seq.call(null,seq__8077_8127);
if(temp__5743__auto___8141){
var seq__8077_8142__$1 = temp__5743__auto___8141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_8142__$1)){
var c__4556__auto___8143 = cljs.core.chunk_first.call(null,seq__8077_8142__$1);
var G__8144 = cljs.core.chunk_rest.call(null,seq__8077_8142__$1);
var G__8145 = c__4556__auto___8143;
var G__8146 = cljs.core.count.call(null,c__4556__auto___8143);
var G__8147 = (0);
seq__8077_8127 = G__8144;
chunk__8078_8128 = G__8145;
count__8079_8129 = G__8146;
i__8080_8130 = G__8147;
continue;
} else {
var vec__8096_8148 = cljs.core.first.call(null,seq__8077_8142__$1);
var name_8149 = cljs.core.nth.call(null,vec__8096_8148,(0),null);
var map__8099_8150 = cljs.core.nth.call(null,vec__8096_8148,(1),null);
var map__8099_8151__$1 = (((((!((map__8099_8150 == null))))?(((((map__8099_8150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8099_8150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8099_8150):map__8099_8150);
var doc_8152 = cljs.core.get.call(null,map__8099_8151__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8153 = cljs.core.get.call(null,map__8099_8151__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8149);

cljs.core.println.call(null," ",arglists_8153);

if(cljs.core.truth_(doc_8152)){
cljs.core.println.call(null," ",doc_8152);
} else {
}


var G__8154 = cljs.core.next.call(null,seq__8077_8142__$1);
var G__8155 = null;
var G__8156 = (0);
var G__8157 = (0);
seq__8077_8127 = G__8154;
chunk__8078_8128 = G__8155;
count__8079_8129 = G__8156;
i__8080_8130 = G__8157;
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

var seq__8101 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8102 = null;
var count__8103 = (0);
var i__8104 = (0);
while(true){
if((i__8104 < count__8103)){
var role = cljs.core._nth.call(null,chunk__8102,i__8104);
var temp__5743__auto___8158__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___8158__$1)){
var spec_8159 = temp__5743__auto___8158__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8159));
} else {
}


var G__8160 = seq__8101;
var G__8161 = chunk__8102;
var G__8162 = count__8103;
var G__8163 = (i__8104 + (1));
seq__8101 = G__8160;
chunk__8102 = G__8161;
count__8103 = G__8162;
i__8104 = G__8163;
continue;
} else {
var temp__5743__auto____$1 = cljs.core.seq.call(null,seq__8101);
if(temp__5743__auto____$1){
var seq__8101__$1 = temp__5743__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8101__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8101__$1);
var G__8164 = cljs.core.chunk_rest.call(null,seq__8101__$1);
var G__8165 = c__4556__auto__;
var G__8166 = cljs.core.count.call(null,c__4556__auto__);
var G__8167 = (0);
seq__8101 = G__8164;
chunk__8102 = G__8165;
count__8103 = G__8166;
i__8104 = G__8167;
continue;
} else {
var role = cljs.core.first.call(null,seq__8101__$1);
var temp__5743__auto___8168__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___8168__$2)){
var spec_8169 = temp__5743__auto___8168__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8169));
} else {
}


var G__8170 = cljs.core.next.call(null,seq__8101__$1);
var G__8171 = null;
var G__8172 = (0);
var G__8173 = (0);
seq__8101 = G__8170;
chunk__8102 = G__8171;
count__8103 = G__8172;
i__8104 = G__8173;
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
var G__8174 = cljs.core.conj.call(null,via,t);
var G__8175 = cljs.core.ex_cause.call(null,t);
via = G__8174;
t = G__8175;
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
var map__8178 = datafied_throwable;
var map__8178__$1 = (((((!((map__8178 == null))))?(((((map__8178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8178):map__8178);
var via = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__8178__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__8179 = cljs.core.last.call(null,via);
var map__8179__$1 = (((((!((map__8179 == null))))?(((((map__8179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8179):map__8179);
var type = cljs.core.get.call(null,map__8179__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__8179__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__8179__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__8180 = data;
var map__8180__$1 = (((((!((map__8180 == null))))?(((((map__8180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8180):map__8180);
var problems = cljs.core.get.call(null,map__8180__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__8180__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__8180__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__8181 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__8181__$1 = (((((!((map__8181 == null))))?(((((map__8181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8181):map__8181);
var top_data = map__8181__$1;
var source = cljs.core.get.call(null,map__8181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__8186 = phase;
var G__8186__$1 = (((G__8186 instanceof cljs.core.Keyword))?G__8186.fqn:null);
switch (G__8186__$1) {
case "read-source":
var map__8187 = data;
var map__8187__$1 = (((((!((map__8187 == null))))?(((((map__8187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8187):map__8187);
var line = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__8189 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__8189__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8189,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8189);
var G__8189__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8189__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8189__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8189__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__8190 = top_data;
var G__8190__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8190,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8190);
var G__8190__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8190__$1);
var G__8190__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8190__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8190__$2);
var G__8190__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8190__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8190__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8190__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8190__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__8191 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8191,(0),null);
var method = cljs.core.nth.call(null,vec__8191,(1),null);
var file = cljs.core.nth.call(null,vec__8191,(2),null);
var line = cljs.core.nth.call(null,vec__8191,(3),null);
var G__8194 = top_data;
var G__8194__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__8194,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__8194);
var G__8194__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__8194__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__8194__$1);
var G__8194__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__8194__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__8194__$2);
var G__8194__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8194__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8194__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8194__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8194__$4;
}

break;
case "execution":
var vec__8195 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8195,(0),null);
var method = cljs.core.nth.call(null,vec__8195,(1),null);
var file = cljs.core.nth.call(null,vec__8195,(2),null);
var line = cljs.core.nth.call(null,vec__8195,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__8177_SHARP_){
var or__4126__auto__ = (p1__8177_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__8177_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__8198 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__8198__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__8198,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__8198);
var G__8198__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8198__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8198__$1);
var G__8198__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__8198__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__8198__$2);
var G__8198__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__8198__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__8198__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8198__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8198__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8186__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__8202){
var map__8203 = p__8202;
var map__8203__$1 = (((((!((map__8203 == null))))?(((((map__8203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203):map__8203);
var triage_data = map__8203__$1;
var phase = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__8203__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__8205 = phase;
var G__8205__$1 = (((G__8205 instanceof cljs.core.Keyword))?G__8205.fqn:null);
switch (G__8205__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8206_8215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8207_8216 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8208_8217 = true;
var _STAR_print_fn_STAR__temp_val__8209_8218 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8208_8217);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8209_8218);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8200_SHARP_){
return cljs.core.dissoc.call(null,p1__8200_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8207_8216);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8206_8215);
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
var _STAR_print_newline_STAR__orig_val__8210_8219 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8211_8220 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8212_8221 = true;
var _STAR_print_fn_STAR__temp_val__8213_8222 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8212_8221);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8213_8222);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8201_SHARP_){
return cljs.core.dissoc.call(null,p1__8201_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8211_8220);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8210_8219);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8205__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
