// Possible Tasks:
//   * Random Gold Values
//   * Map-Configured Gold Values
//   * Randomly Generated Monsters
//   * Map-Configured Monster Values
//   * Ladder Tiles to go up and down levels

function pickRandomMonster() {
    var monsters = new Monsters();
    var names = monsters.getMonsterNames();
    var index = Math.ceil(Math.random() * 1000);

    return monsters.getMonsterByName(names[index % names.length]);
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
    this.draw = function(floor, gameState) {
        var result = "";
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[i].length; j++) {
                var agent = gameState.agentAtPosition(floor, j, i);
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

    this.getTile = function (x, y) {
        return tiles[y][x];
    }

    this.isValidPosition = function(position) {
        var x = position.x;
        var y = position.y;
        if (y < 0 || y >= tiles.length) {
            return false;
        }
        row = tiles[y];
        return x >= 0 && x < row.length;
    }
}

function Map(levelGrid, doors, items) {
    var floors = [];
    for (var i = 0; i < levelGrid.length; i++)  {
        floors.push(new MapFloor(levelGrid[i]));
    }

    var map = {
        floors: floors,
        doors: doors,
        items: items,
        floor: 0 // the current map (floor) to show.
    };

    var tileAtPosition = function(position) {
        return floors[map.floor].getTile(position.x, position.y);
    }

    this.isValidPosition = function(position) {
        var floor = position.floor;
        if (floor < 0 || floor >= floors.length) {
            return false;
        }
        var currentFloor = floors[floor];
        return currentFloor.isValidPosition(position);
    }

    this.canMoveTo = function(agent, position) {
        if (!this.isValidPosition(position)) {
            return false;
        }
        var tile = tileAtPosition(position);
        return tile.canPassThrough(agent);
    }
    
    this.draw = function(gameState) {
        return floors[map.floor].draw(map.floor, gameState);
    }

    /**
     * Event handler before an agent move into the designated area
     * @param agent
     * @param position
     */
    this.onMovingTo = function(agent, position, callback) {
        var tile = tileAtPosition(position);
        tile.onMovingTo(agent, callback);
    }

    /**
     * Event handler before after an agent move into the designated area
     * @param agent
     * @param position
     */
    this.onMoved = function(agent, position) {
        var tile = tileAtPosition(position);
        tile.onMoved(agent);
    }
    
    this.updateCharacters = function(characters) {
    }
}