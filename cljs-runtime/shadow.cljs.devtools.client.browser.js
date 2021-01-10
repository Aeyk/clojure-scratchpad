goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50807 = arguments.length;
var i__4737__auto___50808 = (0);
while(true){
if((i__4737__auto___50808 < len__4736__auto___50807)){
args__4742__auto__.push((arguments[i__4737__auto___50808]));

var G__50809 = (i__4737__auto___50808 + (1));
i__4737__auto___50808 = G__50809;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50618){
var G__50619 = cljs.core.first(seq50618);
var seq50618__$1 = cljs.core.next(seq50618);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50619,seq50618__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50623 = cljs.core.seq(sources);
var chunk__50624 = null;
var count__50625 = (0);
var i__50626 = (0);
while(true){
if((i__50626 < count__50625)){
var map__50641 = chunk__50624.cljs$core$IIndexed$_nth$arity$2(null,i__50626);
var map__50641__$1 = (((((!((map__50641 == null))))?(((((map__50641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50641):map__50641);
var src = map__50641__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50643){var e_50810 = e50643;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50810);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50810.message)].join('')));
}

var G__50811 = seq__50623;
var G__50812 = chunk__50624;
var G__50813 = count__50625;
var G__50814 = (i__50626 + (1));
seq__50623 = G__50811;
chunk__50624 = G__50812;
count__50625 = G__50813;
i__50626 = G__50814;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__50623);
if(temp__5743__auto__){
var seq__50623__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50623__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50623__$1);
var G__50815 = cljs.core.chunk_rest(seq__50623__$1);
var G__50816 = c__4556__auto__;
var G__50817 = cljs.core.count(c__4556__auto__);
var G__50818 = (0);
seq__50623 = G__50815;
chunk__50624 = G__50816;
count__50625 = G__50817;
i__50626 = G__50818;
continue;
} else {
var map__50644 = cljs.core.first(seq__50623__$1);
var map__50644__$1 = (((((!((map__50644 == null))))?(((((map__50644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50644):map__50644);
var src = map__50644__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50644__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50644__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50644__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50644__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50646){var e_50819 = e50646;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50819);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50819.message)].join('')));
}

var G__50820 = cljs.core.next(seq__50623__$1);
var G__50821 = null;
var G__50822 = (0);
var G__50823 = (0);
seq__50623 = G__50820;
chunk__50624 = G__50821;
count__50625 = G__50822;
i__50626 = G__50823;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50647 = cljs.core.seq(js_requires);
var chunk__50648 = null;
var count__50649 = (0);
var i__50650 = (0);
while(true){
if((i__50650 < count__50649)){
var js_ns = chunk__50648.cljs$core$IIndexed$_nth$arity$2(null,i__50650);
var require_str_50824 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50824);


var G__50825 = seq__50647;
var G__50826 = chunk__50648;
var G__50827 = count__50649;
var G__50828 = (i__50650 + (1));
seq__50647 = G__50825;
chunk__50648 = G__50826;
count__50649 = G__50827;
i__50650 = G__50828;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__50647);
if(temp__5743__auto__){
var seq__50647__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50647__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50647__$1);
var G__50829 = cljs.core.chunk_rest(seq__50647__$1);
var G__50830 = c__4556__auto__;
var G__50831 = cljs.core.count(c__4556__auto__);
var G__50832 = (0);
seq__50647 = G__50829;
chunk__50648 = G__50830;
count__50649 = G__50831;
i__50650 = G__50832;
continue;
} else {
var js_ns = cljs.core.first(seq__50647__$1);
var require_str_50833 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50833);


var G__50834 = cljs.core.next(seq__50647__$1);
var G__50835 = null;
var G__50836 = (0);
var G__50837 = (0);
seq__50647 = G__50834;
chunk__50648 = G__50835;
count__50649 = G__50836;
i__50650 = G__50837;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50653){
var map__50654 = p__50653;
var map__50654__$1 = (((((!((map__50654 == null))))?(((((map__50654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50654):map__50654);
var msg = map__50654__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50656(s__50657){
return (new cljs.core.LazySeq(null,(function (){
var s__50657__$1 = s__50657;
while(true){
var temp__5743__auto__ = cljs.core.seq(s__50657__$1);
if(temp__5743__auto__){
var xs__6300__auto__ = temp__5743__auto__;
var map__50662 = cljs.core.first(xs__6300__auto__);
var map__50662__$1 = (((((!((map__50662 == null))))?(((((map__50662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50662):map__50662);
var src = map__50662__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__50657__$1,map__50662,map__50662__$1,src,resource_name,warnings,xs__6300__auto__,temp__5743__auto__,map__50654,map__50654__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50656_$_iter__50658(s__50659){
return (new cljs.core.LazySeq(null,((function (s__50657__$1,map__50662,map__50662__$1,src,resource_name,warnings,xs__6300__auto__,temp__5743__auto__,map__50654,map__50654__$1,msg,info,reload_info){
return (function (){
var s__50659__$1 = s__50659;
while(true){
var temp__5743__auto____$1 = cljs.core.seq(s__50659__$1);
if(temp__5743__auto____$1){
var s__50659__$2 = temp__5743__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50659__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50659__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50661 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50660 = (0);
while(true){
if((i__50660 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__50660);
cljs.core.chunk_append(b__50661,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50838 = (i__50660 + (1));
i__50660 = G__50838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50661),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50656_$_iter__50658(cljs.core.chunk_rest(s__50659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50661),null);
}
} else {
var warning = cljs.core.first(s__50659__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50656_$_iter__50658(cljs.core.rest(s__50659__$2)));
}
} else {
return null;
}
break;
}
});})(s__50657__$1,map__50662,map__50662__$1,src,resource_name,warnings,xs__6300__auto__,temp__5743__auto__,map__50654,map__50654__$1,msg,info,reload_info))
,null,null));
});})(s__50657__$1,map__50662,map__50662__$1,src,resource_name,warnings,xs__6300__auto__,temp__5743__auto__,map__50654,map__50654__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50656(cljs.core.rest(s__50657__$1)));
} else {
var G__50839 = cljs.core.rest(s__50657__$1);
s__50657__$1 = G__50839;
continue;
}
} else {
var G__50840 = cljs.core.rest(s__50657__$1);
s__50657__$1 = G__50840;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50664_50841 = cljs.core.seq(warnings);
var chunk__50665_50842 = null;
var count__50666_50843 = (0);
var i__50667_50844 = (0);
while(true){
if((i__50667_50844 < count__50666_50843)){
var map__50672_50845 = chunk__50665_50842.cljs$core$IIndexed$_nth$arity$2(null,i__50667_50844);
var map__50672_50846__$1 = (((((!((map__50672_50845 == null))))?(((((map__50672_50845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50672_50845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50672_50845):map__50672_50845);
var w_50847 = map__50672_50846__$1;
var msg_50848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672_50846__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672_50846__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672_50846__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672_50846__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50851)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50849),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50850),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50848__$1)].join(''));


var G__50852 = seq__50664_50841;
var G__50853 = chunk__50665_50842;
var G__50854 = count__50666_50843;
var G__50855 = (i__50667_50844 + (1));
seq__50664_50841 = G__50852;
chunk__50665_50842 = G__50853;
count__50666_50843 = G__50854;
i__50667_50844 = G__50855;
continue;
} else {
var temp__5743__auto___50856 = cljs.core.seq(seq__50664_50841);
if(temp__5743__auto___50856){
var seq__50664_50857__$1 = temp__5743__auto___50856;
if(cljs.core.chunked_seq_QMARK_(seq__50664_50857__$1)){
var c__4556__auto___50858 = cljs.core.chunk_first(seq__50664_50857__$1);
var G__50859 = cljs.core.chunk_rest(seq__50664_50857__$1);
var G__50860 = c__4556__auto___50858;
var G__50861 = cljs.core.count(c__4556__auto___50858);
var G__50862 = (0);
seq__50664_50841 = G__50859;
chunk__50665_50842 = G__50860;
count__50666_50843 = G__50861;
i__50667_50844 = G__50862;
continue;
} else {
var map__50674_50863 = cljs.core.first(seq__50664_50857__$1);
var map__50674_50864__$1 = (((((!((map__50674_50863 == null))))?(((((map__50674_50863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50674_50863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50674_50863):map__50674_50863);
var w_50865 = map__50674_50864__$1;
var msg_50866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674_50864__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674_50864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674_50864__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674_50864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50869)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50867),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50868),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50866__$1)].join(''));


var G__50870 = cljs.core.next(seq__50664_50857__$1);
var G__50871 = null;
var G__50872 = (0);
var G__50873 = (0);
seq__50664_50841 = G__50870;
chunk__50665_50842 = G__50871;
count__50666_50843 = G__50872;
i__50667_50844 = G__50873;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50652_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50652_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50683){
var map__50684 = p__50683;
var map__50684__$1 = (((((!((map__50684 == null))))?(((((map__50684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50684):map__50684);
var msg = map__50684__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50686 = cljs.core.seq(updates);
var chunk__50688 = null;
var count__50689 = (0);
var i__50690 = (0);
while(true){
if((i__50690 < count__50689)){
var path = chunk__50688.cljs$core$IIndexed$_nth$arity$2(null,i__50690);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50723_50880 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50727_50881 = null;
var count__50728_50882 = (0);
var i__50729_50883 = (0);
while(true){
if((i__50729_50883 < count__50728_50882)){
var node_50884 = chunk__50727_50881.cljs$core$IIndexed$_nth$arity$2(null,i__50729_50883);
if(cljs.core.not(node_50884.shadow$old)){
var path_match_50885 = shadow.cljs.devtools.client.browser.match_paths(node_50884.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50885)){
var new_link_50886 = (function (){var G__50742 = node_50884.cloneNode(true);
G__50742.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50885),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50742;
})();
(node_50884.shadow$old = true);

(new_link_50886.onload = ((function (seq__50723_50880,chunk__50727_50881,count__50728_50882,i__50729_50883,seq__50686,chunk__50688,count__50689,i__50690,new_link_50886,path_match_50885,node_50884,path,map__50684,map__50684__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50884);
});})(seq__50723_50880,chunk__50727_50881,count__50728_50882,i__50729_50883,seq__50686,chunk__50688,count__50689,i__50690,new_link_50886,path_match_50885,node_50884,path,map__50684,map__50684__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50885], 0));

goog.dom.insertSiblingAfter(new_link_50886,node_50884);


var G__50887 = seq__50723_50880;
var G__50888 = chunk__50727_50881;
var G__50889 = count__50728_50882;
var G__50890 = (i__50729_50883 + (1));
seq__50723_50880 = G__50887;
chunk__50727_50881 = G__50888;
count__50728_50882 = G__50889;
i__50729_50883 = G__50890;
continue;
} else {
var G__50891 = seq__50723_50880;
var G__50892 = chunk__50727_50881;
var G__50893 = count__50728_50882;
var G__50894 = (i__50729_50883 + (1));
seq__50723_50880 = G__50891;
chunk__50727_50881 = G__50892;
count__50728_50882 = G__50893;
i__50729_50883 = G__50894;
continue;
}
} else {
var G__50895 = seq__50723_50880;
var G__50896 = chunk__50727_50881;
var G__50897 = count__50728_50882;
var G__50898 = (i__50729_50883 + (1));
seq__50723_50880 = G__50895;
chunk__50727_50881 = G__50896;
count__50728_50882 = G__50897;
i__50729_50883 = G__50898;
continue;
}
} else {
var temp__5743__auto___50899 = cljs.core.seq(seq__50723_50880);
if(temp__5743__auto___50899){
var seq__50723_50900__$1 = temp__5743__auto___50899;
if(cljs.core.chunked_seq_QMARK_(seq__50723_50900__$1)){
var c__4556__auto___50901 = cljs.core.chunk_first(seq__50723_50900__$1);
var G__50902 = cljs.core.chunk_rest(seq__50723_50900__$1);
var G__50903 = c__4556__auto___50901;
var G__50904 = cljs.core.count(c__4556__auto___50901);
var G__50905 = (0);
seq__50723_50880 = G__50902;
chunk__50727_50881 = G__50903;
count__50728_50882 = G__50904;
i__50729_50883 = G__50905;
continue;
} else {
var node_50906 = cljs.core.first(seq__50723_50900__$1);
if(cljs.core.not(node_50906.shadow$old)){
var path_match_50907 = shadow.cljs.devtools.client.browser.match_paths(node_50906.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50907)){
var new_link_50908 = (function (){var G__50743 = node_50906.cloneNode(true);
G__50743.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50907),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50743;
})();
(node_50906.shadow$old = true);

(new_link_50908.onload = ((function (seq__50723_50880,chunk__50727_50881,count__50728_50882,i__50729_50883,seq__50686,chunk__50688,count__50689,i__50690,new_link_50908,path_match_50907,node_50906,seq__50723_50900__$1,temp__5743__auto___50899,path,map__50684,map__50684__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50906);
});})(seq__50723_50880,chunk__50727_50881,count__50728_50882,i__50729_50883,seq__50686,chunk__50688,count__50689,i__50690,new_link_50908,path_match_50907,node_50906,seq__50723_50900__$1,temp__5743__auto___50899,path,map__50684,map__50684__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50907], 0));

goog.dom.insertSiblingAfter(new_link_50908,node_50906);


var G__50909 = cljs.core.next(seq__50723_50900__$1);
var G__50910 = null;
var G__50911 = (0);
var G__50912 = (0);
seq__50723_50880 = G__50909;
chunk__50727_50881 = G__50910;
count__50728_50882 = G__50911;
i__50729_50883 = G__50912;
continue;
} else {
var G__50913 = cljs.core.next(seq__50723_50900__$1);
var G__50914 = null;
var G__50915 = (0);
var G__50916 = (0);
seq__50723_50880 = G__50913;
chunk__50727_50881 = G__50914;
count__50728_50882 = G__50915;
i__50729_50883 = G__50916;
continue;
}
} else {
var G__50917 = cljs.core.next(seq__50723_50900__$1);
var G__50918 = null;
var G__50919 = (0);
var G__50920 = (0);
seq__50723_50880 = G__50917;
chunk__50727_50881 = G__50918;
count__50728_50882 = G__50919;
i__50729_50883 = G__50920;
continue;
}
}
} else {
}
}
break;
}


var G__50921 = seq__50686;
var G__50922 = chunk__50688;
var G__50923 = count__50689;
var G__50924 = (i__50690 + (1));
seq__50686 = G__50921;
chunk__50688 = G__50922;
count__50689 = G__50923;
i__50690 = G__50924;
continue;
} else {
var G__50925 = seq__50686;
var G__50926 = chunk__50688;
var G__50927 = count__50689;
var G__50928 = (i__50690 + (1));
seq__50686 = G__50925;
chunk__50688 = G__50926;
count__50689 = G__50927;
i__50690 = G__50928;
continue;
}
} else {
var temp__5743__auto__ = cljs.core.seq(seq__50686);
if(temp__5743__auto__){
var seq__50686__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50686__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50686__$1);
var G__50929 = cljs.core.chunk_rest(seq__50686__$1);
var G__50930 = c__4556__auto__;
var G__50931 = cljs.core.count(c__4556__auto__);
var G__50932 = (0);
seq__50686 = G__50929;
chunk__50688 = G__50930;
count__50689 = G__50931;
i__50690 = G__50932;
continue;
} else {
var path = cljs.core.first(seq__50686__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50747_50936 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50751_50937 = null;
var count__50752_50938 = (0);
var i__50753_50939 = (0);
while(true){
if((i__50753_50939 < count__50752_50938)){
var node_50940 = chunk__50751_50937.cljs$core$IIndexed$_nth$arity$2(null,i__50753_50939);
if(cljs.core.not(node_50940.shadow$old)){
var path_match_50941 = shadow.cljs.devtools.client.browser.match_paths(node_50940.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50941)){
var new_link_50942 = (function (){var G__50767 = node_50940.cloneNode(true);
G__50767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50941),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50767;
})();
(node_50940.shadow$old = true);

(new_link_50942.onload = ((function (seq__50747_50936,chunk__50751_50937,count__50752_50938,i__50753_50939,seq__50686,chunk__50688,count__50689,i__50690,new_link_50942,path_match_50941,node_50940,path,seq__50686__$1,temp__5743__auto__,map__50684,map__50684__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50940);
});})(seq__50747_50936,chunk__50751_50937,count__50752_50938,i__50753_50939,seq__50686,chunk__50688,count__50689,i__50690,new_link_50942,path_match_50941,node_50940,path,seq__50686__$1,temp__5743__auto__,map__50684,map__50684__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50941], 0));

goog.dom.insertSiblingAfter(new_link_50942,node_50940);


var G__50943 = seq__50747_50936;
var G__50944 = chunk__50751_50937;
var G__50945 = count__50752_50938;
var G__50946 = (i__50753_50939 + (1));
seq__50747_50936 = G__50943;
chunk__50751_50937 = G__50944;
count__50752_50938 = G__50945;
i__50753_50939 = G__50946;
continue;
} else {
var G__50947 = seq__50747_50936;
var G__50948 = chunk__50751_50937;
var G__50949 = count__50752_50938;
var G__50950 = (i__50753_50939 + (1));
seq__50747_50936 = G__50947;
chunk__50751_50937 = G__50948;
count__50752_50938 = G__50949;
i__50753_50939 = G__50950;
continue;
}
} else {
var G__50951 = seq__50747_50936;
var G__50952 = chunk__50751_50937;
var G__50953 = count__50752_50938;
var G__50954 = (i__50753_50939 + (1));
seq__50747_50936 = G__50951;
chunk__50751_50937 = G__50952;
count__50752_50938 = G__50953;
i__50753_50939 = G__50954;
continue;
}
} else {
var temp__5743__auto___50955__$1 = cljs.core.seq(seq__50747_50936);
if(temp__5743__auto___50955__$1){
var seq__50747_50956__$1 = temp__5743__auto___50955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50747_50956__$1)){
var c__4556__auto___50957 = cljs.core.chunk_first(seq__50747_50956__$1);
var G__50958 = cljs.core.chunk_rest(seq__50747_50956__$1);
var G__50959 = c__4556__auto___50957;
var G__50960 = cljs.core.count(c__4556__auto___50957);
var G__50961 = (0);
seq__50747_50936 = G__50958;
chunk__50751_50937 = G__50959;
count__50752_50938 = G__50960;
i__50753_50939 = G__50961;
continue;
} else {
var node_50962 = cljs.core.first(seq__50747_50956__$1);
if(cljs.core.not(node_50962.shadow$old)){
var path_match_50963 = shadow.cljs.devtools.client.browser.match_paths(node_50962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50963)){
var new_link_50964 = (function (){var G__50768 = node_50962.cloneNode(true);
G__50768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50768;
})();
(node_50962.shadow$old = true);

(new_link_50964.onload = ((function (seq__50747_50936,chunk__50751_50937,count__50752_50938,i__50753_50939,seq__50686,chunk__50688,count__50689,i__50690,new_link_50964,path_match_50963,node_50962,seq__50747_50956__$1,temp__5743__auto___50955__$1,path,seq__50686__$1,temp__5743__auto__,map__50684,map__50684__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50962);
});})(seq__50747_50936,chunk__50751_50937,count__50752_50938,i__50753_50939,seq__50686,chunk__50688,count__50689,i__50690,new_link_50964,path_match_50963,node_50962,seq__50747_50956__$1,temp__5743__auto___50955__$1,path,seq__50686__$1,temp__5743__auto__,map__50684,map__50684__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50963], 0));

goog.dom.insertSiblingAfter(new_link_50964,node_50962);


var G__50965 = cljs.core.next(seq__50747_50956__$1);
var G__50966 = null;
var G__50967 = (0);
var G__50968 = (0);
seq__50747_50936 = G__50965;
chunk__50751_50937 = G__50966;
count__50752_50938 = G__50967;
i__50753_50939 = G__50968;
continue;
} else {
var G__50969 = cljs.core.next(seq__50747_50956__$1);
var G__50970 = null;
var G__50971 = (0);
var G__50972 = (0);
seq__50747_50936 = G__50969;
chunk__50751_50937 = G__50970;
count__50752_50938 = G__50971;
i__50753_50939 = G__50972;
continue;
}
} else {
var G__50973 = cljs.core.next(seq__50747_50956__$1);
var G__50974 = null;
var G__50975 = (0);
var G__50976 = (0);
seq__50747_50936 = G__50973;
chunk__50751_50937 = G__50974;
count__50752_50938 = G__50975;
i__50753_50939 = G__50976;
continue;
}
}
} else {
}
}
break;
}


var G__50977 = cljs.core.next(seq__50686__$1);
var G__50978 = null;
var G__50979 = (0);
var G__50980 = (0);
seq__50686 = G__50977;
chunk__50688 = G__50978;
count__50689 = G__50979;
i__50690 = G__50980;
continue;
} else {
var G__50981 = cljs.core.next(seq__50686__$1);
var G__50982 = null;
var G__50983 = (0);
var G__50984 = (0);
seq__50686 = G__50981;
chunk__50688 = G__50982;
count__50689 = G__50983;
i__50690 = G__50984;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50769){
var map__50770 = p__50769;
var map__50770__$1 = (((((!((map__50770 == null))))?(((((map__50770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50770):map__50770);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50770__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50777){
var map__50778 = p__50777;
var map__50778__$1 = (((((!((map__50778 == null))))?(((((map__50778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50778):map__50778);
var _ = map__50778__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50781,done,error){
var map__50782 = p__50781;
var map__50782__$1 = (((((!((map__50782 == null))))?(((((map__50782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50782):map__50782);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50782__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50784,done,error){
var map__50785 = p__50784;
var map__50785__$1 = (((((!((map__50785 == null))))?(((((map__50785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50785):map__50785);
var msg = map__50785__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50787){
var map__50788 = p__50787;
var map__50788__$1 = (((((!((map__50788 == null))))?(((((map__50788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50788):map__50788);
var src = map__50788__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50790 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50790) : done.call(null,G__50790));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50791){
var map__50792 = p__50791;
var map__50792__$1 = (((((!((map__50792 == null))))?(((((map__50792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50792):map__50792);
var msg__$1 = map__50792__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50794){var ex = e50794;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50795){
var map__50796 = p__50795;
var map__50796__$1 = (((((!((map__50796 == null))))?(((((map__50796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50796):map__50796);
var env = map__50796__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50796__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50798){
var map__50799 = p__50798;
var map__50799__$1 = (((((!((map__50799 == null))))?(((((map__50799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50799):map__50799);
var msg = map__50799__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50799__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50801){
var map__50802 = p__50801;
var map__50802__$1 = (((((!((map__50802 == null))))?(((((map__50802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50802):map__50802);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50804){
var map__50805 = p__50804;
var map__50805__$1 = (((((!((map__50805 == null))))?(((((map__50805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50805):map__50805);
var svc = map__50805__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50805__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
