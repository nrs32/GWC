// listen for spaces
function spaceListener() {
    document.onkeyup = function(e){
        if (e.keyCode == 32){
            document.getElementById("space").className  = "bowlingballposition";
        }
    }
}

// reset the ball position to the starting point
function reset() {
    document.getElementById("space").className  = "bowlingball";
}