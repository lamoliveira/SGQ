console.log(1);

function search(){
$("#search-vg").on("click", function (event) {
    $("#vg-name-input").keypress();
    callAPI();
    $(".form-vg").hide();
    $(".text-center").show();

    });
}

$("#vg-name-input").keypress(function(e){
    if(e.keyCode == '13'){
        callAPI();
        $(".form-vg").hide();
        $(".text-center").show();
        event.preventDefault();
    }
});

search();

$(".selected-result").on("click", function (event) {
    selectedresult(event);
});

