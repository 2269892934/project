function Title_switch() {
    var arrTab = document.getElementById('nav').children;
    var arrContent = document.getElementById('content').children;
    var arrTitle = document.querySelectorAll('.login_panel');
    var arrPwd = document.getElementsByClassName('login_bottom');
    for (var i = 0; i < arrTab.length; i++) {
        arrTab[i].onclick = a_click;
    }
    function a_click() {
        for (var i = 0; i < arrTab.length; i++) {
            if (arrTab[i] != this) {
                arrTab[i].className = 'title';
                arrContent[i].className = 'login_content';
            } else {
                arrTab[i].className = 'title selected';
                arrContent[i].className ='login_content selected';
            }
        }
    }
    aa();
    function aa() {
        arrPwd[0].onclick = b_click;
        arrPwd[1].onclick = c_click;

        function b_click() {
            arrTitle[0].className = 'login_panel';
            arrTitle[1].className = 'login_panel selected';
        }
        function c_click() {
            arrTitle[0].className = 'login_panel selected';
            arrTab[0].className = 'title selected';
            arrContent[0].className ='login_content selected';
            arrTab[1].className = 'title';
            arrContent[1].className ='login_content';
            arrTitle[1].className = 'login_panel';
        }
    }
}


