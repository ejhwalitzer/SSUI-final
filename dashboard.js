// var workout = new Object;
// workout.workoutTitle // string that is the title of the workout

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
      collapseButton.innerHTML = list[i];
      heading.appendChild(collapseButton);
      var panelText = document.createElement('DIV');
      panelText.id = "collapse" + String(i);
      panelText.className = "panel-collapse collapse"
      panelText.role = "tabpanel";
      panelText.setAttribute("aria-labelledby", "heading" + String(i));
      panel.appendChild(panelText);
      var panelBody = document.createElement('DIV');
      panelBody.className = "panel-body";
      panelBody.innerHTML = "hey";
      panelText.appendChild(panelBody);
      accordion.appendChild(panel);
      $('#workout-list').append(accordion);
    }
  } 
  return;
}


// lol nope
function exercisePicked (dropdown, exercise) {
  var dropdown1 = document.getElementById(dropdown).innerHTML = exercise+" ";
  var caret = document.createElement("SPAN");
  caret.className = "caret";
  document.getElementById("category-dropdown").appendChild(caret);
}

window.onload = function () {
	var list = ["workout1", "workout2"];
	createWorkoutList(list);
}
