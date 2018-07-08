console.log("inicio");
/*
$.ajaxPrefilter(function (options) {
  options.fields = '*'; // Return all fields
  options.limit = 5;  // Limit to 5 results
  options.offset = 15; // Index offset for results
  options.search = 'name=zelda';
});
*/
console.log("before filter");
$.ajaxPrefilter( function (options) {
 
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api-endpoint.igdb.com/games/1942?fields=*',
  headers: {
    'user-key': '356fd165776f7158f97ab77117d2e442',
    'Accept': 'application/json'
  }
}).then(function (response) {
  console.log(response);
});




$.ajaxPrefilter( function (options) {
 
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api-endpoint.igdb.com/games/?search=zelda&fields=name,popularity,publishers&order=popularity:desc',
  headers: {
    'user-key': '356fd165776f7158f97ab77117d2e442',
    'Accept': 'application/json'
  }
}).then(function (response) {
  console.log(response);
});