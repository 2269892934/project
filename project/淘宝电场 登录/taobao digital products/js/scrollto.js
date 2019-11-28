function scrollto() {
    var box = document.getElementsByClassName('main');
    var btnteam = document.querySelectorAll('.container .nav-ul li');
    var btn = document.querySelector('.container .nav li.last');
    var key = false;

    for(var i = 0;i<btnteam.length;i++){
        btnteam[i].onclick =  btnteam_onclick;
    }

    function btnteam_onclick(){

        for(var i = 0;i<btnteam.length;i++){

            if(btnteam[i] != this){
                btnteam[i].className = '';
                box[i].className = 'main clearfix';
            }else{
                btnteam[i].className = 'selected';
                box[i].className = 'main clearfix selected';
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var _top = box[i].offsetTop;

                aa();
                function aa() {
                    if(Math.abs(scrollTop - _top) > 1){
                        scrollTop += (_top - scrollTop)/10;
                        document.documentElement.scrollTop = scrollTop-100;
                        setTimeout(aa,10);
                    }
                }
            }
        }
    }

    btn.onclick=function () {
        if (key == false){
            key = true;
            var  scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var n = 0;
            aa();
            function aa() {
                if (n < Math.PI/2){
                    n += 0.04;
                    window.scrollTo(0,Math.cos(n)*scrolltop);
                    setTimeout(aa,15)
                } else{
                    window.scrollTo(0,0);
                }
            }
            key = false;
        }
    }
}
function lunbo() {
    var arrBtn = document.querySelectorAll('.head-pro li');
    // console.log(arrBtn)
    var box = document.querySelector('.area .content').lastElementChild;
    var ul = document.querySelector('.area .content .content-pro');
    var maxLength = ul.children.length;
    var liWidth = ul.children[1].offsetLeft;
    var boxWidth = box.clientWidth;

    var timeOut;
    var contentWidth = box.scrollWidth;
    //为了无缝衔接，后面要加的图片的长度
    for (var i = 0; i < Math.ceil(boxWidth / contentWidth); i++) {
        ul.innerHTML += ul.innerHTML;
    }
    var n;index = 0;
    var step=1000;
    aa();
    // alert(13)
    function aa() {
        change_btn(index);
        n = 0;
        ul.style.marginLeft = index * (-liWidth) + 'px';
        timeOut=setTimeout(bb,step);
    }
    function bb() {
        if (n > -liWidth) {
            n -= 5;
            ul.style.marginLeft = n + index * (-liWidth) + 'px';
            timeOut=setTimeout(bb, 13)
        } else {
            index = ++index % maxLength;
            ul.style.marginLeft = index * (-liWidth) + 'px';
            aa();
        }

    }
    for (var i=0;i<arrBtn.length;i++){
        arrBtn[i].onclick = btn_click;
    }

    function btn_click() {
        for(var i=0;i<arrBtn.length;i++){
            arrBtn[i].style.color = '#a19da0';
        }
        this.style.color = 'black';
        // 1、先停止动画
        clearTimeout(timeOut);
        // 2、改变索引值
        index = this.getAttribute('data-index');
        console.log(index);
        // 3、恢复动画
        aa();
    }
    function change_btn(n) {
        for(var i=0;i<arrBtn.length;i++){
            arrBtn[i].style.color = '#a19da0';
        }
        // alert(n)
        arrBtn[n].style.color = 'black';
    }

}



