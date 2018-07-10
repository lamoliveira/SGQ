function showSelected(snapshot) {
    
    // Log everything that's coming out of snapshot
    console.log(snapshot);
    console.log("length:"+snapshot.length);
   
    var divimage = $("#images");

    
    var cover = $("<img>");
    cover.addClass("img-responsive cover_big");
    if (snapshot[0].cover) {
    cover.attr("src", "http://" +   snapshot[0].cover.url);
    }
    divimage.append(cover);
 //  newrow.append("<td>" + snapshot[i].id + "</td>" + "<td>" + "<a class='selected-result' href='selectedresult.html/'" +snapshot[i].id  +">" + snapshot[i].name + "</a>" + "</td>" + "<td>" + parseInt(snapshot[i].popularity) + "</td>" + "<td>" + parseInt(snapshot[i].rating) + "</td>");
  

    var divsynopsis = $("#synopsis");
    divsynopsis.html(snapshot[0].pegi.synopsis);

    // Handle the errors
}