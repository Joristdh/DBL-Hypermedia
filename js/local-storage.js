/*global $,*/


$(document).ready(function () {
    "use strict";
    if (typeof (Storage) !== "undefined") {
        var major = localStorage.getItem("major");
        //window.alert("major: " + major);
        if (major === "cse" || major === "pt" || major === "cse_msc" || major === "hti" || major === "pre_cse_msc" || major === "pre_hti") {
            switch (major) {
                case "cse":
                    window.location.replace("/docs/general_aboutcse.html");
                    break;
                case "pt":
                    window.location.replace('/docs/PT_general.html');
                    break;
                case "cse_msc":
                    window.location.replace("/docs/msc_general_about.html");
                    break;
                case "hti":
                    window.location.replace('main.html');
                    break;
                case "pre_cse_msc":
                    window.location.replace('/docs/premsc_cse.html');
                    break;
                case "pre_hti":
                    window.location.replace('main.html');
                    break;
                case "reset":
                    window.location.replace('index.html');
                    break;
            }
        }

        $("#cstest").click(function () {
            //window.alert("cstest is clicked");
            major = "cse";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
        $("#pttest").click(function () {
            //window.alert("pttest is clicked");
            major = "pt";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
        $("#cse_msc").click(function () {
            //window.alert("cs_msetest is clicked");
            major = "cse_msc";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
        $("#htitest").click(function () {
            //window.alert("htitest is clicked");
            major = "hti";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
        $("#profile-switch").click(function () {
            //window.alert("profile-switch is clicked");
            major = "reset";
            localStorage.setItem("major", major);
            window.location.replace("index.html");
        });
        $("#pre_cse_msc").click(function () {
            //window.alert("htitest is clicked");
            major = "hti";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
        $("#pre_hti").click(function () {
            //window.alert("htitest is clicked");
            major = "hti";
            localStorage.setItem("major", major);
            window.location.replace('main.html');
        });
    } else {
        window.alert("Your device does not have local storage support");
    }
});
