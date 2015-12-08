// var workout = new Object;
// workout.workoutTitle // string that is the title of the workout

function createButtons () {
  var statusButtons = $(".status-buttons");
  var i;
  for (i=0;i<statusButtons.length;i++) {
    var statusButton = "#status-buttons"+String(i);

    var doneButton = document.createElement('BUTTON');
    doneButton.id = "doneButton"+ String(i);
    doneButton.className = "button button-pill button-small button-glow button-flat-action";
    doneButton.type = "button";
    doneButton.innerHTML = "yes";
    $(statusButton).append(doneButton);

    var noButton = document.createElement('BUTTON');
    noButton.id = "noButton" + String(i);
    noButton.className = "button button-pill button-small button-flat-default"
    noButton.type = "button"
    noButton.innerHTML = "no";
    $(statusButton).append(noButton);

    addListenersForDoneButtons(doneButton, noButton);
  }
}

function addListenersForDoneButtons (doneButton, noButton) {
  noButton.addEventListener("click", function () {doneButtonClicked(doneButton,noButton,"no")});
  doneButton.addEventListener("click", function () {doneButtonClicked(doneButton,noButton,"yes")});
}

function doneButtonClicked (doneButton, noButton, response) {
  var parent = doneButton.parentNode;
  doneButton.remove();
  noButton.remove();
  if (response === "yes") {
    var icon = document.createElement("I");
    icon.className = "fa fa-check fa-2x";
    parent.appendChild(icon);
  }
  else {
    var icon = document.createElement("I");
    icon.className = "fa fa-times fa-2x";
    console.log(parent);
    parent.appendChild(icon);
  }
  var undoButton = document.createElement('BUTTON');
  undoButton.className = "btn btn-link";
  undoButton.type = "button";
  undoButton.innerHTML = "undo";
  undoButton.onclick = function() {
    parent.appendChild(doneButton);
    parent.appendChild(noButton);
    undoButton.remove();
    icon.remove();
  };
  parent.appendChild(undoButton);
}

function createWorkoutList (list) {
  if (list.length === 0) {
  	var list = document.getElementById("workout-list").innerHTML = "No added workouts";
  }
  else {
    var accordion = document.createElement('DIV');
    accordion.className = "panel-group";
    accordion.id = "accordion";
    accordion.role = "tablist";
    accordion.setAttribute('aria-multiselectable', "true");
    var i;
    for (i = 0; i < list.length; i++) {
      var panel = document.createElement('DIV');
      panel.className = "panel panel-default";
      var heading = document.createElement('DIV');
      heading.className = 'panel-heading'
      heading.role = "tab"
      heading.id = "heading" + String(i);
      panel.appendChild(heading);
      var title = document.createElement('H4');
      title.className = "panel-title";
      heading.appendChild(title);
      var collapseButton = document.createElement('A');
      collapseButton.className = "collapsed";
      collapseButton.role = "button";
      collapseButton.setAttribute("data-toggle", "collapse");
      collapseButton.setAttribute("data-parent", "#accordion");
      collapseButton.setAttribute("href", "#collapse" + String(i));
      collapseButton.setAttribute("aria-expanded", "false");
      collapseButton.setAttribute("data-controls", "collapse" + String(i));
      collapseButton.innerHTML = list[i].workoutTitle;
      heading.appendChild(collapseButton);
      var panelText = document.createElement('DIV');
      panelText.id = "collapse" + String(i);
      panelText.className = "panel-collapse collapse"
      panelText.role = "tabpanel";
      panelText.setAttribute("aria-labelledby", "heading" + String(i));
      panel.appendChild(panelText);
      var panelBody = document.createElement('DIV');
      panelBody.className = "panel-body";
      panelBody.id = "panel-body"+String(i);
      //panelBody.innerHTML = "hey";
      panelText.appendChild(panelBody);
      accordion.appendChild(panel);
      $('#workout-list').append(accordion);
    }
    createWorkoutDescriptions(list);
  } 
  return;
}

