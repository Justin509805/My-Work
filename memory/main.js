// REFFERING TO THE CSS CLASS .TILES
const tilesContainer = document.querySelector(".tiles");
// REFFERING TO COLOURS FROM CSS
const colors = ["white", "red", "yellow", "blue", "green", "purple", "cyan", "gray"];
// DUPLICATE THE LIST ABOVE
const colorsPicklist = [...colors, ...colors];
// NUMBER OF TILES
const tileCount = colorsPicklist.length;

// GAME CODE
// HOW MANY TILES ARE CORRECT AT THIS STATE OF THE GAME
let revealedCount = 0;
// ACTIVETILE = THE CLICKED TILE
let activeTile = null;
// TRUE= WAITING FOR THE WRONG ANSWER TO REVERSE AND FLIP THE TILES AGAIN.
let awaitingEndOfMove = false;

function buildTile(color) {
    // SEARCHING FOR DIV IN HTML
	const element = document.createElement("div");
    // SEARCHING FOR ATTRIBUTE TILE, COLOR AND REVEALED WHEN ITS FALSE
	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

    // REACTING TO THE "CLICK" OF THE MOUSE AND REVEALING ON CLICK.
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
        // IF THE REVEALED TILE IS TRUE OR RIGHT, IT STAYS ACTIVE OR FLIPPED.
		if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeTile
		) {
			return;
		}

		element.style.backgroundColor = color;

		if (!activeTile) {
			activeTile = element;

			return;
		}

		const colorToMatch = activeTile.getAttribute("data-color");
        // IF THE COLOURS MATCH, THE REVEALED DATA IS TRUE AND STAYS ACTIVE OR FLIPPED.
		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeTile.setAttribute("data-revealed", "true");

			activeTile = null;
			awaitingEndOfMove = false;
			revealedCount += 2;

			if (revealedCount === tileCount) {
				alert("You have finished the game! Good job!");
			}

			return;
		}
        // TRUE= WAITING FOR THE WRONG ANSWER TO REVERSE AND FLIP THE TILES AGAIN.
		awaitingEndOfMove = true;

		setTimeout(() => {
			activeTile.style.backgroundColor = null;
			element.style.backgroundColor = null;
            // TRUE= WAITING FOR THE WRONG ANSWER TO REVERSE AND FLIP THE TILES AGAIN.
			awaitingEndOfMove = false;
			activeTile = null;
		}, 1000);
	});

	return element;
}

// BUILDING THE TILES
for (let i = 0; i < tileCount; i++) {
    // RANDOM COLOUR IN THE TILE
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const tile = buildTile(color);

	colorsPicklist.splice(randomIndex, 1);
	tilesContainer.appendChild(tile);
}