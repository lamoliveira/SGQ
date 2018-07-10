
//var buildquery = '1942?fields=*';
function GetURLParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var buildquery = GetURLParameter('id');
console.log(buildquery);
buildquery += "?fields=*";

$.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});
$.ajax({
    type: 'GET',
    url: 'https://api-endpoint.igdb.com/games/' + buildquery,
    headers: {
        'user-key': '356fd165776f7158f97ab77117d2e442',
        'Accept': 'application/json'
    }
}).then(function (snapshot) {
    showSelected(snapshot);
});
