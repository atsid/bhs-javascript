/**
 * Monster Tile Class
 * @constructor
 */
function MonsterTile(monster) {
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
     * @param position
     */
    this.onMovingTo = function(agent, callback) {
        var combatComplete = function() {
            available = false;
            callback();
        }
        if (agent.isPlayerAgent()) {
            if (available) {
                console.log("COMBAT with", monster.getName());
                agent.combat(monster, combatComplete);
            } else {
                callback();
            }
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
        if (available)
            return "<span class='monster'>M</span>";
        else
            return "<span class='tile'>.</span>";

    }
}
