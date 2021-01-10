goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48626 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48626(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48629 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48629(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47874 = coll;
var G__47875 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47874,G__47875) : shadow.dom.lazy_native_coll_seq.call(null,G__47874,G__47875));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47878 = arguments.length;
switch (G__47878) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47884 = arguments.length;
switch (G__47884) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47888 = arguments.length;
switch (G__47888) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47895 = arguments.length;
switch (G__47895) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47904 = arguments.length;
switch (G__47904) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47911 = arguments.length;
switch (G__47911) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47919){if((e47919 instanceof Object)){
var e = e47919;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47919;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47930 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47931 = null;
var count__47932 = (0);
var i__47933 = (0);
while(true){
if((i__47933 < count__47932)){
var el = chunk__47931.cljs$core$IIndexed$_nth$arity$2(null,i__47933);
var handler_48656__$1 = ((function (seq__47930,chunk__47931,count__47932,i__47933,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47930,chunk__47931,count__47932,i__47933,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48656__$1);


var G__48657 = seq__47930;
var G__48658 = chunk__47931;
var G__48659 = count__47932;
var G__48660 = (i__47933 + (1));
seq__47930 = G__48657;
chunk__47931 = G__48658;
count__47932 = G__48659;
i__47933 = G__48660;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__47930);
if(temp__5743__auto__){
var seq__47930__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47930__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47930__$1);
var G__48663 = cljs.core.chunk_rest(seq__47930__$1);
var G__48664 = c__4556__auto__;
var G__48665 = cljs.core.count(c__4556__auto__);
var G__48666 = (0);
seq__47930 = G__48663;
chunk__47931 = G__48664;
count__47932 = G__48665;
i__47933 = G__48666;
continue;
} else {
var el = cljs.core.first(seq__47930__$1);
var handler_48668__$1 = ((function (seq__47930,chunk__47931,count__47932,i__47933,el,seq__47930__$1,temp__5743__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47930,chunk__47931,count__47932,i__47933,el,seq__47930__$1,temp__5743__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48668__$1);


var G__48669 = cljs.core.next(seq__47930__$1);
var G__48670 = null;
var G__48671 = (0);
var G__48672 = (0);
seq__47930 = G__48669;
chunk__47931 = G__48670;
count__47932 = G__48671;
i__47933 = G__48672;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47956 = arguments.length;
switch (G__47956) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47962 = cljs.core.seq(events);
var chunk__47963 = null;
var count__47964 = (0);
var i__47965 = (0);
while(true){
if((i__47965 < count__47964)){
var vec__47979 = chunk__47963.cljs$core$IIndexed$_nth$arity$2(null,i__47965);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48679 = seq__47962;
var G__48680 = chunk__47963;
var G__48681 = count__47964;
var G__48682 = (i__47965 + (1));
seq__47962 = G__48679;
chunk__47963 = G__48680;
count__47964 = G__48681;
i__47965 = G__48682;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__47962);
if(temp__5743__auto__){
var seq__47962__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47962__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47962__$1);
var G__48683 = cljs.core.chunk_rest(seq__47962__$1);
var G__48684 = c__4556__auto__;
var G__48685 = cljs.core.count(c__4556__auto__);
var G__48686 = (0);
seq__47962 = G__48683;
chunk__47963 = G__48684;
count__47964 = G__48685;
i__47965 = G__48686;
continue;
} else {
var vec__47983 = cljs.core.first(seq__47962__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47983,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48687 = cljs.core.next(seq__47962__$1);
var G__48688 = null;
var G__48689 = (0);
var G__48690 = (0);
seq__47962 = G__48687;
chunk__47963 = G__48688;
count__47964 = G__48689;
i__47965 = G__48690;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47988 = cljs.core.seq(styles);
var chunk__47989 = null;
var count__47990 = (0);
var i__47991 = (0);
while(true){
if((i__47991 < count__47990)){
var vec__48002 = chunk__47989.cljs$core$IIndexed$_nth$arity$2(null,i__47991);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48002,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48693 = seq__47988;
var G__48694 = chunk__47989;
var G__48695 = count__47990;
var G__48696 = (i__47991 + (1));
seq__47988 = G__48693;
chunk__47989 = G__48694;
count__47990 = G__48695;
i__47991 = G__48696;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__47988);
if(temp__5743__auto__){
var seq__47988__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47988__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47988__$1);
var G__48698 = cljs.core.chunk_rest(seq__47988__$1);
var G__48699 = c__4556__auto__;
var G__48700 = cljs.core.count(c__4556__auto__);
var G__48701 = (0);
seq__47988 = G__48698;
chunk__47989 = G__48699;
count__47990 = G__48700;
i__47991 = G__48701;
continue;
} else {
var vec__48011 = cljs.core.first(seq__47988__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48011,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48705 = cljs.core.next(seq__47988__$1);
var G__48706 = null;
var G__48707 = (0);
var G__48708 = (0);
seq__47988 = G__48705;
chunk__47989 = G__48706;
count__47990 = G__48707;
i__47991 = G__48708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48014_48709 = key;
var G__48014_48710__$1 = (((G__48014_48709 instanceof cljs.core.Keyword))?G__48014_48709.fqn:null);
switch (G__48014_48710__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48719 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48719,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48719,"aria-");
}
})())){
el.setAttribute(ks_48719,value);
} else {
(el[ks_48719] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48050){
var map__48051 = p__48050;
var map__48051__$1 = (((((!((map__48051 == null))))?(((((map__48051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48051):map__48051);
var props = map__48051__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48051__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48055 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48055,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48055,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48055,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48058 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48058,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48058;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48064 = arguments.length;
switch (G__48064) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5743__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5743__auto__)){
var n = temp__5743__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5743__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5743__auto__)){
var n = temp__5743__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48077){
var vec__48079 = p__48077;
var seq__48080 = cljs.core.seq(vec__48079);
var first__48081 = cljs.core.first(seq__48080);
var seq__48080__$1 = cljs.core.next(seq__48080);
var nn = first__48081;
var first__48081__$1 = cljs.core.first(seq__48080__$1);
var seq__48080__$2 = cljs.core.next(seq__48080__$1);
var np = first__48081__$1;
var nc = seq__48080__$2;
var node = vec__48079;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48084 = nn;
var G__48085 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48084,G__48085) : create_fn.call(null,G__48084,G__48085));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48086 = nn;
var G__48087 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48086,G__48087) : create_fn.call(null,G__48086,G__48087));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48093 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(1),null);
var seq__48096_48734 = cljs.core.seq(node_children);
var chunk__48097_48735 = null;
var count__48098_48736 = (0);
var i__48099_48737 = (0);
while(true){
if((i__48099_48737 < count__48098_48736)){
var child_struct_48739 = chunk__48097_48735.cljs$core$IIndexed$_nth$arity$2(null,i__48099_48737);
var children_48740 = shadow.dom.dom_node(child_struct_48739);
if(cljs.core.seq_QMARK_(children_48740)){
var seq__48142_48741 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48740));
var chunk__48144_48742 = null;
var count__48145_48743 = (0);
var i__48146_48744 = (0);
while(true){
if((i__48146_48744 < count__48145_48743)){
var child_48746 = chunk__48144_48742.cljs$core$IIndexed$_nth$arity$2(null,i__48146_48744);
if(cljs.core.truth_(child_48746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48746);


var G__48748 = seq__48142_48741;
var G__48749 = chunk__48144_48742;
var G__48750 = count__48145_48743;
var G__48751 = (i__48146_48744 + (1));
seq__48142_48741 = G__48748;
chunk__48144_48742 = G__48749;
count__48145_48743 = G__48750;
i__48146_48744 = G__48751;
continue;
} else {
var G__48754 = seq__48142_48741;
var G__48755 = chunk__48144_48742;
var G__48756 = count__48145_48743;
var G__48757 = (i__48146_48744 + (1));
seq__48142_48741 = G__48754;
chunk__48144_48742 = G__48755;
count__48145_48743 = G__48756;
i__48146_48744 = G__48757;
continue;
}
} else {
var temp__5743__auto___48759 = cljs.core.seq(seq__48142_48741);
if(temp__5743__auto___48759){
var seq__48142_48760__$1 = temp__5743__auto___48759;
if(cljs.core.chunked_seq_QMARK_(seq__48142_48760__$1)){
var c__4556__auto___48761 = cljs.core.chunk_first(seq__48142_48760__$1);
var G__48762 = cljs.core.chunk_rest(seq__48142_48760__$1);
var G__48763 = c__4556__auto___48761;
var G__48764 = cljs.core.count(c__4556__auto___48761);
var G__48765 = (0);
seq__48142_48741 = G__48762;
chunk__48144_48742 = G__48763;
count__48145_48743 = G__48764;
i__48146_48744 = G__48765;
continue;
} else {
var child_48766 = cljs.core.first(seq__48142_48760__$1);
if(cljs.core.truth_(child_48766)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48766);


var G__48767 = cljs.core.next(seq__48142_48760__$1);
var G__48768 = null;
var G__48769 = (0);
var G__48770 = (0);
seq__48142_48741 = G__48767;
chunk__48144_48742 = G__48768;
count__48145_48743 = G__48769;
i__48146_48744 = G__48770;
continue;
} else {
var G__48772 = cljs.core.next(seq__48142_48760__$1);
var G__48773 = null;
var G__48774 = (0);
var G__48775 = (0);
seq__48142_48741 = G__48772;
chunk__48144_48742 = G__48773;
count__48145_48743 = G__48774;
i__48146_48744 = G__48775;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48740);
}


var G__48777 = seq__48096_48734;
var G__48778 = chunk__48097_48735;
var G__48779 = count__48098_48736;
var G__48780 = (i__48099_48737 + (1));
seq__48096_48734 = G__48777;
chunk__48097_48735 = G__48778;
count__48098_48736 = G__48779;
i__48099_48737 = G__48780;
continue;
} else {
var temp__5743__auto___48782 = cljs.core.seq(seq__48096_48734);
if(temp__5743__auto___48782){
var seq__48096_48783__$1 = temp__5743__auto___48782;
if(cljs.core.chunked_seq_QMARK_(seq__48096_48783__$1)){
var c__4556__auto___48784 = cljs.core.chunk_first(seq__48096_48783__$1);
var G__48785 = cljs.core.chunk_rest(seq__48096_48783__$1);
var G__48786 = c__4556__auto___48784;
var G__48787 = cljs.core.count(c__4556__auto___48784);
var G__48788 = (0);
seq__48096_48734 = G__48785;
chunk__48097_48735 = G__48786;
count__48098_48736 = G__48787;
i__48099_48737 = G__48788;
continue;
} else {
var child_struct_48789 = cljs.core.first(seq__48096_48783__$1);
var children_48790 = shadow.dom.dom_node(child_struct_48789);
if(cljs.core.seq_QMARK_(children_48790)){
var seq__48158_48792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48790));
var chunk__48160_48793 = null;
var count__48161_48794 = (0);
var i__48162_48795 = (0);
while(true){
if((i__48162_48795 < count__48161_48794)){
var child_48796 = chunk__48160_48793.cljs$core$IIndexed$_nth$arity$2(null,i__48162_48795);
if(cljs.core.truth_(child_48796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48796);


var G__48797 = seq__48158_48792;
var G__48798 = chunk__48160_48793;
var G__48799 = count__48161_48794;
var G__48800 = (i__48162_48795 + (1));
seq__48158_48792 = G__48797;
chunk__48160_48793 = G__48798;
count__48161_48794 = G__48799;
i__48162_48795 = G__48800;
continue;
} else {
var G__48802 = seq__48158_48792;
var G__48803 = chunk__48160_48793;
var G__48804 = count__48161_48794;
var G__48805 = (i__48162_48795 + (1));
seq__48158_48792 = G__48802;
chunk__48160_48793 = G__48803;
count__48161_48794 = G__48804;
i__48162_48795 = G__48805;
continue;
}
} else {
var temp__5743__auto___48809__$1 = cljs.core.seq(seq__48158_48792);
if(temp__5743__auto___48809__$1){
var seq__48158_48810__$1 = temp__5743__auto___48809__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48158_48810__$1)){
var c__4556__auto___48811 = cljs.core.chunk_first(seq__48158_48810__$1);
var G__48812 = cljs.core.chunk_rest(seq__48158_48810__$1);
var G__48813 = c__4556__auto___48811;
var G__48814 = cljs.core.count(c__4556__auto___48811);
var G__48815 = (0);
seq__48158_48792 = G__48812;
chunk__48160_48793 = G__48813;
count__48161_48794 = G__48814;
i__48162_48795 = G__48815;
continue;
} else {
var child_48816 = cljs.core.first(seq__48158_48810__$1);
if(cljs.core.truth_(child_48816)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48816);


var G__48817 = cljs.core.next(seq__48158_48810__$1);
var G__48818 = null;
var G__48819 = (0);
var G__48820 = (0);
seq__48158_48792 = G__48817;
chunk__48160_48793 = G__48818;
count__48161_48794 = G__48819;
i__48162_48795 = G__48820;
continue;
} else {
var G__48821 = cljs.core.next(seq__48158_48810__$1);
var G__48822 = null;
var G__48823 = (0);
var G__48824 = (0);
seq__48158_48792 = G__48821;
chunk__48160_48793 = G__48822;
count__48161_48794 = G__48823;
i__48162_48795 = G__48824;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48790);
}


var G__48831 = cljs.core.next(seq__48096_48783__$1);
var G__48832 = null;
var G__48833 = (0);
var G__48834 = (0);
seq__48096_48734 = G__48831;
chunk__48097_48735 = G__48832;
count__48098_48736 = G__48833;
i__48099_48737 = G__48834;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48225 = cljs.core.seq(node);
var chunk__48226 = null;
var count__48227 = (0);
var i__48228 = (0);
while(true){
if((i__48228 < count__48227)){
var n = chunk__48226.cljs$core$IIndexed$_nth$arity$2(null,i__48228);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48839 = seq__48225;
var G__48840 = chunk__48226;
var G__48841 = count__48227;
var G__48842 = (i__48228 + (1));
seq__48225 = G__48839;
chunk__48226 = G__48840;
count__48227 = G__48841;
i__48228 = G__48842;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__48225);
if(temp__5743__auto__){
var seq__48225__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48225__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48225__$1);
var G__48844 = cljs.core.chunk_rest(seq__48225__$1);
var G__48845 = c__4556__auto__;
var G__48846 = cljs.core.count(c__4556__auto__);
var G__48847 = (0);
seq__48225 = G__48844;
chunk__48226 = G__48845;
count__48227 = G__48846;
i__48228 = G__48847;
continue;
} else {
var n = cljs.core.first(seq__48225__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48852 = cljs.core.next(seq__48225__$1);
var G__48853 = null;
var G__48854 = (0);
var G__48855 = (0);
seq__48225 = G__48852;
chunk__48226 = G__48853;
count__48227 = G__48854;
i__48228 = G__48855;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48237 = arguments.length;
switch (G__48237) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48239 = arguments.length;
switch (G__48239) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48246 = arguments.length;
switch (G__48246) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48872 = arguments.length;
var i__4737__auto___48873 = (0);
while(true){
if((i__4737__auto___48873 < len__4736__auto___48872)){
args__4742__auto__.push((arguments[i__4737__auto___48873]));

var G__48875 = (i__4737__auto___48873 + (1));
i__4737__auto___48873 = G__48875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48262_48876 = cljs.core.seq(nodes);
var chunk__48263_48877 = null;
var count__48264_48878 = (0);
var i__48265_48879 = (0);
while(true){
if((i__48265_48879 < count__48264_48878)){
var node_48881 = chunk__48263_48877.cljs$core$IIndexed$_nth$arity$2(null,i__48265_48879);
fragment.appendChild(shadow.dom._to_dom(node_48881));


var G__48883 = seq__48262_48876;
var G__48884 = chunk__48263_48877;
var G__48885 = count__48264_48878;
var G__48886 = (i__48265_48879 + (1));
seq__48262_48876 = G__48883;
chunk__48263_48877 = G__48884;
count__48264_48878 = G__48885;
i__48265_48879 = G__48886;
continue;
} else {
var temp__5743__auto___48887 = cljs.core.seq(seq__48262_48876);
if(temp__5743__auto___48887){
var seq__48262_48889__$1 = temp__5743__auto___48887;
if(cljs.core.chunked_seq_QMARK_(seq__48262_48889__$1)){
var c__4556__auto___48890 = cljs.core.chunk_first(seq__48262_48889__$1);
var G__48891 = cljs.core.chunk_rest(seq__48262_48889__$1);
var G__48892 = c__4556__auto___48890;
var G__48893 = cljs.core.count(c__4556__auto___48890);
var G__48894 = (0);
seq__48262_48876 = G__48891;
chunk__48263_48877 = G__48892;
count__48264_48878 = G__48893;
i__48265_48879 = G__48894;
continue;
} else {
var node_48895 = cljs.core.first(seq__48262_48889__$1);
fragment.appendChild(shadow.dom._to_dom(node_48895));


var G__48898 = cljs.core.next(seq__48262_48889__$1);
var G__48899 = null;
var G__48900 = (0);
var G__48901 = (0);
seq__48262_48876 = G__48898;
chunk__48263_48877 = G__48899;
count__48264_48878 = G__48900;
i__48265_48879 = G__48901;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48259){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48259));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48269_48904 = cljs.core.seq(scripts);
var chunk__48270_48905 = null;
var count__48271_48906 = (0);
var i__48272_48907 = (0);
while(true){
if((i__48272_48907 < count__48271_48906)){
var vec__48282_48908 = chunk__48270_48905.cljs$core$IIndexed$_nth$arity$2(null,i__48272_48907);
var script_tag_48909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282_48908,(0),null);
var script_body_48910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282_48908,(1),null);
eval(script_body_48910);


var G__48911 = seq__48269_48904;
var G__48912 = chunk__48270_48905;
var G__48913 = count__48271_48906;
var G__48914 = (i__48272_48907 + (1));
seq__48269_48904 = G__48911;
chunk__48270_48905 = G__48912;
count__48271_48906 = G__48913;
i__48272_48907 = G__48914;
continue;
} else {
var temp__5743__auto___48915 = cljs.core.seq(seq__48269_48904);
if(temp__5743__auto___48915){
var seq__48269_48916__$1 = temp__5743__auto___48915;
if(cljs.core.chunked_seq_QMARK_(seq__48269_48916__$1)){
var c__4556__auto___48917 = cljs.core.chunk_first(seq__48269_48916__$1);
var G__48918 = cljs.core.chunk_rest(seq__48269_48916__$1);
var G__48919 = c__4556__auto___48917;
var G__48920 = cljs.core.count(c__4556__auto___48917);
var G__48921 = (0);
seq__48269_48904 = G__48918;
chunk__48270_48905 = G__48919;
count__48271_48906 = G__48920;
i__48272_48907 = G__48921;
continue;
} else {
var vec__48286_48922 = cljs.core.first(seq__48269_48916__$1);
var script_tag_48923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286_48922,(0),null);
var script_body_48924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48286_48922,(1),null);
eval(script_body_48924);


var G__48925 = cljs.core.next(seq__48269_48916__$1);
var G__48926 = null;
var G__48927 = (0);
var G__48928 = (0);
seq__48269_48904 = G__48925;
chunk__48270_48905 = G__48926;
count__48271_48906 = G__48927;
i__48272_48907 = G__48928;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48289){
var vec__48290 = p__48289;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48290,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48290,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48300 = arguments.length;
switch (G__48300) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48315 = cljs.core.seq(style_keys);
var chunk__48316 = null;
var count__48317 = (0);
var i__48318 = (0);
while(true){
if((i__48318 < count__48317)){
var it = chunk__48316.cljs$core$IIndexed$_nth$arity$2(null,i__48318);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48940 = seq__48315;
var G__48941 = chunk__48316;
var G__48942 = count__48317;
var G__48943 = (i__48318 + (1));
seq__48315 = G__48940;
chunk__48316 = G__48941;
count__48317 = G__48942;
i__48318 = G__48943;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq(seq__48315);
if(temp__5743__auto__){
var seq__48315__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48315__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48315__$1);
var G__48944 = cljs.core.chunk_rest(seq__48315__$1);
var G__48945 = c__4556__auto__;
var G__48946 = cljs.core.count(c__4556__auto__);
var G__48947 = (0);
seq__48315 = G__48944;
chunk__48316 = G__48945;
count__48317 = G__48946;
i__48318 = G__48947;
continue;
} else {
var it = cljs.core.first(seq__48315__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48948 = cljs.core.next(seq__48315__$1);
var G__48949 = null;
var G__48950 = (0);
var G__48951 = (0);
seq__48315 = G__48948;
chunk__48316 = G__48949;
count__48317 = G__48950;
i__48318 = G__48951;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48323,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48331 = k48323;
var G__48331__$1 = (((G__48331 instanceof cljs.core.Keyword))?G__48331.fqn:null);
switch (G__48331__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48323,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48333){
var vec__48335 = p__48333;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48335,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48335,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48322){
var self__ = this;
var G__48322__$1 = this;
return (new cljs.core.RecordIter((0),G__48322__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48324,other48325){
var self__ = this;
var this48324__$1 = this;
return (((!((other48325 == null)))) && ((this48324__$1.constructor === other48325.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48324__$1.x,other48325.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48324__$1.y,other48325.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48324__$1.__extmap,other48325.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48322){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48347 = cljs.core.keyword_identical_QMARK_;
var expr__48348 = k__4388__auto__;
if(cljs.core.truth_((pred__48347.cljs$core$IFn$_invoke$arity$2 ? pred__48347.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48348) : pred__48347.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48348)))){
return (new shadow.dom.Coordinate(G__48322,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48347.cljs$core$IFn$_invoke$arity$2 ? pred__48347.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48348) : pred__48347.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48348)))){
return (new shadow.dom.Coordinate(self__.x,G__48322,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48322),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48322){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48322,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48326){
var extmap__4419__auto__ = (function (){var G__48358 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48326,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48326)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48358);
} else {
return G__48358;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48326),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48326),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48365,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48373 = k48365;
var G__48373__$1 = (((G__48373 instanceof cljs.core.Keyword))?G__48373.fqn:null);
switch (G__48373__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48365,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48376){
var vec__48378 = p__48376;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48378,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48378,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48364){
var self__ = this;
var G__48364__$1 = this;
return (new cljs.core.RecordIter((0),G__48364__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48366,other48367){
var self__ = this;
var this48366__$1 = this;
return (((!((other48367 == null)))) && ((this48366__$1.constructor === other48367.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48366__$1.w,other48367.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48366__$1.h,other48367.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48366__$1.__extmap,other48367.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48364){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48396 = cljs.core.keyword_identical_QMARK_;
var expr__48397 = k__4388__auto__;
if(cljs.core.truth_((pred__48396.cljs$core$IFn$_invoke$arity$2 ? pred__48396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48397) : pred__48396.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48397)))){
return (new shadow.dom.Size(G__48364,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48396.cljs$core$IFn$_invoke$arity$2 ? pred__48396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48397) : pred__48396.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48397)))){
return (new shadow.dom.Size(self__.w,G__48364,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48364),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48364){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48364,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48370){
var extmap__4419__auto__ = (function (){var G__48403 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48370,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48370)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48403);
} else {
return G__48403;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48370),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48370),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48995 = (i + (1));
var G__48996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48995;
ret = G__48996;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48416){
var vec__48417 = p__48416;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48417,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48422 = arguments.length;
switch (G__48422) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5741__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5741__auto__)){
var child = temp__5741__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49013 = ps;
var G__49014 = (i + (1));
el__$1 = G__49013;
i = G__49014;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48435 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48435,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48435,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48435,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48439_49019 = cljs.core.seq(props);
var chunk__48440_49020 = null;
var count__48441_49021 = (0);
var i__48442_49022 = (0);
while(true){
if((i__48442_49022 < count__48441_49021)){
var vec__48470_49024 = chunk__48440_49020.cljs$core$IIndexed$_nth$arity$2(null,i__48442_49022);
var k_49025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470_49024,(0),null);
var v_49026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470_49024,(1),null);
el.setAttributeNS((function (){var temp__5743__auto__ = cljs.core.namespace(k_49025);
if(cljs.core.truth_(temp__5743__auto__)){
var ns = temp__5743__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49025),v_49026);


var G__49028 = seq__48439_49019;
var G__49029 = chunk__48440_49020;
var G__49030 = count__48441_49021;
var G__49031 = (i__48442_49022 + (1));
seq__48439_49019 = G__49028;
chunk__48440_49020 = G__49029;
count__48441_49021 = G__49030;
i__48442_49022 = G__49031;
continue;
} else {
var temp__5743__auto___49032 = cljs.core.seq(seq__48439_49019);
if(temp__5743__auto___49032){
var seq__48439_49033__$1 = temp__5743__auto___49032;
if(cljs.core.chunked_seq_QMARK_(seq__48439_49033__$1)){
var c__4556__auto___49034 = cljs.core.chunk_first(seq__48439_49033__$1);
var G__49035 = cljs.core.chunk_rest(seq__48439_49033__$1);
var G__49036 = c__4556__auto___49034;
var G__49037 = cljs.core.count(c__4556__auto___49034);
var G__49038 = (0);
seq__48439_49019 = G__49035;
chunk__48440_49020 = G__49036;
count__48441_49021 = G__49037;
i__48442_49022 = G__49038;
continue;
} else {
var vec__48485_49039 = cljs.core.first(seq__48439_49033__$1);
var k_49040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48485_49039,(0),null);
var v_49041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48485_49039,(1),null);
el.setAttributeNS((function (){var temp__5743__auto____$1 = cljs.core.namespace(k_49040);
if(cljs.core.truth_(temp__5743__auto____$1)){
var ns = temp__5743__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49040),v_49041);


var G__49047 = cljs.core.next(seq__48439_49033__$1);
var G__49048 = null;
var G__49049 = (0);
var G__49050 = (0);
seq__48439_49019 = G__49047;
chunk__48440_49020 = G__49048;
count__48441_49021 = G__49049;
i__48442_49022 = G__49050;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48505 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48505,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48505,(1),null);
var seq__48508_49052 = cljs.core.seq(node_children);
var chunk__48510_49053 = null;
var count__48511_49054 = (0);
var i__48512_49055 = (0);
while(true){
if((i__48512_49055 < count__48511_49054)){
var child_struct_49056 = chunk__48510_49053.cljs$core$IIndexed$_nth$arity$2(null,i__48512_49055);
if((!((child_struct_49056 == null)))){
if(typeof child_struct_49056 === 'string'){
var text_49057 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49057),child_struct_49056].join(''));
} else {
var children_49058 = shadow.dom.svg_node(child_struct_49056);
if(cljs.core.seq_QMARK_(children_49058)){
var seq__48575_49059 = cljs.core.seq(children_49058);
var chunk__48577_49060 = null;
var count__48578_49061 = (0);
var i__48579_49062 = (0);
while(true){
if((i__48579_49062 < count__48578_49061)){
var child_49064 = chunk__48577_49060.cljs$core$IIndexed$_nth$arity$2(null,i__48579_49062);
if(cljs.core.truth_(child_49064)){
node.appendChild(child_49064);


var G__49065 = seq__48575_49059;
var G__49066 = chunk__48577_49060;
var G__49067 = count__48578_49061;
var G__49068 = (i__48579_49062 + (1));
seq__48575_49059 = G__49065;
chunk__48577_49060 = G__49066;
count__48578_49061 = G__49067;
i__48579_49062 = G__49068;
continue;
} else {
var G__49069 = seq__48575_49059;
var G__49070 = chunk__48577_49060;
var G__49071 = count__48578_49061;
var G__49072 = (i__48579_49062 + (1));
seq__48575_49059 = G__49069;
chunk__48577_49060 = G__49070;
count__48578_49061 = G__49071;
i__48579_49062 = G__49072;
continue;
}
} else {
var temp__5743__auto___49075 = cljs.core.seq(seq__48575_49059);
if(temp__5743__auto___49075){
var seq__48575_49076__$1 = temp__5743__auto___49075;
if(cljs.core.chunked_seq_QMARK_(seq__48575_49076__$1)){
var c__4556__auto___49077 = cljs.core.chunk_first(seq__48575_49076__$1);
var G__49078 = cljs.core.chunk_rest(seq__48575_49076__$1);
var G__49079 = c__4556__auto___49077;
var G__49080 = cljs.core.count(c__4556__auto___49077);
var G__49081 = (0);
seq__48575_49059 = G__49078;
chunk__48577_49060 = G__49079;
count__48578_49061 = G__49080;
i__48579_49062 = G__49081;
continue;
} else {
var child_49082 = cljs.core.first(seq__48575_49076__$1);
if(cljs.core.truth_(child_49082)){
node.appendChild(child_49082);


var G__49084 = cljs.core.next(seq__48575_49076__$1);
var G__49085 = null;
var G__49086 = (0);
var G__49087 = (0);
seq__48575_49059 = G__49084;
chunk__48577_49060 = G__49085;
count__48578_49061 = G__49086;
i__48579_49062 = G__49087;
continue;
} else {
var G__49088 = cljs.core.next(seq__48575_49076__$1);
var G__49089 = null;
var G__49090 = (0);
var G__49091 = (0);
seq__48575_49059 = G__49088;
chunk__48577_49060 = G__49089;
count__48578_49061 = G__49090;
i__48579_49062 = G__49091;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49058);
}
}


var G__49093 = seq__48508_49052;
var G__49094 = chunk__48510_49053;
var G__49095 = count__48511_49054;
var G__49096 = (i__48512_49055 + (1));
seq__48508_49052 = G__49093;
chunk__48510_49053 = G__49094;
count__48511_49054 = G__49095;
i__48512_49055 = G__49096;
continue;
} else {
var G__49098 = seq__48508_49052;
var G__49099 = chunk__48510_49053;
var G__49100 = count__48511_49054;
var G__49101 = (i__48512_49055 + (1));
seq__48508_49052 = G__49098;
chunk__48510_49053 = G__49099;
count__48511_49054 = G__49100;
i__48512_49055 = G__49101;
continue;
}
} else {
var temp__5743__auto___49102 = cljs.core.seq(seq__48508_49052);
if(temp__5743__auto___49102){
var seq__48508_49104__$1 = temp__5743__auto___49102;
if(cljs.core.chunked_seq_QMARK_(seq__48508_49104__$1)){
var c__4556__auto___49106 = cljs.core.chunk_first(seq__48508_49104__$1);
var G__49107 = cljs.core.chunk_rest(seq__48508_49104__$1);
var G__49108 = c__4556__auto___49106;
var G__49109 = cljs.core.count(c__4556__auto___49106);
var G__49110 = (0);
seq__48508_49052 = G__49107;
chunk__48510_49053 = G__49108;
count__48511_49054 = G__49109;
i__48512_49055 = G__49110;
continue;
} else {
var child_struct_49111 = cljs.core.first(seq__48508_49104__$1);
if((!((child_struct_49111 == null)))){
if(typeof child_struct_49111 === 'string'){
var text_49112 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49112),child_struct_49111].join(''));
} else {
var children_49115 = shadow.dom.svg_node(child_struct_49111);
if(cljs.core.seq_QMARK_(children_49115)){
var seq__48588_49116 = cljs.core.seq(children_49115);
var chunk__48590_49117 = null;
var count__48591_49118 = (0);
var i__48592_49119 = (0);
while(true){
if((i__48592_49119 < count__48591_49118)){
var child_49121 = chunk__48590_49117.cljs$core$IIndexed$_nth$arity$2(null,i__48592_49119);
if(cljs.core.truth_(child_49121)){
node.appendChild(child_49121);


var G__49122 = seq__48588_49116;
var G__49123 = chunk__48590_49117;
var G__49124 = count__48591_49118;
var G__49125 = (i__48592_49119 + (1));
seq__48588_49116 = G__49122;
chunk__48590_49117 = G__49123;
count__48591_49118 = G__49124;
i__48592_49119 = G__49125;
continue;
} else {
var G__49126 = seq__48588_49116;
var G__49127 = chunk__48590_49117;
var G__49128 = count__48591_49118;
var G__49129 = (i__48592_49119 + (1));
seq__48588_49116 = G__49126;
chunk__48590_49117 = G__49127;
count__48591_49118 = G__49128;
i__48592_49119 = G__49129;
continue;
}
} else {
var temp__5743__auto___49132__$1 = cljs.core.seq(seq__48588_49116);
if(temp__5743__auto___49132__$1){
var seq__48588_49133__$1 = temp__5743__auto___49132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48588_49133__$1)){
var c__4556__auto___49134 = cljs.core.chunk_first(seq__48588_49133__$1);
var G__49135 = cljs.core.chunk_rest(seq__48588_49133__$1);
var G__49136 = c__4556__auto___49134;
var G__49137 = cljs.core.count(c__4556__auto___49134);
var G__49138 = (0);
seq__48588_49116 = G__49135;
chunk__48590_49117 = G__49136;
count__48591_49118 = G__49137;
i__48592_49119 = G__49138;
continue;
} else {
var child_49140 = cljs.core.first(seq__48588_49133__$1);
if(cljs.core.truth_(child_49140)){
node.appendChild(child_49140);


var G__49141 = cljs.core.next(seq__48588_49133__$1);
var G__49142 = null;
var G__49143 = (0);
var G__49144 = (0);
seq__48588_49116 = G__49141;
chunk__48590_49117 = G__49142;
count__48591_49118 = G__49143;
i__48592_49119 = G__49144;
continue;
} else {
var G__49145 = cljs.core.next(seq__48588_49133__$1);
var G__49146 = null;
var G__49147 = (0);
var G__49148 = (0);
seq__48588_49116 = G__49145;
chunk__48590_49117 = G__49146;
count__48591_49118 = G__49147;
i__48592_49119 = G__49148;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49115);
}
}


var G__49149 = cljs.core.next(seq__48508_49104__$1);
var G__49150 = null;
var G__49151 = (0);
var G__49152 = (0);
seq__48508_49052 = G__49149;
chunk__48510_49053 = G__49150;
count__48511_49054 = G__49151;
i__48512_49055 = G__49152;
continue;
} else {
var G__49153 = cljs.core.next(seq__48508_49104__$1);
var G__49154 = null;
var G__49155 = (0);
var G__49156 = (0);
seq__48508_49052 = G__49153;
chunk__48510_49053 = G__49154;
count__48511_49054 = G__49155;
i__48512_49055 = G__49156;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49160 = arguments.length;
var i__4737__auto___49161 = (0);
while(true){
if((i__4737__auto___49161 < len__4736__auto___49160)){
args__4742__auto__.push((arguments[i__4737__auto___49161]));

var G__49163 = (i__4737__auto___49161 + (1));
i__4737__auto___49161 = G__49163;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48601){
var G__48602 = cljs.core.first(seq48601);
var seq48601__$1 = cljs.core.next(seq48601);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48602,seq48601__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48606 = arguments.length;
switch (G__48606) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__45546__auto___49176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_48611){
var state_val_48612 = (state_48611[(1)]);
if((state_val_48612 === (1))){
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48611__$1,(2),once_or_cleanup);
} else {
if((state_val_48612 === (2))){
var inst_48608 = (state_48611[(2)]);
var inst_48609 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48611__$1 = (function (){var statearr_48613 = state_48611;
(statearr_48613[(7)] = inst_48608);

return statearr_48613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48611__$1,inst_48609);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45338__auto__ = null;
var shadow$dom$state_machine__45338__auto____0 = (function (){
var statearr_48614 = [null,null,null,null,null,null,null,null];
(statearr_48614[(0)] = shadow$dom$state_machine__45338__auto__);

(statearr_48614[(1)] = (1));

return statearr_48614;
});
var shadow$dom$state_machine__45338__auto____1 = (function (state_48611){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_48611);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e48615){var ex__45341__auto__ = e48615;
var statearr_48616_49182 = state_48611;
(statearr_48616_49182[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_48611[(4)]))){
var statearr_48617_49184 = state_48611;
(statearr_48617_49184[(1)] = cljs.core.first((state_48611[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49185 = state_48611;
state_48611 = G__49185;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
shadow$dom$state_machine__45338__auto__ = function(state_48611){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45338__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45338__auto____1.call(this,state_48611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45338__auto____0;
shadow$dom$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45338__auto____1;
return shadow$dom$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_48619 = f__45548__auto__();
(statearr_48619[(6)] = c__45546__auto___49176);

return statearr_48619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
