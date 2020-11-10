// Compiled by ClojureScript 1.10.773 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__31267 = arguments.length;
switch (G__31267) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__31268 = opts;
var map__31268__$1 = (((((!((map__31268 == null))))?(((((map__31268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31268):map__31268);
var ref = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__31270 = cljs.core.count.call(null,refs);
switch (G__31270) {
case (1):
var vec__31271 = refs;
var a = cljs.core.nth.call(null,vec__31271,(0),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});

break;
case (2):
var vec__31274 = refs;
var a = cljs.core.nth.call(null,vec__31274,(0),null);
var b = cljs.core.nth.call(null,vec__31274,(1),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});

break;
case (3):
var vec__31277 = refs;
var a = cljs.core.nth.call(null,vec__31277,(0),null);
var b = cljs.core.nth.call(null,vec__31277,(1),null);
var c = cljs.core.nth.call(null,vec__31277,(2),null);
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});

break;
default:
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__31280 = ref;
cljs.core.reset_BANG_.call(null,G__31280,recalc.call(null));

return G__31280;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
}));
var seq__31281_31287 = cljs.core.seq.call(null,refs);
var chunk__31282_31288 = null;
var count__31283_31289 = (0);
var i__31284_31290 = (0);
while(true){
if((i__31284_31290 < count__31283_31289)){
var ref_31291__$1 = cljs.core._nth.call(null,chunk__31282_31288,i__31284_31290);
cljs.core.add_watch.call(null,ref_31291__$1,key,watch);


var G__31292 = seq__31281_31287;
var G__31293 = chunk__31282_31288;
var G__31294 = count__31283_31289;
var G__31295 = (i__31284_31290 + (1));
seq__31281_31287 = G__31292;
chunk__31282_31288 = G__31293;
count__31283_31289 = G__31294;
i__31284_31290 = G__31295;
continue;
} else {
var temp__5743__auto___31296 = cljs.core.seq.call(null,seq__31281_31287);
if(temp__5743__auto___31296){
var seq__31281_31297__$1 = temp__5743__auto___31296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31281_31297__$1)){
var c__4556__auto___31298 = cljs.core.chunk_first.call(null,seq__31281_31297__$1);
var G__31299 = cljs.core.chunk_rest.call(null,seq__31281_31297__$1);
var G__31300 = c__4556__auto___31298;
var G__31301 = cljs.core.count.call(null,c__4556__auto___31298);
var G__31302 = (0);
seq__31281_31287 = G__31299;
chunk__31282_31288 = G__31300;
count__31283_31289 = G__31301;
i__31284_31290 = G__31302;
continue;
} else {
var ref_31303__$1 = cljs.core.first.call(null,seq__31281_31297__$1);
cljs.core.add_watch.call(null,ref_31303__$1,key,watch);


var G__31304 = cljs.core.next.call(null,seq__31281_31297__$1);
var G__31305 = null;
var G__31306 = (0);
var G__31307 = (0);
seq__31281_31287 = G__31304;
chunk__31282_31288 = G__31305;
count__31283_31289 = G__31306;
i__31284_31290 = G__31307;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=derived_atom.js.map?rel=1604387926995
