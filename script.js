//we require all apps that use the GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized.
//catch duplicate buttons
//add event listener or event delegation
//tager

$(document).ready(function()   {
//search term convert to word1+word2
  let topics = ['lindy-hop', 'bachata', 'salsa', 'merengue', 'break','samba', 'flamenco', 'tap-dance' ];
  
for (i=0; i<topics.length; i++) {
  console.log(topics[i]);
  $('#giphyDiv').append(`<a value=${topics[i]} id='giphyBtn' class='giphyBtn btn-primary btn'>${topics[i]}</a>`);
}



//On click, create button with value and text inside search
  $('#search').click(function()  {
    buttonText = $('#searchTerm').val().trim();
    $('#giphyDiv').append(`<a value=${buttonText} id='giphyBtn' class='giphyBtn btn-primary btn'>${buttonText}</a>`)
  // console.log(buttonText);
  });

  //on click, run function using button's value;
  $("#giphyDiv").on("click", ".giphyBtn", function() {
     giphyInput = $(this).text();
    console.log(giphyInput);
    //empty div before rendering giphs
    $('#content').empty();
    renderGiphy(giphyInput);
  });
  

const renderGiphy = function(giphyInput){
  var url = "http://api.giphy.com/v1/gifs/search";
   url += '?' + $.param({
     'api_key': 'iH3Fcen9y5uSswz6jjuqZGmlwaKDbryN',
     'q': `${giphyInput}+dance`,
     'limit': 10,
     'rating': 'pg-13'
   })
   console.log(url);

   var xhr = $.get(url);
xhr.done(function(response) { 
  console.log("success got data", response); 

  var giphs = response.data

for (i in giphs){
  $('#content').append(`<img src='${giphs[i].images.original.url}'> rating: ${giphs[i].rating}`)
}

});

   
};


});
