$(function(){

    var time ;
    var num = 60;

    $("#a1").click(function(){

        time=setInterval(function(){
            num--;
            console.log(num);
        },1000);
    });






    $('#a2').click(function(){
        clearInterval(time);
    });

});