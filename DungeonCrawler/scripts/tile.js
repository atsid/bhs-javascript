// Possible Tasks:
//   * Ghostly monsters and Vampires can pass through walls
//   * Trap tiles
//   * Chest Tiles may contain either gold, equipment, or traps
//   * Door tiles that require keys
//   * Door tiles that may be lock-picked
//   * Environment descriptions when player enters a tile

/**
 * Empty Tile Class
 * @constructor
 */
function EmptyTile() {
    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @returns {boolean}
     */
    this.canPassThrough = function(agent) {
        return true;
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMovingTo = function(agent) {
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMoved = function(agent) {
    }

    this.draw = function() {
        return "<span class='tile'>.</span>";
    }
}

/**
 * Wall Tile Class
 * @constructor
 */
function WallTile() {
    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @returns {boolean}
     */
    this.canPassThrough = function(agent) {
        return false;
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMovingTo = function(agent) {
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMoved = function(agent) {
    }

    this.draw = function() {
        return "<span class='tile'>#</span>";
    }
}

/**
 * Gold Tile Class
 * @constructor
 */
function GoldTile(value) {
    var available = true;

    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @returns {boolean}
     */
    this.canPassThrough = function(agent) {
        return true;
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMovingTo = function(agent) {
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMoved = function(agent) {
        if (available && agent.isPlayerAgent()) {
            agent.acceptGold(value);
            available = false;
        }
    }

    this.draw = function() {
        if (available)
            return "<span class='gold'>G</span>";
        else
            return "<span class='tile'>.</span>";
    }
}

/**
 * Equipment Tile Class
 * @constructor
 */
function EquipmentTile(value) {
    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @returns {boolean}
     */
    this.canPassThrough = function(agent) {
        return true;
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMovingTo = function(agent) {
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     */
    this.onMoved = function(agent) {
        if (agent.isPlayerAgent()) {
            agent.acceptEquipment(value);
        }
    }

    this.draw = function() {
        return "<span class='tile'>E</span>";
    }
}

/**
 * Monster Tile Class
 * @constructor
 */
function MonsterTile(monster) {
    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @returns {boolean}
     */
    this.canPassThrough = function(agent) {
        return false;
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     * @param position
     */
    this.onMovingTo = function(agent) {
        if (agent.isPlayerAgent()) {
            agent.combat(monster);
        }
    }

    /**
     * Event handler before after an agent moves into the tile
     * @param agent
     * @param position
     */
    this.onMoved = function(agent) {

    }


    this.draw = function() {
        return "<span class='tile'>M</span>";
    }
}
