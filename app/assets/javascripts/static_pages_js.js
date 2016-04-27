/**
 * Created by ksrithon on 4/9/16.
 */
$(document).ready(function(){
    $(document.getElementsByClassName("list-item")).click(function () {
        var id = $(this).attr('id');
        var id = "p" + id;
        $(document.getElementsByClassName("list-item")).removeClass("active-btn");
        $(this).addClass("active-btn");
        $(document.getElementsByClassName("panel")).fadeOut();
        $(document.getElementById(id)).delay(500).fadeIn(500);
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
        $("#black").fadeTo(3000, 0, function() {
            $('#home-title').fadeIn( function() {
                $('#home-main').fadeIn(500);
            });
        });
    }
});
$(window).on('resize', function() {
    var w = $(window).width();
    var h = $(window).height();
    $('#gradient').css('width', w);
    $('#gradient').css('height', h);
});

