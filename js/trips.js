// ------------------------------------------------------------------------
// Trips Array
// ------------------------------------------------------------------------

const arrTrips = [
    {
      name: "Ultra Package",
      price: 1340,
      description: "Fun three day trip to the Caribbean! Departing 2 January 2024",
      image: "georgy-trofimov-xEJoSsDCnR8-unsplash.jpg",
      tripLength: "short",
      tripDestination: "single",
      
    },
    {
      name: "Super Dip",
      price: 2300,
      description: "Extravagant 10 day trip to Madagascar and Robin island! Departing 19 November 2023",
      image: "christian-lambert-cu_RZWQKKOc-unsplash.jpg",
      tripLength: "long",
      tripDestination: "multi",
      
    },
    {
      name: "Mega Splash",
      price: 3500,
      description: "Fun 15 day trip around Madagascar! Departing 25 September 2023",
      image: "alonso-reyes-Ca4XZM3xABg-unsplash.jpg",
      tripLength: "long",
      tripDestination: "round",
     
    },
    {
      name: "Sweet Summer",
      price: 2530,
      description: "Extravagant 5 day trip to Madagascar and Robin island! Departing 29 October 2023",
      image: "adam-gonzales-A2MkCqYrSUw-unsplash.jpg",
      tripLength: "short",
      tripDestination: "multi",
      
    },
    {
      name: "Fun Run",
      price: 1400,
      description: "Fun 10 day trip to the Caribbean! Departing 6 September 2023",
      image: "alonso-reyes-8NWFh8_i9Ug-unsplash.jpg",
      tripLength: "long",
      tripDestination: "single",
      
    },
    {
        name: "Dive Dip",
        price: 2450,
        description: "Fun 5 day trip around Madagascar! Departing 4 September 2023",
        image: "sheila-jellison-shBk33gUv3Q-unsplash.jpg",
        tripLength: "short",
        tripDestination: "round",
        
      },
      {
        name: "Blistering Heat",
        price: 1650,
        description: "Extravagant 3 day trip to Robin island! Departing 1 December 2023",
        image: "georgy-trofimov-xEJoSsDCnR8-unsplash.jpg",
        tripLength: "short",
        tripDestination: "single",
        
      },
      {
        name: "Super Splash",
        price: 5340,
        description: "Extravagant 3 day trip to Madagascar and Robin island! Departing 18 November 2023",
        image: "alonso-reyes-Ca4XZM3xABg-unsplash.jpg",
        tripLength: "short",
        tripDestination: "multi",
       
      },
      {
        name: "Extra Stride",
        price: 3500,
        description: "Fun 15 day trip around the Caribbean! Departing 15 September 2023",
        image: "christian-lambert-cu_RZWQKKOc-unsplash.jpg",
        tripLength: "long",
        tripDestination: "round",
        
      },
  ];
  
  let appliedFilter = "";
  
  
  // ------------------------------------------------------------------------
  // When the document loads
  // ------------------------------------------------------------------------
  
  $(document).ready(function(){
  
      console.log("Hello");
  
      filterSortTrips();
  
  });
  
  // ------------------------------------------------------------------------
  // Load all trips
  // ------------------------------------------------------------------------
  
  function loadTrips(tripsToShow) {
  
    // Clear all elements inside the trips cards container
  
    $("#tripsContainer").empty();
  
  
  
    // Loop though trips
  
    for (let i = 0; i < tripsToShow.length; i++) {
      const trip = tripsToShow[i];
      
      console.log(trip.name);
  
      $.ajax({
        type:"GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q=" + trip.origin + "&appid=d025f62c869c12eb3db4ea102c7751b0",
        success: function(data){
          temp = data 
          console.log(temp);
        }
      }).done(function(){
       
      })
  
      // 1: Select the plants container add the plant card to it
      $("#tripsContainer").append($("#tripCardTemplate").html());
  
      // 2: Create a variable that contains the most recently added plant card
      let currentChild = $("#tripsContainer").children().eq(i);
  
      // 3: Set the content for the current plant card from the plant array
      $(currentChild).find("#nameText").text(trip.name);
      $(currentChild).find("#priceText").text(trip.price);
      $(currentChild).find("#descriptionText").text(trip.description);
      
      $(currentChild).find(".card-img-top").attr('src','assets/' + trip.image);
  
      // 4: Hide the description text from the curent card
     
    };
  
    

  };
  
  // ------------------------------------------------------------------------
  // When a filter or sort option is clicked
  // ------------------------------------------------------------------------
  
  $("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');
    destinationFilter = $(this).attr('value');

    filterSortTrips();
  });
  
  
  
  function filterSortTrips() {
    let filteredSortedArrTrips = [];
    console.log(appliedFilter);
  
    // Filter Trips
    if (appliedFilter) {
      filteredSortedArrTrips = arrTrips.filter((trip) => trip.tripLength == appliedFilter);
    } else {
      filteredSortedArrTrips = arrTrips;
    }
  
    
    // New filter condition for "tripDestination"
    const destinationFilter = $("input[name='tripDestinationFilter']:checked").val();
    if (destinationFilter) {
      filteredSortedArrTrips = filteredSortedArrTrips.filter((trip) => trip.tripDestination == destinationFilter);
    }
  
    console.log(filteredSortedArrTrips);
  
    loadTrips(filteredSortedArrTrips);
  }
  
  // ------------------------------------------------------------------------
  // When a plant card is clicked
  // ------------------------------------------------------------------------
  
  $("#tripsContainer").on('click','.card', function() {
  
    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additonal content
    $(this).find(".card-img-top").toggleClass("small");
  
  });
  
  
  // ----------------------------------------------------------------
  // When the plant card is clicked
  // ----------------------------------------------------------------
  
  $("#tripsContainer").on('click', '.card', function(){
  
    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });
  
  