var w = 12;
var columns = 50;
var rows = 50;
var board;
var next;
var seed;

var nbColons = 2;
var villageBot = 2;



// Fill board randomly

class Cellule {

    constructor(valeur) {
      this.valeur = valeur;
      this.nbPropagations = 1;
    }

  }

// The process of creating the new generation
