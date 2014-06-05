////////////////////////////////////////////////////////////////////////////////////////////////
// The 'Dungeon' Script wires together our game.
// Core game logic should be deferred to other classes (GameState, Player, Monster, etc..)
////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * HTML Elements
 */
var mapDiv = document.getElementById("map");
var goldScore = document.getElementById("goldScore");

/*
 * Logical Game State
 */
var player1 = new Player("Derpy Derpson", { x: 3, y: 4, floor: 0 });
var gameState = new GameState(player1);
var floors =
[
    // Floor 1
    [
        ['#', '#', '#', '#', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '#', '.', '.', 'G', '.', '.', 'M'],
        ['#', '.', '.', '#', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', 'M', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '#', '#', '#', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', 'G', '.', '.', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'M'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', 'G'],
        ['#', 'M', '.', '.', '.', '.', '.', '.', '.', '.']
    ]
];
var map = new Map(floors);

/**
 * Draws the World
 */
function drawWorld() {
    mapDiv.innerHTML = map.draw(gameState, mapDiv);
    goldScore.innerHTML = player1.getGold();
}

// When the user presses an arrow key on the keyboard, we want to move the player.
// This function gets ran every time a user presses a key.
// The "event" variable is an object that contains information about what key was pressed.
// We can get the key that was pressed from the event.keyCode.
// event.keyCode is a number, but we can figure out what that number means from this web site:
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

document.body.onkeydown = function (event) {
    if (event.keyCode === 37) {        // left arrow
        console.log("Moving Left");
        player1.moveLeft(map);
    } else if (event.keyCode === 38) { // up arrow
        console.log("Moving Up");
        player1.moveUp(map);
    } else if (event.keyCode === 39) { // right arrow
        console.log("Moving Right");
        player1.moveRight(map);
    } else if (event.keyCode === 40) { // down arrow
        console.log("Moving Down");
        player1.moveDown(map);
    }
    drawWorld();
}

drawWorld();
