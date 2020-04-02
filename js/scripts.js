/*global $,*/
var first = 0;
$(document).ready(function () {
    "use strict";
    $(".arrowc").rotate({
        angle: 180
    });
    $("a.switch").click(function () {
        localStorage.major = null;
        sessionStorage.clear();
    });
    $(".collapse a").prepend("&nbsp;&nbsp;");
    $("#wrapper").removeClass("toggled");
    
    if (!sessionStorage.ani) {
        $("#sidebar-wrapper.current").css("animation", "0.4s ease-out 0s 1 sideBar");
        sessionStorage.ani = 1;
    }
    
    $("#back").click(function () {
        $("#wrapper #sidebar-wrapper.current").css("padding-left", "250px");
        $("#wrapper #sidebar-wrapper.main").css("width", "250px");
    });

    $(".bodyfold, .bodyarrow").click(function () {
        if (window.innerWidth < 1200) {
            $(this).siblings(".collapse").collapse("toggle");
        }
    });
    var mobile = 1;
    setInterval(function () {
        if (window.innerWidth >= 1200) {
            $(".collapse.body").collapse("show");
            mobile = 1;
        } else if (mobile === 1) {
            $(".collapse.body").collapse("hide");
            mobile = 0;
        }
    }, 100);
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

        $("li>.collapse").collapse('hide');
        $(this).siblings(".collapse").collapse("toggle");
    });




    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#wrapper #sidebar-wrapper.current").css("padding-left", "0");
        $("#wrapper #sidebar-wrapper.main").css("width", "0");

    });
});