function createWorkoutDescriptions (list) {
  var ex = "  Exercise:  ";
  var cat = " | Category:  ";
  var dis = " | Distance:  ";
  var time = " | Time:  ";
  var reps = " | Reps:  ";
  var sets = " | Set:  ";
  var i;
  for (i=0; i<list.length; i++) {
    var panel = document.getElementById("panel-body"+String(i));
    var newList = document.createElement("OL");
    newList.className = "workoutList";
    var j;
    for (j=0; j<list[i].exercises.length; j++) {
      var exercise = list[i].exercises[j];
      var newItem = document.createElement("LI");
      if (exercise.exerciseCat === "Cardio") {
        newItem.innerHTML = ex.bold()+ exercise.exerciseTitle +cat.bold()+exercise.exerciseCat+ 
                          dis.bold()+exercise.repsDistance+time.bold()+exercise.setsTime;
      }
      else if (exercise.exerciseCat === "Rest") {
        newItem.innerHTML = "none";
      }
      else {
        newItem.innerHTML = ex.bold()+ exercise.exerciseTitle +cat.bold()
                          +exercise.exerciseCat+sets.bold()+exercise.repsDistance+
                          reps.bold()+exercise.setsTime;      
      }
      newList.appendChild(newItem);
    }
    panel.appendChild(newList);
  }
}

function workoutDropdown (list) {
  var dropdowns = $('.dropdown');
  var i;
  for (i=0; i< dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    dropdown.id = "dropdown" + String(i);
    var dropdownList = document.createElement('UL');
    dropdownList.className = "dropdown-menu";
    dropdownList.id = "dropdownList" + String(i);
    dropdownList.setAttribute("aria-labelledby", "dropdownMenu1");
    var j;
    for (j=0; j<list.length; j++) {
      var item = document.createElement('LI');
      var option = document.createElement('A');
      option.className = "dropdown-item"
      var workout = list[j].workoutTitle;
      option.innerHTML = String(workout);
      option.workout = workout;
      addListener(option, dropdown);
      item.appendChild(option);
      dropdownList.appendChild(item);
    }
    dropdown.appendChild(dropdownList);
  }
}

function addListener (option, dropdown) {
  var child = dropdown.children[0];
  option.addEventListener("click", function () {workoutPicked(child,option)});
}


function workoutPicked(dropdown, workout) {
  console.log(dropdown);
  var content = workout.innerHTML;
  dropdown.innerHTML = content + " ";
  var caret = document.createElement("I");
  caret.className = "fa fa-caret-down";
  dropdown.appendChild(caret);

}


function exercisePicked (buttonParent, workout) {
  var button = buttonParent.children[0];
  button.innerHTML = workout;
}


function transition () {
  location.replace("new-workout.html");
}

$(document).ready(function() {
  TweenMax.from(".header", 1, {opacity:0, x:600, ease:Bounce.eastOut});
  TweenMax.from("#workout-container, #planner", 1, {opacity:0,ease:Bounce.eastOut, delay:1});
})

// create preset workouts
function presetWorkouts() {
  var wList = [];

  var restExercise = [{exerciseCat: "Rest"}];
  var rest = {workoutTitle:"Rest day", exercises: restExercise};
  wList.push(rest);

  var cardioExercise = [{exerciseTitle:"Treadmill", exerciseCat:"Cardio", setsTime:"30 min", repsDistance:"variable"}];
  var cardio = {workoutTitle: "30 minute cardio", exercises: cardioExercise};
  wList.push(cardio);

  return wList;
}



window.onload = function () {
  $.ajax('http://localhost:8000/workout/', ({method:'GET',
    success:function (results) {
      s = presetWorkouts()
      t = JSON.parse(results);
      console.log(t);
      createWorkoutList(t.concat(s));
      workoutDropdown(t.concat(s));
      console.log((t.concat(s))[0].workoutTitle);
  },
}));
  createButtons();
}
