// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43842){if((e43842 instanceof Error)){
var e = e43842;
return "Error: Unable to stringify";
} else {
throw e43842;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43845 = arguments.length;
switch (G__43845) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43843_SHARP_){
if(typeof p1__43843_SHARP_ === 'string'){
return p1__43843_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43843_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43848 = arguments.length;
var i__4737__auto___43849 = (0);
while(true){
if((i__4737__auto___43849 < len__4736__auto___43848)){
args__4742__auto__.push((arguments[i__4737__auto___43849]));

var G__43850 = (i__4737__auto___43849 + (1));
i__4737__auto___43849 = G__43850;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43847){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43847));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43852 = arguments.length;
var i__4737__auto___43853 = (0);
while(true){
if((i__4737__auto___43853 < len__4736__auto___43852)){
args__4742__auto__.push((arguments[i__4737__auto___43853]));

var G__43854 = (i__4737__auto___43853 + (1));
i__4737__auto___43853 = G__43854;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43851){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43851));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43855){
var map__43856 = p__43855;
var map__43856__$1 = (((((!((map__43856 == null))))?(((((map__43856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43856):map__43856);
var message = cljs.core.get.call(null,map__43856__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43856__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35235__auto___43935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_43907){
var state_val_43908 = (state_43907[(1)]);
if((state_val_43908 === (7))){
var inst_43903 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43909_43936 = state_43907__$1;
(statearr_43909_43936[(2)] = inst_43903);

(statearr_43909_43936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (1))){
var state_43907__$1 = state_43907;
var statearr_43910_43937 = state_43907__$1;
(statearr_43910_43937[(2)] = null);

(statearr_43910_43937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (4))){
var inst_43860 = (state_43907[(7)]);
var inst_43860__$1 = (state_43907[(2)]);
var state_43907__$1 = (function (){var statearr_43911 = state_43907;
(statearr_43911[(7)] = inst_43860__$1);

return statearr_43911;
})();
if(cljs.core.truth_(inst_43860__$1)){
var statearr_43912_43938 = state_43907__$1;
(statearr_43912_43938[(1)] = (5));

} else {
var statearr_43913_43939 = state_43907__$1;
(statearr_43913_43939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (15))){
var inst_43867 = (state_43907[(8)]);
var inst_43882 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43867);
var inst_43883 = cljs.core.first.call(null,inst_43882);
var inst_43884 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43883);
var inst_43885 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43884)].join('');
var inst_43886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43885);
var state_43907__$1 = state_43907;
var statearr_43914_43940 = state_43907__$1;
(statearr_43914_43940[(2)] = inst_43886);

(statearr_43914_43940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (13))){
var inst_43891 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43915_43941 = state_43907__$1;
(statearr_43915_43941[(2)] = inst_43891);

(statearr_43915_43941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (6))){
var state_43907__$1 = state_43907;
var statearr_43916_43942 = state_43907__$1;
(statearr_43916_43942[(2)] = null);

(statearr_43916_43942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (17))){
var inst_43889 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43917_43943 = state_43907__$1;
(statearr_43917_43943[(2)] = inst_43889);

(statearr_43917_43943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (3))){
var inst_43905 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43907__$1,inst_43905);
} else {
if((state_val_43908 === (12))){
var inst_43866 = (state_43907[(9)]);
var inst_43880 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43866,opts);
var state_43907__$1 = state_43907;
if(inst_43880){
var statearr_43918_43944 = state_43907__$1;
(statearr_43918_43944[(1)] = (15));

} else {
var statearr_43919_43945 = state_43907__$1;
(statearr_43919_43945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (2))){
var state_43907__$1 = state_43907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43907__$1,(4),ch);
} else {
if((state_val_43908 === (11))){
var inst_43867 = (state_43907[(8)]);
var inst_43872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43873 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43867);
var inst_43874 = cljs.core.async.timeout.call(null,(1000));
var inst_43875 = [inst_43873,inst_43874];
var inst_43876 = (new cljs.core.PersistentVector(null,2,(5),inst_43872,inst_43875,null));
var state_43907__$1 = state_43907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43907__$1,(14),inst_43876);
} else {
if((state_val_43908 === (9))){
var inst_43867 = (state_43907[(8)]);
var inst_43893 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43894 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43867);
var inst_43895 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43894);
var inst_43896 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43895)].join('');
var inst_43897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43896);
var state_43907__$1 = (function (){var statearr_43920 = state_43907;
(statearr_43920[(10)] = inst_43893);

return statearr_43920;
})();
var statearr_43921_43946 = state_43907__$1;
(statearr_43921_43946[(2)] = inst_43897);

