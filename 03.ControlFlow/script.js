var fight = function() {
    var form = document.getElementById('thefight');
    var results = document.getElementById('results');
    var weapon = form.weapon.value;
    var monster = form.monsters.value;

    results.innerHTML = "<p>You fought a " + monster + " with a " + weapon + "</p>"
    
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