$(document).ready(function() {
    //q1
    $("div").css("display", "block");
    //q2
    $('div#target2').children('span').text("hi");
    //q3
    $("div#target3").clone().appendTo("div.je-html-area");
    //q4
    $("div.target4:eq(2)").css("background-color", "red");
    //q5
    $('div.target5').children('button').prop("disabled", true);
    //q6
    $('input').prop("checked", false);
    //q7
    $('#child').appendTo('#parent2')

    //q8
    $("#target8 input").prop('readonly', true)

    //q9
    $("option:eq(1)").attr("selected", "selected")
        //q10
    $("#target10").height($("#target10").height() * 2).width($("#target10").width() * 2)
});