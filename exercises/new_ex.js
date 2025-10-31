var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='exercises/images/" + imageName + ".png'>");
   }

}

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
 }

$(".color-button").click( function () {
 
   changeBackground(this.id);

});


function moody (moodyCount){
   let mood="";
   if (moodyCount < 5) { mood = "gresh and happy"; }
   else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;
}

// the button part
$("#needy-button").click(function () {

// move the mood deciding code outside as a seperate function and then call it from here, and use the result of the function for the button message
   let moodMessage=moody(count);

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);

   changeBackground( colors[colorCount] );

   makeImage("Coral"); 
   makeImage("Orchid"); 
   makeImage("Plum"); 


   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

$("#reset-button").click(function () {
    count = 0;
    $("#needy-button").html("click me");
    $("body").css("background-color", "white")
    $("img").remove();
});


