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
	location.reload();
}

function categoryPicked (category, exerciseNum, catButton) {
  var form = document.getElementById("form0");
  var exerciseLabel = "exercise"+exerciseNum;

  // clear any existing children
  $(".exercise" + exerciseNum).remove();

  
  // modify dropdown label 
  var buttonID = "exercise"+exerciseNum;
  console.log(buttonID);
  var dropdown = catButton.innerHTML = category+" ";

  // if category === "Strength Training" or "Calistenics" then add Sets input and Reps input
  var set = document.createElement("DIV");
  set.className = "form-group " + exerciseLabel;
  var setLabel = document.createElement("LABEL");
  setLabel.id = "setLabel" + exerciseNum;
  setLabel.className = "control-label " + exerciseLabel;
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
  setInput.className = "form-control " + exerciseLabel;
  set.appendChild(setInput);
  document.getElementById("form"+exerciseNum).appendChild(set);

  var rep = document.createElement("DIV");
  rep.className = "form-group " + exerciseLabel;
  var repLabel = document.createElement("LABEL");
  repLabel.id = "repLabel" + exerciseNum;
  repLabel.className = "control-label " + exerciseLabel;
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
  document.getElementById("form"+exerciseNum).appendChild(rep);
}


function addExercise() {
  count++;

  var exerciseNum = 'exercise' + String(count);
  console.log(exerciseNum);

  // New form
  var form = document.createElement("FORM");
  form.className = "form-horizontal";
  form.id = "form" +count;
  form.role = "form";

  // Exercise section
  var formGroup = document.createElement('DIV');
  formGroup.className = "form-group ";
  var label = document.createElement('LABEL');
  label.className = "control-label ";
  label.innerHTML = "Exercise:";
  var input = document.createElement('INPUT');
  input.type = "text";
  input.className = "form-control ";
  formGroup.appendChild(input);
  formGroup.appendChild(label);
  form.appendChild(formGroup);

  // Category section
  var catGroup = document.createElement('DIV');
  catGroup.className = "form-group "; 
  var catLabel = document.createElement('LABEL');
  catLabel.className = "control-label"; 
  catGroup.appendChild(catLabel);
  var dropdown = document.createElement("DIV");
  dropdown.className = "dropdown";
  var catButton = document.createElement('BUTTON');
  catButton.id = exerciseNum;
  catButton.innerHTML = 'Pick one!';
  catButton.className = "btn btn-primary dropdown-toggle ";
  catButton.type = "button"
  catButton.setAttribute('data-toggle','dropdown');
  catButton.setAttribute('aria-haspopup','true');
  catButton.setAttribute('aria-expanded','false');
  dropdown.appendChild(catButton);

  var catList = document.createElement("UL");
  catList.className = "dropdown-menu ";
  catList.setAttribute('aria-labelledby', 'dropdownMenu1');
  var item1 = document.createElement('LI');
  var cat1 = document.createElement('A');
  cat1.className = "dropdown-item";
  cat1.num = String(count);
  cat1.addEventListener("click", function() {(categoryPicked('Strength Training',cat1.num,catButton))});
  cat1.innerHTML = 'Strength Training';
  item1.appendChild(cat1);
  catList.appendChild(item1);

  var item2 = document.createElement('LI');
  var cat2 = document.createElement('A');
  cat2.className = "dropdown-item";
  cat2.num = String(count);
  cat2.addEventListener("click", function() {(categoryPicked('Cardio',cat3.num,catButton))});
  cat2.innerHTML = 'Cardio';
  item2.appendChild(cat2);
  catList.appendChild(item2);

  var item3 = document.createElement('LI');
  var cat3 = document.createElement('A');
  cat3.className = "dropdown-item count";
  cat3.num = String(count);
  cat3.addEventListener("click", function() {(categoryPicked('Calisthenics',cat3.num,catButton))});
  cat3.innerHTML = 'Calisthenics';
  item3.appendChild(cat3);
  catList.appendChild(item3);

  dropdown.appendChild(catButton);
  dropdown.appendChild(catList);
  catGroup.appendChild(dropdown);
  form.appendChild(catGroup);
  document.getElementById("form-container").appendChild(form);
}

window.onload = function () {
  count = 0
}
