var monsters = [
    {
        name: "Goblin",
        description: "A very ugly, green and snotty creature with a bad disposition who likes to eat human children.",
        img: "",
        damage: 2
    },
    {
        name: "Zombie",
        description: "A rotting animated corpse who wants to eat your brain.",
        img: "",
        damage: 1
    },
    {
        name: "Zomblin",
        description: "A rotting animated goblin corpse, who loves to eat brains and is tougher than a normal zombie.",
        img: "",
        damage: 5
    },
    {
        name: "Very Big Guy",
        description: "A guy, who is big and hurts people very badly.",
        img: "",
        damage: 10
    }];

var weapons = [
    {
        name: "Wooden Sword",
        description: "A polished stick.",
        img: "",
        damage: 1
    },
    {
        name: "Iron Sword",
        description: "",
        img: "",
        damage: 3
    },
    {
        name: "Vorpal Blade",
        description: "",
        img: "",
        damage: 5
    },
    {
        name: "Great Hammer",
        description: "",
        img: "",
        damage: 9
    },
    {
        name: "Squirt Gun",
        description: "",
        img: "",
        damage: 9
    }];
    
var playerHealth = 0,
    monsterHealth = 0;

function init() {
    addWeapons();
    addMonsters();
    
    showMonster();
    showWeapon();
};

function getRandomDamage(max) {
    var damage = Math.ceil((Math.random() * 1000)) % max;
    damage++; // no 0 damage
    
    return damage;
};

function block(chance) {
    return (Math.ceil(Math.random() * 1000) % (100 / chance)) == 0;
};

// TODO: Modify the damage functions so they loop over the weapons until they find the current selected weapon and use the
// weapons index in the array as part of the argument to the getRandomDamage function. This will mean weapons and monsters
// with a higher index value will hit harder, and allow more weapons and monsters to be added without the need to change
// the get damage functions.

function getWeaponDamage(index) {
    return getRandomDamage(weapons[index].damage);
};

function getMonsterDamage(index) {
    return getRandomDamage(monsters[index].damage);
};

function showWeapon() {
    var weaponHeader = document.getElementById('viewWeapon'),
        weaponDetails = document.getElementById('viewWeaponDetails'),
        fight = document.getElementById('thefight'),
        weapon = weapons[fight.weapons.value];

    weaponHeader.innerHTML = weapon.name;
    weaponDetails.innerHTML = weapon.description;
};

function showMonster() {
    var monsterHeader = document.getElementById('viewMonster'),
        monsterDetails = document.getElementById('viewMonsterDetails'),
        fight = document.getElementById('thefight'),
        monster = monsters[fight.monsters.value];

    monsterHeader.innerHTML = monster.name;
    monsterDetails.innerHTML = monster.description;
};

function addWeapons() {
    var element = document.getElementById('weapons');
    element.innerHTML = ""; // clear the old values
    
    for(var index = 0; index < weapons.length; index++) {
        var weapon = weapons[index];
        addSelectOption(element, weapon.name, index);
    }
}

function addMonsters() {
    var element = document.getElementById('monsters');
    element.innerHTML = ""; // clear the old values
    
    for(var index = 0; index < monsters.length; index++) {
        var monster = monsters[index];
        addSelectOption(element, monster.name, index);
    }
}

/**
 * Uses the thefight form to look up values for the monsters and weapons drop down and
 * display a message about whether or not you win or lose.
 * **/
function fight() {
    var form = document.getElementById('thefight');
    var results = document.getElementById('results');
    var weapon = weapons[form.weapons.value];
    var monster = monsters[form.monsters.value];
    
    playerHealth = 10;
    monsterHealth = 10;
    results.innerHTML = "<p>You are fighting a " + monster.name + " with a " + weapon.name + "</p><br/>"
    
    while(playerHealth > 0 && monsterHealth > 0) {
        var hit = getWeaponDamage(form.weapons.value),
            damage = getMonsterDamage(form.monsters.value);
            
        // monster has a 25% chance to block
        if (block(25)) {
            results.innerHTML += "<span>The " + monster.name + " blocked your attack!</span><br/>";
        } else {
            monsterHealth -= hit;
            results.innerHTML += "<span> You hit " + monster.name + " for " + hit + " damage.</span><br/>";
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