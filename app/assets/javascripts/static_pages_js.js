/**
 * Created by ksrithon on 4/9/16.
 */
$(document).ready(function(){
    $(document.getElementsByClassName("showInfoBtn")).click(function () {
        $(this).next('div').slideToggle(200);
    });
    $(document.getElementsByClassName("projectBtn")).click(function () {
        $(this).text(function(i, text) {
            return text === "Tech" ? "Info" : "Tech";
        });
        $(this).next('div').text(function(i, text) {
            return text === "Tech" ? "Info" : "Tech";
        });
    });
});
