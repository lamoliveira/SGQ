function callAPI(buildquery) {
    
    var buildquery = buildQuery("zelda");
    
    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $.ajax({
        type: 'GET',
        url: 'https://api-endpoint.igdb.com/games/' + buildquery ,
        headers: {
            'user-key': '356fd165776f7158f97ab77117d2e442',
            'Accept': 'application/json'
        }
    }).then(function (snapshot) {
        showresults(snapshot);
    });

    // just to test the ajax results
    var buildquery = "?search=" + name  + "&fields=*" ;
    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $.ajax({
        type: 'GET',
        url: 'https://api-endpoint.igdb.com/games/' + buildquery ,
        headers: {
            'user-key': '356fd165776f7158f97ab77117d2e442',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        console.log(response);
    });

};
