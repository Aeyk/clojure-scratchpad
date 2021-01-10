goog.provide('clojure_scratchpad.frontend.views');
var module$node_modules$react_leaflet$cjs$index=shadow.js.require("module$node_modules$react_leaflet$cjs$index", {});
clojure_scratchpad.frontend.views.remove_vals = (function clojure_scratchpad$frontend$views$remove_vals(f,m){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),cljs.core.empty(m),m);
});
clojure_scratchpad.frontend.views.find_prev = (function clojure_scratchpad$frontend$views$find_prev(xs,pred){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__67288_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__67288_SHARP_) : pred.call(null,p1__67288_SHARP_)));
}),xs));
});
clojure_scratchpad.frontend.views.find_next = (function clojure_scratchpad$frontend$views$find_next(xs,pred){
return cljs.core.fnext(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67289_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__67289_SHARP_) : pred.call(null,p1__67289_SHARP_)));
}),xs));
});
clojure_scratchpad.frontend.views.drop_tail = (function clojure_scratchpad$frontend$views$drop_tail(xs,pred){
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
var G__67394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
var G__67395 = cljs.core.next(xs__$1);
acc = G__67394;
xs__$1 = G__67395;
continue;

}
}
break;
}
});
clojure_scratchpad.frontend.views.trim_head = (function clojure_scratchpad$frontend$views$trim_head(xs,n){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - n),xs));
});
clojure_scratchpad.frontend.views.index = (function clojure_scratchpad$frontend$views$index(xs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
clojure_scratchpad.frontend.views.e_by_av = (function clojure_scratchpad$frontend$views$e_by_av(db,a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
clojure_scratchpad.frontend.views.date__GT_month = (function clojure_scratchpad$frontend$views$date__GT_month(date){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.getFullYear(),(date.getMonth() + (1))], null);
});
clojure_scratchpad.frontend.views.format_month = (function clojure_scratchpad$frontend$views$format_month(month,year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),(month - (1))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
clojure_scratchpad.frontend.views.month_start = (function clojure_scratchpad$frontend$views$month_start(month,year){
return (new Date(year,(month - (1)),(1)));
});
clojure_scratchpad.frontend.views.month_end = (function clojure_scratchpad$frontend$views$month_end(month,year){
var vec__67290 = (((month < (12)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(month + (1)),year], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(year + (1))], null));
var month__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(0),null);
var year__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(1),null);
return (new Date(((new Date(year__$1,(month__$1 - (1)),(1))).getTime() - (1))));
});
clojure_scratchpad.frontend.views.draw = (function clojure_scratchpad$frontend$views$draw(p__67293){
var map__67294 = p__67293;
var map__67294__$1 = (((((!((map__67294 == null))))?(((((map__67294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67294):map__67294);
var circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67294__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var p_circles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67294__$1,new cljs.core.Keyword(null,"p-circles","p-circles",-1317305418));
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var seq__67296_67396 = cljs.core.seq(p_circles);
var chunk__67297_67397 = null;
var count__67298_67398 = (0);
var i__67299_67399 = (0);
while(true){
if((i__67299_67399 < count__67298_67398)){
var map__67316_67400 = chunk__67297_67397.cljs$core$IIndexed$_nth$arity$2(null,i__67299_67399);
var map__67316_67401__$1 = (((((!((map__67316_67400 == null))))?(((((map__67316_67400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67316_67400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67316_67400):map__67316_67400);
var vec__67317_67402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67316_67401__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_67403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67317_67402,(0),null);
var y_67404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67317_67402,(1),null);
var vec__67320_67405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67316_67401__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_67406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320_67405,(0),null);
var g_67407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320_67405,(1),null);
var b_67408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320_67405,(2),null);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_67406,g_67407,b_67408);

quil.core.ellipse(x_67403,y_67404,x_67403,x_67403);


var G__67409 = seq__67296_67396;
var G__67410 = chunk__67297_67397;
var G__67411 = count__67298_67398;
var G__67412 = (i__67299_67399 + (1));
seq__67296_67396 = G__67409;
chunk__67297_67397 = G__67410;
count__67298_67398 = G__67411;
i__67299_67399 = G__67412;
continue;
} else {
var temp__5743__auto___67413 = cljs.core.seq(seq__67296_67396);
if(temp__5743__auto___67413){
var seq__67296_67414__$1 = temp__5743__auto___67413;
if(cljs.core.chunked_seq_QMARK_(seq__67296_67414__$1)){
var c__4556__auto___67415 = cljs.core.chunk_first(seq__67296_67414__$1);
var G__67416 = cljs.core.chunk_rest(seq__67296_67414__$1);
var G__67417 = c__4556__auto___67415;
var G__67418 = cljs.core.count(c__4556__auto___67415);
var G__67419 = (0);
seq__67296_67396 = G__67416;
chunk__67297_67397 = G__67417;
count__67298_67398 = G__67418;
i__67299_67399 = G__67419;
continue;
} else {
var map__67324_67420 = cljs.core.first(seq__67296_67414__$1);
var map__67324_67421__$1 = (((((!((map__67324_67420 == null))))?(((((map__67324_67420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67324_67420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67324_67420):map__67324_67420);
var vec__67325_67422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67324_67421__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x_67423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67325_67422,(0),null);
var y_67424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67325_67422,(1),null);
var vec__67328_67425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67324_67421__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r_67426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328_67425,(0),null);
var g_67427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328_67425,(1),null);
var b_67428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328_67425,(2),null);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_67426,g_67427,b_67428);

quil.core.ellipse(x_67423,y_67424,x_67423,x_67423);


var G__67429 = cljs.core.next(seq__67296_67414__$1);
var G__67430 = null;
var G__67431 = (0);
var G__67432 = (0);
seq__67296_67396 = G__67429;
chunk__67297_67397 = G__67430;
count__67298_67398 = G__67431;
i__67299_67399 = G__67432;
continue;
}
} else {
}
}
break;
}

var map__67332 = cljs.core.last(circles);
var map__67332__$1 = (((((!((map__67332 == null))))?(((((map__67332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67332):map__67332);
var vec__67333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67333,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67333,(1),null);
var vec__67336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67332__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67336,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67336,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67336,(2),null);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r,g,b);

return quil.core.ellipse(x,y,x,x);
});
clojure_scratchpad.frontend.views.click_handler = (function clojure_scratchpad$frontend$views$click_handler(p__67340){
var map__67341 = p__67340;
var map__67341__$1 = (((((!((map__67341 == null))))?(((((map__67341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67341):map__67341);
var state = map__67341__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67341__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67341__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"p-circles","p-circles",-1317305418),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x(),quil.core.mouse_y()], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((quil.core.mouse_x() + quil.core.mouse_x()),(255)),cljs.core.mod((quil.core.mouse_x() + quil.core.mouse_y()),(255)),cljs.core.mod((quil.core.mouse_y() + quil.core.mouse_y()),(255))], null)], null));
});
clojure_scratchpad.frontend.views.update_state = (function clojure_scratchpad$frontend$views$update_state(p__67343){
var map__67344 = p__67343;
var map__67344__$1 = (((((!((map__67344 == null))))?(((((map__67344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67344):map__67344);
var state = map__67344__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67344__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67344__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.mouse_x(),quil.core.mouse_y()], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null)], null));
});
clojure_scratchpad.frontend.views.init = (function clojure_scratchpad$frontend$views$init(width,height){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"p-circles","p-circles",-1317305418),cljs.core.PersistentVector.EMPTY], null);
});
});
clojure_scratchpad.frontend.views.canvas = (function clojure_scratchpad$frontend$views$canvas(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component){
var node = reagent.dom.dom_node(component);
var width = (window.innerWidth / (2));
var height = (window.innerHeight / (2));
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),node,new cljs.core.Keyword(null,"draw","draw",1358331674),clojure_scratchpad.frontend.views.draw,new cljs.core.Keyword(null,"setup","setup",1987730512),clojure_scratchpad.frontend.views.init(width,height),new cljs.core.Keyword(null,"update","update",1045576396),clojure_scratchpad.frontend.views.update_state,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),clojure_scratchpad.frontend.views.click_handler], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null));
});
clojure_scratchpad.frontend.views.blank_finger_chart = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"750px",new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"id","id",-1388402092),"flute"], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"layer1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"B",new cljs.core.Keyword(null,"cx","cx",1272694324),"94.829094",new cljs.core.Keyword(null,"cy","cy",755331060),"40.962307",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"A",new cljs.core.Keyword(null,"cx","cx",1272694324),"94.477173",new cljs.core.Keyword(null,"cy","cy",755331060),"73.504837",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"G",new cljs.core.Keyword(null,"cx","cx",1272694324),"94.183945",new cljs.core.Keyword(null,"cy","cy",755331060),"104.83595",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"F",new cljs.core.Keyword(null,"cx","cx",1272694324),"94.893829",new cljs.core.Keyword(null,"cy","cy",755331060),"153.36499",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"E",new cljs.core.Keyword(null,"cx","cx",1272694324),"94.526833",new cljs.core.Keyword(null,"cy","cy",755331060),"185.84406",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"D",new cljs.core.Keyword(null,"cx","cx",1272694324),"93.813431",new cljs.core.Keyword(null,"cy","cy",755331060),"217.48276",new cljs.core.Keyword(null,"r","r",-471384190),"10.883539"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 95.542419,243.818 23.171811,-0.33015 c 0,0 4.54701,-1.14449 4.71627,-3.18596 0.16927,-2.04146 -1.20552,-9.49617 -3.83401,-10.00361 -2.6285,-0.50744 -4.71483,-2.33976 -10.9604,-1.51438 -6.24557,0.82538 -9.408875,8.33637 -9.408875,8.33637 0,0 -1.190483,1.13592 -1.666567,1.32352 -0.476088,0.1876 -4.660624,0.30379 -5.047949,0.85207 -0.38732,0.54827 -1.988802,0.46778 -1.534693,2.11862 0.454108,1.65083 4.564413,2.40352 4.564413,2.40352 z",new cljs.core.Keyword(null,"id","id",-1388402092),"pinky-a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 110.69374,266.39496 -0.42821,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36391,-4.08435 -4.90212,-2.6099 -4.90212,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33757,0.0537 4.11125,-1.82116 4.11125,-1.82116 z",new cljs.core.Keyword(null,"id","id",-1388402092),"pinky-c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 98.323555,265.92 -0.862999,-15.57301 c 0,0 -0.977296,-3.96104 -6.891851,-2.82796 -5.914543,1.13309 -6.210176,4.63709 -6.210176,4.63709 0,0 -2.037458,8.3203 4.96382,11.1794 7.001289,2.8591 9.001206,2.58448 9.001206,2.58448 z",new cljs.core.Keyword(null,"id","id",-1388402092),"pinky-b"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 64.551702,77.996348 c 3.2561,-6.75666 5.91151,-6.18036 8.50423,-6.0941 2.59272,0.0863 4.64517,5.41242 4.64517,5.41242 0,0 1.33907,10.10954 -4.17425,10.21103 0,0 -4.64027,1.00185 -2.97332,20.197512 1.66695,19.19565 -6.00183,-29.726862 -6.00183,-29.726862 z",new cljs.core.Keyword(null,"id","id",-1388402092),"thumb-b"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"thumb-a",new cljs.core.Keyword(null,"cx","cx",1272694324),"70.81485",new cljs.core.Keyword(null,"cy","cy",755331060),"59.120426",new cljs.core.Keyword(null,"rx","rx",1627208482),"8.1963415",new cljs.core.Keyword(null,"ry","ry",-334598563),"8.1971407"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 73.097548,135.7084 H 117.36266 Z",new cljs.core.Keyword(null,"id","id",-1388402092),"path1602"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 123.71524,266.02274 -0.4282,-15.79194 c 0,0 2.3699,4.08972 0.006,0.005 -2.36392,-4.08435 -4.90213,-2.6099 -4.90213,-2.6099 0,0 -2.88077,0.33572 -3.08063,2.2494 -0.19985,1.91368 0.0309,14.75273 0.0309,14.75273 0,0 0.9252,3.16178 4.26278,3.2155 3.33758,0.0537 4.11126,-1.82116 4.11126,-1.82116 z",new cljs.core.Keyword(null,"id","id",-1388402092),"pinky-d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 111.37902,114.35801 c -0.0402,-1.42381 -0.12048,-4.27171 1.6146,-5.70586 1.73509,-1.43416 5.28518,-1.45429 7.13774,0.19738 1.85257,1.65167 2.00778,4.97473 1.28267,8.99776 -0.7251,4.02302 -2.33041,8.74587 -8.0406,10.2031 -5.71019,1.45723 -15.5252,-0.35108 -16.187711,-1.75249 -0.662511,-1.40141 7.827411,-2.39575 11.725081,-4.08045 3.89766,-1.68469 3.20308,-4.05996 2.85573,-5.24777 -0.34735,-1.18782 -0.34735,-1.18786 -0.38751,-2.61167 z",new cljs.core.Keyword(null,"id","id",-1388402092),"pinky-r"], null)], null)], null)], null);
if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.views !== 'undefined') && (typeof clojure_scratchpad.frontend.views.todos_list !== 'undefined')){
} else {
clojure_scratchpad.frontend.views.todos_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean house","Walk dog","See friend"], null));
}
clojure_scratchpad.frontend.views.polar__GT_cartesian = (function clojure_scratchpad$frontend$views$polar__GT_cartesian(cx,cy,r,angle_in_degrees){
var angle_in_radians = (angle_in_degrees * (Math.PI / 180.0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(Math.cos(angle_in_radians) * (cx + r)),new cljs.core.Keyword(null,"y","y",-1757859776),(Math.sin(angle_in_radians) * (cy + r))], null);
});
clojure_scratchpad.frontend.views.draw_circle = (function clojure_scratchpad$frontend$views$draw_circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67433 = arguments.length;
var i__4737__auto___67434 = (0);
while(true){
if((i__4737__auto___67434 < len__4736__auto___67433)){
args__4742__auto__.push((arguments[i__4737__auto___67434]));

var G__67435 = (i__4737__auto___67434 + (1));
i__4737__auto___67434 = G__67435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,r,fill){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var or__4126__auto__ = fill;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "white";
}
})(),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
}));

