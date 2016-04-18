/**
 * Created by ksrithon on 4/9/16.
 */
$(document).ready(function(){
    $(document.getElementsByClassName("showInfoBtn")).click(function () {
        $(this).next('div').slideToggle(200);
    });
    $(document.getElementsByClassName("projectBtn")).click(function () {
        $(this).text(function(i, text) {
            return text === "See the Tech" ? "See the Info" : "See the Tech";
        });
        $(this).next('div').children().toggle();
    });
    var w = $(window).width();
    var h = $(window).height();
    $('#gradient').css('width', w);
    $('#gradient').css('height', h);
    if($('body#home').length > 0) {
        $("#black").fadeTo(6000, 0);
        $(".navbar").hide();
        //$(".navbar").hide().fadeIn(10000);
    }
});
$(window).on('resize', function() {
    var w = $(window).width();
    var h = $(window).height();
    $('#gradient').css('width', w);
    $('#gradient').css('height', h);
});

