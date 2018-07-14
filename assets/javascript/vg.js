
console.log(1);

$("#search-vg").on("click", function (event) {
    callAPI();
    $(".form-vg").hide();
    $(".text-center").show();
});


$(".selected-result").on("click", function (event) {
    selectedresult(event);
});
