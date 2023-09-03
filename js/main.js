

  
  $(document).ready(function(){
  
      console.log("Hello");
  
      var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      
      this.classList.toggle("active");
  
     
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  
  
  $(document).ready(function() {
    let temp; 
  
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=d025f62c869c12eb3db4ea102c7751b0",
      success: function(data) {
        temp = data;
        console.log(temp);
        updateWeatherTemp(); 
      },
      error: function(xhr, status, error) {
        console.log("Error:", error);
      }
    });
  
    function updateWeatherTemp() {
      if (temp) {
        $("#weatherTemp").text(Math.round(temp.main.temp - 273));
      }
    }
  });
});
