// Base page content
let title = "Field of Flowers";
let description = "Under the sky there appears to be an endless field of flowers. The petals shimmer in the sunlight, and the air hums with life. Step carefully, for every bloom has its own secrets to share";

let elements = ["Fire", "Water", "Wind", "Earth"];

let butterfly = {
    name: "Wanderer",
    description: "A wandering butterfly messenger of blooms",
    image: "https://www.freeiconspng.com/uploads/transparent-butterflies-png-19.png",
};

// Save original main page content
let originalContent = `
<h2>${title}</h2>
<p>${description}</p>
<h3>A Special Bloom: Golden Sunflower</h3>
<img src="https://www.freeiconspng.com/uploads/sunflower-png-13.png" alt="Golden Sunflower" class="random-flower">
<p>A large sunflower with vibrant yellow petals. It blooms only in the presence of sunlight.</p>
`;

// Function to restore main page
function restoreMainPage() {
    $("#output").html(originalContent);
    renderElements(); // restore buttons
    $("#characters").html(`
        <h3>Character: Butterfly</h3>
        <img src="${butterfly.image}" alt="${butterfly.name}">
        <p>${butterfly.description}</p>
    `);
    $("#back-button").remove(); // remove back button
}

// Function to change environment based on element (conditional)
function changeEnvironmentByElement(elementType) {
    // Clear output, characters, and elements
    $("#output").empty();
    $("#characters").empty();
    $("#elements").empty();

    // Conditional logic
    let imgUrl;
    let showButterfly = false;
    let description = `The essence of ${elementType.toLowerCase()} fills the field.`;

    if (elementType === "Fire") {
        imgUrl = "https://media.istockphoto.com/id/183862714/photo/red-hot-flames-of-fire-isolated-on-black.jpg?s=612x612&w=0&k=20&c=5O7-wYB8eTRgpP-Do408bWpwVR9Cd9XcYNWUdXiPgPk=";
        description += " Sparks and flames dance across the petals, warming the field.";
    } else if (elementType === "Water") {
        imgUrl = "https://plus.unsplash.com/premium_photo-1669863914833-85bbca9d730e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000";
        description += " Gentle waves ripple through the flowers.";
    } else if (elementType === "Wind") {
        imgUrl = "https://media.istockphoto.com/id/499376168/photo/stormy-clouds-dramatic-sky.jpg?s=612x612&w=0&k=20&c=sl4QfaE5kSbDfaOx42hhelyIKo6vglHBcJJ9CFFkjDE=";
        description += " The breeze carries petals in a delicate dance.";
    } else if (elementType === "Earth") {
        imgUrl = "https://www.greenpeace.org.au/static/planet4-australiapacific-stateless/2024/02/2ddc4190-gp0strvj1_web_size.jpg";
        description += " The soil is rich and fertile beneath your feet.";
    } else {
        imgUrl = "https://via.placeholder.com/600x400";
    }

    // Update output
    $("#output").html(`
        <h2>${elementType}</h2>
        <img src="${imgUrl}" alt="${elementType}" style="max-width:100%; border-radius:12px;">
        <p>${description}</p>
    `);

    // Show butterfly if allowed
    if (showButterfly) {
        $("#characters").html(`
            <h3>Character: Butterfly</h3>
            <img src="${butterfly.image}" alt="${butterfly.name}">
            <p>${butterfly.description}</p>
        `);
    }

    // Add back button
    let backButton = $('<button id="back-button">Back to Main Page</button>');
    backButton.on("click", restoreMainPage);
    $("#elements").append(backButton);
}

// Function to render element buttons
function renderElements() {
    let $elementsDiv = $("#elements");
    $elementsDiv.empty();
    $elementsDiv.append("<h3>Elements of Nature:</h3>");

    elements.forEach(element => {
        let button = $(`<button class="element-button" id="${element.toUpperCase()}">${element}</button>`);

        // Click triggers conditional function
        button.on("click", () => changeEnvironmentByElement(element));

        $elementsDiv.append(button);
    });
}

// Initialize page
$("#output").html(originalContent);
renderElements();

$("#characters").html(`
    <h3>Character: Butterfly</h3>
    <img src="${butterfly.image}" alt="${butterfly.name}">
    <p>${butterfly.description}</p>
`);

// Decorative butterflies
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
