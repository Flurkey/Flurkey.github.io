$(document).ready(function () {
    var hrefname = $(location).attr("href").split("#")[1];
    if (hrefname) {
        $(".buttons a").removeClass("active");
        $('a[href*="#' + hrefname + '"]').addClass("active");
    } else {
        $('a[href*="#home"]').addClass("active");
    }
    $(window).resize(function () {
        location.reload();
    })

    $(".buttons a").on('click', function (e) {
        $(".buttons a").removeClass("active");
        $(this).addClass("active");
    });
});