let fontSize = 1;

function getAndSetInputValues() {
  let fontSizeStr = fontSize + "px";
  fontSize += 1;
  let inputText = document.getElementById("input").value;
  document.getElementById("test1").style.fontSize = fontSizeStr;
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