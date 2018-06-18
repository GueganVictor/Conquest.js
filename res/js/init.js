var w = 12;
var columns = 50;
var rows = 50;
var board;
var next;
var seed;

var tick = 5;
var nbColons = 2;
var villageBot = 2;



// Fill board randomly

class Cellule {

    constructor(valeur) {
      this.valeur = valeur;
      this.fertilite = 100;
      this.resistance = Math.round(random(2, 10));
      this.origin = valeur;
      this.tour = 0;
    }

  }

// The process of creating the new generation

