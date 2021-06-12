"use strict";

var pelis = [
    {
        "nombre": "--- Drama ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "The Red Violin",
        "anio": 1998,
        "peso": 1.3
    },
    {
        "nombre": "The Martian",
        "anio": 2015,
        "peso": 3
    },
    {
        "nombre": "The Illusionist",
        "anio": 2006,
        "peso": 0.9
    },
    {
        "nombre": "Slumdog Millionaire",
        "anio": 2008,
        "peso": 2
    },
    {
        "nombre": "Mr. Nobody",
        "anio": 2009,
        "peso": 4.1
    },
    {
        "nombre": "Relatos Salvajes",
        "anio": 2014,
        "peso": 1.7
    },
    {
        "nombre": "Pain and Glory",
        "anio": 2019,
        "peso": 2.11
    },
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
        "nombre": "21",
        "anio": 2008,
        "peso": 1
    },
    {
        "nombre": "Avatar",
        "anio": 2009,
        "peso": 4.3
    },
    {
        "nombre": "Dorian Gray",
        "anio": 2009,
        "peso": 1.6
    },
    {
        "nombre": "Blood Diamond",
        "anio": 2006,
        "peso": 2
    },
    {
        "nombre": "1917",
        "anio": 2019,
        "peso": 0
    },
    {
        "nombre": "The Irishman",
        "anio": 2019,
        "peso": 3.49
    },
    {
        "nombre": "The Farewell",
        "anio": 2019,
        "peso": 1.65
    },


    {
        "nombre": "--- Música ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "Across the Universe",
        "anio": 2007,
        "peso": 1.3
    },
    {
        "nombre": "Pirate Radio",
        "anio": 2009,
        "peso": 1.1
    },
    {
        "nombre": "Baby Driver",
        "anio": 2017,
        "peso": 1.84
    },
    {
        "nombre": "High Fidelity",
        "anio": 2000,
        "peso": 2
    },


    {
        "nombre": "--- Acción ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "V for Vendetta",
        "anio": 2006,
        "peso": 1.8
    },
    {
        "nombre": "Apocalypto",
        "anio": 2006,
        "peso": 0.95
    },
    {
        "nombre": "Mad Max Fury Road",
        "anio": 2015,
        "peso": 2
    },
    {
        "nombre": "Ghost in the Shell",
        "anio": 2017,
        "peso": 1.75
    },
    {
        "nombre": "Blade Runner 2049",
        "anio": 2017,
        "peso": 2.05
    },
    {
        "nombre": "Men in Black International",
        "anio": 2019,
        "peso": 1.94
    },
    {
        "nombre": "Alita Battle Angel",
        "anio": 2019,
        "peso": 2.11
    },
    {
        "nombre": "Inception",
        "anio": 2010,
        "peso": 1.2
    },


    {
        "nombre": "--- Crimen ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "The Usual Suspects",
        "anio": 1995,
        "peso": 1.8
    },
    {
        "nombre": "Fracture",
        "anio": 2007,
        "peso": 4.5
    },
    {
        "nombre": "Rounders",
        "anio": 1998,
        "peso": 2
    },
    {
        "nombre": "Catch Me If You Can",
        "anio": 2002,
        "peso": 3.6
    },
    {
        "nombre": "The Big Short",
        "anio": 2015,
        "peso": 2.1
    },
    {
        "nombre": "Murder on the Orient Express",
        "anio": 2017,
        "peso": 1.85
    },

    {
        "nombre": "--- Comedia ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "La Dictadura Perfecta",
        "anio": 2014,
        "peso": 1.6
    },
    {
        "nombre": "How High",
        "anio": 2001,
        "peso": 1.6
    },
    {
        "nombre": "Booksmart",
        "anio": 2019,
        "peso": 1.72
    },
    {
        "nombre": "The Truman Show",
        "anio": 1998,
        "peso": 1.8
    },


    {
        "nombre": "--- Animadas ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "Ghost in the Shell",
        "anio": 1995,
        "peso": 5
    },
    {
        "nombre": "Mfkz",
        "anio": 2017,
        "peso": 1.64
    },
    {
        "nombre": "Loving Vincent",
        "anio": 2017,
        "peso": 1.55
    },
    {
        "nombre": "Persepolis",
        "anio": 2007,
        "peso": 1.6
    },


    {
        "nombre": "--- Miyazaki ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "Howl's Moving Castle",
        "anio": 2004,
        "peso": 2.6
    },
    {
        "nombre": "Chihiro",
        "anio": 2001,
        "peso": 1.4
    },


    {
        "nombre": "--- Infantiles ---",
        "anio": "",
        "peso": ""
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
        "nombre": "--- Biograficas ---",
        "anio": "",
        "peso": ""
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
        "nombre": "Dallas Buyers Club",
        "anio": 2013,
        "peso": 2
    },
    {
        "nombre": "The Two Popes",
        "anio": 2019,
        "peso": 2.11
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
        "nombre": "--- Clasicas ---",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "2001 A Space Odyssey",
        "anio": 1968,
        "peso": 0.9
    },
    {
        "nombre": "American History X",
        "anio": 1998,
        "peso": 0.9
    },
    {
        "nombre": "American Psyco",
        "anio": 2000,
        "peso": 1.5
    },
    {
        "nombre": "Death Poets Society",
        "anio": 1989,
        "peso": 2
    },
    {
        "nombre": "Fargo",
        "anio": 1996,
        "peso": 1.5
    },
    {
        "nombre": "Fight Club",
        "anio": 1999,
        "peso": 2
    },
    {
        "nombre": "Full Metal Jacket",
        "anio": 1987,
        "peso": 0.9
    },
    {
        "nombre": "Leon The Professional",
        "anio": 1994,
        "peso": 0.9
    },
    {
        "nombre": "Memento",
        "anio": 2000,
        "peso": 1.1
    },
    {
        "nombre": "Pink Floyd - The Wall",
        "anio": 1982,
        "peso": 1
    },
    {
        "nombre": "Scarface",
        "anio": 1983,
        "peso": 2.6
    },
    {
        "nombre": "Seven",
        "anio": 1995,
        "peso": 0.9
    },
    {
        "nombre": "Death Poets Society",
        "anio": 1989,
        "peso": 2
    },
    {
        "nombre": "Trainspotting",
        "anio": 1996,
        "peso": 0.9
    },
    



    {
        "nombre": "--- Tarantino ---",
        "anio": "",
        "peso": 25
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
        "nombre": "-- The Infinity Saga --",
        "anio": "",
        "peso": ""
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
        "nombre": "--- X-Men ---",
        "anio": "",
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
        "nombre": "--- Batman ---",
        "anio": "",
        "peso": 7.7
    },
    {
        "nombre": "The Dark Knight",
        "anio": 2008,
        "peso": 3
    },
    {
        "nombre": "Batman Begins",
        "anio": 2005,
        "peso": 1.2
    },
    {
        "nombre": "The Dark Knight Rises",
        "anio": 2012,
        "peso": 3.6
    },
    {
        "nombre": "--- Matrix ---",
        "anio": "",
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
        "nombre": "The Animatrix",
        "anio": 2003,
        "peso": 1.6
    },
    {
        "nombre": "--- STAR WARS ---",
        "anio": "",
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
        "nombre": "-- El Señor de los Anillos --",
        "anio": "",
        "peso": ""
    },
    {
        "nombre": "La comunidad del anillo - ¡version extendida!",
        "anio": 2001,
        "peso": 1.51
    },
    {
        "nombre": "Las dos torres - ¡version extendida!",
        "anio": 2002,
        "peso": 1.61
    },
    {
        "nombre": "El retorno del rey - ¡version extendida!",
        "anio": 2003,
        "peso": 1.83
    },
    {
        "nombre": "Tolkien",
        "anio": 2019,
        "peso": 2.29
    }
]

