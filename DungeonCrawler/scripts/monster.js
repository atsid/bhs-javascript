function Monster(stats) {
    var monsterInfo = {
        name: stats.name,
        health: stats.health,
        damage: stats.damage,
        level: stats.level,
        block: stats.block,
        experience: stats.experience
    };

    this.isPlayerAgent = function() {
        return false;
    }

    this.isDead = function() {
        return monsterInfo.health > 0;
    }

    this.getName = function() {
        return monsterInfo.name;
    }

    this.getHealth = function() {
        return monsterInfo.health;
    }

    this.getDamage = function() {
        return monsterInfo.damage;
    }

    this.getLevel = function() {
        return monsterInfo.level;
    }

    this.applyDamage = function(damage) {
        if (!this.block()) {
            monsterInfo.health -= damage;
        }
    }

    this.block = function() {
        // TODO: add blocking logic.
        return false;
    }

    /**
     * Get the experience gained during a fight with this monster.
     *
     * @param playerLevel
     * @returns {*}
     */
    this.getExperience = function(playerLevel) {
        // TODO: Let experience gained be a function of the monsters level compared to the players level.
        return monsterInfo.experience;
    }
}