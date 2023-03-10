function hideElements(){

  document.getElementById("announce").setAttribute("class", "hidden");
  document.getElementById("justin").setAttribute("class", "hidden");
  document.getElementById("rock").setAttribute("class", "hidden");
  document.getElementById("kanye").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
  document.getElementById("name_error").setAttribute("class", "hidden");
  document.getElementById("age_error").setAttribute("class", "hidden");
  document.getElementById("height_error").setAttribute("class", "hidden");
  document.getElementById("color_error").setAttribute("class", "hidden");

}

window.onload = function(){
  
  let submitButtonClick = document.getElementById("submit_button");
  submitButtonClick.onclick = function(event) {
    event.preventDefault();
    chooseDate();
  }
  
}

function showError(){
  hideElements();
  alert('wow');
  document.getElementById("error").setAttribute("class", "unhidden");
}

function chooseDate(){
  const babies = document.querySelector("input#nameInput").value;
  const healthCare = parseInt(document.querySelector("input#ageInput").value);
  const homeless = parseInt(document.querySelector("input#heightInput").value)
  const color = document.querySelector("input#shirtColorInput").value

  if ((!name) || (!age) || (!height) || (!color)){
    showError();
    if(!name){
      document.getElementById("name_error").setAttribute("class", "unhidden");
    }
    if(!age){
      document.getElementById("age_error").setAttribute("class", "unhidden");
    }
    if(!height){
      document.getElementById("height_error").setAttribute("class", "unhidden");
    }
    if(!color){
      document.getElementById("color_error").setAttribute("class", "unhidden");
    }
  }else{
    hideElements();
    document.getElementById("announce").setAttribute("class", "visible");

    
    if (age > 40 && height > 30){
     //rock
      document.getElementById("rock").setAttribute("class", "visible");
    }else if (age > 20 || height > 20){
      //kanye
      document.getElementById("kanye").setAttribute("class", "visible");
    }else{
      //justin
      document.getElementById("justin").setAttribute("class", "visible");
    }
  }

  
}