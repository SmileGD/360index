/**
 * Created by hasee on 2017/5/16.
 */
$(function(){
    $('.carousel').carousel({
        interval: 2000
    })
    var items=$(".carousel-inner .item");
    $(window).on("resize",function(){
        var width=$(window).width();
        if(width<768){
            $(items).each(function(index,value){
                var imgSrc=$(this).data("smallImage");
                $(this).html('<a href="javascript:;"class="mobileImg"><img src="'+imgSrc+'" alt=""/></a>')
            })
        }else{
            $(items).each(function(index,value){
               var imgSrc=$(this).data("largeImage");
                $(this).html('<a href="javascript:;" class="pcImg" style="background-image: url('+imgSrc+')"></a>')
            })
        }

    }).trigger("resize");

    //ʵ���ֲ�ͼ���ƶ��˵Ļ�������
    var startX,endX,distanceX;
    var carousel_inner=$(".carousel-inner")[0];
    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    })
    carousel_inner.addEventListener("touchend",function(e){
       endX= e.changedTouches[0].clientX;
        distanceX=endX-startX;
        if(distanceX>0){
            $('.carousel').carousel('prev');
        }else if(distanceX < 0){
            $('.carousel').carousel('next');
        }
    })
    //��ʾ���ߺ���
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
   //��Ʒ�鵼��������
    var tab=$(".wjs_product .nav-tabs");
    var lis=tab.find("li");
    var total=0;
    lis.each(function(index,value){
        total+=$(this).outerWidth(true);
    })
    $(tab).width(total);
    //ʹ�ò��ʵ�ֱ�ǩҳ�����Ļ���
    var myScroll = new IScroll('.tab_parent',{
        scrollX: true,
        scrollY: false
    })
})