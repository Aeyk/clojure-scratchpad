goog.provide('clojure_scratchpad.frontend.db');
clojure_scratchpad.frontend.db.profile = (function clojure_scratchpad$frontend$db$profile(s,ex){
return (ex.cljs$core$IFn$_invoke$arity$0 ? ex.cljs$core$IFn$_invoke$arity$0() : ex.call(null));
});
cljs.core.enable_console_print_BANG_();
clojure_scratchpad.frontend.db.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null)], null);
if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.db !== 'undefined') && (typeof clojure_scratchpad.frontend.db.conn !== 'undefined')){
} else {
clojure_scratchpad.frontend.db.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(clojure_scratchpad.frontend.db.schema);
}

clojure_scratchpad.frontend.db.reset_conn_BANG_ = (function clojure_scratchpad$frontend$db$reset_conn_BANG_(db){
cljs.core.reset_BANG_(clojure_scratchpad.frontend.db.conn,db);

(clojure_scratchpad.frontend.db.render.cljs$core$IFn$_invoke$arity$1 ? clojure_scratchpad.frontend.db.render.cljs$core$IFn$_invoke$arity$1(db) : clojure_scratchpad.frontend.db.render.call(null,db));

return (clojure_scratchpad.frontend.db.persist.cljs$core$IFn$_invoke$arity$1 ? clojure_scratchpad.frontend.db.persist.cljs$core$IFn$_invoke$arity$1(db) : clojure_scratchpad.frontend.db.persist.call(null,db));
});
clojure_scratchpad.frontend.db.remove_vals = (function clojure_scratchpad$frontend$db$remove_vals(f,m){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),cljs.core.empty(m),m);
});
clojure_scratchpad.frontend.db.find_prev = (function clojure_scratchpad$frontend$db$find_prev(xs,pred){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__50505_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__50505_SHARP_) : pred.call(null,p1__50505_SHARP_)));
}),xs));
});
clojure_scratchpad.frontend.db.find_next = (function clojure_scratchpad$frontend$db$find_next(xs,pred){
return cljs.core.fnext(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__50506_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__50506_SHARP_) : pred.call(null,p1__50506_SHARP_)));
}),xs));
});
clojure_scratchpad.frontend.db.drop_tail = (function clojure_scratchpad$frontend$db$drop_tail(xs,pred){
var acc = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first(xs__$1);
if((x == null)){
return acc;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
} else {
var G__50554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
var G__50555 = cljs.core.next(xs__$1);
acc = G__50554;
xs__$1 = G__50555;
continue;

}
}
break;
}
});
clojure_scratchpad.frontend.db.trim_head = (function clojure_scratchpad$frontend$db$trim_head(xs,n){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - n),xs));
});
clojure_scratchpad.frontend.db.index = (function clojure_scratchpad$frontend$db$index(xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
clojure_scratchpad.frontend.db.e_by_av = (function clojure_scratchpad$frontend$db$e_by_av(db,a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
clojure_scratchpad.frontend.db.date__GT_month = (function clojure_scratchpad$frontend$db$date__GT_month(date){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.getFullYear(),(date.getMonth() + (1))], null);
});
clojure_scratchpad.frontend.db.format_month = (function clojure_scratchpad$frontend$db$format_month(month,year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),(month - (1))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
clojure_scratchpad.frontend.db.month_start = (function clojure_scratchpad$frontend$db$month_start(month,year){
return (new Date(year,(month - (1)),(1)));
});
clojure_scratchpad.frontend.db.month_end = (function clojure_scratchpad$frontend$db$month_end(month,year){
var vec__50507 = (((month < (12)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(month + (1)),year], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(year + (1))], null));
var month__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(0),null);
var year__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507,(1),null);
return (new Date(((new Date(year__$1,(month__$1 - (1)),(1))).getTime() - (1))));
});
clojure_scratchpad.frontend.db.fixtures = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),new cljs.core.Keyword("system","group","system/group",1571096531),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),"datascript"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("project","name","project/name",2022968152),"nyc-webinar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("project","name","project/name",2022968152),"shopping"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Displaying list of todos",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Persisting to localStorage",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","serialization","transact"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Make task completable",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transact","funs"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Fix fn calls on emtpy rels",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bug","funs","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1420070400000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Add db filtering",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1432944000000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Soap",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1430438400000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Cake",new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Just a task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Another incomplete task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null)], null);
clojure_scratchpad.frontend.db.set_system_attrs_BANG_ = (function clojure_scratchpad$frontend$db$set_system_attrs_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50594 = arguments.length;
var i__4737__auto___50595 = (0);
while(true){
if((i__4737__auto___50595 < len__4736__auto___50594)){
args__4742__auto__.push((arguments[i__4737__auto___50595]));

var G__50596 = (i__4737__auto___50595 + (1));
i__4737__auto___50595 = G__50596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure_scratchpad.frontend.db.set_system_attrs_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure_scratchpad.frontend.db.set_system_attrs_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.conn,(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$db$iter__50511(s__50512){
return (new cljs.core.LazySeq(null,(function (){
var s__50512__$1 = s__50512;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__50512__$1);
if(temp__5743__auto__){
var s__50512__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50512__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50512__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50514 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50513 = (0);
while(true){
if((i__50513 < size__4528__auto__)){
var vec__50515 = cljs.core._nth(c__4527__auto__,i__50513);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50515,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50515,(1),null);
cljs.core.chunk_append(b__50514,(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),attr,value], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),(0),attr], null)));

var G__50605 = (i__50513 + (1));
i__50513 = G__50605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50514),clojure_scratchpad$frontend$db$iter__50511(cljs.core.chunk_rest(s__50512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50514),null);
}
} else {
var vec__50518 = cljs.core.first(s__50512__$2);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(1),null);
return cljs.core.cons((cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(0),attr,value], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),(0),attr], null)),clojure_scratchpad$frontend$db$iter__50511(cljs.core.rest(s__50512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
})());
}));

