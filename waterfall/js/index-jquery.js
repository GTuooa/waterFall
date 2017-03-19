/**
 * Created by Administrator on 2017/3/15.
 */
$(function() {
    waterFull();
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
            waterFull();
        }
    })
    window.onresize=function(){
        waterFull();
    }
    // 单击翻转
    $("#main").delegate(".box","click",function(){
        $(this).css({
            'transform':'rotateY(-180deg)'
        })
    });
})
function waterFull() {
    var $boxs=$('#main>div');//获取所有的box
    var w=$boxs.eq(0).outerWidth();
    var clos = Math.floor($(window).width()/w);
    $("#main").width(clos*w).css('margin','0 auto');
    var hArr=[];
    $boxs.each(function (index,value) {
        var h=$boxs.eq(index).outerHeight();
        if(index<clos){
            hArr[index]=h;
        }else{
            var minH=Math.min.apply(null,hArr);
            var minHIndex=$.inArray(minH,hArr);
            $(value).css({
                'position':'absolute',
                'left':w*minHIndex+'px',
                'top':minH +'px'
            })
            hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
    })
}
function checkScrollSlde() {
    var $lastBox=$('#main>div').last();
    var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis<scrollTop+documentH)?true:false;
}





























