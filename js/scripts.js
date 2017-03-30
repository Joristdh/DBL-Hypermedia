/*global $,*/
$(document).ready(function () {
    "use strict";
    $("#general").click(function () {
        $(function () {
            $("#pagebody").load("/docs/general_learningobj.html");
        });
    });
    $("#bachelor").click(function () {
        $(function () {
            $("#pagebody").load("/docs/general_aboutcse.html");
        });
    });

    $(function () {
        $("#pagebody").load("/docs/setup_survey.html");
    });

});