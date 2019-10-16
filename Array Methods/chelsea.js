// The market value of the players is in Euro.

let chelseaPlayers = [
    { id: 1, name: "Kepa Arrizabalaga", position: "GK", country: "Spain", market_value: 60000000 },
    { id: 2, name: "Antonio Rudiger", position: "DF", country: "Germany", market_value: 50000000 },
    { id: 3, name: "Marcos Alonso", position: "DF", country: "Spain", market_value: 50000000 },
    { id: 4, name: "Andreas Christensen", position: "DF", country: "Denmark", market_value: 35000000 },
    { id: 5, name: "Jorginho", position: "MF", country: "Italy", market_value: 65000000 },
    { id: 7, name: "Ngolo Kante", position: "MF", country: "France", market_value: 100000000 },
    { id: 8, name: "Ross Barkley", position: "MF", country: "England", market_value: 30000000 },
    { id: 9, name: "Tammy Abraham", position: "ST", country: "England", market_value: 32000000 },
    { id: 10, name: "Willian Borges", position: "MF", country: "Brazil", market_value: 35000000 },
    { id: 11, name: "Pedro Rodrigues", position: "MF", country: "Spain", market_value: 20000000 },
    { id: 12, name: "Ruben Loftus Cheek", position: "MF", country: "England", market_value: 30000000 },
    { id: 13, name: "Willy Caballero", position: "GK", country: "Argentina", market_value: 1000000 },
    { id: 15, name: "Kurt Zouma", position: "DF", country: "France", market_value: 25000000 },
    { id: 17, name: "Mateo Kovacic", position: "MF", country: "Croatia", market_value: 35000000 },
    { id: 18, name: "Olivier Giroud", position: "ST", country: "ST", market_value: 12000000 },
    { id: 19, name: "Mason Mount", position: "MF", country: "England", market_value: 35000000 },
    { id: 20, name: "Callum Hodson Odoi", position: "MF", country: "England", market_value: 35000000 },
    { id: 22, name: "Christian Pulisic", position: "MF", country: "USA", market_value: 60000000 },
    { id: 23, name: "Mitchy Batshuayi", position: "ST", country: "Belgium", market_value: 25000000 },
    { id: 24, name: "Recce James", position: "DF", country: "England", market_value: 7000000 },
    { id: 28, name: "Cesar Azpilicueta", position: "DF", country: "Spain", market_value: 35000000 },
    { id: 29, name: "Fikayo Tomori", position: "DF", country: "England", market_value: 10000000 },
    { id: 31, name: "Jamie Cumming", position: "GK", country: "England", market_value: 1000000 },
    { id: 33, name: "Emerson Palmieri", position: "DF", country: "Italy", market_value: 25000000 },
    { id: 42, name: "Marco Van Ginkel", position: "MF", country: "Holland", market_value: 10000000 },
 ];

//  The first team coach wants the name of all players written in upper case.
let playersUpperCase = chelseaPlayers.map((allplayers)=>allplayers.name.toUpperCase());
console.log(playersUpperCase);

// Frank Lampard only wants info of his strikers displayed on the console
let chelseaStrikers = chelseaPlayers.filter((playerposition) =>{
    if (playerposition.position === "ST") {
        return true;
    } 
})
console.log(chelseaStrikers);

// The coach needs to plan for the next transfer market, he wants to know the market value of the midfield players in his team.
let midfieldValue = chelseaPlayers.filter((midfield) =>{
    if (midfield.position === "MF") {
        return true;
        
    }})
    .reduce((total, midfield) => total + midfield.market_value,0)
    

console.log(midfieldValue);

// The coach also wants to know the market value of all the English players in his squad
let valueOfEnglishPlayers = chelseaPlayers.filter(function(english) {
    if (english.country === "England") {
        return true;
    }
    
})
.reduce(function (total, english) {
    return total + english.market_value;
    
},0)
console.log(valueOfEnglishPlayers);

// The id of each player indicates his jersey number. The club owner wants the details of  players with squad numbers 23 and 19.
let number19And23 = chelseaPlayers.filter(function(jersey) {
    if (jersey.id === 19 || jersey.id === 23){
        return jersey.name;
    }
})

console.log(number19And23);







