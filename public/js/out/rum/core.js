// Compiled by ClojureScript 1.10.773 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.functions');
goog.require('clojure.set');
goog.require('rum.specs');
goog.require('daiquiri.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__32502 = cljs.core.seq.call(null,props);
var chunk__32504 = null;
var count__32505 = (0);
var i__32506 = (0);
while(true){
if((i__32506 < count__32505)){
var vec__32514 = cljs.core._nth.call(null,chunk__32504,i__32506);
var k = cljs.core.nth.call(null,vec__32514,(0),null);
var v = cljs.core.nth.call(null,vec__32514,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__32520 = seq__32502;
var G__32521 = chunk__32504;
var G__32522 = count__32505;
var G__32523 = (i__32506 + (1));
seq__32502 = G__32520;
chunk__32504 = G__32521;
count__32505 = G__32522;
i__32506 = G__32523;
continue;
} else {
var G__32524 = seq__32502;
var G__32525 = chunk__32504;
var G__32526 = count__32505;
var G__32527 = (i__32506 + (1));
seq__32502 = G__32524;
chunk__32504 = G__32525;
count__32505 = G__32526;
i__32506 = G__32527;
continue;
}
} else {
var temp__5743__auto__ = cljs.core.seq.call(null,seq__32502);
if(temp__5743__auto__){
var seq__32502__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32502__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32502__$1);
var G__32528 = cljs.core.chunk_rest.call(null,seq__32502__$1);
var G__32529 = c__4556__auto__;
var G__32530 = cljs.core.count.call(null,c__4556__auto__);
var G__32531 = (0);
seq__32502 = G__32528;
chunk__32504 = G__32529;
count__32505 = G__32530;
i__32506 = G__32531;
continue;
} else {
var vec__32517 = cljs.core.first.call(null,seq__32502__$1);
var k = cljs.core.nth.call(null,vec__32517,(0),null);
var v = cljs.core.nth.call(null,vec__32517,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__32532 = cljs.core.next.call(null,seq__32502__$1);
var G__32533 = null;
var G__32534 = (0);
var G__32535 = (0);
seq__32502 = G__32532;
chunk__32504 = G__32533;
count__32505 = G__32534;
i__32506 = G__32535;
continue;
} else {
var G__32536 = cljs.core.next.call(null,seq__32502__$1);
var G__32537 = null;
var G__32538 = (0);
var G__32539 = (0);
seq__32502 = G__32536;
chunk__32504 = G__32537;
count__32505 = G__32538;
i__32506 = G__32539;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var mixins_32549__$1 = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.keys,mixins));
if(clojure.set.subset_QMARK_.call(null,mixins_32549__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.call(null,mixins_32549__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,(function (p1__32541_SHARP_,p2__32540_SHARP_){
return p2__32540_SHARP_.call(null,p1__32541_SHARP_);
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,(function (p1__32543_SHARP_,p2__32542_SHARP_){
return p2__32542_SHARP_.call(null,old_state,p1__32543_SHARP_);
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
}));

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__32544_SHARP_){
return p1__32544_SHARP_.call(null,old_state,new_state);
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__32546 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__32546,(0),null);
var next_state = cljs.core.nth.call(null,vec__32546,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__32545_SHARP_){
return p1__32545_SHARP_.call(null,state);
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = c.call(null);
return ctr.apply(ctr,arguments);
});
var x32550_32551 = f;
(x32550_32551.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x32550_32551.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta.call(null,c.call(null));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return ctor.call(null,render,mixins,display_name);
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_.call(null,c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__32552__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__32552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32553__i = 0, G__32553__a = new Array(arguments.length -  0);
while (G__32553__i < G__32553__a.length) {G__32553__a[G__32553__i] = arguments[G__32553__i + 0]; ++G__32553__i;}
  args = new cljs.core.IndexedSeq(G__32553__a,0,null);
} 
return G__32552__delegate.call(this,args);};
G__32552.cljs$lang$maxFixedArity = 0;
G__32552.cljs$lang$applyTo = (function (arglist__32554){
var args = cljs.core.seq(arglist__32554);
return G__32552__delegate(args);
});
G__32552.cljs$core$IFn$_invoke$arity$variadic = G__32552__delegate;
return G__32552;
})()
:(function() { 
var G__32555__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__32555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32556__i = 0, G__32556__a = new Array(arguments.length -  0);
while (G__32556__i < G__32556__a.length) {G__32556__a[G__32556__i] = arguments[G__32556__i + 0]; ++G__32556__i;}
  args = new cljs.core.IndexedSeq(G__32556__a,0,null);
} 
return G__32555__delegate.call(this,args);};
G__32555.cljs$lang$maxFixedArity = 0;
G__32555.cljs$lang$applyTo = (function (arglist__32557){
var args = cljs.core.seq(arglist__32557);
return G__32555__delegate(args);
});
G__32555.cljs$core$IFn$_invoke$arity$variadic = G__32555__delegate;
return G__32555;
})()
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.call(null,(prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5745__auto__ = React.memo;
if((temp__5745__auto__ == null)){
return f;
} else {
var memo = temp__5745__auto__;
return memo.call(null,f,rum.core.memo_compare_props);
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.call(null,mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo.call(null,class$);
var ctor = (function() { 
var G__32558__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__32558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32559__i = 0, G__32559__a = new Array(arguments.length -  0);
while (G__32559__i < G__32559__a.length) {G__32559__a[G__32559__i] = arguments[G__32559__i + 0]; ++G__32559__i;}
  args = new cljs.core.IndexedSeq(G__32559__a,0,null);
} 
return G__32558__delegate.call(this,args);};
G__32558.cljs$lang$maxFixedArity = 0;
G__32558.cljs$lang$applyTo = (function (arglist__32560){
var args = cljs.core.seq(arglist__32560);
return G__32558__delegate(args);
});
G__32558.cljs$core$IFn$_invoke$arity$variadic = G__32558__delegate;
return G__32558;
})()
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__32561__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__32561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32562__i = 0, G__32562__a = new Array(arguments.length -  0);
while (G__32562__i < G__32562__a.length) {G__32562__a[G__32562__i] = arguments[G__32562__i + 0]; ++G__32562__i;}
  args = new cljs.core.IndexedSeq(G__32562__a,0,null);
} 
return G__32561__delegate.call(this,args);};
G__32561.cljs$lang$maxFixedArity = 0;
G__32561.cljs$lang$applyTo = (function (arglist__32563){
var args = cljs.core.seq(arglist__32563);
return G__32561__delegate(args);
});
G__32561.cljs$core$IFn$_invoke$arity$variadic = G__32561__delegate;
return G__32561;
})()
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.request_render = (function rum$core$request_render(comp){
return comp.forceUpdate();
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__32565 = arguments.length;
switch (G__32565) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return component.forceUpdate();
} else {
return null;
}
}));

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__32567 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__32568 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__32568);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__32569 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__32569,(0),null);
var next_state = cljs.core.nth.call(null,vec__32569,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__32572_32584 = cljs.core.seq.call(null,old_reactions);
var chunk__32573_32585 = null;
var count__32574_32586 = (0);
var i__32575_32587 = (0);
while(true){
if((i__32575_32587 < count__32574_32586)){
var ref_32588 = cljs.core._nth.call(null,chunk__32573_32585,i__32575_32587);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_32588)){
} else {
cljs.core.remove_watch.call(null,ref_32588,key);
}


var G__32589 = seq__32572_32584;
var G__32590 = chunk__32573_32585;
var G__32591 = count__32574_32586;
var G__32592 = (i__32575_32587 + (1));
seq__32572_32584 = G__32589;
chunk__32573_32585 = G__32590;
count__32574_32586 = G__32591;
i__32575_32587 = G__32592;
continue;
} else {
var temp__5743__auto___32593 = cljs.core.seq.call(null,seq__32572_32584);
if(temp__5743__auto___32593){
var seq__32572_32594__$1 = temp__5743__auto___32593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32572_32594__$1)){
var c__4556__auto___32595 = cljs.core.chunk_first.call(null,seq__32572_32594__$1);
var G__32596 = cljs.core.chunk_rest.call(null,seq__32572_32594__$1);
var G__32597 = c__4556__auto___32595;
var G__32598 = cljs.core.count.call(null,c__4556__auto___32595);
var G__32599 = (0);
seq__32572_32584 = G__32596;
chunk__32573_32585 = G__32597;
count__32574_32586 = G__32598;
i__32575_32587 = G__32599;
continue;
} else {
var ref_32600 = cljs.core.first.call(null,seq__32572_32594__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_32600)){
} else {
cljs.core.remove_watch.call(null,ref_32600,key);
}


