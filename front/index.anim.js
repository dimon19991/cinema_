$( document ).ready(function() {
    $(".films>li").mouseenter(function () {
        $(this).animate({
            opacity: 0.8,
            bottom: "20px",
            Color: '#000'

        });
    });

    $(".films>li").mouseleave(function () {
        $(this).animate({
            opacity: 1,
            bottom: "0"

        });
    });
});