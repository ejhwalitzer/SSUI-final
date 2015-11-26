// function workout()

function saveWorkout() {
  var workoutInputs = document.getElementsByTagName("INPUT");
  var i;
  for (i=0; i<workoutInputs.length; i++) {
    if (typeof workoutInputs[i].value === null) {
	}
	//check to see if all inputs are filled in
	// make workout div
	// add div to list on server
	// bring back to front page
  }
}

function clearWorkout() {
	return;
}

function categoryPicked (category, exerciseNum) {
  var form = document.getElementById("workout-creation-form");

  // clear any existing children
  $(".exercise1").remove();

  
  // modify dropdown label 
  var dropdown = document.getElementById("category-dropdown").innerHTML = category+" ";
  var caret = document.createElement("SPAN");
  caret.className = "caret";
  document.getElementById("category-dropdown").appendChild(caret);

  // if category === "Strength Training" or "Calistenics" then add Sets input and Reps input
  var set = document.createElement("DIV");
  set.className = "form-group exercise1";
  var setLabel = document.createElement("LABEL");
  setLabel.className = "control-label"
  if (category === "Strength Training" || category === "Calisthenics") {
	setLabel.innerHTML = "Sets: "
  }
  else {
	setLabel.innerHTML = "Time: "
  }
  set.appendChild(setLabel);
  var setInputDiv = document.createElement("DIV");
  var setInput = document.createElement("INPUT");
  setInput.type = "text";
  setInput.className = "form-control";
  set.appendChild(setInput);
  form.appendChild(set);

  var rep = document.createElement("DIV");
  rep.className = "form-group exercise1";
  var repLabel = document.createElement("LABEL");
  repLabel.className = "control-label"
  if (category === "Strength Training" || category === "Calisthenics") {
	repLabel.innerHTML = "Reps: "
  }
  else {
	repLabel.innerHTML = "Distance:"
  }
  rep.appendChild(repLabel);
  var repInputDiv = document.createElement("DIV");
  var repInput = document.createElement("INPUT");
  repInput.type = "text";
  repInput.className = "form-control";
  rep.appendChild(repInput);
  form.appendChild(rep);
}
	  
