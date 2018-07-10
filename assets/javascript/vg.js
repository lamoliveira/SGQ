
console.log(1);

$("#search-vg").on("click", function (event) {
    callAPI();
});
$(".selected-result").on("click", function (event) {
    selectedresult(event);
});
