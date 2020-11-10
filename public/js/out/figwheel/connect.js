// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44345__delegate = function (x__44324__auto__){
if(cljs.core.truth_(frontend.counter.init_BANG_)){
return cljs.core.apply.call(null,frontend.counter.init_BANG_,x__44324__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","frontend.counter/init!","' is missing"].join(''));
}
};
var G__44345 = function (var_args){
var x__44324__auto__ = null;
if (arguments.length > 0) {
var G__44346__i = 0, G__44346__a = new Array(arguments.length -  0);
while (G__44346__i < G__44346__a.length) {G__44346__a[G__44346__i] = arguments[G__44346__i + 0]; ++G__44346__i;}
  x__44324__auto__ = new cljs.core.IndexedSeq(G__44346__a,0,null);
} 
return G__44345__delegate.call(this,x__44324__auto__);};
G__44345.cljs$lang$maxFixedArity = 0;
G__44345.cljs$lang$applyTo = (function (arglist__44347){
var x__44324__auto__ = cljs.core.seq(arglist__44347);
return G__44345__delegate(x__44324__auto__);
});
G__44345.cljs$core$IFn$_invoke$arity$variadic = G__44345__delegate;
return G__44345;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1604387947382
