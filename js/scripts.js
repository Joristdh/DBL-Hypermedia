/*global $,*/
$(document).ready(function () {
    "use strict";
    
    $(function () {
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

    var angle = 0;
    $(".fold").click(function () {
        if (angle === 0) {
            $(this).find(".arrow").rotate({
                animateTo: 180
            });
            angle = 1;
        } else if (angle === 1) {
            $(this).find(".arrow").rotate({
                animateTo: 0
            });
            angle = 0;
        }
        $(this).siblings(".collapse").collapse('toggle');
    });



    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});
