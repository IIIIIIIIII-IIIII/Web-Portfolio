/* $(".card").click(function() {
    layer.open({
        content: 'test'
        ,btn: ['按钮一', '按钮二', '按钮三']
        ,yes: function(index, layero){
          //按钮【按钮一】的回调
        }
        ,btn2: function(index, layero){
          //按钮【按钮二】的回调
          
          //return false 开启该代码可禁止点击该按钮关闭
        }
        ,btn3: function(index, layero){
          //按钮【按钮三】的回调
          
          //return false 开启该代码可禁止点击该按钮关闭
        }
        ,cancel: function(){ 
          //右上角关闭回调
          
          //return false 开启该代码可禁止点击该按钮关闭
        }
      });
}) */


$(".card").mousedown(function (e) {
    if (3 == e.which) {
        var x = $(this).offset().top;
        var y = $(this).offset().left;
        layer.open({
            content: 'test',
             btn: ['按钮一', '按钮二', '按钮三'], 
             yes: function (index, layero) {
                //按钮【按钮一】的回调
            }
            , btn2: function (index, layero) {
                //按钮【按钮二】的回调

                //return false 开启该代码可禁止点击该按钮关闭
            }
            , btn3: function (index, layero) {
                //按钮【按钮三】的回调

                //return false 开启该代码可禁止点击该按钮关闭
            }
            , cancel: function () {
                //右上角关闭回调

                //return false 开启该代码可禁止点击该按钮关闭
            }
            , offset: [x+30, y+5]
        });
    }
});


