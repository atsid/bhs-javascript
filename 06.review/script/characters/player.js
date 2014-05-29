function createPlayer(stats, weapon) {
    // this object will be available to the returned player object.
    var data = {
        level: stats.level,
        health: stats.health,
        damage: stats.damage,
        blockChance: stats.block,
        rightHand: weapon,
        currentStats: stats
    };
        
    // returns a player object with access to the data and some functions for applying damage and
    // what not.
    return {
        getHealth: function() {
            return data.health + data.rightHand.healthBonus;
        },
        getDamage: function() {
            return data.damage + data.rightHand.damage;
        },
        applyDamage: function(damage) {
            var outcome = {
                blocked: true,
                damage: 0,
                dead: false
            };
            
            if (!util.block(data.blockChance + data.rightHand.block)) {
                var actualDamage = util.getRandomDamage(damage);
                data.health -= actualDamage;

                outcome.damage = actualDamage;
                outcome.blocked = false;
                outcome.dead = (data.health + data.rightHand.healthBonus) <= 0;
            }
            
            return outcome;
        },
        getStats: function() {
            return data.currentStats;
        },
        getWeapon: function() {
            return data.rightHand;
        },
        addExperience: function(exp) {
            data.currentStats.exp += exp;
            if (data.currentStats.exp > 100) {
                data.currentStats.level++;
                data.currentStats.exp -= 100;
            }
        }
    };
}
