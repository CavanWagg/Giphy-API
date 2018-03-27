//we require all apps that use the GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized.
//catch duplicate buttons
//add event listener or event delegation
//tager

$(document).ready(function()   {
//search term convert to word1+word2
  let topics = ['lindy-hop', 'salsa', 'break', 'flamenco', 'tap-dance' ];
  
for (i=0; i<topics.length; i++) {
  console.log(topics[i]);
  $('#giphyDiv').append(`<a value=${topics[i]} class='giphyBtn btn-primary btn'>${topics[i]}</a>`);
}

//On click, create button with value and text inside search
  $('#search').click(function()  {
    buttonText = $('#searchTerm').val().trim();
    $('#giphyDiv').append(`<a value=${buttonText} class='giphyBtn btn-primary btn'>${buttonText}</a>`)
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

  //on click switch gif to

  $(document).on("click", ".image", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
    console.log('water')
  });

const renderGiphy = function(giphyInput){
  var url = "http://api.giphy.com/v1/gifs/search";
   url += '?' + $.param({
     'api_key': 'iH3Fcen9y5uSswz6jjuqZGmlwaKDbryN',
     //add dance to search term so that search stays consistent with the topic
     'q': `${giphyInput}+dance`,
     'limit': 12,
     'rating': 'pg-13'
   })
   console.log(url);

   var xhr = $.get(url);
xhr.done(function(response) { 
  console.log("success got data", response); 

  var giphs = response.data

for (i in giphs){
  //data-still contains still url image of giph
  //data-animate contains giph url
  //set data-state to initially 'animate'
  //src is equal to data-animate,
  $('#content').append(`<div class='giph-container col-lg-4'><img class='image img-fluid' 
  data-still='${giphs[i].images.fixed_height_small_still.url}' 
  data-animate='${giphs[i].images.fixed_height_small.url}'
  data-state='still'
  src='${giphs[i].images.fixed_height_small_still.url}'><figcaption class='text-center rating-text'> 
  rating: ${giphs[i].rating}</figcaption> </div>`)
}

//On click pause or animate giph


});

   
};


});
