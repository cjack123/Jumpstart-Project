// Create an array of image links for places you've been. (A great source of images is Google Destinations).
var myPlaces = ["https://localadventurer.com/wp-content/uploads/2013/02/ga-aquarium-whale-sharks.jpg", 
                "https://www.lookoutmountain.com/images/uploads/attractions/rock-city-mainHD.jpg", 
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F19%2Fnew-york-city-evening-NYCTG0221.jpg&w=1100&h=737&c=sc&poi=face&q=85", 
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F05%2F07%2Faerial-view-st-augustine-florida-STAUGUSTINE0521.jpg"];
// Create an array of the names of those places that you created in the step above.
var placeNames = ["Atlanta Aquarium", "Lookout Mountain", "New York", "St. Augustine"];
// Create a function called populatedPlaces

// Create an event listener on the see-places button.
function populatePlaces() {
  var cards = '';
    for (var i = 0; i < myPlaces.length ;i++) {
    
    cards += `<div class="card" style="width: 18rem;"><img src="${myPlaces[i]}" class="card-img-top" alt="${placeNames[i]}"><div class="card-body"> <h2 class="card-text">${placeNames[i]}</h2></div></div>`
  

   }
  console.log(cards)
  $("#outputPlaces").html(cards)
};

$("#seenPlaces").click(function() {
      populatePlaces()
});


// The event listener should call a function populatePlaces. 
// This function should loop through the arrays 
// This function should create "cards" with the image and the title. 
//You should give each of these cards a class so you can style them.
// The function should output all of these cards to the output-places div.
//Bonus: The function hide the see-places button.