var G__32601 = cljs.core.next.call(null,seq__32572_32594__$1);
var G__32602 = null;
var G__32603 = (0);
var G__32604 = (0);
seq__32572_32584 = G__32601;
chunk__32573_32585 = G__32602;
count__32574_32586 = G__32603;
i__32575_32587 = G__32604;
continue;
}
} else {
}
}
break;
}

var seq__32576_32605 = cljs.core.seq.call(null,new_reactions);
var chunk__32577_32606 = null;
var count__32578_32607 = (0);
var i__32579_32608 = (0);
while(true){
if((i__32579_32608 < count__32578_32607)){
var ref_32609 = cljs.core._nth.call(null,chunk__32577_32606,i__32579_32608);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_32609)){
} else {
cljs.core.add_watch.call(null,ref_32609,key,((function (seq__32576_32605,chunk__32577_32606,count__32578_32607,i__32579_32608,ref_32609,comp,old_reactions,vec__32569,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32567,_STAR_reactions_STAR__temp_val__32568){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__32576_32605,chunk__32577_32606,count__32578_32607,i__32579_32608,ref_32609,comp,old_reactions,vec__32569,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32567,_STAR_reactions_STAR__temp_val__32568))
);
}


var G__32610 = seq__32576_32605;
var G__32611 = chunk__32577_32606;
var G__32612 = count__32578_32607;
var G__32613 = (i__32579_32608 + (1));
seq__32576_32605 = G__32610;
chunk__32577_32606 = G__32611;
count__32578_32607 = G__32612;
i__32579_32608 = G__32613;
continue;
} else {
var temp__5743__auto___32614 = cljs.core.seq.call(null,seq__32576_32605);
if(temp__5743__auto___32614){
var seq__32576_32615__$1 = temp__5743__auto___32614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32576_32615__$1)){
var c__4556__auto___32616 = cljs.core.chunk_first.call(null,seq__32576_32615__$1);
var G__32617 = cljs.core.chunk_rest.call(null,seq__32576_32615__$1);
var G__32618 = c__4556__auto___32616;
var G__32619 = cljs.core.count.call(null,c__4556__auto___32616);
var G__32620 = (0);
seq__32576_32605 = G__32617;
chunk__32577_32606 = G__32618;
count__32578_32607 = G__32619;
i__32579_32608 = G__32620;
continue;
} else {
var ref_32621 = cljs.core.first.call(null,seq__32576_32615__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_32621)){
} else {
cljs.core.add_watch.call(null,ref_32621,key,((function (seq__32576_32605,chunk__32577_32606,count__32578_32607,i__32579_32608,ref_32621,seq__32576_32615__$1,temp__5743__auto___32614,comp,old_reactions,vec__32569,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32567,_STAR_reactions_STAR__temp_val__32568){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.call(null,p,n)){
return comp.forceUpdate();
} else {
return null;
}
});})(seq__32576_32605,chunk__32577_32606,count__32578_32607,i__32579_32608,ref_32621,seq__32576_32615__$1,temp__5743__auto___32614,comp,old_reactions,vec__32569,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32567,_STAR_reactions_STAR__temp_val__32568))
);
}


