goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45659 = arguments.length;
switch (G__45659) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45674 = (function (f,blockable,meta45675){
this.f = f;
this.blockable = blockable;
this.meta45675 = meta45675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45676,meta45675__$1){
var self__ = this;
var _45676__$1 = this;
return (new cljs.core.async.t_cljs$core$async45674(self__.f,self__.blockable,meta45675__$1));
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45676){
var self__ = this;
var _45676__$1 = this;
return self__.meta45675;
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45675","meta45675",1925173302,null)], null);
}));

(cljs.core.async.t_cljs$core$async45674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45674");

(cljs.core.async.t_cljs$core$async45674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45674.
 */
cljs.core.async.__GT_t_cljs$core$async45674 = (function cljs$core$async$__GT_t_cljs$core$async45674(f__$1,blockable__$1,meta45675){
return (new cljs.core.async.t_cljs$core$async45674(f__$1,blockable__$1,meta45675));
});

}

return (new cljs.core.async.t_cljs$core$async45674(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45680 = arguments.length;
switch (G__45680) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45689 = arguments.length;
switch (G__45689) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45694 = arguments.length;
switch (G__45694) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47869 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47869) : fn1.call(null,val_47869));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47869) : fn1.call(null,val_47869));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45696 = arguments.length;
switch (G__45696) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5741__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5741__auto__)){
var ret = temp__5741__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5741__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5741__auto__)){
var retb = temp__5741__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___47871 = n;
var x_47872 = (0);
while(true){
if((x_47872 < n__4613__auto___47871)){
(a[x_47872] = x_47872);

var G__47873 = (x_47872 + (1));
x_47872 = G__47873;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45714 = (function (flag,meta45715){
this.flag = flag;
this.meta45715 = meta45715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45716,meta45715__$1){
var self__ = this;
var _45716__$1 = this;
return (new cljs.core.async.t_cljs$core$async45714(self__.flag,meta45715__$1));
}));

(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45716){
var self__ = this;
var _45716__$1 = this;
return self__.meta45715;
}));

(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45715","meta45715",-1197192226,null)], null);
}));

(cljs.core.async.t_cljs$core$async45714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45714");

(cljs.core.async.t_cljs$core$async45714.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45714.
 */
cljs.core.async.__GT_t_cljs$core$async45714 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45714(flag__$1,meta45715){
return (new cljs.core.async.t_cljs$core$async45714(flag__$1,meta45715));
});

}

return (new cljs.core.async.t_cljs$core$async45714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45717 = (function (flag,cb,meta45718){
this.flag = flag;
this.cb = cb;
this.meta45718 = meta45718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45719,meta45718__$1){
var self__ = this;
var _45719__$1 = this;
return (new cljs.core.async.t_cljs$core$async45717(self__.flag,self__.cb,meta45718__$1));
}));

(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45719){
var self__ = this;
var _45719__$1 = this;
return self__.meta45718;
}));

(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45718","meta45718",598381891,null)], null);
}));

(cljs.core.async.t_cljs$core$async45717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45717");

(cljs.core.async.t_cljs$core$async45717.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45717.
 */
cljs.core.async.__GT_t_cljs$core$async45717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45717(flag__$1,cb__$1,meta45718){
return (new cljs.core.async.t_cljs$core$async45717(flag__$1,cb__$1,meta45718));
});

}