(clojure_scratchpad.frontend.views.draw_circle.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(clojure_scratchpad.frontend.views.draw_circle.cljs$lang$applyTo = (function (seq67346){
var G__67347 = cljs.core.first(seq67346);
var seq67346__$1 = cljs.core.next(seq67346);
var G__67348 = cljs.core.first(seq67346__$1);
var seq67346__$2 = cljs.core.next(seq67346__$1);
var G__67349 = cljs.core.first(seq67346__$2);
var seq67346__$3 = cljs.core.next(seq67346__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67347,G__67348,G__67349,seq67346__$3);
}));

clojure_scratchpad.frontend.views.draw_nth_circle_around_circle_of_r_radius = (function clojure_scratchpad$frontend$views$draw_nth_circle_around_circle_of_r_radius(n,r,c){
var satellite_count = c;
var º_of_seperation = ((360) / satellite_count);
var coords = clojure_scratchpad.frontend.views.polar__GT_cartesian(c,c,r,(n * º_of_seperation));
return clojure_scratchpad.frontend.views.draw_circle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords),(10));
});
clojure_scratchpad.frontend.views.art_one = (function clojure_scratchpad$frontend$views$art_one(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"href","href",-793805698),"art-one",new cljs.core.Keyword(null,"id","id",-1388402092),"art-one"], null),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$art_one_$_iter__67350(s__67351){
return (new cljs.core.LazySeq(null,(function (){
var s__67351__$1 = s__67351;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67351__$1);
if(temp__5743__auto__){
var s__67351__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67351__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67351__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67353 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67352 = (0);
while(true){
if((i__67352 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__67352);
cljs.core.chunk_append(b__67353,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),((x * x) * x),((x * x) * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#d1d1d1"], 0)),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),(x * x),(x * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#b1b1b1"], 0)),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),((2) * x),((3) * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#717171"], 0))], null));

var G__67436 = (i__67352 + (1));
i__67352 = G__67436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67353),clojure_scratchpad$frontend$views$art_one_$_iter__67350(cljs.core.chunk_rest(s__67351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67353),null);
}
} else {
var x = cljs.core.first(s__67351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),((x * x) * x),((x * x) * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#d1d1d1"], 0)),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),(x * x),(x * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#b1b1b1"], 0)),clojure_scratchpad.frontend.views.draw_circle.cljs$core$IFn$_invoke$arity$variadic(((x * x) * x),((2) * x),((3) * x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#717171"], 0))], null),clojure_scratchpad$frontend$views$art_one_$_iter__67350(cljs.core.rest(s__67351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
})()], null);
});
clojure_scratchpad.frontend.views.make_dropdown_navigation = (function clojure_scratchpad$frontend$views$make_dropdown_navigation(label,dropdowns){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-hidden","navbar-hidden",1949677014),true], null));
return (function (){
var is_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword(null,"navbar-hidden","navbar-hidden",1949677014));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"dropdown navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-link","a.navbar-link",1730266033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"navbar-hidden","navbar-hidden",1949677014),cljs.core.not);
})], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-dropdown","div.navbar-dropdown",-445802110),(cljs.core.truth_(is_hidden_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-hidden"], null):null),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$make_dropdown_navigation_$_iter__67357(s__67358){
return (new cljs.core.LazySeq(null,(function (){
var s__67358__$1 = s__67358;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67358__$1);
if(temp__5743__auto__){
var s__67358__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67358__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67358__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67360 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67359 = (0);
while(true){
if((i__67359 < size__4528__auto__)){
var vec__67361 = cljs.core._nth(c__4527__auto__,i__67359);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67361,(0),null);
var href = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67361,(1),null);
cljs.core.chunk_append(b__67360,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(label__$1)], null),label__$1], null));

var G__67437 = (i__67359 + (1));
i__67359 = G__67437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67360),clojure_scratchpad$frontend$views$make_dropdown_navigation_$_iter__67357(cljs.core.chunk_rest(s__67358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67360),null);
}
} else {
var vec__67364 = cljs.core.first(s__67358__$2);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364,(0),null);
var href = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(label__$1)], null),label__$1], null),clojure_scratchpad$frontend$views$make_dropdown_navigation_$_iter__67357(cljs.core.rest(s__67358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(dropdowns);
})()], null)], null)], null);
});
});
clojure_scratchpad.frontend.views.navigation = (function clojure_scratchpad$frontend$views$navigation(){
return clojure_scratchpad.frontend.views.make_dropdown_navigation("mksybr",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","frontpage","router/frontpage",26202399))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","about","router/about",-1915582202))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["portfolio",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","portfolio","router/portfolio",1071493517))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["login",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","login","router/login",-89193160))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flute",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","flute","router/flute",-516974391))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["circle",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","circle","router/circle",-1470820845))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["todos",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","todos","router/todos",-93493047))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tictactoe",reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("router","tictactoe","router/tictactoe",1147721372))], null)], null));
});
clojure_scratchpad.frontend.views.input = (function clojure_scratchpad$frontend$views$input(label,id,type,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(state,e.target.value);
})], null)], null)], null)], null);
});
clojure_scratchpad.frontend.views.input_field = (function clojure_scratchpad$frontend$views$input_field(label){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var submit_handler = (function (e){
(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clojure_scratchpad.frontend.views.todos_list,cljs.core.conj,cljs.core.deref(state));

return cljs.core.reset_BANG_(state,"");
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$input_field_$_iter__67367(s__67368){
return (new cljs.core.LazySeq(null,(function (){
var s__67368__$1 = s__67368;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67368__$1);
if(temp__5743__auto__){
var s__67368__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67368__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67368__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67370 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67369 = (0);
while(true){
if((i__67369 < size__4528__auto__)){
var todo = cljs.core._nth(c__4527__auto__,i__67369);
cljs.core.chunk_append(b__67370,(function (){var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(todo);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sym,new cljs.core.Keyword(null,"id","id",-1388402092),sym], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.delete","span.delete",-2052700250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__67369,sym,todo,c__4527__auto__,size__4528__auto__,b__67370,s__67368__$2,temp__5743__auto__,state,submit_handler){
return (function (e){
return document.getElementById(sym).classList.toggle("is-complete");
});})(i__67369,sym,todo,c__4527__auto__,size__4528__auto__,b__67370,s__67368__$2,temp__5743__auto__,state,submit_handler))
], null)], null)], null)], null);
})());

