/*global $,*/
$(document).ready(function () {
    "use strict";
    if ($(window).width() > 768) {
        $("#wrapper").toggleClass("toggled");
    }
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

    

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });








});