(clojure_scratchpad.frontend.db.set_system_attrs_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure_scratchpad.frontend.db.set_system_attrs_BANG_.cljs$lang$applyTo = (function (seq50510){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50510));
}));

clojure_scratchpad.frontend.db.system_attr = (function clojure_scratchpad$frontend$db$system_attr(var_args){
var G__50526 = arguments.length;
switch (G__50526) {
case 2:
return clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___50611 = arguments.length;
var i__4737__auto___50613 = (0);
while(true){
if((i__4737__auto___50613 < len__4736__auto___50611)){
args_arr__4757__auto__.push((arguments[i__4737__auto___50613]));

var G__50615 = (i__4737__auto___50613 + (1));
i__4737__auto___50613 = G__50615;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$2 = (function (db,attr){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,(0)) : datascript.core.entity.call(null,db,(0))),attr);
}));

(clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$variadic = (function (db,attr,attrs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50521_SHARP_){
return clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$2(db,p1__50521_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null),attrs));
}));

/** @this {Function} */
(clojure_scratchpad.frontend.db.system_attr.cljs$lang$applyTo = (function (seq50523){
var G__50524 = cljs.core.first(seq50523);
var seq50523__$1 = cljs.core.next(seq50523);
var G__50525 = cljs.core.first(seq50523__$1);
var seq50523__$2 = cljs.core.next(seq50523__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50524,G__50525,seq50523__$2);
}));

(clojure_scratchpad.frontend.db.system_attr.cljs$lang$maxFixedArity = (2));

