"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //constructor
    function Movie(title, releaseYear, nacionality) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.actors = [];
        this.director = "Un director";
        this.writer = "Un escritor";
        this.language = "Español";
        this.plataform = "Cines";
        this.isMCU = true;
        this.mainCharacterName = "El prota";
        this.producer = "El productor";
        this.distributor = "El distribuidor";
        this.genre = "Comedia";
    }
    Movie.prototype.mostrarDatos = function () {
        for (var datos in this) {
            //this.actors[datos].getDatos()
            console.log(this[datos]);
        }
    };
    return Movie;
}());
exports.Movie = Movie;
