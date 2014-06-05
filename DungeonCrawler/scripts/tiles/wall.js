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