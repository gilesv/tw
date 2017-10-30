/* Menu slide */
$(document).ready(function() {
    $('#salario').bind('keypress',mask.money);
    $('#salario').bind('keyup',mask.money);
    toggleMenu();
    $("#collapse-tr").click(function() {
        if($(".tr-collapse").hasClass("show")) {
            $(".tr-collapse").removeClass("show");
            $("#collapse-tr").removeClass("twisted");
        } else {
            $(".tr-collapse").addClass("show");
            $("#collapse-tr").addClass("twisted");
        }
    });
});

function toggleMenu() {
    $(".topnav-botao").click(function() {
        if($(".menu").hasClass("menu-show")) {
            $(".menu").removeClass("menu-show");
            $("#sandbotao").removeClass("twisted");
        } else {
            $(".menu").addClass("menu-show");
            $("#sandbotao").addClass("twisted");
        }
    });
}

/* Validacao dos campos obrigatorios */
function removeFillAlert(element) {
    if($("#" + element.id).parent().hasClass("fill-alert")) {
        $("#" + element.id).parent().removeClass("fill-alert");
    }
}

$("form").submit(function (e) {
    var requiredFields = $(".required");
    var avoidSubmit = false;
    var firstScrollValue = 0;
    for(let i = 0; i < requiredFields.length; i++) {
        var id = "#" + requiredFields[i].id;
        
        if(requiredFields[i].value == "" || requiredFields[i].value == "-" || requiredFields[i].value == "Selecione") {
            if(i == 0 || firstScrollValue == 0) {
                firstScrollValue = $(id).offset().top;
            }
            $(id).parent().addClass("fill-alert");
            avoidSubmit = true;
        }
    }
    if (avoidSubmit) {
        e.preventDefault();
        $(document).scrollTop(firstScrollValue - 80);
    }
});

$("select").change(function(){
    removeFillAlert(this);
});
$("input").change(function(){
    removeFillAlert(this);
});
$("textarea").change(function(){
    removeFillAlert(this);
});

/* Validacao do salario */
var mask = {
    money: function() {
        var el = this;
        exec = function(v) {
            v = v.replace(/\D/g,"");
            v = new String(Number(v));
            var len = v.length;
            if (len == 1) {
                v = v.replace(/(\d)/,"R\$ 0,0$1");
            }
            else if (len == 2) {
                v = v.replace(/(\d)/,"R\$ 0,$1");
            } else if (len > 2 && len < 6) {
                v = "R$ " + v.replace(/(\d{2})$/,',$1');
            } else {
                v = "R$ " + v.replace(/(\d)(\d{5})$/,"$1.$2").replace(/(\d)(\d{2})$/,"$1,$2");
            }
            return v;
        };
   
        setTimeout(function(){
            el.value = exec(el.value);
        }, 1);
    }
}