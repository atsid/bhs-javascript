var util = {
    block: function(chance) {
        return (Math.ceil(Math.random() * 1000) % (100 / chance)) == 0;
    },

    getRandomDamage: function(max) {
        if (max === 0) return 0;
    
        var damage = Math.ceil((Math.random() * 1000)) % max;
        damage++; // no 0 damage
    
        return damage;
    },
    
    printOutcomes: function(element, player, monster) {
        if (player.dead) {
            if (monster.dead) {
                element.innerHTML += "<br/><span>You have died killing the monster!</span>";
            } else {
                element.innerHTML += "<br/><span>You have died! :(</span>";
            }
        } else if (monster.dead) {
            element.innerHTML += "<br/><span>You have killed the monster!</span>";
        } else {
            if (player.blocked) {
                element.innerHTML += "<br/><span>Player blocked the monster's attack!</span>";
            } else {
                element.innerHTML += "<br/><span>Player takes " + player.damage + " damage!</span>";
            }
            
            if (monster.blocked) {
                element.innerHTML += "<br/><span>Monser blocked the players's attack!</span>";
            } else {
                element.innerHTML += "<br/><span>Monster takes " + monster.damage + " damage!</span>";
            }
        }
    }
};