(statearr_43921_43946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (5))){
var inst_43860 = (state_43907[(7)]);
var inst_43862 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43863 = (new cljs.core.PersistentArrayMap(null,2,inst_43862,null));
var inst_43864 = (new cljs.core.PersistentHashSet(null,inst_43863,null));
var inst_43865 = figwheel.client.focus_msgs.call(null,inst_43864,inst_43860);
var inst_43866 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43865);
var inst_43867 = cljs.core.first.call(null,inst_43865);
var inst_43868 = figwheel.client.autoload_QMARK_.call(null);
var state_43907__$1 = (function (){var statearr_43922 = state_43907;
(statearr_43922[(8)] = inst_43867);

(statearr_43922[(9)] = inst_43866);

return statearr_43922;
})();
if(cljs.core.truth_(inst_43868)){
var statearr_43923_43947 = state_43907__$1;
(statearr_43923_43947[(1)] = (8));

} else {
var statearr_43924_43948 = state_43907__$1;
(statearr_43924_43948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (14))){
var inst_43878 = (state_43907[(2)]);
var state_43907__$1 = state_43907;
var statearr_43925_43949 = state_43907__$1;
(statearr_43925_43949[(2)] = inst_43878);

(statearr_43925_43949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (16))){
var state_43907__$1 = state_43907;
var statearr_43926_43950 = state_43907__$1;
(statearr_43926_43950[(2)] = null);

(statearr_43926_43950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (10))){
var inst_43899 = (state_43907[(2)]);
var state_43907__$1 = (function (){var statearr_43927 = state_43907;
(statearr_43927[(11)] = inst_43899);

return statearr_43927;
})();
var statearr_43928_43951 = state_43907__$1;
(statearr_43928_43951[(2)] = null);

(statearr_43928_43951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43908 === (8))){
var inst_43866 = (state_43907[(9)]);
var inst_43870 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43866,opts);
var state_43907__$1 = state_43907;
if(cljs.core.truth_(inst_43870)){
var statearr_43929_43952 = state_43907__$1;
(statearr_43929_43952[(1)] = (11));

} else {
var statearr_43930_43953 = state_43907__$1;
(statearr_43930_43953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____0 = (function (){
var statearr_43931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43931[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__);

(statearr_43931[(1)] = (1));

return statearr_43931;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____1 = (function (state_43907){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_43907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e43932){if((e43932 instanceof Object)){
var ex__35144__auto__ = e43932;
var statearr_43933_43954 = state_43907;
(statearr_43933_43954[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43955 = state_43907;
state_43907 = G__43955;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__ = function(state_43907){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____1.call(this,state_43907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35141__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_43934 = f__35236__auto__.call(null);
(statearr_43934[(6)] = c__35235__auto___43935);

return statearr_43934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43956_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43956_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43962 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43959 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43960 = true;
var _STAR_print_fn_STAR__temp_val__43961 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43960);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43961);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43959);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43958);
}}catch (e43957){if((e43957 instanceof Error)){
var e = e43957;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43962], null));
} else {
var e = e43957;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43963){
var map__43964 = p__43963;
var map__43964__$1 = (((((!((map__43964 == null))))?(((((map__43964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43964):map__43964);
var opts = map__43964__$1;
var build_id = cljs.core.get.call(null,map__43964__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__43966){
var vec__43967 = p__43966;
var seq__43968 = cljs.core.seq.call(null,vec__43967);
var first__43969 = cljs.core.first.call(null,seq__43968);
var seq__43968__$1 = cljs.core.next.call(null,seq__43968);
var map__43970 = first__43969;
var map__43970__$1 = (((((!((map__43970 == null))))?(((((map__43970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43970):map__43970);
var msg = map__43970__$1;
var msg_name = cljs.core.get.call(null,map__43970__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43968__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43972){
var vec__43973 = p__43972;
var seq__43974 = cljs.core.seq.call(null,vec__43973);
var first__43975 = cljs.core.first.call(null,seq__43974);
var seq__43974__$1 = cljs.core.next.call(null,seq__43974);
var map__43976 = first__43975;
var map__43976__$1 = (((((!((map__43976 == null))))?(((((map__43976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43976):map__43976);
var msg = map__43976__$1;
var msg_name = cljs.core.get.call(null,map__43976__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43974__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43978){
var map__43979 = p__43978;
var map__43979__$1 = (((((!((map__43979 == null))))?(((((map__43979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43979):map__43979);
var on_compile_warning = cljs.core.get.call(null,map__43979__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43979__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__43981){
var vec__43982 = p__43981;
var seq__43983 = cljs.core.seq.call(null,vec__43982);
var first__43984 = cljs.core.first.call(null,seq__43983);
var seq__43983__$1 = cljs.core.next.call(null,seq__43983);
var map__43985 = first__43984;
var map__43985__$1 = (((((!((map__43985 == null))))?(((((map__43985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43985):map__43985);
var msg = map__43985__$1;
var msg_name = cljs.core.get.call(null,map__43985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43983__$1;
var pred__43987 = cljs.core._EQ_;
var expr__43988 = msg_name;
if(cljs.core.truth_(pred__43987.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43988))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43987.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43988))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_44077){
var state_val_44078 = (state_44077[(1)]);
if((state_val_44078 === (7))){
var inst_43997 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
if(cljs.core.truth_(inst_43997)){
var statearr_44079_44126 = state_44077__$1;
(statearr_44079_44126[(1)] = (8));

} else {
var statearr_44080_44127 = state_44077__$1;
(statearr_44080_44127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (20))){
var inst_44071 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44081_44128 = state_44077__$1;
(statearr_44081_44128[(2)] = inst_44071);

(statearr_44081_44128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (27))){
var inst_44067 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44082_44129 = state_44077__$1;
(statearr_44082_44129[(2)] = inst_44067);

(statearr_44082_44129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (1))){
var inst_43990 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44077__$1 = state_44077;
if(cljs.core.truth_(inst_43990)){
var statearr_44083_44130 = state_44077__$1;
(statearr_44083_44130[(1)] = (2));

} else {
var statearr_44084_44131 = state_44077__$1;
(statearr_44084_44131[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (24))){
var inst_44069 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44085_44132 = state_44077__$1;
(statearr_44085_44132[(2)] = inst_44069);

(statearr_44085_44132[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (4))){
var inst_44075 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44077__$1,inst_44075);
} else {
if((state_val_44078 === (15))){
var inst_44073 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44086_44133 = state_44077__$1;
(statearr_44086_44133[(2)] = inst_44073);

(statearr_44086_44133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (21))){
var inst_44026 = (state_44077[(2)]);
var inst_44027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44028 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44027);
var state_44077__$1 = (function (){var statearr_44087 = state_44077;
(statearr_44087[(7)] = inst_44026);

return statearr_44087;
})();
var statearr_44088_44134 = state_44077__$1;
(statearr_44088_44134[(2)] = inst_44028);

(statearr_44088_44134[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (31))){
var inst_44056 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44056){
var statearr_44089_44135 = state_44077__$1;
(statearr_44089_44135[(1)] = (34));

} else {
var statearr_44090_44136 = state_44077__$1;
(statearr_44090_44136[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (32))){
var inst_44065 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44091_44137 = state_44077__$1;
(statearr_44091_44137[(2)] = inst_44065);

(statearr_44091_44137[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (33))){
var inst_44052 = (state_44077[(2)]);
var inst_44053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44054 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44053);
var state_44077__$1 = (function (){var statearr_44092 = state_44077;
(statearr_44092[(8)] = inst_44052);

return statearr_44092;
})();
var statearr_44093_44138 = state_44077__$1;
(statearr_44093_44138[(2)] = inst_44054);

(statearr_44093_44138[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (13))){
var inst_44011 = figwheel.client.heads_up.clear.call(null);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(16),inst_44011);
} else {
if((state_val_44078 === (22))){
var inst_44032 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44033 = figwheel.client.heads_up.append_warning_message.call(null,inst_44032);
var state_44077__$1 = state_44077;
var statearr_44094_44139 = state_44077__$1;
(statearr_44094_44139[(2)] = inst_44033);

(statearr_44094_44139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (36))){
var inst_44063 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44095_44140 = state_44077__$1;
(statearr_44095_44140[(2)] = inst_44063);

(statearr_44095_44140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (29))){
var inst_44043 = (state_44077[(2)]);
var inst_44044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44045 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44044);
var state_44077__$1 = (function (){var statearr_44096 = state_44077;
(statearr_44096[(9)] = inst_44043);

return statearr_44096;
})();
var statearr_44097_44141 = state_44077__$1;
(statearr_44097_44141[(2)] = inst_44045);

(statearr_44097_44141[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (6))){
var inst_43992 = (state_44077[(10)]);
var state_44077__$1 = state_44077;
var statearr_44098_44142 = state_44077__$1;
(statearr_44098_44142[(2)] = inst_43992);

(statearr_44098_44142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (28))){
var inst_44039 = (state_44077[(2)]);
var inst_44040 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44041 = figwheel.client.heads_up.display_warning.call(null,inst_44040);
var state_44077__$1 = (function (){var statearr_44099 = state_44077;
(statearr_44099[(11)] = inst_44039);

return statearr_44099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(29),inst_44041);
} else {
if((state_val_44078 === (25))){
var inst_44037 = figwheel.client.heads_up.clear.call(null);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(28),inst_44037);
} else {
if((state_val_44078 === (34))){
var inst_44058 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(37),inst_44058);
} else {
if((state_val_44078 === (17))){
var inst_44017 = (state_44077[(2)]);
var inst_44018 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44019 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44018);
var state_44077__$1 = (function (){var statearr_44100 = state_44077;
(statearr_44100[(12)] = inst_44017);

return statearr_44100;
})();
var statearr_44101_44143 = state_44077__$1;
(statearr_44101_44143[(2)] = inst_44019);

(statearr_44101_44143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (3))){
var inst_44009 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44009){
var statearr_44102_44144 = state_44077__$1;
(statearr_44102_44144[(1)] = (13));

} else {
var statearr_44103_44145 = state_44077__$1;
(statearr_44103_44145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (12))){
var inst_44005 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44104_44146 = state_44077__$1;
(statearr_44104_44146[(2)] = inst_44005);

(statearr_44104_44146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (2))){
var inst_43992 = (state_44077[(10)]);
var inst_43992__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44077__$1 = (function (){var statearr_44105 = state_44077;
(statearr_44105[(10)] = inst_43992__$1);

return statearr_44105;
})();
if(cljs.core.truth_(inst_43992__$1)){
var statearr_44106_44147 = state_44077__$1;
(statearr_44106_44147[(1)] = (5));

} else {
var statearr_44107_44148 = state_44077__$1;
(statearr_44107_44148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (23))){
var inst_44035 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44035){
var statearr_44108_44149 = state_44077__$1;
(statearr_44108_44149[(1)] = (25));

} else {
var statearr_44109_44150 = state_44077__$1;
(statearr_44109_44150[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (35))){
var state_44077__$1 = state_44077;
var statearr_44110_44151 = state_44077__$1;
(statearr_44110_44151[(2)] = null);

(statearr_44110_44151[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (19))){
var inst_44030 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44030){
var statearr_44111_44152 = state_44077__$1;
(statearr_44111_44152[(1)] = (22));

} else {
var statearr_44112_44153 = state_44077__$1;
(statearr_44112_44153[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (11))){
var inst_44001 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44113_44154 = state_44077__$1;
(statearr_44113_44154[(2)] = inst_44001);

(statearr_44113_44154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (9))){
var inst_44003 = figwheel.client.heads_up.clear.call(null);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(12),inst_44003);
} else {
if((state_val_44078 === (5))){
var inst_43994 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44077__$1 = state_44077;
var statearr_44114_44155 = state_44077__$1;
(statearr_44114_44155[(2)] = inst_43994);

(statearr_44114_44155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (14))){
var inst_44021 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44021){
var statearr_44115_44156 = state_44077__$1;
(statearr_44115_44156[(1)] = (18));

} else {
var statearr_44116_44157 = state_44077__$1;
(statearr_44116_44157[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (26))){
var inst_44047 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44077__$1 = state_44077;
if(inst_44047){
var statearr_44117_44158 = state_44077__$1;
(statearr_44117_44158[(1)] = (30));

} else {
var statearr_44118_44159 = state_44077__$1;
(statearr_44118_44159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (16))){
var inst_44013 = (state_44077[(2)]);
var inst_44014 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44015 = figwheel.client.heads_up.display_exception.call(null,inst_44014);
var state_44077__$1 = (function (){var statearr_44119 = state_44077;
(statearr_44119[(13)] = inst_44013);

return statearr_44119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(17),inst_44015);
} else {
if((state_val_44078 === (30))){
var inst_44049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44050 = figwheel.client.heads_up.display_warning.call(null,inst_44049);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(33),inst_44050);
} else {
if((state_val_44078 === (10))){
var inst_44007 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44120_44160 = state_44077__$1;
(statearr_44120_44160[(2)] = inst_44007);

(statearr_44120_44160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (18))){
var inst_44023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44024 = figwheel.client.heads_up.display_exception.call(null,inst_44023);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(21),inst_44024);
} else {
if((state_val_44078 === (37))){
var inst_44060 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44121_44161 = state_44077__$1;
(statearr_44121_44161[(2)] = inst_44060);

(statearr_44121_44161[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (8))){
var inst_43999 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(11),inst_43999);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____0 = (function (){
var statearr_44122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44122[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__);

(statearr_44122[(1)] = (1));

return statearr_44122;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____1 = (function (state_44077){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_44077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e44123){if((e44123 instanceof Object)){
var ex__35144__auto__ = e44123;
var statearr_44124_44162 = state_44077;
(statearr_44124_44162[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44163 = state_44077;
state_44077 = G__44163;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__ = function(state_44077){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____1.call(this,state_44077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_44125 = f__35236__auto__.call(null);
(statearr_44125[(6)] = c__35235__auto__);

return statearr_44125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35235__auto___44192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_44178){
var state_val_44179 = (state_44178[(1)]);
if((state_val_44179 === (1))){
var state_44178__$1 = state_44178;
var statearr_44180_44193 = state_44178__$1;
(statearr_44180_44193[(2)] = null);

(statearr_44180_44193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (2))){
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(4),ch);
} else {
if((state_val_44179 === (3))){
var inst_44176 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44178__$1,inst_44176);
} else {
if((state_val_44179 === (4))){
var inst_44166 = (state_44178[(7)]);
var inst_44166__$1 = (state_44178[(2)]);
var state_44178__$1 = (function (){var statearr_44181 = state_44178;
(statearr_44181[(7)] = inst_44166__$1);

return statearr_44181;
})();
if(cljs.core.truth_(inst_44166__$1)){
var statearr_44182_44194 = state_44178__$1;
(statearr_44182_44194[(1)] = (5));

} else {
var statearr_44183_44195 = state_44178__$1;
(statearr_44183_44195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (5))){
var inst_44166 = (state_44178[(7)]);
var inst_44168 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44166);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(8),inst_44168);
} else {
if((state_val_44179 === (6))){
var state_44178__$1 = state_44178;
var statearr_44184_44196 = state_44178__$1;
(statearr_44184_44196[(2)] = null);

(statearr_44184_44196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (7))){
var inst_44174 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44185_44197 = state_44178__$1;
(statearr_44185_44197[(2)] = inst_44174);

(statearr_44185_44197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (8))){
var inst_44170 = (state_44178[(2)]);
var state_44178__$1 = (function (){var statearr_44186 = state_44178;
(statearr_44186[(8)] = inst_44170);

return statearr_44186;
})();
var statearr_44187_44198 = state_44178__$1;
(statearr_44187_44198[(2)] = null);

(statearr_44187_44198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35141__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35141__auto____0 = (function (){
var statearr_44188 = [null,null,null,null,null,null,null,null,null];
(statearr_44188[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35141__auto__);

(statearr_44188[(1)] = (1));

return statearr_44188;
});
var figwheel$client$heads_up_plugin_$_state_machine__35141__auto____1 = (function (state_44178){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_44178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e44189){if((e44189 instanceof Object)){
var ex__35144__auto__ = e44189;
var statearr_44190_44199 = state_44178;
(statearr_44190_44199[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44200 = state_44178;
state_44178 = G__44200;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35141__auto__ = function(state_44178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35141__auto____1.call(this,state_44178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35141__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35141__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_44191 = f__35236__auto__.call(null);
(statearr_44191[(6)] = c__35235__auto___44192);

return statearr_44191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_44206){
var state_val_44207 = (state_44206[(1)]);
if((state_val_44207 === (1))){
var inst_44201 = cljs.core.async.timeout.call(null,(3000));
var state_44206__$1 = state_44206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44206__$1,(2),inst_44201);
} else {
if((state_val_44207 === (2))){
var inst_44203 = (state_44206[(2)]);
var inst_44204 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44206__$1 = (function (){var statearr_44208 = state_44206;
(statearr_44208[(7)] = inst_44203);

return statearr_44208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44206__$1,inst_44204);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____0 = (function (){
var statearr_44209 = [null,null,null,null,null,null,null,null];
(statearr_44209[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__);

(statearr_44209[(1)] = (1));

return statearr_44209;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____1 = (function (state_44206){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_44206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e44210){if((e44210 instanceof Object)){
var ex__35144__auto__ = e44210;
var statearr_44211_44213 = state_44206;
(statearr_44211_44213[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44214 = state_44206;
state_44206 = G__44214;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__ = function(state_44206){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____1.call(this,state_44206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35141__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_44212 = f__35236__auto__.call(null);
(statearr_44212[(6)] = c__35235__auto__);

return statearr_44212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5743__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5743__auto__)){
var figwheel_version = temp__5743__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_44221){
var state_val_44222 = (state_44221[(1)]);
if((state_val_44222 === (1))){
var inst_44215 = cljs.core.async.timeout.call(null,(2000));
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44221__$1,(2),inst_44215);
} else {
if((state_val_44222 === (2))){
var inst_44217 = (state_44221[(2)]);
var inst_44218 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44219 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44218);
var state_44221__$1 = (function (){var statearr_44223 = state_44221;
(statearr_44223[(7)] = inst_44217);

return statearr_44223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44221__$1,inst_44219);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____0 = (function (){
var statearr_44224 = [null,null,null,null,null,null,null,null];
(statearr_44224[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__);

(statearr_44224[(1)] = (1));

return statearr_44224;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____1 = (function (state_44221){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_44221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e44225){if((e44225 instanceof Object)){
var ex__35144__auto__ = e44225;
var statearr_44226_44228 = state_44221;
(statearr_44226_44228[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44229 = state_44221;
state_44221 = G__44229;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__ = function(state_44221){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____1.call(this,state_44221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_44227 = f__35236__auto__.call(null);
(statearr_44227[(6)] = c__35235__auto__);

return statearr_44227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44230){
var map__44231 = p__44230;
var map__44231__$1 = (((((!((map__44231 == null))))?(((((map__44231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44231):map__44231);
var file = cljs.core.get.call(null,map__44231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44231__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44231__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44233 = "";
var G__44233__$1 = (cljs.core.truth_(file)?[G__44233,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44233);
var G__44233__$2 = (cljs.core.truth_(line)?[G__44233__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44233__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__44233__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44233__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44234){
var map__44235 = p__44234;
var map__44235__$1 = (((((!((map__44235 == null))))?(((((map__44235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44235):map__44235);
var ed = map__44235__$1;
var exception_data = cljs.core.get.call(null,map__44235__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44235__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_44238 = (function (){var G__44237 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44237)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__44237;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_44238);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44239){
var map__44240 = p__44239;
var map__44240__$1 = (((((!((map__44240 == null))))?(((((map__44240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44240):map__44240);
var w = map__44240__$1;
var message = cljs.core.get.call(null,map__44240__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44242 = cljs.core.seq.call(null,plugins);
var chunk__44243 = null;
var count__44244 = (0);
var i__44245 = (0);
while(true){
if((i__44245 < count__44244)){
var vec__44252 = cljs.core._nth.call(null,chunk__44243,i__44245);
var k = cljs.core.nth.call(null,vec__44252,(0),null);
var plugin = cljs.core.nth.call(null,vec__44252,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44258 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44242,chunk__44243,count__44244,i__44245,pl_44258,vec__44252,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44258.call(null,msg_hist);
});})(seq__44242,chunk__44243,count__44244,i__44245,pl_44258,vec__44252,k,plugin))
);
} else {
}


var G__44259 = seq__44242;
var G__44260 = chunk__44243;
var G__44261 = count__44244;
var G__44262 = (i__44245 + (1));
seq__44242 = G__44259;
chunk__44243 = G__44260;
count__44244 = G__44261;
i__44245 = G__44262;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq.call(null,seq__44242);
if(temp__5743__auto__){
var seq__44242__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44242__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44242__$1);
var G__44263 = cljs.core.chunk_rest.call(null,seq__44242__$1);
var G__44264 = c__4556__auto__;
var G__44265 = cljs.core.count.call(null,c__4556__auto__);
var G__44266 = (0);
seq__44242 = G__44263;
chunk__44243 = G__44264;
count__44244 = G__44265;
i__44245 = G__44266;
continue;
} else {
var vec__44255 = cljs.core.first.call(null,seq__44242__$1);
var k = cljs.core.nth.call(null,vec__44255,(0),null);
var plugin = cljs.core.nth.call(null,vec__44255,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44267 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44242,chunk__44243,count__44244,i__44245,pl_44267,vec__44255,k,plugin,seq__44242__$1,temp__5743__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44267.call(null,msg_hist);
});})(seq__44242,chunk__44243,count__44244,i__44245,pl_44267,vec__44255,k,plugin,seq__44242__$1,temp__5743__auto__))
);
} else {
}


var G__44268 = cljs.core.next.call(null,seq__44242__$1);
var G__44269 = null;
var G__44270 = (0);
var G__44271 = (0);
seq__44242 = G__44268;
chunk__44243 = G__44269;
count__44244 = G__44270;
i__44245 = G__44271;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44273 = arguments.length;
switch (G__44273) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44274_44279 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44275_44280 = null;
var count__44276_44281 = (0);
var i__44277_44282 = (0);
while(true){
if((i__44277_44282 < count__44276_44281)){
var msg_44283 = cljs.core._nth.call(null,chunk__44275_44280,i__44277_44282);
figwheel.client.socket.handle_incoming_message.call(null,msg_44283);


var G__44284 = seq__44274_44279;
var G__44285 = chunk__44275_44280;
var G__44286 = count__44276_44281;
var G__44287 = (i__44277_44282 + (1));
seq__44274_44279 = G__44284;
chunk__44275_44280 = G__44285;
count__44276_44281 = G__44286;
i__44277_44282 = G__44287;
continue;
} else {
var temp__5743__auto___44288 = cljs.core.seq.call(null,seq__44274_44279);
if(temp__5743__auto___44288){
var seq__44274_44289__$1 = temp__5743__auto___44288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44274_44289__$1)){
var c__4556__auto___44290 = cljs.core.chunk_first.call(null,seq__44274_44289__$1);
var G__44291 = cljs.core.chunk_rest.call(null,seq__44274_44289__$1);
var G__44292 = c__4556__auto___44290;
var G__44293 = cljs.core.count.call(null,c__4556__auto___44290);
var G__44294 = (0);
seq__44274_44279 = G__44291;
chunk__44275_44280 = G__44292;
count__44276_44281 = G__44293;
i__44277_44282 = G__44294;
continue;
} else {
var msg_44295 = cljs.core.first.call(null,seq__44274_44289__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44295);


var G__44296 = cljs.core.next.call(null,seq__44274_44289__$1);
var G__44297 = null;
var G__44298 = (0);
var G__44299 = (0);
seq__44274_44279 = G__44296;
chunk__44275_44280 = G__44297;
count__44276_44281 = G__44298;
i__44277_44282 = G__44299;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44304 = arguments.length;
var i__4737__auto___44305 = (0);
while(true){
if((i__4737__auto___44305 < len__4736__auto___44304)){
args__4742__auto__.push((arguments[i__4737__auto___44305]));

var G__44306 = (i__4737__auto___44305 + (1));
i__4737__auto___44305 = G__44306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44301){
var map__44302 = p__44301;
var map__44302__$1 = (((((!((map__44302 == null))))?(((((map__44302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44302):map__44302);
var opts = map__44302__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44300){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44300));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44307){if((e44307 instanceof Error)){
var e = e44307;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44307;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__44308){
var map__44309 = p__44308;
var map__44309__$1 = (((((!((map__44309 == null))))?(((((map__44309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44309):map__44309);
var msg_name = cljs.core.get.call(null,map__44309__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1604387947282
