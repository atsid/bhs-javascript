function reset() {
    gameState.inProgress = false;
    gameState.firstRound = true;

    selectMonster();
    selectWeapon();
    hideReset();
    clearResults();
}

function clearResults() {
    setInnerHtmlOfElement('results', "");
}

function hideReset() {
    hideElement('reset');
}

function showReset() {
    showElement('reset');
}

function init() {
    clearResults();
    addWeapons();
    addMonsters();
    
    selectMonster();
    selectWeapon();
}

function showWeapon(weapon) {
    setInnerHtmlOfElement('viewWeapon', weapon.name + " +" + gameState.player.getHealth());
    setInnerHtmlOfElement('viewWeaponDetails', weapon.description);
}

function selectWeapon() {
    if (gameState.canChange()) {
        var fight = document.getElementById('thefight'),
            weapon = weapons[fight.weapons.value],
            player = createPlayer(gameState.playerStats, weapon);
            
        gameState.player = player;
        showWeapon(weapon);
    }
}

function selectMonster() {
    if (gameState.canChange()) {
        var fight = document.getElementById('thefight'),
            monster = createMonster(monsters[fight.monsters.value]);
            
        gameState.monster = monster;
        
        showMonster(monster);
    }
}

function showMonster(monster) {
    setInnerHtmlOfElement('viewMonster', monster.getName() + " +" + monster.getHealth());
    setInnerHtmlOfElement('viewMonsterDetails', monster.getDescription());
}

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

function doFight() {
    var results = document.getElementById('results');
    
    // fight returns true if there was a death....
    if (gameState.fight(results)) {
        showReset();
    } else {
        showMonster(gameState.monster);
        showWeapon(gameState.player.getWeapon());
    }
}