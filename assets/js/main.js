
/* Aufgaben zu Arrays


====== Aufgabe 1.3========
*/

const numberArray = [5, 6, 7, 8, 9, 10]
console.log(numberArray)
console.log(numberArray[3])
console.log(numberArray[0])
console.log(numberArray[5])




/* ========== Aufgabe 1.5 ====== */

const songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California" ]
console.log(songs)

songs.push("Sweet Child O'Mine", "One", "Enjoy the Silence")
console.log(songs)

const totalSongs = songs
console.log(totalSongs)


const besteFuß = ["Pele", "Maradona","Ronaldo", "Messi", "Ronaldinho"]
console.log(besteFuß)

besteFuß.push("Tor1", "Tor2", "Tor3")
 console.log(besteFuß)

 const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists)




/* ===== Aufgabe 1.5.2 ===========  */


const heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]]
console.log(heroUndEnemy)


heroUndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Goast Rider", "Mephisto"]),
/*   */
console.log(heroUndEnemy)

/* 
console.log(heroUndEnemy)

(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0 (2) ['Batman', 'The Joker']
1 (2) ['Professor X', 'Magneto']
2 (2) ['Thor', 'Loki']
3 (2) ['Superman', 'Lex Luthor']
4 (2) ['Wolverine', 'Sabretooth']
5 (2) ['Goast Rider', 'Mephisto']
length
6 [[Prototype]] Array(0) */





/* ====== Aufgabe 1.7 =========== */

const deutscheGerichte = ["Speckkuchen", "Thüringer", "Rostbratwurst", "Quarkkuechlein", "Sauerbraten"]
console.log(deutscheGerichte)

deutscheGerichte.unshift("Sülze", "Hämchen", "Hackbraten", "Strammer Max", "Wildgoulasch")
console.log(deutscheGerichte)

/*
console.log(deutscheGerichte)

(10) ['Sülze', 'Hämchen', 'Hackbraten', 'Strammer Max', 'Wildgoulasch', 'Speckkuchen', 'Thüringer', 'Rostbratwurst', 'Quarkkuechlein', 'Sauerbraten']
0 "Sülze"
1 "Hämchen"
2 "Hackbraten"
3 "Strammer Max"
4 "Wildgoulasch"
5 "Speckkuchen"
6 "Thüringer"
7 "Rostbratwurst"
8 "Quarkkuechlein"
9 "Sauerbraten"
length 10
[[Prototype]] Array(0) */





/* ======== Aufgabe 1.8.========= */


/* const deutscheGerichte = ["Sülze", "Hämchen", "Hackbraten", "Strammer Max", "Wildgoulasch", "Speckkuchen", "Thüringer", "Rostbratwurst", "Quarkkuechlein", "Sauerbraten"] */


const nichtGut = []

nichtGut.unshift(deutscheGerichte.shift())
console.log(nichtGut)

nichtGut.unshift(deutscheGerichte.shift())
nichtGut.unshift(deutscheGerichte.shift())

console.log(nichtGut)

/* console.log(nichtGut)

(3) ['Hackbraten', 'Hämchen', 'Sülze']
0 "Hackbraten"
1 "Hämchen"
2 "Sülze"
length 3 [[Prototype]]
Array(0) */


/* ===== Einzelne Entfernung der Elemente=== 
deutscheGerichte.shift("Sülze")
console.log(deutscheGerichte)

deutscheGerichte.shift("Hämchen")
deutscheGerichte.shift("Hackbraten")
console.log(deutscheGerichte)

const nichtGut = ["Sülze", "Hämchen","Hackbraten"]
console.log(nichtGut) */




/* ====== AUfgabe 1.9 ========== */

const numb = [23, 54, 75]
console.log(numb)


// 5 Werte mit push hinzufügen
numb.push(15, 30, 46, 2, 87)
console.log(numb)

/* (8) -  [23, 54, 75, 15, 30, 46, 2, 87]*/



// 5 Werte mit unshift hinzufügen

numb.unshift(33, 44, 55, 66, 77)
console.log(numb)

/* console.log(numb)  
(13)  - [33, 44, 55, 66, 77, 23, 54, 75, 15, 30, 46, 2, 87] */



// 2 Werte mit pop entfernen

numb.pop()
console.log(numb)

numb.pop()
console.log(numb)

/* (11)  - [33, 44, 55, 66, 77, 23, 54, 75, 15, 30, 46] */



//2 Werte mit shift entfernen
numb.shift()
console.log(numb)

numb.shift()
console.log(numb)

/* console.log(numb)
(9) -  [55, 66, 77, 23, 54, 75, 15, 30, 46] */