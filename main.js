"use strict";

var pelis = [
    {
        "nombre": "Joker",
        "anio": 2019,
        "peso": 2.06
    },
    {
        "nombre": "Parasite",
        "anio": 2019,
        "peso": 2.22
    },
    {
        "nombre": "The Irishman",
        "anio": 2019,
        "peso": 3.49
    },
    {
        "nombre": "Men in Black International",
        "anio": 2019,
        "peso": 1.94
    },
    {
        "nombre": "The Two Popes",
        "anio": 2019,
        "peso": 2.11
    },
    {
        "nombre": "1917",
        "anio": 2019,
        "peso": 0
    },
    {
        "nombre": "Booksmart",
        "anio": 2019,
        "peso": 1.72
    },
    {
        "nombre": "The Farewell",
        "anio": 2019,
        "peso": 1.65
    },
    {
        "nombre": "Tolkien",
        "anio": 2019,
        "peso": 2.29
    },
    {
        "nombre": "Dumbo",
        "anio": 2019,
        "peso": 1.92
    },
    {
        "nombre": "The Lion King",
        "anio": 2019,
        "peso": 2.01
    },
    {
        "nombre": "The Game Changers",
        "anio": 2019,
        "peso": 1.61
    },
    {
        "nombre": "Alita Battle Angel",
        "anio": 2019,
        "peso": 2.11
    },
    {
        "nombre": "Pain and Glory",
        "anio": 2019,
        "peso": 2.11
    },
    {
        "nombre": "Mfkz",
        "anio": 2018,
        "peso": 1.64
    },
    {
        "nombre": "Green Book",
        "anio": 2018,
        "peso": 1.53
    },
    {
        "nombre": "Blade Runner 2049",
        "anio": 2017,
        "peso": 2.05
    },
    {
        "nombre": "Loving Vincent",
        "anio": 2017,
        "peso": 1.55
    },
    {
        "nombre": "Baby Driver",
        "anio": 2017,
        "peso": 1.84
    },
    {
        "nombre": "Murder on the Orient Express",
        "anio": 2017,
        "peso": 1.85
    },
    {
        "nombre": "Ghost in the Shell",
        "anio": 2017,
        "peso": 1.75
    },
    {
        "nombre": "The Danish Girl",
        "anio": 2015,
        "peso": 1.05
    },
    {
        "nombre": "The Imitation Game",
        "anio": 2014,
        "peso": 1.98
    },
    {
        "nombre": "The Man Who Knew Infinity",
        "anio": 2016,
        "peso": 2.08
    },
    {
        "nombre": "Good Will Hunting",
        "anio": 1997,
        "peso": 1.82
    },
    {
        "nombre": "The Intouchables",
        "anio": 2011,
        "peso": 1.05
    },
    {
        "nombre": "Snowden",
        "anio": 2016,
        "peso": 2.49
    },
    {
        "nombre": "Citizenfour",
        "anio": 2014,
        "peso": 0.85
    },
    {
        "nombre": "We Steal Secrets - Wikileaks",
        "anio": 2013,
        "peso": 1.37
    },
    {
        "nombre": "Searching for Bobby Fischer",
        "anio": 1993,
        "peso": 1.85
    },
    {
        "nombre": "Gandhi",
        "anio": 1982,
        "peso": 2.58
    },
    {
        "nombre": "JFK",
        "anio": 1991,
        "peso": 0.94
    },
    {
        "nombre": "Big Eyes",
        "anio": 2014,
        "peso": 0.85
    },
    {
        "nombre": "The theory of everything",
        "anio": 0,
        "peso": 0
    },
    {
        "nombre": "------ TARANTINO ------",
        "anio": 2000,
        "peso": 0
    },
    {
        "nombre": "Reservoir Dogs",
        "anio": 1992,
        "peso": 1.65
    },
    {
        "nombre": "True Romance",
        "anio": 1993,
        "peso": 1.78
    },
    {
        "nombre": "Pulp Fiction",
        "anio": 1994,
        "peso": 1.51
    },
    {
        "nombre": "Four Rooms",
        "anio": 1995,
        "peso": 1.55
    },
    {
        "nombre": "From Dusk Till Dawn",
        "anio": 1996,
        "peso": 1.61
    },
    {
        "nombre": "Jackie Brown",
        "anio": 1997,
        "peso": 1.8
    },
    {
        "nombre": "Kill Bill Vol 1",
        "anio": 2003,
        "peso": 1.61
    },
    {
        "nombre": "Kill Bill Vol 2",
        "anio": 2004,
        "peso": 1.99
    },
    {
        "nombre": "Sim City",
        "anio": 2005,
        "peso": 1.94
    },
    {
        "nombre": "Death Proof",
        "anio": 2007,
        "peso": 1.77
    },
    {
        "nombre": "Inglourious Bastards",
        "anio": 2009,
        "peso": 1.61
    },
    {
        "nombre": "Django Unchained",
        "anio": 2012,
        "peso": 2.37
    },
    {
        "nombre": "The Hateful Eight",
        "anio": 2015,
        "peso": 0
    },
    {
        "nombre": "Once Upon a Time in Hollywood",
        "anio": 2019,
        "peso": 0
    },
    {
        "nombre": "------ THE INFINITY SAGA - Phase I ------",
        "anio": 2001,
        "peso": 11.1
    },
    {
        "nombre": "Iron Man",
        "anio": 2008,
        "peso": 1.77
    },
    {
        "nombre": "The Incredible Hulk",
        "anio": 2008,
        "peso": 1.76
    },
    {
        "nombre": "Iron Man 2",
        "anio": 2010,
        "peso": 1.72
    },
    {
        "nombre": "Thor",
        "anio": 2011,
        "peso": 1.72
    },
    {
        "nombre": "Capitán America: The First Avenger",
        "anio": 2011,
        "peso": 1.71
    },
    {
        "nombre": "The Avengers",
        "anio": 2012,
        "peso": 2.36
    },
    {
        "nombre": "------ THE INFINITY SAGA - Phase II ------",
        "anio": 2013,
        "peso": 11.6
    },
    {
        "nombre": "Iron Man 3",
        "anio": 2013,
        "peso": 2.1
    },
    {
        "nombre": "Thor: The Dark World",
        "anio": 2013,
        "peso": 1.76
    },
    {
        "nombre": "Captain America: The Winter Soldier",
        "anio": 2014,
        "peso": 2.1
    },
    {
        "nombre": "Guardians of the Galaxy",
        "anio": 2014,
        "peso": 1.99
    },
    {
        "nombre": "Avengers: Age of Ultron",
        "anio": 2015,
        "peso": 2.21
    },
    {
        "nombre": "Ant-Man",
        "anio": 2015,
        "peso": 1.39
    },
    {
        "nombre": "------ THE INFINITY SAGA - Phase III ------",
        "anio": 2016,
        "peso": 22.04
    },
    {
        "nombre": "Captain America: Civil War",
        "anio": 2016,
        "peso": 2.41
    },
    {
        "nombre": "Doctor Strange",
        "anio": 2016,
        "peso": 1.88
    },
    {
        "nombre": "Guardians of the Galaxy Vol. 2",
        "anio": 2017,
        "peso": 2.22
    },
    {
        "nombre": "Spider-Man: Homecoming",
        "anio": 2017,
        "peso": 2.18
    },
    {
        "nombre": "Thor: Ragnarok",
        "anio": 2017,
        "peso": 2.1
    },
    {
        "nombre": "Black Panther",
        "anio": 2018,
        "peso": 2.33
    },
    {
        "nombre": "Avengers: Infinity War",
        "anio": 2018,
        "peso": 2.57
    },
    {
        "nombre": "Ant-Man and the Wasp",
        "anio": 2018,
        "peso": 2.03
    },
    {
        "nombre": "Captain Marvel",
        "anio": 2019,
        "peso": 2.14
    },
    {
        "nombre": "Avengers: Endgame",
        "anio": 2019,
        "peso": 3.2
    },
    {
        "nombre": "Spider-Man: Far From Home",
        "anio": 2019,
        "peso": 2.18
    },
    {
        "nombre": "------ SAGA X-MEN ------",
        "anio": 2000,
        "peso": 0
    },
    {
        "nombre": "X-men",
        "anio": 2000,
        "peso": 3.13
    },
    {
        "nombre": "X-men 2",
        "anio": 2002,
        "peso": 4.01
    },
    {
        "nombre": "X-Men the Last Stand",
        "anio": 2006,
        "peso": 3.16
    },
    {
        "nombre": "X-Men Origins Wolverine",
        "anio": 2009,
        "peso": 3.22
    },
    {
        "nombre": "X-Men First Class",
        "anio": 2011,
        "peso": 3.95
    },
    {
        "nombre": "X-Men Days of Future Past",
        "anio": 2014,
        "peso": 4.21
    },
    {
        "nombre": "------ MATRIX ------",
        "anio": 1999,
        "peso": 6
    },
    {
        "nombre": "The Matrix",
        "anio": 1999,
        "peso": 2
    },
    {
        "nombre": "The Matrix Reloaded",
        "anio": 2003,
        "peso": 2
    },
    {
        "nombre": "The Matrix Revolutions",
        "anio": 2003,
        "peso": 2
    },
    {
        "nombre": "------ STAR WARS ------",
        "anio": 1977,
        "peso": 23.21
    },
    {
        "nombre": "I - The Phantom Menace",
        "anio": 1999,
        "peso": 3.89
    },
    {
        "nombre": "II - Attack of the Clones",
        "anio": 2002,
        "peso": 4.13
    },
    {
        "nombre": "III - Revenge of the Sith",
        "anio": 2005,
        "peso": 4.01
    },
    {
        "nombre": "IV - A new Hope",
        "anio": 1977,
        "peso": 3.64
    },
    {
        "nombre": "V - The Empires Strike Back",
        "anio": 1980,
        "peso": 3.65
    },
    {
        "nombre": "VI - Return of the Jedi",
        "anio": 1983,
        "peso": 3.89
    },
    {
        "nombre": "------ EL SEÑOR DE LOS ANILLOS ------",
        "anio": 2001,
        "peso": 4.95
    },
    {
        "nombre": "La comunidad del anillo - version extendida",
        "anio": 2001,
        "peso": 1.51
    },
    {
        "nombre": "Las dos torres - version extendida",
        "anio": 2002,
        "peso": 1.61
    },
    {
        "nombre": "El retorno del rey - version extendida",
        "anio": 2003,
        "peso": 1.83
    }
]

var series = [
    {
        "nombre": "peaky blinders",
        "anio": 2001,
        "peso": 2.4
    },
    {
        "nombre": "dark",
        "anio": 1998,
        "peso": 5.4
    }
]

var documentales = [
    {
        "nombre": "20 Years Of Filmmaking",
        "anio": 2012,
        "peso": 0
    },
]

buildTable(pelis);

function buildTable(data){
    var table = document.getElementById("theTable");

    for(var i = 0; i < data.length; i++){
        var row =   `<tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].anio}</td>
                        <td>${data[i].peso}</td>
                    </tr>`;

        table.innerHTML += row;
    }
}

document.getElementById("pelis").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(pelis);
    document.querySelector("#attr").innerHTML = ("Año");
}
document.getElementById("series").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(series);
    document.querySelector("#attr").innerHTML = ("Episodios");
}
document.getElementById("documentales").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(documentales);
    document.querySelector("#attr").innerHTML = ("Año");
}