if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.db !== 'undefined') && (typeof clojure_scratchpad.frontend.db.history !== 'undefined')){
} else {
clojure_scratchpad.frontend.db.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
clojure_scratchpad.frontend.db.history_limit = (10);
clojure_scratchpad.frontend.db.filter_rule = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Symbol(null,"?term","?term",1328727833,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.Symbol(null,"?term","?term",1328727833,null)], null)], null)], null);
clojure_scratchpad.frontend.db.todos_by_filter = (function clojure_scratchpad$frontend$db$todos_by_filter(db,terms){
var G__50527 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?term","?term",1328727833,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),cljs.core.list(new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?term","?term",1328727833,null))], null);
var G__50528 = db;
var G__50529 = clojure_scratchpad.frontend.db.filter_rule;
var G__50530 = terms;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__50527,G__50528,G__50529,G__50530) : datascript.core.q.call(null,G__50527,G__50528,G__50529,G__50530));
});
clojure_scratchpad.frontend.db.filter_terms = (function clojure_scratchpad$frontend$db$filter_terms(db){
return cljs.core.not_empty(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.system_attr.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("system","filter","system/filter",-1702262943)),/\s+/));
});
clojure_scratchpad.frontend.db.filtered_db = (function clojure_scratchpad$frontend$db$filtered_db(db){
var temp__5741__auto__ = clojure_scratchpad.frontend.db.filter_terms(db);
if(cljs.core.truth_(temp__5741__auto__)){
var terms = temp__5741__auto__;
var whitelist = cljs.core.set(clojure_scratchpad.frontend.db.todos_by_filter(db,terms));
var pred = (function (db__$1,datom){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("todo",cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)))) || (cljs.core.contains_QMARK_(whitelist,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))));
});
return datascript.core.filter(db,pred);
} else {
return db;
}
});
if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.db !== 'undefined') && (typeof clojure_scratchpad.frontend.db.todos_by_group !== 'undefined')){
} else {
clojure_scratchpad.frontend.db.todos_by_group = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50531 = cljs.core.get_global_hierarchy;
return (fexpr__50531.cljs$core$IFn$_invoke$arity$0 ? fexpr__50531.cljs$core$IFn$_invoke$arity$0() : fexpr__50531.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure-scratchpad.frontend.db","todos-by-group"),(function (db,group,item){
return group;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
clojure_scratchpad.frontend.db.todos_by_group.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inbox","inbox",1888669443),(function (db,_,___$1){
var G__50532 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?project","?project",324737558,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Symbol(null,"?due","?due",-1593059592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?project","?project",324737558,null),new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?due","?due",-1593059592,null),new cljs.core.Keyword(null,"none","none",1333468478))], null)], null);
var G__50533 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50532,G__50533) : datascript.core.q.call(null,G__50532,G__50533));
}));
clojure_scratchpad.frontend.db.todos_by_group.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"completed","completed",-486056503),(function (db,_,___$1){
var G__50534 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","done","todo/done",-886331930),true], null)], null);
var G__50535 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50534,G__50535) : datascript.core.q.call(null,G__50534,G__50535));
}));
clojure_scratchpad.frontend.db.todos_by_group.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"all","all",892129742),(function (db,_,___$1){
var G__50536 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null)], null);
var G__50537 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50536,G__50537) : datascript.core.q.call(null,G__50536,G__50537));
}));
clojure_scratchpad.frontend.db.todos_by_group.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"project","project",1124394579),(function (db,_,pid){
var G__50538 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null)], null)], null);
var G__50539 = db;
var G__50540 = pid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50538,G__50539,G__50540) : datascript.core.q.call(null,G__50538,G__50539,G__50540));
}));
clojure_scratchpad.frontend.db.todos_by_group.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"month","month",-1960248533),(function (db,_,p__50541){
var vec__50542 = p__50541;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(1),null);
var G__50545 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Symbol(null,"?to","?to",331665800,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?todo","?todo",-75804736,null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Symbol(null,"?due","?due",-1593059592,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?from","?from",-1000809456,null),new cljs.core.Symbol(null,"?due","?due",-1593059592,null),new cljs.core.Symbol(null,"?to","?to",331665800,null))], null)], null);
var G__50546 = db;
var G__50547 = clojure_scratchpad.frontend.db.month_start(month,year);
var G__50548 = clojure_scratchpad.frontend.db.month_end(month,year);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__50545,G__50546,G__50547,G__50548) : datascript.core.q.call(null,G__50545,G__50546,G__50547,G__50548));
}));
clojure_scratchpad.frontend.db.toggle_todo_tx = (function clojure_scratchpad$frontend$db$toggle_todo_tx(db,eid){
var done_QMARK_ = new cljs.core.Keyword("todo","done","todo/done",-886331930).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("todo","done","todo/done",-886331930),cljs.core.not(done_QMARK_)], null)], null);
});
clojure_scratchpad.frontend.db.toggle_todo = (function clojure_scratchpad$frontend$db$toggle_todo(eid){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),clojure_scratchpad.frontend.db.toggle_todo_tx,eid], null)], null));
});
clojure_scratchpad.frontend.db.extract_todo = (function clojure_scratchpad$frontend$db$extract_todo(){
var temp__5743__auto__ = clojure_scratchpad.frontend.dom.value(clojure_scratchpad.frontend.dom.q(".add-text"));
if(cljs.core.truth_(temp__5743__auto__)){
var text = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"project","project",1124394579),clojure_scratchpad.frontend.dom.value(clojure_scratchpad.frontend.dom.q(".add-project")),new cljs.core.Keyword(null,"due","due",-1754731313),clojure_scratchpad.frontend.dom.date_value(clojure_scratchpad.frontend.dom.q(".add-due")),new cljs.core.Keyword(null,"tags","tags",1771418977),clojure_scratchpad.frontend.dom.array_value(clojure_scratchpad.frontend.dom.q(".add-tags"))], null);
} else {
return null;
}
});
clojure_scratchpad.frontend.db.clean_todo = (function clojure_scratchpad$frontend$db$clean_todo(){
clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-text"),null);

clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-project"),null);

clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-due"),null);

return clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-tags"),null);
});
clojure_scratchpad.frontend.db.add_todo = (function clojure_scratchpad$frontend$db$add_todo(){
var temp__5743__auto__ = clojure_scratchpad.frontend.db.extract_todo();
if(cljs.core.truth_(temp__5743__auto__)){
var todo = temp__5743__auto__;
var project_50634 = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(todo);
var project_id_50635 = (cljs.core.truth_(project_50634)?clojure_scratchpad.frontend.db.e_by_av(cljs.core.deref(clojure_scratchpad.frontend.db.conn),new cljs.core.Keyword("project","name","project/name",2022968152),project_50634):null);
var project_tx_50636 = (cljs.core.truth_((function (){var and__4115__auto__ = project_50634;
if(cljs.core.truth_(and__4115__auto__)){
return (project_id_50635 == null);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),project_50634], null)], null):null);
var entity_50637 = clojure_scratchpad.frontend.db.remove_vals(cljs.core.nil_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(cljs.core.truth_(project_50634)?(function (){var or__4126__auto__ = project_id_50635;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})():null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Keyword(null,"due","due",-1754731313).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(todo)], null));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.conn,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(project_tx_50636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_50637], null)));

