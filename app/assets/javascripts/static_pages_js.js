/**
 * Created by ksrithon on 4/9/16.
 */
var pageInitialized = false;
$(document).ready(function(){
    if(pageInitialized) return;
    pageInitialized = true;
    $(document.getElementsByClassName("list-item")).click(function () {
        var id = $(this).attr('id');
        var id = "p" + id;
        $(document.getElementsByClassName("list-item")).removeClass("active-btn");
        $(this).addClass("active-btn");
        $(document.getElementsByClassName("panel")).fadeOut(250);
        $(document.getElementById(id)).delay(250).fadeIn(250);
    });
    $(document.getElementsByClassName("projectBtn")).click(function () {
        $(this).text(function(i, text) {
            return text === "See the Tech" ? "See the Info" : "See the Tech";
        });
        var toToggle = $(this).attr("id");
        toToggle = "text-" + toToggle;
        $(document.getElementById(toToggle)).children().slideToggle();
    });
    if($('body#home').length > 0) {
        if(!sessionStorage.viewed) {
            $(".navbar").hide();
            $("#black").show();
            $("#black").fadeTo(1000, 0, function() {
                $('#home-title').fadeIn( function() {
                    $('#home-main').fadeIn(250, function() {
                        $(".navbar").fadeIn(250);
                    });
                });
            });
            sessionStorage.viewed = 1;
        }
        else {
            $('#home-title').fadeIn(250);
            $('#home-main').fadeIn(250);
        }
    }
    $(".left-list").fadeIn(600);
    $('#me-wrapper').fadeIn(600).removeClass('hidden');
    $('#navbar-collapse-1').on('show.bs.collapse', function () {
        $(".navbar").addClass("activeMobile");
        $(".navbar").removeClass("hiddenMobile");
    });
    $('#navbar-collapse-1').on('hidden.bs.collapse', function () {
        $(".navbar").addClass("hiddenMobile");
        $(".navbar").removeClass("activeMobile");
    });
});

