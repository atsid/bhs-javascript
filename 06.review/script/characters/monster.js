function createMonster(stats) {
    // this object will be available to the returned monster object.
    var monster = {
            damage: stats.damage,
            health: stats.health,
            blockChance: stats.block,
            description: stats.description,
            name: stats.name
    };
        
    // Returns a monser object with access to the stats and functions for
    // applying damage and other such neat things!
    return {
        getHealth: function() {
            return monster.health;
        },
        getDamage: function() {
            return monster.damage;
        },
        applyDamage: function(damage) {
            var outcome = {
                damage: 0,
                blocked: true,
                dead: false
            };
            
            if (!util.block(monster.blockChance)) {
                var actualDamage = util.getRandomDamage(damage);
                monster.health -= actualDamage;
                
                outcome.damage = actualDamage;
                outcome.blocked = false;
                outcome.dead = monster.health <= 0;
            }
            
            return outcome;
        },
        getName: function() {
            return monster.name;
        },
        getDescription: function() {
            return monster.description;
        }
    };
}