return (new cljs.core.async.t_cljs$core$async45717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45728_SHARP_){
var G__45730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45728_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45730) : fret.call(null,G__45730));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45729_SHARP_){
var G__45731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45729_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45731) : fret.call(null,G__45731));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47879 = (i + (1));
i = G__47879;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5743__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5743__auto__)){
var got = temp__5743__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47880 = arguments.length;
var i__4737__auto___47881 = (0);
while(true){
if((i__4737__auto___47881 < len__4736__auto___47880)){
args__4742__auto__.push((arguments[i__4737__auto___47881]));

var G__47883 = (i__4737__auto___47881 + (1));
i__4737__auto___47881 = G__47883;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45734){
var map__45735 = p__45734;
var map__45735__$1 = (((((!((map__45735 == null))))?(((((map__45735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45735):map__45735);
var opts = map__45735__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45732){
var G__45733 = cljs.core.first(seq45732);
var seq45732__$1 = cljs.core.next(seq45732);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45733,seq45732__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45741 = arguments.length;
switch (G__45741) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45546__auto___47887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_45773){
var state_val_45774 = (state_45773[(1)]);
if((state_val_45774 === (7))){
var inst_45769 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
var statearr_45784_47889 = state_45773__$1;
(statearr_45784_47889[(2)] = inst_45769);

(statearr_45784_47889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (1))){
var state_45773__$1 = state_45773;
var statearr_45785_47890 = state_45773__$1;
(statearr_45785_47890[(2)] = null);

(statearr_45785_47890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (4))){
var inst_45750 = (state_45773[(7)]);
var inst_45750__$1 = (state_45773[(2)]);
var inst_45753 = (inst_45750__$1 == null);
var state_45773__$1 = (function (){var statearr_45787 = state_45773;
(statearr_45787[(7)] = inst_45750__$1);

return statearr_45787;
})();
if(cljs.core.truth_(inst_45753)){
var statearr_45788_47891 = state_45773__$1;
(statearr_45788_47891[(1)] = (5));

} else {
var statearr_45789_47892 = state_45773__$1;
(statearr_45789_47892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (13))){
var state_45773__$1 = state_45773;
var statearr_45790_47893 = state_45773__$1;
(statearr_45790_47893[(2)] = null);

(statearr_45790_47893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (6))){
var inst_45750 = (state_45773[(7)]);
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45773__$1,(11),to,inst_45750);
} else {
if((state_val_45774 === (3))){
var inst_45771 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45773__$1,inst_45771);
} else {
if((state_val_45774 === (12))){
var state_45773__$1 = state_45773;
var statearr_45795_47896 = state_45773__$1;
(statearr_45795_47896[(2)] = null);

(statearr_45795_47896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (2))){
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45773__$1,(4),from);
} else {
if((state_val_45774 === (11))){
var inst_45762 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
if(cljs.core.truth_(inst_45762)){
var statearr_45796_47897 = state_45773__$1;
(statearr_45796_47897[(1)] = (12));

} else {
var statearr_45797_47898 = state_45773__$1;
(statearr_45797_47898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (9))){
var state_45773__$1 = state_45773;
var statearr_45800_47899 = state_45773__$1;
(statearr_45800_47899[(2)] = null);

(statearr_45800_47899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (5))){
var state_45773__$1 = state_45773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45801_47900 = state_45773__$1;
(statearr_45801_47900[(1)] = (8));

} else {
var statearr_45802_47901 = state_45773__$1;
(statearr_45802_47901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (14))){
var inst_45767 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
var statearr_45803_47903 = state_45773__$1;
(statearr_45803_47903[(2)] = inst_45767);

(statearr_45803_47903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (10))){
var inst_45759 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
var statearr_45805_47905 = state_45773__$1;
(statearr_45805_47905[(2)] = inst_45759);

(statearr_45805_47905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (8))){
var inst_45756 = cljs.core.async.close_BANG_(to);
var state_45773__$1 = state_45773;
var statearr_45806_47906 = state_45773__$1;
(statearr_45806_47906[(2)] = inst_45756);

(statearr_45806_47906[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_45808 = [null,null,null,null,null,null,null,null];
(statearr_45808[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_45808[(1)] = (1));

return statearr_45808;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_45773){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45773);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e45809){var ex__45341__auto__ = e45809;
var statearr_45810_47907 = state_45773;
(statearr_45810_47907[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45773[(4)]))){
var statearr_45811_47908 = state_45773;
(statearr_45811_47908[(1)] = cljs.core.first((state_45773[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47909 = state_45773;
state_45773 = G__47909;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_45773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_45773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_45812 = f__45548__auto__();
(statearr_45812[(6)] = c__45546__auto___47887);

return statearr_45812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45813){
var vec__45814 = p__45813;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45814,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45814,(1),null);
var job = vec__45814;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45546__auto___47912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_45821){
var state_val_45822 = (state_45821[(1)]);
if((state_val_45822 === (1))){
var state_45821__$1 = state_45821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45821__$1,(2),res,v);
} else {
if((state_val_45822 === (2))){
var inst_45818 = (state_45821[(2)]);
var inst_45819 = cljs.core.async.close_BANG_(res);
var state_45821__$1 = (function (){var statearr_45823 = state_45821;
(statearr_45823[(7)] = inst_45818);

return statearr_45823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45821__$1,inst_45819);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_45824 = [null,null,null,null,null,null,null,null];
(statearr_45824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__);

(statearr_45824[(1)] = (1));

return statearr_45824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1 = (function (state_45821){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45821);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e45825){var ex__45341__auto__ = e45825;
var statearr_45826_47920 = state_45821;
(statearr_45826_47920[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45821[(4)]))){
var statearr_45827_47921 = state_45821;
(statearr_45827_47921[(1)] = cljs.core.first((state_45821[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47922 = state_45821;
state_45821 = G__47922;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = function(state_45821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1.call(this,state_45821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_45828 = f__45548__auto__();
(statearr_45828[(6)] = c__45546__auto___47912);

return statearr_45828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45829){
var vec__45830 = p__45829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(1),null);
var job = vec__45830;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___47934 = n;
var __47938 = (0);
while(true){
if((__47938 < n__4613__auto___47934)){
var G__45833_47939 = type;
var G__45833_47940__$1 = (((G__45833_47939 instanceof cljs.core.Keyword))?G__45833_47939.fqn:null);
switch (G__45833_47940__$1) {
case "compute":
var c__45546__auto___47943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47938,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = ((function (__47938,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function (state_45846){
var state_val_45847 = (state_45846[(1)]);
if((state_val_45847 === (1))){
var state_45846__$1 = state_45846;
var statearr_45848_47947 = state_45846__$1;
(statearr_45848_47947[(2)] = null);

(statearr_45848_47947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (2))){
var state_45846__$1 = state_45846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45846__$1,(4),jobs);
} else {
if((state_val_45847 === (3))){
var inst_45844 = (state_45846[(2)]);
var state_45846__$1 = state_45846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45846__$1,inst_45844);
} else {
if((state_val_45847 === (4))){
var inst_45836 = (state_45846[(2)]);
var inst_45837 = process(inst_45836);
var state_45846__$1 = state_45846;
if(cljs.core.truth_(inst_45837)){
var statearr_45849_47950 = state_45846__$1;
(statearr_45849_47950[(1)] = (5));

} else {
var statearr_45850_47951 = state_45846__$1;
(statearr_45850_47951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (5))){
var state_45846__$1 = state_45846;
var statearr_45851_47952 = state_45846__$1;
(statearr_45851_47952[(2)] = null);

(statearr_45851_47952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (6))){
var state_45846__$1 = state_45846;
var statearr_45852_47953 = state_45846__$1;
(statearr_45852_47953[(2)] = null);

(statearr_45852_47953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45847 === (7))){
var inst_45842 = (state_45846[(2)]);
var state_45846__$1 = state_45846;
var statearr_45855_47954 = state_45846__$1;
(statearr_45855_47954[(2)] = inst_45842);

(statearr_45855_47954[(1)] = (3));


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
});})(__47938,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
;
return ((function (__47938,switch__45337__auto__,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_45857 = [null,null,null,null,null,null,null];
(statearr_45857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__);

(statearr_45857[(1)] = (1));

return statearr_45857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1 = (function (state_45846){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45846);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e45858){var ex__45341__auto__ = e45858;
var statearr_45859_47957 = state_45846;
(statearr_45859_47957[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45846[(4)]))){
var statearr_45861_47958 = state_45846;
(statearr_45861_47958[(1)] = cljs.core.first((state_45846[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47959 = state_45846;
state_45846 = G__47959;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = function(state_45846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1.call(this,state_45846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__;
})()
;})(__47938,switch__45337__auto__,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
})();
var state__45549__auto__ = (function (){var statearr_45866 = f__45548__auto__();
(statearr_45866[(6)] = c__45546__auto___47943);

return statearr_45866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
});})(__47938,c__45546__auto___47943,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
);


break;
case "async":
var c__45546__auto___47960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47938,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = ((function (__47938,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function (state_45882){
var state_val_45883 = (state_45882[(1)]);
if((state_val_45883 === (1))){
var state_45882__$1 = state_45882;
var statearr_45886_47961 = state_45882__$1;
(statearr_45886_47961[(2)] = null);

(statearr_45886_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45883 === (2))){
var state_45882__$1 = state_45882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45882__$1,(4),jobs);
} else {
if((state_val_45883 === (3))){
var inst_45879 = (state_45882[(2)]);
var state_45882__$1 = state_45882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45882__$1,inst_45879);
} else {
if((state_val_45883 === (4))){
var inst_45870 = (state_45882[(2)]);
var inst_45871 = async(inst_45870);
var state_45882__$1 = state_45882;
if(cljs.core.truth_(inst_45871)){
var statearr_45887_47969 = state_45882__$1;
(statearr_45887_47969[(1)] = (5));

} else {
var statearr_45888_47970 = state_45882__$1;
(statearr_45888_47970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45883 === (5))){
var state_45882__$1 = state_45882;
var statearr_45889_47971 = state_45882__$1;
(statearr_45889_47971[(2)] = null);

(statearr_45889_47971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45883 === (6))){
var state_45882__$1 = state_45882;
var statearr_45890_47975 = state_45882__$1;
(statearr_45890_47975[(2)] = null);

(statearr_45890_47975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45883 === (7))){
var inst_45877 = (state_45882[(2)]);
var state_45882__$1 = state_45882;
var statearr_45891_47982 = state_45882__$1;
(statearr_45891_47982[(2)] = inst_45877);

(statearr_45891_47982[(1)] = (3));


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
});})(__47938,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
;
return ((function (__47938,switch__45337__auto__,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_45892 = [null,null,null,null,null,null,null];
(statearr_45892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__);

(statearr_45892[(1)] = (1));

return statearr_45892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1 = (function (state_45882){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45882);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e45893){var ex__45341__auto__ = e45893;
var statearr_45894_47986 = state_45882;
(statearr_45894_47986[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45882[(4)]))){
var statearr_45895_47987 = state_45882;
(statearr_45895_47987[(1)] = cljs.core.first((state_45882[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47992 = state_45882;
state_45882 = G__47992;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = function(state_45882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1.call(this,state_45882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__;
})()
;})(__47938,switch__45337__auto__,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
})();
var state__45549__auto__ = (function (){var statearr_45896 = f__45548__auto__();
(statearr_45896[(6)] = c__45546__auto___47960);

return statearr_45896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
});})(__47938,c__45546__auto___47960,G__45833_47939,G__45833_47940__$1,n__4613__auto___47934,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45833_47940__$1)].join('')));

}

var G__47996 = (__47938 + (1));
__47938 = G__47996;
continue;
} else {
}
break;
}

var c__45546__auto___47997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_45918){
var state_val_45919 = (state_45918[(1)]);
if((state_val_45919 === (7))){
var inst_45914 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
var statearr_45920_48001 = state_45918__$1;
(statearr_45920_48001[(2)] = inst_45914);

(statearr_45920_48001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (1))){
var state_45918__$1 = state_45918;
var statearr_45921_48005 = state_45918__$1;
(statearr_45921_48005[(2)] = null);

(statearr_45921_48005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (4))){
var inst_45899 = (state_45918[(7)]);
var inst_45899__$1 = (state_45918[(2)]);
var inst_45900 = (inst_45899__$1 == null);
var state_45918__$1 = (function (){var statearr_45922 = state_45918;
(statearr_45922[(7)] = inst_45899__$1);

return statearr_45922;
})();
if(cljs.core.truth_(inst_45900)){
var statearr_45923_48009 = state_45918__$1;
(statearr_45923_48009[(1)] = (5));

} else {
var statearr_45924_48010 = state_45918__$1;
(statearr_45924_48010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (6))){
var inst_45899 = (state_45918[(7)]);
var inst_45904 = (state_45918[(8)]);
var inst_45904__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45906 = [inst_45899,inst_45904__$1];
var inst_45907 = (new cljs.core.PersistentVector(null,2,(5),inst_45905,inst_45906,null));
var state_45918__$1 = (function (){var statearr_45925 = state_45918;
(statearr_45925[(8)] = inst_45904__$1);

return statearr_45925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45918__$1,(8),jobs,inst_45907);
} else {
if((state_val_45919 === (3))){
var inst_45916 = (state_45918[(2)]);
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45918__$1,inst_45916);
} else {
if((state_val_45919 === (2))){
var state_45918__$1 = state_45918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45918__$1,(4),from);
} else {
if((state_val_45919 === (9))){
var inst_45911 = (state_45918[(2)]);
var state_45918__$1 = (function (){var statearr_45927 = state_45918;
(statearr_45927[(9)] = inst_45911);

return statearr_45927;
})();
var statearr_45928_48015 = state_45918__$1;
(statearr_45928_48015[(2)] = null);

(statearr_45928_48015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (5))){
var inst_45902 = cljs.core.async.close_BANG_(jobs);
var state_45918__$1 = state_45918;
var statearr_45929_48016 = state_45918__$1;
(statearr_45929_48016[(2)] = inst_45902);

(statearr_45929_48016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45919 === (8))){
var inst_45904 = (state_45918[(8)]);
var inst_45909 = (state_45918[(2)]);
var state_45918__$1 = (function (){var statearr_45930 = state_45918;
(statearr_45930[(10)] = inst_45909);

return statearr_45930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45918__$1,(9),results,inst_45904);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_45931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__);

(statearr_45931[(1)] = (1));

return statearr_45931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1 = (function (state_45918){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45918);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e45932){var ex__45341__auto__ = e45932;
var statearr_45933_48021 = state_45918;
(statearr_45933_48021[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45918[(4)]))){
var statearr_45934_48022 = state_45918;
(statearr_45934_48022[(1)] = cljs.core.first((state_45918[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48023 = state_45918;
state_45918 = G__48023;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = function(state_45918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1.call(this,state_45918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_45935 = f__45548__auto__();
(statearr_45935[(6)] = c__45546__auto___47997);

return statearr_45935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


var c__45546__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_45976){
var state_val_45977 = (state_45976[(1)]);
if((state_val_45977 === (7))){
var inst_45971 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
var statearr_45978_48033 = state_45976__$1;
(statearr_45978_48033[(2)] = inst_45971);

(statearr_45978_48033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (20))){
var state_45976__$1 = state_45976;
var statearr_45979_48035 = state_45976__$1;
(statearr_45979_48035[(2)] = null);

(statearr_45979_48035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (1))){
var state_45976__$1 = state_45976;
var statearr_45980_48039 = state_45976__$1;
(statearr_45980_48039[(2)] = null);

(statearr_45980_48039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (4))){
var inst_45938 = (state_45976[(7)]);
var inst_45938__$1 = (state_45976[(2)]);
var inst_45939 = (inst_45938__$1 == null);
var state_45976__$1 = (function (){var statearr_45981 = state_45976;
(statearr_45981[(7)] = inst_45938__$1);

return statearr_45981;
})();
if(cljs.core.truth_(inst_45939)){
var statearr_45982_48043 = state_45976__$1;
(statearr_45982_48043[(1)] = (5));

} else {
var statearr_45983_48044 = state_45976__$1;
(statearr_45983_48044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (15))){
var inst_45953 = (state_45976[(8)]);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45976__$1,(18),to,inst_45953);
} else {
if((state_val_45977 === (21))){
var inst_45966 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
var statearr_45984_48048 = state_45976__$1;
(statearr_45984_48048[(2)] = inst_45966);

(statearr_45984_48048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (13))){
var inst_45968 = (state_45976[(2)]);
var state_45976__$1 = (function (){var statearr_45985 = state_45976;
(statearr_45985[(9)] = inst_45968);

return statearr_45985;
})();
var statearr_45986_48049 = state_45976__$1;
(statearr_45986_48049[(2)] = null);

(statearr_45986_48049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (6))){
var inst_45938 = (state_45976[(7)]);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45976__$1,(11),inst_45938);
} else {
if((state_val_45977 === (17))){
var inst_45961 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
if(cljs.core.truth_(inst_45961)){
var statearr_45987_48053 = state_45976__$1;
(statearr_45987_48053[(1)] = (19));

} else {
var statearr_45988_48054 = state_45976__$1;
(statearr_45988_48054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (3))){
var inst_45973 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45976__$1,inst_45973);
} else {
if((state_val_45977 === (12))){
var inst_45949 = (state_45976[(10)]);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45976__$1,(14),inst_45949);
} else {
if((state_val_45977 === (2))){
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45976__$1,(4),results);
} else {
if((state_val_45977 === (19))){
var state_45976__$1 = state_45976;
var statearr_45989_48059 = state_45976__$1;
(statearr_45989_48059[(2)] = null);

(statearr_45989_48059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (11))){
var inst_45949 = (state_45976[(2)]);
var state_45976__$1 = (function (){var statearr_45990 = state_45976;
(statearr_45990[(10)] = inst_45949);

return statearr_45990;
})();
var statearr_45991_48063 = state_45976__$1;
(statearr_45991_48063[(2)] = null);

(statearr_45991_48063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (9))){
var state_45976__$1 = state_45976;
var statearr_45992_48065 = state_45976__$1;
(statearr_45992_48065[(2)] = null);

(statearr_45992_48065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (5))){
var state_45976__$1 = state_45976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45993_48066 = state_45976__$1;
(statearr_45993_48066[(1)] = (8));

} else {
var statearr_45994_48068 = state_45976__$1;
(statearr_45994_48068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (14))){
var inst_45953 = (state_45976[(8)]);
var inst_45953__$1 = (state_45976[(2)]);
var inst_45954 = (inst_45953__$1 == null);
var inst_45955 = cljs.core.not(inst_45954);
var state_45976__$1 = (function (){var statearr_45995 = state_45976;
(statearr_45995[(8)] = inst_45953__$1);

return statearr_45995;
})();
if(inst_45955){
var statearr_45996_48072 = state_45976__$1;
(statearr_45996_48072[(1)] = (15));

} else {
var statearr_45997_48073 = state_45976__$1;
(statearr_45997_48073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (16))){
var state_45976__$1 = state_45976;
var statearr_45998_48074 = state_45976__$1;
(statearr_45998_48074[(2)] = false);

(statearr_45998_48074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (10))){
var inst_45946 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
var statearr_45999_48075 = state_45976__$1;
(statearr_45999_48075[(2)] = inst_45946);

(statearr_45999_48075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (18))){
var inst_45958 = (state_45976[(2)]);
var state_45976__$1 = state_45976;
var statearr_46000_48076 = state_45976__$1;
(statearr_46000_48076[(2)] = inst_45958);

(statearr_46000_48076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (8))){
var inst_45943 = cljs.core.async.close_BANG_(to);
var state_45976__$1 = state_45976;
var statearr_46001_48082 = state_45976__$1;
(statearr_46001_48082[(2)] = inst_45943);

(statearr_46001_48082[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_46002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__);

(statearr_46002[(1)] = (1));

return statearr_46002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1 = (function (state_45976){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_45976);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46003){var ex__45341__auto__ = e46003;
var statearr_46004_48088 = state_45976;
(statearr_46004_48088[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_45976[(4)]))){
var statearr_46005_48089 = state_45976;
(statearr_46005_48089[(1)] = cljs.core.first((state_45976[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48092 = state_45976;
state_45976 = G__48092;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__ = function(state_45976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1.call(this,state_45976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46007 = f__45548__auto__();
(statearr_46007[(6)] = c__45546__auto__);

return statearr_46007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

return c__45546__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46009 = arguments.length;
switch (G__46009) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46011 = arguments.length;
switch (G__46011) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46013 = arguments.length;
switch (G__46013) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45546__auto___48127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46052){
var state_val_46053 = (state_46052[(1)]);
if((state_val_46053 === (7))){
var inst_46048 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46054_48132 = state_46052__$1;
(statearr_46054_48132[(2)] = inst_46048);

(statearr_46054_48132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (1))){
var state_46052__$1 = state_46052;
var statearr_46055_48133 = state_46052__$1;
(statearr_46055_48133[(2)] = null);

(statearr_46055_48133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (4))){
var inst_46029 = (state_46052[(7)]);
var inst_46029__$1 = (state_46052[(2)]);
var inst_46030 = (inst_46029__$1 == null);
var state_46052__$1 = (function (){var statearr_46056 = state_46052;
(statearr_46056[(7)] = inst_46029__$1);

return statearr_46056;
})();
if(cljs.core.truth_(inst_46030)){
var statearr_46057_48139 = state_46052__$1;
(statearr_46057_48139[(1)] = (5));

} else {
var statearr_46058_48140 = state_46052__$1;
(statearr_46058_48140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (13))){
var state_46052__$1 = state_46052;
var statearr_46061_48141 = state_46052__$1;
(statearr_46061_48141[(2)] = null);

(statearr_46061_48141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (6))){
var inst_46029 = (state_46052[(7)]);
var inst_46035 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46029) : p.call(null,inst_46029));
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46035)){
var statearr_46062_48148 = state_46052__$1;
(statearr_46062_48148[(1)] = (9));

} else {
var statearr_46063_48149 = state_46052__$1;
(statearr_46063_48149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (3))){
var inst_46050 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46052__$1,inst_46050);
} else {
if((state_val_46053 === (12))){
var state_46052__$1 = state_46052;
var statearr_46064_48150 = state_46052__$1;
(statearr_46064_48150[(2)] = null);

(statearr_46064_48150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (2))){
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46052__$1,(4),ch);
} else {
if((state_val_46053 === (11))){
var inst_46029 = (state_46052[(7)]);
var inst_46039 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46052__$1,(8),inst_46039,inst_46029);
} else {
if((state_val_46053 === (9))){
var state_46052__$1 = state_46052;
var statearr_46065_48151 = state_46052__$1;
(statearr_46065_48151[(2)] = tc);

(statearr_46065_48151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (5))){
var inst_46032 = cljs.core.async.close_BANG_(tc);
var inst_46033 = cljs.core.async.close_BANG_(fc);
var state_46052__$1 = (function (){var statearr_46066 = state_46052;
(statearr_46066[(8)] = inst_46032);

return statearr_46066;
})();
var statearr_46067_48152 = state_46052__$1;
(statearr_46067_48152[(2)] = inst_46033);

(statearr_46067_48152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (14))){
var inst_46046 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46068_48155 = state_46052__$1;
(statearr_46068_48155[(2)] = inst_46046);

(statearr_46068_48155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (10))){
var state_46052__$1 = state_46052;
var statearr_46069_48157 = state_46052__$1;
(statearr_46069_48157[(2)] = fc);

(statearr_46069_48157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (8))){
var inst_46041 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46041)){
var statearr_46070_48164 = state_46052__$1;
(statearr_46070_48164[(1)] = (12));

} else {
var statearr_46071_48165 = state_46052__$1;
(statearr_46071_48165[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_46072 = [null,null,null,null,null,null,null,null,null];
(statearr_46072[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_46072[(1)] = (1));

return statearr_46072;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_46052){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46052);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46073){var ex__45341__auto__ = e46073;
var statearr_46074_48166 = state_46052;
(statearr_46074_48166[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46052[(4)]))){
var statearr_46075_48171 = state_46052;
(statearr_46075_48171[(1)] = cljs.core.first((state_46052[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48177 = state_46052;
state_46052 = G__48177;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_46052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_46052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46076 = f__45548__auto__();
(statearr_46076[(6)] = c__45546__auto___48127);

return statearr_46076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45546__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46098){
var state_val_46099 = (state_46098[(1)]);
if((state_val_46099 === (7))){
var inst_46094 = (state_46098[(2)]);
var state_46098__$1 = state_46098;
var statearr_46113_48191 = state_46098__$1;
(statearr_46113_48191[(2)] = inst_46094);

(statearr_46113_48191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (1))){
var inst_46077 = init;
var inst_46078 = inst_46077;
var state_46098__$1 = (function (){var statearr_46114 = state_46098;
(statearr_46114[(7)] = inst_46078);

return statearr_46114;
})();
var statearr_46115_48199 = state_46098__$1;
(statearr_46115_48199[(2)] = null);

(statearr_46115_48199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (4))){
var inst_46081 = (state_46098[(8)]);
var inst_46081__$1 = (state_46098[(2)]);
var inst_46082 = (inst_46081__$1 == null);
var state_46098__$1 = (function (){var statearr_46116 = state_46098;
(statearr_46116[(8)] = inst_46081__$1);

return statearr_46116;
})();
if(cljs.core.truth_(inst_46082)){
var statearr_46117_48206 = state_46098__$1;
(statearr_46117_48206[(1)] = (5));

} else {
var statearr_46118_48212 = state_46098__$1;
(statearr_46118_48212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (6))){
var inst_46085 = (state_46098[(9)]);
var inst_46078 = (state_46098[(7)]);
var inst_46081 = (state_46098[(8)]);
var inst_46085__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46078,inst_46081) : f.call(null,inst_46078,inst_46081));
var inst_46086 = cljs.core.reduced_QMARK_(inst_46085__$1);
var state_46098__$1 = (function (){var statearr_46121 = state_46098;
(statearr_46121[(9)] = inst_46085__$1);

return statearr_46121;
})();
if(inst_46086){
var statearr_46122_48220 = state_46098__$1;
(statearr_46122_48220[(1)] = (8));

} else {
var statearr_46123_48221 = state_46098__$1;
(statearr_46123_48221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (3))){
var inst_46096 = (state_46098[(2)]);
var state_46098__$1 = state_46098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46098__$1,inst_46096);
} else {
if((state_val_46099 === (2))){
var state_46098__$1 = state_46098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46098__$1,(4),ch);
} else {
if((state_val_46099 === (9))){
var inst_46085 = (state_46098[(9)]);
var inst_46078 = inst_46085;
var state_46098__$1 = (function (){var statearr_46127 = state_46098;
(statearr_46127[(7)] = inst_46078);

return statearr_46127;
})();
var statearr_46128_48223 = state_46098__$1;
(statearr_46128_48223[(2)] = null);

(statearr_46128_48223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (5))){
var inst_46078 = (state_46098[(7)]);
var state_46098__$1 = state_46098;
var statearr_46129_48229 = state_46098__$1;
(statearr_46129_48229[(2)] = inst_46078);

(statearr_46129_48229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (10))){
var inst_46092 = (state_46098[(2)]);
var state_46098__$1 = state_46098;
var statearr_46137_48230 = state_46098__$1;
(statearr_46137_48230[(2)] = inst_46092);

(statearr_46137_48230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (8))){
var inst_46085 = (state_46098[(9)]);
var inst_46088 = cljs.core.deref(inst_46085);
var state_46098__$1 = state_46098;
var statearr_46140_48231 = state_46098__$1;
(statearr_46140_48231[(2)] = inst_46088);

(statearr_46140_48231[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45338__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45338__auto____0 = (function (){
var statearr_46146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46146[(0)] = cljs$core$async$reduce_$_state_machine__45338__auto__);

(statearr_46146[(1)] = (1));

return statearr_46146;
});
var cljs$core$async$reduce_$_state_machine__45338__auto____1 = (function (state_46098){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46098);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46148){var ex__45341__auto__ = e46148;
var statearr_46149_48232 = state_46098;
(statearr_46149_48232[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46098[(4)]))){
var statearr_46154_48233 = state_46098;
(statearr_46154_48233[(1)] = cljs.core.first((state_46098[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48234 = state_46098;
state_46098 = G__48234;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45338__auto__ = function(state_46098){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45338__auto____1.call(this,state_46098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45338__auto____0;
cljs$core$async$reduce_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45338__auto____1;
return cljs$core$async$reduce_$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46160 = f__45548__auto__();
(statearr_46160[(6)] = c__45546__auto__);

return statearr_46160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

return c__45546__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45546__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46168){
var state_val_46169 = (state_46168[(1)]);
if((state_val_46169 === (1))){
var inst_46163 = cljs.core.async.reduce(f__$1,init,ch);
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46168__$1,(2),inst_46163);
} else {
if((state_val_46169 === (2))){
var inst_46165 = (state_46168[(2)]);
var inst_46166 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46165) : f__$1.call(null,inst_46165));
var state_46168__$1 = state_46168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46168__$1,inst_46166);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45338__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45338__auto____0 = (function (){
var statearr_46179 = [null,null,null,null,null,null,null];
(statearr_46179[(0)] = cljs$core$async$transduce_$_state_machine__45338__auto__);

(statearr_46179[(1)] = (1));

return statearr_46179;
});
var cljs$core$async$transduce_$_state_machine__45338__auto____1 = (function (state_46168){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46168);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46181){var ex__45341__auto__ = e46181;
var statearr_46182_48240 = state_46168;
(statearr_46182_48240[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46168[(4)]))){
var statearr_46183_48241 = state_46168;
(statearr_46183_48241[(1)] = cljs.core.first((state_46168[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48242 = state_46168;
state_46168 = G__48242;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45338__auto__ = function(state_46168){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45338__auto____1.call(this,state_46168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45338__auto____0;
cljs$core$async$transduce_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45338__auto____1;
return cljs$core$async$transduce_$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46184 = f__45548__auto__();
(statearr_46184[(6)] = c__45546__auto__);

return statearr_46184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

return c__45546__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46188 = arguments.length;
switch (G__46188) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45546__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46225){
var state_val_46226 = (state_46225[(1)]);
if((state_val_46226 === (7))){
var inst_46207 = (state_46225[(2)]);
var state_46225__$1 = state_46225;
var statearr_46230_48244 = state_46225__$1;
(statearr_46230_48244[(2)] = inst_46207);

(statearr_46230_48244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (1))){
var inst_46199 = cljs.core.seq(coll);
var inst_46200 = inst_46199;
var state_46225__$1 = (function (){var statearr_46231 = state_46225;
(statearr_46231[(7)] = inst_46200);

return statearr_46231;
})();
var statearr_46232_48247 = state_46225__$1;
(statearr_46232_48247[(2)] = null);

(statearr_46232_48247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (4))){
var inst_46200 = (state_46225[(7)]);
var inst_46205 = cljs.core.first(inst_46200);
var state_46225__$1 = state_46225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46225__$1,(7),ch,inst_46205);
} else {
if((state_val_46226 === (13))){
var inst_46219 = (state_46225[(2)]);
var state_46225__$1 = state_46225;
var statearr_46237_48248 = state_46225__$1;
(statearr_46237_48248[(2)] = inst_46219);

(statearr_46237_48248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (6))){
var inst_46210 = (state_46225[(2)]);
var state_46225__$1 = state_46225;
if(cljs.core.truth_(inst_46210)){
var statearr_46239_48249 = state_46225__$1;
(statearr_46239_48249[(1)] = (8));

} else {
var statearr_46240_48250 = state_46225__$1;
(statearr_46240_48250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (3))){
var inst_46223 = (state_46225[(2)]);
var state_46225__$1 = state_46225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46225__$1,inst_46223);
} else {
if((state_val_46226 === (12))){
var state_46225__$1 = state_46225;
var statearr_46241_48251 = state_46225__$1;
(statearr_46241_48251[(2)] = null);

(statearr_46241_48251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (2))){
var inst_46200 = (state_46225[(7)]);
var state_46225__$1 = state_46225;
if(cljs.core.truth_(inst_46200)){
var statearr_46244_48252 = state_46225__$1;
(statearr_46244_48252[(1)] = (4));

} else {
var statearr_46246_48253 = state_46225__$1;
(statearr_46246_48253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (11))){
var inst_46216 = cljs.core.async.close_BANG_(ch);
var state_46225__$1 = state_46225;
var statearr_46248_48254 = state_46225__$1;
(statearr_46248_48254[(2)] = inst_46216);

(statearr_46248_48254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (9))){
var state_46225__$1 = state_46225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46249_48255 = state_46225__$1;
(statearr_46249_48255[(1)] = (11));

} else {
var statearr_46250_48256 = state_46225__$1;
(statearr_46250_48256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (5))){
var inst_46200 = (state_46225[(7)]);
var state_46225__$1 = state_46225;
var statearr_46251_48257 = state_46225__$1;
(statearr_46251_48257[(2)] = inst_46200);

(statearr_46251_48257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (10))){
var inst_46221 = (state_46225[(2)]);
var state_46225__$1 = state_46225;
var statearr_46252_48258 = state_46225__$1;
(statearr_46252_48258[(2)] = inst_46221);

(statearr_46252_48258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46226 === (8))){
var inst_46200 = (state_46225[(7)]);
var inst_46212 = cljs.core.next(inst_46200);
var inst_46200__$1 = inst_46212;
var state_46225__$1 = (function (){var statearr_46253 = state_46225;
(statearr_46253[(7)] = inst_46200__$1);

return statearr_46253;
})();
var statearr_46254_48260 = state_46225__$1;
(statearr_46254_48260[(2)] = null);

(statearr_46254_48260[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_46255 = [null,null,null,null,null,null,null,null];
(statearr_46255[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_46255[(1)] = (1));

return statearr_46255;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_46225){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46225);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46256){var ex__45341__auto__ = e46256;
var statearr_46257_48261 = state_46225;
(statearr_46257_48261[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46225[(4)]))){
var statearr_46258_48266 = state_46225;
(statearr_46258_48266[(1)] = cljs.core.first((state_46225[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48267 = state_46225;
state_46225 = G__48267;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_46225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_46225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46259 = f__45548__auto__();
(statearr_46259[(6)] = c__45546__auto__);

return statearr_46259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

return c__45546__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46269 = arguments.length;
switch (G__46269) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48273 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48273(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48277 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48277(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48281 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48281(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48285 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48285(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46321 = (function (ch,cs,meta46322){
this.ch = ch;
this.cs = cs;
this.meta46322 = meta46322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46323,meta46322__$1){
var self__ = this;
var _46323__$1 = this;
return (new cljs.core.async.t_cljs$core$async46321(self__.ch,self__.cs,meta46322__$1));
}));

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46323){
var self__ = this;
var _46323__$1 = this;
return self__.meta46322;
}));

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46321.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46322","meta46322",528228813,null)], null);
}));

(cljs.core.async.t_cljs$core$async46321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46321");

(cljs.core.async.t_cljs$core$async46321.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46321.
 */
cljs.core.async.__GT_t_cljs$core$async46321 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46321(ch__$1,cs__$1,meta46322){
return (new cljs.core.async.t_cljs$core$async46321(ch__$1,cs__$1,meta46322));
});

}

return (new cljs.core.async.t_cljs$core$async46321(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45546__auto___48293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46494){
var state_val_46499 = (state_46494[(1)]);
if((state_val_46499 === (7))){
var inst_46484 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46502_48299 = state_46494__$1;
(statearr_46502_48299[(2)] = inst_46484);

(statearr_46502_48299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (20))){
var inst_46377 = (state_46494[(7)]);
var inst_46391 = cljs.core.first(inst_46377);
var inst_46392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46391,(0),null);
var inst_46393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46391,(1),null);
var state_46494__$1 = (function (){var statearr_46503 = state_46494;
(statearr_46503[(8)] = inst_46392);

return statearr_46503;
})();
if(cljs.core.truth_(inst_46393)){
var statearr_46504_48304 = state_46494__$1;
(statearr_46504_48304[(1)] = (22));

} else {
var statearr_46505_48305 = state_46494__$1;
(statearr_46505_48305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (27))){
var inst_46425 = (state_46494[(9)]);
var inst_46334 = (state_46494[(10)]);
var inst_46423 = (state_46494[(11)]);
var inst_46430 = (state_46494[(12)]);
var inst_46430__$1 = cljs.core._nth(inst_46423,inst_46425);
var inst_46431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46430__$1,inst_46334,done);
var state_46494__$1 = (function (){var statearr_46510 = state_46494;
(statearr_46510[(12)] = inst_46430__$1);

return statearr_46510;
})();
if(cljs.core.truth_(inst_46431)){
var statearr_46511_48306 = state_46494__$1;
(statearr_46511_48306[(1)] = (30));

} else {
var statearr_46512_48307 = state_46494__$1;
(statearr_46512_48307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (1))){
var state_46494__$1 = state_46494;
var statearr_46523_48308 = state_46494__$1;
(statearr_46523_48308[(2)] = null);

(statearr_46523_48308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (24))){
var inst_46377 = (state_46494[(7)]);
var inst_46398 = (state_46494[(2)]);
var inst_46399 = cljs.core.next(inst_46377);
var inst_46344 = inst_46399;
var inst_46345 = null;
var inst_46346 = (0);
var inst_46347 = (0);
var state_46494__$1 = (function (){var statearr_46530 = state_46494;
(statearr_46530[(13)] = inst_46347);

(statearr_46530[(14)] = inst_46398);

(statearr_46530[(15)] = inst_46345);

(statearr_46530[(16)] = inst_46346);

(statearr_46530[(17)] = inst_46344);

return statearr_46530;
})();
var statearr_46531_48311 = state_46494__$1;
(statearr_46531_48311[(2)] = null);

(statearr_46531_48311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (39))){
var state_46494__$1 = state_46494;
var statearr_46539_48312 = state_46494__$1;
(statearr_46539_48312[(2)] = null);

(statearr_46539_48312[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (4))){
var inst_46334 = (state_46494[(10)]);
var inst_46334__$1 = (state_46494[(2)]);
var inst_46335 = (inst_46334__$1 == null);
var state_46494__$1 = (function (){var statearr_46541 = state_46494;
(statearr_46541[(10)] = inst_46334__$1);

return statearr_46541;
})();
if(cljs.core.truth_(inst_46335)){
var statearr_46542_48313 = state_46494__$1;
(statearr_46542_48313[(1)] = (5));

} else {
var statearr_46543_48314 = state_46494__$1;
(statearr_46543_48314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (15))){
var inst_46347 = (state_46494[(13)]);
var inst_46345 = (state_46494[(15)]);
var inst_46346 = (state_46494[(16)]);
var inst_46344 = (state_46494[(17)]);
var inst_46364 = (state_46494[(2)]);
var inst_46374 = (inst_46347 + (1));
var tmp46534 = inst_46345;
var tmp46535 = inst_46346;
var tmp46536 = inst_46344;
var inst_46344__$1 = tmp46536;
var inst_46345__$1 = tmp46534;
var inst_46346__$1 = tmp46535;
var inst_46347__$1 = inst_46374;
var state_46494__$1 = (function (){var statearr_46550 = state_46494;
(statearr_46550[(18)] = inst_46364);

(statearr_46550[(13)] = inst_46347__$1);

(statearr_46550[(15)] = inst_46345__$1);

(statearr_46550[(16)] = inst_46346__$1);

(statearr_46550[(17)] = inst_46344__$1);

return statearr_46550;
})();
var statearr_46555_48319 = state_46494__$1;
(statearr_46555_48319[(2)] = null);

(statearr_46555_48319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (21))){
var inst_46402 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46559_48320 = state_46494__$1;
(statearr_46559_48320[(2)] = inst_46402);

(statearr_46559_48320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (31))){
var inst_46430 = (state_46494[(12)]);
var inst_46434 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46430);
var state_46494__$1 = state_46494;
var statearr_46560_48321 = state_46494__$1;
(statearr_46560_48321[(2)] = inst_46434);

(statearr_46560_48321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (32))){
var inst_46425 = (state_46494[(9)]);
var inst_46423 = (state_46494[(11)]);
var inst_46422 = (state_46494[(19)]);
var inst_46424 = (state_46494[(20)]);
var inst_46436 = (state_46494[(2)]);
var inst_46438 = (inst_46425 + (1));
var tmp46556 = inst_46423;
var tmp46557 = inst_46422;
var tmp46558 = inst_46424;
var inst_46422__$1 = tmp46557;
var inst_46423__$1 = tmp46556;
var inst_46424__$1 = tmp46558;
var inst_46425__$1 = inst_46438;
var state_46494__$1 = (function (){var statearr_46568 = state_46494;
(statearr_46568[(9)] = inst_46425__$1);

(statearr_46568[(21)] = inst_46436);

(statearr_46568[(11)] = inst_46423__$1);

(statearr_46568[(19)] = inst_46422__$1);

(statearr_46568[(20)] = inst_46424__$1);

return statearr_46568;
})();
var statearr_46569_48327 = state_46494__$1;
(statearr_46569_48327[(2)] = null);

(statearr_46569_48327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (40))){
var inst_46456 = (state_46494[(22)]);
var inst_46460 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46456);
var state_46494__$1 = state_46494;
var statearr_46572_48328 = state_46494__$1;
(statearr_46572_48328[(2)] = inst_46460);

(statearr_46572_48328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (33))){
var inst_46441 = (state_46494[(23)]);
var inst_46448 = cljs.core.chunked_seq_QMARK_(inst_46441);
var state_46494__$1 = state_46494;
if(inst_46448){
var statearr_46575_48329 = state_46494__$1;
(statearr_46575_48329[(1)] = (36));

} else {
var statearr_46576_48330 = state_46494__$1;
(statearr_46576_48330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (13))){
var inst_46358 = (state_46494[(24)]);
var inst_46361 = cljs.core.async.close_BANG_(inst_46358);
var state_46494__$1 = state_46494;
var statearr_46578_48332 = state_46494__$1;
(statearr_46578_48332[(2)] = inst_46361);

(statearr_46578_48332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (22))){
var inst_46392 = (state_46494[(8)]);
var inst_46395 = cljs.core.async.close_BANG_(inst_46392);
var state_46494__$1 = state_46494;
var statearr_46579_48334 = state_46494__$1;
(statearr_46579_48334[(2)] = inst_46395);

(statearr_46579_48334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (36))){
var inst_46441 = (state_46494[(23)]);
var inst_46450 = cljs.core.chunk_first(inst_46441);
var inst_46452 = cljs.core.chunk_rest(inst_46441);
var inst_46453 = cljs.core.count(inst_46450);
var inst_46422 = inst_46452;
var inst_46423 = inst_46450;
var inst_46424 = inst_46453;
var inst_46425 = (0);
var state_46494__$1 = (function (){var statearr_46582 = state_46494;
(statearr_46582[(9)] = inst_46425);

(statearr_46582[(11)] = inst_46423);

(statearr_46582[(19)] = inst_46422);

(statearr_46582[(20)] = inst_46424);

return statearr_46582;
})();
var statearr_46584_48338 = state_46494__$1;
(statearr_46584_48338[(2)] = null);

(statearr_46584_48338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (41))){
var inst_46441 = (state_46494[(23)]);
var inst_46462 = (state_46494[(2)]);
var inst_46463 = cljs.core.next(inst_46441);
var inst_46422 = inst_46463;
var inst_46423 = null;
var inst_46424 = (0);
var inst_46425 = (0);
var state_46494__$1 = (function (){var statearr_46587 = state_46494;
(statearr_46587[(9)] = inst_46425);

(statearr_46587[(25)] = inst_46462);

(statearr_46587[(11)] = inst_46423);

(statearr_46587[(19)] = inst_46422);

(statearr_46587[(20)] = inst_46424);

return statearr_46587;
})();
var statearr_46591_48339 = state_46494__$1;
(statearr_46591_48339[(2)] = null);

(statearr_46591_48339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (43))){
var state_46494__$1 = state_46494;
var statearr_46596_48340 = state_46494__$1;
(statearr_46596_48340[(2)] = null);

(statearr_46596_48340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (29))){
var inst_46471 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46601_48341 = state_46494__$1;
(statearr_46601_48341[(2)] = inst_46471);

(statearr_46601_48341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (44))){
var inst_46481 = (state_46494[(2)]);
var state_46494__$1 = (function (){var statearr_46604 = state_46494;
(statearr_46604[(26)] = inst_46481);

return statearr_46604;
})();
var statearr_46605_48342 = state_46494__$1;
(statearr_46605_48342[(2)] = null);

(statearr_46605_48342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (6))){
var inst_46413 = (state_46494[(27)]);
var inst_46412 = cljs.core.deref(cs);
var inst_46413__$1 = cljs.core.keys(inst_46412);
var inst_46414 = cljs.core.count(inst_46413__$1);
var inst_46415 = cljs.core.reset_BANG_(dctr,inst_46414);
var inst_46421 = cljs.core.seq(inst_46413__$1);
var inst_46422 = inst_46421;
var inst_46423 = null;
var inst_46424 = (0);
var inst_46425 = (0);
var state_46494__$1 = (function (){var statearr_46606 = state_46494;
(statearr_46606[(9)] = inst_46425);

(statearr_46606[(27)] = inst_46413__$1);

(statearr_46606[(11)] = inst_46423);

(statearr_46606[(19)] = inst_46422);

(statearr_46606[(28)] = inst_46415);

(statearr_46606[(20)] = inst_46424);

return statearr_46606;
})();
var statearr_46613_48346 = state_46494__$1;
(statearr_46613_48346[(2)] = null);

(statearr_46613_48346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (28))){
var inst_46441 = (state_46494[(23)]);
var inst_46422 = (state_46494[(19)]);
var inst_46441__$1 = cljs.core.seq(inst_46422);
var state_46494__$1 = (function (){var statearr_46615 = state_46494;
(statearr_46615[(23)] = inst_46441__$1);

return statearr_46615;
})();
if(inst_46441__$1){
var statearr_46616_48350 = state_46494__$1;
(statearr_46616_48350[(1)] = (33));

} else {
var statearr_46617_48351 = state_46494__$1;
(statearr_46617_48351[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (25))){
var inst_46425 = (state_46494[(9)]);
var inst_46424 = (state_46494[(20)]);
var inst_46427 = (inst_46425 < inst_46424);
var inst_46428 = inst_46427;
var state_46494__$1 = state_46494;
if(cljs.core.truth_(inst_46428)){
var statearr_46620_48352 = state_46494__$1;
(statearr_46620_48352[(1)] = (27));

} else {
var statearr_46621_48353 = state_46494__$1;
(statearr_46621_48353[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (34))){
var state_46494__$1 = state_46494;
var statearr_46622_48354 = state_46494__$1;
(statearr_46622_48354[(2)] = null);

(statearr_46622_48354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (17))){
var state_46494__$1 = state_46494;
var statearr_46628_48355 = state_46494__$1;
(statearr_46628_48355[(2)] = null);

(statearr_46628_48355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (3))){
var inst_46486 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46494__$1,inst_46486);
} else {
if((state_val_46499 === (12))){
var inst_46407 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46632_48356 = state_46494__$1;
(statearr_46632_48356[(2)] = inst_46407);

(statearr_46632_48356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (2))){
var state_46494__$1 = state_46494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46494__$1,(4),ch);
} else {
if((state_val_46499 === (23))){
var state_46494__$1 = state_46494;
var statearr_46637_48360 = state_46494__$1;
(statearr_46637_48360[(2)] = null);

(statearr_46637_48360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (35))){
var inst_46469 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46642_48362 = state_46494__$1;
(statearr_46642_48362[(2)] = inst_46469);

(statearr_46642_48362[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (19))){
var inst_46377 = (state_46494[(7)]);
var inst_46383 = cljs.core.chunk_first(inst_46377);
var inst_46384 = cljs.core.chunk_rest(inst_46377);
var inst_46385 = cljs.core.count(inst_46383);
var inst_46344 = inst_46384;
var inst_46345 = inst_46383;
var inst_46346 = inst_46385;
var inst_46347 = (0);
var state_46494__$1 = (function (){var statearr_46644 = state_46494;
(statearr_46644[(13)] = inst_46347);

(statearr_46644[(15)] = inst_46345);

(statearr_46644[(16)] = inst_46346);

(statearr_46644[(17)] = inst_46344);

return statearr_46644;
})();
var statearr_46645_48363 = state_46494__$1;
(statearr_46645_48363[(2)] = null);

(statearr_46645_48363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (11))){
var inst_46377 = (state_46494[(7)]);
var inst_46344 = (state_46494[(17)]);
var inst_46377__$1 = cljs.core.seq(inst_46344);
var state_46494__$1 = (function (){var statearr_46646 = state_46494;
(statearr_46646[(7)] = inst_46377__$1);

return statearr_46646;
})();
if(inst_46377__$1){
var statearr_46647_48368 = state_46494__$1;
(statearr_46647_48368[(1)] = (16));

} else {
var statearr_46648_48369 = state_46494__$1;
(statearr_46648_48369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (9))){
var inst_46409 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46649_48371 = state_46494__$1;
(statearr_46649_48371[(2)] = inst_46409);

(statearr_46649_48371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (5))){
var inst_46341 = cljs.core.deref(cs);
var inst_46343 = cljs.core.seq(inst_46341);
var inst_46344 = inst_46343;
var inst_46345 = null;
var inst_46346 = (0);
var inst_46347 = (0);
var state_46494__$1 = (function (){var statearr_46652 = state_46494;
(statearr_46652[(13)] = inst_46347);

(statearr_46652[(15)] = inst_46345);

(statearr_46652[(16)] = inst_46346);

(statearr_46652[(17)] = inst_46344);

return statearr_46652;
})();
var statearr_46653_48372 = state_46494__$1;
(statearr_46653_48372[(2)] = null);

(statearr_46653_48372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (14))){
var state_46494__$1 = state_46494;
var statearr_46654_48374 = state_46494__$1;
(statearr_46654_48374[(2)] = null);

(statearr_46654_48374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (45))){
var inst_46478 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46655_48375 = state_46494__$1;
(statearr_46655_48375[(2)] = inst_46478);

(statearr_46655_48375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (26))){
var inst_46413 = (state_46494[(27)]);
var inst_46473 = (state_46494[(2)]);
var inst_46474 = cljs.core.seq(inst_46413);
var state_46494__$1 = (function (){var statearr_46657 = state_46494;
(statearr_46657[(29)] = inst_46473);

return statearr_46657;
})();
if(inst_46474){
var statearr_46658_48381 = state_46494__$1;
(statearr_46658_48381[(1)] = (42));

} else {
var statearr_46661_48382 = state_46494__$1;
(statearr_46661_48382[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (16))){
var inst_46377 = (state_46494[(7)]);
var inst_46379 = cljs.core.chunked_seq_QMARK_(inst_46377);
var state_46494__$1 = state_46494;
if(inst_46379){
var statearr_46664_48383 = state_46494__$1;
(statearr_46664_48383[(1)] = (19));

} else {
var statearr_46665_48384 = state_46494__$1;
(statearr_46665_48384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (38))){
var inst_46466 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46666_48385 = state_46494__$1;
(statearr_46666_48385[(2)] = inst_46466);

(statearr_46666_48385[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (30))){
var state_46494__$1 = state_46494;
var statearr_46667_48386 = state_46494__$1;
(statearr_46667_48386[(2)] = null);

(statearr_46667_48386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (10))){
var inst_46347 = (state_46494[(13)]);
var inst_46345 = (state_46494[(15)]);
var inst_46357 = cljs.core._nth(inst_46345,inst_46347);
var inst_46358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46357,(0),null);
var inst_46359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46357,(1),null);
var state_46494__$1 = (function (){var statearr_46674 = state_46494;
(statearr_46674[(24)] = inst_46358);

return statearr_46674;
})();
if(cljs.core.truth_(inst_46359)){
var statearr_46677_48388 = state_46494__$1;
(statearr_46677_48388[(1)] = (13));

} else {
var statearr_46678_48389 = state_46494__$1;
(statearr_46678_48389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (18))){
var inst_46405 = (state_46494[(2)]);
var state_46494__$1 = state_46494;
var statearr_46681_48390 = state_46494__$1;
(statearr_46681_48390[(2)] = inst_46405);

(statearr_46681_48390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (42))){
var state_46494__$1 = state_46494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46494__$1,(45),dchan);
} else {
if((state_val_46499 === (37))){
var inst_46456 = (state_46494[(22)]);
var inst_46334 = (state_46494[(10)]);
var inst_46441 = (state_46494[(23)]);
var inst_46456__$1 = cljs.core.first(inst_46441);
var inst_46457 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46456__$1,inst_46334,done);
var state_46494__$1 = (function (){var statearr_46682 = state_46494;
(statearr_46682[(22)] = inst_46456__$1);

return statearr_46682;
})();
if(cljs.core.truth_(inst_46457)){
var statearr_46683_48392 = state_46494__$1;
(statearr_46683_48392[(1)] = (39));

} else {
var statearr_46686_48393 = state_46494__$1;
(statearr_46686_48393[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46499 === (8))){
var inst_46347 = (state_46494[(13)]);
var inst_46346 = (state_46494[(16)]);
var inst_46349 = (inst_46347 < inst_46346);
var inst_46350 = inst_46349;
var state_46494__$1 = state_46494;
if(cljs.core.truth_(inst_46350)){
var statearr_46687_48394 = state_46494__$1;
(statearr_46687_48394[(1)] = (10));

} else {
var statearr_46688_48395 = state_46494__$1;
(statearr_46688_48395[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45338__auto__ = null;
var cljs$core$async$mult_$_state_machine__45338__auto____0 = (function (){
var statearr_46690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46690[(0)] = cljs$core$async$mult_$_state_machine__45338__auto__);

(statearr_46690[(1)] = (1));

return statearr_46690;
});
var cljs$core$async$mult_$_state_machine__45338__auto____1 = (function (state_46494){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46494);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46694){var ex__45341__auto__ = e46694;
var statearr_46695_48399 = state_46494;
(statearr_46695_48399[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46494[(4)]))){
var statearr_46697_48400 = state_46494;
(statearr_46697_48400[(1)] = cljs.core.first((state_46494[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48401 = state_46494;
state_46494 = G__48401;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45338__auto__ = function(state_46494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45338__auto____1.call(this,state_46494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45338__auto____0;
cljs$core$async$mult_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45338__auto____1;
return cljs$core$async$mult_$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46700 = f__45548__auto__();
(statearr_46700[(6)] = c__45546__auto___48293);

return statearr_46700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46707 = arguments.length;
switch (G__46707) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48404 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48404(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48406 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48406(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48407 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48407(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48408 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48408(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48413 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48413(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48414 = arguments.length;
var i__4737__auto___48415 = (0);
while(true){
if((i__4737__auto___48415 < len__4736__auto___48414)){
args__4742__auto__.push((arguments[i__4737__auto___48415]));

var G__48420 = (i__4737__auto___48415 + (1));
i__4737__auto___48415 = G__48420;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46731){
var map__46732 = p__46731;
var map__46732__$1 = (((((!((map__46732 == null))))?(((((map__46732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46732):map__46732);
var opts = map__46732__$1;
var statearr_46734_48423 = state;
(statearr_46734_48423[(1)] = cont_block);


var temp__5743__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46735_48424 = state;
(statearr_46735_48424[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5743__auto__)){
var cb = temp__5743__auto__;
var statearr_46736_48425 = state;
(statearr_46736_48425[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46726){
var G__46727 = cljs.core.first(seq46726);
var seq46726__$1 = cljs.core.next(seq46726);
var G__46728 = cljs.core.first(seq46726__$1);
var seq46726__$2 = cljs.core.next(seq46726__$1);
var G__46729 = cljs.core.first(seq46726__$2);
var seq46726__$3 = cljs.core.next(seq46726__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46727,G__46728,G__46729,seq46726__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46738 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46739){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46739 = meta46739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46740,meta46739__$1){
var self__ = this;
var _46740__$1 = this;
return (new cljs.core.async.t_cljs$core$async46738(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46739__$1));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46740){
var self__ = this;
var _46740__$1 = this;
return self__.meta46739;
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46738.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46739","meta46739",1293600445,null)], null);
}));

(cljs.core.async.t_cljs$core$async46738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46738");

(cljs.core.async.t_cljs$core$async46738.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46738.
 */
cljs.core.async.__GT_t_cljs$core$async46738 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46738(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46739){
return (new cljs.core.async.t_cljs$core$async46738(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46739));
});

}

return (new cljs.core.async.t_cljs$core$async46738(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45546__auto___48426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_46846){
var state_val_46847 = (state_46846[(1)]);
if((state_val_46847 === (7))){
var inst_46759 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46848_48429 = state_46846__$1;
(statearr_46848_48429[(2)] = inst_46759);

(statearr_46848_48429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (20))){
var inst_46771 = (state_46846[(7)]);
var state_46846__$1 = state_46846;
var statearr_46849_48434 = state_46846__$1;
(statearr_46849_48434[(2)] = inst_46771);

(statearr_46849_48434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (27))){
var state_46846__$1 = state_46846;
var statearr_46850_48438 = state_46846__$1;
(statearr_46850_48438[(2)] = null);

(statearr_46850_48438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (1))){
var inst_46746 = (state_46846[(8)]);
var inst_46746__$1 = calc_state();
var inst_46748 = (inst_46746__$1 == null);
var inst_46749 = cljs.core.not(inst_46748);
var state_46846__$1 = (function (){var statearr_46851 = state_46846;
(statearr_46851[(8)] = inst_46746__$1);

return statearr_46851;
})();
if(inst_46749){
var statearr_46852_48443 = state_46846__$1;
(statearr_46852_48443[(1)] = (2));

} else {
var statearr_46853_48448 = state_46846__$1;
(statearr_46853_48448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (24))){
var inst_46818 = (state_46846[(9)]);
var inst_46795 = (state_46846[(10)]);
var inst_46804 = (state_46846[(11)]);
var inst_46818__$1 = (inst_46795.cljs$core$IFn$_invoke$arity$1 ? inst_46795.cljs$core$IFn$_invoke$arity$1(inst_46804) : inst_46795.call(null,inst_46804));
var state_46846__$1 = (function (){var statearr_46854 = state_46846;
(statearr_46854[(9)] = inst_46818__$1);

return statearr_46854;
})();
if(cljs.core.truth_(inst_46818__$1)){
var statearr_46855_48453 = state_46846__$1;
(statearr_46855_48453[(1)] = (29));

} else {
var statearr_46856_48454 = state_46846__$1;
(statearr_46856_48454[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (4))){
var inst_46762 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46762)){
var statearr_46857_48463 = state_46846__$1;
(statearr_46857_48463[(1)] = (8));

} else {
var statearr_46858_48465 = state_46846__$1;
(statearr_46858_48465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (15))){
var inst_46789 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46789)){
var statearr_46859_48467 = state_46846__$1;
(statearr_46859_48467[(1)] = (19));

} else {
var statearr_46860_48469 = state_46846__$1;
(statearr_46860_48469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (21))){
var inst_46794 = (state_46846[(12)]);
var inst_46794__$1 = (state_46846[(2)]);
var inst_46795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46794__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46794__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46794__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46846__$1 = (function (){var statearr_46862 = state_46846;
(statearr_46862[(12)] = inst_46794__$1);

(statearr_46862[(13)] = inst_46796);

(statearr_46862[(10)] = inst_46795);

return statearr_46862;
})();
return cljs.core.async.ioc_alts_BANG_(state_46846__$1,(22),inst_46797);
} else {
if((state_val_46847 === (31))){
var inst_46826 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46826)){
var statearr_46863_48484 = state_46846__$1;
(statearr_46863_48484[(1)] = (32));

} else {
var statearr_46864_48488 = state_46846__$1;
(statearr_46864_48488[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (32))){
var inst_46803 = (state_46846[(14)]);
var state_46846__$1 = state_46846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46846__$1,(35),out,inst_46803);
} else {
if((state_val_46847 === (33))){
var inst_46794 = (state_46846[(12)]);
var inst_46771 = inst_46794;
var state_46846__$1 = (function (){var statearr_46866 = state_46846;
(statearr_46866[(7)] = inst_46771);

return statearr_46866;
})();
var statearr_46867_48492 = state_46846__$1;
(statearr_46867_48492[(2)] = null);

(statearr_46867_48492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (13))){
var inst_46771 = (state_46846[(7)]);
var inst_46778 = inst_46771.cljs$lang$protocol_mask$partition0$;
var inst_46779 = (inst_46778 & (64));
var inst_46780 = inst_46771.cljs$core$ISeq$;
var inst_46781 = (cljs.core.PROTOCOL_SENTINEL === inst_46780);
var inst_46782 = ((inst_46779) || (inst_46781));
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46782)){
var statearr_46869_48498 = state_46846__$1;
(statearr_46869_48498[(1)] = (16));

} else {
var statearr_46870_48500 = state_46846__$1;
(statearr_46870_48500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (22))){
var inst_46803 = (state_46846[(14)]);
var inst_46804 = (state_46846[(11)]);
var inst_46802 = (state_46846[(2)]);
var inst_46803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46802,(0),null);
var inst_46804__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46802,(1),null);
var inst_46805 = (inst_46803__$1 == null);
var inst_46806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46804__$1,change);
var inst_46807 = ((inst_46805) || (inst_46806));
var state_46846__$1 = (function (){var statearr_46871 = state_46846;
(statearr_46871[(14)] = inst_46803__$1);

(statearr_46871[(11)] = inst_46804__$1);

return statearr_46871;
})();
if(cljs.core.truth_(inst_46807)){
var statearr_46872_48515 = state_46846__$1;
(statearr_46872_48515[(1)] = (23));

} else {
var statearr_46873_48516 = state_46846__$1;
(statearr_46873_48516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (36))){
var inst_46794 = (state_46846[(12)]);
var inst_46771 = inst_46794;
var state_46846__$1 = (function (){var statearr_46874 = state_46846;
(statearr_46874[(7)] = inst_46771);

return statearr_46874;
})();
var statearr_46875_48521 = state_46846__$1;
(statearr_46875_48521[(2)] = null);

(statearr_46875_48521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (29))){
var inst_46818 = (state_46846[(9)]);
var state_46846__$1 = state_46846;
var statearr_46877_48522 = state_46846__$1;
(statearr_46877_48522[(2)] = inst_46818);

(statearr_46877_48522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (6))){
var state_46846__$1 = state_46846;
var statearr_46878_48523 = state_46846__$1;
(statearr_46878_48523[(2)] = false);

(statearr_46878_48523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (28))){
var inst_46814 = (state_46846[(2)]);
var inst_46815 = calc_state();
var inst_46771 = inst_46815;
var state_46846__$1 = (function (){var statearr_46879 = state_46846;
(statearr_46879[(15)] = inst_46814);

(statearr_46879[(7)] = inst_46771);

return statearr_46879;
})();
var statearr_46880_48525 = state_46846__$1;
(statearr_46880_48525[(2)] = null);

(statearr_46880_48525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (25))){
var inst_46842 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46881_48526 = state_46846__$1;
(statearr_46881_48526[(2)] = inst_46842);

(statearr_46881_48526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (34))){
var inst_46840 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46882_48527 = state_46846__$1;
(statearr_46882_48527[(2)] = inst_46840);

(statearr_46882_48527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (17))){
var state_46846__$1 = state_46846;
var statearr_46883_48528 = state_46846__$1;
(statearr_46883_48528[(2)] = false);

(statearr_46883_48528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (3))){
var state_46846__$1 = state_46846;
var statearr_46884_48529 = state_46846__$1;
(statearr_46884_48529[(2)] = false);

(statearr_46884_48529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (12))){
var inst_46844 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46846__$1,inst_46844);
} else {
if((state_val_46847 === (2))){
var inst_46746 = (state_46846[(8)]);
var inst_46751 = inst_46746.cljs$lang$protocol_mask$partition0$;
var inst_46752 = (inst_46751 & (64));
var inst_46753 = inst_46746.cljs$core$ISeq$;
var inst_46754 = (cljs.core.PROTOCOL_SENTINEL === inst_46753);
var inst_46755 = ((inst_46752) || (inst_46754));
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46755)){
var statearr_46886_48530 = state_46846__$1;
(statearr_46886_48530[(1)] = (5));

} else {
var statearr_46887_48531 = state_46846__$1;
(statearr_46887_48531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (23))){
var inst_46803 = (state_46846[(14)]);
var inst_46809 = (inst_46803 == null);
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46809)){
var statearr_46888_48546 = state_46846__$1;
(statearr_46888_48546[(1)] = (26));

} else {
var statearr_46889_48547 = state_46846__$1;
(statearr_46889_48547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (35))){
var inst_46829 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
if(cljs.core.truth_(inst_46829)){
var statearr_46890_48549 = state_46846__$1;
(statearr_46890_48549[(1)] = (36));

} else {
var statearr_46891_48550 = state_46846__$1;
(statearr_46891_48550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (19))){
var inst_46771 = (state_46846[(7)]);
var inst_46791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46771);
var state_46846__$1 = state_46846;
var statearr_46892_48551 = state_46846__$1;
(statearr_46892_48551[(2)] = inst_46791);

(statearr_46892_48551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (11))){
var inst_46771 = (state_46846[(7)]);
var inst_46775 = (inst_46771 == null);
var inst_46776 = cljs.core.not(inst_46775);
var state_46846__$1 = state_46846;
if(inst_46776){
var statearr_46893_48552 = state_46846__$1;
(statearr_46893_48552[(1)] = (13));

} else {
var statearr_46894_48553 = state_46846__$1;
(statearr_46894_48553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (9))){
var inst_46746 = (state_46846[(8)]);
var state_46846__$1 = state_46846;
var statearr_46895_48554 = state_46846__$1;
(statearr_46895_48554[(2)] = inst_46746);

(statearr_46895_48554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (5))){
var state_46846__$1 = state_46846;
var statearr_46896_48555 = state_46846__$1;
(statearr_46896_48555[(2)] = true);

(statearr_46896_48555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (14))){
var state_46846__$1 = state_46846;
var statearr_46897_48556 = state_46846__$1;
(statearr_46897_48556[(2)] = false);

(statearr_46897_48556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (26))){
var inst_46804 = (state_46846[(11)]);
var inst_46811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46804);
var state_46846__$1 = state_46846;
var statearr_46898_48557 = state_46846__$1;
(statearr_46898_48557[(2)] = inst_46811);

(statearr_46898_48557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (16))){
var state_46846__$1 = state_46846;
var statearr_46899_48558 = state_46846__$1;
(statearr_46899_48558[(2)] = true);

(statearr_46899_48558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (38))){
var inst_46834 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46901_48559 = state_46846__$1;
(statearr_46901_48559[(2)] = inst_46834);

(statearr_46901_48559[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (30))){
var inst_46796 = (state_46846[(13)]);
var inst_46795 = (state_46846[(10)]);
var inst_46804 = (state_46846[(11)]);
var inst_46821 = cljs.core.empty_QMARK_(inst_46795);
var inst_46822 = (inst_46796.cljs$core$IFn$_invoke$arity$1 ? inst_46796.cljs$core$IFn$_invoke$arity$1(inst_46804) : inst_46796.call(null,inst_46804));
var inst_46823 = cljs.core.not(inst_46822);
var inst_46824 = ((inst_46821) && (inst_46823));
var state_46846__$1 = state_46846;
var statearr_46902_48566 = state_46846__$1;
(statearr_46902_48566[(2)] = inst_46824);

(statearr_46902_48566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (10))){
var inst_46746 = (state_46846[(8)]);
var inst_46767 = (state_46846[(2)]);
var inst_46768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46767,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46767,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46767,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46771 = inst_46746;
var state_46846__$1 = (function (){var statearr_46903 = state_46846;
(statearr_46903[(16)] = inst_46769);

(statearr_46903[(17)] = inst_46770);

(statearr_46903[(7)] = inst_46771);

(statearr_46903[(18)] = inst_46768);

return statearr_46903;
})();
var statearr_46904_48567 = state_46846__$1;
(statearr_46904_48567[(2)] = null);

(statearr_46904_48567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (18))){
var inst_46786 = (state_46846[(2)]);
var state_46846__$1 = state_46846;
var statearr_46905_48572 = state_46846__$1;
(statearr_46905_48572[(2)] = inst_46786);

(statearr_46905_48572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (37))){
var state_46846__$1 = state_46846;
var statearr_46906_48573 = state_46846__$1;
(statearr_46906_48573[(2)] = null);

(statearr_46906_48573[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46847 === (8))){
var inst_46746 = (state_46846[(8)]);
var inst_46764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46746);
var state_46846__$1 = state_46846;
var statearr_46908_48581 = state_46846__$1;
(statearr_46908_48581[(2)] = inst_46764);

(statearr_46908_48581[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__45338__auto__ = null;
var cljs$core$async$mix_$_state_machine__45338__auto____0 = (function (){
var statearr_46912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46912[(0)] = cljs$core$async$mix_$_state_machine__45338__auto__);

(statearr_46912[(1)] = (1));

return statearr_46912;
});
var cljs$core$async$mix_$_state_machine__45338__auto____1 = (function (state_46846){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_46846);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e46914){var ex__45341__auto__ = e46914;
var statearr_46915_48584 = state_46846;
(statearr_46915_48584[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_46846[(4)]))){
var statearr_46916_48585 = state_46846;
(statearr_46916_48585[(1)] = cljs.core.first((state_46846[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48586 = state_46846;
state_46846 = G__48586;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45338__auto__ = function(state_46846){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45338__auto____1.call(this,state_46846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45338__auto____0;
cljs$core$async$mix_$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45338__auto____1;
return cljs$core$async$mix_$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_46917 = f__45548__auto__();
(statearr_46917[(6)] = c__45546__auto___48426);

return statearr_46917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48594 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48594(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48598 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48598(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48599 = (function() {
var G__48600 = null;
var G__48600__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48600__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48600 = function(p,v){
switch(arguments.length){
case 1:
return G__48600__1.call(this,p);
case 2:
return G__48600__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48600.cljs$core$IFn$_invoke$arity$1 = G__48600__1;
G__48600.cljs$core$IFn$_invoke$arity$2 = G__48600__2;
return G__48600;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46928 = arguments.length;
switch (G__46928) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48599(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48599(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46935 = arguments.length;
switch (G__46935) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46932_SHARP_){
if(cljs.core.truth_((p1__46932_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46932_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46932_SHARP_.call(null,topic)))){
return p1__46932_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46932_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46941 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46942){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46942 = meta46942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46943,meta46942__$1){
var self__ = this;
var _46943__$1 = this;
return (new cljs.core.async.t_cljs$core$async46941(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46942__$1));
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46943){
var self__ = this;
var _46943__$1 = this;
return self__.meta46942;
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5743__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5743__auto__)){
var m = temp__5743__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46941.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46942","meta46942",-1525899435,null)], null);
}));

(cljs.core.async.t_cljs$core$async46941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46941");

(cljs.core.async.t_cljs$core$async46941.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46941.
 */
cljs.core.async.__GT_t_cljs$core$async46941 = (function cljs$core$async$__GT_t_cljs$core$async46941(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46942){
return (new cljs.core.async.t_cljs$core$async46941(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46942));
});

}

return (new cljs.core.async.t_cljs$core$async46941(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45546__auto___48618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47025){
var state_val_47026 = (state_47025[(1)]);
if((state_val_47026 === (7))){
var inst_47021 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47027_48620 = state_47025__$1;
(statearr_47027_48620[(2)] = inst_47021);

(statearr_47027_48620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (20))){
var state_47025__$1 = state_47025;
var statearr_47028_48621 = state_47025__$1;
(statearr_47028_48621[(2)] = null);

(statearr_47028_48621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (1))){
var state_47025__$1 = state_47025;
var statearr_47029_48622 = state_47025__$1;
(statearr_47029_48622[(2)] = null);

(statearr_47029_48622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (24))){
var inst_47004 = (state_47025[(7)]);
var inst_47013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47004);
var state_47025__$1 = state_47025;
var statearr_47030_48623 = state_47025__$1;
(statearr_47030_48623[(2)] = inst_47013);

(statearr_47030_48623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (4))){
var inst_46955 = (state_47025[(8)]);
var inst_46955__$1 = (state_47025[(2)]);
var inst_46956 = (inst_46955__$1 == null);
var state_47025__$1 = (function (){var statearr_47031 = state_47025;
(statearr_47031[(8)] = inst_46955__$1);

return statearr_47031;
})();
if(cljs.core.truth_(inst_46956)){
var statearr_47032_48624 = state_47025__$1;
(statearr_47032_48624[(1)] = (5));

} else {
var statearr_47033_48625 = state_47025__$1;
(statearr_47033_48625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (15))){
var inst_46998 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47034_48627 = state_47025__$1;
(statearr_47034_48627[(2)] = inst_46998);

(statearr_47034_48627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (21))){
var inst_47018 = (state_47025[(2)]);
var state_47025__$1 = (function (){var statearr_47035 = state_47025;
(statearr_47035[(9)] = inst_47018);

return statearr_47035;
})();
var statearr_47036_48628 = state_47025__$1;
(statearr_47036_48628[(2)] = null);

(statearr_47036_48628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (13))){
var inst_46980 = (state_47025[(10)]);
var inst_46982 = cljs.core.chunked_seq_QMARK_(inst_46980);
var state_47025__$1 = state_47025;
if(inst_46982){
var statearr_47037_48630 = state_47025__$1;
(statearr_47037_48630[(1)] = (16));

} else {
var statearr_47038_48631 = state_47025__$1;
(statearr_47038_48631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (22))){
var inst_47010 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
if(cljs.core.truth_(inst_47010)){
var statearr_47042_48632 = state_47025__$1;
(statearr_47042_48632[(1)] = (23));

} else {
var statearr_47043_48633 = state_47025__$1;
(statearr_47043_48633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (6))){
var inst_47004 = (state_47025[(7)]);
var inst_46955 = (state_47025[(8)]);
var inst_47006 = (state_47025[(11)]);
var inst_47004__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46955) : topic_fn.call(null,inst_46955));
var inst_47005 = cljs.core.deref(mults);
var inst_47006__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47005,inst_47004__$1);
var state_47025__$1 = (function (){var statearr_47049 = state_47025;
(statearr_47049[(7)] = inst_47004__$1);

(statearr_47049[(11)] = inst_47006__$1);

return statearr_47049;
})();
if(cljs.core.truth_(inst_47006__$1)){
var statearr_47052_48634 = state_47025__$1;
(statearr_47052_48634[(1)] = (19));

} else {
var statearr_47053_48635 = state_47025__$1;
(statearr_47053_48635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (25))){
var inst_47015 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47054_48636 = state_47025__$1;
(statearr_47054_48636[(2)] = inst_47015);

(statearr_47054_48636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (17))){
var inst_46980 = (state_47025[(10)]);
var inst_46989 = cljs.core.first(inst_46980);
var inst_46990 = cljs.core.async.muxch_STAR_(inst_46989);
var inst_46991 = cljs.core.async.close_BANG_(inst_46990);
var inst_46992 = cljs.core.next(inst_46980);
var inst_46966 = inst_46992;
var inst_46967 = null;
var inst_46968 = (0);
var inst_46969 = (0);
var state_47025__$1 = (function (){var statearr_47055 = state_47025;
(statearr_47055[(12)] = inst_46991);

(statearr_47055[(13)] = inst_46967);

(statearr_47055[(14)] = inst_46969);

(statearr_47055[(15)] = inst_46968);

(statearr_47055[(16)] = inst_46966);

return statearr_47055;
})();
var statearr_47056_48637 = state_47025__$1;
(statearr_47056_48637[(2)] = null);

(statearr_47056_48637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (3))){
var inst_47023 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47025__$1,inst_47023);
} else {
if((state_val_47026 === (12))){
var inst_47000 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47057_48639 = state_47025__$1;
(statearr_47057_48639[(2)] = inst_47000);

(statearr_47057_48639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (2))){
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47025__$1,(4),ch);
} else {
if((state_val_47026 === (23))){
var state_47025__$1 = state_47025;
var statearr_47058_48640 = state_47025__$1;
(statearr_47058_48640[(2)] = null);

(statearr_47058_48640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (19))){
var inst_46955 = (state_47025[(8)]);
var inst_47006 = (state_47025[(11)]);
var inst_47008 = cljs.core.async.muxch_STAR_(inst_47006);
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47025__$1,(22),inst_47008,inst_46955);
} else {
if((state_val_47026 === (11))){
var inst_46980 = (state_47025[(10)]);
var inst_46966 = (state_47025[(16)]);
var inst_46980__$1 = cljs.core.seq(inst_46966);
var state_47025__$1 = (function (){var statearr_47062 = state_47025;
(statearr_47062[(10)] = inst_46980__$1);

return statearr_47062;
})();
if(inst_46980__$1){
var statearr_47067_48642 = state_47025__$1;
(statearr_47067_48642[(1)] = (13));

} else {
var statearr_47068_48644 = state_47025__$1;
(statearr_47068_48644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (9))){
var inst_47002 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47073_48645 = state_47025__$1;
(statearr_47073_48645[(2)] = inst_47002);

(statearr_47073_48645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (5))){
var inst_46962 = cljs.core.deref(mults);
var inst_46963 = cljs.core.vals(inst_46962);
var inst_46964 = cljs.core.seq(inst_46963);
var inst_46966 = inst_46964;
var inst_46967 = null;
var inst_46968 = (0);
var inst_46969 = (0);
var state_47025__$1 = (function (){var statearr_47078 = state_47025;
(statearr_47078[(13)] = inst_46967);

(statearr_47078[(14)] = inst_46969);

(statearr_47078[(15)] = inst_46968);

(statearr_47078[(16)] = inst_46966);

return statearr_47078;
})();
var statearr_47079_48647 = state_47025__$1;
(statearr_47079_48647[(2)] = null);

(statearr_47079_48647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (14))){
var state_47025__$1 = state_47025;
var statearr_47083_48648 = state_47025__$1;
(statearr_47083_48648[(2)] = null);

(statearr_47083_48648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (16))){
var inst_46980 = (state_47025[(10)]);
var inst_46984 = cljs.core.chunk_first(inst_46980);
var inst_46985 = cljs.core.chunk_rest(inst_46980);
var inst_46986 = cljs.core.count(inst_46984);
var inst_46966 = inst_46985;
var inst_46967 = inst_46984;
var inst_46968 = inst_46986;
var inst_46969 = (0);
var state_47025__$1 = (function (){var statearr_47084 = state_47025;
(statearr_47084[(13)] = inst_46967);

(statearr_47084[(14)] = inst_46969);

(statearr_47084[(15)] = inst_46968);

(statearr_47084[(16)] = inst_46966);

return statearr_47084;
})();
var statearr_47085_48650 = state_47025__$1;
(statearr_47085_48650[(2)] = null);

(statearr_47085_48650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (10))){
var inst_46967 = (state_47025[(13)]);
var inst_46969 = (state_47025[(14)]);
var inst_46968 = (state_47025[(15)]);
var inst_46966 = (state_47025[(16)]);
var inst_46974 = cljs.core._nth(inst_46967,inst_46969);
var inst_46975 = cljs.core.async.muxch_STAR_(inst_46974);
var inst_46976 = cljs.core.async.close_BANG_(inst_46975);
var inst_46977 = (inst_46969 + (1));
var tmp47080 = inst_46967;
var tmp47081 = inst_46968;
var tmp47082 = inst_46966;
var inst_46966__$1 = tmp47082;
var inst_46967__$1 = tmp47080;
var inst_46968__$1 = tmp47081;
var inst_46969__$1 = inst_46977;
var state_47025__$1 = (function (){var statearr_47089 = state_47025;
(statearr_47089[(17)] = inst_46976);

(statearr_47089[(13)] = inst_46967__$1);

(statearr_47089[(14)] = inst_46969__$1);

(statearr_47089[(15)] = inst_46968__$1);

(statearr_47089[(16)] = inst_46966__$1);

return statearr_47089;
})();
var statearr_47090_48652 = state_47025__$1;
(statearr_47090_48652[(2)] = null);

(statearr_47090_48652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (18))){
var inst_46995 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47091_48653 = state_47025__$1;
(statearr_47091_48653[(2)] = inst_46995);

(statearr_47091_48653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (8))){
var inst_46969 = (state_47025[(14)]);
var inst_46968 = (state_47025[(15)]);
var inst_46971 = (inst_46969 < inst_46968);
var inst_46972 = inst_46971;
var state_47025__$1 = state_47025;
if(cljs.core.truth_(inst_46972)){
var statearr_47092_48654 = state_47025__$1;
(statearr_47092_48654[(1)] = (10));

} else {
var statearr_47093_48655 = state_47025__$1;
(statearr_47093_48655[(1)] = (11));

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
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47094[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47094[(1)] = (1));

return statearr_47094;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47025){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47025);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47095){var ex__45341__auto__ = e47095;
var statearr_47096_48661 = state_47025;
(statearr_47096_48661[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47025[(4)]))){
var statearr_47097_48662 = state_47025;
(statearr_47097_48662[(1)] = cljs.core.first((state_47025[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48667 = state_47025;
state_47025 = G__48667;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47099 = f__45548__auto__();
(statearr_47099[(6)] = c__45546__auto___48618);

return statearr_47099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47101 = arguments.length;
switch (G__47101) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47103 = arguments.length;
switch (G__47103) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47117 = arguments.length;
switch (G__47117) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45546__auto___48691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47170){
var state_val_47171 = (state_47170[(1)]);
if((state_val_47171 === (7))){
var state_47170__$1 = state_47170;
var statearr_47176_48692 = state_47170__$1;
(statearr_47176_48692[(2)] = null);

(statearr_47176_48692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (1))){
var state_47170__$1 = state_47170;
var statearr_47178_48697 = state_47170__$1;
(statearr_47178_48697[(2)] = null);

(statearr_47178_48697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (4))){
var inst_47125 = (state_47170[(7)]);
var inst_47124 = (state_47170[(8)]);
var inst_47127 = (inst_47125 < inst_47124);
var state_47170__$1 = state_47170;
if(cljs.core.truth_(inst_47127)){
var statearr_47179_48702 = state_47170__$1;
(statearr_47179_48702[(1)] = (6));

} else {
var statearr_47180_48703 = state_47170__$1;
(statearr_47180_48703[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (15))){
var inst_47156 = (state_47170[(9)]);
var inst_47161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47156);
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47170__$1,(17),out,inst_47161);
} else {
if((state_val_47171 === (13))){
var inst_47156 = (state_47170[(9)]);
var inst_47156__$1 = (state_47170[(2)]);
var inst_47157 = cljs.core.some(cljs.core.nil_QMARK_,inst_47156__$1);
var state_47170__$1 = (function (){var statearr_47184 = state_47170;
(statearr_47184[(9)] = inst_47156__$1);

return statearr_47184;
})();
if(cljs.core.truth_(inst_47157)){
var statearr_47185_48713 = state_47170__$1;
(statearr_47185_48713[(1)] = (14));

} else {
var statearr_47186_48714 = state_47170__$1;
(statearr_47186_48714[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (6))){
var state_47170__$1 = state_47170;
var statearr_47187_48715 = state_47170__$1;
(statearr_47187_48715[(2)] = null);

(statearr_47187_48715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (17))){
var inst_47163 = (state_47170[(2)]);
var state_47170__$1 = (function (){var statearr_47192 = state_47170;
(statearr_47192[(10)] = inst_47163);

return statearr_47192;
})();
var statearr_47193_48717 = state_47170__$1;
(statearr_47193_48717[(2)] = null);

(statearr_47193_48717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (3))){
var inst_47168 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47170__$1,inst_47168);
} else {
if((state_val_47171 === (12))){
var _ = (function (){var statearr_47194 = state_47170;
(statearr_47194[(4)] = cljs.core.rest((state_47170[(4)])));

return statearr_47194;
})();
var state_47170__$1 = state_47170;
var ex47191 = (state_47170__$1[(2)]);
var statearr_47195_48723 = state_47170__$1;
(statearr_47195_48723[(5)] = ex47191);


if((ex47191 instanceof Object)){
var statearr_47198_48724 = state_47170__$1;
(statearr_47198_48724[(1)] = (11));

(statearr_47198_48724[(5)] = null);

} else {
throw ex47191;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (2))){
var inst_47123 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47124 = cnt;
var inst_47125 = (0);
var state_47170__$1 = (function (){var statearr_47200 = state_47170;
(statearr_47200[(7)] = inst_47125);

(statearr_47200[(11)] = inst_47123);

(statearr_47200[(8)] = inst_47124);

return statearr_47200;
})();
var statearr_47201_48727 = state_47170__$1;
(statearr_47201_48727[(2)] = null);

(statearr_47201_48727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (11))){
var inst_47134 = (state_47170[(2)]);
var inst_47136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47170__$1 = (function (){var statearr_47202 = state_47170;
(statearr_47202[(12)] = inst_47134);

return statearr_47202;
})();
var statearr_47203_48728 = state_47170__$1;
(statearr_47203_48728[(2)] = inst_47136);

(statearr_47203_48728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (9))){
var inst_47125 = (state_47170[(7)]);
var _ = (function (){var statearr_47204 = state_47170;
(statearr_47204[(4)] = cljs.core.cons((12),(state_47170[(4)])));

return statearr_47204;
})();
var inst_47142 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47125) : chs__$1.call(null,inst_47125));
var inst_47143 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47125) : done.call(null,inst_47125));
var inst_47144 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47142,inst_47143);
var ___$1 = (function (){var statearr_47205 = state_47170;
(statearr_47205[(4)] = cljs.core.rest((state_47170[(4)])));

return statearr_47205;
})();
var state_47170__$1 = state_47170;
var statearr_47206_48729 = state_47170__$1;
(statearr_47206_48729[(2)] = inst_47144);

(statearr_47206_48729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (5))){
var inst_47154 = (state_47170[(2)]);
var state_47170__$1 = (function (){var statearr_47207 = state_47170;
(statearr_47207[(13)] = inst_47154);

return statearr_47207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47170__$1,(13),dchan);
} else {
if((state_val_47171 === (14))){
var inst_47159 = cljs.core.async.close_BANG_(out);
var state_47170__$1 = state_47170;
var statearr_47208_48730 = state_47170__$1;
(statearr_47208_48730[(2)] = inst_47159);

(statearr_47208_48730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (16))){
var inst_47166 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
var statearr_47212_48733 = state_47170__$1;
(statearr_47212_48733[(2)] = inst_47166);

(statearr_47212_48733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (10))){
var inst_47125 = (state_47170[(7)]);
var inst_47147 = (state_47170[(2)]);
var inst_47148 = (inst_47125 + (1));
var inst_47125__$1 = inst_47148;
var state_47170__$1 = (function (){var statearr_47216 = state_47170;
(statearr_47216[(7)] = inst_47125__$1);

(statearr_47216[(14)] = inst_47147);

return statearr_47216;
})();
var statearr_47217_48745 = state_47170__$1;
(statearr_47217_48745[(2)] = null);

(statearr_47217_48745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47171 === (8))){
var inst_47152 = (state_47170[(2)]);
var state_47170__$1 = state_47170;
var statearr_47218_48753 = state_47170__$1;
(statearr_47218_48753[(2)] = inst_47152);

(statearr_47218_48753[(1)] = (5));


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
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47222[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47222[(1)] = (1));

return statearr_47222;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47170){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47170);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47223){var ex__45341__auto__ = e47223;
var statearr_47224_48771 = state_47170;
(statearr_47224_48771[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47170[(4)]))){
var statearr_47225_48776 = state_47170;
(statearr_47225_48776[(1)] = cljs.core.first((state_47170[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48781 = state_47170;
state_47170 = G__48781;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47226 = f__45548__auto__();
(statearr_47226[(6)] = c__45546__auto___48691);

return statearr_47226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47229 = arguments.length;
switch (G__47229) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___48801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47261){
var state_val_47262 = (state_47261[(1)]);
if((state_val_47262 === (7))){
var inst_47240 = (state_47261[(7)]);
var inst_47241 = (state_47261[(8)]);
var inst_47240__$1 = (state_47261[(2)]);
var inst_47241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47240__$1,(0),null);
var inst_47242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47240__$1,(1),null);
var inst_47243 = (inst_47241__$1 == null);
var state_47261__$1 = (function (){var statearr_47263 = state_47261;
(statearr_47263[(9)] = inst_47242);

(statearr_47263[(7)] = inst_47240__$1);

(statearr_47263[(8)] = inst_47241__$1);

return statearr_47263;
})();
if(cljs.core.truth_(inst_47243)){
var statearr_47264_48825 = state_47261__$1;
(statearr_47264_48825[(1)] = (8));

} else {
var statearr_47265_48826 = state_47261__$1;
(statearr_47265_48826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (1))){
var inst_47230 = cljs.core.vec(chs);
var inst_47231 = inst_47230;
var state_47261__$1 = (function (){var statearr_47266 = state_47261;
(statearr_47266[(10)] = inst_47231);

return statearr_47266;
})();
var statearr_47267_48835 = state_47261__$1;
(statearr_47267_48835[(2)] = null);

(statearr_47267_48835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (4))){
var inst_47231 = (state_47261[(10)]);
var state_47261__$1 = state_47261;
return cljs.core.async.ioc_alts_BANG_(state_47261__$1,(7),inst_47231);
} else {
if((state_val_47262 === (6))){
var inst_47257 = (state_47261[(2)]);
var state_47261__$1 = state_47261;
var statearr_47268_48836 = state_47261__$1;
(statearr_47268_48836[(2)] = inst_47257);

(statearr_47268_48836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (3))){
var inst_47259 = (state_47261[(2)]);
var state_47261__$1 = state_47261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47261__$1,inst_47259);
} else {
if((state_val_47262 === (2))){
var inst_47231 = (state_47261[(10)]);
var inst_47233 = cljs.core.count(inst_47231);
var inst_47234 = (inst_47233 > (0));
var state_47261__$1 = state_47261;
if(cljs.core.truth_(inst_47234)){
var statearr_47270_48837 = state_47261__$1;
(statearr_47270_48837[(1)] = (4));

} else {
var statearr_47271_48838 = state_47261__$1;
(statearr_47271_48838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (11))){
var inst_47231 = (state_47261[(10)]);
var inst_47250 = (state_47261[(2)]);
var tmp47269 = inst_47231;
var inst_47231__$1 = tmp47269;
var state_47261__$1 = (function (){var statearr_47272 = state_47261;
(statearr_47272[(10)] = inst_47231__$1);

(statearr_47272[(11)] = inst_47250);

return statearr_47272;
})();
var statearr_47273_48843 = state_47261__$1;
(statearr_47273_48843[(2)] = null);

(statearr_47273_48843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (9))){
var inst_47241 = (state_47261[(8)]);
var state_47261__$1 = state_47261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47261__$1,(11),out,inst_47241);
} else {
if((state_val_47262 === (5))){
var inst_47255 = cljs.core.async.close_BANG_(out);
var state_47261__$1 = state_47261;
var statearr_47274_48856 = state_47261__$1;
(statearr_47274_48856[(2)] = inst_47255);

(statearr_47274_48856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (10))){
var inst_47253 = (state_47261[(2)]);
var state_47261__$1 = state_47261;
var statearr_47275_48857 = state_47261__$1;
(statearr_47275_48857[(2)] = inst_47253);

(statearr_47275_48857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47262 === (8))){
var inst_47231 = (state_47261[(10)]);
var inst_47242 = (state_47261[(9)]);
var inst_47240 = (state_47261[(7)]);
var inst_47241 = (state_47261[(8)]);
var inst_47245 = (function (){var cs = inst_47231;
var vec__47236 = inst_47240;
var v = inst_47241;
var c = inst_47242;
return (function (p1__47227_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47227_SHARP_);
});
})();
var inst_47246 = cljs.core.filterv(inst_47245,inst_47231);
var inst_47231__$1 = inst_47246;
var state_47261__$1 = (function (){var statearr_47276 = state_47261;
(statearr_47276[(10)] = inst_47231__$1);

return statearr_47276;
})();
var statearr_47277_48860 = state_47261__$1;
(statearr_47277_48860[(2)] = null);

(statearr_47277_48860[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47278[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47278[(1)] = (1));

return statearr_47278;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47261){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47261);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47279){var ex__45341__auto__ = e47279;
var statearr_47280_48864 = state_47261;
(statearr_47280_48864[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47261[(4)]))){
var statearr_47281_48865 = state_47261;
(statearr_47281_48865[(1)] = cljs.core.first((state_47261[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48867 = state_47261;
state_47261 = G__48867;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47282 = f__45548__auto__();
(statearr_47282[(6)] = c__45546__auto___48801);

return statearr_47282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47284 = arguments.length;
switch (G__47284) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___48874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47308){
var state_val_47309 = (state_47308[(1)]);
if((state_val_47309 === (7))){
var inst_47290 = (state_47308[(7)]);
var inst_47290__$1 = (state_47308[(2)]);
var inst_47291 = (inst_47290__$1 == null);
var inst_47292 = cljs.core.not(inst_47291);
var state_47308__$1 = (function (){var statearr_47310 = state_47308;
(statearr_47310[(7)] = inst_47290__$1);

return statearr_47310;
})();
if(inst_47292){
var statearr_47311_48880 = state_47308__$1;
(statearr_47311_48880[(1)] = (8));

} else {
var statearr_47312_48882 = state_47308__$1;
(statearr_47312_48882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (1))){
var inst_47285 = (0);
var state_47308__$1 = (function (){var statearr_47313 = state_47308;
(statearr_47313[(8)] = inst_47285);

return statearr_47313;
})();
var statearr_47314_48888 = state_47308__$1;
(statearr_47314_48888[(2)] = null);

(statearr_47314_48888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (4))){
var state_47308__$1 = state_47308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47308__$1,(7),ch);
} else {
if((state_val_47309 === (6))){
var inst_47303 = (state_47308[(2)]);
var state_47308__$1 = state_47308;
var statearr_47315_48902 = state_47308__$1;
(statearr_47315_48902[(2)] = inst_47303);

(statearr_47315_48902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (3))){
var inst_47305 = (state_47308[(2)]);
var inst_47306 = cljs.core.async.close_BANG_(out);
var state_47308__$1 = (function (){var statearr_47316 = state_47308;
(statearr_47316[(9)] = inst_47305);

return statearr_47316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47308__$1,inst_47306);
} else {
if((state_val_47309 === (2))){
var inst_47285 = (state_47308[(8)]);
var inst_47287 = (inst_47285 < n);
var state_47308__$1 = state_47308;
if(cljs.core.truth_(inst_47287)){
var statearr_47317_48930 = state_47308__$1;
(statearr_47317_48930[(1)] = (4));

} else {
var statearr_47318_48931 = state_47308__$1;
(statearr_47318_48931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (11))){
var inst_47285 = (state_47308[(8)]);
var inst_47295 = (state_47308[(2)]);
var inst_47296 = (inst_47285 + (1));
var inst_47285__$1 = inst_47296;
var state_47308__$1 = (function (){var statearr_47319 = state_47308;
(statearr_47319[(10)] = inst_47295);

(statearr_47319[(8)] = inst_47285__$1);

return statearr_47319;
})();
var statearr_47320_48932 = state_47308__$1;
(statearr_47320_48932[(2)] = null);

(statearr_47320_48932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (9))){
var state_47308__$1 = state_47308;
var statearr_47321_48935 = state_47308__$1;
(statearr_47321_48935[(2)] = null);

(statearr_47321_48935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (5))){
var state_47308__$1 = state_47308;
var statearr_47322_48936 = state_47308__$1;
(statearr_47322_48936[(2)] = null);

(statearr_47322_48936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (10))){
var inst_47300 = (state_47308[(2)]);
var state_47308__$1 = state_47308;
var statearr_47323_48939 = state_47308__$1;
(statearr_47323_48939[(2)] = inst_47300);

(statearr_47323_48939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47309 === (8))){
var inst_47290 = (state_47308[(7)]);
var state_47308__$1 = state_47308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47308__$1,(11),out,inst_47290);
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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47324[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47324[(1)] = (1));

return statearr_47324;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47308){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47308);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47325){var ex__45341__auto__ = e47325;
var statearr_47326_48952 = state_47308;
(statearr_47326_48952[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47308[(4)]))){
var statearr_47327_48953 = state_47308;
(statearr_47327_48953[(1)] = cljs.core.first((state_47308[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48958 = state_47308;
state_47308 = G__48958;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47328 = f__45548__auto__();
(statearr_47328[(6)] = c__45546__auto___48874);

return statearr_47328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47330 = (function (f,ch,meta47331){
this.f = f;
this.ch = ch;
this.meta47331 = meta47331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47332,meta47331__$1){
var self__ = this;
var _47332__$1 = this;
return (new cljs.core.async.t_cljs$core$async47330(self__.f,self__.ch,meta47331__$1));
}));

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47332){
var self__ = this;
var _47332__$1 = this;
return self__.meta47331;
}));

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47336 = (function (f,ch,meta47331,_,fn1,meta47337){
this.f = f;
this.ch = ch;
this.meta47331 = meta47331;
this._ = _;
this.fn1 = fn1;
this.meta47337 = meta47337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47338,meta47337__$1){
var self__ = this;
var _47338__$1 = this;
return (new cljs.core.async.t_cljs$core$async47336(self__.f,self__.ch,self__.meta47331,self__._,self__.fn1,meta47337__$1));
}));

(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47338){
var self__ = this;
var _47338__$1 = this;
return self__.meta47337;
}));

(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47329_SHARP_){
var G__47340 = (((p1__47329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47329_SHARP_) : self__.f.call(null,p1__47329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47340) : f1.call(null,G__47340));
});
}));

(cljs.core.async.t_cljs$core$async47336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47331","meta47331",1399060365,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47330","cljs.core.async/t_cljs$core$async47330",898864337,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47337","meta47337",-1903026376,null)], null);
}));

(cljs.core.async.t_cljs$core$async47336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47336");

(cljs.core.async.t_cljs$core$async47336.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47336.
 */
cljs.core.async.__GT_t_cljs$core$async47336 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47336(f__$1,ch__$1,meta47331__$1,___$2,fn1__$1,meta47337){
return (new cljs.core.async.t_cljs$core$async47336(f__$1,ch__$1,meta47331__$1,___$2,fn1__$1,meta47337));
});

}

return (new cljs.core.async.t_cljs$core$async47336(self__.f,self__.ch,self__.meta47331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47341 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47341) : self__.f.call(null,G__47341));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47331","meta47331",1399060365,null)], null);
}));

(cljs.core.async.t_cljs$core$async47330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47330");

(cljs.core.async.t_cljs$core$async47330.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47330.
 */
cljs.core.async.__GT_t_cljs$core$async47330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47330(f__$1,ch__$1,meta47331){
return (new cljs.core.async.t_cljs$core$async47330(f__$1,ch__$1,meta47331));
});

}

return (new cljs.core.async.t_cljs$core$async47330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47342 = (function (f,ch,meta47343){
this.f = f;
this.ch = ch;
this.meta47343 = meta47343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47344,meta47343__$1){
var self__ = this;
var _47344__$1 = this;
return (new cljs.core.async.t_cljs$core$async47342(self__.f,self__.ch,meta47343__$1));
}));

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47344){
var self__ = this;
var _47344__$1 = this;
return self__.meta47343;
}));

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47343","meta47343",1324071718,null)], null);
}));

(cljs.core.async.t_cljs$core$async47342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47342");

(cljs.core.async.t_cljs$core$async47342.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47342.
 */
cljs.core.async.__GT_t_cljs$core$async47342 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47342(f__$1,ch__$1,meta47343){
return (new cljs.core.async.t_cljs$core$async47342(f__$1,ch__$1,meta47343));
});

}

return (new cljs.core.async.t_cljs$core$async47342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47348 = (function (p,ch,meta47349){
this.p = p;
this.ch = ch;
this.meta47349 = meta47349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47350,meta47349__$1){
var self__ = this;
var _47350__$1 = this;
return (new cljs.core.async.t_cljs$core$async47348(self__.p,self__.ch,meta47349__$1));
}));

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47350){
var self__ = this;
var _47350__$1 = this;
return self__.meta47349;
}));

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47349","meta47349",-2122712516,null)], null);
}));

(cljs.core.async.t_cljs$core$async47348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47348");

(cljs.core.async.t_cljs$core$async47348.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47348.
 */
cljs.core.async.__GT_t_cljs$core$async47348 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47348(p__$1,ch__$1,meta47349){
return (new cljs.core.async.t_cljs$core$async47348(p__$1,ch__$1,meta47349));
});

}

return (new cljs.core.async.t_cljs$core$async47348(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47356 = arguments.length;
switch (G__47356) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___48980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47378){
var state_val_47379 = (state_47378[(1)]);
if((state_val_47379 === (7))){
var inst_47374 = (state_47378[(2)]);
var state_47378__$1 = state_47378;
var statearr_47380_48982 = state_47378__$1;
(statearr_47380_48982[(2)] = inst_47374);

(statearr_47380_48982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (1))){
var state_47378__$1 = state_47378;
var statearr_47381_48983 = state_47378__$1;
(statearr_47381_48983[(2)] = null);

(statearr_47381_48983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (4))){
var inst_47360 = (state_47378[(7)]);
var inst_47360__$1 = (state_47378[(2)]);
var inst_47361 = (inst_47360__$1 == null);
var state_47378__$1 = (function (){var statearr_47382 = state_47378;
(statearr_47382[(7)] = inst_47360__$1);

return statearr_47382;
})();
if(cljs.core.truth_(inst_47361)){
var statearr_47383_48984 = state_47378__$1;
(statearr_47383_48984[(1)] = (5));

} else {
var statearr_47384_48985 = state_47378__$1;
(statearr_47384_48985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (6))){
var inst_47360 = (state_47378[(7)]);
var inst_47365 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47360) : p.call(null,inst_47360));
var state_47378__$1 = state_47378;
if(cljs.core.truth_(inst_47365)){
var statearr_47388_48986 = state_47378__$1;
(statearr_47388_48986[(1)] = (8));

} else {
var statearr_47389_48987 = state_47378__$1;
(statearr_47389_48987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (3))){
var inst_47376 = (state_47378[(2)]);
var state_47378__$1 = state_47378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47378__$1,inst_47376);
} else {
if((state_val_47379 === (2))){
var state_47378__$1 = state_47378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47378__$1,(4),ch);
} else {
if((state_val_47379 === (11))){
var inst_47368 = (state_47378[(2)]);
var state_47378__$1 = state_47378;
var statearr_47390_48988 = state_47378__$1;
(statearr_47390_48988[(2)] = inst_47368);

(statearr_47390_48988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (9))){
var state_47378__$1 = state_47378;
var statearr_47391_48990 = state_47378__$1;
(statearr_47391_48990[(2)] = null);

(statearr_47391_48990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (5))){
var inst_47363 = cljs.core.async.close_BANG_(out);
var state_47378__$1 = state_47378;
var statearr_47393_48992 = state_47378__$1;
(statearr_47393_48992[(2)] = inst_47363);

(statearr_47393_48992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (10))){
var inst_47371 = (state_47378[(2)]);
var state_47378__$1 = (function (){var statearr_47394 = state_47378;
(statearr_47394[(8)] = inst_47371);

return statearr_47394;
})();
var statearr_47395_48993 = state_47378__$1;
(statearr_47395_48993[(2)] = null);

(statearr_47395_48993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (8))){
var inst_47360 = (state_47378[(7)]);
var state_47378__$1 = state_47378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47378__$1,(11),out,inst_47360);
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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47396 = [null,null,null,null,null,null,null,null,null];
(statearr_47396[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47396[(1)] = (1));

return statearr_47396;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47378){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47378);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47398){var ex__45341__auto__ = e47398;
var statearr_47399_48997 = state_47378;
(statearr_47399_48997[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47378[(4)]))){
var statearr_47400_49002 = state_47378;
(statearr_47400_49002[(1)] = cljs.core.first((state_47378[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49004 = state_47378;
state_47378 = G__49004;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47401 = f__45548__auto__();
(statearr_47401[(6)] = c__45546__auto___48980);

return statearr_47401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47404 = arguments.length;
switch (G__47404) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45546__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47472){
var state_val_47473 = (state_47472[(1)]);
if((state_val_47473 === (7))){
var inst_47468 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47489_49012 = state_47472__$1;
(statearr_47489_49012[(2)] = inst_47468);

(statearr_47489_49012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (20))){
var inst_47437 = (state_47472[(7)]);
var inst_47449 = (state_47472[(2)]);
var inst_47450 = cljs.core.next(inst_47437);
var inst_47423 = inst_47450;
var inst_47424 = null;
var inst_47425 = (0);
var inst_47426 = (0);
var state_47472__$1 = (function (){var statearr_47497 = state_47472;
(statearr_47497[(8)] = inst_47425);

(statearr_47497[(9)] = inst_47449);

(statearr_47497[(10)] = inst_47424);

(statearr_47497[(11)] = inst_47423);

(statearr_47497[(12)] = inst_47426);

return statearr_47497;
})();
var statearr_47501_49015 = state_47472__$1;
(statearr_47501_49015[(2)] = null);

(statearr_47501_49015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (1))){
var state_47472__$1 = state_47472;
var statearr_47502_49016 = state_47472__$1;
(statearr_47502_49016[(2)] = null);

(statearr_47502_49016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (4))){
var inst_47412 = (state_47472[(13)]);
var inst_47412__$1 = (state_47472[(2)]);
var inst_47413 = (inst_47412__$1 == null);
var state_47472__$1 = (function (){var statearr_47507 = state_47472;
(statearr_47507[(13)] = inst_47412__$1);

return statearr_47507;
})();
if(cljs.core.truth_(inst_47413)){
var statearr_47512_49017 = state_47472__$1;
(statearr_47512_49017[(1)] = (5));

} else {
var statearr_47513_49018 = state_47472__$1;
(statearr_47513_49018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (15))){
var state_47472__$1 = state_47472;
var statearr_47522_49023 = state_47472__$1;
(statearr_47522_49023[(2)] = null);

(statearr_47522_49023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (21))){
var state_47472__$1 = state_47472;
var statearr_47526_49027 = state_47472__$1;
(statearr_47526_49027[(2)] = null);

(statearr_47526_49027[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (13))){
var inst_47425 = (state_47472[(8)]);
var inst_47424 = (state_47472[(10)]);
var inst_47423 = (state_47472[(11)]);
var inst_47426 = (state_47472[(12)]);
var inst_47433 = (state_47472[(2)]);
var inst_47434 = (inst_47426 + (1));
var tmp47515 = inst_47425;
var tmp47516 = inst_47424;
var tmp47517 = inst_47423;
var inst_47423__$1 = tmp47517;
var inst_47424__$1 = tmp47516;
var inst_47425__$1 = tmp47515;
var inst_47426__$1 = inst_47434;
var state_47472__$1 = (function (){var statearr_47538 = state_47472;
(statearr_47538[(8)] = inst_47425__$1);

(statearr_47538[(14)] = inst_47433);

(statearr_47538[(10)] = inst_47424__$1);

(statearr_47538[(11)] = inst_47423__$1);

(statearr_47538[(12)] = inst_47426__$1);

return statearr_47538;
})();
var statearr_47539_49042 = state_47472__$1;
(statearr_47539_49042[(2)] = null);

(statearr_47539_49042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (22))){
var state_47472__$1 = state_47472;
var statearr_47540_49046 = state_47472__$1;
(statearr_47540_49046[(2)] = null);

(statearr_47540_49046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (6))){
var inst_47412 = (state_47472[(13)]);
var inst_47421 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47412) : f.call(null,inst_47412));
var inst_47422 = cljs.core.seq(inst_47421);
var inst_47423 = inst_47422;
var inst_47424 = null;
var inst_47425 = (0);
var inst_47426 = (0);
var state_47472__$1 = (function (){var statearr_47542 = state_47472;
(statearr_47542[(8)] = inst_47425);

(statearr_47542[(10)] = inst_47424);

(statearr_47542[(11)] = inst_47423);

(statearr_47542[(12)] = inst_47426);

return statearr_47542;
})();
var statearr_47543_49051 = state_47472__$1;
(statearr_47543_49051[(2)] = null);

(statearr_47543_49051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (17))){
var inst_47437 = (state_47472[(7)]);
var inst_47441 = cljs.core.chunk_first(inst_47437);
var inst_47443 = cljs.core.chunk_rest(inst_47437);
var inst_47444 = cljs.core.count(inst_47441);
var inst_47423 = inst_47443;
var inst_47424 = inst_47441;
var inst_47425 = inst_47444;
var inst_47426 = (0);
var state_47472__$1 = (function (){var statearr_47544 = state_47472;
(statearr_47544[(8)] = inst_47425);

(statearr_47544[(10)] = inst_47424);

(statearr_47544[(11)] = inst_47423);

(statearr_47544[(12)] = inst_47426);

return statearr_47544;
})();
var statearr_47545_49063 = state_47472__$1;
(statearr_47545_49063[(2)] = null);

(statearr_47545_49063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (3))){
var inst_47470 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47472__$1,inst_47470);
} else {
if((state_val_47473 === (12))){
var inst_47458 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47549_49074 = state_47472__$1;
(statearr_47549_49074[(2)] = inst_47458);

(statearr_47549_49074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (2))){
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47472__$1,(4),in$);
} else {
if((state_val_47473 === (23))){
var inst_47466 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47551_49083 = state_47472__$1;
(statearr_47551_49083[(2)] = inst_47466);

(statearr_47551_49083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (19))){
var inst_47453 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47552_49092 = state_47472__$1;
(statearr_47552_49092[(2)] = inst_47453);

(statearr_47552_49092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (11))){
var inst_47437 = (state_47472[(7)]);
var inst_47423 = (state_47472[(11)]);
var inst_47437__$1 = cljs.core.seq(inst_47423);
var state_47472__$1 = (function (){var statearr_47553 = state_47472;
(statearr_47553[(7)] = inst_47437__$1);

return statearr_47553;
})();
if(inst_47437__$1){
var statearr_47554_49103 = state_47472__$1;
(statearr_47554_49103[(1)] = (14));

} else {
var statearr_47555_49105 = state_47472__$1;
(statearr_47555_49105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (9))){
var inst_47460 = (state_47472[(2)]);
var inst_47461 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47472__$1 = (function (){var statearr_47556 = state_47472;
(statearr_47556[(15)] = inst_47460);

return statearr_47556;
})();
if(cljs.core.truth_(inst_47461)){
var statearr_47557_49113 = state_47472__$1;
(statearr_47557_49113[(1)] = (21));

} else {
var statearr_47558_49114 = state_47472__$1;
(statearr_47558_49114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (5))){
var inst_47415 = cljs.core.async.close_BANG_(out);
var state_47472__$1 = state_47472;
var statearr_47559_49120 = state_47472__$1;
(statearr_47559_49120[(2)] = inst_47415);

(statearr_47559_49120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (14))){
var inst_47437 = (state_47472[(7)]);
var inst_47439 = cljs.core.chunked_seq_QMARK_(inst_47437);
var state_47472__$1 = state_47472;
if(inst_47439){
var statearr_47563_49130 = state_47472__$1;
(statearr_47563_49130[(1)] = (17));

} else {
var statearr_47564_49131 = state_47472__$1;
(statearr_47564_49131[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (16))){
var inst_47456 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47565_49139 = state_47472__$1;
(statearr_47565_49139[(2)] = inst_47456);

(statearr_47565_49139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (10))){
var inst_47424 = (state_47472[(10)]);
var inst_47426 = (state_47472[(12)]);
var inst_47431 = cljs.core._nth(inst_47424,inst_47426);
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47472__$1,(13),out,inst_47431);
} else {
if((state_val_47473 === (18))){
var inst_47437 = (state_47472[(7)]);
var inst_47447 = cljs.core.first(inst_47437);
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47472__$1,(20),out,inst_47447);
} else {
if((state_val_47473 === (8))){
var inst_47425 = (state_47472[(8)]);
var inst_47426 = (state_47472[(12)]);
var inst_47428 = (inst_47426 < inst_47425);
var inst_47429 = inst_47428;
var state_47472__$1 = state_47472;
if(cljs.core.truth_(inst_47429)){
var statearr_47571_49157 = state_47472__$1;
(statearr_47571_49157[(1)] = (10));

} else {
var statearr_47572_49158 = state_47472__$1;
(statearr_47572_49158[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____0 = (function (){
var statearr_47574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__);

(statearr_47574[(1)] = (1));

return statearr_47574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____1 = (function (state_47472){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47472);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47577){var ex__45341__auto__ = e47577;
var statearr_47578_49159 = state_47472;
(statearr_47578_49159[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47472[(4)]))){
var statearr_47580_49162 = state_47472;
(statearr_47580_49162[(1)] = cljs.core.first((state_47472[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49164 = state_47472;
state_47472 = G__49164;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__ = function(state_47472){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____1.call(this,state_47472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45338__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47587 = f__45548__auto__();
(statearr_47587[(6)] = c__45546__auto__);

return statearr_47587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));

return c__45546__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47591 = arguments.length;
switch (G__47591) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47596 = arguments.length;
switch (G__47596) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47602 = arguments.length;
switch (G__47602) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___49183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47630){
var state_val_47631 = (state_47630[(1)]);
if((state_val_47631 === (7))){
var inst_47624 = (state_47630[(2)]);
var state_47630__$1 = state_47630;
var statearr_47632_49186 = state_47630__$1;
(statearr_47632_49186[(2)] = inst_47624);

(statearr_47632_49186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (1))){
var inst_47606 = null;
var state_47630__$1 = (function (){var statearr_47634 = state_47630;
(statearr_47634[(7)] = inst_47606);

return statearr_47634;
})();
var statearr_47635_49191 = state_47630__$1;
(statearr_47635_49191[(2)] = null);

(statearr_47635_49191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (4))){
var inst_47609 = (state_47630[(8)]);
var inst_47609__$1 = (state_47630[(2)]);
var inst_47610 = (inst_47609__$1 == null);
var inst_47611 = cljs.core.not(inst_47610);
var state_47630__$1 = (function (){var statearr_47636 = state_47630;
(statearr_47636[(8)] = inst_47609__$1);

return statearr_47636;
})();
if(inst_47611){
var statearr_47639_49192 = state_47630__$1;
(statearr_47639_49192[(1)] = (5));

} else {
var statearr_47640_49193 = state_47630__$1;
(statearr_47640_49193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (6))){
var state_47630__$1 = state_47630;
var statearr_47641_49194 = state_47630__$1;
(statearr_47641_49194[(2)] = null);

(statearr_47641_49194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (3))){
var inst_47626 = (state_47630[(2)]);
var inst_47627 = cljs.core.async.close_BANG_(out);
var state_47630__$1 = (function (){var statearr_47644 = state_47630;
(statearr_47644[(9)] = inst_47626);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47630__$1,inst_47627);
} else {
if((state_val_47631 === (2))){
var state_47630__$1 = state_47630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47630__$1,(4),ch);
} else {
if((state_val_47631 === (11))){
var inst_47609 = (state_47630[(8)]);
var inst_47618 = (state_47630[(2)]);
var inst_47606 = inst_47609;
var state_47630__$1 = (function (){var statearr_47646 = state_47630;
(statearr_47646[(7)] = inst_47606);

(statearr_47646[(10)] = inst_47618);

return statearr_47646;
})();
var statearr_47647_49195 = state_47630__$1;
(statearr_47647_49195[(2)] = null);

(statearr_47647_49195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (9))){
var inst_47609 = (state_47630[(8)]);
var state_47630__$1 = state_47630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47630__$1,(11),out,inst_47609);
} else {
if((state_val_47631 === (5))){
var inst_47609 = (state_47630[(8)]);
var inst_47606 = (state_47630[(7)]);
var inst_47613 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47609,inst_47606);
var state_47630__$1 = state_47630;
if(inst_47613){
var statearr_47650_49196 = state_47630__$1;
(statearr_47650_49196[(1)] = (8));

} else {
var statearr_47651_49197 = state_47630__$1;
(statearr_47651_49197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (10))){
var inst_47621 = (state_47630[(2)]);
var state_47630__$1 = state_47630;
var statearr_47653_49198 = state_47630__$1;
(statearr_47653_49198[(2)] = inst_47621);

(statearr_47653_49198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47631 === (8))){
var inst_47606 = (state_47630[(7)]);
var tmp47649 = inst_47606;
var inst_47606__$1 = tmp47649;
var state_47630__$1 = (function (){var statearr_47654 = state_47630;
(statearr_47654[(7)] = inst_47606__$1);

return statearr_47654;
})();
var statearr_47656_49199 = state_47630__$1;
(statearr_47656_49199[(2)] = null);

(statearr_47656_49199[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47658[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47658[(1)] = (1));

return statearr_47658;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47630){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47630);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47660){var ex__45341__auto__ = e47660;
var statearr_47661_49200 = state_47630;
(statearr_47661_49200[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47630[(4)]))){
var statearr_47663_49201 = state_47630;
(statearr_47663_49201[(1)] = cljs.core.first((state_47630[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49202 = state_47630;
state_47630 = G__49202;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47664 = f__45548__auto__();
(statearr_47664[(6)] = c__45546__auto___49183);

return statearr_47664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47666 = arguments.length;
switch (G__47666) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___49206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47710){
var state_val_47711 = (state_47710[(1)]);
if((state_val_47711 === (7))){
var inst_47706 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47713_49207 = state_47710__$1;
(statearr_47713_49207[(2)] = inst_47706);

(statearr_47713_49207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (1))){
var inst_47672 = (new Array(n));
var inst_47673 = inst_47672;
var inst_47674 = (0);
var state_47710__$1 = (function (){var statearr_47715 = state_47710;
(statearr_47715[(7)] = inst_47674);

(statearr_47715[(8)] = inst_47673);

return statearr_47715;
})();
var statearr_47717_49208 = state_47710__$1;
(statearr_47717_49208[(2)] = null);

(statearr_47717_49208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (4))){
var inst_47677 = (state_47710[(9)]);
var inst_47677__$1 = (state_47710[(2)]);
var inst_47678 = (inst_47677__$1 == null);
var inst_47679 = cljs.core.not(inst_47678);
var state_47710__$1 = (function (){var statearr_47718 = state_47710;
(statearr_47718[(9)] = inst_47677__$1);

return statearr_47718;
})();
if(inst_47679){
var statearr_47719_49209 = state_47710__$1;
(statearr_47719_49209[(1)] = (5));

} else {
var statearr_47720_49210 = state_47710__$1;
(statearr_47720_49210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (15))){
var inst_47700 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47721_49211 = state_47710__$1;
(statearr_47721_49211[(2)] = inst_47700);

(statearr_47721_49211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (13))){
var state_47710__$1 = state_47710;
var statearr_47722_49212 = state_47710__$1;
(statearr_47722_49212[(2)] = null);

(statearr_47722_49212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (6))){
var inst_47674 = (state_47710[(7)]);
var inst_47696 = (inst_47674 > (0));
var state_47710__$1 = state_47710;
if(cljs.core.truth_(inst_47696)){
var statearr_47723_49213 = state_47710__$1;
(statearr_47723_49213[(1)] = (12));

} else {
var statearr_47724_49214 = state_47710__$1;
(statearr_47724_49214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (3))){
var inst_47708 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47710__$1,inst_47708);
} else {
if((state_val_47711 === (12))){
var inst_47673 = (state_47710[(8)]);
var inst_47698 = cljs.core.vec(inst_47673);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47710__$1,(15),out,inst_47698);
} else {
if((state_val_47711 === (2))){
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47710__$1,(4),ch);
} else {
if((state_val_47711 === (11))){
var inst_47690 = (state_47710[(2)]);
var inst_47691 = (new Array(n));
var inst_47673 = inst_47691;
var inst_47674 = (0);
var state_47710__$1 = (function (){var statearr_47726 = state_47710;
(statearr_47726[(7)] = inst_47674);

(statearr_47726[(10)] = inst_47690);

(statearr_47726[(8)] = inst_47673);

return statearr_47726;
})();
var statearr_47727_49217 = state_47710__$1;
(statearr_47727_49217[(2)] = null);

(statearr_47727_49217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (9))){
var inst_47673 = (state_47710[(8)]);
var inst_47688 = cljs.core.vec(inst_47673);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47710__$1,(11),out,inst_47688);
} else {
if((state_val_47711 === (5))){
var inst_47674 = (state_47710[(7)]);
var inst_47682 = (state_47710[(11)]);
var inst_47673 = (state_47710[(8)]);
var inst_47677 = (state_47710[(9)]);
var inst_47681 = (inst_47673[inst_47674] = inst_47677);
var inst_47682__$1 = (inst_47674 + (1));
var inst_47684 = (inst_47682__$1 < n);
var state_47710__$1 = (function (){var statearr_47731 = state_47710;
(statearr_47731[(11)] = inst_47682__$1);

(statearr_47731[(12)] = inst_47681);

return statearr_47731;
})();
if(cljs.core.truth_(inst_47684)){
var statearr_47732_49219 = state_47710__$1;
(statearr_47732_49219[(1)] = (8));

} else {
var statearr_47733_49220 = state_47710__$1;
(statearr_47733_49220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (14))){
var inst_47703 = (state_47710[(2)]);
var inst_47704 = cljs.core.async.close_BANG_(out);
var state_47710__$1 = (function (){var statearr_47737 = state_47710;
(statearr_47737[(13)] = inst_47703);

return statearr_47737;
})();
var statearr_47738_49221 = state_47710__$1;
(statearr_47738_49221[(2)] = inst_47704);

(statearr_47738_49221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (10))){
var inst_47694 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47739_49222 = state_47710__$1;
(statearr_47739_49222[(2)] = inst_47694);

(statearr_47739_49222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (8))){
var inst_47682 = (state_47710[(11)]);
var inst_47673 = (state_47710[(8)]);
var tmp47735 = inst_47673;
var inst_47673__$1 = tmp47735;
var inst_47674 = inst_47682;
var state_47710__$1 = (function (){var statearr_47742 = state_47710;
(statearr_47742[(7)] = inst_47674);

(statearr_47742[(8)] = inst_47673__$1);

return statearr_47742;
})();
var statearr_47743_49226 = state_47710__$1;
(statearr_47743_49226[(2)] = null);

(statearr_47743_49226[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47744[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47744[(1)] = (1));

return statearr_47744;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47710){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47710);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47747){var ex__45341__auto__ = e47747;
var statearr_47748_49227 = state_47710;
(statearr_47748_49227[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47710[(4)]))){
var statearr_47749_49228 = state_47710;
(statearr_47749_49228[(1)] = cljs.core.first((state_47710[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49229 = state_47710;
state_47710 = G__49229;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47750 = f__45548__auto__();
(statearr_47750[(6)] = c__45546__auto___49206);

return statearr_47750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47753 = arguments.length;
switch (G__47753) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45546__auto___49232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45548__auto__ = (function (){var switch__45337__auto__ = (function (state_47799){
var state_val_47800 = (state_47799[(1)]);
if((state_val_47800 === (7))){
var inst_47795 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
var statearr_47803_49240 = state_47799__$1;
(statearr_47803_49240[(2)] = inst_47795);

(statearr_47803_49240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (1))){
var inst_47757 = [];
var inst_47758 = inst_47757;
var inst_47759 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47799__$1 = (function (){var statearr_47806 = state_47799;
(statearr_47806[(7)] = inst_47758);

(statearr_47806[(8)] = inst_47759);

return statearr_47806;
})();
var statearr_47807_49241 = state_47799__$1;
(statearr_47807_49241[(2)] = null);

(statearr_47807_49241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (4))){
var inst_47762 = (state_47799[(9)]);
var inst_47762__$1 = (state_47799[(2)]);
var inst_47763 = (inst_47762__$1 == null);
var inst_47764 = cljs.core.not(inst_47763);
var state_47799__$1 = (function (){var statearr_47808 = state_47799;
(statearr_47808[(9)] = inst_47762__$1);

return statearr_47808;
})();
if(inst_47764){
var statearr_47809_49245 = state_47799__$1;
(statearr_47809_49245[(1)] = (5));

} else {
var statearr_47810_49246 = state_47799__$1;
(statearr_47810_49246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (15))){
var inst_47789 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
var statearr_47813_49250 = state_47799__$1;
(statearr_47813_49250[(2)] = inst_47789);

(statearr_47813_49250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (13))){
var state_47799__$1 = state_47799;
var statearr_47817_49251 = state_47799__$1;
(statearr_47817_49251[(2)] = null);

(statearr_47817_49251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (6))){
var inst_47758 = (state_47799[(7)]);
var inst_47784 = inst_47758.length;
var inst_47785 = (inst_47784 > (0));
var state_47799__$1 = state_47799;
if(cljs.core.truth_(inst_47785)){
var statearr_47819_49252 = state_47799__$1;
(statearr_47819_49252[(1)] = (12));

} else {
var statearr_47820_49256 = state_47799__$1;
(statearr_47820_49256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (3))){
var inst_47797 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47799__$1,inst_47797);
} else {
if((state_val_47800 === (12))){
var inst_47758 = (state_47799[(7)]);
var inst_47787 = cljs.core.vec(inst_47758);
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47799__$1,(15),out,inst_47787);
} else {
if((state_val_47800 === (2))){
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47799__$1,(4),ch);
} else {
if((state_val_47800 === (11))){
var inst_47766 = (state_47799[(10)]);
var inst_47762 = (state_47799[(9)]);
var inst_47776 = (state_47799[(2)]);
var inst_47777 = [];
var inst_47778 = inst_47777.push(inst_47762);
var inst_47758 = inst_47777;
var inst_47759 = inst_47766;
var state_47799__$1 = (function (){var statearr_47822 = state_47799;
(statearr_47822[(7)] = inst_47758);

(statearr_47822[(8)] = inst_47759);

(statearr_47822[(11)] = inst_47776);

(statearr_47822[(12)] = inst_47778);

return statearr_47822;
})();
var statearr_47823_49259 = state_47799__$1;
(statearr_47823_49259[(2)] = null);

(statearr_47823_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (9))){
var inst_47758 = (state_47799[(7)]);
var inst_47774 = cljs.core.vec(inst_47758);
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47799__$1,(11),out,inst_47774);
} else {
if((state_val_47800 === (5))){
var inst_47766 = (state_47799[(10)]);
var inst_47759 = (state_47799[(8)]);
var inst_47762 = (state_47799[(9)]);
var inst_47766__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47762) : f.call(null,inst_47762));
var inst_47767 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47766__$1,inst_47759);
var inst_47768 = cljs.core.keyword_identical_QMARK_(inst_47759,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47769 = ((inst_47767) || (inst_47768));
var state_47799__$1 = (function (){var statearr_47825 = state_47799;
(statearr_47825[(10)] = inst_47766__$1);

return statearr_47825;
})();
if(cljs.core.truth_(inst_47769)){
var statearr_47826_49262 = state_47799__$1;
(statearr_47826_49262[(1)] = (8));

} else {
var statearr_47827_49263 = state_47799__$1;
(statearr_47827_49263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (14))){
var inst_47792 = (state_47799[(2)]);
var inst_47793 = cljs.core.async.close_BANG_(out);
var state_47799__$1 = (function (){var statearr_47830 = state_47799;
(statearr_47830[(13)] = inst_47792);

return statearr_47830;
})();
var statearr_47831_49264 = state_47799__$1;
(statearr_47831_49264[(2)] = inst_47793);

(statearr_47831_49264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (10))){
var inst_47782 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
var statearr_47832_49265 = state_47799__$1;
(statearr_47832_49265[(2)] = inst_47782);

(statearr_47832_49265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (8))){
var inst_47766 = (state_47799[(10)]);
var inst_47758 = (state_47799[(7)]);
var inst_47762 = (state_47799[(9)]);
var inst_47771 = inst_47758.push(inst_47762);
var tmp47828 = inst_47758;
var inst_47758__$1 = tmp47828;
var inst_47759 = inst_47766;
var state_47799__$1 = (function (){var statearr_47833 = state_47799;
(statearr_47833[(7)] = inst_47758__$1);

(statearr_47833[(8)] = inst_47759);

(statearr_47833[(14)] = inst_47771);

return statearr_47833;
})();
var statearr_47835_49266 = state_47799__$1;
(statearr_47835_49266[(2)] = null);

(statearr_47835_49266[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45338__auto__ = null;
var cljs$core$async$state_machine__45338__auto____0 = (function (){
var statearr_47837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47837[(0)] = cljs$core$async$state_machine__45338__auto__);

(statearr_47837[(1)] = (1));

return statearr_47837;
});
var cljs$core$async$state_machine__45338__auto____1 = (function (state_47799){
while(true){
var ret_value__45339__auto__ = (function (){try{while(true){
var result__45340__auto__ = switch__45337__auto__(state_47799);
if(cljs.core.keyword_identical_QMARK_(result__45340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45340__auto__;
}
break;
}
}catch (e47838){var ex__45341__auto__ = e47838;
var statearr_47840_49267 = state_47799;
(statearr_47840_49267[(2)] = ex__45341__auto__);


if(cljs.core.seq((state_47799[(4)]))){
var statearr_47841_49272 = state_47799;
(statearr_47841_49272[(1)] = cljs.core.first((state_47799[(4)])));

} else {
throw ex__45341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49273 = state_47799;
state_47799 = G__49273;
continue;
} else {
return ret_value__45339__auto__;
}
break;
}
});
cljs$core$async$state_machine__45338__auto__ = function(state_47799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45338__auto____1.call(this,state_47799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45338__auto____0;
cljs$core$async$state_machine__45338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45338__auto____1;
return cljs$core$async$state_machine__45338__auto__;
})()
})();
var state__45549__auto__ = (function (){var statearr_47842 = f__45548__auto__();
(statearr_47842[(6)] = c__45546__auto___49232);

return statearr_47842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45549__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
