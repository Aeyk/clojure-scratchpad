// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__40653 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__40653 == null)){
return null;
} else {
return goog.object.get(G__40653,"requires");
}
}):(function (path){
var G__40654 = goog.object.get(goog.dependencies_.requires,path);
if((G__40654 == null)){
return null;
} else {
return goog.object.getKeys(G__40654);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40655_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40655_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__40656 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__40656__$1 = (((G__40656 == null))?null:goog.object.get(G__40656,"provides"));
if((G__40656__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__40656__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__40657 = cljs.core.seq.call(null,provides);
var chunk__40658 = null;
var count__40659 = (0);
var i__40660 = (0);
while(true){
if((i__40660 < count__40659)){
var prov = cljs.core._nth.call(null,chunk__40658,i__40660);
var seq__40669_40681 = cljs.core.seq.call(null,requires);
var chunk__40670_40682 = null;
var count__40671_40683 = (0);
var i__40672_40684 = (0);
while(true){
if((i__40672_40684 < count__40671_40683)){
var req_40685 = cljs.core._nth.call(null,chunk__40670_40682,i__40672_40684);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40685,prov);


var G__40686 = seq__40669_40681;
var G__40687 = chunk__40670_40682;
var G__40688 = count__40671_40683;
var G__40689 = (i__40672_40684 + (1));
seq__40669_40681 = G__40686;
chunk__40670_40682 = G__40687;
count__40671_40683 = G__40688;
i__40672_40684 = G__40689;
continue;
} else {
var temp__5743__auto___40690 = cljs.core.seq.call(null,seq__40669_40681);
if(temp__5743__auto___40690){
var seq__40669_40691__$1 = temp__5743__auto___40690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40669_40691__$1)){
var c__4556__auto___40692 = cljs.core.chunk_first.call(null,seq__40669_40691__$1);
var G__40693 = cljs.core.chunk_rest.call(null,seq__40669_40691__$1);
var G__40694 = c__4556__auto___40692;
var G__40695 = cljs.core.count.call(null,c__4556__auto___40692);
var G__40696 = (0);
seq__40669_40681 = G__40693;
chunk__40670_40682 = G__40694;
count__40671_40683 = G__40695;
i__40672_40684 = G__40696;
continue;
} else {
var req_40697 = cljs.core.first.call(null,seq__40669_40691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40697,prov);


var G__40698 = cljs.core.next.call(null,seq__40669_40691__$1);
var G__40699 = null;
var G__40700 = (0);
var G__40701 = (0);
seq__40669_40681 = G__40698;
chunk__40670_40682 = G__40699;
count__40671_40683 = G__40700;
i__40672_40684 = G__40701;
continue;
}
} else {
}
}
break;
}


var G__40702 = seq__40657;
var G__40703 = chunk__40658;
var G__40704 = count__40659;
var G__40705 = (i__40660 + (1));
seq__40657 = G__40702;
chunk__40658 = G__40703;
count__40659 = G__40704;
i__40660 = G__40705;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq.call(null,seq__40657);
if(temp__5743__auto__){
var seq__40657__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40657__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40657__$1);
var G__40706 = cljs.core.chunk_rest.call(null,seq__40657__$1);
var G__40707 = c__4556__auto__;
var G__40708 = cljs.core.count.call(null,c__4556__auto__);
var G__40709 = (0);
seq__40657 = G__40706;
chunk__40658 = G__40707;
count__40659 = G__40708;
i__40660 = G__40709;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40657__$1);
var seq__40673_40710 = cljs.core.seq.call(null,requires);
var chunk__40674_40711 = null;
var count__40675_40712 = (0);
var i__40676_40713 = (0);
while(true){
if((i__40676_40713 < count__40675_40712)){
var req_40714 = cljs.core._nth.call(null,chunk__40674_40711,i__40676_40713);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40714,prov);


var G__40715 = seq__40673_40710;
var G__40716 = chunk__40674_40711;
var G__40717 = count__40675_40712;
var G__40718 = (i__40676_40713 + (1));
seq__40673_40710 = G__40715;
chunk__40674_40711 = G__40716;
count__40675_40712 = G__40717;
i__40676_40713 = G__40718;
continue;
} else {
var temp__5743__auto___40719__$1 = cljs.core.seq.call(null,seq__40673_40710);
if(temp__5743__auto___40719__$1){
var seq__40673_40720__$1 = temp__5743__auto___40719__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40673_40720__$1)){
var c__4556__auto___40721 = cljs.core.chunk_first.call(null,seq__40673_40720__$1);
var G__40722 = cljs.core.chunk_rest.call(null,seq__40673_40720__$1);
var G__40723 = c__4556__auto___40721;
var G__40724 = cljs.core.count.call(null,c__4556__auto___40721);
var G__40725 = (0);
seq__40673_40710 = G__40722;
chunk__40674_40711 = G__40723;
count__40675_40712 = G__40724;
i__40676_40713 = G__40725;
continue;
} else {
var req_40726 = cljs.core.first.call(null,seq__40673_40720__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40726,prov);


var G__40727 = cljs.core.next.call(null,seq__40673_40720__$1);
var G__40728 = null;
var G__40729 = (0);
var G__40730 = (0);
seq__40673_40710 = G__40727;
chunk__40674_40711 = G__40728;
count__40675_40712 = G__40729;
i__40676_40713 = G__40730;
continue;
}
} else {
}
}
break;
}


