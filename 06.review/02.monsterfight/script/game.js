var gameState = {
    // default player stats.
    playerStats: {
        level: 1,
        health: 10,
        damage: 1,
        block: 10
    },

    // monster and player objects
    monster: null,
    player: null,
    
    // some state variables to help with display
    firstRound: true,
    inProgress: false,

    /**
     * Used to know if we can make a change to the monster or weapon. Changes are not allowed during a fight!
     * */
    canChange: function() {
        if (gameState.inProgress) {
            alert('Selections cannot be modified during a fight!');
            return false;
        }
            
        return true;
    },
    /**
     * Resolves the combat for a round of fighting.
     * */
    fight: function(results) {
        // TODO: use monster and player health to know if we should continue fighting.
        if (true) {
            // TODO: use the monster and player objects to get the damage each can do. eg; gameState.monster.getHealth()
            var monsterDamage = 0;
            var playerDamage = 0;

            // TODO: use the monster and player objects to apply damage and get valid fight outcome
            var playerOutcome = { blocked: false, damage: 0, dead: false };
            var monsterOutcome = { blocked: false, damage: 0, dead: false };
                
            if (gameState.firstRound) {
                results.innerHTML = "<p>You are fighting a " + gameState.monster.getName() + " with a " + gameState.player.getWeapon().name + "</p><br/>"
                gameState.firstRound = false;
                gameState.inProgress = true;
            }
                
            util.printOutcomes(results, playerOutcome, monsterOutcome);
    
            return monsterOutcome.dead || playerOutcome.dead;
        } else {
            alert('Press reset to start a new fight.');
        }
    }
};