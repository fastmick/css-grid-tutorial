(function() {
    //   alert(navigator.userAgent);
    var browser_name = "";
    isIE = /*@cc_on!@*/ false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;
    if (navigator.userAgent.indexOf("Chrome") != -1 && !isEdge) {
        browser_name = "chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1 && !isEdge) {
        browser_name = "safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_name = "firefox";
    } else if (
        navigator.userAgent.indexOf("MSIE") != -1 ||
        !!document.documentMode == true
    ) {
        //IF IE > 10
        browser_name = "ie";
    } else if (isEdge) {
        browser_name = "edge";
    } else {
        browser_name = "other-browser";
    }
    //     $("html").addClass(browser_name);
    $("html").attr("data-browser", browser_name);
})();