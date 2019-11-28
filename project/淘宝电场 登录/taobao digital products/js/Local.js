function Local() {
    var search = document.getElementById('search-nav');
    var _height = search.offsetTop;

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1000);
document.documentElement.scrollTop = 0;

    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop <= _height) {
            search.style.top = '0px';
        } else {
            search.style.top = scrollTop - _height + 'px';
        }
    }
}
function Change() {
    var nav = document.querySelector('.nav-left-box');
    var list = document.querySelector('.nav-left-box').children;
    var arrTab = document.querySelectorAll('.nav-p p');
    var arrContent = document.querySelectorAll('.nav-text .nav-mid-text');
    for (var i = 0; i < arrTab.length; i++) {
        arrTab[i].onmouseenter = li_mouseenter;
    }
    nav.onmouseleave = list_mouseleave;
    function li_mouseenter() {
        for (var i = 0; i < arrTab.length; i++) {
            if (arrTab[i] != this) {
                arrTab[i].style.background = '#3f3f4b';
                arrTab[i].style.color = '#fff';
                arrContent[i].style.display = 'none';
            } else {
                arrTab[i].style.background = ' #fff';
                arrTab[i].style.color = '#000';
                arrContent[i].style.display = 'block';
                list[1].className = 'nav-text selected';
            }
        }
    }
    function list_mouseleave() {
        list[1].className = 'nav-text';
        for (var i = 0; i < arrTab.length; i++){
            arrTab[i].style.background = '#3f3f4b';
            arrTab[i].style.color = '#fff';
        }
    }
}
function xuanze1() {
    var arrTab = document.querySelectorAll('.title-item span');
    var arrContent = document.querySelectorAll('.head ul');
    var content = document.querySelector('.area .content').children;
    for (var i = 0; i < arrTab.length; i++) {
        arrTab[i].onclick = li_click;
    }

    function li_click() {
        for (var i = 0; i < arrTab.length; i++) {
            if (arrTab[i] != this) {
                arrTab[i].className = '';
                arrContent[i].style.display = 'none';
                content[i].style.display = 'none'
            } else {
                arrTab[i].className = 'title-span active';
                arrContent[i].style.display = 'block';
                content[i].style.display = 'block'
            }
        }
    }
}
function xuanze2() {
    var arrTab = document.querySelectorAll('.head ul.head-img li');
    var arrContent = document.querySelectorAll('.area .content ul.content-imgs li');

    for(var i=0;i<arrTab.length;i++){
        arrTab[i].onclick = li_click;
    }

    function li_click() {
        for(var i=0;i<arrTab.length;i++){
            if(arrTab[i] != this){
                arrTab[i].className = '';
                arrContent[i].className = 'content-img-li';
            }else{
                arrTab[i].className = 'active';
                arrContent[i].className = 'content-img-li active';
            }
        }
    }
}