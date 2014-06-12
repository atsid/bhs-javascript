function Player(name, position) {
    var playerInfo = {
        name: name,
        position: position,
        gold: 0,
        health: 100,
        experience: 0,
        level: 1,
        equipment: [],
        weapon: 10,
        inCombat: false
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

    this.getHealth = function() {
        return playerInfo.health;
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
        // IDEAS:
        // Resolve combat in a similar way to the previous monster fight game
        // Run a calculation that figures out if the monster or player will win
        // Something else...?

        var combat = document.getElementById('combat');
        var combatInfo = document.getElementById('combatInfo');
        var button = document.getElementById('fight');
        var close = function() {
            var damage = monster.getDamage();
            playerInfo.health -= damage;
            monster.applyDamage(playerInfo.weapon);
            combatInfo.innerHTML = combatInfo.innerHTML + "<span class='combatSpan'>" + monster.getName() + " did " + damage + " damage.</span><br/>";
            combatInfo.innerHTML = combatInfo.innerHTML + "<span class='combatSpan'> You did " + playerInfo.weapon + " damage! </span><br/>";

            if (monster.getHealth() <= 0) {
                combat.className = "combatHidden";
                playerInfo.inCombat = false;
                //callback();
            }
        };

        combatInfo.innerHTML = "";
        playerInfo.inCombat = true;

        button.onclick = close;
        combat.className = "combatShow";
    }

    this._moveTo = function(map, position, callback) {
        var agent = this;
        if (playerInfo.inCombat) {
            alert('You are in combat!!');
        }
        else {
            if (map.canMoveTo(this, position)) {
                var completeMove = function() {
                    playerInfo.position = position;
                    map.onMoved(agent, position);
                    callback();
                };
                map.onMovingTo(this, position, completeMove);
            }
        }
    };

    this.moveUp = function(map, callback) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x, y: position.y - 1 }, callback);
    }

    this.moveDown = function(map, callback) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x, y: position.y + 1 }, callback);
    }

    this.moveLeft = function(map, callback) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x - 1, y: position.y }, callback);
    }

    this.moveRight = function(map, callback) {
        var position = this.getPosition();
        this._moveTo(map, { floor: position.floor, x: position.x + 1, y: position.y }, callback);
    }
}