var G__32622 = cljs.core.next.call(null,seq__32576_32615__$1);
var G__32623 = null;
var G__32624 = (0);
var G__32625 = (0);
seq__32576_32605 = G__32622;
chunk__32577_32606 = G__32623;
count__32578_32607 = G__32624;
i__32579_32608 = G__32625;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__32567);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_32626 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__32580_32627 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__32581_32628 = null;
var count__32582_32629 = (0);
var i__32583_32630 = (0);
while(true){
if((i__32583_32630 < count__32582_32629)){
var ref_32631 = cljs.core._nth.call(null,chunk__32581_32628,i__32583_32630);
cljs.core.remove_watch.call(null,ref_32631,key_32626);


var G__32632 = seq__32580_32627;
var G__32633 = chunk__32581_32628;
var G__32634 = count__32582_32629;
var G__32635 = (i__32583_32630 + (1));
seq__32580_32627 = G__32632;
chunk__32581_32628 = G__32633;
count__32582_32629 = G__32634;
i__32583_32630 = G__32635;
continue;
} else {
var temp__5743__auto___32636 = cljs.core.seq.call(null,seq__32580_32627);
if(temp__5743__auto___32636){
var seq__32580_32637__$1 = temp__5743__auto___32636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32580_32637__$1)){
var c__4556__auto___32638 = cljs.core.chunk_first.call(null,seq__32580_32637__$1);
var G__32639 = cljs.core.chunk_rest.call(null,seq__32580_32637__$1);
var G__32640 = c__4556__auto___32638;
var G__32641 = cljs.core.count.call(null,c__4556__auto___32638);
var G__32642 = (0);
seq__32580_32627 = G__32639;
chunk__32581_32628 = G__32640;
count__32582_32629 = G__32641;
i__32583_32630 = G__32642;
continue;
} else {
var ref_32643 = cljs.core.first.call(null,seq__32580_32637__$1);
cljs.core.remove_watch.call(null,ref_32643,key_32626);


var G__32644 = cljs.core.next.call(null,seq__32580_32637__$1);
var G__32645 = null;
var G__32646 = (0);
var G__32647 = (0);
seq__32580_32627 = G__32644;
chunk__32581_32628 = G__32645;
count__32582_32629 = G__32646;
i__32583_32630 = G__32647;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32654 = arguments.length;
var i__4737__auto___32655 = (0);
while(true){
if((i__4737__auto___32655 < len__4736__auto___32654)){
args__4742__auto__.push((arguments[i__4737__auto___32655]));

var G__32656 = (i__4737__auto___32655 + (1));
i__4737__auto___32655 = G__32656;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__32651){
var map__32652 = p__32651;
var map__32652__$1 = (((((!((map__32652 == null))))?(((((map__32652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32652):map__32652);
var options = map__32652__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq32648){
var G__32649 = cljs.core.first.call(null,seq32648);
var seq32648__$1 = cljs.core.next.call(null,seq32648);
var G__32650 = cljs.core.first.call(null,seq32648__$1);
var seq32648__$2 = cljs.core.next.call(null,seq32648__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32649,G__32650,seq32648__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32660 = arguments.length;
var i__4737__auto___32661 = (0);
while(true){
if((i__4737__auto___32661 < len__4736__auto___32660)){
args__4742__auto__.push((arguments[i__4737__auto___32661]));

var G__32662 = (i__4737__auto___32661 + (1));
i__4737__auto___32661 = G__32662;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq32657){
var G__32658 = cljs.core.first.call(null,seq32657);
var seq32657__$1 = cljs.core.next.call(null,seq32657);
var G__32659 = cljs.core.first.call(null,seq32657__$1);
var seq32657__$2 = cljs.core.next.call(null,seq32657__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32658,G__32659,seq32657__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__32663_SHARP_,p2__32664_SHARP_){
return reducer_fn.call(null,p1__32663_SHARP_,p2__32664_SHARP_);
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__32666 = arguments.length;
switch (G__32666) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__4126__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__4126__auto__ = setup_fn.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__32669 = arguments.length;
switch (G__32669) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__32672 = arguments.length;
switch (G__32672) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_.call(null,deps))?deps:cljs.core.into_array.call(null,deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__32675 = arguments.length;
switch (G__32675) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.call(null,element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=core.js.map?rel=1604387928109