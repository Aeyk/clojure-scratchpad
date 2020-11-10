// Compiled by ClojureScript 1.10.773 {}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.core.set.call(null,x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,x);

}
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22863,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22867 = k22863;
var G__22867__$1 = (((G__22867 instanceof cljs.core.Keyword))?G__22867.fqn:null);
switch (G__22867__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22863,else__4383__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22868){
var vec__22869 = p__22868;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22869,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22869,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Wild{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22862){
var self__ = this;
var G__22862__$1 = this;
return (new cljs.core.RecordIter((0),G__22862__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22864,other22865){
var self__ = this;
var this22864__$1 = this;
return (((!((other22865 == null)))) && ((this22864__$1.constructor === other22865.constructor)) && (cljs.core._EQ_.call(null,this22864__$1.value,other22865.value)) && (cljs.core._EQ_.call(null,this22864__$1.__extmap,other22865.__extmap)));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22862){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22872 = cljs.core.keyword_identical_QMARK_;
var expr__22873 = k__4388__auto__;
if(cljs.core.truth_(pred__22872.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__22873))){
return (new reitit.trie.Wild(G__22862,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22862),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22862){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__22862,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__22866){
var extmap__4419__auto__ = (function (){var G__22875 = cljs.core.dissoc.call(null,G__22866,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__22866)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22875);
} else {
return G__22875;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__22866),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22878,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22882 = k22878;
var G__22882__$1 = (((G__22882 instanceof cljs.core.Keyword))?G__22882.fqn:null);
switch (G__22882__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22878,else__4383__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22883){
var vec__22884 = p__22883;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22884,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22884,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22877){
var self__ = this;
var G__22877__$1 = this;
return (new cljs.core.RecordIter((0),G__22877__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22879,other22880){
var self__ = this;
var this22879__$1 = this;
return (((!((other22880 == null)))) && ((this22879__$1.constructor === other22880.constructor)) && (cljs.core._EQ_.call(null,this22879__$1.value,other22880.value)) && (cljs.core._EQ_.call(null,this22879__$1.__extmap,other22880.__extmap)));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22877){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22887 = cljs.core.keyword_identical_QMARK_;
var expr__22888 = k__4388__auto__;
if(cljs.core.truth_(pred__22887.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__22888))){
return (new reitit.trie.CatchAll(G__22877,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22877),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22877){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__22877,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__22881){
var extmap__4419__auto__ = (function (){var G__22890 = cljs.core.dissoc.call(null,G__22881,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__22881)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22890);
} else {
return G__22890;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__22881),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22893,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22897 = k22893;
var G__22897__$1 = (((G__22897 instanceof cljs.core.Keyword))?G__22897.fqn:null);
switch (G__22897__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22893,else__4383__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22898){
var vec__22899 = p__22898;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22899,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22899,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Match{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22892){
var self__ = this;
var G__22892__$1 = this;
return (new cljs.core.RecordIter((0),G__22892__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22894,other22895){
var self__ = this;
var this22894__$1 = this;
return (((!((other22895 == null)))) && ((this22894__$1.constructor === other22895.constructor)) && (cljs.core._EQ_.call(null,this22894__$1.params,other22895.params)) && (cljs.core._EQ_.call(null,this22894__$1.data,other22895.data)) && (cljs.core._EQ_.call(null,this22894__$1.__extmap,other22895.__extmap)));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22892){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22902 = cljs.core.keyword_identical_QMARK_;
var expr__22903 = k__4388__auto__;
if(cljs.core.truth_(pred__22902.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__22903))){
return (new reitit.trie.Match(G__22892,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22902.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__22903))){
return (new reitit.trie.Match(self__.params,G__22892,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22892),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22892){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__22892,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__22896){
var extmap__4419__auto__ = (function (){var G__22905 = cljs.core.dissoc.call(null,G__22896,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__22896)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22905);
} else {
return G__22905;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__22896),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__22896),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22908,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22912 = k22908;
var G__22912__$1 = (((G__22912 instanceof cljs.core.Keyword))?G__22912.fqn:null);
switch (G__22912__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22908,else__4383__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__22913){
var vec__22914 = p__22913;
var k__4403__auto__ = cljs.core.nth.call(null,vec__22914,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__22914,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#reitit.trie.Node{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22907){
var self__ = this;
var G__22907__$1 = this;
return (new cljs.core.RecordIter((0),G__22907__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22909,other22910){
var self__ = this;
var this22909__$1 = this;
return (((!((other22910 == null)))) && ((this22909__$1.constructor === other22910.constructor)) && (cljs.core._EQ_.call(null,this22909__$1.children,other22910.children)) && (cljs.core._EQ_.call(null,this22909__$1.wilds,other22910.wilds)) && (cljs.core._EQ_.call(null,this22909__$1.catch_all,other22910.catch_all)) && (cljs.core._EQ_.call(null,this22909__$1.params,other22910.params)) && (cljs.core._EQ_.call(null,this22909__$1.data,other22910.data)) && (cljs.core._EQ_.call(null,this22909__$1.__extmap,other22910.__extmap)));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22907){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22917 = cljs.core.keyword_identical_QMARK_;
var expr__22918 = k__4388__auto__;
if(cljs.core.truth_(pred__22917.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__22918))){
return (new reitit.trie.Node(G__22907,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22917.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__22918))){
return (new reitit.trie.Node(self__.children,G__22907,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22917.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__22918))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__22907,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22917.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__22918))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__22907,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22917.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__22918))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__22907,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__22907),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22907){
var self__ = this;
var this__4379__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__22907,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__22911){
var extmap__4419__auto__ = (function (){var G__22920 = cljs.core.dissoc.call(null,G__22911,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__22911)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22920);
} else {
return G__22920;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__22911),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__22911),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__22911),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__22911),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__22911),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_22922 = (function (this$,i,max,path){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.match[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,i,max,path);
} else {
var m__4426__auto__ = (reitit.trie.match["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,i,max,path);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_22922.call(null,this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_22923 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.view[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.view["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_22923.call(null,this$);
}
});

var reitit$trie$Matcher$depth$dyn_22924 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.depth[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.depth["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_22924.call(null,this$);
}
});

var reitit$trie$Matcher$length$dyn_22925 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.length[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reitit.trie.length["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_22925.call(null,this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_22926 = (function (this$,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,params,data);
} else {
var m__4426__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_22926.call(null,this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_22927 = (function (this$,path,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,path,matcher);
} else {
var m__4426__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,path,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_22927.call(null,this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_22928 = (function (this$,key,end,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,end,matcher);
} else {
var m__4426__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,end,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_22928.call(null,this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_22929 = (function (this$,key,params,data){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,key,params,data);
} else {
var m__4426__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,key,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_22929.call(null,this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_22930 = (function (this$,matchers,ordered_QMARK_){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
var m__4426__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_22930.call(null,this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_22931 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._pretty[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_22931.call(null,this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_22932 = (function (this$,matcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,matcher);
} else {
var m__4426__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_22932.call(null,this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4217__auto__ = cljs.core.count.call(null,s1);
var y__4218__auto__ = cljs.core.count.call(null,s2);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.call(null,s1,(0),max);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,s1,i),cljs.core.get.call(null,s2,i))){
if((!((i === (0))))){
return cljs.core.subs.call(null,s1,(0),i);
} else {
return null;
}
} else {
var G__22933 = (i + (1));
i = G__22933;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5741__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__5741__auto__)){
var i = temp__5741__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__22934){
var map__22935 = p__22934;
var map__22935__$1 = (((((!((map__22935 == null))))?(((((map__22935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22935):map__22935);
var syntax = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.call(null,from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild.call(null,reitit.trie._keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.call(null,to,cljs.core.count.call(null,s))){
return cljs.core.concat.call(null,ss,_static.call(null,from,to));
} else {
var c = cljs.core.get.call(null,s,to);
if(cljs.core.truth_((function (){var and__4115__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"{",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"}",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.call(null,"*",cljs.core.get.call(null,s,(to + (1))))){
var G__22937 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,(to + (1)),to_SINGLEQUOTE_));
var G__22938 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__22939 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__22937;
from = G__22938;
to = G__22939;
continue;
} else {
var G__22940 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__22941 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__22942 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__22940;
from = G__22941;
to = G__22942;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,":",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4126__auto__ = clojure.string.index_of.call(null,s,"/",to);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count.call(null,s);
}
})();
if(cljs.core._EQ_.call(null,(1),(to_SINGLEQUOTE_ - to))){
var G__22943 = ss;
var G__22944 = from;
var G__22945 = (to + (1));
ss = G__22943;
from = G__22944;
to = G__22945;
continue;
} else {
var G__22946 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__22947 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__22948 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__22946;
from = G__22947;
to = G__22948;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"*",c);
} else {
return and__4115__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count.call(null,s);
var G__22949 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,to,to_SINGLEQUOTE_));
var G__22950 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__22951 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__22949;
from = G__22950;
to = G__22951;
continue;
} else {
var G__22952 = ss;
var G__22953 = from;
var G__22954 = (to + (1));
ss = G__22952;
from = G__22953;
to = G__22954;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.call(null,(function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path.call(null,reitit.trie.split_path.call(null,s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__22955,p__22956){
var vec__22957 = p__22955;
var p1 = cljs.core.nth.call(null,vec__22957,(0),null);
var p1s = vec__22957;
var vec__22960 = p__22956;
var p2 = cljs.core.nth.call(null,vec__22960,(0),null);
var p2s = vec__22960;
var _split = (function (p){
var temp__5741__auto__ = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5741__auto__)){
var i = temp__5741__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.call(null,((cp).length),cljs.core.count.call(null,p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,cljs.core.count.call(null,cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not.call(null,cp)))){
return _split.call(null,p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__22963){
var vec__22964 = p__22963;
var p = cljs.core.nth.call(null,vec__22964,(0),null);
var pps = vec__22964;
var i = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = i;
if(cljs.core.truth_(and__4115__auto__)){
return (i > (0));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null),cljs.core.rest.call(null,pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__22967){
var vec__22968 = p__22967;
var p = cljs.core.nth.call(null,vec__22968,(0),null);
var ps = vec__22968;
return cljs.core.concat.call(null,_slash.call(null,cp,p),cljs.core.rest.call(null,ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut.call(null,p1s),_postcut.call(null,p2s)], null);
} else {
var temp__5741__auto__ = ((typeof p1 === 'string')?((typeof p2 === 'string')?reitit.trie.common_prefix.call(null,p1,p2):false):false);
if(cljs.core.truth_(temp__5741__auto__)){
var cp = temp__5741__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut.call(null,cp,p1s),_tailcut.call(null,cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.call(null,x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__22971 = reitit.trie._slice_start.call(null,parts1,parts2);
var vec__22974 = cljs.core.nth.call(null,vec__22971,(0),null);
var seq__22975 = cljs.core.seq.call(null,vec__22974);
var first__22976 = cljs.core.first.call(null,seq__22975);
var seq__22975__$1 = cljs.core.next.call(null,seq__22975);
var s1 = first__22976;
var ss1 = seq__22975__$1;
var vec__22977 = cljs.core.nth.call(null,vec__22971,(1),null);
var seq__22978 = cljs.core.seq.call(null,vec__22977);
var first__22979 = cljs.core.first.call(null,seq__22978);
var seq__22978__$1 = cljs.core.next.call(null,seq__22978);
var s2 = first__22979;
var ss2 = seq__22978__$1;
if(cljs.core._EQ_.call(null,s1,s2,null)){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_.call(null,s1)) || (reitit.trie.catch_all_QMARK_.call(null,s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_.call(null,s1)) || (reitit.trie.wild_QMARK_.call(null,s2)))){
var G__22980 = reitit.trie._slice_end.call(null,s1,ss1);
var G__22981 = reitit.trie._slice_end.call(null,s2,ss2);
parts1 = G__22980;
parts2 = G__22981;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1,s2)){
return false;
} else {
var G__22982 = ss1;
var G__22983 = ss2;
parts1 = G__22982;
parts2 = G__22983;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_.call(null,reitit.trie.split_path.call(null,path1,opts),reitit.trie.split_path.call(null,path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__22984,fp,params,data){
var vec__22985 = p__22984;
var seq__22986 = cljs.core.seq.call(null,vec__22985);
var first__22987 = cljs.core.first.call(null,seq__22986);
var seq__22986__$1 = cljs.core.next.call(null,seq__22986);
var path = first__22987;
var ps = seq__22986__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"params","params",710516235),params):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first.call(null,ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = n;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),ps,fp,params,data);
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_.call(null,path))?reitit.trie._insert.call(null,node,ps,fp,params,data):(function (){var or__4126__auto__ = cljs.core.reduce.call(null,(function (_,p__22992){
var vec__22993 = p__22992;
var p = cljs.core.nth.call(null,vec__22993,(0),null);
var n = cljs.core.nth.call(null,vec__22993,(1),null);
var temp__5741__auto__ = reitit.trie.common_prefix.call(null,p,path);
if(cljs.core.truth_(temp__5741__auto__)){
var cp = temp__5741__auto__;
if(cljs.core._EQ_.call(null,cp,p)){
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,n,cljs.core.conj.call(null,ps,cljs.core.subs.call(null,path,cljs.core.count.call(null,p))),fp,params,data);
return cljs.core.reduced.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.call(null,p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.call(null,path,((cp).length));
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data);
var n_SINGLEQUOTE__SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null)),null,null,null,null);
return cljs.core.reduced.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data));
}
})()
))));
var temp__5741__auto__ = cljs.core.get_in.call(null,node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5741__auto__)){
var child = temp__5741__auto__;
return cljs.core.update.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.call(null,path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie22996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie22996 = (function (meta22997){
this.meta22997 = meta22997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie22996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22998,meta22997__$1){
var self__ = this;
var _22998__$1 = this;
return (new reitit.trie.t_reitit$trie22996(meta22997__$1));
}));

(reitit.trie.t_reitit$trie22996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22998){
var self__ = this;
var _22998__$1 = this;
return self__.meta22997;
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie22999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie22999 = (function (meta22997,_,params,data,match,meta23000){
this.meta22997 = meta22997;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta23000 = meta23000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie22999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23001,meta23000__$1){
var self__ = this;
var _23001__$1 = this;
return (new reitit.trie.t_reitit$trie22999(self__.meta22997,self__._,self__.params,self__.data,self__.match,meta23000__$1));
}));

(reitit.trie.t_reitit$trie22999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23001){
var self__ = this;
var _23001__$1 = this;
return self__.meta23000;
}));

(reitit.trie.t_reitit$trie22999.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie22999.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.call(null,i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie22999.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie22999.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie22999.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie22999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie22996","reitit.trie/t_reitit$trie22996",-88465180,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta23000","meta23000",430271573,null)], null);
}));

(reitit.trie.t_reitit$trie22999.cljs$lang$type = true);

(reitit.trie.t_reitit$trie22999.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie22999");

(reitit.trie.t_reitit$trie22999.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie22999");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie22999.
 */
reitit.trie.__GT_t_reitit$trie22999 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie22999(meta22997__$1,___$2,params__$1,data__$1,match__$1,meta23000){
return (new reitit.trie.t_reitit$trie22999(meta22997__$1,___$2,params__$1,data__$1,match__$1,meta23000));
});

}

return (new reitit.trie.t_reitit$trie22999(self__.meta22997,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count.call(null,path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie23002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie23002 = (function (meta22997,_,path,matcher,size,meta23003){
this.meta22997 = meta22997;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta23003 = meta23003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie23002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23004,meta23003__$1){
var self__ = this;
var _23004__$1 = this;
return (new reitit.trie.t_reitit$trie23002(self__.meta22997,self__._,self__.path,self__.matcher,self__.size,meta23003__$1));
}));

(reitit.trie.t_reitit$trie23002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23004){
var self__ = this;
var _23004__$1 = this;
return self__.meta23003;
}));

(reitit.trie.t_reitit$trie23002.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie23002.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,self__.size)){
return reitit.trie.match.call(null,self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p,(i + j)),cljs.core.get.call(null,self__.path,j))){
var G__23020 = (j + (1));
j = G__23020;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie23002.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie23002.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie23002.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count.call(null,self__.path);
}));

(reitit.trie.t_reitit$trie23002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie22996","reitit.trie/t_reitit$trie22996",-88465180,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta23003","meta23003",-829836229,null)], null);
}));

(reitit.trie.t_reitit$trie23002.cljs$lang$type = true);

(reitit.trie.t_reitit$trie23002.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie23002");

(reitit.trie.t_reitit$trie23002.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie23002");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie23002.
 */
reitit.trie.__GT_t_reitit$trie23002 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie23002(meta22997__$1,___$2,path__$1,matcher__$1,size__$1,meta23003){
return (new reitit.trie.t_reitit$trie23002(meta22997__$1,___$2,path__$1,matcher__$1,size__$1,meta23003));
});

}

return (new reitit.trie.t_reitit$trie23002(self__.meta22997,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie23005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie23005 = (function (meta22997,_,key,end,matcher,meta23006){
this.meta22997 = meta22997;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta23006 = meta23006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie23005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23007,meta23006__$1){
var self__ = this;
var _23007__$1 = this;
return (new reitit.trie.t_reitit$trie23005(self__.meta22997,self__._,self__.key,self__.end,self__.matcher,meta23006__$1));
}));

(reitit.trie.t_reitit$trie23005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23007){
var self__ = this;
var _23007__$1 = this;
return self__.meta23006;
}));

(reitit.trie.t_reitit$trie23005.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie23005.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.call(null,max,j)){
var temp__5741__auto__ = reitit.trie.match.call(null,self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5741__auto__)){
var match = temp__5741__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.call(null,path,j);
var pred__23011 = cljs.core._EQ_;
var expr__23012 = c;
if(cljs.core.truth_(pred__23011.call(null,self__.end,expr__23012))){
var temp__5741__auto__ = reitit.trie.match.call(null,self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5741__auto__)){
var match = temp__5741__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__23011.call(null,"%",expr__23012))){
var G__23021 = true;
var G__23022 = (j + (1));
percent_QMARK_ = G__23021;
j = G__23022;
continue;
} else {
var G__23023 = percent_QMARK_;
var G__23024 = (j + (1));
percent_QMARK_ = G__23023;
j = G__23024;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie23005.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view.call(null,self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie23005.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie23005.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie23005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie22996","reitit.trie/t_reitit$trie22996",-88465180,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta23006","meta23006",346848565,null)], null);
}));

(reitit.trie.t_reitit$trie23005.cljs$lang$type = true);

(reitit.trie.t_reitit$trie23005.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie23005");

(reitit.trie.t_reitit$trie23005.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie23005");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie23005.
 */
reitit.trie.__GT_t_reitit$trie23005 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie23005(meta22997__$1,___$2,key__$1,end__$1,matcher__$1,meta23006){
return (new reitit.trie.t_reitit$trie23005(meta22997__$1,___$2,key__$1,end__$1,matcher__$1,meta23006));
});

}

return (new reitit.trie.t_reitit$trie23005(self__.meta22997,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie23014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie23014 = (function (meta22997,_,key,params,data,match,meta23015){
this.meta22997 = meta22997;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta23015 = meta23015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie23014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23016,meta23015__$1){
var self__ = this;
var _23016__$1 = this;
return (new reitit.trie.t_reitit$trie23014(self__.meta22997,self__._,self__.key,self__.params,self__.data,self__.match,meta23015__$1));
}));

(reitit.trie.t_reitit$trie23014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23016){
var self__ = this;
var _23016__$1 = this;
return self__.meta23015;
}));

(reitit.trie.t_reitit$trie23014.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie23014.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param.call(null,self__.match,self__.key,reitit.trie.decode.call(null,path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie23014.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie23014.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie23014.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie23014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie22996","reitit.trie/t_reitit$trie22996",-88465180,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta23015","meta23015",-999046410,null)], null);
}));

(reitit.trie.t_reitit$trie23014.cljs$lang$type = true);

(reitit.trie.t_reitit$trie23014.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie23014");

(reitit.trie.t_reitit$trie23014.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie23014");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie23014.
 */
reitit.trie.__GT_t_reitit$trie23014 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie23014(meta22997__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta23015){
return (new reitit.trie.t_reitit$trie23014(meta22997__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta23015));
});

}

return (new reitit.trie.t_reitit$trie23014(self__.meta22997,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec.call(null,(cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count.call(null,matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie23017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie23017 = (function (meta22997,_,matchers,ordered_QMARK_,size,meta23018){
this.meta22997 = meta22997;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta23018 = meta23018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie23017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23019,meta23018__$1){
var self__ = this;
var _23019__$1 = this;
return (new reitit.trie.t_reitit$trie23017(self__.meta22997,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta23018__$1));
}));

(reitit.trie.t_reitit$trie23017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23019){
var self__ = this;
var _23019__$1 = this;
return self__.meta23018;
}));

(reitit.trie.t_reitit$trie23017.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie23017.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4126__auto__ = reitit.trie.match.call(null,cljs.core.get.call(null,self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__23025 = (j + (1));
j = G__23025;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie23017.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.call(null,reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie23017.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie23017.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie23017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie22996","reitit.trie/t_reitit$trie22996",-88465180,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta23018","meta23018",2143515177,null)], null);
}));

(reitit.trie.t_reitit$trie23017.cljs$lang$type = true);

(reitit.trie.t_reitit$trie23017.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie23017");

(reitit.trie.t_reitit$trie23017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie23017");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie23017.
 */
reitit.trie.__GT_t_reitit$trie23017 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie23017(meta22997__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta23018){
return (new reitit.trie.t_reitit$trie23017(meta22997__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta23018));
});

}

return (new reitit.trie.t_reitit$trie23017(self__.meta22997,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view.call(null,matcher);
}));

(reitit.trie.t_reitit$trie22996.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5741__auto__ = reitit.trie.match.call(null,matcher,(0),cljs.core.count.call(null,path),path);
if(cljs.core.truth_(temp__5741__auto__)){
var match = temp__5741__auto__;
return reitit.trie.__GT_Match.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie22996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null)], null);
}));

