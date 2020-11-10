// Compiled by ClojureScript 1.10.773 {}
goog.provide('frontend.websocket');
goog.require('cljs.core');
goog.require('cognitect.transit');
if((typeof frontend !== 'undefined') && (typeof frontend.websocket !== 'undefined') && (typeof frontend.websocket.ws_chan !== 'undefined')){
} else {
frontend.websocket.ws_chan = cljs.core.atom.call(null,null);
}
frontend.websocket.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
frontend.websocket.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
frontend.websocket.receive_transit_msg_BANG_ = (function frontend$websocket$receive_transit_msg_BANG_(update_fn){
return (function (msg){
return update_fn.call(null,cognitect.transit.read.call(null,frontend.websocket.json_reader,msg.data));
});
});
frontend.websocket.send_transit_msg_BANG_ = (function frontend$websocket$send_transit_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,frontend.websocket.ws_chan))){
return cljs.core.deref.call(null,frontend.websocket.ws_chan).send(cognitect.transit.write.call(null,frontend.websocket.json_writer,msg));
} else {
throw (new Error("Websocket is not available!"));
}
});
frontend.websocket.make_websocket_BANG_ = (function frontend$websocket$make_websocket_BANG_(url,receive_handler){
cljs.core.println.call(null,"attempting to connect websocket");

var temp__5741__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5741__auto__)){
var chan = temp__5741__auto__;
(chan.onmessage = frontend.websocket.receive_transit_msg_BANG_.call(null,receive_handler));

cljs.core.reset_BANG_.call(null,frontend.websocket.ws_chan,chan);

return cljs.core.println.call(null,"Websocket connection established with: ",url);
} else {
throw (new Error("Websocket connection failed!"));
}
});

//# sourceMappingURL=websocket.js.map?rel=1604432490415
