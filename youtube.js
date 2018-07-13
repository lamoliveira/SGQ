function start() {

gapi.client.init({
    'apiKey': 'AIzaSyCFQH5Y6jt67hPbKz1lw95jwjgFYGxG_QA', 
}).then(function(){
    return gapi.client.request({
        'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names'     
    })
}).then(function(response) {
    console.log(response.result);
}, function(reason) {
    console.log("Error: " + reason.result.error.message);
});
};
gapi.load('client', start);