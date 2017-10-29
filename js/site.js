$(document).ready(function() {
    $(".topnav-botao").click(function() {
        if($(".menu").hasClass("menu-show")) {
            $(".menu").removeClass("menu-show");
            $("#sandbotao").removeClass("topnav-twisted");
        } else {
            $(".menu").addClass("menu-show");
            $("#sandbotao").addClass("topnav-twisted");
        }
    });
});
