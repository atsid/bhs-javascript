var monsters = [
    "Goblin",
    "Zombie",
    "Zomblin"
    ];

var weapons = [
    "Wooden Sword",
    "Iron Sword",
    "Vorpal Blade"
    ];
    
var playerHealth = 0,
    monsterHealth = 0;

function init() {
    addWeapons();
    addMonsters();
};

function getRandomDamage(max) {
    var damage = Math.ceil((Math.random() * 10)) % max;
    
    if (damage <= 0) {
        damage = 1;
    }
    
    return damage;
};

function block(chance) {
    return (Math.ceil(Math.random() * 1000) % (100 / chance)) == 0;
};

function getWeaponDamage(weapon) {
    if (weapon === 'Wooden Sword') {
        return getRandomDamage(3);
    } else if (weapon === 'Iron Sword') {
        return getRandomDamage(4);
    } else if (weapon === 'Vorpal Blade') {
        return getRandomDamage(6);
    }
};

function getMonsterDamage(monster) {
    if (monster == 'Zombie') {
        return 1;
    } else if (monster == 'Goblin') {
        return getRandomDamage(3);
    } else if (monster === 'Zomblin') {
        return getRandomDamage(5);
    }
};

function addWeapons() {
    var element = document.getElementById('weapons');
    element.innerHTML = ""; // clear the old values
    
    for(var i = 0; i < weapons.length; i++) {
        var weapon = weapons[i];
        addSelectOption(element, weapon);
    }
}

function addMonsters() {
    var element = document.getElementById('monsters');
    element.innerHTML = ""; // clear the old values
    
    for(var i = 0; i < monsters.length; i++) {
        var monster = monsters[i];
        addSelectOption(element, monster);
    }
}

/**
 * Uses the thefight form to look up values for the monsters and weapons drop down and
 * display a message about whether or not you win or lose.
 * **/
function fight() {
    var form = document.getElementById('thefight');
    var results = document.getElementById('results');
    var weapon = form.weapons.value;
    var monster = form.monsters.value;
    
    playerHealth = 10;
    monsterHealth = 10;
    results.innerHTML = "<p>You are fighting a " + monster + " with a " + weapon + "</p><br/>"
    
    while(playerHealth > 0 && monsterHealth > 0) {
        var hit = getWeaponDamage(weapon),
            damage = getMonsterDamage(monster);
            
        // monster has a 25% chance to block
        if (block(25)) {
            results.innerHTML += "<span>The " + monster + " blocked your attack!</span><br/>";
        } else {
            monsterHealth -= hit;
            results.innerHTML += "<span> You hit " + monster + " for " + hit + " damage.</span><br/>";
        }
        
        // player has a 50% chance to block
        if (block(50)) {
            results.innerHTML += "<span style='color: green'> You block the monsters attack!</span><br/>";   
        } else {
            playerHealth -= damage;
            results.innerHTML += "<span style='color: red'> You were hit for " + damage + " damage.</span><br/>";        
        }
    }
    
    if (playerHealth > 0) {
        results.innerHTML += "<p> You Win! </p>";
    } else  {
        if (monsterHealth > 0) {
            results.innerHTML += "<p> You have perished! :( </p>";
        } else {
            results.innerHTML += "<p> You died killing the monster.</p>";
        }
    } 
    
};

init();