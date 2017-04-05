/*global $,*/
var first = 0;
$(document).ready(function () {
    "use strict";
    $(".arrowc").rotate({
        angle: 180
    });
    $("#a").click(function () {
        window.alert("test");
    });
    $(".collapse a").prepend("&nbsp;&nbsp;");
    if (window.innerWidth < 768) {
        $("#wrapper").removeClass("toggled");
    }
    if (!sessionStorage.ani) {
        $("#sidebar-wrapper.current").css("animation", "0.4s ease-out 0s 1 sideBar");
        sessionStorage.ani = 1;
    }
    $("#back").click(function () {
        $("#wrapper.toggled #sidebar-wrapper.current").css("padding-left", "250px");
        $("#wrapper.toggled #sidebar-wrapper.main").css("width", "250px");
    });
   
    $(".fold").click(function () {
        $(".arrow, .arrowc").rotate({
            duration: 600,
            animateTo: 0
        });
        if ($(this).find(".arrow, .arrowc").getRotateAngle() > 100) {
            $(this).find(".arrow, .arrowc").rotate({
                duration: 600,
                animateTo: 0
            });
        } else {
            $(this).find(".arrow, .arrowc").rotate({
                duration: 600,
                animateTo: 180
            });
        }

        $(".collapse").collapse('hide');
        $(this).siblings(".collapse").collapse("toggle");
    });
    
   
    

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#wrapper #sidebar-wrapper.current").css("padding-left", "0");
        $("#wrapper #sidebar-wrapper.main").css("width", "0");

    });
});
