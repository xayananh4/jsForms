function startPage(){
  let bttn = document.getElementById("submit_button");
  bttn.addEventListener("click", onClick);
}

function onClick(event){
  event.preventDefault();
  chooseDate();
}

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

function showError(){
  hideElements();
  alert('wo3333w');
  document.getElementById("error").setAttribute("class", "unhidden");
}

function chooseDate(){
  const name = document.querySelector("input#nameInput").value;
  const age = parseInt(document.querySelector("input#ageInput").value);
  const height = parseInt(document.querySelector("input#heightInput").value)
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
window.addEventListener("load", startPage);