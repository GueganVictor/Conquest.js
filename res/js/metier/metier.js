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
		x = Math.round(random(1, 50));
		y = Math.round(random(1, 100));
		cell = board[x][y];
		if (cell.valeur > 0.5 && cell.valeur != 2) {
			console.log("Bot ajouté");
			cell.valeur = 3;
			villageBot--;
			board[x][y].valeur = cell.valeur;
		} else{
			console.log("bot eau");
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
        if(estVoisin(i - 1, j + 1)) {
			neighbors.push((i-1)+","+(j+1));
			nbVoisin++;
		}
        if(estVoisin(i + 1, j - 1)) {
			neighbors.push((i+1)+","+(j-1));
			nbVoisin++;
		}
        if(estVoisin(i + 1, j + 1)) {
			neighbors.push((i+1)+","+(j+1));
			nbVoisin++;
		}
        if(estVoisin(i - 1, j - 1)) {
			neighbors.push((i-1)+","+(j-1));
			nbVoisin++;
		}
	}

	rand = neighbors[Math.round(random(0,nbVoisin))];
	if (rand != null) {
		voisin = rand.split(",");
		nouvelleCellule = board[voisin[0]][voisin[1]].valeur;
		if (nouvelleCellule > 0.5 && nouvelleCellule < 1) {
			console.log(voisin[0] +" "+voisin[1])
			board[voisin[0]][voisin[1]].valeur = 2;
		}

	}

}

function estVoisin(i, j) {
	x = 50; y = 100;
	flag = false;
    if (board[i] != null && board[i][j] != null) {
        flag = true;
	}
    return flag;
}