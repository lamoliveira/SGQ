
function showresults(snapshot) {
  $("#table-vg").empty();
  buildquery = buildQuery("zelda");

  // Log everything that's coming out of snapshot
  console.log(snapshot);
  console.log(snapshot[0].name);
  console.log("length:" + snapshot.length);

  for (i = 0; i < snapshot.length; i++) {
    // Create a new variable that will hold a "<th>" tag.
    var vg = $("#vg");
    var newrow = $("<tr>");
    var newtd = $("<td>");
    var cover = $("<img>");
    cover.addClass("img-responsive thumb");
    if (snapshot[i].cover) {
      cover.attr("src", "http://" + snapshot[i].cover.url);
    }
    newtd.append(cover);
    newrow.append(newtd);
    newrow.append( "<td>" + snapshot[i].name + "</td>" + "<td class='ratingC'>" + parseInt(snapshot[i].rating) + "</td>");


    vg.append(newrow);

    // Handle the errors
  }
}