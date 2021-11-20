$(document).ready(function() {
    $("#increase1").click(function() {
        var updatedV = Number($("#amount1").text());
        updatedV += 1;
        $("#amount1").text(updatedV);
        $("#amount1").css("background-color", "green");
        var last = Number($(".kebap").text() * updatedV);
        $(".cart").html("Sepet Tutarı: " + last);
    });
});

$(document).ready(function() {
    $("#decrease1").click(function() {
        var updatedV = Number($("#amount1").text());
        if (updatedV > 0) {
            var lNumber = Number($(".kebap").text() * updatedV);
            updatedV -= 1;
            $("#amount1").text(updatedV);
            $("#amount1").css("background-color", "red");
            lNumber = lNumber - Number($(".kebap").text());
            $(".cart").html("Sepet Tutarı: " + lNumber);
        }

    });
});

$(document).ready(function() {
    $("#increase2").click(function() {
        var updatedV = Number($("#amount2").text());
        updatedV += 1;
        $("#amount2").text(updatedV);
        $("#amount2").css("background-color", "green");
        var last = Number($(".kusbasi").text() * updatedV);
        $(".cart").html("Sepet Tutarı: " + last);
    });
});

$(document).ready(function() {
    $("#decrease2").click(function() {
        var updatedV = Number($("#amount2").text());
        if (updatedV > 0) {
            var lNumber = Number($(".kusbasi").text() * updatedV);
            updatedV -= 1;
            $("#amount2").text(updatedV);
            $("#amount2").css("background-color", "red");
            lNumber = lNumber - Number($(".kusbasi").text());
            $(".cart").html("Sepet Tutarı: " + lNumber);
        }

    });
});

$(document).ready(function() {
    $("#increase3").click(function() {
        var updatedV = Number($("#amount3").text());
        updatedV += 1;
        $("#amount3").text(updatedV);
        $("#amount3").css("background-color", "green");
        var last = Number($(".ciger").text() * updatedV);
        $(".cart").html("Sepet Tutarı: " + last);
    });
});

$(document).ready(function() {
    $("#decrease3").click(function() {
        var updatedV = Number($("#amount3").text());
        if (updatedV > 0) {
            var lNumber = Number($(".ciger").text() * updatedV);
            updatedV -= 1;
            $("#amount3").text(updatedV);
            $("#amount3").css("background-color", "red");
            lNumber = lNumber - Number($(".ciger").text());
            $(".cart").html("Sepet Tutarı: " + lNumber);
        }

    });
});