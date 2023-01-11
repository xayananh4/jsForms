// User Interface Logic

// New function name!
function hideResultsAndError() {
  // New line of code to hide the error message.
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (!age || !height) {
      document.getElementById("error-message").removeAttribute("class");
    // in all other cases, we run our code to see what ride a user can go on
    }
    else if(age < 6 ){
      document.getElementById("sorry").removeAttribute("class");
    }
    
    else {
      if (age >= 12 && height >= 60) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
        document.getElementById("tower").removeAttribute("class");
      } else if (age >= 12 || height >= 48) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
      } else if (age >= 6) {
        document.getElementById("swings").removeAttribute("class");
      } else {
        //this will never happen
      }
    }
  };

  let clearButtonClick = document.getElementById("clear_button");
  clearButtonClick.onclick = function() {
      hideResultsAndError();
  }


};