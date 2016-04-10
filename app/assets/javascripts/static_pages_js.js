/**
 * Created by ksrithon on 4/9/16.
 */
$(document).ready(function(){
    $(document.getElementsByClassName("showInfoBtn")).click(function () {
        $(this).next('div').slideToggle(200);
    });
});
