!(function ($) {
    $.fn.myPlug = function(){
        var obj = this.children();
        var maxLength = obj.length;
        var width = obj.eq(1).position().left;


        obj.css({position:'relative'});
        var index = 0;
        var time;



        aa();
        function aa() {
            changeBtn(index);
            index = ++index%maxLength;
            time=setTimeout(function () {
                changeBtn(index);
                obj.parent().stop().animate({marginLeft:-index*width},600,aa)
            },3000);
        }


        var btnGroup = $('<btnGroup>').appendTo('#scroll').css({
            position:'absolute',
            right:104,
            bottom:10
        });

        obj.each(function (i,ele) {
            $('<btn>').appendTo(btnGroup).css({
                cssFloat:'left',
                display: 'block',
                width: 12,
                height: 4,
                backgroundColor: 'rgba(255,255,255,0.5)',
                margin: 3,
                cursor: 'pointer',
                borderRadius: 3
            });
            $('btnGroup btn').eq(0).css({backgroundColor:'white'})
        });
        function changeBtn(n) {
            $('btnGroup btn').eq(n).css({backgroundColor:'white'})
                .siblings().css({backgroundColor:'rgba(255,255,255,0.4)'})
        }

        $('btnGroup btn').click(function () {
            clearTimeout(time);
            index = $(this).index();
            changeBtn(index);
            obj.parent().stop(true,false).animate({
                marginLeft:-index*width
            },1000,aa);
        });

    };

    return this;
})(jQuery);
