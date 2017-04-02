/*global $,*/
$(document).ready(function () {
    "use strict";
    $(".arrowc").rotate({angle: 180});
    
     /* $(function () {
        $("#pagebody").load("docs/setup_survey.html");
    });

    $("#general").click(function () {
        $(function () {
            $("#pagebody").load("docs/general_learningobj.html");
        });
    });
    $("#bachelor").click(function () {
        $(function () {
            $("#pagebody").load("docs/general_aboutcse.html");
        });
    });
*/
    
  
    $(".fold").click(function () {
        $(".arrow, .arrowc").rotate({
            animateTo: 0
        });
        if ($(this).find(".arrow, .arrowc").getRotateAngle() > 100) {
            $(this).find(".arrow, .arrowc").rotate({
                animateTo: 0
            });
        } else {
            $(this).find(".arrow, .arrowc").rotate({
                animateTo: 180
            });
        }
        
        $(".collapse").collapse('hide');
        $(this).siblings(".collapse").collapse("toggle");
    });



    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});
