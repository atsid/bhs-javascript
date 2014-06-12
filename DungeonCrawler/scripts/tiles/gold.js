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
    this.onMovingTo = function(agent, callback) {
        callback();
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