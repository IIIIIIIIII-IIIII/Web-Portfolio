function getParams(className) {
        var width = $(className).width();
        var left = $(className).position().left;
        var top = $(className).position().top;
        var bottom = $(className).position().bottom;
        var right = $(className).position().right;
        var params = {
            width,left,top,bottom,right
        };
        return params;
}

function createFixedBlock(className) {

    $(className).mouseover(function (e) {
        var params = getParams(className);

        $(this).children(".hoverBlock").css({
            "display": "inline-block",
            "position": "absolute",
            "cursor": "pointer",
            "width": params.width + 30,
            "height": "inherit",
            "padding": "15px",
            "margin": "10px auto",
            "background": "rgba(0, 0, 0, .5)",
            "top": params.top,
            "bottom": params.bottom,
            "left": params.left,
            "right": params.right
        })

    })
    $(className).mouseout(function (e) {
        $(this).children(".hoverBlock").css("display", "none");

    })

}

for (var i =1 ;i<=4;i++) {
    for (var j = 1; j<=4; j++){
        createFixedBlock(".card_" + i + "-" + j);
    }
}



/* 保证方法简洁， 各方法的功能与责任明确 */