$(function(){
    
    //第一页面跳转
    $('.diyiye').click(function(){
       open('../html/index1.html')
    });



    //第二页面切换
    $(".you").click(function(){
        $('.you').addClass('d-none');
        $(".xia").removeClass('d-none');
        $(".yc").removeClass('d-none');
   });

    $(".xia").click(function(){
        $('.xia').addClass('d-none');
        $(".you").removeClass('d-none');
        $(".yc").addClass('d-none');
    });







});