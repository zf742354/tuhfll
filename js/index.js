$(function(){
    
    //��һҳ����ת
    $('.diyiye').click(function(){
       open('../html/index1.html')
    });



    //�ڶ�ҳ���л�
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