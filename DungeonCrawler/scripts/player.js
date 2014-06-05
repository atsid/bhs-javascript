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
     * Determines if the character is located at the given position
     * @param level
     * @param x
     * @param y
     * @returns {boolean}
     */
    this.isLocatedAt = function(floor, x, y) {
        var pos = this.getPosition();
        return pos.floor === floor &&
               pos.x === x &&
               pos.y === y;
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
     * Draws the player
     * @returns {string}
     */
    this.draw = function() {
        return "<span class='player'>O</span>";
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
            playerInfo.gold += value;
        }
    }

    /**
     * Adds the supplied item to the players equipment array.
     *
     * @param value
     */
    this.acceptEquipment = function(value) {
        playerInfo.equipment.push(value);
    }

    /**
     * Do combat with a monster.
     *
     * @param monster
     */
    this.combat = function(monster) {
        // TODO : Resolve combat.
        var combat = document.getElementById('combat');
        var button = document.getElementById('fight');
        var close = function() {
            combat.className = "combatHidden";
        }

        button.onclick = close;
        combat.className = "combatShow";

    }

    this._moveTo = function(map, position) {
        if (map.canMoveTo(this, position)) {
            map.onMovingTo(this, position);
            playerInfo.position = position;
            map.onMoved(this, position);
        }
    };

    this.moveUp = function(map) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x, y: position.y - 1 });
    }

    this.moveDown = function(map) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x, y: position.y + 1 });
    }

    this.moveLeft = function(map) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x - 1, y: position.y });
    }

    this.moveRight = function(map) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x + 1, y: position.y });
    }
}
