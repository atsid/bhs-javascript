    var player1 = {};
    player1.x = 3;
    player1.y = 4;
    player1.gold = 0;

    var mapDiv = document.getElementById("map");
    var goldScore = document.getElementById("goldScore");

    var map = [
        ['#', '#', '#', '#', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '#', '.', '.', 'G', '.', '.', '.'],
        ['#', '.', '.', '#', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
        ['#', '.', '#', '#', '#', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', 'G', '.', '.', '#', '.', '.', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', 'G'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.']];



    function drawWorld() {
        // create a string that will be all the html for the map
        var out = "";

        // loop through the map rows
        for (var row = 0; row < map.length; row += 1) {

            // loop through the columns for this particular row
            for (var col = 0; col < map[row].length; col += 1) {

                // decide what to draw
                if (player1.x === col && player1.y === row) {
                    // this is where the player is, so draw the player
                    out += "<span class='player'>O</span>";
                } else {
                    // else this is just a normal tile, so draw that tile.
                    out += "<span class='tile'>" + map[row][col] + "</span>";
                }

            }

            // add a <br> so that the next row goes on a new line
            out += "<br>";
        }

        // put this in the web page
        mapDiv.innerHTML = out;

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
                // Add code here that will call the getGold(xPos, yPos) funcion
                // if the tileChar is equal to G

                doMovement(xPos, yPos);
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