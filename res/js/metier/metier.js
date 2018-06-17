function updateTab() {
	temp = board;
	for (var x = 0; x < columns ; x++) {
		for (var y = 0; y < rows; y++) {
			if (Math.round(random(0,1000000)) == 5) {
				board[x][y].valeur = 3;
			}
			cell = temp[x][y];
			if (cell.valeur == 3) {
				if (document.getElementById("pause").checked == false) {
					if (random(0,8) < 6) {
						propager(x,y);
					}
					if (cell.tour >= cell.resistance) {
						cell.tour == 0;
						board[x][y] = cell;
						board[x][y].valeur = 0;
					}
					cell.tour++;
				}
			}
			if (cell.valeur == 0) {
				cell.tour++;
				if (cell.tour >= cell.fertilite) {
					cell.tour == 0;
					board[x][y] = cell;
					board[x][y].valeur = board[x][y].origin;
				}
			}
			if (cell.valeur == 1 || cell.valeur == 2) {
				board[x][y].tour = 0;
			}
		}
	}

}

function lancer() {
	x = Math.round(random(1, columns));
	y = Math.round(random(1, rows));
	board[x][y].valeur = 3;
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


	voisin = neighbors[Math.round(random(0,nbVoisin))];
	if (voisin != null) {
		voisin = voisin.split(",");
		nouvelleCellule = board[voisin[0]][voisin[1]];
		if (nouvelleCellule.valeur == 1 || nouvelleCellule.valeur == 2 ) {
			board[voisin[0]][voisin[1]].valeur = 3;
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
