//The build will inline common dependencies into this file.

//Place any third party dependencies, like jQuery, in the lib folder.
require(['jquery', 'validate', 'underscore', 'l33teral'], function($, leet) {

    // Make it safe to do console.log() always.
    (function (con) {
        var method;
        var dummy = function() {};
        var methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
        'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' +
        'time,timeEnd,trace,warn').split(',');
        while (method = methods.pop()) {
            con[method] = con[method] || dummy;
        }
    })(window.console = window.console || {});

    //handle no placeholder browsers
    $(document).ready(function() {
        if (!Modernizr.input.placeholder) {
            $("input").each(function() {
                if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
                    $(this).val($(this).attr("placeholder"));
                    $(this).focus(function() {
                        if ($(this).val() === $(this).attr("placeholder")) $(this).val("");
                    });
                    $(this).blur(function() {
                        if ($(this).val() === "") $(this).val($(this).attr("placeholder"));
                    });
                }
            });
        }
    });

});

define({});
