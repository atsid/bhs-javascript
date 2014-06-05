// Ideas:
//   * Have dynamic monsters as agents in the game state
//   * Move monsters every turn
//   * Variable monster movement speed


/**
 * Game State class
 * @param playerData
 * @constructor
 */
function GameState(player) {
    /***
     * Determines if there is an agent at the given position.
     * @param floor
     * @param x
     * @param y
     * @returns {*} If there is, returns the agent (or agents?), if there is no agent, returns null.
     */
    this.agentAtPosition = function(floor, x, y) {
        if (player.isLocatedAt(floor, x, y)) {
            return player;
        } else {
            return null;
        }
    }
}