var G__67438 = (i__67369 + (1));
i__67369 = G__67438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67370),clojure_scratchpad$frontend$views$input_field_$_iter__67367(cljs.core.chunk_rest(s__67368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67370),null);
}
} else {
var todo = cljs.core.first(s__67368__$2);
return cljs.core.cons((function (){var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(todo);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sym,new cljs.core.Keyword(null,"id","id",-1388402092),sym], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.delete","span.delete",-2052700250),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sym,todo,s__67368__$2,temp__5743__auto__,state,submit_handler){
return (function (e){
return document.getElementById(sym).classList.toggle("is-complete");
});})(sym,todo,s__67368__$2,temp__5743__auto__,state,submit_handler))
], null)], null)], null)], null);
})(),clojure_scratchpad$frontend$views$input_field_$_iter__67367(cljs.core.rest(s__67368__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(clojure_scratchpad.frontend.views.todos_list));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.field.control","form.field.control",899233073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(state),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(state,e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary.submit","button.button.is-primary.submit",152422503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_handler], null)], null)], null)], null);
});
});
clojure_scratchpad.frontend.views.home_page = (function clojure_scratchpad$frontend$views$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Welcome"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.subtitle","p.subtitle",1220832976),"Hello "], null)], null);
});
clojure_scratchpad.frontend.views.portfolio_page = (function clojure_scratchpad$frontend$views$portfolio_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.is-half","div.card.is-half",-1576273722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.subtitle","p.subtitle",1220832976),"Twains uWu \uD83E\uDD2A\uD83E\uDD2A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-content","div.media-content",322515289),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-left","div.media-left",-1702208304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image.is-48x48","figure.image.is-48x48",2123741818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://mksybr.com/portfolio/twains-demo.2.png"], null)], null)], null)], null)], null)], null)], null)], null);
});
clojure_scratchpad.frontend.views.about_page = (function clojure_scratchpad$frontend$views$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title","h2.title",866247517),"About This App"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a collection of hacks and demonstrations, learning projects, scratchpads, and experiments of a generative, or exploratory purpose. "], null)], null);
});
clojure_scratchpad.frontend.views.item_page = (function clojure_scratchpad$frontend$views$item_page(match){
var map__67371 = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match);
var map__67371__$1 = (((((!((map__67371 == null))))?(((((map__67371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67371):map__67371);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67371__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67371__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__67372 = path;
var map__67372__$1 = (((((!((map__67372 == null))))?(((((map__67372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67372):map__67372);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Selected item ",id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Optional foo query param: ",new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query)], null):null)], null);
});
clojure_scratchpad.frontend.views.set_button_to_spinner = (function clojure_scratchpad$frontend$views$set_button_to_spinner(el){
return document.querySelector(el).classList.add("is-loading");
});
clojure_scratchpad.frontend.views.valid_api_key_QMARK_ = (function clojure_scratchpad$frontend$views$valid_api_key_QMARK_(key){
return (!((key == null)));
});
clojure_scratchpad.frontend.views.login_form = (function clojure_scratchpad$frontend$views$login_form(){
var email = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var submit_handler = (function (e){
(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

return clojure_scratchpad.frontend.views.set_button_to_spinner("div > form > input.button");
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit_handler], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.input,"email:","email",new cljs.core.Keyword(null,"text","text",-1790561697),email], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.input,"password:","password",new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit_handler], null)], null)], null)], null);
});
clojure_scratchpad.frontend.views.number__GT_note_name = (function clojure_scratchpad$frontend$views$number__GT_note_name(n){
var n__$1 = cljs.core.mod(n,(12));
var G__67375 = n__$1;
switch (G__67375) {
case (0):
return new cljs.core.Keyword(null,"C","C",-173629587);

break;
case (1):
return new cljs.core.Keyword(null,"CsDb","CsDb",-960677681);

break;
case (2):
return new cljs.core.Keyword(null,"D","D",-8015893);

break;
case (3):
return new cljs.core.Keyword(null,"DsEb","DsEb",-1782169215);

break;
case (4):
return new cljs.core.Keyword(null,"E","E",230849842);

break;
case (5):
return new cljs.core.Keyword(null,"F","F",-1115543258);

break;
case (6):
return new cljs.core.Keyword(null,"FsGb","FsGb",1485801185);

break;
case (7):
return new cljs.core.Keyword(null,"G","G",-738544397);

break;
case (8):
return new cljs.core.Keyword(null,"GsAb","GsAb",744298798);

break;
case (9):
return new cljs.core.Keyword(null,"A","A",-1688942394);

break;
case (10):
return new cljs.core.Keyword(null,"AsBb","AsBb",1756073653);

break;
case (11):
return new cljs.core.Keyword(null,"B","B",-1422503380);

break;
default:
return n__$1;

}
});
clojure_scratchpad.frontend.views.note_fingering = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"DsEb","DsEb",-1782169215),new cljs.core.Keyword(null,"FsGb","FsGb",1485801185),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"GsAb","GsAb",744298798),new cljs.core.Keyword(null,"CsDb","CsDb",-960677681),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"AsBb","AsBb",1756073653)],[new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#F","#E","#D","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#D","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#F","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#F","#E","#D","#thumb-b"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#pinky-a"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#thumb-b","#pinky-r","#pinky-a"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#pinky-a"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#F","#E","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#A","#G","#thumb-b","#pinky-a"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B","#thumb-a","#pinky-a"], null)]);
clojure_scratchpad.frontend.views.make_fingering = (function clojure_scratchpad$frontend$views$make_fingering(pressed_buttons){
var svg = document.querySelector("#flute");
var unpressed_buttons = svg.querySelectorAll("circle, path, ellipse");
var pressed_buttons__$1 = svg.querySelectorAll(cljs.core.clj__GT_js(pressed_buttons));
unpressed_buttons.forEach((function (p1__67376_SHARP_){
return p1__67376_SHARP_.setAttribute("fill","white");
}));

return pressed_buttons__$1.forEach((function (p1__67377_SHARP_){
return p1__67377_SHARP_.setAttribute("fill","black");
}));
});
if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.views !== 'undefined') && (typeof clojure_scratchpad.frontend.views.current_note !== 'undefined')){
} else {
clojure_scratchpad.frontend.views.current_note = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("\u00BA");
}
clojure_scratchpad.frontend.views.chromatic_scale = (function clojure_scratchpad$frontend$views$chromatic_scale(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$chromatic_scale_$_iter__67378(s__67379){
return (new cljs.core.LazySeq(null,(function (){
var s__67379__$1 = s__67379;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67379__$1);
if(temp__5743__auto__){
var s__67379__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67379__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67379__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67381 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67380 = (0);
while(true){
if((i__67380 < size__4528__auto__)){
var note = cljs.core._nth(c__4527__auto__,i__67380);
cljs.core.chunk_append(b__67381,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.is-inline","li.button.is-inline",1733604973),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),clojure_scratchpad.frontend.views.number__GT_note_name(note),new cljs.core.Keyword(null,"id","id",-1388402092),clojure_scratchpad.frontend.views.number__GT_note_name(note),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__67380,note,c__4527__auto__,size__4528__auto__,b__67381,s__67379__$2,temp__5743__auto__){
return (function (e){
cljs.core.reset_BANG_(clojure_scratchpad.frontend.views.current_note,clojure_scratchpad.frontend.views.number__GT_note_name(note));

return clojure_scratchpad.frontend.views.make_fingering(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.note_fingering,clojure_scratchpad.frontend.views.number__GT_note_name(note)));
});})(i__67380,note,c__4527__auto__,size__4528__auto__,b__67381,s__67379__$2,temp__5743__auto__))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure_scratchpad.frontend.views.number__GT_note_name(note))], null));

var G__67440 = (i__67380 + (1));
i__67380 = G__67440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67381),clojure_scratchpad$frontend$views$chromatic_scale_$_iter__67378(cljs.core.chunk_rest(s__67379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67381),null);
}
} else {
var note = cljs.core.first(s__67379__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.button.is-inline","li.button.is-inline",1733604973),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),clojure_scratchpad.frontend.views.number__GT_note_name(note),new cljs.core.Keyword(null,"id","id",-1388402092),clojure_scratchpad.frontend.views.number__GT_note_name(note),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (note,s__67379__$2,temp__5743__auto__){
return (function (e){
cljs.core.reset_BANG_(clojure_scratchpad.frontend.views.current_note,clojure_scratchpad.frontend.views.number__GT_note_name(note));

return clojure_scratchpad.frontend.views.make_fingering(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.note_fingering,clojure_scratchpad.frontend.views.number__GT_note_name(note)));
});})(note,s__67379__$2,temp__5743__auto__))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure_scratchpad.frontend.views.number__GT_note_name(note))], null),clojure_scratchpad$frontend$views$chromatic_scale_$_iter__67378(cljs.core.rest(s__67379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})()], null);
});
clojure_scratchpad.frontend.views.flute = (function clojure_scratchpad$frontend$views$flute(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.chromatic_scale], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Flute Chart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.subtitle.note-name","h1.subtitle.note-name",-1332252011),cljs.core.deref(clojure_scratchpad.frontend.views.current_note)], null),clojure_scratchpad.frontend.views.blank_finger_chart], null);
});
clojure_scratchpad.frontend.views.circle = (function clojure_scratchpad$frontend$views$circle(){
var with_let67382 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let67382","with-let67382",-743012505));
var temp__5747__auto___67441 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5747__auto___67441 == null)){
} else {
var c__44106__auto___67442 = temp__5747__auto___67441;
if((with_let67382.generation === c__44106__auto___67442.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let67382.generation = c__44106__auto___67442.ratomGeneration);
}


var init67383 = (with_let67382.length === (0));
var running_QMARK_ = ((init67383)?(with_let67382[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let67382[(0)]));
var res__44107__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.title","h3.title",1837656649),"circles"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (window.location = document.querySelector("canvas#defaultCanvas0").toDataURL("image/jpeg"));
})], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary","button.button.is-primary",-883309392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(running_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(running_QMARK_))?"Cancel":"Start")], null),(cljs.core.truth_(cljs.core.deref(running_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.canvas], null):null)], null)], null);

