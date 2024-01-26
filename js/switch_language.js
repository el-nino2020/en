var _prevOnload = window.onload;

window.onload = function () {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-english")[0];
    switchLang.onclick = function () {
        var href = window.location.href;
        window.location.href = href.replace('el-nino2020.github.io/en', 'el-nino2020.github.io');
        if (typeof (_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}
