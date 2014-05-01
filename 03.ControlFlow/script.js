/**
* This function is called by the ? link or the logic practice drop downs and uses the values
* of the dropdowns to determine whether or not to display a True or False message
* in the display area.
* **/
function logical() {
    var display = document.getElementById('display');
    var logic = document.getElementById('logic');
    var leftSide = document.getElementById('leftside');
    var rightSide = document.getElementById('rightside');
    display.innerHTML = "<span>" + 
        leftSide.value + " " + 
        logic.value + " " + 
        rightSide.value + "<span> ";
    
    if (logic.value === 'and') {
        if (leftSide.value === 'true' && rightSide.value === 'true') {
            display.innerHTML += "<span>is True</span>";
        } else {
            display.innerHTML += "<span>is False</span>";
        }
    } else {
        if (leftSide.value === 'true' || rightSide.value === 'true') {
            display.innerHTML += "<span>is True</span>";
        } else {
            display.innerHTML += "<span>is False</span>";
        }
    }
};
/**
 * Uses the thefight form to look up values for the monsters and weapons drop down and
 * display a message about whether or not you win or loose.
 * **/
function fight() {
    var form = document.getElementById('thefight');
    var results = document.getElementById('results');
    var weapon = form.weapon.value;
    var monster = form.monsters.value;

    results.innerHTML = "<p>You fought a " + monster + " with a " + weapon + "</p>"
    
    // change the logic here so that the vorpal blade always wins, and the zombie always dies
    
    if (weapon === 'wooden sword' && monster === 'Zombie') {
        results.innerHTML += "<h3>You Win!</h3>"
    } else if (weapon === 'iron sword' && monster === 'Goblin') {
        results.innerHTML += "<h3>You Win!</h3>"
    } else if (weapon === 'vorpal blade' && monster === 'Zomblin') {
        results.innerHTML += "<h3>You Win!</h3>"
    } else {
        results.innerHTML += "<h3>You have perished</h3>"
    }
};