return res__44107__auto__;
});
clojure_scratchpad.frontend.views.tictactoe = (function clojure_scratchpad$frontend$views$tictactoe(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"TicTacToe"], null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-row","grid-template-row",-214819060),"1fr 1fr 1fr",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 1fr 1fr"], null)], null),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$tictactoe_$_iter__67384(s__67385){
return (new cljs.core.LazySeq(null,(function (){
var s__67385__$1 = s__67385;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67385__$1);
if(temp__5743__auto__){
var s__67385__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67385__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67385__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67387 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67386 = (0);
while(true){
if((i__67386 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__67386);
cljs.core.chunk_append(b__67387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"_"], null));

var G__67443 = (i__67386 + (1));
i__67386 = G__67443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67387),clojure_scratchpad$frontend$views$tictactoe_$_iter__67384(cljs.core.chunk_rest(s__67385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67387),null);
}
} else {
var x = cljs.core.first(s__67385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"_"], null),clojure_scratchpad$frontend$views$tictactoe_$_iter__67384(cljs.core.rest(s__67385__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(9)));
})()], null);
});
clojure_scratchpad.frontend.views.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null)], null);
if((typeof clojure_scratchpad !== 'undefined') && (typeof clojure_scratchpad.frontend !== 'undefined') && (typeof clojure_scratchpad.frontend.views !== 'undefined') && (typeof clojure_scratchpad.frontend.views.conn !== 'undefined')){
} else {
clojure_scratchpad.frontend.views.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(clojure_scratchpad.frontend.views.schema);
}
clojure_scratchpad.frontend.views.fixtures = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),"datascript"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("project","name","project/name",2022968152),"nyc-webinar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("project","name","project/name",2022968152),"shopping"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Displaying list of todos",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Persisting to localStorage",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listen","serialization","transact"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),true,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Make task completable",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transact","funs"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-2),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1418428800000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Fix fn calls on emtpy rels",new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bug","funs","query"], null),new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1420070400000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Add db filtering",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-1),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1432944000000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Soap",new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","due","todo/due",-1757506295),new Date(1430438400000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Cake",new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(-3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Just a task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Another incomplete task",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null)], null);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.conn,clojure_scratchpad.frontend.views.fixtures);
clojure_scratchpad.frontend.views.extract_todo = (function clojure_scratchpad$frontend$views$extract_todo(){
var temp__5743__auto__ = clojure_scratchpad.frontend.dom.value(clojure_scratchpad.frontend.dom.q(".add-text"));
if(cljs.core.truth_(temp__5743__auto__)){
var text = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"project","project",1124394579),clojure_scratchpad.frontend.dom.value(clojure_scratchpad.frontend.dom.q(".add-project")),new cljs.core.Keyword(null,"due","due",-1754731313),clojure_scratchpad.frontend.dom.date_value(clojure_scratchpad.frontend.dom.q(".add-due")),new cljs.core.Keyword(null,"tags","tags",1771418977),clojure_scratchpad.frontend.dom.array_value(clojure_scratchpad.frontend.dom.q(".add-tags"))], null);
} else {
return null;
}
});
clojure_scratchpad.frontend.views.clean_todo = (function clojure_scratchpad$frontend$views$clean_todo(){
clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-text"),null);

clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-project"),null);

clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-due"),null);

return clojure_scratchpad.frontend.dom.set_value_BANG_(clojure_scratchpad.frontend.dom.q(".add-tags"),null);
});
clojure_scratchpad.frontend.views.add_view = (function clojure_scratchpad$frontend$views$add_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.add-view","form.add-view",2120676810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (_){
(clojure_scratchpad.frontend.views.add_todo.cljs$core$IFn$_invoke$arity$0 ? clojure_scratchpad.frontend.views.add_todo.cljs$core$IFn$_invoke$arity$0() : clojure_scratchpad.frontend.views.add_todo.call(null));

return false;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-text","input.add-text",35435982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"New task"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-project","input.add-project",1253640436),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Project"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-tags","input.add-tags",-1849105164),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tags"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-due","input.add-due",1011606743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Due date"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.add-submit","input.add-submit",-1845146082),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Add task"], null)], null)], null);
});
clojure_scratchpad.frontend.views.add_todo = (function clojure_scratchpad$frontend$views$add_todo(){
var temp__5743__auto__ = clojure_scratchpad.frontend.views.extract_todo();
if(cljs.core.truth_(temp__5743__auto__)){
var todo = temp__5743__auto__;
var project_67444 = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(todo);
var project_id_67445 = (cljs.core.truth_(project_67444)?clojure_scratchpad.frontend.views.e_by_av(cljs.core.deref(clojure_scratchpad.frontend.views.conn),new cljs.core.Keyword("project","name","project/name",2022968152),project_67444):null);
var project_tx_67446 = (cljs.core.truth_((function (){var and__4115__auto__ = project_67444;
if(cljs.core.truth_(and__4115__auto__)){
return (project_id_67445 == null);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),project_67444], null)], null):null);
var entity_67447 = clojure_scratchpad.frontend.views.remove_vals(cljs.core.nil_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","project","todo/project",1114598921),(cljs.core.truth_(project_67444)?(function (){var or__4126__auto__ = project_id_67445;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})():null),new cljs.core.Keyword("todo","due","todo/due",-1757506295),new cljs.core.Keyword(null,"due","due",-1754731313).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword("todo","tags","todo/tags",1766788507),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(todo)], null));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.conn,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(project_tx_67446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_67447], null)));

return clojure_scratchpad.frontend.views.clean_todo();
} else {
return null;
}
});
clojure_scratchpad.frontend.views.todos = (function clojure_scratchpad$frontend$views$todos(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Todo List"], null),(function (){var iter__4529__auto__ = (function clojure_scratchpad$frontend$views$todos_$_iter__67388(s__67389){
return (new cljs.core.LazySeq(null,(function (){
var s__67389__$1 = s__67389;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__67389__$1);
if(temp__5743__auto__){
var s__67389__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67389__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67389__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67391 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67390 = (0);
while(true){
if((i__67390 < size__4528__auto__)){
var entry = cljs.core._nth(c__4527__auto__,i__67390);
cljs.core.chunk_append(b__67391,(function (){
console.log(entry);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)], null);
})()
);

var G__67448 = (i__67390 + (1));
i__67390 = G__67448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67391),clojure_scratchpad$frontend$views$todos_$_iter__67388(cljs.core.chunk_rest(s__67389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67391),null);
}
} else {
var entry = cljs.core.first(s__67389__$2);
return cljs.core.cons((function (){
console.log(entry);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)], null);
})()
,clojure_scratchpad$frontend$views$todos_$_iter__67388(cljs.core.rest(s__67389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var G__67392 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?text","?text",733863407,null),new cljs.core.Symbol(null,"?project","?project",324737558,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Symbol(null,"?text","?text",733863407,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("todo","project","todo/project",1114598921),new cljs.core.Symbol(null,"?pid","?pid",1629644191,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pid","?pid",1629644191,null),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Symbol(null,"?project","?project",324737558,null)], null)], null);
var G__67393 = cljs.core.deref(clojure_scratchpad.frontend.views.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__67392,G__67393) : datascript.core.q.call(null,G__67392,G__67393));
})());
})(),(function (){var todo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var submit_handler = (function (e){
(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

console.log(cljs.core.deref(todo));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("todo","text","todo/text",-1787258203),cljs.core.deref(todo)], null)], null));

console.log(cljs.core.deref(clojure_scratchpad.frontend.views.conn));

return cljs.core.reset_BANG_(todo,"");
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit_handler], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.input,"todo-name:","todo-name",new cljs.core.Keyword(null,"text","text",-1790561697),todo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),"New Task"], null)], null);
})(),(function (){var group = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

console.log(cljs.core.deref(group));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_scratchpad.frontend.views.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword("project","name","project/name",2022968152),cljs.core.deref(group)], null)], null));

return cljs.core.reset_BANG_(group,"");
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_scratchpad.frontend.views.input,"group-name:","group-name",new cljs.core.Keyword(null,"text","text",-1790561697),group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),"New Group"], null)], null);
})()], null);
});

//# sourceMappingURL=clojure_scratchpad.frontend.views.js.map
