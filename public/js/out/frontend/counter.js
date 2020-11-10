// Compiled by ClojureScript 1.10.773 {}
goog.provide('frontend.counter');
goog.require('cljs.core');
goog.require('frontend.dom');
goog.require('frontend.websocket');
goog.require('rum.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.coercion.spec');
goog.require('spec_tools.data_spec');
goog.require('cljsjs.react');
cljs.core.enable_console_print_BANG_.call(null);
frontend.counter.toggle_button = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (state,row){
var local_atom = new cljs.core.Keyword("frontend.counter","key","frontend.counter/key",1971243077).cljs$core$IFn$_invoke$arity$1(state);
var toggle = (function (x){
if((x === (0))){
return (1);
} else {
return (0);
}
});
return daiquiri.core.create_element.call(null,"input",{'name':row,'type':"radio",'onClick':(function (_){
console.log(local_atom);

return cljs.core.swap_BANG_.call(null,local_atom,toggle);
})},[]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,(1),new cljs.core.Keyword("frontend.counter","key","frontend.counter/key",1971243077))], null),"frontend.counter/toggle-button");
frontend.counter.button_row = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (){
var x = cljs.core.gensym.call(null);
return daiquiri.core.create_element.call(null,"fieldset",null,[cljs.core.into_array.call(null,(function (){var iter__4529__auto__ = (function frontend$counter$iter__32282(s__32283){
return (new cljs.core.LazySeq(null,(function (){
var s__32283__$1 = s__32283;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__32283__$1);
if(temp__5743__auto__){
var s__32283__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32283__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32283__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32285 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32284 = (0);
while(true){
if((i__32284 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__32284);
cljs.core.chunk_append.call(null,b__32285,frontend.counter.toggle_button.call(null,x));

var G__32286 = (i__32284 + (1));
i__32284 = G__32286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32285),frontend$counter$iter__32282.call(null,cljs.core.chunk_rest.call(null,s__32283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32285),null);
}
} else {
var n = cljs.core.first.call(null,s__32283__$2);
return cljs.core.cons.call(null,frontend.counter.toggle_button.call(null,x),frontend$counter$iter__32282.call(null,cljs.core.rest.call(null,s__32283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(12)));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),"frontend.counter/button-row");
frontend.counter.fretboard = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (){
return cljs.core.into_array.call(null,(function (){var iter__4529__auto__ = (function frontend$counter$iter__32287(s__32288){
return (new cljs.core.LazySeq(null,(function (){
var s__32288__$1 = s__32288;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__32288__$1);
if(temp__5743__auto__){
var s__32288__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32288__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32288__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32290 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32289 = (0);
while(true){
if((i__32289 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__32289);
cljs.core.chunk_append.call(null,b__32290,daiquiri.core.create_element.call(null,"li",null,[(function (){var attrs32291 = n;
return daiquiri.core.create_element.call(null,"label",((cljs.core.map_QMARK_.call(null,attrs32291))?daiquiri.interpreter.attributes.call(null,attrs32291):null),((cljs.core.map_QMARK_.call(null,attrs32291))?[frontend.counter.button_row.call(null)]:[daiquiri.interpreter.interpret.call(null,attrs32291),frontend.counter.button_row.call(null)]));
})()]));

var G__32292 = (i__32289 + (1));
i__32289 = G__32292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32290),frontend$counter$iter__32287.call(null,cljs.core.chunk_rest.call(null,s__32288__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32290),null);
}
} else {
var n = cljs.core.first.call(null,s__32288__$2);
return cljs.core.cons.call(null,daiquiri.core.create_element.call(null,"li",null,[(function (){var attrs32291 = n;
return daiquiri.core.create_element.call(null,"label",((cljs.core.map_QMARK_.call(null,attrs32291))?daiquiri.interpreter.attributes.call(null,attrs32291):null),((cljs.core.map_QMARK_.call(null,attrs32291))?[frontend.counter.button_row.call(null)]:[daiquiri.interpreter.interpret.call(null,attrs32291),frontend.counter.button_row.call(null)]));
})()]),frontend$counter$iter__32287.call(null,cljs.core.rest.call(null,s__32288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(6)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),"frontend.counter/fretboard");
frontend.counter.sign_up_form = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (){
return daiquiri.core.create_element.call(null,"div",{'className':"sign-up-form-wrapper"},[daiquiri.core.create_element.call(null,"form",{'className':"sign-up-form"},[daiquiri.core.create_element.call(null,"h2",null,["Sign Up"]),daiquiri.core.create_element.call(null,"label",null,["Username"]),daiquiri.core.create_element.call(null,"input",{'type':"text"},null),daiquiri.core.create_element.call(null,"label",null,["Email"]),daiquiri.core.create_element.call(null,"input",{'type':"text"},null),daiquiri.core.create_element.call(null,"label",null,["Password"]),daiquiri.core.create_element.call(null,"input",{'type':"password"},null),daiquiri.core.create_element.call(null,"label",null,["Confirm Password"]),daiquiri.core.create_element.call(null,"input",{'type':"password"},null),daiquiri.core.create_element.call(null,"button",null,["Sign Up"])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),"frontend.counter/sign-up-form");
frontend.counter.comments = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I am a comment"], null));
frontend.counter.add_comment = (function frontend$counter$add_comment(m){
return cljs.core.swap_BANG_.call(null,frontend.counter.comments,cljs.core.conj,m);
});
frontend.counter.comment_list = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (){
return daiquiri.core.create_element.call(null,"div",{'className':"comment-list-wrapper"},[daiquiri.core.create_element.call(null,"ul",null,[cljs.core.into_array.call(null,(function (){var iter__4529__auto__ = (function frontend$counter$iter__32295(s__32296){
return (new cljs.core.LazySeq(null,(function (){
var s__32296__$1 = s__32296;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__32296__$1);
if(temp__5743__auto__){
var s__32296__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32296__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32296__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32298 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32297 = (0);
while(true){
if((i__32297 < size__4528__auto__)){
var comment = cljs.core._nth.call(null,c__4527__auto__,i__32297);
cljs.core.chunk_append.call(null,b__32298,daiquiri.core.create_element.call(null,"li",null,[cljs.core.pr_str.call(null,comment)]));

var G__32299 = (i__32297 + (1));
i__32297 = G__32299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),frontend$counter$iter__32295.call(null,cljs.core.chunk_rest.call(null,s__32296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),null);
}
} else {
var comment = cljs.core.first.call(null,s__32296__$2);
return cljs.core.cons.call(null,daiquiri.core.create_element.call(null,"li",null,[cljs.core.pr_str.call(null,comment)]),frontend$counter$iter__32295.call(null,cljs.core.rest.call(null,s__32296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,frontend.counter.comments));
})())])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),"frontend.counter/comment-list");
frontend.counter.post_comment_form = rum.core.lazy_build.call(null,rum.core.build_defcs,(function (){
return daiquiri.core.create_element.call(null,"div",{'className':"sign-up-form-wrapper"},[daiquiri.core.create_element.call(null,"form",{'className':"sign-up-form"},[daiquiri.core.create_element.call(null,"h2",null,["Post  Comment"]),frontend.counter.comment_list.call(null,frontend.counter.comments),daiquiri.core.create_element.call(null,"label",null,["Comment"]),daiquiri.core.create_element.call(null,"input",{'type':"textarea"},null),daiquiri.core.create_element.call(null,"button",{'onClick':(function (e){
e.preventDefault();

return console.log(frontend.dom.q.call(null,"form.sign-up-form>input[type=textarea]").value);
})},["Submit"])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (p1__32300_SHARP_,p2__32301_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(p1__32300_SHARP_),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(p2__32301_SHARP_));
})], null)], null),"frontend.counter/post-comment-form");
frontend.counter.app = rum.core.lazy_build.call(null,rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.sign_up_form.call(null),frontend.counter.post_comment_form.call(null)], null));
}),null,"frontend.counter/app");
frontend.counter.init_BANG_ = (function frontend$counter$init_BANG_(){
return rum.core.mount.call(null,frontend.counter.post_comment_form.call(null),document.getElementById("app"));
});

//# sourceMappingURL=counter.js.map?rel=1604432927121
