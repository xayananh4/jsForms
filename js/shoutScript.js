
function getAndSetInputValues() {
  let inputText = document.getElementById("input").value;
  document.querySelector("span.shout").innerText = inputText.toUpperCase();

}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetInputValues();
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
};