/*! grunt 2015-01-26 */
define(["jquery"],function(){var a={confirmLayer:function(a){var b,c,d,e;b=function(){var b=$("#cLayer");b.length?b.show():$("body").append('<section id="cLayer"><div class="layer"><span class="point">提示</span><strong></strong><div class="chose"><span class="react cancel"></span><span class="react accept"></span></div></div></section>'),c($(".layer")),d(a)},c=function(a){a.parent().show(),a.removeClass("an-hide").addClass("an-show")},e=function(a){a.removeClass("an-show").addClass("an-hide"),setTimeout(function(){$("#cLayer").hide()},100)},d=function(b){var c,d,f;c=$("#cLayer strong"),d=$("#cLayer .accept"),f=$("#cLayer .cancel"),c.text(b.tit),d.text(b.accept.label),f.text(b.cancel.label),d.off("touchend"),f.off("touchend"),d.on("touchend",function(b){a.accept.callBack&&a.accept.callBack.call($("#cLayer")),b.preventDefault(),b.stopPropagation()}),f.on("touchend",function(b){a.cancel.callBack&&a.cancel.callBack.call(this),b.preventDefault(),e($(".layer"))}),$("#cLayer").on("touchend",function(){$(this).hide()}),$("#cLayer").children().on("touchend",function(a){a.stopPropagation()})},b()},alert:function(a){var b,c,d,e;b=function(){var a=$("#alert");a.length?a.show():$("body").append('<section id="alert"><div class="alert"><span class="point">提示</span><p></p><div class="chose"><span class="react accept">知道了</span></div></div></section>'),d($(".alert")),c()},c=function(){$("#alert p").html(a),$("#alert .accept").one("touchend",function(a){a.stopPropagation(),e($(".alert"))}),$("#alert").one("touchend",function(a){e($(".alert")),a.stopPropagation()})},d=function(a){a.parent().show(),a.removeClass("an-hide").addClass("an-show")},e=function(a){a.removeClass("an-show").addClass("an-hide"),setTimeout(function(){$("#alert").hide()},100)},b()},error:function(a){function b(){$(".error-layer").removeClass("show")}var c=null;clearInterval(c),$(".error-layer").length||$("body").append('<div class="error-layer"></div>'),$(".error-layer").html("<span>"+a+"</span>").addClass("show"),c=setTimeout(b,1e3)},layer:function(a){var b=$("#layer"),c=$('<div id="layer">');b.length?b.show():(c.html(a),$("body").append(c)),$("#layer").on("touchend",function(){$(this).hide()}),$("#layer").children().on("touchend",function(a){a.stopPropagation()})}};return a});