function windowParamsBind() {
    var height = document.documentElement.clientHeight - 34;

    $(".col-block").css("height", height);
    $(".card").css("height", height / 4 - 13);
}

$(document).ready(
    windowParamsBind()
);
$(window).resize(function () {
    windowParamsBind();
});



/* 保证JQUERY的引用统一 */