(reitit.trie.t_reitit$trie22996.cljs$lang$type = true);

(reitit.trie.t_reitit$trie22996.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie22996");

(reitit.trie.t_reitit$trie22996.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.trie/t_reitit$trie22996");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie22996.
 */
reitit.trie.__GT_t_reitit$trie22996 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie22996(meta22997){
return (new reitit.trie.t_reitit$trie22996(meta22997));
});

}

return (new reitit.trie.t_reitit$trie22996(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap.call(null,keys,cljs.core.repeat.call(null,null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__23027 = arguments.length;
switch (G__23027) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.call(null,null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.call(null,(function (acc,p__23028){
var vec__23029 = p__23028;
var p = cljs.core.nth.call(null,vec__23029,(0),null);
var d = cljs.core.nth.call(null,vec__23029,(1),null);
return reitit.trie.insert.call(null,acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.call(null,node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__23032){
var map__23033 = p__23032;
var map__23033__$1 = (((((!((map__23033 == null))))?(((((map__23033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23033):map__23033);
var opts = map__23033__$1;
var parameters = cljs.core.get.call(null,map__23033__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path.call(null,path,opts);
var params = parameters.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,parts)));
return reitit.trie._insert.call(null,(function (){var or__4126__auto__ = node;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path.call(null,path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler.call(null);
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__23037 = arguments.length;
switch (G__23037) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.call(null,options,reitit.trie.compiler.call(null));
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.call(null,options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__23038,compiler,cp){
var map__23039 = p__23038;
var map__23039__$1 = (((((!((map__23039 == null))))?(((((map__23039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23039):map__23039);
var data = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__23041){
var map__23042 = p__23041;
var map__23042__$1 = (((((!((map__23042 == null))))?(((((map__23042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23042):map__23042);
var children__$1 = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4126__auto__ = cljs.core.keys.call(null,children__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,(function (){var G__23044 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.call(null,G__23044,reitit.trie.data_matcher.call(null,compiler,params,data));
} else {
return G__23044;
}
})(),(function (){var iter__4529__auto__ = (function reitit$trie$iter__23045(s__23046){
return (new cljs.core.LazySeq(null,(function (){
var s__23046__$1 = s__23046;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__23046__$1);
if(temp__5743__auto__){
var s__23046__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23046__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23046__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23048 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23047 = (0);
while(true){
if((i__23047 < size__4528__auto__)){
var vec__23049 = cljs.core._nth.call(null,c__4527__auto__,i__23047);
var p = cljs.core.nth.call(null,vec__23049,(0),null);
var c = cljs.core.nth.call(null,vec__23049,(1),null);
cljs.core.chunk_append.call(null,b__23048,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))));

var G__23076 = (i__23047 + (1));
i__23047 = G__23076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23048),reitit$trie$iter__23045.call(null,cljs.core.chunk_rest.call(null,s__23046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23048),null);
}
} else {
var vec__23052 = cljs.core.first.call(null,s__23046__$2);
var p = cljs.core.nth.call(null,vec__23052,(0),null);
var c = cljs.core.nth.call(null,vec__23052,(1),null);
return cljs.core.cons.call(null,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))),reitit$trie$iter__23045.call(null,cljs.core.rest.call(null,s__23046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,children);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__23055(s__23056){
return (new cljs.core.LazySeq(null,(function (){
var s__23056__$1 = s__23056;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__23056__$1);
if(temp__5743__auto__){
var s__23056__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23056__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23056__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23058 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23057 = (0);
while(true){
if((i__23057 < size__4528__auto__)){
var vec__23059 = cljs.core._nth.call(null,c__4527__auto__,i__23057);
var p = cljs.core.nth.call(null,vec__23059,(0),null);
var c = cljs.core.nth.call(null,vec__23059,(1),null);
cljs.core.chunk_append.call(null,b__23058,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})());

var G__23077 = (i__23057 + (1));
i__23057 = G__23077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23058),reitit$trie$iter__23055.call(null,cljs.core.chunk_rest.call(null,s__23056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23058),null);
}
} else {
var vec__23062 = cljs.core.first.call(null,s__23056__$2);
var p = cljs.core.nth.call(null,vec__23062,(0),null);
var c = cljs.core.nth.call(null,vec__23062,(1),null);
return cljs.core.cons.call(null,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})(),reitit$trie$iter__23055.call(null,cljs.core.rest.call(null,s__23056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,wilds);
})()),(function (){var iter__4529__auto__ = (function reitit$trie$iter__23065(s__23066){
return (new cljs.core.LazySeq(null,(function (){
var s__23066__$1 = s__23066;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__23066__$1);
if(temp__5743__auto__){
var s__23066__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23066__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23066__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23068 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23067 = (0);
while(true){
if((i__23067 < size__4528__auto__)){
var vec__23069 = cljs.core._nth.call(null,c__4527__auto__,i__23067);
var p = cljs.core.nth.call(null,vec__23069,(0),null);
var c = cljs.core.nth.call(null,vec__23069,(1),null);
cljs.core.chunk_append.call(null,b__23068,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__23078 = (i__23067 + (1));
i__23067 = G__23078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23068),reitit$trie$iter__23065.call(null,cljs.core.chunk_rest.call(null,s__23066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23068),null);
}
} else {
var vec__23072 = cljs.core.first.call(null,s__23066__$2);
var p = cljs.core.nth.call(null,vec__23072,(0),null);
var c = cljs.core.nth.call(null,vec__23072,(1),null);
return cljs.core.cons.call(null,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__23065.call(null,cljs.core.rest.call(null,s__23066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,catch_all);
})());
if((cljs.core.count.call(null,matchers) > (1))){
return reitit.trie.linear_matcher.call(null,compiler,matchers,false);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matchers),(1))){
return cljs.core.first.call(null,matchers);
} else {
return reitit.trie.data_matcher.call(null,compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__23080 = arguments.length;
switch (G__23080) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty.call(null,compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__23083 = arguments.length;
switch (G__23083) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.call(null,compiled_trie,reitit.trie.compiler.call(null));
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher.call(null,compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=trie.js.map?rel=1604387909659