return clojure_scratchpad.frontend.db.clean_todo();
} else {
return null;
}
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.db.conn,new cljs.core.Keyword(null,"render","render",-1408033454),(function (tx_report){
var G__50549 = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
return (clojure_scratchpad.frontend.db.render.cljs$core$IFn$_invoke$arity$1 ? clojure_scratchpad.frontend.db.render.cljs$core$IFn$_invoke$arity$1(G__50549) : clojure_scratchpad.frontend.db.render.call(null,G__50549));
}));
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.db.conn,new cljs.core.Keyword(null,"log","log",-1595516004),(function (tx_report){
var tx_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null));
var datoms = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datom__GT_str = (function (d){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(d))?"+":"\u2212"),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)], 0)),"]"].join('');
});
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["tx ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_id),":"].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(datom__GT_str,datoms)))], 0));
}));
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.db.conn,new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
var map__50551 = tx_report;
var map__50551__$1 = (((((!((map__50551 == null))))?(((((map__50551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50551):map__50551);
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
if(cljs.core.truth_((function (){var and__4115__auto__ = db_before;
if(cljs.core.truth_(and__4115__auto__)){
return db_after;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.history,(function (h){
return clojure_scratchpad.frontend.db.trim_head(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.drop_tail(h,(function (p1__50550_SHARP_){
return (p1__50550_SHARP_ === db_before);
})),db_after),(10));
}));
} else {
return null;
}
}));
clojure_scratchpad.frontend.db.db__GT_string = (function clojure_scratchpad$frontend$db$db__GT_string(db){
return clojure_scratchpad.frontend.db.profile("db serialization",datascript.transit.write_transit_str(db));
});
clojure_scratchpad.frontend.db.string__GT_db = (function clojure_scratchpad$frontend$db$string__GT_db(s){
return clojure_scratchpad.frontend.db.profile("db deserialization",datascript.transit.read_transit_str(s));
});
clojure_scratchpad.frontend.db.persist = (function clojure_scratchpad$frontend$db$persist(db){
return localStorage.setItem("datascript-todo/DB",clojure_scratchpad.frontend.db.db__GT_string(db));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.db.conn,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
var temp__5743__auto__ = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
if(cljs.core.truth_(temp__5743__auto__)){
var db = temp__5743__auto__;
return setTimeout((function (){
return clojure_scratchpad.frontend.db.persist(db);
}),(0));
} else {
return null;
}
}));
clojure_scratchpad.frontend.db.seed_db = (function clojure_scratchpad$frontend$db$seed_db(){
var or__4126__auto__ = (function (){var temp__5743__auto__ = localStorage.getItem("datascript-todo/DB");
if(cljs.core.truth_(temp__5743__auto__)){
var stored = temp__5743__auto__;
var stored_db = clojure_scratchpad.frontend.db.string__GT_db(stored);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(stored_db),clojure_scratchpad.frontend.db.schema)){
clojure_scratchpad.frontend.db.reset_conn_BANG_(stored_db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.db.history,cljs.core.conj,cljs.core.deref(clojure_scratchpad.frontend.db.conn));

return true;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.db.conn,clojure_scratchpad.frontend.db.fixtures);
}
});

//# sourceMappingURL=clojure_scratchpad.frontend.db.js.map
