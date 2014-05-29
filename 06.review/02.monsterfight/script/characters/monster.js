function Monster(stats) {
    // this object will be available to the returned monster object.
    var monster = {
            damage: stats.damage,
            health: stats.health,
            blockChance: stats.block,
            description: stats.description,
            name: stats.name
    };
        
    // Returns a monster object with access to the stats and functions for
    // applying damage and other such neat things!
    this.isAlive = function() {
        return monster.health > 0;
    }

    this.getHealth = function() {
        return monster.health;
    }

    this.getDamage = function() {
        return monster.damage;
    }

    this.applyDamage = function(damage) {
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
    }

    this.getName = function() {
        return monster.name;
    }

    this.getDescription = function() {
        return monster.description;
    }
}