function askName() {
    let name = document.getElementById('name').value.trim().toLowerCase();
    if (name === "mochi") {
        localStorage.setItem("userName", name);
        document.getElementById('name-container').style.display = 'none';
        document.getElementById('options').style.display = 'block'; // Show options
    } else {
        alert("Sorry, you are not mine!");
    }
}

function showPlaces() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('places').style.display = 'block'; // Show places selection
}

function noGo() {
    alert("Oh, that's sad. Maybe next time.");
    localStorage.setItem("userChoice", "No");
}

function choosePlace(place) {
    localStorage.setItem("chosenPlace", place);
    document.getElementById('places').style.display = 'none';

    // Show corresponding options based on the selected place
    if (place === 'Beach') {
        document.getElementById('beach-options').style.display = 'block';
    } else if (place === 'Mall') {
        document.getElementById('mall-options').style.display = 'block';
    } else if (place === 'Aquarium/Zoo') {
        document.getElementById('zoo-options').style.display = 'block';
    }
}

function showBeach(beach) {
    localStorage.setItem("chosenDestination", beach);
    alert("You chose " + beach + "!");
}

function showMall(mall) {
    localStorage.setItem("chosenDestination", mall);
    alert("You chose " + mall + "!");
}

function showZoo(zoo) {
    localStorage.setItem("chosenDestination", zoo);
    alert("You chose " + zoo + "!");
}
