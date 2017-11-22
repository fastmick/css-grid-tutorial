(function() {

    /*
        hoehe und breite des layers dynamisch in abhaengigkeit des viewports setzen 
    */

    console.log('viewport width: ' + $(window).outerWidth());
    console.log('viewport height: ' + $(window).outerHeight());

    $(".js-full-news-block").click(function() {
        var viewportWidth = $(window).outerWidth(),
            layerWidth = 1200,
            layerPosLeft;

        // layerWidth = viewportWidth - 100;
        console.log('layerWidth: ' + layerWidth);

        if (viewportWidth < 1250) {
            console.log('layerWidth verkleinern ');
            layerWidth = viewportWidth - 200;
            console.log('new layerWidth: ' + layerWidth);
        }


        var modalPosLeft = (viewportWidth / 2) - 150;
        // console.log('modalPosLeft: ' + modalPosLeft);

        $(this).parent().clone().appendTo("body").addClass("show-full-news-block").css("left", modalPosLeft + "px");
    });


})();