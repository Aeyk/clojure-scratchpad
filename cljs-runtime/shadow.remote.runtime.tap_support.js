goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50420,p__50421){
var map__50422 = p__50420;
var map__50422__$1 = (((((!((map__50422 == null))))?(((((map__50422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50422):map__50422);
var svc = map__50422__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50422__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50422__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50422__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50423 = p__50421;
var map__50423__$1 = (((((!((map__50423 == null))))?(((((map__50423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50423):map__50423);
var msg = map__50423__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50423__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50423__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50423__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50423__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50434,p__50435){
var map__50437 = p__50434;
var map__50437__$1 = (((((!((map__50437 == null))))?(((((map__50437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50437):map__50437);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50437__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50438 = p__50435;
var map__50438__$1 = (((((!((map__50438 == null))))?(((((map__50438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50438):map__50438);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50446,p__50447){
var map__50448 = p__50446;
var map__50448__$1 = (((((!((map__50448 == null))))?(((((map__50448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50448):map__50448);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50448__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50448__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50449 = p__50447;
var map__50449__$1 = (((((!((map__50449 == null))))?(((((map__50449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50449):map__50449);
var msg = map__50449__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50449__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50456,tid){
var map__50457 = p__50456;
var map__50457__$1 = (((((!((map__50457 == null))))?(((((map__50457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50457):map__50457);
var svc = map__50457__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50457__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50470 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50471 = null;
var count__50472 = (0);
var i__50473 = (0);
while(true){
if((i__50473 < count__50472)){
var vec__50484 = chunk__50471.cljs$core$IIndexed$_nth$arity$2(null,i__50473);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50495 = seq__50470;
var G__50496 = chunk__50471;
var G__50497 = count__50472;
var G__50498 = (i__50473 + (1));
seq__50470 = G__50495;
chunk__50471 = G__50496;
count__50472 = G__50497;
i__50473 = G__50498;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__50470);
if(temp__5743__auto__){
var seq__50470__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50470__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50470__$1);
var G__50499 = cljs.core.chunk_rest(seq__50470__$1);
var G__50500 = c__4556__auto__;
var G__50501 = cljs.core.count(c__4556__auto__);
var G__50502 = (0);
seq__50470 = G__50499;
chunk__50471 = G__50500;
count__50472 = G__50501;
i__50473 = G__50502;
continue;
} else {
var vec__50488 = cljs.core.first(seq__50470__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50488,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50488,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50503 = cljs.core.next(seq__50470__$1);
var G__50504 = null;
var G__50505 = (0);
var G__50506 = (0);
seq__50470 = G__50503;
chunk__50471 = G__50504;
count__50472 = G__50505;
i__50473 = G__50506;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50464_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50464_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50465_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50465_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50466_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50466_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50467_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50467_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50491){
var map__50492 = p__50491;
var map__50492__$1 = (((((!((map__50492 == null))))?(((((map__50492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50492):map__50492);
var svc = map__50492__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50492__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50492__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
