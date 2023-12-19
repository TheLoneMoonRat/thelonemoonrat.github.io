document.addEventListener("DOMContentLoaded", function () {
    const conveyorBelt = document.querySelector(".conveyor-belt");
    const conveyorBeltB = document.querySelector(".conveyor-beltB");

    // Add your desired symbols here

    // Function to create and append symbols to the conveyor belt
    function createSymbol() {
        const symbol = document.createElement("img");
        const symbolsB = document.createElement("img");
        symbol.classList.add("symbol");
        conveyorBelt.appendChild(symbol);
        conveyorBeltB.appendChild(symbolsB);
        symbolsB.classList.add("symbolsB");
        if (Math.floor(Math.random() * 2) == 1) {
            symbol.src = "Data/warriors.png";
            symbolsB.src = "Data/warriors.png";
        } else {
            symbol.src = "Data/hawk.jpg";
            symbolsB.src = "Data/hawk.jpg";
        }

        // Remove the symbol after it moves out of the screen
        symbol.addEventListener("animationiteration", () => {
            symbol.remove();
        });
        symbolsB.addEventListener("animationiteration", () => {
            symbolsB.remove();
        });
    }

    // Call createSymbol at regular intervals to create the conveyor belt effect
    setInterval(createSymbol, 500); // Adjust the interval between symbols
});