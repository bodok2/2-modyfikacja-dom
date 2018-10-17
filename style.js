"use strict";

$(document).ready(function () {
    $(".btn").click(function () {
        $(".box").animate({
            left: "100px",
            height: "100px",
            width: "100px"
        }, 3000, end);
                $("h2").delay(5000).show(0);
        
    });

});

function end() {
    
    $(".box").css({
            "background-color": "blue",
            "display": "block",
        });
}
