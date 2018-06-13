function generate() {

	// Loop through every spot in our 2D array and check spots neighbors
	for (var x = 0; x < columns ; x++) {
		for (var y = 0; y < rows; y++) {
			cell = board[x][y];
			if (cell.valeur > 1 && cell.nbPropagtions != 0) {
				cell.nbPropagtions--;
				propager(x,y);
			}
		}
	}
}

function lancer() {
	while (villageBot > 0) {
		x = Math.round(random(1, columns));
		y = Math.round(random(1, rows));
		cell = board[x][y];
		if (cell.valeur > 0.5 && cell.valeur != 2) {
			console.log("Bot ajouté");
			cell.valeur = 3;
			villageBot--;
			board[x][y].valeur = cell.valeur;
		}
	}
	villageBot = 2;
}

function propager (i, j) {
	nbVoisin = 0;
	neighbors = new Array();
    if(estVoisin(i, j)) {
        if(estVoisin(i + 1, j)) {
			neighbors.push((i+1)+","+j);
			nbVoisin++;
		}
        if(estVoisin(i - 1, j)) {
			neighbors.push((i-1)+","+j);
			nbVoisin++;
		}
        if(estVoisin(i, j + 1)) {
			neighbors.push(i+","+(j+1));
			nbVoisin++;
		}
        if(estVoisin(i, j - 1)) {
			neighbors.push(i+","+(j-1));
			nbVoisin++;
		}
	}
	valeur = board[i][j].valeur;
	rand = neighbors[Math.round(random(0,nbVoisin))];
	if (rand != null) {
		voisin = rand.split(",");
		nouvelleCellule = board[voisin[0]][voisin[1]];
		if (nouvelleCellule.valeur > 0.5 && nouvelleCellule.nbPropagations > 0) {
			board[voisin[0]][voisin[1]].valeur = valeur;
			nouvelleCellule.nbPropagations--;
		}

	}

}

function estVoisin(i, j) {
	x = columns; y = rows;
	flag = false;
    if (board[i] != null && board[i][j] != null) {
        flag = true;
	}
    return flag;
}