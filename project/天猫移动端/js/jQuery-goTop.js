!(function ($) {
    $.fn.goTop = function (userArg) {
        var btn = this;

        var height = $(window).height();
        $(window).scroll( function () {
            if ($(this).scrollTop() >= height){
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });
        btn.click(function () {
            $('html,body').stop().animate({scrollTop:0},600)
        })
    };
    return this;
})(jQuery);