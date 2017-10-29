$(document).ready(function() {
    $(".topnav-botao").click(function() {
        if($(".menu").hasClass("menu-show")) {
            $(".menu").removeClass("menu-show");
        } else {
            $(".menu").addClass("menu-show");
        }
    });
});
