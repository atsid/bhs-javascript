function Player(name, position) {
    var playerInfo = {
        name: name,
        position: position,
        gold: 0,
        experience: 0,
        level: 1,
        equipment: [],
        weapon: undefined
    };

    /**
     * Returns true, letting the game know this is a player character.
     *
     * @returns {boolean}
     */
    this.isPlayerAgent = function() {
        return true;
    }

    /**
     * returns the current position as x,y coordinates.
     *
     * @returns {*}
     */
    this.getPosition = function() {
        return playerInfo.position;
    }

    /**
     * returns the name of the player
     *
     * @returns {*}
     */
    this.getName = function() {
        return playerInfo.name;
    }

    /**
     * returns the gold for the player
     *
     * @returns {number}
     */
    this.getGold = function() {
        return playerInfo.gold;
    }

    /**
     * adds the value to the players gold.
     *
     * @param value
     */
    this.acceptGold = function(value) {
        if (value && value !== NaN) {
            this.playerInfo.gold += value;
        }
    }

    /**
     * Adds the supplied item to the players equipment array.
     *
     * @param value
     */
    this.acceptEquipment = function(value) {
        this.playerInfo.equipment.push(value);
    }

    /**
     * Do combat with a monster.
     *
     * @param monster
     */
    this.combat = function(monster) {
        // TODO : Resolve combat.
    }
}
