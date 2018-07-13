function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace('/\{\{(.*?)\}\}\g',function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e){
        e.preventDefault();
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#getGameTitle").val()).replace(/%20/g, "+"),
            maxResults: "1",
            order: "viewCount"
        });

        request.execute(function(response) {
            console.log(response);
            var results = response.result;
            $.each(results.items, function(index, item) {
                $.get("tpl/item.html", function(data) {
                    $("#ytEmbed").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                });
            });
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyCFQH5Y6jt67hPbKz1lw95jwjgFYGxG_QA");
    gapi.client.load("youtube", "v3", function(){

    });
}

