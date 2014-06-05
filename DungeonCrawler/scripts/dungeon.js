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
        ['#', '.', '.', '#', '.', '.', 'G', '.', '.', '.'],
        ['#', '.', '.', '#', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '#', '#', '#', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', 'G', '.', '.', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', 'G'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]
];
var map = new Map(floors);

/**
 * Draws the World
 */
function drawWorld() {
    map.draw(gameState, mapDiv);
    goldScore.innerHTML = player1.gold;
}

function getGold(xPos, yPos) {
    player1.gold+=10;
    map[yPos][xPos] = '.';
}

function doMovement(xPos, yPos) {
    player1.x = xPos;
    player1.y = yPos;
}

function isPositionValid(xPos, yPos) {
    var yIsValid = yPos >= 0 && yPos < map.length;
    var xIsValid = xPos >= 0 && xPos < map[yPos].length;
    return xIsValid && yIsValid;
}

function movePlayer(xPos, yPos) {
    // make sure the new position is inside of the map.
    if (isPositionValid(xPos, yPos)) {
        var tileChar = map[yPos][xPos];
        // And finally we need to make sure the player doesn't walk through a wall.
        // We can prevent that by checking if the letter at the new position is a '#' or not.
        // If it is a wall, we'll just do nothing. If it isn't a wall, then we'll update
        // the player's position and redraw the map.
        if (tileChar !== "#") {
            if (tileChar === "G") {
                getGold(xPos, yPos)
            }
            drawWorld();
        } // end wall check
    }
}

// When the user presses an arrow key on the keyboard, we want to move the player.
// This function gets ran every time a user presses a key.
// The "event" variable is an object that contains information about what key was pressed.
// We can get the key that was pressed from the event.keyCode.
// event.keyCode is a number, but we can figure out what that number means from this web site:
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

document.body.onkeydown = function (event) {
    var newX = player1.x,
        newY = player1.y;
    console.log("onb key down");
    if (event.keyCode === 37) {        // left arrow
        newX += -1;
    } else if (event.keyCode === 38) { // up arrow
        newY += -1;
    } else if (event.keyCode === 39) { // right arrow
        newX += 1;
    } else if (event.keyCode === 40) { // down arrow
        newY += 1;
    }

    movePlayer(newX, newY);
}

drawWorld();
