//we require all apps that use the GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized.

var topics = [];
var apiKey = 'iH3Fcen9y5uSswz6jjuqZGmlwaKDbryN';



var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + apiKey + "&limit=5");
xhr.done(function(data) { 
  console.log("success got data", data);
 });


 //grab text of input field
 var giphyInput = $('#searchTerm').val().trim();
 console.log(giphyInput);

 //on click create a button containing that value

 //on click append GIF images to the page

 