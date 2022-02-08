exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    //Definimos constructor
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    // Bloque de métodos
    Professional.prototype.getDatos = function () {
        console.log("Datos de " + this.name);
        console.log("Nombre: " + this.name);
        console.log("Edad: " + this.age);
        console.log("Género: " + this.genre);
        console.log("Peso: " + this.weight);
        console.log("Altura: " + this.height);
        console.log("Color de pelo: " + this.hairColor);
        console.log("Color de ojos: " + this.eyeColor);
        console.log("Raza: " + this.race);
        console.log("¿Está retirado?: " + this.isRetired);
        console.log("Nacionalidad: " + this.nationality);
        console.log("Número de Oscars: " + this.oscarsNumber);
        console.log("Profesión: " + this.profession + "\n");
    };
    return Professional;
}());
exports.Professional = Professional;