var G__40731 = cljs.core.next.call(null,seq__40657__$1);
var G__40732 = null;
var G__40733 = (0);
var G__40734 = (0);
seq__40657 = G__40731;
chunk__40658 = G__40732;
count__40659 = G__40733;
i__40660 = G__40734;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__40677 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__40678 = null;
var count__40679 = (0);
var i__40680 = (0);
while(true){
if((i__40680 < count__40679)){
var prov = cljs.core._nth.call(null,chunk__40678,i__40680);
goog.object.forEach(deps,((function (seq__40677,chunk__40678,count__40679,i__40680,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40677,chunk__40678,count__40679,i__40680,prov,requires))
);


var G__40735 = seq__40677;
var G__40736 = chunk__40678;
var G__40737 = count__40679;
var G__40738 = (i__40680 + (1));
seq__40677 = G__40735;
chunk__40678 = G__40736;
count__40679 = G__40737;
i__40680 = G__40738;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq.call(null,seq__40677);
if(temp__5743__auto__){
var seq__40677__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40677__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40677__$1);
var G__40739 = cljs.core.chunk_rest.call(null,seq__40677__$1);
var G__40740 = c__4556__auto__;
var G__40741 = cljs.core.count.call(null,c__4556__auto__);
var G__40742 = (0);
seq__40677 = G__40739;
chunk__40678 = G__40740;
count__40679 = G__40741;
i__40680 = G__40742;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40677__$1);
goog.object.forEach(deps,((function (seq__40677,chunk__40678,count__40679,i__40680,prov,seq__40677__$1,temp__5743__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__40677,chunk__40678,count__40679,i__40680,prov,seq__40677__$1,temp__5743__auto__,requires))
);


var G__40743 = cljs.core.next.call(null,seq__40677__$1);
var G__40744 = null;
var G__40745 = (0);
var G__40746 = (0);
seq__40677 = G__40743;
chunk__40678 = G__40744;
count__40679 = G__40745;
i__40680 = G__40746;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40747){
var vec__40748 = p__40747;
var _ = cljs.core.nth.call(null,vec__40748,(0),null);
var v = cljs.core.nth.call(null,vec__40748,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__40751){
var vec__40752 = p__40751;
var k = cljs.core.nth.call(null,vec__40752,(0),null);
var v = cljs.core.nth.call(null,vec__40752,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40764_40772 = cljs.core.seq.call(null,deps);
var chunk__40765_40773 = null;
var count__40766_40774 = (0);
var i__40767_40775 = (0);
while(true){
if((i__40767_40775 < count__40766_40774)){
var dep_40776 = cljs.core._nth.call(null,chunk__40765_40773,i__40767_40775);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40776;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40776));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40776,(depth + (1)),state);
} else {
}


var G__40777 = seq__40764_40772;
var G__40778 = chunk__40765_40773;
var G__40779 = count__40766_40774;
var G__40780 = (i__40767_40775 + (1));
seq__40764_40772 = G__40777;
chunk__40765_40773 = G__40778;
count__40766_40774 = G__40779;
i__40767_40775 = G__40780;
continue;
} else {
var temp__5743__auto___40781 = cljs.core.seq.call(null,seq__40764_40772);
if(temp__5743__auto___40781){
var seq__40764_40782__$1 = temp__5743__auto___40781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40764_40782__$1)){
var c__4556__auto___40783 = cljs.core.chunk_first.call(null,seq__40764_40782__$1);
var G__40784 = cljs.core.chunk_rest.call(null,seq__40764_40782__$1);
var G__40785 = c__4556__auto___40783;
var G__40786 = cljs.core.count.call(null,c__4556__auto___40783);
var G__40787 = (0);
seq__40764_40772 = G__40784;
chunk__40765_40773 = G__40785;
count__40766_40774 = G__40786;
i__40767_40775 = G__40787;
continue;
} else {
var dep_40788 = cljs.core.first.call(null,seq__40764_40782__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_40788;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40788));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40788,(depth + (1)),state);
} else {
}


var G__40789 = cljs.core.next.call(null,seq__40764_40782__$1);
var G__40790 = null;
var G__40791 = (0);
var G__40792 = (0);
seq__40764_40772 = G__40789;
chunk__40765_40773 = G__40790;
count__40766_40774 = G__40791;
i__40767_40775 = G__40792;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40768){
var vec__40769 = p__40768;
var seq__40770 = cljs.core.seq.call(null,vec__40769);
var first__40771 = cljs.core.first.call(null,seq__40770);
var seq__40770__$1 = cljs.core.next.call(null,seq__40770);
var x = first__40771;
var xs = seq__40770__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__40755_SHARP_){
return clojure.set.difference.call(null,p1__40755_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__40793_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__40793_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40794 = cljs.core.seq.call(null,provides);
var chunk__40795 = null;
var count__40796 = (0);
var i__40797 = (0);
while(true){
if((i__40797 < count__40796)){
var prov = cljs.core._nth.call(null,chunk__40795,i__40797);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40806_40814 = cljs.core.seq.call(null,requires);
var chunk__40807_40815 = null;
var count__40808_40816 = (0);
var i__40809_40817 = (0);
while(true){
if((i__40809_40817 < count__40808_40816)){
var req_40818 = cljs.core._nth.call(null,chunk__40807_40815,i__40809_40817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40818,prov);


var G__40819 = seq__40806_40814;
var G__40820 = chunk__40807_40815;
var G__40821 = count__40808_40816;
var G__40822 = (i__40809_40817 + (1));
seq__40806_40814 = G__40819;
chunk__40807_40815 = G__40820;
count__40808_40816 = G__40821;
i__40809_40817 = G__40822;
continue;
} else {
var temp__5743__auto___40823 = cljs.core.seq.call(null,seq__40806_40814);
if(temp__5743__auto___40823){
var seq__40806_40824__$1 = temp__5743__auto___40823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40806_40824__$1)){
var c__4556__auto___40825 = cljs.core.chunk_first.call(null,seq__40806_40824__$1);
var G__40826 = cljs.core.chunk_rest.call(null,seq__40806_40824__$1);
var G__40827 = c__4556__auto___40825;
var G__40828 = cljs.core.count.call(null,c__4556__auto___40825);
var G__40829 = (0);
seq__40806_40814 = G__40826;
chunk__40807_40815 = G__40827;
count__40808_40816 = G__40828;
i__40809_40817 = G__40829;
continue;
} else {
var req_40830 = cljs.core.first.call(null,seq__40806_40824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40830,prov);


var G__40831 = cljs.core.next.call(null,seq__40806_40824__$1);
var G__40832 = null;
var G__40833 = (0);
var G__40834 = (0);
seq__40806_40814 = G__40831;
chunk__40807_40815 = G__40832;
count__40808_40816 = G__40833;
i__40809_40817 = G__40834;
continue;
}
} else {
}
}
break;
}


var G__40835 = seq__40794;
var G__40836 = chunk__40795;
var G__40837 = count__40796;
var G__40838 = (i__40797 + (1));
seq__40794 = G__40835;
chunk__40795 = G__40836;
count__40796 = G__40837;
i__40797 = G__40838;
continue;
} else {
var temp__5743__auto__ = cljs.core.seq.call(null,seq__40794);
if(temp__5743__auto__){
var seq__40794__$1 = temp__5743__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40794__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40794__$1);
var G__40839 = cljs.core.chunk_rest.call(null,seq__40794__$1);
var G__40840 = c__4556__auto__;
var G__40841 = cljs.core.count.call(null,c__4556__auto__);
var G__40842 = (0);
seq__40794 = G__40839;
chunk__40795 = G__40840;
count__40796 = G__40841;
i__40797 = G__40842;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40794__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40810_40843 = cljs.core.seq.call(null,requires);
var chunk__40811_40844 = null;
var count__40812_40845 = (0);
var i__40813_40846 = (0);
while(true){
if((i__40813_40846 < count__40812_40845)){
var req_40847 = cljs.core._nth.call(null,chunk__40811_40844,i__40813_40846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40847,prov);


var G__40848 = seq__40810_40843;
var G__40849 = chunk__40811_40844;
var G__40850 = count__40812_40845;
var G__40851 = (i__40813_40846 + (1));
seq__40810_40843 = G__40848;
chunk__40811_40844 = G__40849;
count__40812_40845 = G__40850;
i__40813_40846 = G__40851;
continue;
} else {
var temp__5743__auto___40852__$1 = cljs.core.seq.call(null,seq__40810_40843);
if(temp__5743__auto___40852__$1){
var seq__40810_40853__$1 = temp__5743__auto___40852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40810_40853__$1)){
var c__4556__auto___40854 = cljs.core.chunk_first.call(null,seq__40810_40853__$1);
var G__40855 = cljs.core.chunk_rest.call(null,seq__40810_40853__$1);
var G__40856 = c__4556__auto___40854;
var G__40857 = cljs.core.count.call(null,c__4556__auto___40854);
var G__40858 = (0);
seq__40810_40843 = G__40855;
chunk__40811_40844 = G__40856;
count__40812_40845 = G__40857;
i__40813_40846 = G__40858;
continue;
} else {
var req_40859 = cljs.core.first.call(null,seq__40810_40853__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40859,prov);


var G__40860 = cljs.core.next.call(null,seq__40810_40853__$1);
var G__40861 = null;
var G__40862 = (0);
var G__40863 = (0);
seq__40810_40843 = G__40860;
chunk__40811_40844 = G__40861;
count__40812_40845 = G__40862;
i__40813_40846 = G__40863;
continue;
}
} else {
}
}
break;
}


