
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
    showProduct(snapshot);
});
// new query for product 

function showProduct(game) {
var buildquery = "";
console.log(buildquery);
console.log("product");
console.log("game:" + game[0].name)
//buildquery += "?fields=*";
token = "c0b53bce27c1bdab90b1605249e600dc43dfd1d5";
query = "https://www.pricecharting.com/api/product?t="+ token + "&q=" + game[0].name;

$.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});
$.ajax({
    type: 'GET',
    url: query,
    
    headers: {
        //'user-key': '356fd165776f7158f97ab77117d2e442',
        'Accept': 'application/json'
    }
}).then(function (product) {
    console.log(product);
    showPrice(product);
});
}
function showPrice (product) {

// new query for price

var buildquery = "";
console.log(buildquery);
console.log("price");
//buildquery += "?fields=*";
token = "c0b53bce27c1bdab90b1605249e600dc43dfd1d5";
query = "https://www.pricecharting.com/api/offers?t="+ token + "&id=" + product.id ;

$.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});
$.ajax({
    type: 'GET',
    url: query,
    
    headers: {
        //'user-key': '356fd165776f7158f97ab77117d2e442',
        'Accept': 'application/json'
    }
}).then(function (snapshot) {
    console.log(snapshot);
    showOffers(snapshot);
});
}