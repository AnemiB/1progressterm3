
  
  $(document).ready(function(){
    $(".a").click(function(){
      $("tr").remove(".remove1");
    });
  });
  
  $(document).ready(function(){
    $(".b").click(function(){
      $("tr").remove(".remove2");
    });
  });
  
  $(document).ready(function(){
    $(".c").click(function(){
      $("tr").remove(".remove3");
    });
  });

  $(document).ready(function(){
    $(".d").click(function(){
      $("tr").remove(".remove4");
    });
  });

  $(document).ready(function(){
    $(".e").click(function(){
      $("tr").remove(".remove5");
    });
  });

  $(document).ready(function(){
    $(".f").click(function(){
      $("tr").remove(".remove6");
    });
  });

  $(document).ready(function(){
    $(".g").click(function(){
      $("tr").remove(".remove7");
    });
  });

  $(document).ready(function(){
    $(".h").click(function(){
      $("tr").remove(".remove8");
    });
  });

  $(document).ready(function(){
    $(".i").click(function(){
      $("tr").remove(".remove9");
    });
  });

  function removeAll() {
    var table = document.getElementById("tab");
    var rowsToRemove = table.querySelectorAll("tr[value='remove']");

    rowsToRemove.forEach(function(row) {
        row.remove();
    });
}

var removeAllButton = document.querySelector(".j");
removeAllButton.addEventListener("click", removeAll);


function calculateTotal() {
  var totalPrice = 0;
  var rows = document.querySelectorAll("tr[value='remove']");
  rows.forEach(function (row) {
      var priceElement = row.querySelector(".price");
      var price = parseFloat(priceElement.innerText);
      totalPrice += price;
  });

  var totalAmountDiv = document.getElementById("totalAmount");
  totalAmountDiv.innerText = "Total Amount: R " + totalPrice.toFixed(2);
}

var removeButtons = document.querySelectorAll(".a, .b, .c, .d, .e, .f, .g, .h, .i");
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
      var row = button.closest("tr");
      row.remove();

      
      calculateTotal();
  });
});


calculateTotal();


// Function to display the pop-up when the button is clicked
document.getElementById("purchaseButton").addEventListener("click", function() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  // Automatically hide the pop-up after 3 seconds (adjust as needed)
  setTimeout(function() {
    popup.style.display = "none";
  }, 3000);
});