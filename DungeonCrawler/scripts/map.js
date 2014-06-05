// Possible Tasks:
//   * Random Gold Values
//   * Map-Configured Gold Values
//   * Randomly Generated Monsters
//   * Map-Configured Monster Values
//   * Ladder Tiles to go up and down levels

function pickRandomMonster() {
    return {};
}

function makeTile(symbol) {
    switch (symbol) {
        case '.': return new EmptyTile();
        case '#': return new WallTile();
        case 'G': return new GoldTile(10);
        case 'M': return new MonsterTile(pickRandomMonster());
        default: throw new Error("Unhandled tile type: " + symbol);
    }
}

function MapFloor(grid) {
    var tiles = [];

    for (var i = 0; i < grid.length; i++) {
        var row = [];
        for (var j = 0; j < grid[i].length; j++) {
            var symbol = grid[i][j];
            row.push(makeTile(symbol));
        }
        tiles.push(row);
    }

    /**
     * Draws the current map level
     */
    this.draw = function(gameState) {
        var result = "";
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[i].length; j++) {
                var agent = gameState.agentAtPosition(i,j);
                var tile = tiles[i][j];
                if (agent) {
                    result += agent.draw();
                } else {
                    result += tile.draw();
                }
            }
            result += "<br>";
        }
        return result;
    }
}

function Map(levelGrid, doors, items) {
    var floors = [];
    for (var i = 0; i < levelGrid.length; i++)  {
        floors.push(new MapFloor(levelGrid[i]));
    }
    var currentFloor = 0;

    var map = {
        floors: floors,
        doors: doors,
        items: items,
        current: 0 // the current map (floor) to show.
    };
    
    this.draw = function(gameState, element) {
        element.innerHTML = floors[currentFloor].draw();
    }
    
    this.updateCharacters = function(characters) {
        
    }
}