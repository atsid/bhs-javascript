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
    this.onMovingTo = function(agent, callback) {
        callback();
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