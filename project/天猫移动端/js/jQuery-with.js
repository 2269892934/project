!(function ($) {
    $.fn.with = function () {
        var search = this;
        // var _height = search.position().top;
        $(window).scroll(function () {
            var scrollTop = window.scrollY;
            // console.log(scrollTop)
            if(scrollTop <= 0){
                search.css({top:'0px'});
            }else{
                search.css({top:scrollTop});
            }
        })
    }
})(jQuery);