let title = "Field of Flowers";
let description = "Under the sky there appears to be an endless field of flowers. The petals shimmer in the sunlight, and the air hums with life. Step carefully, for every bloom has its own secrets to share";

let elements = ["Fire", "Water", "Wind", "Earth"];

let butterfly = {
    name: "Wanderer",
    description: "A wandering butterfly messenger of blooms",
    image: "https://www.freeiconspng.com/uploads/transparent-butterflies-png-19.png",
};

$("#output").append(`<h2>${title}</h2>`);
$("#output").append(`<p>${description}</p>`);

$("#elements").append("<h3>Elements of Nature:</h3>");
elements.forEach(element => {
  $("#elements").append(`<p>${element}</p>`); 
});

$("#characters").append("<h3>Character: Butterfly</h3>");
$("#characters").append(`<img src="${butterfly.image}" alt="${butterfly.name}">`);
$("#characters").append(`<p>${butterfly.description}</p>`);

let randomFlower = {
  name: "Golden Sunflower",
  description: "A large sunflower with vibrant yellow petals. It blooms only in the presence of sunlight.",
  image: "https://www.freeiconspng.com/uploads/sunflower-png-13.png"
};

$("#output").append("<h3>A Special Bloom: " + randomFlower.name + "</h3>");
$("#output").append(`<img src="${randomFlower.image}" alt="${randomFlower.name}" class="random-flower">`);
$("#output").append(`<p>${randomFlower.description}</p>`);

const leftButterfly = `<img src="https://www.freeiconspng.com/uploads/vintage-butterfly-blue-green-png-5.png" 
                        alt="Decorative Butterfly Left" 
                        class="decor-butterfly decor-left">`;

const rightButterfly = `<img src="https://www.freeiconspng.com/uploads/vintage-butterfly-blue-green-png-5.png" 
                         alt="Decorative Butterfly Right" 
                         class="decor-butterfly decor-right">`;

$(document).ready(function () {
    $("body").append(leftButterfly);
    $("body").append(rightButterfly);
});

title.style.textAlign = 'center';
description.style.textAlign = 'center';
elements.style.textAlign = 'center';
randomFlower.style.textAlign = 'center';