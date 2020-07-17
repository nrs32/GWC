function gameGenerator() {
    let gameTileArea = document.getElementById('invisibleGameDiv');
    var numGames = 77;
    gameList.forEach(game => {
        gameTileArea.innerHTML +=
            `<form class="form" action="${game.link}" method="get" target="_blank">
                <button class="game" type="submit">
                <img src="${game.thumbnail}" style="width: 60px;"/> 
                ${game.title}
                </button>
            </form>`
    })
    /* for (let i = 0; i < numGames; i++) {
        gameTileArea.innerHTML +=
            `<button class="game" type="submit"> `+
                `GAME #` + (i + 1) +
            `</button>`
    } */
}


// This function is called when the Girls Who Code button is clicked
// Because we used onClick in the HTML with the function sendAlert()
function sendAlert() {

    /* This message will appear in the console
     * The console is visble in your browser by clicking either
     * F12 or Ctrl + Shift + i */
    console.log("You clicked the game button!")

    // This lets us access and edit the div with the id alertArea
    let alertArea = document.getElementById('alertArea');

    // Show an alert on screen
    // using innerHTML lets us write HTML code to add to the alertArea div
    alertArea.innerHTML +=   
        '<div class="alert alert-info alert-dismissible" role="alert">' +
            'Code Like a Girl!' +

            // This part lets us close the alert
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
            '</button>' +
        '</div>';
}