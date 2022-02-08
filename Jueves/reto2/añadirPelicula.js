let peliculas = [
    {"title":"El titulo de mi vida","releaseYear":1985,"nacionality":"Española","actors":[{"name":"Brad Pitt","age":58,"genre":"masculino","weight":78,"height":180,"hairColor":"rubio","eyeColor":"azules","race":"blanca","isRetired":false,"nationality":"americana","oscarsNumber":2,"profession":"actor"},{"name":"Denzel Washington","age":67,"genre":"masculino","weight":78,"height":185,"hairColor":"negro","eyeColor":"marrones","race":"negra","isRetired":false,"nationality":"americana","oscarsNumber":2,"profession":"actor"}],"director":"Un director","writer":"Un escritor","language":"Español","plataform":"Cines","isMCU":true,"mainCharacterName":"El prota","producer":"El productor","distributor":"El distribuidor","genre":"Comedia"},
    {"title":"Otro titulo 2","releaseYear":2000,"nacionality":"Inglesa","actors":[{"name":"Scarlett Johansson","age":37,"genre":"femenino","weight":48,"height":163,"hairColor":"rubio","eyeColor":"azules","race":"blanco","isRetired":false,"nationality":"americana","oscarsNumber":0,"profession":"actriz"},{"name":"Angelina Jolie","age":46,"genre":"femenino","weight":54,"height":169,"hairColor":"castaño","eyeColor":"azules","race":"blanco","isRetired":false,"nationality":"americana","oscarsNumber":2,"profession":"actriz"}],"director":"Un director","writer":"Un escritor","language":"Español","plataform":"Cines","isMCU":true,"mainCharacterName":"El prota","producer":"El productor","distributor":"El distribuidor","genre":"Comedia"},
    {"title":"Otro titulo 3","releaseYear":2010,"nacionality":"Lituana","actors":[{"name":"Sophia Loren","age":87,"genre":"femenino","weight":59,"height":174,"hairColor":"castaño","eyeColor":"marron","race":"blanco","isRetired":true,"nationality":"italiana","oscarsNumber":2,"profession":"actriz"}],"director":"Un director","writer":"Un escritor","language":"Español","plataform":"Cines","isMCU":true,"mainCharacterName":"El prota","producer":"El productor","distributor":"El distribuidor","genre":"Comedia"}
]



window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("añadir-pelicula").addEventListener("click", nuevaPelicula, false);
}




function mostrarTabla(){

    var cuerpoTabla = document.getElementById("peliculas-tabla");
    var tablaLlena = "";

    for(let i=0; i<peliculas.length; i++){

        tablaLlena += "<tr><th scope='row'>"+i+"</th><td>"+ peliculas[i].title +
        "</td><td>" + peliculas[i].nacionality + 
        "</td><td>" + peliculas[i].releaseYear + 
        "</td><td>" + peliculas[i].language + 
        "</td><td>" +peliculas[i].actors[0].name + 
        "</td></tr>"

    }
    cuerpoTabla.innerHTML = tablaLlena;

    
}

function nuevaPelicula(event){
    event.preventDefault();    
    let tituloIntroducido = document.getElementById("titulo").value;
    let añoIntroducido = document.getElementById("estreno").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let idioma = document.getElementById("idioma").value;
    let actores = document.getElementById("actores").value;
    let nuevaPelicula = {"title":tituloIntroducido,"releaseYear":añoIntroducido,"nacionality":nacionalidad,"actors":actores,"director":"Un director","writer":"Un escritor","language":idioma,"plataform":"Cines","isMCU":true,"mainCharacterName":"El prota","producer":"El productor","distributor":"El distribuidor","genre":"Comedia"}
    peliculas.push(nuevaPelicula);
}