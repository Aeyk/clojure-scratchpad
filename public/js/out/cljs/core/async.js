// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35295 = arguments.length;
switch (G__35295) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35296 = (function (f,blockable,meta35297){
this.f = f;
this.blockable = blockable;
this.meta35297 = meta35297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35298,meta35297__$1){
var self__ = this;
var _35298__$1 = this;
return (new cljs.core.async.t_cljs$core$async35296(self__.f,self__.blockable,meta35297__$1));
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35298){
var self__ = this;
var _35298__$1 = this;
return self__.meta35297;
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35297","meta35297",-1617476572,null)], null);
}));

(cljs.core.async.t_cljs$core$async35296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35296");

(cljs.core.async.t_cljs$core$async35296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35296.
 */
cljs.core.async.__GT_t_cljs$core$async35296 = (function cljs$core$async$__GT_t_cljs$core$async35296(f__$1,blockable__$1,meta35297){
return (new cljs.core.async.t_cljs$core$async35296(f__$1,blockable__$1,meta35297));
});

}

return (new cljs.core.async.t_cljs$core$async35296(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__35302 = arguments.length;
switch (G__35302) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__35305 = arguments.length;
switch (G__35305) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__35308 = arguments.length;
switch (G__35308) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35310 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35310);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_35310);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35312 = arguments.length;
switch (G__35312) {
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
var temp__5741__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5741__auto__)){
var ret = temp__5741__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5741__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5741__auto__)){
var retb = temp__5741__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35314 = n;
var x_35315 = (0);
while(true){
if((x_35315 < n__4613__auto___35314)){
(a[x_35315] = (0));

var G__35316 = (x_35315 + (1));
x_35315 = G__35316;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35317 = (i + (1));
i = G__35317;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35318 = (function (flag,meta35319){
this.flag = flag;
this.meta35319 = meta35319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35320,meta35319__$1){
var self__ = this;
var _35320__$1 = this;
return (new cljs.core.async.t_cljs$core$async35318(self__.flag,meta35319__$1));
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35320){
var self__ = this;
var _35320__$1 = this;
return self__.meta35319;
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35319","meta35319",-1068105565,null)], null);
}));

(cljs.core.async.t_cljs$core$async35318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35318");

(cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35318.
 */
cljs.core.async.__GT_t_cljs$core$async35318 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35318(flag__$1,meta35319){
return (new cljs.core.async.t_cljs$core$async35318(flag__$1,meta35319));
});

}

return (new cljs.core.async.t_cljs$core$async35318(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35321 = (function (flag,cb,meta35322){
this.flag = flag;
this.cb = cb;
this.meta35322 = meta35322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35323,meta35322__$1){
var self__ = this;
var _35323__$1 = this;
return (new cljs.core.async.t_cljs$core$async35321(self__.flag,self__.cb,meta35322__$1));
}));

(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35323){
var self__ = this;
var _35323__$1 = this;
return self__.meta35322;
}));

(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35322","meta35322",-363865418,null)], null);
}));

(cljs.core.async.t_cljs$core$async35321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35321");

(cljs.core.async.t_cljs$core$async35321.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35321.
 */
cljs.core.async.__GT_t_cljs$core$async35321 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35321(flag__$1,cb__$1,meta35322){
return (new cljs.core.async.t_cljs$core$async35321(flag__$1,cb__$1,meta35322));
});

}

