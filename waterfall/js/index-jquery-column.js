/**
 * Created by Administrator on 2017/3/15.
 */
$(function() {
    var dataInt={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};

    $(window).on('scroll',function () {
        if(checkScrollSlde){
            //将数据块渲染到当前页面的尾部
            if($(window).scrollTop()>800){
                return
            }
           $.each(dataInt.data,function(key,value){
               var oBox=$('<div>').addClass('box').appendTo($('#main'));
               var oPic=$('<div>').addClass('pic').appendTo(oBox);
               $('<img>').attr('src','img/'+$(value).attr('src')).appendTo(oPic);
           })
        }
    })


    // 单击翻转
    $("#main").delegate(".box","click",function(){
        $(this).css({
            'transform':'rotateY(-180deg)',
            'backfaceVisibility':'visible'
        })
    });
})
function checkScrollSlde() {
    var $lastBox=$('#main>div').last();
    var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis<scrollTop+documentH)?true:false;
}





