var series = [
    {
        "nombre": "Atypical",
        "anio": 28,
        "peso": 11.8
    },
    {
        "nombre": "Avatar - El ultimo maestro aire",
        "anio": 61,
        "peso": 3.3
    },
    {
        "nombre": "Black Mirror",
        "anio": 18,
        "peso": 8
    },
    {
        "nombre": "Breaking Bad",
        "anio": 62,
        "peso": 20.8
    },
    {
        "nombre": "Chernobyl",
        "anio": 5,
        "peso": 6.6
    },
    {
        "nombre": "Cosmos",
        "anio": 13,
        "peso": 14.8
    },
    {
        "nombre": "Death Note",
        "anio": 37,
        "peso": 2.6
    },
    {
        "nombre": "Fargo",
        "anio": 30,
        "peso": 18
    },
    {
        "nombre": "Game of Thrones",
        "anio": 60,
        "peso": 45.2
    },
    {
        "nombre": "Six Feet Under",
        "anio": 63,
        "peso": 49.1
    },
    {
        "nombre": "Las 13 esposas de Wilson Fernandez",
        "anio": 13,
        "peso": 7.3
    },
    {
        "nombre": "Mad Men",
        "anio": 92,
        "peso": 37
    },
    {
        "nombre": "Maniac",
        "anio": 10,
        "peso": 3.4
    },
    {
        "nombre": "Please Like Me",
        "anio": 32,
        "peso": 6.4
    },
    {
        "nombre": "Sex Education",
        "anio": 16,
        "peso": 23.8
    },
    {
        "nombre": "The Haunting of Hill House",
        "anio": 10,
        "peso": 11.2
    },
    {
        "nombre": "Utopia",
        "anio": 12,
        "peso": 4.2
    }
]

var documentales = [
    {
        "nombre": "Requiem for the American Dream",
        "anio": 2015,
        "peso": 2.4
    },
    {
        "nombre": "BBC - La historia del mundo en 8 horas",
        "anio": "2012",
        "peso": 14.1
    },
    {
        "nombre": "Awake - The Life of Yogananda",
        "anio": 2014,
        "peso": 1
    },
    {
        "nombre": "Citizenfour",
        "anio": 2014,
        "peso": 0.85
    },
    {
        "nombre": "The Game Changers",
        "anio": 2019,
        "peso": 1.61
    }
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