return (new cljs.core.async.t_cljs$core$async35321(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35324_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35324_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35325_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35325_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35326 = (i + (1));
i = G__35326;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5743__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5743__auto__)){
var got = temp__5743__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___35332 = arguments.length;
var i__4737__auto___35333 = (0);
while(true){
if((i__4737__auto___35333 < len__4736__auto___35332)){
args__4742__auto__.push((arguments[i__4737__auto___35333]));

var G__35334 = (i__4737__auto___35333 + (1));
i__4737__auto___35333 = G__35334;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35329){
var map__35330 = p__35329;
var map__35330__$1 = (((((!((map__35330 == null))))?(((((map__35330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35330):map__35330);
var opts = map__35330__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35327){
var G__35328 = cljs.core.first.call(null,seq35327);
var seq35327__$1 = cljs.core.next.call(null,seq35327);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35328,seq35327__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__35336 = arguments.length;
switch (G__35336) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35235__auto___35382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35360){
var state_val_35361 = (state_35360[(1)]);
if((state_val_35361 === (7))){
var inst_35356 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35362_35383 = state_35360__$1;
(statearr_35362_35383[(2)] = inst_35356);

(statearr_35362_35383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (1))){
var state_35360__$1 = state_35360;
var statearr_35363_35384 = state_35360__$1;
(statearr_35363_35384[(2)] = null);

(statearr_35363_35384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (4))){
var inst_35339 = (state_35360[(7)]);
var inst_35339__$1 = (state_35360[(2)]);
var inst_35340 = (inst_35339__$1 == null);
var state_35360__$1 = (function (){var statearr_35364 = state_35360;
(statearr_35364[(7)] = inst_35339__$1);

return statearr_35364;
})();
if(cljs.core.truth_(inst_35340)){
var statearr_35365_35385 = state_35360__$1;
(statearr_35365_35385[(1)] = (5));

} else {
var statearr_35366_35386 = state_35360__$1;
(statearr_35366_35386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (13))){
var state_35360__$1 = state_35360;
var statearr_35367_35387 = state_35360__$1;
(statearr_35367_35387[(2)] = null);

(statearr_35367_35387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (6))){
var inst_35339 = (state_35360[(7)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35360__$1,(11),to,inst_35339);
} else {
if((state_val_35361 === (3))){
var inst_35358 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35360__$1,inst_35358);
} else {
if((state_val_35361 === (12))){
var state_35360__$1 = state_35360;
var statearr_35368_35388 = state_35360__$1;
(statearr_35368_35388[(2)] = null);

(statearr_35368_35388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (2))){
var state_35360__$1 = state_35360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35360__$1,(4),from);
} else {
if((state_val_35361 === (11))){
var inst_35349 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
if(cljs.core.truth_(inst_35349)){
var statearr_35369_35389 = state_35360__$1;
(statearr_35369_35389[(1)] = (12));

} else {
var statearr_35370_35390 = state_35360__$1;
(statearr_35370_35390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (9))){
var state_35360__$1 = state_35360;
var statearr_35371_35391 = state_35360__$1;
(statearr_35371_35391[(2)] = null);

(statearr_35371_35391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (5))){
var state_35360__$1 = state_35360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35372_35392 = state_35360__$1;
(statearr_35372_35392[(1)] = (8));

} else {
var statearr_35373_35393 = state_35360__$1;
(statearr_35373_35393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (14))){
var inst_35354 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35374_35394 = state_35360__$1;
(statearr_35374_35394[(2)] = inst_35354);

(statearr_35374_35394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (10))){
var inst_35346 = (state_35360[(2)]);
var state_35360__$1 = state_35360;
var statearr_35375_35395 = state_35360__$1;
(statearr_35375_35395[(2)] = inst_35346);

(statearr_35375_35395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35361 === (8))){
var inst_35343 = cljs.core.async.close_BANG_.call(null,to);
var state_35360__$1 = state_35360;
var statearr_35376_35396 = state_35360__$1;
(statearr_35376_35396[(2)] = inst_35343);

(statearr_35376_35396[(1)] = (10));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_35377 = [null,null,null,null,null,null,null,null];
(statearr_35377[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_35377[(1)] = (1));

return statearr_35377;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_35360){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35378){if((e35378 instanceof Object)){
var ex__35144__auto__ = e35378;
var statearr_35379_35397 = state_35360;
(statearr_35379_35397[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35398 = state_35360;
state_35360 = G__35398;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_35360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_35360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35380 = f__35236__auto__.call(null);
(statearr_35380[(6)] = c__35235__auto___35382);

return statearr_35380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__35399){
var vec__35400 = p__35399;
var v = cljs.core.nth.call(null,vec__35400,(0),null);
var p = cljs.core.nth.call(null,vec__35400,(1),null);
var job = vec__35400;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35235__auto___35571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35407){
var state_val_35408 = (state_35407[(1)]);
if((state_val_35408 === (1))){
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35407__$1,(2),res,v);
} else {
if((state_val_35408 === (2))){
var inst_35404 = (state_35407[(2)]);
var inst_35405 = cljs.core.async.close_BANG_.call(null,res);
var state_35407__$1 = (function (){var statearr_35409 = state_35407;
(statearr_35409[(7)] = inst_35404);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35407__$1,inst_35405);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_35410 = [null,null,null,null,null,null,null,null];
(statearr_35410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__);

(statearr_35410[(1)] = (1));

return statearr_35410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1 = (function (state_35407){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35411){if((e35411 instanceof Object)){
var ex__35144__auto__ = e35411;
var statearr_35412_35572 = state_35407;
(statearr_35412_35572[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35573 = state_35407;
state_35407 = G__35573;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = function(state_35407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1.call(this,state_35407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35413 = f__35236__auto__.call(null);
(statearr_35413[(6)] = c__35235__auto___35571);

return statearr_35413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__35414){
var vec__35415 = p__35414;
var v = cljs.core.nth.call(null,vec__35415,(0),null);
var p = cljs.core.nth.call(null,vec__35415,(1),null);
var job = vec__35415;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___35574 = n;
var __35575 = (0);
while(true){
if((__35575 < n__4613__auto___35574)){
var G__35418_35576 = type;
var G__35418_35577__$1 = (((G__35418_35576 instanceof cljs.core.Keyword))?G__35418_35576.fqn:null);
switch (G__35418_35577__$1) {
case "compute":
var c__35235__auto___35579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35575,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = ((function (__35575,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (1))){
var state_35431__$1 = state_35431;
var statearr_35433_35580 = state_35431__$1;
(statearr_35433_35580[(2)] = null);

(statearr_35433_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (2))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(4),jobs);
} else {
if((state_val_35432 === (3))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (4))){
var inst_35421 = (state_35431[(2)]);
var inst_35422 = process.call(null,inst_35421);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35422)){
var statearr_35434_35581 = state_35431__$1;
(statearr_35434_35581[(1)] = (5));

} else {
var statearr_35435_35582 = state_35431__$1;
(statearr_35435_35582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (5))){
var state_35431__$1 = state_35431;
var statearr_35436_35583 = state_35431__$1;
(statearr_35436_35583[(2)] = null);

(statearr_35436_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var state_35431__$1 = state_35431;
var statearr_35437_35584 = state_35431__$1;
(statearr_35437_35584[(2)] = null);

(statearr_35437_35584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (7))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35438_35585 = state_35431__$1;
(statearr_35438_35585[(2)] = inst_35427);

(statearr_35438_35585[(1)] = (3));


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
});})(__35575,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
;
return ((function (__35575,switch__35140__auto__,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_35439 = [null,null,null,null,null,null,null];
(statearr_35439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__);

(statearr_35439[(1)] = (1));

return statearr_35439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1 = (function (state_35431){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35440){if((e35440 instanceof Object)){
var ex__35144__auto__ = e35440;
var statearr_35441_35586 = state_35431;
(statearr_35441_35586[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35587 = state_35431;
state_35431 = G__35587;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__;
})()
;})(__35575,switch__35140__auto__,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
})();
var state__35237__auto__ = (function (){var statearr_35442 = f__35236__auto__.call(null);
(statearr_35442[(6)] = c__35235__auto___35579);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
});})(__35575,c__35235__auto___35579,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
);


break;
case "async":
var c__35235__auto___35588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35575,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = ((function (__35575,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function (state_35455){
var state_val_35456 = (state_35455[(1)]);
if((state_val_35456 === (1))){
var state_35455__$1 = state_35455;
var statearr_35457_35589 = state_35455__$1;
(statearr_35457_35589[(2)] = null);

(statearr_35457_35589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35456 === (2))){
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35455__$1,(4),jobs);
} else {
if((state_val_35456 === (3))){
var inst_35453 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35455__$1,inst_35453);
} else {
if((state_val_35456 === (4))){
var inst_35445 = (state_35455[(2)]);
var inst_35446 = async.call(null,inst_35445);
var state_35455__$1 = state_35455;
if(cljs.core.truth_(inst_35446)){
var statearr_35458_35590 = state_35455__$1;
(statearr_35458_35590[(1)] = (5));

} else {
var statearr_35459_35591 = state_35455__$1;
(statearr_35459_35591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35456 === (5))){
var state_35455__$1 = state_35455;
var statearr_35460_35592 = state_35455__$1;
(statearr_35460_35592[(2)] = null);

(statearr_35460_35592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35456 === (6))){
var state_35455__$1 = state_35455;
var statearr_35461_35593 = state_35455__$1;
(statearr_35461_35593[(2)] = null);

(statearr_35461_35593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35456 === (7))){
var inst_35451 = (state_35455[(2)]);
var state_35455__$1 = state_35455;
var statearr_35462_35594 = state_35455__$1;
(statearr_35462_35594[(2)] = inst_35451);

(statearr_35462_35594[(1)] = (3));


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
});})(__35575,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
;
return ((function (__35575,switch__35140__auto__,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_35463 = [null,null,null,null,null,null,null];
(statearr_35463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__);

(statearr_35463[(1)] = (1));

return statearr_35463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1 = (function (state_35455){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35464){if((e35464 instanceof Object)){
var ex__35144__auto__ = e35464;
var statearr_35465_35595 = state_35455;
(statearr_35465_35595[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35596 = state_35455;
state_35455 = G__35596;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = function(state_35455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1.call(this,state_35455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__;
})()
;})(__35575,switch__35140__auto__,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
})();
var state__35237__auto__ = (function (){var statearr_35466 = f__35236__auto__.call(null);
(statearr_35466[(6)] = c__35235__auto___35588);

return statearr_35466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
});})(__35575,c__35235__auto___35588,G__35418_35576,G__35418_35577__$1,n__4613__auto___35574,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35418_35577__$1)].join('')));

}

var G__35597 = (__35575 + (1));
__35575 = G__35597;
continue;
} else {
}
break;
}

var c__35235__auto___35598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35488){
var state_val_35489 = (state_35488[(1)]);
if((state_val_35489 === (7))){
var inst_35484 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35490_35599 = state_35488__$1;
(statearr_35490_35599[(2)] = inst_35484);

(statearr_35490_35599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (1))){
var state_35488__$1 = state_35488;
var statearr_35491_35600 = state_35488__$1;
(statearr_35491_35600[(2)] = null);

(statearr_35491_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (4))){
var inst_35469 = (state_35488[(7)]);
var inst_35469__$1 = (state_35488[(2)]);
var inst_35470 = (inst_35469__$1 == null);
var state_35488__$1 = (function (){var statearr_35492 = state_35488;
(statearr_35492[(7)] = inst_35469__$1);

return statearr_35492;
})();
if(cljs.core.truth_(inst_35470)){
var statearr_35493_35601 = state_35488__$1;
(statearr_35493_35601[(1)] = (5));

} else {
var statearr_35494_35602 = state_35488__$1;
(statearr_35494_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (6))){
var inst_35474 = (state_35488[(8)]);
var inst_35469 = (state_35488[(7)]);
var inst_35474__$1 = cljs.core.async.chan.call(null,(1));
var inst_35475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35476 = [inst_35469,inst_35474__$1];
var inst_35477 = (new cljs.core.PersistentVector(null,2,(5),inst_35475,inst_35476,null));
var state_35488__$1 = (function (){var statearr_35495 = state_35488;
(statearr_35495[(8)] = inst_35474__$1);

return statearr_35495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35488__$1,(8),jobs,inst_35477);
} else {
if((state_val_35489 === (3))){
var inst_35486 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35488__$1,inst_35486);
} else {
if((state_val_35489 === (2))){
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35488__$1,(4),from);
} else {
if((state_val_35489 === (9))){
var inst_35481 = (state_35488[(2)]);
var state_35488__$1 = (function (){var statearr_35496 = state_35488;
(statearr_35496[(9)] = inst_35481);

return statearr_35496;
})();
var statearr_35497_35603 = state_35488__$1;
(statearr_35497_35603[(2)] = null);

(statearr_35497_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (5))){
var inst_35472 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35488__$1 = state_35488;
var statearr_35498_35604 = state_35488__$1;
(statearr_35498_35604[(2)] = inst_35472);

(statearr_35498_35604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35489 === (8))){
var inst_35474 = (state_35488[(8)]);
var inst_35479 = (state_35488[(2)]);
var state_35488__$1 = (function (){var statearr_35499 = state_35488;
(statearr_35499[(10)] = inst_35479);

return statearr_35499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35488__$1,(9),results,inst_35474);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_35500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__);

(statearr_35500[(1)] = (1));

return statearr_35500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1 = (function (state_35488){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35501){if((e35501 instanceof Object)){
var ex__35144__auto__ = e35501;
var statearr_35502_35605 = state_35488;
(statearr_35502_35605[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35606 = state_35488;
state_35488 = G__35606;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = function(state_35488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1.call(this,state_35488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35503 = f__35236__auto__.call(null);
(statearr_35503[(6)] = c__35235__auto___35598);

return statearr_35503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35541){
var state_val_35542 = (state_35541[(1)]);
if((state_val_35542 === (7))){
var inst_35537 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35543_35607 = state_35541__$1;
(statearr_35543_35607[(2)] = inst_35537);

(statearr_35543_35607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (20))){
var state_35541__$1 = state_35541;
var statearr_35544_35608 = state_35541__$1;
(statearr_35544_35608[(2)] = null);

(statearr_35544_35608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (1))){
var state_35541__$1 = state_35541;
var statearr_35545_35609 = state_35541__$1;
(statearr_35545_35609[(2)] = null);

(statearr_35545_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (4))){
var inst_35506 = (state_35541[(7)]);
var inst_35506__$1 = (state_35541[(2)]);
var inst_35507 = (inst_35506__$1 == null);
var state_35541__$1 = (function (){var statearr_35546 = state_35541;
(statearr_35546[(7)] = inst_35506__$1);

return statearr_35546;
})();
if(cljs.core.truth_(inst_35507)){
var statearr_35547_35610 = state_35541__$1;
(statearr_35547_35610[(1)] = (5));

} else {
var statearr_35548_35611 = state_35541__$1;
(statearr_35548_35611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (15))){
var inst_35519 = (state_35541[(8)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35541__$1,(18),to,inst_35519);
} else {
if((state_val_35542 === (21))){
var inst_35532 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35549_35612 = state_35541__$1;
(statearr_35549_35612[(2)] = inst_35532);

(statearr_35549_35612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (13))){
var inst_35534 = (state_35541[(2)]);
var state_35541__$1 = (function (){var statearr_35550 = state_35541;
(statearr_35550[(9)] = inst_35534);

return statearr_35550;
})();
var statearr_35551_35613 = state_35541__$1;
(statearr_35551_35613[(2)] = null);

(statearr_35551_35613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (6))){
var inst_35506 = (state_35541[(7)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(11),inst_35506);
} else {
if((state_val_35542 === (17))){
var inst_35527 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
if(cljs.core.truth_(inst_35527)){
var statearr_35552_35614 = state_35541__$1;
(statearr_35552_35614[(1)] = (19));

} else {
var statearr_35553_35615 = state_35541__$1;
(statearr_35553_35615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (3))){
var inst_35539 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else {
if((state_val_35542 === (12))){
var inst_35516 = (state_35541[(10)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(14),inst_35516);
} else {
if((state_val_35542 === (2))){
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(4),results);
} else {
if((state_val_35542 === (19))){
var state_35541__$1 = state_35541;
var statearr_35554_35616 = state_35541__$1;
(statearr_35554_35616[(2)] = null);

(statearr_35554_35616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (11))){
var inst_35516 = (state_35541[(2)]);
var state_35541__$1 = (function (){var statearr_35555 = state_35541;
(statearr_35555[(10)] = inst_35516);

return statearr_35555;
})();
var statearr_35556_35617 = state_35541__$1;
(statearr_35556_35617[(2)] = null);

(statearr_35556_35617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (9))){
var state_35541__$1 = state_35541;
var statearr_35557_35618 = state_35541__$1;
(statearr_35557_35618[(2)] = null);

(statearr_35557_35618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (5))){
var state_35541__$1 = state_35541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35558_35619 = state_35541__$1;
(statearr_35558_35619[(1)] = (8));

} else {
var statearr_35559_35620 = state_35541__$1;
(statearr_35559_35620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (14))){
var inst_35519 = (state_35541[(8)]);
var inst_35519__$1 = (state_35541[(2)]);
var inst_35520 = (inst_35519__$1 == null);
var inst_35521 = cljs.core.not.call(null,inst_35520);
var state_35541__$1 = (function (){var statearr_35560 = state_35541;
(statearr_35560[(8)] = inst_35519__$1);

return statearr_35560;
})();
if(inst_35521){
var statearr_35561_35621 = state_35541__$1;
(statearr_35561_35621[(1)] = (15));

} else {
var statearr_35562_35622 = state_35541__$1;
(statearr_35562_35622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (16))){
var state_35541__$1 = state_35541;
var statearr_35563_35623 = state_35541__$1;
(statearr_35563_35623[(2)] = false);

(statearr_35563_35623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (10))){
var inst_35513 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35564_35624 = state_35541__$1;
(statearr_35564_35624[(2)] = inst_35513);

(statearr_35564_35624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (18))){
var inst_35524 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35565_35625 = state_35541__$1;
(statearr_35565_35625[(2)] = inst_35524);

(statearr_35565_35625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (8))){
var inst_35510 = cljs.core.async.close_BANG_.call(null,to);
var state_35541__$1 = state_35541;
var statearr_35566_35626 = state_35541__$1;
(statearr_35566_35626[(2)] = inst_35510);

(statearr_35566_35626[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_35567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__);

(statearr_35567[(1)] = (1));

return statearr_35567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1 = (function (state_35541){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35568){if((e35568 instanceof Object)){
var ex__35144__auto__ = e35568;
var statearr_35569_35627 = state_35541;
(statearr_35569_35627[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35628 = state_35541;
state_35541 = G__35628;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35570 = f__35236__auto__.call(null);
(statearr_35570[(6)] = c__35235__auto__);

return statearr_35570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
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
var G__35630 = arguments.length;
switch (G__35630) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__35633 = arguments.length;
switch (G__35633) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__35636 = arguments.length;
switch (G__35636) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35235__auto___35685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35662){
var state_val_35663 = (state_35662[(1)]);
if((state_val_35663 === (7))){
var inst_35658 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35664_35686 = state_35662__$1;
(statearr_35664_35686[(2)] = inst_35658);

(statearr_35664_35686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (1))){
var state_35662__$1 = state_35662;
var statearr_35665_35687 = state_35662__$1;
(statearr_35665_35687[(2)] = null);

(statearr_35665_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (4))){
var inst_35639 = (state_35662[(7)]);
var inst_35639__$1 = (state_35662[(2)]);
var inst_35640 = (inst_35639__$1 == null);
var state_35662__$1 = (function (){var statearr_35666 = state_35662;
(statearr_35666[(7)] = inst_35639__$1);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35640)){
var statearr_35667_35688 = state_35662__$1;
(statearr_35667_35688[(1)] = (5));

} else {
var statearr_35668_35689 = state_35662__$1;
(statearr_35668_35689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (13))){
var state_35662__$1 = state_35662;
var statearr_35669_35690 = state_35662__$1;
(statearr_35669_35690[(2)] = null);

(statearr_35669_35690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (6))){
var inst_35639 = (state_35662[(7)]);
var inst_35645 = p.call(null,inst_35639);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35645)){
var statearr_35670_35691 = state_35662__$1;
(statearr_35670_35691[(1)] = (9));

} else {
var statearr_35671_35692 = state_35662__$1;
(statearr_35671_35692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (3))){
var inst_35660 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35662__$1,inst_35660);
} else {
if((state_val_35663 === (12))){
var state_35662__$1 = state_35662;
var statearr_35672_35693 = state_35662__$1;
(statearr_35672_35693[(2)] = null);

(statearr_35672_35693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (2))){
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35662__$1,(4),ch);
} else {
if((state_val_35663 === (11))){
var inst_35639 = (state_35662[(7)]);
var inst_35649 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35662__$1,(8),inst_35649,inst_35639);
} else {
if((state_val_35663 === (9))){
var state_35662__$1 = state_35662;
var statearr_35673_35694 = state_35662__$1;
(statearr_35673_35694[(2)] = tc);

(statearr_35673_35694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (5))){
var inst_35642 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35643 = cljs.core.async.close_BANG_.call(null,fc);
var state_35662__$1 = (function (){var statearr_35674 = state_35662;
(statearr_35674[(8)] = inst_35642);

return statearr_35674;
})();
var statearr_35675_35695 = state_35662__$1;
(statearr_35675_35695[(2)] = inst_35643);

(statearr_35675_35695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (14))){
var inst_35656 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35676_35696 = state_35662__$1;
(statearr_35676_35696[(2)] = inst_35656);

(statearr_35676_35696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (10))){
var state_35662__$1 = state_35662;
var statearr_35677_35697 = state_35662__$1;
(statearr_35677_35697[(2)] = fc);

(statearr_35677_35697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (8))){
var inst_35651 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35651)){
var statearr_35678_35698 = state_35662__$1;
(statearr_35678_35698[(1)] = (12));

} else {
var statearr_35679_35699 = state_35662__$1;
(statearr_35679_35699[(1)] = (13));

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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_35680 = [null,null,null,null,null,null,null,null,null];
(statearr_35680[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_35680[(1)] = (1));

return statearr_35680;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_35662){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35681){if((e35681 instanceof Object)){
var ex__35144__auto__ = e35681;
var statearr_35682_35700 = state_35662;
(statearr_35682_35700[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35701 = state_35662;
state_35662 = G__35701;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_35662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_35662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35683 = f__35236__auto__.call(null);
(statearr_35683[(6)] = c__35235__auto___35685);

return statearr_35683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
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
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35722){
var state_val_35723 = (state_35722[(1)]);
if((state_val_35723 === (7))){
var inst_35718 = (state_35722[(2)]);
var state_35722__$1 = state_35722;
var statearr_35724_35742 = state_35722__$1;
(statearr_35724_35742[(2)] = inst_35718);

(statearr_35724_35742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (1))){
var inst_35702 = init;
var state_35722__$1 = (function (){var statearr_35725 = state_35722;
(statearr_35725[(7)] = inst_35702);

return statearr_35725;
})();
var statearr_35726_35743 = state_35722__$1;
(statearr_35726_35743[(2)] = null);

(statearr_35726_35743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (4))){
var inst_35705 = (state_35722[(8)]);
var inst_35705__$1 = (state_35722[(2)]);
var inst_35706 = (inst_35705__$1 == null);
var state_35722__$1 = (function (){var statearr_35727 = state_35722;
(statearr_35727[(8)] = inst_35705__$1);

return statearr_35727;
})();
if(cljs.core.truth_(inst_35706)){
var statearr_35728_35744 = state_35722__$1;
(statearr_35728_35744[(1)] = (5));

} else {
var statearr_35729_35745 = state_35722__$1;
(statearr_35729_35745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (6))){
var inst_35702 = (state_35722[(7)]);
var inst_35705 = (state_35722[(8)]);
var inst_35709 = (state_35722[(9)]);
var inst_35709__$1 = f.call(null,inst_35702,inst_35705);
var inst_35710 = cljs.core.reduced_QMARK_.call(null,inst_35709__$1);
var state_35722__$1 = (function (){var statearr_35730 = state_35722;
(statearr_35730[(9)] = inst_35709__$1);

return statearr_35730;
})();
if(inst_35710){
var statearr_35731_35746 = state_35722__$1;
(statearr_35731_35746[(1)] = (8));

} else {
var statearr_35732_35747 = state_35722__$1;
(statearr_35732_35747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (3))){
var inst_35720 = (state_35722[(2)]);
var state_35722__$1 = state_35722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35722__$1,inst_35720);
} else {
if((state_val_35723 === (2))){
var state_35722__$1 = state_35722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35722__$1,(4),ch);
} else {
if((state_val_35723 === (9))){
var inst_35709 = (state_35722[(9)]);
var inst_35702 = inst_35709;
var state_35722__$1 = (function (){var statearr_35733 = state_35722;
(statearr_35733[(7)] = inst_35702);

return statearr_35733;
})();
var statearr_35734_35748 = state_35722__$1;
(statearr_35734_35748[(2)] = null);

(statearr_35734_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (5))){
var inst_35702 = (state_35722[(7)]);
var state_35722__$1 = state_35722;
var statearr_35735_35749 = state_35722__$1;
(statearr_35735_35749[(2)] = inst_35702);

(statearr_35735_35749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (10))){
var inst_35716 = (state_35722[(2)]);
var state_35722__$1 = state_35722;
var statearr_35736_35750 = state_35722__$1;
(statearr_35736_35750[(2)] = inst_35716);

(statearr_35736_35750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (8))){
var inst_35709 = (state_35722[(9)]);
var inst_35712 = cljs.core.deref.call(null,inst_35709);
var state_35722__$1 = state_35722;
var statearr_35737_35751 = state_35722__$1;
(statearr_35737_35751[(2)] = inst_35712);

(statearr_35737_35751[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35141__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35141__auto____0 = (function (){
var statearr_35738 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35738[(0)] = cljs$core$async$reduce_$_state_machine__35141__auto__);

(statearr_35738[(1)] = (1));

return statearr_35738;
});
var cljs$core$async$reduce_$_state_machine__35141__auto____1 = (function (state_35722){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35739){if((e35739 instanceof Object)){
var ex__35144__auto__ = e35739;
var statearr_35740_35752 = state_35722;
(statearr_35740_35752[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35753 = state_35722;
state_35722 = G__35753;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35141__auto__ = function(state_35722){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35141__auto____1.call(this,state_35722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35141__auto____0;
cljs$core$async$reduce_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35141__auto____1;
return cljs$core$async$reduce_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35741 = f__35236__auto__.call(null);
(statearr_35741[(6)] = c__35235__auto__);

return statearr_35741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35759){
var state_val_35760 = (state_35759[(1)]);
if((state_val_35760 === (1))){
var inst_35754 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(2),inst_35754);
} else {
if((state_val_35760 === (2))){
var inst_35756 = (state_35759[(2)]);
var inst_35757 = f__$1.call(null,inst_35756);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35759__$1,inst_35757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35141__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35141__auto____0 = (function (){
var statearr_35761 = [null,null,null,null,null,null,null];
(statearr_35761[(0)] = cljs$core$async$transduce_$_state_machine__35141__auto__);

(statearr_35761[(1)] = (1));

return statearr_35761;
});
var cljs$core$async$transduce_$_state_machine__35141__auto____1 = (function (state_35759){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35762){if((e35762 instanceof Object)){
var ex__35144__auto__ = e35762;
var statearr_35763_35765 = state_35759;
(statearr_35763_35765[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_35759;
state_35759 = G__35766;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35141__auto__ = function(state_35759){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35141__auto____1.call(this,state_35759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35141__auto____0;
cljs$core$async$transduce_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35141__auto____1;
return cljs$core$async$transduce_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35764 = f__35236__auto__.call(null);
(statearr_35764[(6)] = c__35235__auto__);

return statearr_35764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35768 = arguments.length;
switch (G__35768) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35793){
var state_val_35794 = (state_35793[(1)]);
if((state_val_35794 === (7))){
var inst_35775 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35795_35816 = state_35793__$1;
(statearr_35795_35816[(2)] = inst_35775);

(statearr_35795_35816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (1))){
var inst_35769 = cljs.core.seq.call(null,coll);
var inst_35770 = inst_35769;
var state_35793__$1 = (function (){var statearr_35796 = state_35793;
(statearr_35796[(7)] = inst_35770);

return statearr_35796;
})();
var statearr_35797_35817 = state_35793__$1;
(statearr_35797_35817[(2)] = null);

(statearr_35797_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (4))){
var inst_35770 = (state_35793[(7)]);
var inst_35773 = cljs.core.first.call(null,inst_35770);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35793__$1,(7),ch,inst_35773);
} else {
if((state_val_35794 === (13))){
var inst_35787 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35798_35818 = state_35793__$1;
(statearr_35798_35818[(2)] = inst_35787);

(statearr_35798_35818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (6))){
var inst_35778 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
if(cljs.core.truth_(inst_35778)){
var statearr_35799_35819 = state_35793__$1;
(statearr_35799_35819[(1)] = (8));

} else {
var statearr_35800_35820 = state_35793__$1;
(statearr_35800_35820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (3))){
var inst_35791 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35793__$1,inst_35791);
} else {
if((state_val_35794 === (12))){
var state_35793__$1 = state_35793;
var statearr_35801_35821 = state_35793__$1;
(statearr_35801_35821[(2)] = null);

(statearr_35801_35821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (2))){
var inst_35770 = (state_35793[(7)]);
var state_35793__$1 = state_35793;
if(cljs.core.truth_(inst_35770)){
var statearr_35802_35822 = state_35793__$1;
(statearr_35802_35822[(1)] = (4));

} else {
var statearr_35803_35823 = state_35793__$1;
(statearr_35803_35823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (11))){
var inst_35784 = cljs.core.async.close_BANG_.call(null,ch);
var state_35793__$1 = state_35793;
var statearr_35804_35824 = state_35793__$1;
(statearr_35804_35824[(2)] = inst_35784);

(statearr_35804_35824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (9))){
var state_35793__$1 = state_35793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35805_35825 = state_35793__$1;
(statearr_35805_35825[(1)] = (11));

} else {
var statearr_35806_35826 = state_35793__$1;
(statearr_35806_35826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (5))){
var inst_35770 = (state_35793[(7)]);
var state_35793__$1 = state_35793;
var statearr_35807_35827 = state_35793__$1;
(statearr_35807_35827[(2)] = inst_35770);

(statearr_35807_35827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (10))){
var inst_35789 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35808_35828 = state_35793__$1;
(statearr_35808_35828[(2)] = inst_35789);

(statearr_35808_35828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (8))){
var inst_35770 = (state_35793[(7)]);
var inst_35780 = cljs.core.next.call(null,inst_35770);
var inst_35770__$1 = inst_35780;
var state_35793__$1 = (function (){var statearr_35809 = state_35793;
(statearr_35809[(7)] = inst_35770__$1);

return statearr_35809;
})();
var statearr_35810_35829 = state_35793__$1;
(statearr_35810_35829[(2)] = null);

(statearr_35810_35829[(1)] = (2));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_35811 = [null,null,null,null,null,null,null,null];
(statearr_35811[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_35811[(1)] = (1));

return statearr_35811;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_35793){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e35812){if((e35812 instanceof Object)){
var ex__35144__auto__ = e35812;
var statearr_35813_35830 = state_35793;
(statearr_35813_35830[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35831 = state_35793;
state_35793 = G__35831;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_35793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_35793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_35814 = f__35236__auto__.call(null);
(statearr_35814[(6)] = c__35235__auto__);

return statearr_35814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35832 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35832.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35833 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35833.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35834 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35834.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35835 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35835.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35836 = (function (ch,cs,meta35837){
this.ch = ch;
this.cs = cs;
this.meta35837 = meta35837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35838,meta35837__$1){
var self__ = this;
var _35838__$1 = this;
return (new cljs.core.async.t_cljs$core$async35836(self__.ch,self__.cs,meta35837__$1));
}));

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35838){
var self__ = this;
var _35838__$1 = this;
return self__.meta35837;
}));

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35837","meta35837",726361396,null)], null);
}));

(cljs.core.async.t_cljs$core$async35836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35836");

(cljs.core.async.t_cljs$core$async35836.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async35836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35836.
 */
cljs.core.async.__GT_t_cljs$core$async35836 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35836(ch__$1,cs__$1,meta35837){
return (new cljs.core.async.t_cljs$core$async35836(ch__$1,cs__$1,meta35837));
});

}

return (new cljs.core.async.t_cljs$core$async35836(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__35235__auto___36058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_35973){
var state_val_35974 = (state_35973[(1)]);
if((state_val_35974 === (7))){
var inst_35969 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_35975_36059 = state_35973__$1;
(statearr_35975_36059[(2)] = inst_35969);

(statearr_35975_36059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (20))){
var inst_35872 = (state_35973[(7)]);
var inst_35884 = cljs.core.first.call(null,inst_35872);
var inst_35885 = cljs.core.nth.call(null,inst_35884,(0),null);
var inst_35886 = cljs.core.nth.call(null,inst_35884,(1),null);
var state_35973__$1 = (function (){var statearr_35976 = state_35973;
(statearr_35976[(8)] = inst_35885);

return statearr_35976;
})();
if(cljs.core.truth_(inst_35886)){
var statearr_35977_36060 = state_35973__$1;
(statearr_35977_36060[(1)] = (22));

} else {
var statearr_35978_36061 = state_35973__$1;
(statearr_35978_36061[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (27))){
var inst_35921 = (state_35973[(9)]);
var inst_35914 = (state_35973[(10)]);
var inst_35916 = (state_35973[(11)]);
var inst_35841 = (state_35973[(12)]);
var inst_35921__$1 = cljs.core._nth.call(null,inst_35914,inst_35916);
var inst_35922 = cljs.core.async.put_BANG_.call(null,inst_35921__$1,inst_35841,done);
var state_35973__$1 = (function (){var statearr_35979 = state_35973;
(statearr_35979[(9)] = inst_35921__$1);

return statearr_35979;
})();
if(cljs.core.truth_(inst_35922)){
var statearr_35980_36062 = state_35973__$1;
(statearr_35980_36062[(1)] = (30));

} else {
var statearr_35981_36063 = state_35973__$1;
(statearr_35981_36063[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (1))){
var state_35973__$1 = state_35973;
var statearr_35982_36064 = state_35973__$1;
(statearr_35982_36064[(2)] = null);

(statearr_35982_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (24))){
var inst_35872 = (state_35973[(7)]);
var inst_35891 = (state_35973[(2)]);
var inst_35892 = cljs.core.next.call(null,inst_35872);
var inst_35850 = inst_35892;
var inst_35851 = null;
var inst_35852 = (0);
var inst_35853 = (0);
var state_35973__$1 = (function (){var statearr_35983 = state_35973;
(statearr_35983[(13)] = inst_35851);

(statearr_35983[(14)] = inst_35891);

(statearr_35983[(15)] = inst_35852);

(statearr_35983[(16)] = inst_35853);

(statearr_35983[(17)] = inst_35850);

return statearr_35983;
})();
var statearr_35984_36065 = state_35973__$1;
(statearr_35984_36065[(2)] = null);

(statearr_35984_36065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (39))){
var state_35973__$1 = state_35973;
var statearr_35988_36066 = state_35973__$1;
(statearr_35988_36066[(2)] = null);

(statearr_35988_36066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (4))){
var inst_35841 = (state_35973[(12)]);
var inst_35841__$1 = (state_35973[(2)]);
var inst_35842 = (inst_35841__$1 == null);
var state_35973__$1 = (function (){var statearr_35989 = state_35973;
(statearr_35989[(12)] = inst_35841__$1);

return statearr_35989;
})();
if(cljs.core.truth_(inst_35842)){
var statearr_35990_36067 = state_35973__$1;
(statearr_35990_36067[(1)] = (5));

} else {
var statearr_35991_36068 = state_35973__$1;
(statearr_35991_36068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (15))){
var inst_35851 = (state_35973[(13)]);
var inst_35852 = (state_35973[(15)]);
var inst_35853 = (state_35973[(16)]);
var inst_35850 = (state_35973[(17)]);
var inst_35868 = (state_35973[(2)]);
var inst_35869 = (inst_35853 + (1));
var tmp35985 = inst_35851;
var tmp35986 = inst_35852;
var tmp35987 = inst_35850;
var inst_35850__$1 = tmp35987;
var inst_35851__$1 = tmp35985;
var inst_35852__$1 = tmp35986;
var inst_35853__$1 = inst_35869;
var state_35973__$1 = (function (){var statearr_35992 = state_35973;
(statearr_35992[(13)] = inst_35851__$1);

(statearr_35992[(18)] = inst_35868);

(statearr_35992[(15)] = inst_35852__$1);

(statearr_35992[(16)] = inst_35853__$1);

(statearr_35992[(17)] = inst_35850__$1);

return statearr_35992;
})();
var statearr_35993_36069 = state_35973__$1;
(statearr_35993_36069[(2)] = null);

(statearr_35993_36069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (21))){
var inst_35895 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_35997_36070 = state_35973__$1;
(statearr_35997_36070[(2)] = inst_35895);

(statearr_35997_36070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (31))){
var inst_35921 = (state_35973[(9)]);
var inst_35925 = done.call(null,null);
var inst_35926 = cljs.core.async.untap_STAR_.call(null,m,inst_35921);
var state_35973__$1 = (function (){var statearr_35998 = state_35973;
(statearr_35998[(19)] = inst_35925);

return statearr_35998;
})();
var statearr_35999_36071 = state_35973__$1;
(statearr_35999_36071[(2)] = inst_35926);

(statearr_35999_36071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (32))){
var inst_35914 = (state_35973[(10)]);
var inst_35916 = (state_35973[(11)]);
var inst_35913 = (state_35973[(20)]);
var inst_35915 = (state_35973[(21)]);
var inst_35928 = (state_35973[(2)]);
var inst_35929 = (inst_35916 + (1));
var tmp35994 = inst_35914;
var tmp35995 = inst_35913;
var tmp35996 = inst_35915;
var inst_35913__$1 = tmp35995;
var inst_35914__$1 = tmp35994;
var inst_35915__$1 = tmp35996;
var inst_35916__$1 = inst_35929;
var state_35973__$1 = (function (){var statearr_36000 = state_35973;
(statearr_36000[(22)] = inst_35928);

(statearr_36000[(10)] = inst_35914__$1);

(statearr_36000[(11)] = inst_35916__$1);

(statearr_36000[(20)] = inst_35913__$1);

(statearr_36000[(21)] = inst_35915__$1);

return statearr_36000;
})();
var statearr_36001_36072 = state_35973__$1;
(statearr_36001_36072[(2)] = null);

(statearr_36001_36072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (40))){
var inst_35941 = (state_35973[(23)]);
var inst_35945 = done.call(null,null);
var inst_35946 = cljs.core.async.untap_STAR_.call(null,m,inst_35941);
var state_35973__$1 = (function (){var statearr_36002 = state_35973;
(statearr_36002[(24)] = inst_35945);

return statearr_36002;
})();
var statearr_36003_36073 = state_35973__$1;
(statearr_36003_36073[(2)] = inst_35946);

(statearr_36003_36073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (33))){
var inst_35932 = (state_35973[(25)]);
var inst_35934 = cljs.core.chunked_seq_QMARK_.call(null,inst_35932);
var state_35973__$1 = state_35973;
if(inst_35934){
var statearr_36004_36074 = state_35973__$1;
(statearr_36004_36074[(1)] = (36));

} else {
var statearr_36005_36075 = state_35973__$1;
(statearr_36005_36075[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (13))){
var inst_35862 = (state_35973[(26)]);
var inst_35865 = cljs.core.async.close_BANG_.call(null,inst_35862);
var state_35973__$1 = state_35973;
var statearr_36006_36076 = state_35973__$1;
(statearr_36006_36076[(2)] = inst_35865);

(statearr_36006_36076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (22))){
var inst_35885 = (state_35973[(8)]);
var inst_35888 = cljs.core.async.close_BANG_.call(null,inst_35885);
var state_35973__$1 = state_35973;
var statearr_36007_36077 = state_35973__$1;
(statearr_36007_36077[(2)] = inst_35888);

(statearr_36007_36077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (36))){
var inst_35932 = (state_35973[(25)]);
var inst_35936 = cljs.core.chunk_first.call(null,inst_35932);
var inst_35937 = cljs.core.chunk_rest.call(null,inst_35932);
var inst_35938 = cljs.core.count.call(null,inst_35936);
var inst_35913 = inst_35937;
var inst_35914 = inst_35936;
var inst_35915 = inst_35938;
var inst_35916 = (0);
var state_35973__$1 = (function (){var statearr_36008 = state_35973;
(statearr_36008[(10)] = inst_35914);

(statearr_36008[(11)] = inst_35916);

(statearr_36008[(20)] = inst_35913);

(statearr_36008[(21)] = inst_35915);

return statearr_36008;
})();
var statearr_36009_36078 = state_35973__$1;
(statearr_36009_36078[(2)] = null);

(statearr_36009_36078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (41))){
var inst_35932 = (state_35973[(25)]);
var inst_35948 = (state_35973[(2)]);
var inst_35949 = cljs.core.next.call(null,inst_35932);
var inst_35913 = inst_35949;
var inst_35914 = null;
var inst_35915 = (0);
var inst_35916 = (0);
var state_35973__$1 = (function (){var statearr_36010 = state_35973;
(statearr_36010[(27)] = inst_35948);

(statearr_36010[(10)] = inst_35914);

(statearr_36010[(11)] = inst_35916);

(statearr_36010[(20)] = inst_35913);

(statearr_36010[(21)] = inst_35915);

return statearr_36010;
})();
var statearr_36011_36079 = state_35973__$1;
(statearr_36011_36079[(2)] = null);

(statearr_36011_36079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (43))){
var state_35973__$1 = state_35973;
var statearr_36012_36080 = state_35973__$1;
(statearr_36012_36080[(2)] = null);

(statearr_36012_36080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (29))){
var inst_35957 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36013_36081 = state_35973__$1;
(statearr_36013_36081[(2)] = inst_35957);

(statearr_36013_36081[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (44))){
var inst_35966 = (state_35973[(2)]);
var state_35973__$1 = (function (){var statearr_36014 = state_35973;
(statearr_36014[(28)] = inst_35966);

return statearr_36014;
})();
var statearr_36015_36082 = state_35973__$1;
(statearr_36015_36082[(2)] = null);

(statearr_36015_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (6))){
var inst_35905 = (state_35973[(29)]);
var inst_35904 = cljs.core.deref.call(null,cs);
var inst_35905__$1 = cljs.core.keys.call(null,inst_35904);
var inst_35906 = cljs.core.count.call(null,inst_35905__$1);
var inst_35907 = cljs.core.reset_BANG_.call(null,dctr,inst_35906);
var inst_35912 = cljs.core.seq.call(null,inst_35905__$1);
var inst_35913 = inst_35912;
var inst_35914 = null;
var inst_35915 = (0);
var inst_35916 = (0);
var state_35973__$1 = (function (){var statearr_36016 = state_35973;
(statearr_36016[(10)] = inst_35914);

(statearr_36016[(11)] = inst_35916);

(statearr_36016[(30)] = inst_35907);

(statearr_36016[(29)] = inst_35905__$1);

(statearr_36016[(20)] = inst_35913);

(statearr_36016[(21)] = inst_35915);

return statearr_36016;
})();
var statearr_36017_36083 = state_35973__$1;
(statearr_36017_36083[(2)] = null);

(statearr_36017_36083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (28))){
var inst_35932 = (state_35973[(25)]);
var inst_35913 = (state_35973[(20)]);
var inst_35932__$1 = cljs.core.seq.call(null,inst_35913);
var state_35973__$1 = (function (){var statearr_36018 = state_35973;
(statearr_36018[(25)] = inst_35932__$1);

return statearr_36018;
})();
if(inst_35932__$1){
var statearr_36019_36084 = state_35973__$1;
(statearr_36019_36084[(1)] = (33));

} else {
var statearr_36020_36085 = state_35973__$1;
(statearr_36020_36085[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (25))){
var inst_35916 = (state_35973[(11)]);
var inst_35915 = (state_35973[(21)]);
var inst_35918 = (inst_35916 < inst_35915);
var inst_35919 = inst_35918;
var state_35973__$1 = state_35973;
if(cljs.core.truth_(inst_35919)){
var statearr_36021_36086 = state_35973__$1;
(statearr_36021_36086[(1)] = (27));

} else {
var statearr_36022_36087 = state_35973__$1;
(statearr_36022_36087[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (34))){
var state_35973__$1 = state_35973;
var statearr_36023_36088 = state_35973__$1;
(statearr_36023_36088[(2)] = null);

(statearr_36023_36088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (17))){
var state_35973__$1 = state_35973;
var statearr_36024_36089 = state_35973__$1;
(statearr_36024_36089[(2)] = null);

(statearr_36024_36089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (3))){
var inst_35971 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35973__$1,inst_35971);
} else {
if((state_val_35974 === (12))){
var inst_35900 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36025_36090 = state_35973__$1;
(statearr_36025_36090[(2)] = inst_35900);

(statearr_36025_36090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (2))){
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35973__$1,(4),ch);
} else {
if((state_val_35974 === (23))){
var state_35973__$1 = state_35973;
var statearr_36026_36091 = state_35973__$1;
(statearr_36026_36091[(2)] = null);

(statearr_36026_36091[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (35))){
var inst_35955 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36027_36092 = state_35973__$1;
(statearr_36027_36092[(2)] = inst_35955);

(statearr_36027_36092[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (19))){
var inst_35872 = (state_35973[(7)]);
var inst_35876 = cljs.core.chunk_first.call(null,inst_35872);
var inst_35877 = cljs.core.chunk_rest.call(null,inst_35872);
var inst_35878 = cljs.core.count.call(null,inst_35876);
var inst_35850 = inst_35877;
var inst_35851 = inst_35876;
var inst_35852 = inst_35878;
var inst_35853 = (0);
var state_35973__$1 = (function (){var statearr_36028 = state_35973;
(statearr_36028[(13)] = inst_35851);

(statearr_36028[(15)] = inst_35852);

(statearr_36028[(16)] = inst_35853);

(statearr_36028[(17)] = inst_35850);

return statearr_36028;
})();
var statearr_36029_36093 = state_35973__$1;
(statearr_36029_36093[(2)] = null);

(statearr_36029_36093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (11))){
var inst_35872 = (state_35973[(7)]);
var inst_35850 = (state_35973[(17)]);
var inst_35872__$1 = cljs.core.seq.call(null,inst_35850);
var state_35973__$1 = (function (){var statearr_36030 = state_35973;
(statearr_36030[(7)] = inst_35872__$1);

return statearr_36030;
})();
if(inst_35872__$1){
var statearr_36031_36094 = state_35973__$1;
(statearr_36031_36094[(1)] = (16));

} else {
var statearr_36032_36095 = state_35973__$1;
(statearr_36032_36095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (9))){
var inst_35902 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36033_36096 = state_35973__$1;
(statearr_36033_36096[(2)] = inst_35902);

(statearr_36033_36096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (5))){
var inst_35848 = cljs.core.deref.call(null,cs);
var inst_35849 = cljs.core.seq.call(null,inst_35848);
var inst_35850 = inst_35849;
var inst_35851 = null;
var inst_35852 = (0);
var inst_35853 = (0);
var state_35973__$1 = (function (){var statearr_36034 = state_35973;
(statearr_36034[(13)] = inst_35851);

(statearr_36034[(15)] = inst_35852);

(statearr_36034[(16)] = inst_35853);

(statearr_36034[(17)] = inst_35850);

return statearr_36034;
})();
var statearr_36035_36097 = state_35973__$1;
(statearr_36035_36097[(2)] = null);

(statearr_36035_36097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (14))){
var state_35973__$1 = state_35973;
var statearr_36036_36098 = state_35973__$1;
(statearr_36036_36098[(2)] = null);

(statearr_36036_36098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (45))){
var inst_35963 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36037_36099 = state_35973__$1;
(statearr_36037_36099[(2)] = inst_35963);

(statearr_36037_36099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (26))){
var inst_35905 = (state_35973[(29)]);
var inst_35959 = (state_35973[(2)]);
var inst_35960 = cljs.core.seq.call(null,inst_35905);
var state_35973__$1 = (function (){var statearr_36038 = state_35973;
(statearr_36038[(31)] = inst_35959);

return statearr_36038;
})();
if(inst_35960){
var statearr_36039_36100 = state_35973__$1;
(statearr_36039_36100[(1)] = (42));

} else {
var statearr_36040_36101 = state_35973__$1;
(statearr_36040_36101[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (16))){
var inst_35872 = (state_35973[(7)]);
var inst_35874 = cljs.core.chunked_seq_QMARK_.call(null,inst_35872);
var state_35973__$1 = state_35973;
if(inst_35874){
var statearr_36041_36102 = state_35973__$1;
(statearr_36041_36102[(1)] = (19));

} else {
var statearr_36042_36103 = state_35973__$1;
(statearr_36042_36103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (38))){
var inst_35952 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36043_36104 = state_35973__$1;
(statearr_36043_36104[(2)] = inst_35952);

(statearr_36043_36104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (30))){
var state_35973__$1 = state_35973;
var statearr_36044_36105 = state_35973__$1;
(statearr_36044_36105[(2)] = null);

(statearr_36044_36105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (10))){
var inst_35851 = (state_35973[(13)]);
var inst_35853 = (state_35973[(16)]);
var inst_35861 = cljs.core._nth.call(null,inst_35851,inst_35853);
var inst_35862 = cljs.core.nth.call(null,inst_35861,(0),null);
var inst_35863 = cljs.core.nth.call(null,inst_35861,(1),null);
var state_35973__$1 = (function (){var statearr_36045 = state_35973;
(statearr_36045[(26)] = inst_35862);

return statearr_36045;
})();
if(cljs.core.truth_(inst_35863)){
var statearr_36046_36106 = state_35973__$1;
(statearr_36046_36106[(1)] = (13));

} else {
var statearr_36047_36107 = state_35973__$1;
(statearr_36047_36107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (18))){
var inst_35898 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36048_36108 = state_35973__$1;
(statearr_36048_36108[(2)] = inst_35898);

(statearr_36048_36108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (42))){
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35973__$1,(45),dchan);
} else {
if((state_val_35974 === (37))){
var inst_35932 = (state_35973[(25)]);
var inst_35941 = (state_35973[(23)]);
var inst_35841 = (state_35973[(12)]);
var inst_35941__$1 = cljs.core.first.call(null,inst_35932);
var inst_35942 = cljs.core.async.put_BANG_.call(null,inst_35941__$1,inst_35841,done);
var state_35973__$1 = (function (){var statearr_36049 = state_35973;
(statearr_36049[(23)] = inst_35941__$1);

return statearr_36049;
})();
if(cljs.core.truth_(inst_35942)){
var statearr_36050_36109 = state_35973__$1;
(statearr_36050_36109[(1)] = (39));

} else {
var statearr_36051_36110 = state_35973__$1;
(statearr_36051_36110[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (8))){
var inst_35852 = (state_35973[(15)]);
var inst_35853 = (state_35973[(16)]);
var inst_35855 = (inst_35853 < inst_35852);
var inst_35856 = inst_35855;
var state_35973__$1 = state_35973;
if(cljs.core.truth_(inst_35856)){
var statearr_36052_36111 = state_35973__$1;
(statearr_36052_36111[(1)] = (10));

} else {
var statearr_36053_36112 = state_35973__$1;
(statearr_36053_36112[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35141__auto__ = null;
var cljs$core$async$mult_$_state_machine__35141__auto____0 = (function (){
var statearr_36054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36054[(0)] = cljs$core$async$mult_$_state_machine__35141__auto__);

(statearr_36054[(1)] = (1));

return statearr_36054;
});
var cljs$core$async$mult_$_state_machine__35141__auto____1 = (function (state_35973){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_35973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36055){if((e36055 instanceof Object)){
var ex__35144__auto__ = e36055;
var statearr_36056_36113 = state_35973;
(statearr_36056_36113[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36114 = state_35973;
state_35973 = G__36114;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35141__auto__ = function(state_35973){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35141__auto____1.call(this,state_35973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35141__auto____0;
cljs$core$async$mult_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35141__auto____1;
return cljs$core$async$mult_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36057 = f__35236__auto__.call(null);
(statearr_36057[(6)] = c__35235__auto___36058);

return statearr_36057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
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
var G__36116 = arguments.length;
switch (G__36116) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36118 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36118.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36119 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36119.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36120 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36120.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36121 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36121.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36122 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36122.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36133 = arguments.length;
var i__4737__auto___36134 = (0);
while(true){
if((i__4737__auto___36134 < len__4736__auto___36133)){
args__4742__auto__.push((arguments[i__4737__auto___36134]));

var G__36135 = (i__4737__auto___36134 + (1));
i__4737__auto___36134 = G__36135;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36127){
var map__36128 = p__36127;
var map__36128__$1 = (((((!((map__36128 == null))))?(((((map__36128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36128):map__36128);
var opts = map__36128__$1;
var statearr_36130_36136 = state;
(statearr_36130_36136[(1)] = cont_block);


var temp__5743__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_36131_36137 = state;
(statearr_36131_36137[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5743__auto__)){
var cb = temp__5743__auto__;
var statearr_36132_36138 = state;
(statearr_36132_36138[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36123){
var G__36124 = cljs.core.first.call(null,seq36123);
var seq36123__$1 = cljs.core.next.call(null,seq36123);
var G__36125 = cljs.core.first.call(null,seq36123__$1);
var seq36123__$2 = cljs.core.next.call(null,seq36123__$1);
var G__36126 = cljs.core.first.call(null,seq36123__$2);
var seq36123__$3 = cljs.core.next.call(null,seq36123__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36124,G__36125,G__36126,seq36123__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36139 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36140){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36140 = meta36140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36141,meta36140__$1){
var self__ = this;
var _36141__$1 = this;
return (new cljs.core.async.t_cljs$core$async36139(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36140__$1));
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36141){
var self__ = this;
var _36141__$1 = this;
return self__.meta36140;
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36140","meta36140",1040248769,null)], null);
}));

(cljs.core.async.t_cljs$core$async36139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36139");

(cljs.core.async.t_cljs$core$async36139.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36139.
 */
cljs.core.async.__GT_t_cljs$core$async36139 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36140){
return (new cljs.core.async.t_cljs$core$async36139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36140));
});

}

return (new cljs.core.async.t_cljs$core$async36139(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35235__auto___36303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36243){
var state_val_36244 = (state_36243[(1)]);
if((state_val_36244 === (7))){
var inst_36158 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36245_36304 = state_36243__$1;
(statearr_36245_36304[(2)] = inst_36158);

(statearr_36245_36304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (20))){
var inst_36170 = (state_36243[(7)]);
var state_36243__$1 = state_36243;
var statearr_36246_36305 = state_36243__$1;
(statearr_36246_36305[(2)] = inst_36170);

(statearr_36246_36305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (27))){
var state_36243__$1 = state_36243;
var statearr_36247_36306 = state_36243__$1;
(statearr_36247_36306[(2)] = null);

(statearr_36247_36306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (1))){
var inst_36145 = (state_36243[(8)]);
var inst_36145__$1 = calc_state.call(null);
var inst_36147 = (inst_36145__$1 == null);
var inst_36148 = cljs.core.not.call(null,inst_36147);
var state_36243__$1 = (function (){var statearr_36248 = state_36243;
(statearr_36248[(8)] = inst_36145__$1);

return statearr_36248;
})();
if(inst_36148){
var statearr_36249_36307 = state_36243__$1;
(statearr_36249_36307[(1)] = (2));

} else {
var statearr_36250_36308 = state_36243__$1;
(statearr_36250_36308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (24))){
var inst_36217 = (state_36243[(9)]);
var inst_36203 = (state_36243[(10)]);
var inst_36194 = (state_36243[(11)]);
var inst_36217__$1 = inst_36194.call(null,inst_36203);
var state_36243__$1 = (function (){var statearr_36251 = state_36243;
(statearr_36251[(9)] = inst_36217__$1);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36217__$1)){
var statearr_36252_36309 = state_36243__$1;
(statearr_36252_36309[(1)] = (29));

} else {
var statearr_36253_36310 = state_36243__$1;
(statearr_36253_36310[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (4))){
var inst_36161 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36161)){
var statearr_36254_36311 = state_36243__$1;
(statearr_36254_36311[(1)] = (8));

} else {
var statearr_36255_36312 = state_36243__$1;
(statearr_36255_36312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (15))){
var inst_36188 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36188)){
var statearr_36256_36313 = state_36243__$1;
(statearr_36256_36313[(1)] = (19));

} else {
var statearr_36257_36314 = state_36243__$1;
(statearr_36257_36314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (21))){
var inst_36193 = (state_36243[(12)]);
var inst_36193__$1 = (state_36243[(2)]);
var inst_36194 = cljs.core.get.call(null,inst_36193__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36195 = cljs.core.get.call(null,inst_36193__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36196 = cljs.core.get.call(null,inst_36193__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36243__$1 = (function (){var statearr_36258 = state_36243;
(statearr_36258[(11)] = inst_36194);

(statearr_36258[(13)] = inst_36195);

(statearr_36258[(12)] = inst_36193__$1);

return statearr_36258;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36243__$1,(22),inst_36196);
} else {
if((state_val_36244 === (31))){
var inst_36225 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36225)){
var statearr_36259_36315 = state_36243__$1;
(statearr_36259_36315[(1)] = (32));

} else {
var statearr_36260_36316 = state_36243__$1;
(statearr_36260_36316[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (32))){
var inst_36202 = (state_36243[(14)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(35),out,inst_36202);
} else {
if((state_val_36244 === (33))){
var inst_36193 = (state_36243[(12)]);
var inst_36170 = inst_36193;
var state_36243__$1 = (function (){var statearr_36261 = state_36243;
(statearr_36261[(7)] = inst_36170);

return statearr_36261;
})();
var statearr_36262_36317 = state_36243__$1;
(statearr_36262_36317[(2)] = null);

(statearr_36262_36317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (13))){
var inst_36170 = (state_36243[(7)]);
var inst_36177 = inst_36170.cljs$lang$protocol_mask$partition0$;
var inst_36178 = (inst_36177 & (64));
var inst_36179 = inst_36170.cljs$core$ISeq$;
var inst_36180 = (cljs.core.PROTOCOL_SENTINEL === inst_36179);
var inst_36181 = ((inst_36178) || (inst_36180));
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36181)){
var statearr_36263_36318 = state_36243__$1;
(statearr_36263_36318[(1)] = (16));

} else {
var statearr_36264_36319 = state_36243__$1;
(statearr_36264_36319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (22))){
var inst_36203 = (state_36243[(10)]);
var inst_36202 = (state_36243[(14)]);
var inst_36201 = (state_36243[(2)]);
var inst_36202__$1 = cljs.core.nth.call(null,inst_36201,(0),null);
var inst_36203__$1 = cljs.core.nth.call(null,inst_36201,(1),null);
var inst_36204 = (inst_36202__$1 == null);
var inst_36205 = cljs.core._EQ_.call(null,inst_36203__$1,change);
var inst_36206 = ((inst_36204) || (inst_36205));
var state_36243__$1 = (function (){var statearr_36265 = state_36243;
(statearr_36265[(10)] = inst_36203__$1);

(statearr_36265[(14)] = inst_36202__$1);

return statearr_36265;
})();
if(cljs.core.truth_(inst_36206)){
var statearr_36266_36320 = state_36243__$1;
(statearr_36266_36320[(1)] = (23));

} else {
var statearr_36267_36321 = state_36243__$1;
(statearr_36267_36321[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (36))){
var inst_36193 = (state_36243[(12)]);
var inst_36170 = inst_36193;
var state_36243__$1 = (function (){var statearr_36268 = state_36243;
(statearr_36268[(7)] = inst_36170);

return statearr_36268;
})();
var statearr_36269_36322 = state_36243__$1;
(statearr_36269_36322[(2)] = null);

(statearr_36269_36322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (29))){
var inst_36217 = (state_36243[(9)]);
var state_36243__$1 = state_36243;
var statearr_36270_36323 = state_36243__$1;
(statearr_36270_36323[(2)] = inst_36217);

(statearr_36270_36323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (6))){
var state_36243__$1 = state_36243;
var statearr_36271_36324 = state_36243__$1;
(statearr_36271_36324[(2)] = false);

(statearr_36271_36324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (28))){
var inst_36213 = (state_36243[(2)]);
var inst_36214 = calc_state.call(null);
var inst_36170 = inst_36214;
var state_36243__$1 = (function (){var statearr_36272 = state_36243;
(statearr_36272[(15)] = inst_36213);

(statearr_36272[(7)] = inst_36170);

return statearr_36272;
})();
var statearr_36273_36325 = state_36243__$1;
(statearr_36273_36325[(2)] = null);

(statearr_36273_36325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (25))){
var inst_36239 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36274_36326 = state_36243__$1;
(statearr_36274_36326[(2)] = inst_36239);

(statearr_36274_36326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (34))){
var inst_36237 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36275_36327 = state_36243__$1;
(statearr_36275_36327[(2)] = inst_36237);

(statearr_36275_36327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (17))){
var state_36243__$1 = state_36243;
var statearr_36276_36328 = state_36243__$1;
(statearr_36276_36328[(2)] = false);

(statearr_36276_36328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (3))){
var state_36243__$1 = state_36243;
var statearr_36277_36329 = state_36243__$1;
(statearr_36277_36329[(2)] = false);

(statearr_36277_36329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (12))){
var inst_36241 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36243__$1,inst_36241);
} else {
if((state_val_36244 === (2))){
var inst_36145 = (state_36243[(8)]);
var inst_36150 = inst_36145.cljs$lang$protocol_mask$partition0$;
var inst_36151 = (inst_36150 & (64));
var inst_36152 = inst_36145.cljs$core$ISeq$;
var inst_36153 = (cljs.core.PROTOCOL_SENTINEL === inst_36152);
var inst_36154 = ((inst_36151) || (inst_36153));
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36154)){
var statearr_36278_36330 = state_36243__$1;
(statearr_36278_36330[(1)] = (5));

} else {
var statearr_36279_36331 = state_36243__$1;
(statearr_36279_36331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (23))){
var inst_36202 = (state_36243[(14)]);
var inst_36208 = (inst_36202 == null);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36208)){
var statearr_36280_36332 = state_36243__$1;
(statearr_36280_36332[(1)] = (26));

} else {
var statearr_36281_36333 = state_36243__$1;
(statearr_36281_36333[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (35))){
var inst_36228 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36228)){
var statearr_36282_36334 = state_36243__$1;
(statearr_36282_36334[(1)] = (36));

} else {
var statearr_36283_36335 = state_36243__$1;
(statearr_36283_36335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (19))){
var inst_36170 = (state_36243[(7)]);
var inst_36190 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36170);
var state_36243__$1 = state_36243;
var statearr_36284_36336 = state_36243__$1;
(statearr_36284_36336[(2)] = inst_36190);

(statearr_36284_36336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (11))){
var inst_36170 = (state_36243[(7)]);
var inst_36174 = (inst_36170 == null);
var inst_36175 = cljs.core.not.call(null,inst_36174);
var state_36243__$1 = state_36243;
if(inst_36175){
var statearr_36285_36337 = state_36243__$1;
(statearr_36285_36337[(1)] = (13));

} else {
var statearr_36286_36338 = state_36243__$1;
(statearr_36286_36338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (9))){
var inst_36145 = (state_36243[(8)]);
var state_36243__$1 = state_36243;
var statearr_36287_36339 = state_36243__$1;
(statearr_36287_36339[(2)] = inst_36145);

(statearr_36287_36339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (5))){
var state_36243__$1 = state_36243;
var statearr_36288_36340 = state_36243__$1;
(statearr_36288_36340[(2)] = true);

(statearr_36288_36340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (14))){
var state_36243__$1 = state_36243;
var statearr_36289_36341 = state_36243__$1;
(statearr_36289_36341[(2)] = false);

(statearr_36289_36341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (26))){
var inst_36203 = (state_36243[(10)]);
var inst_36210 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36203);
var state_36243__$1 = state_36243;
var statearr_36290_36342 = state_36243__$1;
(statearr_36290_36342[(2)] = inst_36210);

(statearr_36290_36342[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (16))){
var state_36243__$1 = state_36243;
var statearr_36291_36343 = state_36243__$1;
(statearr_36291_36343[(2)] = true);

(statearr_36291_36343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (38))){
var inst_36233 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36292_36344 = state_36243__$1;
(statearr_36292_36344[(2)] = inst_36233);

(statearr_36292_36344[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (30))){
var inst_36203 = (state_36243[(10)]);
var inst_36194 = (state_36243[(11)]);
var inst_36195 = (state_36243[(13)]);
var inst_36220 = cljs.core.empty_QMARK_.call(null,inst_36194);
var inst_36221 = inst_36195.call(null,inst_36203);
var inst_36222 = cljs.core.not.call(null,inst_36221);
var inst_36223 = ((inst_36220) && (inst_36222));
var state_36243__$1 = state_36243;
var statearr_36293_36345 = state_36243__$1;
(statearr_36293_36345[(2)] = inst_36223);

(statearr_36293_36345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (10))){
var inst_36145 = (state_36243[(8)]);
var inst_36166 = (state_36243[(2)]);
var inst_36167 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36168 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36169 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36170 = inst_36145;
var state_36243__$1 = (function (){var statearr_36294 = state_36243;
(statearr_36294[(16)] = inst_36167);

(statearr_36294[(17)] = inst_36169);

(statearr_36294[(18)] = inst_36168);

(statearr_36294[(7)] = inst_36170);

return statearr_36294;
})();
var statearr_36295_36346 = state_36243__$1;
(statearr_36295_36346[(2)] = null);

(statearr_36295_36346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (18))){
var inst_36185 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36296_36347 = state_36243__$1;
(statearr_36296_36347[(2)] = inst_36185);

(statearr_36296_36347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (37))){
var state_36243__$1 = state_36243;
var statearr_36297_36348 = state_36243__$1;
(statearr_36297_36348[(2)] = null);

(statearr_36297_36348[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (8))){
var inst_36145 = (state_36243[(8)]);
var inst_36163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36145);
var state_36243__$1 = state_36243;
var statearr_36298_36349 = state_36243__$1;
(statearr_36298_36349[(2)] = inst_36163);

(statearr_36298_36349[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__35141__auto__ = null;
var cljs$core$async$mix_$_state_machine__35141__auto____0 = (function (){
var statearr_36299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36299[(0)] = cljs$core$async$mix_$_state_machine__35141__auto__);

(statearr_36299[(1)] = (1));

return statearr_36299;
});
var cljs$core$async$mix_$_state_machine__35141__auto____1 = (function (state_36243){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36300){if((e36300 instanceof Object)){
var ex__35144__auto__ = e36300;
var statearr_36301_36350 = state_36243;
(statearr_36301_36350[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36351 = state_36243;
state_36243 = G__36351;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35141__auto__ = function(state_36243){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35141__auto____1.call(this,state_36243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35141__auto____0;
cljs$core$async$mix_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35141__auto____1;
return cljs$core$async$mix_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36302 = f__35236__auto__.call(null);
(statearr_36302[(6)] = c__35235__auto___36303);

return statearr_36302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36354 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36354.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36355 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36355.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36356 = (function() {
var G__36357 = null;
var G__36357__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__36357__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__36357 = function(p,v){
switch(arguments.length){
case 1:
return G__36357__1.call(this,p);
case 2:
return G__36357__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36357.cljs$core$IFn$_invoke$arity$1 = G__36357__1;
G__36357.cljs$core$IFn$_invoke$arity$2 = G__36357__2;
return G__36357;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36353 = arguments.length;
switch (G__36353) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36356.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36356.call(null,p,v);
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
var G__36361 = arguments.length;
switch (G__36361) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__36359_SHARP_){
if(cljs.core.truth_(p1__36359_SHARP_.call(null,topic))){
return p1__36359_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36359_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36362 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36363){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36363 = meta36363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36364,meta36363__$1){
var self__ = this;
var _36364__$1 = this;
return (new cljs.core.async.t_cljs$core$async36362(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36363__$1));
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36364){
var self__ = this;
var _36364__$1 = this;
return self__.meta36363;
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5743__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5743__auto__)){
var m = temp__5743__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36363","meta36363",297710205,null)], null);
}));

(cljs.core.async.t_cljs$core$async36362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36362");

(cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36362.
 */
cljs.core.async.__GT_t_cljs$core$async36362 = (function cljs$core$async$__GT_t_cljs$core$async36362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36363){
return (new cljs.core.async.t_cljs$core$async36362(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36363));
});

}

return (new cljs.core.async.t_cljs$core$async36362(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35235__auto___36482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36436){
var state_val_36437 = (state_36436[(1)]);
if((state_val_36437 === (7))){
var inst_36432 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36438_36483 = state_36436__$1;
(statearr_36438_36483[(2)] = inst_36432);

(statearr_36438_36483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (20))){
var state_36436__$1 = state_36436;
var statearr_36439_36484 = state_36436__$1;
(statearr_36439_36484[(2)] = null);

(statearr_36439_36484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (1))){
var state_36436__$1 = state_36436;
var statearr_36440_36485 = state_36436__$1;
(statearr_36440_36485[(2)] = null);

(statearr_36440_36485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (24))){
var inst_36415 = (state_36436[(7)]);
var inst_36424 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36415);
var state_36436__$1 = state_36436;
var statearr_36441_36486 = state_36436__$1;
(statearr_36441_36486[(2)] = inst_36424);

(statearr_36441_36486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (4))){
var inst_36367 = (state_36436[(8)]);
var inst_36367__$1 = (state_36436[(2)]);
var inst_36368 = (inst_36367__$1 == null);
var state_36436__$1 = (function (){var statearr_36442 = state_36436;
(statearr_36442[(8)] = inst_36367__$1);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36368)){
var statearr_36443_36487 = state_36436__$1;
(statearr_36443_36487[(1)] = (5));

} else {
var statearr_36444_36488 = state_36436__$1;
(statearr_36444_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (15))){
var inst_36409 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36445_36489 = state_36436__$1;
(statearr_36445_36489[(2)] = inst_36409);

(statearr_36445_36489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (21))){
var inst_36429 = (state_36436[(2)]);
var state_36436__$1 = (function (){var statearr_36446 = state_36436;
(statearr_36446[(9)] = inst_36429);

return statearr_36446;
})();
var statearr_36447_36490 = state_36436__$1;
(statearr_36447_36490[(2)] = null);

(statearr_36447_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (13))){
var inst_36391 = (state_36436[(10)]);
var inst_36393 = cljs.core.chunked_seq_QMARK_.call(null,inst_36391);
var state_36436__$1 = state_36436;
if(inst_36393){
var statearr_36448_36491 = state_36436__$1;
(statearr_36448_36491[(1)] = (16));

} else {
var statearr_36449_36492 = state_36436__$1;
(statearr_36449_36492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (22))){
var inst_36421 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36421)){
var statearr_36450_36493 = state_36436__$1;
(statearr_36450_36493[(1)] = (23));

} else {
var statearr_36451_36494 = state_36436__$1;
(statearr_36451_36494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (6))){
var inst_36415 = (state_36436[(7)]);
var inst_36367 = (state_36436[(8)]);
var inst_36417 = (state_36436[(11)]);
var inst_36415__$1 = topic_fn.call(null,inst_36367);
var inst_36416 = cljs.core.deref.call(null,mults);
var inst_36417__$1 = cljs.core.get.call(null,inst_36416,inst_36415__$1);
var state_36436__$1 = (function (){var statearr_36452 = state_36436;
(statearr_36452[(7)] = inst_36415__$1);

(statearr_36452[(11)] = inst_36417__$1);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36417__$1)){
var statearr_36453_36495 = state_36436__$1;
(statearr_36453_36495[(1)] = (19));

} else {
var statearr_36454_36496 = state_36436__$1;
(statearr_36454_36496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (25))){
var inst_36426 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36455_36497 = state_36436__$1;
(statearr_36455_36497[(2)] = inst_36426);

(statearr_36455_36497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (17))){
var inst_36391 = (state_36436[(10)]);
var inst_36400 = cljs.core.first.call(null,inst_36391);
var inst_36401 = cljs.core.async.muxch_STAR_.call(null,inst_36400);
var inst_36402 = cljs.core.async.close_BANG_.call(null,inst_36401);
var inst_36403 = cljs.core.next.call(null,inst_36391);
var inst_36377 = inst_36403;
var inst_36378 = null;
var inst_36379 = (0);
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36456 = state_36436;
(statearr_36456[(12)] = inst_36380);

(statearr_36456[(13)] = inst_36378);

(statearr_36456[(14)] = inst_36402);

(statearr_36456[(15)] = inst_36377);

(statearr_36456[(16)] = inst_36379);

return statearr_36456;
})();
var statearr_36457_36498 = state_36436__$1;
(statearr_36457_36498[(2)] = null);

(statearr_36457_36498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (3))){
var inst_36434 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36436__$1,inst_36434);
} else {
if((state_val_36437 === (12))){
var inst_36411 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36458_36499 = state_36436__$1;
(statearr_36458_36499[(2)] = inst_36411);

(statearr_36458_36499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (2))){
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36436__$1,(4),ch);
} else {
if((state_val_36437 === (23))){
var state_36436__$1 = state_36436;
var statearr_36459_36500 = state_36436__$1;
(statearr_36459_36500[(2)] = null);

(statearr_36459_36500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (19))){
var inst_36367 = (state_36436[(8)]);
var inst_36417 = (state_36436[(11)]);
var inst_36419 = cljs.core.async.muxch_STAR_.call(null,inst_36417);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36436__$1,(22),inst_36419,inst_36367);
} else {
if((state_val_36437 === (11))){
var inst_36377 = (state_36436[(15)]);
var inst_36391 = (state_36436[(10)]);
var inst_36391__$1 = cljs.core.seq.call(null,inst_36377);
var state_36436__$1 = (function (){var statearr_36460 = state_36436;
(statearr_36460[(10)] = inst_36391__$1);

return statearr_36460;
})();
if(inst_36391__$1){
var statearr_36461_36501 = state_36436__$1;
(statearr_36461_36501[(1)] = (13));

} else {
var statearr_36462_36502 = state_36436__$1;
(statearr_36462_36502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (9))){
var inst_36413 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36463_36503 = state_36436__$1;
(statearr_36463_36503[(2)] = inst_36413);

(statearr_36463_36503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (5))){
var inst_36374 = cljs.core.deref.call(null,mults);
var inst_36375 = cljs.core.vals.call(null,inst_36374);
var inst_36376 = cljs.core.seq.call(null,inst_36375);
var inst_36377 = inst_36376;
var inst_36378 = null;
var inst_36379 = (0);
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36464 = state_36436;
(statearr_36464[(12)] = inst_36380);

(statearr_36464[(13)] = inst_36378);

(statearr_36464[(15)] = inst_36377);

(statearr_36464[(16)] = inst_36379);

return statearr_36464;
})();
var statearr_36465_36504 = state_36436__$1;
(statearr_36465_36504[(2)] = null);

(statearr_36465_36504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (14))){
var state_36436__$1 = state_36436;
var statearr_36469_36505 = state_36436__$1;
(statearr_36469_36505[(2)] = null);

(statearr_36469_36505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (16))){
var inst_36391 = (state_36436[(10)]);
var inst_36395 = cljs.core.chunk_first.call(null,inst_36391);
var inst_36396 = cljs.core.chunk_rest.call(null,inst_36391);
var inst_36397 = cljs.core.count.call(null,inst_36395);
var inst_36377 = inst_36396;
var inst_36378 = inst_36395;
var inst_36379 = inst_36397;
var inst_36380 = (0);
var state_36436__$1 = (function (){var statearr_36470 = state_36436;
(statearr_36470[(12)] = inst_36380);

(statearr_36470[(13)] = inst_36378);

(statearr_36470[(15)] = inst_36377);

(statearr_36470[(16)] = inst_36379);

return statearr_36470;
})();
var statearr_36471_36506 = state_36436__$1;
(statearr_36471_36506[(2)] = null);

(statearr_36471_36506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (10))){
var inst_36380 = (state_36436[(12)]);
var inst_36378 = (state_36436[(13)]);
var inst_36377 = (state_36436[(15)]);
var inst_36379 = (state_36436[(16)]);
var inst_36385 = cljs.core._nth.call(null,inst_36378,inst_36380);
var inst_36386 = cljs.core.async.muxch_STAR_.call(null,inst_36385);
var inst_36387 = cljs.core.async.close_BANG_.call(null,inst_36386);
var inst_36388 = (inst_36380 + (1));
var tmp36466 = inst_36378;
var tmp36467 = inst_36377;
var tmp36468 = inst_36379;
var inst_36377__$1 = tmp36467;
var inst_36378__$1 = tmp36466;
var inst_36379__$1 = tmp36468;
var inst_36380__$1 = inst_36388;
var state_36436__$1 = (function (){var statearr_36472 = state_36436;
(statearr_36472[(12)] = inst_36380__$1);

(statearr_36472[(13)] = inst_36378__$1);

(statearr_36472[(17)] = inst_36387);

(statearr_36472[(15)] = inst_36377__$1);

(statearr_36472[(16)] = inst_36379__$1);

return statearr_36472;
})();
var statearr_36473_36507 = state_36436__$1;
(statearr_36473_36507[(2)] = null);

(statearr_36473_36507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (18))){
var inst_36406 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36474_36508 = state_36436__$1;
(statearr_36474_36508[(2)] = inst_36406);

(statearr_36474_36508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (8))){
var inst_36380 = (state_36436[(12)]);
var inst_36379 = (state_36436[(16)]);
var inst_36382 = (inst_36380 < inst_36379);
var inst_36383 = inst_36382;
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36383)){
var statearr_36475_36509 = state_36436__$1;
(statearr_36475_36509[(1)] = (10));

} else {
var statearr_36476_36510 = state_36436__$1;
(statearr_36476_36510[(1)] = (11));

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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36436){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__35144__auto__ = e36478;
var statearr_36479_36511 = state_36436;
(statearr_36479_36511[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36512 = state_36436;
state_36436 = G__36512;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36480 = f__35236__auto__.call(null);
(statearr_36480[(6)] = c__35235__auto___36482);

return statearr_36480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
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
var G__36514 = arguments.length;
switch (G__36514) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36517 = arguments.length;
switch (G__36517) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__36520 = arguments.length;
switch (G__36520) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__35235__auto___36587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36559){
var state_val_36560 = (state_36559[(1)]);
if((state_val_36560 === (7))){
var state_36559__$1 = state_36559;
var statearr_36561_36588 = state_36559__$1;
(statearr_36561_36588[(2)] = null);

(statearr_36561_36588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (1))){
var state_36559__$1 = state_36559;
var statearr_36562_36589 = state_36559__$1;
(statearr_36562_36589[(2)] = null);

(statearr_36562_36589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (4))){
var inst_36523 = (state_36559[(7)]);
var inst_36525 = (inst_36523 < cnt);
var state_36559__$1 = state_36559;
if(cljs.core.truth_(inst_36525)){
var statearr_36563_36590 = state_36559__$1;
(statearr_36563_36590[(1)] = (6));

} else {
var statearr_36564_36591 = state_36559__$1;
(statearr_36564_36591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (15))){
var inst_36555 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36565_36592 = state_36559__$1;
(statearr_36565_36592[(2)] = inst_36555);

(statearr_36565_36592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (13))){
var inst_36548 = cljs.core.async.close_BANG_.call(null,out);
var state_36559__$1 = state_36559;
var statearr_36566_36593 = state_36559__$1;
(statearr_36566_36593[(2)] = inst_36548);

(statearr_36566_36593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (6))){
var state_36559__$1 = state_36559;
var statearr_36567_36594 = state_36559__$1;
(statearr_36567_36594[(2)] = null);

(statearr_36567_36594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (3))){
var inst_36557 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36559__$1,inst_36557);
} else {
if((state_val_36560 === (12))){
var inst_36545 = (state_36559[(8)]);
var inst_36545__$1 = (state_36559[(2)]);
var inst_36546 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36545__$1);
var state_36559__$1 = (function (){var statearr_36568 = state_36559;
(statearr_36568[(8)] = inst_36545__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36546)){
var statearr_36569_36595 = state_36559__$1;
(statearr_36569_36595[(1)] = (13));

} else {
var statearr_36570_36596 = state_36559__$1;
(statearr_36570_36596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (2))){
var inst_36522 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36523 = (0);
var state_36559__$1 = (function (){var statearr_36571 = state_36559;
(statearr_36571[(7)] = inst_36523);

(statearr_36571[(9)] = inst_36522);

return statearr_36571;
})();
var statearr_36572_36597 = state_36559__$1;
(statearr_36572_36597[(2)] = null);

(statearr_36572_36597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (11))){
var inst_36523 = (state_36559[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36559,(10),Object,null,(9));
var inst_36532 = chs__$1.call(null,inst_36523);
var inst_36533 = done.call(null,inst_36523);
var inst_36534 = cljs.core.async.take_BANG_.call(null,inst_36532,inst_36533);
var state_36559__$1 = state_36559;
var statearr_36573_36598 = state_36559__$1;
(statearr_36573_36598[(2)] = inst_36534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (9))){
var inst_36523 = (state_36559[(7)]);
var inst_36536 = (state_36559[(2)]);
var inst_36537 = (inst_36523 + (1));
var inst_36523__$1 = inst_36537;
var state_36559__$1 = (function (){var statearr_36574 = state_36559;
(statearr_36574[(7)] = inst_36523__$1);

(statearr_36574[(10)] = inst_36536);

return statearr_36574;
})();
var statearr_36575_36599 = state_36559__$1;
(statearr_36575_36599[(2)] = null);

(statearr_36575_36599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (5))){
var inst_36543 = (state_36559[(2)]);
var state_36559__$1 = (function (){var statearr_36576 = state_36559;
(statearr_36576[(11)] = inst_36543);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36559__$1,(12),dchan);
} else {
if((state_val_36560 === (14))){
var inst_36545 = (state_36559[(8)]);
var inst_36550 = cljs.core.apply.call(null,f,inst_36545);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36559__$1,(16),out,inst_36550);
} else {
if((state_val_36560 === (16))){
var inst_36552 = (state_36559[(2)]);
var state_36559__$1 = (function (){var statearr_36577 = state_36559;
(statearr_36577[(12)] = inst_36552);

return statearr_36577;
})();
var statearr_36578_36600 = state_36559__$1;
(statearr_36578_36600[(2)] = null);

(statearr_36578_36600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (10))){
var inst_36527 = (state_36559[(2)]);
var inst_36528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36559__$1 = (function (){var statearr_36579 = state_36559;
(statearr_36579[(13)] = inst_36527);

return statearr_36579;
})();
var statearr_36580_36601 = state_36559__$1;
(statearr_36580_36601[(2)] = inst_36528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (8))){
var inst_36541 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36581_36602 = state_36559__$1;
(statearr_36581_36602[(2)] = inst_36541);

(statearr_36581_36602[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36582[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36582[(1)] = (1));

return statearr_36582;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36559){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36583){if((e36583 instanceof Object)){
var ex__35144__auto__ = e36583;
var statearr_36584_36603 = state_36559;
(statearr_36584_36603[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36604 = state_36559;
state_36559 = G__36604;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36585 = f__35236__auto__.call(null);
(statearr_36585[(6)] = c__35235__auto___36587);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
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
var G__36607 = arguments.length;
switch (G__36607) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___36661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (7))){
var inst_36619 = (state_36639[(7)]);
var inst_36618 = (state_36639[(8)]);
var inst_36618__$1 = (state_36639[(2)]);
var inst_36619__$1 = cljs.core.nth.call(null,inst_36618__$1,(0),null);
var inst_36620 = cljs.core.nth.call(null,inst_36618__$1,(1),null);
var inst_36621 = (inst_36619__$1 == null);
var state_36639__$1 = (function (){var statearr_36641 = state_36639;
(statearr_36641[(7)] = inst_36619__$1);

(statearr_36641[(9)] = inst_36620);

(statearr_36641[(8)] = inst_36618__$1);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36642_36662 = state_36639__$1;
(statearr_36642_36662[(1)] = (8));

} else {
var statearr_36643_36663 = state_36639__$1;
(statearr_36643_36663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (1))){
var inst_36608 = cljs.core.vec.call(null,chs);
var inst_36609 = inst_36608;
var state_36639__$1 = (function (){var statearr_36644 = state_36639;
(statearr_36644[(10)] = inst_36609);

return statearr_36644;
})();
var statearr_36645_36664 = state_36639__$1;
(statearr_36645_36664[(2)] = null);

(statearr_36645_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (4))){
var inst_36609 = (state_36639[(10)]);
var state_36639__$1 = state_36639;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36639__$1,(7),inst_36609);
} else {
if((state_val_36640 === (6))){
var inst_36635 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36646_36665 = state_36639__$1;
(statearr_36646_36665[(2)] = inst_36635);

(statearr_36646_36665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (3))){
var inst_36637 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (2))){
var inst_36609 = (state_36639[(10)]);
var inst_36611 = cljs.core.count.call(null,inst_36609);
var inst_36612 = (inst_36611 > (0));
var state_36639__$1 = state_36639;
if(cljs.core.truth_(inst_36612)){
var statearr_36648_36666 = state_36639__$1;
(statearr_36648_36666[(1)] = (4));

} else {
var statearr_36649_36667 = state_36639__$1;
(statearr_36649_36667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (11))){
var inst_36609 = (state_36639[(10)]);
var inst_36628 = (state_36639[(2)]);
var tmp36647 = inst_36609;
var inst_36609__$1 = tmp36647;
var state_36639__$1 = (function (){var statearr_36650 = state_36639;
(statearr_36650[(11)] = inst_36628);

(statearr_36650[(10)] = inst_36609__$1);

return statearr_36650;
})();
var statearr_36651_36668 = state_36639__$1;
(statearr_36651_36668[(2)] = null);

(statearr_36651_36668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (9))){
var inst_36619 = (state_36639[(7)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36639__$1,(11),out,inst_36619);
} else {
if((state_val_36640 === (5))){
var inst_36633 = cljs.core.async.close_BANG_.call(null,out);
var state_36639__$1 = state_36639;
var statearr_36652_36669 = state_36639__$1;
(statearr_36652_36669[(2)] = inst_36633);

(statearr_36652_36669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (10))){
var inst_36631 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36653_36670 = state_36639__$1;
(statearr_36653_36670[(2)] = inst_36631);

(statearr_36653_36670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36609 = (state_36639[(10)]);
var inst_36619 = (state_36639[(7)]);
var inst_36620 = (state_36639[(9)]);
var inst_36618 = (state_36639[(8)]);
var inst_36623 = (function (){var cs = inst_36609;
var vec__36614 = inst_36618;
var v = inst_36619;
var c = inst_36620;
return (function (p1__36605_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36605_SHARP_);
});
})();
var inst_36624 = cljs.core.filterv.call(null,inst_36623,inst_36609);
var inst_36609__$1 = inst_36624;
var state_36639__$1 = (function (){var statearr_36654 = state_36639;
(statearr_36654[(10)] = inst_36609__$1);

return statearr_36654;
})();
var statearr_36655_36671 = state_36639__$1;
(statearr_36655_36671[(2)] = null);

(statearr_36655_36671[(1)] = (2));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36656[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36656[(1)] = (1));

return statearr_36656;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36639){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36657){if((e36657 instanceof Object)){
var ex__35144__auto__ = e36657;
var statearr_36658_36672 = state_36639;
(statearr_36658_36672[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36673 = state_36639;
state_36639 = G__36673;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36659 = f__35236__auto__.call(null);
(statearr_36659[(6)] = c__35235__auto___36661);

return statearr_36659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36675 = arguments.length;
switch (G__36675) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___36720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36699){
var state_val_36700 = (state_36699[(1)]);
if((state_val_36700 === (7))){
var inst_36681 = (state_36699[(7)]);
var inst_36681__$1 = (state_36699[(2)]);
var inst_36682 = (inst_36681__$1 == null);
var inst_36683 = cljs.core.not.call(null,inst_36682);
var state_36699__$1 = (function (){var statearr_36701 = state_36699;
(statearr_36701[(7)] = inst_36681__$1);

return statearr_36701;
})();
if(inst_36683){
var statearr_36702_36721 = state_36699__$1;
(statearr_36702_36721[(1)] = (8));

} else {
var statearr_36703_36722 = state_36699__$1;
(statearr_36703_36722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (1))){
var inst_36676 = (0);
var state_36699__$1 = (function (){var statearr_36704 = state_36699;
(statearr_36704[(8)] = inst_36676);

return statearr_36704;
})();
var statearr_36705_36723 = state_36699__$1;
(statearr_36705_36723[(2)] = null);

(statearr_36705_36723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (4))){
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36699__$1,(7),ch);
} else {
if((state_val_36700 === (6))){
var inst_36694 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36706_36724 = state_36699__$1;
(statearr_36706_36724[(2)] = inst_36694);

(statearr_36706_36724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (3))){
var inst_36696 = (state_36699[(2)]);
var inst_36697 = cljs.core.async.close_BANG_.call(null,out);
var state_36699__$1 = (function (){var statearr_36707 = state_36699;
(statearr_36707[(9)] = inst_36696);

return statearr_36707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36699__$1,inst_36697);
} else {
if((state_val_36700 === (2))){
var inst_36676 = (state_36699[(8)]);
var inst_36678 = (inst_36676 < n);
var state_36699__$1 = state_36699;
if(cljs.core.truth_(inst_36678)){
var statearr_36708_36725 = state_36699__$1;
(statearr_36708_36725[(1)] = (4));

} else {
var statearr_36709_36726 = state_36699__$1;
(statearr_36709_36726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (11))){
var inst_36676 = (state_36699[(8)]);
var inst_36686 = (state_36699[(2)]);
var inst_36687 = (inst_36676 + (1));
var inst_36676__$1 = inst_36687;
var state_36699__$1 = (function (){var statearr_36710 = state_36699;
(statearr_36710[(10)] = inst_36686);

(statearr_36710[(8)] = inst_36676__$1);

return statearr_36710;
})();
var statearr_36711_36727 = state_36699__$1;
(statearr_36711_36727[(2)] = null);

(statearr_36711_36727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (9))){
var state_36699__$1 = state_36699;
var statearr_36712_36728 = state_36699__$1;
(statearr_36712_36728[(2)] = null);

(statearr_36712_36728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (5))){
var state_36699__$1 = state_36699;
var statearr_36713_36729 = state_36699__$1;
(statearr_36713_36729[(2)] = null);

(statearr_36713_36729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (10))){
var inst_36691 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36714_36730 = state_36699__$1;
(statearr_36714_36730[(2)] = inst_36691);

(statearr_36714_36730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (8))){
var inst_36681 = (state_36699[(7)]);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36699__$1,(11),out,inst_36681);
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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36715[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36715[(1)] = (1));

return statearr_36715;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36699){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36716){if((e36716 instanceof Object)){
var ex__35144__auto__ = e36716;
var statearr_36717_36731 = state_36699;
(statearr_36717_36731[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36732 = state_36699;
state_36699 = G__36732;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36718 = f__35236__auto__.call(null);
(statearr_36718[(6)] = c__35235__auto___36720);

return statearr_36718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36734 = (function (f,ch,meta36735){
this.f = f;
this.ch = ch;
this.meta36735 = meta36735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36736,meta36735__$1){
var self__ = this;
var _36736__$1 = this;
return (new cljs.core.async.t_cljs$core$async36734(self__.f,self__.ch,meta36735__$1));
}));

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36736){
var self__ = this;
var _36736__$1 = this;
return self__.meta36735;
}));

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36737 = (function (f,ch,meta36735,_,fn1,meta36738){
this.f = f;
this.ch = ch;
this.meta36735 = meta36735;
this._ = _;
this.fn1 = fn1;
this.meta36738 = meta36738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36739,meta36738__$1){
var self__ = this;
var _36739__$1 = this;
return (new cljs.core.async.t_cljs$core$async36737(self__.f,self__.ch,self__.meta36735,self__._,self__.fn1,meta36738__$1));
}));

(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36739){
var self__ = this;
var _36739__$1 = this;
return self__.meta36738;
}));

(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__36733_SHARP_){
return f1.call(null,(((p1__36733_SHARP_ == null))?null:self__.f.call(null,p1__36733_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async36737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36735","meta36735",-996541028,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36734","cljs.core.async/t_cljs$core$async36734",-1971003005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36738","meta36738",709772470,null)], null);
}));

(cljs.core.async.t_cljs$core$async36737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36737");

(cljs.core.async.t_cljs$core$async36737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36737.
 */
cljs.core.async.__GT_t_cljs$core$async36737 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36737(f__$1,ch__$1,meta36735__$1,___$2,fn1__$1,meta36738){
return (new cljs.core.async.t_cljs$core$async36737(f__$1,ch__$1,meta36735__$1,___$2,fn1__$1,meta36738));
});

}

return (new cljs.core.async.t_cljs$core$async36737(self__.f,self__.ch,self__.meta36735,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36735","meta36735",-996541028,null)], null);
}));

(cljs.core.async.t_cljs$core$async36734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36734");

(cljs.core.async.t_cljs$core$async36734.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36734.
 */
cljs.core.async.__GT_t_cljs$core$async36734 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36734(f__$1,ch__$1,meta36735){
return (new cljs.core.async.t_cljs$core$async36734(f__$1,ch__$1,meta36735));
});

}

return (new cljs.core.async.t_cljs$core$async36734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36740 = (function (f,ch,meta36741){
this.f = f;
this.ch = ch;
this.meta36741 = meta36741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36742,meta36741__$1){
var self__ = this;
var _36742__$1 = this;
return (new cljs.core.async.t_cljs$core$async36740(self__.f,self__.ch,meta36741__$1));
}));

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36742){
var self__ = this;
var _36742__$1 = this;
return self__.meta36741;
}));

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async36740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36741","meta36741",1116262105,null)], null);
}));

(cljs.core.async.t_cljs$core$async36740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36740");

(cljs.core.async.t_cljs$core$async36740.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36740.
 */
cljs.core.async.__GT_t_cljs$core$async36740 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36740(f__$1,ch__$1,meta36741){
return (new cljs.core.async.t_cljs$core$async36740(f__$1,ch__$1,meta36741));
});

}

return (new cljs.core.async.t_cljs$core$async36740(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36743 = (function (p,ch,meta36744){
this.p = p;
this.ch = ch;
this.meta36744 = meta36744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36745,meta36744__$1){
var self__ = this;
var _36745__$1 = this;
return (new cljs.core.async.t_cljs$core$async36743(self__.p,self__.ch,meta36744__$1));
}));

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36745){
var self__ = this;
var _36745__$1 = this;
return self__.meta36744;
}));

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36744","meta36744",-482989596,null)], null);
}));

(cljs.core.async.t_cljs$core$async36743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36743");

(cljs.core.async.t_cljs$core$async36743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36743.
 */
cljs.core.async.__GT_t_cljs$core$async36743 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36743(p__$1,ch__$1,meta36744){
return (new cljs.core.async.t_cljs$core$async36743(p__$1,ch__$1,meta36744));
});

}

return (new cljs.core.async.t_cljs$core$async36743(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36747 = arguments.length;
switch (G__36747) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___36787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36770_36788 = state_36768__$1;
(statearr_36770_36788[(2)] = inst_36764);

(statearr_36770_36788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var state_36768__$1 = state_36768;
var statearr_36771_36789 = state_36768__$1;
(statearr_36771_36789[(2)] = null);

(statearr_36771_36789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36750 = (state_36768[(7)]);
var inst_36750__$1 = (state_36768[(2)]);
var inst_36751 = (inst_36750__$1 == null);
var state_36768__$1 = (function (){var statearr_36772 = state_36768;
(statearr_36772[(7)] = inst_36750__$1);

return statearr_36772;
})();
if(cljs.core.truth_(inst_36751)){
var statearr_36773_36790 = state_36768__$1;
(statearr_36773_36790[(1)] = (5));

} else {
var statearr_36774_36791 = state_36768__$1;
(statearr_36774_36791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36750 = (state_36768[(7)]);
var inst_36755 = p.call(null,inst_36750);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36755)){
var statearr_36775_36792 = state_36768__$1;
(statearr_36775_36792[(1)] = (8));

} else {
var statearr_36776_36793 = state_36768__$1;
(statearr_36776_36793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (3))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (2))){
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36768__$1,(4),ch);
} else {
if((state_val_36769 === (11))){
var inst_36758 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36777_36794 = state_36768__$1;
(statearr_36777_36794[(2)] = inst_36758);

(statearr_36777_36794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (9))){
var state_36768__$1 = state_36768;
var statearr_36778_36795 = state_36768__$1;
(statearr_36778_36795[(2)] = null);

(statearr_36778_36795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (5))){
var inst_36753 = cljs.core.async.close_BANG_.call(null,out);
var state_36768__$1 = state_36768;
var statearr_36779_36796 = state_36768__$1;
(statearr_36779_36796[(2)] = inst_36753);

(statearr_36779_36796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36761 = (state_36768[(2)]);
var state_36768__$1 = (function (){var statearr_36780 = state_36768;
(statearr_36780[(8)] = inst_36761);

return statearr_36780;
})();
var statearr_36781_36797 = state_36768__$1;
(statearr_36781_36797[(2)] = null);

(statearr_36781_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36750 = (state_36768[(7)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36768__$1,(11),out,inst_36750);
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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36782 = [null,null,null,null,null,null,null,null,null];
(statearr_36782[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36782[(1)] = (1));

return statearr_36782;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36768){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36783){if((e36783 instanceof Object)){
var ex__35144__auto__ = e36783;
var statearr_36784_36798 = state_36768;
(statearr_36784_36798[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36799 = state_36768;
state_36768 = G__36799;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36785 = f__35236__auto__.call(null);
(statearr_36785[(6)] = c__35235__auto___36787);

return statearr_36785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36801 = arguments.length;
switch (G__36801) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36864){
var state_val_36865 = (state_36864[(1)]);
if((state_val_36865 === (7))){
var inst_36860 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36866_36904 = state_36864__$1;
(statearr_36866_36904[(2)] = inst_36860);

(statearr_36866_36904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (20))){
var inst_36830 = (state_36864[(7)]);
var inst_36841 = (state_36864[(2)]);
var inst_36842 = cljs.core.next.call(null,inst_36830);
var inst_36816 = inst_36842;
var inst_36817 = null;
var inst_36818 = (0);
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36867 = state_36864;
(statearr_36867[(8)] = inst_36818);

(statearr_36867[(9)] = inst_36816);

(statearr_36867[(10)] = inst_36819);

(statearr_36867[(11)] = inst_36841);

(statearr_36867[(12)] = inst_36817);

return statearr_36867;
})();
var statearr_36868_36905 = state_36864__$1;
(statearr_36868_36905[(2)] = null);

(statearr_36868_36905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (1))){
var state_36864__$1 = state_36864;
var statearr_36869_36906 = state_36864__$1;
(statearr_36869_36906[(2)] = null);

(statearr_36869_36906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (4))){
var inst_36805 = (state_36864[(13)]);
var inst_36805__$1 = (state_36864[(2)]);
var inst_36806 = (inst_36805__$1 == null);
var state_36864__$1 = (function (){var statearr_36870 = state_36864;
(statearr_36870[(13)] = inst_36805__$1);

return statearr_36870;
})();
if(cljs.core.truth_(inst_36806)){
var statearr_36871_36907 = state_36864__$1;
(statearr_36871_36907[(1)] = (5));

} else {
var statearr_36872_36908 = state_36864__$1;
(statearr_36872_36908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (15))){
var state_36864__$1 = state_36864;
var statearr_36876_36909 = state_36864__$1;
(statearr_36876_36909[(2)] = null);

(statearr_36876_36909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (21))){
var state_36864__$1 = state_36864;
var statearr_36877_36910 = state_36864__$1;
(statearr_36877_36910[(2)] = null);

(statearr_36877_36910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (13))){
var inst_36818 = (state_36864[(8)]);
var inst_36816 = (state_36864[(9)]);
var inst_36819 = (state_36864[(10)]);
var inst_36817 = (state_36864[(12)]);
var inst_36826 = (state_36864[(2)]);
var inst_36827 = (inst_36819 + (1));
var tmp36873 = inst_36818;
var tmp36874 = inst_36816;
var tmp36875 = inst_36817;
var inst_36816__$1 = tmp36874;
var inst_36817__$1 = tmp36875;
var inst_36818__$1 = tmp36873;
var inst_36819__$1 = inst_36827;
var state_36864__$1 = (function (){var statearr_36878 = state_36864;
(statearr_36878[(8)] = inst_36818__$1);

(statearr_36878[(9)] = inst_36816__$1);

(statearr_36878[(14)] = inst_36826);

(statearr_36878[(10)] = inst_36819__$1);

(statearr_36878[(12)] = inst_36817__$1);

return statearr_36878;
})();
var statearr_36879_36911 = state_36864__$1;
(statearr_36879_36911[(2)] = null);

(statearr_36879_36911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (22))){
var state_36864__$1 = state_36864;
var statearr_36880_36912 = state_36864__$1;
(statearr_36880_36912[(2)] = null);

(statearr_36880_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (6))){
var inst_36805 = (state_36864[(13)]);
var inst_36814 = f.call(null,inst_36805);
var inst_36815 = cljs.core.seq.call(null,inst_36814);
var inst_36816 = inst_36815;
var inst_36817 = null;
var inst_36818 = (0);
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36881 = state_36864;
(statearr_36881[(8)] = inst_36818);

(statearr_36881[(9)] = inst_36816);

(statearr_36881[(10)] = inst_36819);

(statearr_36881[(12)] = inst_36817);

return statearr_36881;
})();
var statearr_36882_36913 = state_36864__$1;
(statearr_36882_36913[(2)] = null);

(statearr_36882_36913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (17))){
var inst_36830 = (state_36864[(7)]);
var inst_36834 = cljs.core.chunk_first.call(null,inst_36830);
var inst_36835 = cljs.core.chunk_rest.call(null,inst_36830);
var inst_36836 = cljs.core.count.call(null,inst_36834);
var inst_36816 = inst_36835;
var inst_36817 = inst_36834;
var inst_36818 = inst_36836;
var inst_36819 = (0);
var state_36864__$1 = (function (){var statearr_36883 = state_36864;
(statearr_36883[(8)] = inst_36818);

(statearr_36883[(9)] = inst_36816);

(statearr_36883[(10)] = inst_36819);

(statearr_36883[(12)] = inst_36817);

return statearr_36883;
})();
var statearr_36884_36914 = state_36864__$1;
(statearr_36884_36914[(2)] = null);

(statearr_36884_36914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (3))){
var inst_36862 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else {
if((state_val_36865 === (12))){
var inst_36850 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36885_36915 = state_36864__$1;
(statearr_36885_36915[(2)] = inst_36850);

(statearr_36885_36915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (2))){
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36864__$1,(4),in$);
} else {
if((state_val_36865 === (23))){
var inst_36858 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36886_36916 = state_36864__$1;
(statearr_36886_36916[(2)] = inst_36858);

(statearr_36886_36916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (19))){
var inst_36845 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36887_36917 = state_36864__$1;
(statearr_36887_36917[(2)] = inst_36845);

(statearr_36887_36917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (11))){
var inst_36816 = (state_36864[(9)]);
var inst_36830 = (state_36864[(7)]);
var inst_36830__$1 = cljs.core.seq.call(null,inst_36816);
var state_36864__$1 = (function (){var statearr_36888 = state_36864;
(statearr_36888[(7)] = inst_36830__$1);

return statearr_36888;
})();
if(inst_36830__$1){
var statearr_36889_36918 = state_36864__$1;
(statearr_36889_36918[(1)] = (14));

} else {
var statearr_36890_36919 = state_36864__$1;
(statearr_36890_36919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (9))){
var inst_36852 = (state_36864[(2)]);
var inst_36853 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36864__$1 = (function (){var statearr_36891 = state_36864;
(statearr_36891[(15)] = inst_36852);

return statearr_36891;
})();
if(cljs.core.truth_(inst_36853)){
var statearr_36892_36920 = state_36864__$1;
(statearr_36892_36920[(1)] = (21));

} else {
var statearr_36893_36921 = state_36864__$1;
(statearr_36893_36921[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (5))){
var inst_36808 = cljs.core.async.close_BANG_.call(null,out);
var state_36864__$1 = state_36864;
var statearr_36894_36922 = state_36864__$1;
(statearr_36894_36922[(2)] = inst_36808);

(statearr_36894_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (14))){
var inst_36830 = (state_36864[(7)]);
var inst_36832 = cljs.core.chunked_seq_QMARK_.call(null,inst_36830);
var state_36864__$1 = state_36864;
if(inst_36832){
var statearr_36895_36923 = state_36864__$1;
(statearr_36895_36923[(1)] = (17));

} else {
var statearr_36896_36924 = state_36864__$1;
(statearr_36896_36924[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (16))){
var inst_36848 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36897_36925 = state_36864__$1;
(statearr_36897_36925[(2)] = inst_36848);

(statearr_36897_36925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (10))){
var inst_36819 = (state_36864[(10)]);
var inst_36817 = (state_36864[(12)]);
var inst_36824 = cljs.core._nth.call(null,inst_36817,inst_36819);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(13),out,inst_36824);
} else {
if((state_val_36865 === (18))){
var inst_36830 = (state_36864[(7)]);
var inst_36839 = cljs.core.first.call(null,inst_36830);
var state_36864__$1 = state_36864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(20),out,inst_36839);
} else {
if((state_val_36865 === (8))){
var inst_36818 = (state_36864[(8)]);
var inst_36819 = (state_36864[(10)]);
var inst_36821 = (inst_36819 < inst_36818);
var inst_36822 = inst_36821;
var state_36864__$1 = state_36864;
if(cljs.core.truth_(inst_36822)){
var statearr_36898_36926 = state_36864__$1;
(statearr_36898_36926[(1)] = (10));

} else {
var statearr_36899_36927 = state_36864__$1;
(statearr_36899_36927[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____1 = (function (state_36864){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__35144__auto__ = e36901;
var statearr_36902_36928 = state_36864;
(statearr_36902_36928[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_36864;
state_36864 = G__36929;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35141__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36903 = f__35236__auto__.call(null);
(statearr_36903[(6)] = c__35235__auto__);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36931 = arguments.length;
switch (G__36931) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36934 = arguments.length;
switch (G__36934) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36937 = arguments.length;
switch (G__36937) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___36984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_36961){
var state_val_36962 = (state_36961[(1)]);
if((state_val_36962 === (7))){
var inst_36956 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36963_36985 = state_36961__$1;
(statearr_36963_36985[(2)] = inst_36956);

(statearr_36963_36985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (1))){
var inst_36938 = null;
var state_36961__$1 = (function (){var statearr_36964 = state_36961;
(statearr_36964[(7)] = inst_36938);

return statearr_36964;
})();
var statearr_36965_36986 = state_36961__$1;
(statearr_36965_36986[(2)] = null);

(statearr_36965_36986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (4))){
var inst_36941 = (state_36961[(8)]);
var inst_36941__$1 = (state_36961[(2)]);
var inst_36942 = (inst_36941__$1 == null);
var inst_36943 = cljs.core.not.call(null,inst_36942);
var state_36961__$1 = (function (){var statearr_36966 = state_36961;
(statearr_36966[(8)] = inst_36941__$1);

return statearr_36966;
})();
if(inst_36943){
var statearr_36967_36987 = state_36961__$1;
(statearr_36967_36987[(1)] = (5));

} else {
var statearr_36968_36988 = state_36961__$1;
(statearr_36968_36988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (6))){
var state_36961__$1 = state_36961;
var statearr_36969_36989 = state_36961__$1;
(statearr_36969_36989[(2)] = null);

(statearr_36969_36989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (3))){
var inst_36958 = (state_36961[(2)]);
var inst_36959 = cljs.core.async.close_BANG_.call(null,out);
var state_36961__$1 = (function (){var statearr_36970 = state_36961;
(statearr_36970[(9)] = inst_36958);

return statearr_36970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36961__$1,inst_36959);
} else {
if((state_val_36962 === (2))){
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36961__$1,(4),ch);
} else {
if((state_val_36962 === (11))){
var inst_36941 = (state_36961[(8)]);
var inst_36950 = (state_36961[(2)]);
var inst_36938 = inst_36941;
var state_36961__$1 = (function (){var statearr_36971 = state_36961;
(statearr_36971[(7)] = inst_36938);

(statearr_36971[(10)] = inst_36950);

return statearr_36971;
})();
var statearr_36972_36990 = state_36961__$1;
(statearr_36972_36990[(2)] = null);

(statearr_36972_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (9))){
var inst_36941 = (state_36961[(8)]);
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36961__$1,(11),out,inst_36941);
} else {
if((state_val_36962 === (5))){
var inst_36938 = (state_36961[(7)]);
var inst_36941 = (state_36961[(8)]);
var inst_36945 = cljs.core._EQ_.call(null,inst_36941,inst_36938);
var state_36961__$1 = state_36961;
if(inst_36945){
var statearr_36974_36991 = state_36961__$1;
(statearr_36974_36991[(1)] = (8));

} else {
var statearr_36975_36992 = state_36961__$1;
(statearr_36975_36992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (10))){
var inst_36953 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36976_36993 = state_36961__$1;
(statearr_36976_36993[(2)] = inst_36953);

(statearr_36976_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (8))){
var inst_36938 = (state_36961[(7)]);
var tmp36973 = inst_36938;
var inst_36938__$1 = tmp36973;
var state_36961__$1 = (function (){var statearr_36977 = state_36961;
(statearr_36977[(7)] = inst_36938__$1);

return statearr_36977;
})();
var statearr_36978_36994 = state_36961__$1;
(statearr_36978_36994[(2)] = null);

(statearr_36978_36994[(1)] = (2));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_36979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36979[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_36979[(1)] = (1));

return statearr_36979;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_36961){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_36961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e36980){if((e36980 instanceof Object)){
var ex__35144__auto__ = e36980;
var statearr_36981_36995 = state_36961;
(statearr_36981_36995[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36996 = state_36961;
state_36961 = G__36996;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_36961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_36961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_36982 = f__35236__auto__.call(null);
(statearr_36982[(6)] = c__35235__auto___36984);

return statearr_36982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36998 = arguments.length;
switch (G__36998) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___37064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_37036){
var state_val_37037 = (state_37036[(1)]);
if((state_val_37037 === (7))){
var inst_37032 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37038_37065 = state_37036__$1;
(statearr_37038_37065[(2)] = inst_37032);

(statearr_37038_37065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (1))){
var inst_36999 = (new Array(n));
var inst_37000 = inst_36999;
var inst_37001 = (0);
var state_37036__$1 = (function (){var statearr_37039 = state_37036;
(statearr_37039[(7)] = inst_37000);

(statearr_37039[(8)] = inst_37001);

return statearr_37039;
})();
var statearr_37040_37066 = state_37036__$1;
(statearr_37040_37066[(2)] = null);

(statearr_37040_37066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (4))){
var inst_37004 = (state_37036[(9)]);
var inst_37004__$1 = (state_37036[(2)]);
var inst_37005 = (inst_37004__$1 == null);
var inst_37006 = cljs.core.not.call(null,inst_37005);
var state_37036__$1 = (function (){var statearr_37041 = state_37036;
(statearr_37041[(9)] = inst_37004__$1);

return statearr_37041;
})();
if(inst_37006){
var statearr_37042_37067 = state_37036__$1;
(statearr_37042_37067[(1)] = (5));

} else {
var statearr_37043_37068 = state_37036__$1;
(statearr_37043_37068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (15))){
var inst_37026 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37044_37069 = state_37036__$1;
(statearr_37044_37069[(2)] = inst_37026);

(statearr_37044_37069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (13))){
var state_37036__$1 = state_37036;
var statearr_37045_37070 = state_37036__$1;
(statearr_37045_37070[(2)] = null);

(statearr_37045_37070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (6))){
var inst_37001 = (state_37036[(8)]);
var inst_37022 = (inst_37001 > (0));
var state_37036__$1 = state_37036;
if(cljs.core.truth_(inst_37022)){
var statearr_37046_37071 = state_37036__$1;
(statearr_37046_37071[(1)] = (12));

} else {
var statearr_37047_37072 = state_37036__$1;
(statearr_37047_37072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (3))){
var inst_37034 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37036__$1,inst_37034);
} else {
if((state_val_37037 === (12))){
var inst_37000 = (state_37036[(7)]);
var inst_37024 = cljs.core.vec.call(null,inst_37000);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,(15),out,inst_37024);
} else {
if((state_val_37037 === (2))){
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37036__$1,(4),ch);
} else {
if((state_val_37037 === (11))){
var inst_37016 = (state_37036[(2)]);
var inst_37017 = (new Array(n));
var inst_37000 = inst_37017;
var inst_37001 = (0);
var state_37036__$1 = (function (){var statearr_37048 = state_37036;
(statearr_37048[(7)] = inst_37000);

(statearr_37048[(8)] = inst_37001);

(statearr_37048[(10)] = inst_37016);

return statearr_37048;
})();
var statearr_37049_37073 = state_37036__$1;
(statearr_37049_37073[(2)] = null);

(statearr_37049_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (9))){
var inst_37000 = (state_37036[(7)]);
var inst_37014 = cljs.core.vec.call(null,inst_37000);
var state_37036__$1 = state_37036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37036__$1,(11),out,inst_37014);
} else {
if((state_val_37037 === (5))){
var inst_37009 = (state_37036[(11)]);
var inst_37000 = (state_37036[(7)]);
var inst_37004 = (state_37036[(9)]);
var inst_37001 = (state_37036[(8)]);
var inst_37008 = (inst_37000[inst_37001] = inst_37004);
var inst_37009__$1 = (inst_37001 + (1));
var inst_37010 = (inst_37009__$1 < n);
var state_37036__$1 = (function (){var statearr_37050 = state_37036;
(statearr_37050[(12)] = inst_37008);

(statearr_37050[(11)] = inst_37009__$1);

return statearr_37050;
})();
if(cljs.core.truth_(inst_37010)){
var statearr_37051_37074 = state_37036__$1;
(statearr_37051_37074[(1)] = (8));

} else {
var statearr_37052_37075 = state_37036__$1;
(statearr_37052_37075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (14))){
var inst_37029 = (state_37036[(2)]);
var inst_37030 = cljs.core.async.close_BANG_.call(null,out);
var state_37036__$1 = (function (){var statearr_37054 = state_37036;
(statearr_37054[(13)] = inst_37029);

return statearr_37054;
})();
var statearr_37055_37076 = state_37036__$1;
(statearr_37055_37076[(2)] = inst_37030);

(statearr_37055_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (10))){
var inst_37020 = (state_37036[(2)]);
var state_37036__$1 = state_37036;
var statearr_37056_37077 = state_37036__$1;
(statearr_37056_37077[(2)] = inst_37020);

(statearr_37056_37077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37037 === (8))){
var inst_37009 = (state_37036[(11)]);
var inst_37000 = (state_37036[(7)]);
var tmp37053 = inst_37000;
var inst_37000__$1 = tmp37053;
var inst_37001 = inst_37009;
var state_37036__$1 = (function (){var statearr_37057 = state_37036;
(statearr_37057[(7)] = inst_37000__$1);

(statearr_37057[(8)] = inst_37001);

return statearr_37057;
})();
var statearr_37058_37078 = state_37036__$1;
(statearr_37058_37078[(2)] = null);

(statearr_37058_37078[(1)] = (2));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_37059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37059[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_37059[(1)] = (1));

return statearr_37059;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_37036){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_37036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e37060){if((e37060 instanceof Object)){
var ex__35144__auto__ = e37060;
var statearr_37061_37079 = state_37036;
(statearr_37061_37079[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37080 = state_37036;
state_37036 = G__37080;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_37036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_37036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_37062 = f__35236__auto__.call(null);
(statearr_37062[(6)] = c__35235__auto___37064);

return statearr_37062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37082 = arguments.length;
switch (G__37082) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35235__auto___37152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37126_37153 = state_37124__$1;
(statearr_37126_37153[(2)] = inst_37120);

(statearr_37126_37153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var inst_37083 = [];
var inst_37084 = inst_37083;
var inst_37085 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37124__$1 = (function (){var statearr_37127 = state_37124;
(statearr_37127[(7)] = inst_37085);

(statearr_37127[(8)] = inst_37084);

return statearr_37127;
})();
var statearr_37128_37154 = state_37124__$1;
(statearr_37128_37154[(2)] = null);

(statearr_37128_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37088 = (state_37124[(9)]);
var inst_37088__$1 = (state_37124[(2)]);
var inst_37089 = (inst_37088__$1 == null);
var inst_37090 = cljs.core.not.call(null,inst_37089);
var state_37124__$1 = (function (){var statearr_37129 = state_37124;
(statearr_37129[(9)] = inst_37088__$1);

return statearr_37129;
})();
if(inst_37090){
var statearr_37130_37155 = state_37124__$1;
(statearr_37130_37155[(1)] = (5));

} else {
var statearr_37131_37156 = state_37124__$1;
(statearr_37131_37156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (15))){
var inst_37114 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37132_37157 = state_37124__$1;
(statearr_37132_37157[(2)] = inst_37114);

(statearr_37132_37157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var state_37124__$1 = state_37124;
var statearr_37133_37158 = state_37124__$1;
(statearr_37133_37158[(2)] = null);

(statearr_37133_37158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37084 = (state_37124[(8)]);
var inst_37109 = inst_37084.length;
var inst_37110 = (inst_37109 > (0));
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37110)){
var statearr_37134_37159 = state_37124__$1;
(statearr_37134_37159[(1)] = (12));

} else {
var statearr_37135_37160 = state_37124__$1;
(statearr_37135_37160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var inst_37084 = (state_37124[(8)]);
var inst_37112 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(15),out,inst_37112);
} else {
if((state_val_37125 === (2))){
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37124__$1,(4),ch);
} else {
if((state_val_37125 === (11))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37102 = (state_37124[(2)]);
var inst_37103 = [];
var inst_37104 = inst_37103.push(inst_37088);
var inst_37084 = inst_37103;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37136 = state_37124;
(statearr_37136[(7)] = inst_37085);

(statearr_37136[(11)] = inst_37104);

(statearr_37136[(12)] = inst_37102);

(statearr_37136[(8)] = inst_37084);

return statearr_37136;
})();
var statearr_37137_37161 = state_37124__$1;
(statearr_37137_37161[(2)] = null);

(statearr_37137_37161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var inst_37084 = (state_37124[(8)]);
var inst_37100 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(11),out,inst_37100);
} else {
if((state_val_37125 === (5))){
var inst_37085 = (state_37124[(7)]);
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37092__$1 = f.call(null,inst_37088);
var inst_37093 = cljs.core._EQ_.call(null,inst_37092__$1,inst_37085);
var inst_37094 = cljs.core.keyword_identical_QMARK_.call(null,inst_37085,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37095 = ((inst_37093) || (inst_37094));
var state_37124__$1 = (function (){var statearr_37138 = state_37124;
(statearr_37138[(10)] = inst_37092__$1);

return statearr_37138;
})();
if(cljs.core.truth_(inst_37095)){
var statearr_37139_37162 = state_37124__$1;
(statearr_37139_37162[(1)] = (8));

} else {
var statearr_37140_37163 = state_37124__$1;
(statearr_37140_37163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_37117 = (state_37124[(2)]);
var inst_37118 = cljs.core.async.close_BANG_.call(null,out);
var state_37124__$1 = (function (){var statearr_37142 = state_37124;
(statearr_37142[(13)] = inst_37117);

return statearr_37142;
})();
var statearr_37143_37164 = state_37124__$1;
(statearr_37143_37164[(2)] = inst_37118);

(statearr_37143_37164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37107 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37144_37165 = state_37124__$1;
(statearr_37144_37165[(2)] = inst_37107);

(statearr_37144_37165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37084 = (state_37124[(8)]);
var inst_37097 = inst_37084.push(inst_37088);
var tmp37141 = inst_37084;
var inst_37084__$1 = tmp37141;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37145 = state_37124;
(statearr_37145[(7)] = inst_37085);

(statearr_37145[(14)] = inst_37097);

(statearr_37145[(8)] = inst_37084__$1);

return statearr_37145;
})();
var statearr_37146_37166 = state_37124__$1;
(statearr_37146_37166[(2)] = null);

(statearr_37146_37166[(1)] = (2));


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
var cljs$core$async$state_machine__35141__auto__ = null;
var cljs$core$async$state_machine__35141__auto____0 = (function (){
var statearr_37147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37147[(0)] = cljs$core$async$state_machine__35141__auto__);

(statearr_37147[(1)] = (1));

return statearr_37147;
});
var cljs$core$async$state_machine__35141__auto____1 = (function (state_37124){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e37148){if((e37148 instanceof Object)){
var ex__35144__auto__ = e37148;
var statearr_37149_37167 = state_37124;
(statearr_37149_37167[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_37124;
state_37124 = G__37168;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
cljs$core$async$state_machine__35141__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35141__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35141__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35141__auto____0;
cljs$core$async$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35141__auto____1;
return cljs$core$async$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_37150 = f__35236__auto__.call(null);
(statearr_37150[(6)] = c__35235__auto___37152);

return statearr_37150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1604387935771
