window.onload = function () {

    //登录框不见
    var mask = document.getElementById('mask');
    var closeBtn = document.getElementById('closeBtn');
    var loginBox = document.getElementById('loginBox');
    var loginBoxH = document.getElementById('loginBoxHeader');

    mask.onclick = closeBtn.onclick = function () {
        mask.style.display = 'none';
        loginBox.style.display = 'none';
    }
}