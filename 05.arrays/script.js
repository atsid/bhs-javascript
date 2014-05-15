var playerHealth = 0,
    playerBlockChance = 50,
    monsterHealth = 0;

function init() {
    addWeapons();
    addMonsters();
    
    showMonster();
    showWeapon();
};

function getRandomDamage(max) {
    if (max === 0) return 0;
    
    var damage = Math.ceil((Math.random() * 1000)) % max;
    damage++; // no 0 damage
    
    return damage;
};

function block(chance) {
    return (Math.ceil(Math.random() * 1000) % (100 / chance)) == 0;
};

function getWeaponDamage(index) {
    return getRandomDamage(weapons[index].damage);
};

function getMonsterDamage(index) {
    return getRandomDamage(monsters[index].damage);
};

function showWeapon() {
    var fight = document.getElementById('thefight'),
        weapon = weapons[fight.weapons.value];

    setInnerHtmlOfElement('viewWeapon', weapon.name);
    setInnerHtmlOfElement('viewWeaponDetails', weapon.description);
};

function showMonster() {
    var fight = document.getElementById('thefight'),
        monster = monsters[fight.monsters.value];

    setInnerHtmlOfElement('viewMonster', monster.name);
    setInnerHtmlOfElement('viewMonsterDetails', monster.description);
};

function addWeapons() {
    setInnerHtmlOfElement('weapons', ''); // clear the old values
    
    for(var index = 0; index < weapons.length; index++) {
        var weapon = weapons[index];
        addSelectOption('weapons', weapon.name, index);
    }
}

function addMonsters() {
    setInnerHtmlOfElement('monsters',''); // clear the old values

    for(var index = 0; index < monsters.length; index++) {
        var monster = monsters[index];
        addSelectOption('monsters', monster.name, index);
    }
}

/**
 * Uses the thefight form to look up values for the monsters and weapons drop down and
 * display a message about whether or not you win or lose.
 * **/
function fight() {
    var form = document.getElementById('thefight'),
        results = document.getElementById('results'),
        weapon = weapons[form.weapons.value],
        monster = monsters[form.monsters.value],
    
    // TODO: Use the monster.health attribute to set the monsters health.
    monsterHealth = 10;    
    // TODO: Use the weapon.healthBonus property to add to the players health
    playerHealth = 10;

    results.innerHTML = "<p>You are fighting a " + monster.name + " with a " + weapon.name + "</p><br/>"
    
    while(playerHealth > 0 && monsterHealth > 0) {
        var hit = getWeaponDamage(form.weapons.value),
            damage = getMonsterDamage(form.monsters.value);
            
        // TODO: Use the monster.block attribute to set the monsters block chance.
        if (block(25)) {
            results.innerHTML += "<span>The " + monster.name + " blocked your attack!</span><br/>";
        } else {
            monsterHealth -= hit;
            results.innerHTML += "<span> You hit " + monster.name + " for " + hit + " damage.</span><br/>";
        }
        
        // TODO: Use the weapon.block property to set the players block chance
        if (block(playerBlockChance)) {
            results.innerHTML += "<span style='color: green'> You block the monsters attack!</span><br/>";   
        } else {
            playerHealth -= damage;
            results.innerHTML += "<span style='color: red'> You were hit for " + damage + " damage.</span><br/>";        
        }
    }
    
    if (playerHealth > 0) {
        results.innerHTML += "<p> You Win! </p><br/>";
    } else  {
        if (monsterHealth > 0) {
            results.innerHTML += "<p> You have perished! :( </p><br/>";
        } else {
            results.innerHTML += "<p> You died killing the monster.</p><br/>";
        }
    } 
    
};