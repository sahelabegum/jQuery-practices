
$(document).ready(function () {
    $("#range-slider").on("input change",function () {
        $(".text").css("font-size", $(this).val() + "px");
        // Change Span Value
        $(".value").text($(this).val() + "px");
    });
});