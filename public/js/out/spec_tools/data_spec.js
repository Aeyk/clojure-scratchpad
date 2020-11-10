// Compiled by ClojureScript 1.10.773 {}
goog.provide('spec_tools.data_spec');
goog.require('cljs.core');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.parse');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31029,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31033 = k31029;
var G__31033__$1 = (((G__31033 instanceof cljs.core.Keyword))?G__31033.fqn:null);
switch (G__31033__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31029,else__4383__auto__);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31034){
var vec__31035 = p__31034;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31035,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31035,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31028){
var self__ = this;
var G__31028__$1 = this;
return (new cljs.core.RecordIter((0),G__31028__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31030,other31031){
var self__ = this;
var this31030__$1 = this;
return (((!((other31031 == null)))) && ((this31030__$1.constructor === other31031.constructor)) && (cljs.core._EQ_.call(null,this31030__$1.k,other31031.k)) && (cljs.core._EQ_.call(null,this31030__$1.__extmap,other31031.__extmap)));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31028){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31038 = cljs.core.keyword_identical_QMARK_;
var expr__31039 = k__4388__auto__;
if(cljs.core.truth_(pred__31038.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__31039))){
return (new spec_tools.data_spec.OptionalKey(G__31028,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31028),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31028){
var self__ = this;
var this__4379__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__31028,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$type = true);

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"spec-tools.data-spec/OptionalKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__31032){
var extmap__4419__auto__ = (function (){var G__31041 = cljs.core.dissoc.call(null,G__31032,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__31032)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31041);
} else {
return G__31041;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__31032),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31044,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31048 = k31044;
var G__31048__$1 = (((G__31048 instanceof cljs.core.Keyword))?G__31048.fqn:null);
switch (G__31048__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31044,else__4383__auto__);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31049){
var vec__31050 = p__31049;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31050,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31050,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31043){
var self__ = this;
var G__31043__$1 = this;
return (new cljs.core.RecordIter((0),G__31043__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31045,other31046){
var self__ = this;
var this31045__$1 = this;
return (((!((other31046 == null)))) && ((this31045__$1.constructor === other31046.constructor)) && (cljs.core._EQ_.call(null,this31045__$1.k,other31046.k)) && (cljs.core._EQ_.call(null,this31045__$1.__extmap,other31046.__extmap)));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31043){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31053 = cljs.core.keyword_identical_QMARK_;
var expr__31054 = k__4388__auto__;
if(cljs.core.truth_(pred__31053.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__31054))){
return (new spec_tools.data_spec.RequiredKey(G__31043,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31043),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31043){
var self__ = this;
var this__4379__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__31043,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$type = true);

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"spec-tools.data-spec/RequiredKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__31047){
var extmap__4419__auto__ = (function (){var G__31056 = cljs.core.dissoc.call(null,G__31047,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__31047)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31056);
} else {
return G__31056;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__31047),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31059,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31063 = k31059;
var G__31063__$1 = (((G__31063 instanceof cljs.core.Keyword))?G__31063.fqn:null);
switch (G__31063__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31059,else__4383__auto__);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31064){
var vec__31065 = p__31064;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31065,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31065,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31058){
var self__ = this;
var G__31058__$1 = this;
return (new cljs.core.RecordIter((0),G__31058__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31060,other31061){
var self__ = this;
var this31060__$1 = this;
return (((!((other31061 == null)))) && ((this31060__$1.constructor === other31061.constructor)) && (cljs.core._EQ_.call(null,this31060__$1.v,other31061.v)) && (cljs.core._EQ_.call(null,this31060__$1.__extmap,other31061.__extmap)));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31058){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31068 = cljs.core.keyword_identical_QMARK_;
var expr__31069 = k__4388__auto__;
if(cljs.core.truth_(pred__31068.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__31069))){
return (new spec_tools.data_spec.Maybe(G__31058,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31058),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31058){
var self__ = this;
var this__4379__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__31058,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Maybe.cljs$lang$type = true);

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
}));

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"spec-tools.data-spec/Maybe");
}));

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__31062){
var extmap__4419__auto__ = (function (){var G__31071 = cljs.core.dissoc.call(null,G__31062,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_.call(null,G__31062)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31071);
} else {
return G__31071;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__31062),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k31074,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__31078 = k31074;
var G__31078__$1 = (((G__31078 instanceof cljs.core.Keyword))?G__31078.fqn:null);
switch (G__31078__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31074,else__4383__auto__);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__31079){
var vec__31080 = p__31079;
var k__4403__auto__ = cljs.core.nth.call(null,vec__31080,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__31080,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31073){
var self__ = this;
var G__31073__$1 = this;
return (new cljs.core.RecordIter((0),G__31073__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31075,other31076){
var self__ = this;
var this31075__$1 = this;
return (((!((other31076 == null)))) && ((this31075__$1.constructor === other31076.constructor)) && (cljs.core._EQ_.call(null,this31075__$1.v,other31076.v)) && (cljs.core._EQ_.call(null,this31075__$1.__extmap,other31076.__extmap)));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__31073){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__31083 = cljs.core.keyword_identical_QMARK_;
var expr__31084 = k__4388__auto__;
if(cljs.core.truth_(pred__31083.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__31084))){
return (new spec_tools.data_spec.Or(G__31073,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__31073),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__31073){
var self__ = this;
var this__4379__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__31073,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Or.cljs$lang$type = true);

(spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
}));

(spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"spec-tools.data-spec/Or");
}));

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__31077){
var extmap__4419__auto__ = (function (){var G__31086 = cljs.core.dissoc.call(null,G__31077,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_.call(null,G__31077)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31086);
} else {
return G__31086;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__31077),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey.call(null,k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey.call(null,k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_.call(null,x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe.call(null,v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or.call(null,v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_.call(null,x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_.call(null,n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.call(null,[cljs.core.namespace.call(null,n),"$",cljs.core.name.call(null,n),(function (){var temp__5741__auto__ = cljs.core.namespace.call(null,k);
if(cljs.core.truth_(temp__5741__auto__)){
var kns = temp__5741__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name.call(null,k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__31089){
var map__31090 = p__31089;
var map__31090__$1 = (((((!((map__31090 == null))))?(((((map__31090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31090):map__31090);
var opts = map__31090__$1;
var n = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5741__auto__ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,data)))?(function (){var vec__31095 = cljs.core.first.call(null,data);
var k = cljs.core.nth.call(null,vec__31095,(0),null);
var v = cljs.core.nth.call(null,vec__31095,(1),null);
if((!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_.call(null,k)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return false;
}
})():false);
if(cljs.core.truth_(temp__5741__auto__)){
var vec__31098 = temp__5741__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31098,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31098,(1),null);
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec.call(null,spec_tools.data_spec.spec.call(null,n,k_SINGLEQUOTE_),spec_tools.data_spec.spec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null)))], null));
} else {
var m = cljs.core.reduce_kv.call(null,(function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = keys_default;
if(cljs.core.truth_(and__4115__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__4115__auto__;
}
})())?keys_default.call(null,k):k);
var kv = spec_tools.data_spec.unwrap_key.call(null,k__$1);
var rk = cljs.core.keyword.call(null,[((spec_tools.data_spec.req_QMARK_.call(null,k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_.call(null,kv))))?"-un":null)].join(''));
var vec__31101 = ((spec_tools.data_spec.maybe_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.call(null,(function (p1__31088_SHARP_){
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__31088_SHARP_], null));
}),spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.call(null,vec__31101,(0),null);
var wrap = cljs.core.nth.call(null,vec__31101,(1),null);
var vec__31104 = ((cljs.core.qualified_keyword_QMARK_.call(null,kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.call(null,kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key.call(null,n,spec_tools.data_spec.unwrap_key.call(null,kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31104,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31104,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?wrap.call(null,spec_tools.data_spec.spec.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1))):null);
var G__31107 = cljs.core.update.call(null,acc,rk,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.call(null,G__31107,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__31107;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.dissoc.call(null,m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__31108_31128 = cljs.core.seq.call(null,defs);
var chunk__31109_31129 = null;
var count__31110_31130 = (0);
var i__31111_31131 = (0);
while(true){
if((i__31111_31131 < count__31110_31130)){
var vec__31120_31132 = cljs.core._nth.call(null,chunk__31109_31129,i__31111_31131);
var k_31133 = cljs.core.nth.call(null,vec__31120_31132,(0),null);
var s_31134 = cljs.core.nth.call(null,vec__31120_31132,(1),null);
var synthetic_QMARK__31135 = (function (){var and__4115__auto__ = spec_tools.core.spec_QMARK_.call(null,s_31134);
if(cljs.core.truth_(and__4115__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_.call(null,s_31134)));
} else {
return and__4115__auto__;
}
})();
spec_tools.impl.register_spec_BANG_.call(null,k_31133,(function (){var G__31123 = s_31134;
if(cljs.core.truth_(synthetic_QMARK__31135)){
return cljs.core.assoc.call(null,G__31123,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__31123;
}
})());


var G__31136 = seq__31108_31128;
var G__31137 = chunk__31109_31129;
var G__31138 = count__31110_31130;
var G__31139 = (i__31111_31131 + (1));
seq__31108_31128 = G__31136;
chunk__31109_31129 = G__31137;
count__31110_31130 = G__31138;
i__31111_31131 = G__31139;
continue;
} else {
var temp__5743__auto___31140 = cljs.core.seq.call(null,seq__31108_31128);
if(temp__5743__auto___31140){
var seq__31108_31141__$1 = temp__5743__auto___31140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31108_31141__$1)){
var c__4556__auto___31142 = cljs.core.chunk_first.call(null,seq__31108_31141__$1);
var G__31143 = cljs.core.chunk_rest.call(null,seq__31108_31141__$1);
var G__31144 = c__4556__auto___31142;
var G__31145 = cljs.core.count.call(null,c__4556__auto___31142);
var G__31146 = (0);
seq__31108_31128 = G__31143;
chunk__31109_31129 = G__31144;
count__31110_31130 = G__31145;
i__31111_31131 = G__31146;
continue;
} else {
var vec__31124_31147 = cljs.core.first.call(null,seq__31108_31141__$1);
var k_31148 = cljs.core.nth.call(null,vec__31124_31147,(0),null);
var s_31149 = cljs.core.nth.call(null,vec__31124_31147,(1),null);
var synthetic_QMARK__31150 = (function (){var and__4115__auto__ = spec_tools.core.spec_QMARK_.call(null,s_31149);
if(cljs.core.truth_(and__4115__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_.call(null,s_31149)));
} else {
return and__4115__auto__;
}
})();
spec_tools.impl.register_spec_BANG_.call(null,k_31148,(function (){var G__31127 = s_31149;
if(cljs.core.truth_(synthetic_QMARK__31150)){
return cljs.core.assoc.call(null,G__31127,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__31127;
}
})());


var G__31151 = cljs.core.next.call(null,seq__31108_31141__$1);
var G__31152 = null;
var G__31153 = (0);
var G__31154 = (0);
seq__31108_31128 = G__31151;
chunk__31109_31129 = G__31152;
count__31110_31130 = G__31153;
i__31111_31131 = G__31154;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),keys_spec.call(null,data__$1)], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__31155){
var map__31156 = p__31155;
var map__31156__$1 = (((((!((map__31156 == null))))?(((((map__31156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);
var n = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = spec_tools.data_spec.spec.call(null,n,cljs.core.first.call(null,data));
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec.call(null,spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,v))))){
} else {
throw cljs.core.ex_info.call(null,["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec.call(null,cljs.core.into.call(null,(function (){var iter__4529__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__31158(s__31159){
return (new cljs.core.LazySeq(null,(function (){
var s__31159__$1 = s__31159;
while(true){
var temp__5743__auto__ = cljs.core.seq.call(null,s__31159__$1);
if(temp__5743__auto__){
var s__31159__$2 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31159__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31159__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31161 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31160 = (0);
while(true){
if((i__31160 < size__4528__auto__)){
var vec__31162 = cljs.core._nth.call(null,c__4527__auto__,i__31160);
var k = cljs.core.nth.call(null,vec__31162,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__31162,(1),null);
cljs.core.chunk_append.call(null,b__31161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,spec_tools.data_spec.spec.call(null,spec_tools.data_spec._nested_key.call(null,n,k),v__$1)], null));

var G__31168 = (i__31160 + (1));
i__31160 = G__31168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),spec_tools$data_spec$_or_spec_$_iter__31158.call(null,cljs.core.chunk_rest.call(null,s__31159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),null);
}
} else {
var vec__31165 = cljs.core.first.call(null,s__31159__$2);
var k = cljs.core.nth.call(null,vec__31165,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__31165,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,spec_tools.data_spec.spec.call(null,spec_tools.data_spec._nested_key.call(null,n,k),v__$1)], null),spec_tools$data_spec$_or_spec_$_iter__31158.call(null,cljs.core.rest.call(null,s__31159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 *   | `:keys-default`  | Function to generate the keys-specs, default [[keys-specs]].
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__31172 = arguments.length;
switch (G__31172) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__31173){
var map__31174 = p__31173;
var map__31174__$1 = (((((!((map__31174 == null))))?(((((map__31174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31174):map__31174);
var opts = map__31174__$1;
var data = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = (function (p1__31169_SHARP_){
return cljs.core.assoc.call(null,p1__31169_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
var maybe_named_spec = (function (p1__31170_SHARP_){
var G__31176 = p1__31170_SHARP_;
if(cljs.core.not.call(null,nested_QMARK_)){
return named_spec.call(null,G__31176);
} else {
return G__31176;
}
});
var nested_opts = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_.call(null,data))){
return maybe_named_spec.call(null,data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_.call(null,data)){
return spec_tools.data_spec._or_spec.call(null,name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_.call(null,data)){
return spec_tools.impl.nilable_spec.call(null,spec_tools.data_spec.spec.call(null,name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_.call(null,data)){
return named_spec.call(null,spec_tools.data_spec._map_spec.call(null,data,nested_opts));
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return maybe_named_spec.call(null,spec_tools.data_spec._coll_spec.call(null,data,cljs.core.assoc.call(null,nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return maybe_named_spec.call(null,spec_tools.data_spec._coll_spec.call(null,data,cljs.core.assoc.call(null,nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec.call(null,spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
}));

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
}));

(spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=data_spec.js.map?rel=1604387926694
