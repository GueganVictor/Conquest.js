var w;
var columns;
var rows;
var board;
var next;
var seed;

var nbColons = 2;
var villageBot = 2;
// lancement

// Fill board randomly

class Cellule {

    constructor(valeur) {
      this.valeur = valeur;
      if (valeur > 0.5)
        this.nbPropagations = 1;
    }

  }

// The process of creating the new generation
