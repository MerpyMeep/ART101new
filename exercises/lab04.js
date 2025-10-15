// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

// declaring an object with name myFavoriteCommute
let myFavoriteCommute = {
    type: "Metro Bus",
    route1: "3A",
    route2: 19,
    durationMinutes: 40,
    isReliable: false,
    essentials: ["bus pass", "laptop", "Water bottle", "headphones"],
};

let megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + "<p>My favorite commute posseses such characteristics: type - " + myFavoriteCommute.type + ", route number " + myFavoriteCommute.route1 + " and " + myFavoriteCommute.route2 
+ ", a duration time of " + myFavoriteCommute.durationMinutes + "</p>";

$("#output").html(megaSentence);
