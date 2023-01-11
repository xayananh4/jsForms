// UI Logic

// this function creates the onsubmit event handler
// it needs to be called in the window.onload event handler
function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  }
  var submit = document.getElementsByTagName('button')[0];
  submit.onclick = function() {
      turtle_clicked();
  }
  submit = document.getElementsByTagName('button')[1];
  submit.onclick = function() {
      snake_clicked();
  }
  submit = document.getElementsByTagName('button')[2];
  submit.onclick = function() {
      insect_clicked();
  }

}

window.onload = function() {
  setFormSubmissionEventHandler();
};

function turtle_clicked(){
  alert("turtle");
  document.querySelector("div#turtle_para").removeAttribute("class");
}

function snake_clicked(){
  alert("snake");
  document.querySelector("div#snake_para").removeAttribute("class");
}

function insect_clicked(){
  alert("insect");
  document.querySelector("div#insect_para").removeAttribute("class");
}