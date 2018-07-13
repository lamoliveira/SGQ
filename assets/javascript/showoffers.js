
function showOffers(snapshot) {
  $("#prices").empty();
  
  // Log everything that's coming out of snapshot
  console.log("length:" + snapshot.offers.length);

  for (i = 0; i < snapshot.offers.length; i++) {
    // Create a new variable that will hold a "<th>" tag.
    var vg = $("#prices");
    var newrow = $("<tr>");
    var newtd = $("<td>");
    var cover = $("<img>");
    cover.addClass("img-responsive thumb");
    /*if (snapshot[i].cover) {
      cover.attr("src", "http://" + snapshot[i].cover.url);
    }*/
    //newtd.append(cover);
    newrow.append(newtd);
    newrow.append("<td>" + snapshot.offers[i].id + "</td>" +"<td>" + snapshot.offers[i]["console-name"] + "</td>" + "<td>" + snapshot.offers[i]["product-name"] + "</td>" + "<td>" + snapshot.offers[i]["price"] + "</td>"   );
   // if (!snapshot.offers[i].price) {
   // newrow.append("<td>"  + snapshot.offers[i].price + "</td>");
   // }

    vg.append(newrow);

    // Handle the errors
  }
}