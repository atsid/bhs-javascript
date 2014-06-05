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
     * @param game The game state
     * @returns {boolean}
     */
    this.canPassThrough = function(agent, game) {
        return true;
    }

    /**
     * Determines if the given agent triggers an event when passing over this tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.isEventTriggered = function(agent, game) {
        return false;
    }

    /**
     * Triggers an interaction with the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     */
    this.trigger = function(agent, game) {
        // Empty Tiles do nothing
    }

    this.draw = function() {
        return "<span class='tile'> </span>";
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
     * @param game The game state
     * @returns {boolean}
     */
    this.canPassThrough = function(agent, game) {
        return false;
    }

    /**
     * Determines if the given agent triggers an event when passing over this tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.isEventTriggered = function(agent, game) {
        return false;
    }

    /**
     * Triggers an interaction with the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     */
    this.trigger = function(agent, game) {
        // Walls do nothing
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
    /**
     * Determines if the given agent can pass through the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.canPassThrough = function(agent, game) {
        return true;
    }

    /**
     * Determines if the given agent triggers an event when passing over this tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.isEventTriggered = function(agent, game) {
        return agent.isPlayerAgent();
    }

    /**
     * Triggers an interaction with the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     */
    this.trigger = function(agent, game) {
        agent.acceptGold(value);
    }

    this.draw = function() {
        return "<span class='tile'>G</span>";
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
     * @param game The game state
     * @returns {boolean}
     */
    this.canPassThrough = function(agent, game) {
        return true;
    }

    /**
     * Determines if the given agent triggers an event when passing over this tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.isEventTriggered = function(agent, game) {
        return agent.isPlayerAgent();
    }

    /**
     * Triggers an interaction with the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     */
    this.trigger = function(agent, game) {
        agent.acceptEquipment(value);
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
     * @param game The game state
     * @returns {boolean}
     */
    this.canPassThrough = function(agent, game) {
        return false;
    }

    /**
     * Determines if the given agent triggers an event when passing over this tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     * @returns {boolean}
     */
    this.isEventTriggered = function(agent, game) {
        return agent.isPlayerAgent();
    }

    /**
     * Triggers an interaction with the tile
     * @param agent The agent interacting with the tile
     * @param game The game state
     */
    this.trigger = function(agent, game) {
        agent.combat(monster);
    }

    this.draw = function() {
        return "<span class='tile'>M</span>";
    }
}