var G__40864 = cljs.core.next.call(null,seq__40794__$1);
var G__40865 = null;
var G__40866 = (0);
var G__40867 = (0);
seq__40794 = G__40864;
chunk__40795 = G__40865;
count__40796 = G__40866;
i__40797 = G__40867;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40868_40872 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40869_40873 = null;
var count__40870_40874 = (0);
var i__40871_40875 = (0);
while(true){
if((i__40871_40875 < count__40870_40874)){
var ns_40876 = cljs.core._nth.call(null,chunk__40869_40873,i__40871_40875);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40876);


var G__40877 = seq__40868_40872;
var G__40878 = chunk__40869_40873;
var G__40879 = count__40870_40874;
var G__40880 = (i__40871_40875 + (1));
seq__40868_40872 = G__40877;
chunk__40869_40873 = G__40878;
count__40870_40874 = G__40879;
i__40871_40875 = G__40880;
continue;
} else {
var temp__5743__auto___40881 = cljs.core.seq.call(null,seq__40868_40872);
if(temp__5743__auto___40881){
var seq__40868_40882__$1 = temp__5743__auto___40881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40868_40882__$1)){
var c__4556__auto___40883 = cljs.core.chunk_first.call(null,seq__40868_40882__$1);
var G__40884 = cljs.core.chunk_rest.call(null,seq__40868_40882__$1);
var G__40885 = c__4556__auto___40883;
var G__40886 = cljs.core.count.call(null,c__4556__auto___40883);
var G__40887 = (0);
seq__40868_40872 = G__40884;
chunk__40869_40873 = G__40885;
count__40870_40874 = G__40886;
i__40871_40875 = G__40887;
continue;
} else {
var ns_40888 = cljs.core.first.call(null,seq__40868_40882__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40888);


var G__40889 = cljs.core.next.call(null,seq__40868_40882__$1);
var G__40890 = null;
var G__40891 = (0);
var G__40892 = (0);
seq__40868_40872 = G__40889;
chunk__40869_40873 = G__40890;
count__40870_40874 = G__40891;
i__40871_40875 = G__40892;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__40893__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40894__i = 0, G__40894__a = new Array(arguments.length -  0);
while (G__40894__i < G__40894__a.length) {G__40894__a[G__40894__i] = arguments[G__40894__i + 0]; ++G__40894__i;}
  args = new cljs.core.IndexedSeq(G__40894__a,0,null);
} 
return G__40893__delegate.call(this,args);};
G__40893.cljs$lang$maxFixedArity = 0;
G__40893.cljs$lang$applyTo = (function (arglist__40895){
var args = cljs.core.seq(arglist__40895);
return G__40893__delegate(args);
});
G__40893.cljs$core$IFn$_invoke$arity$variadic = G__40893__delegate;
return G__40893;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__40896_SHARP_,p2__40897_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40896_SHARP_)),p2__40897_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__40898_SHARP_,p2__40899_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40898_SHARP_),p2__40899_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40900 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40900.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__40900.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__40900;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40901){if((e40901 instanceof Error)){
var e = e40901;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40901;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40902){if((e40902 instanceof Error)){
var e = e40902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40902;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40903 = cljs.core._EQ_;
var expr__40904 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40903.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40904))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40903.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40904))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40903.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40904))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40906,callback){
var map__40907 = p__40906;
var map__40907__$1 = (((((!((map__40907 == null))))?(((((map__40907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40907):map__40907);
var file_msg = map__40907__$1;
var request_url = cljs.core.get.call(null,map__40907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_40945){
var state_val_40946 = (state_40945[(1)]);
if((state_val_40946 === (7))){
var inst_40941 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40947_40973 = state_40945__$1;
(statearr_40947_40973[(2)] = inst_40941);

(statearr_40947_40973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (1))){
var state_40945__$1 = state_40945;
var statearr_40948_40974 = state_40945__$1;
(statearr_40948_40974[(2)] = null);

(statearr_40948_40974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (4))){
var inst_40911 = (state_40945[(7)]);
var inst_40911__$1 = (state_40945[(2)]);
var state_40945__$1 = (function (){var statearr_40949 = state_40945;
(statearr_40949[(7)] = inst_40911__$1);

return statearr_40949;
})();
if(cljs.core.truth_(inst_40911__$1)){
var statearr_40950_40975 = state_40945__$1;
(statearr_40950_40975[(1)] = (5));

} else {
var statearr_40951_40976 = state_40945__$1;
(statearr_40951_40976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (15))){
var inst_40926 = (state_40945[(8)]);
var inst_40924 = (state_40945[(9)]);
var inst_40928 = inst_40926.call(null,inst_40924);
var state_40945__$1 = state_40945;
var statearr_40952_40977 = state_40945__$1;
(statearr_40952_40977[(2)] = inst_40928);

(statearr_40952_40977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (13))){
var inst_40935 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40953_40978 = state_40945__$1;
(statearr_40953_40978[(2)] = inst_40935);

(statearr_40953_40978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (6))){
var state_40945__$1 = state_40945;
var statearr_40954_40979 = state_40945__$1;
(statearr_40954_40979[(2)] = null);

(statearr_40954_40979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (17))){
var inst_40932 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40955_40980 = state_40945__$1;
(statearr_40955_40980[(2)] = inst_40932);

(statearr_40955_40980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (3))){
var inst_40943 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40945__$1,inst_40943);
} else {
if((state_val_40946 === (12))){
var state_40945__$1 = state_40945;
var statearr_40956_40981 = state_40945__$1;
(statearr_40956_40981[(2)] = null);

(statearr_40956_40981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (2))){
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40946 === (11))){
var inst_40916 = (state_40945[(10)]);
var inst_40922 = figwheel.client.file_reloading.blocking_load.call(null,inst_40916);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(14),inst_40922);
} else {
if((state_val_40946 === (9))){
var inst_40916 = (state_40945[(10)]);
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40916)){
var statearr_40957_40982 = state_40945__$1;
(statearr_40957_40982[(1)] = (11));

} else {
var statearr_40958_40983 = state_40945__$1;
(statearr_40958_40983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (5))){
var inst_40917 = (state_40945[(11)]);
var inst_40911 = (state_40945[(7)]);
var inst_40916 = cljs.core.nth.call(null,inst_40911,(0),null);
var inst_40917__$1 = cljs.core.nth.call(null,inst_40911,(1),null);
var state_40945__$1 = (function (){var statearr_40959 = state_40945;
(statearr_40959[(11)] = inst_40917__$1);

(statearr_40959[(10)] = inst_40916);

return statearr_40959;
})();
if(cljs.core.truth_(inst_40917__$1)){
var statearr_40960_40984 = state_40945__$1;
(statearr_40960_40984[(1)] = (8));

} else {
var statearr_40961_40985 = state_40945__$1;
(statearr_40961_40985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (14))){
var inst_40926 = (state_40945[(8)]);
var inst_40916 = (state_40945[(10)]);
var inst_40924 = (state_40945[(2)]);
var inst_40925 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40926__$1 = cljs.core.get.call(null,inst_40925,inst_40916);
var state_40945__$1 = (function (){var statearr_40962 = state_40945;
(statearr_40962[(8)] = inst_40926__$1);

(statearr_40962[(9)] = inst_40924);

return statearr_40962;
})();
if(cljs.core.truth_(inst_40926__$1)){
var statearr_40963_40986 = state_40945__$1;
(statearr_40963_40986[(1)] = (15));

} else {
var statearr_40964_40987 = state_40945__$1;
(statearr_40964_40987[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (16))){
var inst_40924 = (state_40945[(9)]);
var inst_40930 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40924);
var state_40945__$1 = state_40945;
var statearr_40965_40988 = state_40945__$1;
(statearr_40965_40988[(2)] = inst_40930);

(statearr_40965_40988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (10))){
var inst_40937 = (state_40945[(2)]);
var state_40945__$1 = (function (){var statearr_40966 = state_40945;
(statearr_40966[(12)] = inst_40937);

return statearr_40966;
})();
var statearr_40967_40989 = state_40945__$1;
(statearr_40967_40989[(2)] = null);

(statearr_40967_40989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (8))){
var inst_40917 = (state_40945[(11)]);
var inst_40919 = eval(inst_40917);
var state_40945__$1 = state_40945;
var statearr_40968_40990 = state_40945__$1;
(statearr_40968_40990[(2)] = inst_40919);

(statearr_40968_40990[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__35141__auto__ = null;
var figwheel$client$file_reloading$state_machine__35141__auto____0 = (function (){
var statearr_40969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40969[(0)] = figwheel$client$file_reloading$state_machine__35141__auto__);

(statearr_40969[(1)] = (1));

return statearr_40969;
});
var figwheel$client$file_reloading$state_machine__35141__auto____1 = (function (state_40945){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_40945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e40970){if((e40970 instanceof Object)){
var ex__35144__auto__ = e40970;
var statearr_40971_40991 = state_40945;
(statearr_40971_40991[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40992 = state_40945;
state_40945 = G__40992;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35141__auto__ = function(state_40945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35141__auto____1.call(this,state_40945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35141__auto____0;
figwheel$client$file_reloading$state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35141__auto____1;
return figwheel$client$file_reloading$state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_40972 = f__35236__auto__.call(null);
(statearr_40972[(6)] = c__35235__auto__);

return statearr_40972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40994 = arguments.length;
switch (G__40994) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40996,callback){
var map__40997 = p__40996;
var map__40997__$1 = (((((!((map__40997 == null))))?(((((map__40997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40997):map__40997);
var file_msg = map__40997__$1;
var namespace = cljs.core.get.call(null,map__40997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40999){
var map__41000 = p__40999;
var map__41000__$1 = (((((!((map__41000 == null))))?(((((map__41000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41000):map__41000);
var file_msg = map__41000__$1;
var namespace = cljs.core.get.call(null,map__41000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41002){
var map__41003 = p__41002;
var map__41003__$1 = (((((!((map__41003 == null))))?(((((map__41003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41003):map__41003);
var file_msg = map__41003__$1;
var namespace = cljs.core.get.call(null,map__41003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41005,callback){
var map__41006 = p__41005;
var map__41006__$1 = (((((!((map__41006 == null))))?(((((map__41006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41006):map__41006);
var file_msg = map__41006__$1;
var request_url = cljs.core.get.call(null,map__41006__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35235__auto___41056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_41041){
var state_val_41042 = (state_41041[(1)]);
if((state_val_41042 === (1))){
var inst_41015 = cljs.core.seq.call(null,files);
var inst_41016 = cljs.core.first.call(null,inst_41015);
var inst_41017 = cljs.core.next.call(null,inst_41015);
var inst_41018 = files;
var state_41041__$1 = (function (){var statearr_41043 = state_41041;
(statearr_41043[(7)] = inst_41017);

(statearr_41043[(8)] = inst_41018);

(statearr_41043[(9)] = inst_41016);

return statearr_41043;
})();
var statearr_41044_41057 = state_41041__$1;
(statearr_41044_41057[(2)] = null);

(statearr_41044_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41042 === (2))){
var inst_41024 = (state_41041[(10)]);
var inst_41018 = (state_41041[(8)]);
var inst_41023 = cljs.core.seq.call(null,inst_41018);
var inst_41024__$1 = cljs.core.first.call(null,inst_41023);
var inst_41025 = cljs.core.next.call(null,inst_41023);
var inst_41026 = (inst_41024__$1 == null);
var inst_41027 = cljs.core.not.call(null,inst_41026);
var state_41041__$1 = (function (){var statearr_41045 = state_41041;
(statearr_41045[(11)] = inst_41025);

(statearr_41045[(10)] = inst_41024__$1);

return statearr_41045;
})();
if(inst_41027){
var statearr_41046_41058 = state_41041__$1;
(statearr_41046_41058[(1)] = (4));

} else {
var statearr_41047_41059 = state_41041__$1;
(statearr_41047_41059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41042 === (3))){
var inst_41039 = (state_41041[(2)]);
var state_41041__$1 = state_41041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41041__$1,inst_41039);
} else {
if((state_val_41042 === (4))){
var inst_41024 = (state_41041[(10)]);
var inst_41029 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41024);
var state_41041__$1 = state_41041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41041__$1,(7),inst_41029);
} else {
if((state_val_41042 === (5))){
var inst_41035 = cljs.core.async.close_BANG_.call(null,out);
var state_41041__$1 = state_41041;
var statearr_41048_41060 = state_41041__$1;
(statearr_41048_41060[(2)] = inst_41035);

(statearr_41048_41060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41042 === (6))){
var inst_41037 = (state_41041[(2)]);
var state_41041__$1 = state_41041;
var statearr_41049_41061 = state_41041__$1;
(statearr_41049_41061[(2)] = inst_41037);

(statearr_41049_41061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41042 === (7))){
var inst_41025 = (state_41041[(11)]);
var inst_41031 = (state_41041[(2)]);
var inst_41032 = cljs.core.async.put_BANG_.call(null,out,inst_41031);
var inst_41018 = inst_41025;
var state_41041__$1 = (function (){var statearr_41050 = state_41041;
(statearr_41050[(12)] = inst_41032);

(statearr_41050[(8)] = inst_41018);

return statearr_41050;
})();
var statearr_41051_41062 = state_41041__$1;
(statearr_41051_41062[(2)] = null);

(statearr_41051_41062[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____0 = (function (){
var statearr_41052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41052[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__);

(statearr_41052[(1)] = (1));

return statearr_41052;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____1 = (function (state_41041){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_41041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e41053){if((e41053 instanceof Object)){
var ex__35144__auto__ = e41053;
var statearr_41054_41063 = state_41041;
(statearr_41054_41063[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41064 = state_41041;
state_41041 = G__41064;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__ = function(state_41041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____1.call(this,state_41041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_41055 = f__35236__auto__.call(null);
(statearr_41055[(6)] = c__35235__auto___41056);

return statearr_41055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41065,opts){
var map__41066 = p__41065;
var map__41066__$1 = (((((!((map__41066 == null))))?(((((map__41066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41066):map__41066);
var eval_body = cljs.core.get.call(null,map__41066__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41068){var e = e41068;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5741__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__41069_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41069_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5741__auto__)){
var file_msg = temp__5741__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41070){
var vec__41071 = p__41070;
var k = cljs.core.nth.call(null,vec__41071,(0),null);
var v = cljs.core.nth.call(null,vec__41071,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41074){
var vec__41075 = p__41074;
var k = cljs.core.nth.call(null,vec__41075,(0),null);
var v = cljs.core.nth.call(null,vec__41075,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41081,p__41082){
var map__41083 = p__41081;
var map__41083__$1 = (((((!((map__41083 == null))))?(((((map__41083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41083):map__41083);
var opts = map__41083__$1;
var before_jsload = cljs.core.get.call(null,map__41083__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41083__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41083__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41084 = p__41082;
var map__41084__$1 = (((((!((map__41084 == null))))?(((((map__41084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41084):map__41084);
var msg = map__41084__$1;
var files = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35235__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35236__auto__ = (function (){var switch__35140__auto__ = (function (state_41238){
var state_val_41239 = (state_41238[(1)]);
if((state_val_41239 === (7))){
var inst_41098 = (state_41238[(7)]);
var inst_41099 = (state_41238[(8)]);
var inst_41100 = (state_41238[(9)]);
var inst_41101 = (state_41238[(10)]);
var inst_41106 = cljs.core._nth.call(null,inst_41099,inst_41101);
var inst_41107 = figwheel.client.file_reloading.eval_body.call(null,inst_41106,opts);
var inst_41108 = (inst_41101 + (1));
var tmp41240 = inst_41098;
var tmp41241 = inst_41099;
var tmp41242 = inst_41100;
var inst_41098__$1 = tmp41240;
var inst_41099__$1 = tmp41241;
var inst_41100__$1 = tmp41242;
var inst_41101__$1 = inst_41108;
var state_41238__$1 = (function (){var statearr_41243 = state_41238;
(statearr_41243[(7)] = inst_41098__$1);

(statearr_41243[(8)] = inst_41099__$1);

(statearr_41243[(9)] = inst_41100__$1);

(statearr_41243[(10)] = inst_41101__$1);

(statearr_41243[(11)] = inst_41107);

return statearr_41243;
})();
var statearr_41244_41327 = state_41238__$1;
(statearr_41244_41327[(2)] = null);

(statearr_41244_41327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (20))){
var inst_41141 = (state_41238[(12)]);
var inst_41149 = figwheel.client.file_reloading.sort_files.call(null,inst_41141);
var state_41238__$1 = state_41238;
var statearr_41245_41328 = state_41238__$1;
(statearr_41245_41328[(2)] = inst_41149);

(statearr_41245_41328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (27))){
var state_41238__$1 = state_41238;
var statearr_41246_41329 = state_41238__$1;
(statearr_41246_41329[(2)] = null);

(statearr_41246_41329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (1))){
var inst_41090 = (state_41238[(13)]);
var inst_41087 = before_jsload.call(null,files);
var inst_41088 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41089 = (function (){return (function (p1__41078_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41078_SHARP_);
});
})();
var inst_41090__$1 = cljs.core.filter.call(null,inst_41089,files);
var inst_41091 = cljs.core.not_empty.call(null,inst_41090__$1);
var state_41238__$1 = (function (){var statearr_41247 = state_41238;
(statearr_41247[(14)] = inst_41088);

(statearr_41247[(15)] = inst_41087);

(statearr_41247[(13)] = inst_41090__$1);

return statearr_41247;
})();
if(cljs.core.truth_(inst_41091)){
var statearr_41248_41330 = state_41238__$1;
(statearr_41248_41330[(1)] = (2));

} else {
var statearr_41249_41331 = state_41238__$1;
(statearr_41249_41331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (24))){
var state_41238__$1 = state_41238;
var statearr_41250_41332 = state_41238__$1;
(statearr_41250_41332[(2)] = null);

(statearr_41250_41332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (39))){
var inst_41191 = (state_41238[(16)]);
var state_41238__$1 = state_41238;
var statearr_41251_41333 = state_41238__$1;
(statearr_41251_41333[(2)] = inst_41191);

(statearr_41251_41333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (46))){
var inst_41233 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41252_41334 = state_41238__$1;
(statearr_41252_41334[(2)] = inst_41233);

(statearr_41252_41334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (4))){
var inst_41135 = (state_41238[(2)]);
var inst_41136 = cljs.core.List.EMPTY;
var inst_41137 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41136);
var inst_41138 = (function (){return (function (p1__41079_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41079_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41079_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41079_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_41139 = cljs.core.filter.call(null,inst_41138,files);
var inst_41140 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41141 = cljs.core.concat.call(null,inst_41139,inst_41140);
var state_41238__$1 = (function (){var statearr_41253 = state_41238;
(statearr_41253[(17)] = inst_41137);

(statearr_41253[(18)] = inst_41135);

(statearr_41253[(12)] = inst_41141);

return statearr_41253;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41254_41335 = state_41238__$1;
(statearr_41254_41335[(1)] = (16));

} else {
var statearr_41255_41336 = state_41238__$1;
(statearr_41255_41336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (15))){
var inst_41125 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41256_41337 = state_41238__$1;
(statearr_41256_41337[(2)] = inst_41125);

(statearr_41256_41337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (21))){
var inst_41151 = (state_41238[(19)]);
var inst_41151__$1 = (state_41238[(2)]);
var inst_41152 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41151__$1);
var state_41238__$1 = (function (){var statearr_41257 = state_41238;
(statearr_41257[(19)] = inst_41151__$1);

return statearr_41257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41238__$1,(22),inst_41152);
} else {
if((state_val_41239 === (31))){
var inst_41236 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41238__$1,inst_41236);
} else {
if((state_val_41239 === (32))){
var inst_41191 = (state_41238[(16)]);
var inst_41196 = inst_41191.cljs$lang$protocol_mask$partition0$;
var inst_41197 = (inst_41196 & (64));
var inst_41198 = inst_41191.cljs$core$ISeq$;
var inst_41199 = (cljs.core.PROTOCOL_SENTINEL === inst_41198);
var inst_41200 = ((inst_41197) || (inst_41199));
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41200)){
var statearr_41258_41338 = state_41238__$1;
(statearr_41258_41338[(1)] = (35));

} else {
var statearr_41259_41339 = state_41238__$1;
(statearr_41259_41339[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (40))){
var inst_41213 = (state_41238[(20)]);
var inst_41212 = (state_41238[(2)]);
var inst_41213__$1 = cljs.core.get.call(null,inst_41212,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41214 = cljs.core.get.call(null,inst_41212,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41215 = cljs.core.not_empty.call(null,inst_41213__$1);
var state_41238__$1 = (function (){var statearr_41260 = state_41238;
(statearr_41260[(20)] = inst_41213__$1);

(statearr_41260[(21)] = inst_41214);

return statearr_41260;
})();
if(cljs.core.truth_(inst_41215)){
var statearr_41261_41340 = state_41238__$1;
(statearr_41261_41340[(1)] = (41));

} else {
var statearr_41262_41341 = state_41238__$1;
(statearr_41262_41341[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (33))){
var state_41238__$1 = state_41238;
var statearr_41263_41342 = state_41238__$1;
(statearr_41263_41342[(2)] = false);

(statearr_41263_41342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (13))){
var inst_41111 = (state_41238[(22)]);
var inst_41115 = cljs.core.chunk_first.call(null,inst_41111);
var inst_41116 = cljs.core.chunk_rest.call(null,inst_41111);
var inst_41117 = cljs.core.count.call(null,inst_41115);
var inst_41098 = inst_41116;
var inst_41099 = inst_41115;
var inst_41100 = inst_41117;
var inst_41101 = (0);
var state_41238__$1 = (function (){var statearr_41264 = state_41238;
(statearr_41264[(7)] = inst_41098);

(statearr_41264[(8)] = inst_41099);

(statearr_41264[(9)] = inst_41100);

(statearr_41264[(10)] = inst_41101);

return statearr_41264;
})();
var statearr_41265_41343 = state_41238__$1;
(statearr_41265_41343[(2)] = null);

(statearr_41265_41343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (22))){
var inst_41155 = (state_41238[(23)]);
var inst_41154 = (state_41238[(24)]);
var inst_41151 = (state_41238[(19)]);
var inst_41159 = (state_41238[(25)]);
var inst_41154__$1 = (state_41238[(2)]);
var inst_41155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41154__$1);
var inst_41156 = (function (){var all_files = inst_41151;
var res_SINGLEQUOTE_ = inst_41154__$1;
var res = inst_41155__$1;
return (function (p1__41080_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41080_SHARP_));
});
})();
var inst_41157 = cljs.core.filter.call(null,inst_41156,inst_41154__$1);
var inst_41158 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41159__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41158);
var inst_41160 = cljs.core.not_empty.call(null,inst_41159__$1);
var state_41238__$1 = (function (){var statearr_41266 = state_41238;
(statearr_41266[(23)] = inst_41155__$1);

(statearr_41266[(24)] = inst_41154__$1);

(statearr_41266[(26)] = inst_41157);

(statearr_41266[(25)] = inst_41159__$1);

return statearr_41266;
})();
if(cljs.core.truth_(inst_41160)){
var statearr_41267_41344 = state_41238__$1;
(statearr_41267_41344[(1)] = (23));

} else {
var statearr_41268_41345 = state_41238__$1;
(statearr_41268_41345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (36))){
var state_41238__$1 = state_41238;
var statearr_41269_41346 = state_41238__$1;
(statearr_41269_41346[(2)] = false);

(statearr_41269_41346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (41))){
var inst_41213 = (state_41238[(20)]);
var inst_41217 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41218 = cljs.core.map.call(null,inst_41217,inst_41213);
var inst_41219 = cljs.core.pr_str.call(null,inst_41218);
var inst_41220 = ["figwheel-no-load meta-data: ",inst_41219].join('');
var inst_41221 = figwheel.client.utils.log.call(null,inst_41220);
var state_41238__$1 = state_41238;
var statearr_41270_41347 = state_41238__$1;
(statearr_41270_41347[(2)] = inst_41221);

(statearr_41270_41347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (43))){
var inst_41214 = (state_41238[(21)]);
var inst_41224 = (state_41238[(2)]);
var inst_41225 = cljs.core.not_empty.call(null,inst_41214);
var state_41238__$1 = (function (){var statearr_41271 = state_41238;
(statearr_41271[(27)] = inst_41224);

return statearr_41271;
})();
if(cljs.core.truth_(inst_41225)){
var statearr_41272_41348 = state_41238__$1;
(statearr_41272_41348[(1)] = (44));

} else {
var statearr_41273_41349 = state_41238__$1;
(statearr_41273_41349[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (29))){
var inst_41155 = (state_41238[(23)]);
var inst_41154 = (state_41238[(24)]);
var inst_41151 = (state_41238[(19)]);
var inst_41191 = (state_41238[(16)]);
var inst_41157 = (state_41238[(26)]);
var inst_41159 = (state_41238[(25)]);
var inst_41187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41190 = (function (){var all_files = inst_41151;
var res_SINGLEQUOTE_ = inst_41154;
var res = inst_41155;
var files_not_loaded = inst_41157;
var dependencies_that_loaded = inst_41159;
return (function (p__41189){
var map__41274 = p__41189;
var map__41274__$1 = (((((!((map__41274 == null))))?(((((map__41274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41274):map__41274);
var namespace = cljs.core.get.call(null,map__41274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_41191__$1 = cljs.core.group_by.call(null,inst_41190,inst_41157);
var inst_41193 = (inst_41191__$1 == null);
var inst_41194 = cljs.core.not.call(null,inst_41193);
var state_41238__$1 = (function (){var statearr_41276 = state_41238;
(statearr_41276[(28)] = inst_41187);

(statearr_41276[(16)] = inst_41191__$1);

return statearr_41276;
})();
if(inst_41194){
var statearr_41277_41350 = state_41238__$1;
(statearr_41277_41350[(1)] = (32));

} else {
var statearr_41278_41351 = state_41238__$1;
(statearr_41278_41351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (44))){
var inst_41214 = (state_41238[(21)]);
var inst_41227 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41214);
var inst_41228 = cljs.core.pr_str.call(null,inst_41227);
var inst_41229 = ["not required: ",inst_41228].join('');
var inst_41230 = figwheel.client.utils.log.call(null,inst_41229);
var state_41238__$1 = state_41238;
var statearr_41279_41352 = state_41238__$1;
(statearr_41279_41352[(2)] = inst_41230);

(statearr_41279_41352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (6))){
var inst_41132 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41280_41353 = state_41238__$1;
(statearr_41280_41353[(2)] = inst_41132);

(statearr_41280_41353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (28))){
var inst_41157 = (state_41238[(26)]);
var inst_41184 = (state_41238[(2)]);
var inst_41185 = cljs.core.not_empty.call(null,inst_41157);
var state_41238__$1 = (function (){var statearr_41281 = state_41238;
(statearr_41281[(29)] = inst_41184);

return statearr_41281;
})();
if(cljs.core.truth_(inst_41185)){
var statearr_41282_41354 = state_41238__$1;
(statearr_41282_41354[(1)] = (29));

} else {
var statearr_41283_41355 = state_41238__$1;
(statearr_41283_41355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (25))){
var inst_41155 = (state_41238[(23)]);
var inst_41171 = (state_41238[(2)]);
var inst_41172 = cljs.core.not_empty.call(null,inst_41155);
var state_41238__$1 = (function (){var statearr_41284 = state_41238;
(statearr_41284[(30)] = inst_41171);

return statearr_41284;
})();
if(cljs.core.truth_(inst_41172)){
var statearr_41285_41356 = state_41238__$1;
(statearr_41285_41356[(1)] = (26));

} else {
var statearr_41286_41357 = state_41238__$1;
(statearr_41286_41357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (34))){
var inst_41207 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41207)){
var statearr_41287_41358 = state_41238__$1;
(statearr_41287_41358[(1)] = (38));

} else {
var statearr_41288_41359 = state_41238__$1;
(statearr_41288_41359[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (17))){
var state_41238__$1 = state_41238;
var statearr_41289_41360 = state_41238__$1;
(statearr_41289_41360[(2)] = recompile_dependents);

(statearr_41289_41360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (3))){
var state_41238__$1 = state_41238;
var statearr_41290_41361 = state_41238__$1;
(statearr_41290_41361[(2)] = null);

(statearr_41290_41361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (12))){
var inst_41128 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41291_41362 = state_41238__$1;
(statearr_41291_41362[(2)] = inst_41128);

(statearr_41291_41362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (2))){
var inst_41090 = (state_41238[(13)]);
var inst_41097 = cljs.core.seq.call(null,inst_41090);
var inst_41098 = inst_41097;
var inst_41099 = null;
var inst_41100 = (0);
var inst_41101 = (0);
var state_41238__$1 = (function (){var statearr_41292 = state_41238;
(statearr_41292[(7)] = inst_41098);

(statearr_41292[(8)] = inst_41099);

(statearr_41292[(9)] = inst_41100);

(statearr_41292[(10)] = inst_41101);

return statearr_41292;
})();
var statearr_41293_41363 = state_41238__$1;
(statearr_41293_41363[(2)] = null);

(statearr_41293_41363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (23))){
var inst_41155 = (state_41238[(23)]);
var inst_41154 = (state_41238[(24)]);
var inst_41151 = (state_41238[(19)]);
var inst_41157 = (state_41238[(26)]);
var inst_41159 = (state_41238[(25)]);
var inst_41162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41164 = (function (){var all_files = inst_41151;
var res_SINGLEQUOTE_ = inst_41154;
var res = inst_41155;
var files_not_loaded = inst_41157;
var dependencies_that_loaded = inst_41159;
return (function (p__41163){
var map__41294 = p__41163;
var map__41294__$1 = (((((!((map__41294 == null))))?(((((map__41294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41294):map__41294);
var request_url = cljs.core.get.call(null,map__41294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_41165 = cljs.core.reverse.call(null,inst_41159);
var inst_41166 = cljs.core.map.call(null,inst_41164,inst_41165);
var inst_41167 = cljs.core.pr_str.call(null,inst_41166);
var inst_41168 = figwheel.client.utils.log.call(null,inst_41167);
var state_41238__$1 = (function (){var statearr_41296 = state_41238;
(statearr_41296[(31)] = inst_41162);

return statearr_41296;
})();
var statearr_41297_41364 = state_41238__$1;
(statearr_41297_41364[(2)] = inst_41168);

(statearr_41297_41364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (35))){
var state_41238__$1 = state_41238;
var statearr_41298_41365 = state_41238__$1;
(statearr_41298_41365[(2)] = true);

(statearr_41298_41365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (19))){
var inst_41141 = (state_41238[(12)]);
var inst_41147 = figwheel.client.file_reloading.expand_files.call(null,inst_41141);
var state_41238__$1 = state_41238;
var statearr_41299_41366 = state_41238__$1;
(statearr_41299_41366[(2)] = inst_41147);

(statearr_41299_41366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (11))){
var state_41238__$1 = state_41238;
var statearr_41300_41367 = state_41238__$1;
(statearr_41300_41367[(2)] = null);

(statearr_41300_41367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (9))){
var inst_41130 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41301_41368 = state_41238__$1;
(statearr_41301_41368[(2)] = inst_41130);

(statearr_41301_41368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (5))){
var inst_41100 = (state_41238[(9)]);
var inst_41101 = (state_41238[(10)]);
var inst_41103 = (inst_41101 < inst_41100);
var inst_41104 = inst_41103;
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41104)){
var statearr_41302_41369 = state_41238__$1;
(statearr_41302_41369[(1)] = (7));

} else {
var statearr_41303_41370 = state_41238__$1;
(statearr_41303_41370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (14))){
var inst_41111 = (state_41238[(22)]);
var inst_41120 = cljs.core.first.call(null,inst_41111);
var inst_41121 = figwheel.client.file_reloading.eval_body.call(null,inst_41120,opts);
var inst_41122 = cljs.core.next.call(null,inst_41111);
var inst_41098 = inst_41122;
var inst_41099 = null;
var inst_41100 = (0);
var inst_41101 = (0);
var state_41238__$1 = (function (){var statearr_41304 = state_41238;
(statearr_41304[(7)] = inst_41098);

(statearr_41304[(8)] = inst_41099);

(statearr_41304[(9)] = inst_41100);

(statearr_41304[(10)] = inst_41101);

(statearr_41304[(32)] = inst_41121);

return statearr_41304;
})();
var statearr_41305_41371 = state_41238__$1;
(statearr_41305_41371[(2)] = null);

(statearr_41305_41371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (45))){
var state_41238__$1 = state_41238;
var statearr_41306_41372 = state_41238__$1;
(statearr_41306_41372[(2)] = null);

(statearr_41306_41372[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (26))){
var inst_41155 = (state_41238[(23)]);
var inst_41154 = (state_41238[(24)]);
var inst_41151 = (state_41238[(19)]);
var inst_41157 = (state_41238[(26)]);
var inst_41159 = (state_41238[(25)]);
var inst_41174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41176 = (function (){var all_files = inst_41151;
var res_SINGLEQUOTE_ = inst_41154;
var res = inst_41155;
var files_not_loaded = inst_41157;
var dependencies_that_loaded = inst_41159;
return (function (p__41175){
var map__41307 = p__41175;
var map__41307__$1 = (((((!((map__41307 == null))))?(((((map__41307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41307):map__41307);
var namespace = cljs.core.get.call(null,map__41307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_41177 = cljs.core.map.call(null,inst_41176,inst_41155);
var inst_41178 = cljs.core.pr_str.call(null,inst_41177);
var inst_41179 = figwheel.client.utils.log.call(null,inst_41178);
var inst_41180 = (function (){var all_files = inst_41151;
var res_SINGLEQUOTE_ = inst_41154;
var res = inst_41155;
var files_not_loaded = inst_41157;
var dependencies_that_loaded = inst_41159;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_41181 = setTimeout(inst_41180,(10));
var state_41238__$1 = (function (){var statearr_41309 = state_41238;
(statearr_41309[(33)] = inst_41174);

(statearr_41309[(34)] = inst_41179);

return statearr_41309;
})();
var statearr_41310_41373 = state_41238__$1;
(statearr_41310_41373[(2)] = inst_41181);

(statearr_41310_41373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (16))){
var state_41238__$1 = state_41238;
var statearr_41311_41374 = state_41238__$1;
(statearr_41311_41374[(2)] = reload_dependents);

(statearr_41311_41374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (38))){
var inst_41191 = (state_41238[(16)]);
var inst_41209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41191);
var state_41238__$1 = state_41238;
var statearr_41312_41375 = state_41238__$1;
(statearr_41312_41375[(2)] = inst_41209);

(statearr_41312_41375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (30))){
var state_41238__$1 = state_41238;
var statearr_41313_41376 = state_41238__$1;
(statearr_41313_41376[(2)] = null);

(statearr_41313_41376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (10))){
var inst_41111 = (state_41238[(22)]);
var inst_41113 = cljs.core.chunked_seq_QMARK_.call(null,inst_41111);
var state_41238__$1 = state_41238;
if(inst_41113){
var statearr_41314_41377 = state_41238__$1;
(statearr_41314_41377[(1)] = (13));

} else {
var statearr_41315_41378 = state_41238__$1;
(statearr_41315_41378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (18))){
var inst_41145 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
if(cljs.core.truth_(inst_41145)){
var statearr_41316_41379 = state_41238__$1;
(statearr_41316_41379[(1)] = (19));

} else {
var statearr_41317_41380 = state_41238__$1;
(statearr_41317_41380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (42))){
var state_41238__$1 = state_41238;
var statearr_41318_41381 = state_41238__$1;
(statearr_41318_41381[(2)] = null);

(statearr_41318_41381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (37))){
var inst_41204 = (state_41238[(2)]);
var state_41238__$1 = state_41238;
var statearr_41319_41382 = state_41238__$1;
(statearr_41319_41382[(2)] = inst_41204);

(statearr_41319_41382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41239 === (8))){
var inst_41111 = (state_41238[(22)]);
var inst_41098 = (state_41238[(7)]);
var inst_41111__$1 = cljs.core.seq.call(null,inst_41098);
var state_41238__$1 = (function (){var statearr_41320 = state_41238;
(statearr_41320[(22)] = inst_41111__$1);

return statearr_41320;
})();
if(inst_41111__$1){
var statearr_41321_41383 = state_41238__$1;
(statearr_41321_41383[(1)] = (10));

} else {
var statearr_41322_41384 = state_41238__$1;
(statearr_41322_41384[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____0 = (function (){
var statearr_41323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41323[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__);

(statearr_41323[(1)] = (1));

return statearr_41323;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____1 = (function (state_41238){
while(true){
var ret_value__35142__auto__ = (function (){try{while(true){
var result__35143__auto__ = switch__35140__auto__.call(null,state_41238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35143__auto__;
}
break;
}
}catch (e41324){if((e41324 instanceof Object)){
var ex__35144__auto__ = e41324;
var statearr_41325_41385 = state_41238;
(statearr_41325_41385[(5)] = ex__35144__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41386 = state_41238;
state_41238 = G__41386;
continue;
} else {
return ret_value__35142__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__ = function(state_41238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____1.call(this,state_41238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35141__auto__;
})()
})();
var state__35237__auto__ = (function (){var statearr_41326 = f__35236__auto__.call(null);
(statearr_41326[(6)] = c__35235__auto__);

return statearr_41326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35237__auto__);
}));

return c__35235__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41389,link){
var map__41390 = p__41389;
var map__41390__$1 = (((((!((map__41390 == null))))?(((((map__41390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41390):map__41390);
var file = cljs.core.get.call(null,map__41390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5743__auto__ = link.href;
if(cljs.core.truth_(temp__5743__auto__)){
var link_href = temp__5743__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__41387_SHARP_,p2__41388_SHARP_){
if(cljs.core._EQ_.call(null,p1__41387_SHARP_,p2__41388_SHARP_)){
return p1__41387_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5743__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41393){
var map__41394 = p__41393;
var map__41394__$1 = (((((!((map__41394 == null))))?(((((map__41394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41394):map__41394);
var match_length = cljs.core.get.call(null,map__41394__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41394__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41392_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41392_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5743__auto__)){
var res = temp__5743__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41396_SHARP_,p2__41397_SHARP_){
return cljs.core.assoc.call(null,p1__41396_SHARP_,cljs.core.get.call(null,p2__41397_SHARP_,key),p2__41397_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5741__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5741__auto__)){
var link = temp__5741__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41398 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41398);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41398);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41399,p__41400){
var map__41401 = p__41399;
var map__41401__$1 = (((((!((map__41401 == null))))?(((((map__41401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41401):map__41401);
var on_cssload = cljs.core.get.call(null,map__41401__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41402 = p__41400;
var map__41402__$1 = (((((!((map__41402 == null))))?(((((map__41402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41402):map__41402);
var files_msg = map__41402__$1;
var files = cljs.core.get.call(null,map__41402__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5743__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5743__auto__)){
var f_datas = temp__5743__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1604387942328
