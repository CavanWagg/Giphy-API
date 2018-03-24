//we require all apps that use the GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized.
$(document).ready(function()   {
//search term convert to word1+word2
  let topics = [];

  
  

const renderGiphy = function(giphyInput){
  var url = "http://api.giphy.com/v1/gifs/search";
   url += '?' + $.param({
     'api_key': 'iH3Fcen9y5uSswz6jjuqZGmlwaKDbryN',
     'q': giphyInput,
     'limit': 10,
     'rating': 'g'
   })
  

   var xhr = $.get(url);
xhr.done(function(response) { 
  console.log("success got data", response); 

  var giphs = response.data
$('#giphyDiv').append(`<button value=${giphyInput} id='giphyBtn' class='btn'>${giphyInput}</button>`)
for (i in giphs){
  $('#content').append(`<img src='${giphs[i].images.original.url}'>`)
}

});
};

  $('#giphyBtn').click(function() {   
    let giphyInput = $(this).val().trim();
    console.log('woot!');
    renderGiphy(giphyInput);
  });

   
})
