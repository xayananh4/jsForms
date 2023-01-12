// UI Logic
function getAndSetMadLibValues() {
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput= document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;

  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  // we've accessed our button and story elements at the top level
  // of the window load event listener to reuse these elements
  // in multiple locations
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");

  // the original form submission event listener
  form.addEventListener("submit", function(event) {
    getAndSetMadLibValues();
     // we've updated our code to use the new story variable
    story.removeAttribute("class");
    reset.removeAttribute("class");
    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");

     // take note that we only need to call event.preventDefault();
     // once, even though there are 3 different event listeners for the 
     // form submission event
    event.preventDefault();
  });

   // new event listener for click event on reset button to 
   // reset form values
  resetBtn.addEventListener("click", function() {
  story.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
});