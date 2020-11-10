// Compiled by ClojureScript 1.10.773 {}
goog.provide('daiquiri.core');
goog.require('cljs.core');
goog.require('daiquiri.interpreter');
goog.require('cljsjs.react');
/**
 * The React.js create element function.
 */
daiquiri.core.create_element = (function daiquiri$core$create_element(type,attrs,children){
if(children){
return React.createElement.apply(null,[type,attrs].concat(children));
} else {
return React.createElement(type,attrs);
}
});
/**
 * The React.js Fragment.
 */
daiquiri.core.fragment = React.Fragment;

//# sourceMappingURL=core.js.map?rel=1604387927098