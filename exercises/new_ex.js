let count = 0;
let colorIndex = 0;
let mood;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 

$("#needy-button").click(function () { 
    if (count < 5 ) { mood = "fresh and happy"; }
    else if ((count >= 5 ) && (count < 10 )) { mood = "keep pushing"; }
    else { mood = "so tired!"; }
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorIndex] + " - " + mood);
   $("body").css("background-color", colors[colorIndex]);
   count = count + 1;
   colorIndex = colorIndex + 1;
   if (colorIndex == 4) [colorIndex = 0]
});
