
function buildQuery (userinput) { // build the filters here with user fields captured . 
    var name = $("#vg-name-input").val().trim();
    console.log(name);
    var buildquery = "?search=" + name + "&fields=name,popularity,rating,aggregated_rating_count,total_rating,total_rating_count,rating_count,game,aggregated_rating,cover"; 
    return buildquery;
}
