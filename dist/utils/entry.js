/*! grunt 2015-01-26 */
define(["jquery","utils/ajax"],function(a,b){a("#registUser").on("submit",function(c){var d=a(this).serialize();b.post(this.action,d,function(a){console.log(a)}),c.preventDefault()})});