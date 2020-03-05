function gameGenerator() {
    let gameTileArea = document.getElementById('invisibleGameDiv');
    var numGames = 77;
    for (let i = 0; i < numGames; i++) {
        gameTileArea.innerHTML +=
            `<div class=game> `+
                `GAME #` + (i + 1) +
            `</div>`
    }
}




// This function is called when the Girls Who Code button is clicked
// Because we used onClick in the HTML with the function sendAlert()
function sendAlert() {

    /* This message will appear in the console
     * The console is visble in your browser by clicking either
     * F12 or Ctrl + Shift + i */
    console.log("You clicked the Girls Who Code button!")

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