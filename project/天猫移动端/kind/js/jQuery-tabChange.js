!(function ($) {
    $.fn.tabChange = function () {
        var arrTab = this;
        var arrContent = $('#list>div');
        arrTab.click(function () {
            $(this)
                .add(
                    arrContent.eq($(this).index())
                )
                .addClass('selected')
                .siblings()
                .removeClass('selected')
        })
    }
})(jQuery);