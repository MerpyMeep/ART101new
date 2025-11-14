// Main content
let title = "Field of Flowers";
let description = "Under the sky there appears to be an endless field of flowers. The petals shimmer in the sunlight, and the air hums with life. Step carefully, for every bloom has its own secrets to share.";

let elements = ["Fire", "Water", "Wind", "Earth"];

let butterfly = {
    name: "Wanderer",
    description: "A wandering butterfly messenger of blooms",
    image: "https://www.freeiconspng.com/uploads/transparent-butterflies-png-19.png"
};

// Save main page content
let originalContent = `
<h2>${title}</h2>
<p>${description}</p>
<h3>A Special Bloom: Golden Sunflower</h3>
<img src="https://www.freeiconspng.com/uploads/sunflower-png-13.png" alt="Golden Sunflower" class="random-flower">
<p>A large sunflower with vibrant yellow petals. It blooms only in the presence of sunlight.</p>
`;

// --- Functions ---

function restoreMainPage() {
    $("#output").html(originalContent);
    renderElements();
    $("#characters").html(`
        <h3>Character: Butterfly</h3>
        <img src="${butterfly.image}" alt="${butterfly.name}">
        <p>${butterfly.description}</p>
    `);
    $("#back-button").remove();
    $("body").css("background-image", "url(https://www.goodfreephotos.com/albums/united-states/texas/austin/blue-flower-field-in-austin-texas.jpg)");
}

// Conditional element pages
function changeEnvironmentByElement(elementType) {
    $("#output").empty();
    $("#characters").empty();
    $("#elements").empty();

    let imgUrl, descriptionText;

    switch(elementType) {
        case "Fire":
            imgUrl = "https://media.istockphoto.com/id/183862714/photo/red-hot-flames-of-fire-isolated-on-black.jpg?s=612x612&w=0&k=20&c=5O7-wYB8eTRgpP-Do408bWpwVR9Cd9XcYNWUdXiPgPk=";
            descriptionText = "Sparks and flames dance across the petals, warming the field.";
            $("body").css("background-image", "linear-gradient(to bottom, #ff9a9e, #fecfef)");
            break;
        case "Water":
            imgUrl = "https://plus.unsplash.com/premium_photo-1669863914833-85bbca9d730e?ixlib=rb-4.1.0";
            descriptionText = "Gentle waves ripple through the flowers.";
            $("body").css("background-image", "linear-gradient(to bottom, #a1c4fd, #c2e9fb)");
            break;
        case "Wind":
            imgUrl = "https://media.istockphoto.com/id/499376168/photo/stormy-clouds-dramatic-sky.jpg?s=612x612&w=0&k=20&c=sl4QfaE5kSbDfaOx42hhelyIKo6vglHBcJJ9CFFkjDE=";
            descriptionText = "The breeze carries petals in a delicate dance.";
            $("body").css("background-image", "linear-gradient(to bottom, #d4fc79, #96e6a1)");
            break;
        case "Earth":
            imgUrl = "https://www.greenpeace.org.au/static/planet4-australiapacific-stateless/2024/02/2ddc4190-gp0strvj1_web_size.jpg";
            descriptionText = "The soil is rich and fertile beneath your feet.";
            $("body").css("background-image", "linear-gradient(to bottom, #fdfbfb, #ebedee)");
            break;
        default:
            imgUrl = "https://via.placeholder.com/600x400";
            descriptionText = "";
            $("body").css("background-image", "url(https://www.goodfreephotos.com/albums/united-states/texas/austin/blue-flower-field-in-austin-texas.jpg)");
    }

    $("#output").html(`
        <h2>${elementType}</h2>
        <img src="${imgUrl}" alt="${elementType}" style="max-width:100%; border-radius:12px;">
        <p>${descriptionText}</p>
    `);

    // Back button
    let backBtn = $('<button id="back-button">Back to Main Page</button>');
    backBtn.on("click", restoreMainPage);
    $("#elements").append(backBtn);
}

// Render element buttons
function renderElements() {
    let $elementsDiv = $("#elements");
    $elementsDiv.empty();
    $elementsDiv.append("<h3>Elements of Nature:</h3>");

    elements.forEach(element => {
        let button = $(`<button class="element-button" id="${element.toUpperCase()}">${element}</button>`);
        button.on("click", () => changeEnvironmentByElement(element));
        $elementsDiv.append(button);
    });
}

// Initialize main page
$(document).ready(function () {
    $("#output").html(originalContent);
    renderElements();
    $("#characters").html(`
        <h3>Character: Butterfly</h3>
        <img src="${butterfly.image}" alt="${butterfly.name}">
        <p>${butterfly.description}</p>
    `);

    // --- Side butterfly interactions ---
    $(".decor-butterfly").on("click", function() {
        $(this).animate({
            top: "-=500px",
            left: "+=" + (Math.random() * 300 - 150) + "px",
            opacity: 0
        }, 1000, function() {
            $(this).remove();
        });
    });

    $(".decor-butterfly").hover(
        function() { $(this).css("transform", "scale(1.5)"); },
        function() { $(this).css("transform", "scale(1)"); }
    );
});

// Sunflower hover effect
$(document).on("mouseenter", ".random-flower", function() {
    $(this).stop().animate(
        {  // animate properties
            width: "450px",
            top: "-=10px"
        }, 
        300
    ).css("transform", "rotate(-5deg)");
});

$(document).on("mouseleave", ".random-flower", function() {
    $(this).stop().animate(
        {  // return to original size
            width: "400px",
            top: "+=10px"
        }, 
        300
    ).css("transform", "rotate(0deg)");
});

$(document).on("mouseenter", ".random-flower", function() {
    $(this).css("filter", "drop-shadow(0 0 15px gold)");
});

$(document).on("mouseleave", ".random-flower", function() {
    $(this).css("filter", "none");
});

$(window).on("scroll", function() {
    let offset = $(this).scrollTop() * 0.03;
    $("#wisteria-border").css("transform", "translateX(" + offset + "px)");
});